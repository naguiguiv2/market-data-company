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
    }, 6000);
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
  }, "We are a boutique consulting firm serving the financial information\n\t\t\t\tservices industry. Our consultants are industry experts on market and\n\t\t\t\treference data products and investment management solutions.\n\nAs North America's leading market data solutions consultancy we understand\n\t\t\t\tthe importance of data in the financial markets and global economy.\n\t\t\t\tAs market observers we carefully track, analyze, and interpret market data\n\t\t\t\tin providing our clients with tailored investment solutions."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
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
      lineNumber: 36,
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
      lineNumber: 40,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJsYW5kaW5nR2lmVXJscyIsInVzZUVmZmVjdCIsIm5leHQiLCJsZW5ndGgiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDZEMsT0FEYztBQUFBLE1BQ0xDLFVBREs7O0FBRXJCLE1BQU1DLGNBQWMsR0FBRyxDQUN0QiwyQ0FEc0IsRUFFdEIscUNBRnNCLENBQXZCO0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLElBQUksR0FBRyxDQUFDSixPQUFPLEdBQUcsQ0FBWCxJQUFnQkUsY0FBYyxDQUFDRyxNQUE1QztBQUNBLFFBQU1DLEVBQUUsR0FBR0MsVUFBVSxDQUFDO0FBQUEsYUFBTU4sVUFBVSxDQUFDRyxJQUFELENBQWhCO0FBQUEsS0FBRCxFQUF5QixJQUF6QixDQUFyQjtBQUNBLFdBQU87QUFBQSxhQUFNSSxZQUFZLENBQUNGLEVBQUQsQ0FBbEI7QUFBQSxLQUFQO0FBQ0EsR0FKUSxFQUlOLENBQUNOLE9BQUQsQ0FKTSxDQUFUO0FBTUEsU0FBTyxNQUFDLDhEQUFEO0FBQWtCLFNBQUssRUFBRTtBQUFFUyxxQkFBZSxrQkFBVVAsY0FBYyxDQUFDRixPQUFELENBQXhCO0FBQWpCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTixNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsdUJBRkQsRUFNQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscWhCQU5ELEVBY0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwREFBRDtBQUNDLFdBQU8sRUFBQyxlQURUO0FBRUMsV0FBTyxFQUFFO0FBQUEsYUFBTVUsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVosQ0FBTjtBQUFBLEtBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBS0MsTUFBQywwREFBRDtBQUNDLFdBQU8sRUFBQyxZQURUO0FBRUMsYUFBUyxFQUFFLEtBRlo7QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUFNRCxrREFBTSxDQUFDQyxJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FkRCxDQURNLENBQVA7QUE0QkEsQ0F6Q0Q7O0dBQU1iLE87O0tBQUFBLE87QUEyQ1NBLHNFQUFmLEUsQ0FFQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQxNGVhYTkxMDNmMzc2ODc5OGU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xhbmRpbmcuc3R5bGVkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCBUYWJCYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWItYmFyJ1xuXG5jb25zdCBMYW5kaW5nID0gKCkgPT4ge1xuXHRjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKVxuXHRjb25zdCBsYW5kaW5nR2lmVXJscyA9IFtcblx0XHQnL3N0YXRpYy9naWZzL2ZpbmFuY2lhbC1idXNpbmVzcy1jaGFydC5naWYnLFxuXHRcdCcvc3RhdGljL2dpZnMvbmV3LXlvcmstY2l0eXNjYXBlLmdpZidcblx0XVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgbmV4dCA9IChjdXJyZW50ICsgMSkgJSBsYW5kaW5nR2lmVXJscy5sZW5ndGhcblx0XHRjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4gc2V0Q3VycmVudChuZXh0KSwgNjAwMClcblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGlkKVxuXHR9LCBbY3VycmVudF0pXG5cblx0cmV0dXJuIDxTLkxhbmRpbmdXcmFwcGVyIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7bGFuZGluZ0dpZlVybHNbY3VycmVudF19XCIpYCB9fT5cblx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdDxUYWJCYXIgLz5cblx0XHRcdDxTLlRpdGxlPlxuXHRcdFx0XHRJbmR1c3RyeSByZXNlYXJjaCBieVxuXHRcdFx0XHQ8YnIgLz4gaW5kdXN0cnkgZXhwZXJ0cy5cblx0XHRcdDwvUy5UaXRsZT5cblx0XHRcdDxTLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHR7YFdlIGFyZSBhIGJvdXRpcXVlIGNvbnN1bHRpbmcgZmlybSBzZXJ2aW5nIHRoZSBmaW5hbmNpYWwgaW5mb3JtYXRpb25cblx0XHRcdFx0c2VydmljZXMgaW5kdXN0cnkuIE91ciBjb25zdWx0YW50cyBhcmUgaW5kdXN0cnkgZXhwZXJ0cyBvbiBtYXJrZXQgYW5kXG5cdFx0XHRcdHJlZmVyZW5jZSBkYXRhIHByb2R1Y3RzIGFuZCBpbnZlc3RtZW50IG1hbmFnZW1lbnQgc29sdXRpb25zLlxcblxcbkFzIE5vcnRoIEFtZXJpY2EncyBsZWFkaW5nIG1hcmtldCBkYXRhIHNvbHV0aW9ucyBjb25zdWx0YW5jeSB3ZSB1bmRlcnN0YW5kXG5cdFx0XHRcdHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEgaW4gdGhlIGZpbmFuY2lhbCBtYXJrZXRzIGFuZCBnbG9iYWwgZWNvbm9teS5cblx0XHRcdFx0QXMgbWFya2V0IG9ic2VydmVycyB3ZSBjYXJlZnVsbHkgdHJhY2ssIGFuYWx5emUsIGFuZCBpbnRlcnByZXQgbWFya2V0IGRhdGFcblx0XHRcdFx0aW4gcHJvdmlkaW5nIG91ciBjbGllbnRzIHdpdGggdGFpbG9yZWQgaW52ZXN0bWVudCBzb2x1dGlvbnMuYH1cblx0XHRcdDwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdDxTLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRidG5UZXh0PVwiVmlldyBSZXNlYXJjaFwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9yZXNlYXJjaCcpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnRuVGV4dD1cIkNvbnRhY3QgdXNcIlxuXHRcdFx0XHRcdGlzRGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9jb250YWN0Jyl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdDwvUy5MYW5kaW5nV3JhcHBlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1xuXG4vLyAvc3RhdGljL2dpZnMvdHJhZmZpYy1hbmQtcGVkZXN0cmlhbnMtaW4tZnJvbnQtb2YtdG93ZXItYnJpZGdlLmdpZlxuLy8gL3N0YXRpYy9naWZzL3RvdXJpc3RzLmdpZiJdLCJzb3VyY2VSb290IjoiIn0=