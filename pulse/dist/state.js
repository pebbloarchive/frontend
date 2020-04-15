"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dep_1 = require("./dep");
const utils_1 = require("./utils");
const deepmerge_1 = require("./helpers/deepmerge");
class State {
    constructor(instance, initalState, deps = []) {
        this.instance = instance;
        this.initalState = initalState;
        this._masterValue = null;
        this.watchers = {};
        this.previousState = null;
        this.dep = null;
        this.nextState = null;
        this.isSet = false; // has been changed from inital value
        this.persistState = false;
        this.dep = new dep_1.default(deps);
        this.privateWrite(initalState);
        this.nextState = utils_1.copy(initalState);
    }
    set value(val) {
        this._masterValue = val;
    }
    get value() {
        if (this.instance().runtime.trackState)
            this.instance().runtime.foundState.add(this);
        return this._masterValue;
    }
    set bind(value) {
        this.set(value);
    }
    get bind() {
        return this._masterValue;
    }
    get exists() {
        return !!this.value; // is value truthey or falsey
    }
    /**
     * Directly set state to a new value, if nothing is passed in State.nextState will be used as the next value
     * @param {Object} newState - The new value for this state
     */
    set(newState, options = {}) {
        if (newState === undefined) {
            this.instance().runtime.ingest(this, undefined);
            return this;
        }
        if (this.valueType && !this.isCorrectType(newState)) {
            console.warn(`Pulse: Error setting state: Incorrect type (${typeof newState}) was provided. Type for this state is set to ${this.valueType}`);
            return this;
        }
        // ingest update using most basic mutation method
        if (options.background) {
            this.privateWrite(newState);
            if (this.sideEffects)
                this.sideEffects();
        }
        else {
            this.instance().runtime.ingest(this, newState);
        }
        this.isSet = true;
        return this;
    }
    getPublicValue() {
        if (this.output !== undefined)
            return this.output;
        return this._masterValue;
    }
    patch(targetWithChange, config = {}) {
        if (!(typeof this._masterValue === 'object'))
            return this;
        this.nextState =
            config.deep === false
                ? utils_1.shallowmerge(this.nextState, targetWithChange)
                : deepmerge_1.deepmerge(this.nextState, targetWithChange);
        this.set();
        return this;
    }
    interval(setFunc, ms) {
        setInterval(() => {
            this.set(setFunc(this.value));
        }, ms || 1000);
        return this;
    }
    persist(key) {
        this.persistState = true;
        if (!key && this.name) {
            key = this.name;
        }
        else if (!key) {
            console.warn('Pulse Persist Error: No key provided');
        }
        else {
            this.name = key;
        }
        const storage = this.instance().storage;
        storage.persistedState.add(this);
        if (storage.isPromise) {
            storage.get(this.name).then((val) => {
                if (val === null)
                    storage.set(this.name, this.value);
                this.instance().runtime.ingest(this, val);
            });
        }
        else {
            let value = storage.get(this.name);
            if (value === null)
                storage.set(this.name, this.value);
            else
                this.instance().runtime.ingest(this, value);
        }
        return this;
    }
    // this creates a watcher that will fire a callback then destroy itself after invoking
    onNext(callback) {
        this.watchers['_on_next_'] = () => {
            callback(this.getPublicValue());
            delete this.watchers['_on_next_'];
        };
    }
    key(key) {
        // this.name = key;
        return this;
    }
    type(type) {
        const supportedConstructors = ['String', 'Boolean', 'Array', 'Object', 'Number'];
        if (typeof type === 'function' && supportedConstructors.includes(type.name)) {
            this.valueType = type.name.toLowerCase();
        }
        return this;
    }
    watch(key, callback) {
        if (typeof key !== 'string' || typeof key !== 'number' || typeof callback !== 'function') {
            // console.error('Pulse watch, missing key or function');
        }
        this.watchers[key] = callback;
        return this;
    }
    undo() {
        this.set(this.previousState);
    }
    removeWatcher(key) {
        delete this.watchers[key];
        return this;
    }
    toggle() {
        return this;
    }
    reset() {
        // this should go through runtime, but eh
        this.isSet = false;
        this.previousState = null;
        this.privateWrite(this.initalState);
        if (this.persistState)
            this.instance().storage.remove(this.name);
        return this;
    }
    // returns a fresh copy of the current value
    copy() {
        return utils_1.copy(this.value);
    }
    is(x) {
        return this.value === x;
    }
    isNot(x) {
        return this.value !== x;
    }
    relate(state) {
        if (!Array.isArray(state))
            state = [state];
        // add this to foriegn dep
        state.forEach(state => state && state.dep.depend(this));
        // refrence foriegn dep locally for cleanup
        this.dep.dynamic.add(this);
    }
    // INTERNAL
    privateWrite(value) {
        this._masterValue = utils_1.copy(value);
        this.nextState = utils_1.copy(value);
        if (this.persistState)
            this.instance().storage.set(this.name, value);
    }
    isCorrectType(value) {
        let type = typeof value;
        if (type === 'object' && Array.isArray(value))
            type = 'array';
        return type === this.valueType;
    }
    destroy() {
        this.dep.deps.clear();
        this.dep.subs.clear();
    }
}
exports.State = State;
exports.StateGroup = (instance, stateGroup) => {
    let group = {};
    for (let name in stateGroup) {
        group[name] = new State(instance, stateGroup[name]);
        group[name].name = name;
    }
    return group;
};
exports.default = State;
