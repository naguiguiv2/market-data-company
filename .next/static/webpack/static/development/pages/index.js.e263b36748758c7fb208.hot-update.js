webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button/button.styled.js":
/*!********************************************!*\
  !*** ./components/button/button.styled.js ***!
  \********************************************/
/*! exports provided: ButtonWrapper, ButtonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components-breakpoint */ "./node_modules/styled-components-breakpoint/dist/esm/index.js");


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 16px;\n    line-height: 24px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    width: 180px;\n    height: 48px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getBackgroundColor = function getBackgroundColor(props) {
  if (props.isDefault) {
    return props.theme.colors.mdcPurple;
  } else {
    return props.theme.colors.white;
  }
};

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "buttonstyled__ButtonWrapper",
  componentId: "ljf8l9-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:160px;height:40px;background-color:", ";border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border:none;cursor:pointer;&:hover{background-color:", ";box-shadow:", ";transform:translateY(-1px);transition:all 0.15s ease;}", ""], function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return props.isDefault ? '0 2px 8px 0 rgba(0, 0, 0, 0.15)' : '0 8px 16px 2px rgba(0, 0, 0, 0.15)';
}, Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject()));
var ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "buttonstyled__ButtonText",
  componentId: "ljf8l9-1"
})(["font-family:", ";font-size:14px;line-height:14px;letter-spacing:0.25px;color:", ";", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.isDefault ? props.theme.colors.white : props.theme.colors.black;
}, Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject2()));

/***/ })

})
//# sourceMappingURL=index.js.e263b36748758c7fb208.hot-update.js.map