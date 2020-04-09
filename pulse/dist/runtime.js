"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const sub_1 = require("./sub");
class Runtime {
    constructor(instance) {
        this.instance = instance;
        this.current = null;
        this.queue = [];
        this.complete = [];
        this.trackState = false;
        this.foundState = new Set();
    }
    ingest(state, newState, perform = true) {
        let job = { state, newState };
        // grab nextState if newState not passed
        if (arguments[1] === undefined)
            job.newState = job.state.nextState;
        this.queue.push(job);
        // if no current job, begin the next!
        if (perform)
            this.perform(this.queue.shift());
    }
    perform(job) {
        // debugger;
        this.current = job;
        job.state.previousState = utils_1.copy(job.state.masterValue);
        // write new value as result of mutation
        job.state.privateWrite(job.newState);
        // set next state for future mutations
        job.state.nextState = utils_1.copy(job.newState);
        // perform side effects
        this.sideEffects(job.state);
        // declare completed
        this.complete.push(job);
        // console.log('job', job);
        this.current = null;
        // continue the loop and perform the next job or update subscribers
        if (this.queue.length > 0)
            this.perform(this.queue.shift());
        else {
            setTimeout(() => {
                this.updateSubscribers();
            });
        }
    }
    sideEffects(state) {
        let dep = state.dep;
        // cleanup dynamic deps
        dep.dynamic.forEach(state => {
            state.dep.deps.delete(dep);
        });
        dep.dynamic = new Set();
        // this should not be used on root state class as it would be overwritten by extentions
        // this is used mainly to cause group to generate its output after changing
        if (typeof state.sideEffects === 'function')
            state.sideEffects();
        // ingest dependents
        dep.deps.forEach(state => {
            this.ingest(state, state.mutation(), false);
        });
    }
    updateSubscribers() {
        let componentsToUpdate = new Set();
        this.complete.forEach(job => job.state.dep.subs.forEach(cC => {
            // for containers that require props to be passed
            if (cC.passProps) {
                let localKey;
                // find the local key for this update by comparing the State instance from this job to the state instances in the mappedStates object
                for (let key in cC.mappedStates)
                    if (cC.mappedStates[key] === job.state)
                        localKey = key;
                // once a matching key is found push it into the SubscriptionContainer
                if (localKey)
                    cC.keysChanged.push(localKey);
            }
            componentsToUpdate.add(cC);
        }));
        // perform component or callback updates
        componentsToUpdate.forEach(cC => {
            // are we dealing with a CallbackContainer?
            if (cC instanceof sub_1.CallbackContainer) {
                // just invoke the callback
                cC.callback();
                // is this a ComponentContainer
            }
            else if (cC instanceof sub_1.ComponentContainer) {
                // call the current intergration's update method
                this.instance.intergration.updateMethod(cC.instance, Runtime.assembleUpdatedValues(cC));
            }
        });
        this.complete = [];
    }
    getFoundState() {
        this.trackState = false;
        const ret = this.foundState;
        this.foundState = new Set();
        return ret;
    }
    static assembleUpdatedValues(cC) {
        let returnObj = {};
        cC.keysChanged.forEach(changedKey => {
            // extract the value from State for changed keys
            returnObj[changedKey] = cC.mappedStates[changedKey].value;
        });
        return returnObj;
    }
}
exports.default = Runtime;
