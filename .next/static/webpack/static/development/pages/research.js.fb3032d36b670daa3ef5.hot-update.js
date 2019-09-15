webpackHotUpdate("static/development/pages/research.js",{

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/components/modal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var customStyles = {
  content: {
    padding: '20px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '724px',
    maxHeight: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.25' // margin: '20px',
    // backgroundColor: 'none'

  }
};

var MDCModal = function MDCModal(props) {
  var children = props.children,
      modalVisible = props.modalVisible,
      onRequestClose = props.onRequestClose;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('body');
  }, []);
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: modalVisible,
    onRequestClose: onRequestClose,
    style: customStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (MDCModal);

/***/ })

})
//# sourceMappingURL=research.js.fb3032d36b670daa3ef5.hot-update.js.map