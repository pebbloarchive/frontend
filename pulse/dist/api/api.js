"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ensureProperHeaders = headers => {
    let obj = {};
    Object.keys(headers).forEach(t => {
        obj[t.toLowerCase()] = headers[t];
    });
    return obj;
};
class API {
    constructor(config = { options: {} }) {
        this.config = config;
        if (config.options && config.options.headers) {
            config.options.headers = ensureProperHeaders(config.options.headers);
        }
        if (!config.options)
            config.options = {};
    }
    /**
     * Override API config and request options. Returns a modified instance this API with overrides applied.
     * @param config - O
     */
    with(config) {
        let _this = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
        if (config.options && config.options.headers) {
            config.options.headers = ensureProperHeaders(config.options.headers);
        }
        _this.config = Object.assign(Object.assign({}, _this.config), config);
        return _this;
    }
    get(endpoint) {
        return this.send('GET', endpoint);
    }
    post(endpoint, payload) {
        return this.send('POST', endpoint, payload);
    }
    put(endpoint, payload) {
        return this.send('PUT', endpoint, payload);
    }
    patch(endpoint, payload) {
        return this.send('PATCH', endpoint, payload);
    }
    delete(endpoint, payload) {
        return this.send('DELETE', endpoint, payload);
    }
    send(method, endpoint, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            // initial definitions
            let fullUrl, data, response, config = Object.assign({}, this.config);
            // inject method into request options
            config.options.method = method;
            if (!config.options.headers)
                config.options.headers = {};
            let originalType = config.options.headers['content-type'];
            if (payload && payload._parts && payload.getParts) {
                // inject body if not get method
                config.options.body = payload;
                config.options.headers['content-type'] = 'multipart/form-data';
            }
            else if (typeof payload === 'object') {
                // inject body if not get method
                config.options.body = JSON.stringify(payload);
                config.options.headers['content-type'] = 'application/json';
            }
            else
                config.options.body = payload;
            // construct endpoint
            if (endpoint.startsWith('http'))
                fullUrl = endpoint;
            else
                fullUrl = `${this.config.baseURL}/${endpoint}`;
            if (config.requestIntercept)
                config.requestIntercept(Object.assign(Object.assign({}, config.options), { endpoint: fullUrl }));
            try {
                if (this.config.timeout) {
                    response = yield Promise.race([
                        fetch(fullUrl, this.config.options),
                        setTimeout(() => Promise.reject(() => {
                            const timeoutError = Response.error();
                            timeoutError.timedout = true;
                            return timeoutError;
                        }), this.config.timeout)
                    ]);
                }
                else {
                    response = yield fetch(fullUrl, this.config.options);
                }
            }
            catch (e) {
                response = Response.error();
            }
            // Return the old content type header
            if (originalType)
                config.options.headers['content-type'] = originalType;
            // if we got here, PulseResponse is the actual response object
            let res = response;
            let contentType = res.headers.get('content-type');
            // extract response data
            if (contentType && contentType.indexOf('application/json') !== -1) {
                data = yield res.json();
            }
            else {
                data = yield res.text();
            }
            res.data = data;
            if (config.responseIntercept)
                config.responseIntercept(res);
            return res;
        });
    }
}
exports.default = API;
const NotifyAPI = new API({
    timeout: 500,
    options: {}
});
exports.getChannel = channelId => NotifyAPI.with({
    options: { headers: { ['Content-Type']: 'multipart/form-data' } }
}).get(`channels/${channelId}`);
