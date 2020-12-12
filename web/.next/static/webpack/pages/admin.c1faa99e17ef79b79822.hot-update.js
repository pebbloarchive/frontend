webpackHotUpdate_N_E("pages/admin",{

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

  if (!loading && (data === null || data === void 0 ? void 0 : data.me) === null) {
    if (server) {
      server.writeHead(302, {
        Location: "/login"
      });
      server.end();
    }
  }

  console.log(loading, data);
  return [loading, data];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZUlzQXV0aGVkLnRzIl0sIm5hbWVzIjpbInVzZUlzQXV0aGVkIiwic2VydmVyIiwidXNlTWVRdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwibWUiLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCIsImNvbnNvbGUiLCJsb2ciLCJ3aXRoQXBvbGxvIiwic3NyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUdPLFNBQVNBLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQThDO0FBQUE7O0FBQUEsb0JBQ3pCQyx5RkFBVSxFQURlO0FBQUEsTUFDM0NDLElBRDJDLGVBQzNDQSxJQUQyQztBQUFBLE1BQ3JDQyxPQURxQyxlQUNyQ0EsT0FEcUM7O0FBRW5ELE1BQUcsQ0FBQ0EsT0FBRCxJQUFZLENBQUFELElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFRSxFQUFOLE1BQWEsSUFBNUIsRUFBa0M7QUFDaEMsUUFBR0osTUFBSCxFQUFXO0FBQ1RBLFlBQU0sQ0FBQ0ssU0FBUCxDQUFpQixHQUFqQixFQUFzQjtBQUNwQkMsZ0JBQVEsRUFBRTtBQURVLE9BQXRCO0FBR0FOLFlBQU0sQ0FBQ08sR0FBUDtBQUNEO0FBQ0Y7O0FBQ0RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixPQUFaLEVBQXFCRCxJQUFyQjtBQUNBLFNBQU8sQ0FBQ0MsT0FBRCxFQUFVRCxJQUFWLENBQVA7QUFDRDs7R0FaZUgsVztVQUNZRSxpRjs7O0FBYWJTLGlJQUFVLENBQUM7QUFBRUMsS0FBRyxFQUFFO0FBQVAsQ0FBRCxDQUFWLENBQTBCWixXQUExQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluLmMxZmFhOTllMTdlZjc5Yjc5ODIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VNZVF1ZXJ5IH0gZnJvbSBcIkBwZWJibG8vZnJvbnRlbmQvc3JjL2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwiLi93aXRoQXBvbGxvSG9va1wiO1xyXG5pbXBvcnQgeyBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gXCJodHRwXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSXNBdXRoZWQoc2VydmVyPzogU2VydmVyUmVzcG9uc2UpIHtcclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZU1lUXVlcnkoKTtcclxuICBpZighbG9hZGluZyAmJiBkYXRhPy5tZSA9PT0gbnVsbCkge1xyXG4gICAgaWYoc2VydmVyKSB7XHJcbiAgICAgIHNlcnZlci53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgICAgTG9jYXRpb246IFwiL2xvZ2luXCJcclxuICAgICAgfSlcclxuICAgICAgc2VydmVyLmVuZCgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKGxvYWRpbmcsIGRhdGEpXHJcbiAgcmV0dXJuIFtsb2FkaW5nLCBkYXRhXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KSh1c2VJc0F1dGhlZCk7Il0sInNvdXJjZVJvb3QiOiIifQ==