"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const state_1 = require("./state");
function cleanState(state) {
    return {
        value: state.value,
        previousState: state.previousState,
        isSet: state.isSet,
        dependents: state.dep.deps.size,
        subscribers: state.dep.subs.size,
        name: state.name
    };
}
exports.cleanState = cleanState;
function resetState(items) {
    items.forEach(item => {
        if (item instanceof state_1.default) {
            item.reset();
        }
        else if (item instanceof _1.Collection) {
            // meme
        }
    });
}
exports.resetState = resetState;
function getInstance(state) {
    try {
        if (state.instance)
            return state.instance();
        else
            return globalThis.__pulse;
    }
    catch (e) { }
}
exports.getInstance = getInstance;
function normalizeDeps(deps) {
    return Array.isArray(deps) ? deps : [deps];
}
exports.normalizeDeps = normalizeDeps;
exports.collectionFunctions = [
    'collect',
    'collectByKeys',
    'replaceIndex',
    'getGroup',
    'newGroup',
    'deleteGroup',
    'removeFromGroup',
    'update',
    'increment',
    'decrement',
    'delete',
    'purge',
    'findById',
    'put',
    'move',
    'watchData',
    'cleanse',
    // 'unsubscribe',
    // deprecated
    'remove'
];
exports.copy = val => {
    if (isWatchableObject(val))
        val = Object.assign({}, val);
    else if (Array.isArray(val))
        val = [...val];
    return val;
};
// groups are defined by the user as an array of strings, this converts them into object/keys
function normalizeGroups(groupsAsArray = []) {
    const groups = {};
    for (let i = 0; i < groupsAsArray.length; i++) {
        const groupName = groupsAsArray[i];
        groups[groupName] = [];
    }
    return groups;
}
exports.normalizeGroups = normalizeGroups;
function defineConfig(config, defaults) {
    return Object.assign(Object.assign({}, defaults), config);
}
exports.defineConfig = defineConfig;
function genId() {
    return (Math.random()
        .toString()
        .split('.')[1] + Date.now());
}
exports.genId = genId;
function isWatchableObject(value) {
    function isHTMLElement(obj) {
        try {
            return obj instanceof HTMLElement;
        }
        catch (e) {
            return (typeof obj === 'object' &&
                obj.nodeType === 1 &&
                typeof obj.style === 'object' &&
                typeof obj.ownerDocument === 'object');
        }
    }
    let type = typeof value;
    return value != null && type == 'object' && !isHTMLElement(value) && !Array.isArray(value);
}
exports.isWatchableObject = isWatchableObject;
function normalizeMap(map) {
    return Array.isArray(map)
        ? map.map(key => ({ key, val: key }))
        : Object.keys(map).map(key => ({ key, val: map[key] }));
}
exports.normalizeMap = normalizeMap;
exports.arrayFunctions = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
function cleanse(object) {
    if (!isWatchableObject(object))
        return object;
    const clean = Object.assign({}, object);
    const properties = Object.keys(clean);
    for (let i = 0; i < properties.length; i++) {
        const property = properties[i];
        if (isWatchableObject(clean[property])) {
            clean[property] = cleanse(clean[property]);
        }
    }
    return clean;
}
exports.cleanse = cleanse;
function validateNumber(mutable, amount) {
    if (typeof amount !== 'number' || typeof mutable !== 'number') {
        return false;
    }
    return true;
}
exports.validateNumber = validateNumber;
