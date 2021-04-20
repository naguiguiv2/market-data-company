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
var _this = undefined,
    _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/landing/index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Landing = function Landing() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      current = _useState[0],
      setCurrent = _useState[1];

  var landingGifUrls = ['/static/gifs/financial-business-chart.gif', '/static/gifs/new-york-cityscape.gif'];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var next = (current + 1) % landingGifUrls.length;
    var id = setTimeout(function () {
      return setCurrent(next);
    }, 5990);
    return function () {
      return clearTimeout(id);
    };
  }, [current]);
  return __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["LandingWrapper"], {
    style: {
      backgroundImage: "url(\"".concat(landingGifUrls[current], "\")")
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 3
    }
  }, __jsx(_components_tab_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }
  }), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }, "Industry research by", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }), " industry experts."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions.", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), "As North America's leading market data solutions consultancy we understand the importance of data in the financial markets and global economy. As market observers we carefully track, analyze, and interpret market data in providing our clients with tailored investment solutions."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
      lineNumber: 39,
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
      lineNumber: 43,
      columnNumber: 5
    }
  }))));
};

_s(Landing, "Ce5S7Zpl2S4YgGoPn+G4m52qKq8=");

_c = Landing;
/* harmony default export */ __webpack_exports__["default"] = (Landing); // /static/gifs/traffic-and-pedestrians-in-front-of-tower-bridge.gif
// /static/gifs/tourists.gif

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJsYW5kaW5nR2lmVXJscyIsInVzZUVmZmVjdCIsIm5leHQiLCJsZW5ndGgiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDZEMsT0FEYztBQUFBLE1BQ0xDLFVBREs7O0FBRXJCLE1BQU1DLGNBQWMsR0FBRyxDQUN0QiwyQ0FEc0IsRUFFdEIscUNBRnNCLENBQXZCO0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLElBQUksR0FBRyxDQUFDSixPQUFPLEdBQUcsQ0FBWCxJQUFnQkUsY0FBYyxDQUFDRyxNQUE1QztBQUNBLFFBQU1DLEVBQUUsR0FBR0MsVUFBVSxDQUFDO0FBQUEsYUFBTU4sVUFBVSxDQUFDRyxJQUFELENBQWhCO0FBQUEsS0FBRCxFQUF5QixJQUF6QixDQUFyQjtBQUNBLFdBQU87QUFBQSxhQUFNSSxZQUFZLENBQUNGLEVBQUQsQ0FBbEI7QUFBQSxLQUFQO0FBQ0EsR0FKUSxFQUlOLENBQUNOLE9BQUQsQ0FKTSxDQUFUO0FBTUEsU0FBTyxNQUFDLDhEQUFEO0FBQWtCLFNBQUssRUFBRTtBQUFFUyxxQkFBZSxrQkFBVVAsY0FBYyxDQUFDRixPQUFELENBQXhCO0FBQWpCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTixNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsdUJBRkQsRUFNQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK01BSUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELEVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELDJSQU5ELEVBaUJDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMERBQUQ7QUFDQyxXQUFPLEVBQUMsZUFEVDtBQUVDLFdBQU8sRUFBRTtBQUFBLGFBQU1VLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxXQUFaLENBQU47QUFBQSxLQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUtDLE1BQUMsMERBQUQ7QUFDQyxXQUFPLEVBQUMsWUFEVDtBQUVDLGFBQVMsRUFBRSxLQUZaO0FBR0MsV0FBTyxFQUFFO0FBQUEsYUFBTUQsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFVBQVosQ0FBTjtBQUFBLEtBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxELENBakJELENBRE0sQ0FBUDtBQStCQSxDQTVDRDs7R0FBTWIsTzs7S0FBQUEsTztBQThDU0Esc0VBQWYsRSxDQUVBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzk2YWZmZDI1OGQ0ZjQ3MTdkMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vTGFuZGluZy5zdHlsZWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IFRhYkJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYi1iYXInXG5cbmNvbnN0IExhbmRpbmcgPSAoKSA9PiB7XG5cdGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApXG5cdGNvbnN0IGxhbmRpbmdHaWZVcmxzID0gW1xuXHRcdCcvc3RhdGljL2dpZnMvZmluYW5jaWFsLWJ1c2luZXNzLWNoYXJ0LmdpZicsXG5cdFx0Jy9zdGF0aWMvZ2lmcy9uZXcteW9yay1jaXR5c2NhcGUuZ2lmJ1xuXHRdXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBuZXh0ID0gKGN1cnJlbnQgKyAxKSAlIGxhbmRpbmdHaWZVcmxzLmxlbmd0aFxuXHRcdGNvbnN0IGlkID0gc2V0VGltZW91dCgoKSA9PiBzZXRDdXJyZW50KG5leHQpLCA1OTkwKVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaWQpXG5cdH0sIFtjdXJyZW50XSlcblxuXHRyZXR1cm4gPFMuTGFuZGluZ1dyYXBwZXIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtsYW5kaW5nR2lmVXJsc1tjdXJyZW50XX1cIilgIH19PlxuXHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PFRhYkJhciAvPlxuXHRcdFx0PFMuVGl0bGU+XG5cdFx0XHRcdEluZHVzdHJ5IHJlc2VhcmNoIGJ5XG5cdFx0XHRcdDxiciAvPiBpbmR1c3RyeSBleHBlcnRzLlxuXHRcdFx0PC9TLlRpdGxlPlxuXHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdFdlIGFyZSBhIGJvdXRpcXVlIGNvbnN1bHRpbmcgZmlybSBzZXJ2aW5nIHRoZSBmaW5hbmNpYWwgaW5mb3JtYXRpb25cblx0XHRcdFx0c2VydmljZXMgaW5kdXN0cnkuIE91ciBjb25zdWx0YW50cyBhcmUgaW5kdXN0cnkgZXhwZXJ0cyBvbiBtYXJrZXQgYW5kXG5cdFx0XHRcdHJlZmVyZW5jZSBkYXRhIHByb2R1Y3RzIGFuZCBpbnZlc3RtZW50IG1hbmFnZW1lbnQgc29sdXRpb25zLlxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdEFzIE5vcnRoIEFtZXJpY2EncyBsZWFkaW5nIG1hcmtldCBkYXRhIHNvbHV0aW9ucyBjb25zdWx0YW5jeSB3ZSB1bmRlcnN0YW5kXG5cdFx0XHRcdHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEgaW4gdGhlIGZpbmFuY2lhbCBtYXJrZXRzIGFuZCBnbG9iYWwgZWNvbm9teS5cblx0XHRcdFx0QXMgbWFya2V0IG9ic2VydmVycyB3ZSBjYXJlZnVsbHkgdHJhY2ssIGFuYWx5emUsIGFuZCBpbnRlcnByZXQgbWFya2V0IGRhdGFcblx0XHRcdFx0aW4gcHJvdmlkaW5nIG91ciBjbGllbnRzIHdpdGggdGFpbG9yZWQgaW52ZXN0bWVudCBzb2x1dGlvbnMuXG5cdFx0XHQ8L1MuRGVzY3JpcHRpb24+XG5cdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnRuVGV4dD1cIlZpZXcgUmVzZWFyY2hcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcmVzZWFyY2gnKX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGJ0blRleHQ9XCJDb250YWN0IHVzXCJcblx0XHRcdFx0XHRpc0RlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvY29udGFjdCcpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHQ8L1MuTGFuZGluZ1dyYXBwZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdcblxuLy8gL3N0YXRpYy9naWZzL3RyYWZmaWMtYW5kLXBlZGVzdHJpYW5zLWluLWZyb250LW9mLXRvd2VyLWJyaWRnZS5naWZcbi8vIC9zdGF0aWMvZ2lmcy90b3VyaXN0cy5naWYiXSwic291cmNlUm9vdCI6IiJ9