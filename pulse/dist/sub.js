"use strict";
// Global Subscription Controller
// This class handles external components subscribing to Pulse.
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
class ComponentContainer {
    constructor(instance, subs) {
        this.instance = instance;
        this.subs = subs;
        this.ready = true;
        this.passProps = false;
    }
}
exports.ComponentContainer = ComponentContainer;
class CallbackContainer extends ComponentContainer {
    constructor(callback, subs) {
        super(null);
        this.callback = callback;
        this.subs = subs;
    }
}
exports.CallbackContainer = CallbackContainer;
class SubController {
    constructor() {
        this.components = new Set();
        this.callbacks = new Set();
    }
    /**
     * Subscribe to Pulse state WITH return object
     */
    mapToProps(instance, subs = {}) {
        let cC = this.registerComponent(instance);
        let returnProps = {};
        cC.passProps = true;
        cC.mappedStates = Object.assign({}, subs);
        let localKeys = Object.keys(subs);
        localKeys.forEach(key => {
            let state = subs[key];
            if (state instanceof _1.State) {
                cC.subs.add(state);
                state.dep.subs.add(cC);
                returnProps[key] = state.value;
            }
        });
        return { cC, props: returnProps };
    }
    /**
     * Subscribe to Pulse state WITHOUT return object
     */
    subscribe(instance, subs = []) {
        let cC = this.registerComponent(instance, subs);
        subs.forEach(state => {
            if (state instanceof _1.State) {
                cC.subs.add(state);
                state.dep.subs.add(cC);
            }
        });
        return cC;
    }
    // create and return component container
    registerComponent(instance, subs) {
        if (typeof instance === 'function') {
            // is this a callback based subscription?
            let cC = new CallbackContainer(instance, new Set(subs));
            this.callbacks.add(cC);
            return cC;
            // is this a HOC based subscription
        }
        else {
            let cC = new ComponentContainer(instance);
            this.components.add(cC);
            instance.pulseComponentContainer = cC;
            return cC;
        }
    }
    mount(instance) {
        if (!instance.pulseComponentContainer)
            return;
        instance.pulseComponentContainer.ready = true;
    }
    /**
     * Unsubscribe a component or callback
     * @param instance - Either a CallbackContainer or a bound component instance
     */
    unsubscribe(instance) {
        const unsub = (cC) => {
            cC.ready = false;
            // remove component container from subs' dep
            cC.subs.forEach(state => {
                state.dep.subs.delete(cC);
            });
        };
        if (instance instanceof CallbackContainer)
            unsub(instance);
        else if (instance.pulseComponentContainer)
            unsub(instance.pulseComponentContainer);
    }
}
exports.default = SubController;
