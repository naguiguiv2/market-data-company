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
/*! exports provided: AnimatedCard, AnimatedFooterLink, BioCard, Button, CompanyCard, ContactFooter, ContactForm, Footer, HamburgerMenuContent, Input, LabelWithArrow, Layout, ListItem, Modal, ResearchPdfForm, SocialIcon, SolutionsDropdownMenu, StartDownloadForm, TabBar, TextField, ThankYou, TickerTape */
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

/* harmony import */ var _solutions_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./solutions-dropdown-menu */ "./components/solutions-dropdown-menu/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SolutionsDropdownMenu", function() { return _solutions_dropdown_menu__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _start_download_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./start-download-form */ "./components/start-download-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartDownloadForm", function() { return _start_download_form__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _tab_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tab-bar */ "./components/tab-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _tab_bar__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./textfield */ "./components/textfield/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _textfield__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _thank_you__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./thank-you */ "./components/thank-you/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return _thank_you__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _ticker_tape__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ticker-tape */ "./components/ticker-tape/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TickerTape", function() { return _ticker_tape__WEBPACK_IMPORTED_MODULE_21__["default"]; });
























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

/***/ "./components/solutions-dropdown-menu/index.js":
/*!*****************************************************!*\
  !*** ./components/solutions-dropdown-menu/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/components/solutions-dropdown-menu/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import * as S from './SolutionsDropdownMenu.styled'

const SolutionsDropdownMenu = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SolutionsDropdownMenu);

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
/*! exports provided: Wrapper, MobileTabWrapper, TabWrapper, Tab, DropDown, DropDownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileTabWrapper", function() { return MobileTabWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabWrapper", function() { return TabWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDown", function() { return DropDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownItem", function() { return DropDownItem; });
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
const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__DropDown",
  componentId: "sc-13utfq2-4"
})(["display:flex;flex-direction:column;"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "TabBarstyled__DropDownItem",
  componentId: "sc-13utfq2-5"
})(["position:absolute;height:40px;width:160px;"]);

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
}, {
  href: '/solutions',
  tabName: 'Solutions'
}, {
  href: '/videos',
  tabName: 'Videos'
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
          lineNumber: 34,
          columnNumber: 5
        }
      }, __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
        barTheme: barTheme,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 6
        }
      }, data.tabName));
    });
  };

  const WebTabBar = () => __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["TabWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }
  }, __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }))), renderLinks());

  const MobileTabBar = () => __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["MobileTabWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 3
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }))), __jsx("div", {
    onClick: () => setModalVisible(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/black-hamburger.png",
    srcSet: "/static/images/black-hamburger.png 1x, /static/images/black-hamburger@2x.png 2x, /static/images/black-hamburger@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 6
    }
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/hamburger.png",
    srcSet: "/static/images/hamburger.png 1x, /static/images/hamburger@2x.png 2x, /static/images/hamburger@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 6
    }
  })));

  return __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    themeDark: true,
    backgroundColor: backgroundColor,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 3
    }
  }, __jsx(WebTabBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }
  }), __jsx(MobileTabBar, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }
  }), __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalVisible: modalVisible,
    onRequestClose: () => setModalVisible(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }
  }, __jsx(_hamburger_menu_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onCloseModal: () => setModalVisible(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      "displayMode": "regular",
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
      lineNumber: 96,
      columnNumber: 3
    }
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["Landing"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    modalVisible: modalVisible,
    onRequestClose: onModalClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
      lineNumber: 100,
      columnNumber: 6
    }
  }), !emailSent && !hasError && state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["StartDownloadForm"], {
    onRequestClose: onModalClose,
    pdfForm: pdfForm,
    onSubmit: () => setEmailSent(true),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
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
      lineNumber: 119,
      columnNumber: 6
    }
  })), __jsx(ContentWrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["LeaderMarketData"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["WorkedWith"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["WhyMdc"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["Services"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_2__["Research"], {
    onClick: openModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 5
    }
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ContactFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
/*! exports provided: LandingWrapper, BannerWrapper, ContentWrapper, Title, Description, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingWrapper", function() { return LandingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerWrapper", function() { return BannerWrapper; });
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
})(["display:flex;flex-direction:column;"]);
const BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__BannerWrapper",
  componentId: "t8svsq-1"
})(["min-height:calc(100vh - 46px);background-image:url('/static/gifs/financial-business-chart.gif');background-size:cover;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__ContentWrapper",
  componentId: "t8svsq-2"
})(["max-width:1200px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;flex:1;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Title",
  componentId: "t8svsq-3"
})(["font-family:", ";font-size:2.25em;line-height:1em;color:", ";padding:8vh 0 0.5em 0;margin-bottom:16px;", " ", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 3.5em;
		line-height: 1em;
		padding: 15vh 0 0.5em 0;
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		font-size: 3em;
		line-height: 1em;
		padding: 15vh 0 0.5em 0;
	`);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "t8svsq-4"
})(["font-family:", ";font-weight:400;font-size:1.15em;line-height:1em;color:", ";margin:0 0 42px 0;text-align:left;max-width:720px;", " ", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 1.6em;
		line-height: 1em;
  	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		font-size: 1.6em;
		line-height: 1em;
  	`);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__ButtonWrapper",
  componentId: "t8svsq-5"
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
/* harmony import */ var _components_ticker_tape__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ticker-tape */ "./components/ticker-tape/index.js");
var _jsxFileName = "/mnt/c/Users/warre/dev/flatiron/projects/market-data-company/sections/home-section/landing/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Landing = () => {
  return __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["LandingWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["BannerWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx(_components_tab_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, "Industry research by", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 6
    }
  }), "industry experts."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }), "As North America's leading market data solutions consultancy we understand the importance of data in the financial markets and global economy."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "View Research",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 6
    }
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "Contact us",
    isDefault: false,
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 3
    }
  }, __jsx(_components_ticker_tape__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./sections/home-section/leader-market-data/LeaderMarketData.styled.js":
/*!*****************************************************************************!*\
  !*** ./sections/home-section/leader-market-data/LeaderMarketData.styled.js ***!
  \*****************************************************************************/
/*! exports provided: LeaderMarketDataWrapper, Content, Title, InfoWrapper, InfoText, FactsWrapper, ProjectsCompletedWrapper, NumberText, FactsText, FooterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderMarketDataWrapper", function() { return LeaderMarketDataWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWrapper", function() { return InfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoText", function() { return InfoText; });
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
const FactsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__FactsWrapper",
  componentId: "sc-1rb8ak0-5"
})(["display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: column;
	justify-content: flex-start;
	margin-left: 40px;
  `);
const ProjectsCompletedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__ProjectsCompletedWrapper",
  componentId: "sc-1rb8ak0-6"
})(["display:flex;flex-direction:column;margin-right:1em;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 38px;
  `);
const NumberText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__NumberText",
  componentId: "sc-1rb8ak0-7"
})(["font-family:", ";font-size:36px;line-height:36px;color:", ";margin:0 0 10px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.mdcPurple, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
	font-size: 48px;
	line-height: 48px;
  `);
const FactsText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__FactsText",
  componentId: "sc-1rb8ak0-8"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], props => props.theme.fonts.financier, props => props.theme.colors.lightGrey);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "LeaderMarketDatastyled__FooterText",
  componentId: "sc-1rb8ak0-9"
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
  }, "We partner with our clients to answer the growing demands of their business by providing the expertise in the details that lead to increased profitability. Specifically, we offer a series of diagnostic tools that drive down costs while optimizing services. Learn more about how our Data License Compliance Manager tool can benefit your business in the video below:")), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["ProjectsCompletedWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 6
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["NumberText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "147"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, "Projects completed")), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["ProjectsCompletedWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["NumberText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, "$354MM"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsText"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 25,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "Trading technology managed services and products"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Our clients are critical about providing the right data to their stakeholders. That's why our proprietary technology and expertise is pivotal in reporting how data is accessed and replicated across business applications allowing us to accurately and rapidly assess and predict where firms can optimize and right size their data needs."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/measure-compare.png",
    srcSet: "/static/images/measure-compare@1x.png 1x, /static/images/measure-compare@2x.png 2x, /static/images/measure-compare@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "Measure and compare your expense management capabilities"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "We have done extensive research over the past 10 years through our qualitative and quantitative analytics. As a result, we've developed an approach to compare individual company data to our proprietary industry benchmark. Our findings have been linked to the strength of a firms operational management and its short and long term investment strategy."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/match-demand.png",
    srcSet: "/static/images/match-demand@1x.png 1x, /static/images/match-demand@2x.png 2x, /static/images/match-demand@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "Match your strategy to your business needs"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, "With expert knowledge of both your industry and your customer\u2019s needs, you can keep your data consumption activities appropriate while optimizing your commercial obligations."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/benchmark.png",
    srcSet: "/static/images/benchmark@1x.png 1x, /static/images/benchmark@2x.png 2x, /static/images/benchmark@3x.png 3x",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 6
    }
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, "Capital market expense management benchmarking"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, "Our benchmark adds exponential value through its categorization of products and services: technology, investments, productivity, operations, human resource strategies, and a host of other business functions. It\u2019s a peer group assessment of our client\u2019s 160 data activities against a set of best practices. Our benchmark has inspired discussions that explore qualitative measures \u2013 enhancing performance against benchmarks.")))), __jsx(_components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: "Get in touch to learn more",
    href: "/contact",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
})(["width:48%;margin-bottom:40px;transform:scale(0.6);display:flex;justify-content:center;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL0FuaW1hdGVkQ2FyZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5pbWF0ZWQtZm9vdGVyLWxpbmsvQW5pbWF0ZWRGb290ZXJMaW5rLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmlvLWNhcmQvQmlvQ2FyZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iaW8tY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tcGFueS1jYXJkL0NvbXBhbnlDYXJkLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBhbnktY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QtZm9vdGVyL0NvbnRhY3RGb290ZXIuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC1mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0LWZvcm0vQ29udGFjdEZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oYW1idXJnZXItbWVudS1jb250ZW50L0hhbWJ1cmdlck1lbnVDb250ZW50LnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hhbWJ1cmdlci1tZW51LWNvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L0lucHV0LnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFiZWwtd2l0aC1hcnJvdy9MYWJlbFdpdGhBcnJvdy5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYWJlbC13aXRoLWFycm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saXN0LWl0ZW0vTGlzdEl0ZW0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXNlYXJjaC1wZGYtZm9ybS9SZXNlYXJjaFBkZkZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzZWFyY2gtcGRmLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb2NpYWwtaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NvbHV0aW9ucy1kcm9wZG93bi1tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RhcnQtZG93bmxvYWQtZm9ybS9TdGFydERvd25sb2FkRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0LWRvd25sb2FkLWZvcm0vU3RhcnREb3dubG9hZEZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3RhcnQtZG93bmxvYWQtZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYi1iYXIvVGFiQmFyLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYi1iYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0ZmllbGQvVGV4dGZpZWxkLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RleHRmaWVsZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RoYW5rLXlvdS9UaGFua1lvdS5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGFuay15b3UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aWNrZXItdGFwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvTGFuZGluZy5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xhbmRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xlYWRlci1tYXJrZXQtZGF0YS9MZWFkZXJNYXJrZXREYXRhLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vbGVhZGVyLW1hcmtldC1kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9yZXNlYXJjaC9SZXNlYXJjaC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL3Jlc2VhcmNoL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9zZXJ2aWNlcy9TZXJ2aWNlcy5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi93aHktbWRjL1doeU1kYy5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL3doeS1tZGMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL3dvcmtlZC13aXRoL1dvcmtlZFdpdGguc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi93b3JrZWQtd2l0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGlFbmRwb2ludHMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS91c2VTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wZGZNYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc29jaWFsLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludFwiIl0sIm5hbWVzIjpbIk1EQ19QVVJQTEUiLCJERUVQX0lORElHTyIsIk1JRF9QVVJQTEUiLCJMSUdIVF9QVVJQTEUiLCJXSElURSIsIkJMQUNLIiwiTElHSFRfR1JFWSIsIk1EQ19QVVJQTEVfSE9WRVIiLCJTQl9HUkVZIiwiUElOSyIsIlJFRCIsIkJBQllfQkxVRSIsIkNhcmRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJub3RjaENvbG9yIiwiVG9wTm90Y2giLCJDb250ZW50V3JhcHBlciIsIlRpdGxlIiwiaDEiLCJ0aGVtZSIsImZvbnRzIiwiZ3JhcGhpa0JvbGQiLCJjb2xvcnMiLCJ3aGl0ZSIsIkRlc2NyaXB0aW9uIiwicCIsImZpbmFuY2llciIsIkZvb3RlciIsInNwYW4iLCJncmFwaGlrIiwibGlnaHRHcmV5IiwiQW5pbWF0ZWRDYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvb3RlciIsIm9uQ2xpY2siLCJkZWZhdWx0UHJvcHMiLCJDb2xvcnMiLCJBbmltYXRlZEZvb3RlckxpbmtXcmFwcGVyIiwiTWVzc2FnZSIsImg0IiwibWRjUHVycGxlIiwiQW5pbWF0ZWRGb290ZXJMaW5rIiwibWVzc2FnZSIsImhyZWYiLCJDb250YWluZXIiLCJicmVha3BvaW50IiwiQmlvQ2FyZFdyYXBwZXIiLCJJbWFnZVdyYXBwZXIiLCJpbWciLCJOYW1lIiwiUm9sZSIsIkZvb3RlcldyYXBwZXIiLCJIb3ZlcmVkQmlvQ2FyZFdyYXBwZXIiLCJIb3ZlcmVkQ29udGVudCIsIkhvdmVyZWROYW1lIiwiSG92ZXJlZFJvbGUiLCJIb3ZlcmVkRGVzY3JpcHRpb24iLCJCaW9DYXJkIiwibmFtZSIsInJvbGUiLCJob3ZlcmVkIiwic2V0SG92ZXJlZCIsInVzZVN0YXRlIiwiZ2V0QmFja2dyb3VuZENvbG9yIiwiaXNEZWZhdWx0IiwiQnV0dG9uV3JhcHBlciIsImJ1dHRvbiIsIkJ1dHRvblRleHQiLCJibGFjayIsIkJ1dHRvbiIsImJ0blRleHQiLCJpc0Rpc2FibGVkIiwiaXNTZWNvbmRhcnkiLCJDb21wYW55Q2FyZFdyYXBwZXIiLCJTdHlsZWRJbWFnZSIsIkRlc2NyaXB0aW9uV3JhcHBlciIsIkRlc2NyaXB0aW9uVGV4dCIsIlJvbGVUZXh0IiwiTmV4dFRhZyIsImEiLCJDb21wYW55Q2FyZCIsImNvbXBhbnkiLCJvbk5leHQiLCJpbWFnZVVybCIsIkNvbnRhY3RGb290ZXJXcmFwcGVyIiwiQ29udGVudCIsIkNvbnRhY3RGb290ZXIiLCJSb3V0ZXIiLCJwdXNoIiwiRm9ybVdyYXBwZXIiLCJJbnB1dFdyYXBwZXIiLCJDb250YWN0Rm9ybSIsIm9uQ2hhbmdlIiwiZmlyc3ROYW1lIiwiZW1haWwiLCJvblN1Ym1pdCIsImlzRXJyb3IiLCJGb290ZXJMb2dvV3JhcHBlciIsIlRleHRXcmFwcGVyIiwiTWFya2V0RGF0YVRleHQiLCJFeHBsb3JlQW5kU29jaWFsV3JhcHBlciIsIkV4cGxvcmVXcmFwcGVyIiwiRXhwbG9yZVRpdGxlIiwiRXhwbG9yZUl0ZW0iLCJTb2NpYWxXcmFwcGVyIiwiU29jaWFsQ29udGVudCIsIlNvY2lhbFRpdGxlIiwiSGFtYnVyZ2VyTWVudUNvbnRlbnRXcmFwcGVyIiwiSGVhZGVyIiwiSGFtYnVyZ2VyTWVudUNvbnRlbnQiLCJvbkNsb3NlTW9kYWwiLCJMYWJlbFdyYXBwZXIiLCJMYWJlbCIsIkVycm9yU3RhciIsIkZpZWxkV3JhcHBlciIsInJlZCIsIkZpZWxkIiwiaW5wdXQiLCJJbnB1dCIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJMYWJlbFdpdGhBcnJvd1dyYXBwZXIiLCJoNSIsIkxhYmVsV2l0aEFycm93IiwiV3JhcHBlciIsIkxheW91dCIsImNoaWxkcmVuIiwiTGlzdEl0ZW1XcmFwcGVyIiwiTGlzdEl0ZW0iLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwicGFkZGluZyIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luVG9wIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsIk1EQ01vZGFsIiwibW9kYWxWaXNpYmxlIiwib25SZXF1ZXN0Q2xvc2UiLCJ1c2VFZmZlY3QiLCJNb2RhbCIsInNldEFwcEVsZW1lbnQiLCJSZXNlYXJjaFBkZkZvcm1XcmFwcGVyIiwic2JHcmV5IiwiQ2xvc2VJY29uIiwiaDMiLCJTdHlsZWRBbmNob3IiLCJSZXNlYXJjaFBkZkZvcm0iLCJwZGZGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiU29jaWFsSWNvbiIsInVybCIsImhlaWdodCIsIndpZHRoIiwiU29sdXRpb25zRHJvcGRvd25NZW51IiwiU3RhcnREb3dubG9hZEZvcm0iLCJTdGFydERvd25sb2FkRm9ybVdyYXBwZXIiLCJoMiIsIk1vYmlsZVRhYldyYXBwZXIiLCJUYWJXcmFwcGVyIiwiVGFiIiwiYmFyVGhlbWUiLCJEcm9wRG93biIsIkRyb3BEb3duSXRlbSIsImxpbmtEYXRhIiwidGFiTmFtZSIsIlRhYkJhciIsInNldE1vZGFsVmlzaWJsZSIsInJlbmRlckxpbmtzIiwibWFwIiwiZGF0YSIsIldlYlRhYkJhciIsIk1vYmlsZVRhYkJhciIsIlRleHRGaWVsZFdyYXBwZXIiLCJ0ZXh0YXJlYSIsIlRleHRmaWVsZCIsIlRoYW5rWW91V3JhcHBlciIsIlRoYW5rWW91IiwiZm9vdGVyTWVzc2FnZSIsIlRpY2tlclRhcGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsIl9yZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImNvbXBvbmVudERpZE1vdW50Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJpbm5lckhUTUwiLCJKU09OIiwic3RyaW5naWZ5IiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwiY29uc29sZSIsInJvdXRlciIsImVyciIsImV2ZW50IiwidGFyZ2V0Iiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJoYXNXYXJuZWQiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFByb3BzIiwicmVmIiwiZWwiLCJzZXRDaGlsZEVsbSIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwiY2FuY2VsbGVkIiwicHJlZml4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZSIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJwYWdlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJlbWFpbFNlbnQiLCJzZXRFbWFpbFNlbnQiLCJzZXRQZGZGb3JtIiwiZm9ybSIsInNldEZvcm1WYWx1ZXMiLCJkaXNwYXRjaCIsInVzZVN0b3JlIiwic2F2ZVVzZXIiLCJ1c2VDYWxsYmFjayIsImZvcm1WYWx1ZXMiLCJ0eXBlIiwiVVNFUl9TSUdORURfVVAiLCJwYXlsb2FkIiwic2VuZEVtYWlsIiwidXBkYXRlRmllbGQiLCJvbk1vZGFsQ2xvc2UiLCJvcGVuTW9kYWwiLCJyZXNlYXJjaEZvcm0iLCJwZGZNYXBwZXIiLCJ2YWxpZGF0ZUVtYWlsIiwidXNlciIsIkxhbmRpbmdXcmFwcGVyIiwiQmFubmVyV3JhcHBlciIsIkxhbmRpbmciLCJMZWFkZXJNYXJrZXREYXRhV3JhcHBlciIsIkluZm9XcmFwcGVyIiwiSW5mb1RleHQiLCJGYWN0c1dyYXBwZXIiLCJQcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXIiLCJOdW1iZXJUZXh0IiwiRmFjdHNUZXh0IiwiRm9vdGVyVGV4dCIsIkxlYWRlck1hcmtldERhdGEiLCJSZXNlYXJjaFdyYXBwZXIiLCJIZWFkZXJXcmFwcGVyIiwiSGVhZGVyVGl0bGUiLCJIZWFkZXJEZXNjcmlwdGlvbiIsIkNhcmRDb250ZW50V3JhcHBlciIsIlJlc2VhcmNoIiwiU2VydmljZXNXcmFwcGVyIiwiQ2FyZEltYWdlIiwiQ2FyZENvbnRlbnQiLCJDYXJkVGl0bGUiLCJDYXJkRGVzY3JpcHRpb24iLCJTZXJ2aWNlcyIsIklDT05fTUFSR0lOIiwiV2h5TWRjV3JhcHBlciIsIkhlYWRpbmdXcmFwcGVyIiwiSGVhZGluZ1RpdGxlIiwiSGVhZGluZ0Rlc2NyaXB0aW9uIiwiQ2FyZFRpdGxlV3JhcHBlciIsIkNhcmRUaXRsZUljb24iLCJkZXNjcmlwdGlvbkRhdGEiLCJDYXJkIiwiV2h5TWRjIiwicmVuZGVyRGVzY3JpcHRpb24iLCJXb3JrZWRXaXRoV3JhcHBlciIsIkxvZ29Db250ZW50V3JhcHBlciIsIkxvZ29XcmFwcGVyIiwiQ09NUEFOWV9EQVRBIiwiV29ya2VkV2l0aCIsImFjdGl2ZUluZGV4Iiwic2V0QWN0aXZlSW5kZXgiLCJhbmltYXRpbmciLCJvbkV4aXRpbmciLCJvbkV4aXRlZCIsIm5leHQiLCJuZXh0SW5kZXgiLCJsZW5ndGgiLCJjYXJvdXNlbEl0ZW1zIiwiRU1BSUxfRU5EUE9JTlQiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkFjY2VwdCIsImJvZHkiLCJyZXNwb25zZURhdGEiLCJqc29uIiwiaW5pdGlhbFN0YXRlIiwiU3RvcmVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZXJSZWR1Y2VyIiwiYWN0aW9uIiwiU3RvcmVQcm92aWRlciIsInVzZVJlZHVjZXIiLCJzdG9yZSIsInVzZUNvbnRleHQiLCJyaWdodFRvQXVkaXRQZGZQYXRoIiwiaWRlbnRpdHlDcmlzaXNQZGZQYXRoIiwibWF0dXJpbmdBcnRQZGZQYXRoIiwiYWNjb3VudGFiaWxpdHlBbmRHb3Zlcm5hbmNlUGRmUGF0aCIsImRhdGFTcGVuZFBkZlBhdGgiLCJjYXNlU3R1ZGllc1BwdFBhdGgiLCJyaXNrRmFjdG9yc1BkZlBhdGgiLCJyaXNrRnJhbWV3b3JrUGRmUGF0aCIsInN1cnZleUluc2lnaHRzUGRmUGF0aCIsInJpZ2h0VG9BdWRpdCIsImlkZW50aXR5Q3Jpc2lzIiwibWF0dXJpbmdBcnQiLCJhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2UiLCJkYXRhU3BlbmQiLCJyaXNrRmFjdG9ycyIsImNhc2VTdHVkaWVzIiwic3VydmV5SW5zaWdodHMiLCJyaXNrRnJhbWV3b3JrIiwidGVzdCIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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LE9BckdPLEVBeUdQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BekdPLEVBNkdQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0dPLEVBaUhQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BakhPLEVBcUhQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BckhPLEVBeUhQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BekhPLEVBNkhQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0hPLEVBaUlQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BaklPLEVBcUlQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BcklPLEVBeUlQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BeklPLEVBNklQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0lPLEVBaUpQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BakpPLEVBcUpQO0FBQ0ksdUJBQWUsYUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BckpPLEVBeUpQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BekpPLEVBNkpQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0pPLEVBaUtQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BaktPLEVBcUtQO0FBQ0ksdUJBQWUsY0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BcktPLEVBeUtQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZmLE9BektPLEVBNktQO0FBQ0ksdUJBQWUsVUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BN0tPLEVBaUxQO0FBQ0ksdUJBQWUsWUFEbkI7QUFFSSxtQkFBVztBQUZmLE9BakxPLEVBcUxQO0FBQ0ksdUJBQWUsV0FEbkI7QUFFSSxtQkFBVztBQUZm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QU4sQ0FBY2tnQixXQUFkLEVBQVIsQ0FBUDtBQUNBLENBSE0sQzs7Ozs7Ozs7Ozs7QUNBUCwrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4RDs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5RCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImV4cG9ydCBjb25zdCBNRENfUFVSUExFID0gJyM3RDI3RkYnXG5leHBvcnQgY29uc3QgREVFUF9JTkRJR08gPSAnIzQzMDA4NidcbmV4cG9ydCBjb25zdCBNSURfUFVSUExFID0gJyM5ODZDRkYnXG5leHBvcnQgY29uc3QgTElHSFRfUFVSUExFID0gJyNDNUIyRkYnXG5leHBvcnQgY29uc3QgV0hJVEUgPSAnI0ZGRkZGRidcbmV4cG9ydCBjb25zdCBCTEFDSyA9ICcjMDAwMDAwJ1xuZXhwb3J0IGNvbnN0IExJR0hUX0dSRVkgPSAnIzk2OTY5NidcblxuZXhwb3J0IGNvbnN0IE1EQ19QVVJQTEVfSE9WRVIgPSAnIzcxMjFFQidcbmV4cG9ydCBjb25zdCBTQl9HUkVZID0gJyNGNUY1RjUnXG5leHBvcnQgY29uc3QgUElOSyA9ICcjRUQyN0ZGJ1xuZXhwb3J0IGNvbnN0IFJFRCA9ICcjRkYyNzUyJ1xuZXhwb3J0IGNvbnN0IEJBQllfQkxVRSA9ICcjM0I4NEZGJ1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDM0MHB4O1xuXHRtYXgtd2lkdGg6IDM2MHB4O1xuXHRmbGV4OiAxO1xuXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAyMDAlO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiAkeyhwcm9wcykgPT4ge1xuXHRcdHJldHVybiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUgNTAlLCAke3Byb3BzLm5vdGNoQ29sb3J9IDUwJSlgXG5cdH19O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtcG9zaXRpb24gMC4xNXMgZWFzZS1vdXQ7XG5cdC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjE1cyBlYXNlLW91dDtcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjE1cyBlYXNlLW91dDtcblx0Jjpob3ZlciB7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEwMCU7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IFRvcE5vdGNoID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTZweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLm5vdGNoQ29sb3J9O1xuXHRtYXJnaW4tYm90dG9tOiAyM3B4O1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWFyZ2luOiAwIDIwcHggMTdweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHRhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuXHQke0NhcmRXcmFwcGVyfTpob3ZlciAmIHtcblx0XHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDA7XG5cdCR7Q2FyZFdyYXBwZXJ9OmhvdmVyICYge1xuXHRcdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmV5fTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0bWFyZ2luOiAwIDIwcHggMTZweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQke0NhcmRXcmFwcGVyfTpob3ZlciAmIHtcblx0XHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcblx0fVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgQ29sb3JzIGZyb20gJy4uLy4uL2Fzc2V0cy9jb2xvcnMnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vQW5pbWF0ZWRDYXJkLnN0eWxlZCdcblxuY29uc3QgQW5pbWF0ZWRDYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBmb290ZXIsIG5vdGNoQ29sb3IsIG9uQ2xpY2sgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuQ2FyZFdyYXBwZXIgbm90Y2hDb2xvcj17bm90Y2hDb2xvcn0gb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8Uy5Ub3BOb3RjaCBub3RjaENvbG9yPXtub3RjaENvbG9yfSAvPlxuXHRcdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdDxTLlRpdGxlPnt0aXRsZX08L1MuVGl0bGU+XG5cdFx0XHRcdDxTLkRlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1MuRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8Uy5Gb290ZXI+e2Zvb3Rlcn08L1MuRm9vdGVyPlxuXHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0KVxufVxuXG5BbmltYXRlZENhcmQuZGVmYXVsdFByb3BzID0ge1xuXHRmb290ZXI6ICdSZWFkIG1vcmUnLFxuXHRub3RjaENvbG9yOiBDb2xvcnMuTURDX1BVUlBMRVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRlZENhcmRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBBbmltYXRlZEZvb3RlckxpbmtXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuYFxuXG5leHBvcnQgY29uc3QgTWVzc2FnZSA9IHN0eWxlZC5oNGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0bWFyZ2luOiAwIDhweCAwIDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cdCY6aG92ZXIge1xuXHRcdG1hcmdpbjogMCAxNnB4IDAgMDtcblx0XHRvcGFjaXR5OiAwLjY1O1xuXHR9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vQW5pbWF0ZWRGb290ZXJMaW5rLnN0eWxlZCdcblxuY29uc3QgQW5pbWF0ZWRGb290ZXJMaW5rID0gKHsgbWVzc2FnZSwgaHJlZiwgb25DbGljayB9KSA9PiAoXG5cdDxMaW5rIGhyZWY9e2hyZWZ9PlxuXHRcdDxTLkFuaW1hdGVkRm9vdGVyTGlua1dyYXBwZXIgb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8Uy5NZXNzYWdlPnttZXNzYWdlfTwvUy5NZXNzYWdlPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9hcnJvdy5wbmdcIlxuXHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9hcnJvd0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2Fycm93QDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL2Fycm93QDN4LnBuZyAzeFwiXG5cdFx0XHQvPlxuXHRcdDwvUy5BbmltYXRlZEZvb3RlckxpbmtXcmFwcGVyPlxuXHQ8L0xpbms+XG4pXG5cbkFuaW1hdGVkRm9vdGVyTGluay5kZWZhdWx0UHJvcHMgPSB7XG5cdG9uQ2xpY2s6ICgpID0+IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkRm9vdGVyTGlua1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHR3aWR0aDogMzQwcHg7XG5cdCY6aG92ZXIge1xuXHRcdGN1cnNvcjogaGVscDtcblx0fVxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgbWluLWhlaWdodDogNDQ1cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCaW9DYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuaW1nYFxuXHRtYXgtd2lkdGg6IDM0MHB4O1xuXHRtYXgtaGVpZ2h0OiA0MDFweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LWhlaWdodDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiAzODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWluLWhlaWdodDogMTI1cHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmctbGVmdDogMzJweDtcbmBcblxuZXhwb3J0IGNvbnN0IE5hbWUgPSBzdHlsZWQuaDRgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDIxcHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDE2cHggMCA0cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBSb2xlID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMDtcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4OiAxO1xuXHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cdG1hcmdpbi1ib3R0b206IDE3cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBIb3ZlcmVkQmlvQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICBgfVxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5gXG5cbmV4cG9ydCBjb25zdCBIb3ZlcmVkQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IDI1cHggMzJweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhvdmVyZWROYW1lID0gc3R5bGVkLmg0YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwIDAgNHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5gXG5cbmV4cG9ydCBjb25zdCBIb3ZlcmVkUm9sZSA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDAgMCAxN3B4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5gXG5cbmV4cG9ydCBjb25zdCBIb3ZlcmVkRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdG1hcmdpbjogMDtcbmBcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcbmltcG9ydCBBbmltYXRlZEZvb3RlckxpbmsgZnJvbSAnLi4vYW5pbWF0ZWQtZm9vdGVyLWxpbmsnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vQmlvQ2FyZC5zdHlsZWQnXG5cbmNvbnN0IEJpb0NhcmQgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBuYW1lLCByb2xlLCBtZXNzYWdlIH0gPSBwcm9wc1xuXHRjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRyZXR1cm4gKFxuXHRcdDxTLkNvbnRhaW5lclxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBzZXRIb3ZlcmVkKHRydWUpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRIb3ZlcmVkKGZhbHNlKX1cblx0XHQ+XG5cdFx0XHR7IWhvdmVyZWQgJiYgKFxuXHRcdFx0XHQ8Uy5CaW9DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5JbWFnZVdyYXBwZXJcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3BsYWNlaG9sZGVyLWltZy5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvcGxhY2Vob2xkZXItaW1nQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvcGxhY2Vob2xkZXItaW1nQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL3BsYWNlaG9sZGVyLWltZ0AzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8Uy5OYW1lPntuYW1lfTwvUy5OYW1lPlxuXHRcdFx0XHRcdFx0PFMuUm9sZT57cm9sZX08L1MuUm9sZT5cblx0XHRcdFx0XHRcdDxTLkZvb3RlcldyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdDxBbmltYXRlZEZvb3RlckxpbmsgbWVzc2FnZT1cIkJpb1wiIC8+XG5cdFx0XHRcdFx0XHQ8L1MuRm9vdGVyV3JhcHBlcj5cblx0XHRcdFx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdFx0XHRcdDwvUy5CaW9DYXJkV3JhcHBlcj5cblx0XHRcdCl9XG5cdFx0XHR7aG92ZXJlZCAmJiAoXG5cdFx0XHRcdDxTLkhvdmVyZWRCaW9DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Ib3ZlcmVkQ29udGVudD5cblx0XHRcdFx0XHRcdDxTLkhvdmVyZWROYW1lPntuYW1lfTwvUy5Ib3ZlcmVkTmFtZT5cblx0XHRcdFx0XHRcdDxTLkhvdmVyZWRSb2xlPntyb2xlfTwvUy5Ib3ZlcmVkUm9sZT5cblx0XHRcdFx0XHRcdHttZXNzYWdlICYmIDxTLkhvdmVyZWREZXNjcmlwdGlvbj57bWVzc2FnZX08L1MuSG92ZXJlZERlc2NyaXB0aW9uPn1cblx0XHRcdFx0XHQ8L1MuSG92ZXJlZENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5Ib3ZlcmVkQmlvQ2FyZFdyYXBwZXI+XG5cdFx0XHQpfVxuXHRcdDwvUy5Db250YWluZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmlvQ2FyZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmNvbnN0IGdldEJhY2tncm91bmRDb2xvciA9IChwcm9wcykgPT4ge1xuXHRpZiAocHJvcHMuaXNEZWZhdWx0KSB7XG5cdFx0cmV0dXJuIHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGVcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlXG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0d2lkdGg6IDE2MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBnZXRCYWNrZ3JvdW5kQ29sb3IocHJvcHMpfTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXHRib3JkZXI6IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IGdldEJhY2tncm91bmRDb2xvcihwcm9wcyl9O1xuXHRcdGJveC1zaGFkb3c6ICR7KHByb3BzKSA9PiB7XG5cdFx0XHRyZXR1cm4gcHJvcHMuaXNEZWZhdWx0XG5cdFx0XHRcdD8gJzAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSknXG5cdFx0XHRcdDogJzAgOHB4IDE2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSknXG5cdFx0fX07XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuXHRcdHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXHR9XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25UZXh0ID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAxNHB4O1xuXHRsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMuaXNEZWZhdWx0ID8gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlIDogcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL2J1dHRvbi5zdHlsZWQnXG5cbmNvbnN0IEJ1dHRvbiA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGJ0blRleHQsIGlzRGVmYXVsdCwgb25DbGljaywgaXNEaXNhYmxlZCB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5CdXR0b25XcmFwcGVyXG5cdFx0XHRpc0RlZmF1bHQ9e2lzRGVmYXVsdH1cblx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0XHRkaXNhYmxlZD17aXNEaXNhYmxlZH1cblx0XHQ+XG5cdFx0XHQ8Uy5CdXR0b25UZXh0IGlzRGVmYXVsdD17aXNEZWZhdWx0fT57YnRuVGV4dH08L1MuQnV0dG9uVGV4dD5cblx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0KVxufVxuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuXHRpc0RlZmF1bHQ6IHRydWUsXG5cdGlzU2Vjb25kYXJ5OiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgQ29tcGFueUNhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0Ym94LXNoYWRvdzogMCA4cHggMTJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0ZmxleDogMTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtaW4taGVpZ2h0OiAyODVweDtcbiAgXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWluLWhlaWdodDogMjIwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtaW4td2lkdGg6IDQ3NnB4O1xuICBcdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG9iamVjdC1maXQ6IGZpbGw7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW46IDAgMjBweDtcblx0bWluLWhlaWdodDogMzIwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdG1hcmdpbjogMzJweCA2JTtcblx0bWluLWhlaWdodDogMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1ib3R0b206IDMzcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMCAwIDZweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmb250LXNpemU6IDIxcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogOHB4O1xuICBcdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvblRleHQgPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDIxcHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHRsZXR0ZXItc3BhY2luZzogLTAuMTFweDtcblx0bWFyZ2luOiAwO1xuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDEwMCU7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcbiAgXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgUm9sZVRleHQgPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjFweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmV5fTtcblx0bWFyZ2luOiAwO1xuYFxuXG5leHBvcnQgY29uc3QgTmV4dFRhZyA9IHN0eWxlZC5hYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRtYXJnaW46IDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6ICMzZDAwOTk7XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcblx0fVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExhYmVsV2l0aEFycm93IGZyb20gJy4uL2xhYmVsLXdpdGgtYXJyb3cnXG5cbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9Db21wYW55Q2FyZC5zdHlsZWQnXG5cbmNvbnN0IENvbXBhbnlDYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCByb2xlLCBjb21wYW55LCBvbk5leHQsIGltYWdlVXJsIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkNvbXBhbnlDYXJkV3JhcHBlcj5cblx0XHRcdDxTLkltYWdlV3JhcHBlcj5cblx0XHRcdFx0PFMuU3R5bGVkSW1hZ2Vcblx0XHRcdFx0XHRzcmM9e2Avc3RhdGljL2ltYWdlcy8ke2ltYWdlVXJsfS5wbmdgfVxuXHRcdFx0XHRcdHNyY1NldD17YC9zdGF0aWMvaW1hZ2VzLyR7aW1hZ2VVcmx9QDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvJHtpbWFnZVVybH1AMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvJHtpbWFnZVVybH1AM3gucG5nIDN4YH1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbWFnZVdyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFMuRGVzY3JpcHRpb25XcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlRpdGxlPnt0aXRsZX08L1MuVGl0bGU+XG5cdFx0XHRcdFx0PFMuRGVzY3JpcHRpb25UZXh0PntkZXNjcmlwdGlvbn08L1MuRGVzY3JpcHRpb25UZXh0PlxuXHRcdFx0XHQ8L1MuRGVzY3JpcHRpb25XcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Gb290ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlJvbGVUZXh0Pntyb2xlfTwvUy5Sb2xlVGV4dD5cblx0XHRcdFx0XHQ8TGFiZWxXaXRoQXJyb3cgbGFiZWw9e2NvbXBhbnl9IG9uQ2xpY2s9e29uTmV4dH0gLz5cblx0XHRcdFx0PC9TLkZvb3RlcldyYXBwZXI+XG5cdFx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdFx0PC9TLkNvbXBhbnlDYXJkV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55Q2FyZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBDb250YWN0Rm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kOiByZ2IoMTI1LDM5LDI1NSk7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjUsMzksMjU1LDEpIDAlLCByZ2JhKDE4MCw3OSwyNTUsMSkgMTAwJSk7XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDgwcHggMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW46IDA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMzJweDtcblx0bGluZS1oZWlnaHQ6IDQycHg7XG5cdG1hcmdpbjogMCAwIDZweCAwO1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWF4LXdpZHRoOiA2NjdweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDA7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vQ29udGFjdEZvb3Rlci5zdHlsZWQnXG5cbmNvbnN0IENvbnRhY3RGb290ZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdDxTLkNvbnRhY3RGb290ZXJXcmFwcGVyPlxuXHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PFMuQ29udGVudD5cblx0XHRcdFx0PFMuVGl0bGU+U2VlIGhvdyB3ZSBjYW4gaGVscDwvUy5UaXRsZT5cblx0XHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0UmVhY2ggb3V0IHRvIHVzIHRvIGV4cGxvcmUgb3VyIHNlcnZpY2VzIG9yIGhlYXIgb3VyIGlkZWFzIGFib3V0IHRoZVxuXHRcdFx0XHRcdGluZHVzdHJ5IGluIGdyZWF0ZXIgZGV0YWlsXG5cdFx0XHRcdDwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdDwvUy5Db250ZW50PlxuXHRcdFx0PFMuQnV0dG9uV3JhcHBlcj5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGJ0blRleHQ9XCJDb250YWN0IHVzXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRpc0RlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvY29udGFjdCcpfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHQ8L1MuQ29udGFjdEZvb3RlcldyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvb3RlclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGJveC1zaGFkb3c6IDJweCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHR3aWR0aDogMTAwJTtcblx0bWF4LXdpZHRoOiA2NDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ZmxleDogMTtcblx0cGFkZGluZzogMCAyMHB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vQ29udGFjdEZvcm0uc3R5bGVkJ1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0J1xuaW1wb3J0IFRleHRmaWVsZCBmcm9tICcuLi90ZXh0ZmllbGQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcblxuY29uc3QgQ29udGFjdEZvcm0gPSAoe1xuXHRvbkNoYW5nZSxcblx0Zmlyc3ROYW1lLFxuXHRjb21wYW55LFxuXHRlbWFpbCxcblx0bWVzc2FnZSxcblx0b25TdWJtaXQsXG5cdGlzRXJyb3Jcbn0pID0+IChcblx0PFMuRm9ybVdyYXBwZXI+XG5cdFx0PFMuQ29udGVudD5cblx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0bGFiZWw9XCJOYW1lXCJcblx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cIk1hcmdhcmV0IE1hbmdvXCJcblx0XHRcdFx0XHR2YWx1ZT17Zmlyc3ROYW1lfVxuXHRcdFx0XHRcdG5hbWU9XCJmaXJzdE5hbWVcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0XHRpc1JlcXVpcmVkPXt0cnVlfVxuXHRcdFx0XHRcdGlzRXJyb3I9e2lzRXJyb3J9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRsYWJlbD1cIkVtYWlsXCJcblx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cIm1hcmdhcmV0QG1hbmdvLmNvbVwiXG5cdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRcdGlzUmVxdWlyZWQ9e3RydWV9XG5cdFx0XHRcdFx0aXNFcnJvcj17aXNFcnJvcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdGxhYmVsPVwiQ29tcGFueVwiXG5cdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJNYW5nbyBjby5cIlxuXHRcdFx0XHRcdHZhbHVlPXtjb21wYW55fVxuXHRcdFx0XHRcdG5hbWU9XCJjb21wYW55XCJcblx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8VGV4dGZpZWxkXG5cdFx0XHRcdFx0bGFiZWw9XCJNZXNzYWdlXCJcblx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cIllvdXIgbWVzc2FnZSBoZXJlXCJcblx0XHRcdFx0XHR2YWx1ZT17bWVzc2FnZX1cblx0XHRcdFx0XHRuYW1lPVwibWVzc2FnZVwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdDxTLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHRcdDxCdXR0b24gYnRuVGV4dD1cIkNvbnRhY3QgdXNcIiBvbkNsaWNrPXtvblN1Ym1pdH0gLz5cblx0XHRcdDwvUy5CdXR0b25XcmFwcGVyPlxuXHRcdDwvUy5Db250ZW50PlxuXHQ8L1MuRm9ybVdyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RGb3JtXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IEZvb3RlcldyYXBwZXIgPSBzdHlsZWQuZm9vdGVyYFxuXHRtaW4taGVpZ2h0OiAzNzVweDtcblxuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDgwcHggMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyTG9nb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFRleHRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdG1heC13aWR0aDogNjQwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0XHRwYWRkaW5nOiAwIDI0cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBNYXJrZXREYXRhVGV4dCA9IHN0eWxlZC5wYFxuXHRtYXJnaW46IDA7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBgfVxuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEV4cGxvcmVBbmRTb2NpYWxXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHR3aWR0aDogMzAwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBsb3JlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBFeHBsb3JlVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdG1hcmdpbjogMCAwIDE3cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMCAwIDIzcHggMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEV4cGxvcmVJdGVtID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAjYzhjOGM4O1xuXHRtYXJnaW4tYm90dG9tOiAxOHB4O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdG9wYWNpdHk6IDAuNjU7XG5cdFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyBlYXNlO1xuXHR9XG5gXG5cblxuZXhwb3J0IGNvbnN0IFNvY2lhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tbGVmdDogNDBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFNvY2lhbENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuYFxuXG5leHBvcnQgY29uc3QgU29jaWFsVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdG1hcmdpbjogMCAwIDI3cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbjogMCAwIDIzcHggMDtcbiAgYH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBTb2NpYWxJY29uIGZyb20gJy4uL3NvY2lhbC1pY29uJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0Zvb3Rlci5zdHlsZWQnXG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcblx0PFMuRm9vdGVyV3JhcHBlcj5cblx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdDxTLkZvb3RlckxvZ29XcmFwcGVyPlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvd2hpdGUucG5nXCJcblx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy93aGl0ZS5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3doaXRlQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL3doaXRlQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0d2lkdGg9XCIxNDBcIlxuXHRcdFx0XHRcdGhlaWdodD1cIjEyN1wiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuRm9vdGVyTG9nb1dyYXBwZXI+XG5cdFx0XHQ8Uy5UZXh0V3JhcHBlcj5cblx0XHRcdFx0PFMuTWFya2V0RGF0YVRleHQ+XG5cdFx0XHRcdFx0TWFya2V0IGRhdGEgY29tcGFueSBpcyBOb3J0aCBBbWVyaWNh4oCZcyBsZWFkaW5nIG1hcmtldCBkYXRhIHNvbHV0aW9uc1xuXHRcdFx0XHRcdGFuZCBjb25zdWx0YW5jeSBjb21wYW55LiBXZSBvZmZlciBzcGVjaWFsaXplZCBjb25zdWx0aW5nIHNlcnZpY2VzIGFuZFxuXHRcdFx0XHRcdGxlYWRpbmcgbWFya2V0IGRhdGEgbWFuYWdlbWVudCBzb2x1dGlvbnMgdGhhdCBoZWxwIGRlYWwgd2l0aCB0aGVcblx0XHRcdFx0XHRjb21wbGV4aXR5IG9mIHlvdXIgZGF0YS4gUmVhY2ggdXMgYXQgKDQxNiktMzE1LTcxNzcgb3IgaW5mb0BtYXJrZXRkYXRhY29tcGFueS5jb20uXG5cdFx0XHRcdDwvUy5NYXJrZXREYXRhVGV4dD5cblx0XHRcdDwvUy5UZXh0V3JhcHBlcj5cblx0XHRcdDxTLkV4cGxvcmVBbmRTb2NpYWxXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5FeHBsb3JlV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5FeHBsb3JlVGl0bGU+RXhwbG9yZTwvUy5FeHBsb3JlVGl0bGU+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9yZXNlYXJjaFwiPlxuXHRcdFx0XHRcdFx0PFMuRXhwbG9yZUl0ZW0+UmVzZWFyY2g8L1MuRXhwbG9yZUl0ZW0+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuXHRcdFx0XHRcdFx0PFMuRXhwbG9yZUl0ZW0+Q29udGFjdDwvUy5FeHBsb3JlSXRlbT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvUy5FeHBsb3JlV3JhcHBlcj5cblx0XHRcdFx0PFMuU29jaWFsV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Tb2NpYWxUaXRsZT5Tb2NpYWw8L1MuU29jaWFsVGl0bGU+XG5cdFx0XHRcdFx0PFMuU29jaWFsQ29udGVudD5cblx0XHRcdFx0XHRcdDxTb2NpYWxJY29uIHVybD1cImh0dHA6Ly9mYWNlYm9vay5jb21cIiAvPlxuXHRcdFx0XHRcdFx0PFNvY2lhbEljb24gdXJsPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2NvbXBhbnkvbWFya2V0LWRhdGEtY29tcGFueS9cIiAvPlxuXHRcdFx0XHRcdFx0PFNvY2lhbEljb24gdXJsPVwiaHR0cDovL3R3aXR0ZXIuY29tXCIgLz5cblx0XHRcdFx0XHQ8L1MuU29jaWFsQ29udGVudD5cblx0XHRcdFx0PC9TLlNvY2lhbFdyYXBwZXI+XG5cdFx0XHQ8L1MuRXhwbG9yZUFuZFNvY2lhbFdyYXBwZXI+XG5cdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHQ8L1MuRm9vdGVyV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSGFtYnVyZ2VyTWVudUNvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWJvdHRvbTogNjBweDtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnLi4vbGlzdC1pdGVtJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0hhbWJ1cmdlck1lbnVDb250ZW50LnN0eWxlZCdcblxuY29uc3QgSGFtYnVyZ2VyTWVudUNvbnRlbnQgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBvbkNsb3NlTW9kYWwgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuSGFtYnVyZ2VyTWVudUNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PFMuSGVhZGVyPlxuXHRcdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvJyl9PlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2sucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17b25DbG9zZU1vZGFsfT5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9jbG9zZUljb24ucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbi5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbkAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbkAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9TLkhlYWRlcj5cblx0XHRcdDxMaXN0SXRlbSBsYWJlbD1cIlJlc2VhcmNoXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9yZXNlYXJjaCcpfSAvPlxuXHRcdFx0PExpc3RJdGVtIGxhYmVsPVwiQ29udGFjdCB1c1wiIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvY29udGFjdCcpfSAvPlxuXHRcdDwvUy5IYW1idXJnZXJNZW51Q29udGVudFdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyTWVudUNvbnRlbnRcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQW5pbWF0ZWRDYXJkIH0gZnJvbSAnLi9hbmltYXRlZC1jYXJkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmltYXRlZEZvb3RlckxpbmsgfSBmcm9tICcuL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCaW9DYXJkIH0gZnJvbSAnLi9iaW8tY2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbXBhbnlDYXJkIH0gZnJvbSAnLi9jb21wYW55LWNhcmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhY3RGb290ZXIgfSBmcm9tICcuL2NvbnRhY3QtZm9vdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDb250YWN0Rm9ybSB9IGZyb20gJy4vY29udGFjdC1mb3JtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBGb290ZXIgfSBmcm9tICcuL2Zvb3RlcidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGFtYnVyZ2VyTWVudUNvbnRlbnQgfSBmcm9tICcuL2hhbWJ1cmdlci1tZW51LWNvbnRlbnQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIElucHV0IH0gZnJvbSAnLi9pbnB1dCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGFiZWxXaXRoQXJyb3cgfSBmcm9tICcuL2xhYmVsLXdpdGgtYXJyb3cnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExheW91dCB9IGZyb20gJy4vbGF5b3V0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMaXN0SXRlbSB9IGZyb20gJy4vbGlzdC1pdGVtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vbW9kYWwnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2VhcmNoUGRmRm9ybSB9IGZyb20gJy4vcmVzZWFyY2gtcGRmLWZvcm0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNvY2lhbEljb24gfSBmcm9tICcuL3NvY2lhbC1pY29uJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTb2x1dGlvbnNEcm9wZG93bk1lbnUgfSBmcm9tICcuL3NvbHV0aW9ucy1kcm9wZG93bi1tZW51J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGFydERvd25sb2FkRm9ybSB9IGZyb20gJy4vc3RhcnQtZG93bmxvYWQtZm9ybSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGFiQmFyIH0gZnJvbSAnLi90YWItYmFyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUZXh0RmllbGQgfSBmcm9tICcuL3RleHRmaWVsZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGhhbmtZb3UgfSBmcm9tICcuL3RoYW5rLXlvdSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVGlja2VyVGFwZSB9IGZyb20gJy4vdGlja2VyLXRhcGUnIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjhweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdG1hcmdpbi1yaWdodDogMnB4O1xuYFxuXG5leHBvcnQgY29uc3QgRXJyb3JTdGFyID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtZmFtaWx5OiAnTHVjaWRhR3JhbmRlJztcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRjb2xvcjogI2ZmMDAwMDtcbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDEwMCU7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMuaXNFcnJvclxuXHRcdFx0PyBgc29saWQgMXB4ICR7cHJvcHMudGhlbWUuY29sb3JzLnJlZH1gXG5cdFx0XHQ6ICdzb2xpZCAxcHggI2M4YzhjOCd9O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5pc0Vycm9yXG5cdFx0XHQ/ICdyZ2JhKDI1NSwgMzksIDgyLCAwLjAyKSdcblx0XHRcdDogYCR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9YH07XG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXG5cdC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cblx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogT3BlcmEvSUUgOCsgKi9cbmBcblxuZXhwb3J0IGNvbnN0IEZpZWxkID0gc3R5bGVkLmlucHV0YFxuXHRoZWlnaHQ6IDM5cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nLWxlZnQ6IDE0cHg7XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5pc0Vycm9yID8gcHJvcHMudGhlbWUuY29sb3JzLnJlZCA6IHByb3BzLnRoZW1lLmNvbG9ycy5saWdodEdyZXl9O1xuXHRib3JkZXI6IG5vbmU7XG5cdCY6Zm9jdXMge1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vSW5wdXQuc3R5bGVkJ1xuXG5jb25zdCBJbnB1dCA9ICh7XG5cdGxhYmVsLFxuXHRwbGFjZWhvbGRlcixcblx0bmFtZSxcblx0dmFsdWUsXG5cdG9uQ2hhbmdlLFxuXHRpc1JlcXVpcmVkLFxuXHRpc0Vycm9yXG59KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0PFMuTGFiZWxXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5MYWJlbD57bGFiZWx9PC9TLkxhYmVsPlxuXHRcdFx0XHR7aXNSZXF1aXJlZCAmJiA8Uy5FcnJvclN0YXI+KjwvUy5FcnJvclN0YXI+fVxuXHRcdFx0PC9TLkxhYmVsV3JhcHBlcj5cblx0XHRcdDxTLkZpZWxkV3JhcHBlciBpc0Vycm9yPXtpc0Vycm9yfT5cblx0XHRcdFx0PFMuRmllbGRcblx0XHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdFx0bmFtZT17bmFtZX1cblx0XHRcdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7aXNFcnJvciAmJiAoXG5cdFx0XHRcdFx0PFMuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9lcnJvci5wbmdcIlxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9lcnJvci5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2Vycm9yQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9lcnJvckAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIyMlwiXG5cdFx0XHRcdFx0XHRcdHdpZHRoPVwiMjJcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1MuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9TLkZpZWxkV3JhcHBlcj5cblx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHQpXG59XG5cbklucHV0LmRlZmF1bHRQcm9wcyA9IHtcblx0aXNSZXF1aXJlZDogZmFsc2Vcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBMYWJlbFdpdGhBcnJvd1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQmOmhvdmVyIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmg1YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRtYXJnaW46IDAgN3B4IDAgMDtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9MYWJlbFdpdGhBcnJvdy5zdHlsZWQnXG5cbmNvbnN0IExhYmVsV2l0aEFycm93ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgbGFiZWwsIG9uQ2xpY2sgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuTGFiZWxXaXRoQXJyb3dXcmFwcGVyIG9uQ2xpY2s9e29uQ2xpY2t9PlxuXHRcdFx0PFMuTGFiZWw+e2xhYmVsfTwvUy5MYWJlbD5cblx0XHRcdDxpbWdcblx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvYXJyb3cucG5nXCJcblx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYXJyb3dAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9hcnJvd0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9hcnJvd0AzeC5wbmcgM3hcIlxuXHRcdFx0Lz5cblx0XHQ8L1MuTGFiZWxXaXRoQXJyb3dXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhYmVsV2l0aEFycm93XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdHdpZHRoOiAxMDAlO1xuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi10b3A6IGF1dG87XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vTGF5b3V0LnN0eWxlZCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vZm9vdGVyJ1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFMuV3JhcHBlcj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDxTLkZvb3RlcldyYXBwZXI+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvUy5Gb290ZXJXcmFwcGVyPlxuXHRcdDwvUy5XcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IExpc3RJdGVtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1pbi1oZWlnaHQ6IDYwcHg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2VmZWZlZjtcbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtc2l6ZTogMjFweDtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xpc3RJdGVtLnN0eWxlZCdcblxuY29uc3QgTGlzdEl0ZW0gPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBsYWJlbCwgb25DbGljayB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5MaXN0SXRlbVdyYXBwZXIgb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8Uy5MYWJlbD57bGFiZWx9PC9TLkxhYmVsPlxuXHRcdDwvUy5MaXN0SXRlbVdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1tb2RhbCdcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuXHRjb250ZW50OiB7XG5cdFx0cGFkZGluZzogJzIwcHggMjBweCAwIDIwcHgnLFxuXHRcdGRpc3BsYXk6ICdmbGV4Jyxcblx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcblx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcblx0XHRtYXhXaWR0aDogJzcyNHB4Jyxcblx0XHRtYXhIZWlnaHQ6ICc2MDBweCcsXG5cdFx0bWFyZ2luTGVmdDogJ2F1dG8nLFxuXHRcdG1hcmdpblJpZ2h0OiAnYXV0bycsXG5cdFx0bWFyZ2luVG9wOiAnMTAlJyxcblx0XHR0b3A6IDAsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMCxcblx0XHRib3R0b206IDBcblx0fSxcblx0b3ZlcmxheToge1xuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC4yNScgXG5cdFx0Ly8gbWFyZ2luOiAnMjBweCcsXG5cdFx0Ly8gYmFja2dyb3VuZENvbG9yOiAnbm9uZSdcblx0fVxufVxuXG5jb25zdCBNRENNb2RhbCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGNoaWxkcmVuLCBtb2RhbFZpc2libGUsIG9uUmVxdWVzdENsb3NlIH0gPSBwcm9wc1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0TW9kYWwuc2V0QXBwRWxlbWVudCgnYm9keScpXG5cdH0sIFtdKVxuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbFxuXHRcdFx0aXNPcGVuPXttb2RhbFZpc2libGV9XG5cdFx0XHRvblJlcXVlc3RDbG9zZT17b25SZXF1ZXN0Q2xvc2V9XG5cdFx0XHRzdHlsZT17Y3VzdG9tU3R5bGVzfVxuXHRcdD5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L01vZGFsPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1EQ01vZGFsXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IFJlc2VhcmNoUGRmRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRtaW4taGVpZ2h0OiA1OTFweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1heC1oZWlnaHQ6IDYwMHB4O1xuXHRcdG1heC13aWR0aDogNzI0cHg7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRoZWlnaHQ6IDMycHg7XG5cdHdpZHRoOiAzMnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNiR3JleX07XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IENsb3NlSWNvbiA9IHN0eWxlZC5pbWdgXG5cdGhlaWdodDogMThweDtcblx0d2lkdGg6IDE4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXJnaW46IDAgNjBweDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW46IDAgMCAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5oNWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW4tYm90dG9tOiAwIDAgMThweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLWJvdHRvbTogMTJweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0XHQmOm50aC1jaGlsZCg2KSB7XG4gICAgICAgIFx0bWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBcdH1cblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRBbmNob3IgPSBzdHlsZWQuYWBcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4uL2lucHV0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vUmVzZWFyY2hQZGZGb3JtLnN0eWxlZCdcblxuY29uc3QgUmVzZWFyY2hQZGZGb3JtID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHtcblx0XHRmaXJzdE5hbWUsXG5cdFx0Y29tcGFueSxcblx0XHRlbWFpbCxcblx0XHRvbkNoYW5nZSxcblx0XHRvblN1Ym1pdCxcblx0XHRpc0Rpc2FibGVkLFxuXHRcdG9uUmVxdWVzdENsb3NlLFxuXHRcdHBkZkZvcm1cblx0fSA9IHByb3BzXG5cblx0cmV0dXJuIChcblx0XHQ8Uy5SZXNlYXJjaFBkZkZvcm1XcmFwcGVyPlxuXHRcdFx0PFMuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DbG9zZUljb25cblx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9jbG9zZUljb24ucG5nXCJcblx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9jbG9zZUljb24ucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9jbG9zZUljb25AMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9jbG9zZUljb25AM3gucG5nIDN4XCJcblx0XHRcdFx0XHRvbkNsaWNrPXtvblJlcXVlc3RDbG9zZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbWFnZVdyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFMuVGl0bGU+SnVzdCBvbmUgbGFzdCB0aGluZy4uPC9TLlRpdGxlPlxuXHRcdFx0XHQ8Uy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRUbyBnZXQgdGhpcyBjYXNlIHN0dWR5IGNvbXBsZXRlbHkgZnJlZSwgcGxlYXNlIGxlYXZlIHVzIHlvdXIgbmFtZSBhbmRcblx0XHRcdFx0XHRlbWFpbCBhZGRyZXNzIHRvIHJlY2VpdmUgZnV0dXJlIG5ld3MgYW5kIHVwZGF0ZXMuXG5cdFx0XHRcdDwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJOYW1lXCJcblx0XHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImZpcnN0TmFtZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17Zmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRcdFx0aXNSZXF1aXJlZD17dHJ1ZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRsYWJlbD1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwiam9obmRvZUBlbWFpbC5jb21cIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtlbWFpbH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0XHRcdGlzUmVxdWlyZWRcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRsYWJlbD1cIkNvbXBhbnlcIlxuXHRcdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJjb21wYW55IG5hbWVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImNvbXBhbnlcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2NvbXBhbnl9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PFMuQnV0dG9uV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5TdHlsZWRBbmNob3Jcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiAoaXNEaXNhYmxlZCA/IGUucHJldmVudERlZmF1bHQoKSA6ICgpID0+IHt9KX1cblx0XHRcdFx0XHRcdGhyZWY9e3BkZkZvcm19XG5cdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0YnRuVGV4dD1cIkRvd25sb2FkIFBERlwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uU3VibWl0fVxuXHRcdFx0XHRcdFx0XHRpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1MuU3R5bGVkQW5jaG9yPlxuXHRcdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHQ8L1MuUmVzZWFyY2hQZGZGb3JtV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNlYXJjaFBkZkZvcm1cbiIsImltcG9ydCB7IFNvY2lhbEljb24gYXMgUmVhY3RTb2NpYWxJY29uIH0gZnJvbSAncmVhY3Qtc29jaWFsLWljb25zJ1xuaW1wb3J0IHsgTURDX1BVUlBMRSwgV0hJVEUgfSBmcm9tICcuLi8uLi9hc3NldHMvY29sb3JzJ1xuXG5jb25zdCBTb2NpYWxJY29uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdXJsIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdFNvY2lhbEljb25cblx0XHRcdHVybD17dXJsfVxuXHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiA0MCwgd2lkdGg6IDQwLCBtYXJnaW5SaWdodDogMjAgfX1cblx0XHRcdGJnQ29sb3I9e01EQ19QVVJQTEV9XG5cdFx0XHRmZ0NvbG9yPXtXSElURX1cblx0XHQvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbEljb25cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG4vLyBpbXBvcnQgKiBhcyBTIGZyb20gJy4vU29sdXRpb25zRHJvcGRvd25NZW51LnN0eWxlZCdcclxuXHJcbmNvbnN0IFNvbHV0aW9uc0Ryb3Bkb3duTWVudSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sdXRpb25zRHJvcGRvd25NZW51XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1N0YXJ0RG93bmxvYWRGb3JtLnN0eWxlZCdcblxuY29uc3QgU3RhcnREb3dubG9hZEZvcm0gPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBvblJlcXVlc3RDbG9zZSwgcGRmRm9ybSwgb25TdWJtaXQgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuU3RhcnREb3dubG9hZEZvcm1XcmFwcGVyPlxuXHRcdFx0PFMuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DbG9zZUljb25cblx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9jbG9zZUljb24ucG5nXCJcblx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9jbG9zZUljb24ucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9jbG9zZUljb25AMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9jbG9zZUljb25AM3gucG5nIDN4XCJcblx0XHRcdFx0XHRvbkNsaWNrPXtvblJlcXVlc3RDbG9zZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbWFnZVdyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFMuVGl0bGU+U3RhcnQgeW91ciBkb3dubG9hZDwvUy5UaXRsZT5cblx0XHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0QWZ0ZXIgcmVhZGluZywgSWYgeW91J2QgbGlrZSB0byBsZWFybiBtb3JlIGFib3V0IGhvdyB3ZSBjYW4gaGVscCB5b3Vcblx0XHRcdFx0XHRvcHRpbWl6ZSB5b3VyIGRhdGEgc3BlbmQsIGdldCBpbiB0b3VjaCB3aXRoIG91ciB0ZWFtIGFuZCB3ZSdkIGJlIGhhcHB5XG5cdFx0XHRcdFx0dG8gaGVscCB5b3UuXG5cdFx0XHRcdDwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0PFMuQnV0dG9uV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5TdHlsZWRBbmNob3IgaHJlZj17cGRmRm9ybX0gdGFyZ2V0PVwiX2JsYW5rXCI+XG5cdFx0XHRcdFx0XHQ8QnV0dG9uIGJ0blRleHQ9XCJEb3dubG9hZFwiIG9uQ2xpY2s9e29uU3VibWl0fSAvPlxuXHRcdFx0XHRcdDwvUy5TdHlsZWRBbmNob3I+XG5cdFx0XHRcdDwvUy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdDwvUy5TdGFydERvd25sb2FkRm9ybVdyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhcnREb3dubG9hZEZvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgU3RhcnREb3dubG9hZEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0bWluLWhlaWdodDogNTYwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXgtaGVpZ2h0OiA2MDBweDtcblx0XHRtYXgtd2lkdGg6IDcyNHB4O1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YWxpZ24tc2VsZjogZmxleC1lbmQ7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0aGVpZ2h0OiAzMnB4O1xuXHR3aWR0aDogMzJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0Jjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5zYkdyZXl9O1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBDbG9zZUljb24gPSBzdHlsZWQuaW1nYFxuXHRoZWlnaHQ6IDE4cHg7XG5cdHdpZHRoOiAxOHB4O1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWFyZ2luOiAwIDYycHg7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0bGluZS1oZWlnaHQ6IDQ4cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luOiAwIDAgMTJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuaDVgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRsaW5lLWhlaWdodDogMjhweDtcblx0bWFyZ2luOiAwIDAgNDBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEFuY2hvciA9IHN0eWxlZC5hYFxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gXG4iLCJpbXBvcnQgU3RhcnREb3dubG9hZEZvcm0gZnJvbSAnLi9TdGFydERvd25sb2FkRm9ybSdcblxuZXhwb3J0IGRlZmF1bHQgU3RhcnREb3dubG9hZEZvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogNzJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLmJhY2tncm91bmRDb2xvciB8fCAndHJhbnNwYXJlbnQnfTtcbmBcblxuZXhwb3J0IGNvbnN0IE1vYmlsZVRhYldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUYWJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogbm9uZTtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdGB9XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IFRhYiA9IHN0eWxlZC5zcGFuYFxuXHRjb2xvcjogJHsocHJvcHMpID0+XG5cdFx0cHJvcHMuYmFyVGhlbWUgPT09ICdkYXJrJ1xuXHRcdFx0PyBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2tcblx0XHRcdDogcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRtYXJnaW4tcmlnaHQ6IDUwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0b3BhY2l0eTogMC42NTtcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG5cdH1cbmBcbmV4cG9ydCBjb25zdCBEcm9wRG93biA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBEcm9wRG93bkl0ZW0gPSBzdHlsZWQuYnV0dG9uYFxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGhlaWdodDogNDBweDtcblx0d2lkdGg6IDE2MHB4O1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwnXG5pbXBvcnQgSGFtYnVyZ2VyTWVudUNvbnRlbnQgZnJvbSAnLi4vaGFtYnVyZ2VyLW1lbnUtY29udGVudCdcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL1RhYkJhci5zdHlsZWQnXG5cbmNvbnN0IGxpbmtEYXRhID0gW1xuXHR7XG5cdFx0aHJlZjogJy9yZXNlYXJjaCcsXG5cdFx0dGFiTmFtZTogJ1Jlc2VhcmNoJ1xuXHR9LFxuXHR7XG5cdFx0aHJlZjogJy9jb250YWN0Jyxcblx0XHR0YWJOYW1lOiAnQ29udGFjdCdcblx0fSxcblx0e1xuXHRcdGhyZWY6ICcvc29sdXRpb25zJyxcblx0XHR0YWJOYW1lOiAnU29sdXRpb25zJ1xuXHR9LFxuXHR7XG5cdFx0aHJlZjogJy92aWRlb3MnLFxuXHRcdHRhYk5hbWU6ICdWaWRlb3MnXG5cdH1cbl1cblxuY29uc3QgVGFiQmFyID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgYmFyVGhlbWUsIGJhY2tncm91bmRDb2xvciB9ID0gcHJvcHNcblx0Y29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IHJlbmRlckxpbmtzID0gKCkgPT4ge1xuXHRcdHJldHVybiBsaW5rRGF0YS5tYXAoKGRhdGEpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxMaW5rIGtleT17ZGF0YS5ocmVmfSBocmVmPXtkYXRhLmhyZWZ9PlxuXHRcdFx0XHRcdDxTLlRhYiBiYXJUaGVtZT17YmFyVGhlbWV9PntkYXRhLnRhYk5hbWV9PC9TLlRhYj5cblx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0KVxuXHRcdH0pXG5cdH1cblxuXHRjb25zdCBXZWJUYWJCYXIgPSAoKSA9PiAoXG5cdFx0PFMuVGFiV3JhcHBlcj5cblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdDxTLlRhYj5cblx0XHRcdFx0XHR7YmFyVGhlbWUgPT09ICdkYXJrJyAmJiAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2sucG5nXCJcblx0XHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7YmFyVGhlbWUgIT09ICdkYXJrJyAmJiAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwucG5nXCJcblx0XHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWxAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbEAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1MuVGFiPlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0e3JlbmRlckxpbmtzKCl9XG5cdFx0PC9TLlRhYldyYXBwZXI+XG5cdClcblxuXHRjb25zdCBNb2JpbGVUYWJCYXIgPSAoKSA9PiAoXG5cdFx0PFMuTW9iaWxlVGFiV3JhcHBlcj5cblx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0e2JhclRoZW1lID09PSAnZGFyaycgJiYgKFxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0e2JhclRoZW1lICE9PSAnZGFyaycgJiYgKFxuXHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWxAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWxAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IG9uQ2xpY2s9eygpID0+IHNldE1vZGFsVmlzaWJsZSh0cnVlKX0+XG5cdFx0XHRcdHtiYXJUaGVtZSA9PT0gJ2RhcmsnICYmIChcblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9ibGFjay1oYW1idXJnZXIucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2JsYWNrLWhhbWJ1cmdlci5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2JsYWNrLWhhbWJ1cmdlckAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvYmxhY2staGFtYnVyZ2VyQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2JhclRoZW1lICE9PSAnZGFyaycgJiYgKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2hhbWJ1cmdlci5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvaGFtYnVyZ2VyLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvaGFtYnVyZ2VyQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9oYW1idXJnZXJAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9TLk1vYmlsZVRhYldyYXBwZXI+XG5cdClcblxuXHRyZXR1cm4gKFxuXHRcdDxTLldyYXBwZXIgdGhlbWVEYXJrPXt0cnVlfSBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn0+XG5cdFx0XHQ8V2ViVGFiQmFyIC8+XG5cdFx0XHQ8TW9iaWxlVGFiQmFyIC8+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0bW9kYWxWaXNpYmxlPXttb2RhbFZpc2libGV9XG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfVxuXHRcdFx0PlxuXHRcdFx0XHQ8SGFtYnVyZ2VyTWVudUNvbnRlbnQgb25DbG9zZU1vZGFsPXsoKSA9PiBzZXRNb2RhbFZpc2libGUoZmFsc2UpfSAvPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8L1MuV3JhcHBlcj5cblx0KVxufVxuXG5UYWJCYXIuZGVmYXVsdFByb3BzID0ge1xuXHRiYXJUaGVtZTogJ2xpZ2h0J1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJCYXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBUZXh0RmllbGRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLnNwYW5gXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDI4cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuYFxuXG5leHBvcnQgY29uc3QgRmllbGQgPSBzdHlsZWQudGV4dGFyZWFgXG5cdGJvcmRlcjogc29saWQgMXB4ICNjOGM4Yzg7XG5cdGhlaWdodDogMTI1cHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiA2cHggMCAwIDE0cHg7XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG5cdHJlc2l6ZTogbm9uZTtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBPcGVyYS9JRSA4KyAqL1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1RleHRmaWVsZC5zdHlsZWQnXG5cbmNvbnN0IFRleHRmaWVsZCA9ICh7IGxhYmVsLCB2YWx1ZSwgbmFtZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyIH0pID0+IChcblx0PFMuVGV4dEZpZWxkV3JhcHBlcj5cblx0XHQ8Uy5MYWJlbD57bGFiZWx9PC9TLkxhYmVsPlxuXHRcdDxTLkZpZWxkXG5cdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRuYW1lPXtuYW1lfVxuXHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuXHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdC8+XG5cdDwvUy5UZXh0RmllbGRXcmFwcGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0ZmllbGRcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgVGhhbmtZb3VXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuYFxuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLWJvdHRvbTogMjlweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0bWFyZ2luOiAwIDAgOXB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsaW5lLWhlaWdodDogNDhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmg1YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMCAwIDQ0cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwIDAgNjNweDtcbiAgICBtYXgtd2lkdGg6IDM0NHB4O1xuICBgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi9hbmltYXRlZC1mb290ZXItbGluaydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9UaGFua1lvdS5zdHlsZWQnXG5cbmNvbnN0IFRoYW5rWW91ID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgZGVzY3JpcHRpb24sIGhyZWYsIGZvb3Rlck1lc3NhZ2UsIG9uQ2xpY2sgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuVGhhbmtZb3VXcmFwcGVyPlxuXHRcdFx0PFMuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvcHVycGxlLWNoZWNrLW1hcmsucG5nXCJcblx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9wdXJwbGUtY2hlY2stbWFyay5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3B1cnBsZS1jaGVjay1tYXJrQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9wdXJwbGUtY2hlY2stbWFya0AzeC5wbmcgM3hcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkltYWdlV3JhcHBlcj5cblx0XHRcdDxTLlRpdGxlPlRoYW5rIFlvdTwvUy5UaXRsZT5cblx0XHRcdDxTLkRlc2NyaXB0aW9uPntkZXNjcmlwdGlvbn08L1MuRGVzY3JpcHRpb24+XG5cdFx0XHQ8QW5pbWF0ZWRGb290ZXJMaW5rXG5cdFx0XHRcdG1lc3NhZ2U9e2Zvb3Rlck1lc3NhZ2V9XG5cdFx0XHRcdGhyZWY9e2hyZWZ9XG5cdFx0XHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdFx0XHQvPlxuXHRcdDwvUy5UaGFua1lvdVdyYXBwZXI+XG5cdClcbn1cblxuVGhhbmtZb3UuZGVmYXVsdFByb3BzID0ge1xuXHRlbWFpbDogJ3lvdXIgZW1haWwgYWRkcmVzcycsXG5cdG9uQ2xpY2s6ICgpID0+IHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoYW5rWW91XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWNrZXJUYXBlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5fcmVmID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxyXG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vczMudHJhZGluZ3ZpZXcuY29tL2V4dGVybmFsLWVtYmVkZGluZy9lbWJlZC13aWRnZXQtdGlja2VyLXRhcGUuanNcIlxyXG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWVcclxuICAgICAgICBzY3JpcHQuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBcInN5bWJvbHNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBCQUNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkJBQ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGV0I6IEJSRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkZXQjpCUkZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSEtFWDogMzg4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiSEtFWDozODhcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogQlhcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkJYXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFNRVg6IENCT0VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJBTUVYOkNCT0VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBDTUNTQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpDTUNTQVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IENNRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpDTUVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBDTVRYXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOkNNVFhcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBDT1dOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROkNPV05cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogRE5CXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpETkJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogRE9XXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpET1dcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBFTVlJRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpFTVlJRlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQVBJVEFMQ09NOiBFUk1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJDQVBJVEFMQ09NOkVSTVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IEZEUlZGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOkZEUlZGXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IEZEU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6RkRTXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IEZJU1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6RklTXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogRkxFWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpGTEVYXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IElBQ0FcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOklBQ0FcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogSUNFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpJQ0VcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBJRkpQWVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpJRkpQWVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQVBJVEFMQ09NOiBJTkZcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJDQVBJVEFMQ09NOklORlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBJTkZPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpJTkZPXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNTRTogSVBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJDU0U6SVBcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQVNYOiBJUkVcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJBU1g6SVJFXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogSVZGWkZcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6SVZGWkZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogSlBNXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpKUE1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTFNFOiBMU0VHXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTFNFOkxTRUdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBNQVRXXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROk1BVFdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogTUNPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpNQ09cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ0JPVDogTUNYMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkNCT1Q6TUNYMSFcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBNS1RYXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROk1LVFhcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBNTlhCWVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpNTlhCWVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IE1PUk5cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6TU9STlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBNU0NJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpNU0NJXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogTVZFTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpNVkVOXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogTkRBUVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpOREFRXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IE5NUlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6Tk1SXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogTldFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROk5XRVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IE5XU0FcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6TldTQVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBPUkNMXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpPUkNMXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IFBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOlBPU1RcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBQU0VDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROlBTRUNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTFNFOiBQVEVDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTFNFOlBURUNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTFNFOiBSRUxcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJMU0U6UkVMXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogUkxYWEZcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6UkxYWEZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogU0tZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpTS1lcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogU1BHSVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6U1BHSVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IFNTTkNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6U1NOQ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBTVFRcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOlNUVFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMU0U6IFRDQVBcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJMU0U6VENBUFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBUUklcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOlRSSVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBTUVYOiBUVEFDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQU1FWDpUVEFDXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogVFREXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROlRURFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IFRXXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROlRXXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IFdBVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6V0FUXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogV1NDT1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpXU0NPXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJzaG93U3ltYm9sTG9nb1wiOiB0cnVlLFxyXG4gICAgICAgICAgICBcImNvbG9yVGhlbWVcIjogXCJsaWdodFwiLFxyXG4gICAgICAgICAgICBcImlzVHJhbnNwYXJlbnRcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwiZGlzcGxheU1vZGVcIjogXCJyZWd1bGFyXCIsXHJcbiAgICAgICAgICAgIFwibG9jYWxlXCI6IFwiZW5cIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5fcmVmLmN1cnJlbnQuYXBwZW5kQ2hpbGQoc2NyaXB0KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWRpbmd2aWV3LXdpZGdldC1jb250YWluZXJcIiByZWY9e3RoaXMuX3JlZn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWRpbmd2aWV3LXdpZGdldC1jb250YWluZXJfX3dpZGdldFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFkaW5ndmlldy13aWRnZXQtY29weXJpZ2h0XCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LnRyYWRpbmd2aWV3LmNvbVwiIHJlbD1cIm5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj48c3BhbiBjbGFzc05hbWU9XCJibHVlLXRleHRcIj5UaWNrZXIgVGFwZTwvc3Bhbj48L2E+IGJ5IFRyYWRpbmdWaWV3PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufSIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKGFzLCByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX2kxOG5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgdGhpcy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoXG4gICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgZGVzdGluYXRpb24sXG4gICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuXHRMYXlvdXQsXG5cdE1vZGFsLFxuXHRUaGFua1lvdSxcblx0UmVzZWFyY2hQZGZGb3JtLFxuXHRTdGFydERvd25sb2FkRm9ybSxcblx0Q29udGFjdEZvb3RlclxufSBmcm9tICcuLi9jb21wb25lbnRzJ1xuaW1wb3J0IHtcblx0TGFuZGluZyxcblx0TGVhZGVyTWFya2V0RGF0YSxcblx0V29ya2VkV2l0aCxcblx0V2h5TWRjLFxuXHRTZXJ2aWNlcyxcblx0UmVzZWFyY2hcbn0gZnJvbSAnLi4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uJ1xuXG5pbXBvcnQgcGRmTWFwcGVyIGZyb20gJy4uL3V0aWxzL3BkZk1hcHBlcidcblxuLy8gVXRpbHNcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tICcuLi91dGlscy92YWxpZGF0b3InXG5pbXBvcnQgeyBzZW5kRW1haWwgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlTZXJ2aWNlJ1xuXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJy4uL3N0b3JlL3VzZVN0b3JlJ1xuaW1wb3J0IHsgVVNFUl9TSUdORURfVVAgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25UeXBlcydcblxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWF4LXdpZHRoOiAxMjAwcHg7XG5cdHBhZGRpbmc6IDAgMjBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cbmBcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblx0Y29uc3QgW21vZGFsVmlzaWJsZSwgc2V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbaGFzRXJyb3IsIHNldEhhc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbZW1haWxTZW50LCBzZXRFbWFpbFNlbnRdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtwZGZGb3JtLCBzZXRQZGZGb3JtXSA9IHVzZVN0YXRlKCcnKVxuXG5cdGNvbnN0IFtmb3JtLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcblx0XHRmaXJzdE5hbWU6ICcnLFxuXHRcdGNvbXBhbnk6ICcnLFxuXHRcdGVtYWlsOiAnJ1xuXHR9KVxuXG5cdC8vIEhvb2tzIHRvIHNhdmUgdGhlIHVzZXJzIGZvcm0gZGF0YVxuXHRjb25zdCB7IHN0YXRlLCBkaXNwYXRjaCB9ID0gdXNlU3RvcmUoKVxuXHRjb25zdCBzYXZlVXNlciA9IHVzZUNhbGxiYWNrKFxuXHRcdChmb3JtVmFsdWVzKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFVTRVJfU0lHTkVEX1VQLCBwYXlsb2FkOiBmb3JtVmFsdWVzIH0pLFxuXHRcdFtkaXNwYXRjaF1cblx0KVxuXG5cdGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBzZW5kRW1haWwoZm9ybSlcblx0XHRcdGlmIChyZXMuZXJyb3IpIHtcblx0XHRcdFx0c2V0SGFzRXJyb3IodHJ1ZSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFNhdmUgdXNlciBmb3JtIHRvIHN0b3JlXG5cdFx0XHRcdHNhdmVVc2VyKHtcblx0XHRcdFx0XHRuYW1lOiBmb3JtLmZpcnN0TmFtZSxcblx0XHRcdFx0XHRjb21wYW55OiBmb3JtLmNvbXBhbnksXG5cdFx0XHRcdFx0ZW1haWw6IGZvcm0uZW1haWxcblx0XHRcdFx0fSlcblx0XHRcdFx0c2V0RW1haWxTZW50KHRydWUpXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRzZXRIYXNFcnJvcih0cnVlKVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IHVwZGF0ZUZpZWxkID0gKGUpID0+IHtcblx0XHRzZXRGb3JtVmFsdWVzKHtcblx0XHRcdC4uLmZvcm0sXG5cdFx0XHRbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IG9uTW9kYWxDbG9zZSA9ICgpID0+IHtcblx0XHRzZXRNb2RhbFZpc2libGUoZmFsc2UpXG5cdFx0c2V0RW1haWxTZW50KGZhbHNlKVxuXHR9XG5cblx0Y29uc3Qgb3Blbk1vZGFsID0gKHJlc2VhcmNoRm9ybSkgPT4ge1xuXHRcdHNldE1vZGFsVmlzaWJsZSh0cnVlKVxuXHRcdHNldFBkZkZvcm0ocGRmTWFwcGVyW3Jlc2VhcmNoRm9ybV0pXG5cdH1cblxuXHRjb25zdCBpc0Rpc2FibGVkID0gIWZvcm0uZmlyc3ROYW1lICYmICF2YWxpZGF0ZUVtYWlsKGZvcm0uZW1haWwpXG5cblx0cmV0dXJuIChcblx0XHQ8TGF5b3V0PlxuXHRcdFx0PExhbmRpbmcgLz5cblx0XHRcdDxNb2RhbCBtb2RhbFZpc2libGU9e21vZGFsVmlzaWJsZX0gb25SZXF1ZXN0Q2xvc2U9e29uTW9kYWxDbG9zZX0+XG5cdFx0XHRcdHshZW1haWxTZW50ICYmICFoYXNFcnJvciAmJiAhc3RhdGUudXNlciAmJiAoXG5cdFx0XHRcdFx0PFJlc2VhcmNoUGRmRm9ybVxuXHRcdFx0XHRcdFx0Zmlyc3ROYW1lPXtmb3JtLmZpcnN0TmFtZX1cblx0XHRcdFx0XHRcdGNvbXBhbnk9e2Zvcm0uY29tcGFueX1cblx0XHRcdFx0XHRcdGVtYWlsPXtmb3JtLmVtYWlsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e3VwZGF0ZUZpZWxkfVxuXHRcdFx0XHRcdFx0aXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvbk1vZGFsQ2xvc2V9XG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17b25TdWJtaXR9XG5cdFx0XHRcdFx0XHRwZGZGb3JtPXtwZGZGb3JtfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHshZW1haWxTZW50ICYmICFoYXNFcnJvciAmJiBzdGF0ZS51c2VyICYmIChcblx0XHRcdFx0XHQ8U3RhcnREb3dubG9hZEZvcm1cblx0XHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXtvbk1vZGFsQ2xvc2V9XG5cdFx0XHRcdFx0XHRwZGZGb3JtPXtwZGZGb3JtfVxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eygpID0+IHNldEVtYWlsU2VudCh0cnVlKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7ZW1haWxTZW50ICYmICFoYXNFcnJvciAmJiAoXG5cdFx0XHRcdFx0PFRoYW5rWW91XG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cIllvdXIgZG93bmxvYWQgc2hvdWxkIHN0YXJ0IGF1dG9tYXRpY2FsbHkuIEVuam95IVwiXG5cdFx0XHRcdFx0XHRmb290ZXJNZXNzYWdlPVwiQmFjayB0byByZXNlYXJjaFwiXG5cdFx0XHRcdFx0XHRocmVmPVwiL3Jlc2VhcmNoXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e29uTW9kYWxDbG9zZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Nb2RhbD5cblx0XHRcdDxDb250ZW50V3JhcHBlcj5cblx0XHRcdFx0PExlYWRlck1hcmtldERhdGEgLz5cblx0XHRcdFx0PFdvcmtlZFdpdGggLz5cblx0XHRcdFx0PFdoeU1kYyAvPlxuXHRcdFx0XHQ8U2VydmljZXMgLz5cblx0XHRcdFx0PFJlc2VhcmNoIG9uQ2xpY2s9e29wZW5Nb2RhbH0gLz5cblx0XHRcdDwvQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8Q29udGFjdEZvb3RlciAvPlxuXHRcdDwvTGF5b3V0PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTGFuZGluZyB9IGZyb20gJy4vbGFuZGluZydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGVhZGVyTWFya2V0RGF0YSB9IGZyb20gJy4vbGVhZGVyLW1hcmtldC1kYXRhJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNlYXJjaCB9IGZyb20gJy4vcmVzZWFyY2gnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2h5TWRjIH0gZnJvbSAnLi93aHktbWRjJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXb3JrZWRXaXRoIH0gZnJvbSAnLi93b3JrZWQtd2l0aCdcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgTGFuZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYFxuXG5leHBvcnQgY29uc3QgQmFubmVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0NnB4KTtcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2dpZnMvZmluYW5jaWFsLWJ1c2luZXNzLWNoYXJ0LmdpZicpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHBhZGRpbmc6IDAgMjBweDtcblxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDIuMjVlbTtcblx0bGluZS1oZWlnaHQ6IDFlbTtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRwYWRkaW5nOiA4dmggMCAwLjVlbSAwO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmb250LXNpemU6IDMuNWVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxZW07XG5cdFx0cGFkZGluZzogMTV2aCAwIDAuNWVtIDA7XG5cdGB9XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0Zm9udC1zaXplOiAzZW07XG5cdFx0bGluZS1oZWlnaHQ6IDFlbTtcblx0XHRwYWRkaW5nOiAxNXZoIDAgMC41ZW0gMDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMS4xNWVtO1xuXHRsaW5lLWhlaWdodDogMWVtO1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdG1hcmdpbjogMCAwIDQycHggMDtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0bWF4LXdpZHRoOiA3MjBweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAxLjZlbTtcblx0XHRsaW5lLWhlaWdodDogMWVtO1xuICBcdGB9XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0Zm9udC1zaXplOiAxLjZlbTtcblx0XHRsaW5lLWhlaWdodDogMWVtO1xuICBcdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRtYXgtd2lkdGg6IDM0MHB4O1xuXHRtYXJnaW46IDAgMCAzOHB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIFx0bWF4LXdpZHRoOiAzODBweDtcbiAgYH1cbmBcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vTGFuZGluZy5zdHlsZWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9uJ1xuaW1wb3J0IFRhYkJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RhYi1iYXInXG5pbXBvcnQgVGlja2VyVGFwZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3RpY2tlci10YXBlJ1xuXG5jb25zdCBMYW5kaW5nID0gKCkgPT4ge1xuXHRyZXR1cm4gPFMuTGFuZGluZ1dyYXBwZXI+XG5cdFx0PFMuQmFubmVyV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8VGFiQmFyIC8+XG5cdFx0XHRcdDxTLlRpdGxlPlxuXHRcdFx0XHRcdEluZHVzdHJ5IHJlc2VhcmNoIGJ5XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0aW5kdXN0cnkgZXhwZXJ0cy5cblx0XHRcdFx0PC9TLlRpdGxlPlxuXHRcdFx0XHQ8Uy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRXZSBhcmUgYSBib3V0aXF1ZSBjb25zdWx0aW5nIGZpcm0gc2VydmluZyB0aGUgZmluYW5jaWFsIGluZm9ybWF0aW9uXG5cdFx0XHRcdFx0c2VydmljZXMgaW5kdXN0cnkuIE91ciBjb25zdWx0YW50cyBhcmUgaW5kdXN0cnkgZXhwZXJ0cyBvbiBtYXJrZXQgYW5kXG5cdFx0XHRcdFx0cmVmZXJlbmNlIGRhdGEgcHJvZHVjdHMgYW5kIGludmVzdG1lbnQgbWFuYWdlbWVudCBzb2x1dGlvbnMuXG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0QXMgTm9ydGggQW1lcmljYSdzIGxlYWRpbmcgbWFya2V0IGRhdGEgc29sdXRpb25zIGNvbnN1bHRhbmN5IHdlIHVuZGVyc3RhbmRcblx0XHRcdFx0XHR0aGUgaW1wb3J0YW5jZSBvZiBkYXRhIGluIHRoZSBmaW5hbmNpYWwgbWFya2V0cyBhbmQgZ2xvYmFsIGVjb25vbXkuXG5cdFx0XHRcdDwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0PFMuQnV0dG9uV3JhcHBlcj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRidG5UZXh0PVwiVmlldyBSZXNlYXJjaFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3Jlc2VhcmNoJyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRidG5UZXh0PVwiQ29udGFjdCB1c1wiXG5cdFx0XHRcdFx0XHRpc0RlZmF1bHQ9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9jb250YWN0Jyl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdFx0PC9TLkJhbm5lcldyYXBwZXI+XG5cdFx0PGRpdj48VGlja2VyVGFwZSAvPjwvZGl2PlxuXHQ8L1MuTGFuZGluZ1dyYXBwZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmciLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IExlYWRlck1hcmtldERhdGFXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdG1hcmdpbjogNDBweCAwIDYwcHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luOiA4MHB4IDAgODBweCAwO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmb250LXNpemU6IDM2cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogNzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbmZvVGV4dCA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XHRcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjZweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW46IDAgMCAyNHB4IDA7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRgfVx0XG5gXG5cbmV4cG9ydCBjb25zdCBGYWN0c1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tbGVmdDogNDBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFByb2plY3RzQ29tcGxldGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1yaWdodDogMWVtO1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBOdW1iZXJUZXh0ID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRsaW5lLWhlaWdodDogMzZweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0bWFyZ2luOiAwIDAgMTBweCAwO1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRmb250LXNpemU6IDQ4cHg7XG5cdGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBgfVxuXG5gXG5cbmV4cG9ydCBjb25zdCBGYWN0c1RleHQgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmV5fTtcblx0bWFyZ2luOiAwO1xuXG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJUZXh0ID0gc3R5bGVkLmFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6ICMzZDAwOTk7XG5cdFx0dHJhbnNpdGlvbjogY29sb3IgMC4yNXMgZWFzZTtcblx0fVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xlYWRlck1hcmtldERhdGEuc3R5bGVkJ1xuXG5jb25zdCBMZWFkZXJNYXJrZXREYXRhID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxTLkxlYWRlck1hcmtldERhdGFXcmFwcGVyPlxuXHRcdFx0PFMuQ29udGVudD5cblx0XHRcdFx0PFMuSW5mb1dyYXBwZXI+XG5cdFx0XHRcdFx0PFMuVGl0bGU+TGVhZGVyIGluIG1hcmtldCBkYXRhIGNvbnN1bHRpbmc8L1MuVGl0bGU+XG5cdFx0XHRcdFx0PFMuSW5mb1RleHQ+XG5cdFx0XHRcdFx0XHRNYXJrZXQgRGF0YSBDb21wYW55IGlzIGEgcHJvZmVzc2lvbmFsIGNvbnN1bHRpbmcgZmlybSB3aXRoIGV4cGVydHNcblx0XHRcdFx0XHRcdHNraWxsZWQgaW4gbWFya2V0IGRhdGEgcHJvZHVjdHMsIHNvbHV0aW9ucyBhbmQgY29udHJhY3QgdmVuZG9yIG1hbmFnZW1lbnQuXG5cdFx0XHRcdFx0XHRXZSBhcmUgY29tbWl0dGVkIHRvIGhlbHBpbmcgdGVhbXMgdW5jb3ZlciBpbnNpZ2h0cyB0aGF0XG5cdFx0XHRcdFx0XHRpbXByb3ZlIGhvdyB0aGV5IG1hbmFnZSB0aGVpciBtYXJrZXQgYW5kIHJlZmVyZW5jZSBkYXRhIHJlbGF0aW9uc2hpcHMuXG5cdFx0XHRcdFx0PC9TLkluZm9UZXh0PlxuXHRcdFx0XHRcdDxTLkluZm9UZXh0PlxuXHRcdFx0XHRcdFx0V2UgcGFydG5lciB3aXRoIG91ciBjbGllbnRzIHRvIGFuc3dlciB0aGUgZ3Jvd2luZyBkZW1hbmRzIG9mIHRoZWlyXG5cdFx0XHRcdFx0XHRidXNpbmVzcyBieSBwcm92aWRpbmcgdGhlIGV4cGVydGlzZSBpbiB0aGUgZGV0YWlscyB0aGF0IGxlYWQgdG9cblx0XHRcdFx0XHRcdGluY3JlYXNlZCBwcm9maXRhYmlsaXR5LiBTcGVjaWZpY2FsbHksIHdlIG9mZmVyIGEgc2VyaWVzIG9mXG5cdFx0XHRcdFx0XHRkaWFnbm9zdGljIHRvb2xzIHRoYXQgZHJpdmUgZG93biBjb3N0cyB3aGlsZSBvcHRpbWl6aW5nIHNlcnZpY2VzLlxuXHRcdFx0XHRcdFx0TGVhcm4gbW9yZSBhYm91dCBob3cgb3VyIERhdGEgTGljZW5zZSBDb21wbGlhbmNlIE1hbmFnZXIgdG9vbCBjYW5cblx0XHRcdFx0XHRcdGJlbmVmaXQgeW91ciBidXNpbmVzcyBpbiB0aGUgdmlkZW8gYmVsb3c6XG5cdFx0XHRcdFx0PC9TLkluZm9UZXh0PlxuXHRcdFx0XHQ8L1MuSW5mb1dyYXBwZXI+XG5cdFx0XHRcdDxTLkZhY3RzV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Qcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8Uy5OdW1iZXJUZXh0PjE0NzwvUy5OdW1iZXJUZXh0PlxuXHRcdFx0XHRcdFx0PFMuRmFjdHNUZXh0PlByb2plY3RzIGNvbXBsZXRlZDwvUy5GYWN0c1RleHQ+XG5cdFx0XHRcdFx0PC9TLlByb2plY3RzQ29tcGxldGVkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Qcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8Uy5OdW1iZXJUZXh0PiQzNTRNTTwvUy5OdW1iZXJUZXh0PlxuXHRcdFx0XHRcdFx0PFMuRmFjdHNUZXh0PkNsaWVudCBkb2xsYXJzIHNhdmVkPC9TLkZhY3RzVGV4dD5cblx0XHRcdFx0XHQ8L1MuUHJvamVjdHNDb21wbGV0ZWRXcmFwcGVyPlxuXHRcdFx0XHQ8L1MuRmFjdHNXcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnQ+XG5cdFx0PC9TLkxlYWRlck1hcmtldERhdGFXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlck1hcmtldERhdGFcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgUmVzZWFyY2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ2gtaXRlbXM6IGZsZXgtc3RhcnQ7XG5cdG1hcmdpbi1ib3R0b206IDU1cHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogNzgwcHg7XG5gfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMCAwIDEzcHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjM2QwMDk5O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBbmltYXRlZENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkJ1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1Jlc2VhcmNoLnN0eWxlZCdcblxuY29uc3QgUmVzZWFyY2ggPSAoeyBvbkNsaWNrIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5SZXNlYXJjaFdyYXBwZXI+XG5cdFx0XHQ8Uy5IZWFkZXJXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5IZWFkZXJUaXRsZT5SZXNlYXJjaCAmYW1wOyBDYXNlIFN0dWRpZXM8L1MuSGVhZGVyVGl0bGU+XG5cdFx0XHRcdDxTLkhlYWRlckRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdE1EQyBoYXMgY29tcGxldGVkIGV4dGVuc2l2ZSByZXNlYXJjaCBvdmVyIHRoZSBwYXN0IDEwIHllYXJzLiBPdXIgZmluZGluZ3MgaGF2ZSBiZWVuIGxpbmtlZFxuXHRcdFx0XHRcdHRvIHRoZSBzdHJlbmd0aCBvZiBhIGZpcm1zIG9wZXJhdGlvbmFsIG1hbmFnZW1lbnQsIGFuZCBjYW4gYmUgdXNlZCB0byBpbXByb3ZlIFxuXHRcdFx0XHRcdGNhcGFiaWxpdGllcyBhY3Jvc3MgY2xpZW50IGludGVsbGlnZW5jZSwgdHJhZGluZyBzdHJhdGVnaWVzLCBhbmQgYnVzaW5lc3Ncblx0XHRcdFx0XHRwcm9kdWN0aXZpdHkuXG5cdFx0XHRcdDwvUy5IZWFkZXJEZXNjcmlwdGlvbj5cblx0XHRcdDwvUy5IZWFkZXJXcmFwcGVyPlxuXHRcdFx0PFMuQ2FyZENvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8QW5pbWF0ZWRDYXJkXG5cdFx0XHRcdFx0XHR0aXRsZT1cIkRhdGEgTWFuYWdlbWVudCBDb21wbGlhbmNlOiBUaGUgUmlnaHQgdG8gQXVkaXRcIlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJUSEUgUklHSFQgVE8gQVVESVQgaXMgYSBjb21tb24gcGhyYXNlIHVzZWQgaW4gbW9zdCBldmVyeSBEYXRhIFZlbmRvciBvciBFeGNoYW5nZSBBZ3JlZW1lbnQgKERhdGEgUHJvdmlkZXIgQWdyZWVtZW50cykuIEl0IGlzIG5laXRoZXIgbmV3LCBtaXN1bmRlcnN0b29kLCBub3IgbWlzcmVwcmVzZW50ZWQuIFlldCB0aGlzIHRlcm0gaGFzIHdyZWFrZWQgaGF2b2Mgb2YgbGF0ZSwgYXMgaXQgZXhwb3NlcyB0aGUgdGhyZWUgbW9kZXJuIGRheSBwbGFndWVzIGNhdXNpbmcgY29uc2lkZXJhYmxlIGRpc3RyZXNzIGFtb25nc3QgZmluYW5jaWFsLi4uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ3JpZ2h0VG9BdWRpdCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PEFuaW1hdGVkQ2FyZFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUaGUgVmFsdWUgb2YgTWFya2V0IERhdGEgQWRtaW5pc3RyYXRpb246IFRyYW5zcGFyZW5jeSwgQWNjb3VudGFiaWxpdHkgJiBHb3Zlcm5hbmNlXCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPVwiQVMgRklOQU5DSUFMIEZJUk1TIEdSQVBQTEUgd2l0aCBpbmNyZWFzaW5nIGRlbWFuZHMgZm9yIG1hcmtldCBkYXRhLCBkZWFsaW5nIHdpdGggdGhlIG51bWJlciBhbmQgY29tcGxleGl0eSBvZiBtYXJrZXQgZGF0YSBsaWNlbnNlcyBhbmQgc3Vic2NyaXB0aW9ucyBjYW4gYmUgb3ZlcndoZWxtaW5nLiBUaGUgdm9sdW1lIGFuZCB2YXJpZXR5IGNoYWxsZW5nZXMgdGhlaXIgYWJpbGl0eSB0byBlZmZlY3RpdmVseSBtYW5hZ2UgY29zdHMsIGNvbnRyb2wgdXNlci1hY2Nlc3MsIG1vbml0b3IgdXNhZ2UsIGFuZCBwcm9kdWNlIC4uLlwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2UnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdDxTLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHRcdDxBbmltYXRlZENhcmRcblx0XHRcdFx0XHRcdHRpdGxlPVwiTURDIEZvcmVjYXN0cyAxMC0xMyUgSW5jcmVhc2UgaW4gRGF0YSBTcGVuZFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cIldJVEhPVVQgQU5ZIENIQU5HRSB0byBjb25zdW1wdGlvbiwgc2VydmljZSBtaXgsIG9yIGV2ZW4gYW5udWFsIHByaWNlIGluY3JlYXNlcywgQ2FuYWRpYW4tYmFzZWQgZmluYW5jaWFsIHNlcnZpY2VzIGZpcm1zIGNhbiBleHBlY3QgYSArMTAlIHByaWNlIGluY3JlYXNlIGluIHRoZWlyIE1hcmtldCBhbmQgUmVmZXJlbmNlIERhdGEgc3BlbmQgZm9yIDIwMTQuIFRvIHVuZGVyc3RhbmQgd2h5LCBmaXJtcyBuZWVkIG9ubHkgbG9vayB0byB0aGUgZmFsbCBvZiB0aGUgQ0FEJCByZWxhdGl2ZSB0byB0aGUgVVMkIGZvciB0aGUgY2hhbmdlIHRoYXQgd2lsbCBpbXBhY3QgdGhlaXIgZ2VuZXJhbCBsZWRnZXJzLi4uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2RhdGFTcGVuZCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdDwvUy5DYXJkQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8QW5pbWF0ZWRGb290ZXJMaW5rIG1lc3NhZ2U9XCJWaWV3IGFsbCBvZiBvdXIgcmVzZWFyY2hcIiBocmVmPVwiL3Jlc2VhcmNoXCIgLz5cblx0XHQ8L1MuUmVzZWFyY2hXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdG1hcmdpbi1ib3R0b206IDgzcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDE2MHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tYm90dG9tOiA0M3B4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiA0OXB4O1xuICAgIG1heC13aWR0aDogNzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAwIDIwcHggMDtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAyNnB4O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuXHRtYXJnaW4tdG9wOiA2cHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgfVxuXG4gICR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTIwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDA7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlclRleHQgPSBzdHlsZWQuYWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogIzNkMDA5OTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlO1xuXHR9XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi10b3A6IC05OHB4O1xuICBgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1NlcnZpY2VzLnN0eWxlZCdcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFMuU2VydmljZXNXcmFwcGVyPlxuXHRcdFx0PFMuSGVhZGVyV3JhcHBlcj5cblx0XHRcdFx0PFMuSGVhZGVyVGl0bGU+SG93IG91ciBzZXJ2aWNlcyBhZGQgaW5zaWdodCB0byB5b3VyIGJ1c2luZXNzPC9TLkhlYWRlclRpdGxlPlxuXHRcdFx0XHQ8Uy5IZWFkZXJEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRUYWtpbmcgQmVuY2htYXJraW5nIHRvIGFuIGVudGlyZWx5IGRpZmZlcmVudCBsZXZlbCwgb3VyIG1hcmtldGluZyBkYXRhXG5cdFx0XHRcdFx0c2VydmljZXMgb2ZmZXJzIHlvdSBleGNlcHRpb25hbCBpbnNpZ2h0IGludG8gZGF0YSBiZWluZyBjb25zdW1lZCBieVxuXHRcdFx0XHRcdHRoZSBjYXBpdGFsIG1hcmtldHMgYW5kIHdlYWx0aCBpbmR1c3RyeS4gV2l0aCBvdXIgY3VycmVudCBzb2x1dGlvbnMsIHlvdVxuXHRcdFx0XHRcdGdhaW4gdGhlIGluc2lnaHRzIHRvXG5cdFx0XHRcdFx0dGFrZSB5b3VyIHN0cmF0ZWd5IHRvIHRoZSBuZXh0IGxldmVsLlxuXHRcdFx0XHQ8L1MuSGVhZGVyRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuSGVhZGVyV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXMucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXNAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tYW5hZ2VkLXNlcnZpY2VzQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXNAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTLkNhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0PFMuQ2FyZFRpdGxlPlRyYWRpbmcgdGVjaG5vbG9neSBtYW5hZ2VkIHNlcnZpY2VzIGFuZCBwcm9kdWN0czwvUy5DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRcdE91ciBjbGllbnRzIGFyZSBjcml0aWNhbCBhYm91dCBwcm92aWRpbmcgdGhlIHJpZ2h0IGRhdGEgdG8gdGhlaXIgc3Rha2Vob2xkZXJzLiBUaGF0JiMzOTtzIHdoeVxuXHRcdFx0XHRcdFx0XHRvdXIgcHJvcHJpZXRhcnkgdGVjaG5vbG9neSBhbmQgZXhwZXJ0aXNlIGlzIHBpdm90YWwgaW4gcmVwb3J0aW5nIGhvdyBkYXRhIGlzIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRcdGFuZCByZXBsaWNhdGVkIGFjcm9zcyBidXNpbmVzcyBhcHBsaWNhdGlvbnMgYWxsb3dpbmcgdXMgdG8gYWNjdXJhdGVseSBhbmQgcmFwaWRseVxuXHRcdFx0XHRcdFx0XHRhc3Nlc3MgYW5kIHByZWRpY3Qgd2hlcmUgZmlybXMgY2FuIG9wdGltaXplIGFuZCByaWdodCBzaXplIHRoZWlyIGRhdGEgbmVlZHMuXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDwvUy5DYXJkQ29udGVudD5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21lYXN1cmUtY29tcGFyZS5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWVhc3VyZS1jb21wYXJlQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWVhc3VyZS1jb21wYXJlQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21lYXN1cmUtY29tcGFyZUAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFMuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkVGl0bGU+TWVhc3VyZSBhbmQgY29tcGFyZSB5b3VyIGV4cGVuc2UgbWFuYWdlbWVudCBjYXBhYmlsaXRpZXM8L1MuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PFMuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRXZSBoYXZlIGRvbmUgZXh0ZW5zaXZlIHJlc2VhcmNoIG92ZXIgdGhlIHBhc3QgMTAgeWVhcnMgdGhyb3VnaCBvdXJcblx0XHRcdFx0XHRcdFx0cXVhbGl0YXRpdmUgYW5kIHF1YW50aXRhdGl2ZSBhbmFseXRpY3MuIEFzIGEgcmVzdWx0LCB3ZSd2ZVxuXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYW4gYXBwcm9hY2ggdG8gY29tcGFyZSBpbmRpdmlkdWFsIGNvbXBhbnkgZGF0YSB0byBvdXJcblx0XHRcdFx0XHRcdFx0cHJvcHJpZXRhcnkgaW5kdXN0cnkgYmVuY2htYXJrLiBPdXIgZmluZGluZ3MgaGF2ZSBiZWVuIGxpbmtlZCB0b1xuXHRcdFx0XHRcdFx0XHR0aGUgc3RyZW5ndGggb2YgYSBmaXJtcyBvcGVyYXRpb25hbCBtYW5hZ2VtZW50IGFuZCBpdHMgc2hvcnQgYW5kXG5cdFx0XHRcdFx0XHRcdGxvbmcgdGVybSBpbnZlc3RtZW50IHN0cmF0ZWd5LlxuXHRcdFx0XHRcdFx0PC9TLkNhcmREZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8L1MuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuQ2FyZEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tYXRjaC1kZW1hbmQucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21hdGNoLWRlbWFuZEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21hdGNoLWRlbWFuZEAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tYXRjaC1kZW1hbmRAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTLkNhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0PFMuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0XHRNYXRjaCB5b3VyIHN0cmF0ZWd5IHRvIHlvdXIgYnVzaW5lc3MgbmVlZHNcblx0XHRcdFx0XHRcdDwvUy5DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRcdFdpdGggZXhwZXJ0IGtub3dsZWRnZSBvZiBib3RoIHlvdXIgaW5kdXN0cnkgYW5kIHlvdXIgY3VzdG9tZXLigJlzXG5cdFx0XHRcdFx0XHRcdG5lZWRzLCB5b3UgY2FuIGtlZXAgeW91ciBkYXRhIGNvbnN1bXB0aW9uIGFjdGl2aXRpZXMgYXBwcm9wcmlhdGVcblx0XHRcdFx0XHRcdFx0d2hpbGUgb3B0aW1pemluZyB5b3VyIGNvbW1lcmNpYWwgb2JsaWdhdGlvbnMuXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDwvUy5DYXJkQ29udGVudD5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2JlbmNobWFyay5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYmVuY2htYXJrQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvYmVuY2htYXJrQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL2JlbmNobWFya0AzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFMuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkVGl0bGU+Q2FwaXRhbCBtYXJrZXQgZXhwZW5zZSBtYW5hZ2VtZW50IGJlbmNobWFya2luZzwvUy5DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRcdE91ciBiZW5jaG1hcmsgYWRkcyBleHBvbmVudGlhbCB2YWx1ZSB0aHJvdWdoIGl0cyBjYXRlZ29yaXphdGlvbiBvZiBwcm9kdWN0c1xuXHRcdFx0XHRcdFx0XHRhbmQgc2VydmljZXM6IHRlY2hub2xvZ3ksIGludmVzdG1lbnRzLCBwcm9kdWN0aXZpdHksIG9wZXJhdGlvbnMsIGh1bWFuXG5cdFx0XHRcdFx0XHRcdHJlc291cmNlIHN0cmF0ZWdpZXMsIGFuZCBhIGhvc3Qgb2Ygb3RoZXIgYnVzaW5lc3MgZnVuY3Rpb25zLiBJdOKAmXMgYSBwZWVyXG5cdFx0XHRcdFx0XHRcdGdyb3VwIGFzc2Vzc21lbnQgb2Ygb3VyIGNsaWVudOKAmXMgMTYwIGRhdGEgYWN0aXZpdGllcyBhZ2FpbnN0IGEgc2V0IG9mIGJlc3Rcblx0XHRcdFx0XHRcdFx0cHJhY3RpY2VzLiBPdXIgYmVuY2htYXJrIGhhcyBpbnNwaXJlZCBkaXNjdXNzaW9ucyB0aGF0IGV4cGxvcmUgcXVhbGl0YXRpdmVcblx0XHRcdFx0XHRcdFx0bWVhc3VyZXMg4oCTIGVuaGFuY2luZyBwZXJmb3JtYW5jZSBhZ2FpbnN0IGJlbmNobWFya3MuXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDwvUy5DYXJkQ29udGVudD5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PEFuaW1hdGVkRm9vdGVyTGlua1xuXHRcdFx0XHRtZXNzYWdlPVwiR2V0IGluIHRvdWNoIHRvIGxlYXJuIG1vcmVcIlxuXHRcdFx0XHRocmVmPVwiL2NvbnRhY3RcIlxuXHRcdFx0Lz5cblx0XHQ8L1MuU2VydmljZXNXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuY29uc3QgSUNPTl9NQVJHSU4gPSAnMzVweCdcblxuZXhwb3J0IGNvbnN0IFdoeU1kY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgZmxleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuXG4gICR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYCAgICAgXG5cdFx0bWF4LXdpZHRoOiA3ODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAwIDE0cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMCAwIDE3cHggMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMjdweDtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICB3aWR0aDogNDglO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGl0bGVJY29uID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiAyN3B4O1xuXHR3aWR0aDogMjdweDtcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMCAwIDEwcHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwIDAgMCAke0lDT05fTUFSR0lOfTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vV2h5TWRjLnN0eWxlZCdcblxuY29uc3QgZGVzY3JpcHRpb25EYXRhID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdUaGUgcmlnaHQgcGVvcGxlLCBzb2x2aW5nIHRoZSByaWdodCBwcm9ibGVtcyB3aXRoIHBhc3Npb24nLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0J091ciBwZW9wbGUgYnJpbmcgYSBtaXggb2YgZXhwZXJ0aXNlIHRvIHNvbHZlIHByb2JsZW1zIHdpdGggYSBkaWZmZXJlbnQsIG1vcmUgZGVkaWNhdGVkIG1pbmRzZXQsIGRldmlzaW5nIHBvd2VyZnVsIHRvb2xzIGFuZCBzb2x1dGlvbnMgZm9yIG91ciBjbGllbnRz4oCZIHRvdWdoZXN0IGNoYWxsZW5nZXMuJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdIaWdobHkgZWZmZWN0aXZlIG1hcmtldCBkYXRhIGdvdmVybmFuY2Ugc3RydWN0dXJlJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdPdXIgYXBwcm9hY2ggYnJpbmdzIHRvZ2V0aGVyIGEgaGlnaGx5IGVmZmVjdGl2ZSBkaXNjaXBsaW5lIHRoYXQgZm9jdXNlcyBvbiBwcm9jZXNzLCBjb250cm9scyBhbmQgcHJvY2Vzcy4nXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1dl4oCZdmUgc2F2ZWQgdXB3YXJkcyBvZiAzNSUgb24gdG90YWwgZGF0YSBzcGVuZCBmb3Igb3VyIGNsaWVudHMnLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0J0F0IHRoZSBlbmQgb2YgdGhlIGRheSwgaXTigJlzIG91ciBjbGllbnRzIGJvdHRvbSBsaW5lIHRoYXQgd2UgdGFrZSBjYXJlIG9mLCBhbmQgdGhlIHJlc3VsdHMgc3BlYWsgZm9yIHRoZW1zZWx2ZXMuJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdNYXJrZXQgZGF0YSBiZW5jaG1hcmtpbmcgd2l0aCBwcm92ZW4gcmVzdWx0cycsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHQnV2UgY3JlYXRlIHJlc3VsdHMgdGhhdCBhcmUgcHJlZGljYXRlZCBvbiBvdXIgc3RyZW5ndGhzIHN1cnJvdW5kaW5nIGJlbmNobWFya2luZyBNYXJrZXQgRGF0YSBWZW5kb3JzLidcblx0fVxuXVxuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkNhcmRXcmFwcGVyPlxuXHRcdFx0PFMuQ2FyZFRpdGxlV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFRpdGxlSWNvblxuXHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NoZWNrbWFyay5wbmdcIlxuXHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2NoZWNrbWFya0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2NoZWNrbWFya0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9jaGVja21hcmtAM3gucG5nIDN4XCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFMuQ2FyZFRpdGxlPnt0aXRsZX08L1MuQ2FyZFRpdGxlPlxuXHRcdFx0PC9TLkNhcmRUaXRsZVdyYXBwZXI+XG5cdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHQpXG59XG5cbmNvbnN0IFdoeU1kYyA9ICgpID0+IHtcblx0Y29uc3QgcmVuZGVyRGVzY3JpcHRpb24gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGRlc2NyaXB0aW9uRGF0YS5tYXAoKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBkYXRhXG5cdFx0XHRyZXR1cm4gPENhcmQga2V5PXt0aXRsZX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cdFx0fSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxTLldoeU1kY1dyYXBwZXI+XG5cdFx0XHQ8Uy5IZWFkaW5nV3JhcHBlcj5cblx0XHRcdFx0PFMuSGVhZGluZ1RpdGxlPldoeSBNYXJrZXQgRGF0YSBDb21wYW55PzwvUy5IZWFkaW5nVGl0bGU+XG5cdFx0XHRcdDxTLkhlYWRpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRGcm9tIGluY2VwdGlvbiwgb3VyIGZvY3VzIGhhcyBiZWVuIG9uIHRoZSBjb21wbGV4aXRpZXMgb2Zcblx0XHRcdFx0XHRtYXJrZXQgZGF0YSBhbmQgdGhlIGNyaXRpY2FsIHRoaXJkLXBhcnR5IHJlbGF0aW9uc2hpcHMgYnVpbHQgdGhyb3VnaFxuXHRcdFx0XHRcdGRhdGEgcHJvdmlkZXJzIHdpdGhpbiB0aGUgQ2FwaXRhbCBNYXJrZXRzIGFuZCBXZWFsdGggTWFuYWdlbWVudFxuXHRcdFx0XHRcdGluZHVzdHJpZXMuXG5cdFx0XHRcdDwvUy5IZWFkaW5nRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuSGVhZGluZ1dyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50PntyZW5kZXJEZXNjcmlwdGlvbigpfTwvUy5Db250ZW50PlxuXHRcdDwvUy5XaHlNZGNXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdoeU1kY1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBXb3JrZWRXaXRoV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tYm90dG9tOiAxMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHRsaW5lLWhlaWdodDogNDhweDtcblx0YH1cblxuXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI2cHg7XG5cdG1hcmdpbjogMCAwIDQ2cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdG1heC13aWR0aDogNzgwcHg7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDQ3cHg7XG5cdGJveC1zaGFkb3c6IDAgOHB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmBcblxuZXhwb3J0IGNvbnN0IExvZ29Db250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHR3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDQ4JTtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0bWFyZ2luLWJvdHRvbTogMDsgXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuXHRcdHdpZHRoOiAyNSU7XG5cdGB9XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuXHRgfVxuXG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbEl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgQ29tcGFueUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wYW55LWNhcmQnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vV29ya2VkV2l0aC5zdHlsZWQnXG5cbmNvbnN0IENPTVBBTllfREFUQSA9IFtcblx0e1xuXHRcdHRpdGxlOiAnQ2FuYWRhIFBlbnNpb24gUGxhbiBJbnZlc3RtZW50IEJvYXJkJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnE1EQyBpZGVudGlmaWVkIGFuZCByZWFsaXplZCB2ZW5kb3IgY29zdCBzYXZpbmdzIG9mIDEyJSBvZiBvdXIgc3BlbmQsIGFuZCB0aGVuIGRldmVsb3BlZCBhIHRhcmdldCBzdGF0ZSBvcmdhbml6YXRpb24gd2l0aCBjYXBhYmlsaXRpZXMgdG8gZWZmZWN0aXZlbHkgbWFuYWdlIG1hcmtldCBkYXRhIHByb2R1Y3RzLCBjb25zdW1wdGlvbiwgY29zdHMgYW5kIHZlbmRvcnPigJ1gLFxuXHRcdHJvbGU6ICdNYXJjIE9kaG8g4oCTIEhlYWQgb2YgRGF0YSBNYW5hZ2VtZW50Jyxcblx0XHRjb21wYW55OiAnUFNQJyxcblx0XHRpbWFnZVVybDogJ2NwcGliLWNhcm91c2VsJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdQU1AgSW52ZXN0aXNzZW1lbnRzJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnFRoZSB0ZWFtIGF0IE1hcmtldCBEYXRhIENvbXBhbnkgaXMgZ3JlYXQgdG8gd29yayB3aXRoLiBFYWNoIGNvbnN1bHRhbnQgaGFzIHRoZWlyIG93biBzdHJlbmd0aHMgYW5kIHdlYWtuZXNzZXMsIGFuZCBhcmUgZ3JlYXQgYXQgd2hhdCB0aGV5IGRvLiBJbiBteSBib29rLCBJIGhpZ2hseSByZWNvbW1lbmQgdGhlIGVudGlyZSB0ZWFtIGF0IE1EQy7igJ1gLFxuXHRcdHJvbGU6ICdBbGV4IERpQ3Jpc3RvZmFubywgRGlyZWN0b3Igb2YgTWFya2V0IERhdGEnLFxuXHRcdGNvbXBhbnk6ICdBdml2YScsXG5cdFx0aW1hZ2VVcmw6ICdwc3AtY2Fyb3VzZWwnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ0F2aXZhIEludmVzdG9ycycsXG5cdFx0ZGVzY3JpcHRpb246IGDigJxSb2JlcnQgYW5kIGhpcyB0ZWFtIGJyb3VnaHQgdGhlIHJpZ2h0IGV4cGVydGlzZSB0byB0aGUgam9iLCBtYWtpbmcgdGhlIHRyYW5zaXRpb25hbCBwcm9ncmFtIGVhc2llciB0byBtYW5hZ2UuIE1EQ+KAmXMgYXBwcm9hY2ggdG8gbWFya2V0IGRhdGEgc3VwcG9ydGVkIG91ciBHbG9iYWwgb3BlcmF0aW9ucyBhbmQgcHJvdmlkZWQgYSBjbGVhciBsaW5lIG9mIHNpZ2h0IHRvIG91ciB2ZW5kb3Igc3BlbmQu4oCdYCxcblx0XHRyb2xlOiAnS2VsbHkgTWNNYW5pcywgSGVhZCBvZiBPcGVyYXRpb25zJyxcblx0XHRjb21wYW55OiAnU3dpc3MgUmUnLFxuXHRcdGltYWdlVXJsOiAnYXZpdmEtY2Fyb3VzZWwnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1N3aXNzIFJlJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnE1EQ+KAmXMgcHJvZHVjdCBLaWFyb+KAmXMgb3ZlcnNwZW5kIHJlcG9ydCBjbGVhcmx5IGFydGljdWxhdGVkIHdoZXJlIEJsb29tYmVyZyBkYXRhIHdhcyBiZWluZyByZXBsaWNhdGVkIHdpdGhpbiBvdXIgdGVjaG5vbG9neSBlbnZpcm9ybWVudC4gQXMgYSByZXN1bHQgd2UgY2xvc2VkIGRvd24gc2V2ZXJhbCBqb2JzIHRoYXQgbGVhZCB0byAkNDUwLDAwMCBpbiBjb3N0IHNhdmluZ3Mu4oCdYCxcblx0XHRyb2xlOiAnRXJpYyBLZW1lbnksIFZpY2UgUHJlc2lkZW50LCBHcm91cCBBc3NldCBNYW5hZ2VtZW50Jyxcblx0XHRjb21wYW55OiAnQ1BQSUInLFxuXHRcdGltYWdlVXJsOiAnc3dpc3MtcmUtY2Fyb3VzZWwnXG5cdH1cbl1cblxuY29uc3QgV29ya2VkV2l0aCA9ICgpID0+IHtcblx0Y29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuXHRsZXQgYW5pbWF0aW5nID0gZmFsc2VcblxuXHRjb25zdCBvbkV4aXRpbmcgPSAoKSA9PiB7XG5cdFx0YW5pbWF0aW5nID0gdHJ1ZVxuXHR9XG5cblx0Y29uc3Qgb25FeGl0ZWQgPSAoKSA9PiB7XG5cdFx0YW5pbWF0aW5nID0gZmFsc2Vcblx0fVxuXG5cdGNvbnN0IG5leHQgPSAoKSA9PiB7XG5cdFx0aWYgKGFuaW1hdGluZykge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGNvbnN0IG5leHRJbmRleCA9XG5cdFx0XHRhY3RpdmVJbmRleCA9PT0gQ09NUEFOWV9EQVRBLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KVxuXHR9XG5cblx0Y29uc3QgY2Fyb3VzZWxJdGVtcyA9IENPTVBBTllfREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENhcm91c2VsSXRlbVxuXHRcdFx0XHRvbkV4aXRpbmc9e29uRXhpdGluZ31cblx0XHRcdFx0b25FeGl0ZWQ9e29uRXhpdGVkfVxuXHRcdFx0XHRrZXk9e2l0ZW0uY29tcGFueX1cblx0XHRcdD5cblx0XHRcdFx0PENvbXBhbnlDYXJkXG5cdFx0XHRcdFx0dGl0bGU9e2l0ZW0udGl0bGV9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0cm9sZT17aXRlbS5yb2xlfVxuXHRcdFx0XHRcdGNvbXBhbnk9e2l0ZW0uY29tcGFueX1cblx0XHRcdFx0XHRpbWFnZVVybD17aXRlbS5pbWFnZVVybH1cblx0XHRcdFx0XHRvbk5leHQ9e25leHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Nhcm91c2VsSXRlbT5cblx0XHQpXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8Uy5Xb3JrZWRXaXRoV3JhcHBlcj5cblx0XHRcdDxTLlRpdGxlPldobyB3ZeKAmXZlIHdvcmtlZCB3aXRoPC9TLlRpdGxlPlxuXHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdE91ciBjb25zdWx0YW50cyBhcmUgaW5kdXN0cnkgZXhwZXJ0cyBpbiBtYXJrZXQgYW5kIHJlZmVyZW5jZSBkYXRhXG5cdFx0XHRcdHByb2R1Y3RzLCBhcyB3ZWxsIGFzIGludmVzdG1lbnQgbWFuYWdlbWVudCBzb2x1dGlvbnMuIFdlIGRlbGl2ZXIgcmVzdWx0cyB0aGF0XG5cdFx0XHRcdG1ha2UgYSBkaWZmZXJlbmNlLlxuXHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdDxDYXJvdXNlbFxuXHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cblx0XHRcdFx0XHRuZXh0PXtuZXh0fVxuXHRcdFx0XHRcdHByZXZpb3VzPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRpbnRlcnZhbD17ZmFsc2V9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Y2Fyb3VzZWxJdGVtc31cblx0XHRcdFx0PC9DYXJvdXNlbD5cblx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdDxTLkxvZ29Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFMuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvY3BwaWIucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2NwcGliQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvY3BwaWJAMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2NwcGliQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Mb2dvV3JhcHBlcj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9wc3AucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL3BzcEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3BzcEAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvcHNwQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Mb2dvV3JhcHBlcj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9hdml2YS5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYXZpdmFAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9hdml2YUAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvYXZpdmFAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdDxTLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3N3aXNzLXJlLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9zd2lzcy1yZUAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3N3aXNzLXJlQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9zd2lzcy1yZUAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5Mb2dvV3JhcHBlcj5cblx0XHRcdDwvUy5Mb2dvQ29udGVudFdyYXBwZXI+XG5cdFx0PC9TLldvcmtlZFdpdGhXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtlZFdpdGhcbiIsImV4cG9ydCBjb25zdCBFTUFJTF9FTkRQT0lOVCA9XG5cdCdodHRwczovL21hcmtldC1kYXRhLWNvbXBhbnktc2VydmVyLmhlcm9rdWFwcC5jb20vZW1haWwnXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgRU1BSUxfRU5EUE9JTlQgfSBmcm9tICcuL2FwaUVuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChFTUFJTF9FTkRQT0lOVCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcblx0XHR9KVxuXHRcdGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXHRcdHJldHVybiByZXNwb25zZURhdGFcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dGhyb3cgZXJyXG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBVU0VSX1NJR05FRF9VUCA9ICdVU0VSX1NJR05FRF9VUCdcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVU0VSX1NJR05FRF9VUCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKVxuXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFVTRVJfU0lHTkVEX1VQOlxuXHRcdFx0cmV0dXJuIHsgdXNlcjogYWN0aW9uLnBheWxvYWQgfVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgY29uc3QgU3RvcmVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG5cdHJldHVybiAoXG5cdFx0PFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9TdG9yZUNvbnRleHQuUHJvdmlkZXI+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gKHN0b3JlKSA9PiB7XG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcblx0cmV0dXJuIHsgc3RhdGUsIGRpc3BhdGNoIH1cbn1cbiIsIi8vIFJlc2VhcmNoXG5jb25zdCByaWdodFRvQXVkaXRQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9EYXRhLU1hbmFnbWVudC1Db21wbGlhbmNlLXdoeS1maXJtcy1hcmUtQXVkaXRlZC12RmluYWwucGRmJ1xuY29uc3QgaWRlbnRpdHlDcmlzaXNQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9NYXJrZXQtRGF0YS1NYW5hZ2VtZW50LUlkZW50aXR5LUNyaXNpcy12YWx1ZS1wcm9wLnBkZidcbmNvbnN0IG1hdHVyaW5nQXJ0UGRmUGF0aCA9XG5cdCcvc3RhdGljL3BkZnMvTWFya2V0LURhdGEtTWFuYWdlbWVudC1NYXR1cml0eS1DdXJ2ZS1GaW5hbC5wZGYnXG5jb25zdCBhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2VQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9WYWx1ZS1vZi1NYXJrZXQtRGF0YS1BZG1pbi1FeGVjLVN1bW1hcnktdjI3SnVuMTYucGRmJ1xuY29uc3QgZGF0YVNwZW5kUGRmUGF0aCA9ICcvc3RhdGljL3BkZnMvRlgtSW1wYWN0LU1ELXNwZW5kLTIucGRmJ1xuXG4vLyBDYXNlIFN0dWRpZXNcbmNvbnN0IGNhc2VTdHVkaWVzUHB0UGF0aCA9ICcvc3RhdGljL3BkZnMvTURDLWNhc2Utc3R1ZGllcy5wcHR4J1xuXG4vLyBXaGl0ZSBQYXBlcnNcbmNvbnN0IHJpc2tGYWN0b3JzUGRmUGF0aCA9ICcvc3RhdGljL3BkZnMvVW5jb3ZlcmluZ19GUlRCX1Jpc2tfRmFjdG9ycy5wZGYnXG5jb25zdCByaXNrRnJhbWV3b3JrUGRmUGF0aCA9ICcvc3RhdGljL3BkZnMvZnJ0Yi13aGl0ZXBhcGVyLXYyLTA4MTUxOS5wZGYnXG5cbi8vIFN1cnZleXNcbmNvbnN0IHN1cnZleUluc2lnaHRzUGRmUGF0aCA9XG5cdCcvc3RhdGljL3BkZnMvTWFya2V0LURhdGEtU3VydmV5LUluc2lnaHRzLTIwMTcucGRmJ1xuXG5jb25zdCBwZGZNYXBwZXIgPSB7XG5cdHJpZ2h0VG9BdWRpdDogcmlnaHRUb0F1ZGl0UGRmUGF0aCxcblx0aWRlbnRpdHlDcmlzaXM6IGlkZW50aXR5Q3Jpc2lzUGRmUGF0aCxcblx0bWF0dXJpbmdBcnQ6IG1hdHVyaW5nQXJ0UGRmUGF0aCxcblx0YWNjb3VudGFiaWxpdHlBbmRHb3Zlcm5hbmNlOiBhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2VQZGZQYXRoLFxuXHRkYXRhU3BlbmQ6IGRhdGFTcGVuZFBkZlBhdGgsXG5cdHJpc2tGYWN0b3JzOiByaXNrRmFjdG9yc1BkZlBhdGgsXG5cdGNhc2VTdHVkaWVzOiBjYXNlU3R1ZGllc1BwdFBhdGgsXG5cdHN1cnZleUluc2lnaHRzOiBzdXJ2ZXlJbnNpZ2h0c1BkZlBhdGgsXG5cdHJpc2tGcmFtZXdvcms6IHJpc2tGcmFtZXdvcmtQZGZQYXRoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBkZk1hcHBlclxuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZW1haWwpID0+IHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuXHRyZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNvY2lhbC1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==