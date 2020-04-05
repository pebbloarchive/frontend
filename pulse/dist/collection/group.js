"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../state");
class Group extends state_1.default {
    constructor(collection) {
        super(() => collection().instance(), []);
        this.collection = collection;
        this.masterOutput = [];
        this.missingPrimaryKeys = [];
        this.sideEffects = () => this.build();
        this.mutation = () => this.value;
        // initial build
        this.build();
    }
    get output() {
        if (this.instance().runtime.trackState)
            this.instance().runtime.foundState.add(this);
        return this.masterOutput;
    }
    build() {
        this.missingPrimaryKeys = [];
        let group = this.masterValue
            .map(primaryKey => {
            let data = this.collection().data[primaryKey];
            if (!data) {
                this.missingPrimaryKeys.push(primaryKey);
                return undefined;
            }
            // on each data item in this group, run compute
            if (this.computedFunc) {
                // this.instance().runtime.trackState = true;
                let dataComputed = this.computedFunc(data.copy());
                // let found = this.instance().runtime.getFoundState();
                // found.forEach(dep => this.dep.dynamic.add(dep));
                return dataComputed;
            }
            return data.getPublicValue();
        })
            .filter(item => item !== undefined);
        this.dep.dynamic.forEach(state => state.dep.depend(this));
        this.masterOutput = group;
    }
    compute(func) {
        this.computedFunc = func;
    }
    has(primaryKey) {
        return this.value.includes(primaryKey) || false;
    }
    add(primaryKey) { }
}
exports.default = Group;
