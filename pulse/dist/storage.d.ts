import Pulse, { State } from './';
export interface StorageMethods {
    type?: 'custom' | 'localStorage';
    async?: boolean;
    get?: any;
    set?: any;
    remove?: any;
}
export default class Storage {
    private instance;
    private storageMethods;
    isPromise: boolean;
    private storageReady;
    private storageType;
    private storagePrefix;
    persistedState: Set<State>;
    constructor(instance: () => Pulse, storageMethods?: StorageMethods);
    get(key: any): any;
    set(key: any, value: any): void;
    remove(key: any): void;
    private getKey;
    private check;
    private localStorageAvailable;
}
