/*! For license information please see index.js.LICENSE.txt */
module.exports=(()=>{"use strict";var e={"./lib/api/api.ts":function(e,t){var s=this&&this.__awaiter||function(e,t,s,n){return new(s||(s=Promise))((function(r,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?r(e.value):function adopt(e){return e instanceof s?e:new s((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.API=void 0;const ensureProperHeaders=e=>{let t={};return Object.keys(e).forEach(s=>{t[s.toLowerCase()]=e[s]}),t};class API{constructor(e={options:{}}){this.config=e,e.options&&e.options.headers&&(e.options.headers=ensureProperHeaders(e.options.headers)),e.options||(e.options={})}with(e){let t=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return e.options&&e.options.headers&&(e.options.headers=ensureProperHeaders(Object.assign(Object.assign({},t.config.options.headers),e.options.headers))),t.config=Object.assign(Object.assign({},t.config),e),t}get(e){return this.send("GET",e)}post(e,t){return this.send("POST",e,t)}put(e,t){return this.send("PUT",e,t)}patch(e,t){return this.send("PATCH",e,t)}delete(e,t){return this.send("DELETE",e,t)}send(e,t,n){var r,i,o,a,u;return s(this,void 0,void 0,(function*(){let s,c,l=Object.assign({},this.config);l.options.method=e,l.options.headers||(l.options.headers={});let h=l.options.headers["content-type"]||l.options.headers["Content-Type"];n&&n._parts&&n.getParts?(l.options.body=n,l.options.headers["content-type"]="multipart/form-data"):"object"==typeof n?(l.options.body=JSON.stringify(n),l.options.headers["content-type"]="application/json"):l.options.body=n;let p=this.config.path?"/"+this.config.path:"";s=t.startsWith("http")?t:`${this.config.baseURL?this.config.baseURL:""}${p}/${t}`,l.requestIntercept&&l.requestIntercept(Object.assign(Object.assign({},l.options),{endpoint:s}));let d=!1;if(this.config.timeout){let e;const t=new Promise(t=>{e=setTimeout(()=>{d=!0,t()},this.config.timeout)}),n=new Promise((t,n)=>{fetch(s,this.config.options).then(s=>{clearTimeout(e),t(s)}).catch(n)});c=yield Promise.race([t,n])}else c=yield fetch(s,this.config.options);h&&(l.options.headers["content-type"]=h);let f={status:d?408:null===(r=c)||void 0===r?void 0:r.status,raw:c,data:{},type:(null===(o=null===(i=c)||void 0===i?void 0:i.headers)||void 0===o?void 0:o.get("content-type"))||"text/plain",timedout:d};return(null===(a=f.type)||void 0===a?void 0:a.includes("application/json"))?f.data=yield f.raw.json():"function"==typeof(null===(u=null==f?void 0:f.raw)||void 0===u?void 0:u.text)&&(f.data=yield f.raw.text()),l.responseIntercept&&l.responseIntercept(f),f}))}}t.API=API,t.default=API},"./lib/collection/collection.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Collection=void 0;const n=s("./lib/internal.ts"),r=s("./lib/utils.ts"),i=s("./lib/helpers/deepmerge.ts"),o=s("./lib/utils.ts");class Collection{constructor(e,t){this.instance=e,this.size=0,this.data={},this._groups=new Set,this._selectors=new Set,"function"==typeof t&&(t=t(this)),this.config=r.defineConfig(t,{primaryKey:"id"}),this.config.groups&&this.initSubInstances("groups"),this.config.selectors&&this.initSubInstances("selectors"),!this.config.defaultGroup&&this.config.groups||(this.groups||(this.groups={}),this.createGroup("default"))}initSubInstances(e){const t={},s=Object.keys(this.config[e]);for(const n of s){let s=this.config[e][n];t[n]=s,t[n].name||t[n].key(n)}this[e]=t}Group(e){const t=new n.Group(()=>this,e);return this._groups.add(t),t}Selector(e){const t=new n.Selector(()=>this,e);return this._selectors.add(t),t}createGroup(e,t){if(this.groups[e])return this.groups[e];const s=this.Group(t).key(e);return this.groups[e]=s,s}createSelector(e,t){if(this.selectors[e])return this.selectors[e];const s=this.Selector(t).key(e);return this.selectors[e]=s,s}saveData(e,t){let s=this.config.primaryKey;return e&&e.hasOwnProperty(s)?(this.data[e[s]]&&t?this.data[e[s]].patch(e,{deep:!1}):this.data[e[s]]?this.data[e[s]].set(e):this.data[e[s]]=new n.Data(()=>this,e),this.size++,e[s]):null}collect(e,t,s={}){let n=o.normalizeArray(e);t||(t="default"),(t=o.normalizeArray(t)).forEach(e=>!this.groups[e]&&this.createGroup(e)),n.forEach((e,n)=>{let r=this.saveData(e,s.patch);s.forEachItem&&s.forEachItem(e,r,n),null!==r&&t.forEach(e=>{let t=this.groups[e];t.nextState.includes(r)||t.nextState[s.method||"push"](r)})}),t.forEach(e=>this.instance().runtime.ingest(this.groups[e],this.groups[e].nextState))}findById(e){return e instanceof n.State&&(e=e.value),this.data.hasOwnProperty(e)?this.data[e]:new n.Data(()=>this,void 0)}getValueById(e){let t=this.findById(e).value;return t||(t={}),this.computedFunc?this.computedFunc(t):t}getGroup(e){return this.groups[e]?this.groups[e]:new n.Group(()=>this,[],{name:"dummy"})}update(e,t={},s={}){e instanceof n.State&&(e=e.value),e=e;let o=!1,a=this.data[e],u=this.config.primaryKey;if(!this.data.hasOwnProperty(e))return;const c=a.copy();t[u]&&(o=!0);const l=s.deep?i.deepmerge(c,t):r.shallowmerge(c,t);return a.nextState=l,this.instance().runtime.ingest(a),o&&this.updateDataKey(c[u],l[u]),this.rebuildGroupsThatInclude(l[u]),this.data[l[u]]}compute(e){this.computedFunc=e}put(e,t,s){e=o.normalizeArray(e),(t=o.normalizeArray(t)).forEach(t=>{this.groups.hasOwnProperty(t)&&e.forEach(e=>{this.groups[t].add(e,s)})})}remove(e){return e=o.normalizeArray(e),{fromGroups:t=>this.removeFromGroups(e,t),everywhere:()=>this.deleteData(e,Object.keys(this.groups))}}removeFromGroups(e,t){return e=o.normalizeArray(e),(t=o.normalizeArray(t)).forEach(t=>{e.forEach(e=>{if(!this.groups[t])return;this.getGroup(t).remove(e)})}),!0}deleteData(e,t){return e=o.normalizeArray(e),t=o.normalizeArray(t),e.forEach(e=>{delete this.data[e],t.forEach(t=>{this.groups[t].nextState=this.groups[t].nextState.filter(t=>t!==e)})}),t.forEach(e=>this.instance().runtime.ingest(this.groups[e],this.groups[e].nextState)),!0}updateDataKey(e,t){const s=this.data[e];delete this.data[e],this.data[t]=s;for(let s in this.groups){const n=this.getGroup(s);n._value.includes(e)&&(n.nextState.splice(n.nextState.indexOf(e),1,t),this.instance().runtime.ingest(n))}}rebuildGroupsThatInclude(e){this._groups.forEach(t=>t.has(e)&&this.instance().runtime.ingest(t))}reset(){this.data={},this.size=0;Object.keys(this.groups).forEach(e=>this.groups[e].reset())}}t.Collection=Collection,t.default=Collection},"./lib/collection/data.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Data=void 0;const n=s("./lib/internal.ts");class Data extends n.State{constructor(e,t){super(e().instance,t),this.collection=e,this.type(Object)}}t.Data=Data,t.default=Data},"./lib/collection/group.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Group=void 0;const n=s("./lib/internal.ts"),r=s("./lib/utils.ts");class Group extends n.State{constructor(e,t,s={}){super(e()instanceof n.Pulse?e:e().instance,t||[]),this._masterOutput=[],this.missingPrimaryKeys=[],e()instanceof n.Collection&&(this.collection=e),s.name&&(this.name=s.name),this.type(Array),this.sideEffects=()=>this.build(),this.build()}get index(){return this.value}get output(){return this.instance().runtime.trackState&&this.instance().runtime.foundState.add(this),this._masterOutput}build(){if(this.missingPrimaryKeys=[],!Array.isArray(this._value))return[];let e=this._value.map(e=>{let t=this.collection().data[e];if(t){if(this.computedFunc){return this.computedFunc(t.copy())}if(this.collection().computedFunc){return this.collection().computedFunc(t.copy())}return t.getPublicValue()}this.missingPrimaryKeys.push(e)}).filter(e=>void 0!==e);this._masterOutput=e}has(e){return this.value.includes(e)||!1}get size(){return this.value.length}compute(e){this.computedFunc=e}add(e,t={}){const s=void 0!==(t=r.defineConfig(t,{method:"push",overwrite:!0})).atIndex,n=this.nextState.includes(e);if(t.overwrite)this.nextState=this.nextState.filter(t=>t!==e);else if(n)return this;return s?(t.atIndex>this.nextState.length&&(t.atIndex=this.nextState.length-1),this.nextState.splice(t.atIndex,0,e)):this.nextState[t.method](e),this.set(),this}remove(e){return this.nextState=this.nextState.filter(t=>t!==e),this.set(),this}}t.Group=Group,t.default=Group},"./lib/collection/selector.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Selector=void 0;const n=s("./lib/internal.ts");class Selector extends n.Computed{constructor(e,t){t||(t=0),super(e().instance,()=>findData(e(),t)),this.func=()=>findData(e(),this._masterSelected),this.collection=e,this.type(Object),this._masterSelected=t}set id(e){this._masterSelected=e,this.recompute()}get id(){return this._masterSelected}select(e){this.id=e}persist(e){return this.persistState=!0,this.instance().storage.handleStatePersist(this,e),this}getPersistableValue(){return this.id}}function findData(e,t){let s=e.findById(t).value;return s?s=e.computedFunc?e.computedFunc(s):s:(e.data[t]=new n.Data(()=>e,{id:t}),s=e.findById(t).value),s}t.Selector=Selector,t.default=Selector},"./lib/computed.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Computed=void 0;const n=s("./lib/internal.ts");class Computed extends n.State{constructor(e,t,s){super(e,e().config.computedDefault||null),this.instance=e,this.func=t,this.deps=s,s&&s.forEach(e=>e.dep.depend(this)),!0===e().config.noCore&&this.recompute()}set value(e){console.error("Error: Can not mutate Computed value, please use recompute()")}get value(){return super.value}set bind(e){console.error("Error: Can not bind Computed value")}computeValue(){if(this.deps)return this.func();this.instance().runtime.trackState=!0;const e=this.func();return this.instance().runtime.getFoundState().forEach(e=>e.dep.depend(this)),e}recompute(){this.set(this.computeValue())}reset(){return super.reset(),this.recompute(),this}patch(){return console.error("Error, can not use patch method on Computed since the value is dynamic."),this}persist(e){return console.error("Computed state can not be persisted, remove call to .persist()",e),this}}t.Computed=Computed,t.default=Computed},"./lib/controller.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Controller=void 0;const n=s("./lib/internal.ts");t.Controller=class Controller{constructor(e){this.config=e;for(const e in this.config)this[e]=this.config[e];this.config.collection instanceof n.Collection&&(this.groups=this.config.collection.groups,this.selectors=this.config.collection.selectors);for(const e in this.state)if(e&&this.state[e]instanceof n.State){const t=this.state[e];t.name||t.key(e)}else if(e&&this.state[e]instanceof n.Event){const t=this.state[e];t.config.name||(t.config.name=e)}}root(e){for(const t in e)this[t]=e[t];return this}}},"./lib/dep.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Dep=void 0;class Dep{constructor(e){this.deps=new Set,this.subs=new Set,e&&e.forEach(e=>this.deps.add(e))}depend(e){e.dep!==this&&this.deps.add(e)}}t.Dep=Dep,t.default=Dep},"./lib/event.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Event=void 0;t.Event=class Event{constructor(e,t={}){this.instance=e,this.config=t,this.callbacks=new Set,t.disableAfterUses&&(this.uses=0),t.queue&&(this.queue=[])}on(e){const cleanupFunc=()=>this.unsub(e);return void 0!==this.config.maxSubs&&this.callbacks.size<=this.config.maxSubs?cleanupFunc:this.config.disableAfterUses&&this.uses>this.config.disableAfterUses?(this.disable(),cleanupFunc):(this.callbacks.add(e),cleanupFunc)}emit(e){(void 0===this.config.enabled||this.config.enabled)&&(this.config.throttle?this.handleThrottle(e):this.emitter(e))}disable(){this.config.enabled=!1}emitter(e){this.callbacks.forEach(t=>t(e)),void 0!==this.uses&&this.uses++}unsub(e){this.callbacks.delete(e)}handleThrottle(e){const t=void 0!==this.currentTimeout;if(t&&this.queue)this.queue.push(e),clearTimeout(this.currentTimeout),this.currentTimeout=void 0;else{if(t)return;{const looper=e=>{this.currentTimeout=setTimeout(()=>{this.currentTimeout=void 0,this.emitter(e),this.queue&&this.queue.length>0&&looper(this.queue.shift())},this.config.throttle)};looper(e)}}}}},"./lib/helpers/deepmerge.ts":(e,t)=>{function isSpecial(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function isReactElement(e){return e.$$typeof===s}(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.deepmerge=void 0;var s="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function defaultIsMergeableObject(e){return function isNonNullObject(e){return!!e&&"object"==typeof e}(e)&&!isSpecial(e)}function cloneUnlessOtherwiseSpecified(e,t){return!1!==t.clone&&t.isMergeableObject(e)?deepmerge(function emptyTarget(e){return Array.isArray(e)?[]:{}}(e),e,t):e}function defaultArrayMerge(e,t,s){return e.concat(t).map((function(e){return cloneUnlessOtherwiseSpecified(e,s)}))}function getKeys(e){return Object.keys(e).concat(function getEnumerableOwnPropertySymbols(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function propertyIsOnObject(e,t){try{return t in e}catch(e){return!1}}function mergeObject(e,t,s){var n={};return s.isMergeableObject(e)&&getKeys(e).forEach((function(t){n[t]=cloneUnlessOtherwiseSpecified(e[t],s)})),getKeys(t).forEach((function(r){(function propertyIsUnsafe(e,t){return propertyIsOnObject(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))})(e,r)||(propertyIsOnObject(e,r)&&s.isMergeableObject(t[r])?n[r]=function getMergeFunction(e,t){if(!t.customMerge)return deepmerge;var s=t.customMerge(e);return"function"==typeof s?s:deepmerge}(r,s)(e[r],t[r],s):n[r]=cloneUnlessOtherwiseSpecified(t[r],s))})),n}function deepmerge(e,t,s){(s=s||{}).arrayMerge=s.arrayMerge||defaultArrayMerge,s.isMergeableObject=s.isMergeableObject||defaultIsMergeableObject,s.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var n=Array.isArray(t);return n===Array.isArray(e)?n?s.arrayMerge(e,t,s):mergeObject(e,t,s):cloneUnlessOtherwiseSpecified(t,s)}t.deepmerge=deepmerge},"./lib/helpers/extractAll.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.extractAll=void 0;const n=s("./lib/helpers/isWatchableObj.ts");t.extractAll=function extractAll(e,t){if(t instanceof e)return new Set([e]);if("object"!=typeof t)return new Set;const s=new Set;let r=[t];return function look(){let t=[...r];r=[],t.forEach(t=>{const i=t;for(let o in t)t[o]instanceof e?s.add(i[o]):n.isWatchableObject(t[o])&&r.push(i[o])}),r.length>0&&look()}(),s}},"./lib/helpers/isWatchableObj.ts":(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isWatchableObject=void 0,t.isWatchableObject=function isWatchableObject(e){return null!=e&&"object"==typeof e&&!function isHTMLElement(e){try{return e instanceof HTMLElement}catch(t){return"object"==typeof e&&1===e.nodeType&&"object"==typeof e.style&&"object"==typeof e.ownerDocument}}(e)&&!Array.isArray(e)}},"./lib/index.ts":function(e,t,s){var n=this&&this.__createBinding||(Object.create?function(e,t,s,n){void 0===n&&(n=s),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[s]}})}:function(e,t,s,n){void 0===n&&(n=s),e[n]=t[s]}),r=this&&this.__exportStar||function(e,t){for(var s in e)"default"===s||t.hasOwnProperty(s)||n(t,e,s)};Object.defineProperty(t,"__esModule",{value:!0}),r(s("./lib/internal.ts"),t);const i=s("./lib/internal.ts");t.default=i.Pulse},"./lib/integrations/react.integration.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useEvent=t.usePulse=t.PulseHOC=void 0;const n=s("./lib/internal.ts"),r=s("./lib/utils.ts");t.PulseHOC=function PulseHOC(e,t,s){var i;let o,a;if(t instanceof n.State||Array.isArray(t)){if(o=r.normalizeDeps(t||[]),!s)if(o.length>0){const e=r.getPulseInstance(o[0]);s=e||void 0}else console.warn("Pulse: Please don't pass an empty array!")}else{if("object"!=typeof t)return console.error("Pulse: No Valid PulseHOC properties"),e;if(a=t,!s){const e=Object.keys(a);if(e.length>0){const t=r.getPulseInstance(a[e[0]]);s=t||void 0}else console.warn("Pulse: Please don't pass an empty object!")}}if(!s)return console.error("Pulse: Failed to get Pulse Instance"),e;const u=null===(i=s.integration)||void 0===i?void 0:i.frameworkConstructor;return u?class extends u.Component{constructor(e){if(super(e),this.componentContainer=null,this.updatedProps=this.props,o&&(null==s||s.subController.subscribeWithSubsArray(this,o)),a){const t=null==s?void 0:s.subController.subscribeWithSubsObject(this,a);this.updatedProps=Object.assign(Object.assign({},e),null==t?void 0:t.props),this.state=a}}componentDidMount(){(null==s?void 0:s.config.waitForMount)&&(null==s||s.subController.mount(this))}componentWillUnmount(){null==s||s.subController.unsubscribe(this)}render(){return u.createElement(e,this.updatedProps)}}:(console.error("Pulse: Failed to get Framework Constructor"),e)},t.usePulse=function usePulse(e,t){var s;let n=r.normalizeDeps(e);if(!t){const e=r.getPulseInstance(n[0]);if(!e)return void console.error("Pulse: Failed to get Pulse Instance");t=e}const i=null===(s=t.integration)||void 0===s?void 0:s.frameworkConstructor;if(!i)return void console.error("Pulse: Failed to get Framework Constructor");const[o,a]=i.useState({});return i.useEffect((function(){const e=null==t?void 0:t.subController.subscribeWithSubsArray(()=>{a({})},n);return()=>null==t?void 0:t.subController.unsubscribe(e)}),[]),Array.isArray(e)||1!==n.length?n.map(e=>e.getPublicValue()):n[0].getPublicValue()},t.useEvent=function useEvent(e,t,s){var n;s||(s=e.instance()),(null===(n=s.integration)||void 0===n?void 0:n.frameworkConstructor).useEffect(()=>{const s=e.on(t);return()=>s()},[])},t.default={name:"react",bind(e){},updateMethod(e,t){0!==Object.keys(t).length?(e.updatedProps=Object.assign(Object.assign({},e.updatedProps),t),e.setState(t)):e.forceUpdate()},onReady(e){}}},"./lib/integrations/use.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.use=void 0;const n=s("./lib/integrations/react.integration.ts"),r=s("./lib/integrations/vue.integration.ts"),i={ready:!1};function use(e,t){const s=function getFrameworkName(e){let t="custom";if(!e)return t;if("React"===e.name||e.hasOwnProperty("__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED"))return"react";if("Vue"===e.name)return"vue";if("function"==typeof e)return"vue";return t}(e);switch(s){case"react":integrate(n.default,"react");break;case"vue":integrate(r.default,"vue");break;case"custom":(function validateCustomFramework(e){let t=!0;return["name","bind","updateData"].forEach(s=>{e.hasOwnProperty(s)||(t=!1)}),t})(e)&&integrate(e,"custom")}"custom"!==s&&(i.frameworkConstructor=e),t.integration=i,i.ready?i.bind(t):console.error("Pulse: Failed to integrate with framework! It's possible you didn't call Pulse.use() before new Pulse.")}function integrate(e,t){Object.keys(e).forEach(t=>{i[t]=e[t]}),i.name=e.name||t,i.ready=!0}t.use=use,t.default=use},"./lib/integrations/vue.integration.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.usePulse=void 0;const n=s("./lib/internal.ts");function usePulse(e,t){let s,r;!function(e){e[e.STRING=0]="STRING",e[e.STATE=1]="STATE",e[e.KEYED=2]="KEYED"}(s||(s={})),console.log(this);let i,o=[],a={};if(r=Array.isArray(e)?e:[e],r.forEach(e=>{if("string"==typeof e)this["$"+e]&&(a[e]=this["$"+e]),i||(i=s.STRING);else if(e instanceof n.State)o.push(e),i||(i=s.STATE);else{for(let t in e)e[t]instanceof n.State&&o.push(e[t]);i||(i=s.KEYED)}}),t){if(!t.integration.frameworkConstructor)return}return i===s.STRING?a:i===s.STATE||i===s.KEYED?o:void 0}t.default={name:"vue",bind(e){e.install=(t,s)=>{globalThis.__pulse;e._SSOT={},Object.keys(s).forEach((t,n)=>{e._SSOT["$"+t]=s[t]}),t.mixin({beforeCreate(){e.State&&(this.State=e.State),e.Collection&&(this.Collection=e.Collection),e.API&&(this.API=e.API),e.Computed&&(this.Computed=e.Computed),usePulse&&(this.usePulse=usePulse.bind(e._SSOT)),Object.keys(s).forEach((t,s)=>{this["$"+t]=e._SSOT["$"+t]})},mounted(){},beforeDestroy(){}})}},updateMethod(e,t){for(let s in t)e.$set(e,s,t[s])},onReady(e){const t=e.integration.frameworkConstructor;e.usePulse=t=>usePulse(t,e),t.use(e)}},t.usePulse=usePulse},"./lib/internal.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=s("./lib/pulse.ts");Object.defineProperty(t,"Pulse",{enumerable:!0,get:function(){return n.Pulse}});var r=s("./lib/state.ts");Object.defineProperty(t,"State",{enumerable:!0,get:function(){return r.State}}),Object.defineProperty(t,"StateGroup",{enumerable:!0,get:function(){return r.StateGroup}});var i=s("./lib/computed.ts");Object.defineProperty(t,"Computed",{enumerable:!0,get:function(){return i.Computed}});var o=s("./lib/collection/collection.ts");Object.defineProperty(t,"Collection",{enumerable:!0,get:function(){return o.Collection}});var a=s("./lib/collection/group.ts");Object.defineProperty(t,"Group",{enumerable:!0,get:function(){return a.Group}});var u=s("./lib/collection/selector.ts");Object.defineProperty(t,"Selector",{enumerable:!0,get:function(){return u.Selector}});var c=s("./lib/collection/data.ts");Object.defineProperty(t,"Data",{enumerable:!0,get:function(){return c.Data}});var l=s("./lib/controller.ts");Object.defineProperty(t,"Controller",{enumerable:!0,get:function(){return l.Controller}});var h=s("./lib/event.ts");Object.defineProperty(t,"Event",{enumerable:!0,get:function(){return h.Event}});var p=s("./lib/status.ts");Object.defineProperty(t,"StatusTracker",{enumerable:!0,get:function(){return p.StatusTracker}});var d=s("./lib/api/api.ts");Object.defineProperty(t,"API",{enumerable:!0,get:function(){return d.API}});var f=s("./lib/runtime.ts");Object.defineProperty(t,"Runtime",{enumerable:!0,get:function(){return f.Runtime}});var b=s("./lib/storage.ts");Object.defineProperty(t,"Storage",{enumerable:!0,get:function(){return b.Storage}});var g=s("./lib/dep.ts");Object.defineProperty(t,"Dep",{enumerable:!0,get:function(){return g.Dep}});var m=s("./lib/sub.ts");Object.defineProperty(t,"SubController",{enumerable:!0,get:function(){return m.SubController}}),Object.defineProperty(t,"ComponentContainer",{enumerable:!0,get:function(){return m.ComponentContainer}}),Object.defineProperty(t,"CallbackContainer",{enumerable:!0,get:function(){return m.CallbackContainer}});var y=s("./lib/integrations/use.ts");Object.defineProperty(t,"use",{enumerable:!0,get:function(){return y.use}});var v=s("./lib/integrations/react.integration.ts");Object.defineProperty(t,"usePulse",{enumerable:!0,get:function(){return v.usePulse}}),Object.defineProperty(t,"useEvent",{enumerable:!0,get:function(){return v.useEvent}});var S=s("./lib/integrations/react.integration.ts");Object.defineProperty(t,"PulseHOC",{enumerable:!0,get:function(){return S.PulseHOC}});var _=s("./lib/utils.ts");Object.defineProperty(t,"cleanState",{enumerable:!0,get:function(){return _.cleanState}}),Object.defineProperty(t,"resetState",{enumerable:!0,get:function(){return _.resetState}});var O=s("./lib/storage.ts");Object.defineProperty(t,"persist",{enumerable:!0,get:function(){return O.persist}});var P=s("./lib/helpers/extractAll.ts");Object.defineProperty(t,"extractAll",{enumerable:!0,get:function(){return P.extractAll}});var j=s("./lib/helpers/isWatchableObj.ts");Object.defineProperty(t,"isWatchableObject",{enumerable:!0,get:function(){return j.isWatchableObject}})},"./lib/pulse.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Pulse=t.defaultConfig=void 0;const n=s("./lib/internal.ts");t.defaultConfig={noCore:!1};class Pulse{constructor(e=t.defaultConfig){this.config=e,this.ready=!1,this.controllers={},this.errorHandlers=new Set,this.integration=null,this.computed=new Set,this.core={},this.subController=new n.SubController(this),this.runtime=new n.Runtime(this),this.storage=new n.Storage(()=>this,e.storage),e.framework&&this.initFrameworkIntegration(e.framework),!0===this.config.noCore&&this.onInstanceReady(),this.globalBind()}Core(e){return!this.ready&&e&&this.onInstanceReady(e),this.core}Controller(e){return new n.Controller(e)}State(e){return new n.State(()=>this,e)}Computed(e,t){const s=new n.Computed(()=>this,e,t);return this.computed.add(s),s}Collection(){return e=>new n.Collection(()=>this,e)}Action(e){return()=>e()}API(e){return new n.API(e)}Event(e){return new n.Event(()=>this,e)}EventGroup(e){const t=e(e=>new n.Event(()=>this,e));for(const e in t)t[e].config.name||(t[e].config.name=e);return t}Storage(e){return this.setStorage(e)}StateGroup(e){return n.StateGroup(()=>this,e)}Error(e,t){}reset(e){}onError(e){}nextPulse(e){this.runtime.nextPulse(e)}onInstanceReady(e){if(this.ready=!0,e)for(let t in e)this.core[t]=e[t];this.computed.forEach(e=>e.recompute())}initFrameworkIntegration(e){n.use(e,this)}with(e){return this.initFrameworkIntegration(e),this}setStorage(e){const t=this.storage.persistedState;this.storage=new n.Storage(()=>this,e),this.storage.persistedState=t,this.storage.persistedState.forEach(e=>e.persist(e.name))}globalBind(){try{globalThis.__pulse__||(globalThis.__pulse__=Pulse),globalThis.__pulse__app||(globalThis.__pulse__app=this)}catch(e){}}}t.Pulse=Pulse,t.default=Pulse},"./lib/runtime.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Runtime=void 0;const n=s("./lib/internal.ts"),r=s("./lib/utils.ts");class Runtime{constructor(e){this.currentJob=null,this.jobsQueue=[],this.jobsToRerender=[],this.tasksOnceComplete=[],this.trackState=!1,this.foundState=new Set,this.instance=()=>e}ingest(e,t,s={perform:!0,background:!1}){const r={state:e,newStateValue:t,background:null==s?void 0:s.background};if(void 0===t&&(r.newStateValue=r.state instanceof n.Computed?r.state.computeValue():r.state.nextState),this.jobsQueue.push(r),null==s?void 0:s.perform){const e=this.jobsQueue.shift();e?this.perform(e):console.warn("Pulse: Failed to perform Job ",r)}}perform(e){this.currentJob=e,e.state.previousState=r.copy(e.state._value),e.state.privateWrite(e.newStateValue),this.sideEffects(e.state),e.background||this.jobsToRerender.push(e),this.currentJob=null,this.instance().config.logJobs&&console.log(`Pulse: Completed Job(${e.state.name})`,e),this.jobsQueue.length>0?this.perform(this.jobsQueue.shift()):setTimeout(()=>{this.updateSubscribers()})}sideEffects(e){let t=e.dep;"function"==typeof e.sideEffects&&e.sideEffects();for(let t in e.watchers)"function"==typeof e.watchers[t]&&e.watchers[t](e.getPublicValue());t.deps.forEach(e=>this.ingest(e,void 0,{perform:!1}))}updateSubscribers(){if(!this.instance().integration)return void(this.jobsToRerender=[]);const e=new Set;this.jobsToRerender.forEach(t=>t.state.dep.subs.forEach(s=>{if(s.ready||console.warn("Pulse: SubscriptionContainer isn't ready yet ",s),s.passProps){let e=null;for(let n in s.propStates)s.propStates[n]===t.state&&(e=n);e&&s.propKeysChanged.push(e)}e.add(s)})),e.forEach(e=>{var t,s;e instanceof n.CallbackContainer?e.callback():(null===(t=this.instance().integration)||void 0===t?void 0:t.updateMethod)&&(null===(s=this.instance().integration)||void 0===s||s.updateMethod(e.component,this.formatChangedPropKeys(e)))}),this.instance().config.logJobs&&e.size>0&&console.log("Pulse: Rerendered Components ",e),this.jobsToRerender=[],this.tasksOnceComplete.forEach(e=>"function"==typeof e&&e()),this.tasksOnceComplete=[]}formatChangedPropKeys(e){const t={};return e.propKeysChanged.forEach(s=>{e.propStates&&(t[s]=e.propStates[s].value)}),t}getFoundState(){this.trackState=!1;const e=this.foundState;return this.foundState=new Set,e}nextPulse(e){this.tasksOnceComplete.push(e)}}t.Runtime=Runtime,t.default=Runtime},"./lib/state.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StateGroup=t.State=void 0;const n=s("./lib/internal.ts"),r=s("./lib/utils.ts"),i=s("./lib/helpers/deepmerge.ts");class State{constructor(e,t,s=[]){this.instance=e,this.initialState=t,this._value=null,this.previousState=null,this.nextState=null,this.isSet=!1,this.dep=new n.Dep(s),this.privateWrite(t)}get value(){return this.instance().runtime.trackState&&this.instance().runtime.foundState.add(this),this._value}set bind(e){this.set(e)}get bind(){return this._value}get exists(){return!!this.value}set(e,t={}){return void 0===e?(this.instance().runtime.ingest(this,void 0),this):("function"==typeof e&&(e=e(this._value)),this.typeOfVal&&!this.isCorrectType(e)?(console.warn(`Pulse: Error setting state: Incorrect type (${typeof e}) was provided. Type fixed to ${this.typeOfVal}`),this):(t.background?(this.privateWrite(e),this.sideEffects&&this.sideEffects()):this.instance().runtime.ingest(this,e),this.isSet=!0,this))}getPublicValue(){return void 0!==this.output?this.output:this._value}patch(e,t={}){return"object"!=typeof this._value||(this.nextState=!1===t.deep?r.shallowmerge(this.nextState,e):i.deepmerge(this.nextState,e),this.set()),this}interval(e,t){return setInterval(()=>{this.set(e(this.value))},t||1e3),this}persist(e){return this.persistState=!0,this.instance().storage.handleStatePersist(this,e),this}onNext(e){this.watchers||(this.watchers={}),this.watchers._on_next_=()=>{e(this.getPublicValue()),delete this.watchers._on_next_}}key(e){return!this.name&&this.persistState&&this.persist(e),this.name=e,this}type(e){const t=["String","Boolean","Array","Object","Number"];return"function"==typeof e&&t.includes(e.name)?this.typeOfVal=e.name.toLowerCase():"string"==typeof e&&t.map(e=>e.toLowerCase()).includes(e)&&(this.typeOfVal=e.toLowerCase()),this}watch(e,t){return this.watchers||(this.watchers={}),this.watchers[e]=t,this}removeWatcher(e){return delete this.watchers[e],this}undo(){this.set(this.previousState)}toggle(){return"boolean"==typeof this._value&&this.set(!this._value),this}reset(){return this.isSet=!1,this.previousState=null,this.privateWrite(this.initialState),this.persistState&&this.instance().storage.remove(this.name),this}copy(){return r.copy(this.value)}is(e){return this.value===e}isNot(e){return this.value!==e}privateWrite(e){this._value=r.copy(e),this.nextState=r.copy(e),this.persistState&&this.instance().storage.set(this.name,this.getPersistableValue())}isCorrectType(e){let t=typeof e;return"object"===t&&Array.isArray(e)&&(t="array"),t===this.typeOfVal}destroy(){this.dep.deps.clear(),this.dep.subs.clear()}getPersistableValue(){return this.value}}t.State=State,t.StateGroup=(e,t)=>{let s={};for(let n in t)s[n]=new State(e,t[n]),s[n].name=n;return s},t.default=State},"./lib/status.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.StatusObject=t.StatusTracker=void 0;const n=s("./lib/utils.ts"),r={message:null,status:null};class StatusTracker{constructor(e){this.instance=e,this.state=this.instance().State({})}get all(){return this.state.value}get(e){var t;return null===(t=null==this?void 0:this.state)||void 0===t?void 0:t.value[e]}set(e){return this.state.value[e]||this.state.set(Object.assign(n.copy(this.state.value),{[e]:r})),new StatusObject(this.state,e)}remove(e){if(!this.state.value[e])return;const t=n.copy(this.state.value);t[e]=void 0,delete t[e],this.state.set(t)}clear(e){if(e){if(!this.state.value[e])return;const t=n.copy(this.state.value);return t[e]=r,void this.state.set(t)}this.state.reset()}}t.StatusTracker=StatusTracker;class StatusObject{constructor(e,t){this.state=e,this.key=t}status(e){return this.state.set(Object.assign(n.copy(this.state.value),{[this.key]:{status:"none"===e?null:e}})),this}message(e){return this.state.set(Object.assign(n.copy(this.state.value),{[this.key]:{message:e}})),this}}t.StatusObject=StatusObject,t.default=StatusTracker},"./lib/storage.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.persist=t.Storage=void 0;const n=s("./lib/utils.ts");class Storage{constructor(e,t){this.instance=e,this.storageReady=!1,this.persistedState=new Set,this.config=n.defineConfig(t,{prefix:"pulse",type:"localStorage"}),(this.config.get||this.config.set||this.config.remove)&&(this.config.type="custom");const s=this.getLocalStorage();"localStorage"===this.config.type&&s?(["get","set","remove"].forEach(e=>this.config[e]=s[e+"Item"].bind(s)),this.storageReady=!0):(this.config.type="custom",isFunction(this.config.get)&&isFunction(this.config.set)&&isFunction(this.config.remove)?(void 0===this.config.async&&n.isAsync(this.config.get)&&(this.config.async=!0),this.storageReady=!0):this.storageReady=!1)}get(e){if(this.storageReady){if(this.config.async)return new Promise((t,s)=>{this.config.get(this.getKey(e)).then(e=>{if("string"!=typeof e)return t(e);t(JSON.parse(e))}).catch(s)});try{return JSON.parse(this.config.get(this.getKey(e)))}catch(e){return}}}set(e,t){this.storageReady&&this.config.set(this.getKey(e),JSON.stringify(t))}remove(e){this.storageReady&&this.config.remove(this.getKey(e))}getKey(e){return`_${this.config.prefix}_${e}`}handleStatePersist(e,t){const s=this;if(!t&&e.name)t=e.name;else{if(!t)return;e.name=t}s.persistedState.add(e);const handle=t=>{null===t?s.set(e.name,e.getPersistableValue()):"function"!=typeof e.select||"string"!=typeof t&&"number"!=typeof t?e.instance().runtime.ingest(e,t):e.select(t)};s.config.async?s.get(e.name).then(e=>handle(e)):handle(s.get(e.name))}getLocalStorage(){try{const e=(null===window||void 0===window?void 0:window.localStorage)?window.localStorage:localStorage;return"function"==typeof e.getItem&&e}catch(e){return!1}}}function isFunction(e){return"function"==typeof e}t.Storage=Storage,t.default=Storage,t.persist=function persist(e){e.forEach(e=>e.persist(e.name))}},"./lib/sub.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SubController=t.CallbackContainer=t.ComponentContainer=void 0;const n=s("./lib/collection/collection.ts");class ComponentContainer{constructor(e,t){this.passProps=!1,this.propKeysChanged=[],this.ready=!1,this.subs=new Set([]),this.component=e,t&&(this.subs=t)}}t.ComponentContainer=ComponentContainer;class CallbackContainer extends ComponentContainer{constructor(e,t){super(null,t),this.callback=e}}t.CallbackContainer=CallbackContainer;class SubController{constructor(e){this.components=new Set,this.callbacks=new Set,this.pulseInstance=e}subscribeWithSubsObject(e,t={}){const s=this.registerSubscription(e),n={};return s.passProps=!0,s.propStates=Object.assign({},t),Object.keys(t).forEach(e=>{const r=t[e];s.subs.add(r),r.dep.subs.add(s),n[e]=r.value}),{subscriptionContainer:s,props:n}}subscribeWithSubsArray(e,t=[]){const s=this.registerSubscription(e,t);return t.forEach(e=>{var t;if(e instanceof n.default){const s=e;if(!(null===(t=s.groups)||void 0===t?void 0:t.default))throw"usePulse error, Collection has no default group";e=s.getGroup("default")}s.subs.add(e),e.dep.subs.add(s)}),s}registerSubscription(e,t=[]){if("function"==typeof e){const s=new CallbackContainer(e,new Set(t));return this.callbacks.add(s),s.ready=!0,s}const s=new ComponentContainer(e);return e.componentContainer=s,this.components.add(s),this.pulseInstance.config.waitForMount||(s.ready=!0),s}mount(e){e.componentContainer&&(e.componentContainer.ready=!0)}unsubscribe(e){const unsub=t=>{t.ready=!1,t.subs.forEach(t=>{t.dep.subs.delete(e)})};e instanceof CallbackContainer?unsub(e):e.componentContainer&&unsub(e.componentContainer)}}t.SubController=SubController,t.default=SubController},"./lib/utils.ts":(e,t,s)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeArray=t.validateNumber=t.cleanse=t.normalizeMap=t.isAsync=t.isFunction=t.genId=t.defineConfig=t.shallowmerge=t.normalizeGroups=t.copy=t.normalizeDeps=t.getPulseInstance=t.resetState=t.cleanState=void 0;const n=s("./lib/internal.ts"),r=s("./lib/helpers/extractAll.ts"),i=s("./lib/helpers/isWatchableObj.ts");t.cleanState=function cleanState(e){return{value:e.value,previousState:e.previousState,isSet:e.isSet,dependents:e.dep.deps.size,subscribers:e.dep.subs.size,name:e.name}},t.resetState=function resetState(e){for(const t of e){if(t instanceof n.Collection&&t.reset(),t instanceof n.State)return t.reset();r.extractAll(n.State,t).forEach(e=>e.reset())}},t.getPulseInstance=function getPulseInstance(e){try{return e.instance?e.instance():globalThis.__pulse}catch(e){}},t.normalizeDeps=function normalizeDeps(e){return Array.isArray(e)?e:[e]},t.copy=e=>("object"!=typeof e||(i.isWatchableObject(e)?e=Object.assign({},e):Array.isArray(e)&&(e=[...e])),e),t.normalizeGroups=function normalizeGroups(e=[]){const t={};for(let s=0;s<e.length;s++){t[e[s]]=[]}return t},t.shallowmerge=function shallowmerge(e,t){return Object.keys(t).forEach(s=>{e[s]=t[s]}),e},t.defineConfig=function defineConfig(e,t){return Object.assign(Object.assign({},t),e)},t.genId=function genId(){return Math.random().toString().split(".")[1]+Date.now()},t.isFunction=function isFunction(e){return"function"==typeof e},t.isAsync=function isAsync(e){return"AsyncFunction"===e.constructor.name},t.normalizeMap=function normalizeMap(e){return Array.isArray(e)?e.map(e=>({key:e,val:e})):Object.keys(e).map(t=>({key:t,val:e[t]}))},t.cleanse=function cleanse(e){if(!i.isWatchableObject(e))return e;const t=Object.assign({},e),s=Object.keys(t);for(let e=0;e<s.length;e++){const n=s[e];i.isWatchableObject(t[n])&&(t[n]=cleanse(t[n]))}return t},t.validateNumber=function validateNumber(e,t){return"number"==typeof t&&"number"==typeof e},t.normalizeArray=function normalizeArray(e){return Array.isArray(e)?e:[e]}}},t={};function __webpack_require__(s){if(t[s])return t[s].exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,__webpack_require__),n.exports}return __webpack_require__.m=e,__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={index:0},t=[["./lib/index.ts"]],checkDeferredModules=()=>{};function checkDeferredModulesImpl(){for(var s,n=0;n<t.length;n++){for(var r=t[n],i=!0,o=1;o<r.length;o++){var a=r[o];0!==e[a]&&(i=!1)}i&&(t.splice(n--,1),s=__webpack_require__(__webpack_require__.s=r[0]))}return 0===t.length&&(__webpack_require__.x(),__webpack_require__.x=()=>{}),s}__webpack_require__.x=()=>{__webpack_require__.x=()=>{},s=s.slice();for(var e=0;e<s.length;e++)webpackJsonpCallback(s[e]);return(checkDeferredModules=checkDeferredModulesImpl)()};var webpackJsonpCallback=s=>{for(var r,i,[o,a,u,c]=s,l=0,h=[];l<o.length;l++)i=o[l],__webpack_require__.o(e,i)&&e[i]&&h.push(e[i][0]),e[i]=0;for(r in a)__webpack_require__.o(a,r)&&(__webpack_require__.m[r]=a[r]);for(u&&u(__webpack_require__),n(s);h.length;)h.shift()();return c&&t.push.apply(t,c),checkDeferredModules()},s=globalThis.webpackChunkpulse_framework=globalThis.webpackChunkpulse_framework||[],n=s.push.bind(s);s.push=webpackJsonpCallback})(),__webpack_require__.x()})();