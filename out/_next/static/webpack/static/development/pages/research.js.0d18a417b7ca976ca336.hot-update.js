webpackHotUpdate("static/development/pages/research.js",{

/***/ "./pages/research.js":
/*!***************************!*\
  !*** ./pages/research.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _sections_research_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/research-section */ "./sections/research-section/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _utils_pdfMapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/pdfMapper */ "./utils/pdfMapper.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/validator */ "./utils/validator.js");
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/apiService */ "./services/apiService.js");
/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/useStore */ "./store/useStore.js");
/* harmony import */ var _store_actionTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actionTypes */ "./store/actionTypes.js");




var _jsxFileName = "/Users/justin.w/Documents/GitHub/market-data-company/pages/research.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




 // Utils





var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "research__ContentWrapper",
  componentId: "sc-8mb7la-0"
})(["max-width:1200px;margin:0 auto;padding:0 20px;margin-bottom:100px;"]);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      pdfForm = _useState[0],
      setPdfForm = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      emailSent = _useState3[0],
      setEmailSent = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      hasError = _useState4[0],
      setHasError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    firstName: '',
    company: '',
    email: ''
  }),
      form = _useState5[0],
      setFormValues = _useState5[1]; // Hooks to save the users form data


  var _useStore = Object(_store_useStore__WEBPACK_IMPORTED_MODULE_11__["useStore"])(),
      state = _useStore.state,
      dispatch = _useStore.dispatch;

  var saveUser = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (formValues) {
    return dispatch({
      type: _store_actionTypes__WEBPACK_IMPORTED_MODULE_12__["USER_SIGNED_UP"],
      payload: formValues
    });
  }, [dispatch]);

  var updateField = function updateField(e) {
    setFormValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, form, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(_services_apiService__WEBPACK_IMPORTED_MODULE_10__["sendEmail"])(form);

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

  var onModalClose = function onModalClose() {
    setModalVisible(false);
    setEmailSent(false);
  };

  var openModal = function openModal(researchForm) {
    setModalVisible(true);
    setPdfForm(_utils_pdfMapper__WEBPACK_IMPORTED_MODULE_8__["default"][researchForm]);
  };

  var isDisabled = form.firstName === '' || !Object(_utils_validator__WEBPACK_IMPORTED_MODULE_9__["validateEmail"])(form.email);
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_sections_research_section__WEBPACK_IMPORTED_MODULE_6__["Landing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    modalVisible: modalVisible,
    onRequestClose: onModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, !emailSent && !hasError && !state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ResearchPdfForm"], {
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
      lineNumber: 100
    },
    __self: this
  }), !emailSent && !hasError && state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["StartDownloadForm"], {
    onRequestClose: onModalClose,
    pdfForm: pdfForm,
    onSubmit: function onSubmit() {
      return setEmailSent(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), emailSent && !hasError && __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ThankYou"], {
    description: "Your download should start automatically. Enjoy!",
    footerMessage: "Back to research",
    href: "/research",
    onClick: onModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  })), __jsx(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_sections_research_section__WEBPACK_IMPORTED_MODULE_6__["Research"], {
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx(_sections_research_section__WEBPACK_IMPORTED_MODULE_6__["WhitePaper"], {
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx(CaseStudies, {
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx(_sections_research_section__WEBPACK_IMPORTED_MODULE_6__["Survey"], {
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["AnimatedFooterLink"], {
    message: "Back to home",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_7__["ContactFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=research.js.0d18a417b7ca976ca336.hot-update.js.map