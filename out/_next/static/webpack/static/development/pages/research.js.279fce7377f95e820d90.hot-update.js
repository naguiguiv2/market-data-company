webpackHotUpdate("static/development/pages/research.js",{

/***/ "./sections/research-section/case-studies/CaseStudies.styled.js":
/*!**********************************************************************!*\
  !*** ./sections/research-section/case-studies/CaseStudies.styled.js ***!
  \**********************************************************************/
/*! exports provided: CaseStudyWrapper, CaseStudyTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyWrapper", function() { return CaseStudyWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseStudyTitle", function() { return CaseStudyTitle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components-breakpoint */ "./node_modules/styled-components-breakpoint/dist/esm/index.js");


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



var CaseStudyWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "CaseStudiesstyled__CaseStudyWrapper",
  componentId: "sc-118xv7t-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:80px;", ""], Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject()));
var CaseStudyTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "CaseStudiesstyled__CaseStudyTitle",
  componentId: "sc-118xv7t-1"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 25px 0px;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, Object(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_2__["default"])('desktop')(_templateObject2()));

/***/ }),

/***/ "./sections/research-section/case-studies/index.js":
/*!*********************************************************!*\
  !*** ./sections/research-section/case-studies/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-card */ "./components/animated-card/index.js");
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/colors */ "./assets/colors.js");
/* harmony import */ var _CaseStudies_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CaseStudies.styled */ "./sections/research-section/case-studies/CaseStudies.styled.js");
var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/sections/research-section/case-studies/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CaseStudies = function CaseStudies(_ref) {
  var _onClick = _ref.onClick;
  return __jsx(_CaseStudies_styled__WEBPACK_IMPORTED_MODULE_3__["CaseStudyWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(_CaseStudies_styled__WEBPACK_IMPORTED_MODULE_3__["CaseStudyTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Case Studies"), __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "MDC Case Studies",
    description: "WE RECAP OUR STRATEGIES and financial outcomes for the work we've done for IGM, CPPIB, Fiera, PSP and Scotiabank. For example, we analyzed the market data spend trend for IGM, and realized that restructuring the market data management function and executing the identified savings strategies would decrease IGM\u2019s projected market data spend by $2.7MM in 2021, a $4.5MM  3-year cumulative decline.",
    notchColor: _assets_colors__WEBPACK_IMPORTED_MODULE_2__["RED"],
    onClick: function onClick() {
      return _onClick('caseStudies');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CaseStudies);

/***/ }),

/***/ "./sections/research-section/index.js":
/*!********************************************!*\
  !*** ./sections/research-section/index.js ***!
  \********************************************/
/*! exports provided: CaseStudies, Landing, Research, Survey, WhitePaper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _case_studies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case-studies */ "./sections/research-section/case-studies/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaseStudies", function() { return _case_studies__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing */ "./sections/research-section/landing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return _landing__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./research */ "./sections/research-section/research/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Research", function() { return _research__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _survey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey */ "./sections/research-section/survey/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return _survey__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _white_paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./white-paper */ "./sections/research-section/white-paper/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhitePaper", function() { return _white_paper__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ })

})
//# sourceMappingURL=research.js.279fce7377f95e820d90.hot-update.js.map