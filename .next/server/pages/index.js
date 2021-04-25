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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "./components/animated-card/AnimatedCard.styled.js":
/*!*********************************************************!*\
  !*** ./components/animated-card/AnimatedCard.styled.js ***!
  \*********************************************************/
/*! exports provided: CardWrapper, TopNotch, ContentWrapper, Title, Description, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNotch", function() { return TopNotch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedCardstyled__CardWrapper",
  componentId: "q4nqi9-0"
})(["display:flex;flex-direction:column;width:100%;min-height:340px;max-width:360px;flex:1;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);background-size:100% 200%;background-image:", ";-webkit-transition:background-position 0.15s ease-out;-moz-transition:background-position 0.15s ease-out;transition:background-position 0.15s ease-out;&:hover{cursor:pointer;background-position:0 -100%;}"], props => {
  return `linear-gradient(to bottom, white 50%, ${props.notchColor} 50%)`;
});
const TopNotch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedCardstyled__TopNotch",
  componentId: "q4nqi9-1"
})(["width:100%;height:16px;background-color:", ";margin-bottom:23px;"], props => props.notchColor);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedCardstyled__ContentWrapper",
  componentId: "q4nqi9-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px 17px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "AnimatedCardstyled__Title",
  componentId: "q4nqi9-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 20px 0;align-self:flex-start;", ":hover &{color:", ";transition:color 0.15s ease;}"], props => props.theme.fonts.graphikBold, CardWrapper, props => props.theme.colors.white);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "AnimatedCardstyled__Description",
  componentId: "q4nqi9-4"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ":hover &{color:", ";transition:color 0.25s ease;}"], props => props.theme.fonts.financier, CardWrapper, props => props.theme.colors.white);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "AnimatedCardstyled__Footer",
  componentId: "q4nqi9-5"
})(["font-family:", ";font-size:14px;line-height:22px;color:", ";display:flex;flex-direction:column;flex:1;justify-content:flex-end;margin:0 20px 16px;cursor:pointer;", ":hover &{color:", ";transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey, CardWrapper, props => props.theme.colors.white);

/***/ }),

/***/ "./components/animated-card/index.js":
/*!*******************************************!*\
  !*** ./components/animated-card/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/colors */ "./assets/colors.js");
/* harmony import */ var _AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedCard.styled */ "./components/animated-card/AnimatedCard.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/animated-card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AnimatedCard = props => {
  const {
    title,
    description,
    footer,
    notchColor,
    onClick
  } = props;
  return __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    notchColor: notchColor,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["TopNotch"], {
    notchColor: notchColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }), __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, title), __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, description)), __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }
  }, footer));
};

AnimatedCard.defaultProps = {
  footer: 'Read more',
  notchColor: _assets_colors__WEBPACK_IMPORTED_MODULE_1__["MDC_PURPLE"]
};
/* harmony default export */ __webpack_exports__["default"] = (AnimatedCard);

/***/ }),

/***/ "./components/animated-footer-link/AnimatedFooterLink.styled.js":
/*!**********************************************************************!*\
  !*** ./components/animated-footer-link/AnimatedFooterLink.styled.js ***!
  \**********************************************************************/
/*! exports provided: AnimatedFooterLinkWrapper, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedFooterLinkWrapper", function() { return AnimatedFooterLinkWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AnimatedFooterLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedFooterLinkstyled__AnimatedFooterLinkWrapper",
  componentId: "djcwa6-0"
})(["display:flex;flex-direction:row;align-items:baseline;"]);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "AnimatedFooterLinkstyled__Message",
  componentId: "djcwa6-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 8px 0 0;cursor:pointer;transition:all 0.15s ease;&:hover{margin:0 16px 0 0;opacity:0.65;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./components/animated-footer-link/index.js":
/*!**************************************************!*\
  !*** ./components/animated-footer-link/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnimatedFooterLink_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedFooterLink.styled */ "./components/animated-footer-link/AnimatedFooterLink.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/animated-footer-link/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AnimatedFooterLink = ({
  message,
  href,
  onClick
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: href,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 2
  }
}, __jsx(_AnimatedFooterLink_styled__WEBPACK_IMPORTED_MODULE_2__["AnimatedFooterLinkWrapper"], {
  onClick: onClick,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, __jsx(_AnimatedFooterLink_styled__WEBPACK_IMPORTED_MODULE_2__["Message"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 4
  }
}, message), __jsx("img", {
  src: "/static/images/arrow.png",
  srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 4
  }
})));

AnimatedFooterLink.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (AnimatedFooterLink);

/***/ }),

/***/ "./components/bio-card/BioCard.styled.js":
/*!***********************************************!*\
  !*** ./components/bio-card/BioCard.styled.js ***!
  \***********************************************/
/*! exports provided: Container, BioCardWrapper, ImageWrapper, ContentWrapper, Name, Role, FooterWrapper, HoveredBioCardWrapper, HoveredContent, HoveredName, HoveredRole, HoveredDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioCardWrapper", function() { return BioCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredBioCardWrapper", function() { return HoveredBioCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredContent", function() { return HoveredContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredName", function() { return HoveredName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredRole", function() { return HoveredRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredDescription", function() { return HoveredDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__Container",
  componentId: "lk04tb-0"
})(["display:flex;flex-direction:column;flex:1;width:340px;&:hover{cursor:help;}", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    width: 380px;
    min-height: 445px;
  `);
const BioCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__BioCardWrapper",
  componentId: "lk04tb-1"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 380px;
  `);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "BioCardstyled__ImageWrapper",
  componentId: "lk04tb-2"
})(["max-width:340px;max-height:401px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-height: 320px;
    max-width: 380px;
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__ContentWrapper",
  componentId: "lk04tb-3"
})(["min-height:125px;display:flex;flex-direction:column;flex:1;padding-left:32px;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "BioCardstyled__Name",
  componentId: "lk04tb-4"
})(["font-family:", ";font-size:21px;line-height:24px;margin:16px 0 4px;"], props => props.theme.fonts.graphikBold);
const Role = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BioCardstyled__Role",
  componentId: "lk04tb-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;"], props => props.theme.fonts.graphik);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__FooterWrapper",
  componentId: "lk04tb-6"
})(["display:flex;flex:1;align-items:flex-end;margin-bottom:17px;"]);
const HoveredBioCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredBioCardWrapper",
  componentId: "lk04tb-7"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", " background-color:", ";"], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 380px;
  `, props => props.theme.colors.mdcPurple);
const HoveredContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredContent",
  componentId: "lk04tb-8"
})(["display:flex;flex-direction:column;flex:1;padding:25px 32px;"]);
const HoveredName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "BioCardstyled__HoveredName",
  componentId: "lk04tb-9"
})(["font-family:", ";font-size:21px;line-height:24px;margin:0 0 4px;color:", ";"], props => props.theme.fonts.graphikBold, props => props.theme.colors.white);
const HoveredRole = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredRole",
  componentId: "lk04tb-10"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 17px;color:", ";"], props => props.theme.fonts.graphik, props => props.theme.colors.white);
const HoveredDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredDescription",
  componentId: "lk04tb-11"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], props => props.theme.fonts.financier, props => props.theme.colors.white);

/***/ }),

/***/ "./components/bio-card/index.js":
/*!**************************************!*\
  !*** ./components/bio-card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-addons-css-transition-group */ "react-addons-css-transition-group");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animated_footer_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _BioCard_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BioCard.styled */ "./components/bio-card/BioCard.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/bio-card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BioCard = props => {
  const {
    name,
    role,
    message
  } = props;
  const {
    0: hovered,
    1: setHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 3
    }
  }, !hovered && __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["BioCardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: "/static/images/placeholder-img.png",
    srcSet: "/static/images/placeholder-img@1x.png 1x, /static/images/placeholder-img@2x.png 2x, /static/images/placeholder-img@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["Name"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, name), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["Role"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, role), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["FooterWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(_animated_footer_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: "Bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 8
    }
  })))), hovered && __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredBioCardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredName"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, name), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredRole"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, role), message && __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }, message))));
};

/* harmony default export */ __webpack_exports__["default"] = (BioCard);

/***/ }),

/***/ "./components/button/button.styled.js":
/*!********************************************!*\
  !*** ./components/button/button.styled.js ***!
  \********************************************/
/*! exports provided: ButtonWrapper, ButtonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);



const getBackgroundColor = props => {
  if (props.isDefault) {
    return props.theme.colors.mdcPurple;
  } else {
    return props.theme.colors.white;
  }
};

const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttonstyled__ButtonWrapper",
  componentId: "ljf8l9-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:160px;height:40px;background-color:", ";border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border:none;cursor:pointer;&:hover{background-color:", ";box-shadow:", ";transform:translateY(-1px);transition:all 0.15s ease;}", ""], props => getBackgroundColor(props), props => getBackgroundColor(props), props => {
  return props.isDefault ? '0 2px 8px 0 rgba(0, 0, 0, 0.15)' : '0 8px 16px 2px rgba(0, 0, 0, 0.15)';
}, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    width: 180px;
    height: 48px;
  `);
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "buttonstyled__ButtonText",
  componentId: "ljf8l9-1"
})(["font-family:", ";font-size:14px;line-height:14px;letter-spacing:0.25px;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.isDefault ? props.theme.colors.white : props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 16px;
    line-height: 24px;
  `);

/***/ }),

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.styled */ "./components/button/button.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Button = props => {
  const {
    btnText,
    isDefault,
    onClick,
    isDisabled
  } = props;
  return __jsx(_button_styled__WEBPACK_IMPORTED_MODULE_1__["ButtonWrapper"], {
    isDefault: isDefault,
    onClick: onClick,
    disabled: isDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_button_styled__WEBPACK_IMPORTED_MODULE_1__["ButtonText"], {
    isDefault: isDefault,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }, btnText));
};

Button.defaultProps = {
  isDefault: true,
  isSecondary: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/company-card/CompanyCard.styled.js":
/*!*******************************************************!*\
  !*** ./components/company-card/CompanyCard.styled.js ***!
  \*******************************************************/
/*! exports provided: CompanyCardWrapper, ImageWrapper, StyledImage, ContentWrapper, DescriptionWrapper, Title, DescriptionText, FooterWrapper, RoleText, NextTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCardWrapper", function() { return CompanyCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledImage", function() { return StyledImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionWrapper", function() { return DescriptionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionText", function() { return DescriptionText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleText", function() { return RoleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTag", function() { return NextTag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const CompanyCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__CompanyCardWrapper",
  componentId: "u0cwbv-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		flex-direction: row;
		flex: 1;
		width: 100%;
		min-height: 285px;
  	`);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__ImageWrapper",
  componentId: "u0cwbv-1"
})(["min-height:220px;width:100%;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		min-width: 476px;
  	`);
const StyledImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "CompanyCardstyled__StyledImage",
  componentId: "u0cwbv-2"
})(["width:100%;height:100%;object-fit:fill;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__ContentWrapper",
  componentId: "u0cwbv-3"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px;min-height:320px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
	margin: 32px 6%;
	min-height: 0;
  `);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__DescriptionWrapper",
  componentId: "u0cwbv-4"
})(["display:flex;flex-direction:column;margin-bottom:33px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "CompanyCardstyled__Title",
  componentId: "u0cwbv-5"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 6px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 21px;
		line-height: 28px;
		margin-bottom: 8px;
  	`);
const DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "CompanyCardstyled__DescriptionText",
  componentId: "u0cwbv-6"
})(["font-family:", ";font-size:21px;line-height:26px;letter-spacing:-0.11px;margin:0;"], props => props.theme.fonts.financier);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__FooterWrapper",
  componentId: "u0cwbv-7"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin-bottom: 0;
  	`);
const RoleText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "CompanyCardstyled__RoleText",
  componentId: "u0cwbv-8"
})(["font-family:", ";font-size:16px;line-height:21px;color:", ";margin:0;"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey);
const NextTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "CompanyCardstyled__NextTag",
  componentId: "u0cwbv-9"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./components/company-card/index.js":
/*!******************************************!*\
  !*** ./components/company-card/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _label_with_arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label-with-arrow */ "./components/label-with-arrow/index.js");
/* harmony import */ var _CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyCard.styled */ "./components/company-card/CompanyCard.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/company-card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CompanyCard = props => {
  const {
    title,
    description,
    role,
    company,
    onNext,
    imageUrl
  } = props;
  return __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["CompanyCardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["StyledImage"], {
    src: `/static/images/${imageUrl}.png`,
    srcSet: `/static/images/${imageUrl}@1x.png 1x, /static/images/${imageUrl}@2x.png 2x,
                                 /static/images/${imageUrl}@3x.png 3x`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  })), __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["DescriptionWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, title), __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["DescriptionText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }, description)), __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["FooterWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["RoleText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, role), __jsx(_label_with_arrow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: company,
    onClick: onNext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 6
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CompanyCard);

/***/ }),

/***/ "./components/contact-footer/ContactFooter.styled.js":
/*!***********************************************************!*\
  !*** ./components/contact-footer/ContactFooter.styled.js ***!
  \***********************************************************/
/*! exports provided: ContactFooterWrapper, ContentWrapper, Content, Title, Description, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFooterWrapper", function() { return ContactFooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ContactFooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContactFooterWrapper",
  componentId: "sc-1z0aj7c-0"
})(["width:100%;background:rgb(125,39,255);background:linear-gradient(90deg,rgba(125,39,255,1) 0%,rgba(180,79,255,1) 100%);"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContentWrapper",
  componentId: "sc-1z0aj7c-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
  `);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__Content",
  componentId: "sc-1z0aj7c-2"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:30px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin: 0;
    align-items: flex-start;
  `);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "ContactFooterstyled__Title",
  componentId: "sc-1z0aj7c-3"
})(["font-family:", ";font-size:32px;line-height:42px;margin:0 0 6px 0;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 8px 0;
  `);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ContactFooterstyled__Description",
  componentId: "sc-1z0aj7c-4"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0;color:", ";text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    max-width: 667px;
    text-align: left;
  `);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__ButtonWrapper",
  componentId: "sc-1z0aj7c-5"
})(["margin-bottom:0;"]);

/***/ }),

/***/ "./components/contact-footer/index.js":
/*!********************************************!*\
  !*** ./components/contact-footer/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactFooter.styled */ "./components/contact-footer/ContactFooter.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/contact-footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ContactFooter = () => {
  return __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["ContactFooterWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 2
    }
  }, __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "See how we can help"), __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, "Reach out to us to explore our services or hear our ideas about the industry in greater detail")), __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    btnText: "Contact us",
    onClick: () => {},
    isDefault: false,
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactFooter);

/***/ }),

/***/ "./components/contact-form/ContactForm.styled.js":
/*!*******************************************************!*\
  !*** ./components/contact-form/ContactForm.styled.js ***!
  \*******************************************************/
/*! exports provided: FormWrapper, Content, InputWrapper, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__FormWrapper",
  componentId: "kj1rng-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:2px 4px 8px 0 rgba(0,0,0,0.2);width:100%;max-width:640px;background-color:", ";"], props => props.theme.colors.white);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__Content",
  componentId: "kj1rng-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;padding:0 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    padding: 0 40px;
  `);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__InputWrapper",
  componentId: "kj1rng-2"
})(["margin-bottom:20px;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__ButtonWrapper",
  componentId: "kj1rng-3"
})(["align-self:center;"]);

/***/ }),

/***/ "./components/contact-form/index.js":
/*!******************************************!*\
  !*** ./components/contact-form/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactForm.styled */ "./components/contact-form/ContactForm.styled.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "./components/input/index.js");
/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textfield */ "./components/textfield/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/contact-form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ContactForm = ({
  onChange,
  firstName,
  company,
  email,
  message,
  onSubmit,
  isError
}) => __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["FormWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 2
  }
}, __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["Content"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 3
  }
}, __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 4
  }
}, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: "Name" // placeholder="Margaret Mango"
  ,
  value: firstName,
  name: "firstName",
  onChange: onChange,
  isRequired: true,
  isError: isError,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 4
  }
}, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: "Email" // placeholder="margaret@mango.com"
  ,
  value: email,
  name: "email",
  onChange: onChange,
  isRequired: true,
  isError: isError,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 4
  }
}, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: "Company" // placeholder="Mango co."
  ,
  value: company,
  name: "company",
  onChange: onChange,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 4
  }
}, __jsx(_textfield__WEBPACK_IMPORTED_MODULE_4__["default"], {
  label: "Message" // placeholder="Your message here"
  ,
  value: message,
  name: "message",
  onChange: onChange,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 4
  }
}, __jsx(_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
  btnText: "Contact us",
  onClick: onSubmit,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/footer/Footer.styled.js":
/*!********************************************!*\
  !*** ./components/footer/Footer.styled.js ***!
  \********************************************/
/*! exports provided: FooterWrapper, ContentWrapper, FooterLogoWrapper, TextWrapper, MarketDataText, ExploreAndSocialWrapper, ExploreWrapper, ExploreTitle, ExploreItem, SocialWrapper, SocialContent, SocialTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLogoWrapper", function() { return FooterLogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketDataText", function() { return MarketDataText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreAndSocialWrapper", function() { return ExploreAndSocialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreWrapper", function() { return ExploreWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreTitle", function() { return ExploreTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreItem", function() { return ExploreItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialWrapper", function() { return SocialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialContent", function() { return SocialContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTitle", function() { return SocialTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "Footerstyled__FooterWrapper",
  componentId: "sc-1a3izcr-0"
})(["min-height:375px;width:100%;background-color:black;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    min-height: 350px;
    padding: 0;
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__ContentWrapper",
  componentId: "sc-1a3izcr-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
  `);
const FooterLogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__FooterLogoWrapper",
  componentId: "sc-1a3izcr-2"
})(["display:flex;margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    margin-bottom: 0;
  `);
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__TextWrapper",
  componentId: "sc-1a3izcr-3"
})(["margin-bottom:40px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		max-width: 640px;
		margin-bottom: 0;
		padding: 0 24px;
  `);
const MarketDataText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Footerstyled__MarketDataText",
  componentId: "sc-1a3izcr-4"
})(["margin:0;color:", ";font-family:", ";font-weight:400;font-size:18px;line-height:26px;text-align:left;", " ", ""], props => props.theme.colors.white, props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    font-size: 16px;
    line-height: 24px;
  `, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
  `);
const ExploreAndSocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__ExploreAndSocialWrapper",
  componentId: "sc-1a3izcr-5"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
	width: 300px;
  `);
const ExploreWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__ExploreWrapper",
  componentId: "sc-1a3izcr-6"
})(["display:flex;flex-direction:column;"]);
const ExploreTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Footerstyled__ExploreTitle",
  componentId: "sc-1a3izcr-7"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 17px 0;", ""], props => props.theme.colors.white, props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `);
const ExploreItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Footerstyled__ExploreItem",
  componentId: "sc-1a3izcr-8"
})(["font-size:16px;line-height:22px;color:#c8c8c8;margin-bottom:18px;font-family:", ";cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], props => props.theme.fonts.graphik);
const SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__SocialWrapper",
  componentId: "sc-1a3izcr-9"
})(["display:flex;flex-direction:column;margin-left:40px;"]);
const SocialContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__SocialContent",
  componentId: "sc-1a3izcr-10"
})(["display:flex;flex-direction:row;"]);
const SocialTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Footerstyled__SocialTitle",
  componentId: "sc-1a3izcr-11"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 27px 0;", ""], props => props.theme.colors.white, props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `);

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-icon */ "./components/social-icon/index.js");
/* harmony import */ var _Footer_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.styled */ "./components/footer/Footer.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["FooterWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 2
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["FooterLogoWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 4
  }
}, __jsx("img", {
  src: "/static/images/white.png",
  srcSet: "/static/images/white.png 1x, /static/images/white@2x.png 2x, /static/images/white@3x.png 3x",
  width: "140",
  height: "127",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["TextWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 4
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["MarketDataText"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }
}, "Market data company is North America\u2019s leading market data solutions and consultancy company. We offer specialized consulting services and leading market data management solutions that help deal with the complexity of your data. Reach us at (416)-315-7177 or info@marketdatacompany.com.")), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreAndSocialWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 4
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 6
  }
}, "Explore"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/research",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 6
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreItem"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }
}, "Research")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/contact",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 6
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreItem"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 7
  }
}, "Contact"))), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["SocialWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["SocialTitle"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 6
  }
}, "Social"), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["SocialContent"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 6
  }
}, __jsx(_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  url: "http://facebook.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}), __jsx(_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  url: "https://www.linkedin.com/company/market-data-company/",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }
}), __jsx(_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  url: "http://twitter.com",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 7
  }
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/hamburger-menu-content/HamburgerMenuContent.styled.js":
/*!**************************************************************************!*\
  !*** ./components/hamburger-menu-content/HamburgerMenuContent.styled.js ***!
  \**************************************************************************/
/*! exports provided: HamburgerMenuContentWrapper, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerMenuContentWrapper", function() { return HamburgerMenuContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HamburgerMenuContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__HamburgerMenuContentWrapper",
  componentId: "sc-12ib83-0"
})(["display:flex;flex-direction:column;background-color:", ";width:100%;"], props => props.theme.colors.white);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__Header",
  componentId: "sc-12ib83-1"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;margin-bottom:60px;"]);

/***/ }),

/***/ "./components/hamburger-menu-content/index.js":
/*!****************************************************!*\
  !*** ./components/hamburger-menu-content/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item */ "./components/list-item/index.js");
/* harmony import */ var _HamburgerMenuContent_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HamburgerMenuContent.styled */ "./components/hamburger-menu-content/HamburgerMenuContent.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/hamburger-menu-content/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HamburgerMenuContent = props => {
  const {
    onCloseModal
  } = props;
  return __jsx(_HamburgerMenuContent_styled__WEBPACK_IMPORTED_MODULE_3__["HamburgerMenuContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 3
    }
  }, __jsx(_HamburgerMenuContent_styled__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }
  }, __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }
  })), __jsx("div", {
    onClick: onCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }))), __jsx(_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Research",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }
  }), __jsx(_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Contact us",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenuContent);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: AnimatedCard, AnimatedFooterLink, BioCard, Button, CompanyCard, ContactFooter, ContactForm, Footer, HamburgerMenuContent, Input, LabelWithArrow, Layout, ListItem, Modal, ResearchPdfForm, SocialIcon, StartDownloadForm, TabBar, TextField, ThankYou, TickerTape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animated_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animated-card */ "./components/animated-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedCard", function() { return _animated_card__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedFooterLink", function() { return _animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bio_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bio-card */ "./components/bio-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BioCard", function() { return _bio_card__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _company_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-card */ "./components/company-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyCard", function() { return _company_card__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _contact_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-footer */ "./components/contact-footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactFooter", function() { return _contact_footer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-form */ "./components/contact-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return _contact_form__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./components/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _hamburger_menu_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hamburger-menu-content */ "./components/hamburger-menu-content/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HamburgerMenuContent", function() { return _hamburger_menu_content__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input */ "./components/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _label_with_arrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./label-with-arrow */ "./components/label-with-arrow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelWithArrow", function() { return _label_with_arrow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./components/layout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-item */ "./components/list-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _list_item__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _research_pdf_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./research-pdf-form */ "./components/research-pdf-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResearchPdfForm", function() { return _research_pdf_form__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _social_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./social-icon */ "./components/social-icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return _social_icon__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _start_download_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./start-download-form */ "./components/start-download-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartDownloadForm", function() { return _start_download_form__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _tab_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tab-bar */ "./components/tab-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _tab_bar__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./textfield */ "./components/textfield/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _textfield__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _thank_you__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./thank-you */ "./components/thank-you/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return _thank_you__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _ticker_tape__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ticker-tape */ "./components/ticker-tape/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TickerTape", function() { return _ticker_tape__WEBPACK_IMPORTED_MODULE_20__["default"]; });























/***/ }),

/***/ "./components/input/Input.styled.js":
/*!******************************************!*\
  !*** ./components/input/Input.styled.js ***!
  \******************************************/
/*! exports provided: InputWrapper, LabelWrapper, Label, ErrorStar, FieldWrapper, Field, ImageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelWrapper", function() { return LabelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStar", function() { return ErrorStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__InputWrapper",
  componentId: "sc-1fbwxt1-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
const LabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__LabelWrapper",
  componentId: "sc-1fbwxt1-1"
})(["display:flex;flex-direction:row;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Inputstyled__Label",
  componentId: "sc-1fbwxt1-2"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;margin-right:2px;"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
const ErrorStar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Inputstyled__ErrorStar",
  componentId: "sc-1fbwxt1-3"
})(["font-family:'LucidaGrande';font-size:21px;color:#ff0000;"]);
const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__FieldWrapper",
  componentId: "sc-1fbwxt1-4"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;border:", ";background-color:", ";-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], props => props.isError ? `solid 1px ${props.theme.colors.red}` : 'solid 1px #c8c8c8', props => props.isError ? 'rgba(255, 39, 82, 0.02)' : `${props => props.theme.colors.white}`);
const Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Inputstyled__Field",
  componentId: "sc-1fbwxt1-5"
})(["height:39px;width:100%;padding-left:14px;font-family:", ";font-size:14px;line-height:22px;color:", ";border:none;&:focus{outline:none;}"], props => props.theme.fonts.graphik, props => props.isError ? props.theme.colors.red : props.theme.colors.lightGrey);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__ImageWrapper",
  componentId: "sc-1fbwxt1-6"
})(["padding-right:16px;"]);

/***/ }),

/***/ "./components/input/index.js":
/*!***********************************!*\
  !*** ./components/input/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.styled */ "./components/input/Input.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/input/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  isRequired,
  isError
}) => {
  return __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["LabelWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, label), isRequired && __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["ErrorStar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 20
    }
  }, "*")), __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["FieldWrapper"], {
    isError: isError,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }
  }, __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    value: value,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }), isError && __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx("img", {
    src: "/static/images/error.png",
    srcSet: "/static/images/error.png 1x, /static/images/error@2x.png 2x, /static/images/error@3x.png 3x",
    height: "22",
    width: "22",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }))));
};

Input.defaultProps = {
  isRequired: false
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/label-with-arrow/LabelWithArrow.styled.js":
/*!**************************************************************!*\
  !*** ./components/label-with-arrow/LabelWithArrow.styled.js ***!
  \**************************************************************/
/*! exports provided: LabelWithArrowWrapper, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelWithArrowWrapper", function() { return LabelWithArrowWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LabelWithArrowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LabelWithArrowstyled__LabelWithArrowWrapper",
  componentId: "sc-1b3pixz-0"
})(["display:flex;flex-direction:row;align-items:center;&:hover{cursor:pointer;}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "LabelWithArrowstyled__Label",
  componentId: "sc-1b3pixz-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 7px 0 0;"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./components/label-with-arrow/index.js":
/*!**********************************************!*\
  !*** ./components/label-with-arrow/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelWithArrow_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelWithArrow.styled */ "./components/label-with-arrow/LabelWithArrow.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/label-with-arrow/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LabelWithArrow = props => {
  const {
    label,
    onClick
  } = props;
  return __jsx(_LabelWithArrow_styled__WEBPACK_IMPORTED_MODULE_1__["LabelWithArrowWrapper"], {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_LabelWithArrow_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, label), __jsx("img", {
    src: "/static/images/arrow.png",
    srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LabelWithArrow);

/***/ }),

/***/ "./components/layout/Layout.styled.js":
/*!********************************************!*\
  !*** ./components/layout/Layout.styled.js ***!
  \********************************************/
/*! exports provided: Wrapper, FooterWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layoutstyled__Wrapper",
  componentId: "apusfk-0"
})(["display:flex;flex-direction:column;flex:1;width:100%;"]);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layoutstyled__FooterWrapper",
  componentId: "apusfk-1"
})(["margin-top:auto;"]);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.styled */ "./components/layout/Layout.styled.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer */ "./components/footer/index.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  return __jsx(_Layout_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, children, __jsx(_Layout_styled__WEBPACK_IMPORTED_MODULE_1__["FooterWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/list-item/ListItem.styled.js":
/*!*************************************************!*\
  !*** ./components/list-item/ListItem.styled.js ***!
  \*************************************************/
/*! exports provided: ListItemWrapper, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemWrapper", function() { return ListItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ListItemstyled__ListItemWrapper",
  componentId: "r7lddp-0"
})(["display:flex;flex-direction:column;min-height:60px;justify-content:center;align-items:center;border-bottom:solid 1px #efefef;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ListItemstyled__Label",
  componentId: "r7lddp-1"
})(["font-size:21px;font-family:", ";color:", ";"], props => props.theme.fonts.graphik, props => props.theme.colors.black);

/***/ }),

/***/ "./components/list-item/index.js":
/*!***************************************!*\
  !*** ./components/list-item/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListItem_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem.styled */ "./components/list-item/ListItem.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/list-item/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ListItem = props => {
  const {
    label,
    onClick
  } = props;
  return __jsx(_ListItem_styled__WEBPACK_IMPORTED_MODULE_1__["ListItemWrapper"], {
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_ListItem_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, label));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/modal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const customStyles = {
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

const MDCModal = props => {
  const {
    children,
    modalVisible,
    onRequestClose
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('body');
  }, []);
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: modalVisible,
    onRequestClose: onRequestClose,
    style: customStyles,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (MDCModal);

/***/ }),

/***/ "./components/research-pdf-form/ResearchPdfForm.styled.js":
/*!****************************************************************!*\
  !*** ./components/research-pdf-form/ResearchPdfForm.styled.js ***!
  \****************************************************************/
/*! exports provided: ResearchPdfFormWrapper, ImageWrapper, CloseIcon, ContentWrapper, Title, Description, InputWrapper, ButtonWrapper, StyledAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchPdfFormWrapper", function() { return ResearchPdfFormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledAnchor", function() { return StyledAnchor; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ResearchPdfFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ResearchPdfFormWrapper",
  componentId: "rdg6wy-0"
})(["display:flex;flex-direction:column;flex:1;min-height:591px;background-color:", ";", ""], props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		max-height: 600px;
		max-width: 724px;
	`);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ImageWrapper",
  componentId: "rdg6wy-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], props => props.theme.colors.sbGrey);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "ResearchPdfFormstyled__CloseIcon",
  componentId: "rdg6wy-2"
})(["height:18px;width:18px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ContentWrapper",
  componentId: "rdg6wy-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin: 0 60px;
	`);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "ResearchPdfFormstyled__Title",
  componentId: "rdg6wy-4"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 12px;text-align:center;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "ResearchPdfFormstyled__Description",
  componentId: "rdg6wy-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin-bottom:0 0 18px;text-align:center;"], props => props.theme.fonts.financier);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__InputWrapper",
  componentId: "rdg6wy-6"
})(["margin-bottom:12px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin-bottom: 16px;
		&:nth-child(6) {
        	margin-bottom: 40px;
    	}
	`);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ButtonWrapper",
  componentId: "rdg6wy-7"
})(["align-self:center;"]);
const StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "ResearchPdfFormstyled__StyledAnchor",
  componentId: "rdg6wy-8"
})(["text-decoration:none;"]);

/***/ }),

/***/ "./components/research-pdf-form/index.js":
/*!***********************************************!*\
  !*** ./components/research-pdf-form/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input */ "./components/input/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResearchPdfForm.styled */ "./components/research-pdf-form/ResearchPdfForm.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/research-pdf-form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ResearchPdfForm = props => {
  const {
    firstName,
    company,
    email,
    onChange,
    onSubmit,
    isDisabled,
    onRequestClose,
    pdfForm
  } = props;
  return __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ResearchPdfFormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 3
    }
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, "Just one last thing.."), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, "To get this case study completely free, please leave us your name and email address to receive future news and updates."), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["InputWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Name" // placeholder="John Doe"
    ,
    name: "firstName",
    value: firstName,
    onChange: onChange,
    isRequired: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 6
    }
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["InputWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Email" // placeholder="johndoe@email.com"
    ,
    name: "email",
    value: email,
    onChange: onChange,
    isRequired: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["InputWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Company" // placeholder="company name"
    ,
    name: "company",
    value: company,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 6
    }
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["StyledAnchor"], {
    onClick: e => isDisabled ? e.preventDefault() : () => {},
    href: pdfForm,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    btnText: "Download PDF",
    onClick: onSubmit,
    isDisabled: isDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResearchPdfForm);

/***/ }),

/***/ "./components/social-icon/index.js":
/*!*****************************************!*\
  !*** ./components/social-icon/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-social-icons */ "react-social-icons");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/colors */ "./assets/colors.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/social-icon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SocialIcon = props => {
  const {
    url
  } = props;
  return __jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_1__["SocialIcon"], {
    url: url,
    style: {
      height: 40,
      width: 40,
      marginRight: 20
    },
    bgColor: _assets_colors__WEBPACK_IMPORTED_MODULE_2__["MDC_PURPLE"],
    fgColor: _assets_colors__WEBPACK_IMPORTED_MODULE_2__["WHITE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIcon);

/***/ }),

/***/ "./components/start-download-form/StartDownloadForm.js":
/*!*************************************************************!*\
  !*** ./components/start-download-form/StartDownloadForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartDownloadForm.styled */ "./components/start-download-form/StartDownloadForm.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/start-download-form/StartDownloadForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StartDownloadForm = props => {
  const {
    onRequestClose,
    pdfForm,
    onSubmit
  } = props;
  return __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["StartDownloadFormWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["CloseIcon"], {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  })), __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "Start your download"), __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, "After reading, If you'd like to learn more about how we can help you optimize your data spend, get in touch with our team and we'd be happy to help you."), __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["StyledAnchor"], {
    href: pdfForm,
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnText: "Download",
    onClick: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (StartDownloadForm);

/***/ }),

/***/ "./components/start-download-form/StartDownloadForm.styled.js":
/*!********************************************************************!*\
  !*** ./components/start-download-form/StartDownloadForm.styled.js ***!
  \********************************************************************/
/*! exports provided: StartDownloadFormWrapper, ImageWrapper, CloseIcon, ContentWrapper, Title, Description, ButtonWrapper, StyledAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDownloadFormWrapper", function() { return StartDownloadFormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledAnchor", function() { return StyledAnchor; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const StartDownloadFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__StartDownloadFormWrapper",
  componentId: "g865k7-0"
})(["display:flex;flex-direction:column;flex:1;min-height:560px;background-color:", ";", ""], props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		max-height: 600px;
		max-width: 724px;
	`);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ImageWrapper",
  componentId: "g865k7-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], props => props.theme.colors.sbGrey);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "StartDownloadFormstyled__CloseIcon",
  componentId: "g865k7-2"
})(["height:18px;width:18px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ContentWrapper",
  componentId: "g865k7-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin: 0 62px;
	`);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "StartDownloadFormstyled__Title",
  componentId: "g865k7-4"
})(["font-family:", ";font-size:36px;line-height:48px;color:", ";margin:0 0 12px;text-align:center;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "StartDownloadFormstyled__Description",
  componentId: "g865k7-5"
})(["font-family:", ";font-size:21px;line-height:28px;margin:0 0 40px;text-align:center;"], props => props.theme.fonts.financier);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ButtonWrapper",
  componentId: "g865k7-6"
})(["align-self:center;"]);
const StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "StartDownloadFormstyled__StyledAnchor",
  componentId: "g865k7-7"
})(["text-decoration:none;"]);

/***/ }),

/***/ "./components/start-download-form/index.js":
/*!*************************************************!*\
  !*** ./components/start-download-form/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartDownloadForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartDownloadForm */ "./components/start-download-form/StartDownloadForm.js");

/* harmony default export */ __webpack_exports__["default"] = (_StartDownloadForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/tab-bar/TabBar.styled.js":
/*!*********************************************!*\
  !*** ./components/tab-bar/TabBar.styled.js ***!
  \*********************************************/
/*! exports provided: Wrapper, MobileTabWrapper, TabWrapper, Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileTabWrapper", function() { return MobileTabWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabWrapper", function() { return TabWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__Wrapper",
  componentId: "sc-13utfq2-0"
})(["display:flex;height:72px;background-color:", ";"], props => props.backgroundColor || 'transparent');
const MobileTabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__MobileTabWrapper",
  componentId: "sc-13utfq2-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		display: none;
	`);
const TabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__TabWrapper",
  componentId: "sc-13utfq2-2"
})(["display:none;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "TabBarstyled__Tab",
  componentId: "sc-13utfq2-3"
})(["color:", ";text-decoration:none;font-size:16px;line-height:22px;font-family:", ";margin-right:50px;cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], props => props.barTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white, props => props.theme.fonts.graphik);

/***/ }),

/***/ "./components/tab-bar/index.js":
/*!*************************************!*\
  !*** ./components/tab-bar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal */ "./components/modal/index.js");
/* harmony import */ var _hamburger_menu_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hamburger-menu-content */ "./components/hamburger-menu-content/index.js");
/* harmony import */ var _TabBar_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabBar.styled */ "./components/tab-bar/TabBar.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/tab-bar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const linkData = [{
  href: '/research',
  tabName: 'Research'
}, {
  href: '/contact',
  tabName: 'Contact'
}];

const TabBar = props => {
  const {
    barTheme,
    backgroundColor
  } = props;
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const renderLinks = () => {
    return linkData.map(data => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: data.href,
        href: data.href,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 5
        }
      }, __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
        barTheme: barTheme,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 6
        }
      }, data.tabName));
    });
  };

  const WebTabBar = () => __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["TabWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }
  }, __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }))), renderLinks());

  const MobileTabBar = () => __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["MobileTabWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }))), __jsx("div", {
    onClick: () => setModalVisible(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/black-hamburger.png",
    srcSet: "/static/images/black-hamburger.png 1x, /static/images/black-hamburger@2x.png 2x, /static/images/black-hamburger@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 6
    }
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/hamburger.png",
    srcSet: "/static/images/hamburger.png 1x, /static/images/hamburger@2x.png 2x, /static/images/hamburger@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 6
    }
  })));

  return __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    themeDark: true,
    backgroundColor: backgroundColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 3
    }
  }, __jsx(WebTabBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }
  }), __jsx(MobileTabBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }
  }), __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalVisible: modalVisible,
    onRequestClose: () => setModalVisible(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }
  }, __jsx(_hamburger_menu_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onCloseModal: () => setModalVisible(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  })));
};

TabBar.defaultProps = {
  barTheme: 'light'
};
/* harmony default export */ __webpack_exports__["default"] = (TabBar);

/***/ }),

/***/ "./components/textfield/Textfield.styled.js":
/*!**************************************************!*\
  !*** ./components/textfield/Textfield.styled.js ***!
  \**************************************************/
/*! exports provided: TextFieldWrapper, Label, Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldWrapper", function() { return TextFieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TextFieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Textfieldstyled__TextFieldWrapper",
  componentId: "z551o9-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Textfieldstyled__Label",
  componentId: "z551o9-1"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
const Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "Textfieldstyled__Field",
  componentId: "z551o9-2"
})(["border:solid 1px #c8c8c8;height:125px;width:100%;padding:6px 0 0 14px;font-family:", ";font-size:14px;line-height:22px;color:", ";resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey);

/***/ }),

/***/ "./components/textfield/index.js":
/*!***************************************!*\
  !*** ./components/textfield/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Textfield_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textfield.styled */ "./components/textfield/Textfield.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/textfield/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Textfield = ({
  label,
  value,
  name,
  onChange,
  placeholder
}) => __jsx(_Textfield_styled__WEBPACK_IMPORTED_MODULE_1__["TextFieldWrapper"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 2
  }
}, __jsx(_Textfield_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, label), __jsx(_Textfield_styled__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  value: value,
  name: name,
  placeholder: placeholder,
  onChange: onChange,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (Textfield);

/***/ }),

/***/ "./components/thank-you/ThankYou.styled.js":
/*!*************************************************!*\
  !*** ./components/thank-you/ThankYou.styled.js ***!
  \*************************************************/
/*! exports provided: ThankYouWrapper, ImageWrapper, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouWrapper", function() { return ThankYouWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ThankYouWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThankYoustyled__ThankYouWrapper",
  componentId: "v71j8l-0"
})(["display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center;background-color:", ";"], props => props.theme.colors.white);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThankYoustyled__ImageWrapper",
  componentId: "v71j8l-1"
})(["margin-bottom:29px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "ThankYoustyled__Title",
  componentId: "v71j8l-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 9px;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
  `);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "ThankYoustyled__Description",
  componentId: "v71j8l-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 44px;color:", ";text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 63px;
    max-width: 344px;
  `);

/***/ }),

/***/ "./components/thank-you/index.js":
/*!***************************************!*\
  !*** ./components/thank-you/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThankYou.styled */ "./components/thank-you/ThankYou.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/thank-you/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ThankYou = props => {
  const {
    description,
    href,
    footerMessage,
    onClick
  } = props;
  return __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["ThankYouWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx("img", {
    src: "/static/images/purple-check-mark.png",
    srcSet: "/static/images/purple-check-mark.png 1x, /static/images/purple-check-mark@2x.png 2x, /static/images/purple-check-mark@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  })), __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }
  }, "Thank You"), __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }
  }, description), __jsx(_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: footerMessage,
    href: href,
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }));
};

ThankYou.defaultProps = {
  email: 'your email address',
  onClick: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (ThankYou);

/***/ }),

/***/ "./components/ticker-tape/index.js":
/*!*****************************************!*\
  !*** ./components/ticker-tape/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TickerTape; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/ticker-tape/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class TickerTape extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this._ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [{
        "description": "NYSE: BAC",
        "proName": "NYSE:BAC"
      }, {
        "description": "FWB: BRF",
        "proName": "FWB:BRF"
      }, {
        "description": "HKEX: 388",
        "proName": "HKEX:388"
      }, {
        "description": "NYSE: BX",
        "proName": "NYSE:BX"
      }, {
        "description": "AMEX: CBOE",
        "proName": "AMEX:CBOE"
      }, {
        "description": "NASDAQ: CMCSA",
        "proName": "NASDAQ:CMCSA"
      }, {
        "description": "NASDAQ: CME",
        "proName": "NASDAQ:CME"
      }, {
        "description": "OTC: CMTX",
        "proName": "OTC:CMTX"
      }, {
        "description": "NASDAQ: COWN",
        "proName": "NASDAQ:COWN"
      }, {
        "description": "NYSE: DNB",
        "proName": "NYSE:DNB"
      }, {
        "description": "NYSE: DOW",
        "proName": "NYSE:DOW"
      }, {
        "description": "OTC: EMYIF",
        "proName": "OTC:EMYIF"
      }, {
        "description": "CAPITALCOM: ERM",
        "proName": "CAPITALCOM:ERM"
      }, {
        "description": "OTC: FDRVF",
        "proName": "OTC:FDRVF"
      }, {
        "description": "NYSE: FDS",
        "proName": "NYSE:FDS"
      }, {
        "description": "NYSE: FIS",
        "proName": "NYSE:FIS"
      }, {
        "description": "NASDAQ: FLEX",
        "proName": "NASDAQ:FLEX"
      }, {
        "description": "NYSE: IACA",
        "proName": "NYSE:IACA"
      }, {
        "description": "NYSE: ICE",
        "proName": "NYSE:ICE"
      }, {
        "description": "OTC: IFJPY",
        "proName": "OTC:IFJPY"
      }, {
        "description": "CAPITALCOM: INF",
        "proName": "CAPITALCOM:INF"
      }, {
        "description": "NYSE: INFO",
        "proName": "NYSE:INFO"
      }, {
        "description": "CSE: IP",
        "proName": "CSE:IP"
      }, {
        "description": "ASX: IRE",
        "proName": "ASX:IRE"
      }, {
        "description": "OTC: IVFZF",
        "proName": "OTC:IVFZF"
      }, {
        "description": "NYSE: JPM",
        "proName": "NYSE:JPM"
      }, {
        "description": "LSE: LSEG",
        "proName": "LSE:LSEG"
      }, {
        "description": "NASDAQ: MATW",
        "proName": "NASDAQ:MATW"
      }, {
        "description": "NYSE: MCO",
        "proName": "NYSE:MCO"
      }, {
        "description": "CBOT: MCX1",
        "proName": "CBOT:MCX1!"
      }, {
        "description": "NASDAQ: MKTX",
        "proName": "NASDAQ:MKTX"
      }, {
        "description": "OTC: MNXBY",
        "proName": "OTC:MNXBY"
      }, {
        "description": "NASDAQ: MORN",
        "proName": "NASDAQ:MORN"
      }, {
        "description": "NYSE: MSCI",
        "proName": "NYSE:MSCI"
      }, {
        "description": "OTC: MVEN",
        "proName": "OTC:MVEN"
      }, {
        "description": "NASDAQ: NDAQ",
        "proName": "NASDAQ:NDAQ"
      }, {
        "description": "NYSE: NMR",
        "proName": "NYSE:NMR"
      }, {
        "description": "NASDAQ: NWE",
        "proName": "NASDAQ:NWE"
      }, {
        "description": "NASDAQ: NWSA",
        "proName": "NASDAQ:NWSA"
      }, {
        "description": "NYSE: ORCL",
        "proName": "NYSE:ORCL"
      }, {
        "description": "NYSE: POST",
        "proName": "NYSE:POST"
      }, {
        "description": "NASDAQ: PSEC",
        "proName": "NASDAQ:PSEC"
      }, {
        "description": "LSE: PTEC",
        "proName": "LSE:PTEC"
      }, {
        "description": "LSE: REL",
        "proName": "LSE:REL"
      }, {
        "description": "OTC: RLXXF",
        "proName": "OTC:RLXXF"
      }, {
        "description": "NYSE: SKY",
        "proName": "NYSE:SKY"
      }, {
        "description": "NYSE: SPGI",
        "proName": "NYSE:SPGI"
      }, {
        "description": "NASDAQ: SSNC",
        "proName": "NASDAQ:SSNC"
      }, {
        "description": "NYSE: STT",
        "proName": "NYSE:STT"
      }, {
        "description": "LSE: TCAP",
        "proName": "LSE:TCAP"
      }, {
        "description": "NYSE: TRI",
        "proName": "NYSE:TRI"
      }, {
        "description": "AMEX: TTAC",
        "proName": "AMEX:TTAC"
      }, {
        "description": "NASDAQ: TTD",
        "proName": "NASDAQ:TTD"
      }, {
        "description": "NASDAQ: TW",
        "proName": "NASDAQ:TW"
      }, {
        "description": "NYSE: WAT",
        "proName": "NYSE:WAT"
      }, {
        "description": "OTC: WSCO",
        "proName": "OTC:WSCO"
      }],
      "showSymbolLogo": true,
      "colorTheme": "light",
      "isTransparent": false,
      "displayMode": "adaptive",
      "locale": "en"
    });

    this._ref.current.appendChild(script);
  }

  render() {
    return __jsx("div", {
      className: "tradingview-widget-container",
      ref: this._ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "tradingview-widget-container__widget",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "tradingview-widget-copyright",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "https://www.tradingview.com",
      rel: "noreferrer",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 63
      }
    }, __jsx("span", {
      className: "blue-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 134
      }
    }, "Ticker Tape")), " by TradingView"));
  }

}

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

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _sections_home_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/home-section */ "./sections/home-section/index.js");
/* harmony import */ var _utils_pdfMapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/pdfMapper */ "./utils/pdfMapper.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/validator */ "./utils/validator.js");
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apiService */ "./services/apiService.js");
/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/useStore */ "./store/useStore.js");
/* harmony import */ var _store_actionTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actionTypes */ "./store/actionTypes.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // Utils







const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1cvwks4-0"
})(["max-width:1200px;padding:0 20px;margin:0 auto;"]);

const Home = () => {
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: hasError,
    1: setHasError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: emailSent,
    1: setEmailSent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: pdfForm,
    1: setPdfForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: form,
    1: setFormValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    firstName: '',
    company: '',
    email: ''
  }); // Hooks to save the users form data

  const {
    state,
    dispatch
  } = Object(_store_useStore__WEBPACK_IMPORTED_MODULE_6__["useStore"])();
  const saveUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(formValues => dispatch({
    type: _store_actionTypes__WEBPACK_IMPORTED_MODULE_7__["USER_SIGNED_UP"],
    payload: formValues
  }), [dispatch]);

  const onSubmit = async () => {
    try {
      const res = await Object(_services_apiService__WEBPACK_IMPORTED_MODULE_5__["sendEmail"])(form);

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
    } catch (err) {
      setHasError(true);
    }
  };

  const updateField = e => {
    setFormValues(_objectSpread(_objectSpread({}, form), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const onModalClose = () => {
    setModalVisible(false);
    setEmailSent(false);
  };

  const openModal = researchForm => {
    setModalVisible(true);
    setPdfForm(_utils_pdfMapper__WEBPACK_IMPORTED_MODULE_3__["default"][researchForm]);
  };

  const isDisabled = !form.firstName && !Object(_utils_validator__WEBPACK_IMPORTED_MODULE_4__["validateEmail"])(form.email);
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 3
    }
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["Landing"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["TickerTape"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    modalVisible: modalVisible,
    onRequestClose: onModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }
  }, !emailSent && !hasError && !state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ResearchPdfForm"], {
    firstName: form.firstName,
    company: form.company,
    email: form.email,
    onChange: updateField,
    isDisabled: isDisabled,
    onRequestClose: onModalClose,
    onSubmit: onSubmit,
    pdfForm: pdfForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 6
    }
  }), !emailSent && !hasError && state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["StartDownloadForm"], {
    onRequestClose: onModalClose,
    pdfForm: pdfForm,
    onSubmit: () => setEmailSent(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }), emailSent && !hasError && __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ThankYou"], {
    description: "Your download should start automatically. Enjoy!",
    footerMessage: "Back to research",
    href: "/research",
    onClick: onModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 6
    }
  })), __jsx(ContentWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["LeaderMarketData"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["WorkedWith"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["WhyMdc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["Services"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["Research"], {
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ContactFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./sections/home-section/index.js":
/*!****************************************!*\
  !*** ./sections/home-section/index.js ***!
  \****************************************/
/*! exports provided: Landing, LeaderMarketData, Research, Services, WhyMdc, WorkedWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ "./sections/home-section/landing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return _landing__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _leader_market_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leader-market-data */ "./sections/home-section/leader-market-data/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeaderMarketData", function() { return _leader_market_data__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./research */ "./sections/home-section/research/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Research", function() { return _research__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./sections/home-section/services/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _why_mdc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./why-mdc */ "./sections/home-section/why-mdc/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhyMdc", function() { return _why_mdc__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _worked_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worked-with */ "./sections/home-section/worked-with/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkedWith", function() { return _worked_with__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./sections/home-section/landing/Landing.styled.js":
/*!*********************************************************!*\
  !*** ./sections/home-section/landing/Landing.styled.js ***!
  \*********************************************************/
/*! exports provided: LandingWrapper, ContentWrapper, Title, Description, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingWrapper", function() { return LandingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const LandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__LandingWrapper",
  componentId: "t8svsq-0"
})(["background-image:url('/static/images/mobile-landing.jpg');background-size:cover;height:95vh;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
			background-image: url("/static/images/tablet-landing.jpg");
		`);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__ContentWrapper",
  componentId: "t8svsq-1"
})(["max-width:1200px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;flex:1;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Title",
  componentId: "t8svsq-2"
})(["font-family:", ";font-size:42px;line-height:44px;color:", ";padding:160px 0 12px 0;margin-bottom:16px;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 57px;
    line-height: 64px;
  `);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "t8svsq-3"
})(["font-family:", ";font-weight:400;font-size:21px;line-height:24px;color:", ";margin:0 0 42px 0;text-align:left;max-width:720px;", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 28px;
    line-height: 32px;
  `);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__ButtonWrapper",
  componentId: "t8svsq-4"
})(["display:flex;flex-direction:row;justify-content:space-between;max-width:340px;margin:0 0 38px 0;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    	max-width: 380px;
  `);

/***/ }),

/***/ "./sections/home-section/landing/index.js":
/*!************************************************!*\
  !*** ./sections/home-section/landing/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Landing_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.styled */ "./sections/home-section/landing/Landing.styled.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/button */ "./components/button/index.js");
/* harmony import */ var _components_tab_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/tab-bar */ "./components/tab-bar/index.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/landing/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Landing = () => {
  const {
    0: current,
    1: setCurrent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const landingGifUrls = ['/static/gifs/financial-business-chart.gif', '/static/gifs/new-york-cityscape.gif'];
  const gifRefreshRate = 5990;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const next = (current + 1) % landingGifUrls.length;
    const id = setTimeout(() => setCurrent(next), gifRefreshRate);
    return () => clearTimeout(id);
  }, [current]);
  return __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["LandingWrapper"], {
    style: {
      backgroundImage: `url("${landingGifUrls[current]}")`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 3
    }
  }, __jsx(_components_tab_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }
  }), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }
  }, "Industry research by", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }), " industry experts."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }
  }, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }), "As North America's leading market data solutions consultancy we understand the importance of data in the financial markets and global economy."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }, __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "View Research",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "Contact us",
    isDefault: false,
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing); // /static/gifs/traffic-and-pedestrians-in-front-of-tower-bridge.gif
// /static/gifs/tourists.gif

/***/ }),

/***/ "./sections/home-section/leader-market-data/LeaderMarketData.styled.js":
/*!*****************************************************************************!*\
  !*** ./sections/home-section/leader-market-data/LeaderMarketData.styled.js ***!
  \*****************************************************************************/
/*! exports provided: LeaderMarketDataWrapper, Content, Title, InfoWrapper, InfoText, VideoWrapper, FactsWrapper, ProjectsCompletedWrapper, NumberText, FactsText, FooterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderMarketDataWrapper", function() { return LeaderMarketDataWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWrapper", function() { return InfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoText", function() { return InfoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoWrapper", function() { return VideoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsWrapper", function() { return FactsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsCompletedWrapper", function() { return ProjectsCompletedWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberText", function() { return NumberText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsText", function() { return FactsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterText", function() { return FooterText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const LeaderMarketDataWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__LeaderMarketDataWrapper",
  componentId: "sc-1rb8ak0-0"
})(["display:flex;flex-direction:column;flex:1;background-color:", ";margin:40px 0 60px 0;", ""], props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin: 80px 0 80px 0;
  `);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__Content",
  componentId: "sc-1rb8ak0-1"
})(["display:flex;flex-direction:column;margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: row;
    justify-content: space-between;
  `);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__Title",
  componentId: "sc-1rb8ak0-2"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 20px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 36px;
		line-height: 48px;
  `);
const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__InfoWrapper",
  componentId: "sc-1rb8ak0-3"
})(["display:flex;flex-direction:column;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 780px;
  `);
const InfoText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "LeaderMarketDatastyled__InfoText",
  componentId: "sc-1rb8ak0-4"
})(["font-family:", ";font-size:18px;line-height:26px;color:", ";margin:0 0 24px 0;", "\t"], props => props.theme.fonts.financier, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 24px;
		line-height: 30px;
	`);
const VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "LeaderMarketDatastyled__VideoWrapper",
  componentId: "sc-1rb8ak0-5"
})(["margin-top:16px;margin-bottom:24px;"]);
const FactsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__FactsWrapper",
  componentId: "sc-1rb8ak0-6"
})(["display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: column;
	justify-content: flex-start;
	margin-left: 40px;
  `);
const ProjectsCompletedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__ProjectsCompletedWrapper",
  componentId: "sc-1rb8ak0-7"
})(["display:flex;flex-direction:column;margin-right:40px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 38px;
  `);
const NumberText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__NumberText",
  componentId: "sc-1rb8ak0-8"
})(["font-family:", ";font-size:36px;line-height:36px;color:", ";margin:0 0 10px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.mdcPurple, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
	font-size: 48px;
	line-height: 48px;
  `);
const FactsText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__FactsText",
  componentId: "sc-1rb8ak0-9"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], props => props.theme.fonts.financier, props => props.theme.colors.lightGrey);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "LeaderMarketDatastyled__FooterText",
  componentId: "sc-1rb8ak0-10"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./sections/home-section/leader-market-data/index.js":
/*!***********************************************************!*\
  !*** ./sections/home-section/leader-market-data/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaderMarketData.styled */ "./sections/home-section/leader-market-data/LeaderMarketData.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/leader-market-data/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LeaderMarketData = () => {
  return __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["LeaderMarketDataWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, "Leader in market data consulting"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["InfoText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }
  }, "Market Data Company is a professional consulting firm with experts skilled in market data products, solutions and contract vendor management. We are committed to helping teams uncover insights that improve how they manage their market and reference data relationships."), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["InfoText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }, "We partner with our clients to answer the growing demands of their business by providing the expertise in the details that lead to increased profitability. Specifically, we offer a series of diagnostic tools that drive down costs while optimizing services. Learn more about how our Data License Compliance Manager tool can benefit your business in the video below:"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["VideoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx("iframe", {
    src: "https://player.vimeo.com/video/389039609",
    width: "640",
    height: "360",
    frameBorder: "0",
    allow: "autoplay; fullscreen",
    allowFullScreen: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }))), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["ProjectsCompletedWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["NumberText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "147"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Projects completed")), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["ProjectsCompletedWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["NumberText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "$354MM"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "Client dollars saved")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeaderMarketData);

/***/ }),

/***/ "./sections/home-section/research/Research.styled.js":
/*!***********************************************************!*\
  !*** ./sections/home-section/research/Research.styled.js ***!
  \***********************************************************/
/*! exports provided: ResearchWrapper, HeaderWrapper, HeaderTitle, HeaderDescription, CardContentWrapper, CardWrapper, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchWrapper", function() { return ResearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDescription", function() { return HeaderDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentWrapper", function() { return CardContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ResearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__ResearchWrapper",
  componentId: "sc-1uddaix-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:80px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 160px;
  `);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__HeaderWrapper",
  componentId: "sc-1uddaix-1"
})(["display:flex;flex-direction:column;aligh-items:flex-start;margin-bottom:55px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 780px;
`);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Researchstyled__HeaderTitle",
  componentId: "sc-1uddaix-2"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 13px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
  `);
const HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Researchstyled__HeaderDescription",
  componentId: "sc-1uddaix-3"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;", ""], props => props.theme.fonts.financier, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 24px;
    line-height: 30px;
  `);
const CardContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__CardContentWrapper",
  componentId: "sc-1uddaix-4"
})(["display:flex;flex-direction:column;margin-bottom:16px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: row;
    margin-bottom: 35px;
  `);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__CardWrapper",
  componentId: "sc-1uddaix-5"
})(["margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 0;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  `);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Researchstyled__Footer",
  componentId: "sc-1uddaix-6"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./sections/home-section/research/index.js":
/*!*************************************************!*\
  !*** ./sections/home-section/research/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-card */ "./components/animated-card/index.js");
/* harmony import */ var _components_animated_footer_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _Research_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Research.styled */ "./sections/home-section/research/Research.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/research/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Research = ({
  onClick
}) => {
  return __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["ResearchWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 3
    }
  }, __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }
  }, __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Research & Case Studies"), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "MDC has completed extensive research over the past 10 years. Our findings have been linked to the strength of a firms operational management, and can be used to improve capabilities across client intelligence, trading strategies, and business productivity.")), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Data Management Compliance: The Right to Audit",
    description: "THE RIGHT TO AUDIT is a common phrase used in most every Data Vendor or Exchange Agreement (Data Provider Agreements). It is neither new, misunderstood, nor misrepresented. Yet this term has wreaked havoc of late, as it exposes the three modern day plagues causing considerable distress amongst financial...",
    onClick: () => onClick('rightToAudit'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  })), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "The Value of Market Data Administration: Transparency, Accountability & Governance",
    description: "AS FINANCIAL FIRMS GRAPPLE with increasing demands for market data, dealing with the number and complexity of market data licenses and subscriptions can be overwhelming. The volume and variety challenges their ability to effectively manage costs, control user-access, monitor usage, and produce ...",
    onClick: () => onClick('accountabilityAndGovernance'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  })), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "MDC Forecasts 10-13% Increase in Data Spend",
    description: "WITHOUT ANY CHANGE to consumption, service mix, or even annual price increases, Canadian-based financial services firms can expect a +10% price increase in their Market and Reference Data spend for 2014. To understand why, firms need only look to the fall of the CAD$ relative to the US$ for the change that will impact their general ledgers...",
    onClick: () => onClick('dataSpend'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }))), __jsx(_components_animated_footer_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: "View all of our research",
    href: "/research",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Research);

/***/ }),

/***/ "./sections/home-section/services/Services.styled.js":
/*!***********************************************************!*\
  !*** ./sections/home-section/services/Services.styled.js ***!
  \***********************************************************/
/*! exports provided: ServicesWrapper, HeaderWrapper, HeaderTitle, HeaderDescription, ContentWrapper, CardWrapper, CardImage, CardContent, CardTitle, CardDescription, FooterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWrapper", function() { return ServicesWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDescription", function() { return HeaderDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterText", function() { return FooterText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ServicesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__ServicesWrapper",
  componentId: "xea5xp-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:83px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 160px;
  `);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__HeaderWrapper",
  componentId: "xea5xp-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:43px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 49px;
    max-width: 780px;
  `);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Servicesstyled__HeaderTitle",
  componentId: "xea5xp-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 20px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    font-size: 36px;
    line-height: 48px;
  `);
const HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Servicesstyled__HeaderDescription",
  componentId: "xea5xp-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    font-size: 24px;
    line-height: 30px;
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__ContentWrapper",
  componentId: "xea5xp-4"
})(["display:flex;flex-direction:column;margin-bottom:0;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 16px;
  `);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__CardWrapper",
  componentId: "xea5xp-5"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:26px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    flex-direction: row;
    align-items: flex-start;
    width: 48%;
    margin-bottom: 64px;
  `);
const CardImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Servicesstyled__CardImage",
  componentId: "xea5xp-6"
})(["margin-top:6px;margin-bottom:20px;width:100px;height:100px;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
	width: 80px;
	height: 80px;
    margin-right: 24px;
    margin-bottom: 0;
  `, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
	width: 120px;
	height: 120px;
  `);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__CardContent",
  componentId: "xea5xp-7"
})(["display:flex;flex-direction:column;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 380px;
  `);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Servicesstyled__CardTitle",
  componentId: "xea5xp-8"
})(["font-family:", ";font-size:18px;line-height:24px;color:", ";margin-bottom:7px;text-align:center;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    text-align: left;
  `);
const CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Servicesstyled__CardDescription",
  componentId: "xea5xp-9"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;margin-bottom:40px;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin-bottom: 0;
	`);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Servicesstyled__FooterText",
  componentId: "xea5xp-10"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}", ""], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-top: -98px;
  `);

/***/ }),

/***/ "./sections/home-section/services/index.js":
/*!*************************************************!*\
  !*** ./sections/home-section/services/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _Services_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.styled */ "./sections/home-section/services/Services.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/services/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Services = () => {
  return __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["ServicesWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["HeaderWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "How our services add insight to your business"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["HeaderDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, "Taking Benchmarking to an entirely different level, our marketing data services offers you exceptional insight into data being consumed by the capital markets and wealth industry. With our current solutions, you gain the insights to take your strategy to the next level.")), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/managed-services.png",
    srcSet: "/static/images/managed-services@1x.png 1x, /static/images/managed-services@2x.png 2x, /static/images/managed-services@3x.png 3x",
    width: "177",
    height: "177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Trading technology managed services and products"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Our clients are critical about providing the right data to their stakeholders. That's why our proprietary technology and expertise is pivotal in reporting how data is accessed and replicated across business applications allowing us to accurately and rapidly assess and predict where firms can optimize and right size their data needs."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/measure-compare.png",
    srcSet: "/static/images/measure-compare@1x.png 1x, /static/images/measure-compare@2x.png 2x, /static/images/measure-compare@3x.png 3x",
    width: "177",
    height: "177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, "Measure and compare your expense management capabilities"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "We have done extensive research over the past 10 years through our qualitative and quantitative analytics. As a result, we've developed an approach to compare individual company data to our proprietary industry benchmark. Our findings have been linked to the strength of a firms operational management and its short and long term investment strategy."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/match-demand.png",
    srcSet: "/static/images/match-demand@1x.png 1x, /static/images/match-demand@2x.png 2x, /static/images/match-demand@3x.png 3x",
    width: "177",
    height: "177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, "Match your strategy to your business needs"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, "With expert knowledge of both your industry and your customer\u2019s needs, you can keep your data consumption activities appropriate while optimizing your commercial obligations."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/benchmark.png",
    srcSet: "/static/images/benchmark@1x.png 1x, /static/images/benchmark@2x.png 2x, /static/images/benchmark@3x.png 3x",
    width: "177",
    height: "177",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, "Capital market expense management benchmarking"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, "Our benchmark adds exponential value through its categorization of products and services: technology, investments, productivity, operations, human resource strategies, and a host of other business functions. It\u2019s a peer group assessment of our client\u2019s 160 data activities against a set of best practices. Our benchmark has inspired discussions that explore qualitative measures \u2013 enhancing performance against benchmarks.")))), __jsx(_components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: "Get in touch to learn more",
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./sections/home-section/why-mdc/WhyMdc.styled.js":
/*!********************************************************!*\
  !*** ./sections/home-section/why-mdc/WhyMdc.styled.js ***!
  \********************************************************/
/*! exports provided: WhyMdcWrapper, HeadingWrapper, HeadingTitle, HeadingDescription, Content, CardWrapper, CardTitleWrapper, CardTitleIcon, CardTitle, CardDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyMdcWrapper", function() { return WhyMdcWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingWrapper", function() { return HeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingTitle", function() { return HeadingTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingDescription", function() { return HeadingDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleWrapper", function() { return CardTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleIcon", function() { return CardTitleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ICON_MARGIN = '35px';
const WhyMdcWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__WhyMdcWrapper",
  componentId: "sc-18f360v-0"
})(["display:flex;flex-direction:column;align-self:center flex:1;margin-bottom:60px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 100px;
  `);
const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__HeadingWrapper",
  componentId: "sc-18f360v-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:40px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`     
		max-width: 780px;
  `);
const HeadingTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WhyMdcstyled__HeadingTitle",
  componentId: "sc-18f360v-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 14px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 17px 0;
  `);
const HeadingDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WhyMdcstyled__HeadingDescription",
  componentId: "sc-18f360v-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 24px;
		line-height: 30px;
`);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__Content",
  componentId: "sc-18f360v-4"
})(["display:flex;flex-direction:column;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__CardWrapper",
  componentId: "sc-18f360v-5"
})(["display:flex;flex-direction:column;margin-bottom:27px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    width: 48%;
  `);
const CardTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__CardTitleWrapper",
  componentId: "sc-18f360v-6"
})(["display:flex;flex-direction:row;"]);
const CardTitleIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "WhyMdcstyled__CardTitleIcon",
  componentId: "sc-18f360v-7"
})(["height:27px;width:27px;margin-right:8px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-right: 16px;
  `);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WhyMdcstyled__CardTitle",
  componentId: "sc-18f360v-8"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 10px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 18px;
    line-height: 24px;
  `);
const CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WhyMdcstyled__CardDescription",
  componentId: "sc-18f360v-9"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 0 ", ";", ""], props => props.theme.fonts.financier, ICON_MARGIN, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 16px;
    line-height: 22px;
    max-width: 450px;
  `);

/***/ }),

/***/ "./sections/home-section/why-mdc/index.js":
/*!************************************************!*\
  !*** ./sections/home-section/why-mdc/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhyMdc.styled */ "./sections/home-section/why-mdc/WhyMdc.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/why-mdc/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const descriptionData = [{
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

const Card = props => {
  const {
    title,
    description
  } = props;
  return __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 3
    }
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitleWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitleIcon"], {
    src: "/static/images/checkmark.png",
    srcSet: "/static/images/checkmark@1x.png 1x, /static/images/checkmark@2x.png 2x, /static/images/checkmark@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, title)), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }, description));
};

const WhyMdc = () => {
  const renderDescription = () => {
    return descriptionData.map(data => {
      const {
        title,
        description
      } = data;
      return __jsx(Card, {
        key: title,
        title: title,
        description: description,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      });
    });
  };

  return __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["WhyMdcWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }
  }, "Why Market Data Company?"), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, "From inception, our focus has been on the complexities of market data and the critical third-party relationships built through data providers within the Capital Markets and Wealth Management industries.")), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }
  }, renderDescription()));
};

/* harmony default export */ __webpack_exports__["default"] = (WhyMdc);

/***/ }),

/***/ "./sections/home-section/worked-with/WorkedWith.styled.js":
/*!****************************************************************!*\
  !*** ./sections/home-section/worked-with/WorkedWith.styled.js ***!
  \****************************************************************/
/*! exports provided: WorkedWithWrapper, Title, Description, CardWrapper, LogoContentWrapper, LogoWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkedWithWrapper", function() { return WorkedWithWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContentWrapper", function() { return LogoContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const WorkedWithWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__WorkedWithWrapper",
  componentId: "sc-10nv40i-0"
})(["display:flex;flex-direction:column;flex:1;align-items:flex-start;margin-bottom:120px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WorkedWithstyled__Title",
  componentId: "sc-10nv40i-1"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 20px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		font-size: 36px;
		line-height: 48px;
	`);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WorkedWithstyled__Description",
  componentId: "sc-10nv40i-2"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0 0 46px 0;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 24px;
		line-height: 30px;
		max-width: 780px;
	`);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__CardWrapper",
  componentId: "sc-10nv40i-3"
})(["margin-bottom:47px;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);"]);
const LogoContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__LogoContentWrapper",
  componentId: "sc-10nv40i-4"
})(["display:flex;flex:1;align-items:center;justify-content:space-between;flex-wrap:wrap;width:100%;"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__LogoWrapper",
  componentId: "sc-10nv40i-5"
})(["width:48%;margin-bottom:40px;transform:scale(0.75);display:flex;justify-content:center;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		margin-bottom: 0; 
		transform: scale(0.6);
		width: 25%;
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		transform: scale(0.8);
	`);

/***/ }),

/***/ "./sections/home-section/worked-with/index.js":
/*!****************************************************!*\
  !*** ./sections/home-section/worked-with/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_company_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/company-card */ "./components/company-card/index.js");
/* harmony import */ var _WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkedWith.styled */ "./sections/home-section/worked-with/WorkedWith.styled.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/worked-with/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const COMPANY_DATA = [{
  title: 'Canada Pension Plan Investment Board',
  description: `“MDC identified and realized vendor cost savings of 12% of our spend, and then developed a target state organization with capabilities to effectively manage market data products, consumption, costs and vendors”`,
  role: 'Marc Odho – Head of Data Management',
  company: 'PSP',
  imageUrl: 'cppib-carousel'
}, {
  title: 'PSP Investissements',
  description: `“The team at Market Data Company is great to work with. Each consultant has their own strengths and weaknesses, and are great at what they do. In my book, I highly recommend the entire team at MDC.”`,
  role: 'Alex DiCristofano, Director of Market Data',
  company: 'Aviva',
  imageUrl: 'psp-carousel'
}, {
  title: 'Aviva Investors',
  description: `“Robert and his team brought the right expertise to the job, making the transitional program easier to manage. MDC’s approach to market data supported our Global operations and provided a clear line of sight to our vendor spend.”`,
  role: 'Kelly McManis, Head of Operations',
  company: 'Swiss Re',
  imageUrl: 'aviva-carousel'
}, {
  title: 'Swiss Re',
  description: `“MDC’s product Kiaro’s overspend report clearly articulated where Bloomberg data was being replicated within our technology envirorment. As a result we closed down several jobs that lead to $450,000 in cost savings.”`,
  role: 'Eric Kemeny, Vice President, Group Asset Management',
  company: 'CPPIB',
  imageUrl: 'swiss-re-carousel'
}];

const WorkedWith = () => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let animating = false;

  const onExiting = () => {
    animating = true;
  };

  const onExited = () => {
    animating = false;
  };

  const next = () => {
    if (animating) {
      return;
    }

    const nextIndex = activeIndex === COMPANY_DATA.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItems = COMPANY_DATA.map(item => {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      onExiting: onExiting,
      onExited: onExited,
      key: item.company,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 4
      }
    }, __jsx(_components_company_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: item.title,
      description: item.description,
      role: item.role,
      company: item.company,
      imageUrl: item.imageUrl,
      onNext: next,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }
    }));
  });
  return __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["WorkedWithWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 3
    }
  }, __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }
  }, "Who we\u2019ve worked with"), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }
  }, "Our consultants are industry experts in market and reference data products, as well as investment management solutions. We deliver results that make a difference."), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: () => {},
    interval: false,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, carouselItems)), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }
  }, __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/images/cppib.png",
    srcSet: "/static/images/cppib@1x.png 1x, /static/images/cppib@2x.png 2x, /static/images/cppib@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 6
    }
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/images/psp.png",
    srcSet: "/static/images/psp@1x.png 1x, /static/images/psp@2x.png 2x, /static/images/psp@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/images/aviva.png",
    srcSet: "/static/images/aviva@1x.png 1x, /static/images/aviva@2x.png 2x, /static/images/aviva@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: "/static/images/swiss-re.png",
    srcSet: "/static/images/swiss-re@1x.png 1x, /static/images/swiss-re@2x.png 2x, /static/images/swiss-re@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 6
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkedWith);

/***/ }),

/***/ "./services/apiEndpoints.js":
/*!**********************************!*\
  !*** ./services/apiEndpoints.js ***!
  \**********************************/
/*! exports provided: EMAIL_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ENDPOINT", function() { return EMAIL_ENDPOINT; });
const EMAIL_ENDPOINT = 'https://market-data-company-server.herokuapp.com/email';

/***/ }),

/***/ "./services/apiService.js":
/*!********************************!*\
  !*** ./services/apiService.js ***!
  \********************************/
/*! exports provided: sendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return sendEmail; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apiEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiEndpoints */ "./services/apiEndpoints.js");


const sendEmail = async payload => {
  try {
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_apiEndpoints__WEBPACK_IMPORTED_MODULE_1__["EMAIL_ENDPOINT"], {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    throw err;
  }
};

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

/***/ "./utils/pdfMapper.js":
/*!****************************!*\
  !*** ./utils/pdfMapper.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Research
const rightToAuditPdfPath = '/static/pdfs/Data-Managment-Compliance-why-firms-are-Audited-vFinal.pdf';
const identityCrisisPdfPath = '/static/pdfs/Market-Data-Management-Identity-Crisis-value-prop.pdf';
const maturingArtPdfPath = '/static/pdfs/Market-Data-Management-Maturity-Curve-Final.pdf';
const accountabilityAndGovernancePdfPath = '/static/pdfs/Value-of-Market-Data-Admin-Exec-Summary-v27Jun16.pdf';
const dataSpendPdfPath = '/static/pdfs/FX-Impact-MD-spend-2.pdf'; // Case Studies

const caseStudiesPptPath = '/static/pdfs/MDC-case-studies.pptx'; // White Papers

const riskFactorsPdfPath = '/static/pdfs/Uncovering_FRTB_Risk_Factors.pdf';
const riskFrameworkPdfPath = '/static/pdfs/frtb-whitepaper-v2-081519.pdf'; // Surveys

const surveyInsightsPdfPath = '/static/pdfs/Market-Data-Survey-Insights-2017.pdf';
const pdfMapper = {
  rightToAudit: rightToAuditPdfPath,
  identityCrisis: identityCrisisPdfPath,
  maturingArt: maturingArtPdfPath,
  accountabilityAndGovernance: accountabilityAndGovernancePdfPath,
  dataSpend: dataSpendPdfPath,
  riskFactors: riskFactorsPdfPath,
  caseStudies: caseStudiesPptPath,
  surveyInsights: surveyInsightsPdfPath,
  riskFramework: riskFrameworkPdfPath
};
/* harmony default export */ __webpack_exports__["default"] = (pdfMapper);

/***/ }),

/***/ "./utils/validator.js":
/*!****************************!*\
  !*** ./utils/validator.js ***!
  \****************************/
/*! exports provided: validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-css-transition-group":
/*!****************************************************!*\
  !*** external "react-addons-css-transition-group" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-social-icons":
/*!*************************************!*\
  !*** external "react-social-icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-components-breakpoint":
/*!***********************************************!*\
  !*** external "styled-components-breakpoint" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components-breakpoint");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL0FuaW1hdGVkQ2FyZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5pbWF0ZWQtZm9vdGVyLWxpbmsvQW5pbWF0ZWRGb290ZXJMaW5rLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmlvLWNhcmQvQmlvQ2FyZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iaW8tY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tcGFueS1jYXJkL0NvbXBhbnlDYXJkLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBhbnktY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QtZm9vdGVyL0NvbnRhY3RGb290ZXIuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC1mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0LWZvcm0vQ29udGFjdEZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oYW1idXJnZXItbWVudS1jb250ZW50L0hhbWJ1cmdlck1lbnVDb250ZW50LnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hhbWJ1cmdlci1tZW51LWNvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L0lucHV0LnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFiZWwtd2l0aC1hcnJvdy9MYWJlbFdpdGhBcnJvdy5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYWJlbC13aXRoLWFycm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saXN0LWl0ZW0vTGlzdEl0ZW0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXNlYXJjaC1wZGYtZm9ybS9SZXNlYXJjaFBkZkZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzZWFyY2gtcGRmLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb2NpYWwtaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0LWRvd25sb2FkLWZvcm0vU3RhcnREb3dubG9hZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGFydC1kb3dubG9hZC1mb3JtL1N0YXJ0RG93bmxvYWRGb3JtLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0LWRvd25sb2FkLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWItYmFyL1RhYkJhci5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWItYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dGZpZWxkL1RleHRmaWVsZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0ZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGFuay15b3UvVGhhbmtZb3Uuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGhhbmsteW91L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGlja2VyLXRhcGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9sYW5kaW5nL0xhbmRpbmcuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9sYW5kaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9sZWFkZXItbWFya2V0LWRhdGEvTGVhZGVyTWFya2V0RGF0YS5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xlYWRlci1tYXJrZXQtZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vcmVzZWFyY2gvUmVzZWFyY2guc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9yZXNlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vc2VydmljZXMvU2VydmljZXMuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vd2h5LW1kYy9XaHlNZGMuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi93aHktbWRjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi93b3JrZWQtd2l0aC9Xb3JrZWRXaXRoLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vd29ya2VkLXdpdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpRW5kcG9pbnRzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGRmTWFwcGVyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNvY2lhbC1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnRcIiJdLCJuYW1lcyI6WyJNRENfUFVSUExFIiwiREVFUF9JTkRJR08iLCJNSURfUFVSUExFIiwiTElHSFRfUFVSUExFIiwiV0hJVEUiLCJCTEFDSyIsIkxJR0hUX0dSRVkiLCJNRENfUFVSUExFX0hPVkVSIiwiU0JfR1JFWSIsIlBJTksiLCJSRUQiLCJCQUJZX0JMVUUiLCJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwibm90Y2hDb2xvciIsIlRvcE5vdGNoIiwiQ29udGVudFdyYXBwZXIiLCJUaXRsZSIsImgxIiwidGhlbWUiLCJmb250cyIsImdyYXBoaWtCb2xkIiwiY29sb3JzIiwid2hpdGUiLCJEZXNjcmlwdGlvbiIsInAiLCJmaW5hbmNpZXIiLCJGb290ZXIiLCJzcGFuIiwiZ3JhcGhpayIsImxpZ2h0R3JleSIsIkFuaW1hdGVkQ2FyZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmb290ZXIiLCJvbkNsaWNrIiwiZGVmYXVsdFByb3BzIiwiQ29sb3JzIiwiQW5pbWF0ZWRGb290ZXJMaW5rV3JhcHBlciIsIk1lc3NhZ2UiLCJoNCIsIm1kY1B1cnBsZSIsIkFuaW1hdGVkRm9vdGVyTGluayIsIm1lc3NhZ2UiLCJocmVmIiwiQ29udGFpbmVyIiwiYnJlYWtwb2ludCIsIkJpb0NhcmRXcmFwcGVyIiwiSW1hZ2VXcmFwcGVyIiwiaW1nIiwiTmFtZSIsIlJvbGUiLCJGb290ZXJXcmFwcGVyIiwiSG92ZXJlZEJpb0NhcmRXcmFwcGVyIiwiSG92ZXJlZENvbnRlbnQiLCJIb3ZlcmVkTmFtZSIsIkhvdmVyZWRSb2xlIiwiSG92ZXJlZERlc2NyaXB0aW9uIiwiQmlvQ2FyZCIsIm5hbWUiLCJyb2xlIiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJ1c2VTdGF0ZSIsImdldEJhY2tncm91bmRDb2xvciIsImlzRGVmYXVsdCIsIkJ1dHRvbldyYXBwZXIiLCJidXR0b24iLCJCdXR0b25UZXh0IiwiYmxhY2siLCJCdXR0b24iLCJidG5UZXh0IiwiaXNEaXNhYmxlZCIsImlzU2Vjb25kYXJ5IiwiQ29tcGFueUNhcmRXcmFwcGVyIiwiU3R5bGVkSW1hZ2UiLCJEZXNjcmlwdGlvbldyYXBwZXIiLCJEZXNjcmlwdGlvblRleHQiLCJSb2xlVGV4dCIsIk5leHRUYWciLCJhIiwiQ29tcGFueUNhcmQiLCJjb21wYW55Iiwib25OZXh0IiwiaW1hZ2VVcmwiLCJDb250YWN0Rm9vdGVyV3JhcHBlciIsIkNvbnRlbnQiLCJDb250YWN0Rm9vdGVyIiwiUm91dGVyIiwicHVzaCIsIkZvcm1XcmFwcGVyIiwiSW5wdXRXcmFwcGVyIiwiQ29udGFjdEZvcm0iLCJvbkNoYW5nZSIsImZpcnN0TmFtZSIsImVtYWlsIiwib25TdWJtaXQiLCJpc0Vycm9yIiwiRm9vdGVyTG9nb1dyYXBwZXIiLCJUZXh0V3JhcHBlciIsIk1hcmtldERhdGFUZXh0IiwiRXhwbG9yZUFuZFNvY2lhbFdyYXBwZXIiLCJFeHBsb3JlV3JhcHBlciIsIkV4cGxvcmVUaXRsZSIsIkV4cGxvcmVJdGVtIiwiU29jaWFsV3JhcHBlciIsIlNvY2lhbENvbnRlbnQiLCJTb2NpYWxUaXRsZSIsIkhhbWJ1cmdlck1lbnVDb250ZW50V3JhcHBlciIsIkhlYWRlciIsIkhhbWJ1cmdlck1lbnVDb250ZW50Iiwib25DbG9zZU1vZGFsIiwiTGFiZWxXcmFwcGVyIiwiTGFiZWwiLCJFcnJvclN0YXIiLCJGaWVsZFdyYXBwZXIiLCJyZWQiLCJGaWVsZCIsImlucHV0IiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJpc1JlcXVpcmVkIiwiTGFiZWxXaXRoQXJyb3dXcmFwcGVyIiwiaDUiLCJMYWJlbFdpdGhBcnJvdyIsIldyYXBwZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkxpc3RJdGVtV3JhcHBlciIsIkxpc3RJdGVtIiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNRENNb2RhbCIsIm1vZGFsVmlzaWJsZSIsIm9uUmVxdWVzdENsb3NlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJzZXRBcHBFbGVtZW50IiwiUmVzZWFyY2hQZGZGb3JtV3JhcHBlciIsInNiR3JleSIsIkNsb3NlSWNvbiIsImgzIiwiU3R5bGVkQW5jaG9yIiwiUmVzZWFyY2hQZGZGb3JtIiwicGRmRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlNvY2lhbEljb24iLCJ1cmwiLCJoZWlnaHQiLCJ3aWR0aCIsIlN0YXJ0RG93bmxvYWRGb3JtIiwiU3RhcnREb3dubG9hZEZvcm1XcmFwcGVyIiwiaDIiLCJNb2JpbGVUYWJXcmFwcGVyIiwiVGFiV3JhcHBlciIsIlRhYiIsImJhclRoZW1lIiwibGlua0RhdGEiLCJ0YWJOYW1lIiwiVGFiQmFyIiwic2V0TW9kYWxWaXNpYmxlIiwicmVuZGVyTGlua3MiLCJtYXAiLCJkYXRhIiwiV2ViVGFiQmFyIiwiTW9iaWxlVGFiQmFyIiwiVGV4dEZpZWxkV3JhcHBlciIsInRleHRhcmVhIiwiVGV4dGZpZWxkIiwiVGhhbmtZb3VXcmFwcGVyIiwiVGhhbmtZb3UiLCJmb290ZXJNZXNzYWdlIiwiVGlja2VyVGFwZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiX3JlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImlubmVySFRNTCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsImVtYWlsU2VudCIsInNldEVtYWlsU2VudCIsInNldFBkZkZvcm0iLCJmb3JtIiwic2V0Rm9ybVZhbHVlcyIsImRpc3BhdGNoIiwidXNlU3RvcmUiLCJzYXZlVXNlciIsInVzZUNhbGxiYWNrIiwiZm9ybVZhbHVlcyIsInR5cGUiLCJVU0VSX1NJR05FRF9VUCIsInBheWxvYWQiLCJzZW5kRW1haWwiLCJ1cGRhdGVGaWVsZCIsIm9uTW9kYWxDbG9zZSIsIm9wZW5Nb2RhbCIsInJlc2VhcmNoRm9ybSIsInBkZk1hcHBlciIsInZhbGlkYXRlRW1haWwiLCJ1c2VyIiwiTGFuZGluZ1dyYXBwZXIiLCJMYW5kaW5nIiwic2V0Q3VycmVudCIsImxhbmRpbmdHaWZVcmxzIiwiZ2lmUmVmcmVzaFJhdGUiLCJuZXh0IiwibGVuZ3RoIiwiaWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiYmFja2dyb3VuZEltYWdlIiwiTGVhZGVyTWFya2V0RGF0YVdyYXBwZXIiLCJJbmZvV3JhcHBlciIsIkluZm9UZXh0IiwiVmlkZW9XcmFwcGVyIiwiRmFjdHNXcmFwcGVyIiwiUHJvamVjdHNDb21wbGV0ZWRXcmFwcGVyIiwiTnVtYmVyVGV4dCIsIkZhY3RzVGV4dCIsIkZvb3RlclRleHQiLCJMZWFkZXJNYXJrZXREYXRhIiwiUmVzZWFyY2hXcmFwcGVyIiwiSGVhZGVyV3JhcHBlciIsIkhlYWRlclRpdGxlIiwiSGVhZGVyRGVzY3JpcHRpb24iLCJDYXJkQ29udGVudFdyYXBwZXIiLCJSZXNlYXJjaCIsIlNlcnZpY2VzV3JhcHBlciIsIkNhcmRJbWFnZSIsIkNhcmRDb250ZW50IiwiQ2FyZFRpdGxlIiwiQ2FyZERlc2NyaXB0aW9uIiwiU2VydmljZXMiLCJJQ09OX01BUkdJTiIsIldoeU1kY1dyYXBwZXIiLCJIZWFkaW5nV3JhcHBlciIsIkhlYWRpbmdUaXRsZSIsIkhlYWRpbmdEZXNjcmlwdGlvbiIsIkNhcmRUaXRsZVdyYXBwZXIiLCJDYXJkVGl0bGVJY29uIiwiZGVzY3JpcHRpb25EYXRhIiwiQ2FyZCIsIldoeU1kYyIsInJlbmRlckRlc2NyaXB0aW9uIiwiV29ya2VkV2l0aFdyYXBwZXIiLCJMb2dvQ29udGVudFdyYXBwZXIiLCJMb2dvV3JhcHBlciIsIkNPTVBBTllfREFUQSIsIldvcmtlZFdpdGgiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW5nIiwib25FeGl0aW5nIiwib25FeGl0ZWQiLCJuZXh0SW5kZXgiLCJjYXJvdXNlbEl0ZW1zIiwiRU1BSUxfRU5EUE9JTlQiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJyZXNwb25zZURhdGEiLCJqc29uIiwiaW5pdGlhbFN0YXRlIiwiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZXJSZWR1Y2VyIiwiYWN0aW9uIiwiU3RvcmVQcm92aWRlciIsInVzZVJlZHVjZXIiLCJzdG9yZSIsInVzZUNvbnRleHQiLCJyaWdodFRvQXVkaXRQZGZQYXRoIiwiaWRlbnRpdHlDcmlzaXNQZGZQYXRoIiwibWF0dXJpbmdBcnRQZGZQYXRoIiwiYWNjb3VudGFiaWxpdHlBbmRHb3Zlcm5hbmNlUGRmUGF0aCIsImRhdGFTcGVuZFBkZlBhdGgiLCJjYXNlU3R1ZGllc1BwdFBhdGgiLCJyaXNrRmFjdG9yc1BkZlBhdGgiLCJyaXNrRnJhbWV3b3JrUGRmUGF0aCIsInN1cnZleUluc2lnaHRzUGRmUGF0aCIsInJpZ2h0VG9BdWRpdCIsImlkZW50aXR5Q3Jpc2lzIiwibWF0dXJpbmdBcnQiLCJhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2UiLCJkYXRhU3BlbmQiLCJyaXNrRmFjdG9ycyIsImNhc2VTdHVkaWVzIiwic3VydmV5SW5zaWdodHMiLCJyaXNrRnJhbWV3b3JrIiwidGVzdCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNB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eklPLEVBNklQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0lPLEVBaUpQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BakpPLEVBcUpQO0FBQ0ksdUJBQWUsYUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BckpPLEVBeUpQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BekpPLEVBNkpQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0pPLEVBaUtQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BaktPLEVBcUtQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BcktPLEVBeUtQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BektPLEVBNktQO0FBQ0ksdUJBQWUsVUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0tPLEVBaUxQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BakxPLEVBcUxQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BckxPLEVBeUxQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BekxPLEVBNkxQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0xPLEVBaU1QO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9Bak1PLEVBcU1QO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9Bck1PLEVBeU1QO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9Bek1PLEVBNk1QO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BN01PLEVBaU5QO0FBQ0ksdUJBQWUsYUFEbkI7QUFFSSxtQkFBVztBQUZmLE9Bak5PLEVBcU5QO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9Bck5PLEVBeU5QO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9B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QyxNQUFDLDBEQUFEO0FBQ0MsT0FBRyxFQUFDLG9DQURMO0FBRUMsVUFBTSxFQUFDLDhIQUZSO0FBSUMsU0FBSyxFQUFDLEtBSlA7QUFLQyxVQUFNLEVBQUMsS0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBREQsRUFFQyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc1dBRkQsQ0FSRCxDQW5CRCxFQXVDQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDBEQUFEO0FBQ0MsT0FBRyxFQUFDLGlDQURMO0FBRUMsVUFBTSxFQUFDLHFIQUZSO0FBSUMsU0FBSyxFQUFDLEtBSlA7QUFLQyxVQUFNLEVBQUMsS0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBREQsRUFJQyxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkxBSkQsQ0FSRCxDQXZDRCxFQTBEQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDBEQUFEO0FBQ0MsT0FBRyxFQUFDLDhCQURMO0FBRUMsVUFBTSxFQUFDLDRHQUZSO0FBSUMsU0FBSyxFQUFDLEtBSlA7QUFLQyxVQUFNLEVBQUMsS0FMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFRQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FB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QUlqQlUsNkJBQTJCLEVBQUVULGtDQUpaO0FBS2pCVSxXQUFTLEVBQUVULGdCQUxNO0FBTWpCVSxhQUFXLEVBQUVSLGtCQU5JO0FBT2pCUyxhQUFXLEVBQUVWLGtCQVBJO0FBUWpCVyxnQkFBYyxFQUFFUixxQkFSQztBQVNqQlMsZUFBYSxFQUFFVjtBQVRFLENBQWxCO0FBWWVuRix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFPLE1BQU1DLGFBQWEsR0FBSXhhLEtBQUQsSUFBVztBQUN2QyxNQUFJOFcsRUFBRSxHQUFHLHlKQUFUO0FBQ0EsU0FBT0EsRUFBRSxDQUFDdUosSUFBSCxDQUFRN0wsTUFBTSxDQUFDeFUsS0FBRCxDQUFOLENBQWNzZ0IsV0FBZCxFQUFSLENBQVA7QUFDQSxDQUhNLEM7Ozs7Ozs7Ozs7O0FDQVAsK0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJleHBvcnQgY29uc3QgTURDX1BVUlBMRSA9ICcjN0QyN0ZGJ1xuZXhwb3J0IGNvbnN0IERFRVBfSU5ESUdPID0gJyM0MzAwODYnXG5leHBvcnQgY29uc3QgTUlEX1BVUlBMRSA9ICcjOTg2Q0ZGJ1xuZXhwb3J0IGNvbnN0IExJR0hUX1BVUlBMRSA9ICcjQzVCMkZGJ1xuZXhwb3J0IGNvbnN0IFdISVRFID0gJyNGRkZGRkYnXG5leHBvcnQgY29uc3QgQkxBQ0sgPSAnIzAwMDAwMCdcbmV4cG9ydCBjb25zdCBMSUdIVF9HUkVZID0gJyM5Njk2OTYnXG5cbmV4cG9ydCBjb25zdCBNRENfUFVSUExFX0hPVkVSID0gJyM3MTIxRUInXG5leHBvcnQgY29uc3QgU0JfR1JFWSA9ICcjRjVGNUY1J1xuZXhwb3J0IGNvbnN0IFBJTksgPSAnI0VEMjdGRidcbmV4cG9ydCBjb25zdCBSRUQgPSAnI0ZGMjc1MidcbmV4cG9ydCBjb25zdCBCQUJZX0JMVUUgPSAnIzNCODRGRidcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHdpZHRoOiAxMDAlO1xuXHRtaW4taGVpZ2h0OiAzNDBweDtcblx0bWF4LXdpZHRoOiAzNjBweDtcblx0ZmxleDogMTtcblx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMjAwJTtcblx0YmFja2dyb3VuZC1pbWFnZTogJHsocHJvcHMpID0+IHtcblx0XHRyZXR1cm4gYGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlIDUwJSwgJHtwcm9wcy5ub3RjaENvbG9yfSA1MCUpYFxuXHR9fTtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMTVzIGVhc2Utb3V0O1xuXHQtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1vdXQ7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1vdXQ7XG5cdCY6aG92ZXIge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0xMDAlO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBUb3BOb3RjaCA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDE2cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5ub3RjaENvbG9yfTtcblx0bWFyZ2luLWJvdHRvbTogMjNweDtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMCAyMHB4IDE3cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMCAwIDIwcHggMDtcblx0YWxpZ24tc2VsZjogZmxleC1zdGFydDtcblx0JHtDYXJkV3JhcHBlcn06aG92ZXIgJiB7XG5cdFx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2U7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwO1xuXHQke0NhcmRXcmFwcGVyfTpob3ZlciAmIHtcblx0XHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cdG1hcmdpbjogMCAyMHB4IDE2cHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0JHtDYXJkV3JhcHBlcn06aG92ZXIgJiB7XG5cdFx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIENvbG9ycyBmcm9tICcuLi8uLi9hc3NldHMvY29sb3JzJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0FuaW1hdGVkQ2FyZC5zdHlsZWQnXG5cbmNvbnN0IEFuaW1hdGVkQ2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZm9vdGVyLCBub3RjaENvbG9yLCBvbkNsaWNrIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkNhcmRXcmFwcGVyIG5vdGNoQ29sb3I9e25vdGNoQ29sb3J9IG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PFMuVG9wTm90Y2ggbm90Y2hDb2xvcj17bm90Y2hDb2xvcn0gLz5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5UaXRsZT57dGl0bGV9PC9TLlRpdGxlPlxuXHRcdFx0XHQ8Uy5EZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PFMuRm9vdGVyPntmb290ZXJ9PC9TLkZvb3Rlcj5cblx0XHQ8L1MuQ2FyZFdyYXBwZXI+XG5cdClcbn1cblxuQW5pbWF0ZWRDYXJkLmRlZmF1bHRQcm9wcyA9IHtcblx0Zm9vdGVyOiAnUmVhZCBtb3JlJyxcblx0bm90Y2hDb2xvcjogQ29sb3JzLk1EQ19QVVJQTEVcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRDYXJkXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQW5pbWF0ZWRGb290ZXJMaW5rV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbmBcblxuZXhwb3J0IGNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuaDRgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5cdG1hcmdpbjogMCA4cHggMCAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXHQmOmhvdmVyIHtcblx0XHRtYXJnaW46IDAgMTZweCAwIDA7XG5cdFx0b3BhY2l0eTogMC42NTtcblx0fVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0FuaW1hdGVkRm9vdGVyTGluay5zdHlsZWQnXG5cbmNvbnN0IEFuaW1hdGVkRm9vdGVyTGluayA9ICh7IG1lc3NhZ2UsIGhyZWYsIG9uQ2xpY2sgfSkgPT4gKFxuXHQ8TGluayBocmVmPXtocmVmfT5cblx0XHQ8Uy5BbmltYXRlZEZvb3RlckxpbmtXcmFwcGVyIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PFMuTWVzc2FnZT57bWVzc2FnZX08L1MuTWVzc2FnZT5cblx0XHRcdDxpbWdcblx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvYXJyb3cucG5nXCJcblx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYXJyb3dAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9hcnJvd0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9hcnJvd0AzeC5wbmcgM3hcIlxuXHRcdFx0Lz5cblx0XHQ8L1MuQW5pbWF0ZWRGb290ZXJMaW5rV3JhcHBlcj5cblx0PC9MaW5rPlxuKVxuXG5BbmltYXRlZEZvb3RlckxpbmsuZGVmYXVsdFByb3BzID0ge1xuXHRvbkNsaWNrOiAoKSA9PiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZEZvb3RlckxpbmtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0d2lkdGg6IDM0MHB4O1xuXHQmOmhvdmVyIHtcblx0XHRjdXJzb3I6IGhlbHA7XG5cdH1cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgd2lkdGg6IDM4MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDQ0NXB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQmlvQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHR3aWR0aDogMTAwJTtcblx0Ym94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmltZ2Bcblx0bWF4LXdpZHRoOiAzNDBweDtcblx0bWF4LWhlaWdodDogNDAxcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC1oZWlnaHQ6IDMyMHB4O1xuICAgIG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1pbi1oZWlnaHQ6IDEyNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nLWxlZnQ6IDMycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBOYW1lID0gc3R5bGVkLmg0YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAxNnB4IDAgNHB4O1xuYFxuXG5leHBvcnQgY29uc3QgUm9sZSA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDA7XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleDogMTtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRtYXJnaW4tYm90dG9tOiAxN3B4O1xuYFxuXG5leHBvcnQgY29uc3QgSG92ZXJlZEJpb0NhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgJHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LXdpZHRoOiAzODBweDtcbiAgYH1cbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuYFxuXG5leHBvcnQgY29uc3QgSG92ZXJlZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAyNXB4IDMycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBIb3ZlcmVkTmFtZSA9IHN0eWxlZC5oNGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjFweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMCAwIDRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuYFxuXG5leHBvcnQgY29uc3QgSG92ZXJlZFJvbGUgPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwIDAgMTdweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuYFxuXG5leHBvcnQgY29uc3QgSG92ZXJlZERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRtYXJnaW46IDA7XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnXG5pbXBvcnQgQW5pbWF0ZWRGb290ZXJMaW5rIGZyb20gJy4uL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0Jpb0NhcmQuc3R5bGVkJ1xuXG5jb25zdCBCaW9DYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbmFtZSwgcm9sZSwgbWVzc2FnZSB9ID0gcHJvcHNcblx0Y29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0cmV0dXJuIChcblx0XHQ8Uy5Db250YWluZXJcblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gc2V0SG92ZXJlZCh0cnVlKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XG5cdFx0PlxuXHRcdFx0eyFob3ZlcmVkICYmIChcblx0XHRcdFx0PFMuQmlvQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuSW1hZ2VXcmFwcGVyXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9wbGFjZWhvbGRlci1pbWcucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL3BsYWNlaG9sZGVyLWltZ0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3BsYWNlaG9sZGVyLWltZ0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9wbGFjZWhvbGRlci1pbWdAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PFMuTmFtZT57bmFtZX08L1MuTmFtZT5cblx0XHRcdFx0XHRcdDxTLlJvbGU+e3JvbGV9PC9TLlJvbGU+XG5cdFx0XHRcdFx0XHQ8Uy5Gb290ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHQ8QW5pbWF0ZWRGb290ZXJMaW5rIG1lc3NhZ2U9XCJCaW9cIiAvPlxuXHRcdFx0XHRcdFx0PC9TLkZvb3RlcldyYXBwZXI+XG5cdFx0XHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8L1MuQmlvQ2FyZFdyYXBwZXI+XG5cdFx0XHQpfVxuXHRcdFx0e2hvdmVyZWQgJiYgKFxuXHRcdFx0XHQ8Uy5Ib3ZlcmVkQmlvQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuSG92ZXJlZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Uy5Ib3ZlcmVkTmFtZT57bmFtZX08L1MuSG92ZXJlZE5hbWU+XG5cdFx0XHRcdFx0XHQ8Uy5Ib3ZlcmVkUm9sZT57cm9sZX08L1MuSG92ZXJlZFJvbGU+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZSAmJiA8Uy5Ib3ZlcmVkRGVzY3JpcHRpb24+e21lc3NhZ2V9PC9TLkhvdmVyZWREZXNjcmlwdGlvbj59XG5cdFx0XHRcdFx0PC9TLkhvdmVyZWRDb250ZW50PlxuXHRcdFx0XHQ8L1MuSG92ZXJlZEJpb0NhcmRXcmFwcGVyPlxuXHRcdFx0KX1cblx0XHQ8L1MuQ29udGFpbmVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJpb0NhcmRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5jb25zdCBnZXRCYWNrZ3JvdW5kQ29sb3IgPSAocHJvcHMpID0+IHtcblx0aWYgKHByb3BzLmlzRGVmYXVsdCkge1xuXHRcdHJldHVybiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlXG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmJ1dHRvbmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxNjBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gZ2V0QmFja2dyb3VuZENvbG9yKHByb3BzKX07XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcblx0Ym9yZGVyOiBub25lO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBnZXRCYWNrZ3JvdW5kQ29sb3IocHJvcHMpfTtcblx0XHRib3gtc2hhZG93OiAkeyhwcm9wcykgPT4ge1xuXHRcdFx0cmV0dXJuIHByb3BzLmlzRGVmYXVsdFxuXHRcdFx0XHQ/ICcwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpJ1xuXHRcdFx0XHQ6ICcwIDhweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpJ1xuXHRcdH19O1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblx0fVxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uVGV4dCA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMTRweDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PlxuXHRcdHByb3BzLmlzRGVmYXVsdCA/IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZSA6IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgYH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9idXR0b24uc3R5bGVkJ1xuXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBidG5UZXh0LCBpc0RlZmF1bHQsIG9uQ2xpY2ssIGlzRGlzYWJsZWQgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuQnV0dG9uV3JhcHBlclxuXHRcdFx0aXNEZWZhdWx0PXtpc0RlZmF1bHR9XG5cdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdFx0ZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG5cdFx0PlxuXHRcdFx0PFMuQnV0dG9uVGV4dCBpc0RlZmF1bHQ9e2lzRGVmYXVsdH0+e2J0blRleHR9PC9TLkJ1dHRvblRleHQ+XG5cdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdClcbn1cblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcblx0aXNEZWZhdWx0OiB0cnVlLFxuXHRpc1NlY29uZGFyeTogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IENvbXBhbnlDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGJveC1zaGFkb3c6IDAgOHB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGZsZXg6IDE7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bWluLWhlaWdodDogMjg1cHg7XG4gIFx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1pbi1oZWlnaHQ6IDIyMHB4O1xuXHR3aWR0aDogMTAwJTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWluLXdpZHRoOiA0NzZweDtcbiAgXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRvYmplY3QtZml0OiBmaWxsO1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luOiAwIDIwcHg7XG5cdG1pbi1oZWlnaHQ6IDMyMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRtYXJnaW46IDMycHggNiU7XG5cdG1pbi1oZWlnaHQ6IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tYm90dG9tOiAzM3B4O1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDAgMCA2cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAyMXB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcbiAgXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25UZXh0ID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRsaW5lLWhlaWdodDogMjZweDtcblx0bGV0dGVyLXNwYWNpbmc6IC0wLjExcHg7XG5cdG1hcmdpbjogMDtcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1hcmdpbi1ib3R0b206IDA7XG4gIFx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IFJvbGVUZXh0ID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIxcHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG5cdG1hcmdpbjogMDtcbmBcblxuZXhwb3J0IGNvbnN0IE5leHRUYWcgPSBzdHlsZWQuYWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0bWFyZ2luOiAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjM2QwMDk5O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMYWJlbFdpdGhBcnJvdyBmcm9tICcuLi9sYWJlbC13aXRoLWFycm93J1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vQ29tcGFueUNhcmQuc3R5bGVkJ1xuXG5jb25zdCBDb21wYW55Q2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcm9sZSwgY29tcGFueSwgb25OZXh0LCBpbWFnZVVybCB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5Db21wYW55Q2FyZFdyYXBwZXI+XG5cdFx0XHQ8Uy5JbWFnZVdyYXBwZXI+XG5cdFx0XHRcdDxTLlN0eWxlZEltYWdlXG5cdFx0XHRcdFx0c3JjPXtgL3N0YXRpYy9pbWFnZXMvJHtpbWFnZVVybH0ucG5nYH1cblx0XHRcdFx0XHRzcmNTZXQ9e2Avc3RhdGljL2ltYWdlcy8ke2ltYWdlVXJsfUAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzLyR7aW1hZ2VVcmx9QDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzLyR7aW1hZ2VVcmx9QDN4LnBuZyAzeGB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdDxTLkRlc2NyaXB0aW9uV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5UaXRsZT57dGl0bGV9PC9TLlRpdGxlPlxuXHRcdFx0XHRcdDxTLkRlc2NyaXB0aW9uVGV4dD57ZGVzY3JpcHRpb259PC9TLkRlc2NyaXB0aW9uVGV4dD5cblx0XHRcdFx0PC9TLkRlc2NyaXB0aW9uV3JhcHBlcj5cblx0XHRcdFx0PFMuRm9vdGVyV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Sb2xlVGV4dD57cm9sZX08L1MuUm9sZVRleHQ+XG5cdFx0XHRcdFx0PExhYmVsV2l0aEFycm93IGxhYmVsPXtjb21wYW55fSBvbkNsaWNrPXtvbk5leHR9IC8+XG5cdFx0XHRcdDwvUy5Gb290ZXJXcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdDwvUy5Db21wYW55Q2FyZFdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueUNhcmRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgQ29udGFjdEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZDogcmdiKDEyNSwzOSwyNTUpO1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTI1LDM5LDI1NSwxKSAwJSwgcmdiYSgxODAsNzksMjU1LDEpIDEwMCUpO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiA4MHB4IDIwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXHRcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luOiAwO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDMycHg7XG5cdGxpbmUtaGVpZ2h0OiA0MnB4O1xuXHRtYXJnaW46IDAgMCA2cHggMDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjZweDtcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1heC13aWR0aDogNjY3cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiAwO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0NvbnRhY3RGb290ZXIuc3R5bGVkJ1xuXG5jb25zdCBDb250YWN0Rm9vdGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHQ8Uy5Db250YWN0Rm9vdGVyV3JhcHBlcj5cblx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnQ+XG5cdFx0XHRcdDxTLlRpdGxlPlNlZSBob3cgd2UgY2FuIGhlbHA8L1MuVGl0bGU+XG5cdFx0XHRcdDxTLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFJlYWNoIG91dCB0byB1cyB0byBleHBsb3JlIG91ciBzZXJ2aWNlcyBvciBoZWFyIG91ciBpZGVhcyBhYm91dCB0aGVcblx0XHRcdFx0XHRpbmR1c3RyeSBpbiBncmVhdGVyIGRldGFpbFxuXHRcdFx0XHQ8L1MuRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuQ29udGVudD5cblx0XHRcdDxTLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRidG5UZXh0PVwiQ29udGFjdCB1c1wiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge319XG5cdFx0XHRcdFx0aXNEZWZhdWx0PXtmYWxzZX1cblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2NvbnRhY3QnKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5CdXR0b25XcmFwcGVyPlxuXHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0PC9TLkNvbnRhY3RGb290ZXJXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb290ZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRib3gtc2hhZG93OiAycHggNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogNjQwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgcGFkZGluZzogMCA0MHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0NvbnRhY3RGb3JtLnN0eWxlZCdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCdcbmltcG9ydCBUZXh0ZmllbGQgZnJvbSAnLi4vdGV4dGZpZWxkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5cbmNvbnN0IENvbnRhY3RGb3JtID0gKHtcblx0b25DaGFuZ2UsXG5cdGZpcnN0TmFtZSxcblx0Y29tcGFueSxcblx0ZW1haWwsXG5cdG1lc3NhZ2UsXG5cdG9uU3VibWl0LFxuXHRpc0Vycm9yXG59KSA9PiAoXG5cdDxTLkZvcm1XcmFwcGVyPlxuXHRcdDxTLkNvbnRlbnQ+XG5cdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdGxhYmVsPVwiTmFtZVwiXG5cdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJNYXJnYXJldCBNYW5nb1wiXG5cdFx0XHRcdFx0dmFsdWU9e2ZpcnN0TmFtZX1cblx0XHRcdFx0XHRuYW1lPVwiZmlyc3ROYW1lXCJcblx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdFx0aXNSZXF1aXJlZD17dHJ1ZX1cblx0XHRcdFx0XHRpc0Vycm9yPXtpc0Vycm9yfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0bGFiZWw9XCJFbWFpbFwiXG5cdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJtYXJnYXJldEBtYW5nby5jb21cIlxuXHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0XHRpc1JlcXVpcmVkPXt0cnVlfVxuXHRcdFx0XHRcdGlzRXJyb3I9e2lzRXJyb3J9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRsYWJlbD1cIkNvbXBhbnlcIlxuXHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwiTWFuZ28gY28uXCJcblx0XHRcdFx0XHR2YWx1ZT17Y29tcGFueX1cblx0XHRcdFx0XHRuYW1lPVwiY29tcGFueVwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PFRleHRmaWVsZFxuXHRcdFx0XHRcdGxhYmVsPVwiTWVzc2FnZVwiXG5cdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJZb3VyIG1lc3NhZ2UgaGVyZVwiXG5cdFx0XHRcdFx0dmFsdWU9e21lc3NhZ2V9XG5cdFx0XHRcdFx0bmFtZT1cIm1lc3NhZ2VcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHQ8QnV0dG9uIGJ0blRleHQ9XCJDb250YWN0IHVzXCIgb25DbGljaz17b25TdWJtaXR9IC8+XG5cdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHQ8L1MuQ29udGVudD5cblx0PC9TLkZvcm1XcmFwcGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmZvb3RlcmBcblx0bWluLWhlaWdodDogMzc1cHg7XG5cblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHRwYWRkaW5nOiA4MHB4IDIwcHg7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlckxvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUZXh0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHRtYXgtd2lkdGg6IDY0MHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDA7XG5cdFx0cGFkZGluZzogMCAyNHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgTWFya2V0RGF0YVRleHQgPSBzdHlsZWQucGBcblx0bWFyZ2luOiAwO1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjZweDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgYH1cblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBsb3JlQW5kU29jaWFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDEwMCU7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0d2lkdGg6IDMwMHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRXhwbG9yZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgRXhwbG9yZVRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRtYXJnaW46IDAgMCAxN3B4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDAgMCAyM3B4IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBsb3JlSXRlbSA9IHN0eWxlZC5zcGFuYFxuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogI2M4YzhjODtcblx0bWFyZ2luLWJvdHRvbTogMThweDtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRvcGFjaXR5OiAwLjY1O1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcblx0fVxuYFxuXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWxlZnQ6IDQwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbmBcblxuZXhwb3J0IGNvbnN0IFNvY2lhbFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRtYXJnaW46IDAgMCAyN3B4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDAgMCAyM3B4IDA7XG4gIGB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgU29jaWFsSWNvbiBmcm9tICcuLi9zb2NpYWwtaWNvbidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9Gb290ZXIuc3R5bGVkJ1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG5cdDxTLkZvb3RlcldyYXBwZXI+XG5cdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8Uy5Gb290ZXJMb2dvV3JhcHBlcj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3doaXRlLnBuZ1wiXG5cdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvd2hpdGUucG5nIDF4LCAvc3RhdGljL2ltYWdlcy93aGl0ZUAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy93aGl0ZUAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdHdpZHRoPVwiMTQwXCJcblx0XHRcdFx0XHRoZWlnaHQ9XCIxMjdcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkZvb3RlckxvZ29XcmFwcGVyPlxuXHRcdFx0PFMuVGV4dFdyYXBwZXI+XG5cdFx0XHRcdDxTLk1hcmtldERhdGFUZXh0PlxuXHRcdFx0XHRcdE1hcmtldCBkYXRhIGNvbXBhbnkgaXMgTm9ydGggQW1lcmljYeKAmXMgbGVhZGluZyBtYXJrZXQgZGF0YSBzb2x1dGlvbnNcblx0XHRcdFx0XHRhbmQgY29uc3VsdGFuY3kgY29tcGFueS4gV2Ugb2ZmZXIgc3BlY2lhbGl6ZWQgY29uc3VsdGluZyBzZXJ2aWNlcyBhbmRcblx0XHRcdFx0XHRsZWFkaW5nIG1hcmtldCBkYXRhIG1hbmFnZW1lbnQgc29sdXRpb25zIHRoYXQgaGVscCBkZWFsIHdpdGggdGhlXG5cdFx0XHRcdFx0Y29tcGxleGl0eSBvZiB5b3VyIGRhdGEuIFJlYWNoIHVzIGF0ICg0MTYpLTMxNS03MTc3IG9yIGluZm9AbWFya2V0ZGF0YWNvbXBhbnkuY29tLlxuXHRcdFx0XHQ8L1MuTWFya2V0RGF0YVRleHQ+XG5cdFx0XHQ8L1MuVGV4dFdyYXBwZXI+XG5cdFx0XHQ8Uy5FeHBsb3JlQW5kU29jaWFsV3JhcHBlcj5cblx0XHRcdFx0PFMuRXhwbG9yZVdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuRXhwbG9yZVRpdGxlPkV4cGxvcmU8L1MuRXhwbG9yZVRpdGxlPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvcmVzZWFyY2hcIj5cblx0XHRcdFx0XHRcdDxTLkV4cGxvcmVJdGVtPlJlc2VhcmNoPC9TLkV4cGxvcmVJdGVtPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cblx0XHRcdFx0XHRcdDxTLkV4cGxvcmVJdGVtPkNvbnRhY3Q8L1MuRXhwbG9yZUl0ZW0+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L1MuRXhwbG9yZVdyYXBwZXI+XG5cdFx0XHRcdDxTLlNvY2lhbFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuU29jaWFsVGl0bGU+U29jaWFsPC9TLlNvY2lhbFRpdGxlPlxuXHRcdFx0XHRcdDxTLlNvY2lhbENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8U29jaWFsSWNvbiB1cmw9XCJodHRwOi8vZmFjZWJvb2suY29tXCIgLz5cblx0XHRcdFx0XHRcdDxTb2NpYWxJY29uIHVybD1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L21hcmtldC1kYXRhLWNvbXBhbnkvXCIgLz5cblx0XHRcdFx0XHRcdDxTb2NpYWxJY29uIHVybD1cImh0dHA6Ly90d2l0dGVyLmNvbVwiIC8+XG5cdFx0XHRcdFx0PC9TLlNvY2lhbENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5Tb2NpYWxXcmFwcGVyPlxuXHRcdFx0PC9TLkV4cGxvcmVBbmRTb2NpYWxXcmFwcGVyPlxuXHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0PC9TLkZvb3RlcldyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEhhbWJ1cmdlck1lbnVDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHR3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDYwcHg7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJy4uL2xpc3QtaXRlbSdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9IYW1idXJnZXJNZW51Q29udGVudC5zdHlsZWQnXG5cbmNvbnN0IEhhbWJ1cmdlck1lbnVDb250ZW50ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgb25DbG9zZU1vZGFsIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkhhbWJ1cmdlck1lbnVDb250ZW50V3JhcHBlcj5cblx0XHRcdDxTLkhlYWRlcj5cblx0XHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnLycpfT5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9e29uQ2xvc2VNb2RhbH0+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9jbG9zZUljb24ucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9jbG9zZUljb25AMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9jbG9zZUljb25AM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvUy5IZWFkZXI+XG5cdFx0XHQ8TGlzdEl0ZW0gbGFiZWw9XCJSZXNlYXJjaFwiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcmVzZWFyY2gnKX0gLz5cblx0XHRcdDxMaXN0SXRlbSBsYWJlbD1cIkNvbnRhY3QgdXNcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2NvbnRhY3QnKX0gLz5cblx0XHQ8L1MuSGFtYnVyZ2VyTWVudUNvbnRlbnRXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlck1lbnVDb250ZW50XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFuaW1hdGVkQ2FyZCB9IGZyb20gJy4vYW5pbWF0ZWQtY2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQW5pbWF0ZWRGb290ZXJMaW5rIH0gZnJvbSAnLi9hbmltYXRlZC1mb290ZXItbGluaydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmlvQ2FyZCB9IGZyb20gJy4vYmlvLWNhcmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wYW55Q2FyZCB9IGZyb20gJy4vY29tcGFueS1jYXJkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWN0Rm9vdGVyIH0gZnJvbSAnLi9jb250YWN0LWZvb3RlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdEZvcm0gfSBmcm9tICcuL2NvbnRhY3QtZm9ybSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhhbWJ1cmdlck1lbnVDb250ZW50IH0gZnJvbSAnLi9oYW1idXJnZXItbWVudS1jb250ZW50J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExhYmVsV2l0aEFycm93IH0gZnJvbSAnLi9sYWJlbC13aXRoLWFycm93J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYXlvdXQgfSBmcm9tICcuL2xheW91dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGlzdEl0ZW0gfSBmcm9tICcuL2xpc3QtaXRlbSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL21vZGFsJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNlYXJjaFBkZkZvcm0gfSBmcm9tICcuL3Jlc2VhcmNoLXBkZi1mb3JtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb2NpYWxJY29uIH0gZnJvbSAnLi9zb2NpYWwtaWNvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhcnREb3dubG9hZEZvcm0gfSBmcm9tICcuL3N0YXJ0LWRvd25sb2FkLWZvcm0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRhYkJhciB9IGZyb20gJy4vdGFiLWJhcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGV4dEZpZWxkIH0gZnJvbSAnLi90ZXh0ZmllbGQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRoYW5rWW91IH0gZnJvbSAnLi90aGFuay15b3UnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRpY2tlclRhcGUgfSBmcm9tICcuL3RpY2tlci10YXBlJyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYFxuXG5leHBvcnQgY29uc3QgTGFiZWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRtYXJnaW4tcmlnaHQ6IDJweDtcbmBcblxuZXhwb3J0IGNvbnN0IEVycm9yU3RhciA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJ0x1Y2lkYUdyYW5kZSc7XG5cdGZvbnQtc2l6ZTogMjFweDtcblx0Y29sb3I6ICNmZjAwMDA7XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAxMDAlO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXI6ICR7KHByb3BzKSA9PlxuXHRcdHByb3BzLmlzRXJyb3Jcblx0XHRcdD8gYHNvbGlkIDFweCAke3Byb3BzLnRoZW1lLmNvbG9ycy5yZWR9YFxuXHRcdFx0OiAnc29saWQgMXB4ICNjOGM4YzgnfTtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMuaXNFcnJvclxuXHRcdFx0PyAncmdiYSgyNTUsIDM5LCA4MiwgMC4wMiknXG5cdFx0XHQ6IGAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfWB9O1xuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIE9wZXJhL0lFIDgrICovXG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZCA9IHN0eWxlZC5pbnB1dGBcblx0aGVpZ2h0OiAzOXB4O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZy1sZWZ0OiAxNHB4O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMuaXNFcnJvciA/IHByb3BzLnRoZW1lLmNvbG9ycy5yZWQgOiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmV5fTtcblx0Ym9yZGVyOiBub25lO1xuXHQmOmZvY3VzIHtcblx0XHRvdXRsaW5lOiBub25lO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0lucHV0LnN0eWxlZCdcblxuY29uc3QgSW5wdXQgPSAoe1xuXHRsYWJlbCxcblx0cGxhY2Vob2xkZXIsXG5cdG5hbWUsXG5cdHZhbHVlLFxuXHRvbkNoYW5nZSxcblx0aXNSZXF1aXJlZCxcblx0aXNFcnJvclxufSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdDxTLkxhYmVsV3JhcHBlcj5cblx0XHRcdFx0PFMuTGFiZWw+e2xhYmVsfTwvUy5MYWJlbD5cblx0XHRcdFx0e2lzUmVxdWlyZWQgJiYgPFMuRXJyb3JTdGFyPio8L1MuRXJyb3JTdGFyPn1cblx0XHRcdDwvUy5MYWJlbFdyYXBwZXI+XG5cdFx0XHQ8Uy5GaWVsZFdyYXBwZXIgaXNFcnJvcj17aXNFcnJvcn0+XG5cdFx0XHRcdDxTLkZpZWxkXG5cdFx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRcdG5hbWU9e25hbWV9XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e2lzRXJyb3IgJiYgKFxuXHRcdFx0XHRcdDxTLkltYWdlV3JhcHBlcj5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvZXJyb3IucG5nXCJcblx0XHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvZXJyb3IucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9lcnJvckAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvZXJyb3JAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0PVwiMjJcIlxuXHRcdFx0XHRcdFx0XHR3aWR0aD1cIjIyXCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9TLkltYWdlV3JhcHBlcj5cblx0XHRcdFx0KX1cblx0XHRcdDwvUy5GaWVsZFdyYXBwZXI+XG5cdFx0PC9TLklucHV0V3JhcHBlcj5cblx0KVxufVxuXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzUmVxdWlyZWQ6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGFiZWxXaXRoQXJyb3dXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5oNWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0bWFyZ2luOiAwIDdweCAwIDA7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vTGFiZWxXaXRoQXJyb3cuc3R5bGVkJ1xuXG5jb25zdCBMYWJlbFdpdGhBcnJvdyA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGxhYmVsLCBvbkNsaWNrIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkxhYmVsV2l0aEFycm93V3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdDxTLkxhYmVsPntsYWJlbH08L1MuTGFiZWw+XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Fycm93LnBuZ1wiXG5cdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2Fycm93QDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvYXJyb3dAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvYXJyb3dAM3gucG5nIDN4XCJcblx0XHRcdC8+XG5cdFx0PC9TLkxhYmVsV2l0aEFycm93V3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYWJlbFdpdGhBcnJvd1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHR3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tdG9wOiBhdXRvO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xheW91dC5zdHlsZWQnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2Zvb3RlcidcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTLldyYXBwZXI+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8Uy5Gb290ZXJXcmFwcGVyPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L1MuRm9vdGVyV3JhcHBlcj5cblx0XHQ8L1MuV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMaXN0SXRlbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtaW4taGVpZ2h0OiA2MHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNlZmVmZWY7XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5zcGFuYFxuXHRmb250LXNpemU6IDIxcHg7XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9MaXN0SXRlbS5zdHlsZWQnXG5cbmNvbnN0IExpc3RJdGVtID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbGFiZWwsIG9uQ2xpY2sgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuTGlzdEl0ZW1XcmFwcGVyIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PFMuTGFiZWw+e2xhYmVsfTwvUy5MYWJlbD5cblx0XHQ8L1MuTGlzdEl0ZW1XcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtbW9kYWwnXG5cbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcblx0Y29udGVudDoge1xuXHRcdHBhZGRpbmc6ICcyMHB4IDIwcHggMCAyMHB4Jyxcblx0XHRkaXNwbGF5OiAnZmxleCcsXG5cdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG5cdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXG5cdFx0bWF4V2lkdGg6ICc3MjRweCcsXG5cdFx0bWF4SGVpZ2h0OiAnNjAwcHgnLFxuXHRcdG1hcmdpbkxlZnQ6ICdhdXRvJyxcblx0XHRtYXJnaW5SaWdodDogJ2F1dG8nLFxuXHRcdG1hcmdpblRvcDogJzEwJScsXG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0Ym90dG9tOiAwXG5cdH0sXG5cdG92ZXJsYXk6IHtcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMCxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuMjUnIFxuXHRcdC8vIG1hcmdpbjogJzIwcHgnLFxuXHRcdC8vIGJhY2tncm91bmRDb2xvcjogJ25vbmUnXG5cdH1cbn1cblxuY29uc3QgTURDTW9kYWwgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBjaGlsZHJlbiwgbW9kYWxWaXNpYmxlLCBvblJlcXVlc3RDbG9zZSB9ID0gcHJvcHNcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdE1vZGFsLnNldEFwcEVsZW1lbnQoJ2JvZHknKVxuXHR9LCBbXSlcblx0cmV0dXJuIChcblx0XHQ8TW9kYWxcblx0XHRcdGlzT3Blbj17bW9kYWxWaXNpYmxlfVxuXHRcdFx0b25SZXF1ZXN0Q2xvc2U9e29uUmVxdWVzdENsb3NlfVxuXHRcdFx0c3R5bGU9e2N1c3RvbVN0eWxlc31cblx0XHQ+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9Nb2RhbD5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBNRENNb2RhbFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBSZXNlYXJjaFBkZkZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0bWluLWhlaWdodDogNTkxcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXgtaGVpZ2h0OiA2MDBweDtcblx0XHRtYXgtd2lkdGg6IDcyNHB4O1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0aGVpZ2h0OiAzMnB4O1xuXHR3aWR0aDogMzJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zYkdyZXl9O1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSBzdHlsZWQuaW1nYFxuXHRoZWlnaHQ6IDE4cHg7XG5cdHdpZHRoOiAxOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWFyZ2luOiAwIDYwcHg7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oM2Bcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luOiAwIDAgMTJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuaDVgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luLWJvdHRvbTogMCAwIDE4cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDEycHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0JjpudGgtY2hpbGQoNikge1xuICAgICAgICBcdG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgXHR9XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkQW5jaG9yID0gc3R5bGVkLmFgXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9pbnB1dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1Jlc2VhcmNoUGRmRm9ybS5zdHlsZWQnXG5cbmNvbnN0IFJlc2VhcmNoUGRmRm9ybSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7XG5cdFx0Zmlyc3ROYW1lLFxuXHRcdGNvbXBhbnksXG5cdFx0ZW1haWwsXG5cdFx0b25DaGFuZ2UsXG5cdFx0b25TdWJtaXQsXG5cdFx0aXNEaXNhYmxlZCxcblx0XHRvblJlcXVlc3RDbG9zZSxcblx0XHRwZGZGb3JtXG5cdH0gPSBwcm9wc1xuXG5cdHJldHVybiAoXG5cdFx0PFMuUmVzZWFyY2hQZGZGb3JtV3JhcHBlcj5cblx0XHRcdDxTLkltYWdlV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2xvc2VJY29uXG5cdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uLnBuZ1wiXG5cdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0b25DbGljaz17b25SZXF1ZXN0Q2xvc2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdDxTLlRpdGxlPkp1c3Qgb25lIGxhc3QgdGhpbmcuLjwvUy5UaXRsZT5cblx0XHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0VG8gZ2V0IHRoaXMgY2FzZSBzdHVkeSBjb21wbGV0ZWx5IGZyZWUsIHBsZWFzZSBsZWF2ZSB1cyB5b3VyIG5hbWUgYW5kXG5cdFx0XHRcdFx0ZW1haWwgYWRkcmVzcyB0byByZWNlaXZlIGZ1dHVyZSBuZXdzIGFuZCB1cGRhdGVzLlxuXHRcdFx0XHQ8L1MuRGVzY3JpcHRpb24+XG5cdFx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdGxhYmVsPVwiTmFtZVwiXG5cdFx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJmaXJzdE5hbWVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2ZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0XHRcdGlzUmVxdWlyZWQ9e3RydWV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cImpvaG5kb2VAZW1haWwuY29tXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdFx0XHRpc1JlcXVpcmVkXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJDb21wYW55XCJcblx0XHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwiY29tcGFueSBuYW1lXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJjb21wYW55XCJcblx0XHRcdFx0XHRcdHZhbHVlPXtjb21wYW55fVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxTLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdFx0PFMuU3R5bGVkQW5jaG9yXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gKGlzRGlzYWJsZWQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiAoKSA9PiB7fSl9XG5cdFx0XHRcdFx0XHRocmVmPXtwZGZGb3JtfVxuXHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdGJ0blRleHQ9XCJEb3dubG9hZCBQREZcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtvblN1Ym1pdH1cblx0XHRcdFx0XHRcdFx0aXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9TLlN0eWxlZEFuY2hvcj5cblx0XHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdFx0PC9TLlJlc2VhcmNoUGRmRm9ybVdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hQZGZGb3JtXG4iLCJpbXBvcnQgeyBTb2NpYWxJY29uIGFzIFJlYWN0U29jaWFsSWNvbiB9IGZyb20gJ3JlYWN0LXNvY2lhbC1pY29ucydcbmltcG9ydCB7IE1EQ19QVVJQTEUsIFdISVRFIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2NvbG9ycydcblxuY29uc3QgU29jaWFsSWNvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHVybCB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8UmVhY3RTb2NpYWxJY29uXG5cdFx0XHR1cmw9e3VybH1cblx0XHRcdHN0eWxlPXt7IGhlaWdodDogNDAsIHdpZHRoOiA0MCwgbWFyZ2luUmlnaHQ6IDIwIH19XG5cdFx0XHRiZ0NvbG9yPXtNRENfUFVSUExFfVxuXHRcdFx0ZmdDb2xvcj17V0hJVEV9XG5cdFx0Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxJY29uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9TdGFydERvd25sb2FkRm9ybS5zdHlsZWQnXG5cbmNvbnN0IFN0YXJ0RG93bmxvYWRGb3JtID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgb25SZXF1ZXN0Q2xvc2UsIHBkZkZvcm0sIG9uU3VibWl0IH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLlN0YXJ0RG93bmxvYWRGb3JtV3JhcHBlcj5cblx0XHRcdDxTLkltYWdlV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2xvc2VJY29uXG5cdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uLnBuZ1wiXG5cdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0b25DbGljaz17b25SZXF1ZXN0Q2xvc2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdDxTLlRpdGxlPlN0YXJ0IHlvdXIgZG93bmxvYWQ8L1MuVGl0bGU+XG5cdFx0XHRcdDxTLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdEFmdGVyIHJlYWRpbmcsIElmIHlvdSdkIGxpa2UgdG8gbGVhcm4gbW9yZSBhYm91dCBob3cgd2UgY2FuIGhlbHAgeW91XG5cdFx0XHRcdFx0b3B0aW1pemUgeW91ciBkYXRhIHNwZW5kLCBnZXQgaW4gdG91Y2ggd2l0aCBvdXIgdGVhbSBhbmQgd2UnZCBiZSBoYXBweVxuXHRcdFx0XHRcdHRvIGhlbHAgeW91LlxuXHRcdFx0XHQ8L1MuRGVzY3JpcHRpb24+XG5cdFx0XHRcdDxTLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdFx0PFMuU3R5bGVkQW5jaG9yIGhyZWY9e3BkZkZvcm19IHRhcmdldD1cIl9ibGFua1wiPlxuXHRcdFx0XHRcdFx0PEJ1dHRvbiBidG5UZXh0PVwiRG93bmxvYWRcIiBvbkNsaWNrPXtvblN1Ym1pdH0gLz5cblx0XHRcdFx0XHQ8L1MuU3R5bGVkQW5jaG9yPlxuXHRcdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHQ8L1MuU3RhcnREb3dubG9hZEZvcm1XcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0RG93bmxvYWRGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IFN0YXJ0RG93bmxvYWRGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdG1pbi1oZWlnaHQ6IDU2MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWF4LWhlaWdodDogNjAwcHg7XG5cdFx0bWF4LXdpZHRoOiA3MjRweDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGhlaWdodDogMzJweDtcblx0d2lkdGg6IDMycHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2JHcmV5fTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgQ2xvc2VJY29uID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiAxOHB4O1xuXHR3aWR0aDogMThweDtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1hcmdpbjogMCA2MnB4O1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDJgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGxpbmUtaGVpZ2h0OiA0OHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMCAwIDEycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmg1YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMjFweDtcblx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdG1hcmdpbjogMCAwIDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRBbmNob3IgPSBzdHlsZWQuYWBcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYFxuIiwiaW1wb3J0IFN0YXJ0RG93bmxvYWRGb3JtIGZyb20gJy4vU3RhcnREb3dubG9hZEZvcm0nXG5cbmV4cG9ydCBkZWZhdWx0IFN0YXJ0RG93bmxvYWRGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDcycHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfHwgJ3RyYW5zcGFyZW50J307XG5gXG5cbmV4cG9ydCBjb25zdCBNb2JpbGVUYWJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHRkaXNwbGF5OiBub25lO1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgVGFiV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IG5vbmU7XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRgfVxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUYWIgPSBzdHlsZWQuc3BhbmBcblx0Y29sb3I6ICR7KHByb3BzKSA9PlxuXHRcdHByb3BzLmJhclRoZW1lID09PSAnZGFyaydcblx0XHRcdD8gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrXG5cdFx0XHQ6IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0bWFyZ2luLXJpZ2h0OiA1MHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdG9wYWNpdHk6IDAuNjU7XG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xuXHR9XG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbCdcbmltcG9ydCBIYW1idXJnZXJNZW51Q29udGVudCBmcm9tICcuLi9oYW1idXJnZXItbWVudS1jb250ZW50J1xuXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vVGFiQmFyLnN0eWxlZCdcblxuY29uc3QgbGlua0RhdGEgPSBbXG5cdHtcblx0XHRocmVmOiAnL3Jlc2VhcmNoJyxcblx0XHR0YWJOYW1lOiAnUmVzZWFyY2gnXG5cdH0sXG5cdHtcblx0XHRocmVmOiAnL2NvbnRhY3QnLFxuXHRcdHRhYk5hbWU6ICdDb250YWN0J1xuXHR9XG5dXG5cbmNvbnN0IFRhYkJhciA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJhclRoZW1lLCBiYWNrZ3JvdW5kQ29sb3IgfSA9IHByb3BzXG5cdGNvbnN0IFttb2RhbFZpc2libGUsIHNldE1vZGFsVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCByZW5kZXJMaW5rcyA9ICgpID0+IHtcblx0XHRyZXR1cm4gbGlua0RhdGEubWFwKChkYXRhKSA9PiB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8TGluayBrZXk9e2RhdGEuaHJlZn0gaHJlZj17ZGF0YS5ocmVmfT5cblx0XHRcdFx0XHQ8Uy5UYWIgYmFyVGhlbWU9e2JhclRoZW1lfT57ZGF0YS50YWJOYW1lfTwvUy5UYWI+XG5cdFx0XHRcdDwvTGluaz5cblx0XHRcdClcblx0XHR9KVxuXHR9XG5cblx0Y29uc3QgV2ViVGFiQmFyID0gKCkgPT4gKFxuXHRcdDxTLlRhYldyYXBwZXI+XG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHQ8Uy5UYWI+XG5cdFx0XHRcdFx0e2JhclRoZW1lID09PSAnZGFyaycgJiYgKFxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e2JhclRoZW1lICE9PSAnZGFyaycgJiYgKFxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWxAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWxAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9TLlRhYj5cblx0XHRcdDwvTGluaz5cblx0XHRcdHtyZW5kZXJMaW5rcygpfVxuXHRcdDwvUy5UYWJXcmFwcGVyPlxuXHQpXG5cblx0Y29uc3QgTW9iaWxlVGFiQmFyID0gKCkgPT4gKFxuXHRcdDxTLk1vYmlsZVRhYldyYXBwZXI+XG5cdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdHtiYXJUaGVtZSA9PT0gJ2RhcmsnICYmIChcblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFjay5wbmdcIlxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtiYXJUaGVtZSAhPT0gJ2RhcmsnICYmIChcblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbEAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFZpc2libGUodHJ1ZSl9PlxuXHRcdFx0XHR7YmFyVGhlbWUgPT09ICdkYXJrJyAmJiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvYmxhY2staGFtYnVyZ2VyLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9ibGFjay1oYW1idXJnZXIucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9ibGFjay1oYW1idXJnZXJAMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2JsYWNrLWhhbWJ1cmdlckAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtiYXJUaGVtZSAhPT0gJ2RhcmsnICYmIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9oYW1idXJnZXIucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2hhbWJ1cmdlci5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2hhbWJ1cmdlckAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvaGFtYnVyZ2VyQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvUy5Nb2JpbGVUYWJXcmFwcGVyPlxuXHQpXG5cblx0cmV0dXJuIChcblx0XHQ8Uy5XcmFwcGVyIHRoZW1lRGFyaz17dHJ1ZX0gYmFja2dyb3VuZENvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9PlxuXHRcdFx0PFdlYlRhYkJhciAvPlxuXHRcdFx0PE1vYmlsZVRhYkJhciAvPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdG1vZGFsVmlzaWJsZT17bW9kYWxWaXNpYmxlfVxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cblx0XHRcdD5cblx0XHRcdFx0PEhhbWJ1cmdlck1lbnVDb250ZW50IG9uQ2xvc2VNb2RhbD17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKGZhbHNlKX0gLz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC9TLldyYXBwZXI+XG5cdClcbn1cblxuVGFiQmFyLmRlZmF1bHRQcm9wcyA9IHtcblx0YmFyVGhlbWU6ICdsaWdodCdcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiQmFyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgVGV4dEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbi1ib3R0b206IDVweDtcbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkID0gc3R5bGVkLnRleHRhcmVhYFxuXHRib3JkZXI6IHNvbGlkIDFweCAjYzhjOGM4O1xuXHRoZWlnaHQ6IDEyNXB4O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogNnB4IDAgMCAxNHB4O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5saWdodEdyZXl9O1xuXHRyZXNpemU6IG5vbmU7XG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cblx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogT3BlcmEvSUUgOCsgKi9cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9UZXh0ZmllbGQuc3R5bGVkJ1xuXG5jb25zdCBUZXh0ZmllbGQgPSAoeyBsYWJlbCwgdmFsdWUsIG5hbWUsIG9uQ2hhbmdlLCBwbGFjZWhvbGRlciB9KSA9PiAoXG5cdDxTLlRleHRGaWVsZFdyYXBwZXI+XG5cdFx0PFMuTGFiZWw+e2xhYmVsfTwvUy5MYWJlbD5cblx0XHQ8Uy5GaWVsZFxuXHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0bmFtZT17bmFtZX1cblx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHQvPlxuXHQ8L1MuVGV4dEZpZWxkV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGZpZWxkXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IFRoYW5rWW91V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDI5cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oM2Bcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAwIDlweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5oNWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDAgMCA0NHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMCAwIDYzcHg7XG4gICAgbWF4LXdpZHRoOiAzNDRweDtcbiAgYH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBbmltYXRlZEZvb3RlckxpbmsgZnJvbSAnLi4vYW5pbWF0ZWQtZm9vdGVyLWxpbmsnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vVGhhbmtZb3Uuc3R5bGVkJ1xuXG5jb25zdCBUaGFua1lvdSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGRlc2NyaXB0aW9uLCBocmVmLCBmb290ZXJNZXNzYWdlLCBvbkNsaWNrIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLlRoYW5rWW91V3JhcHBlcj5cblx0XHRcdDxTLkltYWdlV3JhcHBlcj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3B1cnBsZS1jaGVjay1tYXJrLnBuZ1wiXG5cdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvcHVycGxlLWNoZWNrLW1hcmsucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9wdXJwbGUtY2hlY2stbWFya0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvcHVycGxlLWNoZWNrLW1hcmtAM3gucG5nIDN4XCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbWFnZVdyYXBwZXI+XG5cdFx0XHQ8Uy5UaXRsZT5UaGFuayBZb3U8L1MuVGl0bGU+XG5cdFx0XHQ8Uy5EZXNjcmlwdGlvbj57ZGVzY3JpcHRpb259PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0PEFuaW1hdGVkRm9vdGVyTGlua1xuXHRcdFx0XHRtZXNzYWdlPXtmb290ZXJNZXNzYWdlfVxuXHRcdFx0XHRocmVmPXtocmVmfVxuXHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxuXHRcdFx0Lz5cblx0XHQ8L1MuVGhhbmtZb3VXcmFwcGVyPlxuXHQpXG59XG5cblRoYW5rWW91LmRlZmF1bHRQcm9wcyA9IHtcblx0ZW1haWw6ICd5b3VyIGVtYWlsIGFkZHJlc3MnLFxuXHRvbkNsaWNrOiAoKSA9PiB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGFua1lvdVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlja2VyVGFwZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuX3JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcclxuICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL3MzLnRyYWRpbmd2aWV3LmNvbS9leHRlcm5hbC1lbWJlZGRpbmcvZW1iZWQtd2lkZ2V0LXRpY2tlci10YXBlLmpzXCJcclxuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXHJcbiAgICAgICAgc2NyaXB0LmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgXCJzeW1ib2xzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogQkFDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpCQUNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRldCOiBCUkZcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJGV0I6QlJGXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkhLRVg6IDM4OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkhLRVg6Mzg4XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IEJYXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpCWFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBTUVYOiBDQk9FXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQU1FWDpDQk9FXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogQ01DU0FcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6Q01DU0FcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBDTUVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6Q01FXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogQ01UWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpDTVRYXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogQ09XTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpDT1dOXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IEROQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6RE5CXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IERPV1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6RE9XXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogRU1ZSUZcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6RU1ZSUZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0FQSVRBTENPTTogRVJNXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQ0FQSVRBTENPTTpFUk1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBGRFJWRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpGRFJWRlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBGRFNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkZEU1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBGSVNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkZJU1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IEZMRVhcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6RkxFWFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBJQUNBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpJQUNBXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IElDRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6SUNFXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogSUZKUFlcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6SUZKUFlcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0FQSVRBTENPTTogSU5GXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQ0FQSVRBTENPTTpJTkZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogSU5GT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6SU5GT1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDU0U6IElQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQ1NFOklQXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFTWDogSVJFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQVNYOklSRVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IElWRlpGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOklWRlpGXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IEpQTVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6SlBNXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxTRTogTFNFR1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkxTRTpMU0VHXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogTUFUV1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpNQVRXXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IE1DT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6TUNPXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNCT1Q6IE1DWDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJDQk9UOk1DWDEhXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogTUtUWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpNS1RYXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogTU5YQllcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6TU5YQllcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBNT1JOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROk1PUk5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogTVNDSVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6TVNDSVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IE1WRU5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6TVZFTlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IE5EQVFcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6TkRBUVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBOTVJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOk5NUlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IE5XRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpOV0VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBOV1NBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROk5XU0FcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogT1JDTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6T1JDTFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpQT1NUXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogUFNFQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpQU0VDXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxTRTogUFRFQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkxTRTpQVEVDXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxTRTogUkVMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTFNFOlJFTFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IFJMWFhGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOlJMWFhGXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IFNLWVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6U0tZXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IFNQR0lcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOlNQR0lcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBTU05DXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROlNTTkNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogU1RUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpTVFRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTFNFOiBUQ0FQXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTFNFOlRDQVBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogVFJJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpUUklcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQU1FWDogVFRBQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkFNRVg6VFRBQ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IFRURFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpUVERcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBUV1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpUV1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBXQVRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOldBVFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IFdTQ09cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6V1NDT1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwic2hvd1N5bWJvbExvZ29cIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJjb2xvclRoZW1lXCI6IFwibGlnaHRcIixcclxuICAgICAgICAgICAgXCJpc1RyYW5zcGFyZW50XCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcImRpc3BsYXlNb2RlXCI6IFwiYWRhcHRpdmVcIixcclxuICAgICAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9yZWYuY3VycmVudC5hcHBlbmRDaGlsZChzY3JpcHQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhZGluZ3ZpZXctd2lkZ2V0LWNvbnRhaW5lclwiIHJlZj17dGhpcy5fcmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhZGluZ3ZpZXctd2lkZ2V0LWNvbnRhaW5lcl9fd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWRpbmd2aWV3LXdpZGdldC1jb3B5cmlnaHRcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cudHJhZGluZ3ZpZXcuY29tXCIgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPjxzcGFuIGNsYXNzTmFtZT1cImJsdWUtdGV4dFwiPlRpY2tlciBUYXBlPC9zcGFuPjwvYT4gYnkgVHJhZGluZ1ZpZXc8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG5cdExheW91dCxcblx0TW9kYWwsXG5cdFRoYW5rWW91LFxuXHRSZXNlYXJjaFBkZkZvcm0sXG5cdFN0YXJ0RG93bmxvYWRGb3JtLFxuXHRDb250YWN0Rm9vdGVyLFxuXHRUaWNrZXJUYXBlXG59IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQge1xuXHRMYW5kaW5nLFxuXHRMZWFkZXJNYXJrZXREYXRhLFxuXHRXb3JrZWRXaXRoLFxuXHRXaHlNZGMsXG5cdFNlcnZpY2VzLFxuXHRSZXNlYXJjaFxufSBmcm9tICcuLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24nXG5cbmltcG9ydCBwZGZNYXBwZXIgZnJvbSAnLi4vdXRpbHMvcGRmTWFwcGVyJ1xuXG4vLyBVdGlsc1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRvcidcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaVNlcnZpY2UnXG5cbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvdXNlU3RvcmUnXG5pbXBvcnQgeyBVU0VSX1NJR05FRF9VUCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvblR5cGVzJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblxuYFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtlbWFpbFNlbnQsIHNldEVtYWlsU2VudF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW3BkZkZvcm0sIHNldFBkZkZvcm1dID0gdXNlU3RhdGUoJycpXG5cblx0Y29uc3QgW2Zvcm0sIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuXHRcdGZpcnN0TmFtZTogJycsXG5cdFx0Y29tcGFueTogJycsXG5cdFx0ZW1haWw6ICcnXG5cdH0pXG5cblx0Ly8gSG9va3MgdG8gc2F2ZSB0aGUgdXNlcnMgZm9ybSBkYXRhXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdG9yZSgpXG5cdGNvbnN0IHNhdmVVc2VyID0gdXNlQ2FsbGJhY2soXG5cdFx0KGZvcm1WYWx1ZXMpID0+IGRpc3BhdGNoKHsgdHlwZTogVVNFUl9TSUdORURfVVAsIHBheWxvYWQ6IGZvcm1WYWx1ZXMgfSksXG5cdFx0W2Rpc3BhdGNoXVxuXHQpXG5cblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRFbWFpbChmb3JtKVxuXHRcdFx0aWYgKHJlcy5lcnJvcikge1xuXHRcdFx0XHRzZXRIYXNFcnJvcih0cnVlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gU2F2ZSB1c2VyIGZvcm0gdG8gc3RvcmVcblx0XHRcdFx0c2F2ZVVzZXIoe1xuXHRcdFx0XHRcdG5hbWU6IGZvcm0uZmlyc3ROYW1lLFxuXHRcdFx0XHRcdGNvbXBhbnk6IGZvcm0uY29tcGFueSxcblx0XHRcdFx0XHRlbWFpbDogZm9ybS5lbWFpbFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRzZXRFbWFpbFNlbnQodHJ1ZSlcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHNldEhhc0Vycm9yKHRydWUpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlRmllbGQgPSAoZSkgPT4ge1xuXHRcdHNldEZvcm1WYWx1ZXMoe1xuXHRcdFx0Li4uZm9ybSxcblx0XHRcdFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0Y29uc3Qgb25Nb2RhbENsb3NlID0gKCkgPT4ge1xuXHRcdHNldE1vZGFsVmlzaWJsZShmYWxzZSlcblx0XHRzZXRFbWFpbFNlbnQoZmFsc2UpXG5cdH1cblxuXHRjb25zdCBvcGVuTW9kYWwgPSAocmVzZWFyY2hGb3JtKSA9PiB7XG5cdFx0c2V0TW9kYWxWaXNpYmxlKHRydWUpXG5cdFx0c2V0UGRmRm9ybShwZGZNYXBwZXJbcmVzZWFyY2hGb3JtXSlcblx0fVxuXG5cdGNvbnN0IGlzRGlzYWJsZWQgPSAhZm9ybS5maXJzdE5hbWUgJiYgIXZhbGlkYXRlRW1haWwoZm9ybS5lbWFpbClcblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8TGFuZGluZyAvPlxuXHRcdFx0PFRpY2tlclRhcGUgLz5cblx0XHRcdDxNb2RhbCBtb2RhbFZpc2libGU9e21vZGFsVmlzaWJsZX0gb25SZXF1ZXN0Q2xvc2U9e29uTW9kYWxDbG9zZX0+XG5cdFx0XHRcdHshZW1haWxTZW50ICYmICFoYXNFcnJvciAmJiAhc3RhdGUudXNlciAmJiAoXG5cdFx0XHRcdFx0PFJlc2VhcmNoUGRmRm9ybVxuXHRcdFx0XHRcdFx0Zmlyc3ROYW1lPXtmb3JtLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdGNvbXBhbnk9e2Zvcm0uY29tcGFueX1cblx0XHRcdFx0XHRcdGVtYWlsPXtmb3JtLmVtYWlsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3VwZGF0ZUZpZWxkfVxuXHRcdFx0XHRcdFx0aXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvbk1vZGFsQ2xvc2V9XG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25TdWJtaXR9XG5cdFx0XHRcdFx0XHRwZGZGb3JtPXtwZGZGb3JtfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshZW1haWxTZW50ICYmICFoYXNFcnJvciAmJiBzdGF0ZS51c2VyICYmIChcblx0XHRcdFx0XHQ8U3RhcnREb3dubG9hZEZvcm1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvbk1vZGFsQ2xvc2V9XG5cdFx0XHRcdFx0XHRwZGZGb3JtPXtwZGZGb3JtfVxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eygpID0+IHNldEVtYWlsU2VudCh0cnVlKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7ZW1haWxTZW50ICYmICFoYXNFcnJvciAmJiAoXG5cdFx0XHRcdFx0PFRoYW5rWW91XG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cIllvdXIgZG93bmxvYWQgc2hvdWxkIHN0YXJ0IGF1dG9tYXRpY2FsbHkuIEVuam95IVwiXG5cdFx0XHRcdFx0XHRmb290ZXJNZXNzYWdlPVwiQmFjayB0byByZXNlYXJjaFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiL3Jlc2VhcmNoXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uTW9kYWxDbG9zZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbD5cblx0XHRcdDxDb250ZW50V3JhcHBlcj5cblx0XHRcdFx0PExlYWRlck1hcmtldERhdGEgLz5cblx0XHRcdFx0PFdvcmtlZFdpdGggLz5cblx0XHRcdFx0PFdoeU1kYyAvPlxuXHRcdFx0XHQ8U2VydmljZXMgLz5cblx0XHRcdFx0PFJlc2VhcmNoIG9uQ2xpY2s9e29wZW5Nb2RhbH0gLz5cblx0XHRcdDwvQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8Q29udGFjdEZvb3RlciAvPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTGFuZGluZyB9IGZyb20gJy4vbGFuZGluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhZGVyTWFya2V0RGF0YSB9IGZyb20gJy4vbGVhZGVyLW1hcmtldC1kYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNlYXJjaCB9IGZyb20gJy4vcmVzZWFyY2gnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2h5TWRjIH0gZnJvbSAnLi93aHktbWRjJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JrZWRXaXRoIH0gZnJvbSAnLi93b3JrZWQtd2l0aCdcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgTGFuZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL21vYmlsZS1sYW5kaW5nLmpwZycpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRoZWlnaHQ6IDk1dmg7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zdGF0aWMvaW1hZ2VzL3RhYmxldC1sYW5kaW5nLmpwZ1wiKTtcblx0XHRgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDAgMjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDQycHg7XG5cdGxpbmUtaGVpZ2h0OiA0NHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdHBhZGRpbmc6IDE2MHB4IDAgMTJweCAwO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDU3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXNpemU6IDIxcHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdG1hcmdpbjogMCAwIDQycHggMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0bWF4LXdpZHRoOiA3MjBweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0bWF4LXdpZHRoOiAzNDBweDtcblx0bWFyZ2luOiAwIDAgMzhweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBcdG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xhbmRpbmcuc3R5bGVkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCBUYWJCYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWItYmFyJ1xuXG5jb25zdCBMYW5kaW5nID0gKCkgPT4ge1xuXHRjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKVxuXHRjb25zdCBsYW5kaW5nR2lmVXJscyA9IFtcblx0XHQnL3N0YXRpYy9naWZzL2ZpbmFuY2lhbC1idXNpbmVzcy1jaGFydC5naWYnLFxuXHRcdCcvc3RhdGljL2dpZnMvbmV3LXlvcmstY2l0eXNjYXBlLmdpZidcblx0XVxuXHRjb25zdCBnaWZSZWZyZXNoUmF0ZSA9IDU5OTBcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IG5leHQgPSAoY3VycmVudCArIDEpICUgbGFuZGluZ0dpZlVybHMubGVuZ3RoXG5cdFx0Y29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldEN1cnJlbnQobmV4dCksIGdpZlJlZnJlc2hSYXRlKVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoaWQpXG5cdH0sIFtjdXJyZW50XSlcblxuXHRyZXR1cm4gPFMuTGFuZGluZ1dyYXBwZXIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtsYW5kaW5nR2lmVXJsc1tjdXJyZW50XX1cIilgIH19PlxuXHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PFRhYkJhciAvPlxuXHRcdFx0PFMuVGl0bGU+XG5cdFx0XHRcdEluZHVzdHJ5IHJlc2VhcmNoIGJ5XG5cdFx0XHRcdDxiciAvPiBpbmR1c3RyeSBleHBlcnRzLlxuXHRcdFx0PC9TLlRpdGxlPlxuXHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdFdlIGFyZSBhIGJvdXRpcXVlIGNvbnN1bHRpbmcgZmlybSBzZXJ2aW5nIHRoZSBmaW5hbmNpYWwgaW5mb3JtYXRpb25cblx0XHRcdFx0c2VydmljZXMgaW5kdXN0cnkuIE91ciBjb25zdWx0YW50cyBhcmUgaW5kdXN0cnkgZXhwZXJ0cyBvbiBtYXJrZXQgYW5kXG5cdFx0XHRcdHJlZmVyZW5jZSBkYXRhIHByb2R1Y3RzIGFuZCBpbnZlc3RtZW50IG1hbmFnZW1lbnQgc29sdXRpb25zLlxuXHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdEFzIE5vcnRoIEFtZXJpY2EncyBsZWFkaW5nIG1hcmtldCBkYXRhIHNvbHV0aW9ucyBjb25zdWx0YW5jeSB3ZSB1bmRlcnN0YW5kXG5cdFx0XHRcdHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEgaW4gdGhlIGZpbmFuY2lhbCBtYXJrZXRzIGFuZCBnbG9iYWwgZWNvbm9teS5cblx0XHRcdDwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdDxTLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRidG5UZXh0PVwiVmlldyBSZXNlYXJjaFwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9yZXNlYXJjaCcpfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnRuVGV4dD1cIkNvbnRhY3QgdXNcIlxuXHRcdFx0XHRcdGlzRGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9jb250YWN0Jyl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdDwvUy5MYW5kaW5nV3JhcHBlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1xuXG4vLyAvc3RhdGljL2dpZnMvdHJhZmZpYy1hbmQtcGVkZXN0cmlhbnMtaW4tZnJvbnQtb2YtdG93ZXItYnJpZGdlLmdpZlxuLy8gL3N0YXRpYy9naWZzL3RvdXJpc3RzLmdpZiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgTGVhZGVyTWFya2V0RGF0YVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0bWFyZ2luOiA0MHB4IDAgNjBweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW46IDgwcHggMCA4MHB4IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHRsaW5lLWhlaWdodDogNDhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LXdpZHRoOiA3ODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEluZm9UZXh0ID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcdFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMCAwIDI0cHggMDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGB9XHRcbmBcblxuZXhwb3J0IGNvbnN0IFZpZGVvV3JhcHBlciA9IHN0eWxlZC5wYFxuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRmFjdHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0bWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tcmlnaHQ6IDQwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luLWJvdHRvbTogMzhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IE51bWJlclRleHQgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDM2cHg7XG5cdGxpbmUtaGVpZ2h0OiAzNnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRtYXJnaW46IDAgMCAxMHB4IDA7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdGZvbnQtc2l6ZTogNDhweDtcblx0bGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGB9XG5cbmBcblxuZXhwb3J0IGNvbnN0IEZhY3RzVGV4dCA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5saWdodEdyZXl9O1xuXHRtYXJnaW46IDA7XG5cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlclRleHQgPSBzdHlsZWQuYWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogIzNkMDA5OTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlO1xuXHR9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQW5pbWF0ZWRGb290ZXJMaW5rIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYW5pbWF0ZWQtZm9vdGVyLWxpbmsnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vTGVhZGVyTWFya2V0RGF0YS5zdHlsZWQnXG5cbmNvbnN0IExlYWRlck1hcmtldERhdGEgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFMuTGVhZGVyTWFya2V0RGF0YVdyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50PlxuXHRcdFx0XHQ8Uy5JbmZvV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5UaXRsZT5MZWFkZXIgaW4gbWFya2V0IGRhdGEgY29uc3VsdGluZzwvUy5UaXRsZT5cblx0XHRcdFx0XHQ8Uy5JbmZvVGV4dD5cblx0XHRcdFx0XHRcdE1hcmtldCBEYXRhIENvbXBhbnkgaXMgYSBwcm9mZXNzaW9uYWwgY29uc3VsdGluZyBmaXJtIHdpdGggZXhwZXJ0c1xuXHRcdFx0XHRcdFx0c2tpbGxlZCBpbiBtYXJrZXQgZGF0YSBwcm9kdWN0cywgc29sdXRpb25zIGFuZCBjb250cmFjdCB2ZW5kb3IgbWFuYWdlbWVudC5cblx0XHRcdFx0XHRcdFdlIGFyZSBjb21taXR0ZWQgdG8gaGVscGluZyB0ZWFtcyB1bmNvdmVyIGluc2lnaHRzIHRoYXRcblx0XHRcdFx0XHRcdGltcHJvdmUgaG93IHRoZXkgbWFuYWdlIHRoZWlyIG1hcmtldCBhbmQgcmVmZXJlbmNlIGRhdGEgcmVsYXRpb25zaGlwcy5cblx0XHRcdFx0XHQ8L1MuSW5mb1RleHQ+XG5cdFx0XHRcdFx0PFMuSW5mb1RleHQ+XG5cdFx0XHRcdFx0XHRXZSBwYXJ0bmVyIHdpdGggb3VyIGNsaWVudHMgdG8gYW5zd2VyIHRoZSBncm93aW5nIGRlbWFuZHMgb2YgdGhlaXJcblx0XHRcdFx0XHRcdGJ1c2luZXNzIGJ5IHByb3ZpZGluZyB0aGUgZXhwZXJ0aXNlIGluIHRoZSBkZXRhaWxzIHRoYXQgbGVhZCB0b1xuXHRcdFx0XHRcdFx0aW5jcmVhc2VkIHByb2ZpdGFiaWxpdHkuIFNwZWNpZmljYWxseSwgd2Ugb2ZmZXIgYSBzZXJpZXMgb2Zcblx0XHRcdFx0XHRcdGRpYWdub3N0aWMgdG9vbHMgdGhhdCBkcml2ZSBkb3duIGNvc3RzIHdoaWxlIG9wdGltaXppbmcgc2VydmljZXMuXG5cdFx0XHRcdFx0XHRMZWFybiBtb3JlIGFib3V0IGhvdyBvdXIgRGF0YSBMaWNlbnNlIENvbXBsaWFuY2UgTWFuYWdlciB0b29sIGNhblxuXHRcdFx0XHRcdFx0YmVuZWZpdCB5b3VyIGJ1c2luZXNzIGluIHRoZSB2aWRlbyBiZWxvdzpcblx0XHRcdFx0XHQ8L1MuSW5mb1RleHQ+XG5cdFx0XHRcdFx0PFMuVmlkZW9XcmFwcGVyPlxuXHRcdFx0XHRcdFx0PGlmcmFtZSBzcmM9XCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vMzg5MDM5NjA5XCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCIzNjBcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuXHRcdFx0XHRcdFx0ey8qIDxwPjxhIGhyZWY9XCJodHRwczovL3ZpbWVvLmNvbS8zODkwMzk2MDlcIj5NYXJrZXQgRGF0YSBEaWdpdGFsIENvbXBsaWFuY2U8L2E+IGZyb20gPGEgaHJlZj1cImh0dHBzOi8vdmltZW8uY29tL3VzZXIxMDgyMTY3NDhcIj5NYXJrZXQgZGF0YSBjb21wYW55PC9hPiBvbiA8YSBocmVmPVwiaHR0cHM6Ly92aW1lby5jb21cIj5WaW1lbzwvYT4uPC9wPiAqL31cblxuXHRcdFx0XHRcdDwvUy5WaWRlb1dyYXBwZXI+XG5cdFx0XHRcdDwvUy5JbmZvV3JhcHBlcj5cblx0XHRcdFx0PFMuRmFjdHNXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlByb2plY3RzQ29tcGxldGVkV3JhcHBlcj5cblx0XHRcdFx0XHRcdDxTLk51bWJlclRleHQ+MTQ3PC9TLk51bWJlclRleHQ+XG5cdFx0XHRcdFx0XHQ8Uy5GYWN0c1RleHQ+UHJvamVjdHMgY29tcGxldGVkPC9TLkZhY3RzVGV4dD5cblx0XHRcdFx0XHQ8L1MuUHJvamVjdHNDb21wbGV0ZWRXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlByb2plY3RzQ29tcGxldGVkV3JhcHBlcj5cblx0XHRcdFx0XHRcdDxTLk51bWJlclRleHQ+JDM1NE1NPC9TLk51bWJlclRleHQ+XG5cdFx0XHRcdFx0XHQ8Uy5GYWN0c1RleHQ+Q2xpZW50IGRvbGxhcnMgc2F2ZWQ8L1MuRmFjdHNUZXh0PlxuXHRcdFx0XHRcdDwvUy5Qcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXI+XG5cdFx0XHRcdDwvUy5GYWN0c1dyYXBwZXI+XG5cdFx0XHQ8L1MuQ29udGVudD5cblx0XHQ8L1MuTGVhZGVyTWFya2V0RGF0YVdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGVhZGVyTWFya2V0RGF0YVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBSZXNlYXJjaFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiAxNjBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnaC1pdGVtczogZmxleC1zdGFydDtcblx0bWFyZ2luLWJvdHRvbTogNTVweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LXdpZHRoOiA3ODBweDtcbmB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luOiAwIDAgMTNweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luOiAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6ICMzZDAwOTk7XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcblx0fVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVkQ2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FuaW1hdGVkLWNhcmQnXG5pbXBvcnQgQW5pbWF0ZWRGb290ZXJMaW5rIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYW5pbWF0ZWQtZm9vdGVyLWxpbmsnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vUmVzZWFyY2guc3R5bGVkJ1xuXG5jb25zdCBSZXNlYXJjaCA9ICh7IG9uQ2xpY2sgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTLlJlc2VhcmNoV3JhcHBlcj5cblx0XHRcdDxTLkhlYWRlcldyYXBwZXI+XG5cdFx0XHRcdDxTLkhlYWRlclRpdGxlPlJlc2VhcmNoICZhbXA7IENhc2UgU3R1ZGllczwvUy5IZWFkZXJUaXRsZT5cblx0XHRcdFx0PFMuSGVhZGVyRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0TURDIGhhcyBjb21wbGV0ZWQgZXh0ZW5zaXZlIHJlc2VhcmNoIG92ZXIgdGhlIHBhc3QgMTAgeWVhcnMuIE91ciBmaW5kaW5ncyBoYXZlIGJlZW4gbGlua2VkXG5cdFx0XHRcdFx0dG8gdGhlIHN0cmVuZ3RoIG9mIGEgZmlybXMgb3BlcmF0aW9uYWwgbWFuYWdlbWVudCwgYW5kIGNhbiBiZSB1c2VkIHRvIGltcHJvdmUgXG5cdFx0XHRcdFx0Y2FwYWJpbGl0aWVzIGFjcm9zcyBjbGllbnQgaW50ZWxsaWdlbmNlLCB0cmFkaW5nIHN0cmF0ZWdpZXMsIGFuZCBidXNpbmVzc1xuXHRcdFx0XHRcdHByb2R1Y3Rpdml0eS5cblx0XHRcdFx0PC9TLkhlYWRlckRlc2NyaXB0aW9uPlxuXHRcdFx0PC9TLkhlYWRlcldyYXBwZXI+XG5cdFx0XHQ8Uy5DYXJkQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdDxTLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHRcdDxBbmltYXRlZENhcmRcblx0XHRcdFx0XHRcdHRpdGxlPVwiRGF0YSBNYW5hZ2VtZW50IENvbXBsaWFuY2U6IFRoZSBSaWdodCB0byBBdWRpdFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cIlRIRSBSSUdIVCBUTyBBVURJVCBpcyBhIGNvbW1vbiBwaHJhc2UgdXNlZCBpbiBtb3N0IGV2ZXJ5IERhdGEgVmVuZG9yIG9yIEV4Y2hhbmdlIEFncmVlbWVudCAoRGF0YSBQcm92aWRlciBBZ3JlZW1lbnRzKS4gSXQgaXMgbmVpdGhlciBuZXcsIG1pc3VuZGVyc3Rvb2QsIG5vciBtaXNyZXByZXNlbnRlZC4gWWV0IHRoaXMgdGVybSBoYXMgd3JlYWtlZCBoYXZvYyBvZiBsYXRlLCBhcyBpdCBleHBvc2VzIHRoZSB0aHJlZSBtb2Rlcm4gZGF5IHBsYWd1ZXMgY2F1c2luZyBjb25zaWRlcmFibGUgZGlzdHJlc3MgYW1vbmdzdCBmaW5hbmNpYWwuLi5cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25DbGljaygncmlnaHRUb0F1ZGl0Jyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8QW5pbWF0ZWRDYXJkXG5cdFx0XHRcdFx0XHR0aXRsZT1cIlRoZSBWYWx1ZSBvZiBNYXJrZXQgRGF0YSBBZG1pbmlzdHJhdGlvbjogVHJhbnNwYXJlbmN5LCBBY2NvdW50YWJpbGl0eSAmIEdvdmVybmFuY2VcIlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJBUyBGSU5BTkNJQUwgRklSTVMgR1JBUFBMRSB3aXRoIGluY3JlYXNpbmcgZGVtYW5kcyBmb3IgbWFya2V0IGRhdGEsIGRlYWxpbmcgd2l0aCB0aGUgbnVtYmVyIGFuZCBjb21wbGV4aXR5IG9mIG1hcmtldCBkYXRhIGxpY2Vuc2VzIGFuZCBzdWJzY3JpcHRpb25zIGNhbiBiZSBvdmVyd2hlbG1pbmcuIFRoZSB2b2x1bWUgYW5kIHZhcmlldHkgY2hhbGxlbmdlcyB0aGVpciBhYmlsaXR5IHRvIGVmZmVjdGl2ZWx5IG1hbmFnZSBjb3N0cywgY29udHJvbCB1c2VyLWFjY2VzcywgbW9uaXRvciB1c2FnZSwgYW5kIHByb2R1Y2UgLi4uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2FjY291bnRhYmlsaXR5QW5kR292ZXJuYW5jZScpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PEFuaW1hdGVkQ2FyZFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJNREMgRm9yZWNhc3RzIDEwLTEzJSBJbmNyZWFzZSBpbiBEYXRhIFNwZW5kXCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPVwiV0lUSE9VVCBBTlkgQ0hBTkdFIHRvIGNvbnN1bXB0aW9uLCBzZXJ2aWNlIG1peCwgb3IgZXZlbiBhbm51YWwgcHJpY2UgaW5jcmVhc2VzLCBDYW5hZGlhbi1iYXNlZCBmaW5hbmNpYWwgc2VydmljZXMgZmlybXMgY2FuIGV4cGVjdCBhICsxMCUgcHJpY2UgaW5jcmVhc2UgaW4gdGhlaXIgTWFya2V0IGFuZCBSZWZlcmVuY2UgRGF0YSBzcGVuZCBmb3IgMjAxNC4gVG8gdW5kZXJzdGFuZCB3aHksIGZpcm1zIG5lZWQgb25seSBsb29rIHRvIHRoZSBmYWxsIG9mIHRoZSBDQUQkIHJlbGF0aXZlIHRvIHRoZSBVUyQgZm9yIHRoZSBjaGFuZ2UgdGhhdCB3aWxsIGltcGFjdCB0aGVpciBnZW5lcmFsIGxlZGdlcnMuLi5cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gb25DbGljaygnZGF0YVNwZW5kJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0PC9TLkNhcmRDb250ZW50V3JhcHBlcj5cblx0XHRcdDxBbmltYXRlZEZvb3RlckxpbmsgbWVzc2FnZT1cIlZpZXcgYWxsIG9mIG91ciByZXNlYXJjaFwiIGhyZWY9XCIvcmVzZWFyY2hcIiAvPlxuXHRcdDwvUy5SZXNlYXJjaFdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzZWFyY2hcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgU2VydmljZXNXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0bWFyZ2luLWJvdHRvbTogODNweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdG1hcmdpbi1ib3R0b206IDQzcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDQ5cHg7XG4gICAgbWF4LXdpZHRoOiA3ODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlclRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRlckRlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwO1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tYm90dG9tOiAwO1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDI2cHg7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiA0OCU7XG4gICAgbWFyZ2luLWJvdHRvbTogNjRweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRJbWFnZSA9IHN0eWxlZC5pbWdgXG5cdG1hcmdpbi10b3A6IDZweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0d2lkdGg6IDEwMHB4O1xuXHRoZWlnaHQ6IDEwMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIGB9XG5cbiAgJHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdHdpZHRoOiAxMjBweDtcblx0aGVpZ2h0OiAxMjBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LXdpZHRoOiAzODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW4tYm90dG9tOiA3cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMDtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyVGV4dCA9IHN0eWxlZC5hYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjM2QwMDk5O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luLXRvcDogLTk4cHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQW5pbWF0ZWRGb290ZXJMaW5rIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYW5pbWF0ZWQtZm9vdGVyLWxpbmsnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vU2VydmljZXMuc3R5bGVkJ1xuXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5TZXJ2aWNlc1dyYXBwZXI+XG5cdFx0XHQ8Uy5IZWFkZXJXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5IZWFkZXJUaXRsZT5Ib3cgb3VyIHNlcnZpY2VzIGFkZCBpbnNpZ2h0IHRvIHlvdXIgYnVzaW5lc3M8L1MuSGVhZGVyVGl0bGU+XG5cdFx0XHRcdDxTLkhlYWRlckRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFRha2luZyBCZW5jaG1hcmtpbmcgdG8gYW4gZW50aXJlbHkgZGlmZmVyZW50IGxldmVsLCBvdXIgbWFya2V0aW5nIGRhdGFcblx0XHRcdFx0XHRzZXJ2aWNlcyBvZmZlcnMgeW91IGV4Y2VwdGlvbmFsIGluc2lnaHQgaW50byBkYXRhIGJlaW5nIGNvbnN1bWVkIGJ5XG5cdFx0XHRcdFx0dGhlIGNhcGl0YWwgbWFya2V0cyBhbmQgd2VhbHRoIGluZHVzdHJ5LiBXaXRoIG91ciBjdXJyZW50IHNvbHV0aW9ucywgeW91IFxuXHRcdFx0XHRcdGdhaW4gdGhlIGluc2lnaHRzIHRvXG5cdFx0XHRcdFx0dGFrZSB5b3VyIHN0cmF0ZWd5IHRvIHRoZSBuZXh0IGxldmVsLlxuXHRcdFx0XHQ8L1MuSGVhZGVyRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuSGVhZGVyV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXMucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXNAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tYW5hZ2VkLXNlcnZpY2VzQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXNAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdHdpZHRoPVwiMTc3XCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjE3N1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Uy5DYXJkQ29udGVudD5cblx0XHRcdFx0XHRcdDxTLkNhcmRUaXRsZT5UcmFkaW5nIHRlY2hub2xvZ3kgbWFuYWdlZCBzZXJ2aWNlcyBhbmQgcHJvZHVjdHM8L1MuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PFMuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0T3VyIGNsaWVudHMgYXJlIGNyaXRpY2FsIGFib3V0IHByb3ZpZGluZyB0aGUgcmlnaHQgZGF0YSB0byB0aGVpciBzdGFrZWhvbGRlcnMuIFRoYXQmIzM5O3Mgd2h5XG5cdFx0XHRcdFx0XHRvdXIgcHJvcHJpZXRhcnkgdGVjaG5vbG9neSBhbmQgZXhwZXJ0aXNlIGlzIHBpdm90YWwgaW4gcmVwb3J0aW5nIGhvdyBkYXRhIGlzIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRhbmQgcmVwbGljYXRlZCBhY3Jvc3MgYnVzaW5lc3MgYXBwbGljYXRpb25zIGFsbG93aW5nIHVzIHRvIGFjY3VyYXRlbHkgYW5kIHJhcGlkbHlcblx0XHRcdFx0XHRcdGFzc2VzcyBhbmQgcHJlZGljdCB3aGVyZSBmaXJtcyBjYW4gb3B0aW1pemUgYW5kIHJpZ2h0IHNpemUgdGhlaXIgZGF0YSBuZWVkcy5cblx0XHRcdFx0XHRcdDwvUy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0PC9TLkNhcmRDb250ZW50PlxuXHRcdFx0XHQ8L1MuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdDxTLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLkNhcmRJbWFnZVxuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvbWVhc3VyZS1jb21wYXJlLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9tZWFzdXJlLWNvbXBhcmVAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tZWFzdXJlLWNvbXBhcmVAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvbWVhc3VyZS1jb21wYXJlQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0XHR3aWR0aD1cIjE3N1wiXG5cdFx0XHRcdFx0XHRoZWlnaHQ9XCIxNzdcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFMuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkVGl0bGU+TWVhc3VyZSBhbmQgY29tcGFyZSB5b3VyIGV4cGVuc2UgbWFuYWdlbWVudCBjYXBhYmlsaXRpZXM8L1MuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PFMuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRXZSBoYXZlIGRvbmUgZXh0ZW5zaXZlIHJlc2VhcmNoIG92ZXIgdGhlIHBhc3QgMTAgeWVhcnMgdGhyb3VnaCBvdXJcblx0XHRcdFx0XHRcdFx0cXVhbGl0YXRpdmUgYW5kIHF1YW50aXRhdGl2ZSBhbmFseXRpY3MuIEFzIGEgcmVzdWx0LCB3ZSd2ZVxuXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYW4gYXBwcm9hY2ggdG8gY29tcGFyZSBpbmRpdmlkdWFsIGNvbXBhbnkgZGF0YSB0byBvdXJcblx0XHRcdFx0XHRcdFx0cHJvcHJpZXRhcnkgaW5kdXN0cnkgYmVuY2htYXJrLiBPdXIgZmluZGluZ3MgaGF2ZSBiZWVuIGxpbmtlZCB0b1xuXHRcdFx0XHRcdFx0XHR0aGUgc3RyZW5ndGggb2YgYSBmaXJtcyBvcGVyYXRpb25hbCBtYW5hZ2VtZW50IGFuZCBpdHMgc2hvcnQgYW5kXG5cdFx0XHRcdFx0XHRcdGxvbmcgdGVybSBpbnZlc3RtZW50IHN0cmF0ZWd5LlxuXHRcdFx0XHRcdFx0PC9TLkNhcmREZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8L1MuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuQ2FyZEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tYXRjaC1kZW1hbmQucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21hdGNoLWRlbWFuZEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21hdGNoLWRlbWFuZEAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tYXRjaC1kZW1hbmRAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdHdpZHRoPVwiMTc3XCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjE3N1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Uy5DYXJkQ29udGVudD5cblx0XHRcdFx0XHRcdDxTLkNhcmRUaXRsZT5cblx0XHRcdFx0XHRcdFx0TWF0Y2ggeW91ciBzdHJhdGVneSB0byB5b3VyIGJ1c2luZXNzIG5lZWRzXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PFMuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRXaXRoIGV4cGVydCBrbm93bGVkZ2Ugb2YgYm90aCB5b3VyIGluZHVzdHJ5IGFuZCB5b3VyIGN1c3RvbWVy4oCZc1xuXHRcdFx0XHRcdFx0XHRuZWVkcywgeW91IGNhbiBrZWVwIHlvdXIgZGF0YSBjb25zdW1wdGlvbiBhY3Rpdml0aWVzIGFwcHJvcHJpYXRlXG5cdFx0XHRcdFx0XHRcdHdoaWxlIG9wdGltaXppbmcgeW91ciBjb21tZXJjaWFsIG9ibGlnYXRpb25zLlxuXHRcdFx0XHRcdFx0PC9TLkNhcmREZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8L1MuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuQ2FyZEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9iZW5jaG1hcmsucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2JlbmNobWFya0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2JlbmNobWFya0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9iZW5jaG1hcmtAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdHdpZHRoPVwiMTc3XCJcblx0XHRcdFx0XHRcdGhlaWdodD1cIjE3N1wiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Uy5DYXJkQ29udGVudD5cblx0XHRcdFx0XHRcdDxTLkNhcmRUaXRsZT5DYXBpdGFsIG1hcmtldCBleHBlbnNlIG1hbmFnZW1lbnQgYmVuY2htYXJraW5nPC9TLkNhcmRUaXRsZT5cblx0XHRcdFx0XHRcdDxTLkNhcmREZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRcdE91ciBiZW5jaG1hcmsgYWRkcyBleHBvbmVudGlhbCB2YWx1ZSB0aHJvdWdoIGl0cyBjYXRlZ29yaXphdGlvbiBvZiBwcm9kdWN0cyBcblx0XHRcdFx0XHRcdGFuZCBzZXJ2aWNlczogdGVjaG5vbG9neSwgaW52ZXN0bWVudHMsIHByb2R1Y3Rpdml0eSwgb3BlcmF0aW9ucywgaHVtYW4gXG5cdFx0XHRcdFx0XHRyZXNvdXJjZSBzdHJhdGVnaWVzLCBhbmQgYSBob3N0IG9mIG90aGVyIGJ1c2luZXNzIGZ1bmN0aW9ucy4gSXTigJlzIGEgcGVlciBcblx0XHRcdFx0XHRcdGdyb3VwIGFzc2Vzc21lbnQgb2Ygb3VyIGNsaWVudOKAmXMgMTYwIGRhdGEgYWN0aXZpdGllcyBhZ2FpbnN0IGEgc2V0IG9mIGJlc3QgXG5cdFx0XHRcdFx0XHRwcmFjdGljZXMuIE91ciBiZW5jaG1hcmsgaGFzIGluc3BpcmVkIGRpc2N1c3Npb25zIHRoYXQgZXhwbG9yZSBxdWFsaXRhdGl2ZVxuXHRcdFx0XHRcdFx0IG1lYXN1cmVzIOKAkyBlbmhhbmNpbmcgcGVyZm9ybWFuY2UgYWdhaW5zdCBiZW5jaG1hcmtzLlxuXHRcdFx0XHRcdFx0PC9TLkNhcmREZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8L1MuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHRcdDxBbmltYXRlZEZvb3Rlckxpbmtcblx0XHRcdFx0bWVzc2FnZT1cIkdldCBpbiB0b3VjaCB0byBsZWFybiBtb3JlXCJcblx0XHRcdFx0aHJlZj1cIi9jb250YWN0XCJcblx0XHRcdC8+XG5cdFx0PC9TLlNlcnZpY2VzV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlc1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmNvbnN0IElDT05fTUFSR0lOID0gJzM1cHgnXG5cbmV4cG9ydCBjb25zdCBXaHlNZGNXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogY2VudGVyXG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cblxuICAke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWAgICAgIFxuXHRcdG1heC13aWR0aDogNzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRtYXJnaW46IDAgMCAxNHB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgICBtYXJnaW46IDAgMCAxN3B4IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkaW5nRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRsaW5lLWhlaWdodDogMzBweDtcbmB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1ib3R0b206IDI3cHg7XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgd2lkdGg6IDQ4JTtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRUaXRsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFRpdGxlSWNvbiA9IHN0eWxlZC5pbWdgXG5cdGhlaWdodDogMjdweDtcblx0d2lkdGg6IDI3cHg7XG5cdG1hcmdpbi1yaWdodDogOHB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDAgMCAxMHB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMCAwIDAgJHtJQ09OX01BUkdJTn07XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICBgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1doeU1kYy5zdHlsZWQnXG5cbmNvbnN0IGRlc2NyaXB0aW9uRGF0YSA9IFtcblx0e1xuXHRcdHRpdGxlOiAnVGhlIHJpZ2h0IHBlb3BsZSwgc29sdmluZyB0aGUgcmlnaHQgcHJvYmxlbXMgd2l0aCBwYXNzaW9uJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdPdXIgcGVvcGxlIGJyaW5nIGEgbWl4IG9mIGV4cGVydGlzZSB0byBzb2x2ZSBwcm9ibGVtcyB3aXRoIGEgZGlmZmVyZW50LCBtb3JlIGRlZGljYXRlZCBtaW5kc2V0LCBkZXZpc2luZyBwb3dlcmZ1bCB0b29scyBhbmQgc29sdXRpb25zIGZvciBvdXIgY2xpZW50c+KAmSB0b3VnaGVzdCBjaGFsbGVuZ2VzLidcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnSGlnaGx5IGVmZmVjdGl2ZSBtYXJrZXQgZGF0YSBnb3Zlcm5hbmNlIHN0cnVjdHVyZScsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHQnT3VyIGFwcHJvYWNoIGJyaW5ncyB0b2dldGhlciBhIGhpZ2hseSBlZmZlY3RpdmUgZGlzY2lwbGluZSB0aGF0IGZvY3VzZXMgb24gcHJvY2VzcywgY29udHJvbHMgYW5kIHByb2Nlc3MuJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdXZeKAmXZlIHNhdmVkIHVwd2FyZHMgb2YgMzUlIG9uIHRvdGFsIGRhdGEgc3BlbmQgZm9yIG91ciBjbGllbnRzJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdBdCB0aGUgZW5kIG9mIHRoZSBkYXksIGl04oCZcyBvdXIgY2xpZW50cyBib3R0b20gbGluZSB0aGF0IHdlIHRha2UgY2FyZSBvZiwgYW5kIHRoZSByZXN1bHRzIHNwZWFrIGZvciB0aGVtc2VsdmVzLidcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnTWFya2V0IGRhdGEgYmVuY2htYXJraW5nIHdpdGggcHJvdmVuIHJlc3VsdHMnLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0J1dlIGNyZWF0ZSByZXN1bHRzIHRoYXQgYXJlIHByZWRpY2F0ZWQgb24gb3VyIHN0cmVuZ3RocyBzdXJyb3VuZGluZyBiZW5jaG1hcmtpbmcgTWFya2V0IERhdGEgVmVuZG9ycy4nXG5cdH1cbl1cblxuY29uc3QgQ2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdDxTLkNhcmRUaXRsZVdyYXBwZXI+XG5cdFx0XHRcdDxTLkNhcmRUaXRsZUljb25cblx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9jaGVja21hcmsucG5nXCJcblx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9jaGVja21hcmtAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9jaGVja21hcmtAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvY2hlY2ttYXJrQDN4LnBuZyAzeFwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxTLkNhcmRUaXRsZT57dGl0bGV9PC9TLkNhcmRUaXRsZT5cblx0XHRcdDwvUy5DYXJkVGl0bGVXcmFwcGVyPlxuXHRcdFx0PFMuQ2FyZERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0KVxufVxuXG5jb25zdCBXaHlNZGMgPSAoKSA9PiB7XG5cdGNvbnN0IHJlbmRlckRlc2NyaXB0aW9uID0gKCkgPT4ge1xuXHRcdHJldHVybiBkZXNjcmlwdGlvbkRhdGEubWFwKChkYXRhKSA9PiB7XG5cdFx0XHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9ID0gZGF0YVxuXHRcdFx0cmV0dXJuIDxDYXJkIGtleT17dGl0bGV9IHRpdGxlPXt0aXRsZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPlxuXHRcdH0pXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8Uy5XaHlNZGNXcmFwcGVyPlxuXHRcdFx0PFMuSGVhZGluZ1dyYXBwZXI+XG5cdFx0XHRcdDxTLkhlYWRpbmdUaXRsZT5XaHkgTWFya2V0IERhdGEgQ29tcGFueT88L1MuSGVhZGluZ1RpdGxlPlxuXHRcdFx0XHQ8Uy5IZWFkaW5nRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0RnJvbSBpbmNlcHRpb24sIG91ciBmb2N1cyBoYXMgYmVlbiBvbiB0aGUgY29tcGxleGl0aWVzIG9mXG5cdFx0XHRcdFx0bWFya2V0IGRhdGEgYW5kIHRoZSBjcml0aWNhbCB0aGlyZC1wYXJ0eSByZWxhdGlvbnNoaXBzIGJ1aWx0IHRocm91Z2hcblx0XHRcdFx0XHRkYXRhIHByb3ZpZGVycyB3aXRoaW4gdGhlIENhcGl0YWwgTWFya2V0cyBhbmQgV2VhbHRoIE1hbmFnZW1lbnRcblx0XHRcdFx0XHRpbmR1c3RyaWVzLlxuXHRcdFx0XHQ8L1MuSGVhZGluZ0Rlc2NyaXB0aW9uPlxuXHRcdFx0PC9TLkhlYWRpbmdXcmFwcGVyPlxuXHRcdFx0PFMuQ29udGVudD57cmVuZGVyRGVzY3JpcHRpb24oKX08L1MuQ29udGVudD5cblx0XHQ8L1MuV2h5TWRjV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaHlNZGNcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgV29ya2VkV2l0aFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0bWFyZ2luLWJvdHRvbTogMTIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAwIDIwcHggMDtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQ4cHg7XG5cdGB9XG5cblxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHRtYXJnaW46IDAgMCA0NnB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRtYXgtd2lkdGg6IDc4MHB4O1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiA0N3B4O1xuXHRib3gtc2hhZG93OiAwIDhweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5gXG5cbmV4cG9ydCBjb25zdCBMb2dvQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4OiAxO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0d2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiA0OCU7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cdHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG5cblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHRtYXJnaW4tYm90dG9tOiAwOyBcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG5cdFx0d2lkdGg6IDI1JTtcblx0YH1cblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG5cdGB9XG5cbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENhcm91c2VsSXRlbSB9IGZyb20gJ3JlYWN0c3RyYXAnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcbmltcG9ydCBDb21wYW55Q2FyZCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvbXBhbnktY2FyZCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9Xb3JrZWRXaXRoLnN0eWxlZCdcblxuY29uc3QgQ09NUEFOWV9EQVRBID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdDYW5hZGEgUGVuc2lvbiBQbGFuIEludmVzdG1lbnQgQm9hcmQnLFxuXHRcdGRlc2NyaXB0aW9uOiBg4oCcTURDIGlkZW50aWZpZWQgYW5kIHJlYWxpemVkIHZlbmRvciBjb3N0IHNhdmluZ3Mgb2YgMTIlIG9mIG91ciBzcGVuZCwgYW5kIHRoZW4gZGV2ZWxvcGVkIGEgdGFyZ2V0IHN0YXRlIG9yZ2FuaXphdGlvbiB3aXRoIGNhcGFiaWxpdGllcyB0byBlZmZlY3RpdmVseSBtYW5hZ2UgbWFya2V0IGRhdGEgcHJvZHVjdHMsIGNvbnN1bXB0aW9uLCBjb3N0cyBhbmQgdmVuZG9yc+KAnWAsXG5cdFx0cm9sZTogJ01hcmMgT2RobyDigJMgSGVhZCBvZiBEYXRhIE1hbmFnZW1lbnQnLFxuXHRcdGNvbXBhbnk6ICdQU1AnLFxuXHRcdGltYWdlVXJsOiAnY3BwaWItY2Fyb3VzZWwnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1BTUCBJbnZlc3Rpc3NlbWVudHMnLFxuXHRcdGRlc2NyaXB0aW9uOiBg4oCcVGhlIHRlYW0gYXQgTWFya2V0IERhdGEgQ29tcGFueSBpcyBncmVhdCB0byB3b3JrIHdpdGguIEVhY2ggY29uc3VsdGFudCBoYXMgdGhlaXIgb3duIHN0cmVuZ3RocyBhbmQgd2Vha25lc3NlcywgYW5kIGFyZSBncmVhdCBhdCB3aGF0IHRoZXkgZG8uIEluIG15IGJvb2ssIEkgaGlnaGx5IHJlY29tbWVuZCB0aGUgZW50aXJlIHRlYW0gYXQgTURDLuKAnWAsXG5cdFx0cm9sZTogJ0FsZXggRGlDcmlzdG9mYW5vLCBEaXJlY3RvciBvZiBNYXJrZXQgRGF0YScsXG5cdFx0Y29tcGFueTogJ0F2aXZhJyxcblx0XHRpbWFnZVVybDogJ3BzcC1jYXJvdXNlbCdcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnQXZpdmEgSW52ZXN0b3JzJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnFJvYmVydCBhbmQgaGlzIHRlYW0gYnJvdWdodCB0aGUgcmlnaHQgZXhwZXJ0aXNlIHRvIHRoZSBqb2IsIG1ha2luZyB0aGUgdHJhbnNpdGlvbmFsIHByb2dyYW0gZWFzaWVyIHRvIG1hbmFnZS4gTURD4oCZcyBhcHByb2FjaCB0byBtYXJrZXQgZGF0YSBzdXBwb3J0ZWQgb3VyIEdsb2JhbCBvcGVyYXRpb25zIGFuZCBwcm92aWRlZCBhIGNsZWFyIGxpbmUgb2Ygc2lnaHQgdG8gb3VyIHZlbmRvciBzcGVuZC7igJ1gLFxuXHRcdHJvbGU6ICdLZWxseSBNY01hbmlzLCBIZWFkIG9mIE9wZXJhdGlvbnMnLFxuXHRcdGNvbXBhbnk6ICdTd2lzcyBSZScsXG5cdFx0aW1hZ2VVcmw6ICdhdml2YS1jYXJvdXNlbCdcblx0fSxcblx0e1xuXHRcdHRpdGxlOiAnU3dpc3MgUmUnLFxuXHRcdGRlc2NyaXB0aW9uOiBg4oCcTURD4oCZcyBwcm9kdWN0IEtpYXJv4oCZcyBvdmVyc3BlbmQgcmVwb3J0IGNsZWFybHkgYXJ0aWN1bGF0ZWQgd2hlcmUgQmxvb21iZXJnIGRhdGEgd2FzIGJlaW5nIHJlcGxpY2F0ZWQgd2l0aGluIG91ciB0ZWNobm9sb2d5IGVudmlyb3JtZW50LiBBcyBhIHJlc3VsdCB3ZSBjbG9zZWQgZG93biBzZXZlcmFsIGpvYnMgdGhhdCBsZWFkIHRvICQ0NTAsMDAwIGluIGNvc3Qgc2F2aW5ncy7igJ1gLFxuXHRcdHJvbGU6ICdFcmljIEtlbWVueSwgVmljZSBQcmVzaWRlbnQsIEdyb3VwIEFzc2V0IE1hbmFnZW1lbnQnLFxuXHRcdGNvbXBhbnk6ICdDUFBJQicsXG5cdFx0aW1hZ2VVcmw6ICdzd2lzcy1yZS1jYXJvdXNlbCdcblx0fVxuXVxuXG5jb25zdCBXb3JrZWRXaXRoID0gKCkgPT4ge1xuXHRjb25zdCBbYWN0aXZlSW5kZXgsIHNldEFjdGl2ZUluZGV4XSA9IHVzZVN0YXRlKDApXG5cdGxldCBhbmltYXRpbmcgPSBmYWxzZVxuXG5cdGNvbnN0IG9uRXhpdGluZyA9ICgpID0+IHtcblx0XHRhbmltYXRpbmcgPSB0cnVlXG5cdH1cblxuXHRjb25zdCBvbkV4aXRlZCA9ICgpID0+IHtcblx0XHRhbmltYXRpbmcgPSBmYWxzZVxuXHR9XG5cblx0Y29uc3QgbmV4dCA9ICgpID0+IHtcblx0XHRpZiAoYW5pbWF0aW5nKSB7XG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cdFx0Y29uc3QgbmV4dEluZGV4ID1cblx0XHRcdGFjdGl2ZUluZGV4ID09PSBDT01QQU5ZX0RBVEEubGVuZ3RoIC0gMSA/IDAgOiBhY3RpdmVJbmRleCArIDFcblx0XHRzZXRBY3RpdmVJbmRleChuZXh0SW5kZXgpXG5cdH1cblxuXHRjb25zdCBjYXJvdXNlbEl0ZW1zID0gQ09NUEFOWV9EQVRBLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Q2Fyb3VzZWxJdGVtXG5cdFx0XHRcdG9uRXhpdGluZz17b25FeGl0aW5nfVxuXHRcdFx0XHRvbkV4aXRlZD17b25FeGl0ZWR9XG5cdFx0XHRcdGtleT17aXRlbS5jb21wYW55fVxuXHRcdFx0PlxuXHRcdFx0XHQ8Q29tcGFueUNhcmRcblx0XHRcdFx0XHR0aXRsZT17aXRlbS50aXRsZX1cblx0XHRcdFx0XHRkZXNjcmlwdGlvbj17aXRlbS5kZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRyb2xlPXtpdGVtLnJvbGV9XG5cdFx0XHRcdFx0Y29tcGFueT17aXRlbS5jb21wYW55fVxuXHRcdFx0XHRcdGltYWdlVXJsPXtpdGVtLmltYWdlVXJsfVxuXHRcdFx0XHRcdG9uTmV4dD17bmV4dH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvQ2Fyb3VzZWxJdGVtPlxuXHRcdClcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxTLldvcmtlZFdpdGhXcmFwcGVyPlxuXHRcdFx0PFMuVGl0bGU+V2hvIHdl4oCZdmUgd29ya2VkIHdpdGg8L1MuVGl0bGU+XG5cdFx0XHQ8Uy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0T3VyIGNvbnN1bHRhbnRzIGFyZSBpbmR1c3RyeSBleHBlcnRzIGluIG1hcmtldCBhbmQgcmVmZXJlbmNlIGRhdGFcblx0XHRcdFx0cHJvZHVjdHMsIGFzIHdlbGwgYXMgaW52ZXN0bWVudCBtYW5hZ2VtZW50IHNvbHV0aW9ucy4gV2UgZGVsaXZlciByZXN1bHRzIHRoYXRcblx0XHRcdFx0bWFrZSBhIGRpZmZlcmVuY2UuXG5cdFx0XHQ8L1MuRGVzY3JpcHRpb24+XG5cdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PENhcm91c2VsXG5cdFx0XHRcdFx0YWN0aXZlSW5kZXg9e2FjdGl2ZUluZGV4fVxuXHRcdFx0XHRcdG5leHQ9e25leHR9XG5cdFx0XHRcdFx0cHJldmlvdXM9eygpID0+IHt9fVxuXHRcdFx0XHRcdGludGVydmFsPXtmYWxzZX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdHtjYXJvdXNlbEl0ZW1zfVxuXHRcdFx0XHQ8L0Nhcm91c2VsPlxuXHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0PFMuTG9nb0NvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Mb2dvV3JhcHBlcj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9jcHBpYi5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvY3BwaWJAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9jcHBpYkAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvY3BwaWJAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdDxTLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3BzcC5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvcHNwQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvcHNwQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9wc3BAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdDxTLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2aXZhLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9hdml2YUAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2F2aXZhQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9hdml2YUAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5Mb2dvV3JhcHBlcj5cblx0XHRcdFx0PFMuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvc3dpc3MtcmUucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL3N3aXNzLXJlQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvc3dpc3MtcmVAMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL3N3aXNzLXJlQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkxvZ29XcmFwcGVyPlxuXHRcdFx0PC9TLkxvZ29Db250ZW50V3JhcHBlcj5cblx0XHQ8L1MuV29ya2VkV2l0aFdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya2VkV2l0aFxuIiwiZXhwb3J0IGNvbnN0IEVNQUlMX0VORFBPSU5UID1cblx0J2h0dHBzOi8vbWFya2V0LWRhdGEtY29tcGFueS1zZXJ2ZXIuaGVyb2t1YXBwLmNvbS9lbWFpbCdcbiIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBFTUFJTF9FTkRQT0lOVCB9IGZyb20gJy4vYXBpRW5kcG9pbnRzJ1xuXG5leHBvcnQgY29uc3Qgc2VuZEVtYWlsID0gYXN5bmMgKHBheWxvYWQpID0+IHtcblx0dHJ5IHtcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEVNQUlMX0VORFBPSU5ULCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRcdFx0QWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcdH0sXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxuXHRcdH0pXG5cdFx0Y29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG5cdFx0cmV0dXJuIHJlc3BvbnNlRGF0YVxuXHR9IGNhdGNoIChlcnIpIHtcblx0XHR0aHJvdyBlcnJcblx0fVxufVxuIiwiZXhwb3J0IGNvbnN0IFVTRVJfU0lHTkVEX1VQID0gJ1VTRVJfU0lHTkVEX1VQJ1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVTRVJfU0lHTkVEX1VQIH0gZnJvbSAnLi9hY3Rpb25UeXBlcydcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cblxuY29uc3QgU3RvcmVDb250ZXh0ID0gY3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUpXG5cbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgVVNFUl9TSUdORURfVVA6XG5cdFx0XHRyZXR1cm4geyB1c2VyOiBhY3Rpb24ucGF5bG9hZCB9XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZVxuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBTdG9yZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodXNlclJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcblx0cmV0dXJuIChcblx0XHQ8U3RvcmVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L1N0b3JlQ29udGV4dC5Qcm92aWRlcj5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgdXNlU3RvcmUgPSAoc3RvcmUpID0+IHtcblx0Y29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoU3RvcmVDb250ZXh0KVxuXHRyZXR1cm4geyBzdGF0ZSwgZGlzcGF0Y2ggfVxufVxuIiwiLy8gUmVzZWFyY2hcbmNvbnN0IHJpZ2h0VG9BdWRpdFBkZlBhdGggPVxuXHQnL3N0YXRpYy9wZGZzL0RhdGEtTWFuYWdtZW50LUNvbXBsaWFuY2Utd2h5LWZpcm1zLWFyZS1BdWRpdGVkLXZGaW5hbC5wZGYnXG5jb25zdCBpZGVudGl0eUNyaXNpc1BkZlBhdGggPVxuXHQnL3N0YXRpYy9wZGZzL01hcmtldC1EYXRhLU1hbmFnZW1lbnQtSWRlbnRpdHktQ3Jpc2lzLXZhbHVlLXByb3AucGRmJ1xuY29uc3QgbWF0dXJpbmdBcnRQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9NYXJrZXQtRGF0YS1NYW5hZ2VtZW50LU1hdHVyaXR5LUN1cnZlLUZpbmFsLnBkZidcbmNvbnN0IGFjY291bnRhYmlsaXR5QW5kR292ZXJuYW5jZVBkZlBhdGggPVxuXHQnL3N0YXRpYy9wZGZzL1ZhbHVlLW9mLU1hcmtldC1EYXRhLUFkbWluLUV4ZWMtU3VtbWFyeS12MjdKdW4xNi5wZGYnXG5jb25zdCBkYXRhU3BlbmRQZGZQYXRoID0gJy9zdGF0aWMvcGRmcy9GWC1JbXBhY3QtTUQtc3BlbmQtMi5wZGYnXG5cbi8vIENhc2UgU3R1ZGllc1xuY29uc3QgY2FzZVN0dWRpZXNQcHRQYXRoID0gJy9zdGF0aWMvcGRmcy9NREMtY2FzZS1zdHVkaWVzLnBwdHgnXG5cbi8vIFdoaXRlIFBhcGVyc1xuY29uc3Qgcmlza0ZhY3RvcnNQZGZQYXRoID0gJy9zdGF0aWMvcGRmcy9VbmNvdmVyaW5nX0ZSVEJfUmlza19GYWN0b3JzLnBkZidcbmNvbnN0IHJpc2tGcmFtZXdvcmtQZGZQYXRoID0gJy9zdGF0aWMvcGRmcy9mcnRiLXdoaXRlcGFwZXItdjItMDgxNTE5LnBkZidcblxuLy8gU3VydmV5c1xuY29uc3Qgc3VydmV5SW5zaWdodHNQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9NYXJrZXQtRGF0YS1TdXJ2ZXktSW5zaWdodHMtMjAxNy5wZGYnXG5cbmNvbnN0IHBkZk1hcHBlciA9IHtcblx0cmlnaHRUb0F1ZGl0OiByaWdodFRvQXVkaXRQZGZQYXRoLFxuXHRpZGVudGl0eUNyaXNpczogaWRlbnRpdHlDcmlzaXNQZGZQYXRoLFxuXHRtYXR1cmluZ0FydDogbWF0dXJpbmdBcnRQZGZQYXRoLFxuXHRhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2U6IGFjY291bnRhYmlsaXR5QW5kR292ZXJuYW5jZVBkZlBhdGgsXG5cdGRhdGFTcGVuZDogZGF0YVNwZW5kUGRmUGF0aCxcblx0cmlza0ZhY3RvcnM6IHJpc2tGYWN0b3JzUGRmUGF0aCxcblx0Y2FzZVN0dWRpZXM6IGNhc2VTdHVkaWVzUHB0UGF0aCxcblx0c3VydmV5SW5zaWdodHM6IHN1cnZleUluc2lnaHRzUGRmUGF0aCxcblx0cmlza0ZyYW1ld29yazogcmlza0ZyYW1ld29ya1BkZlBhdGhcbn1cblxuZXhwb3J0IGRlZmF1bHQgcGRmTWFwcGVyXG4iLCJleHBvcnQgY29uc3QgdmFsaWRhdGVFbWFpbCA9IChlbWFpbCkgPT4ge1xuXHR2YXIgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvXG5cdHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSlcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc29jaWFsLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludFwiKTsiXSwic291cmNlUm9vdCI6IiJ9