webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _sections_home_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/home-section */ "./sections/home-section/index.js");
/* harmony import */ var _utils_pdfMapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/pdfMapper */ "./utils/pdfMapper.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/validator */ "./utils/validator.js");
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/apiService */ "./services/apiService.js");
/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/useStore */ "./store/useStore.js");
/* harmony import */ var _store_actionTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actionTypes */ "./store/actionTypes.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styled-components-breakpoint */ "./node_modules/styled-components-breakpoint/dist/esm/index.js");




var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



 // Utils







var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1cvwks4-0"
})(["max-width:1200px;padding:0 20px;margin:0 auto;"]);

var Home = function Home() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      modalVisible = _useState[0],
      setModalVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      hasError = _useState2[0],
      setHasError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      emailSent = _useState3[0],
      setEmailSent = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      pdfForm = _useState4[0],
      setPdfForm = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    firstName: '',
    company: '',
    email: ''
  }),
      form = _useState5[0],
      setFormValues = _useState5[1]; // Hooks to save the users form data


  var _useStore = Object(_store_useStore__WEBPACK_IMPORTED_MODULE_10__["useStore"])(),
      state = _useStore.state,
      dispatch = _useStore.dispatch;

  var saveUser = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (formValues) {
    return dispatch({
      type: _store_actionTypes__WEBPACK_IMPORTED_MODULE_11__["USER_SIGNED_UP"],
      payload: formValues
    });
  }, [dispatch]);

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_services_apiService__WEBPACK_IMPORTED_MODULE_9__["sendEmail"])(form);

            case 3:
              res = _context.sent;

              if (res.error) {
                setHasError(true);
              } else {
                // Save user form to store
                saveUser({
                  name: form.firstName,
                  company: form.company,
                  email: form.email
                });
                setEmailSent(true);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setHasError(true);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  var updateField = function updateField(e) {
    setFormValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e.target.name, e.target.value)));
  };

  var onModalClose = function onModalClose() {
    setModalVisible(false);
    setEmailSent(false);
  };

  var openModal = function openModal(researchForm) {
    setModalVisible(true);
    setPdfForm(_utils_pdfMapper__WEBPACK_IMPORTED_MODULE_7__["default"][researchForm]);
  };

  var isDisabled = !form.firstName && !Object(_utils_validator__WEBPACK_IMPORTED_MODULE_8__["validateEmail"])(form.email);
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_6__["Landing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    modalVisible: modalVisible,
    onRequestClose: onModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, !emailSent && !hasError && !state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["ResearchPdfForm"], {
    firstName: form.firstName,
    company: form.company,
    email: form.email,
    onChange: updateField,
    isDisabled: isDisabled,
    onRequestClose: onModalClose,
    onSubmit: onSubmit,
    pdfForm: pdfForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), !emailSent && !hasError && state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["StartDownloadForm"], {
    onRequestClose: onModalClose,
    pdfForm: pdfForm,
    onSubmit: function onSubmit() {
      return setEmailSent(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), emailSent && !hasError && __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["ThankYou"], {
    description: "Your download should start automatically. Enjoy!",
    footerMessage: "Back to research",
    href: "/research",
    onClick: onModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_6__["LeaderMarketData"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_6__["WorkedWith"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_6__["WhyMdc"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_6__["Services"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_6__["Research"], {
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__["ContactFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.28a2261912640ef87d52.hot-update.js.map