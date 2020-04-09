"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("./state");
class Computed extends state_1.default {
    // private cleanup: Set<State> = new Set();
    constructor(instance, func, deps) {
        super(instance, instance().config.computedDefault || null);
        this.instance = instance;
        this.func = func;
        this.deps = deps;
        if (deps)
            deps.forEach(state => state.dep.depend(this));
        this.mutation = () => {
            if (deps)
                return func();
            instance().runtime.trackState = true;
            const computed = func();
            let dependents = instance().runtime.getFoundState();
            dependents.forEach(state => state.dep.depend(this));
            return computed;
        };
        const output = this.mutation();
        this.set(output);
    }
}
exports.Computed = Computed;
exports.default = Computed;
