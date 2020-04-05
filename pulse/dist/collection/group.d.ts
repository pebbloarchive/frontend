import State from '../state';
import Collection, { DefaultDataItem } from './collection';
export declare type PrimaryKey = string | number;
export declare type GroupName = string | number;
export declare type Index = Array<PrimaryKey>;
export default class Group<DataType = DefaultDataItem> extends State<Array<PrimaryKey>> {
    private collection;
    masterOutput: Array<any>;
    missingPrimaryKeys: Array<PrimaryKey>;
    computedFunc?: (data: DataType) => DataType;
    get output(): Array<any>;
    constructor(collection: () => Collection);
    build(): void;
    compute(func: (data: DataType) => DataType): void;
    has(primaryKey: PrimaryKey): boolean;
    add(primaryKey: PrimaryKey): void;
}
