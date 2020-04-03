const {
	uuid
} = require('./uuid');
const Logger = require('./logger')
let log = require('js-logs');

module.exports = class Gateway {
	constructor() {
		this.connection = null;
		this.ws = null;
		this._intervals = new Set();
		this._timeouts = new Set();
		this.lastHeartbeatAcked = true;
		this.lastPingTimestamp = -1;
		this.ping = -1;
		this.ratelimit = {
			queue: [],
			total: 120,
			remaining: 120,
			time: 60e3,
			timer: null
		};
		this.state = {
			CONNECTING: 0,
			OPEN: 1,
			CLOSING: 2,
			CLOSED: 3
		}
		this.logger = new Logger();
	}

	pack(data) {
		let packed = new Buffer(data, 'binary');
		return packed;
	}

	create(port) {
		const ws = this.ws = new WebSocket(`ws://127.0.0.1:${port}`);
		return ws;
	}

	init(op, d) {
		const payloads = {}
		return new Promise((resolve, reject) => {
			const nonce = uuid();
			const data = JSON.stringify({
				op,
				nonce,
				d
			});

			this.ws.send(data);
			payloads[nonce] = {
				resolve,
				reject
			};
		});
	}

	setInterval(fn, delay, ...args) {
		const interval = setInterval(fn, delay, ...args);
		this._intervals.add(interval);
		return interval;
	}

	setTimeout(fn, delay, ...args) {
		const timeout = setTimeout(() => {
			fn(...args);
			this._timeouts.delete(timeout);
		}, delay);
		this._timeouts.add(timeout);
		return timeout;
	}

	clearInterval(interval) {
		clearInterval(interval);
		this._intervals.delete(interval);
	}

	send(data) {
		this.ratelimit.queue.push(data);
		this.processQueue();
	}

	_send(data) {
		if (!this.ws) {
			this.logger.error('Websocket', 'No Websocket is available.');
			this.destroy();
			return
		}
		this.ws.send(this.pack(data), err => {
			if (err)
				this.logger.error('Websocket', err);
		})

	}

	processQueue() {
		if (this.ratelimit.remaining === 0)
			return;
		if (this.ratelimit.queue.length === 0)
			return;
		if (this.ratelimit.remaining === this.ratelimit.total) {
			this.ratelimit.timer = this.setTimeout(() => {
				this.ratelimit.remaining = this.ratelimit.total;
				this.processQueue();
			}, this.ratelimit.time)
		}
		while (this.ratelimit.remaining > 0) {
			const item = this.ratelimit.queue.shift();
			if (!item)
				return;
			this._send(item);
			this.ratelimit.remaining--;
		}
	}

	sendHeartbeat(tag = 'HeartbeatTimer') {
		if (this.ws.readyState === this.state.CLOSED)
			return this.destroy(4000);
		// this.logger.info('Websocket', `[${tag}] Sending a heartbeat.`)
		this.lastHeartbeatAcked = false;
		this.lastPingTimestamp = Date.now();
		this.wsPing();
		this.logger.msg('Websocket', this.ping)
		this.init('heartbeat')
	}

	wsPing() {
		this.lastHeartbeatAcked = true;
		const latency = Date.now() - this.lastPingTimestamp;
		if (this.lastPingTimestamp > -1)
			// this.logger.info('Websocket', `Latency of ${latency}ms`);
		this.ping = latency;
	}

	destroy(code = 1000) {
		this.logger.error('Websocket', `[DESTROY] ${code}`);

		this.setHeartbeatTimer(-1);

		if (this.ws) {
			if (this.ws.readyState === this.state.OPEN) {
				this.ws.close(code);
			} else {
				// this.logger.info('Websocket', `WS State: ${this.ws.readyState}`);
				this.ws.close(code);
			}
		}
	}

	// debug(msg) {
	// 	console.log(log.white(`[DEBUG] ${msg}`));
	// }

	// error(msg) {
	// 	console.log(log.red(`[ERROR] ${msg}`));
	// }

	setHeartbeatTimer(time) {
		if (time === -1) {
			if (this.heartbeatInterval) {
				// this.logger.info('Websocket', 'Clearing heartbeat interval');
				this.clearInterval(this.heartbeatInterval);
				this.heartbeatInterval = undefined;
			}
			return;
		}
		// this.logger.info('Websocket', `New heartbeat interval for ${time}ms`);
		if (this.heartbeatInterval)
			this.clearInterval(this.heartbeatInterval);
		this.heartbeatInterval = this.setInterval(() => this.sendHeartbeat(), time)
	}

	async connect(force = false, user, pass) {
		const payloads = {}
		if (this.ws && !force)
			return this.logger.error('Websocket', 'Websocket already exists');
		this.create(6969);
		if (!this.ws)
			return this.logger.error('Websocket', 'Websocket is null.');
		this.logger.msg('Websocket', 'Connected to the server on port 6969')
		this.ws.onopen = async (e) => {
			this.setHeartbeatTimer(3000);
			const identify = await this.init('identify', {
				username: user,
				password: pass
			});
			// this.logger.msg('Websocket Authentication', `Welcome ${identify.user.username}!`);
		};
	}

	async newPost(force = false, user, pass, content) {
		if(!this.ws) return this.logger.error('Websocket', 'Websocket server is null');
		// console.log(this.ws)
		this.logger.info('Websocket', `New post created`);
		// this.ws.onopen = async (e) => {
			const post = await this.init('post', {
				username: user,
				password: pass,
				content: content
			// });
		});
	}
}
// }

/*
  Heartbeat = 'heartbeat',
  Identify = 'identify',
  Error = 'error'
}
*/