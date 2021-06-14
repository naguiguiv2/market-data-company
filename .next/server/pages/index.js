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
})(["font-family:", ";font-size:2.25rem;line-height:1em;color:", ";padding:8vh 0 0.5em 0;margin-bottom:16px;", " ", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		font-size: 3rem;
		line-height: 1em;
		padding: 15vh 0 0.5em 0;
		width: 70%;
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 3.5rem;
		line-height: 1em;
		padding: 15vh 0 0.5em 0;
		width: 50%;
	`);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "t8svsq-4"
})(["font-family:", ";font-weight:400;font-size:1.15rem;line-height:1em;color:", ";margin:0 0 42px 0;text-align:left;max-width:720px;", " ", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		font-size: 1.6rem;
		line-height: 1em;
  	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 1.63rem;
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
  }, "Industry research by industry experts."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions.", __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 6
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 6
    }
  }), "As North America's leading market data solutions consultancy we understand the importance of data in the financial markets and global economy."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "View Research",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    btnText: "Contact us",
    isDefault: false,
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 6
    }
  })))), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 3
    }
  }, __jsx(_components_ticker_tape__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 8
    }
  })));
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
})(["display:flex;flex-direction:column;margin-right:1em;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
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
    width: "100%",
    maxwidth: "640px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb2xvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL0FuaW1hdGVkQ2FyZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYW5pbWF0ZWQtZm9vdGVyLWxpbmsvQW5pbWF0ZWRGb290ZXJMaW5rLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmlvLWNhcmQvQmlvQ2FyZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9iaW8tY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tcGFueS1jYXJkL0NvbXBhbnlDYXJkLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBhbnktY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbnRhY3QtZm9vdGVyL0NvbnRhY3RGb290ZXIuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC1mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb250YWN0LWZvcm0vQ29udGFjdEZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFjdC1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oYW1idXJnZXItbWVudS1jb250ZW50L0hhbWJ1cmdlck1lbnVDb250ZW50LnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hhbWJ1cmdlci1tZW51LWNvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L0lucHV0LnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGFiZWwtd2l0aC1hcnJvdy9MYWJlbFdpdGhBcnJvdy5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYWJlbC13aXRoLWFycm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L0xheW91dC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saXN0LWl0ZW0vTGlzdEl0ZW0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGlzdC1pdGVtL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXNlYXJjaC1wZGYtZm9ybS9SZXNlYXJjaFBkZkZvcm0uc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVzZWFyY2gtcGRmLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zb2NpYWwtaWNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0LWRvd25sb2FkLWZvcm0vU3RhcnREb3dubG9hZEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGFydC1kb3dubG9hZC1mb3JtL1N0YXJ0RG93bmxvYWRGb3JtLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0YXJ0LWRvd25sb2FkLWZvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWItYmFyL1RhYkJhci5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWItYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGV4dGZpZWxkL1RleHRmaWVsZC5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90ZXh0ZmllbGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aGFuay15b3UvVGhhbmtZb3Uuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGhhbmsteW91L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGlja2VyLXRhcGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9sYW5kaW5nL0xhbmRpbmcuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9sYW5kaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9sZWFkZXItbWFya2V0LWRhdGEvTGVhZGVyTWFya2V0RGF0YS5zdHlsZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc2VjdGlvbnMvaG9tZS1zZWN0aW9uL2xlYWRlci1tYXJrZXQtZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vcmVzZWFyY2gvUmVzZWFyY2guc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9yZXNlYXJjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vc2VydmljZXMvU2VydmljZXMuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vd2h5LW1kYy9XaHlNZGMuc3R5bGVkLmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi93aHktbWRjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlY3Rpb25zL2hvbWUtc2VjdGlvbi93b3JrZWQtd2l0aC9Xb3JrZWRXaXRoLnN0eWxlZC5qcyIsIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24vd29ya2VkLXdpdGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpRW5kcG9pbnRzLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvdXNlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGRmTWFwcGVyLmpzIiwid2VicGFjazovLy8uL3V0aWxzL3ZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tb2RhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNvY2lhbC1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnRcIiJdLCJuYW1lcyI6WyJNRENfUFVSUExFIiwiREVFUF9JTkRJR08iLCJNSURfUFVSUExFIiwiTElHSFRfUFVSUExFIiwiV0hJVEUiLCJCTEFDSyIsIkxJR0hUX0dSRVkiLCJNRENfUFVSUExFX0hPVkVSIiwiU0JfR1JFWSIsIlBJTksiLCJSRUQiLCJCQUJZX0JMVUUiLCJDYXJkV3JhcHBlciIsInN0eWxlZCIsImRpdiIsInByb3BzIiwibm90Y2hDb2xvciIsIlRvcE5vdGNoIiwiQ29udGVudFdyYXBwZXIiLCJUaXRsZSIsImgxIiwidGhlbWUiLCJmb250cyIsImdyYXBoaWtCb2xkIiwiY29sb3JzIiwid2hpdGUiLCJEZXNjcmlwdGlvbiIsInAiLCJmaW5hbmNpZXIiLCJGb290ZXIiLCJzcGFuIiwiZ3JhcGhpayIsImxpZ2h0R3JleSIsIkFuaW1hdGVkQ2FyZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmb290ZXIiLCJvbkNsaWNrIiwiZGVmYXVsdFByb3BzIiwiQ29sb3JzIiwiQW5pbWF0ZWRGb290ZXJMaW5rV3JhcHBlciIsIk1lc3NhZ2UiLCJoNCIsIm1kY1B1cnBsZSIsIkFuaW1hdGVkRm9vdGVyTGluayIsIm1lc3NhZ2UiLCJocmVmIiwiQ29udGFpbmVyIiwiYnJlYWtwb2ludCIsIkJpb0NhcmRXcmFwcGVyIiwiSW1hZ2VXcmFwcGVyIiwiaW1nIiwiTmFtZSIsIlJvbGUiLCJGb290ZXJXcmFwcGVyIiwiSG92ZXJlZEJpb0NhcmRXcmFwcGVyIiwiSG92ZXJlZENvbnRlbnQiLCJIb3ZlcmVkTmFtZSIsIkhvdmVyZWRSb2xlIiwiSG92ZXJlZERlc2NyaXB0aW9uIiwiQmlvQ2FyZCIsIm5hbWUiLCJyb2xlIiwiaG92ZXJlZCIsInNldEhvdmVyZWQiLCJ1c2VTdGF0ZSIsImdldEJhY2tncm91bmRDb2xvciIsImlzRGVmYXVsdCIsIkJ1dHRvbldyYXBwZXIiLCJidXR0b24iLCJCdXR0b25UZXh0IiwiYmxhY2siLCJCdXR0b24iLCJidG5UZXh0IiwiaXNEaXNhYmxlZCIsImlzU2Vjb25kYXJ5IiwiQ29tcGFueUNhcmRXcmFwcGVyIiwiU3R5bGVkSW1hZ2UiLCJEZXNjcmlwdGlvbldyYXBwZXIiLCJEZXNjcmlwdGlvblRleHQiLCJSb2xlVGV4dCIsIk5leHRUYWciLCJhIiwiQ29tcGFueUNhcmQiLCJjb21wYW55Iiwib25OZXh0IiwiaW1hZ2VVcmwiLCJDb250YWN0Rm9vdGVyV3JhcHBlciIsIkNvbnRlbnQiLCJDb250YWN0Rm9vdGVyIiwiUm91dGVyIiwicHVzaCIsIkZvcm1XcmFwcGVyIiwiSW5wdXRXcmFwcGVyIiwiQ29udGFjdEZvcm0iLCJvbkNoYW5nZSIsImZpcnN0TmFtZSIsImVtYWlsIiwib25TdWJtaXQiLCJpc0Vycm9yIiwiRm9vdGVyTG9nb1dyYXBwZXIiLCJUZXh0V3JhcHBlciIsIk1hcmtldERhdGFUZXh0IiwiRXhwbG9yZUFuZFNvY2lhbFdyYXBwZXIiLCJFeHBsb3JlV3JhcHBlciIsIkV4cGxvcmVUaXRsZSIsIkV4cGxvcmVJdGVtIiwiU29jaWFsV3JhcHBlciIsIlNvY2lhbENvbnRlbnQiLCJTb2NpYWxUaXRsZSIsIkhhbWJ1cmdlck1lbnVDb250ZW50V3JhcHBlciIsIkhlYWRlciIsIkhhbWJ1cmdlck1lbnVDb250ZW50Iiwib25DbG9zZU1vZGFsIiwiTGFiZWxXcmFwcGVyIiwiTGFiZWwiLCJFcnJvclN0YXIiLCJGaWVsZFdyYXBwZXIiLCJyZWQiLCJGaWVsZCIsImlucHV0IiwiSW5wdXQiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJpc1JlcXVpcmVkIiwiTGFiZWxXaXRoQXJyb3dXcmFwcGVyIiwiaDUiLCJMYWJlbFdpdGhBcnJvdyIsIldyYXBwZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsIkxpc3RJdGVtV3JhcHBlciIsIkxpc3RJdGVtIiwiY3VzdG9tU3R5bGVzIiwiY29udGVudCIsInBhZGRpbmciLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsIm92ZXJsYXkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJNRENNb2RhbCIsIm1vZGFsVmlzaWJsZSIsIm9uUmVxdWVzdENsb3NlIiwidXNlRWZmZWN0IiwiTW9kYWwiLCJzZXRBcHBFbGVtZW50IiwiUmVzZWFyY2hQZGZGb3JtV3JhcHBlciIsInNiR3JleSIsIkNsb3NlSWNvbiIsImgzIiwiU3R5bGVkQW5jaG9yIiwiUmVzZWFyY2hQZGZGb3JtIiwicGRmRm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIlNvY2lhbEljb24iLCJ1cmwiLCJoZWlnaHQiLCJ3aWR0aCIsIlN0YXJ0RG93bmxvYWRGb3JtIiwiU3RhcnREb3dubG9hZEZvcm1XcmFwcGVyIiwiaDIiLCJNb2JpbGVUYWJXcmFwcGVyIiwiVGFiV3JhcHBlciIsIlRhYiIsImJhclRoZW1lIiwibGlua0RhdGEiLCJ0YWJOYW1lIiwiVGFiQmFyIiwic2V0TW9kYWxWaXNpYmxlIiwicmVuZGVyTGlua3MiLCJtYXAiLCJkYXRhIiwiV2ViVGFiQmFyIiwiTW9iaWxlVGFiQmFyIiwiVGV4dEZpZWxkV3JhcHBlciIsInRleHRhcmVhIiwiVGV4dGZpZWxkIiwiVGhhbmtZb3VXcmFwcGVyIiwiVGhhbmtZb3UiLCJmb290ZXJNZXNzYWdlIiwiVGlja2VyVGFwZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiX3JlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiY29tcG9uZW50RGlkTW91bnQiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImlubmVySFRNTCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwib3B0aW9uYWxQcm9wcyIsImhhc1dhcm5lZCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlIiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJjaGFuZ2UiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiZmV0Y2hDb21wb25lbnQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJIb21lIiwiaGFzRXJyb3IiLCJzZXRIYXNFcnJvciIsImVtYWlsU2VudCIsInNldEVtYWlsU2VudCIsInNldFBkZkZvcm0iLCJmb3JtIiwic2V0Rm9ybVZhbHVlcyIsImRpc3BhdGNoIiwidXNlU3RvcmUiLCJzYXZlVXNlciIsInVzZUNhbGxiYWNrIiwiZm9ybVZhbHVlcyIsInR5cGUiLCJVU0VSX1NJR05FRF9VUCIsInBheWxvYWQiLCJzZW5kRW1haWwiLCJ1cGRhdGVGaWVsZCIsIm9uTW9kYWxDbG9zZSIsIm9wZW5Nb2RhbCIsInJlc2VhcmNoRm9ybSIsInBkZk1hcHBlciIsInZhbGlkYXRlRW1haWwiLCJ1c2VyIiwiTGFuZGluZ1dyYXBwZXIiLCJCYW5uZXJXcmFwcGVyIiwiTGFuZGluZyIsIkxlYWRlck1hcmtldERhdGFXcmFwcGVyIiwiSW5mb1dyYXBwZXIiLCJJbmZvVGV4dCIsIlZpZGVvV3JhcHBlciIsIkZhY3RzV3JhcHBlciIsIlByb2plY3RzQ29tcGxldGVkV3JhcHBlciIsIk51bWJlclRleHQiLCJGYWN0c1RleHQiLCJGb290ZXJUZXh0IiwiTGVhZGVyTWFya2V0RGF0YSIsIlJlc2VhcmNoV3JhcHBlciIsIkhlYWRlcldyYXBwZXIiLCJIZWFkZXJUaXRsZSIsIkhlYWRlckRlc2NyaXB0aW9uIiwiQ2FyZENvbnRlbnRXcmFwcGVyIiwiUmVzZWFyY2giLCJTZXJ2aWNlc1dyYXBwZXIiLCJDYXJkSW1hZ2UiLCJDYXJkQ29udGVudCIsIkNhcmRUaXRsZSIsIkNhcmREZXNjcmlwdGlvbiIsIlNlcnZpY2VzIiwiSUNPTl9NQVJHSU4iLCJXaHlNZGNXcmFwcGVyIiwiSGVhZGluZ1dyYXBwZXIiLCJIZWFkaW5nVGl0bGUiLCJIZWFkaW5nRGVzY3JpcHRpb24iLCJDYXJkVGl0bGVXcmFwcGVyIiwiQ2FyZFRpdGxlSWNvbiIsImRlc2NyaXB0aW9uRGF0YSIsIkNhcmQiLCJXaHlNZGMiLCJyZW5kZXJEZXNjcmlwdGlvbiIsIldvcmtlZFdpdGhXcmFwcGVyIiwiTG9nb0NvbnRlbnRXcmFwcGVyIiwiTG9nb1dyYXBwZXIiLCJDT01QQU5ZX0RBVEEiLCJXb3JrZWRXaXRoIiwiYWN0aXZlSW5kZXgiLCJzZXRBY3RpdmVJbmRleCIsImFuaW1hdGluZyIsIm9uRXhpdGluZyIsIm9uRXhpdGVkIiwibmV4dCIsIm5leHRJbmRleCIsImxlbmd0aCIsImNhcm91c2VsSXRlbXMiLCJFTUFJTF9FTkRQT0lOVCIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJpbml0aWFsU3RhdGUiLCJTdG9yZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlclJlZHVjZXIiLCJhY3Rpb24iLCJTdG9yZVByb3ZpZGVyIiwidXNlUmVkdWNlciIsInN0b3JlIiwidXNlQ29udGV4dCIsInJpZ2h0VG9BdWRpdFBkZlBhdGgiLCJpZGVudGl0eUNyaXNpc1BkZlBhdGgiLCJtYXR1cmluZ0FydFBkZlBhdGgiLCJhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2VQZGZQYXRoIiwiZGF0YVNwZW5kUGRmUGF0aCIsImNhc2VTdHVkaWVzUHB0UGF0aCIsInJpc2tGYWN0b3JzUGRmUGF0aCIsInJpc2tGcmFtZXdvcmtQZGZQYXRoIiwic3VydmV5SW5zaWdodHNQZGZQYXRoIiwicmlnaHRUb0F1ZGl0IiwiaWRlbnRpdHlDcmlzaXMiLCJtYXR1cmluZ0FydCIsImFjY291bnRhYmlsaXR5QW5kR292ZXJuYW5jZSIsImRhdGFTcGVuZCIsInJpc2tGYWN0b3JzIiwiY2FzZVN0dWRpZXMiLCJzdXJ2ZXlJbnNpZ2h0cyIsInJpc2tGcmFtZXdvcmsiLCJ0ZXN0IiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlD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LDhDOzs7Ozs7Ozs7OztBQ0FBLHlEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZXhwb3J0IGNvbnN0IE1EQ19QVVJQTEUgPSAnIzdEMjdGRidcbmV4cG9ydCBjb25zdCBERUVQX0lORElHTyA9ICcjNDMwMDg2J1xuZXhwb3J0IGNvbnN0IE1JRF9QVVJQTEUgPSAnIzk4NkNGRidcbmV4cG9ydCBjb25zdCBMSUdIVF9QVVJQTEUgPSAnI0M1QjJGRidcbmV4cG9ydCBjb25zdCBXSElURSA9ICcjRkZGRkZGJ1xuZXhwb3J0IGNvbnN0IEJMQUNLID0gJyMwMDAwMDAnXG5leHBvcnQgY29uc3QgTElHSFRfR1JFWSA9ICcjOTY5Njk2J1xuXG5leHBvcnQgY29uc3QgTURDX1BVUlBMRV9IT1ZFUiA9ICcjNzEyMUVCJ1xuZXhwb3J0IGNvbnN0IFNCX0dSRVkgPSAnI0Y1RjVGNSdcbmV4cG9ydCBjb25zdCBQSU5LID0gJyNFRDI3RkYnXG5leHBvcnQgY29uc3QgUkVEID0gJyNGRjI3NTInXG5leHBvcnQgY29uc3QgQkFCWV9CTFVFID0gJyMzQjg0RkYnXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR3aWR0aDogMTAwJTtcblx0bWluLWhlaWdodDogMzQwcHg7XG5cdG1heC13aWR0aDogMzYwcHg7XG5cdGZsZXg6IDE7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMCU7XG5cdGJhY2tncm91bmQtaW1hZ2U6ICR7KHByb3BzKSA9PiB7XG5cdFx0cmV0dXJuIGBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB3aGl0ZSA1MCUsICR7cHJvcHMubm90Y2hDb2xvcn0gNTAlKWBcblx0fX07XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1wb3NpdGlvbiAwLjE1cyBlYXNlLW91dDtcblx0LW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMTVzIGVhc2Utb3V0O1xuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLXBvc2l0aW9uIDAuMTVzIGVhc2Utb3V0O1xuXHQmOmhvdmVyIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAtMTAwJTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgVG9wTm90Y2ggPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxNnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMubm90Y2hDb2xvcn07XG5cdG1hcmdpbi1ib3R0b206IDIzcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW46IDAgMjBweCAxN3B4O1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cdCR7Q2FyZFdyYXBwZXJ9OmhvdmVyICYge1xuXHRcdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlO1xuXHR9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMDtcblx0JHtDYXJkV3JhcHBlcn06aG92ZXIgJiB7XG5cdFx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5saWdodEdyZXl9O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHRtYXJnaW46IDAgMjBweCAxNnB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCR7Q2FyZFdyYXBwZXJ9OmhvdmVyICYge1xuXHRcdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlO1xuXHR9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBDb2xvcnMgZnJvbSAnLi4vLi4vYXNzZXRzL2NvbG9ycydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9BbmltYXRlZENhcmQuc3R5bGVkJ1xuXG5jb25zdCBBbmltYXRlZENhcmQgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGZvb3Rlciwgbm90Y2hDb2xvciwgb25DbGljayB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5DYXJkV3JhcHBlciBub3RjaENvbG9yPXtub3RjaENvbG9yfSBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdDxTLlRvcE5vdGNoIG5vdGNoQ29sb3I9e25vdGNoQ29sb3J9IC8+XG5cdFx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFMuVGl0bGU+e3RpdGxlfTwvUy5UaXRsZT5cblx0XHRcdFx0PFMuRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHRcdDxTLkZvb3Rlcj57Zm9vdGVyfTwvUy5Gb290ZXI+XG5cdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHQpXG59XG5cbkFuaW1hdGVkQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG5cdGZvb3RlcjogJ1JlYWQgbW9yZScsXG5cdG5vdGNoQ29sb3I6IENvbG9ycy5NRENfUFVSUExFXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGVkQ2FyZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVkRm9vdGVyTGlua1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogYmFzZWxpbmU7XG5gXG5cbmV4cG9ydCBjb25zdCBNZXNzYWdlID0gc3R5bGVkLmg0YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRtYXJnaW46IDAgOHB4IDAgMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblx0Jjpob3ZlciB7XG5cdFx0bWFyZ2luOiAwIDE2cHggMCAwO1xuXHRcdG9wYWNpdHk6IDAuNjU7XG5cdH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9BbmltYXRlZEZvb3Rlckxpbmsuc3R5bGVkJ1xuXG5jb25zdCBBbmltYXRlZEZvb3RlckxpbmsgPSAoeyBtZXNzYWdlLCBocmVmLCBvbkNsaWNrIH0pID0+IChcblx0PExpbmsgaHJlZj17aHJlZn0+XG5cdFx0PFMuQW5pbWF0ZWRGb290ZXJMaW5rV3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdDxTLk1lc3NhZ2U+e21lc3NhZ2V9PC9TLk1lc3NhZ2U+XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Fycm93LnBuZ1wiXG5cdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2Fycm93QDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvYXJyb3dAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvYXJyb3dAM3gucG5nIDN4XCJcblx0XHRcdC8+XG5cdFx0PC9TLkFuaW1hdGVkRm9vdGVyTGlua1dyYXBwZXI+XG5cdDwvTGluaz5cbilcblxuQW5pbWF0ZWRGb290ZXJMaW5rLmRlZmF1bHRQcm9wcyA9IHtcblx0b25DbGljazogKCkgPT4ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRGb290ZXJMaW5rXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdHdpZHRoOiAzNDBweDtcblx0Jjpob3ZlciB7XG5cdFx0Y3Vyc29yOiBoZWxwO1xuXHR9XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIHdpZHRoOiAzODBweDtcbiAgICBtaW4taGVpZ2h0OiA0NDVweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEJpb0NhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0d2lkdGg6IDEwMCU7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LXdpZHRoOiAzODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5pbWdgXG5cdG1heC13aWR0aDogMzQwcHg7XG5cdG1heC1oZWlnaHQ6IDQwMXB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXgtaGVpZ2h0OiAzMjBweDtcbiAgICBtYXgtd2lkdGg6IDM4MHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtaW4taGVpZ2h0OiAxMjVweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0cGFkZGluZy1sZWZ0OiAzMnB4O1xuYFxuXG5leHBvcnQgY29uc3QgTmFtZSA9IHN0eWxlZC5oNGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjFweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMTZweCAwIDRweDtcbmBcblxuZXhwb3J0IGNvbnN0IFJvbGUgPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwO1xuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0bWFyZ2luLWJvdHRvbTogMTdweDtcbmBcblxuZXhwb3J0IGNvbnN0IEhvdmVyZWRCaW9DYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcbmBcblxuZXhwb3J0IGNvbnN0IEhvdmVyZWRDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0cGFkZGluZzogMjVweCAzMnB4O1xuYFxuXG5leHBvcnQgY29uc3QgSG92ZXJlZE5hbWUgPSBzdHlsZWQuaDRgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDIxcHg7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDAgMCA0cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbmBcblxuZXhwb3J0IGNvbnN0IEhvdmVyZWRSb2xlID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMCAwIDE3cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcbmBcblxuZXhwb3J0IGNvbnN0IEhvdmVyZWREZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0bWFyZ2luOiAwO1xuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RDU1NUcmFuc2l0aW9uR3JvdXAgZnJvbSAncmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwJ1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi9hbmltYXRlZC1mb290ZXItbGluaydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9CaW9DYXJkLnN0eWxlZCdcblxuY29uc3QgQmlvQ2FyZCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG5hbWUsIHJvbGUsIG1lc3NhZ2UgfSA9IHByb3BzXG5cdGNvbnN0IFtob3ZlcmVkLCBzZXRIb3ZlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdHJldHVybiAoXG5cdFx0PFMuQ29udGFpbmVyXG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XG5cdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IHNldEhvdmVyZWQoZmFsc2UpfVxuXHRcdD5cblx0XHRcdHshaG92ZXJlZCAmJiAoXG5cdFx0XHRcdDxTLkJpb0NhcmRXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLkltYWdlV3JhcHBlclxuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvcGxhY2Vob2xkZXItaW1nLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9wbGFjZWhvbGRlci1pbWdAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9wbGFjZWhvbGRlci1pbWdAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvcGxhY2Vob2xkZXItaW1nQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0XHRcdDxTLk5hbWU+e25hbWV9PC9TLk5hbWU+XG5cdFx0XHRcdFx0XHQ8Uy5Sb2xlPntyb2xlfTwvUy5Sb2xlPlxuXHRcdFx0XHRcdFx0PFMuRm9vdGVyV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0PEFuaW1hdGVkRm9vdGVyTGluayBtZXNzYWdlPVwiQmlvXCIgLz5cblx0XHRcdFx0XHRcdDwvUy5Gb290ZXJXcmFwcGVyPlxuXHRcdFx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PC9TLkJpb0NhcmRXcmFwcGVyPlxuXHRcdFx0KX1cblx0XHRcdHtob3ZlcmVkICYmIChcblx0XHRcdFx0PFMuSG92ZXJlZEJpb0NhcmRXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLkhvdmVyZWRDb250ZW50PlxuXHRcdFx0XHRcdFx0PFMuSG92ZXJlZE5hbWU+e25hbWV9PC9TLkhvdmVyZWROYW1lPlxuXHRcdFx0XHRcdFx0PFMuSG92ZXJlZFJvbGU+e3JvbGV9PC9TLkhvdmVyZWRSb2xlPlxuXHRcdFx0XHRcdFx0e21lc3NhZ2UgJiYgPFMuSG92ZXJlZERlc2NyaXB0aW9uPnttZXNzYWdlfTwvUy5Ib3ZlcmVkRGVzY3JpcHRpb24+fVxuXHRcdFx0XHRcdDwvUy5Ib3ZlcmVkQ29udGVudD5cblx0XHRcdFx0PC9TLkhvdmVyZWRCaW9DYXJkV3JhcHBlcj5cblx0XHRcdCl9XG5cdFx0PC9TLkNvbnRhaW5lcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBCaW9DYXJkXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuY29uc3QgZ2V0QmFja2dyb3VuZENvbG9yID0gKHByb3BzKSA9PiB7XG5cdGlmIChwcm9wcy5pc0RlZmF1bHQpIHtcblx0XHRyZXR1cm4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGVcblx0fVxufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5idXR0b25gXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR3aWR0aDogMTYwcHg7XG5cdGhlaWdodDogNDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IGdldEJhY2tncm91bmRDb2xvcihwcm9wcyl9O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cdGJvcmRlcjogbm9uZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gZ2V0QmFja2dyb3VuZENvbG9yKHByb3BzKX07XG5cdFx0Ym94LXNoYWRvdzogJHsocHJvcHMpID0+IHtcblx0XHRcdHJldHVybiBwcm9wcy5pc0RlZmF1bHRcblx0XHRcdFx0PyAnMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSdcblx0XHRcdFx0OiAnMCA4cHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjE1KSdcblx0XHR9fTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG5cdFx0dHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG5cdH1cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEJ1dHRvblRleHQgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0bGluZS1oZWlnaHQ6IDE0cHg7XG5cdGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5pc0RlZmF1bHQgPyBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGUgOiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vYnV0dG9uLnN0eWxlZCdcblxuY29uc3QgQnV0dG9uID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgYnRuVGV4dCwgaXNEZWZhdWx0LCBvbkNsaWNrLCBpc0Rpc2FibGVkIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkJ1dHRvbldyYXBwZXJcblx0XHRcdGlzRGVmYXVsdD17aXNEZWZhdWx0fVxuXHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuXHRcdD5cblx0XHRcdDxTLkJ1dHRvblRleHQgaXNEZWZhdWx0PXtpc0RlZmF1bHR9PntidG5UZXh0fTwvUy5CdXR0b25UZXh0PlxuXHRcdDwvUy5CdXR0b25XcmFwcGVyPlxuXHQpXG59XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG5cdGlzRGVmYXVsdDogdHJ1ZSxcblx0aXNTZWNvbmRhcnk6IGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBDb21wYW55Q2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRib3gtc2hhZG93OiAwIDhweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRmbGV4OiAxO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1pbi1oZWlnaHQ6IDI4NXB4O1xuICBcdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtaW4taGVpZ2h0OiAyMjBweDtcblx0d2lkdGg6IDEwMCU7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1pbi13aWR0aDogNDc2cHg7XG4gIFx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2Bcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0b2JqZWN0LWZpdDogZmlsbDtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbjogMCAyMHB4O1xuXHRtaW4taGVpZ2h0OiAzMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0bWFyZ2luOiAzMnB4IDYlO1xuXHRtaW4taGVpZ2h0OiAwO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb25XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMzNweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwIDAgNnB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZvbnQtc2l6ZTogMjFweDtcblx0XHRsaW5lLWhlaWdodDogMjhweDtcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XG4gIFx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uVGV4dCA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMjFweDtcblx0bGluZS1oZWlnaHQ6IDI2cHg7XG5cdGxldHRlci1zcGFjaW5nOiAtMC4xMXB4O1xuXHRtYXJnaW46IDA7XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuICBcdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBSb2xlVGV4dCA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMXB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5saWdodEdyZXl9O1xuXHRtYXJnaW46IDA7XG5gXG5cbmV4cG9ydCBjb25zdCBOZXh0VGFnID0gc3R5bGVkLmFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5cdG1hcmdpbjogMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogIzNkMDA5OTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlO1xuXHR9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGFiZWxXaXRoQXJyb3cgZnJvbSAnLi4vbGFiZWwtd2l0aC1hcnJvdydcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL0NvbXBhbnlDYXJkLnN0eWxlZCdcblxuY29uc3QgQ29tcGFueUNhcmQgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyB0aXRsZSwgZGVzY3JpcHRpb24sIHJvbGUsIGNvbXBhbnksIG9uTmV4dCwgaW1hZ2VVcmwgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFMuQ29tcGFueUNhcmRXcmFwcGVyPlxuXHRcdFx0PFMuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5TdHlsZWRJbWFnZVxuXHRcdFx0XHRcdHNyYz17YC9zdGF0aWMvaW1hZ2VzLyR7aW1hZ2VVcmx9LnBuZ2B9XG5cdFx0XHRcdFx0c3JjU2V0PXtgL3N0YXRpYy9pbWFnZXMvJHtpbWFnZVVybH1AMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy8ke2ltYWdlVXJsfUAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy8ke2ltYWdlVXJsfUAzeC5wbmcgM3hgfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkltYWdlV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5EZXNjcmlwdGlvbldyYXBwZXI+XG5cdFx0XHRcdFx0PFMuVGl0bGU+e3RpdGxlfTwvUy5UaXRsZT5cblx0XHRcdFx0XHQ8Uy5EZXNjcmlwdGlvblRleHQ+e2Rlc2NyaXB0aW9ufTwvUy5EZXNjcmlwdGlvblRleHQ+XG5cdFx0XHRcdDwvUy5EZXNjcmlwdGlvbldyYXBwZXI+XG5cdFx0XHRcdDxTLkZvb3RlcldyYXBwZXI+XG5cdFx0XHRcdFx0PFMuUm9sZVRleHQ+e3JvbGV9PC9TLlJvbGVUZXh0PlxuXHRcdFx0XHRcdDxMYWJlbFdpdGhBcnJvdyBsYWJlbD17Y29tcGFueX0gb25DbGljaz17b25OZXh0fSAvPlxuXHRcdFx0XHQ8L1MuRm9vdGVyV3JhcHBlcj5cblx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHQ8L1MuQ29tcGFueUNhcmRXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlDYXJkXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQ6IHJnYigxMjUsMzksMjU1KTtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEyNSwzOSwyNTUsMSkgMCUsIHJnYmEoMTgwLDc5LDI1NSwxKSAxMDAlKTtcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdG1heC13aWR0aDogMTIwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogODBweCAyMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbjogMDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAzMnB4O1xuXHRsaW5lLWhlaWdodDogNDJweDtcblx0bWFyZ2luOiAwIDAgNnB4IDA7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI2cHg7XG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXgtd2lkdGg6IDY2N3B4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLWJvdHRvbTogMDtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9Db250YWN0Rm9vdGVyLnN0eWxlZCdcblxuY29uc3QgQ29udGFjdEZvb3RlciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0PFMuQ29udGFjdEZvb3RlcldyYXBwZXI+XG5cdFx0PFMuQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50PlxuXHRcdFx0XHQ8Uy5UaXRsZT5TZWUgaG93IHdlIGNhbiBoZWxwPC9TLlRpdGxlPlxuXHRcdFx0XHQ8Uy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRSZWFjaCBvdXQgdG8gdXMgdG8gZXhwbG9yZSBvdXIgc2VydmljZXMgb3IgaGVhciBvdXIgaWRlYXMgYWJvdXQgdGhlXG5cdFx0XHRcdFx0aW5kdXN0cnkgaW4gZ3JlYXRlciBkZXRhaWxcblx0XHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0PC9TLkNvbnRlbnQ+XG5cdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0YnRuVGV4dD1cIkNvbnRhY3QgdXNcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHt9fVxuXHRcdFx0XHRcdGlzRGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9jb250YWN0Jyl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdDwvUy5Db250YWN0Rm9vdGVyV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9vdGVyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IEZvcm1XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0Ym94LXNoYWRvdzogMnB4IDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDY0MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRmbGV4OiAxO1xuXHRwYWRkaW5nOiAwIDIwcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9Db250YWN0Rm9ybS5zdHlsZWQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnXG5pbXBvcnQgVGV4dGZpZWxkIGZyb20gJy4uL3RleHRmaWVsZCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uJ1xuXG5jb25zdCBDb250YWN0Rm9ybSA9ICh7XG5cdG9uQ2hhbmdlLFxuXHRmaXJzdE5hbWUsXG5cdGNvbXBhbnksXG5cdGVtYWlsLFxuXHRtZXNzYWdlLFxuXHRvblN1Ym1pdCxcblx0aXNFcnJvclxufSkgPT4gKFxuXHQ8Uy5Gb3JtV3JhcHBlcj5cblx0XHQ8Uy5Db250ZW50PlxuXHRcdFx0PFMuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRsYWJlbD1cIk5hbWVcIlxuXHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwiTWFyZ2FyZXQgTWFuZ29cIlxuXHRcdFx0XHRcdHZhbHVlPXtmaXJzdE5hbWV9XG5cdFx0XHRcdFx0bmFtZT1cImZpcnN0TmFtZVwiXG5cdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRcdGlzUmVxdWlyZWQ9e3RydWV9XG5cdFx0XHRcdFx0aXNFcnJvcj17aXNFcnJvcn1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxJbnB1dFxuXHRcdFx0XHRcdGxhYmVsPVwiRW1haWxcIlxuXHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwibWFyZ2FyZXRAbWFuZ28uY29tXCJcblx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XG5cdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdFx0aXNSZXF1aXJlZD17dHJ1ZX1cblx0XHRcdFx0XHRpc0Vycm9yPXtpc0Vycm9yfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLklucHV0V3JhcHBlcj5cblx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0bGFiZWw9XCJDb21wYW55XCJcblx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cIk1hbmdvIGNvLlwiXG5cdFx0XHRcdFx0dmFsdWU9e2NvbXBhbnl9XG5cdFx0XHRcdFx0bmFtZT1cImNvbXBhbnlcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxUZXh0ZmllbGRcblx0XHRcdFx0XHRsYWJlbD1cIk1lc3NhZ2VcIlxuXHRcdFx0XHRcdC8vIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlIGhlcmVcIlxuXHRcdFx0XHRcdHZhbHVlPXttZXNzYWdlfVxuXHRcdFx0XHRcdG5hbWU9XCJtZXNzYWdlXCJcblx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0PFMuQnV0dG9uV3JhcHBlcj5cblx0XHRcdFx0PEJ1dHRvbiBidG5UZXh0PVwiQ29udGFjdCB1c1wiIG9uQ2xpY2s9e29uU3VibWl0fSAvPlxuXHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0PC9TLkNvbnRlbnQ+XG5cdDwvUy5Gb3JtV3JhcHBlcj5cbilcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdEZvcm1cbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5mb290ZXJgXG5cdG1pbi1oZWlnaHQ6IDM3NXB4O1xuXG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICBwYWRkaW5nOiAwO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdG1heC13aWR0aDogMTIwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogODBweCAyMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJMb2dvV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgVGV4dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0bWF4LXdpZHRoOiA2NDBweDtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdHBhZGRpbmc6IDAgMjRweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IE1hcmtldERhdGFUZXh0ID0gc3R5bGVkLnBgXG5cdG1hcmdpbjogMDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI2cHg7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGB9XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRXhwbG9yZUFuZFNvY2lhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAxMDAlO1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdHdpZHRoOiAzMDBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEV4cGxvcmVXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmBcblxuZXhwb3J0IGNvbnN0IEV4cGxvcmVUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0bWFyZ2luOiAwIDAgMTdweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwIDAgMjNweCAwO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRXhwbG9yZUl0ZW0gPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICNjOGM4Yzg7XG5cdG1hcmdpbi1ib3R0b206IDE4cHg7XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Jjpob3ZlciB7XG5cdFx0b3BhY2l0eTogMC42NTtcblx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XG5cdH1cbmBcblxuXG5leHBvcnQgY29uc3QgU29jaWFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1hcmdpbi1sZWZ0OiA0MHB4O1xuYFxuXG5leHBvcnQgY29uc3QgU29jaWFsQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0bWFyZ2luOiAwIDAgMjdweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmb250LXNpemU6IDIxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwIDAgMjNweCAwO1xuICBgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFNvY2lhbEljb24gZnJvbSAnLi4vc29jaWFsLWljb24nXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vRm9vdGVyLnN0eWxlZCdcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuXHQ8Uy5Gb290ZXJXcmFwcGVyPlxuXHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PFMuRm9vdGVyTG9nb1dyYXBwZXI+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy93aGl0ZS5wbmdcIlxuXHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL3doaXRlLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvd2hpdGVAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvd2hpdGVAM3gucG5nIDN4XCJcblx0XHRcdFx0XHR3aWR0aD1cIjE0MFwiXG5cdFx0XHRcdFx0aGVpZ2h0PVwiMTI3XCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvUy5Gb290ZXJMb2dvV3JhcHBlcj5cblx0XHRcdDxTLlRleHRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5NYXJrZXREYXRhVGV4dD5cblx0XHRcdFx0XHRNYXJrZXQgZGF0YSBjb21wYW55IGlzIE5vcnRoIEFtZXJpY2HigJlzIGxlYWRpbmcgbWFya2V0IGRhdGEgc29sdXRpb25zXG5cdFx0XHRcdFx0YW5kIGNvbnN1bHRhbmN5IGNvbXBhbnkuIFdlIG9mZmVyIHNwZWNpYWxpemVkIGNvbnN1bHRpbmcgc2VydmljZXMgYW5kXG5cdFx0XHRcdFx0bGVhZGluZyBtYXJrZXQgZGF0YSBtYW5hZ2VtZW50IHNvbHV0aW9ucyB0aGF0IGhlbHAgZGVhbCB3aXRoIHRoZVxuXHRcdFx0XHRcdGNvbXBsZXhpdHkgb2YgeW91ciBkYXRhLiBSZWFjaCB1cyBhdCAoNDE2KS0zMTUtNzE3NyBvciBpbmZvQG1hcmtldGRhdGFjb21wYW55LmNvbS5cblx0XHRcdFx0PC9TLk1hcmtldERhdGFUZXh0PlxuXHRcdFx0PC9TLlRleHRXcmFwcGVyPlxuXHRcdFx0PFMuRXhwbG9yZUFuZFNvY2lhbFdyYXBwZXI+XG5cdFx0XHRcdDxTLkV4cGxvcmVXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLkV4cGxvcmVUaXRsZT5FeHBsb3JlPC9TLkV4cGxvcmVUaXRsZT5cblx0XHRcdFx0XHQ8TGluayBocmVmPVwiL3Jlc2VhcmNoXCI+XG5cdFx0XHRcdFx0XHQ8Uy5FeHBsb3JlSXRlbT5SZXNlYXJjaDwvUy5FeHBsb3JlSXRlbT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG5cdFx0XHRcdFx0XHQ8Uy5FeHBsb3JlSXRlbT5Db250YWN0PC9TLkV4cGxvcmVJdGVtPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9TLkV4cGxvcmVXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Tb2NpYWxXcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlNvY2lhbFRpdGxlPlNvY2lhbDwvUy5Tb2NpYWxUaXRsZT5cblx0XHRcdFx0XHQ8Uy5Tb2NpYWxDb250ZW50PlxuXHRcdFx0XHRcdFx0PFNvY2lhbEljb24gdXJsPVwiaHR0cDovL2ZhY2Vib29rLmNvbVwiIC8+XG5cdFx0XHRcdFx0XHQ8U29jaWFsSWNvbiB1cmw9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9tYXJrZXQtZGF0YS1jb21wYW55L1wiIC8+XG5cdFx0XHRcdFx0XHQ8U29jaWFsSWNvbiB1cmw9XCJodHRwOi8vdHdpdHRlci5jb21cIiAvPlxuXHRcdFx0XHRcdDwvUy5Tb2NpYWxDb250ZW50PlxuXHRcdFx0XHQ8L1MuU29jaWFsV3JhcHBlcj5cblx0XHRcdDwvUy5FeHBsb3JlQW5kU29jaWFsV3JhcHBlcj5cblx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdDwvUy5Gb290ZXJXcmFwcGVyPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBIYW1idXJnZXJNZW51Q29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0d2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW4tYm90dG9tOiA2MHB4O1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaXN0SXRlbSBmcm9tICcuLi9saXN0LWl0ZW0nXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vSGFtYnVyZ2VyTWVudUNvbnRlbnQuc3R5bGVkJ1xuXG5jb25zdCBIYW1idXJnZXJNZW51Q29udGVudCA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG9uQ2xvc2VNb2RhbCB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5IYW1idXJnZXJNZW51Q29udGVudFdyYXBwZXI+XG5cdFx0XHQ8Uy5IZWFkZXI+XG5cdFx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy8nKX0+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFjay5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBvbkNsaWNrPXtvbkNsb3NlTW9kYWx9PlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbi5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvY2xvc2VJY29uQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1MuSGVhZGVyPlxuXHRcdFx0PExpc3RJdGVtIGxhYmVsPVwiUmVzZWFyY2hcIiBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL3Jlc2VhcmNoJyl9IC8+XG5cdFx0XHQ8TGlzdEl0ZW0gbGFiZWw9XCJDb250YWN0IHVzXCIgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goJy9jb250YWN0Jyl9IC8+XG5cdFx0PC9TLkhhbWJ1cmdlck1lbnVDb250ZW50V3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXJNZW51Q29udGVudFxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBbmltYXRlZENhcmQgfSBmcm9tICcuL2FuaW1hdGVkLWNhcmQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEFuaW1hdGVkRm9vdGVyTGluayB9IGZyb20gJy4vYW5pbWF0ZWQtZm9vdGVyLWxpbmsnXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJpb0NhcmQgfSBmcm9tICcuL2Jpby1jYXJkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbidcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcGFueUNhcmQgfSBmcm9tICcuL2NvbXBhbnktY2FyZCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdEZvb3RlciB9IGZyb20gJy4vY29udGFjdC1mb290ZXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbnRhY3RGb3JtIH0gZnJvbSAnLi9jb250YWN0LWZvcm0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vZm9vdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIYW1idXJnZXJNZW51Q29udGVudCB9IGZyb20gJy4vaGFtYnVyZ2VyLW1lbnUtY29udGVudCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSW5wdXQgfSBmcm9tICcuL2lucHV0J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMYWJlbFdpdGhBcnJvdyB9IGZyb20gJy4vbGFiZWwtd2l0aC1hcnJvdydcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5b3V0IH0gZnJvbSAnLi9sYXlvdXQnXG5leHBvcnQgeyBkZWZhdWx0IGFzIExpc3RJdGVtIH0gZnJvbSAnLi9saXN0LWl0ZW0nXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9tb2RhbCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVzZWFyY2hQZGZGb3JtIH0gZnJvbSAnLi9yZXNlYXJjaC1wZGYtZm9ybSdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU29jaWFsSWNvbiB9IGZyb20gJy4vc29jaWFsLWljb24nXG5leHBvcnQgeyBkZWZhdWx0IGFzIFN0YXJ0RG93bmxvYWRGb3JtIH0gZnJvbSAnLi9zdGFydC1kb3dubG9hZC1mb3JtJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUYWJCYXIgfSBmcm9tICcuL3RhYi1iYXInXG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHRGaWVsZCB9IGZyb20gJy4vdGV4dGZpZWxkJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaGFua1lvdSB9IGZyb20gJy4vdGhhbmsteW91J1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUaWNrZXJUYXBlIH0gZnJvbSAnLi90aWNrZXItdGFwZSciLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgSW5wdXRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbmBcblxuZXhwb3J0IGNvbnN0IExhYmVsV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmV4cG9ydCBjb25zdCBMYWJlbCA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0bWFyZ2luLXJpZ2h0OiAycHg7XG5gXG5cbmV4cG9ydCBjb25zdCBFcnJvclN0YXIgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICdMdWNpZGFHcmFuZGUnO1xuXHRmb250LXNpemU6IDIxcHg7XG5cdGNvbG9yOiAjZmYwMDAwO1xuYFxuXG5leHBvcnQgY29uc3QgRmllbGRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyOiAkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5pc0Vycm9yXG5cdFx0XHQ/IGBzb2xpZCAxcHggJHtwcm9wcy50aGVtZS5jb2xvcnMucmVkfWBcblx0XHRcdDogJ3NvbGlkIDFweCAjYzhjOGM4J307XG5cdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxuXHRcdHByb3BzLmlzRXJyb3Jcblx0XHRcdD8gJ3JnYmEoMjU1LCAzOSwgODIsIDAuMDIpJ1xuXHRcdFx0OiBgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX1gfTtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cblx0LW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBPcGVyYS9JRSA4KyAqL1xuYFxuXG5leHBvcnQgY29uc3QgRmllbGQgPSBzdHlsZWQuaW5wdXRgXG5cdGhlaWdodDogMzlweDtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmctbGVmdDogMTRweDtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PlxuXHRcdHByb3BzLmlzRXJyb3IgPyBwcm9wcy50aGVtZS5jb2xvcnMucmVkIDogcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG5cdGJvcmRlcjogbm9uZTtcblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0cGFkZGluZy1yaWdodDogMTZweDtcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9JbnB1dC5zdHlsZWQnXG5cbmNvbnN0IElucHV0ID0gKHtcblx0bGFiZWwsXG5cdHBsYWNlaG9sZGVyLFxuXHRuYW1lLFxuXHR2YWx1ZSxcblx0b25DaGFuZ2UsXG5cdGlzUmVxdWlyZWQsXG5cdGlzRXJyb3Jcbn0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHQ8Uy5MYWJlbFdyYXBwZXI+XG5cdFx0XHRcdDxTLkxhYmVsPntsYWJlbH08L1MuTGFiZWw+XG5cdFx0XHRcdHtpc1JlcXVpcmVkICYmIDxTLkVycm9yU3Rhcj4qPC9TLkVycm9yU3Rhcj59XG5cdFx0XHQ8L1MuTGFiZWxXcmFwcGVyPlxuXHRcdFx0PFMuRmllbGRXcmFwcGVyIGlzRXJyb3I9e2lzRXJyb3J9PlxuXHRcdFx0XHQ8Uy5GaWVsZFxuXHRcdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0XHRuYW1lPXtuYW1lfVxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cblx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtpc0Vycm9yICYmIChcblx0XHRcdFx0XHQ8Uy5JbWFnZVdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Vycm9yLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2Vycm9yLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvZXJyb3JAMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2Vycm9yQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0XHRcdGhlaWdodD1cIjIyXCJcblx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyMlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUy5JbWFnZVdyYXBwZXI+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L1MuRmllbGRXcmFwcGVyPlxuXHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdClcbn1cblxuSW5wdXQuZGVmYXVsdFByb3BzID0ge1xuXHRpc1JlcXVpcmVkOiBmYWxzZVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IExhYmVsV2l0aEFycm93V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuaDVgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5cdG1hcmdpbjogMCA3cHggMCAwO1xuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xhYmVsV2l0aEFycm93LnN0eWxlZCdcblxuY29uc3QgTGFiZWxXaXRoQXJyb3cgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBsYWJlbCwgb25DbGljayB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5MYWJlbFdpdGhBcnJvd1dyYXBwZXIgb25DbGljaz17b25DbGlja30+XG5cdFx0XHQ8Uy5MYWJlbD57bGFiZWx9PC9TLkxhYmVsPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9hcnJvdy5wbmdcIlxuXHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9hcnJvd0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2Fycm93QDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL2Fycm93QDN4LnBuZyAzeFwiXG5cdFx0XHQvPlxuXHRcdDwvUy5MYWJlbFdpdGhBcnJvd1dyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFiZWxXaXRoQXJyb3dcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0d2lkdGg6IDEwMCU7XG5gXG5cbmV4cG9ydCBjb25zdCBGb290ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWFyZ2luLXRvcDogYXV0bztcbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9MYXlvdXQuc3R5bGVkJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9mb290ZXInXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5XcmFwcGVyPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PFMuRm9vdGVyV3JhcHBlcj5cblx0XHRcdFx0PEZvb3RlciAvPlxuXHRcdFx0PC9TLkZvb3RlcldyYXBwZXI+XG5cdFx0PC9TLldyYXBwZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuXG5leHBvcnQgY29uc3QgTGlzdEl0ZW1XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWluLWhlaWdodDogNjBweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWZlZmVmO1xuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1zaXplOiAyMXB4O1xuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vTGlzdEl0ZW0uc3R5bGVkJ1xuXG5jb25zdCBMaXN0SXRlbSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IGxhYmVsLCBvbkNsaWNrIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkxpc3RJdGVtV3JhcHBlciBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHRcdDxTLkxhYmVsPntsYWJlbH08L1MuTGFiZWw+XG5cdFx0PC9TLkxpc3RJdGVtV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJ1xuXG5jb25zdCBjdXN0b21TdHlsZXMgPSB7XG5cdGNvbnRlbnQ6IHtcblx0XHRwYWRkaW5nOiAnMjBweCAyMHB4IDAgMjBweCcsXG5cdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuXHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxuXHRcdG1heFdpZHRoOiAnNzI0cHgnLFxuXHRcdG1heEhlaWdodDogJzYwMHB4Jyxcblx0XHRtYXJnaW5MZWZ0OiAnYXV0bycsXG5cdFx0bWFyZ2luUmlnaHQ6ICdhdXRvJyxcblx0XHRtYXJnaW5Ub3A6ICcxMCUnLFxuXHRcdHRvcDogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdGJvdHRvbTogMFxuXHR9LFxuXHRvdmVybGF5OiB7XG5cdFx0dG9wOiAwLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cmlnaHQ6IDAsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjI1JyBcblx0XHQvLyBtYXJnaW46ICcyMHB4Jyxcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6ICdub25lJ1xuXHR9XG59XG5cbmNvbnN0IE1EQ01vZGFsID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgY2hpbGRyZW4sIG1vZGFsVmlzaWJsZSwgb25SZXF1ZXN0Q2xvc2UgfSA9IHByb3BzXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRNb2RhbC5zZXRBcHBFbGVtZW50KCdib2R5Jylcblx0fSwgW10pXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsXG5cdFx0XHRpc09wZW49e21vZGFsVmlzaWJsZX1cblx0XHRcdG9uUmVxdWVzdENsb3NlPXtvblJlcXVlc3RDbG9zZX1cblx0XHRcdHN0eWxlPXtjdXN0b21TdHlsZXN9XG5cdFx0PlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvTW9kYWw+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTURDTW9kYWxcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgUmVzZWFyY2hQZGZGb3JtV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdG1pbi1oZWlnaHQ6IDU5MXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWF4LWhlaWdodDogNjAwcHg7XG5cdFx0bWF4LXdpZHRoOiA3MjRweDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IEltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGhlaWdodDogMzJweDtcblx0d2lkdGg6IDMycHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdCY6aG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuc2JHcmV5fTtcblx0fVxuYFxuXG5leHBvcnQgY29uc3QgQ2xvc2VJY29uID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiAxOHB4O1xuXHR3aWR0aDogMThweDtcbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1hcmdpbjogMCA2MHB4O1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMCAwIDEycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmg1YFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbi1ib3R0b206IDAgMCAxOHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBJbnB1dFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiAxMnB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdCY6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgXHRtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgIFx0fVxuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGFsaWduLXNlbGY6IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IFN0eWxlZEFuY2hvciA9IHN0eWxlZC5hYFxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vaW5wdXQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2J1dHRvbidcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9SZXNlYXJjaFBkZkZvcm0uc3R5bGVkJ1xuXG5jb25zdCBSZXNlYXJjaFBkZkZvcm0gPSAocHJvcHMpID0+IHtcblx0Y29uc3Qge1xuXHRcdGZpcnN0TmFtZSxcblx0XHRjb21wYW55LFxuXHRcdGVtYWlsLFxuXHRcdG9uQ2hhbmdlLFxuXHRcdG9uU3VibWl0LFxuXHRcdGlzRGlzYWJsZWQsXG5cdFx0b25SZXF1ZXN0Q2xvc2UsXG5cdFx0cGRmRm9ybVxuXHR9ID0gcHJvcHNcblxuXHRyZXR1cm4gKFxuXHRcdDxTLlJlc2VhcmNoUGRmRm9ybVdyYXBwZXI+XG5cdFx0XHQ8Uy5JbWFnZVdyYXBwZXI+XG5cdFx0XHRcdDxTLkNsb3NlSWNvblxuXHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbi5wbmdcIlxuXHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbi5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbkAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbkAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkltYWdlV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5UaXRsZT5KdXN0IG9uZSBsYXN0IHRoaW5nLi48L1MuVGl0bGU+XG5cdFx0XHRcdDxTLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFRvIGdldCB0aGlzIGNhc2Ugc3R1ZHkgY29tcGxldGVseSBmcmVlLCBwbGVhc2UgbGVhdmUgdXMgeW91ciBuYW1lIGFuZFxuXHRcdFx0XHRcdGVtYWlsIGFkZHJlc3MgdG8gcmVjZWl2ZSBmdXR1cmUgbmV3cyBhbmQgdXBkYXRlcy5cblx0XHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHQ8Uy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRsYWJlbD1cIk5hbWVcIlxuXHRcdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJKb2huIERvZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZmlyc3ROYW1lXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtmaXJzdE5hbWV9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0XHRcdFx0XHRpc1JlcXVpcmVkPXt0cnVlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdGxhYmVsPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0Ly8gcGxhY2Vob2xkZXI9XCJqb2huZG9lQGVtYWlsLmNvbVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e29uQ2hhbmdlfVxuXHRcdFx0XHRcdFx0aXNSZXF1aXJlZFxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5JbnB1dFdyYXBwZXI+XG5cdFx0XHRcdDxTLklucHV0V3JhcHBlcj5cblx0XHRcdFx0XHQ8SW5wdXRcblx0XHRcdFx0XHRcdGxhYmVsPVwiQ29tcGFueVwiXG5cdFx0XHRcdFx0XHQvLyBwbGFjZWhvbGRlcj1cImNvbXBhbnkgbmFtZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiY29tcGFueVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17Y29tcGFueX1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtvbkNoYW5nZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuSW5wdXRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlN0eWxlZEFuY2hvclxuXHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IChpc0Rpc2FibGVkID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogKCkgPT4ge30pfVxuXHRcdFx0XHRcdFx0aHJlZj17cGRmRm9ybX1cblx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRidG5UZXh0PVwiRG93bmxvYWQgUERGXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17b25TdWJtaXR9XG5cdFx0XHRcdFx0XHRcdGlzRGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUy5TdHlsZWRBbmNob3I+XG5cdFx0XHRcdDwvUy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdDwvUy5SZXNlYXJjaFBkZkZvcm1XcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoUGRmRm9ybVxuIiwiaW1wb3J0IHsgU29jaWFsSWNvbiBhcyBSZWFjdFNvY2lhbEljb24gfSBmcm9tICdyZWFjdC1zb2NpYWwtaWNvbnMnXG5pbXBvcnQgeyBNRENfUFVSUExFLCBXSElURSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9jb2xvcnMnXG5cbmNvbnN0IFNvY2lhbEljb24gPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyB1cmwgfSA9IHByb3BzXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0U29jaWFsSWNvblxuXHRcdFx0dXJsPXt1cmx9XG5cdFx0XHRzdHlsZT17eyBoZWlnaHQ6IDQwLCB3aWR0aDogNDAsIG1hcmdpblJpZ2h0OiAyMCB9fVxuXHRcdFx0YmdDb2xvcj17TURDX1BVUlBMRX1cblx0XHRcdGZnQ29sb3I9e1dISVRFfVxuXHRcdC8+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU29jaWFsSWNvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24nXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vU3RhcnREb3dubG9hZEZvcm0uc3R5bGVkJ1xuXG5jb25zdCBTdGFydERvd25sb2FkRm9ybSA9IChwcm9wcykgPT4ge1xuXHRjb25zdCB7IG9uUmVxdWVzdENsb3NlLCBwZGZGb3JtLCBvblN1Ym1pdCB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5TdGFydERvd25sb2FkRm9ybVdyYXBwZXI+XG5cdFx0XHQ8Uy5JbWFnZVdyYXBwZXI+XG5cdFx0XHRcdDxTLkNsb3NlSWNvblxuXHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbi5wbmdcIlxuXHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbi5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbkAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2Nsb3NlSWNvbkAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e29uUmVxdWVzdENsb3NlfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9TLkltYWdlV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5UaXRsZT5TdGFydCB5b3VyIGRvd25sb2FkPC9TLlRpdGxlPlxuXHRcdFx0XHQ8Uy5EZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRBZnRlciByZWFkaW5nLCBJZiB5b3UnZCBsaWtlIHRvIGxlYXJuIG1vcmUgYWJvdXQgaG93IHdlIGNhbiBoZWxwIHlvdVxuXHRcdFx0XHRcdG9wdGltaXplIHlvdXIgZGF0YSBzcGVuZCwgZ2V0IGluIHRvdWNoIHdpdGggb3VyIHRlYW0gYW5kIHdlJ2QgYmUgaGFwcHlcblx0XHRcdFx0XHR0byBoZWxwIHlvdS5cblx0XHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlN0eWxlZEFuY2hvciBocmVmPXtwZGZGb3JtfSB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0XHRcdDxCdXR0b24gYnRuVGV4dD1cIkRvd25sb2FkXCIgb25DbGljaz17b25TdWJtaXR9IC8+XG5cdFx0XHRcdFx0PC9TLlN0eWxlZEFuY2hvcj5cblx0XHRcdFx0PC9TLkJ1dHRvbldyYXBwZXI+XG5cdFx0XHQ8L1MuQ29udGVudFdyYXBwZXI+XG5cdFx0PC9TLlN0YXJ0RG93bmxvYWRGb3JtV3JhcHBlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGFydERvd25sb2FkRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBTdGFydERvd25sb2FkRm9ybVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRtaW4taGVpZ2h0OiA1NjBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdG1heC1oZWlnaHQ6IDYwMHB4O1xuXHRcdG1heC13aWR0aDogNzI0cHg7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRoZWlnaHQ6IDMycHg7XG5cdHdpZHRoOiAzMnB4O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHQmOmhvdmVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLnNiR3JleX07XG5cdH1cbmBcblxuZXhwb3J0IGNvbnN0IENsb3NlSWNvbiA9IHN0eWxlZC5pbWdgXG5cdGhlaWdodDogMThweDtcblx0d2lkdGg6IDE4cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRtYXJnaW46IDAgNjJweDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgyYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAzNnB4O1xuXHRsaW5lLWhlaWdodDogNDhweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW46IDAgMCAxMnB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5oNWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDIxcHg7XG5cdGxpbmUtaGVpZ2h0OiAyOHB4O1xuXHRtYXJnaW46IDAgMCA0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBCdXR0b25XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0YWxpZ24tc2VsZjogY2VudGVyO1xuYFxuXG5leHBvcnQgY29uc3QgU3R5bGVkQW5jaG9yID0gc3R5bGVkLmFgXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbmBcbiIsImltcG9ydCBTdGFydERvd25sb2FkRm9ybSBmcm9tICcuL1N0YXJ0RG93bmxvYWRGb3JtJ1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydERvd25sb2FkRm9ybVxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiA3MnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8ICd0cmFuc3BhcmVudCd9O1xuYFxuXG5leHBvcnQgY29uc3QgTW9iaWxlVGFiV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0ZGlzcGxheTogbm9uZTtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IFRhYldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBub25lO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0YH1cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgVGFiID0gc3R5bGVkLnNwYW5gXG5cdGNvbG9yOiAkeyhwcm9wcykgPT5cblx0XHRwcm9wcy5iYXJUaGVtZSA9PT0gJ2RhcmsnXG5cdFx0XHQ/IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja1xuXHRcdFx0OiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa307XG5cdG1hcmdpbi1yaWdodDogNTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRvcGFjaXR5OiAwLjY1O1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcblx0fVxuYFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwnXG5pbXBvcnQgSGFtYnVyZ2VyTWVudUNvbnRlbnQgZnJvbSAnLi4vaGFtYnVyZ2VyLW1lbnUtY29udGVudCdcblxuaW1wb3J0ICogYXMgUyBmcm9tICcuL1RhYkJhci5zdHlsZWQnXG5cbmNvbnN0IGxpbmtEYXRhID0gW1xuXHR7XG5cdFx0aHJlZjogJy9yZXNlYXJjaCcsXG5cdFx0dGFiTmFtZTogJ1Jlc2VhcmNoJ1xuXHR9LFxuXHR7XG5cdFx0aHJlZjogJy9jb250YWN0Jyxcblx0XHR0YWJOYW1lOiAnQ29udGFjdCdcblx0fVxuXVxuXG5jb25zdCBUYWJCYXIgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBiYXJUaGVtZSwgYmFja2dyb3VuZENvbG9yIH0gPSBwcm9wc1xuXHRjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3QgcmVuZGVyTGlua3MgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGxpbmtEYXRhLm1hcCgoZGF0YSkgPT4ge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PExpbmsga2V5PXtkYXRhLmhyZWZ9IGhyZWY9e2RhdGEuaHJlZn0+XG5cdFx0XHRcdFx0PFMuVGFiIGJhclRoZW1lPXtiYXJUaGVtZX0+e2RhdGEudGFiTmFtZX08L1MuVGFiPlxuXHRcdFx0XHQ8L0xpbms+XG5cdFx0XHQpXG5cdFx0fSlcblx0fVxuXG5cdGNvbnN0IFdlYlRhYkJhciA9ICgpID0+IChcblx0XHQ8Uy5UYWJXcmFwcGVyPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0PFMuVGFiPlxuXHRcdFx0XHRcdHtiYXJUaGVtZSA9PT0gJ2RhcmsnICYmIChcblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFjay5wbmdcIlxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsLWJsYWNrQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdHtiYXJUaGVtZSAhPT0gJ2RhcmsnICYmIChcblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbEAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tZGMtbG9nby1ob3Jpem9udGFsQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvUy5UYWI+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHR7cmVuZGVyTGlua3MoKX1cblx0XHQ8L1MuVGFiV3JhcHBlcj5cblx0KVxuXG5cdGNvbnN0IE1vYmlsZVRhYkJhciA9ICgpID0+IChcblx0XHQ8Uy5Nb2JpbGVUYWJXcmFwcGVyPlxuXHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHR7YmFyVGhlbWUgPT09ICdkYXJrJyAmJiAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2sucG5nXCJcblx0XHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbC1ibGFja0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwtYmxhY2tAM3gucG5nIDN4XCJcblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0XHR7YmFyVGhlbWUgIT09ICdkYXJrJyAmJiAoXG5cdFx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWwucG5nXCJcblx0XHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21kYy1sb2dvLWhvcml6b250YWxAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgL3N0YXRpYy9pbWFnZXMvbWRjLWxvZ28taG9yaXpvbnRhbEAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgb25DbGljaz17KCkgPT4gc2V0TW9kYWxWaXNpYmxlKHRydWUpfT5cblx0XHRcdFx0e2JhclRoZW1lID09PSAnZGFyaycgJiYgKFxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2JsYWNrLWhhbWJ1cmdlci5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYmxhY2staGFtYnVyZ2VyLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvYmxhY2staGFtYnVyZ2VyQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9ibGFjay1oYW1idXJnZXJAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7YmFyVGhlbWUgIT09ICdkYXJrJyAmJiAoXG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvaGFtYnVyZ2VyLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9oYW1idXJnZXIucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9oYW1idXJnZXJAMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2hhbWJ1cmdlckAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L1MuTW9iaWxlVGFiV3JhcHBlcj5cblx0KVxuXG5cdHJldHVybiAoXG5cdFx0PFMuV3JhcHBlciB0aGVtZURhcms9e3RydWV9IGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfT5cblx0XHRcdDxXZWJUYWJCYXIgLz5cblx0XHRcdDxNb2JpbGVUYWJCYXIgLz5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHRtb2RhbFZpc2libGU9e21vZGFsVmlzaWJsZX1cblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxIYW1idXJnZXJNZW51Q29udGVudCBvbkNsb3NlTW9kYWw9eygpID0+IHNldE1vZGFsVmlzaWJsZShmYWxzZSl9IC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvUy5XcmFwcGVyPlxuXHQpXG59XG5cblRhYkJhci5kZWZhdWx0UHJvcHMgPSB7XG5cdGJhclRoZW1lOiAnbGlnaHQnXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYkJhclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IFRleHRGaWVsZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuYFxuXG5leHBvcnQgY29uc3QgTGFiZWwgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjhweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5gXG5cbmV4cG9ydCBjb25zdCBGaWVsZCA9IHN0eWxlZC50ZXh0YXJlYWBcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2M4YzhjODtcblx0aGVpZ2h0OiAxMjVweDtcblx0d2lkdGg6IDEwMCU7XG5cdHBhZGRpbmc6IDZweCAwIDAgMTRweDtcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubGlnaHRHcmV5fTtcblx0cmVzaXplOiBub25lO1xuXHQtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xuXHQtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIE9wZXJhL0lFIDgrICovXG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vVGV4dGZpZWxkLnN0eWxlZCdcblxuY29uc3QgVGV4dGZpZWxkID0gKHsgbGFiZWwsIHZhbHVlLCBuYW1lLCBvbkNoYW5nZSwgcGxhY2Vob2xkZXIgfSkgPT4gKFxuXHQ8Uy5UZXh0RmllbGRXcmFwcGVyPlxuXHRcdDxTLkxhYmVsPntsYWJlbH08L1MuTGFiZWw+XG5cdFx0PFMuRmllbGRcblx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdG5hbWU9e25hbWV9XG5cdFx0XHRwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG5cdFx0XHRvbkNoYW5nZT17b25DaGFuZ2V9XG5cdFx0Lz5cblx0PC9TLlRleHRGaWVsZFdyYXBwZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRmaWVsZFxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBUaGFua1lvdVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy53aGl0ZX07XG5gXG5cbmV4cG9ydCBjb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiAyOXB4O1xuYFxuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDNgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRtYXJnaW46IDAgMCA5cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuaDVgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwIDAgNDRweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDAgMCA2M3B4O1xuICAgIG1heC13aWR0aDogMzQ0cHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQW5pbWF0ZWRGb290ZXJMaW5rIGZyb20gJy4uL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1RoYW5rWW91LnN0eWxlZCdcblxuY29uc3QgVGhhbmtZb3UgPSAocHJvcHMpID0+IHtcblx0Y29uc3QgeyBkZXNjcmlwdGlvbiwgaHJlZiwgZm9vdGVyTWVzc2FnZSwgb25DbGljayB9ID0gcHJvcHNcblx0cmV0dXJuIChcblx0XHQ8Uy5UaGFua1lvdVdyYXBwZXI+XG5cdFx0XHQ8Uy5JbWFnZVdyYXBwZXI+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9wdXJwbGUtY2hlY2stbWFyay5wbmdcIlxuXHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL3B1cnBsZS1jaGVjay1tYXJrLnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvcHVycGxlLWNoZWNrLW1hcmtAMngucG5nIDJ4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL3B1cnBsZS1jaGVjay1tYXJrQDN4LnBuZyAzeFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L1MuSW1hZ2VXcmFwcGVyPlxuXHRcdFx0PFMuVGl0bGU+VGhhbmsgWW91PC9TLlRpdGxlPlxuXHRcdFx0PFMuRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUy5EZXNjcmlwdGlvbj5cblx0XHRcdDxBbmltYXRlZEZvb3Rlckxpbmtcblx0XHRcdFx0bWVzc2FnZT17Zm9vdGVyTWVzc2FnZX1cblx0XHRcdFx0aHJlZj17aHJlZn1cblx0XHRcdFx0b25DbGljaz17b25DbGlja31cblx0XHRcdC8+XG5cdFx0PC9TLlRoYW5rWW91V3JhcHBlcj5cblx0KVxufVxuXG5UaGFua1lvdS5kZWZhdWx0UHJvcHMgPSB7XG5cdGVtYWlsOiAneW91ciBlbWFpbCBhZGRyZXNzJyxcblx0b25DbGljazogKCkgPT4ge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhhbmtZb3VcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpY2tlclRhcGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLl9yZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9zMy50cmFkaW5ndmlldy5jb20vZXh0ZXJuYWwtZW1iZWRkaW5nL2VtYmVkLXdpZGdldC10aWNrZXItdGFwZS5qc1wiXHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZVxyXG4gICAgICAgIHNjcmlwdC5pbm5lckhUTUwgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIFwic3ltYm9sc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IEJBQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6QkFDXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkZXQjogQlJGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiRldCOkJSRlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJIS0VYOiAzODhcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJIS0VYOjM4OFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBCWFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6QlhcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQU1FWDogQ0JPRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkFNRVg6Q0JPRVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IENNQ1NBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROkNNQ1NBXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogQ01FXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROkNNRVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IENNVFhcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6Q01UWFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IENPV05cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6Q09XTlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBETkJcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkROQlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBET1dcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkRPV1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IEVNWUlGXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOkVNWUlGXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNBUElUQUxDT006IEVSTVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkNBUElUQUxDT006RVJNXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9UQzogRkRSVkZcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJPVEM6RkRSVkZcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogRkRTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpGRFNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogRklTXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpGSVNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBGTEVYXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROkZMRVhcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogSUFDQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6SUFDQVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBJQ0VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOklDRVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IElGSlBZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOklGSlBZXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkNBUElUQUxDT006IElORlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkNBUElUQUxDT006SU5GXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IElORk9cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOklORk9cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ1NFOiBJUFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkNTRTpJUFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBU1g6IElSRVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkFTWDpJUkVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBJVkZaRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpJVkZaRlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBKUE1cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOkpQTVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMU0U6IExTRUdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJMU0U6TFNFR1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IE1BVFdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6TUFUV1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBNQ09cIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOk1DT1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDQk9UOiBNQ1gxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiQ0JPVDpNQ1gxIVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IE1LVFhcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6TUtUWFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPVEM6IE1OWEJZXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOk1OWEJZXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogTU9STlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpNT1JOXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IE1TQ0lcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOk1TQ0lcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBNVkVOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOk1WRU5cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBOREFRXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTkFTREFROk5EQVFcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogTk1SXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpOTVJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBOV0VcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6TldFXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogTldTQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpOV1NBXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IE9SQ0xcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOk9SQ0xcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6UE9TVFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOQVNEQVE6IFBTRUNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6UFNFQ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMU0U6IFBURUNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJMU0U6UFRFQ1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJMU0U6IFJFTFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkxTRTpSRUxcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBSTFhYRlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk9UQzpSTFhYRlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBTS1lcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOWVNFOlNLWVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOWVNFOiBTUEdJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpTUEdJXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogU1NOQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5BU0RBUTpTU05DXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IFNUVFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6U1RUXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkxTRTogVENBUFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIkxTRTpUQ0FQXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5ZU0U6IFRSSVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwicHJvTmFtZVwiOiBcIk5ZU0U6VFJJXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFNRVg6IFRUQUNcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJBTUVYOlRUQUNcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTkFTREFROiBUVERcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6VFREXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk5BU0RBUTogVFdcIixcclxuICAgICAgICAgICAgICAgICAgICBcInByb05hbWVcIjogXCJOQVNEQVE6VFdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiTllTRTogV0FUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiTllTRTpXQVRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT1RDOiBXU0NPXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9OYW1lXCI6IFwiT1RDOldTQ09cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInNob3dTeW1ib2xMb2dvXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwiY29sb3JUaGVtZVwiOiBcImxpZ2h0XCIsXHJcbiAgICAgICAgICAgIFwiaXNUcmFuc3BhcmVudFwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJkaXNwbGF5TW9kZVwiOiBcInJlZ3VsYXJcIixcclxuICAgICAgICAgICAgXCJsb2NhbGVcIjogXCJlblwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9yZWYuY3VycmVudC5hcHBlbmRDaGlsZChzY3JpcHQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhZGluZ3ZpZXctd2lkZ2V0LWNvbnRhaW5lclwiIHJlZj17dGhpcy5fcmVmfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhZGluZ3ZpZXctd2lkZ2V0LWNvbnRhaW5lcl9fd2lkZ2V0XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWRpbmd2aWV3LXdpZGdldC1jb3B5cmlnaHRcIj48YSBocmVmPVwiaHR0cHM6Ly93d3cudHJhZGluZ3ZpZXcuY29tXCIgcmVsPVwibm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPjxzcGFuIGNsYXNzTmFtZT1cImJsdWUtdGV4dFwiPlRpY2tlciBUYXBlPC9zcGFuPjwvYT4gYnkgVHJhZGluZ1ZpZXc8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoYXMsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9pMThuX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfaTE4bl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCB0aGlzLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShcbiAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIHRoaXMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgJy9fZXJyb3InXG4gICAgICApXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgdHJ5IHtcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgZXJyLFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9IGFzIGFueSlcbiAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG5cdExheW91dCxcblx0TW9kYWwsXG5cdFRoYW5rWW91LFxuXHRSZXNlYXJjaFBkZkZvcm0sXG5cdFN0YXJ0RG93bmxvYWRGb3JtLFxuXHRDb250YWN0Rm9vdGVyXG59IGZyb20gJy4uL2NvbXBvbmVudHMnXG5pbXBvcnQge1xuXHRMYW5kaW5nLFxuXHRMZWFkZXJNYXJrZXREYXRhLFxuXHRXb3JrZWRXaXRoLFxuXHRXaHlNZGMsXG5cdFNlcnZpY2VzLFxuXHRSZXNlYXJjaFxufSBmcm9tICcuLi9zZWN0aW9ucy9ob21lLXNlY3Rpb24nXG5cbmltcG9ydCBwZGZNYXBwZXIgZnJvbSAnLi4vdXRpbHMvcGRmTWFwcGVyJ1xuXG4vLyBVdGlsc1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRvcidcbmltcG9ydCB7IHNlbmRFbWFpbCB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaVNlcnZpY2UnXG5cbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUvdXNlU3RvcmUnXG5pbXBvcnQgeyBVU0VSX1NJR05FRF9VUCB9IGZyb20gJy4uL3N0b3JlL2FjdGlvblR5cGVzJ1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuY29uc3QgQ29udGVudFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXgtd2lkdGg6IDEyMDBweDtcblx0cGFkZGluZzogMCAyMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblxuYFxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXHRjb25zdCBbbW9kYWxWaXNpYmxlLCBzZXRNb2RhbFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IFtlbWFpbFNlbnQsIHNldEVtYWlsU2VudF0gPSB1c2VTdGF0ZShmYWxzZSlcblx0Y29uc3QgW3BkZkZvcm0sIHNldFBkZkZvcm1dID0gdXNlU3RhdGUoJycpXG5cblx0Y29uc3QgW2Zvcm0sIHNldEZvcm1WYWx1ZXNdID0gdXNlU3RhdGUoe1xuXHRcdGZpcnN0TmFtZTogJycsXG5cdFx0Y29tcGFueTogJycsXG5cdFx0ZW1haWw6ICcnXG5cdH0pXG5cblx0Ly8gSG9va3MgdG8gc2F2ZSB0aGUgdXNlcnMgZm9ybSBkYXRhXG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VTdG9yZSgpXG5cdGNvbnN0IHNhdmVVc2VyID0gdXNlQ2FsbGJhY2soXG5cdFx0KGZvcm1WYWx1ZXMpID0+IGRpc3BhdGNoKHsgdHlwZTogVVNFUl9TSUdORURfVVAsIHBheWxvYWQ6IGZvcm1WYWx1ZXMgfSksXG5cdFx0W2Rpc3BhdGNoXVxuXHQpXG5cblx0Y29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJlcyA9IGF3YWl0IHNlbmRFbWFpbChmb3JtKVxuXHRcdFx0aWYgKHJlcy5lcnJvcikge1xuXHRcdFx0XHRzZXRIYXNFcnJvcih0cnVlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gU2F2ZSB1c2VyIGZvcm0gdG8gc3RvcmVcblx0XHRcdFx0c2F2ZVVzZXIoe1xuXHRcdFx0XHRcdG5hbWU6IGZvcm0uZmlyc3ROYW1lLFxuXHRcdFx0XHRcdGNvbXBhbnk6IGZvcm0uY29tcGFueSxcblx0XHRcdFx0XHRlbWFpbDogZm9ybS5lbWFpbFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRzZXRFbWFpbFNlbnQodHJ1ZSlcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdHNldEhhc0Vycm9yKHRydWUpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdXBkYXRlRmllbGQgPSAoZSkgPT4ge1xuXHRcdHNldEZvcm1WYWx1ZXMoe1xuXHRcdFx0Li4uZm9ybSxcblx0XHRcdFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcblx0XHR9KVxuXHR9XG5cblx0Y29uc3Qgb25Nb2RhbENsb3NlID0gKCkgPT4ge1xuXHRcdHNldE1vZGFsVmlzaWJsZShmYWxzZSlcblx0XHRzZXRFbWFpbFNlbnQoZmFsc2UpXG5cdH1cblxuXHRjb25zdCBvcGVuTW9kYWwgPSAocmVzZWFyY2hGb3JtKSA9PiB7XG5cdFx0c2V0TW9kYWxWaXNpYmxlKHRydWUpXG5cdFx0c2V0UGRmRm9ybShwZGZNYXBwZXJbcmVzZWFyY2hGb3JtXSlcblx0fVxuXG5cdGNvbnN0IGlzRGlzYWJsZWQgPSAhZm9ybS5maXJzdE5hbWUgJiYgIXZhbGlkYXRlRW1haWwoZm9ybS5lbWFpbClcblxuXHRyZXR1cm4gKFxuXHRcdDxMYXlvdXQ+XG5cdFx0XHQ8TGFuZGluZyAvPlxuXHRcdFx0PE1vZGFsIG1vZGFsVmlzaWJsZT17bW9kYWxWaXNpYmxlfSBvblJlcXVlc3RDbG9zZT17b25Nb2RhbENsb3NlfT5cblx0XHRcdFx0eyFlbWFpbFNlbnQgJiYgIWhhc0Vycm9yICYmICFzdGF0ZS51c2VyICYmIChcblx0XHRcdFx0XHQ8UmVzZWFyY2hQZGZGb3JtXG5cdFx0XHRcdFx0XHRmaXJzdE5hbWU9e2Zvcm0uZmlyc3ROYW1lfVxuXHRcdFx0XHRcdFx0Y29tcGFueT17Zm9ybS5jb21wYW55fVxuXHRcdFx0XHRcdFx0ZW1haWw9e2Zvcm0uZW1haWx9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17dXBkYXRlRmllbGR9XG5cdFx0XHRcdFx0XHRpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxuXHRcdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e29uTW9kYWxDbG9zZX1cblx0XHRcdFx0XHRcdG9uU3VibWl0PXtvblN1Ym1pdH1cblx0XHRcdFx0XHRcdHBkZkZvcm09e3BkZkZvcm19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdFx0eyFlbWFpbFNlbnQgJiYgIWhhc0Vycm9yICYmIHN0YXRlLnVzZXIgJiYgKFxuXHRcdFx0XHRcdDxTdGFydERvd25sb2FkRm9ybVxuXHRcdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9e29uTW9kYWxDbG9zZX1cblx0XHRcdFx0XHRcdHBkZkZvcm09e3BkZkZvcm19XG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17KCkgPT4gc2V0RW1haWxTZW50KHRydWUpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtlbWFpbFNlbnQgJiYgIWhhc0Vycm9yICYmIChcblx0XHRcdFx0XHQ8VGhhbmtZb3Vcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPVwiWW91ciBkb3dubG9hZCBzaG91bGQgc3RhcnQgYXV0b21hdGljYWxseS4gRW5qb3khXCJcblx0XHRcdFx0XHRcdGZvb3Rlck1lc3NhZ2U9XCJCYWNrIHRvIHJlc2VhcmNoXCJcblx0XHRcdFx0XHRcdGhyZWY9XCIvcmVzZWFyY2hcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17b25Nb2RhbENsb3NlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L01vZGFsPlxuXHRcdFx0PENvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8TGVhZGVyTWFya2V0RGF0YSAvPlxuXHRcdFx0XHQ8V29ya2VkV2l0aCAvPlxuXHRcdFx0XHQ8V2h5TWRjIC8+XG5cdFx0XHRcdDxTZXJ2aWNlcyAvPlxuXHRcdFx0XHQ8UmVzZWFyY2ggb25DbGljaz17b3Blbk1vZGFsfSAvPlxuXHRcdFx0PC9Db250ZW50V3JhcHBlcj5cblx0XHRcdDxDb250YWN0Rm9vdGVyIC8+XG5cdFx0PC9MYXlvdXQ+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBMYW5kaW5nIH0gZnJvbSAnLi9sYW5kaW5nJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMZWFkZXJNYXJrZXREYXRhIH0gZnJvbSAnLi9sZWFkZXItbWFya2V0LWRhdGEnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlc2VhcmNoIH0gZnJvbSAnLi9yZXNlYXJjaCdcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXaHlNZGMgfSBmcm9tICcuL3doeS1tZGMnXG5leHBvcnQgeyBkZWZhdWx0IGFzIFdvcmtlZFdpdGggfSBmcm9tICcuL3dvcmtlZC13aXRoJ1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBMYW5kaW5nV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5gXG5cbmV4cG9ydCBjb25zdCBCYW5uZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0bWluLWhlaWdodDogY2FsYygxMDB2aCAtIDQ2cHgpO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvZ2lmcy9maW5hbmNpYWwtYnVzaW5lc3MtY2hhcnQuZ2lmJyk7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1heC13aWR0aDogMTIwMHB4O1xuXHRtYXJnaW46IDAgYXV0bztcblx0cGFkZGluZzogMCAyMHB4O1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5gXG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMi4yNXJlbTtcblx0bGluZS1oZWlnaHQ6IDFlbTtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRwYWRkaW5nOiA4dmggMCAwLjVlbSAwO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdGZvbnQtc2l6ZTogM3JlbTtcblx0XHRsaW5lLWhlaWdodDogMWVtO1xuXHRcdHBhZGRpbmc6IDE1dmggMCAwLjVlbSAwO1xuXHRcdHdpZHRoOiA3MCU7XG5cdGB9XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZvbnQtc2l6ZTogMy41cmVtO1xuXHRcdGxpbmUtaGVpZ2h0OiAxZW07XG5cdFx0cGFkZGluZzogMTV2aCAwIDAuNWVtIDA7XG5cdFx0d2lkdGg6IDUwJTtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGZvbnQtc2l6ZTogMS4xNXJlbTtcblx0bGluZS1oZWlnaHQ6IDFlbTtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMud2hpdGV9O1xuXHRtYXJnaW46IDAgMCA0MnB4IDA7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG5cdG1heC13aWR0aDogNzIwcHg7XG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0Zm9udC1zaXplOiAxLjZyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDFlbTtcbiAgXHRgfVxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmb250LXNpemU6IDEuNjNyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDFlbTtcbiAgXHRgfVxuYFxuXG5leHBvcnQgY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0bWF4LXdpZHRoOiAzNDBweDtcblx0bWFyZ2luOiAwIDAgMzhweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBcdG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL0xhbmRpbmcuc3R5bGVkJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbidcbmltcG9ydCBUYWJCYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWItYmFyJ1xuaW1wb3J0IFRpY2tlclRhcGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90aWNrZXItdGFwZSdcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcblx0cmV0dXJuIDxTLkxhbmRpbmdXcmFwcGVyPlxuXHRcdDxTLkJhbm5lcldyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFRhYkJhciAvPlxuXHRcdFx0XHQ8Uy5UaXRsZT5cblx0XHRcdFx0XHRJbmR1c3RyeSByZXNlYXJjaCBieSBpbmR1c3RyeSBleHBlcnRzLlxuXHRcdFx0XHQ8L1MuVGl0bGU+XG5cdFx0XHRcdDxTLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFdlIGFyZSBhIGJvdXRpcXVlIGNvbnN1bHRpbmcgZmlybSBzZXJ2aW5nIHRoZSBmaW5hbmNpYWwgaW5mb3JtYXRpb25cblx0XHRcdFx0XHRzZXJ2aWNlcyBpbmR1c3RyeS4gT3VyIGNvbnN1bHRhbnRzIGFyZSBpbmR1c3RyeSBleHBlcnRzIG9uIG1hcmtldCBhbmRcblx0XHRcdFx0XHRyZWZlcmVuY2UgZGF0YSBwcm9kdWN0cyBhbmQgaW52ZXN0bWVudCBtYW5hZ2VtZW50IHNvbHV0aW9ucy5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRBcyBOb3J0aCBBbWVyaWNhJ3MgbGVhZGluZyBtYXJrZXQgZGF0YSBzb2x1dGlvbnMgY29uc3VsdGFuY3kgd2UgdW5kZXJzdGFuZFxuXHRcdFx0XHRcdHRoZSBpbXBvcnRhbmNlIG9mIGRhdGEgaW4gdGhlIGZpbmFuY2lhbCBtYXJrZXRzIGFuZCBnbG9iYWwgZWNvbm9teS5cblx0XHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0XHQ8Uy5CdXR0b25XcmFwcGVyPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGJ0blRleHQ9XCJWaWV3IFJlc2VhcmNoXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKCcvcmVzZWFyY2gnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdGJ0blRleHQ9XCJDb250YWN0IHVzXCJcblx0XHRcdFx0XHRcdGlzRGVmYXVsdD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCgnL2NvbnRhY3QnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuQnV0dG9uV3JhcHBlcj5cblx0XHRcdDwvUy5Db250ZW50V3JhcHBlcj5cblx0XHQ8L1MuQmFubmVyV3JhcHBlcj5cblx0XHQ8ZGl2PjxUaWNrZXJUYXBlIC8+PC9kaXY+XG5cdDwvUy5MYW5kaW5nV3JhcHBlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1xuXG4vLyAvc3RhdGljL2dpZnMvdHJhZmZpYy1hbmQtcGVkZXN0cmlhbnMtaW4tZnJvbnQtb2YtdG93ZXItYnJpZGdlLmdpZlxuLy8gL3N0YXRpYy9naWZzL3RvdXJpc3RzLmdpZiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgTGVhZGVyTWFya2V0RGF0YVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRmbGV4OiAxO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLndoaXRlfTtcblx0bWFyZ2luOiA0MHB4IDAgNjBweCAwO1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW46IDgwcHggMCA4MHB4IDA7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2t9O1xuXHRtYXJnaW46IDAgMCAyMHB4IDA7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHRsaW5lLWhlaWdodDogNDhweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWF4LXdpZHRoOiA3ODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEluZm9UZXh0ID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcdFxuXHRmb250LXNpemU6IDE4cHg7XG5cdGxpbmUtaGVpZ2h0OiAyNnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMCAwIDI0cHggMDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdGB9XHRcbmBcblxuZXhwb3J0IGNvbnN0IFZpZGVvV3JhcHBlciA9IHN0eWxlZC5wYFxuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiAyNHB4O1xuYFxuXG5leHBvcnQgY29uc3QgRmFjdHNXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0bWFyZ2luLWxlZnQ6IDQwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBQcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tcmlnaHQ6IDFlbTtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiAzOHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgTnVtYmVyVGV4dCA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMzZweDtcblx0bGluZS1oZWlnaHQ6IDM2cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLm1kY1B1cnBsZX07XG5cdG1hcmdpbjogMCAwIDEwcHggMDtcblxuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcblx0Zm9udC1zaXplOiA0OHB4O1xuXHRsaW5lLWhlaWdodDogNDhweDtcbiAgYH1cblxuYFxuXG5leHBvcnQgY29uc3QgRmFjdHNUZXh0ID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmxpZ2h0R3JleX07XG5cdG1hcmdpbjogMDtcblxuYFxuXG5leHBvcnQgY29uc3QgRm9vdGVyVGV4dCA9IHN0eWxlZC5hYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjM2QwMDk5O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBbmltYXRlZEZvb3RlckxpbmsgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hbmltYXRlZC1mb290ZXItbGluaydcbmltcG9ydCAqIGFzIFMgZnJvbSAnLi9MZWFkZXJNYXJrZXREYXRhLnN0eWxlZCdcblxuY29uc3QgTGVhZGVyTWFya2V0RGF0YSA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5MZWFkZXJNYXJrZXREYXRhV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnQ+XG5cdFx0XHRcdDxTLkluZm9XcmFwcGVyPlxuXHRcdFx0XHRcdDxTLlRpdGxlPkxlYWRlciBpbiBtYXJrZXQgZGF0YSBjb25zdWx0aW5nPC9TLlRpdGxlPlxuXHRcdFx0XHRcdDxTLkluZm9UZXh0PlxuXHRcdFx0XHRcdFx0TWFya2V0IERhdGEgQ29tcGFueSBpcyBhIHByb2Zlc3Npb25hbCBjb25zdWx0aW5nIGZpcm0gd2l0aCBleHBlcnRzXG5cdFx0XHRcdFx0XHRza2lsbGVkIGluIG1hcmtldCBkYXRhIHByb2R1Y3RzLCBzb2x1dGlvbnMgYW5kIGNvbnRyYWN0IHZlbmRvciBtYW5hZ2VtZW50LlxuXHRcdFx0XHRcdFx0V2UgYXJlIGNvbW1pdHRlZCB0byBoZWxwaW5nIHRlYW1zIHVuY292ZXIgaW5zaWdodHMgdGhhdFxuXHRcdFx0XHRcdFx0aW1wcm92ZSBob3cgdGhleSBtYW5hZ2UgdGhlaXIgbWFya2V0IGFuZCByZWZlcmVuY2UgZGF0YSByZWxhdGlvbnNoaXBzLlxuXHRcdFx0XHRcdDwvUy5JbmZvVGV4dD5cblx0XHRcdFx0XHQ8Uy5JbmZvVGV4dD5cblx0XHRcdFx0XHRcdFdlIHBhcnRuZXIgd2l0aCBvdXIgY2xpZW50cyB0byBhbnN3ZXIgdGhlIGdyb3dpbmcgZGVtYW5kcyBvZiB0aGVpclxuXHRcdFx0XHRcdFx0YnVzaW5lc3MgYnkgcHJvdmlkaW5nIHRoZSBleHBlcnRpc2UgaW4gdGhlIGRldGFpbHMgdGhhdCBsZWFkIHRvXG5cdFx0XHRcdFx0XHRpbmNyZWFzZWQgcHJvZml0YWJpbGl0eS4gU3BlY2lmaWNhbGx5LCB3ZSBvZmZlciBhIHNlcmllcyBvZlxuXHRcdFx0XHRcdFx0ZGlhZ25vc3RpYyB0b29scyB0aGF0IGRyaXZlIGRvd24gY29zdHMgd2hpbGUgb3B0aW1pemluZyBzZXJ2aWNlcy5cblx0XHRcdFx0XHRcdExlYXJuIG1vcmUgYWJvdXQgaG93IG91ciBEYXRhIExpY2Vuc2UgQ29tcGxpYW5jZSBNYW5hZ2VyIHRvb2wgY2FuXG5cdFx0XHRcdFx0XHRiZW5lZml0IHlvdXIgYnVzaW5lc3MgaW4gdGhlIHZpZGVvIGJlbG93OlxuXHRcdFx0XHRcdDwvUy5JbmZvVGV4dD5cblx0XHRcdFx0XHQ8Uy5WaWRlb1dyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8aWZyYW1lIHNyYz1cImh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8zODkwMzk2MDlcIiB3aWR0aD1cIjEwMCVcIiBtYXh3aWR0aD1cIjY0MHB4XCIgaGVpZ2h0PVwiMzYwXCIgZnJhbWVCb3JkZXI9XCIwXCIgYWxsb3c9XCJhdXRvcGxheTsgZnVsbHNjcmVlblwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cblx0XHRcdFx0XHRcdHsvKiA8cD48YSBocmVmPVwiaHR0cHM6Ly92aW1lby5jb20vMzg5MDM5NjA5XCI+TWFya2V0IERhdGEgRGlnaXRhbCBDb21wbGlhbmNlPC9hPiBmcm9tIDxhIGhyZWY9XCJodHRwczovL3ZpbWVvLmNvbS91c2VyMTA4MjE2NzQ4XCI+TWFya2V0IGRhdGEgY29tcGFueTwvYT4gb24gPGEgaHJlZj1cImh0dHBzOi8vdmltZW8uY29tXCI+VmltZW88L2E+LjwvcD4gKi99XG5cblx0XHRcdFx0XHQ8L1MuVmlkZW9XcmFwcGVyPlxuXHRcdFx0XHQ8L1MuSW5mb1dyYXBwZXI+XG5cdFx0XHRcdDxTLkZhY3RzV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Qcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8Uy5OdW1iZXJUZXh0PjE0NzwvUy5OdW1iZXJUZXh0PlxuXHRcdFx0XHRcdFx0PFMuRmFjdHNUZXh0PlByb2plY3RzIGNvbXBsZXRlZDwvUy5GYWN0c1RleHQ+XG5cdFx0XHRcdFx0PC9TLlByb2plY3RzQ29tcGxldGVkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5Qcm9qZWN0c0NvbXBsZXRlZFdyYXBwZXI+XG5cdFx0XHRcdFx0XHQ8Uy5OdW1iZXJUZXh0PiQzNTRNTTwvUy5OdW1iZXJUZXh0PlxuXHRcdFx0XHRcdFx0PFMuRmFjdHNUZXh0PkNsaWVudCBkb2xsYXJzIHNhdmVkPC9TLkZhY3RzVGV4dD5cblx0XHRcdFx0XHQ8L1MuUHJvamVjdHNDb21wbGV0ZWRXcmFwcGVyPlxuXHRcdFx0XHQ8L1MuRmFjdHNXcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnQ+XG5cdFx0PC9TLkxlYWRlck1hcmtldERhdGFXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExlYWRlck1hcmtldERhdGFcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgYnJlYWtwb2ludCBmcm9tICdzdHlsZWQtY29tcG9uZW50cy1icmVha3BvaW50J1xuXG5leHBvcnQgY29uc3QgUmVzZWFyY2hXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0ZmxleDogMTtcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgbWFyZ2luLWJvdHRvbTogMTYwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ2gtaXRlbXM6IGZsZXgtc3RhcnQ7XG5cdG1hcmdpbi1ib3R0b206IDU1cHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogNzgwcHg7XG5gfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyVGl0bGUgPSBzdHlsZWQuaDFgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZ3JhcGhpa0JvbGR9O1xuXHRmb250LXNpemU6IDI0cHg7XG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMCAwIDEzcHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFja307XG5cdG1hcmdpbjogMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IHN0eWxlZC5zcGFuYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWt9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5tZGNQdXJwbGV9O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdCY6aG92ZXIge1xuXHRcdGNvbG9yOiAjM2QwMDk5O1xuXHRcdHRyYW5zaXRpb246IGNvbG9yIDAuMjVzIGVhc2U7XG5cdH1cbmBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBbmltYXRlZENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9hbmltYXRlZC1jYXJkJ1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1Jlc2VhcmNoLnN0eWxlZCdcblxuY29uc3QgUmVzZWFyY2ggPSAoeyBvbkNsaWNrIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Uy5SZXNlYXJjaFdyYXBwZXI+XG5cdFx0XHQ8Uy5IZWFkZXJXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5IZWFkZXJUaXRsZT5SZXNlYXJjaCAmYW1wOyBDYXNlIFN0dWRpZXM8L1MuSGVhZGVyVGl0bGU+XG5cdFx0XHRcdDxTLkhlYWRlckRlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdE1EQyBoYXMgY29tcGxldGVkIGV4dGVuc2l2ZSByZXNlYXJjaCBvdmVyIHRoZSBwYXN0IDEwIHllYXJzLiBPdXIgZmluZGluZ3MgaGF2ZSBiZWVuIGxpbmtlZFxuXHRcdFx0XHRcdHRvIHRoZSBzdHJlbmd0aCBvZiBhIGZpcm1zIG9wZXJhdGlvbmFsIG1hbmFnZW1lbnQsIGFuZCBjYW4gYmUgdXNlZCB0byBpbXByb3ZlIFxuXHRcdFx0XHRcdGNhcGFiaWxpdGllcyBhY3Jvc3MgY2xpZW50IGludGVsbGlnZW5jZSwgdHJhZGluZyBzdHJhdGVnaWVzLCBhbmQgYnVzaW5lc3Ncblx0XHRcdFx0XHRwcm9kdWN0aXZpdHkuXG5cdFx0XHRcdDwvUy5IZWFkZXJEZXNjcmlwdGlvbj5cblx0XHRcdDwvUy5IZWFkZXJXcmFwcGVyPlxuXHRcdFx0PFMuQ2FyZENvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8QW5pbWF0ZWRDYXJkXG5cdFx0XHRcdFx0XHR0aXRsZT1cIkRhdGEgTWFuYWdlbWVudCBDb21wbGlhbmNlOiBUaGUgUmlnaHQgdG8gQXVkaXRcIlxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249XCJUSEUgUklHSFQgVE8gQVVESVQgaXMgYSBjb21tb24gcGhyYXNlIHVzZWQgaW4gbW9zdCBldmVyeSBEYXRhIFZlbmRvciBvciBFeGNoYW5nZSBBZ3JlZW1lbnQgKERhdGEgUHJvdmlkZXIgQWdyZWVtZW50cykuIEl0IGlzIG5laXRoZXIgbmV3LCBtaXN1bmRlcnN0b29kLCBub3IgbWlzcmVwcmVzZW50ZWQuIFlldCB0aGlzIHRlcm0gaGFzIHdyZWFrZWQgaGF2b2Mgb2YgbGF0ZSwgYXMgaXQgZXhwb3NlcyB0aGUgdGhyZWUgbW9kZXJuIGRheSBwbGFndWVzIGNhdXNpbmcgY29uc2lkZXJhYmxlIGRpc3RyZXNzIGFtb25nc3QgZmluYW5jaWFsLi4uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ3JpZ2h0VG9BdWRpdCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PEFuaW1hdGVkQ2FyZFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJUaGUgVmFsdWUgb2YgTWFya2V0IERhdGEgQWRtaW5pc3RyYXRpb246IFRyYW5zcGFyZW5jeSwgQWNjb3VudGFiaWxpdHkgJiBHb3Zlcm5hbmNlXCJcblx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPVwiQVMgRklOQU5DSUFMIEZJUk1TIEdSQVBQTEUgd2l0aCBpbmNyZWFzaW5nIGRlbWFuZHMgZm9yIG1hcmtldCBkYXRhLCBkZWFsaW5nIHdpdGggdGhlIG51bWJlciBhbmQgY29tcGxleGl0eSBvZiBtYXJrZXQgZGF0YSBsaWNlbnNlcyBhbmQgc3Vic2NyaXB0aW9ucyBjYW4gYmUgb3ZlcndoZWxtaW5nLiBUaGUgdm9sdW1lIGFuZCB2YXJpZXR5IGNoYWxsZW5nZXMgdGhlaXIgYWJpbGl0eSB0byBlZmZlY3RpdmVseSBtYW5hZ2UgY29zdHMsIGNvbnRyb2wgdXNlci1hY2Nlc3MsIG1vbml0b3IgdXNhZ2UsIGFuZCBwcm9kdWNlIC4uLlwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCdhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2UnKX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdDxTLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHRcdDxBbmltYXRlZENhcmRcblx0XHRcdFx0XHRcdHRpdGxlPVwiTURDIEZvcmVjYXN0cyAxMC0xMyUgSW5jcmVhc2UgaW4gRGF0YSBTcGVuZFwiXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj1cIldJVEhPVVQgQU5ZIENIQU5HRSB0byBjb25zdW1wdGlvbiwgc2VydmljZSBtaXgsIG9yIGV2ZW4gYW5udWFsIHByaWNlIGluY3JlYXNlcywgQ2FuYWRpYW4tYmFzZWQgZmluYW5jaWFsIHNlcnZpY2VzIGZpcm1zIGNhbiBleHBlY3QgYSArMTAlIHByaWNlIGluY3JlYXNlIGluIHRoZWlyIE1hcmtldCBhbmQgUmVmZXJlbmNlIERhdGEgc3BlbmQgZm9yIDIwMTQuIFRvIHVuZGVyc3RhbmQgd2h5LCBmaXJtcyBuZWVkIG9ubHkgbG9vayB0byB0aGUgZmFsbCBvZiB0aGUgQ0FEJCByZWxhdGl2ZSB0byB0aGUgVVMkIGZvciB0aGUgY2hhbmdlIHRoYXQgd2lsbCBpbXBhY3QgdGhlaXIgZ2VuZXJhbCBsZWRnZXJzLi4uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soJ2RhdGFTcGVuZCcpfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdDwvUy5DYXJkQ29udGVudFdyYXBwZXI+XG5cdFx0XHQ8QW5pbWF0ZWRGb290ZXJMaW5rIG1lc3NhZ2U9XCJWaWV3IGFsbCBvZiBvdXIgcmVzZWFyY2hcIiBocmVmPVwiL3Jlc2VhcmNoXCIgLz5cblx0XHQ8L1MuUmVzZWFyY2hXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc2VhcmNoXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdG1hcmdpbi1ib3R0b206IDgzcHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDE2MHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tYm90dG9tOiA0M3B4O1xuXHQke2JyZWFrcG9pbnQoJ2Rlc2t0b3AnKWBcbiAgICBtYXJnaW4tYm90dG9tOiA0OXB4O1xuICAgIG1heC13aWR0aDogNzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAwIDIwcHggMDtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBIZWFkZXJEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAyNnB4O1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICB3aWR0aDogNDglO1xuICAgIG1hcmdpbi1ib3R0b206IDY0cHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuXHRtYXJnaW4tdG9wOiA2cHg7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHR3aWR0aDogODBweDtcblx0aGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICBgfVxuXG4gICR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuXHR3aWR0aDogMTIwcHg7XG5cdGhlaWdodDogMTIwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1heC13aWR0aDogMzgwcHg7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGl0bGUgPSBzdHlsZWQuc3BhbmBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdGNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrfTtcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkRGVzY3JpcHRpb24gPSBzdHlsZWQucGBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5maW5hbmNpZXJ9O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMnB4O1xuXHRtYXJnaW46IDA7XG5cdG1hcmdpbi1ib3R0b206IDQwcHg7XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcblx0YH1cbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlclRleHQgPSBzdHlsZWQuYWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0Y29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMubWRjUHVycGxlfTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogIzNkMDA5OTtcblx0XHR0cmFuc2l0aW9uOiBjb2xvciAwLjI1cyBlYXNlO1xuXHR9XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi10b3A6IC05OHB4O1xuICBgfVxuYFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFuaW1hdGVkRm9vdGVyTGluayBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2FuaW1hdGVkLWZvb3Rlci1saW5rJ1xuaW1wb3J0ICogYXMgUyBmcm9tICcuL1NlcnZpY2VzLnN0eWxlZCdcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFMuU2VydmljZXNXcmFwcGVyPlxuXHRcdFx0PFMuSGVhZGVyV3JhcHBlcj5cblx0XHRcdFx0PFMuSGVhZGVyVGl0bGU+SG93IG91ciBzZXJ2aWNlcyBhZGQgaW5zaWdodCB0byB5b3VyIGJ1c2luZXNzPC9TLkhlYWRlclRpdGxlPlxuXHRcdFx0XHQ8Uy5IZWFkZXJEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRUYWtpbmcgQmVuY2htYXJraW5nIHRvIGFuIGVudGlyZWx5IGRpZmZlcmVudCBsZXZlbCwgb3VyIG1hcmtldGluZyBkYXRhXG5cdFx0XHRcdFx0c2VydmljZXMgb2ZmZXJzIHlvdSBleGNlcHRpb25hbCBpbnNpZ2h0IGludG8gZGF0YSBiZWluZyBjb25zdW1lZCBieVxuXHRcdFx0XHRcdHRoZSBjYXBpdGFsIG1hcmtldHMgYW5kIHdlYWx0aCBpbmR1c3RyeS4gV2l0aCBvdXIgY3VycmVudCBzb2x1dGlvbnMsIHlvdVxuXHRcdFx0XHRcdGdhaW4gdGhlIGluc2lnaHRzIHRvXG5cdFx0XHRcdFx0dGFrZSB5b3VyIHN0cmF0ZWd5IHRvIHRoZSBuZXh0IGxldmVsLlxuXHRcdFx0XHQ8L1MuSGVhZGVyRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuSGVhZGVyV3JhcHBlcj5cblx0XHRcdDxTLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXMucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXNAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9tYW5hZ2VkLXNlcnZpY2VzQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21hbmFnZWQtc2VydmljZXNAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTLkNhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0PFMuQ2FyZFRpdGxlPlRyYWRpbmcgdGVjaG5vbG9neSBtYW5hZ2VkIHNlcnZpY2VzIGFuZCBwcm9kdWN0czwvUy5DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRcdE91ciBjbGllbnRzIGFyZSBjcml0aWNhbCBhYm91dCBwcm92aWRpbmcgdGhlIHJpZ2h0IGRhdGEgdG8gdGhlaXIgc3Rha2Vob2xkZXJzLiBUaGF0JiMzOTtzIHdoeVxuXHRcdFx0XHRcdFx0XHRvdXIgcHJvcHJpZXRhcnkgdGVjaG5vbG9neSBhbmQgZXhwZXJ0aXNlIGlzIHBpdm90YWwgaW4gcmVwb3J0aW5nIGhvdyBkYXRhIGlzIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRcdGFuZCByZXBsaWNhdGVkIGFjcm9zcyBidXNpbmVzcyBhcHBsaWNhdGlvbnMgYWxsb3dpbmcgdXMgdG8gYWNjdXJhdGVseSBhbmQgcmFwaWRseVxuXHRcdFx0XHRcdFx0XHRhc3Nlc3MgYW5kIHByZWRpY3Qgd2hlcmUgZmlybXMgY2FuIG9wdGltaXplIGFuZCByaWdodCBzaXplIHRoZWlyIGRhdGEgbmVlZHMuXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDwvUy5DYXJkQ29udGVudD5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL21lYXN1cmUtY29tcGFyZS5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvbWVhc3VyZS1jb21wYXJlQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvbWVhc3VyZS1jb21wYXJlQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL21lYXN1cmUtY29tcGFyZUAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFMuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkVGl0bGU+TWVhc3VyZSBhbmQgY29tcGFyZSB5b3VyIGV4cGVuc2UgbWFuYWdlbWVudCBjYXBhYmlsaXRpZXM8L1MuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0PFMuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdFx0XHRXZSBoYXZlIGRvbmUgZXh0ZW5zaXZlIHJlc2VhcmNoIG92ZXIgdGhlIHBhc3QgMTAgeWVhcnMgdGhyb3VnaCBvdXJcblx0XHRcdFx0XHRcdFx0cXVhbGl0YXRpdmUgYW5kIHF1YW50aXRhdGl2ZSBhbmFseXRpY3MuIEFzIGEgcmVzdWx0LCB3ZSd2ZVxuXHRcdFx0XHRcdFx0XHRkZXZlbG9wZWQgYW4gYXBwcm9hY2ggdG8gY29tcGFyZSBpbmRpdmlkdWFsIGNvbXBhbnkgZGF0YSB0byBvdXJcblx0XHRcdFx0XHRcdFx0cHJvcHJpZXRhcnkgaW5kdXN0cnkgYmVuY2htYXJrLiBPdXIgZmluZGluZ3MgaGF2ZSBiZWVuIGxpbmtlZCB0b1xuXHRcdFx0XHRcdFx0XHR0aGUgc3RyZW5ndGggb2YgYSBmaXJtcyBvcGVyYXRpb25hbCBtYW5hZ2VtZW50IGFuZCBpdHMgc2hvcnQgYW5kXG5cdFx0XHRcdFx0XHRcdGxvbmcgdGVybSBpbnZlc3RtZW50IHN0cmF0ZWd5LlxuXHRcdFx0XHRcdFx0PC9TLkNhcmREZXNjcmlwdGlvbj5cblx0XHRcdFx0XHQ8L1MuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdFx0PFMuQ2FyZEltYWdlXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9tYXRjaC1kZW1hbmQucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL21hdGNoLWRlbWFuZEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL21hdGNoLWRlbWFuZEAyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9tYXRjaC1kZW1hbmRAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTLkNhcmRDb250ZW50PlxuXHRcdFx0XHRcdFx0PFMuQ2FyZFRpdGxlPlxuXHRcdFx0XHRcdFx0XHRNYXRjaCB5b3VyIHN0cmF0ZWd5IHRvIHlvdXIgYnVzaW5lc3MgbmVlZHNcblx0XHRcdFx0XHRcdDwvUy5DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRcdFdpdGggZXhwZXJ0IGtub3dsZWRnZSBvZiBib3RoIHlvdXIgaW5kdXN0cnkgYW5kIHlvdXIgY3VzdG9tZXLigJlzXG5cdFx0XHRcdFx0XHRcdG5lZWRzLCB5b3UgY2FuIGtlZXAgeW91ciBkYXRhIGNvbnN1bXB0aW9uIGFjdGl2aXRpZXMgYXBwcm9wcmlhdGVcblx0XHRcdFx0XHRcdFx0d2hpbGUgb3B0aW1pemluZyB5b3VyIGNvbW1lcmNpYWwgb2JsaWdhdGlvbnMuXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDwvUy5DYXJkQ29udGVudD5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0XHQ8Uy5DYXJkV3JhcHBlcj5cblx0XHRcdFx0XHQ8Uy5DYXJkSW1hZ2Vcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2JlbmNobWFyay5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYmVuY2htYXJrQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvYmVuY2htYXJrQDJ4LnBuZyAyeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC9zdGF0aWMvaW1hZ2VzL2JlbmNobWFya0AzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFMuQ2FyZENvbnRlbnQ+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkVGl0bGU+Q2FwaXRhbCBtYXJrZXQgZXhwZW5zZSBtYW5hZ2VtZW50IGJlbmNobWFya2luZzwvUy5DYXJkVGl0bGU+XG5cdFx0XHRcdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0XHRcdFx0XHRcdE91ciBiZW5jaG1hcmsgYWRkcyBleHBvbmVudGlhbCB2YWx1ZSB0aHJvdWdoIGl0cyBjYXRlZ29yaXphdGlvbiBvZiBwcm9kdWN0c1xuXHRcdFx0XHRcdFx0XHRhbmQgc2VydmljZXM6IHRlY2hub2xvZ3ksIGludmVzdG1lbnRzLCBwcm9kdWN0aXZpdHksIG9wZXJhdGlvbnMsIGh1bWFuXG5cdFx0XHRcdFx0XHRcdHJlc291cmNlIHN0cmF0ZWdpZXMsIGFuZCBhIGhvc3Qgb2Ygb3RoZXIgYnVzaW5lc3MgZnVuY3Rpb25zLiBJdOKAmXMgYSBwZWVyXG5cdFx0XHRcdFx0XHRcdGdyb3VwIGFzc2Vzc21lbnQgb2Ygb3VyIGNsaWVudOKAmXMgMTYwIGRhdGEgYWN0aXZpdGllcyBhZ2FpbnN0IGEgc2V0IG9mIGJlc3Rcblx0XHRcdFx0XHRcdFx0cHJhY3RpY2VzLiBPdXIgYmVuY2htYXJrIGhhcyBpbnNwaXJlZCBkaXNjdXNzaW9ucyB0aGF0IGV4cGxvcmUgcXVhbGl0YXRpdmVcblx0XHRcdFx0XHRcdFx0bWVhc3VyZXMg4oCTIGVuaGFuY2luZyBwZXJmb3JtYW5jZSBhZ2FpbnN0IGJlbmNobWFya3MuXG5cdFx0XHRcdFx0XHQ8L1MuQ2FyZERlc2NyaXB0aW9uPlxuXHRcdFx0XHRcdDwvUy5DYXJkQ29udGVudD5cblx0XHRcdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHRcdFx0PC9TLkNvbnRlbnRXcmFwcGVyPlxuXHRcdFx0PEFuaW1hdGVkRm9vdGVyTGlua1xuXHRcdFx0XHRtZXNzYWdlPVwiR2V0IGluIHRvdWNoIHRvIGxlYXJuIG1vcmVcIlxuXHRcdFx0XHRocmVmPVwiL2NvbnRhY3RcIlxuXHRcdFx0Lz5cblx0XHQ8L1MuU2VydmljZXNXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IGJyZWFrcG9pbnQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMtYnJlYWtwb2ludCdcblxuY29uc3QgSUNPTl9NQVJHSU4gPSAnMzVweCdcblxuZXhwb3J0IGNvbnN0IFdoeU1kY1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1zZWxmOiBjZW50ZXJcbiAgZmxleDogMTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuXG4gICR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgSGVhZGluZ1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblxuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYCAgICAgXG5cdFx0bWF4LXdpZHRoOiA3ODBweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0bGluZS1oZWlnaHQ6IDMwcHg7XG5cdG1hcmdpbjogMCAwIDE0cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMCAwIDE3cHggMDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IEhlYWRpbmdEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuYH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRXcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMjdweDtcblx0JHticmVha3BvaW50KCd0YWJsZXQnKWBcbiAgICB3aWR0aDogNDglO1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZFRpdGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkVGl0bGVJY29uID0gc3R5bGVkLmltZ2Bcblx0aGVpZ2h0OiAyN3B4O1xuXHR3aWR0aDogMjdweDtcblx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdCR7YnJlYWtwb2ludCgnZGVza3RvcCcpYFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYH1cbmBcblxuZXhwb3J0IGNvbnN0IENhcmRUaXRsZSA9IHN0eWxlZC5oMWBcblx0Zm9udC1mYW1pbHk6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5mb250cy5ncmFwaGlrQm9sZH07XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIycHg7XG5cdG1hcmdpbjogMCAwIDEwcHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBgfVxuYFxuXG5leHBvcnQgY29uc3QgQ2FyZERlc2NyaXB0aW9uID0gc3R5bGVkLnBgXG5cdGZvbnQtZmFtaWx5OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZm9udHMuZmluYW5jaWVyfTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRsaW5lLWhlaWdodDogMjJweDtcblx0bWFyZ2luOiAwIDAgMCAke0lDT05fTUFSR0lOfTtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gIGB9XG5gXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vV2h5TWRjLnN0eWxlZCdcblxuY29uc3QgZGVzY3JpcHRpb25EYXRhID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdUaGUgcmlnaHQgcGVvcGxlLCBzb2x2aW5nIHRoZSByaWdodCBwcm9ibGVtcyB3aXRoIHBhc3Npb24nLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0J091ciBwZW9wbGUgYnJpbmcgYSBtaXggb2YgZXhwZXJ0aXNlIHRvIHNvbHZlIHByb2JsZW1zIHdpdGggYSBkaWZmZXJlbnQsIG1vcmUgZGVkaWNhdGVkIG1pbmRzZXQsIGRldmlzaW5nIHBvd2VyZnVsIHRvb2xzIGFuZCBzb2x1dGlvbnMgZm9yIG91ciBjbGllbnRz4oCZIHRvdWdoZXN0IGNoYWxsZW5nZXMuJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdIaWdobHkgZWZmZWN0aXZlIG1hcmtldCBkYXRhIGdvdmVybmFuY2Ugc3RydWN0dXJlJyxcblx0XHRkZXNjcmlwdGlvbjpcblx0XHRcdCdPdXIgYXBwcm9hY2ggYnJpbmdzIHRvZ2V0aGVyIGEgaGlnaGx5IGVmZmVjdGl2ZSBkaXNjaXBsaW5lIHRoYXQgZm9jdXNlcyBvbiBwcm9jZXNzLCBjb250cm9scyBhbmQgcHJvY2Vzcy4nXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1dl4oCZdmUgc2F2ZWQgdXB3YXJkcyBvZiAzNSUgb24gdG90YWwgZGF0YSBzcGVuZCBmb3Igb3VyIGNsaWVudHMnLFxuXHRcdGRlc2NyaXB0aW9uOlxuXHRcdFx0J0F0IHRoZSBlbmQgb2YgdGhlIGRheSwgaXTigJlzIG91ciBjbGllbnRzIGJvdHRvbSBsaW5lIHRoYXQgd2UgdGFrZSBjYXJlIG9mLCBhbmQgdGhlIHJlc3VsdHMgc3BlYWsgZm9yIHRoZW1zZWx2ZXMuJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdNYXJrZXQgZGF0YSBiZW5jaG1hcmtpbmcgd2l0aCBwcm92ZW4gcmVzdWx0cycsXG5cdFx0ZGVzY3JpcHRpb246XG5cdFx0XHQnV2UgY3JlYXRlIHJlc3VsdHMgdGhhdCBhcmUgcHJlZGljYXRlZCBvbiBvdXIgc3RyZW5ndGhzIHN1cnJvdW5kaW5nIGJlbmNobWFya2luZyBNYXJrZXQgRGF0YSBWZW5kb3JzLidcblx0fVxuXVxuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBwcm9wc1xuXHRyZXR1cm4gKFxuXHRcdDxTLkNhcmRXcmFwcGVyPlxuXHRcdFx0PFMuQ2FyZFRpdGxlV3JhcHBlcj5cblx0XHRcdFx0PFMuQ2FyZFRpdGxlSWNvblxuXHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2NoZWNrbWFyay5wbmdcIlxuXHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2NoZWNrbWFya0AxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL2NoZWNrbWFya0AyeC5wbmcgMngsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvc3RhdGljL2ltYWdlcy9jaGVja21hcmtAM3gucG5nIDN4XCJcblx0XHRcdFx0Lz5cblx0XHRcdFx0PFMuQ2FyZFRpdGxlPnt0aXRsZX08L1MuQ2FyZFRpdGxlPlxuXHRcdFx0PC9TLkNhcmRUaXRsZVdyYXBwZXI+XG5cdFx0XHQ8Uy5DYXJkRGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9ufTwvUy5DYXJkRGVzY3JpcHRpb24+XG5cdFx0PC9TLkNhcmRXcmFwcGVyPlxuXHQpXG59XG5cbmNvbnN0IFdoeU1kYyA9ICgpID0+IHtcblx0Y29uc3QgcmVuZGVyRGVzY3JpcHRpb24gPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGRlc2NyaXB0aW9uRGF0YS5tYXAoKGRhdGEpID0+IHtcblx0XHRcdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0gPSBkYXRhXG5cdFx0XHRyZXR1cm4gPENhcmQga2V5PXt0aXRsZX0gdGl0bGU9e3RpdGxlfSBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259IC8+XG5cdFx0fSlcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxTLldoeU1kY1dyYXBwZXI+XG5cdFx0XHQ8Uy5IZWFkaW5nV3JhcHBlcj5cblx0XHRcdFx0PFMuSGVhZGluZ1RpdGxlPldoeSBNYXJrZXQgRGF0YSBDb21wYW55PzwvUy5IZWFkaW5nVGl0bGU+XG5cdFx0XHRcdDxTLkhlYWRpbmdEZXNjcmlwdGlvbj5cblx0XHRcdFx0XHRGcm9tIGluY2VwdGlvbiwgb3VyIGZvY3VzIGhhcyBiZWVuIG9uIHRoZSBjb21wbGV4aXRpZXMgb2Zcblx0XHRcdFx0XHRtYXJrZXQgZGF0YSBhbmQgdGhlIGNyaXRpY2FsIHRoaXJkLXBhcnR5IHJlbGF0aW9uc2hpcHMgYnVpbHQgdGhyb3VnaFxuXHRcdFx0XHRcdGRhdGEgcHJvdmlkZXJzIHdpdGhpbiB0aGUgQ2FwaXRhbCBNYXJrZXRzIGFuZCBXZWFsdGggTWFuYWdlbWVudFxuXHRcdFx0XHRcdGluZHVzdHJpZXMuXG5cdFx0XHRcdDwvUy5IZWFkaW5nRGVzY3JpcHRpb24+XG5cdFx0XHQ8L1MuSGVhZGluZ1dyYXBwZXI+XG5cdFx0XHQ8Uy5Db250ZW50PntyZW5kZXJEZXNjcmlwdGlvbigpfTwvUy5Db250ZW50PlxuXHRcdDwvUy5XaHlNZGNXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdoeU1kY1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBicmVha3BvaW50IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnQnXG5cbmV4cG9ydCBjb25zdCBXb3JrZWRXaXRoV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGZsZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXHRtYXJnaW4tYm90dG9tOiAxMjBweDtcbmBcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmdyYXBoaWtCb2xkfTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRsaW5lLWhlaWdodDogMzBweDtcblx0bWFyZ2luOiAwIDAgMjBweCAwO1xuXHQke2JyZWFrcG9pbnQoJ3RhYmxldCcpYFxuXHRcdGZvbnQtc2l6ZTogMzZweDtcblx0XHRsaW5lLWhlaWdodDogNDhweDtcblx0YH1cblxuXG5gXG5cbmV4cG9ydCBjb25zdCBEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxuXHRmb250LWZhbWlseTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmZvbnRzLmZpbmFuY2llcn07XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bGluZS1oZWlnaHQ6IDI2cHg7XG5cdG1hcmdpbjogMCAwIDQ2cHggMDtcblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdGxpbmUtaGVpZ2h0OiAzMHB4O1xuXHRcdG1heC13aWR0aDogNzgwcHg7XG5cdGB9XG5gXG5cbmV4cG9ydCBjb25zdCBDYXJkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdG1hcmdpbi1ib3R0b206IDQ3cHg7XG5cdGJveC1zaGFkb3c6IDAgOHB4IDEycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbmBcblxuZXhwb3J0IGNvbnN0IExvZ29Db250ZW50V3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0ZmxleC13cmFwOiB3cmFwO1xuXHR3aWR0aDogMTAwJTtcbmBcblxuZXhwb3J0IGNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDQ4JTtcblx0bWFyZ2luLWJvdHRvbTogNDBweDtcblx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdCR7YnJlYWtwb2ludCgndGFibGV0JylgXG5cdFx0bWFyZ2luLWJvdHRvbTogMDsgXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuXHRcdHdpZHRoOiAyNSU7XG5cdGB9XG5cblx0JHticmVha3BvaW50KCdkZXNrdG9wJylgXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuXHRgfVxuXG5gXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcm91c2VsLCBDYXJvdXNlbEl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnXG5pbXBvcnQgQ29tcGFueUNhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb21wYW55LWNhcmQnXG5pbXBvcnQgKiBhcyBTIGZyb20gJy4vV29ya2VkV2l0aC5zdHlsZWQnXG5cbmNvbnN0IENPTVBBTllfREFUQSA9IFtcblx0e1xuXHRcdHRpdGxlOiAnQ2FuYWRhIFBlbnNpb24gUGxhbiBJbnZlc3RtZW50IEJvYXJkJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnE1EQyBpZGVudGlmaWVkIGFuZCByZWFsaXplZCB2ZW5kb3IgY29zdCBzYXZpbmdzIG9mIDEyJSBvZiBvdXIgc3BlbmQsIGFuZCB0aGVuIGRldmVsb3BlZCBhIHRhcmdldCBzdGF0ZSBvcmdhbml6YXRpb24gd2l0aCBjYXBhYmlsaXRpZXMgdG8gZWZmZWN0aXZlbHkgbWFuYWdlIG1hcmtldCBkYXRhIHByb2R1Y3RzLCBjb25zdW1wdGlvbiwgY29zdHMgYW5kIHZlbmRvcnPigJ1gLFxuXHRcdHJvbGU6ICdNYXJjIE9kaG8g4oCTIEhlYWQgb2YgRGF0YSBNYW5hZ2VtZW50Jyxcblx0XHRjb21wYW55OiAnUFNQJyxcblx0XHRpbWFnZVVybDogJ2NwcGliLWNhcm91c2VsJ1xuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICdQU1AgSW52ZXN0aXNzZW1lbnRzJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnFRoZSB0ZWFtIGF0IE1hcmtldCBEYXRhIENvbXBhbnkgaXMgZ3JlYXQgdG8gd29yayB3aXRoLiBFYWNoIGNvbnN1bHRhbnQgaGFzIHRoZWlyIG93biBzdHJlbmd0aHMgYW5kIHdlYWtuZXNzZXMsIGFuZCBhcmUgZ3JlYXQgYXQgd2hhdCB0aGV5IGRvLiBJbiBteSBib29rLCBJIGhpZ2hseSByZWNvbW1lbmQgdGhlIGVudGlyZSB0ZWFtIGF0IE1EQy7igJ1gLFxuXHRcdHJvbGU6ICdBbGV4IERpQ3Jpc3RvZmFubywgRGlyZWN0b3Igb2YgTWFya2V0IERhdGEnLFxuXHRcdGNvbXBhbnk6ICdBdml2YScsXG5cdFx0aW1hZ2VVcmw6ICdwc3AtY2Fyb3VzZWwnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ0F2aXZhIEludmVzdG9ycycsXG5cdFx0ZGVzY3JpcHRpb246IGDigJxSb2JlcnQgYW5kIGhpcyB0ZWFtIGJyb3VnaHQgdGhlIHJpZ2h0IGV4cGVydGlzZSB0byB0aGUgam9iLCBtYWtpbmcgdGhlIHRyYW5zaXRpb25hbCBwcm9ncmFtIGVhc2llciB0byBtYW5hZ2UuIE1EQ+KAmXMgYXBwcm9hY2ggdG8gbWFya2V0IGRhdGEgc3VwcG9ydGVkIG91ciBHbG9iYWwgb3BlcmF0aW9ucyBhbmQgcHJvdmlkZWQgYSBjbGVhciBsaW5lIG9mIHNpZ2h0IHRvIG91ciB2ZW5kb3Igc3BlbmQu4oCdYCxcblx0XHRyb2xlOiAnS2VsbHkgTWNNYW5pcywgSGVhZCBvZiBPcGVyYXRpb25zJyxcblx0XHRjb21wYW55OiAnU3dpc3MgUmUnLFxuXHRcdGltYWdlVXJsOiAnYXZpdmEtY2Fyb3VzZWwnXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ1N3aXNzIFJlJyxcblx0XHRkZXNjcmlwdGlvbjogYOKAnE1EQ+KAmXMgcHJvZHVjdCBLaWFyb+KAmXMgb3ZlcnNwZW5kIHJlcG9ydCBjbGVhcmx5IGFydGljdWxhdGVkIHdoZXJlIEJsb29tYmVyZyBkYXRhIHdhcyBiZWluZyByZXBsaWNhdGVkIHdpdGhpbiBvdXIgdGVjaG5vbG9neSBlbnZpcm9ybWVudC4gQXMgYSByZXN1bHQgd2UgY2xvc2VkIGRvd24gc2V2ZXJhbCBqb2JzIHRoYXQgbGVhZCB0byAkNDUwLDAwMCBpbiBjb3N0IHNhdmluZ3Mu4oCdYCxcblx0XHRyb2xlOiAnRXJpYyBLZW1lbnksIFZpY2UgUHJlc2lkZW50LCBHcm91cCBBc3NldCBNYW5hZ2VtZW50Jyxcblx0XHRjb21wYW55OiAnQ1BQSUInLFxuXHRcdGltYWdlVXJsOiAnc3dpc3MtcmUtY2Fyb3VzZWwnXG5cdH1cbl1cblxuY29uc3QgV29ya2VkV2l0aCA9ICgpID0+IHtcblx0Y29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgwKVxuXHRsZXQgYW5pbWF0aW5nID0gZmFsc2VcblxuXHRjb25zdCBvbkV4aXRpbmcgPSAoKSA9PiB7XG5cdFx0YW5pbWF0aW5nID0gdHJ1ZVxuXHR9XG5cblx0Y29uc3Qgb25FeGl0ZWQgPSAoKSA9PiB7XG5cdFx0YW5pbWF0aW5nID0gZmFsc2Vcblx0fVxuXG5cdGNvbnN0IG5leHQgPSAoKSA9PiB7XG5cdFx0aWYgKGFuaW1hdGluZykge1xuXHRcdFx0cmV0dXJuXG5cdFx0fVxuXHRcdGNvbnN0IG5leHRJbmRleCA9XG5cdFx0XHRhY3RpdmVJbmRleCA9PT0gQ09NUEFOWV9EQVRBLmxlbmd0aCAtIDEgPyAwIDogYWN0aXZlSW5kZXggKyAxXG5cdFx0c2V0QWN0aXZlSW5kZXgobmV4dEluZGV4KVxuXHR9XG5cblx0Y29uc3QgY2Fyb3VzZWxJdGVtcyA9IENPTVBBTllfREFUQS5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENhcm91c2VsSXRlbVxuXHRcdFx0XHRvbkV4aXRpbmc9e29uRXhpdGluZ31cblx0XHRcdFx0b25FeGl0ZWQ9e29uRXhpdGVkfVxuXHRcdFx0XHRrZXk9e2l0ZW0uY29tcGFueX1cblx0XHRcdD5cblx0XHRcdFx0PENvbXBhbnlDYXJkXG5cdFx0XHRcdFx0dGl0bGU9e2l0ZW0udGl0bGV9XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb249e2l0ZW0uZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0cm9sZT17aXRlbS5yb2xlfVxuXHRcdFx0XHRcdGNvbXBhbnk9e2l0ZW0uY29tcGFueX1cblx0XHRcdFx0XHRpbWFnZVVybD17aXRlbS5pbWFnZVVybH1cblx0XHRcdFx0XHRvbk5leHQ9e25leHR9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0Nhcm91c2VsSXRlbT5cblx0XHQpXG5cdH0pXG5cblx0cmV0dXJuIChcblx0XHQ8Uy5Xb3JrZWRXaXRoV3JhcHBlcj5cblx0XHRcdDxTLlRpdGxlPldobyB3ZeKAmXZlIHdvcmtlZCB3aXRoPC9TLlRpdGxlPlxuXHRcdFx0PFMuRGVzY3JpcHRpb24+XG5cdFx0XHRcdE91ciBjb25zdWx0YW50cyBhcmUgaW5kdXN0cnkgZXhwZXJ0cyBpbiBtYXJrZXQgYW5kIHJlZmVyZW5jZSBkYXRhXG5cdFx0XHRcdHByb2R1Y3RzLCBhcyB3ZWxsIGFzIGludmVzdG1lbnQgbWFuYWdlbWVudCBzb2x1dGlvbnMuIFdlIGRlbGl2ZXIgcmVzdWx0cyB0aGF0XG5cdFx0XHRcdG1ha2UgYSBkaWZmZXJlbmNlLlxuXHRcdFx0PC9TLkRlc2NyaXB0aW9uPlxuXHRcdFx0PFMuQ2FyZFdyYXBwZXI+XG5cdFx0XHRcdDxDYXJvdXNlbFxuXHRcdFx0XHRcdGFjdGl2ZUluZGV4PXthY3RpdmVJbmRleH1cblx0XHRcdFx0XHRuZXh0PXtuZXh0fVxuXHRcdFx0XHRcdHByZXZpb3VzPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRpbnRlcnZhbD17ZmFsc2V9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7Y2Fyb3VzZWxJdGVtc31cblx0XHRcdFx0PC9DYXJvdXNlbD5cblx0XHRcdDwvUy5DYXJkV3JhcHBlcj5cblx0XHRcdDxTLkxvZ29Db250ZW50V3JhcHBlcj5cblx0XHRcdFx0PFMuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0c3JjPVwiL3N0YXRpYy9pbWFnZXMvY3BwaWIucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL2NwcGliQDF4LnBuZyAxeCwgL3N0YXRpYy9pbWFnZXMvY3BwaWJAMngucG5nIDJ4LFxuXHRcdFx0XHRcdFx0XHRcdFx0IC9zdGF0aWMvaW1hZ2VzL2NwcGliQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Mb2dvV3JhcHBlcj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9wc3AucG5nXCJcblx0XHRcdFx0XHRcdHNyY1NldD1cIi9zdGF0aWMvaW1hZ2VzL3BzcEAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3BzcEAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvcHNwQDN4LnBuZyAzeFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9TLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHQ8Uy5Mb2dvV3JhcHBlcj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRzcmM9XCIvc3RhdGljL2ltYWdlcy9hdml2YS5wbmdcIlxuXHRcdFx0XHRcdFx0c3JjU2V0PVwiL3N0YXRpYy9pbWFnZXMvYXZpdmFAMXgucG5nIDF4LCAvc3RhdGljL2ltYWdlcy9hdml2YUAyeC5wbmcgMngsXG5cdFx0XHRcdFx0XHRcdFx0XHQgL3N0YXRpYy9pbWFnZXMvYXZpdmFAM3gucG5nIDN4XCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1MuTG9nb1dyYXBwZXI+XG5cdFx0XHRcdDxTLkxvZ29XcmFwcGVyPlxuXHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdHNyYz1cIi9zdGF0aWMvaW1hZ2VzL3N3aXNzLXJlLnBuZ1wiXG5cdFx0XHRcdFx0XHRzcmNTZXQ9XCIvc3RhdGljL2ltYWdlcy9zd2lzcy1yZUAxeC5wbmcgMXgsIC9zdGF0aWMvaW1hZ2VzL3N3aXNzLXJlQDJ4LnBuZyAyeCxcblx0XHRcdFx0XHRcdFx0XHRcdCAvc3RhdGljL2ltYWdlcy9zd2lzcy1yZUAzeC5wbmcgM3hcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUy5Mb2dvV3JhcHBlcj5cblx0XHRcdDwvUy5Mb2dvQ29udGVudFdyYXBwZXI+XG5cdFx0PC9TLldvcmtlZFdpdGhXcmFwcGVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtlZFdpdGhcbiIsImV4cG9ydCBjb25zdCBFTUFJTF9FTkRQT0lOVCA9XG5cdCdodHRwczovL21hcmtldC1kYXRhLWNvbXBhbnktc2VydmVyLmhlcm9rdWFwcC5jb20vZW1haWwnXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgRU1BSUxfRU5EUE9JTlQgfSBmcm9tICcuL2FwaUVuZHBvaW50cydcblxuZXhwb3J0IGNvbnN0IHNlbmRFbWFpbCA9IGFzeW5jIChwYXlsb2FkKSA9PiB7XG5cdHRyeSB7XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChFTUFJTF9FTkRQT0lOVCwge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZClcblx0XHR9KVxuXHRcdGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXHRcdHJldHVybiByZXNwb25zZURhdGFcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0dGhyb3cgZXJyXG5cdH1cbn1cbiIsImV4cG9ydCBjb25zdCBVU0VSX1NJR05FRF9VUCA9ICdVU0VSX1NJR05FRF9VUCdcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVU0VSX1NJR05FRF9VUCB9IGZyb20gJy4vYWN0aW9uVHlwZXMnXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9XG5cbmNvbnN0IFN0b3JlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoaW5pdGlhbFN0YXRlKVxuXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlIFVTRVJfU0lHTkVEX1VQOlxuXHRcdFx0cmV0dXJuIHsgdXNlcjogYWN0aW9uLnBheWxvYWQgfVxuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gc3RhdGVcblx0fVxufVxuXG5leHBvcnQgY29uc3QgU3RvcmVQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcblx0Y29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHVzZXJSZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG5cdHJldHVybiAoXG5cdFx0PFN0b3JlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9TdG9yZUNvbnRleHQuUHJvdmlkZXI+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gKHN0b3JlKSA9PiB7XG5cdGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlQ29udGV4dClcblx0cmV0dXJuIHsgc3RhdGUsIGRpc3BhdGNoIH1cbn1cbiIsIi8vIFJlc2VhcmNoXG5jb25zdCByaWdodFRvQXVkaXRQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9EYXRhLU1hbmFnbWVudC1Db21wbGlhbmNlLXdoeS1maXJtcy1hcmUtQXVkaXRlZC12RmluYWwucGRmJ1xuY29uc3QgaWRlbnRpdHlDcmlzaXNQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9NYXJrZXQtRGF0YS1NYW5hZ2VtZW50LUlkZW50aXR5LUNyaXNpcy12YWx1ZS1wcm9wLnBkZidcbmNvbnN0IG1hdHVyaW5nQXJ0UGRmUGF0aCA9XG5cdCcvc3RhdGljL3BkZnMvTWFya2V0LURhdGEtTWFuYWdlbWVudC1NYXR1cml0eS1DdXJ2ZS1GaW5hbC5wZGYnXG5jb25zdCBhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2VQZGZQYXRoID1cblx0Jy9zdGF0aWMvcGRmcy9WYWx1ZS1vZi1NYXJrZXQtRGF0YS1BZG1pbi1FeGVjLVN1bW1hcnktdjI3SnVuMTYucGRmJ1xuY29uc3QgZGF0YVNwZW5kUGRmUGF0aCA9ICcvc3RhdGljL3BkZnMvRlgtSW1wYWN0LU1ELXNwZW5kLTIucGRmJ1xuXG4vLyBDYXNlIFN0dWRpZXNcbmNvbnN0IGNhc2VTdHVkaWVzUHB0UGF0aCA9ICcvc3RhdGljL3BkZnMvTURDLWNhc2Utc3R1ZGllcy5wcHR4J1xuXG4vLyBXaGl0ZSBQYXBlcnNcbmNvbnN0IHJpc2tGYWN0b3JzUGRmUGF0aCA9ICcvc3RhdGljL3BkZnMvVW5jb3ZlcmluZ19GUlRCX1Jpc2tfRmFjdG9ycy5wZGYnXG5jb25zdCByaXNrRnJhbWV3b3JrUGRmUGF0aCA9ICcvc3RhdGljL3BkZnMvZnJ0Yi13aGl0ZXBhcGVyLXYyLTA4MTUxOS5wZGYnXG5cbi8vIFN1cnZleXNcbmNvbnN0IHN1cnZleUluc2lnaHRzUGRmUGF0aCA9XG5cdCcvc3RhdGljL3BkZnMvTWFya2V0LURhdGEtU3VydmV5LUluc2lnaHRzLTIwMTcucGRmJ1xuXG5jb25zdCBwZGZNYXBwZXIgPSB7XG5cdHJpZ2h0VG9BdWRpdDogcmlnaHRUb0F1ZGl0UGRmUGF0aCxcblx0aWRlbnRpdHlDcmlzaXM6IGlkZW50aXR5Q3Jpc2lzUGRmUGF0aCxcblx0bWF0dXJpbmdBcnQ6IG1hdHVyaW5nQXJ0UGRmUGF0aCxcblx0YWNjb3VudGFiaWxpdHlBbmRHb3Zlcm5hbmNlOiBhY2NvdW50YWJpbGl0eUFuZEdvdmVybmFuY2VQZGZQYXRoLFxuXHRkYXRhU3BlbmQ6IGRhdGFTcGVuZFBkZlBhdGgsXG5cdHJpc2tGYWN0b3JzOiByaXNrRmFjdG9yc1BkZlBhdGgsXG5cdGNhc2VTdHVkaWVzOiBjYXNlU3R1ZGllc1BwdFBhdGgsXG5cdHN1cnZleUluc2lnaHRzOiBzdXJ2ZXlJbnNpZ2h0c1BkZlBhdGgsXG5cdHJpc2tGcmFtZXdvcms6IHJpc2tGcmFtZXdvcmtQZGZQYXRoXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBkZk1hcHBlclxuIiwiZXhwb3J0IGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoZW1haWwpID0+IHtcblx0dmFyIHJlID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkL1xuXHRyZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWRkb25zLWNzcy10cmFuc2l0aW9uLWdyb3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1vZGFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNvY2lhbC1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzLWJyZWFrcG9pbnRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==