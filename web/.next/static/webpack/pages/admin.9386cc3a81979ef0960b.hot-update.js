webpackHotUpdate_N_E("pages/admin",{

/***/ "./src/hooks/useIsAuth.ts":
/*!********************************!*\
  !*** ./src/hooks/useIsAuth.ts ***!
  \********************************/
/*! exports provided: useIsAuth, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsAuth", function() { return useIsAuth; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pebblo/frontend/src/generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _withApolloHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withApolloHook */ "./src/hooks/withApolloHook.tsx");
var _s = $RefreshSig$();





var useIsAuth = function useIsAuth() {
  _s();

  var _useMeQuery = Object(_pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useMeQuery"])(),
      data = _useMeQuery.data,
      loading = _useMeQuery.loading;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!loading && !(data === null || data === void 0 ? void 0 : data.me)) {
      router.replace("/login?next=".concat(router.asPath));
    }
  }, [loading, data, router]);
};

_s(useIsAuth, "HFzD9whMdVlJlXTSiGTGw6bEFlE=", false, function () {
  return [_pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useMeQuery"], next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_withApolloHook__WEBPACK_IMPORTED_MODULE_3__["withApollo"])({
  ssr: true
})(useIsAuth));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/hooks/useIsAuthed.ts":
false,

/***/ "./src/pages/admin/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/admin/index.tsx ***!
  \***********************************/
/*! exports provided: Page, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useIsAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~/hooks/useIsAuth */ "./src/hooks/useIsAuth.ts");
/* harmony import */ var _hooks_withApolloHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/hooks/withApolloHook */ "./src/hooks/withApolloHook.tsx");


var _jsxFileName = "C:\\Users\\root\\Desktop\\dev\\frontend\\web\\web\\src\\pages\\admin\\index.tsx",
    _s = $RefreshSig$();



function Page() {
  _s();

  // useIsAuthed();
  Object(_hooks_useIsAuth__WEBPACK_IMPORTED_MODULE_1__["useIsAuth"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
    children: "Hello earthling"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_s(Page, "MnYcQBA1KERJn0A459svyPts3tU=", false, function () {
  return [_hooks_useIsAuth__WEBPACK_IMPORTED_MODULE_1__["useIsAuth"]];
});

_c = Page;
/* harmony default export */ __webpack_exports__["default"] = (Object(_hooks_withApolloHook__WEBPACK_IMPORTED_MODULE_2__["withApollo"])({
  ssr: true
})(Page));

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUlzQXV0aC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FkbWluL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJ1c2VJc0F1dGgiLCJ1c2VNZVF1ZXJ5IiwiZGF0YSIsImxvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJtZSIsInJlcGxhY2UiLCJhc1BhdGgiLCJ3aXRoQXBvbGxvIiwic3NyIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxvQkFDREMseUZBQVUsRUFEVDtBQUFBLE1BQ25CQyxJQURtQixlQUNuQkEsSUFEbUI7QUFBQSxNQUNiQyxPQURhLGVBQ2JBLE9BRGE7O0FBRTNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2pCLFFBQUcsQ0FBQ0gsT0FBRCxJQUFZLEVBQUNELElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFSyxFQUFQLENBQWYsRUFBMEI7QUFDckJILFlBQU0sQ0FBQ0ksT0FBUCx1QkFBOEJKLE1BQU0sQ0FBQ0ssTUFBckM7QUFDRDtBQUNGLEdBSlEsRUFJTixDQUFDTixPQUFELEVBQVVELElBQVYsRUFBZ0JFLE1BQWhCLENBSk0sQ0FBVDtBQUtELENBUkk7O0dBQU1KLFM7VUFDaUJDLGlGLEVBQ1hJLHFEOzs7QUFRSkssaUlBQVUsQ0FBQztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFELENBQVYsQ0FBMEJYLFNBQTFCLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFFQTtBQUVPLFNBQVNZLElBQVQsR0FBZ0I7QUFBQTs7QUFDckI7QUFDQVosb0VBQVM7QUFDVCxzQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0dBTmVZLEk7VUFFZFosMEQ7OztLQUZjWSxJO0FBUURGLHVJQUFVLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUFWLENBQTBCQyxJQUExQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLjkzODZjYzNhODE5NzllZjA5NjBiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiQHBlYmJsby9mcm9udGVuZC9zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCIuL3dpdGhBcG9sbG9Ib29rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlSXNBdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VNZVF1ZXJ5KCk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRcdGlmKCFsb2FkaW5nICYmICFkYXRhPy5tZSkge1xyXG4gICAgICAgIHJvdXRlci5yZXBsYWNlKGAvbG9naW4/bmV4dD0ke3JvdXRlci5hc1BhdGh9YCk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtsb2FkaW5nLCBkYXRhLCByb3V0ZXJdKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSkodXNlSXNBdXRoKTsiLCJpbXBvcnQgeyB1c2VJc0F1dGggfSBmcm9tIFwifi9ob29rcy91c2VJc0F1dGhcIjtcclxuaW1wb3J0IHsgdXNlSXNBdXRoZWQgfSBmcm9tIFwifi9ob29rcy91c2VJc0F1dGhlZFwiXHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwifi9ob29rcy93aXRoQXBvbGxvSG9va1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBhZ2UoKSB7XHJcbiAgLy8gdXNlSXNBdXRoZWQoKTtcclxuICB1c2VJc0F1dGgoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8cD5IZWxsbyBlYXJ0aGxpbmc8L3A+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKHsgc3NyOiB0cnVlIH0pKFBhZ2UpOyJdLCJzb3VyY2VSb290IjoiIn0=