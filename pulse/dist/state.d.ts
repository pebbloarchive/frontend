import Dep from './dep';
import Pulse from './pulse';
export declare class State<ValueType = any> {
    instance: () => Pulse;
    initalState: any;
    _masterValue: ValueType;
    set value(val: ValueType);
    get value(): ValueType;
    output?: any;
    watchers: {
        [key: string]: any;
    };
    previousState: ValueType;
    dep: Dep;
    nextState: ValueType;
    isSet: boolean;
    persistState: boolean;
    name?: string;
    valueType?: string;
    sideEffects?: Function;
    mutation?: () => any;
    set bind(value: ValueType);
    get bind(): ValueType;
    get exists(): boolean;
    constructor(instance: () => Pulse, initalState: any, deps?: Array<Dep>);
    /**
     * Directly set state to a new value, if nothing is passed in State.nextState will be used as the next value
     * @param {Object} newState - The new value for this state
     */
    set(newState?: ValueType, options?: {
        background?: boolean;
    }): this;
    getPublicValue(): ValueType;
    patch(targetWithChange: any, config?: {
        deep?: boolean;
    }): this;
    interval(setFunc: (currentValue: any) => any, ms?: number): this;
    persist(key?: string): this;
    onNext(callback: (value: ValueType) => void): void;
    key(key: string): this;
    type(type: any): this;
    watch(key: number | string, callback: (value: any) => void): this;
    undo(): void;
    removeWatcher(key: number | string): this;
    toggle(): this;
    reset(): this;
    copy(): any;
    is(x: any): boolean;
    isNot(x: any): boolean;
    relate(state: State | Array<State>): void;
    privateWrite(value: any): void;
    private isCorrectType;
    destroy(): void;
}
export declare type StateGroupDefault = {
    [key: string]: State | any;
};
export declare const StateGroup: (instance: () => Pulse, stateGroup: Object) => any;
export default State;
