webpackHotUpdate_N_E("pages/index",{

/***/ "./sections/home-section/landing/Landing.styled.js":
/*!*********************************************************!*\
  !*** ./sections/home-section/landing/Landing.styled.js ***!
  \*********************************************************/
/*! exports provided: LandingWrapper, ContentWrapper, Title, Description, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingWrapper", function() { return LandingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components-breakpoint */ "./node_modules/styled-components-breakpoint/dist/esm/index.js");


var _templateObject, _templateObject2, _templateObject3;



var LandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Landingstyled__LandingWrapper",
  componentId: "t8svsq-0"
})(["background-image:url('/static/gifs/financial-business-chart.gif');background-size:cover;height:100%;"]);
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Landingstyled__ContentWrapper",
  componentId: "t8svsq-1"
})(["max-width:1200px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;flex:1;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Landingstyled__Title",
  componentId: "t8svsq-2"
})(["font-family:", ";font-size:42px;line-height:44px;color:", ";padding:160px 0 12px 0;margin-bottom:16px;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.white;
}, Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 57px;\n    line-height: 64px;\n  "]))));
var Description = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "t8svsq-3"
})(["font-family:", ";font-weight:400;font-size:21px;line-height:24px;color:", ";margin:0 0 42px 0;text-align:left;max-width:720px;", ""], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.white;
}, Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 28px;\n    line-height: 32px;\n  "]))));
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Landingstyled__ButtonWrapper",
  componentId: "t8svsq-4"
})(["display:flex;flex-direction:row;justify-content:space-between;max-width:340px;margin:0 0 38px 0;", ""], Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    \tmax-width: 380px;\n  "]))));

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvTGFuZGluZy5zdHlsZWQuanMiXSwibmFtZXMiOlsiTGFuZGluZ1dyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50V3JhcHBlciIsIlRpdGxlIiwiaDEiLCJwcm9wcyIsInRoZW1lIiwiZm9udHMiLCJncmFwaGlrQm9sZCIsImNvbG9ycyIsIndoaXRlIiwiYnJlYWtwb2ludCIsIkRlc2NyaXB0aW9uIiwiZmluYW5jaWVyIiwiQnV0dG9uV3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRHQUFwQjtBQU1BLElBQU1DLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnR0FBcEI7QUFVQSxJQUFNRSxLQUFLLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEsbUhBQ0YsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxLQUFaLENBQWtCQyxXQUE3QjtBQUFBLENBREUsRUFJUixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLEtBQTlCO0FBQUEsQ0FKUSxFQU9mQyw0RUFBVSxDQUFDLFNBQUQsQ0FQSyxrTUFBWDtBQWFBLElBQU1DLFdBQVcsR0FBR1oseURBQU0sQ0FBQ0ksRUFBVjtBQUFBO0FBQUE7QUFBQSwySUFDUixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBQVosQ0FBa0JNLFNBQTdCO0FBQUEsQ0FEUSxFQUtkLFVBQUNSLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsS0FBOUI7QUFBQSxDQUxjLEVBU3JCQyw0RUFBVSxDQUFDLFNBQUQsQ0FUVyxvTUFBakI7QUFlQSxJQUFNRyxhQUFhLEdBQUdkLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsNkdBTXZCVSw0RUFBVSxDQUFDLFNBQUQsQ0FOYSwrS0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDM3ZmEzMmI1NzQzNDBlYWM0NDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgTGFuZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvZ2lmcy9maW5hbmNpYWwtYnVzaW5lc3MtY2hhcnQuZ2lmJyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdGhlaWdodDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiA0MnB4O1xuXHRsaW5lLWhlaWdodDogNDRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRwYWRkaW5nOiAxNjBweCAwIDEycHggMDtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiA1N3B4O1xuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRtYXJnaW46IDAgMCA0MnB4IDA7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdG1heC13aWR0aDogNzIwcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdG1heC13aWR0aDogMzQwcHg7XG5cdG1hcmdpbjogMCAwIDM4cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgXHRtYXgtd2lkdGg6IDM4MHB4O1xuICBgfVxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==