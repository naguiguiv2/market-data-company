module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./assets/colors.js":
/*!**************************!*\
  !*** ./assets/colors.js ***!
  \**************************/
/*! exports provided: MDC_PURPLE, DEEP_INDIGO, MID_PURPLE, LIGHT_PURPLE, WHITE, BLACK, LIGHT_GREY, MDC_PURPLE_HOVER, SB_GREY, PINK, RED, BABY_BLUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDC_PURPLE", function() { return MDC_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_INDIGO", function() { return DEEP_INDIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MID_PURPLE", function() { return MID_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACK", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_GREY", function() { return LIGHT_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDC_PURPLE_HOVER", function() { return MDC_PURPLE_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SB_GREY", function() { return SB_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINK", function() { return PINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BABY_BLUE", function() { return BABY_BLUE; });
const MDC_PURPLE = '#7D27FF';
const DEEP_INDIGO = '#430086';
const MID_PURPLE = '#986CFF';
const LIGHT_PURPLE = '#C5B2FF';
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const LIGHT_GREY = '#969696';
const MDC_PURPLE_HOVER = '#7121EB';
const SB_GREY = '#F5F5F5';
const PINK = '#ED27FF';
const RED = '#FF2752';
const BABY_BLUE = '#3B84FF';

/***/ }),

/***/ "./assets/theme.js":
/*!*************************!*\
  !*** ./assets/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./assets/colors.js");

const theme = {
  colors: {
    mdcPurple: _colors__WEBPACK_IMPORTED_MODULE_0__["MDC_PURPLE"],
    mdcPurpleHover: _colors__WEBPACK_IMPORTED_MODULE_0__["MDC_PURPLE_HOVER"],
    deepIndigo: _colors__WEBPACK_IMPORTED_MODULE_0__["DEEP_INDIGO"],
    midPurple: _colors__WEBPACK_IMPORTED_MODULE_0__["MID_PURPLE"],
    lightPurple: _colors__WEBPACK_IMPORTED_MODULE_0__["LIGHT_PURPLE"],
    white: _colors__WEBPACK_IMPORTED_MODULE_0__["WHITE"],
    black: _colors__WEBPACK_IMPORTED_MODULE_0__["BLACK"],
    lightGrey: _colors__WEBPACK_IMPORTED_MODULE_0__["LIGHT_GREY"],
    sbGrey: _colors__WEBPACK_IMPORTED_MODULE_0__["SB_GREY"],
    red: _colors__WEBPACK_IMPORTED_MODULE_0__["RED"]
  },
  fonts: {
    graphik: 'Graphik',
    graphikBold: 'Graphik-Bold',
    financier: 'Financier'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/theme */ "./assets/theme.js");
/* harmony import */ var _styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/GlobalStyles */ "./styles/GlobalStyles.js");
/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/useStore */ "./store/useStore.js");
/* harmony import */ var _services_analyticsService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/analyticsService */ "./services/analyticsService.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      currentRoute: this.props.router.route
    });
  }

  static async getInitialProps({
    Component,
    router,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  componentDidUpdate() {
    if (this.state.currentRoute !== this.props.router.route) {
      this.setState({
        currentRoute: this.props.router.route
      }, () => {
        _services_analyticsService__WEBPACK_IMPORTED_MODULE_7__["default"].trackPage(this.state.currentRoute);
      });
    }
  }
  /**
   * Initializes GA if has not been initialized yet
   */


  componentDidMount() {
    const {
      currentRoute
    } = this.state;

    if (!window.GA_INITIALIZED) {
      _services_analyticsService__WEBPACK_IMPORTED_MODULE_7__["default"].initialize();
      window.GA_INITIALIZED = true;
    }

    _services_analyticsService__WEBPACK_IMPORTED_MODULE_7__["default"].trackPage(currentRoute);
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 4
      }
    }, __jsx(_store_useStore__WEBPACK_IMPORTED_MODULE_6__["StoreProvider"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }
    }, __jsx(_styles_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 6
      }
    }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _assets_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 6
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    })))));
  }

}

/***/ }),

/***/ "./services/analyticsService.js":
/*!**************************************!*\
  !*** ./services/analyticsService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class AnalyticsService {
  constructor(trackingId) {
    _defineProperty(this, "initialize", () => {
      react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize(this.trackingId);
    });

    _defineProperty(this, "trackPage", path => {
      react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
        page: path
      });
      react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(path);
    });

    this.trackingId = trackingId;
  }

} // This trackingId should probably be kept as a secret.
// Might be a bit difficult as we're building this statically
// and cannot inject it in while building it.


const analyticsService = new AnalyticsService('UA-149172193-1');
/* harmony default export */ __webpack_exports__["default"] = (analyticsService);

/***/ }),

/***/ "./store/actionTypes.js":
/*!******************************!*\
  !*** ./store/actionTypes.js ***!
  \******************************/
/*! exports provided: USER_SIGNED_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SIGNED_UP", function() { return USER_SIGNED_UP; });
const USER_SIGNED_UP = 'USER_SIGNED_UP';

/***/ }),

/***/ "./store/useStore.js":
/*!***************************!*\
  !*** ./store/useStore.js ***!
  \***************************/
/*! exports provided: StoreProvider, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./store/actionTypes.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/store/useStore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const initialState = {};
const StoreContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["USER_SIGNED_UP"]:
      return {
        user: action.payload
      };

    default:
      return state;
  }
};

const StoreProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(userReducer, initialState);
  return __jsx(StoreContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 3
    }
  }, children);
};
const useStore = store => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StoreContext);
  return {
    state,
    dispatch
  };
};

/***/ }),

/***/ "./styles/GlobalStyles.js":
/*!********************************!*\
  !*** ./styles/GlobalStyles.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
    @font-face {
        font-family: "Graphik";
        src: url('../static/fonts/Graphik-Regular-Web.woff');
    }
    @font-face {
        font-family: "Financier";
        src: url('../static/fonts/FinancierTextWeb-Regular.woff')
    }
    @font-face {
        font-family: "Graphik-Bold";
        src: url('../static/fonts/Graphik-Bold-Web.woff');
    }
    body, html{
        margin:0;
        padding:0;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3RoZW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYW5hbHl0aWNzU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS91c2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIk1EQ19QVVJQTEUiLCJERUVQX0lORElHTyIsIk1JRF9QVVJQTEUiLCJMSUdIVF9QVVJQTEUiLCJXSElURSIsIkJMQUNLIiwiTElHSFRfR1JFWSIsIk1EQ19QVVJQTEVfSE9WRVIiLCJTQl9HUkVZIiwiUElOSyIsIlJFRCIsIkJBQllfQkxVRSIsInRoZW1lIiwiY29sb3JzIiwibWRjUHVycGxlIiwiQ29sb3JzIiwibWRjUHVycGxlSG92ZXIiLCJkZWVwSW5kaWdvIiwibWlkUHVycGxlIiwibGlnaHRQdXJwbGUiLCJ3aGl0ZSIsImJsYWNrIiwibGlnaHRHcmV5Iiwic2JHcmV5IiwicmVkIiwiZm9udHMiLCJncmFwaGlrIiwiZ3JhcGhpa0JvbGQiLCJmaW5hbmNpZXIiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwiY3VycmVudFJvdXRlIiwicHJvcHMiLCJyb3V0ZSIsImN0eCIsImNvbXBvbmVudERpZFVwZGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJhbmFseXRpY3NTZXJ2aWNlIiwidHJhY2tQYWdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJ3aW5kb3ciLCJHQV9JTklUSUFMSVpFRCIsImluaXRpYWxpemUiLCJBbmFseXRpY3NTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJ0cmFja2luZ0lkIiwiUmVhY3RHQSIsInBhdGgiLCJzZXQiLCJwYWdlIiwicGFnZXZpZXciLCJVU0VSX1NJR05FRF9VUCIsImluaXRpYWxTdGF0ZSIsIlN0b3JlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VyUmVkdWNlciIsImFjdGlvbiIsInR5cGUiLCJ1c2VyIiwicGF5bG9hZCIsIlN0b3JlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZVN0b3JlIiwic3RvcmUiLCJ1c2VDb250ZXh0IiwiR2xvYmFsU3R5bGVzIiwiY3JlYXRlR2xvYmFsU3R5bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUFVLEdBQUcsU0FBbkI7QUFDQSxNQUFNQyxXQUFXLEdBQUcsU0FBcEI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBbkI7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBckI7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBZDtBQUNBLE1BQU1DLEtBQUssR0FBRyxTQUFkO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQW5CO0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBekI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsU0FBYjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxTQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFNBQWxCLEM7Ozs7Ozs7Ozs7OztBQ1pQO0FBQUE7QUFBQTtBQUVBLE1BQU1DLEtBQUssR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDUEMsYUFBUyxFQUFFQyxrREFESjtBQUVQQyxrQkFBYyxFQUFFRCx3REFGVDtBQUdQRSxjQUFVLEVBQUVGLG1EQUhMO0FBSVBHLGFBQVMsRUFBRUgsa0RBSko7QUFLUEksZUFBVyxFQUFFSixvREFMTjtBQU1QSyxTQUFLLEVBQUVMLDZDQU5BO0FBT1BNLFNBQUssRUFBRU4sNkNBUEE7QUFRUE8sYUFBUyxFQUFFUCxrREFSSjtBQVNQUSxVQUFNLEVBQUVSLCtDQVREO0FBVVBTLE9BQUcsRUFBRVQsMkNBQVVMO0FBVlIsR0FESztBQWFiZSxPQUFLLEVBQUU7QUFDTkMsV0FBTyxFQUFFLFNBREg7QUFFTkMsZUFBVyxFQUFFLGNBRlA7QUFHTkMsYUFBUyxFQUFFO0FBSEw7QUFiTSxDQUFkO0FBb0JlaEIsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixtQkFBTyxDQUFDLGlFQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E1Qzs7QUFDQTs7OztBQWtCQTs7Ozs7QUFJQSxrQ0FBa0M7QUFBQTtBQUFsQztBQUFrQyxDQUFsQyxFQUd5QztBQUN2QyxRQUFNaUIsU0FBUyxHQUFHLE1BQU0sMkNBQXhCLEdBQXdCLENBQXhCO0FBQ0EsU0FBTztBQUFQO0FBQU8sR0FBUDtBQUdhOztBQUFBLGtCQUEyQ0MsZUFBTUMsU0FBakQsQ0FHYjtBQUlBO0FBQ0E7QUFDQTtBQUNBQyxtQkFBaUIsb0JBQTRDO0FBQzNEO0FBR0ZDOztBQUFBQSxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQXFELEtBQTNEO0FBR0Esd0JBQ0UscUVBR0k7QUFDQTtBQUNJLE1BQUVDLE9BQU8sSUFBVCxXQUF3QjtBQUFFQyxTQUFHLEVBQUVDLFNBQVMsQ0FBeEMsTUFBd0M7QUFBaEIsS0FBeEIsR0FOVixFQUNFLEVBREY7QUFmRjs7QUFBQTs7O0FBSG1CQyxHLENBSVpDLG1CQUpZRCxHQUlVRSxrQkFKVkY7QUFBQUEsRyxDQUtaRyxlQUxZSCxHQUtNRSxrQkFMTkY7QUErQnJCO0FBQ0E7O0FBRUEsVUFBMkM7QUFDekNJLGVBQWEsR0FBRyxxQkFBUyxNQUFNO0FBQzdCQyxXQUFPLENBQVBBO0FBREZELEdBQWdCLENBQWhCQTtBQU1BRSxTQUFPLEdBQUcscUJBQVMsTUFBTTtBQUN2QkQsV0FBTyxDQUFQQTtBQURGQyxHQUFVLENBQVZBO0FBT0YsQyxDQUFBOzs7QUFDTyxzQkFBMkI7QUFDaEMsWUFBMkNGLGFBQWE7QUFDeEQsU0FBT0csQ0FBQyxDQUFSO0FBR0s7O0FBQUEsMkJBQW1DO0FBQ3hDO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFPO0FBQ0wsZ0JBQVk7QUFDVixnQkFBMkNELE9BQU87QUFDbEQ7QUFIRzs7QUFLTCxtQkFBZTtBQUNiLGdCQUEyQ0EsT0FBTztBQUNsRDtBQVBHOztBQVNMLGlCQUFhO0FBQ1gsZ0JBQTJDQSxPQUFPO0FBQ2xEO0FBWEc7O0FBYUxFLFFBQUksRUFBRSxNQUFNO0FBQ1YsZ0JBQTJDRixPQUFPO0FBQ2xERyxZQUFNLENBQU5BO0FBZkc7QUFpQkxDLFFBQUksRUFBRSxhQUE4QjtBQUNsQyxnQkFBMkNKLE9BQU87QUFDbEQsYUFBT0csTUFBTSxDQUFOQSxVQUFQLEVBQU9BLENBQVA7QUFuQkc7QUFxQkxFLFVBQU0sRUFBRSxjQUErQjtBQUNyQyxnQkFBMkNMLE9BQU87QUFDbEQsWUFBTU0sU0FBUyxHQUFHQyxFQUFFLFVBQXBCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHRCxFQUFFLElBQWxCO0FBRUEsYUFBT0osTUFBTSxDQUFOQSxnQkFBUCxPQUFPQSxDQUFQO0FBMUJHO0FBNEJMTSxXQUFPLEVBQUUsYUFBOEI7QUFDckMsZ0JBQTJDVCxPQUFPO0FBQ2xELGFBQU9HLE1BQU0sQ0FBTkEsYUFBUCxFQUFPQSxDQUFQO0FBOUJHO0FBZ0NMTyxhQUFTLEVBQUUsY0FBK0I7QUFDeEMsZ0JBQTJDVixPQUFPO0FBQ2xELFlBQU1XLFlBQVksR0FBR0osRUFBRSxVQUF2QjtBQUNBLFlBQU1LLFVBQVUsR0FBR0wsRUFBRSxJQUFyQjtBQUVBLGFBQU9KLE1BQU0sQ0FBTkEsc0JBQVAsVUFBT0EsQ0FBUDtBQXJDSjtBQUFPLEdBQVA7QUF3Q0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaElEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFZSxNQUFNVSxLQUFOLFNBQW9CbkIsK0NBQXBCLENBQXdCO0FBQUE7QUFBQTs7QUFBQSxtQ0FDOUI7QUFDUG9CLGtCQUFZLEVBQUUsS0FBS0MsS0FBTCxDQUFXWixNQUFYLENBQWtCYTtBQUR6QixLQUQ4QjtBQUFBOztBQUtWLGVBQWZuQixlQUFlLENBQUM7QUFBRVQsYUFBRjtBQUFhZSxVQUFiO0FBQXFCYztBQUFyQixHQUFELEVBQTZCO0FBQ3hELFFBQUkvQixTQUFTLEdBQUcsRUFBaEI7O0FBRUEsUUFBSUUsU0FBUyxDQUFDUyxlQUFkLEVBQStCO0FBQzlCWCxlQUFTLEdBQUcsTUFBTUUsU0FBUyxDQUFDUyxlQUFWLENBQTBCb0IsR0FBMUIsQ0FBbEI7QUFDQTs7QUFFRCxXQUFPO0FBQUUvQjtBQUFGLEtBQVA7QUFDQTs7QUFFRGdDLG9CQUFrQixHQUFHO0FBQ3BCLFFBQUksS0FBS0MsS0FBTCxDQUFXTCxZQUFYLEtBQTRCLEtBQUtDLEtBQUwsQ0FBV1osTUFBWCxDQUFrQmEsS0FBbEQsRUFBeUQ7QUFDeEQsV0FBS0ksUUFBTCxDQUNDO0FBQ0NOLG9CQUFZLEVBQUUsS0FBS0MsS0FBTCxDQUFXWixNQUFYLENBQWtCYTtBQURqQyxPQURELEVBSUMsTUFBTTtBQUNMSywwRUFBZ0IsQ0FBQ0MsU0FBakIsQ0FBMkIsS0FBS0gsS0FBTCxDQUFXTCxZQUF0QztBQUNBLE9BTkY7QUFRQTtBQUNEO0FBRUQ7QUFDRDtBQUNBOzs7QUFDQ1MsbUJBQWlCLEdBQUc7QUFDbkIsVUFBTTtBQUFFVDtBQUFGLFFBQW1CLEtBQUtLLEtBQTlCOztBQUVBLFFBQUksQ0FBQ0ssTUFBTSxDQUFDQyxjQUFaLEVBQTRCO0FBQzNCSix3RUFBZ0IsQ0FBQ0ssVUFBakI7QUFDQUYsWUFBTSxDQUFDQyxjQUFQLEdBQXdCLElBQXhCO0FBQ0E7O0FBRURKLHNFQUFnQixDQUFDQyxTQUFqQixDQUEyQlIsWUFBM0I7QUFDQTs7QUFFRHhCLFFBQU0sR0FBRztBQUNSLFVBQU07QUFBRUYsZUFBRjtBQUFhRjtBQUFiLFFBQTJCLEtBQUs2QixLQUF0QztBQUNBLFdBQ0MsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0MsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREQsRUFFQyxNQUFDLCtEQUFEO0FBQWUsV0FBSyxFQUFFOUMscURBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLFNBQUQsZUFBZWlCLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURELENBRkQsQ0FERCxDQUREO0FBVUE7O0FBdERxQyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z2Qzs7QUFFQSxNQUFNeUMsZ0JBQU4sQ0FBdUI7QUFDdEJDLGFBQVcsQ0FBQ0MsVUFBRCxFQUFhO0FBQUEsd0NBR1gsTUFBTTtBQUNsQkMscURBQU8sQ0FBQ0osVUFBUixDQUFtQixLQUFLRyxVQUF4QjtBQUNBLEtBTHVCOztBQUFBLHVDQU9YRSxJQUFELElBQVU7QUFDckJELHFEQUFPLENBQUNFLEdBQVIsQ0FBWTtBQUFFQyxZQUFJLEVBQUVGO0FBQVIsT0FBWjtBQUNBRCxxREFBTyxDQUFDSSxRQUFSLENBQWlCSCxJQUFqQjtBQUNBLEtBVnVCOztBQUN2QixTQUFLRixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBOztBQUhxQixDLENBY3ZCO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTVIsZ0JBQWdCLEdBQUcsSUFBSU0sZ0JBQUosQ0FBcUIsZ0JBQXJCLENBQXpCO0FBRWVOLCtFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQU8sTUFBTWMsY0FBYyxHQUFHLGdCQUF2QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQO0FBQ0E7QUFFQSxNQUFNQyxZQUFZLEdBQUcsRUFBckI7QUFFQSxNQUFNQyxZQUFZLGdCQUFHQywyREFBYSxDQUFDRixZQUFELENBQWxDOztBQUVBLE1BQU1HLFdBQVcsR0FBRyxDQUFDcEIsS0FBRCxFQUFRcUIsTUFBUixLQUFtQjtBQUN0QyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxTQUFLTiwyREFBTDtBQUNDLGFBQU87QUFBRU8sWUFBSSxFQUFFRixNQUFNLENBQUNHO0FBQWYsT0FBUDs7QUFDRDtBQUNDLGFBQU94QixLQUFQO0FBSkY7QUFNQSxDQVBEOztBQVNPLE1BQU15QixhQUFhLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDOUMsUUFBTTtBQUFBLE9BQUMxQixLQUFEO0FBQUEsT0FBUTJCO0FBQVIsTUFBb0JDLHdEQUFVLENBQUNSLFdBQUQsRUFBY0gsWUFBZCxDQUFwQztBQUNBLFNBQ0MsTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUU7QUFBRWpCLFdBQUY7QUFBUzJCO0FBQVQsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFRCxRQURGLENBREQ7QUFLQSxDQVBNO0FBU0EsTUFBTUcsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDbEMsUUFBTTtBQUFFOUIsU0FBRjtBQUFTMkI7QUFBVCxNQUFzQkksd0RBQVUsQ0FBQ2IsWUFBRCxDQUF0QztBQUNBLFNBQU87QUFBRWxCLFNBQUY7QUFBUzJCO0FBQVQsR0FBUDtBQUNBLENBSE0sQzs7Ozs7Ozs7Ozs7O0FDekJQO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUssWUFBWSxHQUFHQyxtRUFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWpCQTtBQWtCZUQsMkVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZXhwb3J0IGNvbnN0IE1EQ19QVVJQTEUgPSAnIzdEMjdGRidcbmV4cG9ydCBjb25zdCBERUVQX0lORElHTyA9ICcjNDMwMDg2J1xuZXhwb3J0IGNvbnN0IE1JRF9QVVJQTEUgPSAnIzk4NkNGRidcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEUgPSAnI0M1QjJGRidcbmV4cG9ydCBjb25zdCBXSElURSA9ICcjRkZGRkZGJ1xuZXhwb3J0IGNvbnN0IEJMQUNLID0gJyMwMDAwMDAnXG5leHBvcnQgY29uc3QgTElHSFRfR1JFWSA9ICcjOTY5Njk2J1xuXG5leHBvcnQgY29uc3QgTURDX1BVUlBMRV9IT1ZFUiA9ICcjNzEyMUVCJ1xuZXhwb3J0IGNvbnN0IFNCX0dSRVkgPSAnI0Y1RjVGNSdcbmV4cG9ydCBjb25zdCBQSU5LID0gJyNFRDI3RkYnXG5leHBvcnQgY29uc3QgUkVEID0gJyNGRjI3NTInXG5leHBvcnQgY29uc3QgQkFCWV9CTFVFID0gJyMzQjg0RkYnXG4iLCJpbXBvcnQgKiBhcyBDb2xvcnMgZnJvbSAnLi9jb2xvcnMnXG5cbmNvbnN0IHRoZW1lID0ge1xuXHRjb2xvcnM6IHtcblx0XHRtZGNQdXJwbGU6IENvbG9ycy5NRENfUFVSUExFLFxuXHRcdG1kY1B1cnBsZUhvdmVyOiBDb2xvcnMuTURDX1BVUlBMRV9IT1ZFUixcblx0XHRkZWVwSW5kaWdvOiBDb2xvcnMuREVFUF9JTkRJR08sXG5cdFx0bWlkUHVycGxlOiBDb2xvcnMuTUlEX1BVUlBMRSxcblx0XHRsaWdodFB1cnBsZTogQ29sb3JzLkxJR0hUX1BVUlBMRSxcblx0XHR3aGl0ZTogQ29sb3JzLldISVRFLFxuXHRcdGJsYWNrOiBDb2xvcnMuQkxBQ0ssXG5cdFx0bGlnaHRHcmV5OiBDb2xvcnMuTElHSFRfR1JFWSxcblx0XHRzYkdyZXk6IENvbG9ycy5TQl9HUkVZLFxuXHRcdHJlZDogQ29sb3JzLlJFRFxuXHR9LFxuXHRmb250czoge1xuXHRcdGdyYXBoaWs6ICdHcmFwaGlrJyxcblx0XHRncmFwaGlrQm9sZDogJ0dyYXBoaWstQm9sZCcsXG5cdFx0ZmluYW5jaWVyOiAnRmluYW5jaWVyJ1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJpbXBvcnQgQXBwLCB7IENvbnRhaW5lciB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vYXNzZXRzL3RoZW1lJ1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvR2xvYmFsU3R5bGVzJ1xuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gJy4uL3N0b3JlL3VzZVN0b3JlJ1xuXG5pbXBvcnQgYW5hbHl0aWNzU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9hbmFseXRpY3NTZXJ2aWNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cdHN0YXRlID0ge1xuXHRcdGN1cnJlbnRSb3V0ZTogdGhpcy5wcm9wcy5yb3V0ZXIucm91dGVcblx0fVxuXG5cdHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcblx0XHRsZXQgcGFnZVByb3BzID0ge31cblxuXHRcdGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG5cdFx0XHRwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcblx0XHR9XG5cblx0XHRyZXR1cm4geyBwYWdlUHJvcHMgfVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRSb3V0ZSAhPT0gdGhpcy5wcm9wcy5yb3V0ZXIucm91dGUpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRjdXJyZW50Um91dGU6IHRoaXMucHJvcHMucm91dGVyLnJvdXRlXG5cdFx0XHRcdH0sXG5cdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRhbmFseXRpY3NTZXJ2aWNlLnRyYWNrUGFnZSh0aGlzLnN0YXRlLmN1cnJlbnRSb3V0ZSlcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyBHQSBpZiBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQgeWV0XG5cdCAqL1xuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGN1cnJlbnRSb3V0ZSB9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0aWYgKCF3aW5kb3cuR0FfSU5JVElBTElaRUQpIHtcblx0XHRcdGFuYWx5dGljc1NlcnZpY2UuaW5pdGlhbGl6ZSgpXG5cdFx0XHR3aW5kb3cuR0FfSU5JVElBTElaRUQgPSB0cnVlXG5cdFx0fVxuXG5cdFx0YW5hbHl0aWNzU2VydmljZS50cmFja1BhZ2UoY3VycmVudFJvdXRlKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0PFN0b3JlUHJvdmlkZXI+XG5cdFx0XHRcdFx0PEdsb2JhbFN0eWxlcyAvPlxuXHRcdFx0XHRcdDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG5cdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG5cdFx0XHRcdFx0PC9UaGVtZVByb3ZpZGVyPlxuXHRcdFx0XHQ8L1N0b3JlUHJvdmlkZXI+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQpXG5cdH1cbn1cbiIsImltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xuXG5jbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IodHJhY2tpbmdJZCkge1xuXHRcdHRoaXMudHJhY2tpbmdJZCA9IHRyYWNraW5nSWRcblx0fVxuXHRpbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdFJlYWN0R0EuaW5pdGlhbGl6ZSh0aGlzLnRyYWNraW5nSWQpXG5cdH1cblxuXHR0cmFja1BhZ2UgPSAocGF0aCkgPT4ge1xuXHRcdFJlYWN0R0Euc2V0KHsgcGFnZTogcGF0aCB9KVxuXHRcdFJlYWN0R0EucGFnZXZpZXcocGF0aClcblx0fVxufVxuXG4vLyBUaGlzIHRyYWNraW5nSWQgc2hvdWxkIHByb2JhYmx5IGJlIGtlcHQgYXMgYSBzZWNyZXQuXG4vLyBNaWdodCBiZSBhIGJpdCBkaWZmaWN1bHQgYXMgd2UncmUgYnVpbGRpbmcgdGhpcyBzdGF0aWNhbGx5XG4vLyBhbmQgY2Fubm90IGluamVjdCBpdCBpbiB3aGlsZSBidWlsZGluZyBpdC5cbmNvbnN0IGFuYWx5dGljc1NlcnZpY2UgPSBuZXcgQW5hbHl0aWNzU2VydmljZSgnVUEtMTQ5MTcyMTkzLTEnKVxuXG5leHBvcnQgZGVmYXVsdCBhbmFseXRpY3NTZXJ2aWNlXG4iLCJleHBvcnQgY29uc3QgVVNFUl9TSUdORURfVVAgPSAnVVNFUl9TSUdORURfVVAnXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVVNFUl9TSUdORURfVVAgfSBmcm9tICcuL2FjdGlvblR5cGVzJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fVxuXG5jb25zdCBTdG9yZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSlcblxuY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBVU0VSX1NJR05FRF9VUDpcblx0XHRcdHJldHVybiB7IHVzZXI6IGFjdGlvbi5wYXlsb2FkIH1cblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHN0YXRlXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IFN0b3JlUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcih1c2VyUmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuXHRyZXR1cm4gKFxuXHRcdDxTdG9yZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIGRpc3BhdGNoIH19PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvU3RvcmVDb250ZXh0LlByb3ZpZGVyPlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCB1c2VTdG9yZSA9IChzdG9yZSkgPT4ge1xuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlQ29udGV4dChTdG9yZUNvbnRleHQpXG5cdHJldHVybiB7IHN0YXRlLCBkaXNwYXRjaCB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiR3JhcGhpa1wiO1xuICAgICAgICBzcmM6IHVybCgnLi4vc3RhdGljL2ZvbnRzL0dyYXBoaWstUmVndWxhci1XZWIud29mZicpO1xuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRmluYW5jaWVyXCI7XG4gICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvRmluYW5jaWVyVGV4dFdlYi1SZWd1bGFyLndvZmYnKVxuICAgIH1cbiAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiR3JhcGhpay1Cb2xkXCI7XG4gICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvR3JhcGhpay1Cb2xkLVdlYi53b2ZmJyk7XG4gICAgfVxuICAgIGJvZHksIGh0bWx7XG4gICAgICAgIG1hcmdpbjowO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuYFxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGVzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1nYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9