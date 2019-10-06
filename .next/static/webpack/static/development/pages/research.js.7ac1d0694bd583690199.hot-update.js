webpackHotUpdate("static/development/pages/research.js",{

/***/ "./sections/research-section/white-paper/WhitePaper.styled.js":
/*!********************************************************************!*\
  !*** ./sections/research-section/white-paper/WhitePaper.styled.js ***!
  \********************************************************************/
/*! exports provided: WhitePaperWrapper, WhitePaperTitle, CardContentContainer, CardWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitePaperWrapper", function() { return WhitePaperWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhitePaperTitle", function() { return WhitePaperTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentContainer", function() { return CardContentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components-breakpoint */ "./node_modules/styled-components-breakpoint/dist/esm/index.js");


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 0;\n    &:last-child {\n      margin-right: 0;\n    }\n    flex: 0 1 auto;\n    &:first-child {\n      padding-left: 0;\n    }\n    &:nth-child(4) {\n      padding-left: 0; \n    }\n    padding: 10px 5px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex-direction: row;\n    flex-wrap: wrap;\n    margin-bottom: 35px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    font-size: 36px;\n    line-height: 48px;\n    margin: 0 0 34px 0px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin-bottom: 100px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var WhitePaperWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WhitePaperstyled__WhitePaperWrapper",
  componentId: "sc-137t1xd-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:80px;", ""], Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject()));
var WhitePaperTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "WhitePaperstyled__WhitePaperTitle",
  componentId: "sc-137t1xd-1"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 25px 0px;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject2()));
var CardContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WhitePaperstyled__CardContentContainer",
  componentId: "sc-137t1xd-2"
})(["display:flex;flex-direction:column;", ""], Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('tablet')(_templateObject3()));
var CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "WhitePaperstyled__CardWrapper",
  componentId: "sc-137t1xd-3"
})(["margin-bottom:20px;", ""], Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject4()));

/***/ }),

/***/ "./sections/research-section/white-paper/index.js":
/*!********************************************************!*\
  !*** ./sections/research-section/white-paper/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-card */ "./components/animated-card/index.js");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/colors */ "./assets/colors.js");
/* harmony import */ var _WhitePaper_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WhitePaper.styled */ "./sections/research-section/white-paper/WhitePaper.styled.js");
var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/sections/research-section/white-paper/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var WhitePaper = function WhitePaper(_ref) {
  var _onClick = _ref.onClick;
  return __jsx(_WhitePaper_styled__WEBPACK_IMPORTED_MODULE_3__["WhitePaperWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_WhitePaper_styled__WEBPACK_IMPORTED_MODULE_3__["WhitePaperTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "White Papers"), __jsx(_WhitePaper_styled__WEBPACK_IMPORTED_MODULE_3__["CardContentContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_WhitePaper_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Uncovering the FRTB & Non-Modellable Risk Factors",
    description: "HARNESSING DATA is a critical element in complying with the Fundamental Review of the Trading Book (FRTB) regulation. Banks are obliged to grasp incremental data requirements against their existing data calculation models and calculators. Banks will need to identify whether their risk factors can be modelled or not ...",
    notchColor: _assets_colors__WEBPACK_IMPORTED_MODULE_2__["PINK"],
    onClick: function onClick() {
      return _onClick('riskFactors');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WhitePaper);

/***/ })

})
//# sourceMappingURL=research.js.7ac1d0694bd583690199.hot-update.js.map