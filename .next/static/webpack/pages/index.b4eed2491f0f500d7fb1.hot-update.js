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
  }, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions.\\n As North America's leading market data solutions consultancy we understand the importance of data in the financial markets and global economy. As market observers we carefully track, analyze, and interpret market data in providing our clients with tailored investment solutions."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
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
      lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvaW5kZXguanMiXSwibmFtZXMiOlsiTGFuZGluZyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJsYW5kaW5nR2lmVXJscyIsInVzZUVmZmVjdCIsIm5leHQiLCJsZW5ndGgiLCJpZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxDQUFELENBRGpCO0FBQUEsTUFDZEMsT0FEYztBQUFBLE1BQ0xDLFVBREs7O0FBRXJCLE1BQU1DLGNBQWMsR0FBRyxDQUN0QiwyQ0FEc0IsRUFFdEIscUNBRnNCLENBQXZCO0FBS0FDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQU1DLElBQUksR0FBRyxDQUFDSixPQUFPLEdBQUcsQ0FBWCxJQUFnQkUsY0FBYyxDQUFDRyxNQUE1QztBQUNBLFFBQU1DLEVBQUUsR0FBR0MsVUFBVSxDQUFDO0FBQUEsYUFBTU4sVUFBVSxDQUFDRyxJQUFELENBQWhCO0FBQUEsS0FBRCxFQUF5QixJQUF6QixDQUFyQjtBQUNBLFdBQU87QUFBQSxhQUFNSSxZQUFZLENBQUNGLEVBQUQsQ0FBbEI7QUFBQSxLQUFQO0FBQ0EsR0FKUSxFQUlOLENBQUNOLE9BQUQsQ0FKTSxDQUFUO0FBTUEsU0FBTyxNQUFDLDhEQUFEO0FBQWtCLFNBQUssRUFBRTtBQUFFUyxxQkFBZSxrQkFBVVAsY0FBYyxDQUFDRixPQUFELENBQXhCO0FBQWpCLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTixNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkQsdUJBRkQsRUFNQyxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd2VBTkQsRUFnQkMsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwREFBRDtBQUNDLFdBQU8sRUFBQyxlQURUO0FBRUMsV0FBTyxFQUFFO0FBQUEsYUFBTVUsa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFdBQVosQ0FBTjtBQUFBLEtBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBS0MsTUFBQywwREFBRDtBQUNDLFdBQU8sRUFBQyxZQURUO0FBRUMsYUFBUyxFQUFFLEtBRlo7QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUFNRCxrREFBTSxDQUFDQyxJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsS0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FoQkQsQ0FETSxDQUFQO0FBOEJBLENBM0NEOztHQUFNYixPOztLQUFBQSxPO0FBNkNTQSxzRUFBZixFLENBRUE7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGVlZDI0OTFmMGY1MDBkN2ZiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9MYW5kaW5nLnN0eWxlZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b24nXG5pbXBvcnQgVGFiQmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdGFiLWJhcidcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcblx0Y29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMClcblx0Y29uc3QgbGFuZGluZ0dpZlVybHMgPSBbXG5cdFx0Jy9zdGF0aWMvZ2lmcy9maW5hbmNpYWwtYnVzaW5lc3MtY2hhcnQuZ2lmJyxcblx0XHQnL3N0YXRpYy9naWZzL25ldy15b3JrLWNpdHlzY2FwZS5naWYnXG5cdF1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IG5leHQgPSAoY3VycmVudCArIDEpICUgbGFuZGluZ0dpZlVybHMubGVuZ3RoXG5cdFx0Y29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnQobmV4dCksIDYwMDApXG5cdFx0cmV0dXJuICgpID0+IGNsZWFyVGltZW91dChpZClcblx0fSwgW2N1cnJlbnRdKVxuXG5cdHJldHVybiA8Uy5MYW5kaW5nV3JhcHBlciBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2xhbmRpbmdHaWZVcmxzW2N1cnJlbnRdfVwiKWAgfX0+XG5cdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8VGFiQmFyIC8+XG5cdFx0XHQ8Uy5UaXRsZT5cblx0XHRcdFx0SW5kdXN0cnkgcmVzZWFyY2ggYnlcblx0XHRcdFx0PGJyIC8+IGluZHVzdHJ5IGV4cGVydHMuXG5cdFx0XHQ8L1MuVGl0bGU+XG5cdFx0XHQ8Uy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0V2UgYXJlIGEgYm91dGlxdWUgY29uc3VsdGluZyBmaXJtIHNlcnZpbmcgdGhlIGZpbmFuY2lhbCBpbmZvcm1hdGlvblxuXHRcdFx0XHRzZXJ2aWNlcyBpbmR1c3RyeS4gT3VyIGNvbnN1bHRhbnRzIGFyZSBpbmR1c3RyeSBleHBlcnRzIG9uIG1hcmtldCBhbmRcblx0XHRcdFx0cmVmZXJlbmNlIGRhdGEgcHJvZHVjdHMgYW5kIGludmVzdG1lbnQgbWFuYWdlbWVudCBzb2x1dGlvbnMuXFxuXG5cdFx0XHRcdFxuXHRcdFx0XHRBcyBOb3J0aCBBbWVyaWNhJ3MgbGVhZGluZyBtYXJrZXQgZGF0YSBzb2x1dGlvbnMgY29uc3VsdGFuY3kgd2UgdW5kZXJzdGFuZFxuXHRcdFx0XHR0aGUgaW1wb3J0YW5jZSBvZiBkYXRhIGluIHRoZSBmaW5hbmNpYWwgbWFya2V0cyBhbmQgZ2xvYmFsIGVjb25vbXkuXG5cdFx0XHRcdEFzIG1hcmtldCBvYnNlcnZlcnMgd2UgY2FyZWZ1bGx5IHRyYWNrLCBhbmFseXplLCBhbmQgaW50ZXJwcmV0IG1hcmtldCBkYXRhXG5cdFx0XHRcdGluIHByb3ZpZGluZyBvdXIgY2xpZW50cyB3aXRoIHRhaWxvcmVkIGludmVzdG1lbnQgc29sdXRpb25zLlxuXHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0PFMuQnV0dG9uV3JhcHBlcj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGJ0blRleHQ9XCJWaWV3IFJlc2VhcmNoXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3Jlc2VhcmNoJyl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRidG5UZXh0PVwiQ29udGFjdCB1c1wiXG5cdFx0XHRcdFx0aXNEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2NvbnRhY3QnKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5CdXR0b25XcmFwcGVyPlxuXHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0PC9TLkxhbmRpbmdXcmFwcGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nXG5cbi8vIC9zdGF0aWMvZ2lmcy90cmFmZmljLWFuZC1wZWRlc3RyaWFucy1pbi1mcm9udC1vZi10b3dlci1icmlkZ2UuZ2lmXG4vLyAvc3RhdGljL2dpZnMvdG91cmlzdHMuZ2lmIl0sInNvdXJjZVJvb3QiOiIifQ==