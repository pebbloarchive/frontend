import Pulse from '../';
import State from '../state';
import Group, { PrimaryKey, GroupName } from './group';
import Data from './data';
export interface DefaultDataItem {
    [key: string]: any;
}
export interface CollectionConfig {
    groups: Array<string>;
    primaryKey: string | number;
    model?: Object;
}
export declare class Collection<DataType = DefaultDataItem> {
    instance: () => Pulse;
    config: CollectionConfig;
    groups: {
        [key: string]: Group<DataType>;
    };
    data: {
        [key: string]: Data<DataType>;
    };
    size: number;
    computedFunc: (data: DataType) => DataType;
    constructor(instance: () => Pulse, config?: CollectionConfig);
    initGroups(): void;
    createGroup(groupName: GroupName, initialIndex?: Array<PrimaryKey>): Group<DataType>;
    saveData(data: DataType): PrimaryKey | null;
    /**
     * Collect iterable data into this collection. Note:
     * - Data items must include a primary key (id)
     * @param {(Array<object>|object)} data - Array of data, or single data object
     * @param {(Array<string>|string)} groups - Array of group names or single group name
     */
    collect(items: DataType | Array<DataType>, groups?: GroupName | Array<GroupName>, config?: {
        method?: 'push' | 'unshift';
    }): void;
    /**
     * Return an item from this collection by primaryKey as Data instance (extends State)
     * @param {(number|string)} primaryKey - The primary key of the data
     */
    findById(id: PrimaryKey | State): Data<DataType>;
    getValueById(id: PrimaryKey | State): DataType;
    /**
     * Return an group from this collection as Group instance (extends State)
     * @param {(number|string)} groupName - The name of your group
     */
    getGroup(groupName: string | number): Group<DataType>;
    /**
     * Update data by id in a Pulse Collection
     * @param {(string|number|State)} updateKey - The primary key of the item to update
     * @param {Object} changes - This object will be deep merged with the original
     */
    update(updateKey: PrimaryKey | State, changes?: Expandable, config?: {
        deep?: boolean;
    }): State;
    compute(func: (data: DataType) => DataType): void;
    put(primaryKeys: PrimaryKey | Array<PrimaryKey>, groupNames: GroupName | Array<GroupName>, config?: {
        method: 'push' | 'unshift';
    }): void;
    /**
     * this is an alias function that returns other functions for removing data from a collection
     */
    remove(primaryKeys: PrimaryKey | Array<PrimaryKey>): RemoveOptions;
    removeFromGroups(primaryKeys: PrimaryKey | Array<PrimaryKey>, groups: GroupName | Array<GroupName>): boolean;
    deleteData(primaryKeys: PrimaryKey | Array<PrimaryKey>, groups: GroupName | Array<GroupName>): boolean;
    private updateDataKey;
    regenGroupsThatInclude(primarykey: PrimaryKey): void;
    reset(): void;
}
export default Collection;
declare type Expandable = {
    [key: string]: any;
};
interface RemoveOptions {
    fromGroups: (groups: string | number | Array<string>) => any;
    everywhere: () => any;
}
