webpackHotUpdate("static/development/pages/index.js",{

/***/ "./sections/home-section/worked-with/index.js":
/*!****************************************************!*\
  !*** ./sections/home-section/worked-with/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_company_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/company-card */ "./components/company-card/index.js");
/* harmony import */ var _WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkedWith.styled */ "./sections/home-section/worked-with/WorkedWith.styled.js");
var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/sections/home-section/worked-with/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var COMPANY_DATA = [{
  title: 'Canada Pension Plan Investment Board',
  description: "\u201CMDC identified and realized vendor cost savings of 12% of our spend, and then developed a target state organization with capabilities to effectively manage market data products, consumption, costs and vendors\u201D",
  role: 'Marc Odho – Head of Data Management',
  company: 'PSP',
  imageUrl: 'cppib-carousel'
}, {
  title: 'PSP Investissements',
  description: "\u201CThe team at Market Data Company is great to work with. Each consultant has their own strengths and weaknesses, and are great at what they do. In my book, I highly recommend the entire team at MDC.\u201D",
  role: 'Alex DiCristofano, Director of Market Data',
  company: 'Aviva',
  imageUrl: 'psp-carousel'
}, {
  title: 'Aviva Investors',
  description: "\u201CRobert and his team brought the right expertise to the job, making the transitional program easier to manage. MDC\u2019s approach to market data supported our Global operations and provided a clear line of sight to our vendor spend.\u201D",
  role: 'Kelly McManis, Head of Operations',
  company: 'Swiss Re',
  imageUrl: 'aviva-carousel'
}, {
  title: 'Swiss Re',
  description: "\u201CMDC\u2019s product Kiaro\u2019s overspend report clearly articulated where Bloomberg data was being replicated within our technology envirorment. As a result we closed down several jobs that lead to $450,000 in cost savings.\u201D",
  role: 'Eric Kemeny, Vice President, Group Asset Management',
  company: 'CPPIB',
  imageUrl: 'swiss-re-carousel'
}];

var WorkedWith = function WorkedWith() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      activeIndex = _useState[0],
      setActiveIndex = _useState[1];

  var animating = false;

  var onExiting = function onExiting() {
    animating = true;
  };

  var onExited = function onExited() {
    animating = false;
  };

  var next = function next() {
    if (animating) {
      return;
    }

    var nextIndex = activeIndex === COMPANY_DATA.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var carouselItems = COMPANY_DATA.map(function (item) {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      onExiting: onExiting,
      onExited: onExited,
      key: item.company,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_components_company_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: item.title,
      description: item.description,
      role: item.role,
      company: item.company,
      imageUrl: item.imageUrl,
      onNext: next,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }));
  });
  return __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["WorkedWithWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Who we\u2019ve worked with"), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Our consultants are industry experts in market and reference data products, as well as investment management solutions. We deliver results that make a difference."), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: function previous() {},
    interval: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, carouselItems)), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/cppib.png",
    srcSet: "/static/images/cppib@1x.png 1x, /static/images/cppib@2x.png 2x, /static/images/cppib@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/psp.png",
    srcSet: "/static/images/psp@1x.png 1x, /static/images/psp@2x.png 2x, /static/images/psp@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/aviva.png",
    srcSet: "/static/images/aviva@1x.png 1x, /static/images/aviva@2x.png 2x, /static/images/aviva@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("img", {
    src: "/static/images/swiss-re.png",
    srcSet: "/static/images/swiss-re@1x.png 1x, /static/images/swiss-re@2x.png 2x, /static/images/swiss-re@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkedWith);

/***/ })

})
//# sourceMappingURL=index.js.38b4376f892c0b935690.hot-update.js.map