"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../state");
class Group extends state_1.default {
    constructor(collection, initialIndex) {
        super(() => collection().instance(), initialIndex || []);
        this.collection = collection;
        this._masterOutput = [];
        this.missingPrimaryKeys = [];
        this.type(Array);
        this.sideEffects = () => this.build();
        this.mutation = () => this.value;
        // initial build
        this.build();
    }
    get output() {
        if (this.instance().runtime.trackState)
            this.instance().runtime.foundState.add(this);
        return this._masterOutput;
    }
    build() {
        this.missingPrimaryKeys = [];
        let group = this._masterValue
            .map(primaryKey => {
            let data = this.collection().data[primaryKey];
            if (!data) {
                this.missingPrimaryKeys.push(primaryKey);
                return undefined;
            }
            // on each data item in this group, run compute
            if (this.computedFunc) {
                let dataComputed = this.computedFunc(data.copy());
                return dataComputed;
                // use collection level computed func if local does not exist
            }
            else if (this.collection().computedFunc) {
                let dataComputed = this.collection().computedFunc(data.copy());
                return dataComputed;
            }
            return data.getPublicValue();
        })
            .filter(item => item !== undefined);
        this.dep.dynamic.forEach(state => state.dep.depend(this));
        //@ts-ignore
        this._masterOutput = group;
    }
    has(primaryKey) {
        return this.value.includes(primaryKey) || false;
    }
    compute(func) {
        this.computedFunc = func;
    }
    add(primaryKey) { }
}
exports.Group = Group;
exports.default = Group;
