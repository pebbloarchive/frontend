(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "../node_modules/@apollo/client/react/ssr/RenderPromises.js":
/*!******************************************************************!*\
  !*** ../node_modules/@apollo/client/react/ssr/RenderPromises.js ***!
  \******************************************************************/
/*! exports provided: RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return RenderPromises; });
function makeDefaultQueryInfo() {
    return {
        seen: false,
        observable: null
    };
}
var RenderPromises = (function () {
    function RenderPromises() {
        this.queryPromises = new Map();
        this.queryInfoTrie = new Map();
    }
    RenderPromises.prototype.registerSSRObservable = function (observable, props) {
        this.lookupQueryInfo(props).observable = observable;
    };
    RenderPromises.prototype.getSSRObservable = function (props) {
        return this.lookupQueryInfo(props).observable;
    };
    RenderPromises.prototype.addQueryPromise = function (queryInstance, finish) {
        var info = this.lookupQueryInfo(queryInstance.getOptions());
        if (!info.seen) {
            this.queryPromises.set(queryInstance.getOptions(), new Promise(function (resolve) {
                resolve(queryInstance.fetchData());
            }));
            return null;
        }
        return finish();
    };
    RenderPromises.prototype.hasPromises = function () {
        return this.queryPromises.size > 0;
    };
    RenderPromises.prototype.consumeAndAwaitPromises = function () {
        var _this = this;
        var promises = [];
        this.queryPromises.forEach(function (promise, queryInstance) {
            _this.lookupQueryInfo(queryInstance).seen = true;
            promises.push(promise);
        });
        this.queryPromises.clear();
        return Promise.all(promises);
    };
    RenderPromises.prototype.lookupQueryInfo = function (props) {
        var queryInfoTrie = this.queryInfoTrie;
        var query = props.query, variables = props.variables;
        var varMap = queryInfoTrie.get(query) || new Map();
        if (!queryInfoTrie.has(query))
            queryInfoTrie.set(query, varMap);
        var variablesString = JSON.stringify(variables);
        var info = varMap.get(variablesString) || makeDefaultQueryInfo();
        if (!varMap.has(variablesString))
            varMap.set(variablesString, info);
        return info;
    };
    return RenderPromises;
}());

//# sourceMappingURL=RenderPromises.js.map

/***/ }),

/***/ "../node_modules/@apollo/client/react/ssr/getDataFromTree.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@apollo/client/react/ssr/getDataFromTree.js ***!
  \*******************************************************************/
/*! exports provided: getDataFromTree, getMarkupFromTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return getDataFromTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return getMarkupFromTree; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "../node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RenderPromises.js */ "../node_modules/@apollo/client/react/ssr/RenderPromises.js");




function getDataFromTree(tree, context) {
    if (context === void 0) { context = {}; }
    return getMarkupFromTree({
        tree: tree,
        context: context,
        renderFunction: __webpack_require__(/*! react-dom/server */ "../node_modules/react-dom/server.browser.js").renderToStaticMarkup
    });
}
function getMarkupFromTree(_a) {
    var tree = _a.tree, _b = _a.context, context = _b === void 0 ? {} : _b, _c = _a.renderFunction, renderFunction = _c === void 0 ? __webpack_require__(/*! react-dom/server */ "../node_modules/react-dom/server.browser.js").renderToStaticMarkup : _c;
    var renderPromises = new _RenderPromises_js__WEBPACK_IMPORTED_MODULE_3__["RenderPromises"]();
    function process() {
        var ApolloContext = Object(_context_index_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
        return new Promise(function (resolve) {
            var element = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ApolloContext.Provider, { value: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), { renderPromises: renderPromises }) }, tree);
            resolve(renderFunction(element));
        }).then(function (html) {
            return renderPromises.hasPromises()
                ? renderPromises.consumeAndAwaitPromises().then(process)
                : html;
        });
    }
    return Promise.resolve().then(process);
}
//# sourceMappingURL=getDataFromTree.js.map

/***/ }),

/***/ "../node_modules/@apollo/client/react/ssr/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/@apollo/client/react/ssr/index.js ***!
  \*********************************************************/
/*! exports provided: getMarkupFromTree, getDataFromTree, renderToStringWithData, RenderPromises */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "../node_modules/@apollo/client/react/ssr/getDataFromTree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMarkupFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDataFromTree", function() { return _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getDataFromTree"]; });

/* harmony import */ var _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderToStringWithData.js */ "../node_modules/@apollo/client/react/ssr/renderToStringWithData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return _renderToStringWithData_js__WEBPACK_IMPORTED_MODULE_1__["renderToStringWithData"]; });

/* harmony import */ var _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RenderPromises.js */ "../node_modules/@apollo/client/react/ssr/RenderPromises.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderPromises", function() { return _RenderPromises_js__WEBPACK_IMPORTED_MODULE_2__["RenderPromises"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../node_modules/@apollo/client/react/ssr/renderToStringWithData.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@apollo/client/react/ssr/renderToStringWithData.js ***!
  \**************************************************************************/
/*! exports provided: renderToStringWithData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderToStringWithData", function() { return renderToStringWithData; });
/* harmony import */ var _getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getDataFromTree.js */ "../node_modules/@apollo/client/react/ssr/getDataFromTree.js");

function renderToStringWithData(component) {
    return Object(_getDataFromTree_js__WEBPACK_IMPORTED_MODULE_0__["getMarkupFromTree"])({
        tree: component,
        renderFunction: __webpack_require__(/*! react-dom/server */ "../node_modules/react-dom/server.browser.js").renderToString
    });
}
//# sourceMappingURL=renderToStringWithData.js.map

/***/ }),

/***/ "../node_modules/react-dom/cjs/react-dom-server.browser.development.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-dom/cjs/react-dom-server.browser.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.1
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "../node_modules/next/dist/build/polyfills/object-assign.js");

// Do not require this module directly! Use normal `invariant` calls with
// template literal strings. The messages will be replaced with error codes
// during build.
function formatProdErrorMessage(code) {
  var url = 'https://reactjs.org/docs/error-decoder.html?invariant=' + code;

  for (var i = 1; i < arguments.length; i++) {
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return "Minified React error #" + code + "; visit " + url + " for the full message or " + 'use the non-minified dev environment for full errors and additional ' + 'helpful warnings.';
}

// TODO: this is special because it gets imported during build.
var ReactVersion = '17.0.1';

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableSuspenseServerRenderer = false;

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var didWarnAboutInvalidateContextType;

{
  didWarnAboutInvalidateContextType = new Set();
}

var emptyObject = {};

{
  Object.freeze(emptyObject);
}

function maskContext(type, context) {
  var contextTypes = type.contextTypes;

  if (!contextTypes) {
    return emptyObject;
  }

  var maskedContext = {};

  for (var contextName in contextTypes) {
    maskedContext[contextName] = context[contextName];
  }

  return maskedContext;
}

function checkContextTypes(typeSpecs, values, location) {
  {
    checkPropTypes(typeSpecs, values, location, 'Component');
  }
}

function validateContextBounds(context, threadID) {
  // If we don't have enough slots in this context to store this threadID,
  // fill it in without leaving any holes to ensure that the VM optimizes
  // this as non-holey index properties.
  // (Note: If `react` package is < 16.6, _threadCount is undefined.)
  for (var i = context._threadCount | 0; i <= threadID; i++) {
    // We assume that this is the same as the defaultValue which might not be
    // true if we're rendering inside a secondary renderer but they are
    // secondary because these use cases are very rare.
    context[i] = context._currentValue2;
    context._threadCount = i + 1;
  }
}
function processContext(type, context, threadID, isClass) {
  if (isClass) {
    var contextType = type.contextType;

    {
      if ('contextType' in type) {
        var isValid = // Allow null for conditional declaration
        contextType === null || contextType !== undefined && contextType.$$typeof === REACT_CONTEXT_TYPE && contextType._context === undefined; // Not a <Context.Consumer>

        if (!isValid && !didWarnAboutInvalidateContextType.has(type)) {
          didWarnAboutInvalidateContextType.add(type);
          var addendum = '';

          if (contextType === undefined) {
            addendum = ' However, it is set to undefined. ' + 'This can be caused by a typo or by mixing up named and default imports. ' + 'This can also happen due to a circular dependency, so ' + 'try moving the createContext() call to a separate file.';
          } else if (typeof contextType !== 'object') {
            addendum = ' However, it is set to a ' + typeof contextType + '.';
          } else if (contextType.$$typeof === REACT_PROVIDER_TYPE) {
            addendum = ' Did you accidentally pass the Context.Provider instead?';
          } else if (contextType._context !== undefined) {
            // <Context.Consumer>
            addendum = ' Did you accidentally pass the Context.Consumer instead?';
          } else {
            addendum = ' However, it is set to an object with keys {' + Object.keys(contextType).join(', ') + '}.';
          }

          error('%s defines an invalid contextType. ' + 'contextType should point to the Context object returned by React.createContext().%s', getComponentName(type) || 'Component', addendum);
        }
      }
    }

    if (typeof contextType === 'object' && contextType !== null) {
      validateContextBounds(contextType, threadID);
      return contextType[threadID];
    }

    {
      var maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, maskedContext, 'context');
        }
      }

      return maskedContext;
    }
  } else {
    {
      var _maskedContext = maskContext(type, context);

      {
        if (type.contextTypes) {
          checkContextTypes(type.contextTypes, _maskedContext, 'context');
        }
      }

      return _maskedContext;
    }
  }
}

var nextAvailableThreadIDs = new Uint16Array(16);

for (var i = 0; i < 15; i++) {
  nextAvailableThreadIDs[i] = i + 1;
}

nextAvailableThreadIDs[15] = 0;

function growThreadCountAndReturnNextAvailable() {
  var oldArray = nextAvailableThreadIDs;
  var oldSize = oldArray.length;
  var newSize = oldSize * 2;

  if (!(newSize <= 0x10000)) {
    {
      throw Error( "Maximum number of concurrent React renderers exceeded. This can happen if you are not properly destroying the Readable provided by React. Ensure that you call .destroy() on it if you no longer want to read from it, and did not read to the end. If you use .pipe() this should be automatic." );
    }
  }

  var newArray = new Uint16Array(newSize);
  newArray.set(oldArray);
  nextAvailableThreadIDs = newArray;
  nextAvailableThreadIDs[0] = oldSize + 1;

  for (var _i = oldSize; _i < newSize - 1; _i++) {
    nextAvailableThreadIDs[_i] = _i + 1;
  }

  nextAvailableThreadIDs[newSize - 1] = 0;
  return oldSize;
}

function allocThreadID() {
  var nextID = nextAvailableThreadIDs[0];

  if (nextID === 0) {
    return growThreadCountAndReturnNextAvailable();
  }

  nextAvailableThreadIDs[0] = nextAvailableThreadIDs[nextID];
  return nextID;
}
function freeThreadID(id) {
  nextAvailableThreadIDs[id] = nextAvailableThreadIDs[0];
  nextAvailableThreadIDs[0] = id;
}

// A reserved attribute.
// It is handled by React separately and shouldn't be written to the DOM.
var RESERVED = 0; // A simple string attribute.
// Attributes that aren't in the filter are presumed to have this type.

var STRING = 1; // A string attribute that accepts booleans in React. In HTML, these are called
// "enumerated" attributes with "true" and "false" as possible values.
// When true, it should be set to a "true" string.
// When false, it should be set to a "false" string.

var BOOLEANISH_STRING = 2; // A real boolean attribute.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.

var BOOLEAN = 3; // An attribute that can be used as a flag as well as with a value.
// When true, it should be present (set either to an empty string or its name).
// When false, it should be omitted.
// For any other value, should be present with that value.

var OVERLOADED_BOOLEAN = 4; // An attribute that must be numeric or parse as a numeric.
// When falsy, it should be removed.

var NUMERIC = 5; // An attribute that must be positive numeric or parse as a positive numeric.
// When falsy, it should be removed.

var POSITIVE_NUMERIC = 6;

/* eslint-disable max-len */
var ATTRIBUTE_NAME_START_CHAR = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
/* eslint-enable max-len */

var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
var ROOT_ATTRIBUTE_NAME = 'data-reactroot';
var VALID_ATTRIBUTE_NAME_REGEX = new RegExp('^[' + ATTRIBUTE_NAME_START_CHAR + '][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty = Object.prototype.hasOwnProperty;
var illegalAttributeNameCache = {};
var validatedAttributeNameCache = {};
function isAttributeNameSafe(attributeName) {
  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName)) {
    return true;
  }

  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) {
    return false;
  }

  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
    validatedAttributeNameCache[attributeName] = true;
    return true;
  }

  illegalAttributeNameCache[attributeName] = true;

  {
    error('Invalid attribute name: `%s`', attributeName);
  }

  return false;
}
function shouldIgnoreAttribute(name, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null) {
    return propertyInfo.type === RESERVED;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (name.length > 2 && (name[0] === 'o' || name[0] === 'O') && (name[1] === 'n' || name[1] === 'N')) {
    return true;
  }

  return false;
}
function shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag) {
  if (propertyInfo !== null && propertyInfo.type === RESERVED) {
    return false;
  }

  switch (typeof value) {
    case 'function': // $FlowIssue symbol is perfectly valid here

    case 'symbol':
      // eslint-disable-line
      return true;

    case 'boolean':
      {
        if (isCustomComponentTag) {
          return false;
        }

        if (propertyInfo !== null) {
          return !propertyInfo.acceptsBooleans;
        } else {
          var prefix = name.toLowerCase().slice(0, 5);
          return prefix !== 'data-' && prefix !== 'aria-';
        }
      }

    default:
      return false;
  }
}
function shouldRemoveAttribute(name, value, propertyInfo, isCustomComponentTag) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, isCustomComponentTag)) {
    return true;
  }

  if (isCustomComponentTag) {
    return false;
  }

  if (propertyInfo !== null) {

    switch (propertyInfo.type) {
      case BOOLEAN:
        return !value;

      case OVERLOADED_BOOLEAN:
        return value === false;

      case NUMERIC:
        return isNaN(value);

      case POSITIVE_NUMERIC:
        return isNaN(value) || value < 1;
    }
  }

  return false;
}
function getPropertyInfo(name) {
  return properties.hasOwnProperty(name) ? properties[name] : null;
}

function PropertyInfoRecord(name, type, mustUseProperty, attributeName, attributeNamespace, sanitizeURL, removeEmptyString) {
  this.acceptsBooleans = type === BOOLEANISH_STRING || type === BOOLEAN || type === OVERLOADED_BOOLEAN;
  this.attributeName = attributeName;
  this.attributeNamespace = attributeNamespace;
  this.mustUseProperty = mustUseProperty;
  this.propertyName = name;
  this.type = type;
  this.sanitizeURL = sanitizeURL;
  this.removeEmptyString = removeEmptyString;
} // When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.


var properties = {}; // These props are reserved by React. They shouldn't be written to the DOM.

var reservedProps = ['children', 'dangerouslySetInnerHTML', // TODO: This prevents the assignment of defaultValue to regular
// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
'defaultValue', 'defaultChecked', 'innerHTML', 'suppressContentEditableWarning', 'suppressHydrationWarning', 'style'];
reservedProps.forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, RESERVED, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // A few React string attributes have a different name.
// This is a mapping from React prop names to the attribute names.

[['acceptCharset', 'accept-charset'], ['className', 'class'], ['htmlFor', 'for'], ['httpEquiv', 'http-equiv']].forEach(function (_ref) {
  var name = _ref[0],
      attributeName = _ref[1];
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" HTML attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).

['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are "enumerated" SVG attributes that accept "true" and "false".
// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.

['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEANISH_STRING, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML boolean attributes.

['allowFullScreen', 'async', // Note: there is a special case that prevents it from being written to the DOM
// on the client side because the browsers are inconsistent. Instead we call focus().
'autoFocus', 'autoPlay', 'controls', 'default', 'defer', 'disabled', 'disablePictureInPicture', 'disableRemotePlayback', 'formNoValidate', 'hidden', 'loop', 'noModule', 'noValidate', 'open', 'playsInline', 'readOnly', 'required', 'reversed', 'scoped', 'seamless', // Microdata
'itemScope'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are the few React props that we set as DOM properties
// rather than attributes. These are all booleans.

['checked', // Note: `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`. We have special logic for handling this.
'multiple', 'muted', 'selected' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, BOOLEAN, true, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that are "overloaded booleans": they behave like
// booleans, but can also accept a string value.

['capture', 'download' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, OVERLOADED_BOOLEAN, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be positive numbers.

['cols', 'rows', 'size', 'span' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, POSITIVE_NUMERIC, false, // mustUseProperty
  name, // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These are HTML attributes that must be numbers.

['rowSpan', 'start'].forEach(function (name) {
  properties[name] = new PropertyInfoRecord(name, NUMERIC, false, // mustUseProperty
  name.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
});
var CAMELIZE = /[\-\:]([a-z])/g;

var capitalize = function (token) {
  return token[1].toUpperCase();
}; // This is a list of all SVG attributes that need special casing, namespacing,
// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.


['accent-height', 'alignment-baseline', 'arabic-form', 'baseline-shift', 'cap-height', 'clip-path', 'clip-rule', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'dominant-baseline', 'enable-background', 'fill-opacity', 'fill-rule', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'glyph-name', 'glyph-orientation-horizontal', 'glyph-orientation-vertical', 'horiz-adv-x', 'horiz-origin-x', 'image-rendering', 'letter-spacing', 'lighting-color', 'marker-end', 'marker-mid', 'marker-start', 'overline-position', 'overline-thickness', 'paint-order', 'panose-1', 'pointer-events', 'rendering-intent', 'shape-rendering', 'stop-color', 'stop-opacity', 'strikethrough-position', 'strikethrough-thickness', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke-width', 'text-anchor', 'text-decoration', 'text-rendering', 'underline-position', 'underline-thickness', 'unicode-bidi', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'vector-effect', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'word-spacing', 'writing-mode', 'xmlns:xlink', 'x-height' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // String SVG attributes with the xlink namespace.

['xlink:actuate', 'xlink:arcrole', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/1999/xlink', false, // sanitizeURL
  false);
}); // String SVG attributes with the xml namespace.

['xml:base', 'xml:lang', 'xml:space' // NOTE: if you add a camelCased prop to this list,
// you'll need to set attributeName to name.toLowerCase()
// instead in the assignment below.
].forEach(function (attributeName) {
  var name = attributeName.replace(CAMELIZE, capitalize);
  properties[name] = new PropertyInfoRecord(name, STRING, false, // mustUseProperty
  attributeName, 'http://www.w3.org/XML/1998/namespace', false, // sanitizeURL
  false);
}); // These attribute exists both in HTML and SVG.
// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.

['tabIndex', 'crossOrigin'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  false, // sanitizeURL
  false);
}); // These attributes accept URLs. These must not allow javascript: URLS.
// These will also need to accept Trusted Types object in the future.

var xlinkHref = 'xlinkHref';
properties[xlinkHref] = new PropertyInfoRecord('xlinkHref', STRING, false, // mustUseProperty
'xlink:href', 'http://www.w3.org/1999/xlink', true, // sanitizeURL
false);
['src', 'href', 'action', 'formAction'].forEach(function (attributeName) {
  properties[attributeName] = new PropertyInfoRecord(attributeName, STRING, false, // mustUseProperty
  attributeName.toLowerCase(), // attributeName
  null, // attributeNamespace
  true, // sanitizeURL
  true);
});

// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space

/* eslint-disable max-len */

var isJavaScriptProtocol = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i;
var didWarn = false;

function sanitizeURL(url) {
  {
    if (!didWarn && isJavaScriptProtocol.test(url)) {
      didWarn = true;

      error('A future version of React will block javascript: URLs as a security precaution. ' + 'Use event handlers instead if you can. If you need to generate unsafe HTML try ' + 'using dangerouslySetInnerHTML instead. React was passed %s.', JSON.stringify(url));
    }
  }
}

// code copied and modified from escape-html

/**
 * Module variables.
 * @private
 */
var matchHtmlRegExp = /["'&<>]/;
/**
 * Escapes special characters and HTML entities in a given html string.
 *
 * @param  {string} string HTML string to escape for later insertion
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34:
        // "
        escape = '&quot;';
        break;

      case 38:
        // &
        escape = '&amp;';
        break;

      case 39:
        // '
        escape = '&#x27;'; // modified from escape-html; used to be '&#39'

        break;

      case 60:
        // <
        escape = '&lt;';
        break;

      case 62:
        // >
        escape = '&gt;';
        break;

      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
} // end code copied and modified from escape-html

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */


function escapeTextForBrowser(text) {
  if (typeof text === 'boolean' || typeof text === 'number') {
    // this shortcircuit helps perf for types that we know will never have
    // special characters, especially given that this function is used often
    // for numeric dom ids.
    return '' + text;
  }

  return escapeHtml(text);
}

/**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */

function quoteAttributeValueForBrowser(value) {
  return '"' + escapeTextForBrowser(value) + '"';
}

function createMarkupForRoot() {
  return ROOT_ATTRIBUTE_NAME + '=""';
}
/**
 * Creates markup for a property.
 *
 * @param {string} name
 * @param {*} value
 * @return {?string} Markup string, or null if the property was invalid.
 */

function createMarkupForProperty(name, value) {
  var propertyInfo = getPropertyInfo(name);

  if (name !== 'style' && shouldIgnoreAttribute(name, propertyInfo, false)) {
    return '';
  }

  if (shouldRemoveAttribute(name, value, propertyInfo, false)) {
    return '';
  }

  if (propertyInfo !== null) {
    var attributeName = propertyInfo.attributeName;
    var type = propertyInfo.type;

    if (type === BOOLEAN || type === OVERLOADED_BOOLEAN && value === true) {
      return attributeName + '=""';
    } else {
      if (propertyInfo.sanitizeURL) {
        value = '' + value;
        sanitizeURL(value);
      }

      return attributeName + '=' + quoteAttributeValueForBrowser(value);
    }
  } else if (isAttributeNameSafe(name)) {
    return name + '=' + quoteAttributeValueForBrowser(value);
  }

  return '';
}
/**
 * Creates markup for a custom property.
 *
 * @param {string} name
 * @param {*} value
 * @return {string} Markup string, or empty string if the property was invalid.
 */

function createMarkupForCustomAttribute(name, value) {
  if (!isAttributeNameSafe(name) || value == null) {
    return '';
  }

  return name + '=' + quoteAttributeValueForBrowser(value);
}

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y // eslint-disable-line no-self-compare
  ;
}

var objectIs = typeof Object.is === 'function' ? Object.is : is;

var currentlyRenderingComponent = null;
var firstWorkInProgressHook = null;
var workInProgressHook = null; // Whether the work-in-progress hook is a re-rendered hook

var isReRender = false; // Whether an update was scheduled during the currently executing render pass.

var didScheduleRenderPhaseUpdate = false; // Lazily created map of render-phase updates

var renderPhaseUpdates = null; // Counter to prevent infinite loops.

var numberOfReRenders = 0;
var RE_RENDER_LIMIT = 25;
var isInHookUserCodeInDev = false; // In DEV, this is the name of the currently executing primitive hook

var currentHookNameInDev;

function resolveCurrentlyRenderingComponent() {
  if (!(currentlyRenderingComponent !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  {
    if (isInHookUserCodeInDev) {
      error('Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. ' + 'You can only call Hooks at the top level of your React function. ' + 'For more information, see ' + 'https://reactjs.org/link/rules-of-hooks');
    }
  }

  return currentlyRenderingComponent;
}

function areHookInputsEqual(nextDeps, prevDeps) {
  if (prevDeps === null) {
    {
      error('%s received a final argument during this render, but not during ' + 'the previous render. Even though the final argument is optional, ' + 'its type cannot change between renders.', currentHookNameInDev);
    }

    return false;
  }

  {
    // Don't bother comparing lengths in prod because these arrays should be
    // passed inline.
    if (nextDeps.length !== prevDeps.length) {
      error('The final argument passed to %s changed size between renders. The ' + 'order and size of this array must remain constant.\n\n' + 'Previous: %s\n' + 'Incoming: %s', currentHookNameInDev, "[" + nextDeps.join(', ') + "]", "[" + prevDeps.join(', ') + "]");
    }
  }

  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++) {
    if (objectIs(nextDeps[i], prevDeps[i])) {
      continue;
    }

    return false;
  }

  return true;
}

function createHook() {
  if (numberOfReRenders > 0) {
    {
      {
        throw Error( "Rendered more hooks than during the previous render" );
      }
    }
  }

  return {
    memoizedState: null,
    queue: null,
    next: null
  };
}

function createWorkInProgressHook() {
  if (workInProgressHook === null) {
    // This is the first hook in the list
    if (firstWorkInProgressHook === null) {
      isReRender = false;
      firstWorkInProgressHook = workInProgressHook = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = firstWorkInProgressHook;
    }
  } else {
    if (workInProgressHook.next === null) {
      isReRender = false; // Append to the end of the list

      workInProgressHook = workInProgressHook.next = createHook();
    } else {
      // There's already a work-in-progress. Reuse it.
      isReRender = true;
      workInProgressHook = workInProgressHook.next;
    }
  }

  return workInProgressHook;
}

function prepareToUseHooks(componentIdentity) {
  currentlyRenderingComponent = componentIdentity;

  {
    isInHookUserCodeInDev = false;
  } // The following should have already been reset
  // didScheduleRenderPhaseUpdate = false;
  // firstWorkInProgressHook = null;
  // numberOfReRenders = 0;
  // renderPhaseUpdates = null;
  // workInProgressHook = null;

}
function finishHooks(Component, props, children, refOrContext) {
  // This must be called after every function component to prevent hooks from
  // being used in classes.
  while (didScheduleRenderPhaseUpdate) {
    // Updates were scheduled during the render phase. They are stored in
    // the `renderPhaseUpdates` map. Call the component again, reusing the
    // work-in-progress hooks and applying the additional updates on top. Keep
    // restarting until no more updates are scheduled.
    didScheduleRenderPhaseUpdate = false;
    numberOfReRenders += 1; // Start over from the beginning of the list

    workInProgressHook = null;
    children = Component(props, refOrContext);
  }

  resetHooksState();
  return children;
} // Reset the internal hooks state if an error occurs while rendering a component

function resetHooksState() {
  {
    isInHookUserCodeInDev = false;
  }

  currentlyRenderingComponent = null;
  didScheduleRenderPhaseUpdate = false;
  firstWorkInProgressHook = null;
  numberOfReRenders = 0;
  renderPhaseUpdates = null;
  workInProgressHook = null;
}

function readContext(context, observedBits) {
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);

  {
    if (isInHookUserCodeInDev) {
      error('Context can only be read while React is rendering. ' + 'In classes, you can read it in the render method or getDerivedStateFromProps. ' + 'In function components, you can read it directly in the function body, but not ' + 'inside Hooks like useReducer() or useMemo().');
    }
  }

  return context[threadID];
}

function useContext(context, observedBits) {
  {
    currentHookNameInDev = 'useContext';
  }

  resolveCurrentlyRenderingComponent();
  var threadID = currentPartialRenderer.threadID;
  validateContextBounds(context, threadID);
  return context[threadID];
}

function basicStateReducer(state, action) {
  // $FlowFixMe: Flow doesn't like mixed types
  return typeof action === 'function' ? action(state) : action;
}

function useState(initialState) {
  {
    currentHookNameInDev = 'useState';
  }

  return useReducer(basicStateReducer, // useReducer has a special case to support lazy useState initializers
  initialState);
}
function useReducer(reducer, initialArg, init) {
  {
    if (reducer !== basicStateReducer) {
      currentHookNameInDev = 'useReducer';
    }
  }

  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();

  if (isReRender) {
    // This is a re-render. Apply the new render phase updates to the previous
    // current hook.
    var queue = workInProgressHook.queue;
    var dispatch = queue.dispatch;

    if (renderPhaseUpdates !== null) {
      // Render phase updates are stored in a map of queue -> linked list
      var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

      if (firstRenderPhaseUpdate !== undefined) {
        renderPhaseUpdates.delete(queue);
        var newState = workInProgressHook.memoizedState;
        var update = firstRenderPhaseUpdate;

        do {
          // Process this render phase update. We don't have to check the
          // priority because it will always be the same as the current
          // render's.
          var action = update.action;

          {
            isInHookUserCodeInDev = true;
          }

          newState = reducer(newState, action);

          {
            isInHookUserCodeInDev = false;
          }

          update = update.next;
        } while (update !== null);

        workInProgressHook.memoizedState = newState;
        return [newState, dispatch];
      }
    }

    return [workInProgressHook.memoizedState, dispatch];
  } else {
    {
      isInHookUserCodeInDev = true;
    }

    var initialState;

    if (reducer === basicStateReducer) {
      // Special case for `useState`.
      initialState = typeof initialArg === 'function' ? initialArg() : initialArg;
    } else {
      initialState = init !== undefined ? init(initialArg) : initialArg;
    }

    {
      isInHookUserCodeInDev = false;
    }

    workInProgressHook.memoizedState = initialState;

    var _queue = workInProgressHook.queue = {
      last: null,
      dispatch: null
    };

    var _dispatch = _queue.dispatch = dispatchAction.bind(null, currentlyRenderingComponent, _queue);

    return [workInProgressHook.memoizedState, _dispatch];
  }
}

function useMemo(nextCreate, deps) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var nextDeps = deps === undefined ? null : deps;

  if (workInProgressHook !== null) {
    var prevState = workInProgressHook.memoizedState;

    if (prevState !== null) {
      if (nextDeps !== null) {
        var prevDeps = prevState[1];

        if (areHookInputsEqual(nextDeps, prevDeps)) {
          return prevState[0];
        }
      }
    }
  }

  {
    isInHookUserCodeInDev = true;
  }

  var nextValue = nextCreate();

  {
    isInHookUserCodeInDev = false;
  }

  workInProgressHook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}

function useRef(initialValue) {
  currentlyRenderingComponent = resolveCurrentlyRenderingComponent();
  workInProgressHook = createWorkInProgressHook();
  var previousRef = workInProgressHook.memoizedState;

  if (previousRef === null) {
    var ref = {
      current: initialValue
    };

    {
      Object.seal(ref);
    }

    workInProgressHook.memoizedState = ref;
    return ref;
  } else {
    return previousRef;
  }
}

function useLayoutEffect(create, inputs) {
  {
    currentHookNameInDev = 'useLayoutEffect';

    error('useLayoutEffect does nothing on the server, because its effect cannot ' + "be encoded into the server renderer's output format. This will lead " + 'to a mismatch between the initial, non-hydrated UI and the intended ' + 'UI. To avoid this, useLayoutEffect should only be used in ' + 'components that render exclusively on the client. ' + 'See https://reactjs.org/link/uselayouteffect-ssr for common fixes.');
  }
}

function dispatchAction(componentIdentity, queue, action) {
  if (!(numberOfReRenders < RE_RENDER_LIMIT)) {
    {
      throw Error( "Too many re-renders. React limits the number of renders to prevent an infinite loop." );
    }
  }

  if (componentIdentity === currentlyRenderingComponent) {
    // This is a render phase update. Stash it in a lazily-created map of
    // queue -> linked list of updates. After this render pass, we'll restart
    // and apply the stashed updates on top of the work-in-progress hook.
    didScheduleRenderPhaseUpdate = true;
    var update = {
      action: action,
      next: null
    };

    if (renderPhaseUpdates === null) {
      renderPhaseUpdates = new Map();
    }

    var firstRenderPhaseUpdate = renderPhaseUpdates.get(queue);

    if (firstRenderPhaseUpdate === undefined) {
      renderPhaseUpdates.set(queue, update);
    } else {
      // Append the update to the end of the list.
      var lastRenderPhaseUpdate = firstRenderPhaseUpdate;

      while (lastRenderPhaseUpdate.next !== null) {
        lastRenderPhaseUpdate = lastRenderPhaseUpdate.next;
      }

      lastRenderPhaseUpdate.next = update;
    }
  }
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
} // TODO Decide on how to implement this hook for server rendering.
// If a mutation occurs during render, consider triggering a Suspense boundary
// and falling back to client rendering.

function useMutableSource(source, getSnapshot, subscribe) {
  resolveCurrentlyRenderingComponent();
  return getSnapshot(source._source);
}

function useDeferredValue(value) {
  resolveCurrentlyRenderingComponent();
  return value;
}

function useTransition() {
  resolveCurrentlyRenderingComponent();

  var startTransition = function (callback) {
    callback();
  };

  return [startTransition, false];
}

function useOpaqueIdentifier() {
  return (currentPartialRenderer.identifierPrefix || '') + 'R:' + (currentPartialRenderer.uniqueID++).toString(36);
}

function noop() {}

var currentPartialRenderer = null;
function setCurrentPartialRenderer(renderer) {
  currentPartialRenderer = renderer;
}
var Dispatcher = {
  readContext: readContext,
  useContext: useContext,
  useMemo: useMemo,
  useReducer: useReducer,
  useRef: useRef,
  useState: useState,
  useLayoutEffect: useLayoutEffect,
  useCallback: useCallback,
  // useImperativeHandle is not run in the server environment
  useImperativeHandle: noop,
  // Effects are not run in the server environment.
  useEffect: noop,
  // Debugging effect
  useDebugValue: noop,
  useDeferredValue: useDeferredValue,
  useTransition: useTransition,
  useOpaqueIdentifier: useOpaqueIdentifier,
  // Subscriptions are not setup in a server environment.
  useMutableSource: useMutableSource
};

var HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
var MATH_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
var Namespaces = {
  html: HTML_NAMESPACE,
  mathml: MATH_NAMESPACE,
  svg: SVG_NAMESPACE
}; // Assumes there is no parent namespace.

function getIntrinsicNamespace(type) {
  switch (type) {
    case 'svg':
      return SVG_NAMESPACE;

    case 'math':
      return MATH_NAMESPACE;

    default:
      return HTML_NAMESPACE;
  }
}
function getChildNamespace(parentNamespace, type) {
  if (parentNamespace == null || parentNamespace === HTML_NAMESPACE) {
    // No (or default) parent namespace: potential entry point.
    return getIntrinsicNamespace(type);
  }

  if (parentNamespace === SVG_NAMESPACE && type === 'foreignObject') {
    // We're leaving SVG.
    return HTML_NAMESPACE;
  } // By default, pass namespace below.


  return parentNamespace;
}

var hasReadOnlyValue = {
  button: true,
  checkbox: true,
  image: true,
  hidden: true,
  radio: true,
  reset: true,
  submit: true
};
function checkControlledValueProps(tagName, props) {
  {
    if (!(hasReadOnlyValue[props.type] || props.onChange || props.onInput || props.readOnly || props.disabled || props.value == null)) {
      error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }

    if (!(props.onChange || props.readOnly || props.disabled || props.checked == null)) {
      error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
    }
  }
}

// For HTML, certain tags should omit their close tag. We keep a list for
// those special-case tags.
var omittedCloseTags = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true // NOTE: menuitem's close tag should be omitted, but that causes problems.

};

// `omittedCloseTags` except that `menuitem` should still have its closing tag.

var voidElementTags = _assign({
  menuitem: true
}, omittedCloseTags);

var HTML = '__html';

function assertValidProps(tag, props) {
  if (!props) {
    return;
  } // Note the use of `==` which checks for null or undefined.


  if (voidElementTags[tag]) {
    if (!(props.children == null && props.dangerouslySetInnerHTML == null)) {
      {
        throw Error( tag + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`." );
      }
    }
  }

  if (props.dangerouslySetInnerHTML != null) {
    if (!(props.children == null)) {
      {
        throw Error( "Can only set one of `children` or `props.dangerouslySetInnerHTML`." );
      }
    }

    if (!(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML)) {
      {
        throw Error( "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information." );
      }
    }
  }

  {
    if (!props.suppressContentEditableWarning && props.contentEditable && props.children != null) {
      error('A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.');
    }
  }

  if (!(props.style == null || typeof props.style === 'object')) {
    {
      throw Error( "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX." );
    }
  }
}

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */

function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}
/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */


var prefixes = ['Webkit', 'ms', 'Moz', 'O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.

Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */

function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
}

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 */

function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

function isCustomComponent(tagName, props) {
  if (tagName.indexOf('-') === -1) {
    return typeof props.is === 'string';
  }

  switch (tagName) {
    // These are reserved SVG and MathML elements.
    // We don't mind this list too much because we expect it to never grow.
    // The alternative is to track the namespace in a few places which is convoluted.
    // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return false;

    default:
      return true;
  }
}

var warnValidStyle = function () {};

{
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
  var msPattern$1 = /^-ms-/;
  var hyphenPattern = /-(.)/g; // style values shouldn't contain a semicolon

  var badStyleValueWithSemicolonPattern = /;\s*$/;
  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var camelize = function (string) {
    return string.replace(hyphenPattern, function (_, character) {
      return character.toUpperCase();
    });
  };

  var warnHyphenatedStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported style property %s. Did you mean %s?', name, // As Andi Smith suggests
    // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
    // is converted to lowercase `ms`.
    camelize(name.replace(msPattern$1, 'ms-')));
  };

  var warnBadVendoredStyleName = function (name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;

    error('Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1));
  };

  var warnStyleValueWithSemicolon = function (name, value) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;

    error("Style property values shouldn't contain a semicolon. " + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function (name, value) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;

    error('`NaN` is an invalid value for the `%s` css style property.', name);
  };

  var warnStyleValueIsInfinity = function (name, value) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;

    error('`Infinity` is an invalid value for the `%s` css style property.', name);
  };

  warnValidStyle = function (name, value) {
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value);
      }
    }
  };
}

var warnValidStyle$1 = warnValidStyle;

var ariaProperties = {
  'aria-current': 0,
  // state
  'aria-details': 0,
  'aria-disabled': 0,
  // state
  'aria-hidden': 0,
  // state
  'aria-invalid': 0,
  // state
  'aria-keyshortcuts': 0,
  'aria-label': 0,
  'aria-roledescription': 0,
  // Widget Attributes
  'aria-autocomplete': 0,
  'aria-checked': 0,
  'aria-expanded': 0,
  'aria-haspopup': 0,
  'aria-level': 0,
  'aria-modal': 0,
  'aria-multiline': 0,
  'aria-multiselectable': 0,
  'aria-orientation': 0,
  'aria-placeholder': 0,
  'aria-pressed': 0,
  'aria-readonly': 0,
  'aria-required': 0,
  'aria-selected': 0,
  'aria-sort': 0,
  'aria-valuemax': 0,
  'aria-valuemin': 0,
  'aria-valuenow': 0,
  'aria-valuetext': 0,
  // Live Region Attributes
  'aria-atomic': 0,
  'aria-busy': 0,
  'aria-live': 0,
  'aria-relevant': 0,
  // Drag-and-Drop Attributes
  'aria-dropeffect': 0,
  'aria-grabbed': 0,
  // Relationship Attributes
  'aria-activedescendant': 0,
  'aria-colcount': 0,
  'aria-colindex': 0,
  'aria-colspan': 0,
  'aria-controls': 0,
  'aria-describedby': 0,
  'aria-errormessage': 0,
  'aria-flowto': 0,
  'aria-labelledby': 0,
  'aria-owns': 0,
  'aria-posinset': 0,
  'aria-rowcount': 0,
  'aria-rowindex': 0,
  'aria-rowspan': 0,
  'aria-setsize': 0
};

var warnedProperties = {};
var rARIA = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
var rARIACamel = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

function validateProperty(tagName, name) {
  {
    if (hasOwnProperty$1.call(warnedProperties, name) && warnedProperties[name]) {
      return true;
    }

    if (rARIACamel.test(name)) {
      var ariaName = 'aria-' + name.slice(4).toLowerCase();
      var correctName = ariaProperties.hasOwnProperty(ariaName) ? ariaName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (correctName == null) {
        error('Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.', name);

        warnedProperties[name] = true;
        return true;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== correctName) {
        error('Invalid ARIA attribute `%s`. Did you mean `%s`?', name, correctName);

        warnedProperties[name] = true;
        return true;
      }
    }

    if (rARIA.test(name)) {
      var lowerCasedName = name.toLowerCase();
      var standardName = ariaProperties.hasOwnProperty(lowerCasedName) ? lowerCasedName : null; // If this is an aria-* attribute, but is not listed in the known DOM
      // DOM properties, then it is an invalid aria-* attribute.

      if (standardName == null) {
        warnedProperties[name] = true;
        return false;
      } // aria-* attributes should be lowercase; suggest the lowercase version.


      if (name !== standardName) {
        error('Unknown ARIA attribute `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties[name] = true;
        return true;
      }
    }
  }

  return true;
}

function warnInvalidARIAProps(type, props) {
  {
    var invalidProps = [];

    for (var key in props) {
      var isValid = validateProperty(type, key);

      if (!isValid) {
        invalidProps.push(key);
      }
    }

    var unknownPropString = invalidProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (invalidProps.length === 1) {
      error('Invalid aria prop %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    } else if (invalidProps.length > 1) {
      error('Invalid aria props %s on <%s> tag. ' + 'For details, see https://reactjs.org/link/invalid-aria-props', unknownPropString, type);
    }
  }
}

function validateProperties(type, props) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnInvalidARIAProps(type, props);
}

var didWarnValueNull = false;
function validateProperties$1(type, props) {
  {
    if (type !== 'input' && type !== 'textarea' && type !== 'select') {
      return;
    }

    if (props != null && props.value === null && !didWarnValueNull) {
      didWarnValueNull = true;

      if (type === 'select' && props.multiple) {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty array when `multiple` is set to `true` ' + 'to clear the component or `undefined` for uncontrolled components.', type);
      } else {
        error('`value` prop on `%s` should not be null. ' + 'Consider using an empty string to clear the component or `undefined` ' + 'for uncontrolled components.', type);
      }
    }
  }
}

// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var possibleStandardNames = {
  // HTML
  accept: 'accept',
  acceptcharset: 'acceptCharset',
  'accept-charset': 'acceptCharset',
  accesskey: 'accessKey',
  action: 'action',
  allowfullscreen: 'allowFullScreen',
  alt: 'alt',
  as: 'as',
  async: 'async',
  autocapitalize: 'autoCapitalize',
  autocomplete: 'autoComplete',
  autocorrect: 'autoCorrect',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  autosave: 'autoSave',
  capture: 'capture',
  cellpadding: 'cellPadding',
  cellspacing: 'cellSpacing',
  challenge: 'challenge',
  charset: 'charSet',
  checked: 'checked',
  children: 'children',
  cite: 'cite',
  class: 'className',
  classid: 'classID',
  classname: 'className',
  cols: 'cols',
  colspan: 'colSpan',
  content: 'content',
  contenteditable: 'contentEditable',
  contextmenu: 'contextMenu',
  controls: 'controls',
  controlslist: 'controlsList',
  coords: 'coords',
  crossorigin: 'crossOrigin',
  dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
  data: 'data',
  datetime: 'dateTime',
  default: 'default',
  defaultchecked: 'defaultChecked',
  defaultvalue: 'defaultValue',
  defer: 'defer',
  dir: 'dir',
  disabled: 'disabled',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  download: 'download',
  draggable: 'draggable',
  enctype: 'encType',
  enterkeyhint: 'enterKeyHint',
  for: 'htmlFor',
  form: 'form',
  formmethod: 'formMethod',
  formaction: 'formAction',
  formenctype: 'formEncType',
  formnovalidate: 'formNoValidate',
  formtarget: 'formTarget',
  frameborder: 'frameBorder',
  headers: 'headers',
  height: 'height',
  hidden: 'hidden',
  high: 'high',
  href: 'href',
  hreflang: 'hrefLang',
  htmlfor: 'htmlFor',
  httpequiv: 'httpEquiv',
  'http-equiv': 'httpEquiv',
  icon: 'icon',
  id: 'id',
  innerhtml: 'innerHTML',
  inputmode: 'inputMode',
  integrity: 'integrity',
  is: 'is',
  itemid: 'itemID',
  itemprop: 'itemProp',
  itemref: 'itemRef',
  itemscope: 'itemScope',
  itemtype: 'itemType',
  keyparams: 'keyParams',
  keytype: 'keyType',
  kind: 'kind',
  label: 'label',
  lang: 'lang',
  list: 'list',
  loop: 'loop',
  low: 'low',
  manifest: 'manifest',
  marginwidth: 'marginWidth',
  marginheight: 'marginHeight',
  max: 'max',
  maxlength: 'maxLength',
  media: 'media',
  mediagroup: 'mediaGroup',
  method: 'method',
  min: 'min',
  minlength: 'minLength',
  multiple: 'multiple',
  muted: 'muted',
  name: 'name',
  nomodule: 'noModule',
  nonce: 'nonce',
  novalidate: 'noValidate',
  open: 'open',
  optimum: 'optimum',
  pattern: 'pattern',
  placeholder: 'placeholder',
  playsinline: 'playsInline',
  poster: 'poster',
  preload: 'preload',
  profile: 'profile',
  radiogroup: 'radioGroup',
  readonly: 'readOnly',
  referrerpolicy: 'referrerPolicy',
  rel: 'rel',
  required: 'required',
  reversed: 'reversed',
  role: 'role',
  rows: 'rows',
  rowspan: 'rowSpan',
  sandbox: 'sandbox',
  scope: 'scope',
  scoped: 'scoped',
  scrolling: 'scrolling',
  seamless: 'seamless',
  selected: 'selected',
  shape: 'shape',
  size: 'size',
  sizes: 'sizes',
  span: 'span',
  spellcheck: 'spellCheck',
  src: 'src',
  srcdoc: 'srcDoc',
  srclang: 'srcLang',
  srcset: 'srcSet',
  start: 'start',
  step: 'step',
  style: 'style',
  summary: 'summary',
  tabindex: 'tabIndex',
  target: 'target',
  title: 'title',
  type: 'type',
  usemap: 'useMap',
  value: 'value',
  width: 'width',
  wmode: 'wmode',
  wrap: 'wrap',
  // SVG
  about: 'about',
  accentheight: 'accentHeight',
  'accent-height': 'accentHeight',
  accumulate: 'accumulate',
  additive: 'additive',
  alignmentbaseline: 'alignmentBaseline',
  'alignment-baseline': 'alignmentBaseline',
  allowreorder: 'allowReorder',
  alphabetic: 'alphabetic',
  amplitude: 'amplitude',
  arabicform: 'arabicForm',
  'arabic-form': 'arabicForm',
  ascent: 'ascent',
  attributename: 'attributeName',
  attributetype: 'attributeType',
  autoreverse: 'autoReverse',
  azimuth: 'azimuth',
  basefrequency: 'baseFrequency',
  baselineshift: 'baselineShift',
  'baseline-shift': 'baselineShift',
  baseprofile: 'baseProfile',
  bbox: 'bbox',
  begin: 'begin',
  bias: 'bias',
  by: 'by',
  calcmode: 'calcMode',
  capheight: 'capHeight',
  'cap-height': 'capHeight',
  clip: 'clip',
  clippath: 'clipPath',
  'clip-path': 'clipPath',
  clippathunits: 'clipPathUnits',
  cliprule: 'clipRule',
  'clip-rule': 'clipRule',
  color: 'color',
  colorinterpolation: 'colorInterpolation',
  'color-interpolation': 'colorInterpolation',
  colorinterpolationfilters: 'colorInterpolationFilters',
  'color-interpolation-filters': 'colorInterpolationFilters',
  colorprofile: 'colorProfile',
  'color-profile': 'colorProfile',
  colorrendering: 'colorRendering',
  'color-rendering': 'colorRendering',
  contentscripttype: 'contentScriptType',
  contentstyletype: 'contentStyleType',
  cursor: 'cursor',
  cx: 'cx',
  cy: 'cy',
  d: 'd',
  datatype: 'datatype',
  decelerate: 'decelerate',
  descent: 'descent',
  diffuseconstant: 'diffuseConstant',
  direction: 'direction',
  display: 'display',
  divisor: 'divisor',
  dominantbaseline: 'dominantBaseline',
  'dominant-baseline': 'dominantBaseline',
  dur: 'dur',
  dx: 'dx',
  dy: 'dy',
  edgemode: 'edgeMode',
  elevation: 'elevation',
  enablebackground: 'enableBackground',
  'enable-background': 'enableBackground',
  end: 'end',
  exponent: 'exponent',
  externalresourcesrequired: 'externalResourcesRequired',
  fill: 'fill',
  fillopacity: 'fillOpacity',
  'fill-opacity': 'fillOpacity',
  fillrule: 'fillRule',
  'fill-rule': 'fillRule',
  filter: 'filter',
  filterres: 'filterRes',
  filterunits: 'filterUnits',
  floodopacity: 'floodOpacity',
  'flood-opacity': 'floodOpacity',
  floodcolor: 'floodColor',
  'flood-color': 'floodColor',
  focusable: 'focusable',
  fontfamily: 'fontFamily',
  'font-family': 'fontFamily',
  fontsize: 'fontSize',
  'font-size': 'fontSize',
  fontsizeadjust: 'fontSizeAdjust',
  'font-size-adjust': 'fontSizeAdjust',
  fontstretch: 'fontStretch',
  'font-stretch': 'fontStretch',
  fontstyle: 'fontStyle',
  'font-style': 'fontStyle',
  fontvariant: 'fontVariant',
  'font-variant': 'fontVariant',
  fontweight: 'fontWeight',
  'font-weight': 'fontWeight',
  format: 'format',
  from: 'from',
  fx: 'fx',
  fy: 'fy',
  g1: 'g1',
  g2: 'g2',
  glyphname: 'glyphName',
  'glyph-name': 'glyphName',
  glyphorientationhorizontal: 'glyphOrientationHorizontal',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  glyphorientationvertical: 'glyphOrientationVertical',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  glyphref: 'glyphRef',
  gradienttransform: 'gradientTransform',
  gradientunits: 'gradientUnits',
  hanging: 'hanging',
  horizadvx: 'horizAdvX',
  'horiz-adv-x': 'horizAdvX',
  horizoriginx: 'horizOriginX',
  'horiz-origin-x': 'horizOriginX',
  ideographic: 'ideographic',
  imagerendering: 'imageRendering',
  'image-rendering': 'imageRendering',
  in2: 'in2',
  in: 'in',
  inlist: 'inlist',
  intercept: 'intercept',
  k1: 'k1',
  k2: 'k2',
  k3: 'k3',
  k4: 'k4',
  k: 'k',
  kernelmatrix: 'kernelMatrix',
  kernelunitlength: 'kernelUnitLength',
  kerning: 'kerning',
  keypoints: 'keyPoints',
  keysplines: 'keySplines',
  keytimes: 'keyTimes',
  lengthadjust: 'lengthAdjust',
  letterspacing: 'letterSpacing',
  'letter-spacing': 'letterSpacing',
  lightingcolor: 'lightingColor',
  'lighting-color': 'lightingColor',
  limitingconeangle: 'limitingConeAngle',
  local: 'local',
  markerend: 'markerEnd',
  'marker-end': 'markerEnd',
  markerheight: 'markerHeight',
  markermid: 'markerMid',
  'marker-mid': 'markerMid',
  markerstart: 'markerStart',
  'marker-start': 'markerStart',
  markerunits: 'markerUnits',
  markerwidth: 'markerWidth',
  mask: 'mask',
  maskcontentunits: 'maskContentUnits',
  maskunits: 'maskUnits',
  mathematical: 'mathematical',
  mode: 'mode',
  numoctaves: 'numOctaves',
  offset: 'offset',
  opacity: 'opacity',
  operator: 'operator',
  order: 'order',
  orient: 'orient',
  orientation: 'orientation',
  origin: 'origin',
  overflow: 'overflow',
  overlineposition: 'overlinePosition',
  'overline-position': 'overlinePosition',
  overlinethickness: 'overlineThickness',
  'overline-thickness': 'overlineThickness',
  paintorder: 'paintOrder',
  'paint-order': 'paintOrder',
  panose1: 'panose1',
  'panose-1': 'panose1',
  pathlength: 'pathLength',
  patterncontentunits: 'patternContentUnits',
  patterntransform: 'patternTransform',
  patternunits: 'patternUnits',
  pointerevents: 'pointerEvents',
  'pointer-events': 'pointerEvents',
  points: 'points',
  pointsatx: 'pointsAtX',
  pointsaty: 'pointsAtY',
  pointsatz: 'pointsAtZ',
  prefix: 'prefix',
  preservealpha: 'preserveAlpha',
  preserveaspectratio: 'preserveAspectRatio',
  primitiveunits: 'primitiveUnits',
  property: 'property',
  r: 'r',
  radius: 'radius',
  refx: 'refX',
  refy: 'refY',
  renderingintent: 'renderingIntent',
  'rendering-intent': 'renderingIntent',
  repeatcount: 'repeatCount',
  repeatdur: 'repeatDur',
  requiredextensions: 'requiredExtensions',
  requiredfeatures: 'requiredFeatures',
  resource: 'resource',
  restart: 'restart',
  result: 'result',
  results: 'results',
  rotate: 'rotate',
  rx: 'rx',
  ry: 'ry',
  scale: 'scale',
  security: 'security',
  seed: 'seed',
  shaperendering: 'shapeRendering',
  'shape-rendering': 'shapeRendering',
  slope: 'slope',
  spacing: 'spacing',
  specularconstant: 'specularConstant',
  specularexponent: 'specularExponent',
  speed: 'speed',
  spreadmethod: 'spreadMethod',
  startoffset: 'startOffset',
  stddeviation: 'stdDeviation',
  stemh: 'stemh',
  stemv: 'stemv',
  stitchtiles: 'stitchTiles',
  stopcolor: 'stopColor',
  'stop-color': 'stopColor',
  stopopacity: 'stopOpacity',
  'stop-opacity': 'stopOpacity',
  strikethroughposition: 'strikethroughPosition',
  'strikethrough-position': 'strikethroughPosition',
  strikethroughthickness: 'strikethroughThickness',
  'strikethrough-thickness': 'strikethroughThickness',
  string: 'string',
  stroke: 'stroke',
  strokedasharray: 'strokeDasharray',
  'stroke-dasharray': 'strokeDasharray',
  strokedashoffset: 'strokeDashoffset',
  'stroke-dashoffset': 'strokeDashoffset',
  strokelinecap: 'strokeLinecap',
  'stroke-linecap': 'strokeLinecap',
  strokelinejoin: 'strokeLinejoin',
  'stroke-linejoin': 'strokeLinejoin',
  strokemiterlimit: 'strokeMiterlimit',
  'stroke-miterlimit': 'strokeMiterlimit',
  strokewidth: 'strokeWidth',
  'stroke-width': 'strokeWidth',
  strokeopacity: 'strokeOpacity',
  'stroke-opacity': 'strokeOpacity',
  suppresscontenteditablewarning: 'suppressContentEditableWarning',
  suppresshydrationwarning: 'suppressHydrationWarning',
  surfacescale: 'surfaceScale',
  systemlanguage: 'systemLanguage',
  tablevalues: 'tableValues',
  targetx: 'targetX',
  targety: 'targetY',
  textanchor: 'textAnchor',
  'text-anchor': 'textAnchor',
  textdecoration: 'textDecoration',
  'text-decoration': 'textDecoration',
  textlength: 'textLength',
  textrendering: 'textRendering',
  'text-rendering': 'textRendering',
  to: 'to',
  transform: 'transform',
  typeof: 'typeof',
  u1: 'u1',
  u2: 'u2',
  underlineposition: 'underlinePosition',
  'underline-position': 'underlinePosition',
  underlinethickness: 'underlineThickness',
  'underline-thickness': 'underlineThickness',
  unicode: 'unicode',
  unicodebidi: 'unicodeBidi',
  'unicode-bidi': 'unicodeBidi',
  unicoderange: 'unicodeRange',
  'unicode-range': 'unicodeRange',
  unitsperem: 'unitsPerEm',
  'units-per-em': 'unitsPerEm',
  unselectable: 'unselectable',
  valphabetic: 'vAlphabetic',
  'v-alphabetic': 'vAlphabetic',
  values: 'values',
  vectoreffect: 'vectorEffect',
  'vector-effect': 'vectorEffect',
  version: 'version',
  vertadvy: 'vertAdvY',
  'vert-adv-y': 'vertAdvY',
  vertoriginx: 'vertOriginX',
  'vert-origin-x': 'vertOriginX',
  vertoriginy: 'vertOriginY',
  'vert-origin-y': 'vertOriginY',
  vhanging: 'vHanging',
  'v-hanging': 'vHanging',
  videographic: 'vIdeographic',
  'v-ideographic': 'vIdeographic',
  viewbox: 'viewBox',
  viewtarget: 'viewTarget',
  visibility: 'visibility',
  vmathematical: 'vMathematical',
  'v-mathematical': 'vMathematical',
  vocab: 'vocab',
  widths: 'widths',
  wordspacing: 'wordSpacing',
  'word-spacing': 'wordSpacing',
  writingmode: 'writingMode',
  'writing-mode': 'writingMode',
  x1: 'x1',
  x2: 'x2',
  x: 'x',
  xchannelselector: 'xChannelSelector',
  xheight: 'xHeight',
  'x-height': 'xHeight',
  xlinkactuate: 'xlinkActuate',
  'xlink:actuate': 'xlinkActuate',
  xlinkarcrole: 'xlinkArcrole',
  'xlink:arcrole': 'xlinkArcrole',
  xlinkhref: 'xlinkHref',
  'xlink:href': 'xlinkHref',
  xlinkrole: 'xlinkRole',
  'xlink:role': 'xlinkRole',
  xlinkshow: 'xlinkShow',
  'xlink:show': 'xlinkShow',
  xlinktitle: 'xlinkTitle',
  'xlink:title': 'xlinkTitle',
  xlinktype: 'xlinkType',
  'xlink:type': 'xlinkType',
  xmlbase: 'xmlBase',
  'xml:base': 'xmlBase',
  xmllang: 'xmlLang',
  'xml:lang': 'xmlLang',
  xmlns: 'xmlns',
  'xml:space': 'xmlSpace',
  xmlnsxlink: 'xmlnsXlink',
  'xmlns:xlink': 'xmlnsXlink',
  xmlspace: 'xmlSpace',
  y1: 'y1',
  y2: 'y2',
  y: 'y',
  ychannelselector: 'yChannelSelector',
  z: 'z',
  zoomandpan: 'zoomAndPan'
};

var validateProperty$1 = function () {};

{
  var warnedProperties$1 = {};
  var _hasOwnProperty = Object.prototype.hasOwnProperty;
  var EVENT_NAME_REGEX = /^on./;
  var INVALID_EVENT_NAME_REGEX = /^on[^A-Z]/;
  var rARIA$1 = new RegExp('^(aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$');
  var rARIACamel$1 = new RegExp('^(aria)[A-Z][' + ATTRIBUTE_NAME_CHAR + ']*$');

  validateProperty$1 = function (tagName, name, value, eventRegistry) {
    if (_hasOwnProperty.call(warnedProperties$1, name) && warnedProperties$1[name]) {
      return true;
    }

    var lowerCasedName = name.toLowerCase();

    if (lowerCasedName === 'onfocusin' || lowerCasedName === 'onfocusout') {
      error('React uses onFocus and onBlur instead of onFocusIn and onFocusOut. ' + 'All React events are normalized to bubble, so onFocusIn and onFocusOut ' + 'are not needed/supported by React.');

      warnedProperties$1[name] = true;
      return true;
    } // We can't rely on the event system being injected on the server.


    if (eventRegistry != null) {
      var registrationNameDependencies = eventRegistry.registrationNameDependencies,
          possibleRegistrationNames = eventRegistry.possibleRegistrationNames;

      if (registrationNameDependencies.hasOwnProperty(name)) {
        return true;
      }

      var registrationName = possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? possibleRegistrationNames[lowerCasedName] : null;

      if (registrationName != null) {
        error('Invalid event handler property `%s`. Did you mean `%s`?', name, registrationName);

        warnedProperties$1[name] = true;
        return true;
      }

      if (EVENT_NAME_REGEX.test(name)) {
        error('Unknown event handler property `%s`. It will be ignored.', name);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (EVENT_NAME_REGEX.test(name)) {
      // If no event plugins have been injected, we are in a server environment.
      // So we can't tell if the event name is correct for sure, but we can filter
      // out known bad ones like `onclick`. We can't suggest a specific replacement though.
      if (INVALID_EVENT_NAME_REGEX.test(name)) {
        error('Invalid event handler property `%s`. ' + 'React events use the camelCase naming convention, for example `onClick`.', name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Let the ARIA attribute hook validate ARIA attributes


    if (rARIA$1.test(name) || rARIACamel$1.test(name)) {
      return true;
    }

    if (lowerCasedName === 'innerhtml') {
      error('Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'aria') {
      error('The `aria` attribute is reserved for future use in React. ' + 'Pass individual `aria-` attributes instead.');

      warnedProperties$1[name] = true;
      return true;
    }

    if (lowerCasedName === 'is' && value !== null && value !== undefined && typeof value !== 'string') {
      error('Received a `%s` for a string attribute `is`. If this is expected, cast ' + 'the value to a string.', typeof value);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'number' && isNaN(value)) {
      error('Received NaN for the `%s` attribute. If this is expected, cast ' + 'the value to a string.', name);

      warnedProperties$1[name] = true;
      return true;
    }

    var propertyInfo = getPropertyInfo(name);
    var isReserved = propertyInfo !== null && propertyInfo.type === RESERVED; // Known attributes should match the casing specified in the property config.

    if (possibleStandardNames.hasOwnProperty(lowerCasedName)) {
      var standardName = possibleStandardNames[lowerCasedName];

      if (standardName !== name) {
        error('Invalid DOM property `%s`. Did you mean `%s`?', name, standardName);

        warnedProperties$1[name] = true;
        return true;
      }
    } else if (!isReserved && name !== lowerCasedName) {
      // Unknown attributes should have lowercase casing since that's how they
      // will be cased anyway with server rendering.
      error('React does not recognize the `%s` prop on a DOM element. If you ' + 'intentionally want it to appear in the DOM as a custom ' + 'attribute, spell it as lowercase `%s` instead. ' + 'If you accidentally passed it from a parent component, remove ' + 'it from the DOM element.', name, lowerCasedName);

      warnedProperties$1[name] = true;
      return true;
    }

    if (typeof value === 'boolean' && shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      if (value) {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.', value, name, name, value, name);
      } else {
        error('Received `%s` for a non-boolean attribute `%s`.\n\n' + 'If you want to write it to the DOM, pass a string instead: ' + '%s="%s" or %s={value.toString()}.\n\n' + 'If you used to conditionally omit it with %s={condition && value}, ' + 'pass %s={condition ? value : undefined} instead.', value, name, name, value, name, name, name);
      }

      warnedProperties$1[name] = true;
      return true;
    } // Now that we've validated casing, do not validate
    // data types for reserved props


    if (isReserved) {
      return true;
    } // Warn when a known attribute is a bad type


    if (shouldRemoveAttributeWithWarning(name, value, propertyInfo, false)) {
      warnedProperties$1[name] = true;
      return false;
    } // Warn when passing the strings 'false' or 'true' into a boolean prop


    if ((value === 'false' || value === 'true') && propertyInfo !== null && propertyInfo.type === BOOLEAN) {
      error('Received the string `%s` for the boolean attribute `%s`. ' + '%s ' + 'Did you mean %s={%s}?', value, name, value === 'false' ? 'The browser will interpret it as a truthy value.' : 'Although this works, it will not work as expected if you pass the string "false".', name, value);

      warnedProperties$1[name] = true;
      return true;
    }

    return true;
  };
}

var warnUnknownProperties = function (type, props, eventRegistry) {
  {
    var unknownProps = [];

    for (var key in props) {
      var isValid = validateProperty$1(type, key, props[key], eventRegistry);

      if (!isValid) {
        unknownProps.push(key);
      }
    }

    var unknownPropString = unknownProps.map(function (prop) {
      return '`' + prop + '`';
    }).join(', ');

    if (unknownProps.length === 1) {
      error('Invalid value for prop %s on <%s> tag. Either remove it from the element, ' + 'or pass a string or number value to keep it in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    } else if (unknownProps.length > 1) {
      error('Invalid values for props %s on <%s> tag. Either remove them from the element, ' + 'or pass a string or number value to keep them in the DOM. ' + 'For details, see https://reactjs.org/link/attribute-behavior ', unknownPropString, type);
    }
  }
};

function validateProperties$2(type, props, eventRegistry) {
  if (isCustomComponent(type, props)) {
    return;
  }

  warnUnknownProperties(type, props, eventRegistry);
}

var toArray = React.Children.toArray; // This is only used in DEV.
// Each entry is `this.stack` from a currently executing renderer instance.
// (There may be more than one because ReactDOMServer is reentrant).
// Each stack is an array of frames which may contain nested stacks of elements.

var currentDebugStacks = [];
var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
var ReactDebugCurrentFrame$1;
var prevGetCurrentStackImpl = null;

var getCurrentServerStackImpl = function () {
  return '';
};

var describeStackFrame = function (element) {
  return '';
};

var validatePropertiesInDevelopment = function (type, props) {};

var pushCurrentDebugStack = function (stack) {};

var pushElementToDebugStack = function (element) {};

var popCurrentDebugStack = function () {};

var hasWarnedAboutUsingContextAsConsumer = false;

{
  ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

  validatePropertiesInDevelopment = function (type, props) {
    validateProperties(type, props);
    validateProperties$1(type, props);
    validateProperties$2(type, props, null);
  };

  describeStackFrame = function (element) {
    return describeUnknownElementTypeFrameInDEV(element.type, element._source, null);
  };

  pushCurrentDebugStack = function (stack) {
    currentDebugStacks.push(stack);

    if (currentDebugStacks.length === 1) {
      // We are entering a server renderer.
      // Remember the previous (e.g. client) global stack implementation.
      prevGetCurrentStackImpl = ReactDebugCurrentFrame$1.getCurrentStack;
      ReactDebugCurrentFrame$1.getCurrentStack = getCurrentServerStackImpl;
    }
  };

  pushElementToDebugStack = function (element) {
    // For the innermost executing ReactDOMServer call,
    var stack = currentDebugStacks[currentDebugStacks.length - 1]; // Take the innermost executing frame (e.g. <Foo>),

    var frame = stack[stack.length - 1]; // and record that it has one more element associated with it.

    frame.debugElementStack.push(element); // We only need this because we tail-optimize single-element
    // children and directly handle them in an inner loop instead of
    // creating separate frames for them.
  };

  popCurrentDebugStack = function () {
    currentDebugStacks.pop();

    if (currentDebugStacks.length === 0) {
      // We are exiting the server renderer.
      // Restore the previous (e.g. client) global stack implementation.
      ReactDebugCurrentFrame$1.getCurrentStack = prevGetCurrentStackImpl;
      prevGetCurrentStackImpl = null;
    }
  };

  getCurrentServerStackImpl = function () {
    if (currentDebugStacks.length === 0) {
      // Nothing is currently rendering.
      return '';
    } // ReactDOMServer is reentrant so there may be multiple calls at the same time.
    // Take the frames from the innermost call which is the last in the array.


    var frames = currentDebugStacks[currentDebugStacks.length - 1];
    var stack = ''; // Go through every frame in the stack from the innermost one.

    for (var i = frames.length - 1; i >= 0; i--) {
      var frame = frames[i]; // Every frame might have more than one debug element stack entry associated with it.
      // This is because single-child nesting doesn't create materialized frames.
      // Instead it would push them through `pushElementToDebugStack()`.

      var debugElementStack = frame.debugElementStack;

      for (var ii = debugElementStack.length - 1; ii >= 0; ii--) {
        stack += describeStackFrame(debugElementStack[ii]);
      }
    }

    return stack;
  };
}

var didWarnDefaultInputValue = false;
var didWarnDefaultChecked = false;
var didWarnDefaultSelectValue = false;
var didWarnDefaultTextareaValue = false;
var didWarnInvalidOptionChildren = false;
var didWarnAboutNoopUpdateForComponent = {};
var didWarnAboutBadClass = {};
var didWarnAboutModulePatternComponent = {};
var didWarnAboutDeprecatedWillMount = {};
var didWarnAboutUndefinedDerivedState = {};
var didWarnAboutUninitializedState = {};
var valuePropNames = ['value', 'defaultValue'];
var newlineEatingTags = {
  listing: true,
  pre: true,
  textarea: true
}; // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset

var validatedTagCache = {};

function validateDangerousTag(tag) {
  if (!validatedTagCache.hasOwnProperty(tag)) {
    if (!VALID_TAG_REGEX.test(tag)) {
      {
        throw Error( "Invalid tag: " + tag );
      }
    }

    validatedTagCache[tag] = true;
  }
}

var styleNameCache = {};

var processStyleName = function (styleName) {
  if (styleNameCache.hasOwnProperty(styleName)) {
    return styleNameCache[styleName];
  }

  var result = hyphenateStyleName(styleName);
  styleNameCache[styleName] = result;
  return result;
};

function createMarkupForStyles(styles) {
  var serialized = '';
  var delimiter = '';

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = styles[styleName];

    {
      if (!isCustomProperty) {
        warnValidStyle$1(styleName, styleValue);
      }
    }

    if (styleValue != null) {
      serialized += delimiter + (isCustomProperty ? styleName : processStyleName(styleName)) + ':';
      serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
      delimiter = ';';
    }
  }

  return serialized || null;
}

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && getComponentName(_constructor) || 'ReactClass';
    var warningKey = componentName + '.' + callerName;

    if (didWarnAboutNoopUpdateForComponent[warningKey]) {
      return;
    }

    error('%s(...): Can only update a mounting component. ' + 'This usually means you called %s() outside componentWillMount() on the server. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);

    didWarnAboutNoopUpdateForComponent[warningKey] = true;
  }
}

function shouldConstruct$1(Component) {
  return Component.prototype && Component.prototype.isReactComponent;
}

function getNonChildrenInnerMarkup(props) {
  var innerHTML = props.dangerouslySetInnerHTML;

  if (innerHTML != null) {
    if (innerHTML.__html != null) {
      return innerHTML.__html;
    }
  } else {
    var content = props.children;

    if (typeof content === 'string' || typeof content === 'number') {
      return escapeTextForBrowser(content);
    }
  }

  return null;
}

function flattenTopLevelChildren(children) {
  if (!React.isValidElement(children)) {
    return toArray(children);
  }

  var element = children;

  if (element.type !== REACT_FRAGMENT_TYPE) {
    return [element];
  }

  var fragmentChildren = element.props.children;

  if (!React.isValidElement(fragmentChildren)) {
    return toArray(fragmentChildren);
  }

  var fragmentChildElement = fragmentChildren;
  return [fragmentChildElement];
}

function flattenOptionChildren(children) {
  if (children === undefined || children === null) {
    return children;
  }

  var content = ''; // Flatten children and warn if they aren't strings or numbers;
  // invalid types are ignored.

  React.Children.forEach(children, function (child) {
    if (child == null) {
      return;
    }

    content += child;

    {
      if (!didWarnInvalidOptionChildren && typeof child !== 'string' && typeof child !== 'number') {
        didWarnInvalidOptionChildren = true;

        error('Only strings and numbers are supported as <option> children.');
      }
    }
  });
  return content;
}

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var STYLE = 'style';
var RESERVED_PROPS = {
  children: null,
  dangerouslySetInnerHTML: null,
  suppressContentEditableWarning: null,
  suppressHydrationWarning: null
};

function createOpenTagMarkup(tagVerbatim, tagLowercase, props, namespace, makeStaticMarkup, isRootElement) {
  var ret = '<' + tagVerbatim;
  var isCustomComponent$1 = isCustomComponent(tagLowercase, props);

  for (var propKey in props) {
    if (!hasOwnProperty$2.call(props, propKey)) {
      continue;
    }

    var propValue = props[propKey];

    if (propValue == null) {
      continue;
    }

    if (propKey === STYLE) {
      propValue = createMarkupForStyles(propValue);
    }

    var markup = null;

    if (isCustomComponent$1) {
      if (!RESERVED_PROPS.hasOwnProperty(propKey)) {
        markup = createMarkupForCustomAttribute(propKey, propValue);
      }
    } else {
      markup = createMarkupForProperty(propKey, propValue);
    }

    if (markup) {
      ret += ' ' + markup;
    }
  } // For static pages, no need to put React ID and checksum. Saves lots of
  // bytes.


  if (makeStaticMarkup) {
    return ret;
  }

  if (isRootElement) {
    ret += ' ' + createMarkupForRoot();
  }

  return ret;
}

function validateRenderResult(child, type) {
  if (child === undefined) {
    {
      {
        throw Error( (getComponentName(type) || 'Component') + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null." );
      }
    }
  }
}

function resolve(child, context, threadID) {
  while (React.isValidElement(child)) {
    // Safe because we just checked it's an element.
    var element = child;
    var Component = element.type;

    {
      pushElementToDebugStack(element);
    }

    if (typeof Component !== 'function') {
      break;
    }

    processChild(element, Component);
  } // Extra closure so queue and replace can be captured properly


  function processChild(element, Component) {
    var isClass = shouldConstruct$1(Component);
    var publicContext = processContext(Component, context, threadID, isClass);
    var queue = [];
    var replace = false;
    var updater = {
      isMounted: function (publicInstance) {
        return false;
      },
      enqueueForceUpdate: function (publicInstance) {
        if (queue === null) {
          warnNoop(publicInstance, 'forceUpdate');
          return null;
        }
      },
      enqueueReplaceState: function (publicInstance, completeState) {
        replace = true;
        queue = [completeState];
      },
      enqueueSetState: function (publicInstance, currentPartialState) {
        if (queue === null) {
          warnNoop(publicInstance, 'setState');
          return null;
        }

        queue.push(currentPartialState);
      }
    };
    var inst;

    if (isClass) {
      inst = new Component(element.props, publicContext, updater);

      if (typeof Component.getDerivedStateFromProps === 'function') {
        {
          if (inst.state === null || inst.state === undefined) {
            var componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUninitializedState[componentName]) {
              error('`%s` uses `getDerivedStateFromProps` but its initial state is ' + '%s. This is not recommended. Instead, define the initial state by ' + 'assigning an object to `this.state` in the constructor of `%s`. ' + 'This ensures that `getDerivedStateFromProps` arguments have a consistent shape.', componentName, inst.state === null ? 'null' : 'undefined', componentName);

              didWarnAboutUninitializedState[componentName] = true;
            }
          }
        }

        var partialState = Component.getDerivedStateFromProps.call(null, element.props, inst.state);

        {
          if (partialState === undefined) {
            var _componentName = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutUndefinedDerivedState[_componentName]) {
              error('%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. ' + 'You have returned undefined.', _componentName);

              didWarnAboutUndefinedDerivedState[_componentName] = true;
            }
          }
        }

        if (partialState != null) {
          inst.state = _assign({}, inst.state, partialState);
        }
      }
    } else {
      {
        if (Component.prototype && typeof Component.prototype.render === 'function') {
          var _componentName2 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutBadClass[_componentName2]) {
            error("The <%s /> component appears to have a render method, but doesn't extend React.Component. " + 'This is likely to cause errors. Change %s to extend React.Component instead.', _componentName2, _componentName2);

            didWarnAboutBadClass[_componentName2] = true;
          }
        }
      }

      var componentIdentity = {};
      prepareToUseHooks(componentIdentity);
      inst = Component(element.props, publicContext, updater);
      inst = finishHooks(Component, element.props, inst, publicContext);

      {
        // Support for module components is deprecated and is removed behind a flag.
        // Whether or not it would crash later, we want to show a good message in DEV first.
        if (inst != null && inst.render != null) {
          var _componentName3 = getComponentName(Component) || 'Unknown';

          if (!didWarnAboutModulePatternComponent[_componentName3]) {
            error('The <%s /> component appears to be a function component that returns a class instance. ' + 'Change %s to a class that extends React.Component instead. ' + "If you can't use a class try assigning the prototype on the function as a workaround. " + "`%s.prototype = React.Component.prototype`. Don't use an arrow function since it " + 'cannot be called with `new` by React.', _componentName3, _componentName3, _componentName3);

            didWarnAboutModulePatternComponent[_componentName3] = true;
          }
        }
      } // If the flag is on, everything is assumed to be a function component.
      // Otherwise, we also do the unfortunate dynamic checks.


      if ( inst == null || inst.render == null) {
        child = inst;
        validateRenderResult(child, Component);
        return;
      }
    }

    inst.props = element.props;
    inst.context = publicContext;
    inst.updater = updater;
    var initialState = inst.state;

    if (initialState === undefined) {
      inst.state = initialState = null;
    }

    if (typeof inst.UNSAFE_componentWillMount === 'function' || typeof inst.componentWillMount === 'function') {
      if (typeof inst.componentWillMount === 'function') {
        {
          if ( inst.componentWillMount.__suppressDeprecationWarning !== true) {
            var _componentName4 = getComponentName(Component) || 'Unknown';

            if (!didWarnAboutDeprecatedWillMount[_componentName4]) {
              warn( // keep this warning in sync with ReactStrictModeWarning.js
              'componentWillMount has been renamed, and is not recommended for use. ' + 'See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n' + '* Move code from componentWillMount to componentDidMount (preferred in most cases) ' + 'or the constructor.\n' + '\nPlease update the following components: %s', _componentName4);

              didWarnAboutDeprecatedWillMount[_componentName4] = true;
            }
          }
        } // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.


        if (typeof Component.getDerivedStateFromProps !== 'function') {
          inst.componentWillMount();
        }
      }

      if (typeof inst.UNSAFE_componentWillMount === 'function' && typeof Component.getDerivedStateFromProps !== 'function') {
        // In order to support react-lifecycles-compat polyfilled components,
        // Unsafe lifecycles should not be invoked for any component with the new gDSFP.
        inst.UNSAFE_componentWillMount();
      }

      if (queue.length) {
        var oldQueue = queue;
        var oldReplace = replace;
        queue = null;
        replace = false;

        if (oldReplace && oldQueue.length === 1) {
          inst.state = oldQueue[0];
        } else {
          var nextState = oldReplace ? oldQueue[0] : inst.state;
          var dontMutate = true;

          for (var i = oldReplace ? 1 : 0; i < oldQueue.length; i++) {
            var partial = oldQueue[i];

            var _partialState = typeof partial === 'function' ? partial.call(inst, nextState, element.props, publicContext) : partial;

            if (_partialState != null) {
              if (dontMutate) {
                dontMutate = false;
                nextState = _assign({}, nextState, _partialState);
              } else {
                _assign(nextState, _partialState);
              }
            }
          }

          inst.state = nextState;
        }
      } else {
        queue = null;
      }
    }

    child = inst.render();

    {
      if (child === undefined && inst.render._isMockFunction) {
        // This is probably bad practice. Consider warning here and
        // deprecating this convenience.
        child = null;
      }
    }

    validateRenderResult(child, Component);
    var childContext;

    {
      if (typeof inst.getChildContext === 'function') {
        var _childContextTypes = Component.childContextTypes;

        if (typeof _childContextTypes === 'object') {
          childContext = inst.getChildContext();

          for (var contextKey in childContext) {
            if (!(contextKey in _childContextTypes)) {
              {
                throw Error( (getComponentName(Component) || 'Unknown') + ".getChildContext(): key \"" + contextKey + "\" is not defined in childContextTypes." );
              }
            }
          }
        } else {
          {
            error('%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', getComponentName(Component) || 'Unknown');
          }
        }
      }

      if (childContext) {
        context = _assign({}, context, childContext);
      }
    }
  }

  return {
    child: child,
    context: context
  };
}

var ReactDOMServerRenderer = /*#__PURE__*/function () {
  // TODO: type this more strictly:
  // DEV-only
  function ReactDOMServerRenderer(children, makeStaticMarkup, options) {
    var flatChildren = flattenTopLevelChildren(children);
    var topFrame = {
      type: null,
      // Assume all trees start in the HTML namespace (not totally true, but
      // this is what we did historically)
      domNamespace: Namespaces.html,
      children: flatChildren,
      childIndex: 0,
      context: emptyObject,
      footer: ''
    };

    {
      topFrame.debugElementStack = [];
    }

    this.threadID = allocThreadID();
    this.stack = [topFrame];
    this.exhausted = false;
    this.currentSelectValue = null;
    this.previousWasTextNode = false;
    this.makeStaticMarkup = makeStaticMarkup;
    this.suspenseDepth = 0; // Context (new API)

    this.contextIndex = -1;
    this.contextStack = [];
    this.contextValueStack = []; // useOpaqueIdentifier ID

    this.uniqueID = 0;
    this.identifierPrefix = options && options.identifierPrefix || '';

    {
      this.contextProviderStack = [];
    }
  }

  var _proto = ReactDOMServerRenderer.prototype;

  _proto.destroy = function destroy() {
    if (!this.exhausted) {
      this.exhausted = true;
      this.clearProviders();
      freeThreadID(this.threadID);
    }
  }
  /**
   * Note: We use just two stacks regardless of how many context providers you have.
   * Providers are always popped in the reverse order to how they were pushed
   * so we always know on the way down which provider you'll encounter next on the way up.
   * On the way down, we push the current provider, and its context value *before*
   * we mutated it, onto the stacks. Therefore, on the way up, we always know which
   * provider needs to be "restored" to which value.
   * https://github.com/facebook/react/pull/12985#issuecomment-396301248
   */
  ;

  _proto.pushProvider = function pushProvider(provider) {
    var index = ++this.contextIndex;
    var context = provider.type._context;
    var threadID = this.threadID;
    validateContextBounds(context, threadID);
    var previousValue = context[threadID]; // Remember which value to restore this context to on our way up.

    this.contextStack[index] = context;
    this.contextValueStack[index] = previousValue;

    {
      // Only used for push/pop mismatch warnings.
      this.contextProviderStack[index] = provider;
    } // Mutate the current value.


    context[threadID] = provider.props.value;
  };

  _proto.popProvider = function popProvider(provider) {
    var index = this.contextIndex;

    {
      if (index < 0 || provider !== this.contextProviderStack[index]) {
        error('Unexpected pop.');
      }
    }

    var context = this.contextStack[index];
    var previousValue = this.contextValueStack[index]; // "Hide" these null assignments from Flow by using `any`
    // because conceptually they are deletions--as long as we
    // promise to never access values beyond `this.contextIndex`.

    this.contextStack[index] = null;
    this.contextValueStack[index] = null;

    {
      this.contextProviderStack[index] = null;
    }

    this.contextIndex--; // Restore to the previous value we stored as we were walking down.
    // We've already verified that this context has been expanded to accommodate
    // this thread id, so we don't need to do it again.

    context[this.threadID] = previousValue;
  };

  _proto.clearProviders = function clearProviders() {
    // Restore any remaining providers on the stack to previous values
    for (var index = this.contextIndex; index >= 0; index--) {
      var context = this.contextStack[index];
      var previousValue = this.contextValueStack[index];
      context[this.threadID] = previousValue;
    }
  };

  _proto.read = function read(bytes) {
    if (this.exhausted) {
      return null;
    }

    var prevPartialRenderer = currentPartialRenderer;
    setCurrentPartialRenderer(this);
    var prevDispatcher = ReactCurrentDispatcher$1.current;
    ReactCurrentDispatcher$1.current = Dispatcher;

    try {
      // Markup generated within <Suspense> ends up buffered until we know
      // nothing in that boundary suspended
      var out = [''];
      var suspended = false;

      while (out[0].length < bytes) {
        if (this.stack.length === 0) {
          this.exhausted = true;
          freeThreadID(this.threadID);
          break;
        }

        var frame = this.stack[this.stack.length - 1];

        if (suspended || frame.childIndex >= frame.children.length) {
          var footer = frame.footer;

          if (footer !== '') {
            this.previousWasTextNode = false;
          }

          this.stack.pop();

          if (frame.type === 'select') {
            this.currentSelectValue = null;
          } else if (frame.type != null && frame.type.type != null && frame.type.type.$$typeof === REACT_PROVIDER_TYPE) {
            var provider = frame.type;
            this.popProvider(provider);
          } else if (frame.type === REACT_SUSPENSE_TYPE) {
            this.suspenseDepth--;
            var buffered = out.pop();

            if (suspended) {
              suspended = false; // If rendering was suspended at this boundary, render the fallbackFrame

              var fallbackFrame = frame.fallbackFrame;

              if (!fallbackFrame) {
                {
                  throw Error(true ? "ReactDOMServer did not find an internal fallback frame for Suspense. This is a bug in React. Please file an issue." : undefined);
                }
              }

              this.stack.push(fallbackFrame);
              out[this.suspenseDepth] += '<!--$!-->'; // Skip flushing output since we're switching to the fallback

              continue;
            } else {
              out[this.suspenseDepth] += buffered;
            }
          } // Flush output


          out[this.suspenseDepth] += footer;
          continue;
        }

        var child = frame.children[frame.childIndex++];
        var outBuffer = '';

        if (true) {
          pushCurrentDebugStack(this.stack); // We're starting work on this frame, so reset its inner stack.

          frame.debugElementStack.length = 0;
        }

        try {
          outBuffer += this.render(child, frame.context, frame.domNamespace);
        } catch (err) {
          if (err != null && typeof err.then === 'function') {
            if (enableSuspenseServerRenderer) {
              if (!(this.suspenseDepth > 0)) {
                {
                  throw Error(true ? "A React component suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." : undefined);
                }
              }

              suspended = true;
            } else {
              if (true) {
                {
                  throw Error(true ? "ReactDOMServer does not yet support Suspense." : undefined);
                }
              }
            }
          } else {
            throw err;
          }
        } finally {
          if (true) {
            popCurrentDebugStack();
          }
        }

        if (out.length <= this.suspenseDepth) {
          out.push('');
        }

        out[this.suspenseDepth] += outBuffer;
      }

      return out[0];
    } finally {
      ReactCurrentDispatcher$1.current = prevDispatcher;
      setCurrentPartialRenderer(prevPartialRenderer);
      resetHooksState();
    }
  };

  _proto.render = function render(child, context, parentNamespace) {
    if (typeof child === 'string' || typeof child === 'number') {
      var text = '' + child;

      if (text === '') {
        return '';
      }

      if (this.makeStaticMarkup) {
        return escapeTextForBrowser(text);
      }

      if (this.previousWasTextNode) {
        return '<!-- -->' + escapeTextForBrowser(text);
      }

      this.previousWasTextNode = true;
      return escapeTextForBrowser(text);
    } else {
      var nextChild;

      var _resolve = resolve(child, context, this.threadID);

      nextChild = _resolve.child;
      context = _resolve.context;

      if (nextChild === null || nextChild === false) {
        return '';
      } else if (!React.isValidElement(nextChild)) {
        if (nextChild != null && nextChild.$$typeof != null) {
          // Catch unexpected special types early.
          var $$typeof = nextChild.$$typeof;

          if (!($$typeof !== REACT_PORTAL_TYPE)) {
            {
              throw Error( "Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render." );
            }
          } // Catch-all to prevent an infinite loop if React.Children.toArray() supports some new type.


          {
            {
              throw Error( "Unknown element-like object type: " + $$typeof.toString() + ". This is likely a bug in React. Please file an issue." );
            }
          }
        }

        var nextChildren = toArray(nextChild);
        var frame = {
          type: null,
          domNamespace: parentNamespace,
          children: nextChildren,
          childIndex: 0,
          context: context,
          footer: ''
        };

        {
          frame.debugElementStack = [];
        }

        this.stack.push(frame);
        return '';
      } // Safe because we just checked it's an element.


      var nextElement = nextChild;
      var elementType = nextElement.type;

      if (typeof elementType === 'string') {
        return this.renderDOM(nextElement, context, parentNamespace);
      }

      switch (elementType) {
        // TODO: LegacyHidden acts the same as a fragment. This only works
        // because we currently assume that every instance of LegacyHidden is
        // accompanied by a host component wrapper. In the hidden mode, the host
        // component is given a `hidden` attribute, which ensures that the
        // initial HTML is not visible. To support the use of LegacyHidden as a
        // true fragment, without an extra DOM node, we would have to hide the
        // initial HTML in some other way.
        case REACT_LEGACY_HIDDEN_TYPE:
        case REACT_DEBUG_TRACING_MODE_TYPE:
        case REACT_STRICT_MODE_TYPE:
        case REACT_PROFILER_TYPE:
        case REACT_SUSPENSE_LIST_TYPE:
        case REACT_FRAGMENT_TYPE:
          {
            var _nextChildren = toArray(nextChild.props.children);

            var _frame = {
              type: null,
              domNamespace: parentNamespace,
              children: _nextChildren,
              childIndex: 0,
              context: context,
              footer: ''
            };

            {
              _frame.debugElementStack = [];
            }

            this.stack.push(_frame);
            return '';
          }

        case REACT_SUSPENSE_TYPE:
          {
            {
              {
                {
                  throw Error( "ReactDOMServer does not yet support Suspense." );
                }
              }
            }
          }
        // eslint-disable-next-line-no-fallthrough

        case REACT_SCOPE_TYPE:
          {

            {
              {
                throw Error( "ReactDOMServer does not yet support scope components." );
              }
            }
          }
      }

      if (typeof elementType === 'object' && elementType !== null) {
        switch (elementType.$$typeof) {
          case REACT_FORWARD_REF_TYPE:
            {
              var element = nextChild;

              var _nextChildren5;

              var componentIdentity = {};
              prepareToUseHooks(componentIdentity);
              _nextChildren5 = elementType.render(element.props, element.ref);
              _nextChildren5 = finishHooks(elementType.render, element.props, _nextChildren5, element.ref);
              _nextChildren5 = toArray(_nextChildren5);
              var _frame5 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren5,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame5.debugElementStack = [];
              }

              this.stack.push(_frame5);
              return '';
            }

          case REACT_MEMO_TYPE:
            {
              var _element = nextChild;
              var _nextChildren6 = [React.createElement(elementType.type, _assign({
                ref: _element.ref
              }, _element.props))];
              var _frame6 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren6,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame6.debugElementStack = [];
              }

              this.stack.push(_frame6);
              return '';
            }

          case REACT_PROVIDER_TYPE:
            {
              var provider = nextChild;
              var nextProps = provider.props;

              var _nextChildren7 = toArray(nextProps.children);

              var _frame7 = {
                type: provider,
                domNamespace: parentNamespace,
                children: _nextChildren7,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame7.debugElementStack = [];
              }

              this.pushProvider(provider);
              this.stack.push(_frame7);
              return '';
            }

          case REACT_CONTEXT_TYPE:
            {
              var reactContext = nextChild.type; // The logic below for Context differs depending on PROD or DEV mode. In
              // DEV mode, we create a separate object for Context.Consumer that acts
              // like a proxy to Context. This proxy object adds unnecessary code in PROD
              // so we use the old behaviour (Context.Consumer references Context) to
              // reduce size and overhead. The separate object references context via
              // a property called "_context", which also gives us the ability to check
              // in DEV mode if this property exists or not and warn if it does not.

              {
                if (reactContext._context === undefined) {
                  // This may be because it's a Context (rather than a Consumer).
                  // Or it may be because it's older React where they're the same thing.
                  // We only want to warn if we're sure it's a new React.
                  if (reactContext !== reactContext.Consumer) {
                    if (!hasWarnedAboutUsingContextAsConsumer) {
                      hasWarnedAboutUsingContextAsConsumer = true;

                      error('Rendering <Context> directly is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                    }
                  }
                } else {
                  reactContext = reactContext._context;
                }
              }

              var _nextProps = nextChild.props;
              var threadID = this.threadID;
              validateContextBounds(reactContext, threadID);
              var nextValue = reactContext[threadID];

              var _nextChildren8 = toArray(_nextProps.children(nextValue));

              var _frame8 = {
                type: nextChild,
                domNamespace: parentNamespace,
                children: _nextChildren8,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame8.debugElementStack = [];
              }

              this.stack.push(_frame8);
              return '';
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_FUNDAMENTAL_TYPE:
            {

              {
                {
                  throw Error( "ReactDOMServer does not yet support the fundamental API." );
                }
              }
            }
          // eslint-disable-next-line-no-fallthrough

          case REACT_LAZY_TYPE:
            {
              var _element2 = nextChild;
              var lazyComponent = nextChild.type; // Attempt to initialize lazy component regardless of whether the
              // suspense server-side renderer is enabled so synchronously
              // resolved constructors are supported.

              var payload = lazyComponent._payload;
              var init = lazyComponent._init;
              var result = init(payload);
              var _nextChildren10 = [React.createElement(result, _assign({
                ref: _element2.ref
              }, _element2.props))];
              var _frame10 = {
                type: null,
                domNamespace: parentNamespace,
                children: _nextChildren10,
                childIndex: 0,
                context: context,
                footer: ''
              };

              {
                _frame10.debugElementStack = [];
              }

              this.stack.push(_frame10);
              return '';
            }
        }
      }

      var info = '';

      {
        var owner = nextElement._owner;

        if (elementType === undefined || typeof elementType === 'object' && elementType !== null && Object.keys(elementType).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and " + 'named imports.';
        }

        var ownerName = owner ? getComponentName(owner) : null;

        if (ownerName) {
          info += '\n\nCheck the render method of `' + ownerName + '`.';
        }
      }

      {
        {
          throw Error( "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (elementType == null ? elementType : typeof elementType) + "." + info );
        }
      }
    }
  };

  _proto.renderDOM = function renderDOM(element, context, parentNamespace) {
    var tag = element.type.toLowerCase();
    var namespace = parentNamespace;

    if (parentNamespace === Namespaces.html) {
      namespace = getIntrinsicNamespace(tag);
    }

    {
      if (namespace === Namespaces.html) {
        // Should this check be gated by parent namespace? Not sure we want to
        // allow <SVG> or <mATH>.
        if (tag !== element.type) {
          error('<%s /> is using incorrect casing. ' + 'Use PascalCase for React components, ' + 'or lowercase for HTML elements.', element.type);
        }
      }
    }

    validateDangerousTag(tag);
    var props = element.props;

    if (tag === 'input') {
      {
        checkControlledValueProps('input', props);

        if (props.checked !== undefined && props.defaultChecked !== undefined && !didWarnDefaultChecked) {
          error('%s contains an input of type %s with both checked and defaultChecked props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the checked prop, or the defaultChecked prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultChecked = true;
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultInputValue) {
          error('%s contains an input of type %s with both value and defaultValue props. ' + 'Input elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled input ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components', 'A component', props.type);

          didWarnDefaultInputValue = true;
        }
      }

      props = _assign({
        type: undefined
      }, props, {
        defaultChecked: undefined,
        defaultValue: undefined,
        value: props.value != null ? props.value : props.defaultValue,
        checked: props.checked != null ? props.checked : props.defaultChecked
      });
    } else if (tag === 'textarea') {
      {
        checkControlledValueProps('textarea', props);

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultTextareaValue) {
          error('Textarea elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled textarea ' + 'and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultTextareaValue = true;
        }
      }

      var initialValue = props.value;

      if (initialValue == null) {
        var defaultValue = props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.

        var textareaChildren = props.children;

        if (textareaChildren != null) {
          {
            error('Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.');
          }

          if (!(defaultValue == null)) {
            {
              throw Error( "If you supply `defaultValue` on a <textarea>, do not pass children." );
            }
          }

          if (Array.isArray(textareaChildren)) {
            if (!(textareaChildren.length <= 1)) {
              {
                throw Error( "<textarea> can only have at most one child." );
              }
            }

            textareaChildren = textareaChildren[0];
          }

          defaultValue = '' + textareaChildren;
        }

        if (defaultValue == null) {
          defaultValue = '';
        }

        initialValue = defaultValue;
      }

      props = _assign({}, props, {
        value: undefined,
        children: '' + initialValue
      });
    } else if (tag === 'select') {
      {
        checkControlledValueProps('select', props);

        for (var i = 0; i < valuePropNames.length; i++) {
          var propName = valuePropNames[i];

          if (props[propName] == null) {
            continue;
          }

          var isArray = Array.isArray(props[propName]);

          if (props.multiple && !isArray) {
            error('The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.', propName);
          } else if (!props.multiple && isArray) {
            error('The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.', propName);
          }
        }

        if (props.value !== undefined && props.defaultValue !== undefined && !didWarnDefaultSelectValue) {
          error('Select elements must be either controlled or uncontrolled ' + '(specify either the value prop, or the defaultValue prop, but not ' + 'both). Decide between using a controlled or uncontrolled select ' + 'element and remove one of these props. More info: ' + 'https://reactjs.org/link/controlled-components');

          didWarnDefaultSelectValue = true;
        }
      }

      this.currentSelectValue = props.value != null ? props.value : props.defaultValue;
      props = _assign({}, props, {
        value: undefined
      });
    } else if (tag === 'option') {
      var selected = null;
      var selectValue = this.currentSelectValue;
      var optionChildren = flattenOptionChildren(props.children);

      if (selectValue != null) {
        var value;

        if (props.value != null) {
          value = props.value + '';
        } else {
          value = optionChildren;
        }

        selected = false;

        if (Array.isArray(selectValue)) {
          // multiple
          for (var j = 0; j < selectValue.length; j++) {
            if ('' + selectValue[j] === value) {
              selected = true;
              break;
            }
          }
        } else {
          selected = '' + selectValue === value;
        }

        props = _assign({
          selected: undefined,
          children: undefined
        }, props, {
          selected: selected,
          children: optionChildren
        });
      }
    }

    {
      validatePropertiesInDevelopment(tag, props);
    }

    assertValidProps(tag, props);
    var out = createOpenTagMarkup(element.type, tag, props, namespace, this.makeStaticMarkup, this.stack.length === 1);
    var footer = '';

    if (omittedCloseTags.hasOwnProperty(tag)) {
      out += '/>';
    } else {
      out += '>';
      footer = '</' + element.type + '>';
    }

    var children;
    var innerMarkup = getNonChildrenInnerMarkup(props);

    if (innerMarkup != null) {
      children = [];

      if (newlineEatingTags.hasOwnProperty(tag) && innerMarkup.charAt(0) === '\n') {
        // text/html ignores the first character in these tags if it's a newline
        // Prefer to break application/xml over text/html (for now) by adding
        // a newline specifically to get eaten by the parser. (Alternately for
        // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
        // \r is normalized out by HTMLTextAreaElement#value.)
        // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
        // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
        // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
        // See: Parsing of "textarea" "listing" and "pre" elements
        //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
        out += '\n';
      }

      out += innerMarkup;
    } else {
      children = toArray(props.children);
    }

    var frame = {
      domNamespace: getChildNamespace(parentNamespace, element.type),
      type: tag,
      children: children,
      childIndex: 0,
      context: context,
      footer: footer
    };

    {
      frame.debugElementStack = [];
    }

    this.stack.push(frame);
    this.previousWasTextNode = false;
    return out;
  };

  return ReactDOMServerRenderer;
}();

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostring
 */

function renderToString(element, options) {
  var renderer = new ReactDOMServerRenderer(element, false, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}
/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://reactjs.org/docs/react-dom-server.html#rendertostaticmarkup
 */

function renderToStaticMarkup(element, options) {
  var renderer = new ReactDOMServerRenderer(element, true, options);

  try {
    var markup = renderer.read(Infinity);
    return markup;
  } finally {
    renderer.destroy();
  }
}

function renderToNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead." );
    }
  }
}

function renderToStaticNodeStream() {
  {
    {
      throw Error( "ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead." );
    }
  }
}

exports.renderToNodeStream = renderToNodeStream;
exports.renderToStaticMarkup = renderToStaticMarkup;
exports.renderToStaticNodeStream = renderToStaticNodeStream;
exports.renderToString = renderToString;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "../node_modules/react-dom/server.browser.js":
/*!***************************************************!*\
  !*** ../node_modules/react-dom/server.browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-dom-server.browser.development.js */ "../node_modules/react-dom/cjs/react-dom-server.browser.development.js");
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvUmVuZGVyUHJvbWlzZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL2dldERhdGFGcm9tVHJlZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9yZWFjdC9zc3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyL3JlbmRlclRvU3RyaW5nV2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20tc2VydmVyLmJyb3dzZXIuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL3NlcnZlci5icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ3lCO0FBQzFCLDBDOzs7Ozs7Ozs7Ozs7QUN2REE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNQO0FBQzZCO0FBQ0Y7QUFDOUM7QUFDUCw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyxxRUFBa0I7QUFDbEQsS0FBSztBQUNMO0FBQ087QUFDUCxxRUFBcUUsZ0VBQWdFLG1CQUFPLENBQUMscUVBQWtCO0FBQy9KLDZCQUE2QixpRUFBYztBQUMzQztBQUNBLDRCQUE0QiwwRUFBZ0I7QUFDNUM7QUFDQSwwQkFBMEIsNENBQUssd0NBQXdDLFFBQVEsc0RBQVEsQ0FBQyxzREFBUSxHQUFHLGFBQWEsaUNBQWlDLEdBQUc7QUFDcEo7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDJDOzs7Ozs7Ozs7Ozs7QUM1QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBFO0FBQ0w7QUFDaEI7QUFDckQsaUM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUF5RDtBQUNsRDtBQUNQLFdBQVcsNkVBQWlCO0FBQzVCO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMscUVBQWtCO0FBQ2xELEtBQUs7QUFDTDtBQUNBLGtEOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViLElBQUksSUFBcUM7QUFDekM7QUFDQTs7QUFFQSxZQUFZLG1CQUFPLENBQUMsNkNBQU87QUFDM0IsY0FBYyxtQkFBTyxDQUFDLGlGQUFlOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEZBQTBGLGFBQWE7QUFDdkc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEZBQThGLGVBQWU7QUFDN0c7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVAsaURBQWlEO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7QUFFUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCO0FBQ3hCO0FBQ0EsU0FBUztBQUNULHdCQUF3QjtBQUN4QjtBQUNBLFNBQVM7QUFDVCx5QkFBeUI7QUFDekI7QUFDQSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNULGtDQUFrQztBQUNsQztBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUI7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7O0FBRTFEO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0Q7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0JBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOzs7QUFHakI7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEg7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtRUFBbUU7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZUFBZTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrSUFBK0k7O0FBRS9JO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsb0VBQW9FLDRDQUE0QztBQUNoSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7QUFHQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBRTtBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFFO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTztBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixFQUFFLDhCQUE4Qjs7QUFFeEQ7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsWUFBWSxRQUFRO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLEVBQUU7QUFDYixZQUFZLE9BQU87QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEI7O0FBRTlCLHVCQUF1Qjs7QUFFdkIseUNBQXlDOztBQUV6Qyw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiw0Q0FBNEM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFLFlBQVk7QUFDeEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJIQUEySCw2QkFBNkI7QUFDeEo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixZQUFZLE9BQU87QUFDbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxFQUFFO0FBQ2IsWUFBWSxPQUFPO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCOztBQUU5Qiw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRkFBa0Y7QUFDbEY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTywwQ0FBMEM7OztBQUdqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrRkFBK0Y7QUFDL0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTywwQ0FBMEM7OztBQUdqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNkU7O0FBRTdFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0pBQXNKLGlCQUFpQjtBQUN2SyxPQUFPO0FBQ1Asc0pBQXNKLGlCQUFpQix3REFBd0QsbUJBQW1CLGdCQUFnQiw4QkFBOEI7QUFDaFM7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0Esb0dBQW9HLEdBQUc7O0FBRXZHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtFQUFrRTs7QUFFbEUsd0NBQXdDOztBQUV4QywwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0EsbUJBQW1COztBQUVuQixtQ0FBbUMsUUFBUTtBQUMzQyw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTs7QUFFQSxpREFBaUQsU0FBUztBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUEsb0RBQW9EOztBQUVwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEsMENBQTBDLHFCQUFxQjtBQUMvRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0EsNEpBQTRKLFNBQTJCO0FBQ3ZMO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7O0FBRXJEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ1BBQWdQLFNBQTJCO0FBQzNRO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2Isa0JBQWtCLElBQU07QUFDeEI7QUFDQSx1RkFBdUYsU0FBMkI7QUFDbEg7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhDQUE4Qzs7QUFFOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBLHVCQUF1QiwyQkFBMkI7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDcnZJYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw0SEFBK0M7QUFDMUUiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFrZURlZmF1bHRRdWVyeUluZm8oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VlbjogZmFsc2UsXG4gICAgICAgIG9ic2VydmFibGU6IG51bGxcbiAgICB9O1xufVxudmFyIFJlbmRlclByb21pc2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZW5kZXJQcm9taXNlcygpIHtcbiAgICAgICAgdGhpcy5xdWVyeVByb21pc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnF1ZXJ5SW5mb1RyaWUgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIFJlbmRlclByb21pc2VzLnByb3RvdHlwZS5yZWdpc3RlclNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAob2JzZXJ2YWJsZSwgcHJvcHMpIHtcbiAgICAgICAgdGhpcy5sb29rdXBRdWVyeUluZm8ocHJvcHMpLm9ic2VydmFibGUgPSBvYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmdldFNTUk9ic2VydmFibGUgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9va3VwUXVlcnlJbmZvKHByb3BzKS5vYnNlcnZhYmxlO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmFkZFF1ZXJ5UHJvbWlzZSA9IGZ1bmN0aW9uIChxdWVyeUluc3RhbmNlLCBmaW5pc2gpIHtcbiAgICAgICAgdmFyIGluZm8gPSB0aGlzLmxvb2t1cFF1ZXJ5SW5mbyhxdWVyeUluc3RhbmNlLmdldE9wdGlvbnMoKSk7XG4gICAgICAgIGlmICghaW5mby5zZWVuKSB7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2V0KHF1ZXJ5SW5zdGFuY2UuZ2V0T3B0aW9ucygpLCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocXVlcnlJbnN0YW5jZS5mZXRjaERhdGEoKSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluaXNoKCk7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuaGFzUHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5UHJvbWlzZXMuc2l6ZSA+IDA7XG4gICAgfTtcbiAgICBSZW5kZXJQcm9taXNlcy5wcm90b3R5cGUuY29uc3VtZUFuZEF3YWl0UHJvbWlzZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLnF1ZXJ5UHJvbWlzZXMuZm9yRWFjaChmdW5jdGlvbiAocHJvbWlzZSwgcXVlcnlJbnN0YW5jZSkge1xuICAgICAgICAgICAgX3RoaXMubG9va3VwUXVlcnlJbmZvKHF1ZXJ5SW5zdGFuY2UpLnNlZW4gPSB0cnVlO1xuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChwcm9taXNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlcnlQcm9taXNlcy5jbGVhcigpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH07XG4gICAgUmVuZGVyUHJvbWlzZXMucHJvdG90eXBlLmxvb2t1cFF1ZXJ5SW5mbyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICB2YXIgcXVlcnlJbmZvVHJpZSA9IHRoaXMucXVlcnlJbmZvVHJpZTtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gcHJvcHMucXVlcnksIHZhcmlhYmxlcyA9IHByb3BzLnZhcmlhYmxlcztcbiAgICAgICAgdmFyIHZhck1hcCA9IHF1ZXJ5SW5mb1RyaWUuZ2V0KHF1ZXJ5KSB8fCBuZXcgTWFwKCk7XG4gICAgICAgIGlmICghcXVlcnlJbmZvVHJpZS5oYXMocXVlcnkpKVxuICAgICAgICAgICAgcXVlcnlJbmZvVHJpZS5zZXQocXVlcnksIHZhck1hcCk7XG4gICAgICAgIHZhciB2YXJpYWJsZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh2YXJpYWJsZXMpO1xuICAgICAgICB2YXIgaW5mbyA9IHZhck1hcC5nZXQodmFyaWFibGVzU3RyaW5nKSB8fCBtYWtlRGVmYXVsdFF1ZXJ5SW5mbygpO1xuICAgICAgICBpZiAoIXZhck1hcC5oYXModmFyaWFibGVzU3RyaW5nKSlcbiAgICAgICAgICAgIHZhck1hcC5zZXQodmFyaWFibGVzU3RyaW5nLCBpbmZvKTtcbiAgICAgICAgcmV0dXJuIGluZm87XG4gICAgfTtcbiAgICByZXR1cm4gUmVuZGVyUHJvbWlzZXM7XG59KCkpO1xuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVJlbmRlclByb21pc2VzLmpzLm1hcCIsImltcG9ydCB7IF9fYXNzaWduIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0QXBvbGxvQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2luZGV4LmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQcm9taXNlcyB9IGZyb20gXCIuL1JlbmRlclByb21pc2VzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZyb21UcmVlKHRyZWUsIGNvbnRleHQpIHtcbiAgICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7IGNvbnRleHQgPSB7fTsgfVxuICAgIHJldHVybiBnZXRNYXJrdXBGcm9tVHJlZSh7XG4gICAgICAgIHRyZWU6IHRyZWUsXG4gICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgIHJlbmRlckZ1bmN0aW9uOiByZXF1aXJlKCdyZWFjdC1kb20vc2VydmVyJykucmVuZGVyVG9TdGF0aWNNYXJrdXBcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXJrdXBGcm9tVHJlZShfYSkge1xuICAgIHZhciB0cmVlID0gX2EudHJlZSwgX2IgPSBfYS5jb250ZXh0LCBjb250ZXh0ID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2IsIF9jID0gX2EucmVuZGVyRnVuY3Rpb24sIHJlbmRlckZ1bmN0aW9uID0gX2MgPT09IHZvaWQgMCA/IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0YXRpY01hcmt1cCA6IF9jO1xuICAgIHZhciByZW5kZXJQcm9taXNlcyA9IG5ldyBSZW5kZXJQcm9taXNlcygpO1xuICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICAgIHZhciBBcG9sbG9Db250ZXh0ID0gZ2V0QXBvbGxvQ29udGV4dCgpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChBcG9sbG9Db250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgY29udGV4dCksIHsgcmVuZGVyUHJvbWlzZXM6IHJlbmRlclByb21pc2VzIH0pIH0sIHRyZWUpO1xuICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJGdW5jdGlvbihlbGVtZW50KSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJQcm9taXNlcy5oYXNQcm9taXNlcygpXG4gICAgICAgICAgICAgICAgPyByZW5kZXJQcm9taXNlcy5jb25zdW1lQW5kQXdhaXRQcm9taXNlcygpLnRoZW4ocHJvY2VzcylcbiAgICAgICAgICAgICAgICA6IGh0bWw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihwcm9jZXNzKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldERhdGFGcm9tVHJlZS5qcy5tYXAiLCJleHBvcnQgeyBnZXRNYXJrdXBGcm9tVHJlZSwgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSBcIi4vZ2V0RGF0YUZyb21UcmVlLmpzXCI7XG5leHBvcnQgeyByZW5kZXJUb1N0cmluZ1dpdGhEYXRhIH0gZnJvbSBcIi4vcmVuZGVyVG9TdHJpbmdXaXRoRGF0YS5qc1wiO1xuZXhwb3J0IHsgUmVuZGVyUHJvbWlzZXMgfSBmcm9tIFwiLi9SZW5kZXJQcm9taXNlcy5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgZ2V0TWFya3VwRnJvbVRyZWUgfSBmcm9tIFwiLi9nZXREYXRhRnJvbVRyZWUuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUb1N0cmluZ1dpdGhEYXRhKGNvbXBvbmVudCkge1xuICAgIHJldHVybiBnZXRNYXJrdXBGcm9tVHJlZSh7XG4gICAgICAgIHRyZWU6IGNvbXBvbmVudCxcbiAgICAgICAgcmVuZGVyRnVuY3Rpb246IHJlcXVpcmUoJ3JlYWN0LWRvbS9zZXJ2ZXInKS5yZW5kZXJUb1N0cmluZ1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVuZGVyVG9TdHJpbmdXaXRoRGF0YS5qcy5tYXAiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMVxuICogcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBEbyBub3QgcmVxdWlyZSB0aGlzIG1vZHVsZSBkaXJlY3RseSEgVXNlIG5vcm1hbCBgaW52YXJpYW50YCBjYWxscyB3aXRoXG4vLyB0ZW1wbGF0ZSBsaXRlcmFsIHN0cmluZ3MuIFRoZSBtZXNzYWdlcyB3aWxsIGJlIHJlcGxhY2VkIHdpdGggZXJyb3IgY29kZXNcbi8vIGR1cmluZyBidWlsZC5cbmZ1bmN0aW9uIGZvcm1hdFByb2RFcnJvck1lc3NhZ2UoY29kZSkge1xuICB2YXIgdXJsID0gJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PScgKyBjb2RlO1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdXJsICs9ICcmYXJnc1tdPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2ldKTtcbiAgfVxuXG4gIHJldHVybiBcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIiArIGNvZGUgKyBcIjsgdmlzaXQgXCIgKyB1cmwgKyBcIiBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciBcIiArICd1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsICcgKyAnaGVscGZ1bCB3YXJuaW5ncy4nO1xufVxuXG4vLyBUT0RPOiB0aGlzIGlzIHNwZWNpYWwgYmVjYXVzZSBpdCBnZXRzIGltcG9ydGVkIGR1cmluZyBidWlsZC5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTcuMC4xJztcblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVN1c3BlbnNlU2VydmVyUmVuZGVyZXIgPSBmYWxzZTtcblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0SW52YWxpZGF0ZUNvbnRleHRUeXBlO1xuXG57XG4gIGRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZSA9IG5ldyBTZXQoKTtcbn1cblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1hc2tDb250ZXh0KHR5cGUsIGNvbnRleHQpIHtcbiAgdmFyIGNvbnRleHRUeXBlcyA9IHR5cGUuY29udGV4dFR5cGVzO1xuXG4gIGlmICghY29udGV4dFR5cGVzKSB7XG4gICAgcmV0dXJuIGVtcHR5T2JqZWN0O1xuICB9XG5cbiAgdmFyIG1hc2tlZENvbnRleHQgPSB7fTtcblxuICBmb3IgKHZhciBjb250ZXh0TmFtZSBpbiBjb250ZXh0VHlwZXMpIHtcbiAgICBtYXNrZWRDb250ZXh0W2NvbnRleHROYW1lXSA9IGNvbnRleHRbY29udGV4dE5hbWVdO1xuICB9XG5cbiAgcmV0dXJuIG1hc2tlZENvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrQ29udGV4dFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbikge1xuICB7XG4gICAgY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCAnQ29tcG9uZW50Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKSB7XG4gIC8vIElmIHdlIGRvbid0IGhhdmUgZW5vdWdoIHNsb3RzIGluIHRoaXMgY29udGV4dCB0byBzdG9yZSB0aGlzIHRocmVhZElELFxuICAvLyBmaWxsIGl0IGluIHdpdGhvdXQgbGVhdmluZyBhbnkgaG9sZXMgdG8gZW5zdXJlIHRoYXQgdGhlIFZNIG9wdGltaXplc1xuICAvLyB0aGlzIGFzIG5vbi1ob2xleSBpbmRleCBwcm9wZXJ0aWVzLlxuICAvLyAoTm90ZTogSWYgYHJlYWN0YCBwYWNrYWdlIGlzIDwgMTYuNiwgX3RocmVhZENvdW50IGlzIHVuZGVmaW5lZC4pXG4gIGZvciAodmFyIGkgPSBjb250ZXh0Ll90aHJlYWRDb3VudCB8IDA7IGkgPD0gdGhyZWFkSUQ7IGkrKykge1xuICAgIC8vIFdlIGFzc3VtZSB0aGF0IHRoaXMgaXMgdGhlIHNhbWUgYXMgdGhlIGRlZmF1bHRWYWx1ZSB3aGljaCBtaWdodCBub3QgYmVcbiAgICAvLyB0cnVlIGlmIHdlJ3JlIHJlbmRlcmluZyBpbnNpZGUgYSBzZWNvbmRhcnkgcmVuZGVyZXIgYnV0IHRoZXkgYXJlXG4gICAgLy8gc2Vjb25kYXJ5IGJlY2F1c2UgdGhlc2UgdXNlIGNhc2VzIGFyZSB2ZXJ5IHJhcmUuXG4gICAgY29udGV4dFtpXSA9IGNvbnRleHQuX2N1cnJlbnRWYWx1ZTI7XG4gICAgY29udGV4dC5fdGhyZWFkQ291bnQgPSBpICsgMTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc0NvbnRleHQodHlwZSwgY29udGV4dCwgdGhyZWFkSUQsIGlzQ2xhc3MpIHtcbiAgaWYgKGlzQ2xhc3MpIHtcbiAgICB2YXIgY29udGV4dFR5cGUgPSB0eXBlLmNvbnRleHRUeXBlO1xuXG4gICAge1xuICAgICAgaWYgKCdjb250ZXh0VHlwZScgaW4gdHlwZSkge1xuICAgICAgICB2YXIgaXNWYWxpZCA9IC8vIEFsbG93IG51bGwgZm9yIGNvbmRpdGlvbmFsIGRlY2xhcmF0aW9uXG4gICAgICAgIGNvbnRleHRUeXBlID09PSBudWxsIHx8IGNvbnRleHRUeXBlICE9PSB1bmRlZmluZWQgJiYgY29udGV4dFR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSAmJiBjb250ZXh0VHlwZS5fY29udGV4dCA9PT0gdW5kZWZpbmVkOyAvLyBOb3QgYSA8Q29udGV4dC5Db25zdW1lcj5cblxuICAgICAgICBpZiAoIWlzVmFsaWQgJiYgIWRpZFdhcm5BYm91dEludmFsaWRhdGVDb250ZXh0VHlwZS5oYXModHlwZSkpIHtcbiAgICAgICAgICBkaWRXYXJuQWJvdXRJbnZhbGlkYXRlQ29udGV4dFR5cGUuYWRkKHR5cGUpO1xuICAgICAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHRUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBIb3dldmVyLCBpdCBpcyBzZXQgdG8gdW5kZWZpbmVkLiAnICsgJ1RoaXMgY2FuIGJlIGNhdXNlZCBieSBhIHR5cG8gb3IgYnkgbWl4aW5nIHVwIG5hbWVkIGFuZCBkZWZhdWx0IGltcG9ydHMuICcgKyAnVGhpcyBjYW4gYWxzbyBoYXBwZW4gZHVlIHRvIGEgY2lyY3VsYXIgZGVwZW5kZW5jeSwgc28gJyArICd0cnkgbW92aW5nIHRoZSBjcmVhdGVDb250ZXh0KCkgY2FsbCB0byBhIHNlcGFyYXRlIGZpbGUuJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb250ZXh0VHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBIb3dldmVyLCBpdCBpcyBzZXQgdG8gYSAnICsgdHlwZW9mIGNvbnRleHRUeXBlICsgJy4nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dFR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUpIHtcbiAgICAgICAgICAgIGFkZGVuZHVtID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIHRoZSBDb250ZXh0LlByb3ZpZGVyIGluc3RlYWQ/JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRleHRUeXBlLl9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIDxDb250ZXh0LkNvbnN1bWVyPlxuICAgICAgICAgICAgYWRkZW5kdW0gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgdGhlIENvbnRleHQuQ29uc3VtZXIgaW5zdGVhZD8nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhZGRlbmR1bSA9ICcgSG93ZXZlciwgaXQgaXMgc2V0IHRvIGFuIG9iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjb250ZXh0VHlwZSkuam9pbignLCAnKSArICd9Lic7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IoJyVzIGRlZmluZXMgYW4gaW52YWxpZCBjb250ZXh0VHlwZS4gJyArICdjb250ZXh0VHlwZSBzaG91bGQgcG9pbnQgdG8gdGhlIENvbnRleHQgb2JqZWN0IHJldHVybmVkIGJ5IFJlYWN0LmNyZWF0ZUNvbnRleHQoKS4lcycsIGdldENvbXBvbmVudE5hbWUodHlwZSkgfHwgJ0NvbXBvbmVudCcsIGFkZGVuZHVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29udGV4dFR5cGUgPT09ICdvYmplY3QnICYmIGNvbnRleHRUeXBlICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dFR5cGUsIHRocmVhZElEKTtcbiAgICAgIHJldHVybiBjb250ZXh0VHlwZVt0aHJlYWRJRF07XG4gICAgfVxuXG4gICAge1xuICAgICAgdmFyIG1hc2tlZENvbnRleHQgPSBtYXNrQ29udGV4dCh0eXBlLCBjb250ZXh0KTtcblxuICAgICAge1xuICAgICAgICBpZiAodHlwZS5jb250ZXh0VHlwZXMpIHtcbiAgICAgICAgICBjaGVja0NvbnRleHRUeXBlcyh0eXBlLmNvbnRleHRUeXBlcywgbWFza2VkQ29udGV4dCwgJ2NvbnRleHQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFza2VkQ29udGV4dDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgdmFyIF9tYXNrZWRDb250ZXh0ID0gbWFza0NvbnRleHQodHlwZSwgY29udGV4dCk7XG5cbiAgICAgIHtcbiAgICAgICAgaWYgKHR5cGUuY29udGV4dFR5cGVzKSB7XG4gICAgICAgICAgY2hlY2tDb250ZXh0VHlwZXModHlwZS5jb250ZXh0VHlwZXMsIF9tYXNrZWRDb250ZXh0LCAnY29udGV4dCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfbWFza2VkQ29udGV4dDtcbiAgICB9XG4gIH1cbn1cblxudmFyIG5leHRBdmFpbGFibGVUaHJlYWRJRHMgPSBuZXcgVWludDE2QXJyYXkoMTYpO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDE1OyBpKyspIHtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tpXSA9IGkgKyAxO1xufVxuXG5uZXh0QXZhaWxhYmxlVGhyZWFkSURzWzE1XSA9IDA7XG5cbmZ1bmN0aW9uIGdyb3dUaHJlYWRDb3VudEFuZFJldHVybk5leHRBdmFpbGFibGUoKSB7XG4gIHZhciBvbGRBcnJheSA9IG5leHRBdmFpbGFibGVUaHJlYWRJRHM7XG4gIHZhciBvbGRTaXplID0gb2xkQXJyYXkubGVuZ3RoO1xuICB2YXIgbmV3U2l6ZSA9IG9sZFNpemUgKiAyO1xuXG4gIGlmICghKG5ld1NpemUgPD0gMHgxMDAwMCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJNYXhpbXVtIG51bWJlciBvZiBjb25jdXJyZW50IFJlYWN0IHJlbmRlcmVycyBleGNlZWRlZC4gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBhcmUgbm90IHByb3Blcmx5IGRlc3Ryb3lpbmcgdGhlIFJlYWRhYmxlIHByb3ZpZGVkIGJ5IFJlYWN0LiBFbnN1cmUgdGhhdCB5b3UgY2FsbCAuZGVzdHJveSgpIG9uIGl0IGlmIHlvdSBubyBsb25nZXIgd2FudCB0byByZWFkIGZyb20gaXQsIGFuZCBkaWQgbm90IHJlYWQgdG8gdGhlIGVuZC4gSWYgeW91IHVzZSAucGlwZSgpIHRoaXMgc2hvdWxkIGJlIGF1dG9tYXRpYy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBuZXdBcnJheSA9IG5ldyBVaW50MTZBcnJheShuZXdTaXplKTtcbiAgbmV3QXJyYXkuc2V0KG9sZEFycmF5KTtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEcyA9IG5ld0FycmF5O1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdID0gb2xkU2l6ZSArIDE7XG5cbiAgZm9yICh2YXIgX2kgPSBvbGRTaXplOyBfaSA8IG5ld1NpemUgLSAxOyBfaSsrKSB7XG4gICAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tfaV0gPSBfaSArIDE7XG4gIH1cblxuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW25ld1NpemUgLSAxXSA9IDA7XG4gIHJldHVybiBvbGRTaXplO1xufVxuXG5mdW5jdGlvbiBhbGxvY1RocmVhZElEKCkge1xuICB2YXIgbmV4dElEID0gbmV4dEF2YWlsYWJsZVRocmVhZElEc1swXTtcblxuICBpZiAobmV4dElEID09PSAwKSB7XG4gICAgcmV0dXJuIGdyb3dUaHJlYWRDb3VudEFuZFJldHVybk5leHRBdmFpbGFibGUoKTtcbiAgfVxuXG4gIG5leHRBdmFpbGFibGVUaHJlYWRJRHNbMF0gPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzW25leHRJRF07XG4gIHJldHVybiBuZXh0SUQ7XG59XG5mdW5jdGlvbiBmcmVlVGhyZWFkSUQoaWQpIHtcbiAgbmV4dEF2YWlsYWJsZVRocmVhZElEc1tpZF0gPSBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdO1xuICBuZXh0QXZhaWxhYmxlVGhyZWFkSURzWzBdID0gaWQ7XG59XG5cbi8vIEEgcmVzZXJ2ZWQgYXR0cmlidXRlLlxuLy8gSXQgaXMgaGFuZGxlZCBieSBSZWFjdCBzZXBhcmF0ZWx5IGFuZCBzaG91bGRuJ3QgYmUgd3JpdHRlbiB0byB0aGUgRE9NLlxudmFyIFJFU0VSVkVEID0gMDsgLy8gQSBzaW1wbGUgc3RyaW5nIGF0dHJpYnV0ZS5cbi8vIEF0dHJpYnV0ZXMgdGhhdCBhcmVuJ3QgaW4gdGhlIGZpbHRlciBhcmUgcHJlc3VtZWQgdG8gaGF2ZSB0aGlzIHR5cGUuXG5cbnZhciBTVFJJTkcgPSAxOyAvLyBBIHN0cmluZyBhdHRyaWJ1dGUgdGhhdCBhY2NlcHRzIGJvb2xlYW5zIGluIFJlYWN0LiBJbiBIVE1MLCB0aGVzZSBhcmUgY2FsbGVkXG4vLyBcImVudW1lcmF0ZWRcIiBhdHRyaWJ1dGVzIHdpdGggXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIiBhcyBwb3NzaWJsZSB2YWx1ZXMuXG4vLyBXaGVuIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gYSBcInRydWVcIiBzdHJpbmcuXG4vLyBXaGVuIGZhbHNlLCBpdCBzaG91bGQgYmUgc2V0IHRvIGEgXCJmYWxzZVwiIHN0cmluZy5cblxudmFyIEJPT0xFQU5JU0hfU1RSSU5HID0gMjsgLy8gQSByZWFsIGJvb2xlYW4gYXR0cmlidXRlLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgcHJlc2VudCAoc2V0IGVpdGhlciB0byBhbiBlbXB0eSBzdHJpbmcgb3IgaXRzIG5hbWUpLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXG5cbnZhciBCT09MRUFOID0gMzsgLy8gQW4gYXR0cmlidXRlIHRoYXQgY2FuIGJlIHVzZWQgYXMgYSBmbGFnIGFzIHdlbGwgYXMgd2l0aCBhIHZhbHVlLlxuLy8gV2hlbiB0cnVlLCBpdCBzaG91bGQgYmUgcHJlc2VudCAoc2V0IGVpdGhlciB0byBhbiBlbXB0eSBzdHJpbmcgb3IgaXRzIG5hbWUpLlxuLy8gV2hlbiBmYWxzZSwgaXQgc2hvdWxkIGJlIG9taXR0ZWQuXG4vLyBGb3IgYW55IG90aGVyIHZhbHVlLCBzaG91bGQgYmUgcHJlc2VudCB3aXRoIHRoYXQgdmFsdWUuXG5cbnZhciBPVkVSTE9BREVEX0JPT0xFQU4gPSA0OyAvLyBBbiBhdHRyaWJ1dGUgdGhhdCBtdXN0IGJlIG51bWVyaWMgb3IgcGFyc2UgYXMgYSBudW1lcmljLlxuLy8gV2hlbiBmYWxzeSwgaXQgc2hvdWxkIGJlIHJlbW92ZWQuXG5cbnZhciBOVU1FUklDID0gNTsgLy8gQW4gYXR0cmlidXRlIHRoYXQgbXVzdCBiZSBwb3NpdGl2ZSBudW1lcmljIG9yIHBhcnNlIGFzIGEgcG9zaXRpdmUgbnVtZXJpYy5cbi8vIFdoZW4gZmFsc3ksIGl0IHNob3VsZCBiZSByZW1vdmVkLlxuXG52YXIgUE9TSVRJVkVfTlVNRVJJQyA9IDY7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbnZhciBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSID0gXCI6QS1aX2EtelxcXFx1MDBDMC1cXFxcdTAwRDZcXFxcdTAwRDgtXFxcXHUwMEY2XFxcXHUwMEY4LVxcXFx1MDJGRlxcXFx1MDM3MC1cXFxcdTAzN0RcXFxcdTAzN0YtXFxcXHUxRkZGXFxcXHUyMDBDLVxcXFx1MjAwRFxcXFx1MjA3MC1cXFxcdTIxOEZcXFxcdTJDMDAtXFxcXHUyRkVGXFxcXHUzMDAxLVxcXFx1RDdGRlxcXFx1RjkwMC1cXFxcdUZEQ0ZcXFxcdUZERjAtXFxcXHVGRkZEXCI7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxudmFyIEFUVFJJQlVURV9OQU1FX0NIQVIgPSBBVFRSSUJVVEVfTkFNRV9TVEFSVF9DSEFSICsgXCJcXFxcLS4wLTlcXFxcdTAwQjdcXFxcdTAzMDAtXFxcXHUwMzZGXFxcXHUyMDNGLVxcXFx1MjA0MFwiO1xudmFyIFJPT1RfQVRUUklCVVRFX05BTUUgPSAnZGF0YS1yZWFjdHJvb3QnO1xudmFyIFZBTElEX0FUVFJJQlVURV9OQU1FX1JFR0VYID0gbmV3IFJlZ0V4cCgnXlsnICsgQVRUUklCVVRFX05BTUVfU1RBUlRfQ0hBUiArICddWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlID0ge307XG52YXIgdmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlID0ge307XG5mdW5jdGlvbiBpc0F0dHJpYnV0ZU5hbWVTYWZlKGF0dHJpYnV0ZU5hbWUpIHtcbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodmFsaWRhdGVkQXR0cmlidXRlTmFtZUNhY2hlLCBhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoaWxsZWdhbEF0dHJpYnV0ZU5hbWVDYWNoZSwgYXR0cmlidXRlTmFtZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoVkFMSURfQVRUUklCVVRFX05BTUVfUkVHRVgudGVzdChhdHRyaWJ1dGVOYW1lKSkge1xuICAgIHZhbGlkYXRlZEF0dHJpYnV0ZU5hbWVDYWNoZVthdHRyaWJ1dGVOYW1lXSA9IHRydWU7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbGxlZ2FsQXR0cmlidXRlTmFtZUNhY2hlW2F0dHJpYnV0ZU5hbWVdID0gdHJ1ZTtcblxuICB7XG4gICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIG5hbWU6IGAlc2AnLCBhdHRyaWJ1dGVOYW1lKTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIHNob3VsZElnbm9yZUF0dHJpYnV0ZShuYW1lLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJbmZvLnR5cGUgPT09IFJFU0VSVkVEO1xuICB9XG5cbiAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKG5hbWUubGVuZ3RoID4gMiAmJiAobmFtZVswXSA9PT0gJ28nIHx8IG5hbWVbMF0gPT09ICdPJykgJiYgKG5hbWVbMV0gPT09ICduJyB8fCBuYW1lWzFdID09PSAnTicpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgY2FzZSAnZnVuY3Rpb24nOiAvLyAkRmxvd0lzc3VlIHN5bWJvbCBpcyBwZXJmZWN0bHkgdmFsaWQgaGVyZVxuXG4gICAgY2FzZSAnc3ltYm9sJzpcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICB7XG4gICAgICAgIGlmIChpc0N1c3RvbUNvbXBvbmVudFRhZykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wZXJ0eUluZm8gIT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gIXByb3BlcnR5SW5mby5hY2NlcHRzQm9vbGVhbnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHByZWZpeCA9IG5hbWUudG9Mb3dlckNhc2UoKS5zbGljZSgwLCA1KTtcbiAgICAgICAgICByZXR1cm4gcHJlZml4ICE9PSAnZGF0YS0nICYmIHByZWZpeCAhPT0gJ2FyaWEtJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuZnVuY3Rpb24gc2hvdWxkUmVtb3ZlQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGlzQ3VzdG9tQ29tcG9uZW50VGFnKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoc2hvdWxkUmVtb3ZlQXR0cmlidXRlV2l0aFdhcm5pbmcobmFtZSwgdmFsdWUsIHByb3BlcnR5SW5mbywgaXNDdXN0b21Db21wb25lbnRUYWcpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNDdXN0b21Db21wb25lbnRUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG5cbiAgICBzd2l0Y2ggKHByb3BlcnR5SW5mby50eXBlKSB7XG4gICAgICBjYXNlIEJPT0xFQU46XG4gICAgICAgIHJldHVybiAhdmFsdWU7XG5cbiAgICAgIGNhc2UgT1ZFUkxPQURFRF9CT09MRUFOOlxuICAgICAgICByZXR1cm4gdmFsdWUgPT09IGZhbHNlO1xuXG4gICAgICBjYXNlIE5VTUVSSUM6XG4gICAgICAgIHJldHVybiBpc05hTih2YWx1ZSk7XG5cbiAgICAgIGNhc2UgUE9TSVRJVkVfTlVNRVJJQzpcbiAgICAgICAgcmV0dXJuIGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA8IDE7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gZ2V0UHJvcGVydHlJbmZvKG5hbWUpIHtcbiAgcmV0dXJuIHByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkobmFtZSkgPyBwcm9wZXJ0aWVzW25hbWVdIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIHR5cGUsIG11c3RVc2VQcm9wZXJ0eSwgYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlTmFtZXNwYWNlLCBzYW5pdGl6ZVVSTCwgcmVtb3ZlRW1wdHlTdHJpbmcpIHtcbiAgdGhpcy5hY2NlcHRzQm9vbGVhbnMgPSB0eXBlID09PSBCT09MRUFOSVNIX1NUUklORyB8fCB0eXBlID09PSBCT09MRUFOIHx8IHR5cGUgPT09IE9WRVJMT0FERURfQk9PTEVBTjtcbiAgdGhpcy5hdHRyaWJ1dGVOYW1lID0gYXR0cmlidXRlTmFtZTtcbiAgdGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2UgPSBhdHRyaWJ1dGVOYW1lc3BhY2U7XG4gIHRoaXMubXVzdFVzZVByb3BlcnR5ID0gbXVzdFVzZVByb3BlcnR5O1xuICB0aGlzLnByb3BlcnR5TmFtZSA9IG5hbWU7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG4gIHRoaXMuc2FuaXRpemVVUkwgPSBzYW5pdGl6ZVVSTDtcbiAgdGhpcy5yZW1vdmVFbXB0eVN0cmluZyA9IHJlbW92ZUVtcHR5U3RyaW5nO1xufSAvLyBXaGVuIGFkZGluZyBhdHRyaWJ1dGVzIHRvIHRoaXMgbGlzdCwgYmUgc3VyZSB0byBhbHNvIGFkZCB0aGVtIHRvXG4vLyB0aGUgYHBvc3NpYmxlU3RhbmRhcmROYW1lc2AgbW9kdWxlIHRvIGVuc3VyZSBjYXNpbmcgYW5kIGluY29ycmVjdFxuLy8gbmFtZSB3YXJuaW5ncy5cblxuXG52YXIgcHJvcGVydGllcyA9IHt9OyAvLyBUaGVzZSBwcm9wcyBhcmUgcmVzZXJ2ZWQgYnkgUmVhY3QuIFRoZXkgc2hvdWxkbid0IGJlIHdyaXR0ZW4gdG8gdGhlIERPTS5cblxudmFyIHJlc2VydmVkUHJvcHMgPSBbJ2NoaWxkcmVuJywgJ2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MJywgLy8gVE9ETzogVGhpcyBwcmV2ZW50cyB0aGUgYXNzaWdubWVudCBvZiBkZWZhdWx0VmFsdWUgdG8gcmVndWxhclxuLy8gZWxlbWVudHMgKG5vdCBqdXN0IGlucHV0cykuIE5vdyB0aGF0IFJlYWN0RE9NSW5wdXQgYXNzaWducyB0byB0aGVcbi8vIGRlZmF1bHRWYWx1ZSBwcm9wZXJ0eSAtLSBkbyB3ZSBuZWVkIHRoaXM/XG4nZGVmYXVsdFZhbHVlJywgJ2RlZmF1bHRDaGVja2VkJywgJ2lubmVySFRNTCcsICdzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcnLCAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJywgJ3N0eWxlJ107XG5yZXNlcnZlZFByb3BzLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgUkVTRVJWRUQsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBBIGZldyBSZWFjdCBzdHJpbmcgYXR0cmlidXRlcyBoYXZlIGEgZGlmZmVyZW50IG5hbWUuXG4vLyBUaGlzIGlzIGEgbWFwcGluZyBmcm9tIFJlYWN0IHByb3AgbmFtZXMgdG8gdGhlIGF0dHJpYnV0ZSBuYW1lcy5cblxuW1snYWNjZXB0Q2hhcnNldCcsICdhY2NlcHQtY2hhcnNldCddLCBbJ2NsYXNzTmFtZScsICdjbGFzcyddLCBbJ2h0bWxGb3InLCAnZm9yJ10sIFsnaHR0cEVxdWl2JywgJ2h0dHAtZXF1aXYnXV0uZm9yRWFjaChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgbmFtZSA9IF9yZWZbMF0sXG4gICAgICBhdHRyaWJ1dGVOYW1lID0gX3JlZlsxXTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIFwiZW51bWVyYXRlZFwiIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFjY2VwdCBcInRydWVcIiBhbmQgXCJmYWxzZVwiLlxuLy8gSW4gUmVhY3QsIHdlIGxldCB1c2VycyBwYXNzIGB0cnVlYCBhbmQgYGZhbHNlYCBldmVuIHRob3VnaCB0ZWNobmljYWxseVxuLy8gdGhlc2UgYXJlbid0IGJvb2xlYW4gYXR0cmlidXRlcyAodGhleSBhcmUgY29lcmNlZCB0byBzdHJpbmdzKS5cblxuWydjb250ZW50RWRpdGFibGUnLCAnZHJhZ2dhYmxlJywgJ3NwZWxsQ2hlY2snLCAndmFsdWUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gIHByb3BlcnRpZXNbbmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKG5hbWUsIEJPT0xFQU5JU0hfU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgXCJlbnVtZXJhdGVkXCIgU1ZHIGF0dHJpYnV0ZXMgdGhhdCBhY2NlcHQgXCJ0cnVlXCIgYW5kIFwiZmFsc2VcIi5cbi8vIEluIFJlYWN0LCB3ZSBsZXQgdXNlcnMgcGFzcyBgdHJ1ZWAgYW5kIGBmYWxzZWAgZXZlbiB0aG91Z2ggdGVjaG5pY2FsbHlcbi8vIHRoZXNlIGFyZW4ndCBib29sZWFuIGF0dHJpYnV0ZXMgKHRoZXkgYXJlIGNvZXJjZWQgdG8gc3RyaW5ncykuXG4vLyBTaW5jZSB0aGVzZSBhcmUgU1ZHIGF0dHJpYnV0ZXMsIHRoZWlyIGF0dHJpYnV0ZSBuYW1lcyBhcmUgY2FzZS1zZW5zaXRpdmUuXG5cblsnYXV0b1JldmVyc2UnLCAnZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZCcsICdmb2N1c2FibGUnLCAncHJlc2VydmVBbHBoYSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTklTSF9TVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgbmFtZSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgSFRNTCBib29sZWFuIGF0dHJpYnV0ZXMuXG5cblsnYWxsb3dGdWxsU2NyZWVuJywgJ2FzeW5jJywgLy8gTm90ZTogdGhlcmUgaXMgYSBzcGVjaWFsIGNhc2UgdGhhdCBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHdyaXR0ZW4gdG8gdGhlIERPTVxuLy8gb24gdGhlIGNsaWVudCBzaWRlIGJlY2F1c2UgdGhlIGJyb3dzZXJzIGFyZSBpbmNvbnNpc3RlbnQuIEluc3RlYWQgd2UgY2FsbCBmb2N1cygpLlxuJ2F1dG9Gb2N1cycsICdhdXRvUGxheScsICdjb250cm9scycsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2Rpc2FibGVkJywgJ2Rpc2FibGVQaWN0dXJlSW5QaWN0dXJlJywgJ2Rpc2FibGVSZW1vdGVQbGF5YmFjaycsICdmb3JtTm9WYWxpZGF0ZScsICdoaWRkZW4nLCAnbG9vcCcsICdub01vZHVsZScsICdub1ZhbGlkYXRlJywgJ29wZW4nLCAncGxheXNJbmxpbmUnLCAncmVhZE9ubHknLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAnc2NvcGVkJywgJ3NlYW1sZXNzJywgLy8gTWljcm9kYXRhXG4naXRlbVNjb3BlJ10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBCT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBUaGVzZSBhcmUgdGhlIGZldyBSZWFjdCBwcm9wcyB0aGF0IHdlIHNldCBhcyBET00gcHJvcGVydGllc1xuLy8gcmF0aGVyIHRoYW4gYXR0cmlidXRlcy4gVGhlc2UgYXJlIGFsbCBib29sZWFucy5cblxuWydjaGVja2VkJywgLy8gTm90ZTogYG9wdGlvbi5zZWxlY3RlZGAgaXMgbm90IHVwZGF0ZWQgaWYgYHNlbGVjdC5tdWx0aXBsZWAgaXNcbi8vIGRpc2FibGVkIHdpdGggYHJlbW92ZUF0dHJpYnV0ZWAuIFdlIGhhdmUgc3BlY2lhbCBsb2dpYyBmb3IgaGFuZGxpbmcgdGhpcy5cbidtdWx0aXBsZScsICdtdXRlZCcsICdzZWxlY3RlZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgQk9PTEVBTiwgdHJ1ZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IGFyZSBcIm92ZXJsb2FkZWQgYm9vbGVhbnNcIjogdGhleSBiZWhhdmUgbGlrZVxuLy8gYm9vbGVhbnMsIGJ1dCBjYW4gYWxzbyBhY2NlcHQgYSBzdHJpbmcgdmFsdWUuXG5cblsnY2FwdHVyZScsICdkb3dubG9hZCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgT1ZFUkxPQURFRF9CT09MRUFOLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgcG9zaXRpdmUgbnVtYmVycy5cblxuWydjb2xzJywgJ3Jvd3MnLCAnc2l6ZScsICdzcGFuJyAvLyBOT1RFOiBpZiB5b3UgYWRkIGEgY2FtZWxDYXNlZCBwcm9wIHRvIHRoaXMgbGlzdCxcbi8vIHlvdSdsbCBuZWVkIHRvIHNldCBhdHRyaWJ1dGVOYW1lIHRvIG5hbWUudG9Mb3dlckNhc2UoKVxuLy8gaW5zdGVhZCBpbiB0aGUgYXNzaWdubWVudCBiZWxvdy5cbl0uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBQT1NJVElWRV9OVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUsIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gVGhlc2UgYXJlIEhUTUwgYXR0cmlidXRlcyB0aGF0IG11c3QgYmUgbnVtYmVycy5cblxuWydyb3dTcGFuJywgJ3N0YXJ0J10uZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBOVU1FUklDLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIG5hbWUudG9Mb3dlckNhc2UoKSwgLy8gYXR0cmlidXRlTmFtZVxuICBudWxsLCAvLyBhdHRyaWJ1dGVOYW1lc3BhY2VcbiAgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pO1xudmFyIENBTUVMSVpFID0gL1tcXC1cXDpdKFthLXpdKS9nO1xuXG52YXIgY2FwaXRhbGl6ZSA9IGZ1bmN0aW9uICh0b2tlbikge1xuICByZXR1cm4gdG9rZW5bMV0udG9VcHBlckNhc2UoKTtcbn07IC8vIFRoaXMgaXMgYSBsaXN0IG9mIGFsbCBTVkcgYXR0cmlidXRlcyB0aGF0IG5lZWQgc3BlY2lhbCBjYXNpbmcsIG5hbWVzcGFjaW5nLFxuLy8gb3IgYm9vbGVhbiB2YWx1ZSBhc3NpZ25tZW50LiBSZWd1bGFyIGF0dHJpYnV0ZXMgdGhhdCBqdXN0IGFjY2VwdCBzdHJpbmdzXG4vLyBhbmQgaGF2ZSB0aGUgc2FtZSBuYW1lcyBhcmUgb21pdHRlZCwganVzdCBsaWtlIGluIHRoZSBIVE1MIGF0dHJpYnV0ZSBmaWx0ZXIuXG4vLyBTb21lIG9mIHRoZXNlIGF0dHJpYnV0ZXMgY2FuIGJlIGhhcmQgdG8gZmluZC4gVGhpcyBsaXN0IHdhcyBjcmVhdGVkIGJ5XG4vLyBzY3JhcGluZyB0aGUgTUROIGRvY3VtZW50YXRpb24uXG5cblxuWydhY2NlbnQtaGVpZ2h0JywgJ2FsaWdubWVudC1iYXNlbGluZScsICdhcmFiaWMtZm9ybScsICdiYXNlbGluZS1zaGlmdCcsICdjYXAtaGVpZ2h0JywgJ2NsaXAtcGF0aCcsICdjbGlwLXJ1bGUnLCAnY29sb3ItaW50ZXJwb2xhdGlvbicsICdjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMnLCAnY29sb3ItcHJvZmlsZScsICdjb2xvci1yZW5kZXJpbmcnLCAnZG9taW5hbnQtYmFzZWxpbmUnLCAnZW5hYmxlLWJhY2tncm91bmQnLCAnZmlsbC1vcGFjaXR5JywgJ2ZpbGwtcnVsZScsICdmbG9vZC1jb2xvcicsICdmbG9vZC1vcGFjaXR5JywgJ2ZvbnQtZmFtaWx5JywgJ2ZvbnQtc2l6ZScsICdmb250LXNpemUtYWRqdXN0JywgJ2ZvbnQtc3RyZXRjaCcsICdmb250LXN0eWxlJywgJ2ZvbnQtdmFyaWFudCcsICdmb250LXdlaWdodCcsICdnbHlwaC1uYW1lJywgJ2dseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwnLCAnZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwnLCAnaG9yaXotYWR2LXgnLCAnaG9yaXotb3JpZ2luLXgnLCAnaW1hZ2UtcmVuZGVyaW5nJywgJ2xldHRlci1zcGFjaW5nJywgJ2xpZ2h0aW5nLWNvbG9yJywgJ21hcmtlci1lbmQnLCAnbWFya2VyLW1pZCcsICdtYXJrZXItc3RhcnQnLCAnb3ZlcmxpbmUtcG9zaXRpb24nLCAnb3ZlcmxpbmUtdGhpY2tuZXNzJywgJ3BhaW50LW9yZGVyJywgJ3Bhbm9zZS0xJywgJ3BvaW50ZXItZXZlbnRzJywgJ3JlbmRlcmluZy1pbnRlbnQnLCAnc2hhcGUtcmVuZGVyaW5nJywgJ3N0b3AtY29sb3InLCAnc3RvcC1vcGFjaXR5JywgJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nLCAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnLCAnc3Ryb2tlLWRhc2hhcnJheScsICdzdHJva2UtZGFzaG9mZnNldCcsICdzdHJva2UtbGluZWNhcCcsICdzdHJva2UtbGluZWpvaW4nLCAnc3Ryb2tlLW1pdGVybGltaXQnLCAnc3Ryb2tlLW9wYWNpdHknLCAnc3Ryb2tlLXdpZHRoJywgJ3RleHQtYW5jaG9yJywgJ3RleHQtZGVjb3JhdGlvbicsICd0ZXh0LXJlbmRlcmluZycsICd1bmRlcmxpbmUtcG9zaXRpb24nLCAndW5kZXJsaW5lLXRoaWNrbmVzcycsICd1bmljb2RlLWJpZGknLCAndW5pY29kZS1yYW5nZScsICd1bml0cy1wZXItZW0nLCAndi1hbHBoYWJldGljJywgJ3YtaGFuZ2luZycsICd2LWlkZW9ncmFwaGljJywgJ3YtbWF0aGVtYXRpY2FsJywgJ3ZlY3Rvci1lZmZlY3QnLCAndmVydC1hZHYteScsICd2ZXJ0LW9yaWdpbi14JywgJ3ZlcnQtb3JpZ2luLXknLCAnd29yZC1zcGFjaW5nJywgJ3dyaXRpbmctbW9kZScsICd4bWxuczp4bGluaycsICd4LWhlaWdodCcgLy8gTk9URTogaWYgeW91IGFkZCBhIGNhbWVsQ2FzZWQgcHJvcCB0byB0aGlzIGxpc3QsXG4vLyB5b3UnbGwgbmVlZCB0byBzZXQgYXR0cmlidXRlTmFtZSB0byBuYW1lLnRvTG93ZXJDYXNlKClcbi8vIGluc3RlYWQgaW4gdGhlIGFzc2lnbm1lbnQgYmVsb3cuXG5dLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZU5hbWUpIHtcbiAgdmFyIG5hbWUgPSBhdHRyaWJ1dGVOYW1lLnJlcGxhY2UoQ0FNRUxJWkUsIGNhcGl0YWxpemUpO1xuICBwcm9wZXJ0aWVzW25hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChuYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZSwgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIGZhbHNlLCAvLyBzYW5pdGl6ZVVSTFxuICBmYWxzZSk7XG59KTsgLy8gU3RyaW5nIFNWRyBhdHRyaWJ1dGVzIHdpdGggdGhlIHhsaW5rIG5hbWVzcGFjZS5cblxuWyd4bGluazphY3R1YXRlJywgJ3hsaW5rOmFyY3JvbGUnLCAneGxpbms6cm9sZScsICd4bGluazpzaG93JywgJ3hsaW5rOnRpdGxlJywgJ3hsaW5rOnR5cGUnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgZmFsc2UsIC8vIHNhbml0aXplVVJMXG4gIGZhbHNlKTtcbn0pOyAvLyBTdHJpbmcgU1ZHIGF0dHJpYnV0ZXMgd2l0aCB0aGUgeG1sIG5hbWVzcGFjZS5cblxuWyd4bWw6YmFzZScsICd4bWw6bGFuZycsICd4bWw6c3BhY2UnIC8vIE5PVEU6IGlmIHlvdSBhZGQgYSBjYW1lbENhc2VkIHByb3AgdG8gdGhpcyBsaXN0LFxuLy8geW91J2xsIG5lZWQgdG8gc2V0IGF0dHJpYnV0ZU5hbWUgdG8gbmFtZS50b0xvd2VyQ2FzZSgpXG4vLyBpbnN0ZWFkIGluIHRoZSBhc3NpZ25tZW50IGJlbG93LlxuXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHZhciBuYW1lID0gYXR0cmlidXRlTmFtZS5yZXBsYWNlKENBTUVMSVpFLCBjYXBpdGFsaXplKTtcbiAgcHJvcGVydGllc1tuYW1lXSA9IG5ldyBQcm9wZXJ0eUluZm9SZWNvcmQobmFtZSwgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4gIGF0dHJpYnV0ZU5hbWUsICdodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2UnLCBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGF0dHJpYnV0ZSBleGlzdHMgYm90aCBpbiBIVE1MIGFuZCBTVkcuXG4vLyBUaGUgYXR0cmlidXRlIG5hbWUgaXMgY2FzZS1zZW5zaXRpdmUgaW4gU1ZHIHNvIHdlIGNhbid0IGp1c3QgdXNlXG4vLyB0aGUgUmVhY3QgbmFtZSBsaWtlIHdlIGRvIGZvciBhdHRyaWJ1dGVzIHRoYXQgZXhpc3Qgb25seSBpbiBIVE1MLlxuXG5bJ3RhYkluZGV4JywgJ2Nyb3NzT3JpZ2luJ10uZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlTmFtZSkge1xuICBwcm9wZXJ0aWVzW2F0dHJpYnV0ZU5hbWVdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZChhdHRyaWJ1dGVOYW1lLCBTVFJJTkcsIGZhbHNlLCAvLyBtdXN0VXNlUHJvcGVydHlcbiAgYXR0cmlidXRlTmFtZS50b0xvd2VyQ2FzZSgpLCAvLyBhdHRyaWJ1dGVOYW1lXG4gIG51bGwsIC8vIGF0dHJpYnV0ZU5hbWVzcGFjZVxuICBmYWxzZSwgLy8gc2FuaXRpemVVUkxcbiAgZmFsc2UpO1xufSk7IC8vIFRoZXNlIGF0dHJpYnV0ZXMgYWNjZXB0IFVSTHMuIFRoZXNlIG11c3Qgbm90IGFsbG93IGphdmFzY3JpcHQ6IFVSTFMuXG4vLyBUaGVzZSB3aWxsIGFsc28gbmVlZCB0byBhY2NlcHQgVHJ1c3RlZCBUeXBlcyBvYmplY3QgaW4gdGhlIGZ1dHVyZS5cblxudmFyIHhsaW5rSHJlZiA9ICd4bGlua0hyZWYnO1xucHJvcGVydGllc1t4bGlua0hyZWZdID0gbmV3IFByb3BlcnR5SW5mb1JlY29yZCgneGxpbmtIcmVmJywgU1RSSU5HLCBmYWxzZSwgLy8gbXVzdFVzZVByb3BlcnR5XG4neGxpbms6aHJlZicsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJywgdHJ1ZSwgLy8gc2FuaXRpemVVUkxcbmZhbHNlKTtcblsnc3JjJywgJ2hyZWYnLCAnYWN0aW9uJywgJ2Zvcm1BY3Rpb24nXS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGVOYW1lKSB7XG4gIHByb3BlcnRpZXNbYXR0cmlidXRlTmFtZV0gPSBuZXcgUHJvcGVydHlJbmZvUmVjb3JkKGF0dHJpYnV0ZU5hbWUsIFNUUklORywgZmFsc2UsIC8vIG11c3RVc2VQcm9wZXJ0eVxuICBhdHRyaWJ1dGVOYW1lLnRvTG93ZXJDYXNlKCksIC8vIGF0dHJpYnV0ZU5hbWVcbiAgbnVsbCwgLy8gYXR0cmlidXRlTmFtZXNwYWNlXG4gIHRydWUsIC8vIHNhbml0aXplVVJMXG4gIHRydWUpO1xufSk7XG5cbi8vIGFuZCBhbnkgbmV3bGluZSBvciB0YWIgYXJlIGZpbHRlcmVkIG91dCBhcyBpZiB0aGV5J3JlIG5vdCBwYXJ0IG9mIHRoZSBVUkwuXG4vLyBodHRwczovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybC1wYXJzaW5nXG4vLyBUYWIgb3IgbmV3bGluZSBhcmUgZGVmaW5lZCBhcyBcXHJcXG5cXHQ6XG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYXNjaWktdGFiLW9yLW5ld2xpbmVcbi8vIEEgQzAgY29udHJvbCBpcyBhIGNvZGUgcG9pbnQgaW4gdGhlIHJhbmdlIFxcdTAwMDAgTlVMTCB0byBcXHUwMDFGXG4vLyBJTkZPUk1BVElPTiBTRVBBUkFUT1IgT05FLCBpbmNsdXNpdmU6XG4vLyBodHRwczovL2luZnJhLnNwZWMud2hhdHdnLm9yZy8jYzAtY29udHJvbC1vci1zcGFjZVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG5cbnZhciBpc0phdmFTY3JpcHRQcm90b2NvbCA9IC9eW1xcdTAwMDAtXFx1MDAxRiBdKmpbXFxyXFxuXFx0XSphW1xcclxcblxcdF0qdltcXHJcXG5cXHRdKmFbXFxyXFxuXFx0XSpzW1xcclxcblxcdF0qY1tcXHJcXG5cXHRdKnJbXFxyXFxuXFx0XSppW1xcclxcblxcdF0qcFtcXHJcXG5cXHRdKnRbXFxyXFxuXFx0XSpcXDovaTtcbnZhciBkaWRXYXJuID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNhbml0aXplVVJMKHVybCkge1xuICB7XG4gICAgaWYgKCFkaWRXYXJuICYmIGlzSmF2YVNjcmlwdFByb3RvY29sLnRlc3QodXJsKSkge1xuICAgICAgZGlkV2FybiA9IHRydWU7XG5cbiAgICAgIGVycm9yKCdBIGZ1dHVyZSB2ZXJzaW9uIG9mIFJlYWN0IHdpbGwgYmxvY2sgamF2YXNjcmlwdDogVVJMcyBhcyBhIHNlY3VyaXR5IHByZWNhdXRpb24uICcgKyAnVXNlIGV2ZW50IGhhbmRsZXJzIGluc3RlYWQgaWYgeW91IGNhbi4gSWYgeW91IG5lZWQgdG8gZ2VuZXJhdGUgdW5zYWZlIEhUTUwgdHJ5ICcgKyAndXNpbmcgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgaW5zdGVhZC4gUmVhY3Qgd2FzIHBhc3NlZCAlcy4nLCBKU09OLnN0cmluZ2lmeSh1cmwpKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gY29kZSBjb3BpZWQgYW5kIG1vZGlmaWVkIGZyb20gZXNjYXBlLWh0bWxcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xudmFyIG1hdGNoSHRtbFJlZ0V4cCA9IC9bXCInJjw+XS87XG4vKipcbiAqIEVzY2FwZXMgc3BlY2lhbCBjaGFyYWN0ZXJzIGFuZCBIVE1MIGVudGl0aWVzIGluIGEgZ2l2ZW4gaHRtbCBzdHJpbmcuXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSBzdHJpbmcgSFRNTCBzdHJpbmcgdG8gZXNjYXBlIGZvciBsYXRlciBpbnNlcnRpb25cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKHN0cmluZykge1xuICB2YXIgc3RyID0gJycgKyBzdHJpbmc7XG4gIHZhciBtYXRjaCA9IG1hdGNoSHRtbFJlZ0V4cC5leGVjKHN0cik7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICB2YXIgZXNjYXBlO1xuICB2YXIgaHRtbCA9ICcnO1xuICB2YXIgaW5kZXg7XG4gIHZhciBsYXN0SW5kZXggPSAwO1xuXG4gIGZvciAoaW5kZXggPSBtYXRjaC5pbmRleDsgaW5kZXggPCBzdHIubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgIGNhc2UgMzQ6XG4gICAgICAgIC8vIFwiXG4gICAgICAgIGVzY2FwZSA9ICcmcXVvdDsnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzODpcbiAgICAgICAgLy8gJlxuICAgICAgICBlc2NhcGUgPSAnJmFtcDsnO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOTpcbiAgICAgICAgLy8gJ1xuICAgICAgICBlc2NhcGUgPSAnJiN4Mjc7JzsgLy8gbW9kaWZpZWQgZnJvbSBlc2NhcGUtaHRtbDsgdXNlZCB0byBiZSAnJiMzOSdcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA2MDpcbiAgICAgICAgLy8gPFxuICAgICAgICBlc2NhcGUgPSAnJmx0Oyc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDYyOlxuICAgICAgICAvLyA+XG4gICAgICAgIGVzY2FwZSA9ICcmZ3Q7JztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0SW5kZXggIT09IGluZGV4KSB7XG4gICAgICBodG1sICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCk7XG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxO1xuICAgIGh0bWwgKz0gZXNjYXBlO1xuICB9XG5cbiAgcmV0dXJuIGxhc3RJbmRleCAhPT0gaW5kZXggPyBodG1sICsgc3RyLnN1YnN0cmluZyhsYXN0SW5kZXgsIGluZGV4KSA6IGh0bWw7XG59IC8vIGVuZCBjb2RlIGNvcGllZCBhbmQgbW9kaWZpZWQgZnJvbSBlc2NhcGUtaHRtbFxuXG4vKipcbiAqIEVzY2FwZXMgdGV4dCB0byBwcmV2ZW50IHNjcmlwdGluZyBhdHRhY2tzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdGV4dCBUZXh0IHZhbHVlIHRvIGVzY2FwZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gQW4gZXNjYXBlZCBzdHJpbmcuXG4gKi9cblxuXG5mdW5jdGlvbiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KSB7XG4gIGlmICh0eXBlb2YgdGV4dCA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB0ZXh0ID09PSAnbnVtYmVyJykge1xuICAgIC8vIHRoaXMgc2hvcnRjaXJjdWl0IGhlbHBzIHBlcmYgZm9yIHR5cGVzIHRoYXQgd2Uga25vdyB3aWxsIG5ldmVyIGhhdmVcbiAgICAvLyBzcGVjaWFsIGNoYXJhY3RlcnMsIGVzcGVjaWFsbHkgZ2l2ZW4gdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIHVzZWQgb2Z0ZW5cbiAgICAvLyBmb3IgbnVtZXJpYyBkb20gaWRzLlxuICAgIHJldHVybiAnJyArIHRleHQ7XG4gIH1cblxuICByZXR1cm4gZXNjYXBlSHRtbCh0ZXh0KTtcbn1cblxuLyoqXG4gKiBFc2NhcGVzIGF0dHJpYnV0ZSB2YWx1ZSB0byBwcmV2ZW50IHNjcmlwdGluZyBhdHRhY2tzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVmFsdWUgdG8gZXNjYXBlLlxuICogQHJldHVybiB7c3RyaW5nfSBBbiBlc2NhcGVkIHN0cmluZy5cbiAqL1xuXG5mdW5jdGlvbiBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSkge1xuICByZXR1cm4gJ1wiJyArIGVzY2FwZVRleHRGb3JCcm93c2VyKHZhbHVlKSArICdcIic7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclJvb3QoKSB7XG4gIHJldHVybiBST09UX0FUVFJJQlVURV9OQU1FICsgJz1cIlwiJztcbn1cbi8qKlxuICogQ3JlYXRlcyBtYXJrdXAgZm9yIGEgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEByZXR1cm4gez9zdHJpbmd9IE1hcmt1cCBzdHJpbmcsIG9yIG51bGwgaWYgdGhlIHByb3BlcnR5IHdhcyBpbnZhbGlkLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KG5hbWUsIHZhbHVlKSB7XG4gIHZhciBwcm9wZXJ0eUluZm8gPSBnZXRQcm9wZXJ0eUluZm8obmFtZSk7XG5cbiAgaWYgKG5hbWUgIT09ICdzdHlsZScgJiYgc2hvdWxkSWdub3JlQXR0cmlidXRlKG5hbWUsIHByb3BlcnR5SW5mbywgZmFsc2UpKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAocHJvcGVydHlJbmZvICE9PSBudWxsKSB7XG4gICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBwcm9wZXJ0eUluZm8uYXR0cmlidXRlTmFtZTtcbiAgICB2YXIgdHlwZSA9IHByb3BlcnR5SW5mby50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IEJPT0xFQU4gfHwgdHlwZSA9PT0gT1ZFUkxPQURFRF9CT09MRUFOICYmIHZhbHVlID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gYXR0cmlidXRlTmFtZSArICc9XCJcIic7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChwcm9wZXJ0eUluZm8uc2FuaXRpemVVUkwpIHtcbiAgICAgICAgdmFsdWUgPSAnJyArIHZhbHVlO1xuICAgICAgICBzYW5pdGl6ZVVSTCh2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhdHRyaWJ1dGVOYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0F0dHJpYnV0ZU5hbWVTYWZlKG5hbWUpKSB7XG4gICAgcmV0dXJuIG5hbWUgKyAnPScgKyBxdW90ZUF0dHJpYnV0ZVZhbHVlRm9yQnJvd3Nlcih2YWx1ZSk7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG4vKipcbiAqIENyZWF0ZXMgbWFya3VwIGZvciBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfSBNYXJrdXAgc3RyaW5nLCBvciBlbXB0eSBzdHJpbmcgaWYgdGhlIHByb3BlcnR5IHdhcyBpbnZhbGlkLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZU1hcmt1cEZvckN1c3RvbUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWlzQXR0cmlidXRlTmFtZVNhZmUobmFtZSkgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHJldHVybiBuYW1lICsgJz0nICsgcXVvdGVBdHRyaWJ1dGVWYWx1ZUZvckJyb3dzZXIodmFsdWUpO1xufVxuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5ICYmICh4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSkgfHwgeCAhPT0geCAmJiB5ICE9PSB5IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gIDtcbn1cblxudmFyIG9iamVjdElzID0gdHlwZW9mIE9iamVjdC5pcyA9PT0gJ2Z1bmN0aW9uJyA/IE9iamVjdC5pcyA6IGlzO1xuXG52YXIgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gbnVsbDtcbnZhciBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG52YXIgd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDsgLy8gV2hldGhlciB0aGUgd29yay1pbi1wcm9ncmVzcyBob29rIGlzIGEgcmUtcmVuZGVyZWQgaG9va1xuXG52YXIgaXNSZVJlbmRlciA9IGZhbHNlOyAvLyBXaGV0aGVyIGFuIHVwZGF0ZSB3YXMgc2NoZWR1bGVkIGR1cmluZyB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyByZW5kZXIgcGFzcy5cblxudmFyIGRpZFNjaGVkdWxlUmVuZGVyUGhhc2VVcGRhdGUgPSBmYWxzZTsgLy8gTGF6aWx5IGNyZWF0ZWQgbWFwIG9mIHJlbmRlci1waGFzZSB1cGRhdGVzXG5cbnZhciByZW5kZXJQaGFzZVVwZGF0ZXMgPSBudWxsOyAvLyBDb3VudGVyIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcHMuXG5cbnZhciBudW1iZXJPZlJlUmVuZGVycyA9IDA7XG52YXIgUkVfUkVOREVSX0xJTUlUID0gMjU7XG52YXIgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7IC8vIEluIERFViwgdGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgY3VycmVudGx5IGV4ZWN1dGluZyBwcmltaXRpdmUgaG9va1xuXG52YXIgY3VycmVudEhvb2tOYW1lSW5EZXY7XG5cbmZ1bmN0aW9uIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKSB7XG4gIGlmICghKGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCAhPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuMS4gWW91IG1pZ2h0IGhhdmUgbWlzbWF0Y2hpbmcgdmVyc2lvbnMgb2YgUmVhY3QgYW5kIHRoZSByZW5kZXJlciAoc3VjaCBhcyBSZWFjdCBET00pXFxuMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbjMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG5TZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtaG9vay1jYWxsIGZvciB0aXBzIGFib3V0IGhvdyB0byBkZWJ1ZyBhbmQgZml4IHRoaXMgcHJvYmxlbS5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoaXNJbkhvb2tVc2VyQ29kZUluRGV2KSB7XG4gICAgICBlcnJvcignRG8gbm90IGNhbGwgSG9va3MgaW5zaWRlIHVzZUVmZmVjdCguLi4pLCB1c2VNZW1vKC4uLiksIG9yIG90aGVyIGJ1aWx0LWluIEhvb2tzLiAnICsgJ1lvdSBjYW4gb25seSBjYWxsIEhvb2tzIGF0IHRoZSB0b3AgbGV2ZWwgb2YgeW91ciBSZWFjdCBmdW5jdGlvbi4gJyArICdGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3J1bGVzLW9mLWhvb2tzJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gYXJlSG9va0lucHV0c0VxdWFsKG5leHREZXBzLCBwcmV2RGVwcykge1xuICBpZiAocHJldkRlcHMgPT09IG51bGwpIHtcbiAgICB7XG4gICAgICBlcnJvcignJXMgcmVjZWl2ZWQgYSBmaW5hbCBhcmd1bWVudCBkdXJpbmcgdGhpcyByZW5kZXIsIGJ1dCBub3QgZHVyaW5nICcgKyAndGhlIHByZXZpb3VzIHJlbmRlci4gRXZlbiB0aG91Z2ggdGhlIGZpbmFsIGFyZ3VtZW50IGlzIG9wdGlvbmFsLCAnICsgJ2l0cyB0eXBlIGNhbm5vdCBjaGFuZ2UgYmV0d2VlbiByZW5kZXJzLicsIGN1cnJlbnRIb29rTmFtZUluRGV2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB7XG4gICAgLy8gRG9uJ3QgYm90aGVyIGNvbXBhcmluZyBsZW5ndGhzIGluIHByb2QgYmVjYXVzZSB0aGVzZSBhcnJheXMgc2hvdWxkIGJlXG4gICAgLy8gcGFzc2VkIGlubGluZS5cbiAgICBpZiAobmV4dERlcHMubGVuZ3RoICE9PSBwcmV2RGVwcy5sZW5ndGgpIHtcbiAgICAgIGVycm9yKCdUaGUgZmluYWwgYXJndW1lbnQgcGFzc2VkIHRvICVzIGNoYW5nZWQgc2l6ZSBiZXR3ZWVuIHJlbmRlcnMuIFRoZSAnICsgJ29yZGVyIGFuZCBzaXplIG9mIHRoaXMgYXJyYXkgbXVzdCByZW1haW4gY29uc3RhbnQuXFxuXFxuJyArICdQcmV2aW91czogJXNcXG4nICsgJ0luY29taW5nOiAlcycsIGN1cnJlbnRIb29rTmFtZUluRGV2LCBcIltcIiArIG5leHREZXBzLmpvaW4oJywgJykgKyBcIl1cIiwgXCJbXCIgKyBwcmV2RGVwcy5qb2luKCcsICcpICsgXCJdXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJldkRlcHMubGVuZ3RoICYmIGkgPCBuZXh0RGVwcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChvYmplY3RJcyhuZXh0RGVwc1tpXSwgcHJldkRlcHNbaV0pKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9vaygpIHtcbiAgaWYgKG51bWJlck9mUmVSZW5kZXJzID4gMCkge1xuICAgIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIFwiUmVuZGVyZWQgbW9yZSBob29rcyB0aGFuIGR1cmluZyB0aGUgcHJldmlvdXMgcmVuZGVyXCIgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lbW9pemVkU3RhdGU6IG51bGwsXG4gICAgcXVldWU6IG51bGwsXG4gICAgbmV4dDogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2soKSB7XG4gIGlmICh3b3JrSW5Qcm9ncmVzc0hvb2sgPT09IG51bGwpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBmaXJzdCBob29rIGluIHRoZSBsaXN0XG4gICAgaWYgKGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID09PSBudWxsKSB7XG4gICAgICBpc1JlUmVuZGVyID0gZmFsc2U7XG4gICAgICBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZUhvb2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlcmUncyBhbHJlYWR5IGEgd29yay1pbi1wcm9ncmVzcy4gUmV1c2UgaXQuXG4gICAgICBpc1JlUmVuZGVyID0gdHJ1ZTtcbiAgICAgIHdvcmtJblByb2dyZXNzSG9vayA9IGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAod29ya0luUHJvZ3Jlc3NIb29rLm5leHQgPT09IG51bGwpIHtcbiAgICAgIGlzUmVSZW5kZXIgPSBmYWxzZTsgLy8gQXBwZW5kIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3RcblxuICAgICAgd29ya0luUHJvZ3Jlc3NIb29rID0gd29ya0luUHJvZ3Jlc3NIb29rLm5leHQgPSBjcmVhdGVIb29rKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZXJlJ3MgYWxyZWFkeSBhIHdvcmstaW4tcHJvZ3Jlc3MuIFJldXNlIGl0LlxuICAgICAgaXNSZVJlbmRlciA9IHRydWU7XG4gICAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSB3b3JrSW5Qcm9ncmVzc0hvb2submV4dDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gd29ya0luUHJvZ3Jlc3NIb29rO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSkge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBjb21wb25lbnRJZGVudGl0eTtcblxuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gIH0gLy8gVGhlIGZvbGxvd2luZyBzaG91bGQgaGF2ZSBhbHJlYWR5IGJlZW4gcmVzZXRcbiAgLy8gZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAvLyBmaXJzdFdvcmtJblByb2dyZXNzSG9vayA9IG51bGw7XG4gIC8vIG51bWJlck9mUmVSZW5kZXJzID0gMDtcbiAgLy8gcmVuZGVyUGhhc2VVcGRhdGVzID0gbnVsbDtcbiAgLy8gd29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcblxufVxuZnVuY3Rpb24gZmluaXNoSG9va3MoQ29tcG9uZW50LCBwcm9wcywgY2hpbGRyZW4sIHJlZk9yQ29udGV4dCkge1xuICAvLyBUaGlzIG11c3QgYmUgY2FsbGVkIGFmdGVyIGV2ZXJ5IGZ1bmN0aW9uIGNvbXBvbmVudCB0byBwcmV2ZW50IGhvb2tzIGZyb21cbiAgLy8gYmVpbmcgdXNlZCBpbiBjbGFzc2VzLlxuICB3aGlsZSAoZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSkge1xuICAgIC8vIFVwZGF0ZXMgd2VyZSBzY2hlZHVsZWQgZHVyaW5nIHRoZSByZW5kZXIgcGhhc2UuIFRoZXkgYXJlIHN0b3JlZCBpblxuICAgIC8vIHRoZSBgcmVuZGVyUGhhc2VVcGRhdGVzYCBtYXAuIENhbGwgdGhlIGNvbXBvbmVudCBhZ2FpbiwgcmV1c2luZyB0aGVcbiAgICAvLyB3b3JrLWluLXByb2dyZXNzIGhvb2tzIGFuZCBhcHBseWluZyB0aGUgYWRkaXRpb25hbCB1cGRhdGVzIG9uIHRvcC4gS2VlcFxuICAgIC8vIHJlc3RhcnRpbmcgdW50aWwgbm8gbW9yZSB1cGRhdGVzIGFyZSBzY2hlZHVsZWQuXG4gICAgZGlkU2NoZWR1bGVSZW5kZXJQaGFzZVVwZGF0ZSA9IGZhbHNlO1xuICAgIG51bWJlck9mUmVSZW5kZXJzICs9IDE7IC8vIFN0YXJ0IG92ZXIgZnJvbSB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xuICAgIGNoaWxkcmVuID0gQ29tcG9uZW50KHByb3BzLCByZWZPckNvbnRleHQpO1xuICB9XG5cbiAgcmVzZXRIb29rc1N0YXRlKCk7XG4gIHJldHVybiBjaGlsZHJlbjtcbn0gLy8gUmVzZXQgdGhlIGludGVybmFsIGhvb2tzIHN0YXRlIGlmIGFuIGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgYSBjb21wb25lbnRcblxuZnVuY3Rpb24gcmVzZXRIb29rc1N0YXRlKCkge1xuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gIH1cblxuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSBudWxsO1xuICBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gZmFsc2U7XG4gIGZpcnN0V29ya0luUHJvZ3Jlc3NIb29rID0gbnVsbDtcbiAgbnVtYmVyT2ZSZVJlbmRlcnMgPSAwO1xuICByZW5kZXJQaGFzZVVwZGF0ZXMgPSBudWxsO1xuICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiByZWFkQ29udGV4dChjb250ZXh0LCBvYnNlcnZlZEJpdHMpIHtcbiAgdmFyIHRocmVhZElEID0gY3VycmVudFBhcnRpYWxSZW5kZXJlci50aHJlYWRJRDtcbiAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKTtcblxuICB7XG4gICAgaWYgKGlzSW5Ib29rVXNlckNvZGVJbkRldikge1xuICAgICAgZXJyb3IoJ0NvbnRleHQgY2FuIG9ubHkgYmUgcmVhZCB3aGlsZSBSZWFjdCBpcyByZW5kZXJpbmcuICcgKyAnSW4gY2xhc3NlcywgeW91IGNhbiByZWFkIGl0IGluIHRoZSByZW5kZXIgbWV0aG9kIG9yIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy4gJyArICdJbiBmdW5jdGlvbiBjb21wb25lbnRzLCB5b3UgY2FuIHJlYWQgaXQgZGlyZWN0bHkgaW4gdGhlIGZ1bmN0aW9uIGJvZHksIGJ1dCBub3QgJyArICdpbnNpZGUgSG9va3MgbGlrZSB1c2VSZWR1Y2VyKCkgb3IgdXNlTWVtbygpLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb250ZXh0W3RocmVhZElEXTtcbn1cblxuZnVuY3Rpb24gdXNlQ29udGV4dChjb250ZXh0LCBvYnNlcnZlZEJpdHMpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZUNvbnRleHQnO1xuICB9XG5cbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICB2YXIgdGhyZWFkSUQgPSBjdXJyZW50UGFydGlhbFJlbmRlcmVyLnRocmVhZElEO1xuICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMoY29udGV4dCwgdGhyZWFkSUQpO1xuICByZXR1cm4gY29udGV4dFt0aHJlYWRJRF07XG59XG5cbmZ1bmN0aW9uIGJhc2ljU3RhdGVSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcbiAgLy8gJEZsb3dGaXhNZTogRmxvdyBkb2Vzbid0IGxpa2UgbWl4ZWQgdHlwZXNcbiAgcmV0dXJuIHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicgPyBhY3Rpb24oc3RhdGUpIDogYWN0aW9uO1xufVxuXG5mdW5jdGlvbiB1c2VTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAge1xuICAgIGN1cnJlbnRIb29rTmFtZUluRGV2ID0gJ3VzZVN0YXRlJztcbiAgfVxuXG4gIHJldHVybiB1c2VSZWR1Y2VyKGJhc2ljU3RhdGVSZWR1Y2VyLCAvLyB1c2VSZWR1Y2VyIGhhcyBhIHNwZWNpYWwgY2FzZSB0byBzdXBwb3J0IGxhenkgdXNlU3RhdGUgaW5pdGlhbGl6ZXJzXG4gIGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAge1xuICAgIGlmIChyZWR1Y2VyICE9PSBiYXNpY1N0YXRlUmVkdWNlcikge1xuICAgICAgY3VycmVudEhvb2tOYW1lSW5EZXYgPSAndXNlUmVkdWNlcic7XG4gICAgfVxuICB9XG5cbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2soKTtcblxuICBpZiAoaXNSZVJlbmRlcikge1xuICAgIC8vIFRoaXMgaXMgYSByZS1yZW5kZXIuIEFwcGx5IHRoZSBuZXcgcmVuZGVyIHBoYXNlIHVwZGF0ZXMgdG8gdGhlIHByZXZpb3VzXG4gICAgLy8gY3VycmVudCBob29rLlxuICAgIHZhciBxdWV1ZSA9IHdvcmtJblByb2dyZXNzSG9vay5xdWV1ZTtcbiAgICB2YXIgZGlzcGF0Y2ggPSBxdWV1ZS5kaXNwYXRjaDtcblxuICAgIGlmIChyZW5kZXJQaGFzZVVwZGF0ZXMgIT09IG51bGwpIHtcbiAgICAgIC8vIFJlbmRlciBwaGFzZSB1cGRhdGVzIGFyZSBzdG9yZWQgaW4gYSBtYXAgb2YgcXVldWUgLT4gbGlua2VkIGxpc3RcbiAgICAgIHZhciBmaXJzdFJlbmRlclBoYXNlVXBkYXRlID0gcmVuZGVyUGhhc2VVcGRhdGVzLmdldChxdWV1ZSk7XG5cbiAgICAgIGlmIChmaXJzdFJlbmRlclBoYXNlVXBkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVuZGVyUGhhc2VVcGRhdGVzLmRlbGV0ZShxdWV1ZSk7XG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IHdvcmtJblByb2dyZXNzSG9vay5tZW1vaXplZFN0YXRlO1xuICAgICAgICB2YXIgdXBkYXRlID0gZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgLy8gUHJvY2VzcyB0aGlzIHJlbmRlciBwaGFzZSB1cGRhdGUuIFdlIGRvbid0IGhhdmUgdG8gY2hlY2sgdGhlXG4gICAgICAgICAgLy8gcHJpb3JpdHkgYmVjYXVzZSBpdCB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyB0aGUgY3VycmVudFxuICAgICAgICAgIC8vIHJlbmRlcidzLlxuICAgICAgICAgIHZhciBhY3Rpb24gPSB1cGRhdGUuYWN0aW9uO1xuXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXdTdGF0ZSA9IHJlZHVjZXIobmV3U3RhdGUsIGFjdGlvbik7XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cGRhdGUgPSB1cGRhdGUubmV4dDtcbiAgICAgICAgfSB3aGlsZSAodXBkYXRlICE9PSBudWxsKTtcblxuICAgICAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICByZXR1cm4gW25ld1N0YXRlLCBkaXNwYXRjaF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFt3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSwgZGlzcGF0Y2hdO1xuICB9IGVsc2Uge1xuICAgIHtcbiAgICAgIGlzSW5Ib29rVXNlckNvZGVJbkRldiA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGluaXRpYWxTdGF0ZTtcblxuICAgIGlmIChyZWR1Y2VyID09PSBiYXNpY1N0YXRlUmVkdWNlcikge1xuICAgICAgLy8gU3BlY2lhbCBjYXNlIGZvciBgdXNlU3RhdGVgLlxuICAgICAgaW5pdGlhbFN0YXRlID0gdHlwZW9mIGluaXRpYWxBcmcgPT09ICdmdW5jdGlvbicgPyBpbml0aWFsQXJnKCkgOiBpbml0aWFsQXJnO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbml0aWFsU3RhdGUgPSBpbml0ICE9PSB1bmRlZmluZWQgPyBpbml0KGluaXRpYWxBcmcpIDogaW5pdGlhbEFyZztcbiAgICB9XG5cbiAgICB7XG4gICAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IGluaXRpYWxTdGF0ZTtcblxuICAgIHZhciBfcXVldWUgPSB3b3JrSW5Qcm9ncmVzc0hvb2sucXVldWUgPSB7XG4gICAgICBsYXN0OiBudWxsLFxuICAgICAgZGlzcGF0Y2g6IG51bGxcbiAgICB9O1xuXG4gICAgdmFyIF9kaXNwYXRjaCA9IF9xdWV1ZS5kaXNwYXRjaCA9IGRpc3BhdGNoQWN0aW9uLmJpbmQobnVsbCwgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50LCBfcXVldWUpO1xuXG4gICAgcmV0dXJuIFt3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSwgX2Rpc3BhdGNoXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VNZW1vKG5leHRDcmVhdGUsIGRlcHMpIHtcbiAgY3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50ID0gcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICB3b3JrSW5Qcm9ncmVzc0hvb2sgPSBjcmVhdGVXb3JrSW5Qcm9ncmVzc0hvb2soKTtcbiAgdmFyIG5leHREZXBzID0gZGVwcyA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGRlcHM7XG5cbiAgaWYgKHdvcmtJblByb2dyZXNzSG9vayAhPT0gbnVsbCkge1xuICAgIHZhciBwcmV2U3RhdGUgPSB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZTtcblxuICAgIGlmIChwcmV2U3RhdGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChuZXh0RGVwcyAhPT0gbnVsbCkge1xuICAgICAgICB2YXIgcHJldkRlcHMgPSBwcmV2U3RhdGVbMV07XG5cbiAgICAgICAgaWYgKGFyZUhvb2tJbnB1dHNFcXVhbChuZXh0RGVwcywgcHJldkRlcHMpKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZVswXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpc0luSG9va1VzZXJDb2RlSW5EZXYgPSB0cnVlO1xuICB9XG5cbiAgdmFyIG5leHRWYWx1ZSA9IG5leHRDcmVhdGUoKTtcblxuICB7XG4gICAgaXNJbkhvb2tVc2VyQ29kZUluRGV2ID0gZmFsc2U7XG4gIH1cblxuICB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZSA9IFtuZXh0VmFsdWUsIG5leHREZXBzXTtcbiAgcmV0dXJuIG5leHRWYWx1ZTtcbn1cblxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICBjdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQgPSByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG4gIHdvcmtJblByb2dyZXNzSG9vayA9IGNyZWF0ZVdvcmtJblByb2dyZXNzSG9vaygpO1xuICB2YXIgcHJldmlvdXNSZWYgPSB3b3JrSW5Qcm9ncmVzc0hvb2subWVtb2l6ZWRTdGF0ZTtcblxuICBpZiAocHJldmlvdXNSZWYgPT09IG51bGwpIHtcbiAgICB2YXIgcmVmID0ge1xuICAgICAgY3VycmVudDogaW5pdGlhbFZhbHVlXG4gICAgfTtcblxuICAgIHtcbiAgICAgIE9iamVjdC5zZWFsKHJlZik7XG4gICAgfVxuXG4gICAgd29ya0luUHJvZ3Jlc3NIb29rLm1lbW9pemVkU3RhdGUgPSByZWY7XG4gICAgcmV0dXJuIHJlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJldmlvdXNSZWY7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgaW5wdXRzKSB7XG4gIHtcbiAgICBjdXJyZW50SG9va05hbWVJbkRldiA9ICd1c2VMYXlvdXRFZmZlY3QnO1xuXG4gICAgZXJyb3IoJ3VzZUxheW91dEVmZmVjdCBkb2VzIG5vdGhpbmcgb24gdGhlIHNlcnZlciwgYmVjYXVzZSBpdHMgZWZmZWN0IGNhbm5vdCAnICsgXCJiZSBlbmNvZGVkIGludG8gdGhlIHNlcnZlciByZW5kZXJlcidzIG91dHB1dCBmb3JtYXQuIFRoaXMgd2lsbCBsZWFkIFwiICsgJ3RvIGEgbWlzbWF0Y2ggYmV0d2VlbiB0aGUgaW5pdGlhbCwgbm9uLWh5ZHJhdGVkIFVJIGFuZCB0aGUgaW50ZW5kZWQgJyArICdVSS4gVG8gYXZvaWQgdGhpcywgdXNlTGF5b3V0RWZmZWN0IHNob3VsZCBvbmx5IGJlIHVzZWQgaW4gJyArICdjb21wb25lbnRzIHRoYXQgcmVuZGVyIGV4Y2x1c2l2ZWx5IG9uIHRoZSBjbGllbnQuICcgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay91c2VsYXlvdXRlZmZlY3Qtc3NyIGZvciBjb21tb24gZml4ZXMuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hBY3Rpb24oY29tcG9uZW50SWRlbnRpdHksIHF1ZXVlLCBhY3Rpb24pIHtcbiAgaWYgKCEobnVtYmVyT2ZSZVJlbmRlcnMgPCBSRV9SRU5ERVJfTElNSVQpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiVG9vIG1hbnkgcmUtcmVuZGVycy4gUmVhY3QgbGltaXRzIHRoZSBudW1iZXIgb2YgcmVuZGVycyB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AuXCIgKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29tcG9uZW50SWRlbnRpdHkgPT09IGN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCkge1xuICAgIC8vIFRoaXMgaXMgYSByZW5kZXIgcGhhc2UgdXBkYXRlLiBTdGFzaCBpdCBpbiBhIGxhemlseS1jcmVhdGVkIG1hcCBvZlxuICAgIC8vIHF1ZXVlIC0+IGxpbmtlZCBsaXN0IG9mIHVwZGF0ZXMuIEFmdGVyIHRoaXMgcmVuZGVyIHBhc3MsIHdlJ2xsIHJlc3RhcnRcbiAgICAvLyBhbmQgYXBwbHkgdGhlIHN0YXNoZWQgdXBkYXRlcyBvbiB0b3Agb2YgdGhlIHdvcmstaW4tcHJvZ3Jlc3MgaG9vay5cbiAgICBkaWRTY2hlZHVsZVJlbmRlclBoYXNlVXBkYXRlID0gdHJ1ZTtcbiAgICB2YXIgdXBkYXRlID0ge1xuICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICBuZXh0OiBudWxsXG4gICAgfTtcblxuICAgIGlmIChyZW5kZXJQaGFzZVVwZGF0ZXMgPT09IG51bGwpIHtcbiAgICAgIHJlbmRlclBoYXNlVXBkYXRlcyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RSZW5kZXJQaGFzZVVwZGF0ZSA9IHJlbmRlclBoYXNlVXBkYXRlcy5nZXQocXVldWUpO1xuXG4gICAgaWYgKGZpcnN0UmVuZGVyUGhhc2VVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVuZGVyUGhhc2VVcGRhdGVzLnNldChxdWV1ZSwgdXBkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXBwZW5kIHRoZSB1cGRhdGUgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICAgIHZhciBsYXN0UmVuZGVyUGhhc2VVcGRhdGUgPSBmaXJzdFJlbmRlclBoYXNlVXBkYXRlO1xuXG4gICAgICB3aGlsZSAobGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgbGFzdFJlbmRlclBoYXNlVXBkYXRlID0gbGFzdFJlbmRlclBoYXNlVXBkYXRlLm5leHQ7XG4gICAgICB9XG5cbiAgICAgIGxhc3RSZW5kZXJQaGFzZVVwZGF0ZS5uZXh0ID0gdXBkYXRlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9LCBkZXBzKTtcbn0gLy8gVE9ETyBEZWNpZGUgb24gaG93IHRvIGltcGxlbWVudCB0aGlzIGhvb2sgZm9yIHNlcnZlciByZW5kZXJpbmcuXG4vLyBJZiBhIG11dGF0aW9uIG9jY3VycyBkdXJpbmcgcmVuZGVyLCBjb25zaWRlciB0cmlnZ2VyaW5nIGEgU3VzcGVuc2UgYm91bmRhcnlcbi8vIGFuZCBmYWxsaW5nIGJhY2sgdG8gY2xpZW50IHJlbmRlcmluZy5cblxuZnVuY3Rpb24gdXNlTXV0YWJsZVNvdXJjZShzb3VyY2UsIGdldFNuYXBzaG90LCBzdWJzY3JpYmUpIHtcbiAgcmVzb2x2ZUN1cnJlbnRseVJlbmRlcmluZ0NvbXBvbmVudCgpO1xuICByZXR1cm4gZ2V0U25hcHNob3Qoc291cmNlLl9zb3VyY2UpO1xufVxuXG5mdW5jdGlvbiB1c2VEZWZlcnJlZFZhbHVlKHZhbHVlKSB7XG4gIHJlc29sdmVDdXJyZW50bHlSZW5kZXJpbmdDb21wb25lbnQoKTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKCkge1xuICByZXNvbHZlQ3VycmVudGx5UmVuZGVyaW5nQ29tcG9uZW50KCk7XG5cbiAgdmFyIHN0YXJ0VHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG4gIH07XG5cbiAgcmV0dXJuIFtzdGFydFRyYW5zaXRpb24sIGZhbHNlXTtcbn1cblxuZnVuY3Rpb24gdXNlT3BhcXVlSWRlbnRpZmllcigpIHtcbiAgcmV0dXJuIChjdXJyZW50UGFydGlhbFJlbmRlcmVyLmlkZW50aWZpZXJQcmVmaXggfHwgJycpICsgJ1I6JyArIChjdXJyZW50UGFydGlhbFJlbmRlcmVyLnVuaXF1ZUlEKyspLnRvU3RyaW5nKDM2KTtcbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnZhciBjdXJyZW50UGFydGlhbFJlbmRlcmVyID0gbnVsbDtcbmZ1bmN0aW9uIHNldEN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIocmVuZGVyZXIpIHtcbiAgY3VycmVudFBhcnRpYWxSZW5kZXJlciA9IHJlbmRlcmVyO1xufVxudmFyIERpc3BhdGNoZXIgPSB7XG4gIHJlYWRDb250ZXh0OiByZWFkQ29udGV4dCxcbiAgdXNlQ29udGV4dDogdXNlQ29udGV4dCxcbiAgdXNlTWVtbzogdXNlTWVtbyxcbiAgdXNlUmVkdWNlcjogdXNlUmVkdWNlcixcbiAgdXNlUmVmOiB1c2VSZWYsXG4gIHVzZVN0YXRlOiB1c2VTdGF0ZSxcbiAgdXNlTGF5b3V0RWZmZWN0OiB1c2VMYXlvdXRFZmZlY3QsXG4gIHVzZUNhbGxiYWNrOiB1c2VDYWxsYmFjayxcbiAgLy8gdXNlSW1wZXJhdGl2ZUhhbmRsZSBpcyBub3QgcnVuIGluIHRoZSBzZXJ2ZXIgZW52aXJvbm1lbnRcbiAgdXNlSW1wZXJhdGl2ZUhhbmRsZTogbm9vcCxcbiAgLy8gRWZmZWN0cyBhcmUgbm90IHJ1biBpbiB0aGUgc2VydmVyIGVudmlyb25tZW50LlxuICB1c2VFZmZlY3Q6IG5vb3AsXG4gIC8vIERlYnVnZ2luZyBlZmZlY3RcbiAgdXNlRGVidWdWYWx1ZTogbm9vcCxcbiAgdXNlRGVmZXJyZWRWYWx1ZTogdXNlRGVmZXJyZWRWYWx1ZSxcbiAgdXNlVHJhbnNpdGlvbjogdXNlVHJhbnNpdGlvbixcbiAgdXNlT3BhcXVlSWRlbnRpZmllcjogdXNlT3BhcXVlSWRlbnRpZmllcixcbiAgLy8gU3Vic2NyaXB0aW9ucyBhcmUgbm90IHNldHVwIGluIGEgc2VydmVyIGVudmlyb25tZW50LlxuICB1c2VNdXRhYmxlU291cmNlOiB1c2VNdXRhYmxlU291cmNlXG59O1xuXG52YXIgSFRNTF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG52YXIgTUFUSF9OQU1FU1BBQ0UgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTCc7XG52YXIgU1ZHX05BTUVTUEFDRSA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG52YXIgTmFtZXNwYWNlcyA9IHtcbiAgaHRtbDogSFRNTF9OQU1FU1BBQ0UsXG4gIG1hdGhtbDogTUFUSF9OQU1FU1BBQ0UsXG4gIHN2ZzogU1ZHX05BTUVTUEFDRVxufTsgLy8gQXNzdW1lcyB0aGVyZSBpcyBubyBwYXJlbnQgbmFtZXNwYWNlLlxuXG5mdW5jdGlvbiBnZXRJbnRyaW5zaWNOYW1lc3BhY2UodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdzdmcnOlxuICAgICAgcmV0dXJuIFNWR19OQU1FU1BBQ0U7XG5cbiAgICBjYXNlICdtYXRoJzpcbiAgICAgIHJldHVybiBNQVRIX05BTUVTUEFDRTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gSFRNTF9OQU1FU1BBQ0U7XG4gIH1cbn1cbmZ1bmN0aW9uIGdldENoaWxkTmFtZXNwYWNlKHBhcmVudE5hbWVzcGFjZSwgdHlwZSkge1xuICBpZiAocGFyZW50TmFtZXNwYWNlID09IG51bGwgfHwgcGFyZW50TmFtZXNwYWNlID09PSBIVE1MX05BTUVTUEFDRSkge1xuICAgIC8vIE5vIChvciBkZWZhdWx0KSBwYXJlbnQgbmFtZXNwYWNlOiBwb3RlbnRpYWwgZW50cnkgcG9pbnQuXG4gICAgcmV0dXJuIGdldEludHJpbnNpY05hbWVzcGFjZSh0eXBlKTtcbiAgfVxuXG4gIGlmIChwYXJlbnROYW1lc3BhY2UgPT09IFNWR19OQU1FU1BBQ0UgJiYgdHlwZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgLy8gV2UncmUgbGVhdmluZyBTVkcuXG4gICAgcmV0dXJuIEhUTUxfTkFNRVNQQUNFO1xuICB9IC8vIEJ5IGRlZmF1bHQsIHBhc3MgbmFtZXNwYWNlIGJlbG93LlxuXG5cbiAgcmV0dXJuIHBhcmVudE5hbWVzcGFjZTtcbn1cblxudmFyIGhhc1JlYWRPbmx5VmFsdWUgPSB7XG4gIGJ1dHRvbjogdHJ1ZSxcbiAgY2hlY2tib3g6IHRydWUsXG4gIGltYWdlOiB0cnVlLFxuICBoaWRkZW46IHRydWUsXG4gIHJhZGlvOiB0cnVlLFxuICByZXNldDogdHJ1ZSxcbiAgc3VibWl0OiB0cnVlXG59O1xuZnVuY3Rpb24gY2hlY2tDb250cm9sbGVkVmFsdWVQcm9wcyh0YWdOYW1lLCBwcm9wcykge1xuICB7XG4gICAgaWYgKCEoaGFzUmVhZE9ubHlWYWx1ZVtwcm9wcy50eXBlXSB8fCBwcm9wcy5vbkNoYW5nZSB8fCBwcm9wcy5vbklucHV0IHx8IHByb3BzLnJlYWRPbmx5IHx8IHByb3BzLmRpc2FibGVkIHx8IHByb3BzLnZhbHVlID09IG51bGwpKSB7XG4gICAgICBlcnJvcignWW91IHByb3ZpZGVkIGEgYHZhbHVlYCBwcm9wIHRvIGEgZm9ybSBmaWVsZCB3aXRob3V0IGFuICcgKyAnYG9uQ2hhbmdlYCBoYW5kbGVyLiBUaGlzIHdpbGwgcmVuZGVyIGEgcmVhZC1vbmx5IGZpZWxkLiBJZiAnICsgJ3RoZSBmaWVsZCBzaG91bGQgYmUgbXV0YWJsZSB1c2UgYGRlZmF1bHRWYWx1ZWAuIE90aGVyd2lzZSwgJyArICdzZXQgZWl0aGVyIGBvbkNoYW5nZWAgb3IgYHJlYWRPbmx5YC4nKTtcbiAgICB9XG5cbiAgICBpZiAoIShwcm9wcy5vbkNoYW5nZSB8fCBwcm9wcy5yZWFkT25seSB8fCBwcm9wcy5kaXNhYmxlZCB8fCBwcm9wcy5jaGVja2VkID09IG51bGwpKSB7XG4gICAgICBlcnJvcignWW91IHByb3ZpZGVkIGEgYGNoZWNrZWRgIHByb3AgdG8gYSBmb3JtIGZpZWxkIHdpdGhvdXQgYW4gJyArICdgb25DaGFuZ2VgIGhhbmRsZXIuIFRoaXMgd2lsbCByZW5kZXIgYSByZWFkLW9ubHkgZmllbGQuIElmICcgKyAndGhlIGZpZWxkIHNob3VsZCBiZSBtdXRhYmxlIHVzZSBgZGVmYXVsdENoZWNrZWRgLiBPdGhlcndpc2UsICcgKyAnc2V0IGVpdGhlciBgb25DaGFuZ2VgIG9yIGByZWFkT25seWAuJyk7XG4gICAgfVxuICB9XG59XG5cbi8vIEZvciBIVE1MLCBjZXJ0YWluIHRhZ3Mgc2hvdWxkIG9taXQgdGhlaXIgY2xvc2UgdGFnLiBXZSBrZWVwIGEgbGlzdCBmb3Jcbi8vIHRob3NlIHNwZWNpYWwtY2FzZSB0YWdzLlxudmFyIG9taXR0ZWRDbG9zZVRhZ3MgPSB7XG4gIGFyZWE6IHRydWUsXG4gIGJhc2U6IHRydWUsXG4gIGJyOiB0cnVlLFxuICBjb2w6IHRydWUsXG4gIGVtYmVkOiB0cnVlLFxuICBocjogdHJ1ZSxcbiAgaW1nOiB0cnVlLFxuICBpbnB1dDogdHJ1ZSxcbiAga2V5Z2VuOiB0cnVlLFxuICBsaW5rOiB0cnVlLFxuICBtZXRhOiB0cnVlLFxuICBwYXJhbTogdHJ1ZSxcbiAgc291cmNlOiB0cnVlLFxuICB0cmFjazogdHJ1ZSxcbiAgd2JyOiB0cnVlIC8vIE5PVEU6IG1lbnVpdGVtJ3MgY2xvc2UgdGFnIHNob3VsZCBiZSBvbWl0dGVkLCBidXQgdGhhdCBjYXVzZXMgcHJvYmxlbXMuXG5cbn07XG5cbi8vIGBvbWl0dGVkQ2xvc2VUYWdzYCBleGNlcHQgdGhhdCBgbWVudWl0ZW1gIHNob3VsZCBzdGlsbCBoYXZlIGl0cyBjbG9zaW5nIHRhZy5cblxudmFyIHZvaWRFbGVtZW50VGFncyA9IF9hc3NpZ24oe1xuICBtZW51aXRlbTogdHJ1ZVxufSwgb21pdHRlZENsb3NlVGFncyk7XG5cbnZhciBIVE1MID0gJ19faHRtbCc7XG5cbmZ1bmN0aW9uIGFzc2VydFZhbGlkUHJvcHModGFnLCBwcm9wcykge1xuICBpZiAoIXByb3BzKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIE5vdGUgdGhlIHVzZSBvZiBgPT1gIHdoaWNoIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWQuXG5cblxuICBpZiAodm9pZEVsZW1lbnRUYWdzW3RhZ10pIHtcbiAgICBpZiAoIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsICYmIHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MID09IG51bGwpKSB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCB0YWcgKyBcIiBpcyBhIHZvaWQgZWxlbWVudCB0YWcgYW5kIG11c3QgbmVpdGhlciBoYXZlIGBjaGlsZHJlbmAgbm9yIHVzZSBgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgLlwiICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICE9IG51bGwpIHtcbiAgICBpZiAoIShwcm9wcy5jaGlsZHJlbiA9PSBudWxsKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggXCJDYW4gb25seSBzZXQgb25lIG9mIGBjaGlsZHJlbmAgb3IgYHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYC5cIiApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKHR5cGVvZiBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCA9PT0gJ29iamVjdCcgJiYgSFRNTCBpbiBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCkpIHtcbiAgICAgIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoIFwiYHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MYCBtdXN0IGJlIGluIHRoZSBmb3JtIGB7X19odG1sOiAuLi59YC4gUGxlYXNlIHZpc2l0IGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9kYW5nZXJvdXNseS1zZXQtaW5uZXItaHRtbCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIiApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoIXByb3BzLnN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyAmJiBwcm9wcy5jb250ZW50RWRpdGFibGUgJiYgcHJvcHMuY2hpbGRyZW4gIT0gbnVsbCkge1xuICAgICAgZXJyb3IoJ0EgY29tcG9uZW50IGlzIGBjb250ZW50RWRpdGFibGVgIGFuZCBjb250YWlucyBgY2hpbGRyZW5gIG1hbmFnZWQgYnkgJyArICdSZWFjdC4gSXQgaXMgbm93IHlvdXIgcmVzcG9uc2liaWxpdHkgdG8gZ3VhcmFudGVlIHRoYXQgbm9uZSBvZiAnICsgJ3Rob3NlIG5vZGVzIGFyZSB1bmV4cGVjdGVkbHkgbW9kaWZpZWQgb3IgZHVwbGljYXRlZC4gVGhpcyBpcyAnICsgJ3Byb2JhYmx5IG5vdCBpbnRlbnRpb25hbC4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIShwcm9wcy5zdHlsZSA9PSBudWxsIHx8IHR5cGVvZiBwcm9wcy5zdHlsZSA9PT0gJ29iamVjdCcpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiVGhlIGBzdHlsZWAgcHJvcCBleHBlY3RzIGEgbWFwcGluZyBmcm9tIHN0eWxlIHByb3BlcnRpZXMgdG8gdmFsdWVzLCBub3QgYSBzdHJpbmcuIEZvciBleGFtcGxlLCBzdHlsZT17e21hcmdpblJpZ2h0OiBzcGFjaW5nICsgJ2VtJ319IHdoZW4gdXNpbmcgSlNYLlwiICk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ1NTIHByb3BlcnRpZXMgd2hpY2ggYWNjZXB0IG51bWJlcnMgYnV0IGFyZSBub3QgaW4gdW5pdHMgb2YgXCJweFwiLlxuICovXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGNvbHVtbnM6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkQXJlYTogdHJ1ZSxcbiAgZ3JpZFJvdzogdHJ1ZSxcbiAgZ3JpZFJvd0VuZDogdHJ1ZSxcbiAgZ3JpZFJvd1NwYW46IHRydWUsXG4gIGdyaWRSb3dTdGFydDogdHJ1ZSxcbiAgZ3JpZENvbHVtbjogdHJ1ZSxcbiAgZ3JpZENvbHVtbkVuZDogdHJ1ZSxcbiAgZ3JpZENvbHVtblNwYW46IHRydWUsXG4gIGdyaWRDb2x1bW5TdGFydDogdHJ1ZSxcbiAgZm9udFdlaWdodDogdHJ1ZSxcbiAgbGluZUNsYW1wOiB0cnVlLFxuICBsaW5lSGVpZ2h0OiB0cnVlLFxuICBvcGFjaXR5OiB0cnVlLFxuICBvcmRlcjogdHJ1ZSxcbiAgb3JwaGFuczogdHJ1ZSxcbiAgdGFiU2l6ZTogdHJ1ZSxcbiAgd2lkb3dzOiB0cnVlLFxuICB6SW5kZXg6IHRydWUsXG4gIHpvb206IHRydWUsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IHRydWUsXG4gIGZsb29kT3BhY2l0eTogdHJ1ZSxcbiAgc3RvcE9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogdHJ1ZSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogdHJ1ZSxcbiAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgc3Ryb2tlV2lkdGg6IHRydWVcbn07XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXhLZXkocHJlZml4LCBrZXkpIHtcbiAgcmV0dXJuIHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zdWJzdHJpbmcoMSk7XG59XG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG5cblxudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnbXMnLCAnTW96JywgJ08nXTsgLy8gVXNpbmcgT2JqZWN0LmtleXMgaGVyZSwgb3IgZWxzZSB0aGUgdmFuaWxsYSBmb3ItaW4gbG9vcCBtYWtlcyBJRTggZ28gaW50byBhblxuLy8gaW5maW5pdGUgbG9vcCwgYmVjYXVzZSBpdCBpdGVyYXRlcyBvdmVyIHRoZSBuZXdseSBhZGRlZCBwcm9wcyB0b28uXG5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHJldHVybiB7c3RyaW5nfSBOb3JtYWxpemVkIHN0eWxlIHZhbHVlIHdpdGggZGltZW5zaW9ucyBhcHBsaWVkLlxuICovXG5cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpIHtcbiAgLy8gTm90ZSB0aGF0IHdlJ3ZlIHJlbW92ZWQgZXNjYXBlVGV4dEZvckJyb3dzZXIoKSBjYWxscyBoZXJlIHNpbmNlIHRoZVxuICAvLyB3aG9sZSBzdHJpbmcgd2lsbCBiZSBlc2NhcGVkIHdoZW4gdGhlIGF0dHJpYnV0ZSBpcyBpbmplY3RlZCBpbnRvXG4gIC8vIHRoZSBtYXJrdXAuIElmIHlvdSBwcm92aWRlIHVuc2FmZSB1c2VyIGRhdGEgaGVyZSB0aGV5IGNhbiBpbmplY3RcbiAgLy8gYXJiaXRyYXJ5IENTUyB3aGljaCBtYXkgYmUgcHJvYmxlbWF0aWMgKEkgY291bGRuJ3QgcmVwcm8gdGhpcyk6XG4gIC8vIGh0dHBzOi8vd3d3Lm93YXNwLm9yZy9pbmRleC5waHAvWFNTX0ZpbHRlcl9FdmFzaW9uX0NoZWF0X1NoZWV0XG4gIC8vIGh0dHA6Ly93d3cudGhlc3Bhbm5lci5jby51ay8yMDA3LzExLzI2L3VsdGltYXRlLXhzcy1jc3MtaW5qZWN0aW9uL1xuICAvLyBUaGlzIGlzIG5vdCBhbiBYU1MgaG9sZSBidXQgaW5zdGVhZCBhIHBvdGVudGlhbCBDU1MgaW5qZWN0aW9uIGlzc3VlXG4gIC8vIHdoaWNoIGhhcyBsZWFkIHRvIGEgZ3JlYXRlciBkaXNjdXNzaW9uIGFib3V0IGhvdyB3ZSdyZSBnb2luZyB0b1xuICAvLyB0cnVzdCBVUkxzIG1vdmluZyBmb3J3YXJkLiBTZWUgIzIxMTU5MDFcbiAgdmFyIGlzRW1wdHkgPSB2YWx1ZSA9PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8IHZhbHVlID09PSAnJztcblxuICBpZiAoaXNFbXB0eSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICghaXNDdXN0b21Qcm9wZXJ0eSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlICE9PSAwICYmICEoaXNVbml0bGVzc051bWJlci5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiBpc1VuaXRsZXNzTnVtYmVyW25hbWVdKSkge1xuICAgIHJldHVybiB2YWx1ZSArICdweCc7IC8vIFByZXN1bWVzIGltcGxpY2l0ICdweCcgc3VmZml4IGZvciB1bml0bGVzcyBudW1iZXJzXG4gIH1cblxuICByZXR1cm4gKCcnICsgdmFsdWUpLnRyaW0oKTtcbn1cblxudmFyIHVwcGVyY2FzZVBhdHRlcm4gPSAvKFtBLVpdKS9nO1xudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcbi8qKlxuICogSHlwaGVuYXRlcyBhIGNhbWVsY2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ01velRyYW5zaXRpb24nKVxuICogICA8IFwiLW1vei10cmFuc2l0aW9uXCJcbiAqICAgPiBoeXBoZW5hdGVTdHlsZU5hbWUoJ21zVHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbXMtdHJhbnNpdGlvblwiXG4gKlxuICogQXMgTW9kZXJuaXpyIHN1Z2dlc3RzIChodHRwOi8vbW9kZXJuaXpyLmNvbS9kb2NzLyNwcmVmaXhlZCksIGFuIGBtc2AgcHJlZml4XG4gKiBpcyBjb252ZXJ0ZWQgdG8gYC1tcy1gLlxuICovXG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgJy0kMScpLnRvTG93ZXJDYXNlKCkucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbmZ1bmN0aW9uIGlzQ3VzdG9tQ29tcG9uZW50KHRhZ05hbWUsIHByb3BzKSB7XG4gIGlmICh0YWdOYW1lLmluZGV4T2YoJy0nKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gdHlwZW9mIHByb3BzLmlzID09PSAnc3RyaW5nJztcbiAgfVxuXG4gIHN3aXRjaCAodGFnTmFtZSkge1xuICAgIC8vIFRoZXNlIGFyZSByZXNlcnZlZCBTVkcgYW5kIE1hdGhNTCBlbGVtZW50cy5cbiAgICAvLyBXZSBkb24ndCBtaW5kIHRoaXMgbGlzdCB0b28gbXVjaCBiZWNhdXNlIHdlIGV4cGVjdCBpdCB0byBuZXZlciBncm93LlxuICAgIC8vIFRoZSBhbHRlcm5hdGl2ZSBpcyB0byB0cmFjayB0aGUgbmFtZXNwYWNlIGluIGEgZmV3IHBsYWNlcyB3aGljaCBpcyBjb252b2x1dGVkLlxuICAgIC8vIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby93ZWJjb21wb25lbnRzL3NwZWMvY3VzdG9tLyNjdXN0b20tZWxlbWVudHMtY29yZS1jb25jZXB0c1xuICAgIGNhc2UgJ2Fubm90YXRpb24teG1sJzpcbiAgICBjYXNlICdjb2xvci1wcm9maWxlJzpcbiAgICBjYXNlICdmb250LWZhY2UnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1zcmMnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS11cmknOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1mb3JtYXQnOlxuICAgIGNhc2UgJ2ZvbnQtZmFjZS1uYW1lJzpcbiAgICBjYXNlICdtaXNzaW5nLWdseXBoJzpcbiAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG52YXIgd2FyblZhbGlkU3R5bGUgPSBmdW5jdGlvbiAoKSB7fTtcblxue1xuICAvLyAnbXNUcmFuc2Zvcm0nIGlzIGNvcnJlY3QsIGJ1dCB0aGUgb3RoZXIgcHJlZml4ZXMgc2hvdWxkIGJlIGNhcGl0YWxpemVkXG4gIHZhciBiYWRWZW5kb3JlZFN0eWxlTmFtZVBhdHRlcm4gPSAvXig/OndlYmtpdHxtb3p8bylbQS1aXS87XG4gIHZhciBtc1BhdHRlcm4kMSA9IC9eLW1zLS87XG4gIHZhciBoeXBoZW5QYXR0ZXJuID0gLy0oLikvZzsgLy8gc3R5bGUgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uXG5cbiAgdmFyIGJhZFN0eWxlVmFsdWVXaXRoU2VtaWNvbG9uUGF0dGVybiA9IC87XFxzKiQvO1xuICB2YXIgd2FybmVkU3R5bGVOYW1lcyA9IHt9O1xuICB2YXIgd2FybmVkU3R5bGVWYWx1ZXMgPSB7fTtcbiAgdmFyIHdhcm5lZEZvck5hTlZhbHVlID0gZmFsc2U7XG4gIHZhciB3YXJuZWRGb3JJbmZpbml0eVZhbHVlID0gZmFsc2U7XG5cbiAgdmFyIGNhbWVsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShoeXBoZW5QYXR0ZXJuLCBmdW5jdGlvbiAoXywgY2hhcmFjdGVyKSB7XG4gICAgICByZXR1cm4gY2hhcmFjdGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAod2FybmVkU3R5bGVOYW1lcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSAmJiB3YXJuZWRTdHlsZU5hbWVzW25hbWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVOYW1lc1tuYW1lXSA9IHRydWU7XG5cbiAgICBlcnJvcignVW5zdXBwb3J0ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8nLCBuYW1lLCAvLyBBcyBBbmRpIFNtaXRoIHN1Z2dlc3RzXG4gICAgLy8gKGh0dHA6Ly93d3cuYW5kaXNtaXRoLmNvbS9ibG9nLzIwMTIvMDIvbW9kZXJuaXpyLXByZWZpeGVkLyksIGFuIGAtbXNgIHByZWZpeFxuICAgIC8vIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAgICBjYW1lbGl6ZShuYW1lLnJlcGxhY2UobXNQYXR0ZXJuJDEsICdtcy0nKSkpO1xuICB9O1xuXG4gIHZhciB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcblxuICAgIGVycm9yKCdVbnN1cHBvcnRlZCB2ZW5kb3ItcHJlZml4ZWQgc3R5bGUgcHJvcGVydHkgJXMuIERpZCB5b3UgbWVhbiAlcz8nLCBuYW1lLCBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSk7XG4gIH07XG5cbiAgdmFyIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmICh3YXJuZWRTdHlsZVZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSkgJiYgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkU3R5bGVWYWx1ZXNbdmFsdWVdID0gdHJ1ZTtcblxuICAgIGVycm9yKFwiU3R5bGUgcHJvcGVydHkgdmFsdWVzIHNob3VsZG4ndCBjb250YWluIGEgc2VtaWNvbG9uLiBcIiArICdUcnkgXCIlczogJXNcIiBpbnN0ZWFkLicsIG5hbWUsIHZhbHVlLnJlcGxhY2UoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLCAnJykpO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZUlzTmFOID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZEZvck5hTlZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkRm9yTmFOVmFsdWUgPSB0cnVlO1xuXG4gICAgZXJyb3IoJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcbiAgfTtcblxuICB2YXIgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5ID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHdhcm5lZEZvckluZmluaXR5VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRGb3JJbmZpbml0eVZhbHVlID0gdHJ1ZTtcblxuICAgIGVycm9yKCdgSW5maW5pdHlgIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4nLCBuYW1lKTtcbiAgfTtcblxuICB3YXJuVmFsaWRTdHlsZSA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZShuYW1lKTtcbiAgICB9IGVsc2UgaWYgKGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSk7XG4gICAgfSBlbHNlIGlmIChiYWRTdHlsZVZhbHVlV2l0aFNlbWljb2xvblBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcbiAgICAgIHdhcm5TdHlsZVZhbHVlV2l0aFNlbWljb2xvbihuYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc05hTihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKCFpc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgICAgd2FyblN0eWxlVmFsdWVJc0luZmluaXR5KG5hbWUsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbnZhciB3YXJuVmFsaWRTdHlsZSQxID0gd2FyblZhbGlkU3R5bGU7XG5cbnZhciBhcmlhUHJvcGVydGllcyA9IHtcbiAgJ2FyaWEtY3VycmVudCc6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWRldGFpbHMnOiAwLFxuICAnYXJpYS1kaXNhYmxlZCc6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWhpZGRlbic6IDAsXG4gIC8vIHN0YXRlXG4gICdhcmlhLWludmFsaWQnOiAwLFxuICAvLyBzdGF0ZVxuICAnYXJpYS1rZXlzaG9ydGN1dHMnOiAwLFxuICAnYXJpYS1sYWJlbCc6IDAsXG4gICdhcmlhLXJvbGVkZXNjcmlwdGlvbic6IDAsXG4gIC8vIFdpZGdldCBBdHRyaWJ1dGVzXG4gICdhcmlhLWF1dG9jb21wbGV0ZSc6IDAsXG4gICdhcmlhLWNoZWNrZWQnOiAwLFxuICAnYXJpYS1leHBhbmRlZCc6IDAsXG4gICdhcmlhLWhhc3BvcHVwJzogMCxcbiAgJ2FyaWEtbGV2ZWwnOiAwLFxuICAnYXJpYS1tb2RhbCc6IDAsXG4gICdhcmlhLW11bHRpbGluZSc6IDAsXG4gICdhcmlhLW11bHRpc2VsZWN0YWJsZSc6IDAsXG4gICdhcmlhLW9yaWVudGF0aW9uJzogMCxcbiAgJ2FyaWEtcGxhY2Vob2xkZXInOiAwLFxuICAnYXJpYS1wcmVzc2VkJzogMCxcbiAgJ2FyaWEtcmVhZG9ubHknOiAwLFxuICAnYXJpYS1yZXF1aXJlZCc6IDAsXG4gICdhcmlhLXNlbGVjdGVkJzogMCxcbiAgJ2FyaWEtc29ydCc6IDAsXG4gICdhcmlhLXZhbHVlbWF4JzogMCxcbiAgJ2FyaWEtdmFsdWVtaW4nOiAwLFxuICAnYXJpYS12YWx1ZW5vdyc6IDAsXG4gICdhcmlhLXZhbHVldGV4dCc6IDAsXG4gIC8vIExpdmUgUmVnaW9uIEF0dHJpYnV0ZXNcbiAgJ2FyaWEtYXRvbWljJzogMCxcbiAgJ2FyaWEtYnVzeSc6IDAsXG4gICdhcmlhLWxpdmUnOiAwLFxuICAnYXJpYS1yZWxldmFudCc6IDAsXG4gIC8vIERyYWctYW5kLURyb3AgQXR0cmlidXRlc1xuICAnYXJpYS1kcm9wZWZmZWN0JzogMCxcbiAgJ2FyaWEtZ3JhYmJlZCc6IDAsXG4gIC8vIFJlbGF0aW9uc2hpcCBBdHRyaWJ1dGVzXG4gICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnOiAwLFxuICAnYXJpYS1jb2xjb3VudCc6IDAsXG4gICdhcmlhLWNvbGluZGV4JzogMCxcbiAgJ2FyaWEtY29sc3Bhbic6IDAsXG4gICdhcmlhLWNvbnRyb2xzJzogMCxcbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiAwLFxuICAnYXJpYS1lcnJvcm1lc3NhZ2UnOiAwLFxuICAnYXJpYS1mbG93dG8nOiAwLFxuICAnYXJpYS1sYWJlbGxlZGJ5JzogMCxcbiAgJ2FyaWEtb3ducyc6IDAsXG4gICdhcmlhLXBvc2luc2V0JzogMCxcbiAgJ2FyaWEtcm93Y291bnQnOiAwLFxuICAnYXJpYS1yb3dpbmRleCc6IDAsXG4gICdhcmlhLXJvd3NwYW4nOiAwLFxuICAnYXJpYS1zZXRzaXplJzogMFxufTtcblxudmFyIHdhcm5lZFByb3BlcnRpZXMgPSB7fTtcbnZhciByQVJJQSA9IG5ldyBSZWdFeHAoJ14oYXJpYSktWycgKyBBVFRSSUJVVEVfTkFNRV9DSEFSICsgJ10qJCcpO1xudmFyIHJBUklBQ2FtZWwgPSBuZXcgUmVnRXhwKCdeKGFyaWEpW0EtWl1bJyArIEFUVFJJQlVURV9OQU1FX0NIQVIgKyAnXSokJyk7XG52YXIgaGFzT3duUHJvcGVydHkkMSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydHkodGFnTmFtZSwgbmFtZSkge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5JDEuY2FsbCh3YXJuZWRQcm9wZXJ0aWVzLCBuYW1lKSAmJiB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAockFSSUFDYW1lbC50ZXN0KG5hbWUpKSB7XG4gICAgICB2YXIgYXJpYU5hbWUgPSAnYXJpYS0nICsgbmFtZS5zbGljZSg0KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgdmFyIGNvcnJlY3ROYW1lID0gYXJpYVByb3BlcnRpZXMuaGFzT3duUHJvcGVydHkoYXJpYU5hbWUpID8gYXJpYU5hbWUgOiBudWxsOyAvLyBJZiB0aGlzIGlzIGFuIGFyaWEtKiBhdHRyaWJ1dGUsIGJ1dCBpcyBub3QgbGlzdGVkIGluIHRoZSBrbm93biBET01cbiAgICAgIC8vIERPTSBwcm9wZXJ0aWVzLCB0aGVuIGl0IGlzIGFuIGludmFsaWQgYXJpYS0qIGF0dHJpYnV0ZS5cblxuICAgICAgaWYgKGNvcnJlY3ROYW1lID09IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgQVJJQSBhdHRyaWJ1dGUgYCVzYC4gQVJJQSBhdHRyaWJ1dGVzIGZvbGxvdyB0aGUgcGF0dGVybiBhcmlhLSogYW5kIG11c3QgYmUgbG93ZXJjYXNlLicsIG5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gLy8gYXJpYS0qIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGxvd2VyY2FzZTsgc3VnZ2VzdCB0aGUgbG93ZXJjYXNlIHZlcnNpb24uXG5cblxuICAgICAgaWYgKG5hbWUgIT09IGNvcnJlY3ROYW1lKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIEFSSUEgYXR0cmlidXRlIGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIGNvcnJlY3ROYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJBUklBLnRlc3QobmFtZSkpIHtcbiAgICAgIHZhciBsb3dlckNhc2VkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHZhciBzdGFuZGFyZE5hbWUgPSBhcmlhUHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShsb3dlckNhc2VkTmFtZSkgPyBsb3dlckNhc2VkTmFtZSA6IG51bGw7IC8vIElmIHRoaXMgaXMgYW4gYXJpYS0qIGF0dHJpYnV0ZSwgYnV0IGlzIG5vdCBsaXN0ZWQgaW4gdGhlIGtub3duIERPTVxuICAgICAgLy8gRE9NIHByb3BlcnRpZXMsIHRoZW4gaXQgaXMgYW4gaW52YWxpZCBhcmlhLSogYXR0cmlidXRlLlxuXG4gICAgICBpZiAoc3RhbmRhcmROYW1lID09IG51bGwpIHtcbiAgICAgICAgd2FybmVkUHJvcGVydGllc1tuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gLy8gYXJpYS0qIGF0dHJpYnV0ZXMgc2hvdWxkIGJlIGxvd2VyY2FzZTsgc3VnZ2VzdCB0aGUgbG93ZXJjYXNlIHZlcnNpb24uXG5cblxuICAgICAgaWYgKG5hbWUgIT09IHN0YW5kYXJkTmFtZSkge1xuICAgICAgICBlcnJvcignVW5rbm93biBBUklBIGF0dHJpYnV0ZSBgJXNgLiBEaWQgeW91IG1lYW4gYCVzYD8nLCBuYW1lLCBzdGFuZGFyZE5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gd2FybkludmFsaWRBUklBUHJvcHModHlwZSwgcHJvcHMpIHtcbiAge1xuICAgIHZhciBpbnZhbGlkUHJvcHMgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgdmFyIGlzVmFsaWQgPSB2YWxpZGF0ZVByb3BlcnR5KHR5cGUsIGtleSk7XG5cbiAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICBpbnZhbGlkUHJvcHMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciB1bmtub3duUHJvcFN0cmluZyA9IGludmFsaWRQcm9wcy5tYXAoZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIHJldHVybiAnYCcgKyBwcm9wICsgJ2AnO1xuICAgIH0pLmpvaW4oJywgJyk7XG5cbiAgICBpZiAoaW52YWxpZFByb3BzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgYXJpYSBwcm9wICVzIG9uIDwlcz4gdGFnLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtYXJpYS1wcm9wcycsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgICB9IGVsc2UgaWYgKGludmFsaWRQcm9wcy5sZW5ndGggPiAxKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBhcmlhIHByb3BzICVzIG9uIDwlcz4gdGFnLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2ludmFsaWQtYXJpYS1wcm9wcycsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wZXJ0aWVzKHR5cGUsIHByb3BzKSB7XG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudCh0eXBlLCBwcm9wcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB3YXJuSW52YWxpZEFSSUFQcm9wcyh0eXBlLCBwcm9wcyk7XG59XG5cbnZhciBkaWRXYXJuVmFsdWVOdWxsID0gZmFsc2U7XG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BlcnRpZXMkMSh0eXBlLCBwcm9wcykge1xuICB7XG4gICAgaWYgKHR5cGUgIT09ICdpbnB1dCcgJiYgdHlwZSAhPT0gJ3RleHRhcmVhJyAmJiB0eXBlICE9PSAnc2VsZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wcyAhPSBudWxsICYmIHByb3BzLnZhbHVlID09PSBudWxsICYmICFkaWRXYXJuVmFsdWVOdWxsKSB7XG4gICAgICBkaWRXYXJuVmFsdWVOdWxsID0gdHJ1ZTtcblxuICAgICAgaWYgKHR5cGUgPT09ICdzZWxlY3QnICYmIHByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIGVycm9yKCdgdmFsdWVgIHByb3Agb24gYCVzYCBzaG91bGQgbm90IGJlIG51bGwuICcgKyAnQ29uc2lkZXIgdXNpbmcgYW4gZW1wdHkgYXJyYXkgd2hlbiBgbXVsdGlwbGVgIGlzIHNldCB0byBgdHJ1ZWAgJyArICd0byBjbGVhciB0aGUgY29tcG9uZW50IG9yIGB1bmRlZmluZWRgIGZvciB1bmNvbnRyb2xsZWQgY29tcG9uZW50cy4nLCB0eXBlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yKCdgdmFsdWVgIHByb3Agb24gYCVzYCBzaG91bGQgbm90IGJlIG51bGwuICcgKyAnQ29uc2lkZXIgdXNpbmcgYW4gZW1wdHkgc3RyaW5nIHRvIGNsZWFyIHRoZSBjb21wb25lbnQgb3IgYHVuZGVmaW5lZGAgJyArICdmb3IgdW5jb250cm9sbGVkIGNvbXBvbmVudHMuJywgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFdoZW4gYWRkaW5nIGF0dHJpYnV0ZXMgdG8gdGhlIEhUTUwgb3IgU1ZHIGFsbG93ZWQgYXR0cmlidXRlIGxpc3QsIGJlIHN1cmUgdG9cbi8vIGFsc28gYWRkIHRoZW0gdG8gdGhpcyBtb2R1bGUgdG8gZW5zdXJlIGNhc2luZyBhbmQgaW5jb3JyZWN0IG5hbWVcbi8vIHdhcm5pbmdzLlxudmFyIHBvc3NpYmxlU3RhbmRhcmROYW1lcyA9IHtcbiAgLy8gSFRNTFxuICBhY2NlcHQ6ICdhY2NlcHQnLFxuICBhY2NlcHRjaGFyc2V0OiAnYWNjZXB0Q2hhcnNldCcsXG4gICdhY2NlcHQtY2hhcnNldCc6ICdhY2NlcHRDaGFyc2V0JyxcbiAgYWNjZXNza2V5OiAnYWNjZXNzS2V5JyxcbiAgYWN0aW9uOiAnYWN0aW9uJyxcbiAgYWxsb3dmdWxsc2NyZWVuOiAnYWxsb3dGdWxsU2NyZWVuJyxcbiAgYWx0OiAnYWx0JyxcbiAgYXM6ICdhcycsXG4gIGFzeW5jOiAnYXN5bmMnLFxuICBhdXRvY2FwaXRhbGl6ZTogJ2F1dG9DYXBpdGFsaXplJyxcbiAgYXV0b2NvbXBsZXRlOiAnYXV0b0NvbXBsZXRlJyxcbiAgYXV0b2NvcnJlY3Q6ICdhdXRvQ29ycmVjdCcsXG4gIGF1dG9mb2N1czogJ2F1dG9Gb2N1cycsXG4gIGF1dG9wbGF5OiAnYXV0b1BsYXknLFxuICBhdXRvc2F2ZTogJ2F1dG9TYXZlJyxcbiAgY2FwdHVyZTogJ2NhcHR1cmUnLFxuICBjZWxscGFkZGluZzogJ2NlbGxQYWRkaW5nJyxcbiAgY2VsbHNwYWNpbmc6ICdjZWxsU3BhY2luZycsXG4gIGNoYWxsZW5nZTogJ2NoYWxsZW5nZScsXG4gIGNoYXJzZXQ6ICdjaGFyU2V0JyxcbiAgY2hlY2tlZDogJ2NoZWNrZWQnLFxuICBjaGlsZHJlbjogJ2NoaWxkcmVuJyxcbiAgY2l0ZTogJ2NpdGUnLFxuICBjbGFzczogJ2NsYXNzTmFtZScsXG4gIGNsYXNzaWQ6ICdjbGFzc0lEJyxcbiAgY2xhc3NuYW1lOiAnY2xhc3NOYW1lJyxcbiAgY29sczogJ2NvbHMnLFxuICBjb2xzcGFuOiAnY29sU3BhbicsXG4gIGNvbnRlbnQ6ICdjb250ZW50JyxcbiAgY29udGVudGVkaXRhYmxlOiAnY29udGVudEVkaXRhYmxlJyxcbiAgY29udGV4dG1lbnU6ICdjb250ZXh0TWVudScsXG4gIGNvbnRyb2xzOiAnY29udHJvbHMnLFxuICBjb250cm9sc2xpc3Q6ICdjb250cm9sc0xpc3QnLFxuICBjb29yZHM6ICdjb29yZHMnLFxuICBjcm9zc29yaWdpbjogJ2Nyb3NzT3JpZ2luJyxcbiAgZGFuZ2Vyb3VzbHlzZXRpbm5lcmh0bWw6ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcsXG4gIGRhdGE6ICdkYXRhJyxcbiAgZGF0ZXRpbWU6ICdkYXRlVGltZScsXG4gIGRlZmF1bHQ6ICdkZWZhdWx0JyxcbiAgZGVmYXVsdGNoZWNrZWQ6ICdkZWZhdWx0Q2hlY2tlZCcsXG4gIGRlZmF1bHR2YWx1ZTogJ2RlZmF1bHRWYWx1ZScsXG4gIGRlZmVyOiAnZGVmZXInLFxuICBkaXI6ICdkaXInLFxuICBkaXNhYmxlZDogJ2Rpc2FibGVkJyxcbiAgZGlzYWJsZXBpY3R1cmVpbnBpY3R1cmU6ICdkaXNhYmxlUGljdHVyZUluUGljdHVyZScsXG4gIGRpc2FibGVyZW1vdGVwbGF5YmFjazogJ2Rpc2FibGVSZW1vdGVQbGF5YmFjaycsXG4gIGRvd25sb2FkOiAnZG93bmxvYWQnLFxuICBkcmFnZ2FibGU6ICdkcmFnZ2FibGUnLFxuICBlbmN0eXBlOiAnZW5jVHlwZScsXG4gIGVudGVya2V5aGludDogJ2VudGVyS2V5SGludCcsXG4gIGZvcjogJ2h0bWxGb3InLFxuICBmb3JtOiAnZm9ybScsXG4gIGZvcm1tZXRob2Q6ICdmb3JtTWV0aG9kJyxcbiAgZm9ybWFjdGlvbjogJ2Zvcm1BY3Rpb24nLFxuICBmb3JtZW5jdHlwZTogJ2Zvcm1FbmNUeXBlJyxcbiAgZm9ybW5vdmFsaWRhdGU6ICdmb3JtTm9WYWxpZGF0ZScsXG4gIGZvcm10YXJnZXQ6ICdmb3JtVGFyZ2V0JyxcbiAgZnJhbWVib3JkZXI6ICdmcmFtZUJvcmRlcicsXG4gIGhlYWRlcnM6ICdoZWFkZXJzJyxcbiAgaGVpZ2h0OiAnaGVpZ2h0JyxcbiAgaGlkZGVuOiAnaGlkZGVuJyxcbiAgaGlnaDogJ2hpZ2gnLFxuICBocmVmOiAnaHJlZicsXG4gIGhyZWZsYW5nOiAnaHJlZkxhbmcnLFxuICBodG1sZm9yOiAnaHRtbEZvcicsXG4gIGh0dHBlcXVpdjogJ2h0dHBFcXVpdicsXG4gICdodHRwLWVxdWl2JzogJ2h0dHBFcXVpdicsXG4gIGljb246ICdpY29uJyxcbiAgaWQ6ICdpZCcsXG4gIGlubmVyaHRtbDogJ2lubmVySFRNTCcsXG4gIGlucHV0bW9kZTogJ2lucHV0TW9kZScsXG4gIGludGVncml0eTogJ2ludGVncml0eScsXG4gIGlzOiAnaXMnLFxuICBpdGVtaWQ6ICdpdGVtSUQnLFxuICBpdGVtcHJvcDogJ2l0ZW1Qcm9wJyxcbiAgaXRlbXJlZjogJ2l0ZW1SZWYnLFxuICBpdGVtc2NvcGU6ICdpdGVtU2NvcGUnLFxuICBpdGVtdHlwZTogJ2l0ZW1UeXBlJyxcbiAga2V5cGFyYW1zOiAna2V5UGFyYW1zJyxcbiAga2V5dHlwZTogJ2tleVR5cGUnLFxuICBraW5kOiAna2luZCcsXG4gIGxhYmVsOiAnbGFiZWwnLFxuICBsYW5nOiAnbGFuZycsXG4gIGxpc3Q6ICdsaXN0JyxcbiAgbG9vcDogJ2xvb3AnLFxuICBsb3c6ICdsb3cnLFxuICBtYW5pZmVzdDogJ21hbmlmZXN0JyxcbiAgbWFyZ2lud2lkdGg6ICdtYXJnaW5XaWR0aCcsXG4gIG1hcmdpbmhlaWdodDogJ21hcmdpbkhlaWdodCcsXG4gIG1heDogJ21heCcsXG4gIG1heGxlbmd0aDogJ21heExlbmd0aCcsXG4gIG1lZGlhOiAnbWVkaWEnLFxuICBtZWRpYWdyb3VwOiAnbWVkaWFHcm91cCcsXG4gIG1ldGhvZDogJ21ldGhvZCcsXG4gIG1pbjogJ21pbicsXG4gIG1pbmxlbmd0aDogJ21pbkxlbmd0aCcsXG4gIG11bHRpcGxlOiAnbXVsdGlwbGUnLFxuICBtdXRlZDogJ211dGVkJyxcbiAgbmFtZTogJ25hbWUnLFxuICBub21vZHVsZTogJ25vTW9kdWxlJyxcbiAgbm9uY2U6ICdub25jZScsXG4gIG5vdmFsaWRhdGU6ICdub1ZhbGlkYXRlJyxcbiAgb3BlbjogJ29wZW4nLFxuICBvcHRpbXVtOiAnb3B0aW11bScsXG4gIHBhdHRlcm46ICdwYXR0ZXJuJyxcbiAgcGxhY2Vob2xkZXI6ICdwbGFjZWhvbGRlcicsXG4gIHBsYXlzaW5saW5lOiAncGxheXNJbmxpbmUnLFxuICBwb3N0ZXI6ICdwb3N0ZXInLFxuICBwcmVsb2FkOiAncHJlbG9hZCcsXG4gIHByb2ZpbGU6ICdwcm9maWxlJyxcbiAgcmFkaW9ncm91cDogJ3JhZGlvR3JvdXAnLFxuICByZWFkb25seTogJ3JlYWRPbmx5JyxcbiAgcmVmZXJyZXJwb2xpY3k6ICdyZWZlcnJlclBvbGljeScsXG4gIHJlbDogJ3JlbCcsXG4gIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxuICByZXZlcnNlZDogJ3JldmVyc2VkJyxcbiAgcm9sZTogJ3JvbGUnLFxuICByb3dzOiAncm93cycsXG4gIHJvd3NwYW46ICdyb3dTcGFuJyxcbiAgc2FuZGJveDogJ3NhbmRib3gnLFxuICBzY29wZTogJ3Njb3BlJyxcbiAgc2NvcGVkOiAnc2NvcGVkJyxcbiAgc2Nyb2xsaW5nOiAnc2Nyb2xsaW5nJyxcbiAgc2VhbWxlc3M6ICdzZWFtbGVzcycsXG4gIHNlbGVjdGVkOiAnc2VsZWN0ZWQnLFxuICBzaGFwZTogJ3NoYXBlJyxcbiAgc2l6ZTogJ3NpemUnLFxuICBzaXplczogJ3NpemVzJyxcbiAgc3BhbjogJ3NwYW4nLFxuICBzcGVsbGNoZWNrOiAnc3BlbGxDaGVjaycsXG4gIHNyYzogJ3NyYycsXG4gIHNyY2RvYzogJ3NyY0RvYycsXG4gIHNyY2xhbmc6ICdzcmNMYW5nJyxcbiAgc3Jjc2V0OiAnc3JjU2V0JyxcbiAgc3RhcnQ6ICdzdGFydCcsXG4gIHN0ZXA6ICdzdGVwJyxcbiAgc3R5bGU6ICdzdHlsZScsXG4gIHN1bW1hcnk6ICdzdW1tYXJ5JyxcbiAgdGFiaW5kZXg6ICd0YWJJbmRleCcsXG4gIHRhcmdldDogJ3RhcmdldCcsXG4gIHRpdGxlOiAndGl0bGUnLFxuICB0eXBlOiAndHlwZScsXG4gIHVzZW1hcDogJ3VzZU1hcCcsXG4gIHZhbHVlOiAndmFsdWUnLFxuICB3aWR0aDogJ3dpZHRoJyxcbiAgd21vZGU6ICd3bW9kZScsXG4gIHdyYXA6ICd3cmFwJyxcbiAgLy8gU1ZHXG4gIGFib3V0OiAnYWJvdXQnLFxuICBhY2NlbnRoZWlnaHQ6ICdhY2NlbnRIZWlnaHQnLFxuICAnYWNjZW50LWhlaWdodCc6ICdhY2NlbnRIZWlnaHQnLFxuICBhY2N1bXVsYXRlOiAnYWNjdW11bGF0ZScsXG4gIGFkZGl0aXZlOiAnYWRkaXRpdmUnLFxuICBhbGlnbm1lbnRiYXNlbGluZTogJ2FsaWdubWVudEJhc2VsaW5lJyxcbiAgJ2FsaWdubWVudC1iYXNlbGluZSc6ICdhbGlnbm1lbnRCYXNlbGluZScsXG4gIGFsbG93cmVvcmRlcjogJ2FsbG93UmVvcmRlcicsXG4gIGFscGhhYmV0aWM6ICdhbHBoYWJldGljJyxcbiAgYW1wbGl0dWRlOiAnYW1wbGl0dWRlJyxcbiAgYXJhYmljZm9ybTogJ2FyYWJpY0Zvcm0nLFxuICAnYXJhYmljLWZvcm0nOiAnYXJhYmljRm9ybScsXG4gIGFzY2VudDogJ2FzY2VudCcsXG4gIGF0dHJpYnV0ZW5hbWU6ICdhdHRyaWJ1dGVOYW1lJyxcbiAgYXR0cmlidXRldHlwZTogJ2F0dHJpYnV0ZVR5cGUnLFxuICBhdXRvcmV2ZXJzZTogJ2F1dG9SZXZlcnNlJyxcbiAgYXppbXV0aDogJ2F6aW11dGgnLFxuICBiYXNlZnJlcXVlbmN5OiAnYmFzZUZyZXF1ZW5jeScsXG4gIGJhc2VsaW5lc2hpZnQ6ICdiYXNlbGluZVNoaWZ0JyxcbiAgJ2Jhc2VsaW5lLXNoaWZ0JzogJ2Jhc2VsaW5lU2hpZnQnLFxuICBiYXNlcHJvZmlsZTogJ2Jhc2VQcm9maWxlJyxcbiAgYmJveDogJ2Jib3gnLFxuICBiZWdpbjogJ2JlZ2luJyxcbiAgYmlhczogJ2JpYXMnLFxuICBieTogJ2J5JyxcbiAgY2FsY21vZGU6ICdjYWxjTW9kZScsXG4gIGNhcGhlaWdodDogJ2NhcEhlaWdodCcsXG4gICdjYXAtaGVpZ2h0JzogJ2NhcEhlaWdodCcsXG4gIGNsaXA6ICdjbGlwJyxcbiAgY2xpcHBhdGg6ICdjbGlwUGF0aCcsXG4gICdjbGlwLXBhdGgnOiAnY2xpcFBhdGgnLFxuICBjbGlwcGF0aHVuaXRzOiAnY2xpcFBhdGhVbml0cycsXG4gIGNsaXBydWxlOiAnY2xpcFJ1bGUnLFxuICAnY2xpcC1ydWxlJzogJ2NsaXBSdWxlJyxcbiAgY29sb3I6ICdjb2xvcicsXG4gIGNvbG9yaW50ZXJwb2xhdGlvbjogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gICdjb2xvci1pbnRlcnBvbGF0aW9uJzogJ2NvbG9ySW50ZXJwb2xhdGlvbicsXG4gIGNvbG9yaW50ZXJwb2xhdGlvbmZpbHRlcnM6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyc6ICdjb2xvckludGVycG9sYXRpb25GaWx0ZXJzJyxcbiAgY29sb3Jwcm9maWxlOiAnY29sb3JQcm9maWxlJyxcbiAgJ2NvbG9yLXByb2ZpbGUnOiAnY29sb3JQcm9maWxlJyxcbiAgY29sb3JyZW5kZXJpbmc6ICdjb2xvclJlbmRlcmluZycsXG4gICdjb2xvci1yZW5kZXJpbmcnOiAnY29sb3JSZW5kZXJpbmcnLFxuICBjb250ZW50c2NyaXB0dHlwZTogJ2NvbnRlbnRTY3JpcHRUeXBlJyxcbiAgY29udGVudHN0eWxldHlwZTogJ2NvbnRlbnRTdHlsZVR5cGUnLFxuICBjdXJzb3I6ICdjdXJzb3InLFxuICBjeDogJ2N4JyxcbiAgY3k6ICdjeScsXG4gIGQ6ICdkJyxcbiAgZGF0YXR5cGU6ICdkYXRhdHlwZScsXG4gIGRlY2VsZXJhdGU6ICdkZWNlbGVyYXRlJyxcbiAgZGVzY2VudDogJ2Rlc2NlbnQnLFxuICBkaWZmdXNlY29uc3RhbnQ6ICdkaWZmdXNlQ29uc3RhbnQnLFxuICBkaXJlY3Rpb246ICdkaXJlY3Rpb24nLFxuICBkaXNwbGF5OiAnZGlzcGxheScsXG4gIGRpdmlzb3I6ICdkaXZpc29yJyxcbiAgZG9taW5hbnRiYXNlbGluZTogJ2RvbWluYW50QmFzZWxpbmUnLFxuICAnZG9taW5hbnQtYmFzZWxpbmUnOiAnZG9taW5hbnRCYXNlbGluZScsXG4gIGR1cjogJ2R1cicsXG4gIGR4OiAnZHgnLFxuICBkeTogJ2R5JyxcbiAgZWRnZW1vZGU6ICdlZGdlTW9kZScsXG4gIGVsZXZhdGlvbjogJ2VsZXZhdGlvbicsXG4gIGVuYWJsZWJhY2tncm91bmQ6ICdlbmFibGVCYWNrZ3JvdW5kJyxcbiAgJ2VuYWJsZS1iYWNrZ3JvdW5kJzogJ2VuYWJsZUJhY2tncm91bmQnLFxuICBlbmQ6ICdlbmQnLFxuICBleHBvbmVudDogJ2V4cG9uZW50JyxcbiAgZXh0ZXJuYWxyZXNvdXJjZXNyZXF1aXJlZDogJ2V4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWQnLFxuICBmaWxsOiAnZmlsbCcsXG4gIGZpbGxvcGFjaXR5OiAnZmlsbE9wYWNpdHknLFxuICAnZmlsbC1vcGFjaXR5JzogJ2ZpbGxPcGFjaXR5JyxcbiAgZmlsbHJ1bGU6ICdmaWxsUnVsZScsXG4gICdmaWxsLXJ1bGUnOiAnZmlsbFJ1bGUnLFxuICBmaWx0ZXI6ICdmaWx0ZXInLFxuICBmaWx0ZXJyZXM6ICdmaWx0ZXJSZXMnLFxuICBmaWx0ZXJ1bml0czogJ2ZpbHRlclVuaXRzJyxcbiAgZmxvb2RvcGFjaXR5OiAnZmxvb2RPcGFjaXR5JyxcbiAgJ2Zsb29kLW9wYWNpdHknOiAnZmxvb2RPcGFjaXR5JyxcbiAgZmxvb2Rjb2xvcjogJ2Zsb29kQ29sb3InLFxuICAnZmxvb2QtY29sb3InOiAnZmxvb2RDb2xvcicsXG4gIGZvY3VzYWJsZTogJ2ZvY3VzYWJsZScsXG4gIGZvbnRmYW1pbHk6ICdmb250RmFtaWx5JyxcbiAgJ2ZvbnQtZmFtaWx5JzogJ2ZvbnRGYW1pbHknLFxuICBmb250c2l6ZTogJ2ZvbnRTaXplJyxcbiAgJ2ZvbnQtc2l6ZSc6ICdmb250U2l6ZScsXG4gIGZvbnRzaXplYWRqdXN0OiAnZm9udFNpemVBZGp1c3QnLFxuICAnZm9udC1zaXplLWFkanVzdCc6ICdmb250U2l6ZUFkanVzdCcsXG4gIGZvbnRzdHJldGNoOiAnZm9udFN0cmV0Y2gnLFxuICAnZm9udC1zdHJldGNoJzogJ2ZvbnRTdHJldGNoJyxcbiAgZm9udHN0eWxlOiAnZm9udFN0eWxlJyxcbiAgJ2ZvbnQtc3R5bGUnOiAnZm9udFN0eWxlJyxcbiAgZm9udHZhcmlhbnQ6ICdmb250VmFyaWFudCcsXG4gICdmb250LXZhcmlhbnQnOiAnZm9udFZhcmlhbnQnLFxuICBmb250d2VpZ2h0OiAnZm9udFdlaWdodCcsXG4gICdmb250LXdlaWdodCc6ICdmb250V2VpZ2h0JyxcbiAgZm9ybWF0OiAnZm9ybWF0JyxcbiAgZnJvbTogJ2Zyb20nLFxuICBmeDogJ2Z4JyxcbiAgZnk6ICdmeScsXG4gIGcxOiAnZzEnLFxuICBnMjogJ2cyJyxcbiAgZ2x5cGhuYW1lOiAnZ2x5cGhOYW1lJyxcbiAgJ2dseXBoLW5hbWUnOiAnZ2x5cGhOYW1lJyxcbiAgZ2x5cGhvcmllbnRhdGlvbmhvcml6b250YWw6ICdnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbCcsXG4gICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJzogJ2dseXBoT3JpZW50YXRpb25Ib3Jpem9udGFsJyxcbiAgZ2x5cGhvcmllbnRhdGlvbnZlcnRpY2FsOiAnZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsJyxcbiAgJ2dseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsJzogJ2dseXBoT3JpZW50YXRpb25WZXJ0aWNhbCcsXG4gIGdseXBocmVmOiAnZ2x5cGhSZWYnLFxuICBncmFkaWVudHRyYW5zZm9ybTogJ2dyYWRpZW50VHJhbnNmb3JtJyxcbiAgZ3JhZGllbnR1bml0czogJ2dyYWRpZW50VW5pdHMnLFxuICBoYW5naW5nOiAnaGFuZ2luZycsXG4gIGhvcml6YWR2eDogJ2hvcml6QWR2WCcsXG4gICdob3Jpei1hZHYteCc6ICdob3JpekFkdlgnLFxuICBob3Jpem9yaWdpbng6ICdob3Jpek9yaWdpblgnLFxuICAnaG9yaXotb3JpZ2luLXgnOiAnaG9yaXpPcmlnaW5YJyxcbiAgaWRlb2dyYXBoaWM6ICdpZGVvZ3JhcGhpYycsXG4gIGltYWdlcmVuZGVyaW5nOiAnaW1hZ2VSZW5kZXJpbmcnLFxuICAnaW1hZ2UtcmVuZGVyaW5nJzogJ2ltYWdlUmVuZGVyaW5nJyxcbiAgaW4yOiAnaW4yJyxcbiAgaW46ICdpbicsXG4gIGlubGlzdDogJ2lubGlzdCcsXG4gIGludGVyY2VwdDogJ2ludGVyY2VwdCcsXG4gIGsxOiAnazEnLFxuICBrMjogJ2syJyxcbiAgazM6ICdrMycsXG4gIGs0OiAnazQnLFxuICBrOiAnaycsXG4gIGtlcm5lbG1hdHJpeDogJ2tlcm5lbE1hdHJpeCcsXG4gIGtlcm5lbHVuaXRsZW5ndGg6ICdrZXJuZWxVbml0TGVuZ3RoJyxcbiAga2VybmluZzogJ2tlcm5pbmcnLFxuICBrZXlwb2ludHM6ICdrZXlQb2ludHMnLFxuICBrZXlzcGxpbmVzOiAna2V5U3BsaW5lcycsXG4gIGtleXRpbWVzOiAna2V5VGltZXMnLFxuICBsZW5ndGhhZGp1c3Q6ICdsZW5ndGhBZGp1c3QnLFxuICBsZXR0ZXJzcGFjaW5nOiAnbGV0dGVyU3BhY2luZycsXG4gICdsZXR0ZXItc3BhY2luZyc6ICdsZXR0ZXJTcGFjaW5nJyxcbiAgbGlnaHRpbmdjb2xvcjogJ2xpZ2h0aW5nQ29sb3InLFxuICAnbGlnaHRpbmctY29sb3InOiAnbGlnaHRpbmdDb2xvcicsXG4gIGxpbWl0aW5nY29uZWFuZ2xlOiAnbGltaXRpbmdDb25lQW5nbGUnLFxuICBsb2NhbDogJ2xvY2FsJyxcbiAgbWFya2VyZW5kOiAnbWFya2VyRW5kJyxcbiAgJ21hcmtlci1lbmQnOiAnbWFya2VyRW5kJyxcbiAgbWFya2VyaGVpZ2h0OiAnbWFya2VySGVpZ2h0JyxcbiAgbWFya2VybWlkOiAnbWFya2VyTWlkJyxcbiAgJ21hcmtlci1taWQnOiAnbWFya2VyTWlkJyxcbiAgbWFya2Vyc3RhcnQ6ICdtYXJrZXJTdGFydCcsXG4gICdtYXJrZXItc3RhcnQnOiAnbWFya2VyU3RhcnQnLFxuICBtYXJrZXJ1bml0czogJ21hcmtlclVuaXRzJyxcbiAgbWFya2Vyd2lkdGg6ICdtYXJrZXJXaWR0aCcsXG4gIG1hc2s6ICdtYXNrJyxcbiAgbWFza2NvbnRlbnR1bml0czogJ21hc2tDb250ZW50VW5pdHMnLFxuICBtYXNrdW5pdHM6ICdtYXNrVW5pdHMnLFxuICBtYXRoZW1hdGljYWw6ICdtYXRoZW1hdGljYWwnLFxuICBtb2RlOiAnbW9kZScsXG4gIG51bW9jdGF2ZXM6ICdudW1PY3RhdmVzJyxcbiAgb2Zmc2V0OiAnb2Zmc2V0JyxcbiAgb3BhY2l0eTogJ29wYWNpdHknLFxuICBvcGVyYXRvcjogJ29wZXJhdG9yJyxcbiAgb3JkZXI6ICdvcmRlcicsXG4gIG9yaWVudDogJ29yaWVudCcsXG4gIG9yaWVudGF0aW9uOiAnb3JpZW50YXRpb24nLFxuICBvcmlnaW46ICdvcmlnaW4nLFxuICBvdmVyZmxvdzogJ292ZXJmbG93JyxcbiAgb3ZlcmxpbmVwb3NpdGlvbjogJ292ZXJsaW5lUG9zaXRpb24nLFxuICAnb3ZlcmxpbmUtcG9zaXRpb24nOiAnb3ZlcmxpbmVQb3NpdGlvbicsXG4gIG92ZXJsaW5ldGhpY2tuZXNzOiAnb3ZlcmxpbmVUaGlja25lc3MnLFxuICAnb3ZlcmxpbmUtdGhpY2tuZXNzJzogJ292ZXJsaW5lVGhpY2tuZXNzJyxcbiAgcGFpbnRvcmRlcjogJ3BhaW50T3JkZXInLFxuICAncGFpbnQtb3JkZXInOiAncGFpbnRPcmRlcicsXG4gIHBhbm9zZTE6ICdwYW5vc2UxJyxcbiAgJ3Bhbm9zZS0xJzogJ3Bhbm9zZTEnLFxuICBwYXRobGVuZ3RoOiAncGF0aExlbmd0aCcsXG4gIHBhdHRlcm5jb250ZW50dW5pdHM6ICdwYXR0ZXJuQ29udGVudFVuaXRzJyxcbiAgcGF0dGVybnRyYW5zZm9ybTogJ3BhdHRlcm5UcmFuc2Zvcm0nLFxuICBwYXR0ZXJudW5pdHM6ICdwYXR0ZXJuVW5pdHMnLFxuICBwb2ludGVyZXZlbnRzOiAncG9pbnRlckV2ZW50cycsXG4gICdwb2ludGVyLWV2ZW50cyc6ICdwb2ludGVyRXZlbnRzJyxcbiAgcG9pbnRzOiAncG9pbnRzJyxcbiAgcG9pbnRzYXR4OiAncG9pbnRzQXRYJyxcbiAgcG9pbnRzYXR5OiAncG9pbnRzQXRZJyxcbiAgcG9pbnRzYXR6OiAncG9pbnRzQXRaJyxcbiAgcHJlZml4OiAncHJlZml4JyxcbiAgcHJlc2VydmVhbHBoYTogJ3ByZXNlcnZlQWxwaGEnLFxuICBwcmVzZXJ2ZWFzcGVjdHJhdGlvOiAncHJlc2VydmVBc3BlY3RSYXRpbycsXG4gIHByaW1pdGl2ZXVuaXRzOiAncHJpbWl0aXZlVW5pdHMnLFxuICBwcm9wZXJ0eTogJ3Byb3BlcnR5JyxcbiAgcjogJ3InLFxuICByYWRpdXM6ICdyYWRpdXMnLFxuICByZWZ4OiAncmVmWCcsXG4gIHJlZnk6ICdyZWZZJyxcbiAgcmVuZGVyaW5naW50ZW50OiAncmVuZGVyaW5nSW50ZW50JyxcbiAgJ3JlbmRlcmluZy1pbnRlbnQnOiAncmVuZGVyaW5nSW50ZW50JyxcbiAgcmVwZWF0Y291bnQ6ICdyZXBlYXRDb3VudCcsXG4gIHJlcGVhdGR1cjogJ3JlcGVhdER1cicsXG4gIHJlcXVpcmVkZXh0ZW5zaW9uczogJ3JlcXVpcmVkRXh0ZW5zaW9ucycsXG4gIHJlcXVpcmVkZmVhdHVyZXM6ICdyZXF1aXJlZEZlYXR1cmVzJyxcbiAgcmVzb3VyY2U6ICdyZXNvdXJjZScsXG4gIHJlc3RhcnQ6ICdyZXN0YXJ0JyxcbiAgcmVzdWx0OiAncmVzdWx0JyxcbiAgcmVzdWx0czogJ3Jlc3VsdHMnLFxuICByb3RhdGU6ICdyb3RhdGUnLFxuICByeDogJ3J4JyxcbiAgcnk6ICdyeScsXG4gIHNjYWxlOiAnc2NhbGUnLFxuICBzZWN1cml0eTogJ3NlY3VyaXR5JyxcbiAgc2VlZDogJ3NlZWQnLFxuICBzaGFwZXJlbmRlcmluZzogJ3NoYXBlUmVuZGVyaW5nJyxcbiAgJ3NoYXBlLXJlbmRlcmluZyc6ICdzaGFwZVJlbmRlcmluZycsXG4gIHNsb3BlOiAnc2xvcGUnLFxuICBzcGFjaW5nOiAnc3BhY2luZycsXG4gIHNwZWN1bGFyY29uc3RhbnQ6ICdzcGVjdWxhckNvbnN0YW50JyxcbiAgc3BlY3VsYXJleHBvbmVudDogJ3NwZWN1bGFyRXhwb25lbnQnLFxuICBzcGVlZDogJ3NwZWVkJyxcbiAgc3ByZWFkbWV0aG9kOiAnc3ByZWFkTWV0aG9kJyxcbiAgc3RhcnRvZmZzZXQ6ICdzdGFydE9mZnNldCcsXG4gIHN0ZGRldmlhdGlvbjogJ3N0ZERldmlhdGlvbicsXG4gIHN0ZW1oOiAnc3RlbWgnLFxuICBzdGVtdjogJ3N0ZW12JyxcbiAgc3RpdGNodGlsZXM6ICdzdGl0Y2hUaWxlcycsXG4gIHN0b3Bjb2xvcjogJ3N0b3BDb2xvcicsXG4gICdzdG9wLWNvbG9yJzogJ3N0b3BDb2xvcicsXG4gIHN0b3BvcGFjaXR5OiAnc3RvcE9wYWNpdHknLFxuICAnc3RvcC1vcGFjaXR5JzogJ3N0b3BPcGFjaXR5JyxcbiAgc3RyaWtldGhyb3VnaHBvc2l0aW9uOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nOiAnc3RyaWtldGhyb3VnaFBvc2l0aW9uJyxcbiAgc3RyaWtldGhyb3VnaHRoaWNrbmVzczogJ3N0cmlrZXRocm91Z2hUaGlja25lc3MnLFxuICAnc3RyaWtldGhyb3VnaC10aGlja25lc3MnOiAnc3RyaWtldGhyb3VnaFRoaWNrbmVzcycsXG4gIHN0cmluZzogJ3N0cmluZycsXG4gIHN0cm9rZTogJ3N0cm9rZScsXG4gIHN0cm9rZWRhc2hhcnJheTogJ3N0cm9rZURhc2hhcnJheScsXG4gICdzdHJva2UtZGFzaGFycmF5JzogJ3N0cm9rZURhc2hhcnJheScsXG4gIHN0cm9rZWRhc2hvZmZzZXQ6ICdzdHJva2VEYXNob2Zmc2V0JyxcbiAgJ3N0cm9rZS1kYXNob2Zmc2V0JzogJ3N0cm9rZURhc2hvZmZzZXQnLFxuICBzdHJva2VsaW5lY2FwOiAnc3Ryb2tlTGluZWNhcCcsXG4gICdzdHJva2UtbGluZWNhcCc6ICdzdHJva2VMaW5lY2FwJyxcbiAgc3Ryb2tlbGluZWpvaW46ICdzdHJva2VMaW5lam9pbicsXG4gICdzdHJva2UtbGluZWpvaW4nOiAnc3Ryb2tlTGluZWpvaW4nLFxuICBzdHJva2VtaXRlcmxpbWl0OiAnc3Ryb2tlTWl0ZXJsaW1pdCcsXG4gICdzdHJva2UtbWl0ZXJsaW1pdCc6ICdzdHJva2VNaXRlcmxpbWl0JyxcbiAgc3Ryb2tld2lkdGg6ICdzdHJva2VXaWR0aCcsXG4gICdzdHJva2Utd2lkdGgnOiAnc3Ryb2tlV2lkdGgnLFxuICBzdHJva2VvcGFjaXR5OiAnc3Ryb2tlT3BhY2l0eScsXG4gICdzdHJva2Utb3BhY2l0eSc6ICdzdHJva2VPcGFjaXR5JyxcbiAgc3VwcHJlc3Njb250ZW50ZWRpdGFibGV3YXJuaW5nOiAnc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nJyxcbiAgc3VwcHJlc3NoeWRyYXRpb253YXJuaW5nOiAnc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nJyxcbiAgc3VyZmFjZXNjYWxlOiAnc3VyZmFjZVNjYWxlJyxcbiAgc3lzdGVtbGFuZ3VhZ2U6ICdzeXN0ZW1MYW5ndWFnZScsXG4gIHRhYmxldmFsdWVzOiAndGFibGVWYWx1ZXMnLFxuICB0YXJnZXR4OiAndGFyZ2V0WCcsXG4gIHRhcmdldHk6ICd0YXJnZXRZJyxcbiAgdGV4dGFuY2hvcjogJ3RleHRBbmNob3InLFxuICAndGV4dC1hbmNob3InOiAndGV4dEFuY2hvcicsXG4gIHRleHRkZWNvcmF0aW9uOiAndGV4dERlY29yYXRpb24nLFxuICAndGV4dC1kZWNvcmF0aW9uJzogJ3RleHREZWNvcmF0aW9uJyxcbiAgdGV4dGxlbmd0aDogJ3RleHRMZW5ndGgnLFxuICB0ZXh0cmVuZGVyaW5nOiAndGV4dFJlbmRlcmluZycsXG4gICd0ZXh0LXJlbmRlcmluZyc6ICd0ZXh0UmVuZGVyaW5nJyxcbiAgdG86ICd0bycsXG4gIHRyYW5zZm9ybTogJ3RyYW5zZm9ybScsXG4gIHR5cGVvZjogJ3R5cGVvZicsXG4gIHUxOiAndTEnLFxuICB1MjogJ3UyJyxcbiAgdW5kZXJsaW5lcG9zaXRpb246ICd1bmRlcmxpbmVQb3NpdGlvbicsXG4gICd1bmRlcmxpbmUtcG9zaXRpb24nOiAndW5kZXJsaW5lUG9zaXRpb24nLFxuICB1bmRlcmxpbmV0aGlja25lc3M6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICAndW5kZXJsaW5lLXRoaWNrbmVzcyc6ICd1bmRlcmxpbmVUaGlja25lc3MnLFxuICB1bmljb2RlOiAndW5pY29kZScsXG4gIHVuaWNvZGViaWRpOiAndW5pY29kZUJpZGknLFxuICAndW5pY29kZS1iaWRpJzogJ3VuaWNvZGVCaWRpJyxcbiAgdW5pY29kZXJhbmdlOiAndW5pY29kZVJhbmdlJyxcbiAgJ3VuaWNvZGUtcmFuZ2UnOiAndW5pY29kZVJhbmdlJyxcbiAgdW5pdHNwZXJlbTogJ3VuaXRzUGVyRW0nLFxuICAndW5pdHMtcGVyLWVtJzogJ3VuaXRzUGVyRW0nLFxuICB1bnNlbGVjdGFibGU6ICd1bnNlbGVjdGFibGUnLFxuICB2YWxwaGFiZXRpYzogJ3ZBbHBoYWJldGljJyxcbiAgJ3YtYWxwaGFiZXRpYyc6ICd2QWxwaGFiZXRpYycsXG4gIHZhbHVlczogJ3ZhbHVlcycsXG4gIHZlY3RvcmVmZmVjdDogJ3ZlY3RvckVmZmVjdCcsXG4gICd2ZWN0b3ItZWZmZWN0JzogJ3ZlY3RvckVmZmVjdCcsXG4gIHZlcnNpb246ICd2ZXJzaW9uJyxcbiAgdmVydGFkdnk6ICd2ZXJ0QWR2WScsXG4gICd2ZXJ0LWFkdi15JzogJ3ZlcnRBZHZZJyxcbiAgdmVydG9yaWdpbng6ICd2ZXJ0T3JpZ2luWCcsXG4gICd2ZXJ0LW9yaWdpbi14JzogJ3ZlcnRPcmlnaW5YJyxcbiAgdmVydG9yaWdpbnk6ICd2ZXJ0T3JpZ2luWScsXG4gICd2ZXJ0LW9yaWdpbi15JzogJ3ZlcnRPcmlnaW5ZJyxcbiAgdmhhbmdpbmc6ICd2SGFuZ2luZycsXG4gICd2LWhhbmdpbmcnOiAndkhhbmdpbmcnLFxuICB2aWRlb2dyYXBoaWM6ICd2SWRlb2dyYXBoaWMnLFxuICAndi1pZGVvZ3JhcGhpYyc6ICd2SWRlb2dyYXBoaWMnLFxuICB2aWV3Ym94OiAndmlld0JveCcsXG4gIHZpZXd0YXJnZXQ6ICd2aWV3VGFyZ2V0JyxcbiAgdmlzaWJpbGl0eTogJ3Zpc2liaWxpdHknLFxuICB2bWF0aGVtYXRpY2FsOiAndk1hdGhlbWF0aWNhbCcsXG4gICd2LW1hdGhlbWF0aWNhbCc6ICd2TWF0aGVtYXRpY2FsJyxcbiAgdm9jYWI6ICd2b2NhYicsXG4gIHdpZHRoczogJ3dpZHRocycsXG4gIHdvcmRzcGFjaW5nOiAnd29yZFNwYWNpbmcnLFxuICAnd29yZC1zcGFjaW5nJzogJ3dvcmRTcGFjaW5nJyxcbiAgd3JpdGluZ21vZGU6ICd3cml0aW5nTW9kZScsXG4gICd3cml0aW5nLW1vZGUnOiAnd3JpdGluZ01vZGUnLFxuICB4MTogJ3gxJyxcbiAgeDI6ICd4MicsXG4gIHg6ICd4JyxcbiAgeGNoYW5uZWxzZWxlY3RvcjogJ3hDaGFubmVsU2VsZWN0b3InLFxuICB4aGVpZ2h0OiAneEhlaWdodCcsXG4gICd4LWhlaWdodCc6ICd4SGVpZ2h0JyxcbiAgeGxpbmthY3R1YXRlOiAneGxpbmtBY3R1YXRlJyxcbiAgJ3hsaW5rOmFjdHVhdGUnOiAneGxpbmtBY3R1YXRlJyxcbiAgeGxpbmthcmNyb2xlOiAneGxpbmtBcmNyb2xlJyxcbiAgJ3hsaW5rOmFyY3JvbGUnOiAneGxpbmtBcmNyb2xlJyxcbiAgeGxpbmtocmVmOiAneGxpbmtIcmVmJyxcbiAgJ3hsaW5rOmhyZWYnOiAneGxpbmtIcmVmJyxcbiAgeGxpbmtyb2xlOiAneGxpbmtSb2xlJyxcbiAgJ3hsaW5rOnJvbGUnOiAneGxpbmtSb2xlJyxcbiAgeGxpbmtzaG93OiAneGxpbmtTaG93JyxcbiAgJ3hsaW5rOnNob3cnOiAneGxpbmtTaG93JyxcbiAgeGxpbmt0aXRsZTogJ3hsaW5rVGl0bGUnLFxuICAneGxpbms6dGl0bGUnOiAneGxpbmtUaXRsZScsXG4gIHhsaW5rdHlwZTogJ3hsaW5rVHlwZScsXG4gICd4bGluazp0eXBlJzogJ3hsaW5rVHlwZScsXG4gIHhtbGJhc2U6ICd4bWxCYXNlJyxcbiAgJ3htbDpiYXNlJzogJ3htbEJhc2UnLFxuICB4bWxsYW5nOiAneG1sTGFuZycsXG4gICd4bWw6bGFuZyc6ICd4bWxMYW5nJyxcbiAgeG1sbnM6ICd4bWxucycsXG4gICd4bWw6c3BhY2UnOiAneG1sU3BhY2UnLFxuICB4bWxuc3hsaW5rOiAneG1sbnNYbGluaycsXG4gICd4bWxuczp4bGluayc6ICd4bWxuc1hsaW5rJyxcbiAgeG1sc3BhY2U6ICd4bWxTcGFjZScsXG4gIHkxOiAneTEnLFxuICB5MjogJ3kyJyxcbiAgeTogJ3knLFxuICB5Y2hhbm5lbHNlbGVjdG9yOiAneUNoYW5uZWxTZWxlY3RvcicsXG4gIHo6ICd6JyxcbiAgem9vbWFuZHBhbjogJ3pvb21BbmRQYW4nXG59O1xuXG52YXIgdmFsaWRhdGVQcm9wZXJ0eSQxID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHdhcm5lZFByb3BlcnRpZXMkMSA9IHt9O1xuICB2YXIgX2hhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIEVWRU5UX05BTUVfUkVHRVggPSAvXm9uLi87XG4gIHZhciBJTlZBTElEX0VWRU5UX05BTUVfUkVHRVggPSAvXm9uW15BLVpdLztcbiAgdmFyIHJBUklBJDEgPSBuZXcgUmVnRXhwKCdeKGFyaWEpLVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcbiAgdmFyIHJBUklBQ2FtZWwkMSA9IG5ldyBSZWdFeHAoJ14oYXJpYSlbQS1aXVsnICsgQVRUUklCVVRFX05BTUVfQ0hBUiArICddKiQnKTtcblxuICB2YWxpZGF0ZVByb3BlcnR5JDEgPSBmdW5jdGlvbiAodGFnTmFtZSwgbmFtZSwgdmFsdWUsIGV2ZW50UmVnaXN0cnkpIHtcbiAgICBpZiAoX2hhc093blByb3BlcnR5LmNhbGwod2FybmVkUHJvcGVydGllcyQxLCBuYW1lKSAmJiB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBsb3dlckNhc2VkTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmIChsb3dlckNhc2VkTmFtZSA9PT0gJ29uZm9jdXNpbicgfHwgbG93ZXJDYXNlZE5hbWUgPT09ICdvbmZvY3Vzb3V0Jykge1xuICAgICAgZXJyb3IoJ1JlYWN0IHVzZXMgb25Gb2N1cyBhbmQgb25CbHVyIGluc3RlYWQgb2Ygb25Gb2N1c0luIGFuZCBvbkZvY3VzT3V0LiAnICsgJ0FsbCBSZWFjdCBldmVudHMgYXJlIG5vcm1hbGl6ZWQgdG8gYnViYmxlLCBzbyBvbkZvY3VzSW4gYW5kIG9uRm9jdXNPdXQgJyArICdhcmUgbm90IG5lZWRlZC9zdXBwb3J0ZWQgYnkgUmVhY3QuJyk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IC8vIFdlIGNhbid0IHJlbHkgb24gdGhlIGV2ZW50IHN5c3RlbSBiZWluZyBpbmplY3RlZCBvbiB0aGUgc2VydmVyLlxuXG5cbiAgICBpZiAoZXZlbnRSZWdpc3RyeSAhPSBudWxsKSB7XG4gICAgICB2YXIgcmVnaXN0cmF0aW9uTmFtZURlcGVuZGVuY2llcyA9IGV2ZW50UmVnaXN0cnkucmVnaXN0cmF0aW9uTmFtZURlcGVuZGVuY2llcyxcbiAgICAgICAgICBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzID0gZXZlbnRSZWdpc3RyeS5wb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzO1xuXG4gICAgICBpZiAocmVnaXN0cmF0aW9uTmFtZURlcGVuZGVuY2llcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlZ2lzdHJhdGlvbk5hbWUgPSBwb3NzaWJsZVJlZ2lzdHJhdGlvbk5hbWVzLmhhc093blByb3BlcnR5KGxvd2VyQ2FzZWROYW1lKSA/IHBvc3NpYmxlUmVnaXN0cmF0aW9uTmFtZXNbbG93ZXJDYXNlZE5hbWVdIDogbnVsbDtcblxuICAgICAgaWYgKHJlZ2lzdHJhdGlvbk5hbWUgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBldmVudCBoYW5kbGVyIHByb3BlcnR5IGAlc2AuIERpZCB5b3UgbWVhbiBgJXNgPycsIG5hbWUsIHJlZ2lzdHJhdGlvbk5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoRVZFTlRfTkFNRV9SRUdFWC50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGVycm9yKCdVbmtub3duIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gSXQgd2lsbCBiZSBpZ25vcmVkLicsIG5hbWUpO1xuXG4gICAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoRVZFTlRfTkFNRV9SRUdFWC50ZXN0KG5hbWUpKSB7XG4gICAgICAvLyBJZiBubyBldmVudCBwbHVnaW5zIGhhdmUgYmVlbiBpbmplY3RlZCwgd2UgYXJlIGluIGEgc2VydmVyIGVudmlyb25tZW50LlxuICAgICAgLy8gU28gd2UgY2FuJ3QgdGVsbCBpZiB0aGUgZXZlbnQgbmFtZSBpcyBjb3JyZWN0IGZvciBzdXJlLCBidXQgd2UgY2FuIGZpbHRlclxuICAgICAgLy8gb3V0IGtub3duIGJhZCBvbmVzIGxpa2UgYG9uY2xpY2tgLiBXZSBjYW4ndCBzdWdnZXN0IGEgc3BlY2lmaWMgcmVwbGFjZW1lbnQgdGhvdWdoLlxuICAgICAgaWYgKElOVkFMSURfRVZFTlRfTkFNRV9SRUdFWC50ZXN0KG5hbWUpKSB7XG4gICAgICAgIGVycm9yKCdJbnZhbGlkIGV2ZW50IGhhbmRsZXIgcHJvcGVydHkgYCVzYC4gJyArICdSZWFjdCBldmVudHMgdXNlIHRoZSBjYW1lbENhc2UgbmFtaW5nIGNvbnZlbnRpb24sIGZvciBleGFtcGxlIGBvbkNsaWNrYC4nLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gTGV0IHRoZSBBUklBIGF0dHJpYnV0ZSBob29rIHZhbGlkYXRlIEFSSUEgYXR0cmlidXRlc1xuXG5cbiAgICBpZiAockFSSUEkMS50ZXN0KG5hbWUpIHx8IHJBUklBQ2FtZWwkMS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdpbm5lcmh0bWwnKSB7XG4gICAgICBlcnJvcignRGlyZWN0bHkgc2V0dGluZyBwcm9wZXJ0eSBgaW5uZXJIVE1MYCBpcyBub3QgcGVybWl0dGVkLiAnICsgJ0ZvciBtb3JlIGluZm9ybWF0aW9uLCBsb29rdXAgZG9jdW1lbnRhdGlvbiBvbiBgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxgLicpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxvd2VyQ2FzZWROYW1lID09PSAnYXJpYScpIHtcbiAgICAgIGVycm9yKCdUaGUgYGFyaWFgIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBmb3IgZnV0dXJlIHVzZSBpbiBSZWFjdC4gJyArICdQYXNzIGluZGl2aWR1YWwgYGFyaWEtYCBhdHRyaWJ1dGVzIGluc3RlYWQuJyk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobG93ZXJDYXNlZE5hbWUgPT09ICdpcycgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYSBgJXNgIGZvciBhIHN0cmluZyBhdHRyaWJ1dGUgYGlzYC4gSWYgdGhpcyBpcyBleHBlY3RlZCwgY2FzdCAnICsgJ3RoZSB2YWx1ZSB0byBhIHN0cmluZy4nLCB0eXBlb2YgdmFsdWUpO1xuXG4gICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgTmFOIGZvciB0aGUgYCVzYCBhdHRyaWJ1dGUuIElmIHRoaXMgaXMgZXhwZWN0ZWQsIGNhc3QgJyArICd0aGUgdmFsdWUgdG8gYSBzdHJpbmcuJywgbmFtZSk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcGVydHlJbmZvID0gZ2V0UHJvcGVydHlJbmZvKG5hbWUpO1xuICAgIHZhciBpc1Jlc2VydmVkID0gcHJvcGVydHlJbmZvICE9PSBudWxsICYmIHByb3BlcnR5SW5mby50eXBlID09PSBSRVNFUlZFRDsgLy8gS25vd24gYXR0cmlidXRlcyBzaG91bGQgbWF0Y2ggdGhlIGNhc2luZyBzcGVjaWZpZWQgaW4gdGhlIHByb3BlcnR5IGNvbmZpZy5cblxuICAgIGlmIChwb3NzaWJsZVN0YW5kYXJkTmFtZXMuaGFzT3duUHJvcGVydHkobG93ZXJDYXNlZE5hbWUpKSB7XG4gICAgICB2YXIgc3RhbmRhcmROYW1lID0gcG9zc2libGVTdGFuZGFyZE5hbWVzW2xvd2VyQ2FzZWROYW1lXTtcblxuICAgICAgaWYgKHN0YW5kYXJkTmFtZSAhPT0gbmFtZSkge1xuICAgICAgICBlcnJvcignSW52YWxpZCBET00gcHJvcGVydHkgYCVzYC4gRGlkIHlvdSBtZWFuIGAlc2A/JywgbmFtZSwgc3RhbmRhcmROYW1lKTtcblxuICAgICAgICB3YXJuZWRQcm9wZXJ0aWVzJDFbbmFtZV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkICYmIG5hbWUgIT09IGxvd2VyQ2FzZWROYW1lKSB7XG4gICAgICAvLyBVbmtub3duIGF0dHJpYnV0ZXMgc2hvdWxkIGhhdmUgbG93ZXJjYXNlIGNhc2luZyBzaW5jZSB0aGF0J3MgaG93IHRoZXlcbiAgICAgIC8vIHdpbGwgYmUgY2FzZWQgYW55d2F5IHdpdGggc2VydmVyIHJlbmRlcmluZy5cbiAgICAgIGVycm9yKCdSZWFjdCBkb2VzIG5vdCByZWNvZ25pemUgdGhlIGAlc2AgcHJvcCBvbiBhIERPTSBlbGVtZW50LiBJZiB5b3UgJyArICdpbnRlbnRpb25hbGx5IHdhbnQgaXQgdG8gYXBwZWFyIGluIHRoZSBET00gYXMgYSBjdXN0b20gJyArICdhdHRyaWJ1dGUsIHNwZWxsIGl0IGFzIGxvd2VyY2FzZSBgJXNgIGluc3RlYWQuICcgKyAnSWYgeW91IGFjY2lkZW50YWxseSBwYXNzZWQgaXQgZnJvbSBhIHBhcmVudCBjb21wb25lbnQsIHJlbW92ZSAnICsgJ2l0IGZyb20gdGhlIERPTSBlbGVtZW50LicsIG5hbWUsIGxvd2VyQ2FzZWROYW1lKTtcblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyAmJiBzaG91bGRSZW1vdmVBdHRyaWJ1dGVXaXRoV2FybmluZyhuYW1lLCB2YWx1ZSwgcHJvcGVydHlJbmZvLCBmYWxzZSkpIHtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBlcnJvcignUmVjZWl2ZWQgYCVzYCBmb3IgYSBub24tYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC5cXG5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIHdyaXRlIGl0IHRvIHRoZSBET00sIHBhc3MgYSBzdHJpbmcgaW5zdGVhZDogJyArICclcz1cIiVzXCIgb3IgJXM9e3ZhbHVlLnRvU3RyaW5nKCl9LicsIHZhbHVlLCBuYW1lLCBuYW1lLCB2YWx1ZSwgbmFtZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvcignUmVjZWl2ZWQgYCVzYCBmb3IgYSBub24tYm9vbGVhbiBhdHRyaWJ1dGUgYCVzYC5cXG5cXG4nICsgJ0lmIHlvdSB3YW50IHRvIHdyaXRlIGl0IHRvIHRoZSBET00sIHBhc3MgYSBzdHJpbmcgaW5zdGVhZDogJyArICclcz1cIiVzXCIgb3IgJXM9e3ZhbHVlLnRvU3RyaW5nKCl9LlxcblxcbicgKyAnSWYgeW91IHVzZWQgdG8gY29uZGl0aW9uYWxseSBvbWl0IGl0IHdpdGggJXM9e2NvbmRpdGlvbiAmJiB2YWx1ZX0sICcgKyAncGFzcyAlcz17Y29uZGl0aW9uID8gdmFsdWUgOiB1bmRlZmluZWR9IGluc3RlYWQuJywgdmFsdWUsIG5hbWUsIG5hbWUsIHZhbHVlLCBuYW1lLCBuYW1lLCBuYW1lKTtcbiAgICAgIH1cblxuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gTm93IHRoYXQgd2UndmUgdmFsaWRhdGVkIGNhc2luZywgZG8gbm90IHZhbGlkYXRlXG4gICAgLy8gZGF0YSB0eXBlcyBmb3IgcmVzZXJ2ZWQgcHJvcHNcblxuXG4gICAgaWYgKGlzUmVzZXJ2ZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gLy8gV2FybiB3aGVuIGEga25vd24gYXR0cmlidXRlIGlzIGEgYmFkIHR5cGVcblxuXG4gICAgaWYgKHNob3VsZFJlbW92ZUF0dHJpYnV0ZVdpdGhXYXJuaW5nKG5hbWUsIHZhbHVlLCBwcm9wZXJ0eUluZm8sIGZhbHNlKSkge1xuICAgICAgd2FybmVkUHJvcGVydGllcyQxW25hbWVdID0gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIFdhcm4gd2hlbiBwYXNzaW5nIHRoZSBzdHJpbmdzICdmYWxzZScgb3IgJ3RydWUnIGludG8gYSBib29sZWFuIHByb3BcblxuXG4gICAgaWYgKCh2YWx1ZSA9PT0gJ2ZhbHNlJyB8fCB2YWx1ZSA9PT0gJ3RydWUnKSAmJiBwcm9wZXJ0eUluZm8gIT09IG51bGwgJiYgcHJvcGVydHlJbmZvLnR5cGUgPT09IEJPT0xFQU4pIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCB0aGUgc3RyaW5nIGAlc2AgZm9yIHRoZSBib29sZWFuIGF0dHJpYnV0ZSBgJXNgLiAnICsgJyVzICcgKyAnRGlkIHlvdSBtZWFuICVzPXslc30/JywgdmFsdWUsIG5hbWUsIHZhbHVlID09PSAnZmFsc2UnID8gJ1RoZSBicm93c2VyIHdpbGwgaW50ZXJwcmV0IGl0IGFzIGEgdHJ1dGh5IHZhbHVlLicgOiAnQWx0aG91Z2ggdGhpcyB3b3JrcywgaXQgd2lsbCBub3Qgd29yayBhcyBleHBlY3RlZCBpZiB5b3UgcGFzcyB0aGUgc3RyaW5nIFwiZmFsc2VcIi4nLCBuYW1lLCB2YWx1ZSk7XG5cbiAgICAgIHdhcm5lZFByb3BlcnRpZXMkMVtuYW1lXSA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbn1cblxudmFyIHdhcm5Vbmtub3duUHJvcGVydGllcyA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcywgZXZlbnRSZWdpc3RyeSkge1xuICB7XG4gICAgdmFyIHVua25vd25Qcm9wcyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YXIgaXNWYWxpZCA9IHZhbGlkYXRlUHJvcGVydHkkMSh0eXBlLCBrZXksIHByb3BzW2tleV0sIGV2ZW50UmVnaXN0cnkpO1xuXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgdW5rbm93blByb3BzLnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgdW5rbm93blByb3BTdHJpbmcgPSB1bmtub3duUHJvcHMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICByZXR1cm4gJ2AnICsgcHJvcCArICdgJztcbiAgICB9KS5qb2luKCcsICcpO1xuXG4gICAgaWYgKHVua25vd25Qcm9wcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBwcm9wICVzIG9uIDwlcz4gdGFnLiBFaXRoZXIgcmVtb3ZlIGl0IGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCBpdCBpbiB0aGUgRE9NLiAnICsgJ0ZvciBkZXRhaWxzLCBzZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2F0dHJpYnV0ZS1iZWhhdmlvciAnLCB1bmtub3duUHJvcFN0cmluZywgdHlwZSk7XG4gICAgfSBlbHNlIGlmICh1bmtub3duUHJvcHMubGVuZ3RoID4gMSkge1xuICAgICAgZXJyb3IoJ0ludmFsaWQgdmFsdWVzIGZvciBwcm9wcyAlcyBvbiA8JXM+IHRhZy4gRWl0aGVyIHJlbW92ZSB0aGVtIGZyb20gdGhlIGVsZW1lbnQsICcgKyAnb3IgcGFzcyBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUgdG8ga2VlcCB0aGVtIGluIHRoZSBET00uICcgKyAnRm9yIGRldGFpbHMsIHNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvYXR0cmlidXRlLWJlaGF2aW9yICcsIHVua25vd25Qcm9wU3RyaW5nLCB0eXBlKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyQyKHR5cGUsIHByb3BzLCBldmVudFJlZ2lzdHJ5KSB7XG4gIGlmIChpc0N1c3RvbUNvbXBvbmVudCh0eXBlLCBwcm9wcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB3YXJuVW5rbm93blByb3BlcnRpZXModHlwZSwgcHJvcHMsIGV2ZW50UmVnaXN0cnkpO1xufVxuXG52YXIgdG9BcnJheSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXk7IC8vIFRoaXMgaXMgb25seSB1c2VkIGluIERFVi5cbi8vIEVhY2ggZW50cnkgaXMgYHRoaXMuc3RhY2tgIGZyb20gYSBjdXJyZW50bHkgZXhlY3V0aW5nIHJlbmRlcmVyIGluc3RhbmNlLlxuLy8gKFRoZXJlIG1heSBiZSBtb3JlIHRoYW4gb25lIGJlY2F1c2UgUmVhY3RET01TZXJ2ZXIgaXMgcmVlbnRyYW50KS5cbi8vIEVhY2ggc3RhY2sgaXMgYW4gYXJyYXkgb2YgZnJhbWVzIHdoaWNoIG1heSBjb250YWluIG5lc3RlZCBzdGFja3Mgb2YgZWxlbWVudHMuXG5cbnZhciBjdXJyZW50RGVidWdTdGFja3MgPSBbXTtcbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMTtcbnZhciBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IG51bGw7XG5cbnZhciBnZXRDdXJyZW50U2VydmVyU3RhY2tJbXBsID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJyc7XG59O1xuXG52YXIgZGVzY3JpYmVTdGFja0ZyYW1lID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgcmV0dXJuICcnO1xufTtcblxudmFyIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQgPSBmdW5jdGlvbiAodHlwZSwgcHJvcHMpIHt9O1xuXG52YXIgcHVzaEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKHN0YWNrKSB7fTtcblxudmFyIHB1c2hFbGVtZW50VG9EZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKGVsZW1lbnQpIHt9O1xuXG52YXIgcG9wQ3VycmVudERlYnVnU3RhY2sgPSBmdW5jdGlvbiAoKSB7fTtcblxudmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb250ZXh0QXNDb25zdW1lciA9IGZhbHNlO1xuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbiAgdmFsaWRhdGVQcm9wZXJ0aWVzSW5EZXZlbG9wbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBwcm9wcykge1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyh0eXBlLCBwcm9wcyk7XG4gICAgdmFsaWRhdGVQcm9wZXJ0aWVzJDEodHlwZSwgcHJvcHMpO1xuICAgIHZhbGlkYXRlUHJvcGVydGllcyQyKHR5cGUsIHByb3BzLCBudWxsKTtcbiAgfTtcblxuICBkZXNjcmliZVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG51bGwpO1xuICB9O1xuXG4gIHB1c2hDdXJyZW50RGVidWdTdGFjayA9IGZ1bmN0aW9uIChzdGFjaykge1xuICAgIGN1cnJlbnREZWJ1Z1N0YWNrcy5wdXNoKHN0YWNrKTtcblxuICAgIGlmIChjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAvLyBXZSBhcmUgZW50ZXJpbmcgYSBzZXJ2ZXIgcmVuZGVyZXIuXG4gICAgICAvLyBSZW1lbWJlciB0aGUgcHJldmlvdXMgKGUuZy4gY2xpZW50KSBnbG9iYWwgc3RhY2sgaW1wbGVtZW50YXRpb24uXG4gICAgICBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5nZXRDdXJyZW50U3RhY2s7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuZ2V0Q3VycmVudFN0YWNrID0gZ2V0Q3VycmVudFNlcnZlclN0YWNrSW1wbDtcbiAgICB9XG4gIH07XG5cbiAgcHVzaEVsZW1lbnRUb0RlYnVnU3RhY2sgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIEZvciB0aGUgaW5uZXJtb3N0IGV4ZWN1dGluZyBSZWFjdERPTVNlcnZlciBjYWxsLFxuICAgIHZhciBzdGFjayA9IGN1cnJlbnREZWJ1Z1N0YWNrc1tjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoIC0gMV07IC8vIFRha2UgdGhlIGlubmVybW9zdCBleGVjdXRpbmcgZnJhbWUgKGUuZy4gPEZvbz4pLFxuXG4gICAgdmFyIGZyYW1lID0gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07IC8vIGFuZCByZWNvcmQgdGhhdCBpdCBoYXMgb25lIG1vcmUgZWxlbWVudCBhc3NvY2lhdGVkIHdpdGggaXQuXG5cbiAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjay5wdXNoKGVsZW1lbnQpOyAvLyBXZSBvbmx5IG5lZWQgdGhpcyBiZWNhdXNlIHdlIHRhaWwtb3B0aW1pemUgc2luZ2xlLWVsZW1lbnRcbiAgICAvLyBjaGlsZHJlbiBhbmQgZGlyZWN0bHkgaGFuZGxlIHRoZW0gaW4gYW4gaW5uZXIgbG9vcCBpbnN0ZWFkIG9mXG4gICAgLy8gY3JlYXRpbmcgc2VwYXJhdGUgZnJhbWVzIGZvciB0aGVtLlxuICB9O1xuXG4gIHBvcEN1cnJlbnREZWJ1Z1N0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnREZWJ1Z1N0YWNrcy5wb3AoKTtcblxuICAgIGlmIChjdXJyZW50RGVidWdTdGFja3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBXZSBhcmUgZXhpdGluZyB0aGUgc2VydmVyIHJlbmRlcmVyLlxuICAgICAgLy8gUmVzdG9yZSB0aGUgcHJldmlvdXMgKGUuZy4gY2xpZW50KSBnbG9iYWwgc3RhY2sgaW1wbGVtZW50YXRpb24uXG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuZ2V0Q3VycmVudFN0YWNrID0gcHJldkdldEN1cnJlbnRTdGFja0ltcGw7XG4gICAgICBwcmV2R2V0Q3VycmVudFN0YWNrSW1wbCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIGdldEN1cnJlbnRTZXJ2ZXJTdGFja0ltcGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIE5vdGhpbmcgaXMgY3VycmVudGx5IHJlbmRlcmluZy5cbiAgICAgIHJldHVybiAnJztcbiAgICB9IC8vIFJlYWN0RE9NU2VydmVyIGlzIHJlZW50cmFudCBzbyB0aGVyZSBtYXkgYmUgbXVsdGlwbGUgY2FsbHMgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAvLyBUYWtlIHRoZSBmcmFtZXMgZnJvbSB0aGUgaW5uZXJtb3N0IGNhbGwgd2hpY2ggaXMgdGhlIGxhc3QgaW4gdGhlIGFycmF5LlxuXG5cbiAgICB2YXIgZnJhbWVzID0gY3VycmVudERlYnVnU3RhY2tzW2N1cnJlbnREZWJ1Z1N0YWNrcy5sZW5ndGggLSAxXTtcbiAgICB2YXIgc3RhY2sgPSAnJzsgLy8gR28gdGhyb3VnaCBldmVyeSBmcmFtZSBpbiB0aGUgc3RhY2sgZnJvbSB0aGUgaW5uZXJtb3N0IG9uZS5cblxuICAgIGZvciAodmFyIGkgPSBmcmFtZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmcmFtZSA9IGZyYW1lc1tpXTsgLy8gRXZlcnkgZnJhbWUgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGRlYnVnIGVsZW1lbnQgc3RhY2sgZW50cnkgYXNzb2NpYXRlZCB3aXRoIGl0LlxuICAgICAgLy8gVGhpcyBpcyBiZWNhdXNlIHNpbmdsZS1jaGlsZCBuZXN0aW5nIGRvZXNuJ3QgY3JlYXRlIG1hdGVyaWFsaXplZCBmcmFtZXMuXG4gICAgICAvLyBJbnN0ZWFkIGl0IHdvdWxkIHB1c2ggdGhlbSB0aHJvdWdoIGBwdXNoRWxlbWVudFRvRGVidWdTdGFjaygpYC5cblxuICAgICAgdmFyIGRlYnVnRWxlbWVudFN0YWNrID0gZnJhbWUuZGVidWdFbGVtZW50U3RhY2s7XG5cbiAgICAgIGZvciAodmFyIGlpID0gZGVidWdFbGVtZW50U3RhY2subGVuZ3RoIC0gMTsgaWkgPj0gMDsgaWktLSkge1xuICAgICAgICBzdGFjayArPSBkZXNjcmliZVN0YWNrRnJhbWUoZGVidWdFbGVtZW50U3RhY2tbaWldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbnZhciBkaWRXYXJuRGVmYXVsdElucHV0VmFsdWUgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdENoZWNrZWQgPSBmYWxzZTtcbnZhciBkaWRXYXJuRGVmYXVsdFNlbGVjdFZhbHVlID0gZmFsc2U7XG52YXIgZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlID0gZmFsc2U7XG52YXIgZGlkV2FybkludmFsaWRPcHRpb25DaGlsZHJlbiA9IGZhbHNlO1xudmFyIGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnQgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXRCYWRDbGFzcyA9IHt9O1xudmFyIGRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnQgPSB7fTtcbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkV2lsbE1vdW50ID0ge307XG52YXIgZGlkV2FybkFib3V0VW5kZWZpbmVkRGVyaXZlZFN0YXRlID0ge307XG52YXIgZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlID0ge307XG52YXIgdmFsdWVQcm9wTmFtZXMgPSBbJ3ZhbHVlJywgJ2RlZmF1bHRWYWx1ZSddO1xudmFyIG5ld2xpbmVFYXRpbmdUYWdzID0ge1xuICBsaXN0aW5nOiB0cnVlLFxuICBwcmU6IHRydWUsXG4gIHRleHRhcmVhOiB0cnVlXG59OyAvLyBXZSBhY2NlcHQgYW55IHRhZyB0byBiZSByZW5kZXJlZCBidXQgc2luY2UgdGhpcyBnZXRzIGluamVjdGVkIGludG8gYXJiaXRyYXJ5XG4vLyBIVE1MLCB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB0aGF0IGl0J3MgYSBzYWZlIHRhZy5cbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL1JFQy14bWwvI05ULU5hbWVcblxudmFyIFZBTElEX1RBR19SRUdFWCA9IC9eW2EtekEtWl1bYS16QS1aOl9cXC5cXC1cXGRdKiQvOyAvLyBTaW1wbGlmaWVkIHN1YnNldFxuXG52YXIgdmFsaWRhdGVkVGFnQ2FjaGUgPSB7fTtcblxuZnVuY3Rpb24gdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKSB7XG4gIGlmICghdmFsaWRhdGVkVGFnQ2FjaGUuaGFzT3duUHJvcGVydHkodGFnKSkge1xuICAgIGlmICghVkFMSURfVEFHX1JFR0VYLnRlc3QodGFnKSkge1xuICAgICAge1xuICAgICAgICB0aHJvdyBFcnJvciggXCJJbnZhbGlkIHRhZzogXCIgKyB0YWcgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YWxpZGF0ZWRUYWdDYWNoZVt0YWddID0gdHJ1ZTtcbiAgfVxufVxuXG52YXIgc3R5bGVOYW1lQ2FjaGUgPSB7fTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIGlmIChzdHlsZU5hbWVDYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHlsZU5hbWUpKSB7XG4gICAgcmV0dXJuIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV07XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gaHlwaGVuYXRlU3R5bGVOYW1lKHN0eWxlTmFtZSk7XG4gIHN0eWxlTmFtZUNhY2hlW3N0eWxlTmFtZV0gPSByZXN1bHQ7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVNYXJrdXBGb3JTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciBzZXJpYWxpemVkID0gJyc7XG4gIHZhciBkZWxpbWl0ZXIgPSAnJztcblxuICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gc3R5bGVzKSB7XG4gICAgaWYgKCFzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBzdHlsZU5hbWUuaW5kZXhPZignLS0nKSA9PT0gMDtcbiAgICB2YXIgc3R5bGVWYWx1ZSA9IHN0eWxlc1tzdHlsZU5hbWVdO1xuXG4gICAge1xuICAgICAgaWYgKCFpc0N1c3RvbVByb3BlcnR5KSB7XG4gICAgICAgIHdhcm5WYWxpZFN0eWxlJDEoc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3R5bGVWYWx1ZSAhPSBudWxsKSB7XG4gICAgICBzZXJpYWxpemVkICs9IGRlbGltaXRlciArIChpc0N1c3RvbVByb3BlcnR5ID8gc3R5bGVOYW1lIDogcHJvY2Vzc1N0eWxlTmFtZShzdHlsZU5hbWUpKSArICc6JztcbiAgICAgIHNlcmlhbGl6ZWQgKz0gZGFuZ2Vyb3VzU3R5bGVWYWx1ZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGlzQ3VzdG9tUHJvcGVydHkpO1xuICAgICAgZGVsaW1pdGVyID0gJzsnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZXJpYWxpemVkIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgZ2V0Q29tcG9uZW50TmFtZShfY29uc3RydWN0b3IpIHx8ICdSZWFjdENsYXNzJztcbiAgICB2YXIgd2FybmluZ0tleSA9IGNvbXBvbmVudE5hbWUgKyAnLicgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5BYm91dE5vb3BVcGRhdGVGb3JDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcignJXMoLi4uKTogQ2FuIG9ubHkgdXBkYXRlIGEgbW91bnRpbmcgY29tcG9uZW50LiAnICsgJ1RoaXMgdXN1YWxseSBtZWFucyB5b3UgY2FsbGVkICVzKCkgb3V0c2lkZSBjb21wb25lbnRXaWxsTW91bnQoKSBvbiB0aGUgc2VydmVyLiAnICsgJ1RoaXMgaXMgYSBuby1vcC5cXG5cXG5QbGVhc2UgY2hlY2sgdGhlIGNvZGUgZm9yIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuQWJvdXROb29wVXBkYXRlRm9yQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QkMShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5wcm90b3R5cGUgJiYgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50O1xufVxuXG5mdW5jdGlvbiBnZXROb25DaGlsZHJlbklubmVyTWFya3VwKHByb3BzKSB7XG4gIHZhciBpbm5lckhUTUwgPSBwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTDtcblxuICBpZiAoaW5uZXJIVE1MICE9IG51bGwpIHtcbiAgICBpZiAoaW5uZXJIVE1MLl9faHRtbCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gaW5uZXJIVE1MLl9faHRtbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNvbnRlbnQgPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNvbnRlbnQgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gZXNjYXBlVGV4dEZvckJyb3dzZXIoY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Ub3BMZXZlbENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGlmICghUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoY2hpbGRyZW4pO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjaGlsZHJlbjtcblxuICBpZiAoZWxlbWVudC50eXBlICE9PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgcmV0dXJuIFtlbGVtZW50XTtcbiAgfVxuXG4gIHZhciBmcmFnbWVudENoaWxkcmVuID0gZWxlbWVudC5wcm9wcy5jaGlsZHJlbjtcblxuICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGZyYWdtZW50Q2hpbGRyZW4pKSB7XG4gICAgcmV0dXJuIHRvQXJyYXkoZnJhZ21lbnRDaGlsZHJlbik7XG4gIH1cblxuICB2YXIgZnJhZ21lbnRDaGlsZEVsZW1lbnQgPSBmcmFnbWVudENoaWxkcmVuO1xuICByZXR1cm4gW2ZyYWdtZW50Q2hpbGRFbGVtZW50XTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbk9wdGlvbkNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGlmIChjaGlsZHJlbiA9PT0gdW5kZWZpbmVkIHx8IGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIGNvbnRlbnQgPSAnJzsgLy8gRmxhdHRlbiBjaGlsZHJlbiBhbmQgd2FybiBpZiB0aGV5IGFyZW4ndCBzdHJpbmdzIG9yIG51bWJlcnM7XG4gIC8vIGludmFsaWQgdHlwZXMgYXJlIGlnbm9yZWQuXG5cbiAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZW50ICs9IGNoaWxkO1xuXG4gICAge1xuICAgICAgaWYgKCFkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuICYmIHR5cGVvZiBjaGlsZCAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIGNoaWxkICE9PSAnbnVtYmVyJykge1xuICAgICAgICBkaWRXYXJuSW52YWxpZE9wdGlvbkNoaWxkcmVuID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignT25seSBzdHJpbmdzIGFuZCBudW1iZXJzIGFyZSBzdXBwb3J0ZWQgYXMgPG9wdGlvbj4gY2hpbGRyZW4uJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSQyID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBTVFlMRSA9ICdzdHlsZSc7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGNoaWxkcmVuOiBudWxsLFxuICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbnVsbCxcbiAgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nOiBudWxsLFxuICBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmc6IG51bGxcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZU9wZW5UYWdNYXJrdXAodGFnVmVyYmF0aW0sIHRhZ0xvd2VyY2FzZSwgcHJvcHMsIG5hbWVzcGFjZSwgbWFrZVN0YXRpY01hcmt1cCwgaXNSb290RWxlbWVudCkge1xuICB2YXIgcmV0ID0gJzwnICsgdGFnVmVyYmF0aW07XG4gIHZhciBpc0N1c3RvbUNvbXBvbmVudCQxID0gaXNDdXN0b21Db21wb25lbnQodGFnTG93ZXJjYXNlLCBwcm9wcyk7XG5cbiAgZm9yICh2YXIgcHJvcEtleSBpbiBwcm9wcykge1xuICAgIGlmICghaGFzT3duUHJvcGVydHkkMi5jYWxsKHByb3BzLCBwcm9wS2V5KSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BLZXldO1xuXG4gICAgaWYgKHByb3BWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcEtleSA9PT0gU1RZTEUpIHtcbiAgICAgIHByb3BWYWx1ZSA9IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyhwcm9wVmFsdWUpO1xuICAgIH1cblxuICAgIHZhciBtYXJrdXAgPSBudWxsO1xuXG4gICAgaWYgKGlzQ3VzdG9tQ29tcG9uZW50JDEpIHtcbiAgICAgIGlmICghUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcEtleSkpIHtcbiAgICAgICAgbWFya3VwID0gY3JlYXRlTWFya3VwRm9yQ3VzdG9tQXR0cmlidXRlKHByb3BLZXksIHByb3BWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmt1cCA9IGNyZWF0ZU1hcmt1cEZvclByb3BlcnR5KHByb3BLZXksIHByb3BWYWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKG1hcmt1cCkge1xuICAgICAgcmV0ICs9ICcgJyArIG1hcmt1cDtcbiAgICB9XG4gIH0gLy8gRm9yIHN0YXRpYyBwYWdlcywgbm8gbmVlZCB0byBwdXQgUmVhY3QgSUQgYW5kIGNoZWNrc3VtLiBTYXZlcyBsb3RzIG9mXG4gIC8vIGJ5dGVzLlxuXG5cbiAgaWYgKG1ha2VTdGF0aWNNYXJrdXApIHtcbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgaWYgKGlzUm9vdEVsZW1lbnQpIHtcbiAgICByZXQgKz0gJyAnICsgY3JlYXRlTWFya3VwRm9yUm9vdCgpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVSZW5kZXJSZXN1bHQoY2hpbGQsIHR5cGUpIHtcbiAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQpIHtcbiAgICB7XG4gICAgICB7XG4gICAgICAgIHRocm93IEVycm9yKCAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB8fCAnQ29tcG9uZW50JykgKyBcIiguLi4pOiBOb3RoaW5nIHdhcyByZXR1cm5lZCBmcm9tIHJlbmRlci4gVGhpcyB1c3VhbGx5IG1lYW5zIGEgcmV0dXJuIHN0YXRlbWVudCBpcyBtaXNzaW5nLiBPciwgdG8gcmVuZGVyIG5vdGhpbmcsIHJldHVybiBudWxsLlwiICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoY2hpbGQsIGNvbnRleHQsIHRocmVhZElEKSB7XG4gIHdoaWxlIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAvLyBTYWZlIGJlY2F1c2Ugd2UganVzdCBjaGVja2VkIGl0J3MgYW4gZWxlbWVudC5cbiAgICB2YXIgZWxlbWVudCA9IGNoaWxkO1xuICAgIHZhciBDb21wb25lbnQgPSBlbGVtZW50LnR5cGU7XG5cbiAgICB7XG4gICAgICBwdXNoRWxlbWVudFRvRGVidWdTdGFjayhlbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIENvbXBvbmVudCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcHJvY2Vzc0NoaWxkKGVsZW1lbnQsIENvbXBvbmVudCk7XG4gIH0gLy8gRXh0cmEgY2xvc3VyZSBzbyBxdWV1ZSBhbmQgcmVwbGFjZSBjYW4gYmUgY2FwdHVyZWQgcHJvcGVybHlcblxuXG4gIGZ1bmN0aW9uIHByb2Nlc3NDaGlsZChlbGVtZW50LCBDb21wb25lbnQpIHtcbiAgICB2YXIgaXNDbGFzcyA9IHNob3VsZENvbnN0cnVjdCQxKENvbXBvbmVudCk7XG4gICAgdmFyIHB1YmxpY0NvbnRleHQgPSBwcm9jZXNzQ29udGV4dChDb21wb25lbnQsIGNvbnRleHQsIHRocmVhZElELCBpc0NsYXNzKTtcbiAgICB2YXIgcXVldWUgPSBbXTtcbiAgICB2YXIgcmVwbGFjZSA9IGZhbHNlO1xuICAgIHZhciB1cGRhdGVyID0ge1xuICAgICAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgICAgIGlmIChxdWV1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSkge1xuICAgICAgICByZXBsYWNlID0gdHJ1ZTtcbiAgICAgICAgcXVldWUgPSBbY29tcGxldGVTdGF0ZV07XG4gICAgICB9LFxuICAgICAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGN1cnJlbnRQYXJ0aWFsU3RhdGUpIHtcbiAgICAgICAgaWYgKHF1ZXVlID09PSBudWxsKSB7XG4gICAgICAgICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUucHVzaChjdXJyZW50UGFydGlhbFN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHZhciBpbnN0O1xuXG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgIGluc3QgPSBuZXcgQ29tcG9uZW50KGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQsIHVwZGF0ZXIpO1xuXG4gICAgICBpZiAodHlwZW9mIENvbXBvbmVudC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAge1xuICAgICAgICAgIGlmIChpbnN0LnN0YXRlID09PSBudWxsIHx8IGluc3Quc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dFVuaW5pdGlhbGl6ZWRTdGF0ZVtjb21wb25lbnROYW1lXSkge1xuICAgICAgICAgICAgICBlcnJvcignYCVzYCB1c2VzIGBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHNgIGJ1dCBpdHMgaW5pdGlhbCBzdGF0ZSBpcyAnICsgJyVzLiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZC4gSW5zdGVhZCwgZGVmaW5lIHRoZSBpbml0aWFsIHN0YXRlIGJ5ICcgKyAnYXNzaWduaW5nIGFuIG9iamVjdCB0byBgdGhpcy5zdGF0ZWAgaW4gdGhlIGNvbnN0cnVjdG9yIG9mIGAlc2AuICcgKyAnVGhpcyBlbnN1cmVzIHRoYXQgYGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc2AgYXJndW1lbnRzIGhhdmUgYSBjb25zaXN0ZW50IHNoYXBlLicsIGNvbXBvbmVudE5hbWUsIGluc3Quc3RhdGUgPT09IG51bGwgPyAnbnVsbCcgOiAndW5kZWZpbmVkJywgY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0VW5pbml0aWFsaXplZFN0YXRlW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydGlhbFN0YXRlID0gQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcy5jYWxsKG51bGwsIGVsZW1lbnQucHJvcHMsIGluc3Quc3RhdGUpO1xuXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAocGFydGlhbFN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICAgIGlmICghZGlkV2FybkFib3V0VW5kZWZpbmVkRGVyaXZlZFN0YXRlW19jb21wb25lbnROYW1lXSkge1xuICAgICAgICAgICAgICBlcnJvcignJXMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKCk6IEEgdmFsaWQgc3RhdGUgb2JqZWN0IChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkLiAnICsgJ1lvdSBoYXZlIHJldHVybmVkIHVuZGVmaW5lZC4nLCBfY29tcG9uZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgZGlkV2FybkFib3V0VW5kZWZpbmVkRGVyaXZlZFN0YXRlW19jb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IF9hc3NpZ24oe30sIGluc3Quc3RhdGUsIHBhcnRpYWxTdGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAge1xuICAgICAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZSAmJiB0eXBlb2YgQ29tcG9uZW50LnByb3RvdHlwZS5yZW5kZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgX2NvbXBvbmVudE5hbWUyID0gZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJztcblxuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0QmFkQ2xhc3NbX2NvbXBvbmVudE5hbWUyXSkge1xuICAgICAgICAgICAgZXJyb3IoXCJUaGUgPCVzIC8+IGNvbXBvbmVudCBhcHBlYXJzIHRvIGhhdmUgYSByZW5kZXIgbWV0aG9kLCBidXQgZG9lc24ndCBleHRlbmQgUmVhY3QuQ29tcG9uZW50LiBcIiArICdUaGlzIGlzIGxpa2VseSB0byBjYXVzZSBlcnJvcnMuIENoYW5nZSAlcyB0byBleHRlbmQgUmVhY3QuQ29tcG9uZW50IGluc3RlYWQuJywgX2NvbXBvbmVudE5hbWUyLCBfY29tcG9uZW50TmFtZTIpO1xuXG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRCYWRDbGFzc1tfY29tcG9uZW50TmFtZTJdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGNvbXBvbmVudElkZW50aXR5ID0ge307XG4gICAgICBwcmVwYXJlVG9Vc2VIb29rcyhjb21wb25lbnRJZGVudGl0eSk7XG4gICAgICBpbnN0ID0gQ29tcG9uZW50KGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQsIHVwZGF0ZXIpO1xuICAgICAgaW5zdCA9IGZpbmlzaEhvb2tzKENvbXBvbmVudCwgZWxlbWVudC5wcm9wcywgaW5zdCwgcHVibGljQ29udGV4dCk7XG5cbiAgICAgIHtcbiAgICAgICAgLy8gU3VwcG9ydCBmb3IgbW9kdWxlIGNvbXBvbmVudHMgaXMgZGVwcmVjYXRlZCBhbmQgaXMgcmVtb3ZlZCBiZWhpbmQgYSBmbGFnLlxuICAgICAgICAvLyBXaGV0aGVyIG9yIG5vdCBpdCB3b3VsZCBjcmFzaCBsYXRlciwgd2Ugd2FudCB0byBzaG93IGEgZ29vZCBtZXNzYWdlIGluIERFViBmaXJzdC5cbiAgICAgICAgaWYgKGluc3QgIT0gbnVsbCAmJiBpbnN0LnJlbmRlciAhPSBudWxsKSB7XG4gICAgICAgICAgdmFyIF9jb21wb25lbnROYW1lMyA9IGdldENvbXBvbmVudE5hbWUoQ29tcG9uZW50KSB8fCAnVW5rbm93bic7XG5cbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnRbX2NvbXBvbmVudE5hbWUzXSkge1xuICAgICAgICAgICAgZXJyb3IoJ1RoZSA8JXMgLz4gY29tcG9uZW50IGFwcGVhcnMgdG8gYmUgYSBmdW5jdGlvbiBjb21wb25lbnQgdGhhdCByZXR1cm5zIGEgY2xhc3MgaW5zdGFuY2UuICcgKyAnQ2hhbmdlICVzIHRvIGEgY2xhc3MgdGhhdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCBpbnN0ZWFkLiAnICsgXCJJZiB5b3UgY2FuJ3QgdXNlIGEgY2xhc3MgdHJ5IGFzc2lnbmluZyB0aGUgcHJvdG90eXBlIG9uIHRoZSBmdW5jdGlvbiBhcyBhIHdvcmthcm91bmQuIFwiICsgXCJgJXMucHJvdG90eXBlID0gUmVhY3QuQ29tcG9uZW50LnByb3RvdHlwZWAuIERvbid0IHVzZSBhbiBhcnJvdyBmdW5jdGlvbiBzaW5jZSBpdCBcIiArICdjYW5ub3QgYmUgY2FsbGVkIHdpdGggYG5ld2AgYnkgUmVhY3QuJywgX2NvbXBvbmVudE5hbWUzLCBfY29tcG9uZW50TmFtZTMsIF9jb21wb25lbnROYW1lMyk7XG5cbiAgICAgICAgICAgIGRpZFdhcm5BYm91dE1vZHVsZVBhdHRlcm5Db21wb25lbnRbX2NvbXBvbmVudE5hbWUzXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIElmIHRoZSBmbGFnIGlzIG9uLCBldmVyeXRoaW5nIGlzIGFzc3VtZWQgdG8gYmUgYSBmdW5jdGlvbiBjb21wb25lbnQuXG4gICAgICAvLyBPdGhlcndpc2UsIHdlIGFsc28gZG8gdGhlIHVuZm9ydHVuYXRlIGR5bmFtaWMgY2hlY2tzLlxuXG5cbiAgICAgIGlmICggaW5zdCA9PSBudWxsIHx8IGluc3QucmVuZGVyID09IG51bGwpIHtcbiAgICAgICAgY2hpbGQgPSBpbnN0O1xuICAgICAgICB2YWxpZGF0ZVJlbmRlclJlc3VsdChjaGlsZCwgQ29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGluc3QucHJvcHMgPSBlbGVtZW50LnByb3BzO1xuICAgIGluc3QuY29udGV4dCA9IHB1YmxpY0NvbnRleHQ7XG4gICAgaW5zdC51cGRhdGVyID0gdXBkYXRlcjtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gaW5zdC5zdGF0ZTtcblxuICAgIGlmIChpbml0aWFsU3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaW5zdC5zdGF0ZSA9IGluaXRpYWxTdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBpbnN0LlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGluc3QuY29tcG9uZW50V2lsbE1vdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoIGluc3QuY29tcG9uZW50V2lsbE1vdW50Ll9fc3VwcHJlc3NEZXByZWNhdGlvbldhcm5pbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHZhciBfY29tcG9uZW50TmFtZTQgPSBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nO1xuXG4gICAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRXaWxsTW91bnRbX2NvbXBvbmVudE5hbWU0XSkge1xuICAgICAgICAgICAgICB3YXJuKCAvLyBrZWVwIHRoaXMgd2FybmluZyBpbiBzeW5jIHdpdGggUmVhY3RTdHJpY3RNb2RlV2FybmluZy5qc1xuICAgICAgICAgICAgICAnY29tcG9uZW50V2lsbE1vdW50IGhhcyBiZWVuIHJlbmFtZWQsIGFuZCBpcyBub3QgcmVjb21tZW5kZWQgZm9yIHVzZS4gJyArICdTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3Vuc2FmZS1jb21wb25lbnQtbGlmZWN5Y2xlcyBmb3IgZGV0YWlscy5cXG5cXG4nICsgJyogTW92ZSBjb2RlIGZyb20gY29tcG9uZW50V2lsbE1vdW50IHRvIGNvbXBvbmVudERpZE1vdW50IChwcmVmZXJyZWQgaW4gbW9zdCBjYXNlcykgJyArICdvciB0aGUgY29uc3RydWN0b3IuXFxuJyArICdcXG5QbGVhc2UgdXBkYXRlIHRoZSBmb2xsb3dpbmcgY29tcG9uZW50czogJXMnLCBfY29tcG9uZW50TmFtZTQpO1xuXG4gICAgICAgICAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRXaWxsTW91bnRbX2NvbXBvbmVudE5hbWU0XSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgcmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQgcG9seWZpbGxlZCBjb21wb25lbnRzLFxuICAgICAgICAvLyBVbnNhZmUgbGlmZWN5Y2xlcyBzaG91bGQgbm90IGJlIGludm9rZWQgZm9yIGFueSBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGdEU0ZQLlxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaW5zdC5jb21wb25lbnRXaWxsTW91bnQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGluc3QuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQ29tcG9uZW50LmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBJbiBvcmRlciB0byBzdXBwb3J0IHJlYWN0LWxpZmVjeWNsZXMtY29tcGF0IHBvbHlmaWxsZWQgY29tcG9uZW50cyxcbiAgICAgICAgLy8gVW5zYWZlIGxpZmVjeWNsZXMgc2hvdWxkIG5vdCBiZSBpbnZva2VkIGZvciBhbnkgY29tcG9uZW50IHdpdGggdGhlIG5ldyBnRFNGUC5cbiAgICAgICAgaW5zdC5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFyIG9sZFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHZhciBvbGRSZXBsYWNlID0gcmVwbGFjZTtcbiAgICAgICAgcXVldWUgPSBudWxsO1xuICAgICAgICByZXBsYWNlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG9sZFJlcGxhY2UgJiYgb2xkUXVldWUubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaW5zdC5zdGF0ZSA9IG9sZFF1ZXVlWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBuZXh0U3RhdGUgPSBvbGRSZXBsYWNlID8gb2xkUXVldWVbMF0gOiBpbnN0LnN0YXRlO1xuICAgICAgICAgIHZhciBkb250TXV0YXRlID0gdHJ1ZTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSBvbGRSZXBsYWNlID8gMSA6IDA7IGkgPCBvbGRRdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnRpYWwgPSBvbGRRdWV1ZVtpXTtcblxuICAgICAgICAgICAgdmFyIF9wYXJ0aWFsU3RhdGUgPSB0eXBlb2YgcGFydGlhbCA9PT0gJ2Z1bmN0aW9uJyA/IHBhcnRpYWwuY2FsbChpbnN0LCBuZXh0U3RhdGUsIGVsZW1lbnQucHJvcHMsIHB1YmxpY0NvbnRleHQpIDogcGFydGlhbDtcblxuICAgICAgICAgICAgaWYgKF9wYXJ0aWFsU3RhdGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoZG9udE11dGF0ZSkge1xuICAgICAgICAgICAgICAgIGRvbnRNdXRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGUgPSBfYXNzaWduKHt9LCBuZXh0U3RhdGUsIF9wYXJ0aWFsU3RhdGUpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9hc3NpZ24obmV4dFN0YXRlLCBfcGFydGlhbFN0YXRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGluc3Quc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGlsZCA9IGluc3QucmVuZGVyKCk7XG5cbiAgICB7XG4gICAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCAmJiBpbnN0LnJlbmRlci5faXNNb2NrRnVuY3Rpb24pIHtcbiAgICAgICAgLy8gVGhpcyBpcyBwcm9iYWJseSBiYWQgcHJhY3RpY2UuIENvbnNpZGVyIHdhcm5pbmcgaGVyZSBhbmRcbiAgICAgICAgLy8gZGVwcmVjYXRpbmcgdGhpcyBjb252ZW5pZW5jZS5cbiAgICAgICAgY2hpbGQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlUmVuZGVyUmVzdWx0KGNoaWxkLCBDb21wb25lbnQpO1xuICAgIHZhciBjaGlsZENvbnRleHQ7XG5cbiAgICB7XG4gICAgICBpZiAodHlwZW9mIGluc3QuZ2V0Q2hpbGRDb250ZXh0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfY2hpbGRDb250ZXh0VHlwZXMgPSBDb21wb25lbnQuY2hpbGRDb250ZXh0VHlwZXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfY2hpbGRDb250ZXh0VHlwZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gaW5zdC5nZXRDaGlsZENvbnRleHQoKTtcblxuICAgICAgICAgIGZvciAodmFyIGNvbnRleHRLZXkgaW4gY2hpbGRDb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoIShjb250ZXh0S2V5IGluIF9jaGlsZENvbnRleHRUeXBlcykpIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCAoZ2V0Q29tcG9uZW50TmFtZShDb21wb25lbnQpIHx8ICdVbmtub3duJykgKyBcIi5nZXRDaGlsZENvbnRleHQoKToga2V5IFxcXCJcIiArIGNvbnRleHRLZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgaW4gY2hpbGRDb250ZXh0VHlwZXMuXCIgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvcignJXMuZ2V0Q2hpbGRDb250ZXh0KCk6IGNoaWxkQ29udGV4dFR5cGVzIG11c3QgYmUgZGVmaW5lZCBpbiBvcmRlciB0byAnICsgJ3VzZSBnZXRDaGlsZENvbnRleHQoKS4nLCBnZXRDb21wb25lbnROYW1lKENvbXBvbmVudCkgfHwgJ1Vua25vd24nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkQ29udGV4dCkge1xuICAgICAgICBjb250ZXh0ID0gX2Fzc2lnbih7fSwgY29udGV4dCwgY2hpbGRDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoaWxkOiBjaGlsZCxcbiAgICBjb250ZXh0OiBjb250ZXh0XG4gIH07XG59XG5cbnZhciBSZWFjdERPTVNlcnZlclJlbmRlcmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLy8gVE9ETzogdHlwZSB0aGlzIG1vcmUgc3RyaWN0bHk6XG4gIC8vIERFVi1vbmx5XG4gIGZ1bmN0aW9uIFJlYWN0RE9NU2VydmVyUmVuZGVyZXIoY2hpbGRyZW4sIG1ha2VTdGF0aWNNYXJrdXAsIG9wdGlvbnMpIHtcbiAgICB2YXIgZmxhdENoaWxkcmVuID0gZmxhdHRlblRvcExldmVsQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIHZhciB0b3BGcmFtZSA9IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICAvLyBBc3N1bWUgYWxsIHRyZWVzIHN0YXJ0IGluIHRoZSBIVE1MIG5hbWVzcGFjZSAobm90IHRvdGFsbHkgdHJ1ZSwgYnV0XG4gICAgICAvLyB0aGlzIGlzIHdoYXQgd2UgZGlkIGhpc3RvcmljYWxseSlcbiAgICAgIGRvbU5hbWVzcGFjZTogTmFtZXNwYWNlcy5odG1sLFxuICAgICAgY2hpbGRyZW46IGZsYXRDaGlsZHJlbixcbiAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICBjb250ZXh0OiBlbXB0eU9iamVjdCxcbiAgICAgIGZvb3RlcjogJydcbiAgICB9O1xuXG4gICAge1xuICAgICAgdG9wRnJhbWUuZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnRocmVhZElEID0gYWxsb2NUaHJlYWRJRCgpO1xuICAgIHRoaXMuc3RhY2sgPSBbdG9wRnJhbWVdO1xuICAgIHRoaXMuZXhoYXVzdGVkID0gZmFsc2U7XG4gICAgdGhpcy5jdXJyZW50U2VsZWN0VmFsdWUgPSBudWxsO1xuICAgIHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSA9IGZhbHNlO1xuICAgIHRoaXMubWFrZVN0YXRpY01hcmt1cCA9IG1ha2VTdGF0aWNNYXJrdXA7XG4gICAgdGhpcy5zdXNwZW5zZURlcHRoID0gMDsgLy8gQ29udGV4dCAobmV3IEFQSSlcblxuICAgIHRoaXMuY29udGV4dEluZGV4ID0gLTE7XG4gICAgdGhpcy5jb250ZXh0U3RhY2sgPSBbXTtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrID0gW107IC8vIHVzZU9wYXF1ZUlkZW50aWZpZXIgSURcblxuICAgIHRoaXMudW5pcXVlSUQgPSAwO1xuICAgIHRoaXMuaWRlbnRpZmllclByZWZpeCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pZGVudGlmaWVyUHJlZml4IHx8ICcnO1xuXG4gICAge1xuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFjayA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZWFjdERPTVNlcnZlclJlbmRlcmVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKCF0aGlzLmV4aGF1c3RlZCkge1xuICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5jbGVhclByb3ZpZGVycygpO1xuICAgICAgZnJlZVRocmVhZElEKHRoaXMudGhyZWFkSUQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogTm90ZTogV2UgdXNlIGp1c3QgdHdvIHN0YWNrcyByZWdhcmRsZXNzIG9mIGhvdyBtYW55IGNvbnRleHQgcHJvdmlkZXJzIHlvdSBoYXZlLlxuICAgKiBQcm92aWRlcnMgYXJlIGFsd2F5cyBwb3BwZWQgaW4gdGhlIHJldmVyc2Ugb3JkZXIgdG8gaG93IHRoZXkgd2VyZSBwdXNoZWRcbiAgICogc28gd2UgYWx3YXlzIGtub3cgb24gdGhlIHdheSBkb3duIHdoaWNoIHByb3ZpZGVyIHlvdSdsbCBlbmNvdW50ZXIgbmV4dCBvbiB0aGUgd2F5IHVwLlxuICAgKiBPbiB0aGUgd2F5IGRvd24sIHdlIHB1c2ggdGhlIGN1cnJlbnQgcHJvdmlkZXIsIGFuZCBpdHMgY29udGV4dCB2YWx1ZSAqYmVmb3JlKlxuICAgKiB3ZSBtdXRhdGVkIGl0LCBvbnRvIHRoZSBzdGFja3MuIFRoZXJlZm9yZSwgb24gdGhlIHdheSB1cCwgd2UgYWx3YXlzIGtub3cgd2hpY2hcbiAgICogcHJvdmlkZXIgbmVlZHMgdG8gYmUgXCJyZXN0b3JlZFwiIHRvIHdoaWNoIHZhbHVlLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8xMjk4NSNpc3N1ZWNvbW1lbnQtMzk2MzAxMjQ4XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnB1c2hQcm92aWRlciA9IGZ1bmN0aW9uIHB1c2hQcm92aWRlcihwcm92aWRlcikge1xuICAgIHZhciBpbmRleCA9ICsrdGhpcy5jb250ZXh0SW5kZXg7XG4gICAgdmFyIGNvbnRleHQgPSBwcm92aWRlci50eXBlLl9jb250ZXh0O1xuICAgIHZhciB0aHJlYWRJRCA9IHRoaXMudGhyZWFkSUQ7XG4gICAgdmFsaWRhdGVDb250ZXh0Qm91bmRzKGNvbnRleHQsIHRocmVhZElEKTtcbiAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IGNvbnRleHRbdGhyZWFkSURdOyAvLyBSZW1lbWJlciB3aGljaCB2YWx1ZSB0byByZXN0b3JlIHRoaXMgY29udGV4dCB0byBvbiBvdXIgd2F5IHVwLlxuXG4gICAgdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdID0gY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XSA9IHByZXZpb3VzVmFsdWU7XG5cbiAgICB7XG4gICAgICAvLyBPbmx5IHVzZWQgZm9yIHB1c2gvcG9wIG1pc21hdGNoIHdhcm5pbmdzLlxuICAgICAgdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0gPSBwcm92aWRlcjtcbiAgICB9IC8vIE11dGF0ZSB0aGUgY3VycmVudCB2YWx1ZS5cblxuXG4gICAgY29udGV4dFt0aHJlYWRJRF0gPSBwcm92aWRlci5wcm9wcy52YWx1ZTtcbiAgfTtcblxuICBfcHJvdG8ucG9wUHJvdmlkZXIgPSBmdW5jdGlvbiBwb3BQcm92aWRlcihwcm92aWRlcikge1xuICAgIHZhciBpbmRleCA9IHRoaXMuY29udGV4dEluZGV4O1xuXG4gICAge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBwcm92aWRlciAhPT0gdGhpcy5jb250ZXh0UHJvdmlkZXJTdGFja1tpbmRleF0pIHtcbiAgICAgICAgZXJyb3IoJ1VuZXhwZWN0ZWQgcG9wLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdO1xuICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdGhpcy5jb250ZXh0VmFsdWVTdGFja1tpbmRleF07IC8vIFwiSGlkZVwiIHRoZXNlIG51bGwgYXNzaWdubWVudHMgZnJvbSBGbG93IGJ5IHVzaW5nIGBhbnlgXG4gICAgLy8gYmVjYXVzZSBjb25jZXB0dWFsbHkgdGhleSBhcmUgZGVsZXRpb25zLS1hcyBsb25nIGFzIHdlXG4gICAgLy8gcHJvbWlzZSB0byBuZXZlciBhY2Nlc3MgdmFsdWVzIGJleW9uZCBgdGhpcy5jb250ZXh0SW5kZXhgLlxuXG4gICAgdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XSA9IG51bGw7XG5cbiAgICB7XG4gICAgICB0aGlzLmNvbnRleHRQcm92aWRlclN0YWNrW2luZGV4XSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5jb250ZXh0SW5kZXgtLTsgLy8gUmVzdG9yZSB0byB0aGUgcHJldmlvdXMgdmFsdWUgd2Ugc3RvcmVkIGFzIHdlIHdlcmUgd2Fsa2luZyBkb3duLlxuICAgIC8vIFdlJ3ZlIGFscmVhZHkgdmVyaWZpZWQgdGhhdCB0aGlzIGNvbnRleHQgaGFzIGJlZW4gZXhwYW5kZWQgdG8gYWNjb21tb2RhdGVcbiAgICAvLyB0aGlzIHRocmVhZCBpZCwgc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBpdCBhZ2Fpbi5cblxuICAgIGNvbnRleHRbdGhpcy50aHJlYWRJRF0gPSBwcmV2aW91c1ZhbHVlO1xuICB9O1xuXG4gIF9wcm90by5jbGVhclByb3ZpZGVycyA9IGZ1bmN0aW9uIGNsZWFyUHJvdmlkZXJzKCkge1xuICAgIC8vIFJlc3RvcmUgYW55IHJlbWFpbmluZyBwcm92aWRlcnMgb24gdGhlIHN0YWNrIHRvIHByZXZpb3VzIHZhbHVlc1xuICAgIGZvciAodmFyIGluZGV4ID0gdGhpcy5jb250ZXh0SW5kZXg7IGluZGV4ID49IDA7IGluZGV4LS0pIHtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5jb250ZXh0U3RhY2tbaW5kZXhdO1xuICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB0aGlzLmNvbnRleHRWYWx1ZVN0YWNrW2luZGV4XTtcbiAgICAgIGNvbnRleHRbdGhpcy50aHJlYWRJRF0gPSBwcmV2aW91c1ZhbHVlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8ucmVhZCA9IGZ1bmN0aW9uIHJlYWQoYnl0ZXMpIHtcbiAgICBpZiAodGhpcy5leGhhdXN0ZWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBwcmV2UGFydGlhbFJlbmRlcmVyID0gY3VycmVudFBhcnRpYWxSZW5kZXJlcjtcbiAgICBzZXRDdXJyZW50UGFydGlhbFJlbmRlcmVyKHRoaXMpO1xuICAgIHZhciBwcmV2RGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50O1xuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gRGlzcGF0Y2hlcjtcblxuICAgIHRyeSB7XG4gICAgICAvLyBNYXJrdXAgZ2VuZXJhdGVkIHdpdGhpbiA8U3VzcGVuc2U+IGVuZHMgdXAgYnVmZmVyZWQgdW50aWwgd2Uga25vd1xuICAgICAgLy8gbm90aGluZyBpbiB0aGF0IGJvdW5kYXJ5IHN1c3BlbmRlZFxuICAgICAgdmFyIG91dCA9IFsnJ107XG4gICAgICB2YXIgc3VzcGVuZGVkID0gZmFsc2U7XG5cbiAgICAgIHdoaWxlIChvdXRbMF0ubGVuZ3RoIDwgYnl0ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5leGhhdXN0ZWQgPSB0cnVlO1xuICAgICAgICAgIGZyZWVUaHJlYWRJRCh0aGlzLnRocmVhZElEKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmcmFtZSA9IHRoaXMuc3RhY2tbdGhpcy5zdGFjay5sZW5ndGggLSAxXTtcblxuICAgICAgICBpZiAoc3VzcGVuZGVkIHx8IGZyYW1lLmNoaWxkSW5kZXggPj0gZnJhbWUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgdmFyIGZvb3RlciA9IGZyYW1lLmZvb3RlcjtcblxuICAgICAgICAgIGlmIChmb290ZXIgIT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnN0YWNrLnBvcCgpO1xuXG4gICAgICAgICAgaWYgKGZyYW1lLnR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmFtZS50eXBlICE9IG51bGwgJiYgZnJhbWUudHlwZS50eXBlICE9IG51bGwgJiYgZnJhbWUudHlwZS50eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFKSB7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSBmcmFtZS50eXBlO1xuICAgICAgICAgICAgdGhpcy5wb3BQcm92aWRlcihwcm92aWRlcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmFtZS50eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFKSB7XG4gICAgICAgICAgICB0aGlzLnN1c3BlbnNlRGVwdGgtLTtcbiAgICAgICAgICAgIHZhciBidWZmZXJlZCA9IG91dC5wb3AoKTtcblxuICAgICAgICAgICAgaWYgKHN1c3BlbmRlZCkge1xuICAgICAgICAgICAgICBzdXNwZW5kZWQgPSBmYWxzZTsgLy8gSWYgcmVuZGVyaW5nIHdhcyBzdXNwZW5kZWQgYXQgdGhpcyBib3VuZGFyeSwgcmVuZGVyIHRoZSBmYWxsYmFja0ZyYW1lXG5cbiAgICAgICAgICAgICAgdmFyIGZhbGxiYWNrRnJhbWUgPSBmcmFtZS5mYWxsYmFja0ZyYW1lO1xuXG4gICAgICAgICAgICAgIGlmICghZmFsbGJhY2tGcmFtZSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRydWUgPyBcIlJlYWN0RE9NU2VydmVyIGRpZCBub3QgZmluZCBhbiBpbnRlcm5hbCBmYWxsYmFjayBmcmFtZSBmb3IgU3VzcGVuc2UuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLlwiIDogZm9ybWF0UHJvZEVycm9yTWVzc2FnZSgzMDMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goZmFsbGJhY2tGcmFtZSk7XG4gICAgICAgICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9ICc8IS0tJCEtLT4nOyAvLyBTa2lwIGZsdXNoaW5nIG91dHB1dCBzaW5jZSB3ZSdyZSBzd2l0Y2hpbmcgdG8gdGhlIGZhbGxiYWNrXG5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBidWZmZXJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIEZsdXNoIG91dHB1dFxuXG5cbiAgICAgICAgICBvdXRbdGhpcy5zdXNwZW5zZURlcHRoXSArPSBmb290ZXI7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGQgPSBmcmFtZS5jaGlsZHJlbltmcmFtZS5jaGlsZEluZGV4KytdO1xuICAgICAgICB2YXIgb3V0QnVmZmVyID0gJyc7XG5cbiAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICBwdXNoQ3VycmVudERlYnVnU3RhY2sodGhpcy5zdGFjayk7IC8vIFdlJ3JlIHN0YXJ0aW5nIHdvcmsgb24gdGhpcyBmcmFtZSwgc28gcmVzZXQgaXRzIGlubmVyIHN0YWNrLlxuXG4gICAgICAgICAgZnJhbWUuZGVidWdFbGVtZW50U3RhY2subGVuZ3RoID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgb3V0QnVmZmVyICs9IHRoaXMucmVuZGVyKGNoaWxkLCBmcmFtZS5jb250ZXh0LCBmcmFtZS5kb21OYW1lc3BhY2UpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyICE9IG51bGwgJiYgdHlwZW9mIGVyci50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlU3VzcGVuc2VTZXJ2ZXJSZW5kZXJlcikge1xuICAgICAgICAgICAgICBpZiAoISh0aGlzLnN1c3BlbnNlRGVwdGggPiAwKSkge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKHRydWUgPyBcIkEgUmVhY3QgY29tcG9uZW50IHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIgOiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDM0MikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHN1c3BlbmRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWZhbHNlKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IodHJ1ZSA/IFwiUmVhY3RET01TZXJ2ZXIgZG9lcyBub3QgeWV0IHN1cHBvcnQgU3VzcGVuc2UuXCIgOiBmb3JtYXRQcm9kRXJyb3JNZXNzYWdlKDI5NCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICBwb3BDdXJyZW50RGVidWdTdGFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQubGVuZ3RoIDw9IHRoaXMuc3VzcGVuc2VEZXB0aCkge1xuICAgICAgICAgIG91dC5wdXNoKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dFt0aGlzLnN1c3BlbnNlRGVwdGhdICs9IG91dEJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dFswXTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2RGlzcGF0Y2hlcjtcbiAgICAgIHNldEN1cnJlbnRQYXJ0aWFsUmVuZGVyZXIocHJldlBhcnRpYWxSZW5kZXJlcik7XG4gICAgICByZXNldEhvb2tzU3RhdGUoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihjaGlsZCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKSB7XG4gICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgICAgdmFyIHRleHQgPSAnJyArIGNoaWxkO1xuXG4gICAgICBpZiAodGV4dCA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5tYWtlU3RhdGljTWFya3VwKSB7XG4gICAgICAgIHJldHVybiBlc2NhcGVUZXh0Rm9yQnJvd3Nlcih0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJldmlvdXNXYXNUZXh0Tm9kZSkge1xuICAgICAgICByZXR1cm4gJzwhLS0gLS0+JyArIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnByZXZpb3VzV2FzVGV4dE5vZGUgPSB0cnVlO1xuICAgICAgcmV0dXJuIGVzY2FwZVRleHRGb3JCcm93c2VyKHRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dENoaWxkO1xuXG4gICAgICB2YXIgX3Jlc29sdmUgPSByZXNvbHZlKGNoaWxkLCBjb250ZXh0LCB0aGlzLnRocmVhZElEKTtcblxuICAgICAgbmV4dENoaWxkID0gX3Jlc29sdmUuY2hpbGQ7XG4gICAgICBjb250ZXh0ID0gX3Jlc29sdmUuY29udGV4dDtcblxuICAgICAgaWYgKG5leHRDaGlsZCA9PT0gbnVsbCB8fCBuZXh0Q2hpbGQgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH0gZWxzZSBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KG5leHRDaGlsZCkpIHtcbiAgICAgICAgaWYgKG5leHRDaGlsZCAhPSBudWxsICYmIG5leHRDaGlsZC4kJHR5cGVvZiAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gQ2F0Y2ggdW5leHBlY3RlZCBzcGVjaWFsIHR5cGVzIGVhcmx5LlxuICAgICAgICAgIHZhciAkJHR5cGVvZiA9IG5leHRDaGlsZC4kJHR5cGVvZjtcblxuICAgICAgICAgIGlmICghKCQkdHlwZW9mICE9PSBSRUFDVF9QT1JUQUxfVFlQRSkpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiUG9ydGFscyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgdGhlIHNlcnZlciByZW5kZXJlci4gUmVuZGVyIHRoZW0gY29uZGl0aW9uYWxseSBzbyB0aGF0IHRoZXkgb25seSBhcHBlYXIgb24gdGhlIGNsaWVudCByZW5kZXIuXCIgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIENhdGNoLWFsbCB0byBwcmV2ZW50IGFuIGluZmluaXRlIGxvb3AgaWYgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSgpIHN1cHBvcnRzIHNvbWUgbmV3IHR5cGUuXG5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiVW5rbm93biBlbGVtZW50LWxpa2Ugb2JqZWN0IHR5cGU6IFwiICsgJCR0eXBlb2YudG9TdHJpbmcoKSArIFwiLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuXCIgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dENoaWxkcmVuID0gdG9BcnJheShuZXh0Q2hpbGQpO1xuICAgICAgICB2YXIgZnJhbWUgPSB7XG4gICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICBkb21OYW1lc3BhY2U6IHBhcmVudE5hbWVzcGFjZSxcbiAgICAgICAgICBjaGlsZHJlbjogbmV4dENoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAge1xuICAgICAgICAgIGZyYW1lLmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YWNrLnB1c2goZnJhbWUpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9IC8vIFNhZmUgYmVjYXVzZSB3ZSBqdXN0IGNoZWNrZWQgaXQncyBhbiBlbGVtZW50LlxuXG5cbiAgICAgIHZhciBuZXh0RWxlbWVudCA9IG5leHRDaGlsZDtcbiAgICAgIHZhciBlbGVtZW50VHlwZSA9IG5leHRFbGVtZW50LnR5cGU7XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckRPTShuZXh0RWxlbWVudCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChlbGVtZW50VHlwZSkge1xuICAgICAgICAvLyBUT0RPOiBMZWdhY3lIaWRkZW4gYWN0cyB0aGUgc2FtZSBhcyBhIGZyYWdtZW50LiBUaGlzIG9ubHkgd29ya3NcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBjdXJyZW50bHkgYXNzdW1lIHRoYXQgZXZlcnkgaW5zdGFuY2Ugb2YgTGVnYWN5SGlkZGVuIGlzXG4gICAgICAgIC8vIGFjY29tcGFuaWVkIGJ5IGEgaG9zdCBjb21wb25lbnQgd3JhcHBlci4gSW4gdGhlIGhpZGRlbiBtb2RlLCB0aGUgaG9zdFxuICAgICAgICAvLyBjb21wb25lbnQgaXMgZ2l2ZW4gYSBgaGlkZGVuYCBhdHRyaWJ1dGUsIHdoaWNoIGVuc3VyZXMgdGhhdCB0aGVcbiAgICAgICAgLy8gaW5pdGlhbCBIVE1MIGlzIG5vdCB2aXNpYmxlLiBUbyBzdXBwb3J0IHRoZSB1c2Ugb2YgTGVnYWN5SGlkZGVuIGFzIGFcbiAgICAgICAgLy8gdHJ1ZSBmcmFnbWVudCwgd2l0aG91dCBhbiBleHRyYSBET00gbm9kZSwgd2Ugd291bGQgaGF2ZSB0byBoaWRlIHRoZVxuICAgICAgICAvLyBpbml0aWFsIEhUTUwgaW4gc29tZSBvdGhlciB3YXkuXG4gICAgICAgIGNhc2UgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFOlxuICAgICAgICBjYXNlIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFOlxuICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX25leHRDaGlsZHJlbiA9IHRvQXJyYXkobmV4dENoaWxkLnByb3BzLmNoaWxkcmVuKTtcblxuICAgICAgICAgICAgdmFyIF9mcmFtZSA9IHtcbiAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuLFxuICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICBjb250ZXh0OiBjb250ZXh0LFxuICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9mcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lKTtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyIGRvZXMgbm90IHlldCBzdXBwb3J0IFN1c3BlbnNlLlwiICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUtbm8tZmFsbHRocm91Z2hcblxuICAgICAgICBjYXNlIFJFQUNUX1NDT1BFX1RZUEU6XG4gICAgICAgICAge1xuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCBzY29wZSBjb21wb25lbnRzLlwiICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgZWxlbWVudFR5cGUgPT09ICdvYmplY3QnICYmIGVsZW1lbnRUeXBlICE9PSBudWxsKSB7XG4gICAgICAgIHN3aXRjaCAoZWxlbWVudFR5cGUuJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gbmV4dENoaWxkO1xuXG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuNTtcblxuICAgICAgICAgICAgICB2YXIgY29tcG9uZW50SWRlbnRpdHkgPSB7fTtcbiAgICAgICAgICAgICAgcHJlcGFyZVRvVXNlSG9va3MoY29tcG9uZW50SWRlbnRpdHkpO1xuICAgICAgICAgICAgICBfbmV4dENoaWxkcmVuNSA9IGVsZW1lbnRUeXBlLnJlbmRlcihlbGVtZW50LnByb3BzLCBlbGVtZW50LnJlZik7XG4gICAgICAgICAgICAgIF9uZXh0Q2hpbGRyZW41ID0gZmluaXNoSG9va3MoZWxlbWVudFR5cGUucmVuZGVyLCBlbGVtZW50LnByb3BzLCBfbmV4dENoaWxkcmVuNSwgZWxlbWVudC5yZWYpO1xuICAgICAgICAgICAgICBfbmV4dENoaWxkcmVuNSA9IHRvQXJyYXkoX25leHRDaGlsZHJlbjUpO1xuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuNSxcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWU1LmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNSk7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YXIgX2VsZW1lbnQgPSBuZXh0Q2hpbGQ7XG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuNiA9IFtSZWFjdC5jcmVhdGVFbGVtZW50KGVsZW1lbnRUeXBlLnR5cGUsIF9hc3NpZ24oe1xuICAgICAgICAgICAgICAgIHJlZjogX2VsZW1lbnQucmVmXG4gICAgICAgICAgICAgIH0sIF9lbGVtZW50LnByb3BzKSldO1xuICAgICAgICAgICAgICB2YXIgX2ZyYW1lNiA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuNixcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWU2LmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnN0YWNrLnB1c2goX2ZyYW1lNik7XG4gICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gbmV4dENoaWxkO1xuICAgICAgICAgICAgICB2YXIgbmV4dFByb3BzID0gcHJvdmlkZXIucHJvcHM7XG5cbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW43ID0gdG9BcnJheShuZXh0UHJvcHMuY2hpbGRyZW4pO1xuXG4gICAgICAgICAgICAgIHZhciBfZnJhbWU3ID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IHByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIGRvbU5hbWVzcGFjZTogcGFyZW50TmFtZXNwYWNlLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBfbmV4dENoaWxkcmVuNyxcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWU3LmRlYnVnRWxlbWVudFN0YWNrID0gW107XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB0aGlzLnB1c2hQcm92aWRlcihwcm92aWRlcik7XG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU3KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhciByZWFjdENvbnRleHQgPSBuZXh0Q2hpbGQudHlwZTsgLy8gVGhlIGxvZ2ljIGJlbG93IGZvciBDb250ZXh0IGRpZmZlcnMgZGVwZW5kaW5nIG9uIFBST0Qgb3IgREVWIG1vZGUuIEluXG4gICAgICAgICAgICAgIC8vIERFViBtb2RlLCB3ZSBjcmVhdGUgYSBzZXBhcmF0ZSBvYmplY3QgZm9yIENvbnRleHQuQ29uc3VtZXIgdGhhdCBhY3RzXG4gICAgICAgICAgICAgIC8vIGxpa2UgYSBwcm94eSB0byBDb250ZXh0LiBUaGlzIHByb3h5IG9iamVjdCBhZGRzIHVubmVjZXNzYXJ5IGNvZGUgaW4gUFJPRFxuICAgICAgICAgICAgICAvLyBzbyB3ZSB1c2UgdGhlIG9sZCBiZWhhdmlvdXIgKENvbnRleHQuQ29uc3VtZXIgcmVmZXJlbmNlcyBDb250ZXh0KSB0b1xuICAgICAgICAgICAgICAvLyByZWR1Y2Ugc2l6ZSBhbmQgb3ZlcmhlYWQuIFRoZSBzZXBhcmF0ZSBvYmplY3QgcmVmZXJlbmNlcyBjb250ZXh0IHZpYVxuICAgICAgICAgICAgICAvLyBhIHByb3BlcnR5IGNhbGxlZCBcIl9jb250ZXh0XCIsIHdoaWNoIGFsc28gZ2l2ZXMgdXMgdGhlIGFiaWxpdHkgdG8gY2hlY2tcbiAgICAgICAgICAgICAgLy8gaW4gREVWIG1vZGUgaWYgdGhpcyBwcm9wZXJ0eSBleGlzdHMgb3Igbm90IGFuZCB3YXJuIGlmIGl0IGRvZXMgbm90LlxuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocmVhY3RDb250ZXh0Ll9jb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFRoaXMgbWF5IGJlIGJlY2F1c2UgaXQncyBhIENvbnRleHQgKHJhdGhlciB0aGFuIGEgQ29uc3VtZXIpLlxuICAgICAgICAgICAgICAgICAgLy8gT3IgaXQgbWF5IGJlIGJlY2F1c2UgaXQncyBvbGRlciBSZWFjdCB3aGVyZSB0aGV5J3JlIHRoZSBzYW1lIHRoaW5nLlxuICAgICAgICAgICAgICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHdhcm4gaWYgd2UncmUgc3VyZSBpdCdzIGEgbmV3IFJlYWN0LlxuICAgICAgICAgICAgICAgICAgaWYgKHJlYWN0Q29udGV4dCAhPT0gcmVhY3RDb250ZXh0LkNvbnN1bWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnRleHRBc0NvbnN1bWVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yKCdSZW5kZXJpbmcgPENvbnRleHQ+IGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byByZW5kZXIgPENvbnRleHQuQ29uc3VtZXI+IGluc3RlYWQ/Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVhY3RDb250ZXh0ID0gcmVhY3RDb250ZXh0Ll9jb250ZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBfbmV4dFByb3BzID0gbmV4dENoaWxkLnByb3BzO1xuICAgICAgICAgICAgICB2YXIgdGhyZWFkSUQgPSB0aGlzLnRocmVhZElEO1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNvbnRleHRCb3VuZHMocmVhY3RDb250ZXh0LCB0aHJlYWRJRCk7XG4gICAgICAgICAgICAgIHZhciBuZXh0VmFsdWUgPSByZWFjdENvbnRleHRbdGhyZWFkSURdO1xuXG4gICAgICAgICAgICAgIHZhciBfbmV4dENoaWxkcmVuOCA9IHRvQXJyYXkoX25leHRQcm9wcy5jaGlsZHJlbihuZXh0VmFsdWUpKTtcblxuICAgICAgICAgICAgICB2YXIgX2ZyYW1lOCA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBuZXh0Q2hpbGQsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW44LFxuICAgICAgICAgICAgICAgIGNoaWxkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICAgICAgICBmb290ZXI6ICcnXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9mcmFtZTguZGVidWdFbGVtZW50U3RhY2sgPSBbXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuc3RhY2sucHVzaChfZnJhbWU4KTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZS1uby1mYWxsdGhyb3VnaFxuXG4gICAgICAgICAgY2FzZSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFOlxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCJSZWFjdERPTVNlcnZlciBkb2VzIG5vdCB5ZXQgc3VwcG9ydCB0aGUgZnVuZGFtZW50YWwgQVBJLlwiICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lLW5vLWZhbGx0aHJvdWdoXG5cbiAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFyIF9lbGVtZW50MiA9IG5leHRDaGlsZDtcbiAgICAgICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSBuZXh0Q2hpbGQudHlwZTsgLy8gQXR0ZW1wdCB0byBpbml0aWFsaXplIGxhenkgY29tcG9uZW50IHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGVcbiAgICAgICAgICAgICAgLy8gc3VzcGVuc2Ugc2VydmVyLXNpZGUgcmVuZGVyZXIgaXMgZW5hYmxlZCBzbyBzeW5jaHJvbm91c2x5XG4gICAgICAgICAgICAgIC8vIHJlc29sdmVkIGNvbnN0cnVjdG9ycyBhcmUgc3VwcG9ydGVkLlxuXG4gICAgICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaW5pdChwYXlsb2FkKTtcbiAgICAgICAgICAgICAgdmFyIF9uZXh0Q2hpbGRyZW4xMCA9IFtSZWFjdC5jcmVhdGVFbGVtZW50KHJlc3VsdCwgX2Fzc2lnbih7XG4gICAgICAgICAgICAgICAgcmVmOiBfZWxlbWVudDIucmVmXG4gICAgICAgICAgICAgIH0sIF9lbGVtZW50Mi5wcm9wcykpXTtcbiAgICAgICAgICAgICAgdmFyIF9mcmFtZTEwID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICAgICAgZG9tTmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IF9uZXh0Q2hpbGRyZW4xMCxcbiAgICAgICAgICAgICAgICBjaGlsZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgICAgZm9vdGVyOiAnJ1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfZnJhbWUxMC5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGFjay5wdXNoKF9mcmFtZTEwKTtcbiAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIHtcbiAgICAgICAgdmFyIG93bmVyID0gbmV4dEVsZW1lbnQuX293bmVyO1xuXG4gICAgICAgIGlmIChlbGVtZW50VHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiBlbGVtZW50VHlwZSA9PT0gJ29iamVjdCcgJiYgZWxlbWVudFR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXMoZWxlbWVudFR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIFwiICsgJ25hbWVkIGltcG9ydHMuJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvd25lck5hbWUgPSBvd25lciA/IGdldENvbXBvbmVudE5hbWUob3duZXIpIDogbnVsbDtcblxuICAgICAgICBpZiAob3duZXJOYW1lKSB7XG4gICAgICAgICAgaW5mbyArPSAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBvd25lck5hbWUgKyAnYC4nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIkVsZW1lbnQgdHlwZSBpcyBpbnZhbGlkOiBleHBlY3RlZCBhIHN0cmluZyAoZm9yIGJ1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgY29tcG9uZW50cykgYnV0IGdvdDogXCIgKyAoZWxlbWVudFR5cGUgPT0gbnVsbCA/IGVsZW1lbnRUeXBlIDogdHlwZW9mIGVsZW1lbnRUeXBlKSArIFwiLlwiICsgaW5mbyApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5yZW5kZXJET00gPSBmdW5jdGlvbiByZW5kZXJET00oZWxlbWVudCwgY29udGV4dCwgcGFyZW50TmFtZXNwYWNlKSB7XG4gICAgdmFyIHRhZyA9IGVsZW1lbnQudHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhciBuYW1lc3BhY2UgPSBwYXJlbnROYW1lc3BhY2U7XG5cbiAgICBpZiAocGFyZW50TmFtZXNwYWNlID09PSBOYW1lc3BhY2VzLmh0bWwpIHtcbiAgICAgIG5hbWVzcGFjZSA9IGdldEludHJpbnNpY05hbWVzcGFjZSh0YWcpO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChuYW1lc3BhY2UgPT09IE5hbWVzcGFjZXMuaHRtbCkge1xuICAgICAgICAvLyBTaG91bGQgdGhpcyBjaGVjayBiZSBnYXRlZCBieSBwYXJlbnQgbmFtZXNwYWNlPyBOb3Qgc3VyZSB3ZSB3YW50IHRvXG4gICAgICAgIC8vIGFsbG93IDxTVkc+IG9yIDxtQVRIPi5cbiAgICAgICAgaWYgKHRhZyAhPT0gZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgZXJyb3IoJzwlcyAvPiBpcyB1c2luZyBpbmNvcnJlY3QgY2FzaW5nLiAnICsgJ1VzZSBQYXNjYWxDYXNlIGZvciBSZWFjdCBjb21wb25lbnRzLCAnICsgJ29yIGxvd2VyY2FzZSBmb3IgSFRNTCBlbGVtZW50cy4nLCBlbGVtZW50LnR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVEYW5nZXJvdXNUYWcodGFnKTtcbiAgICB2YXIgcHJvcHMgPSBlbGVtZW50LnByb3BzO1xuXG4gICAgaWYgKHRhZyA9PT0gJ2lucHV0Jykge1xuICAgICAge1xuICAgICAgICBjaGVja0NvbnRyb2xsZWRWYWx1ZVByb3BzKCdpbnB1dCcsIHByb3BzKTtcblxuICAgICAgICBpZiAocHJvcHMuY2hlY2tlZCAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRDaGVja2VkICE9PSB1bmRlZmluZWQgJiYgIWRpZFdhcm5EZWZhdWx0Q2hlY2tlZCkge1xuICAgICAgICAgIGVycm9yKCclcyBjb250YWlucyBhbiBpbnB1dCBvZiB0eXBlICVzIHdpdGggYm90aCBjaGVja2VkIGFuZCBkZWZhdWx0Q2hlY2tlZCBwcm9wcy4gJyArICdJbnB1dCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgY2hlY2tlZCBwcm9wLCBvciB0aGUgZGVmYXVsdENoZWNrZWQgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9jb250cm9sbGVkLWNvbXBvbmVudHMnLCAnQSBjb21wb25lbnQnLCBwcm9wcy50eXBlKTtcblxuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0Q2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRJbnB1dFZhbHVlKSB7XG4gICAgICAgICAgZXJyb3IoJyVzIGNvbnRhaW5zIGFuIGlucHV0IG9mIHR5cGUgJXMgd2l0aCBib3RoIHZhbHVlIGFuZCBkZWZhdWx0VmFsdWUgcHJvcHMuICcgKyAnSW5wdXQgZWxlbWVudHMgbXVzdCBiZSBlaXRoZXIgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgJyArICcoc3BlY2lmeSBlaXRoZXIgdGhlIHZhbHVlIHByb3AsIG9yIHRoZSBkZWZhdWx0VmFsdWUgcHJvcCwgYnV0IG5vdCAnICsgJ2JvdGgpLiBEZWNpZGUgYmV0d2VlbiB1c2luZyBhIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkIGlucHV0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9jb250cm9sbGVkLWNvbXBvbmVudHMnLCAnQSBjb21wb25lbnQnLCBwcm9wcy50eXBlKTtcblxuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0SW5wdXRWYWx1ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcHJvcHMgPSBfYXNzaWduKHtcbiAgICAgICAgdHlwZTogdW5kZWZpbmVkXG4gICAgICB9LCBwcm9wcywge1xuICAgICAgICBkZWZhdWx0Q2hlY2tlZDogdW5kZWZpbmVkLFxuICAgICAgICBkZWZhdWx0VmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlICE9IG51bGwgPyBwcm9wcy52YWx1ZSA6IHByb3BzLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgY2hlY2tlZDogcHJvcHMuY2hlY2tlZCAhPSBudWxsID8gcHJvcHMuY2hlY2tlZCA6IHByb3BzLmRlZmF1bHRDaGVja2VkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ3RleHRhcmVhJykge1xuICAgICAge1xuICAgICAgICBjaGVja0NvbnRyb2xsZWRWYWx1ZVByb3BzKCd0ZXh0YXJlYScsIHByb3BzKTtcblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT09IHVuZGVmaW5lZCAmJiBwcm9wcy5kZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlKSB7XG4gICAgICAgICAgZXJyb3IoJ1RleHRhcmVhIGVsZW1lbnRzIG11c3QgYmUgZWl0aGVyIGNvbnRyb2xsZWQgb3IgdW5jb250cm9sbGVkICcgKyAnKHNwZWNpZnkgZWl0aGVyIHRoZSB2YWx1ZSBwcm9wLCBvciB0aGUgZGVmYXVsdFZhbHVlIHByb3AsIGJ1dCBub3QgJyArICdib3RoKS4gRGVjaWRlIGJldHdlZW4gdXNpbmcgYSBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCB0ZXh0YXJlYSAnICsgJ2FuZCByZW1vdmUgb25lIG9mIHRoZXNlIHByb3BzLiBNb3JlIGluZm86ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL2NvbnRyb2xsZWQtY29tcG9uZW50cycpO1xuXG4gICAgICAgICAgZGlkV2FybkRlZmF1bHRUZXh0YXJlYVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaW5pdGlhbFZhbHVlID0gcHJvcHMudmFsdWU7XG5cbiAgICAgIGlmIChpbml0aWFsVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlOyAvLyBUT0RPICh5dW5nc3RlcnMpOiBSZW1vdmUgc3VwcG9ydCBmb3IgY2hpbGRyZW4gY29udGVudCBpbiA8dGV4dGFyZWE+LlxuXG4gICAgICAgIHZhciB0ZXh0YXJlYUNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgICAgaWYgKHRleHRhcmVhQ2hpbGRyZW4gIT0gbnVsbCkge1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVycm9yKCdVc2UgdGhlIGBkZWZhdWx0VmFsdWVgIG9yIGB2YWx1ZWAgcHJvcHMgaW5zdGVhZCBvZiBzZXR0aW5nICcgKyAnY2hpbGRyZW4gb24gPHRleHRhcmVhPi4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIShkZWZhdWx0VmFsdWUgPT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoIFwiSWYgeW91IHN1cHBseSBgZGVmYXVsdFZhbHVlYCBvbiBhIDx0ZXh0YXJlYT4sIGRvIG5vdCBwYXNzIGNoaWxkcmVuLlwiICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGV4dGFyZWFDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGlmICghKHRleHRhcmVhQ2hpbGRyZW4ubGVuZ3RoIDw9IDEpKSB7XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvciggXCI8dGV4dGFyZWE+IGNhbiBvbmx5IGhhdmUgYXQgbW9zdCBvbmUgY2hpbGQuXCIgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0YXJlYUNoaWxkcmVuID0gdGV4dGFyZWFDaGlsZHJlblswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJyArIHRleHRhcmVhQ2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVmYXVsdFZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICBkZWZhdWx0VmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxWYWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICBjaGlsZHJlbjogJycgKyBpbml0aWFsVmFsdWVcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGFnID09PSAnc2VsZWN0Jykge1xuICAgICAge1xuICAgICAgICBjaGVja0NvbnRyb2xsZWRWYWx1ZVByb3BzKCdzZWxlY3QnLCBwcm9wcyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZVByb3BOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwcm9wTmFtZSA9IHZhbHVlUHJvcE5hbWVzW2ldO1xuXG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkocHJvcHNbcHJvcE5hbWVdKTtcblxuICAgICAgICAgIGlmIChwcm9wcy5tdWx0aXBsZSAmJiAhaXNBcnJheSkge1xuICAgICAgICAgICAgZXJyb3IoJ1RoZSBgJXNgIHByb3Agc3VwcGxpZWQgdG8gPHNlbGVjdD4gbXVzdCBiZSBhbiBhcnJheSBpZiAnICsgJ2BtdWx0aXBsZWAgaXMgdHJ1ZS4nLCBwcm9wTmFtZSk7XG4gICAgICAgICAgfSBlbHNlIGlmICghcHJvcHMubXVsdGlwbGUgJiYgaXNBcnJheSkge1xuICAgICAgICAgICAgZXJyb3IoJ1RoZSBgJXNgIHByb3Agc3VwcGxpZWQgdG8gPHNlbGVjdD4gbXVzdCBiZSBhIHNjYWxhciAnICsgJ3ZhbHVlIGlmIGBtdWx0aXBsZWAgaXMgZmFsc2UuJywgcHJvcE5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHByb3BzLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmICFkaWRXYXJuRGVmYXVsdFNlbGVjdFZhbHVlKSB7XG4gICAgICAgICAgZXJyb3IoJ1NlbGVjdCBlbGVtZW50cyBtdXN0IGJlIGVpdGhlciBjb250cm9sbGVkIG9yIHVuY29udHJvbGxlZCAnICsgJyhzcGVjaWZ5IGVpdGhlciB0aGUgdmFsdWUgcHJvcCwgb3IgdGhlIGRlZmF1bHRWYWx1ZSBwcm9wLCBidXQgbm90ICcgKyAnYm90aCkuIERlY2lkZSBiZXR3ZWVuIHVzaW5nIGEgY29udHJvbGxlZCBvciB1bmNvbnRyb2xsZWQgc2VsZWN0ICcgKyAnZWxlbWVudCBhbmQgcmVtb3ZlIG9uZSBvZiB0aGVzZSBwcm9wcy4gTW9yZSBpbmZvOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9jb250cm9sbGVkLWNvbXBvbmVudHMnKTtcblxuICAgICAgICAgIGRpZFdhcm5EZWZhdWx0U2VsZWN0VmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY3VycmVudFNlbGVjdFZhbHVlID0gcHJvcHMudmFsdWUgIT0gbnVsbCA/IHByb3BzLnZhbHVlIDogcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgcHJvcHMgPSBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRhZyA9PT0gJ29wdGlvbicpIHtcbiAgICAgIHZhciBzZWxlY3RlZCA9IG51bGw7XG4gICAgICB2YXIgc2VsZWN0VmFsdWUgPSB0aGlzLmN1cnJlbnRTZWxlY3RWYWx1ZTtcbiAgICAgIHZhciBvcHRpb25DaGlsZHJlbiA9IGZsYXR0ZW5PcHRpb25DaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIGlmIChzZWxlY3RWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgICBpZiAocHJvcHMudmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHZhbHVlID0gcHJvcHMudmFsdWUgKyAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IG9wdGlvbkNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzZWxlY3RWYWx1ZSkpIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZVxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VsZWN0VmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGlmICgnJyArIHNlbGVjdFZhbHVlW2pdID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICBzZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZCA9ICcnICsgc2VsZWN0VmFsdWUgPT09IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMgPSBfYXNzaWduKHtcbiAgICAgICAgICBzZWxlY3RlZDogdW5kZWZpbmVkLFxuICAgICAgICAgIGNoaWxkcmVuOiB1bmRlZmluZWRcbiAgICAgICAgfSwgcHJvcHMsIHtcbiAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgY2hpbGRyZW46IG9wdGlvbkNoaWxkcmVuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIHZhbGlkYXRlUHJvcGVydGllc0luRGV2ZWxvcG1lbnQodGFnLCBwcm9wcyk7XG4gICAgfVxuXG4gICAgYXNzZXJ0VmFsaWRQcm9wcyh0YWcsIHByb3BzKTtcbiAgICB2YXIgb3V0ID0gY3JlYXRlT3BlblRhZ01hcmt1cChlbGVtZW50LnR5cGUsIHRhZywgcHJvcHMsIG5hbWVzcGFjZSwgdGhpcy5tYWtlU3RhdGljTWFya3VwLCB0aGlzLnN0YWNrLmxlbmd0aCA9PT0gMSk7XG4gICAgdmFyIGZvb3RlciA9ICcnO1xuXG4gICAgaWYgKG9taXR0ZWRDbG9zZVRhZ3MuaGFzT3duUHJvcGVydHkodGFnKSkge1xuICAgICAgb3V0ICs9ICcvPic7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dCArPSAnPic7XG4gICAgICBmb290ZXIgPSAnPC8nICsgZWxlbWVudC50eXBlICsgJz4nO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbjtcbiAgICB2YXIgaW5uZXJNYXJrdXAgPSBnZXROb25DaGlsZHJlbklubmVyTWFya3VwKHByb3BzKTtcblxuICAgIGlmIChpbm5lck1hcmt1cCAhPSBudWxsKSB7XG4gICAgICBjaGlsZHJlbiA9IFtdO1xuXG4gICAgICBpZiAobmV3bGluZUVhdGluZ1RhZ3MuaGFzT3duUHJvcGVydHkodGFnKSAmJiBpbm5lck1hcmt1cC5jaGFyQXQoMCkgPT09ICdcXG4nKSB7XG4gICAgICAgIC8vIHRleHQvaHRtbCBpZ25vcmVzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gdGhlc2UgdGFncyBpZiBpdCdzIGEgbmV3bGluZVxuICAgICAgICAvLyBQcmVmZXIgdG8gYnJlYWsgYXBwbGljYXRpb24veG1sIG92ZXIgdGV4dC9odG1sIChmb3Igbm93KSBieSBhZGRpbmdcbiAgICAgICAgLy8gYSBuZXdsaW5lIHNwZWNpZmljYWxseSB0byBnZXQgZWF0ZW4gYnkgdGhlIHBhcnNlci4gKEFsdGVybmF0ZWx5IGZvclxuICAgICAgICAvLyB0ZXh0YXJlYXMsIHJlcGxhY2luZyBcIl5cXG5cIiB3aXRoIFwiXFxyXFxuXCIgZG9lc24ndCBnZXQgZWF0ZW4sIGFuZCB0aGUgZmlyc3RcbiAgICAgICAgLy8gXFxyIGlzIG5vcm1hbGl6ZWQgb3V0IGJ5IEhUTUxUZXh0QXJlYUVsZW1lbnQjdmFsdWUuKVxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sLXBvbHlnbG90LyNuZXdsaW5lcy1pbi10ZXh0YXJlYS1hbmQtcHJlPlxuICAgICAgICAvLyBTZWU6IDxodHRwOi8vd3d3LnczLm9yZy9UUi9odG1sNS9zeW50YXguaHRtbCNlbGVtZW50LXJlc3RyaWN0aW9ucz5cbiAgICAgICAgLy8gU2VlOiA8aHR0cDovL3d3dy53My5vcmcvVFIvaHRtbDUvc3ludGF4Lmh0bWwjbmV3bGluZXM+XG4gICAgICAgIC8vIFNlZTogUGFyc2luZyBvZiBcInRleHRhcmVhXCIgXCJsaXN0aW5nXCIgYW5kIFwicHJlXCIgZWxlbWVudHNcbiAgICAgICAgLy8gIGZyb20gPGh0dHA6Ly93d3cudzMub3JnL1RSL2h0bWw1L3N5bnRheC5odG1sI3BhcnNpbmctbWFpbi1pbmJvZHk+XG4gICAgICAgIG91dCArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgb3V0ICs9IGlubmVyTWFya3VwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjaGlsZHJlbiA9IHRvQXJyYXkocHJvcHMuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHZhciBmcmFtZSA9IHtcbiAgICAgIGRvbU5hbWVzcGFjZTogZ2V0Q2hpbGROYW1lc3BhY2UocGFyZW50TmFtZXNwYWNlLCBlbGVtZW50LnR5cGUpLFxuICAgICAgdHlwZTogdGFnLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgY2hpbGRJbmRleDogMCxcbiAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICBmb290ZXI6IGZvb3RlclxuICAgIH07XG5cbiAgICB7XG4gICAgICBmcmFtZS5kZWJ1Z0VsZW1lbnRTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuc3RhY2sucHVzaChmcmFtZSk7XG4gICAgdGhpcy5wcmV2aW91c1dhc1RleHROb2RlID0gZmFsc2U7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcblxuICByZXR1cm4gUmVhY3RET01TZXJ2ZXJSZW5kZXJlcjtcbn0oKTtcblxuLyoqXG4gKiBSZW5kZXIgYSBSZWFjdEVsZW1lbnQgdG8gaXRzIGluaXRpYWwgSFRNTC4gVGhpcyBzaG91bGQgb25seSBiZSB1c2VkIG9uIHRoZVxuICogc2VydmVyLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdHJpbmdcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0cmluZyhlbGVtZW50LCBvcHRpb25zKSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIGZhbHNlLCBvcHRpb25zKTtcblxuICB0cnkge1xuICAgIHZhciBtYXJrdXAgPSByZW5kZXJlci5yZWFkKEluZmluaXR5KTtcbiAgICByZXR1cm4gbWFya3VwO1xuICB9IGZpbmFsbHkge1xuICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgfVxufVxuLyoqXG4gKiBTaW1pbGFyIHRvIHJlbmRlclRvU3RyaW5nLCBleGNlcHQgdGhpcyBkb2Vzbid0IGNyZWF0ZSBleHRyYSBET00gYXR0cmlidXRlc1xuICogc3VjaCBhcyBkYXRhLXJlYWN0LWlkIHRoYXQgUmVhY3QgdXNlcyBpbnRlcm5hbGx5LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1kb20tc2VydmVyLmh0bWwjcmVuZGVydG9zdGF0aWNtYXJrdXBcbiAqL1xuXG5mdW5jdGlvbiByZW5kZXJUb1N0YXRpY01hcmt1cChlbGVtZW50LCBvcHRpb25zKSB7XG4gIHZhciByZW5kZXJlciA9IG5ldyBSZWFjdERPTVNlcnZlclJlbmRlcmVyKGVsZW1lbnQsIHRydWUsIG9wdGlvbnMpO1xuXG4gIHRyeSB7XG4gICAgdmFyIG1hcmt1cCA9IHJlbmRlcmVyLnJlYWQoSW5maW5pdHkpO1xuICAgIHJldHVybiBtYXJrdXA7XG4gIH0gZmluYWxseSB7XG4gICAgcmVuZGVyZXIuZGVzdHJveSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvTm9kZVN0cmVhbSgpIHtcbiAge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyLnJlbmRlclRvTm9kZVN0cmVhbSgpOiBUaGUgc3RyZWFtaW5nIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBVc2UgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdHJpbmcoKSBpbnN0ZWFkLlwiICk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSgpIHtcbiAge1xuICAgIHtcbiAgICAgIHRocm93IEVycm9yKCBcIlJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTm9kZVN0cmVhbSgpOiBUaGUgc3RyZWFtaW5nIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBicm93c2VyLiBVc2UgUmVhY3RET01TZXJ2ZXIucmVuZGVyVG9TdGF0aWNNYXJrdXAoKSBpbnN0ZWFkLlwiICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydHMucmVuZGVyVG9Ob2RlU3RyZWFtID0gcmVuZGVyVG9Ob2RlU3RyZWFtO1xuZXhwb3J0cy5yZW5kZXJUb1N0YXRpY01hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwO1xuZXhwb3J0cy5yZW5kZXJUb1N0YXRpY05vZGVTdHJlYW0gPSByZW5kZXJUb1N0YXRpY05vZGVTdHJlYW07XG5leHBvcnRzLnJlbmRlclRvU3RyaW5nID0gcmVuZGVyVG9TdHJpbmc7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLXNlcnZlci5icm93c2VyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS1zZXJ2ZXIuYnJvd3Nlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==