module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("sLSF"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("a7VT"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("Tit0"));

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "40lu":
/***/ (function(module, exports) {

module.exports = require("styled-components-breakpoint");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5QKa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Research
var rightToAuditPdfPath = '/static/pdfs/Data-Managment-Compliance-why-firms-are-Audited-vFinal.pdf';
var identityCrisisPdfPath = '/static/pdfs/Market-Data-Management-Identity-Crisis-value-prop.pdf';
var maturingArtPdfPath = '/static/pdfs/Market-Data-Management-Maturity-Curve-Final.pdf';
var accountabilityAndGovernancePdfPath = '/static/pdfs/Value-of-Market-Data-Admin-Exec-Summary-v27Jun16.pdf';
var dataSpendPdfPath = '/static/pdfs/FX-Impact-MD-spend-2.pdf'; // Case Studies

var caseStudiesPptPath = '/static/pdfs/MDC-case-studies.pptx'; // White Papers

var riskFactorsPdfPath = '/static/pdfs/Uncovering_FRTB_Risk_Factors.pdf'; // Surveys

var surveyInsightsPdfPath = '/static/pdfs/Market-Data-Survey-Insights-2017.pdf';
var pdfMapper = {
  rightToAudit: rightToAuditPdfPath,
  identityCrisis: identityCrisisPdfPath,
  maturingArt: maturingArtPdfPath,
  accountabilityAndGovernance: accountabilityAndGovernancePdfPath,
  dataSpend: dataSpendPdfPath,
  riskFactors: riskFactorsPdfPath,
  caseStudies: caseStudiesPptPath,
  surveyInsights: surveyInsightsPdfPath
};
/* harmony default export */ __webpack_exports__["a"] = (pdfMapper);

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "61O8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/list-item/ListItem.styled.js

var ListItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ListItemstyled__ListItemWrapper",
  componentId: "r7lddp-0"
})(["display:flex;flex-direction:column;min-height:60px;justify-content:center;align-items:center;border-bottom:solid 1px #efefef;"]);
var Label = external_styled_components_default.a.span.withConfig({
  displayName: "ListItemstyled__Label",
  componentId: "r7lddp-1"
})(["font-size:21px;font-family:", ";color:", ";"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.black;
});
// CONCATENATED MODULE: ./components/list-item/index.js



var list_item_ListItem = function ListItem(props) {
  var label = props.label,
      onClick = props.onClick;
  return external_react_default.a.createElement(ListItemWrapper, {
    onClick: onClick
  }, external_react_default.a.createElement(Label, null, label));
};

/* harmony default export */ var list_item = __webpack_exports__["a"] = (list_item_ListItem);

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AjxQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/animated-footer-link/AnimatedFooterLink.styled.js

var AnimatedFooterLinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedFooterLinkstyled__AnimatedFooterLinkWrapper",
  componentId: "djcwa6-0"
})(["display:flex;flex-direction:row;align-items:baseline;"]);
var Message = external_styled_components_default.a.h4.withConfig({
  displayName: "AnimatedFooterLinkstyled__Message",
  componentId: "djcwa6-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 8px 0 0;cursor:pointer;transition:all 0.15s ease;&:hover{margin:0 16px 0 0;opacity:0.65;}"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.mdcPurple;
});
// CONCATENATED MODULE: ./components/animated-footer-link/index.js




var animated_footer_link_AnimatedFooterLink = function AnimatedFooterLink(_ref) {
  var message = _ref.message,
      href = _ref.href,
      onClick = _ref.onClick;
  return external_react_default.a.createElement(link_default.a, {
    href: href
  }, external_react_default.a.createElement(AnimatedFooterLinkWrapper, {
    onClick: onClick
  }, external_react_default.a.createElement(Message, null, message), external_react_default.a.createElement("img", {
    src: "/static/images/arrow.png",
    srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x"
  })));
};

animated_footer_link_AnimatedFooterLink.defaultProps = {
  onClick: function onClick() {}
};
/* harmony default export */ var animated_footer_link = __webpack_exports__["a"] = (animated_footer_link_AnimatedFooterLink);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Chgs":
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "HlVv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/button/button.styled.js


function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 16px;\n    line-height: 24px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 180px;\n    height: 48px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getBackgroundColor = function getBackgroundColor(props) {
  if (props.isDefault) {
    return props.theme.colors.mdcPurple;
  } else {
    return props.theme.colors.white;
  }
};

var ButtonWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyled__ButtonWrapper",
  componentId: "ljf8l9-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:160px;height:40px;background-color:", ";border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border:none;cursor:pointer;&:hover{background-color:", ";box-shadow:", ";transform:translateY(-1px);transition:all 0.15s ease;}", ""], function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return getBackgroundColor(props);
}, function (props) {
  return props.isDefault ? '0 2px 8px 0 rgba(0, 0, 0, 0.15)' : '0 8px 16px 2px rgba(0, 0, 0, 0.15)';
}, external_styled_components_breakpoint_default()('desktop')(_templateObject()));
var ButtonText = external_styled_components_default.a.span.withConfig({
  displayName: "buttonstyled__ButtonText",
  componentId: "ljf8l9-1"
})(["font-family:", ";font-size:14px;line-height:14px;letter-spacing:0.25px;color:", ";", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.isDefault ? props.theme.colors.white : props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject2()));
// CONCATENATED MODULE: ./components/button/index.js



var button_Button = function Button(props) {
  var btnText = props.btnText,
      isDefault = props.isDefault,
      onClick = props.onClick,
      isDisabled = props.isDisabled;
  return external_react_default.a.createElement(ButtonWrapper, {
    isDefault: isDefault,
    onClick: onClick,
    disabled: isDisabled
  }, external_react_default.a.createElement(ButtonText, {
    isDefault: isDefault
  }, btnText));
};

button_Button.defaultProps = {
  isDefault: true,
  isSecondary: false
};
/* harmony default export */ var components_button = __webpack_exports__["a"] = (button_Button);

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/***/ }),

/***/ "MPXY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/label-with-arrow/LabelWithArrow.styled.js

var LabelWithArrowWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LabelWithArrowstyled__LabelWithArrowWrapper",
  componentId: "sc-1b3pixz-0"
})(["display:flex;flex-direction:row;align-items:center;&:hover{cursor:pointer;}"]);
var Label = external_styled_components_default.a.h5.withConfig({
  displayName: "LabelWithArrowstyled__Label",
  componentId: "sc-1b3pixz-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 7px 0 0;"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.mdcPurple;
});
// CONCATENATED MODULE: ./components/label-with-arrow/index.js



var label_with_arrow_LabelWithArrow = function LabelWithArrow(props) {
  var label = props.label,
      onClick = props.onClick;
  return external_react_default.a.createElement(LabelWithArrowWrapper, {
    onClick: onClick
  }, external_react_default.a.createElement(Label, null, label), external_react_default.a.createElement("img", {
    src: "/static/images/arrow.png",
    srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x"
  }));
};

/* harmony default export */ var label_with_arrow = __webpack_exports__["a"] = (label_with_arrow_LabelWithArrow);

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/index.js + 22 modules
var components = __webpack_require__("e+cM");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./sections/home-section/landing/Landing.styled.js


function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    \tmax-width: 380px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 24px;\n    line-height: 32px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 57px;\n    line-height: 64px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tbackground-image: url(\"/static/images/desktop-landing.png\");\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tbackground-image: url(\"/static/images/tablet-landing.jpg\");\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var LandingWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Landingstyled__LandingWrapper",
  componentId: "t8svsq-0"
})(["background-image:url('/static/images/mobile-landing.jpg');background-size:cover;width:100%;", " ", ""], external_styled_components_breakpoint_default()('tablet')(_templateObject()), external_styled_components_breakpoint_default()('desktop')(_templateObject2()));
var ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Landingstyled__ContentWrapper",
  componentId: "t8svsq-1"
})(["max-width:1200px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;flex:1;"]);
var Title = external_styled_components_default.a.h1.withConfig({
  displayName: "Landingstyled__Title",
  componentId: "t8svsq-2"
})(["font-family:", ";font-size:42px;line-height:44px;color:", ";padding:40px 0 12px 0;margin-bottom:16px;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject3()));
var Description = external_styled_components_default.a.h1.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "t8svsq-3"
})(["font-family:", ";font-weight:400;font-size:21px;line-height:24px;color:", ";margin:0 0 42px 0;text-align:left;max-width:720px;", ""], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject4()));
var ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Landingstyled__ButtonWrapper",
  componentId: "t8svsq-4"
})(["display:flex;flex-direction:row;justify-content:space-between;max-width:340px;margin:0 0 38px 0;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject5()));
// EXTERNAL MODULE: ./components/button/index.js + 1 modules
var components_button = __webpack_require__("HlVv");

// EXTERNAL MODULE: ./components/tab-bar/index.js + 1 modules
var tab_bar = __webpack_require__("oQsg");

// CONCATENATED MODULE: ./sections/home-section/landing/index.js






var landing_Landing = function Landing() {
  return external_react_default.a.createElement(LandingWrapper, null, external_react_default.a.createElement(ContentWrapper, null, external_react_default.a.createElement(tab_bar["a" /* default */], null), external_react_default.a.createElement(Title, null, "Industry research by", external_react_default.a.createElement("br", null), " industry experts."), external_react_default.a.createElement(Description, null, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions."), external_react_default.a.createElement(ButtonWrapper, null, external_react_default.a.createElement(components_button["a" /* default */], {
    btnText: "View Research",
    onClick: function onClick() {
      return router_default.a.push('/research');
    }
  }), external_react_default.a.createElement(components_button["a" /* default */], {
    btnText: "Contact us",
    isDefault: false,
    onClick: function onClick() {
      return router_default.a.push('/contact');
    }
  }))));
};

/* harmony default export */ var landing = (landing_Landing);
// EXTERNAL MODULE: ./components/animated-footer-link/index.js + 1 modules
var animated_footer_link = __webpack_require__("AjxQ");

// CONCATENATED MODULE: ./sections/home-section/leader-market-data/LeaderMarketData.styled.js


function _templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\tfont-size: 48px;\n\tline-height: 48px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 38px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    flex-direction: column;\n\tjustify-content: flex-start;\n\tmargin-left: 40px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function LeaderMarketData_styled_templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tfont-size: 24px;\n\t\tline-height: 30px;\n\t"]);

  LeaderMarketData_styled_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function LeaderMarketData_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    max-width: 780px;\n  "]);

  LeaderMarketData_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function LeaderMarketData_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tfont-size: 36px;\n\t\tline-height: 48px;\n  "]);

  LeaderMarketData_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function LeaderMarketData_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    flex-direction: row;\n    justify-content: space-between;\n  "]);

  LeaderMarketData_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function LeaderMarketData_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin: 96px 0 151px 0;\n  "]);

  LeaderMarketData_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var LeaderMarketDataWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__LeaderMarketDataWrapper",
  componentId: "sc-1rb8ak0-0"
})(["display:flex;flex-direction:column;flex:1;background-color:", ";margin:40px 0 75px 0;", ""], function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(LeaderMarketData_styled_templateObject()));
var Content = external_styled_components_default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__Content",
  componentId: "sc-1rb8ak0-1"
})(["display:flex;flex-direction:column;margin-bottom:20px;", ""], external_styled_components_breakpoint_default()('desktop')(LeaderMarketData_styled_templateObject2()));
var LeaderMarketData_styled_Title = external_styled_components_default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__Title",
  componentId: "sc-1rb8ak0-2"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 20px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(LeaderMarketData_styled_templateObject3()));
var InfoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__InfoWrapper",
  componentId: "sc-1rb8ak0-3"
})(["display:flex;flex-direction:column;", ""], external_styled_components_breakpoint_default()('desktop')(LeaderMarketData_styled_templateObject4()));
var InfoText = external_styled_components_default.a.p.withConfig({
  displayName: "LeaderMarketDatastyled__InfoText",
  componentId: "sc-1rb8ak0-4"
})(["font-family:", ";font-size:18px;line-height:26px;color:", ";margin:0 0 24px 0;", "\t"], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(LeaderMarketData_styled_templateObject5()));
var FactsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__FactsWrapper",
  componentId: "sc-1rb8ak0-5"
})(["display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject6()));
var ProjectsCompletedWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__ProjectsCompletedWrapper",
  componentId: "sc-1rb8ak0-6"
})(["display:flex;flex-direction:column;margin-right:40px;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject7()));
var NumberText = external_styled_components_default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__NumberText",
  componentId: "sc-1rb8ak0-7"
})(["font-family:", ";font-size:36px;line-height:36px;color:", ";margin:0 0 10px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.mdcPurple;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject8()));
var FactsText = external_styled_components_default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__FactsText",
  componentId: "sc-1rb8ak0-8"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.lightGrey;
});
var FooterText = external_styled_components_default.a.a.withConfig({
  displayName: "LeaderMarketDatastyled__FooterText",
  componentId: "sc-1rb8ak0-9"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.mdcPurple;
});
// CONCATENATED MODULE: ./sections/home-section/leader-market-data/index.js




var leader_market_data_LeaderMarketData = function LeaderMarketData() {
  return external_react_default.a.createElement(LeaderMarketDataWrapper, null, external_react_default.a.createElement(Content, null, external_react_default.a.createElement(InfoWrapper, null, external_react_default.a.createElement(LeaderMarketData_styled_Title, null, "Leader in market data consulting"), external_react_default.a.createElement(InfoText, null, "Market Data Company is a professional consulting firm with experts skilled in market data products, solutions and contract vendor management. We are committed to helping teams uncover insights that improve how they manage their market and reference data relationships."), external_react_default.a.createElement(InfoText, null, "We partner with our clients to answer the growing demands of their business by providing the expertise in the details that lead to increased profitability. Specifically, we offer a series of diagnostic tools that drive down costs while optimizing services.")), external_react_default.a.createElement(FactsWrapper, null, external_react_default.a.createElement(ProjectsCompletedWrapper, null, external_react_default.a.createElement(NumberText, null, "106"), external_react_default.a.createElement(FactsText, null, "Projects completed")), external_react_default.a.createElement(ProjectsCompletedWrapper, null, external_react_default.a.createElement(NumberText, null, "$154MM"), external_react_default.a.createElement(FactsText, null, "Client dollars saved")))));
};

/* harmony default export */ var leader_market_data = (leader_market_data_LeaderMarketData);
// EXTERNAL MODULE: ./components/animated-card/index.js + 1 modules
var animated_card = __webpack_require__("lltq");

// CONCATENATED MODULE: ./sections/home-section/research/Research.styled.js


function Research_styled_templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 0;\n    margin-right: 20px;\n    &:last-child {\n      margin-right: 0;\n    }\n  "]);

  Research_styled_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Research_styled_templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    flex-direction: row;\n    margin-bottom: 35px;\n  "]);

  Research_styled_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Research_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 24px;\n    line-height: 30px;\n  "]);

  Research_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Research_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 36px;\n    line-height: 48px;\n  "]);

  Research_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Research_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    max-width: 780px;\n"]);

  Research_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Research_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 160px;\n  "]);

  Research_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Researchstyled__ResearchWrapper",
  componentId: "sc-1uddaix-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:80px;", ""], external_styled_components_breakpoint_default()('desktop')(Research_styled_templateObject()));
var HeaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Researchstyled__HeaderWrapper",
  componentId: "sc-1uddaix-1"
})(["display:flex;flex-direction:column;aligh-items:flex-start;margin-bottom:55px;", ""], external_styled_components_breakpoint_default()('desktop')(Research_styled_templateObject2()));
var HeaderTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "Researchstyled__HeaderTitle",
  componentId: "sc-1uddaix-2"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 13px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(Research_styled_templateObject3()));
var HeaderDescription = external_styled_components_default.a.p.withConfig({
  displayName: "Researchstyled__HeaderDescription",
  componentId: "sc-1uddaix-3"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;", ""], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(Research_styled_templateObject4()));
var CardContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Researchstyled__CardContentWrapper",
  componentId: "sc-1uddaix-4"
})(["display:flex;flex-direction:column;margin-bottom:16px;", ""], external_styled_components_breakpoint_default()('desktop')(Research_styled_templateObject5()));
var CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Researchstyled__CardWrapper",
  componentId: "sc-1uddaix-5"
})(["margin-bottom:20px;", ""], external_styled_components_breakpoint_default()('desktop')(Research_styled_templateObject6()));
var Footer = external_styled_components_default.a.span.withConfig({
  displayName: "Researchstyled__Footer",
  componentId: "sc-1uddaix-6"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.mdcPurple;
});
// CONCATENATED MODULE: ./sections/home-section/research/index.js





var research_Research = function Research(_ref) {
  var _onClick = _ref.onClick;
  return external_react_default.a.createElement(ResearchWrapper, null, external_react_default.a.createElement(HeaderWrapper, null, external_react_default.a.createElement(HeaderTitle, null, "Research & Case Studies"), external_react_default.a.createElement(HeaderDescription, null, "MDC has completed extensive research over the past 10 years. Our findings have been linked to the strength of a firms operational management, and can be used to improve capabilities across client intelligence, trading strategies, and business productivity.")), external_react_default.a.createElement(CardContentWrapper, null, external_react_default.a.createElement(CardWrapper, null, external_react_default.a.createElement(animated_card["a" /* default */], {
    title: "Data Management Compliance: The Right to Audit",
    description: "THE RIGHT TO AUDIT is a common phrase used in most every Data Vendor or Exchange Agreement (Data Provider Agreements). It is neither new, misunderstood, nor misrepresented. Yet this term has wreaked havoc of late, as it exposes the three modern day plagues causing considerable distress amongst financial...",
    onClick: function onClick() {
      return _onClick('rightToAudit');
    }
  })), external_react_default.a.createElement(CardWrapper, null, external_react_default.a.createElement(animated_card["a" /* default */], {
    title: "The Value of Market Data Administration: Transparency, Accountability & Governance",
    description: "AS FINANCIAL FIRMS GRAPPLE with increasing demands for market data, dealing with the number and complexity of market data licenses and subscriptions can be overwhelming. The volume and variety challenges their ability to effectively manage costs, control user-access, monitor usage, and produce ...",
    onClick: function onClick() {
      return _onClick('accountabilityAndGovernance');
    }
  })), external_react_default.a.createElement(CardWrapper, null, external_react_default.a.createElement(animated_card["a" /* default */], {
    title: "MDC Forecasts 10-13% Increase in Data Spend",
    description: "WITHOUT ANY CHANGE to consumption, service mix, or even annual price increases, Canadian-based financial services firms can expect a +10% price increase in their Market and Reference Data spend for 2014. To understand why, firms need only look to the fall of the CAD$ relative to the US$ for the change that will impact their general ledgers...",
    onClick: function onClick() {
      return _onClick('dataSpend');
    }
  }))), external_react_default.a.createElement(animated_footer_link["a" /* default */], {
    message: "View all of our research",
    href: "/research"
  }));
};

/* harmony default export */ var research = (research_Research);
// CONCATENATED MODULE: ./sections/home-section/services/Services.styled.js


function _templateObject11() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-top: -98px;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    text-align: left;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    max-width: 380px;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function Services_styled_templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\twidth: 160px;\n\theight: 160px;\n  "]);

  Services_styled_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function Services_styled_templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\twidth: 80px;\n\theight: 80px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  "]);

  Services_styled_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function Services_styled_templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    flex-direction: row;\n    align-items: flex-start;\n    width: 48%;\n    margin-bottom: 64px;\n  "]);

  Services_styled_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function Services_styled_templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    margin-bottom: 16px;\n  "]);

  Services_styled_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Services_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 24px;\n    line-height: 30px;\n  "]);

  Services_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Services_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 36px;\n    line-height: 48px;\n  "]);

  Services_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Services_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 49px;\n    max-width: 780px;\n  "]);

  Services_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Services_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 160px;\n  "]);

  Services_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ServicesWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Servicesstyled__ServicesWrapper",
  componentId: "xea5xp-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:83px;", ""], external_styled_components_breakpoint_default()('desktop')(Services_styled_templateObject()));
var Services_styled_HeaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Servicesstyled__HeaderWrapper",
  componentId: "xea5xp-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:43px;", ""], external_styled_components_breakpoint_default()('desktop')(Services_styled_templateObject2()));
var Services_styled_HeaderTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "Servicesstyled__HeaderTitle",
  componentId: "xea5xp-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 20px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('tablet')(Services_styled_templateObject3()));
var Services_styled_HeaderDescription = external_styled_components_default.a.p.withConfig({
  displayName: "Servicesstyled__HeaderDescription",
  componentId: "xea5xp-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ""], function (props) {
  return props.theme.fonts.financier;
}, external_styled_components_breakpoint_default()('tablet')(Services_styled_templateObject4()));
var Services_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Servicesstyled__ContentWrapper",
  componentId: "xea5xp-4"
})(["display:flex;flex-direction:column;margin-bottom:34px;", ""], external_styled_components_breakpoint_default()('tablet')(Services_styled_templateObject5()));
var Services_styled_CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Servicesstyled__CardWrapper",
  componentId: "xea5xp-5"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:26px;", ""], external_styled_components_breakpoint_default()('tablet')(Services_styled_templateObject6()));
var CardImage = external_styled_components_default.a.img.withConfig({
  displayName: "Servicesstyled__CardImage",
  componentId: "xea5xp-6"
})(["margin-bottom:20px;width:140px;height:140px;", " ", ""], external_styled_components_breakpoint_default()('tablet')(Services_styled_templateObject7()), external_styled_components_breakpoint_default()('desktop')(Services_styled_templateObject8()));
var CardContent = external_styled_components_default.a.div.withConfig({
  displayName: "Servicesstyled__CardContent",
  componentId: "xea5xp-7"
})(["display:flex;flex-direction:column;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject9()));
var CardTitle = external_styled_components_default.a.span.withConfig({
  displayName: "Servicesstyled__CardTitle",
  componentId: "xea5xp-8"
})(["font-family:", ";font-size:18px;line-height:24px;color:", ";margin-bottom:7px;text-align:center;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('tablet')(_templateObject10()));
var CardDescription = external_styled_components_default.a.p.withConfig({
  displayName: "Servicesstyled__CardDescription",
  componentId: "xea5xp-9"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;"], function (props) {
  return props.theme.fonts.financier;
});
var Services_styled_FooterText = external_styled_components_default.a.a.withConfig({
  displayName: "Servicesstyled__FooterText",
  componentId: "xea5xp-10"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}", ""], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.mdcPurple;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject11()));
// CONCATENATED MODULE: ./sections/home-section/services/index.js




var services_Services = function Services() {
  return external_react_default.a.createElement(ServicesWrapper, null, external_react_default.a.createElement(Services_styled_HeaderWrapper, null, external_react_default.a.createElement(Services_styled_HeaderTitle, null, "How our services add value for you"), external_react_default.a.createElement(Services_styled_HeaderDescription, null, "Taking Benchmarking to an entirely different level, our marketing data services offers you exceptional insight into the capital markets industry. With our current solutions, you gain the insights to take your strategy to the next level.")), external_react_default.a.createElement(Services_styled_ContentWrapper, null, external_react_default.a.createElement(Services_styled_CardWrapper, null, external_react_default.a.createElement(CardImage, {
    src: "/static/images/managed-services.png",
    srcSet: "/static/images/managed-services@1x.png 1x, /static/images/managed-services@2x.png 2x, /static/images/managed-services@3x.png 3x",
    width: "177",
    height: "177"
  }), external_react_default.a.createElement(CardContent, null, external_react_default.a.createElement(CardTitle, null, "Managed services & products"), external_react_default.a.createElement(CardDescription, null, "Our clients care about providing the right type of market data to their stakeholders. That's why our proprietary per security analyzer Kiaro product has been pivotal in monitoring how Bloomberg Per Security is replicating data across business applications, allowing us to accurately and rapidly assess where firms can optimize their data."))), external_react_default.a.createElement(Services_styled_CardWrapper, null, external_react_default.a.createElement(CardImage, {
    src: "/static/images/measure-compare.png",
    srcSet: "/static/images/measure-compare@1x.png 1x, /static/images/measure-compare@2x.png 2x, /static/images/measure-compare@3x.png 3x",
    width: "177",
    height: "177"
  }), external_react_default.a.createElement(CardContent, null, external_react_default.a.createElement(CardTitle, null, "Measure & compare data costs"), external_react_default.a.createElement(CardDescription, null, "We have done extensive research over the past 10 years through our qualitative and quantitative analytics. As a result, we've developed an approach to compare individual company data to our proprietary industry benchmark. Our findings have been linked to the strength of a firms operational management and its short and long term investment strategy."))), external_react_default.a.createElement(Services_styled_CardWrapper, null, external_react_default.a.createElement(CardImage, {
    src: "/static/images/match-demand.png",
    srcSet: "/static/images/match-demand@1x.png 1x, /static/images/match-demand@2x.png 2x, /static/images/match-demand@3x.png 3x",
    width: "177",
    height: "177"
  }), external_react_default.a.createElement(CardContent, null, external_react_default.a.createElement(CardTitle, null, "Match your strategy to the market data demand"), external_react_default.a.createElement(CardDescription, null, "With expert knowledge of both your industry and your customer\u2019s needs, you can keep your data consumption activities appropriate while optimizing your commercial obligations."))), external_react_default.a.createElement(Services_styled_CardWrapper, null, external_react_default.a.createElement(CardImage, {
    src: "/static/images/benchmark.png",
    srcSet: "/static/images/benchmark@1x.png 1x, /static/images/benchmark@2x.png 2x, /static/images/benchmark@3x.png 3x",
    width: "177",
    height: "177"
  }), external_react_default.a.createElement(CardContent, null, external_react_default.a.createElement(CardTitle, null, "Capital market spend benchmarking"), external_react_default.a.createElement(CardDescription, null, "Our benchmark adds exponential value through its categorization of market data products and services: technology, investments, productivity, operations, human resource strategies, and a host of other business functions. It\u2019s a peer group assessment of our client\u2019s 160 market data activities against a set of best practices. Our benchmark has inspired discussions that explore qualitative measures \u2013 enhancing performance against benchmarks.")))), external_react_default.a.createElement(animated_footer_link["a" /* default */], {
    message: "Get in touch to learn more",
    href: "/contact"
  }));
};

/* harmony default export */ var services = (services_Services);
// CONCATENATED MODULE: ./sections/home-section/why-mdc/WhyMdc.styled.js


function WhyMdc_styled_templateObject9() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 16px;\n    line-height: 22px;\n    max-width: 450px;\n  "]);

  WhyMdc_styled_templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 18px;\n    line-height: 24px;\n  "]);

  WhyMdc_styled_templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-right: 16px;\n  "]);

  WhyMdc_styled_templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 48%;\n  "]);

  WhyMdc_styled_templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    flex-direction: row;\n    justify-content: space-between;\n    flex-wrap: wrap;\n  "]);

  WhyMdc_styled_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tfont-size: 24px;\n\t\tline-height: 30px;\n"]);

  WhyMdc_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 36px;\n    line-height: 48px;\n    margin: 0 0 17px 0;\n  "]);

  WhyMdc_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["     \n\t\tmax-width: 780px;\n  "]);

  WhyMdc_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function WhyMdc_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 100px;\n  "]);

  WhyMdc_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ICON_MARGIN = '35px';
var WhyMdcWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WhyMdcstyled__WhyMdcWrapper",
  componentId: "sc-18f360v-0"
})(["display:flex;flex-direction:column;align-self:center flex:1;margin-bottom:60px;", ""], external_styled_components_breakpoint_default()('desktop')(WhyMdc_styled_templateObject()));
var HeadingWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WhyMdcstyled__HeadingWrapper",
  componentId: "sc-18f360v-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:40px;", ""], external_styled_components_breakpoint_default()('tablet')(WhyMdc_styled_templateObject2()));
var HeadingTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "WhyMdcstyled__HeadingTitle",
  componentId: "sc-18f360v-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 14px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('desktop')(WhyMdc_styled_templateObject3()));
var HeadingDescription = external_styled_components_default.a.p.withConfig({
  displayName: "WhyMdcstyled__HeadingDescription",
  componentId: "sc-18f360v-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0;", ""], function (props) {
  return props.theme.fonts.financier;
}, external_styled_components_breakpoint_default()('desktop')(WhyMdc_styled_templateObject4()));
var WhyMdc_styled_Content = external_styled_components_default.a.div.withConfig({
  displayName: "WhyMdcstyled__Content",
  componentId: "sc-18f360v-4"
})(["display:flex;flex-direction:column;", ""], external_styled_components_breakpoint_default()('tablet')(WhyMdc_styled_templateObject5()));
var WhyMdc_styled_CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WhyMdcstyled__CardWrapper",
  componentId: "sc-18f360v-5"
})(["display:flex;flex-direction:column;margin-bottom:27px;", ""], external_styled_components_breakpoint_default()('tablet')(WhyMdc_styled_templateObject6()));
var CardTitleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WhyMdcstyled__CardTitleWrapper",
  componentId: "sc-18f360v-6"
})(["display:flex;flex-direction:row;"]);
var CardTitleIcon = external_styled_components_default.a.img.withConfig({
  displayName: "WhyMdcstyled__CardTitleIcon",
  componentId: "sc-18f360v-7"
})(["height:27px;width:27px;margin-right:8px;", ""], external_styled_components_breakpoint_default()('desktop')(WhyMdc_styled_templateObject7()));
var WhyMdc_styled_CardTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "WhyMdcstyled__CardTitle",
  componentId: "sc-18f360v-8"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 10px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('desktop')(WhyMdc_styled_templateObject8()));
var WhyMdc_styled_CardDescription = external_styled_components_default.a.p.withConfig({
  displayName: "WhyMdcstyled__CardDescription",
  componentId: "sc-18f360v-9"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 0 ", ";", ""], function (props) {
  return props.theme.fonts.financier;
}, ICON_MARGIN, external_styled_components_breakpoint_default()('desktop')(WhyMdc_styled_templateObject9()));
// CONCATENATED MODULE: ./sections/home-section/why-mdc/index.js


var descriptionData = [{
  title: 'The right people, solving the right problems with passion',
  description: 'Our people bring a mix of expertise to solve problems with a different, more dedicated mindset, devising powerful tools and solutions for our clients’ toughest challenges.'
}, {
  title: 'Highly effective market data governance structure',
  description: 'Our approach brings together a highly effective discipline that focuses on process, controls and process.'
}, {
  title: 'We’ve saved upwards of 35% on total data spend for our clients',
  description: 'At the end of the day, it’s our clients bottom line that we take care of, and the results speak for themselves.'
}, {
  title: 'Market data benchmarking with proven results',
  description: 'We create results that are predicated on our strengths surrounding benchmarking Market Data Vendors.'
}];

var why_mdc_Card = function Card(props) {
  var title = props.title,
      description = props.description;
  return external_react_default.a.createElement(WhyMdc_styled_CardWrapper, null, external_react_default.a.createElement(CardTitleWrapper, null, external_react_default.a.createElement(CardTitleIcon, {
    src: "/static/images/checkmark.png",
    srcSet: "/static/images/checkmark@1x.png 1x, /static/images/checkmark@2x.png 2x, /static/images/checkmark@3x.png 3x"
  }), external_react_default.a.createElement(WhyMdc_styled_CardTitle, null, title)), external_react_default.a.createElement(WhyMdc_styled_CardDescription, null, description));
};

var why_mdc_WhyMdc = function WhyMdc() {
  var renderDescription = function renderDescription() {
    return descriptionData.map(function (data) {
      var title = data.title,
          description = data.description;
      return external_react_default.a.createElement(why_mdc_Card, {
        key: title,
        title: title,
        description: description
      });
    });
  };

  return external_react_default.a.createElement(WhyMdcWrapper, null, external_react_default.a.createElement(HeadingWrapper, null, external_react_default.a.createElement(HeadingTitle, null, "Why Market Data Company?"), external_react_default.a.createElement(HeadingDescription, null, "From inception, our focus has been on the complexities of market data and the critical third-party relationships built through data providers within the Capital Markets and Wealth Management industries.")), external_react_default.a.createElement(WhyMdc_styled_Content, null, renderDescription()));
};

/* harmony default export */ var why_mdc = (why_mdc_WhyMdc);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./components/company-card/index.js + 1 modules
var company_card = __webpack_require__("SPDB");

// CONCATENATED MODULE: ./sections/home-section/worked-with/WorkedWith.styled.js


function WorkedWith_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\ttransform: scale(0.8);\n\t"]);

  WorkedWith_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function WorkedWith_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmargin-bottom: 0; \n\t\ttransform: scale(0.6);\n\t\twidth: 25%;\n\t"]);

  WorkedWith_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function WorkedWith_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tfont-size: 24px;\n\t\tline-height: 30px;\n\t\tmax-width: 780px;\n\t"]);

  WorkedWith_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function WorkedWith_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tfont-size: 36px;\n\t\tline-height: 48px;\n\t"]);

  WorkedWith_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var WorkedWithWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WorkedWithstyled__WorkedWithWrapper",
  componentId: "sc-10nv40i-0"
})(["display:flex;flex-direction:column;flex:1;align-items:flex-start;margin-bottom:120px;"]);
var WorkedWith_styled_Title = external_styled_components_default.a.h1.withConfig({
  displayName: "WorkedWithstyled__Title",
  componentId: "sc-10nv40i-1"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 20px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('tablet')(WorkedWith_styled_templateObject()));
var WorkedWith_styled_Description = external_styled_components_default.a.p.withConfig({
  displayName: "WorkedWithstyled__Description",
  componentId: "sc-10nv40i-2"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0 0 46px 0;", ""], function (props) {
  return props.theme.fonts.financier;
}, external_styled_components_breakpoint_default()('desktop')(WorkedWith_styled_templateObject2()));
var WorkedWith_styled_CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WorkedWithstyled__CardWrapper",
  componentId: "sc-10nv40i-3"
})(["margin-bottom:47px;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);"]);
var LogoContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WorkedWithstyled__LogoContentWrapper",
  componentId: "sc-10nv40i-4"
})(["display:flex;flex:1;align-items:center;justify-content:space-between;flex-wrap:wrap;width:100%;"]);
var LogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "WorkedWithstyled__LogoWrapper",
  componentId: "sc-10nv40i-5"
})(["width:48%;margin-bottom:40px;transform:scale(0.75);display:flex;justify-content:center;", " ", ""], external_styled_components_breakpoint_default()('tablet')(WorkedWith_styled_templateObject3()), external_styled_components_breakpoint_default()('desktop')(WorkedWith_styled_templateObject4()));
// CONCATENATED MODULE: ./sections/home-section/worked-with/index.js






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

var worked_with_WorkedWith = function WorkedWith() {
  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

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
    return external_react_default.a.createElement(external_reactstrap_["CarouselItem"], {
      onExiting: onExiting,
      onExited: onExited,
      key: item.company
    }, external_react_default.a.createElement(company_card["a" /* default */], {
      title: item.title,
      description: item.description,
      role: item.role,
      company: item.company,
      imageUrl: item.imageUrl,
      onNext: next
    }));
  });
  return external_react_default.a.createElement(WorkedWithWrapper, null, external_react_default.a.createElement(WorkedWith_styled_Title, null, "Who we\u2019ve worked with"), external_react_default.a.createElement(WorkedWith_styled_Description, null, "Our consultants are industry experts in market and reference data products, as well as investment management solutions. We deliver results that make a difference."), external_react_default.a.createElement(WorkedWith_styled_CardWrapper, null, external_react_default.a.createElement(external_reactstrap_["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: function previous() {},
    interval: false
  }, carouselItems)), external_react_default.a.createElement(LogoContentWrapper, null, external_react_default.a.createElement(LogoWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/cppib.png",
    srcSet: "/static/images/cppib@1x.png 1x, /static/images/cppib@2x.png 2x, /static/images/cppib@3x.png 3x"
  })), external_react_default.a.createElement(LogoWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/psp.png",
    srcSet: "/static/images/psp@1x.png 1x, /static/images/psp@2x.png 2x, /static/images/psp@3x.png 3x"
  })), external_react_default.a.createElement(LogoWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/aviva.png",
    srcSet: "/static/images/aviva@1x.png 1x, /static/images/aviva@2x.png 2x, /static/images/aviva@3x.png 3x"
  })), external_react_default.a.createElement(LogoWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/swiss-re.png",
    srcSet: "/static/images/swiss-re@1x.png 1x, /static/images/swiss-re@2x.png 2x, /static/images/swiss-re@3x.png 3x"
  }))));
};

/* harmony default export */ var worked_with = (worked_with_WorkedWith);
// CONCATENATED MODULE: ./sections/home-section/index.js






// EXTERNAL MODULE: ./utils/pdfMapper.js
var pdfMapper = __webpack_require__("5QKa");

// EXTERNAL MODULE: ./utils/validator.js
var validator = __webpack_require__("THFB");

// EXTERNAL MODULE: ./services/apiService.js + 1 modules
var apiService = __webpack_require__("W5CI");

// EXTERNAL MODULE: ./store/useStore.js
var useStore = __webpack_require__("y4cE");

// EXTERNAL MODULE: ./store/actionTypes.js
var actionTypes = __webpack_require__("k2H8");

// CONCATENATED MODULE: ./pages/index.js








 // Utils







var pages_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1cvwks4-0"
})(["max-width:1200px;padding:0 20px;margin:0 auto;"]);

var pages_Home = function Home() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = Object(slicedToArray["a" /* default */])(_useState3, 2),
      hasError = _useState4[0],
      setHasError = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = Object(slicedToArray["a" /* default */])(_useState5, 2),
      emailSent = _useState6[0],
      setEmailSent = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(''),
      _useState8 = Object(slicedToArray["a" /* default */])(_useState7, 2),
      pdfForm = _useState8[0],
      setPdfForm = _useState8[1];

  var _useState9 = Object(external_react_["useState"])({
    firstName: '',
    company: '',
    email: ''
  }),
      _useState10 = Object(slicedToArray["a" /* default */])(_useState9, 2),
      form = _useState10[0],
      setFormValues = _useState10[1]; // Hooks to save the users form data


  var _useStore = Object(useStore["b" /* useStore */])(),
      state = _useStore.state,
      dispatch = _useStore.dispatch;

  var saveUser = Object(external_react_["useCallback"])(function (formValues) {
    return dispatch({
      type: actionTypes["a" /* USER_SIGNED_UP */],
      payload: formValues
    });
  }, [dispatch]);

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref = Object(asyncToGenerator["a" /* default */])(
    /*#__PURE__*/
    regenerator_default.a.mark(function _callee() {
      var res;
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Object(apiService["a" /* sendEmail */])(form);

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
    setFormValues(Object(objectSpread["a" /* default */])({}, form, Object(defineProperty["a" /* default */])({}, e.target.name, e.target.value)));
  };

  var onModalClose = function onModalClose() {
    setModalVisible(false);
    setEmailSent(false);
  };

  var openModal = function openModal(researchForm) {
    setModalVisible(true);
    setPdfForm(pdfMapper["a" /* default */][researchForm]);
  };

  var isDisabled = !form.firstName && !Object(validator["a" /* validateEmail */])(form.email);
  return external_react_default.a.createElement(components["d" /* Layout */], null, external_react_default.a.createElement(landing, null), external_react_default.a.createElement(components["e" /* Modal */], {
    modalVisible: modalVisible,
    onRequestClose: onModalClose
  }, !emailSent && !hasError && !state.user && external_react_default.a.createElement(components["f" /* ResearchPdfForm */], {
    firstName: form.firstName,
    company: form.company,
    email: form.email,
    onChange: updateField,
    isDisabled: isDisabled,
    onRequestClose: onModalClose,
    onSubmit: onSubmit,
    pdfForm: pdfForm
  }), !emailSent && !hasError && state.user && external_react_default.a.createElement(components["g" /* StartDownloadForm */], {
    onRequestClose: onModalClose,
    pdfForm: pdfForm,
    onSubmit: function onSubmit() {
      return setEmailSent(true);
    }
  }), emailSent && !hasError && external_react_default.a.createElement(components["h" /* ThankYou */], {
    description: "Your download should start automatically. Enjoy!",
    footerMessage: "Back to research",
    href: "/research",
    onClick: onModalClose
  })), external_react_default.a.createElement(pages_ContentWrapper, null, external_react_default.a.createElement(leader_market_data, null), external_react_default.a.createElement(worked_with, null), external_react_default.a.createElement(why_mdc, null), external_react_default.a.createElement(services, null), external_react_default.a.createElement(research, {
    onClick: openModal
  })), external_react_default.a.createElement(components["b" /* ContactFooter */], null));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "SPDB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/label-with-arrow/index.js + 1 modules
var label_with_arrow = __webpack_require__("MPXY");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/company-card/CompanyCard.styled.js


function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmargin-bottom: 0;\n  \t"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tfont-size: 21px;\n\t\tline-height: 28px;\n\t\tmargin-bottom: 8px;\n  \t"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\tmargin: 32px 6%;\n\tmin-height: 0;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmin-width: 476px;\n  \t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tflex-direction: row;\n\t\tflex: 1;\n\t\twidth: 100%;\n\t\tmin-height: 285px;\n  \t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var CompanyCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__CompanyCardWrapper",
  componentId: "u0cwbv-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject()));
var ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__ImageWrapper",
  componentId: "u0cwbv-1"
})(["min-height:220px;width:100%;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject2()));
var StyledImage = external_styled_components_default.a.img.withConfig({
  displayName: "CompanyCardstyled__StyledImage",
  componentId: "u0cwbv-2"
})(["width:100%;height:100%;object-fit:fill;"]);
var ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__ContentWrapper",
  componentId: "u0cwbv-3"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px;min-height:320px;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject3()));
var DescriptionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__DescriptionWrapper",
  componentId: "u0cwbv-4"
})(["display:flex;flex-direction:column;margin-bottom:33px;"]);
var Title = external_styled_components_default.a.h1.withConfig({
  displayName: "CompanyCardstyled__Title",
  componentId: "u0cwbv-5"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 6px 0;", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject4()));
var DescriptionText = external_styled_components_default.a.p.withConfig({
  displayName: "CompanyCardstyled__DescriptionText",
  componentId: "u0cwbv-6"
})(["font-family:", ";font-size:21px;line-height:26px;letter-spacing:-0.11px;margin:0;"], function (props) {
  return props.theme.fonts.financier;
});
var FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__FooterWrapper",
  componentId: "u0cwbv-7"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-bottom:20px;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject5()));
var RoleText = external_styled_components_default.a.p.withConfig({
  displayName: "CompanyCardstyled__RoleText",
  componentId: "u0cwbv-8"
})(["font-family:", ";font-size:16px;line-height:21px;color:", ";margin:0;"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.lightGrey;
});
var NextTag = external_styled_components_default.a.a.withConfig({
  displayName: "CompanyCardstyled__NextTag",
  componentId: "u0cwbv-9"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.mdcPurple;
});
// CONCATENATED MODULE: ./components/company-card/index.js




var company_card_CompanyCard = function CompanyCard(props) {
  var title = props.title,
      description = props.description,
      role = props.role,
      company = props.company,
      onNext = props.onNext,
      imageUrl = props.imageUrl;
  return external_react_default.a.createElement(CompanyCardWrapper, null, external_react_default.a.createElement(ImageWrapper, null, external_react_default.a.createElement(StyledImage, {
    src: "/static/images/".concat(imageUrl, ".png"),
    srcSet: "/static/images/".concat(imageUrl, "@1x.png 1x, /static/images/").concat(imageUrl, "@2x.png 2x,\n                                 /static/images/").concat(imageUrl, "@3x.png 3x")
  })), external_react_default.a.createElement(ContentWrapper, null, external_react_default.a.createElement(DescriptionWrapper, null, external_react_default.a.createElement(Title, null, title), external_react_default.a.createElement(DescriptionText, null, description)), external_react_default.a.createElement(FooterWrapper, null, external_react_default.a.createElement(RoleText, null, role), external_react_default.a.createElement(label_with_arrow["a" /* default */], {
    label: company,
    onClick: onNext
  }))));
};

/* harmony default export */ var company_card = __webpack_exports__["a"] = (company_card_CompanyCard);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "SriO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/list-item/index.js + 1 modules
var list_item = __webpack_require__("61O8");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/hamburger-menu-content/HamburgerMenuContent.styled.js

var HamburgerMenuContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__HamburgerMenuContentWrapper",
  componentId: "sc-12ib83-0"
})(["display:flex;flex-direction:column;background-color:", ";width:100%;"], function (props) {
  return props.theme.colors.white;
});
var Header = external_styled_components_default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__Header",
  componentId: "sc-12ib83-1"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;margin-bottom:60px;"]);
// CONCATENATED MODULE: ./components/hamburger-menu-content/index.js





var hamburger_menu_content_HamburgerMenuContent = function HamburgerMenuContent(props) {
  var onCloseModal = props.onCloseModal;
  return external_react_default.a.createElement(HamburgerMenuContentWrapper, null, external_react_default.a.createElement(Header, null, external_react_default.a.createElement("div", {
    onClick: function onClick() {
      return router_default.a.push('/');
    }
  }, external_react_default.a.createElement("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x"
  })), external_react_default.a.createElement("div", {
    onClick: onCloseModal
  }, external_react_default.a.createElement("img", {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x"
  }))), external_react_default.a.createElement(list_item["a" /* default */], {
    label: "Research",
    onClick: function onClick() {
      return router_default.a.push('/research');
    }
  }), external_react_default.a.createElement(list_item["a" /* default */], {
    label: "Contact us",
    onClick: function onClick() {
      return router_default.a.push('/contact');
    }
  }));
};

/* harmony default export */ var hamburger_menu_content = __webpack_exports__["a"] = (hamburger_menu_content_HamburgerMenuContent);

/***/ }),

/***/ "THFB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateEmail; });
var validateEmail = function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("SqZg");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(subClass, superClass);
}

/***/ }),

/***/ "UJvz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7koQ");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);


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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: modalVisible,
    onRequestClose: onRequestClose,
    style: customStyles
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (MDCModal);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VLay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "W5CI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./services/apiEndpoints.js
var EMAIL_ENDPOINT = 'https://market-data-company-server.herokuapp.com/email';
// CONCATENATED MODULE: ./services/apiService.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendEmail; });





var sendEmail =
/*#__PURE__*/
function () {
  var _ref = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(payload) {
    var response, responseData;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return external_isomorphic_unfetch_default()(EMAIL_ENDPOINT, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              },
              body: stringify_default()(payload)
            });

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            responseData = _context.sent;
            return _context.abrupt("return", responseData);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function sendEmail(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("0iUn"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("sLSF"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("MI3g"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("a7VT"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("Tit0"));

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/animated-card/index.js + 1 modules
var animated_card = __webpack_require__("lltq");

// EXTERNAL MODULE: ./components/animated-footer-link/index.js + 1 modules
var animated_footer_link = __webpack_require__("AjxQ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-addons-css-transition-group"
var external_react_addons_css_transition_group_ = __webpack_require__("Chgs");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/bio-card/BioCard.styled.js


function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    max-width: 380px;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    max-height: 320px;\n    max-width: 380px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    max-width: 380px;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    width: 380px;\n    min-height: 445px;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Container = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__Container",
  componentId: "lk04tb-0"
})(["display:flex;flex-direction:column;flex:1;width:340px;&:hover{cursor:help;}", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject()));
var BioCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__BioCardWrapper",
  componentId: "lk04tb-1"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject2()));
var ImageWrapper = external_styled_components_default.a.img.withConfig({
  displayName: "BioCardstyled__ImageWrapper",
  componentId: "lk04tb-2"
})(["max-width:340px;max-height:401px;", ""], external_styled_components_breakpoint_default()('desktop')(_templateObject3()));
var ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__ContentWrapper",
  componentId: "lk04tb-3"
})(["min-height:125px;display:flex;flex-direction:column;flex:1;padding-left:32px;"]);
var Name = external_styled_components_default.a.h4.withConfig({
  displayName: "BioCardstyled__Name",
  componentId: "lk04tb-4"
})(["font-family:", ";font-size:21px;line-height:24px;margin:16px 0 4px;"], function (props) {
  return props.theme.fonts.graphikBold;
});
var Role = external_styled_components_default.a.p.withConfig({
  displayName: "BioCardstyled__Role",
  componentId: "lk04tb-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;"], function (props) {
  return props.theme.fonts.graphik;
});
var FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__FooterWrapper",
  componentId: "lk04tb-6"
})(["display:flex;flex:1;align-items:flex-end;margin-bottom:17px;"]);
var HoveredBioCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredBioCardWrapper",
  componentId: "lk04tb-7"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", " background-color:", ";"], external_styled_components_breakpoint_default()('desktop')(_templateObject4()), function (props) {
  return props.theme.colors.mdcPurple;
});
var HoveredContent = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredContent",
  componentId: "lk04tb-8"
})(["display:flex;flex-direction:column;flex:1;padding:25px 32px;"]);
var HoveredName = external_styled_components_default.a.h4.withConfig({
  displayName: "BioCardstyled__HoveredName",
  componentId: "lk04tb-9"
})(["font-family:", ";font-size:21px;line-height:24px;margin:0 0 4px;color:", ";"], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.white;
});
var HoveredRole = external_styled_components_default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredRole",
  componentId: "lk04tb-10"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 17px;color:", ";"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.white;
});
var HoveredDescription = external_styled_components_default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredDescription",
  componentId: "lk04tb-11"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.white;
});
// CONCATENATED MODULE: ./components/bio-card/index.js






var bio_card_BioCard = function BioCard(props) {
  var name = props.name,
      role = props.role,
      message = props.message;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      hovered = _useState2[0],
      setHovered = _useState2[1];

  return external_react_default.a.createElement(Container, {
    onMouseEnter: function onMouseEnter() {
      return setHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHovered(false);
    }
  }, !hovered && external_react_default.a.createElement(BioCardWrapper, null, external_react_default.a.createElement(ImageWrapper, {
    src: "/static/images/placeholder-img.png",
    srcSet: "/static/images/placeholder-img@1x.png 1x, /static/images/placeholder-img@2x.png 2x, /static/images/placeholder-img@3x.png 3x"
  }), external_react_default.a.createElement(ContentWrapper, null, external_react_default.a.createElement(Name, null, name), external_react_default.a.createElement(Role, null, role), external_react_default.a.createElement(FooterWrapper, null, external_react_default.a.createElement(animated_footer_link["a" /* default */], {
    message: "Bio"
  })))), hovered && external_react_default.a.createElement(HoveredBioCardWrapper, null, external_react_default.a.createElement(HoveredContent, null, external_react_default.a.createElement(HoveredName, null, name), external_react_default.a.createElement(HoveredRole, null, role), message && external_react_default.a.createElement(HoveredDescription, null, message))));
};

/* harmony default export */ var bio_card = (bio_card_BioCard);
// EXTERNAL MODULE: ./components/button/index.js + 1 modules
var components_button = __webpack_require__("HlVv");

// EXTERNAL MODULE: ./components/company-card/index.js + 1 modules
var company_card = __webpack_require__("SPDB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/contact-footer/ContactFooter.styled.js


function ContactFooter_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 21px;\n    line-height: 28px;\n    max-width: 667px;\n    text-align: left;\n  "]);

  ContactFooter_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function ContactFooter_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 36px;\n    line-height: 48px;\n    margin: 0 0 8px 0;\n  "]);

  ContactFooter_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ContactFooter_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin: 0;\n    align-items: flex-start;\n  "]);

  ContactFooter_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ContactFooter_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n  "]);

  ContactFooter_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ContactFooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContactFooterWrapper",
  componentId: "sc-1z0aj7c-0"
})(["width:100%;background:rgb(125,39,255);background:linear-gradient(90deg,rgba(125,39,255,1) 0%,rgba(180,79,255,1) 100%);"]);
var ContactFooter_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContentWrapper",
  componentId: "sc-1z0aj7c-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], external_styled_components_breakpoint_default()('desktop')(ContactFooter_styled_templateObject()));
var Content = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__Content",
  componentId: "sc-1z0aj7c-2"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:30px;", ""], external_styled_components_breakpoint_default()('desktop')(ContactFooter_styled_templateObject2()));
var Title = external_styled_components_default.a.h1.withConfig({
  displayName: "ContactFooterstyled__Title",
  componentId: "sc-1z0aj7c-3"
})(["font-family:", ";font-size:32px;line-height:42px;margin:0 0 6px 0;color:", ";", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(ContactFooter_styled_templateObject3()));
var Description = external_styled_components_default.a.p.withConfig({
  displayName: "ContactFooterstyled__Description",
  componentId: "sc-1z0aj7c-4"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0;color:", ";text-align:center;", ""], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(ContactFooter_styled_templateObject4()));
var ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__ButtonWrapper",
  componentId: "sc-1z0aj7c-5"
})(["margin-bottom:0;"]);
// CONCATENATED MODULE: ./components/contact-footer/index.js






var contact_footer_ContactFooter = function ContactFooter() {
  return external_react_default.a.createElement(ContactFooterWrapper, null, external_react_default.a.createElement(ContactFooter_styled_ContentWrapper, null, external_react_default.a.createElement(Content, null, external_react_default.a.createElement(Title, null, "See how we can help"), external_react_default.a.createElement(Description, null, "Reach out to us to explore our services or hear our ideas about the industry in greater detail")), external_react_default.a.createElement(ButtonWrapper, null, external_react_default.a.createElement(components_button["a" /* default */], Object(defineProperty["a" /* default */])({
    btnText: "Contact us",
    onClick: function onClick() {},
    isDefault: false
  }, "onClick", function onClick() {
    return router_default.a.push('/contact');
  })))));
};

/* harmony default export */ var contact_footer = (contact_footer_ContactFooter);
// CONCATENATED MODULE: ./components/contact-form/ContactForm.styled.js


function ContactForm_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    padding: 0 40px;\n  "]);

  ContactForm_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var FormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__FormWrapper",
  componentId: "kj1rng-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:2px 4px 8px 0 rgba(0,0,0,0.2);width:100%;max-width:640px;background-color:", ";"], function (props) {
  return props.theme.colors.white;
});
var ContactForm_styled_Content = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__Content",
  componentId: "kj1rng-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;padding:0 20px;", ""], external_styled_components_breakpoint_default()('desktop')(ContactForm_styled_templateObject()));
var InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__InputWrapper",
  componentId: "kj1rng-2"
})(["margin-bottom:20px;"]);
var ContactForm_styled_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__ButtonWrapper",
  componentId: "kj1rng-3"
})(["align-self:center;"]);
// CONCATENATED MODULE: ./components/input/Input.styled.js

var Input_styled_InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__InputWrapper",
  componentId: "sc-1fbwxt1-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
var LabelWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__LabelWrapper",
  componentId: "sc-1fbwxt1-1"
})(["display:flex;flex-direction:row;"]);
var Label = external_styled_components_default.a.span.withConfig({
  displayName: "Inputstyled__Label",
  componentId: "sc-1fbwxt1-2"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;margin-right:2px;"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.black;
});
var ErrorStar = external_styled_components_default.a.span.withConfig({
  displayName: "Inputstyled__ErrorStar",
  componentId: "sc-1fbwxt1-3"
})(["font-family:'LucidaGrande';font-size:21px;color:#ff0000;"]);
var FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__FieldWrapper",
  componentId: "sc-1fbwxt1-4"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;border:", ";background-color:", ";-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], function (props) {
  return props.isError ? "solid 1px ".concat(props.theme.colors.red) : 'solid 1px #c8c8c8';
}, function (props) {
  return props.isError ? 'rgba(255, 39, 82, 0.02)' : "".concat(function (props) {
    return props.theme.colors.white;
  });
});
var Field = external_styled_components_default.a.input.withConfig({
  displayName: "Inputstyled__Field",
  componentId: "sc-1fbwxt1-5"
})(["height:39px;width:100%;padding-left:14px;font-family:", ";font-size:14px;line-height:22px;color:", ";border:none;&:focus{outline:none;}"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.isError ? props.theme.colors.red : props.theme.colors.lightGrey;
});
var Input_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__ImageWrapper",
  componentId: "sc-1fbwxt1-6"
})(["padding-right:16px;"]);
// CONCATENATED MODULE: ./components/input/index.js



var input_Input = function Input(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      isRequired = _ref.isRequired,
      isError = _ref.isError;
  return external_react_default.a.createElement(Input_styled_InputWrapper, null, external_react_default.a.createElement(LabelWrapper, null, external_react_default.a.createElement(Label, null, label), isRequired && external_react_default.a.createElement(ErrorStar, null, "*")), external_react_default.a.createElement(FieldWrapper, {
    isError: isError
  }, external_react_default.a.createElement(Field, {
    value: value,
    name: name,
    placeholder: placeholder,
    onChange: onChange
  }), isError && external_react_default.a.createElement(Input_styled_ImageWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/error.png",
    srcSet: "/static/images/error.png 1x, /static/images/error@2x.png 2x, /static/images/error@3x.png 3x",
    height: "22",
    width: "22"
  }))));
};

input_Input.defaultProps = {
  isRequired: false
};
/* harmony default export */ var input = (input_Input);
// CONCATENATED MODULE: ./components/textfield/Textfield.styled.js

var TextFieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Textfieldstyled__TextFieldWrapper",
  componentId: "z551o9-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
var Textfield_styled_Label = external_styled_components_default.a.span.withConfig({
  displayName: "Textfieldstyled__Label",
  componentId: "z551o9-1"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.black;
});
var Textfield_styled_Field = external_styled_components_default.a.textarea.withConfig({
  displayName: "Textfieldstyled__Field",
  componentId: "z551o9-2"
})(["border:solid 1px #c8c8c8;height:125px;width:100%;padding:6px 0 0 14px;font-family:", ";font-size:14px;line-height:22px;color:", ";resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.lightGrey;
});
// CONCATENATED MODULE: ./components/textfield/index.js



var textfield_Textfield = function Textfield(_ref) {
  var label = _ref.label,
      value = _ref.value,
      name = _ref.name,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder;
  return external_react_default.a.createElement(TextFieldWrapper, null, external_react_default.a.createElement(Textfield_styled_Label, null, label), external_react_default.a.createElement(Textfield_styled_Field, {
    value: value,
    name: name,
    placeholder: placeholder,
    onChange: onChange
  }));
};

/* harmony default export */ var textfield = (textfield_Textfield);
// CONCATENATED MODULE: ./components/contact-form/index.js







var contact_form_ContactForm = function ContactForm(_ref) {
  var onChange = _ref.onChange,
      firstName = _ref.firstName,
      company = _ref.company,
      email = _ref.email,
      message = _ref.message,
      onSubmit = _ref.onSubmit,
      isError = _ref.isError;
  return external_react_default.a.createElement(FormWrapper, null, external_react_default.a.createElement(ContactForm_styled_Content, null, external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(input, {
    label: "Name" // placeholder="Margaret Mango"
    ,
    value: firstName,
    name: "firstName",
    onChange: onChange,
    isRequired: true,
    isError: isError
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(input, {
    label: "Email" // placeholder="margaret@mango.com"
    ,
    value: email,
    name: "email",
    onChange: onChange,
    isRequired: true,
    isError: isError
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(input, {
    label: "Company" // placeholder="Mango co."
    ,
    value: company,
    name: "company",
    onChange: onChange
  })), external_react_default.a.createElement(InputWrapper, null, external_react_default.a.createElement(textfield, {
    label: "Message" // placeholder="Your message here"
    ,
    value: message,
    name: "message",
    onChange: onChange
  })), external_react_default.a.createElement(ContactForm_styled_ButtonWrapper, null, external_react_default.a.createElement(components_button["a" /* default */], {
    btnText: "Contact us",
    onClick: onSubmit
  }))));
};

/* harmony default export */ var contact_form = (contact_form_ContactForm);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__("zJq1");

// EXTERNAL MODULE: ./assets/colors.js
var colors = __webpack_require__("zWDp");

// CONCATENATED MODULE: ./components/social-icon/index.js




var social_icon_SocialIcon = function SocialIcon(props) {
  var url = props.url;
  return external_react_default.a.createElement(external_react_social_icons_["SocialIcon"], {
    url: url,
    style: {
      height: 40,
      width: 40,
      marginRight: 20
    },
    bgColor: colors["f" /* MDC_PURPLE */],
    fgColor: colors["l" /* WHITE */]
  });
};

/* harmony default export */ var social_icon = (social_icon_SocialIcon);
// CONCATENATED MODULE: ./components/footer/Footer.styled.js


function _templateObject9() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 21px;\n    line-height: 28px;\n    margin: 0 0 23px 0;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 21px;\n    line-height: 28px;\n    margin: 0 0 23px 0;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\twidth: 300px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 21px;\n    line-height: 28px;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 16px;\n    line-height: 24px;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function Footer_styled_templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmax-width: 600px;\n\t\tmargin-bottom: 0;\n\t\tpadding: 0 40px;\n  "]);

  Footer_styled_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function Footer_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    margin-bottom: 0;\n  "]);

  Footer_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Footer_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tflex-direction: row;\n\t\tjustify-content: space-between;\n\t\talign-items: flex-start;\n  "]);

  Footer_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Footer_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    min-height: 350px;\n    padding: 0;\n  "]);

  Footer_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Footer_styled_FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "Footerstyled__FooterWrapper",
  componentId: "sc-1a3izcr-0"
})(["min-height:375px;width:100%;background-color:black;", ""], external_styled_components_breakpoint_default()('desktop')(Footer_styled_templateObject()));
var Footer_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__ContentWrapper",
  componentId: "sc-1a3izcr-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], external_styled_components_breakpoint_default()('tablet')(Footer_styled_templateObject2()));
var FooterLogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__FooterLogoWrapper",
  componentId: "sc-1a3izcr-2"
})(["display:flex;margin-bottom:20px;", ""], external_styled_components_breakpoint_default()('tablet')(Footer_styled_templateObject3()));
var TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__TextWrapper",
  componentId: "sc-1a3izcr-3"
})(["margin-bottom:40px;", ""], external_styled_components_breakpoint_default()('tablet')(Footer_styled_templateObject4()));
var MarketDataText = external_styled_components_default.a.p.withConfig({
  displayName: "Footerstyled__MarketDataText",
  componentId: "sc-1a3izcr-4"
})(["margin:0;color:", ";font-family:", ";font-weight:400;font-size:18px;line-height:26px;text-align:left;", " ", ""], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.fonts.financier;
}, external_styled_components_breakpoint_default()('tablet')(_templateObject5()), external_styled_components_breakpoint_default()('desktop')(_templateObject6()));
var ExploreAndSocialWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__ExploreAndSocialWrapper",
  componentId: "sc-1a3izcr-5"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;", ""], external_styled_components_breakpoint_default()('tablet')(_templateObject7()));
var ExploreWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__ExploreWrapper",
  componentId: "sc-1a3izcr-6"
})(["display:flex;flex-direction:column;"]);
var ExploreTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "Footerstyled__ExploreTitle",
  componentId: "sc-1a3izcr-7"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 17px 0;", ""], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject8()));
var ExploreItem = external_styled_components_default.a.span.withConfig({
  displayName: "Footerstyled__ExploreItem",
  componentId: "sc-1a3izcr-8"
})(["font-size:16px;line-height:22px;color:#c8c8c8;margin-bottom:18px;font-family:", ";cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], function (props) {
  return props.theme.fonts.graphik;
});
var SocialWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__SocialWrapper",
  componentId: "sc-1a3izcr-9"
})(["display:flex;flex-direction:column;margin-left:40px;"]);
var SocialContent = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__SocialContent",
  componentId: "sc-1a3izcr-10"
})(["display:flex;flex-direction:row;"]);
var SocialTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "Footerstyled__SocialTitle",
  componentId: "sc-1a3izcr-11"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 27px 0;", ""], function (props) {
  return props.theme.colors.white;
}, function (props) {
  return props.theme.fonts.graphikBold;
}, external_styled_components_breakpoint_default()('desktop')(_templateObject9()));
// CONCATENATED MODULE: ./components/footer/index.js





var footer_Footer = function Footer() {
  return external_react_default.a.createElement(Footer_styled_FooterWrapper, null, external_react_default.a.createElement(Footer_styled_ContentWrapper, null, external_react_default.a.createElement(FooterLogoWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/white.png",
    srcSet: "/static/images/white.png 1x, /static/images/white@2x.png 2x, /static/images/white@3x.png 3x",
    width: "140",
    height: "127"
  })), external_react_default.a.createElement(TextWrapper, null, external_react_default.a.createElement(MarketDataText, null, "Market data company is North America\u2019s leading market data solutions and consultancy company. We offer specialized consulting services and leading market data management solutions that help deal with the complexity of your data.")), external_react_default.a.createElement(ExploreAndSocialWrapper, null, external_react_default.a.createElement(ExploreWrapper, null, external_react_default.a.createElement(ExploreTitle, null, "Explore"), external_react_default.a.createElement(link_default.a, {
    href: "/research"
  }, external_react_default.a.createElement(ExploreItem, null, "Research")), external_react_default.a.createElement(link_default.a, {
    href: "/contact"
  }, external_react_default.a.createElement(ExploreItem, null, "Contact"))), external_react_default.a.createElement(SocialWrapper, null, external_react_default.a.createElement(SocialTitle, null, "Social"), external_react_default.a.createElement(SocialContent, null, external_react_default.a.createElement(social_icon, {
    url: "http://facebook.com"
  }), external_react_default.a.createElement(social_icon, {
    url: "https://www.linkedin.com/company/market-data-company/"
  }), external_react_default.a.createElement(social_icon, {
    url: "http://twitter.com"
  }))))));
};

/* harmony default export */ var footer = (footer_Footer);
// EXTERNAL MODULE: ./components/hamburger-menu-content/index.js + 1 modules
var hamburger_menu_content = __webpack_require__("SriO");

// EXTERNAL MODULE: ./components/label-with-arrow/index.js + 1 modules
var label_with_arrow = __webpack_require__("MPXY");

// CONCATENATED MODULE: ./components/layout/Layout.styled.js

var Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Layoutstyled__Wrapper",
  componentId: "apusfk-0"
})(["display:flex;flex-direction:column;flex:1;width:100%;"]);
var Layout_styled_FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Layoutstyled__FooterWrapper",
  componentId: "apusfk-1"
})(["margin-top:auto;"]);
// CONCATENATED MODULE: ./components/layout/index.js




var layout_Layout = function Layout(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement(Wrapper, null, children, external_react_default.a.createElement(Layout_styled_FooterWrapper, null, external_react_default.a.createElement(footer, null)));
};

/* harmony default export */ var layout = (layout_Layout);
// EXTERNAL MODULE: ./components/list-item/index.js + 1 modules
var list_item = __webpack_require__("61O8");

// EXTERNAL MODULE: ./components/modal/index.js
var modal = __webpack_require__("UJvz");

// CONCATENATED MODULE: ./components/research-pdf-form/ResearchPdfForm.styled.js


function ResearchPdfForm_styled_templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmargin-bottom: 16px;\n\t\t&:nth-child(6) {\n        \tmargin-bottom: 40px;\n    \t}\n\t"]);

  ResearchPdfForm_styled_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function ResearchPdfForm_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmargin: 0 60px;\n\t"]);

  ResearchPdfForm_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ResearchPdfForm_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmax-height: 600px;\n\t\tmax-width: 724px;\n\t"]);

  ResearchPdfForm_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResearchPdfFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ResearchPdfFormWrapper",
  componentId: "rdg6wy-0"
})(["display:flex;flex-direction:column;flex:1;min-height:591px;background-color:", ";", ""], function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(ResearchPdfForm_styled_templateObject()));
var ResearchPdfForm_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ImageWrapper",
  componentId: "rdg6wy-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], function (props) {
  return props.theme.colors.sbGrey;
});
var CloseIcon = external_styled_components_default.a.img.withConfig({
  displayName: "ResearchPdfFormstyled__CloseIcon",
  componentId: "rdg6wy-2"
})(["height:18px;width:18px;"]);
var ResearchPdfForm_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ContentWrapper",
  componentId: "rdg6wy-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], external_styled_components_breakpoint_default()('desktop')(ResearchPdfForm_styled_templateObject2()));
var ResearchPdfForm_styled_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "ResearchPdfFormstyled__Title",
  componentId: "rdg6wy-4"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 12px;text-align:center;"], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.black;
});
var ResearchPdfForm_styled_Description = external_styled_components_default.a.h5.withConfig({
  displayName: "ResearchPdfFormstyled__Description",
  componentId: "rdg6wy-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin-bottom:0 0 18px;text-align:center;"], function (props) {
  return props.theme.fonts.financier;
});
var ResearchPdfForm_styled_InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__InputWrapper",
  componentId: "rdg6wy-6"
})(["margin-bottom:12px;", ""], external_styled_components_breakpoint_default()('desktop')(ResearchPdfForm_styled_templateObject3()));
var ResearchPdfForm_styled_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ButtonWrapper",
  componentId: "rdg6wy-7"
})(["align-self:center;"]);
var StyledAnchor = external_styled_components_default.a.a.withConfig({
  displayName: "ResearchPdfFormstyled__StyledAnchor",
  componentId: "rdg6wy-8"
})(["text-decoration:none;"]);
// CONCATENATED MODULE: ./components/research-pdf-form/index.js





var research_pdf_form_ResearchPdfForm = function ResearchPdfForm(props) {
  var firstName = props.firstName,
      company = props.company,
      email = props.email,
      onChange = props.onChange,
      onSubmit = props.onSubmit,
      isDisabled = props.isDisabled,
      onRequestClose = props.onRequestClose,
      pdfForm = props.pdfForm;
  return external_react_default.a.createElement(ResearchPdfFormWrapper, null, external_react_default.a.createElement(ResearchPdfForm_styled_ImageWrapper, null, external_react_default.a.createElement(CloseIcon, {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose
  })), external_react_default.a.createElement(ResearchPdfForm_styled_ContentWrapper, null, external_react_default.a.createElement(ResearchPdfForm_styled_Title, null, "Just one last thing.."), external_react_default.a.createElement(ResearchPdfForm_styled_Description, null, "To get this case study completely free, please leave us your name and email address to receive future news and updates."), external_react_default.a.createElement(ResearchPdfForm_styled_InputWrapper, null, external_react_default.a.createElement(input, {
    label: "Name" // placeholder="John Doe"
    ,
    name: "firstName",
    value: firstName,
    onChange: onChange,
    isRequired: true
  })), external_react_default.a.createElement(ResearchPdfForm_styled_InputWrapper, null, external_react_default.a.createElement(input, {
    label: "Email" // placeholder="johndoe@email.com"
    ,
    name: "email",
    value: email,
    onChange: onChange,
    isRequired: true
  })), external_react_default.a.createElement(ResearchPdfForm_styled_InputWrapper, null, external_react_default.a.createElement(input, {
    label: "Company" // placeholder="company name"
    ,
    name: "company",
    value: company,
    onChange: onChange
  })), external_react_default.a.createElement(ResearchPdfForm_styled_ButtonWrapper, null, external_react_default.a.createElement(StyledAnchor, {
    onClick: function onClick(e) {
      return isDisabled ? e.preventDefault() : function () {};
    },
    href: pdfForm,
    target: "_blank"
  }, external_react_default.a.createElement(components_button["a" /* default */], {
    btnText: "Download PDF",
    onClick: onSubmit,
    isDisabled: isDisabled
  })))));
};

/* harmony default export */ var research_pdf_form = (research_pdf_form_ResearchPdfForm);
// CONCATENATED MODULE: ./components/start-download-form/StartDownloadForm.styled.js


function StartDownloadForm_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmargin: 0 62px;\n\t"]);

  StartDownloadForm_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function StartDownloadForm_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tmax-height: 600px;\n\t\tmax-width: 724px;\n\t"]);

  StartDownloadForm_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var StartDownloadFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__StartDownloadFormWrapper",
  componentId: "g865k7-0"
})(["display:flex;flex-direction:column;flex:1;min-height:560px;background-color:", ";", ""], function (props) {
  return props.theme.colors.white;
}, external_styled_components_breakpoint_default()('desktop')(StartDownloadForm_styled_templateObject()));
var StartDownloadForm_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ImageWrapper",
  componentId: "g865k7-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], function (props) {
  return props.theme.colors.sbGrey;
});
var StartDownloadForm_styled_CloseIcon = external_styled_components_default.a.img.withConfig({
  displayName: "StartDownloadFormstyled__CloseIcon",
  componentId: "g865k7-2"
})(["height:18px;width:18px;"]);
var StartDownloadForm_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ContentWrapper",
  componentId: "g865k7-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], external_styled_components_breakpoint_default()('desktop')(StartDownloadForm_styled_templateObject2()));
var StartDownloadForm_styled_Title = external_styled_components_default.a.h2.withConfig({
  displayName: "StartDownloadFormstyled__Title",
  componentId: "g865k7-4"
})(["font-family:", ";font-size:36px;line-height:48px;color:", ";margin:0 0 12px;text-align:center;"], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.black;
});
var StartDownloadForm_styled_Description = external_styled_components_default.a.h5.withConfig({
  displayName: "StartDownloadFormstyled__Description",
  componentId: "g865k7-5"
})(["font-family:", ";font-size:21px;line-height:28px;margin:0 0 40px;text-align:center;"], function (props) {
  return props.theme.fonts.financier;
});
var StartDownloadForm_styled_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ButtonWrapper",
  componentId: "g865k7-6"
})(["align-self:center;"]);
var StartDownloadForm_styled_StyledAnchor = external_styled_components_default.a.a.withConfig({
  displayName: "StartDownloadFormstyled__StyledAnchor",
  componentId: "g865k7-7"
})(["text-decoration:none;"]);
// CONCATENATED MODULE: ./components/start-download-form/StartDownloadForm.js




var StartDownloadForm_StartDownloadForm = function StartDownloadForm(props) {
  var onRequestClose = props.onRequestClose,
      pdfForm = props.pdfForm,
      onSubmit = props.onSubmit;
  return external_react_default.a.createElement(StartDownloadFormWrapper, null, external_react_default.a.createElement(StartDownloadForm_styled_ImageWrapper, null, external_react_default.a.createElement(StartDownloadForm_styled_CloseIcon, {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose
  })), external_react_default.a.createElement(StartDownloadForm_styled_ContentWrapper, null, external_react_default.a.createElement(StartDownloadForm_styled_Title, null, "Start your download"), external_react_default.a.createElement(StartDownloadForm_styled_Description, null, "After reading, If you'd like to learn more about how we can help you optimize your data spend, get in touch with our team and we'd be happy to help you."), external_react_default.a.createElement(StartDownloadForm_styled_ButtonWrapper, null, external_react_default.a.createElement(StartDownloadForm_styled_StyledAnchor, {
    href: pdfForm,
    target: "_blank"
  }, external_react_default.a.createElement(components_button["a" /* default */], {
    btnText: "Download",
    onClick: onSubmit
  })))));
};

/* harmony default export */ var start_download_form_StartDownloadForm = (StartDownloadForm_StartDownloadForm);
// CONCATENATED MODULE: ./components/start-download-form/index.js

/* harmony default export */ var start_download_form = (start_download_form_StartDownloadForm);
// EXTERNAL MODULE: ./components/tab-bar/index.js + 1 modules
var tab_bar = __webpack_require__("oQsg");

// CONCATENATED MODULE: ./components/thank-you/ThankYou.styled.js


function ThankYou_styled_templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 21px;\n    line-height: 28px;\n    margin: 0 0 63px;\n    max-width: 344px;\n  "]);

  ThankYou_styled_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function ThankYou_styled_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    font-size: 36px;\n    line-height: 48px;\n  "]);

  ThankYou_styled_templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ThankYouWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ThankYoustyled__ThankYouWrapper",
  componentId: "v71j8l-0"
})(["display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center;background-color:", ";"], function (props) {
  return props.theme.colors.white;
});
var ThankYou_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ThankYoustyled__ImageWrapper",
  componentId: "v71j8l-1"
})(["margin-bottom:29px;"]);
var ThankYou_styled_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "ThankYoustyled__Title",
  componentId: "v71j8l-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 9px;color:", ";", ""], function (props) {
  return props.theme.fonts.graphikBold;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(ThankYou_styled_templateObject()));
var ThankYou_styled_Description = external_styled_components_default.a.h5.withConfig({
  displayName: "ThankYoustyled__Description",
  componentId: "v71j8l-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 44px;color:", ";text-align:center;", ""], function (props) {
  return props.theme.fonts.financier;
}, function (props) {
  return props.theme.colors.black;
}, external_styled_components_breakpoint_default()('desktop')(ThankYou_styled_templateObject2()));
// CONCATENATED MODULE: ./components/thank-you/index.js




var thank_you_ThankYou = function ThankYou(props) {
  var description = props.description,
      href = props.href,
      footerMessage = props.footerMessage,
      onClick = props.onClick;
  return external_react_default.a.createElement(ThankYouWrapper, null, external_react_default.a.createElement(ThankYou_styled_ImageWrapper, null, external_react_default.a.createElement("img", {
    src: "/static/images/purple-check-mark.png",
    srcSet: "/static/images/purple-check-mark.png 1x, /static/images/purple-check-mark@2x.png 2x, /static/images/purple-check-mark@3x.png 3x"
  })), external_react_default.a.createElement(ThankYou_styled_Title, null, "Thank You"), external_react_default.a.createElement(ThankYou_styled_Description, null, description), external_react_default.a.createElement(animated_footer_link["a" /* default */], {
    message: footerMessage,
    href: href,
    onClick: onClick
  }));
};

thank_you_ThankYou.defaultProps = {
  email: 'your email address',
  onClick: function onClick() {}
};
/* harmony default export */ var thank_you = (thank_you_ThankYou);
// CONCATENATED MODULE: ./components/index.js
/* unused concated harmony import AnimatedCard */
/* concated harmony reexport AnimatedFooterLink */__webpack_require__.d(__webpack_exports__, "a", function() { return animated_footer_link["a" /* default */]; });
/* unused concated harmony import BioCard */
/* unused concated harmony import Button */
/* unused concated harmony import CompanyCard */
/* concated harmony reexport ContactFooter */__webpack_require__.d(__webpack_exports__, "b", function() { return contact_footer; });
/* concated harmony reexport ContactForm */__webpack_require__.d(__webpack_exports__, "c", function() { return contact_form; });
/* unused concated harmony import Footer */
/* unused concated harmony import HamburgerMenuContent */
/* unused concated harmony import Input */
/* unused concated harmony import LabelWithArrow */
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "d", function() { return layout; });
/* unused concated harmony import ListItem */
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "e", function() { return modal["a" /* default */]; });
/* concated harmony reexport ResearchPdfForm */__webpack_require__.d(__webpack_exports__, "f", function() { return research_pdf_form; });
/* unused concated harmony import SocialIcon */
/* concated harmony reexport StartDownloadForm */__webpack_require__.d(__webpack_exports__, "g", function() { return start_download_form; });
/* unused concated harmony import TabBar */
/* unused concated harmony import TextField */
/* concated harmony reexport ThankYou */__webpack_require__.d(__webpack_exports__, "h", function() { return thank_you; });





















/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k2H8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_SIGNED_UP; });
var USER_SIGNED_UP = 'USER_SIGNED_UP';

/***/ }),

/***/ "lltq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/colors.js
var colors = __webpack_require__("zWDp");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/animated-card/AnimatedCard.styled.js

var CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedCardstyled__CardWrapper",
  componentId: "q4nqi9-0"
})(["display:flex;flex-direction:column;width:100%;min-height:340px;max-width:360px;flex:1;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);background-size:100% 200%;background-image:", ";-webkit-transition:background-position 0.15s ease-out;-moz-transition:background-position 0.15s ease-out;transition:background-position 0.15s ease-out;&:hover{cursor:pointer;background-position:0 -100%;}"], function (props) {
  return "linear-gradient(to bottom, white 50%, ".concat(props.notchColor, " 50%)");
});
var TopNotch = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedCardstyled__TopNotch",
  componentId: "q4nqi9-1"
})(["width:100%;height:16px;background-color:", ";margin-bottom:23px;"], function (props) {
  return props.notchColor;
});
var ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedCardstyled__ContentWrapper",
  componentId: "q4nqi9-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px 17px;"]);
var Title = external_styled_components_default.a.h1.withConfig({
  displayName: "AnimatedCardstyled__Title",
  componentId: "q4nqi9-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 20px 0;align-self:flex-start;", ":hover &{color:", ";transition:color 0.15s ease;}"], function (props) {
  return props.theme.fonts.graphikBold;
}, CardWrapper, function (props) {
  return props.theme.colors.white;
});
var Description = external_styled_components_default.a.p.withConfig({
  displayName: "AnimatedCardstyled__Description",
  componentId: "q4nqi9-4"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ":hover &{color:", ";transition:color 0.25s ease;}"], function (props) {
  return props.theme.fonts.financier;
}, CardWrapper, function (props) {
  return props.theme.colors.white;
});
var Footer = external_styled_components_default.a.span.withConfig({
  displayName: "AnimatedCardstyled__Footer",
  componentId: "q4nqi9-5"
})(["font-family:", ";font-size:14px;line-height:22px;color:", ";display:flex;flex-direction:column;flex:1;justify-content:flex-end;margin:0 20px 16px;cursor:pointer;", ":hover &{color:", ";transition:color 0.25s ease;}"], function (props) {
  return props.theme.fonts.graphik;
}, function (props) {
  return props.theme.colors.lightGrey;
}, CardWrapper, function (props) {
  return props.theme.colors.white;
});
// CONCATENATED MODULE: ./components/animated-card/index.js




var animated_card_AnimatedCard = function AnimatedCard(props) {
  var title = props.title,
      description = props.description,
      footer = props.footer,
      notchColor = props.notchColor,
      onClick = props.onClick;
  return external_react_default.a.createElement(CardWrapper, {
    notchColor: notchColor,
    onClick: onClick
  }, external_react_default.a.createElement(TopNotch, {
    notchColor: notchColor
  }), external_react_default.a.createElement(ContentWrapper, null, external_react_default.a.createElement(Title, null, title), external_react_default.a.createElement(Description, null, description)), external_react_default.a.createElement(Footer, null, footer));
};

animated_card_AnimatedCard.defaultProps = {
  footer: 'Read more',
  notchColor: colors["f" /* MDC_PURPLE */]
};
/* harmony default export */ var animated_card = __webpack_exports__["a"] = (animated_card_AnimatedCard);

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "mgRA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pbKT");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VLay");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("KI45");

var _construct2 = _interopRequireDefault2(__webpack_require__("mgRA"));

var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "oQsg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/modal/index.js
var modal = __webpack_require__("UJvz");

// EXTERNAL MODULE: ./components/hamburger-menu-content/index.js + 1 modules
var hamburger_menu_content = __webpack_require__("SriO");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/tab-bar/TabBar.styled.js


function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: flex-start;\n\t"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n\t\tdisplay: none;\n\t"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TabBarstyled__Wrapper",
  componentId: "sc-13utfq2-0"
})(["display:flex;height:72px;background-color:", ";"], function (props) {
  return props.backgroundColor || 'transparent';
});
var MobileTabWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TabBarstyled__MobileTabWrapper",
  componentId: "sc-13utfq2-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;", ""], external_styled_components_breakpoint_default()('tablet')(_templateObject()));
var TabWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TabBarstyled__TabWrapper",
  componentId: "sc-13utfq2-2"
})(["display:none;", " ", ""], external_styled_components_breakpoint_default()('tablet')(_templateObject2()), external_styled_components_breakpoint_default()('desktop')(_templateObject3()));
var Tab = external_styled_components_default.a.span.withConfig({
  displayName: "TabBarstyled__Tab",
  componentId: "sc-13utfq2-3"
})(["color:", ";text-decoration:none;font-size:16px;line-height:22px;font-family:", ";margin-right:50px;cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], function (props) {
  return props.barTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white;
}, function (props) {
  return props.theme.fonts.graphik;
});
// CONCATENATED MODULE: ./components/tab-bar/index.js






var linkData = [{
  href: '/research',
  tabName: 'Research'
}, {
  href: '/contact',
  tabName: 'Contact'
}];

var tab_bar_TabBar = function TabBar(props) {
  var barTheme = props.barTheme,
      backgroundColor = props.backgroundColor;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      modalVisible = _useState2[0],
      setModalVisible = _useState2[1];

  var renderLinks = function renderLinks() {
    return linkData.map(function (data) {
      return external_react_default.a.createElement(link_default.a, {
        key: data.href,
        href: data.href
      }, external_react_default.a.createElement(Tab, {
        barTheme: barTheme
      }, data.tabName));
    });
  };

  var WebTabBar = function WebTabBar() {
    return external_react_default.a.createElement(TabWrapper, null, external_react_default.a.createElement(link_default.a, {
      href: "/"
    }, external_react_default.a.createElement(Tab, null, barTheme === 'dark' && external_react_default.a.createElement("img", {
      src: "/static/images/mdc-logo-horizontal-black.png",
      srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x"
    }), barTheme !== 'dark' && external_react_default.a.createElement("img", {
      src: "/static/images/mdc-logo-horizontal.png",
      srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x"
    }))), renderLinks());
  };

  var MobileTabBar = function MobileTabBar() {
    return external_react_default.a.createElement(MobileTabWrapper, null, external_react_default.a.createElement(link_default.a, {
      href: "/"
    }, external_react_default.a.createElement("div", null, barTheme === 'dark' && external_react_default.a.createElement("img", {
      src: "/static/images/mdc-logo-horizontal-black.png",
      srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x"
    }), barTheme !== 'dark' && external_react_default.a.createElement("img", {
      src: "/static/images/mdc-logo-horizontal.png",
      srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x"
    }))), external_react_default.a.createElement("div", {
      onClick: function onClick() {
        return setModalVisible(true);
      }
    }, barTheme === 'dark' && external_react_default.a.createElement("img", {
      src: "/static/images/black-hamburger.png",
      srcSet: "/static/images/black-hamburger.png 1x, /static/images/black-hamburger@2x.png 2x, /static/images/black-hamburger@3x.png 3x"
    }), barTheme !== 'dark' && external_react_default.a.createElement("img", {
      src: "/static/images/hamburger.png",
      srcSet: "/static/images/hamburger.png 1x, /static/images/hamburger@2x.png 2x, /static/images/hamburger@3x.png 3x"
    })));
  };

  return external_react_default.a.createElement(Wrapper, {
    themeDark: true,
    backgroundColor: backgroundColor
  }, external_react_default.a.createElement(WebTabBar, null), external_react_default.a.createElement(MobileTabBar, null), external_react_default.a.createElement(modal["a" /* default */], {
    modalVisible: modalVisible,
    onRequestClose: function onRequestClose() {
      return setModalVisible(false);
    }
  }, external_react_default.a.createElement(hamburger_menu_content["a" /* default */], {
    onCloseModal: function onCloseModal() {
      return setModalVisible(false);
    }
  })));
};

tab_bar_TabBar.defaultProps = {
  barTheme: 'light'
};
/* harmony default export */ var tab_bar = __webpack_exports__["a"] = (tab_bar_TabBar);

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pbKT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "y4cE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStore; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("doui");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k2H8");



var initialState = {};
var StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(initialState);

var userReducer = function userReducer(state, action) {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_2__[/* USER_SIGNED_UP */ "a"]:
      return {
        user: action.payload
      };

    default:
      return state;
  }
};

var StoreProvider = function StoreProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(userReducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StoreContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    }
  }, children);
};
var useStore = function useStore(store) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StoreContext),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  return {
    state: state,
    dispatch: dispatch
  };
};

/***/ }),

/***/ "zJq1":
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),

/***/ "zWDp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MDC_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEEP_INDIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MID_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIGHT_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MDC_PURPLE_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SB_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BABY_BLUE; });
var MDC_PURPLE = '#7D27FF';
var DEEP_INDIGO = '#430086';
var MID_PURPLE = '#986CFF';
var LIGHT_PURPLE = '#C5B2FF';
var WHITE = '#FFFFFF';
var BLACK = '#000000';
var LIGHT_GREY = '#969696';
var MDC_PURPLE_HOVER = '#7121EB';
var SB_GREY = '#F5F5F5';
var PINK = '#ED27FF';
var RED = '#FF2752';
var BABY_BLUE = '#3B84FF';

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });