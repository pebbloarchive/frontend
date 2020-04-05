"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../state");
const group_1 = require("./group");
const utils_1 = require("../utils");
const deepmerge_1 = require("../helpers/deepmerge");
const handy_1 = require("../helpers/handy");
const s_1 = require("./s");
// Extend State class for custom logic
class Collection {
    constructor(instance, config) {
        this.instance = instance;
        this.groups = {};
        this.data = {};
        this.size = 0;
        this.config = utils_1.defineConfig(config, {
            primaryKey: 'id',
            groups: []
        });
        // create groups
        if (this.config.groups)
            this.config.groups.forEach(groupName => this.createGroup(groupName));
    }
    // create a group instance on this collection
    createGroup(groupName) {
        if (this.groups.hasOwnProperty(groupName))
            console.error(`Pulse Collection: Group ${groupName} already exists`);
        let group = new group_1.default(() => this);
        group.name = groupName;
        this.groups[groupName] = group;
    }
    // save data directly into collection storage
    saveData(data) {
        let key = this.config.primaryKey;
        this.data[data[key]] = new s_1.default(this, data);
        this.size++;
        return data[key];
    }
    /**
     * Collect iterable data into this collection. Note:
     * - Data items must include a primary key (id)
     * @param {(Array<object>|object)} data - Array of data, or single data object
     * @param {(Array<string>|string)} groups - Array of group names or single group name
     */
    collect(items, groups) {
        let _items = handy_1.normalizeArray(items);
        groups = handy_1.normalizeArray(groups);
        // if any of the groups don't already exist, create them
        groups.forEach(groupName => !this.groups[groupName] && this.createGroup(groupName));
        _items.forEach(item => {
            let key = this.saveData(item);
            groups.forEach(groupName => {
                let group = this.groups[groupName];
                if (!group.value.includes(key))
                    group.nextState.push(key);
            });
        });
        groups.forEach(groupName => this.instance().runtime.ingest(this.groups[groupName], this.groups[groupName].nextState));
    }
    /**
     * Return an item from this collection by primaryKey as Data instance (extends State)
     * @param {(number|string)} primaryKey - The primary key of the data
     */
    findById(id) {
        if (id instanceof state_1.default)
            id = id.value;
        if (!this.data.hasOwnProperty(id)) {
            return new s_1.default(this, undefined);
        }
        return this.data[id];
    }
    /**
     * Return an group from this collection as Group instance (extends State)
     * @param {(number|string)} groupName - The name of your group
     */
    getGroup(groupName) {
        if (this.groups[groupName]) {
            return this.groups[groupName];
        }
        else {
            return new group_1.default(() => this); // return empty group
        }
    }
    /**
     * Update data by id in a Pulse Collection
     * @param {(string|number|State)} updateKey - The primary key of the item to update
     * @param {Object} changes - This object will be deep merged with the original
     */
    update(updateKey, changes = {}) {
        // if State instance passed as updateKey grab the value
        if (updateKey instanceof state_1.default)
            updateKey = updateKey.value;
        updateKey = updateKey;
        // if the primary key is changed, this will be true
        let updateDataKey = false, 
        // define alisas
        data = this.data[updateKey], primary = this.config.primaryKey;
        // if the data does not exist
        if (!this.data.hasOwnProperty(updateKey))
            return;
        // create a copy of the value for mutation
        const currentData = data.copy();
        // if the new object contains a primary key, it means we need to change the primary key
        // on the collection too, however we should defer this until after the new data is ingested into the runtime queue
        if (changes[primary])
            updateDataKey = true;
        // deep merge the new data with the existing data
        const final = deepmerge_1.deepmerge(currentData, changes);
        // assign the merged data to the next state of the State and ingest
        data.nextState = final;
        this.instance().runtime.ingest(data);
        // if the data key has changed move it internally and ammend groups
        if (updateDataKey)
            this.updateDataKey(currentData[primary], final[primary]);
        // return the Data instance
        return this.data[final[primary]];
    }
    compute(func) {
        for (let groupName in this.groups)
            this.groups[groupName].compute(func);
    }
    put(primaryKeys, groupNames, config) {
        config = utils_1.defineConfig(config, {
            method: 'push'
        });
        primaryKeys = handy_1.normalizeArray(primaryKeys);
        groupNames = handy_1.normalizeArray(groupNames);
        groupNames.forEach(groupName => {
            if (!this.groups.hasOwnProperty(groupName))
                return;
            primaryKeys.forEach(key => {
                this.groups[groupName].nextState[config.method](key);
                this.instance().runtime.ingest(this.groups[groupName]);
            });
        });
    }
    /**
     * this is an alias function that returns other functions for removing data from a collection
     */
    remove(primaryKeys) {
        primaryKeys = handy_1.normalizeArray(primaryKeys);
        return {
            fromGroups: (groups) => this.removeFromGroups(primaryKeys, groups),
            everywhere: (groups) => this.deleteData(primaryKeys, groups)
        };
    }
    removeFromGroups(primaryKeys, groups) {
        primaryKeys = handy_1.normalizeArray(primaryKeys);
        groups = handy_1.normalizeArray(groups);
        let groupsToRegen = new Set();
        groups.forEach(groupName => {
            primaryKeys.forEach(primaryKey => {
                if (!this.groups[groupName])
                    return;
                let group = this.getGroup(groupName);
                if (group.has(primaryKey)) {
                    groupsToRegen.add(group);
                }
            });
        });
        groupsToRegen.forEach(group => this.instance().runtime.ingest(group));
        return true;
    }
    deleteData(primaryKeys, groups) {
        primaryKeys = handy_1.normalizeArray(primaryKeys);
        groups = handy_1.normalizeArray(groups);
        return true;
    }
    // public findGroupsToUpdate(primaryKeysChanged: Array<PrimaryKey>) {
    //   let groupsToRegen
    //   for (let groupName in this.groups) {
    //   }
    // }
    updateDataKey(oldKey, newKey) {
        // create copy of data
        const dataCopy = this.data[oldKey];
        // delete old refrence
        delete this.data[oldKey];
        // apply the data in storage
        this.data[newKey] = dataCopy;
        // update groups
        for (let groupName in this.groups) {
            let group = this.groups[groupName];
            // if group does not contain oldKey, continue.
            if (!group.masterValue.includes(oldKey))
                continue;
            // replace the primaryKey at current index
            group.nextState.splice(group.nextState.indexOf(oldKey), 1, newKey);
            // ingest the group
            this.instance().runtime.ingest(group);
        }
    }
}
exports.Collection = Collection;
exports.default = Collection;
