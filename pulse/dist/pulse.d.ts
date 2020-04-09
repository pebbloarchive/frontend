import State from './state';
import Computed from './computed';
import Collection from './collection/collection';
import SubController from './sub';
import Runtime from './runtime';
import Storage, { StorageMethods } from './storage';
import API, { apiConfig } from './api/api';
import Group from './collection/group';
import { Intergration } from './intergrations/use';
export interface PulseConfig {
    storagePrefix?: string;
    computedDefault?: any;
    waitForMount?: boolean;
    framework?: any;
    frameworkConstructor?: any;
    storage?: {};
}
export default class Pulse {
    config: PulseConfig;
    runtime: Runtime;
    storage: Storage;
    subController: SubController;
    intergration: Intergration;
    constructor(config?: PulseConfig);
    initFrameworkIntergration(frameworkConstructor: any): void;
    /**
     * Create Pulse API
     * @param config Object
     * @param config.options Object - Typescript default: RequestInit (headers, credentials, mode, etc...)
     * @param config.baseURL String - Url to prepend to endpoints (without trailing slash)
     * @param config.timeout Number - Time to wait for request before throwing error
     */
    API: (config: apiConfig) => API;
    /**
     * Create Pulse state
     * @param initialState Any - the value to initialze a State instance with
     */
    State: <T>(initial: T) => State<T>;
    /**
     * Create many Pulse states at the same time
     * @param stateGroup Object with keys as state name and values as initial state
     */
    StateGroup: (stateGroup: any) => any;
    /**
     * Create a Pulse computed function
     * @param deps Array - An array of state items to depend on
     * @param func Function - A function where the return value is the state, ran every time a dep changes
     */
    Computed: <T>(func: Function, deps?: any[]) => Computed<T>;
    /**
     * Create a Pulse collection
     * @param config object
     * @param config.primaryKey The primary key for the collection.
     * @param config.groups Define groups for this collection.
     */
    Collection: <V>(config: any) => Collection<V>;
    /**
     * Reset to initial state.
     * - Supports: State, Collections and Groups
     * - Removes persisted state from storage.
     * @param Items Array of items to reset
     */
    reset(items: Array<State | Group | Collection>): void;
    setStorage(storageConfig: StorageMethods): void;
    /**
     * Global refrence to the first pulse instance created this runtime
     */
    private globalBind;
}
export declare function persist(items: Array<State>): void;
declare type Ojb = {
    [key: string]: any;
};
export declare function SSR(instance: () => Pulse, tree: Ojb): Ojb;
export {};
