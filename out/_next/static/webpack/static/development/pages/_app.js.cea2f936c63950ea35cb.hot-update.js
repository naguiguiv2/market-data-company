webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./services/analyticsService.js":
/*!**************************************!*\
  !*** ./services/analyticsService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");




var AnalyticsService = function AnalyticsService(trackingId) {
  var _this = this;

  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AnalyticsService);

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "initialize", function () {
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].initialize(_this.trackingId);
  });

  Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "trackPage", function (path) {
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].set({
      page: path
    });
    react_ga__WEBPACK_IMPORTED_MODULE_2__["default"].pageview(path);
  });

  this.trackingId = trackingId;
}; // This trackingId should probably be kept as a secret
// Might be a bit difficult as we're building this statically


var analyticsService = new AnalyticsService('UA-149172193-1');
/* harmony default export */ __webpack_exports__["default"] = (analyticsService);

/***/ })

})
//# sourceMappingURL=_app.js.cea2f936c63950ea35cb.hot-update.js.map