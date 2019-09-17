webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/home-section/why-mdc/index.js":
/*!************************************************!*\
  !*** ./sections/home-section/why-mdc/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhyMdc.styled */ "./sections/home-section/why-mdc/WhyMdc.styled.js");
var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/sections/home-section/why-mdc/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var descriptionData = [{
  title: 'The right people, solving the right problems with passion',
  description: 'Our people bring a mix of expertise to solve problems with a different, more dedicated mindset, devising powerful tools and solutions for our clients’ toughest challenges.'
}, {
  title: 'Highly effective market data governance structure',
  description: 'Our approach brings together a highly effective discipline that focuses on process, controls and process.'
}, {
  title: 'We’ve saved upwards of 35% on total data spend for our clients',
  description: 'At the end of the day, it’s our clients bottom line that we take care of, and the results speak for themselves.'
}, {
  title: 'Market data benchmarking with proven results',
  description: 'Results are predicated by our strengths surrounding benchmarking Market Data Vendors.'
}];

var Card = function Card(props) {
  var title = props.title,
      description = props.description;
  return __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitleWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitleIcon"], {
    src: "/static/images/checkmark.png",
    srcSet: "/static/images/checkmark@1x.png 1x, /static/images/checkmark@2x.png 2x, /static/images/checkmark@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title)), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, description));
};

var WhyMdc = function WhyMdc() {
  var renderDescription = function renderDescription() {
    return descriptionData.map(function (data) {
      var title = data.title,
          description = data.description;
      return __jsx(Card, {
        key: title,
        title: title,
        description: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      });
    });
  };

  return __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["WhyMdcWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Why Market Data Company?"), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "From inception, our focus has been on the complexities of market data and the critical third-party relationships built through data providers within the Capital Markets and Wealth Management industries.")), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, renderDescription()));
};

/* harmony default export */ __webpack_exports__["default"] = (WhyMdc);

/***/ })

})
//# sourceMappingURL=index.js.48e5a5778e14f70c0d86.hot-update.js.map