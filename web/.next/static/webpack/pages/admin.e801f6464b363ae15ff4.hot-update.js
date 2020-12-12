webpackHotUpdate_N_E("pages/admin",{

/***/ "../node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "../node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "../node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "../node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "../node_modules/next/dist/client/route-loader.js":
false,

/***/ "../node_modules/next/dist/client/router.js":
false,

/***/ "../node_modules/next/dist/client/with-router.js":
false,

/***/ "../node_modules/next/dist/compiled/path-to-regexp/index.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/path-match.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "../node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "../node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "../node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "../node_modules/react-is/index.js":
false,

/***/ "./src/hooks/useIsAuthed.ts":
/*!**********************************!*\
  !*** ./src/hooks/useIsAuthed.ts ***!
  \**********************************/
/*! exports provided: useIsAuthed, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useIsAuthed", function() { return useIsAuthed; });
/* harmony import */ var _pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pebblo/frontend/src/generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _withApolloHook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withApolloHook */ "./src/hooks/withApolloHook.tsx");
var _s = $RefreshSig$();



function useIsAuthed(server) {
  _s();

  var _useMeQuery = Object(_pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useMeQuery"])(),
      data = _useMeQuery.data,
      loading = _useMeQuery.loading;

  if (!loading && !data.me) {
    if (server) {
      server.writeHead(302, {
        Location: "/login"
      });
      server.end();
    }
  }
}

_s(useIsAuthed, "m1hUDmmcxjNF1d/CmlKrRoQEru4=", false, function () {
  return [_pebblo_frontend_src_generated_graphql__WEBPACK_IMPORTED_MODULE_0__["useMeQuery"]];
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_withApolloHook__WEBPACK_IMPORTED_MODULE_1__["withApollo"])({
  ssr: true
})(useIsAuthed));

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUlzQXV0aGVkLnRzIl0sIm5hbWVzIjpbInVzZUlzQXV0aGVkIiwic2VydmVyIiwidXNlTWVRdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwibWUiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsIndpdGhBcG9sbG8iLCJzc3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBR08sU0FBU0EsV0FBVCxDQUFxQkMsTUFBckIsRUFBOEM7QUFBQTs7QUFBQSxvQkFDekJDLHlGQUFVLEVBRGU7QUFBQSxNQUMzQ0MsSUFEMkMsZUFDM0NBLElBRDJDO0FBQUEsTUFDckNDLE9BRHFDLGVBQ3JDQSxPQURxQzs7QUFFbkQsTUFBRyxDQUFDQSxPQUFELElBQVksQ0FBQ0QsSUFBSSxDQUFDRSxFQUFyQixFQUF5QjtBQUN2QixRQUFHSixNQUFILEVBQVc7QUFDVEEsWUFBTSxDQUFDSyxTQUFQLENBQWlCLEdBQWpCLEVBQXNCO0FBQ3BCQyxnQkFBUSxFQUFFO0FBRFUsT0FBdEI7QUFHQU4sWUFBTSxDQUFDTyxHQUFQO0FBQ0Q7QUFDRjtBQUNGOztHQVZlUixXO1VBQ1lFLGlGOzs7QUFXYk8saUlBQVUsQ0FBQztBQUFFQyxLQUFHLEVBQUU7QUFBUCxDQUFELENBQVYsQ0FBMEJWLFdBQTFCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4uZTgwMWY2NDY0YjM2M2FlMTVmZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZU1lUXVlcnkgfSBmcm9tIFwiQHBlYmJsby9mcm9udGVuZC9zcmMvZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gXCIuL3dpdGhBcG9sbG9Ib29rXCI7XHJcbmltcG9ydCB7IFNlcnZlclJlc3BvbnNlIH0gZnJvbSBcImh0dHBcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJc0F1dGhlZChzZXJ2ZXI/OiBTZXJ2ZXJSZXNwb25zZSkge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlTWVRdWVyeSgpO1xyXG4gIGlmKCFsb2FkaW5nICYmICFkYXRhLm1lKSB7XHJcbiAgICBpZihzZXJ2ZXIpIHtcclxuICAgICAgc2VydmVyLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgICBMb2NhdGlvbjogXCIvbG9naW5cIlxyXG4gICAgICB9KVxyXG4gICAgICBzZXJ2ZXIuZW5kKClcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oeyBzc3I6IHRydWUgfSkodXNlSXNBdXRoZWQpOyJdLCJzb3VyY2VSb290IjoiIn0=