webpackHotUpdate_N_E("pages/index",{

/***/ "./sections/home-section/landing/index.js":
/*!************************************************!*\
  !*** ./sections/home-section/landing/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Landing_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.styled */ "./sections/home-section/landing/Landing.styled.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/button */ "./components/button/index.js");
/* harmony import */ var _components_tab_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/tab-bar */ "./components/tab-bar/index.js");
/* harmony import */ var _components_ticker_tape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ticker-tape */ "./components/ticker-tape/index.js");
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/landing/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Landing = function Landing() {
  return __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["LandingWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_components_tab_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, "Industry research by", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }), " industry experts."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), "As North America's leading market data solutions consultancy we understand the importance of data in the financial markets and global economy."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }
  }, __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "View Research",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "Contact us",
    isDefault: false,
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }))));
};

_c = Landing;
/* harmony default export */ __webpack_exports__["default"] = (Landing);

var _c;

$RefreshReg$(_c, "Landing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZyIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ3JCLFNBQU8sTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ04sTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQyxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZELHVCQUZELEVBTUMsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtNQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxFQUtDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxtSkFORCxFQWVDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMERBQUQ7QUFDQyxXQUFPLEVBQUMsZUFEVDtBQUVDLFdBQU8sRUFBRTtBQUFBLGFBQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaLENBQU47QUFBQSxLQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUtDLE1BQUMsMERBQUQ7QUFDQyxXQUFPLEVBQUMsWUFEVDtBQUVDLGFBQVMsRUFBRSxLQUZaO0FBR0MsV0FBTyxFQUFFO0FBQUEsYUFBTUQsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVosQ0FBTjtBQUFBLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBZkQsQ0FETSxDQUFQO0FBNkJBLENBOUJEOztLQUFNRixPO0FBZ0NTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zM2ZiODU5ZGZmODY4YjFjMjRhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9MYW5kaW5nLnN0eWxlZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgVGFiQmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFiLWJhcidcbmltcG9ydCBUaWNrZXJUYXBlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGlja2VyLXRhcGUnXG5cbmNvbnN0IExhbmRpbmcgPSAoKSA9PiB7XG5cdHJldHVybiA8Uy5MYW5kaW5nV3JhcHBlcj5cblx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdDxUYWJCYXIgLz5cblx0XHRcdDxTLlRpdGxlPlxuXHRcdFx0XHRJbmR1c3RyeSByZXNlYXJjaCBieVxuXHRcdFx0XHQ8YnIgLz4gaW5kdXN0cnkgZXhwZXJ0cy5cblx0XHRcdDwvUy5UaXRsZT5cblx0XHRcdDxTLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHRXZSBhcmUgYSBib3V0aXF1ZSBjb25zdWx0aW5nIGZpcm0gc2VydmluZyB0aGUgZmluYW5jaWFsIGluZm9ybWF0aW9uXG5cdFx0XHRcdHNlcnZpY2VzIGluZHVzdHJ5LiBPdXIgY29uc3VsdGFudHMgYXJlIGluZHVzdHJ5IGV4cGVydHMgb24gbWFya2V0IGFuZFxuXHRcdFx0XHRyZWZlcmVuY2UgZGF0YSBwcm9kdWN0cyBhbmQgaW52ZXN0bWVudCBtYW5hZ2VtZW50IHNvbHV0aW9ucy5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRBcyBOb3J0aCBBbWVyaWNhJ3MgbGVhZGluZyBtYXJrZXQgZGF0YSBzb2x1dGlvbnMgY29uc3VsdGFuY3kgd2UgdW5kZXJzdGFuZFxuXHRcdFx0XHR0aGUgaW1wb3J0YW5jZSBvZiBkYXRhIGluIHRoZSBmaW5hbmNpYWwgbWFya2V0cyBhbmQgZ2xvYmFsIGVjb25vbXkuXG5cdFx0XHQ8L1MuRGVzY3JpcHRpb24+XG5cdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnRuVGV4dD1cIlZpZXcgUmVzZWFyY2hcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcmVzZWFyY2gnKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGJ0blRleHQ9XCJDb250YWN0IHVzXCJcblx0XHRcdFx0XHRpc0RlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvY29udGFjdCcpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHQ8L1MuTGFuZGluZ1dyYXBwZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmciXSwic291cmNlUm9vdCI6IiJ9