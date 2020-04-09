import Pulse, { Collection } from '.';
import State from './state';
export declare function cleanState(state: State): any;
export declare function resetState(items: Array<State | Collection | any>): void;
export declare function getInstance(state: State): Pulse;
export declare function normalizeDeps(deps: Array<State> | State): State<any>[];
export declare const collectionFunctions: string[];
export declare const copy: (val: any) => any;
export declare function normalizeGroups(groupsAsArray?: any): object;
export declare function defineConfig(config: any, defaults: any): any;
export declare function genId(): string;
export declare function isWatchableObject(value: any): boolean;
export declare function normalizeMap(map: any): {
    key: any;
    val: any;
}[];
export declare const arrayFunctions: string[];
export declare function cleanse(object: any): any;
export declare function validateNumber(mutable: any, amount: any): boolean;
