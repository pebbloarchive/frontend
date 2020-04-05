"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dep {
    constructor(initialDeps) {
        // static
        this.deps = new Set();
        this.subs = new Set();
        this.dynamic = new Set(); // cleanout foriegn deps on update
        if (initialDeps)
            initialDeps.forEach(dep => this.deps.add(dep));
    }
    depend(instance) {
        if (instance.dep === this)
            return;
        this.deps.add(instance);
    }
}
exports.default = Dep;
