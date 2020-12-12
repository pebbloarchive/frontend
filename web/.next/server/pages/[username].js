module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/3ze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("bBV7");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZOH6");


/***/ }),

/***/ "3HrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rsi9");
/* harmony import */ var _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("5dyF");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pebblo_frontend_src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cm8D");
/* harmony import */ var _pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("pHx+");



// @ts-ignore







const Topnav = () => {
  const loggedIn = Object(_pebblo_frontend_src_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[/* useAuth */ "a"])();
  const {
    data
  } = Object(_pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_6__[/* useMeQuery */ "e"])();
  const {
    0: active,
    1: isActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined);
  const {
    0: clicked,
    1: wasClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const onClick = () => {
    if (!clicked) {
      wasClicked(true);
    } else {
      wasClicked(false);
    }
  };

  const Context = () => {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profile_dropup,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: `/${data === null || data === void 0 ? void 0 : data.me.username}`,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: `/${data === null || data === void 0 ? void 0 : data.me.username}`,
          children: "Your Profile"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("hr", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/settings",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "/settings",
          children: "Settings"
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/logout",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "/logout",
          className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.profile_dropup_logout,
          children: "Logout"
        })
      })]
    });
  };

  const onRouteChange = route => {
    switch (route) {
      case '/home':
        return isActive('home');

      case '/explore':
        return isActive('explore');

      case '/notifications':
        return isActive('notifications');

      case '/messages':
        return isActive('messages');

      case '/business':
        return isActive('business');

      case '/creators':
        return isActive('creators');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (false) {}
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('onRouterStart', onRouteChange);
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navigation,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
          className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navigation_logo,
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {})]
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/upload",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
          href: "/upload",
          className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.upload,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
            src: "/icons/plus.png",
            alt: ""
          })
        })
      }), loggedIn.me ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
        className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.links,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/home",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            className: `${active === 'home' ? _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active : ''}`,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/icons/home.png",
              alt: ""
            }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Home"
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/explore",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            className: `${active === 'explore' ? _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active : ''}`,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/icons/search.png",
              alt: ""
            }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Explore"
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/notifications",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            className: `${active === 'notifications' ? _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active : ''}`,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/icons/notification.png",
              alt: ""
            }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Notifications"
            })]
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/messages",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("a", {
            className: `${active === 'messages' ? _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.active : ''}`,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
              src: "/icons/envelope.png",
              alt: ""
            }), " ", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              children: "Messages"
            })]
          })
        })]
      }) : '', loggedIn.me ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("button", {
        className: _pebblo_css_navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.avatar,
        onClick: onClick,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
          src: data === null || data === void 0 ? void 0 : data.me.avatar,
          alt: ""
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
          children: "Click Me!"
        }), clicked ? /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Context, {}) : '']
      }) : '']
    })
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Topnav);

/***/ }),

/***/ "4F+t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5dyF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9CGT")


/***/ }),

/***/ "63Ad":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "6jsY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "7Hdz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withApollo; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ../node_modules/next/app.js
var app = __webpack_require__("o42t");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__("lN3F");

// CONCATENATED MODULE: ./src/hooks/createWithApollo.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





 // On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.

let globalApolloClient = null;
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param {NextPageContext | NextAppContext} ctx
 */

const initOnContext = (ac, ctx) => {
  const inAppContext = Boolean(ctx.ctx); // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.

  if (false) {} // Initialize ApolloClient if not already done


  const apolloClient = ctx.apolloClient || initApolloClient(ac, ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx); // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.

  apolloClient.toJSON = () => null; // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.


  ctx.apolloClient = apolloClient;

  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */

const initApolloClient = (apolloClient, initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(apolloClient(ctx), initialState, ctx);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(apolloClient(ctx), initialState, ctx);
  }

  return globalApolloClient;
};
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */


const createWithApollo = ac => {
  return ({
    ssr = false
  } = {}) => PageComponent => {
    const WithApollo = (_ref) => {
      let {
        apolloClient,
        apolloState
      } = _ref,
          pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

      let client;

      if (apolloClient) {
        // Happens on: getDataFromTree & next.js ssr
        client = apolloClient;
      } else {
        // Happens on: next.js csr
        client = initApolloClient(ac, apolloState, undefined);
      }

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["ApolloProvider"], {
        client: client,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_next_themes_["ThemeProvider"], {
          forcedTheme: PageComponent.theme || undefined,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(PageComponent, _objectSpread({}, pageProps))
        })
      });
    }; // Set the correct displayName in development


    if (false) {}

    if (ssr || PageComponent.getInitialProps) {
      WithApollo.getInitialProps = async ctx => {
        const inAppContext = Boolean(ctx.ctx);
        const {
          apolloClient
        } = initOnContext(ac, ctx); // Run wrapped getInitialProps methods

        let pageProps = {};

        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx);
        } else if (inAppContext) {
          pageProps = await app_default.a.getInitialProps(ctx);
        } // Only on the server:


        if (true) {
          const {
            AppTree
          } = ctx; // When redirecting, the response is finished.
          // No point in continuing to render

          if (ctx.res && ctx.res.finished) {
            return pageProps;
          } // Only if dataFromTree is enabled


          if (ssr && AppTree) {
            try {
              // Import `@apollo/react-ssr` dynamically.
              // We don't want to have this in our client bundle.
              const {
                getDataFromTree
              } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "kD/w", 7)); // Since AppComponents and PageComponents have different context types
              // we need to modify their props a little.

              let props;

              if (inAppContext) {
                props = _objectSpread(_objectSpread({}, pageProps), {}, {
                  apolloClient
                });
              } else {
                props = {
                  pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                    apolloClient
                  })
                };
              } // Take the Next.js AppTree, determine which queries are needed to render,
              // and fetch them. This method can be pretty slow since it renders
              // your entire AppTree once for every query. Check out apollo fragments
              // if you want to reduce the number of rerenders.
              // https://www.apollographql.com/docs/react/data/fragments/


              await getDataFromTree( /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppTree, _objectSpread({}, props)));
            } catch (error) {
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error("Error while running `getDataFromTree`", error);
            } // getDataFromTree does not call componentWillUnmount
            // head side effect therefore need to be cleared manually


            head_default.a.rewind();
          }
        }

        return _objectSpread(_objectSpread({}, pageProps), {}, {
          // Extract query data from the Apollo store
          apolloState: apolloClient.cache.extract(),
          // Provide the client for ssr. As soon as this payload
          // gets JSON.stringified it will remove itself.
          apolloClient: ctx.apolloClient
        });
      };
    }

    return WithApollo;
  };
};

function createApolloClient(apolloClient, initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  apolloClient.ssrMode = Boolean(ctx);
  apolloClient.cache.restore(initialState);
  return apolloClient;
}
// CONCATENATED MODULE: ./src/hooks/withApolloHook.tsx
function withApolloHook_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function withApolloHook_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { withApolloHook_ownKeys(Object(source), true).forEach(function (key) { withApolloHook_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { withApolloHook_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withApolloHook_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from "@apollo/client";
// import { NextPageContext } from "next";
// import * as React from 'react'
// import { ApolloProvider } from '@apollo/client'
// import { ThemeProvider } from "next-themes";
// // const CLIENT_URL = process.env.NODE_ENV !== 'production' ? 'https://pebblo.org/api' : 'http://localhost:4000/api';
// const CLIENT_URL = 'http://localhost:4000/api';
// const endpoint = `${CLIENT_URL}/query`;
// const link = new HttpLink({ uri: endpoint, credentials: "include" });
// const isBrowser: boolean = (process as any).browser;


const CLIENT_URL = 'http://localhost:4000/api';
const endpoint = `${CLIENT_URL}/graphql`;

const createClient = ctx => {
  var _ctx$req;

  return new client_["ApolloClient"]({
    uri: endpoint,
    credentials: "include",
    headers: {
      cookie: (true ? ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie : undefined) || ""
    },
    cache: new client_["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            posts: {
              keyArgs: [],

              merge(existing, incoming) {
                return withApolloHook_objectSpread(withApolloHook_objectSpread({}, incoming), {}, {
                  posts: [...((existing === null || existing === void 0 ? void 0 : existing.posts) || []), ...incoming.posts]
                });
              }

            }
          }
        }
      }
    })
  });
};

const withApollo = createWithApollo(createClient);

/***/ }),

/***/ "9CGT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("a4i1");

var _router2 = __webpack_require__("bBV7");

var _useIntersection = __webpack_require__("hY8M");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "BCwt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "BukW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "EgTp":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"content": "profile_content__3CZJl",
	"profile": "profile_profile__3Y1FO",
	"information": "profile_information__1IcsR",
	"avatar": "profile_avatar__1rgtN",
	"interactions": "profile_interactions__2Vcd4",
	"follow_account": "profile_follow_account__1PNAH",
	"message_user": "profile_message_user__gD2H7",
	"about": "profile_about__xEzv4",
	"name": "profile_name__2Xvjw",
	"badge": "profile_badge__LFdPg",
	"username": "profile_username__3SFhA",
	"description": "profile_description__1A0AA",
	"right": "profile_right__3Yahy",
	"left": "profile_left__2tBle",
	"card": "profile_card__3emZx",
	"card_title": "profile_card_title__3c3xh",
	"card_content": "profile_card_content__2hH7f",
	"statistics": "profile_statistics__2LQiP",
	"filter": "profile_filter__10Ak9",
	"mobile": "profile_mobile__ecgq2",
	"mobile_profile_navigation": "profile_mobile_profile_navigation__nfmFf",
	"mobile_profile_username": "profile_mobile_profile_username__3b4JC",
	"mobile_page_explore": "profile_mobile_page_explore__32T0v",
	"mobile_page_settings": "profile_mobile_page_settings__GV1VW",
	"mobile_images": "profile_mobile_images__1ObwS",
	"mobile_avatar": "profile_mobile_avatar__kLXC3",
	"mobile_statistics": "profile_mobile_statistics__1la-D",
	"mobile_information": "profile_mobile_information__2YIdM",
	"mobile_profile_information": "profile_mobile_profile_information__ethez",
	"profile_name": "profile_profile_name__1oqyl",
	"profile_description": "profile_profile_description__2TNI0",
	"mobile_interactions": "profile_mobile_interactions__7b9hV",
	"mobile_filter": "profile_mobile_filter__2aVd2",
	"mobile_filter_profile": "profile_mobile_filter_profile__1XyzF",
	"mobile_filter_shares": "profile_mobile_filter_shares__2YaRt",
	"mobile_filter_connections": "profile_mobile_filter_connections__3i1GG",
	"mobile_filter_media": "profile_mobile_filter_media__GFFSS",
	"mobile_lightshot": "profile_mobile_lightshot__1_2kb"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "Jxiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "Plc0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "PsvV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "RxAv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VOyh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "Wecs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("PsvV"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "YayO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"feed": "feed_feed__13ZE_",
	"post": "feed_post__2Nvus",
	"heading": "feed_heading__D2hKJ",
	"heading_author": "feed_heading_author__1Mbmm",
	"heading_author_avatar": "feed_heading_author_avatar__3MqCS",
	"heading_author_badge": "feed_heading_author_badge__1cX_Y",
	"heading_author_name": "feed_heading_author_name__1kpA-",
	"heading_author_username": "feed_heading_author_username__3gzKA",
	"heading_more": "feed_heading_more__1j9df",
	"heading_ellipsis": "feed_heading_ellipsis__4S7h0",
	"content": "feed_content__x5_0E",
	"caption": "feed_caption__39goN",
	"media": "feed_media__2Ovdv",
	"interaction": "feed_interaction__NlUQE",
	"post_add_comment": "feed_post_add_comment__2LWRp",
	"post_add_comment_avatar": "feed_post_add_comment_avatar__2kRUQ",
	"post_add_comment_form": "feed_post_add_comment_form__2kkaw",
	"post_add_comment_interaction": "feed_post_add_comment_interaction__3ypBc",
	"timeStamp": "feed_timeStamp__DrnhF",
	"post_buttons": "feed_post_buttons__WAbcC",
	"singlePost_link": "feed_singlePost_link__2mJlk",
	"right": "feed_right__1vVTc",
	"left": "feed_left__2Rhup",
	"card": "feed_card__1rW8o",
	"card_title": "feed_card_title__B2ktW",
	"card_content": "feed_card_content__2Hpjn",
	"card_profile": "feed_card_profile__I3EJj",
	"card_avatar": "feed_card_avatar__fXYcb",
	"card_user": "feed_card_user__2m9Hd",
	"card_name": "feed_card_name__kFblT",
	"card_badge": "feed_card_badge__2Koo7",
	"card_username": "feed_card_username__1yXA2",
	"card_tag": "feed_card_tag__1SGgf",
	"card_tag_count": "feed_card_tag_count__eHoZj",
	"card_tag_item": "feed_card_tag_item__2jtw6",
	"card_news": "feed_card_news__cnuX1",
	"card_news_title": "feed_card_news_title__knXMJ"
};


/***/ }),

/***/ "ZOH6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./src/components/Nav.tsx
var Nav = __webpack_require__("3HrO");

// EXTERNAL MODULE: ./src/pages/404.tsx
var _404 = __webpack_require__("i6+/");

// EXTERNAL MODULE: ../css/profile/profile.module.css
var profile_module = __webpack_require__("EgTp");
var profile_module_default = /*#__PURE__*/__webpack_require__.n(profile_module);

// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__("5dyF");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./src/generated/graphql.tsx
var graphql = __webpack_require__("pHx+");

// EXTERNAL MODULE: ./src/hooks/withApolloHook.tsx + 1 modules
var withApolloHook = __webpack_require__("7Hdz");

// CONCATENATED MODULE: ./src/hooks/useFetchMorePosts.ts
const useFetchMorePosts = (data, loading, fetchMore, variables) => {
  if (false) {}
};
// CONCATENATED MODULE: ./src/hooks/useConvertUnixTimestamp.ts
const useConvertUnixTimestamp = timestamp => {
  if (!timestamp) {
    return {
      minutes: null,
      hours: null,
      created: null
    };
  }

  const now = new Date().valueOf(); // this now

  const created = parseInt(timestamp); // then

  const diff = now - created;
  const minutes = Math.ceil(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const date = new Date(created).toDateString();
  return {
    minutes,
    hours,
    date
  };
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ../css/profile/home/feed.module.css
var feed_module = __webpack_require__("YayO");
var feed_module_default = /*#__PURE__*/__webpack_require__.n(feed_module);

// CONCATENATED MODULE: ./src/components/general/profile/home/Feed.tsx




 // @ts-ignore



const Feed = ({
  post
}) => {
  const {
    minutes,
    hours,
    date
  } = useConvertUnixTimestamp(post.created_at);
  return (
    /*#__PURE__*/
    // https://cdn.dribbble.com/users/686119/screenshots/7078221/media/82ce6a365b94f26ba2f3d5174306d4ef.png
    Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: feed_module_default.a.feed,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: feed_module_default.a.post,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: feed_module_default.a.timeStamp,
            children: minutes > 60 ? `${hours} hour${hours !== 1 ? "s" : ""}` : `${minutes} minute${minutes !== 1 ? "s" : ""}`
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: feed_module_default.a.heading,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "",
                className: feed_module_default.a.heading_author,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: post.creator.avatar,
                  alt: "",
                  className: feed_module_default.a.heading_author_avatar
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
                    className: feed_module_default.a.heading_author_name,
                    children: [post.creator.verified ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/icons/verified.png",
                      alt: "",
                      className: feed_module_default.a.heading_author_badge
                    }) : '', post.creator.name]
                  }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                    className: feed_module_default.a.heading_author_username,
                    children: ["@", post.creator.username]
                  })]
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
              className: feed_module_default.a.heading_more,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                className: feed_module_default.a.heading_ellipsis
              })
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: feed_module_default.a.content,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: feed_module_default.a.caption,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: post.content
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: feed_module_default.a.interaction,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "",
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "/icons/comment.png",
                  alt: ""
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: post.subs.length
                })]
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/icons/heart.png",
                alt: ""
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: post.likes.length
              })]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: "/icons/share.png",
                alt: ""
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                children: post.shares.length
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
            className: feed_module_default.a.post_add_comment,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: '',
              alt: "",
              className: feed_module_default.a.post_add_comment_avatar
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("form", {
              className: feed_module_default.a.post_add_comment_form,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                type: "text",
                name: "",
                id: "",
                placeholder: "Write a comment..."
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: feed_module_default.a.post_add_comment_interaction,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("label", {
                  children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/blushing.png",
                    alt: ""
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/image.png",
                    alt: ""
                  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
                    type: "file",
                    name: "",
                    id: ""
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: feed_module_default.a.post_buttons,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: "",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: "",
                className: feed_module_default.a.singlePost_link,
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                  src: "/icons/menus/ellipsis.png",
                  alt: ""
                })
              })
            })
          })]
        })
      })
    })
  );
};
// EXTERNAL MODULE: ../css/auth.module.css
var auth_module = __webpack_require__("sA37");
var auth_module_default = /*#__PURE__*/__webpack_require__.n(auth_module);

// CONCATENATED MODULE: ./src/components/loader/Post.tsx



// import styles from '../auth.module.css';


const Loader = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: auth_module_default.a.post_loader,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: auth_module_default.a.post_loader_author,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: auth_module_default.a.post_loader_avatar
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: auth_module_default.a.post_loader_name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: auth_module_default.a.post_loader_username
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: auth_module_default.a.post_loader_description,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {})]
      })]
    })
  });
};

/* harmony default export */ var Post = (Loader);
// EXTERNAL MODULE: ./src/hooks/useAuth.tsx
var useAuth = __webpack_require__("cm8D");

// CONCATENATED MODULE: ./src/pages/[username]/index.tsx
















const Username = () => {
  var _router$query$usernam, _userData$user, _userData$user$user, _userData$user$user2, _userData$user$user3, _userData$user$user4, _userData$user$user5, _userData$user$user6, _userData$user$user7, _userData$user$user8, _userData$user$user9, _userData$user$user10, _meData$me, _userData$user$user11, _userData$user$user12, _userData$user$user13, _userData$user$user14, _userData$user$user15, _userData$user$user16, _userData$user$user17, _userData$user$user18, _userData$user$user19, _meData$me2, _userData$user$user20, _userData$user$user21;

  const router = Object(router_["useRouter"])();
  const username = ((_router$query$usernam = router.query.username) === null || _router$query$usernam === void 0 ? void 0 : _router$query$usernam.toString()) || "";
  const {
    data: meData
  } = Object(graphql["e" /* useMeQuery */])();
  const {
    data: userData
  } = Object(graphql["g" /* useUserQuery */])({
    variables: {
      username: username
    }
  });
  const loggedIn = Object(useAuth["a" /* useAuth */])();
  const [follow] = Object(graphql["b" /* useFollowMutation */])();
  const {
    data,
    error,
    loading,
    fetchMore,
    variables
  } = Object(graphql["f" /* usePostsQuery */])({
    variables: {
      limit: 14,
      cursor: null
    },
    notifyOnNetworkStatusChange: true
  });
  useFetchMorePosts(data, loading, fetchMore, variables);
  const {
    date
  } = useConvertUnixTimestamp(userData === null || userData === void 0 ? void 0 : (_userData$user = userData.user) === null || _userData$user === void 0 ? void 0 : (_userData$user$user = _userData$user.user) === null || _userData$user$user === void 0 ? void 0 : _userData$user$user.createdAt);

  if (!loading && !data) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: "query failed hmmm"
    });
  }

  if ((userData === null || userData === void 0 ? void 0 : userData.user.user) === null) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(_404["default"], {});
  }

  if (!data && loading) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav["a" /* default */], {})
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Nav["a" /* default */], {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: profile_module_default.a.content,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: profile_module_default.a.profile,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: profile_module_default.a.information,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: profile_module_default.a.avatar,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: (userData === null || userData === void 0 ? void 0 : userData.user) ? userData === null || userData === void 0 ? void 0 : (_userData$user$user2 = userData.user.user) === null || _userData$user$user2 === void 0 ? void 0 : _userData$user$user2.avatar : '/icons/default.png',
              alt: `${userData === null || userData === void 0 ? void 0 : (_userData$user$user3 = userData.user.user) === null || _userData$user$user3 === void 0 ? void 0 : _userData$user$user3.name} || ${userData === null || userData === void 0 ? void 0 : (_userData$user$user4 = userData.user.user) === null || _userData$user$user4 === void 0 ? void 0 : _userData$user$user4.username}`
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: profile_module_default.a.about,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
            className: profile_module_default.a.name,
            children: [userData === null || userData === void 0 ? void 0 : (_userData$user$user5 = userData.user.user) === null || _userData$user$user5 === void 0 ? void 0 : _userData$user$user5.name, " ", (userData === null || userData === void 0 ? void 0 : (_userData$user$user6 = userData.user.user) === null || _userData$user$user6 === void 0 ? void 0 : _userData$user$user6.verified) ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: profile_module_default.a.badge,
              src: "icons/verified.png",
              alt: ""
            }) : '']
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
            className: profile_module_default.a.username,
            children: ["@", userData === null || userData === void 0 ? void 0 : (_userData$user$user7 = userData.user.user) === null || _userData$user$user7 === void 0 ? void 0 : _userData$user$user7.username]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: profile_module_default.a.description,
            children: userData === null || userData === void 0 ? void 0 : (_userData$user$user8 = userData.user.user) === null || _userData$user$user8 === void 0 ? void 0 : _userData$user$user8.description
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: profile_module_default.a.left,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: profile_module_default.a.card,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: profile_module_default.a.card_content,
              children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: profile_module_default.a.statistics,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    href: "",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: userData === null || userData === void 0 ? void 0 : (_userData$user$user9 = userData.user.user) === null || _userData$user$user9 === void 0 ? void 0 : _userData$user$user9.followers.length
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                      children: "Followers"
                    })]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    href: "",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                      children: userData === null || userData === void 0 ? void 0 : (_userData$user$user10 = userData.user.user) === null || _userData$user$user10 === void 0 ? void 0 : _userData$user$user10.following.length
                    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                      children: "Following"
                    })]
                  })
                })]
              })
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: profile_module_default.a.right,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: profile_module_default.a.card,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: profile_module_default.a.card_content,
              children: (meData === null || meData === void 0 ? void 0 : (_meData$me = meData.me) === null || _meData$me === void 0 ? void 0 : _meData$me.username) === username ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: profile_module_default.a.filter,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  href: "",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/gallery.png",
                    alt: ""
                  }), "Gallery"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  href: "",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/share.png",
                    alt: ""
                  }), "Shared Posts"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/settings",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    href: "/settings",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/icons/cog.png",
                      alt: ""
                    }), "Edit Profile"]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: "/logout",
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    href: "/logout",
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/icons/exit.png",
                      alt: ""
                    }), "Logout"]
                  })
                })]
              }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: profile_module_default.a.filter,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  href: "",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/gallery.png",
                    alt: ""
                  }), "Gallery"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                  href: "",
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/share.png",
                    alt: ""
                  }), "Shared Posts"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
                  href: `/message/${userData === null || userData === void 0 ? void 0 : (_userData$user$user11 = userData.user.user) === null || _userData$user$user11 === void 0 ? void 0 : _userData$user$user11.username}`,
                  children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                    href: `/message/${userData === null || userData === void 0 ? void 0 : (_userData$user$user12 = userData.user.user) === null || _userData$user$user12 === void 0 ? void 0 : _userData$user$user12.username}`,
                    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                      src: "/icons/envelope.png",
                      alt: ""
                    }), "Message"]
                  })
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/invisible.png",
                    alt: ""
                  }), "Block"]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("button", {
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                    src: "/icons/flag.png",
                    alt: ""
                  }), "Report @", userData === null || userData === void 0 ? void 0 : (_userData$user$user13 = userData.user.user) === null || _userData$user$user13 === void 0 ? void 0 : _userData$user$user13.username]
                })]
              })
            })
          })
        })]
      }), data === null || data === void 0 ? void 0 : data.posts.posts.map(post => post.creator.username === username && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Feed, {
        post: post
      }, post.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: data && data.posts.hasMore ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {})
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: profile_module_default.a.mobile,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: profile_module_default.a.mobile_profile,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: profile_module_default.a.mobile_profile_navigation,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: "/home",
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              href: "/home",
              className: profile_module_default.a.mobile_page_explore
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("h1", {
            className: profile_module_default.a.mobile_profile_username,
            children: ["@", userData === null || userData === void 0 ? void 0 : (_userData$user$user14 = userData.user.user) === null || _userData$user$user14 === void 0 ? void 0 : _userData$user$user14.username]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
            className: profile_module_default.a.mobile_page_settings
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: profile_module_default.a.mobile_information,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: profile_module_default.a.mobile_images,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              className: profile_module_default.a.mobile_avatar,
              src: (userData === null || userData === void 0 ? void 0 : userData.user) ? userData === null || userData === void 0 ? void 0 : (_userData$user$user15 = userData.user.user) === null || _userData$user$user15 === void 0 ? void 0 : _userData$user$user15.avatar : '',
              alt: `${userData === null || userData === void 0 ? void 0 : (_userData$user$user16 = userData.user.user) === null || _userData$user$user16 === void 0 ? void 0 : _userData$user$user16.name} || ${userData === null || userData === void 0 ? void 0 : (_userData$user$user17 = userData.user.user) === null || _userData$user$user17 === void 0 ? void 0 : _userData$user$user17.username}`
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
              className: profile_module_default.a.mobile_statistics,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "0"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  children: "Followers"
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
                href: "",
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  children: "0"
                }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
                  children: "Following"
                })]
              })]
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: profile_module_default.a.mobile_profile_information,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
              className: profile_module_default.a.profile_name,
              children: userData === null || userData === void 0 ? void 0 : (_userData$user$user18 = userData.user.user) === null || _userData$user$user18 === void 0 ? void 0 : _userData$user$user18.name
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              className: profile_module_default.a.profile_description,
              children: userData === null || userData === void 0 ? void 0 : (_userData$user$user19 = userData.user.user) === null || _userData$user$user19 === void 0 ? void 0 : _userData$user$user19.description
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: profile_module_default.a.mobile_interactions,
            children: [(meData === null || meData === void 0 ? void 0 : (_meData$me2 = meData.me) === null || _meData$me2 === void 0 ? void 0 : _meData$me2.username) === username ? '' : /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: "Button"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
              href: `/message/${userData === null || userData === void 0 ? void 0 : (_userData$user$user20 = userData.user.user) === null || _userData$user$user20 === void 0 ? void 0 : _userData$user$user20.username}`,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                href: `/message/${userData === null || userData === void 0 ? void 0 : (_userData$user$user21 = userData.user.user) === null || _userData$user$user21 === void 0 ? void 0 : _userData$user$user21.username}`,
                className: profile_module_default.a.mobile_messageUser,
                children: "Message"
              })
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: profile_module_default.a.mobile_filter,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "",
            className: profile_module_default.a.mobile_filter_profile
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "",
            className: profile_module_default.a.mobile_filter_shares
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "",
            className: profile_module_default.a.mobile_filter_media
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ var _username_ = __webpack_exports__["default"] = (Object(withApolloHook["a" /* withApollo */])({
  ssr: true
})(Username));

/***/ }),

/***/ "a4i1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("Plc0");

var _routeLoader = __webpack_require__("RxAv");

var _denormalizePagePath = __webpack_require__("yExG");

var _mitt = _interopRequireDefault(__webpack_require__("Jxiz"));

var _utils = __webpack_require__("z4BS");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("4F+t"));

var _isDynamic = __webpack_require__("BCwt");

var _parseRelativeUrl = __webpack_require__("eU9b");

var _querystring = __webpack_require__("PsvV");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("lxQX"));

var _routeMatcher = __webpack_require__("VOyh");

var _routeRegex = __webpack_require__("BukW");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "bBV7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("vdEC");

var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("a4i1"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("/3ze"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cKD6":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"notFound": "notfound_notFound__1oiYv",
	"notFound_text": "notfound_notFound_text__3LpNt",
	"fiveoone": "notfound_fiveoone__1PFIl"
};


/***/ }),

/***/ "cm8D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useAuth; });
/* harmony import */ var _pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pHx+");

function useAuth() {
  const {
    data
  } = Object(_pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_0__[/* useMeQuery */ "e"])();
  return {
    me: data && data.me
  };
}

/***/ }),

/***/ "e+GP":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "eU9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("z4BS");

var _querystring = __webpack_require__("PsvV");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hY8M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("63Ad");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("pksY"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "i6+/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pebblo_css_notfound_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cKD6");
/* harmony import */ var _pebblo_css_notfound_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pebblo_css_notfound_module_css__WEBPACK_IMPORTED_MODULE_1__);




function Page() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: "404 Not Found"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
      className: _pebblo_css_notfound_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.notFound_text,
      children: "404"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: _pebblo_css_notfound_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.notFound,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        children: "Oops..."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h3", {
        children: "The page you're looking for doesn't exist."
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("a", {
        href: "/home",
        children: "Take me home"
      })]
    })]
  });
}
Page.theme = 'light';

/***/ }),

/***/ "kD/w":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "lN3F":
/***/ (function(module, exports) {

module.exports = require("next-themes");

/***/ }),

/***/ "lxQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "o42t":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6jsY")


/***/ }),

/***/ "pHx+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PostSnippetFragmentDoc */
/* unused harmony export AnyPostResponseFragmentDoc */
/* unused harmony export AnyUserFragmentDoc */
/* unused harmony export AnyUserResponseFragmentDoc */
/* unused harmony export DeleteSubDocument */
/* unused harmony export useDeleteSubMutation */
/* unused harmony export CommentPostDocument */
/* unused harmony export useCommentPostMutation */
/* unused harmony export CreatePostDocument */
/* unused harmony export useCreatePostMutation */
/* unused harmony export DeletePostDocument */
/* unused harmony export useDeletePostMutation */
/* unused harmony export FollowDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useFollowMutation; });
/* unused harmony export LikeDocument */
/* unused harmony export useLikeMutation */
/* unused harmony export LoginDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useLoginMutation; });
/* unused harmony export LogoutDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return useLogoutMutation; });
/* unused harmony export RegisterDocument */
/* unused harmony export useRegisterMutation */
/* unused harmony export ShareDocument */
/* unused harmony export useShareMutation */
/* unused harmony export UnfollowUserDocument */
/* unused harmony export useUnfollowUserMutation */
/* unused harmony export UpdateAccountDocument */
/* unused harmony export useUpdateAccountMutation */
/* unused harmony export UpdatePostDocument */
/* unused harmony export useUpdatePostMutation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return useMeQuery; });
/* unused harmony export useMeLazyQuery */
/* unused harmony export PostDocument */
/* unused harmony export usePostQuery */
/* unused harmony export usePostLazyQuery */
/* unused harmony export PostsDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return usePostsQuery; });
/* unused harmony export usePostsLazyQuery */
/* unused harmony export UserDocument */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useUserQuery; });
/* unused harmony export useUserLazyQuery */
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const PostSnippetFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment PostSnippet on Post {
  id
  author
  content
  likes
  shares
  media
  subs {
    id
    createdAt
    owner {
      id
      username
      avatar
      verified
    }
  }
  creator {
    id
    username
    name
    verified
    avatar
  }
  created_at
  updated_at
}
    `;
const AnyPostResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AnyPostResponse on PostResponse {
  errors {
    field
    message
  }
  post {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;
const AnyUserFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AnyUser on User {
  id
  username
  name
  email
  avatar
  description
  followers
  following
  verified
  permissions
  createdAt
  updatedAt
}
    `;
const AnyUserResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment AnyUserResponse on UserResponse {
  errors {
    field
    message
  }
  user {
    ...AnyUser
  }
}
    ${AnyUserFragmentDoc}`;
const DeleteSubDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation DeleteSub($id: String!, $subid: String!) {
  deleteSub(id: $id, subid: $subid) {
    errors {
      field
      message
    }
    post {
      id
      author
    }
  }
}
    `;

/**
 * __useDeleteSubMutation__
 *
 * To run a mutation, you first call `useDeleteSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSubMutation, { data, loading, error }] = useDeleteSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *      subid: // value for 'subid'
 *   },
 * });
 */
function useDeleteSubMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteSubDocument, baseOptions);
}
const CommentPostDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CommentPost($id: String!, $content: String!) {
  commentPost(id: $id, content: $content) {
    post {
      id
      author
      content
      created_at
      updated_at
    }
  }
}
    `;

/**
 * __useCommentPostMutation__
 *
 * To run a mutation, you first call `useCommentPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentPostMutation, { data, loading, error }] = useCommentPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
function useCommentPostMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CommentPostDocument, baseOptions);
}
const CreatePostDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreatePost($content: String!) {
  createPost(content: $content) {
    ...AnyPostResponse
  }
}
    ${AnyPostResponseFragmentDoc}`;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      content: // value for 'content'
 *   },
 * });
 */
function useCreatePostMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreatePostDocument, baseOptions);
}
const DeletePostDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation DeletePost($id: String!) {
  deletePost(id: $id)
}
    `;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useDeletePostMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeletePostDocument, baseOptions);
}
const FollowDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Follow($id: String!) {
  followUser(id: $id) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;

/**
 * __useFollowMutation__
 *
 * To run a mutation, you first call `useFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followMutation, { data, loading, error }] = useFollowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useFollowMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](FollowDocument, baseOptions);
}
const LikeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Like($id: String!) {
  like(id: $id)
}
    `;

/**
 * __useLikeMutation__
 *
 * To run a mutation, you first call `useLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMutation, { data, loading, error }] = useLikeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useLikeMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LikeDocument, baseOptions);
}
const LoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LoginDocument, baseOptions);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
function useLogoutMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LogoutDocument, baseOptions);
}
const RegisterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](RegisterDocument, baseOptions);
}
const ShareDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Share($id: String!) {
  share(id: $id)
}
    `;

/**
 * __useShareMutation__
 *
 * To run a mutation, you first call `useShareMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShareMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shareMutation, { data, loading, error }] = useShareMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useShareMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ShareDocument, baseOptions);
}
const UnfollowUserDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UnfollowUser($id: String!) {
  unfollowUser(id: $id) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
function useUnfollowUserMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UnfollowUserDocument, baseOptions);
}
const UpdateAccountDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateAccount($private: Boolean!, $avatar: String!, $description: String!, $location: String!, $email: String!, $name: String!, $username: String!) {
  updateAccount(
    private: $private
    avatar: $avatar
    description: $description
    location: $location
    email: $email
    name: $name
    username: $username
  ) {
    ...AnyUserResponse
  }
}
    ${AnyUserResponseFragmentDoc}`;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      private: // value for 'private'
 *      avatar: // value for 'avatar'
 *      description: // value for 'description'
 *      location: // value for 'location'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      username: // value for 'username'
 *   },
 * });
 */
function useUpdateAccountMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateAccountDocument, baseOptions);
}
const UpdatePostDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdatePost($id: String!, $content: String!) {
  updatePost(id: $id, content: $content) {
    ...AnyPostResponse
  }
}
    ${AnyPostResponseFragmentDoc}`;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
function useUpdatePostMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdatePostDocument, baseOptions);
}
const MeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Me {
  me {
    ...AnyUser
  }
}
    ${AnyUserFragmentDoc}`;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */

function useMeQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MeDocument, baseOptions);
}
function useMeLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MeDocument, baseOptions);
}
const PostDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Post($id: String!) {
  post(id: $id) {
    ...PostSnippet
  }
}
    ${PostSnippetFragmentDoc}`;
/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */

function usePostQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](PostDocument, baseOptions);
}
function usePostLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](PostDocument, baseOptions);
}
const PostsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Posts($limit: Int!, $cursor: String) {
  posts(cursor: $cursor, limit: $limit) {
    hasMore
    posts {
      ...PostSnippet
    }
  }
}
    ${PostSnippetFragmentDoc}`;
/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function usePostsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](PostsDocument, baseOptions);
}
function usePostsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](PostsDocument, baseOptions);
}
const UserDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query User($username: String!) {
  user(username: $username) {
    errors {
      field
      message
    }
    user {
      id
      username
      name
      avatar
      description
      followers
      following
      verified
      permissions
      createdAt
      updatedAt
    }
  }
}
    `;
/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */

function useUserQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](UserDocument, baseOptions);
}
function useUserLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](UserDocument, baseOptions);
}

/***/ }),

/***/ "pksY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "rsi9":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"notLogged": "navbar_notLogged__2LHYe",
	"notLogged_signup": "navbar_notLogged_signup__37WVI",
	"notLogged_login": "navbar_notLogged_login__3Y-Ad",
	"menu": "navbar_menu__6paaU",
	"menu_links": "navbar_menu_links__1fLqn",
	"menu_button": "navbar_menu_button__2xvLv",
	"menu_company": "navbar_menu_company__aUYyd",
	"menu_user": "navbar_menu_user__vNRw4",
	"menu_buttons": "navbar_menu_buttons__1em6L",
	"login": "navbar_login__1AGnI",
	"create": "navbar_create__2qjeU",
	"navigation": "navbar_navigation__ZZ97e",
	"navigation_logo": "navbar_navigation_logo__1CwCP",
	"links": "navbar_links__3N7eH",
	"avatar": "navbar_avatar__3lOaO",
	"tooltip": "navbar_tooltip__2OWvU",
	"active": "navbar_active__gFvOx",
	"profile_dropup": "navbar_profile_dropup__3KIVN",
	"profile_dropup_logout": "navbar_profile_dropup_logout__2zGQS",
	"upload": "navbar_upload__2U_HF",
	"dash": "navbar_dash__3paVF",
	"dash_company": "navbar_dash_company__2kU9t",
	"dash_logo": "navbar_dash_logo__iJKkf",
	"dash_pages": "navbar_dash_pages__3LiDJ",
	"dash_active": "navbar_dash_active__YTMYu",
	"mobile": "navbar_mobile__1HayQ",
	"mobile_avatar": "navbar_mobile_avatar__3Ky9B",
	"mobileActive": "navbar_mobileActive__3nNsK",
	"mobile_upload": "navbar_mobile_upload__P_wMk",
	"settings": "navbar_settings__3tdU0",
	"settings_content": "navbar_settings_content__1qRDg",
	"message": "navbar_message__HNClg",
	"message_avatar": "navbar_message_avatar__bk589",
	"messages_pages": "navbar_messages_pages__3hhyu",
	"contacts_filter": "navbar_contacts_filter__2WE3w",
	"contacts": "navbar_contacts__2zWbc",
	"contacts_content": "navbar_contacts_content__2bQHB",
	"contact_item": "navbar_contact_item__3la6G",
	"contact_avatar": "navbar_contact_avatar__VqIvf",
	"contact_names": "navbar_contact_names__1bJkJ",
	"contact_timeStamp": "navbar_contact_timeStamp__2zgcQ",
	"settings_home": "navbar_settings_home__2Nxxy",
	"menu_links_mobile": "navbar_menu_links_mobile__LM_us",
	"dropup": "navbar_dropup__3jcXY"
};


/***/ }),

/***/ "sA37":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"auth_right": "auth_auth_right__3bsfp",
	"auth_go_back": "auth_auth_go_back__1oGqW",
	"auth_form": "auth_auth_form__18Dsn",
	"auth_title": "auth_auth_title__33dTf",
	"auth_form_fullName": "auth_auth_form_fullName__YPP-r",
	"auth_form_username": "auth_auth_form_username__WbmSk",
	"auth_form_email": "auth_auth_form_email__3r6CV",
	"auth_form_password": "auth_auth_form_password__1i7bN",
	"auth_stage": "auth_auth_stage__3dG6f",
	"auth_stage_title": "auth_auth_stage_title__2liyD",
	"auth_stage_description": "auth_auth_stage_description__3lYSf",
	"auth_account_type": "auth_auth_account_type__2tGOe",
	"auth_account_type_title": "auth_auth_account_type_title__dtnpU",
	"auth_account_type_description": "auth_auth_account_type_description__2toMH",
	"alerts": "auth_alerts__1Jw9d",
	"alerts_success": "auth_alerts_success__Adf1R",
	"alerts_upload": "auth_alerts_upload__1qc85",
	"alerts_error": "auth_alerts_error__3JHjW",
	"alerts_info": "auth_alerts_info__24Rn9",
	"loader": "auth_loader__1kqQa",
	"loader_logo": "auth_loader_logo__30CkC",
	"logged": "auth_logged__3RXze",
	"logged_title": "auth_logged_title__3rdMo",
	"logged_message": "auth_logged_message__ObNqk",
	"logged_links": "auth_logged_links__1m_Fn",
	"logged_create": "auth_logged_create__CBQEN",
	"logged_login": "auth_logged_login__6QWJd",
	"post_loader": "auth_post_loader__2eRJy",
	"shimmer": "auth_shimmer__1CcVB",
	"post_loader_author": "auth_post_loader_author__1yBhE",
	"post_loader_avatar": "auth_post_loader_avatar__3aHys",
	"post_loader_name": "auth_post_loader_name__3kMq3",
	"post_loader_username": "auth_post_loader_username__1aJ5h",
	"post_loader_description": "auth_post_loader_description__XYuLQ",
	"logged_text": "auth_logged_text__zR3f7"
};


/***/ }),

/***/ "vdEC":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("e+GP");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yExG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "z4BS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("Wecs");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ })

/******/ });