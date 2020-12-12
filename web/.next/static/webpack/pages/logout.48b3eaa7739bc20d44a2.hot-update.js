webpackHotUpdate_N_E("pages/logout",{

/***/ "./src/pages/logout.tsx":
/*!******************************!*\
  !*** ./src/pages/logout.tsx ***!
  \******************************/
/*! exports provided: Logout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony import */ var C_Users_root_Desktop_dev_frontend_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "../node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ~/generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _hooks_withApolloHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/hooks/withApolloHook */ "./src/hooks/withApolloHook.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\root\\Desktop\\dev\\frontend\\web\\web\\src\\pages\\logout.tsx",
    _s = $RefreshSig$();




function Logout() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useMeQuery"])(),
      data = _useMeQuery.data;

  var _useLogoutMutation = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useLogoutMutation"])(),
      _useLogoutMutation2 = Object(C_Users_root_Desktop_dev_frontend_web_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useLogoutMutation, 1),
      logoutMutation = _useLogoutMutation2[0];

  if (data === null || data === void 0 ? void 0 : data.me) {
    logoutMutation();
    router.push("/");
  } else {
    router.push("/home");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(Logout, "dtb6yKpH25eGkwTFlYbThpUMsiE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"], _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useMeQuery"], _generated_graphql__WEBPACK_IMPORTED_MODULE_2__["useLogoutMutation"]];
});

_c = Logout;
/* harmony default export */ __webpack_exports__["default"] = (Object(_hooks_withApolloHook__WEBPACK_IMPORTED_MODULE_3__["withApollo"])({
  ssr: true
})(Logout));

var _c;

$RefreshReg$(_c, "Logout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ291dC50c3giXSwibmFtZXMiOlsiTG9nb3V0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTWVRdWVyeSIsImRhdGEiLCJ1c2VMb2dvdXRNdXRhdGlvbiIsImxvZ291dE11dGF0aW9uIiwibWUiLCJwdXNoIiwid2l0aEFwb2xsbyIsInNzciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUVPLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsb0JBRU5DLHFFQUFVLEVBRko7QUFBQSxNQUVmQyxJQUZlLGVBRWZBLElBRmU7O0FBQUEsMkJBR0VDLDRFQUFpQixFQUhuQjtBQUFBO0FBQUEsTUFHaEJDLGNBSGdCOztBQUl2QixNQUFHRixJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRUcsRUFBVCxFQUFhO0FBQ1hELGtCQUFjO0FBQ2RMLFVBQU0sQ0FBQ08sSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUhELE1BR087QUFDTFAsVUFBTSxDQUFDTyxJQUFQLENBQVksT0FBWjtBQUNEOztBQUNELHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUdEOztHQWJlUixNO1VBQ0NFLHFELEVBQ0VDLDZELEVBQ1FFLG9FOzs7S0FIWEwsTTtBQWVEUyx1SUFBVSxDQUFDO0FBQUVDLEtBQUcsRUFBRTtBQUFQLENBQUQsQ0FBVixDQUEwQlYsTUFBMUIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dvdXQuNDhiM2VhYTc3MzliYzIwZDQ0YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUFwb2xsb0NsaWVudCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VMb2dvdXRNdXRhdGlvbiwgdXNlTWVRdWVyeSB9IGZyb20gXCJ+L2dlbmVyYXRlZC9ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHdpdGhBcG9sbG8gfSBmcm9tIFwifi9ob29rcy93aXRoQXBvbGxvSG9va1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMb2dvdXQoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VNZVF1ZXJ5KCk7XHJcbiAgY29uc3QgW2xvZ291dE11dGF0aW9uXSA9IHVzZUxvZ291dE11dGF0aW9uKClcclxuICBpZihkYXRhPy5tZSkge1xyXG4gICAgbG9nb3V0TXV0YXRpb24oKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPHA+PC9wPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShMb2dvdXQpOyJdLCJzb3VyY2VSb290IjoiIn0=