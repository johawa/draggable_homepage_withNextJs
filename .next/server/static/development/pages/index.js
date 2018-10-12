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

/***/ "./component/App.js":
/*!**************************!*\
  !*** ./component/App.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context.js");
/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/App.css */ "./css/App.css");
/* harmony import */ var _css_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoc/Layout/Layout */ "./hoc/Layout/Layout.js");
/* harmony import */ var _component_IntroAnimation_IntroAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/IntroAnimation/IntroAnimation */ "./component/IntroAnimation/IntroAnimation.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//servers as App like app Component in React






var Wrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(Wrapper, _Component);

  function Wrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Wrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Wrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      loaded: false
    });

    return _this;
  }

  _createClass(Wrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setTimeout(function () {
        this.setState({
          loaded: true
        });
      }.bind(this), //loading Animation duration in ms
      3000);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_hoc_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      })));
    }
  }]);

  return Wrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
/* let { loaded } = this.state;
return loaded ? (
  <Provider>
    <React.Fragment>
      <Layout />
    </React.Fragment>
  </Provider>
) : (
  <IntroAnimation />
); */




/***/ }),

/***/ "./component/AppFrame/Toolbar.js":
/*!***************************************!*\
  !*** ./component/AppFrame/Toolbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_DoubleLine_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/DoubleLine.png */ "./static/DoubleLine.png");
/* harmony import */ var _static_DoubleLine_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_DoubleLine_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\AppFrame\\Toolbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Toolbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Toolbar).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: "closeAppFrame",
    value: function closeAppFrame() {
      console.log("close AppFrame");
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-toolbar",
        style: {
          backgroundImage: "url(".concat(_static_DoubleLine_png__WEBPACK_IMPORTED_MODULE_1___default.a, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "app-controls",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "close",
        onClick: this.props.CloseClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "minimise",
        onClick: this.props.MinimizeClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "maximise",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, this.props.title));
    }
  }]);

  return Toolbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Toolbar);

/***/ }),

/***/ "./component/Apps/AboutMe/AboutMe.js":
/*!*******************************************!*\
  !*** ./component/Apps/AboutMe/AboutMe.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/styles/hljs */ "react-syntax-highlighter/styles/hljs");
/* harmony import */ var react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\Apps\\AboutMe\\AboutMe.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/*
&#123  Left curly brace
&#125  Right curly brace
&#59   Semi-colon 
&#44   Comma
*/

var AboutMe =
/*#__PURE__*/
function (_Component) {
  _inherits(AboutMe, _Component);

  function AboutMe() {
    _classCallCheck(this, AboutMe);

    return _possibleConstructorReturn(this, _getPrototypeOf(AboutMe).apply(this, arguments));
  }

  _createClass(AboutMe, [{
    key: "render",
    value: function render() {
      var foo = "\n    const me = {  \n          name: 'Johannes',\n          lastname: 'Walenta',\n          nationality: 'German'        \n    };\n\n    let profiles = {\n        github: 'https://github.com/timebasher',\n        twitter: 'https://codepen.io/timebasher/', \n        eMail: 'johannes.walenta@googlemail.com'\n    };    \n\n    \n    Object.assign({}, me, profiles )\n\n\n\n    \n\n\n\n\n\n\n    ";
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default.a, {
        language: "javascript",
        style: react_syntax_highlighter_styles_hljs__WEBPACK_IMPORTED_MODULE_2__["tomorrowNightBlue"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, foo));
    }
  }]);

  return AboutMe;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AboutMe);
{
  /*  <SyntaxHighlighter language="javascript" style={tomorrowNightBlue}>
        {foo}
      </SyntaxHighlighter> */
}

/***/ }),

/***/ "./component/Apps/MyWork/MyWork.js":
/*!*****************************************!*\
  !*** ./component/Apps/MyWork/MyWork.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyWorkContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyWorkContent */ "./component/Apps/MyWork/MyWorkContent.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\Apps\\MyWork\\MyWork.js";



var MyWork = function MyWork(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyWorkContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyWork);

/***/ }),

/***/ "./component/Apps/MyWork/MyWorkContent.js":
/*!************************************************!*\
  !*** ./component/Apps/MyWork/MyWorkContent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\Apps\\MyWork\\MyWorkContent.js";


var MyWorkContent = function MyWorkContent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "MyWork");
};

/* harmony default export */ __webpack_exports__["default"] = (MyWorkContent);

/***/ }),

/***/ "./component/Apps/Paint/Paint.css":
/*!****************************************!*\
  !*** ./component/Apps/Paint/Paint.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./component/Apps/Paint/Paint.js":
/*!***************************************!*\
  !*** ./component/Apps/Paint/Paint.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-to-image */ "dom-to-image");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "file-saver");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Paint_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Paint.css */ "./component/Apps/Paint/Paint.css");
/* harmony import */ var _Paint_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Paint_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\Apps\\Paint\\Paint.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 //Download Image




var amountCells = 625; //25 * 25

var colors = ["rgb(148, 29, 43)", "rgb(255, 229, 0)", "rgb(180, 143, 128)", "rgb(150, 187, 206)", "rgb(199, 197, 185)", "rgb(42, 69, 138)", "rgb(130, 129, 134)", "rgb(116, 116, 118)", "rgb(243, 253, 254)", "rgb(68, 72, 82)"];

var Cell = function Cell(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "GridCell cell".concat(props.nr),
    onClick: props.fill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  });
};

var Color = function Color(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorCell",
    onClick: props.chooseColor,
    style: {
      backgroundColor: props.color,
      outline: props.choosen
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  });
};

var Button = function Button(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button",
    onClick: props.ClickButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, props.title);
};

var Paint =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paint, _React$Component);

  function Paint() {
    var _this;

    _classCallCheck(this, Paint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Paint).call(this));
    _this.state = {
      lenght: new Array(amountCells).fill(0),
      currentColor: "white",
      reset: false
    };
    return _this;
  }

  _createClass(Paint, [{
    key: "handleMouseClick",
    value: function handleMouseClick(index, event) {
      console.log(event.currentTarget);
      var el = event.currentTarget;

      if (el.style.backgroundColor === this.state.currentColor) {
        el.style.backgroundColor = "grey";
      } else {
        el.style.backgroundColor = this.state.currentColor;
      }
    }
  }, {
    key: "changeColor",
    value: function changeColor(event) {
      var el = event.currentTarget;
      this.setState({
        currentColor: el.style.backgroundColor
      });
    }
  }, {
    key: "resteHanlder",
    value: function resteHanlder(event) {
      this.setState({
        reset: true
      });
      var Cells = document.getElementsByClassName("GridCell");
      var CellsArr = Array.from(Cells);
      CellsArr.forEach(function (el) {
        el.removeAttribute("style");
      });
    }
  }, {
    key: "downloadLink",
    value: function downloadLink(event) {
      dom_to_image__WEBPACK_IMPORTED_MODULE_1___default.a.toBlob(document.getElementById("draw-wrapper")).then(function (blob) {
        window.saveAs(blob, "My_Art.png");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "draw-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container",
        style: {
          backgroundColor: this.state.currentColor
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.state.lenght.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, {
          key: index,
          nr: _this2.state.reset ? "_afterreset_".concat(index) : index,
          fill: function fill(event) {
            return _this2.handleMouseClick(index, event);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "colorpicker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, colors.map(function (clr, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Color, {
          key: index,
          color: clr,
          chooseColor: function chooseColor(event) {
            return _this2.changeColor(event);
          },
          choosen: _this2.state.currentColor === clr ? "5px solid lime" : null,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        ClickButton: function ClickButton(event) {
          return _this2.resteHanlder(event);
        },
        title: this.state.reset ? "RESET" : "BEGIN TO DRAW",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-box__save",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
        ClickButton: function ClickButton(event) {
          return _this2.downloadLink(event);
        },
        title: "Download",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      })));
    }
  }]);

  return Paint;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Paint);

/***/ }),

/***/ "./component/Apps/Spotify/Spotify.css":
/*!********************************************!*\
  !*** ./component/Apps/Spotify/Spotify.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./component/Apps/Spotify/Spotify.js":
/*!*******************************************!*\
  !*** ./component/Apps/Spotify/Spotify.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Spotify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Spotify.css */ "./component/Apps/Spotify/Spotify.css");
/* harmony import */ var _Spotify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Spotify_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\Apps\\Spotify\\Spotify.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Spotify =
/*#__PURE__*/
function (_Component) {
  _inherits(Spotify, _Component);

  function Spotify() {
    _classCallCheck(this, Spotify);

    return _possibleConstructorReturn(this, _getPrototypeOf(Spotify).apply(this, arguments));
  }

  _createClass(Spotify, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper_spotify_frame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "h1_spotify_frame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "SPOTIFY COVERFLOW."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        style: {
          color: "white",
          fontSize: "13px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "// Works best on Chrome // Spotify doesn't support Safari //"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "center_spotify_frame",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        action: "https://spotify-login-backend.herokuapp.com/login",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "button_spotify_frame",
        type: "submit",
        value: "Login With Spotify",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))));
    }
  }]);

  return Spotify;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Spotify);

/***/ }),

/***/ "./component/DesktopLogic/Background/Background.js":
/*!*********************************************************!*\
  !*** ./component/DesktopLogic/Background/Background.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
/* harmony import */ var _css_Background_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/Background.css */ "./css/Background.css");
/* harmony import */ var _css_Background_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_Background_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Background\\Background.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Background =
/*#__PURE__*/
function (_Component) {
  _inherits(Background, _Component);

  function Background() {
    _classCallCheck(this, Background);

    return _possibleConstructorReturn(this, _getPrototypeOf(Background).apply(this, arguments));
  }

  _createClass(Background, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, function (value) {
        var background = value.background,
            counter = value.counter; //counter = 0 by default

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Background",
          style: {
            background: background[counter]
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, _this.props.children);
      });
    }
  }]);

  return Background;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./component/DesktopLogic/DesktopIcon/DesktopIcon.js":
/*!***********************************************************!*\
  !*** ./component/DesktopLogic/DesktopIcon/DesktopIcon.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\DesktopIcon\\DesktopIcon.js";


var desktopIcon = function desktopIcon(props) {
  var item = props.item,
      highlighted = props.highlighted;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-Icon",
    onClick: props.Click,
    onDoubleClick: props.DoubleClick,
    item: item,
    style: {
      width: "100px",
      height: "100px",
      position: "absolute",
      zIndex: "400",
      left: item.left,
      top: item.top,
      padding: "5px",
      paddingTop: "10px",
      backgroundColor: highlighted === item.id ? "rgba(16, 51, 80, 0.28)" : "transparent",
      border: highlighted === item.id ? "1px dotted rgba(16, 51, 80, 0.28)" : "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-Icon__SVG",
    style: {
      width: "70px",
      height: "70px",
      backgroundImage: "url(".concat(item.SVG, ")"),
      backgroundRepeat: "no-repeat"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: highlighted === item.id ? "#0004FF" : "transparent",
      color: highlighted === item.id ? "#F2F2FF" : "black",
      margin: "5px",
      marginTop: "8px",
      paddingLeft: "5px",
      paddingRight: "5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, item.name));
};

/* harmony default export */ __webpack_exports__["default"] = (desktopIcon);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/NavItem_AppTracker.js":
/*!*************************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_AppTracker.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_AppTracker.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NavItem_AppTracker =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem_AppTracker, _Component);

  function NavItem_AppTracker() {
    _classCallCheck(this, NavItem_AppTracker);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem_AppTracker).apply(this, arguments));
  }

  _createClass(NavItem_AppTracker, [{
    key: "closeAppHandler",
    value: function closeAppHandler(items, dispatch, title) {
      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.name === title;
      });
      ItemToUpdate.visible = false;
      dispatch({
        type: "OPEN_APP",
        payload: updatedItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var button_title;
      var title;
      var checker = false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, function (value) {
        var dispatch = value.dispatch,
            items = value.items,
            focusedFrameId = value.focusedFrameId,
            lastOpenID = value.lastOpenID;
        {
          //Check if there is an App opened but none Fucused
          var itemOpen = items.filter(function (item) {
            return item.visible === true;
          }); //Check wich of the opened Apps is Selected

          var itemSelected = itemOpen.filter(function (item) {
            return item.id === focusedFrameId;
          }); //Check if none is selected but more then 0 opened

          if (itemSelected.length === 0 && itemOpen.length > 0) {
            //this is not right, due to close apps
            title = items[lastOpenID].name;
            button_title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: "Dropdown-Btn App_desc",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            }, title);
            checker = true;
          } //Choose wich of the opened Apps are selected


          if (itemSelected.length > 0 && itemOpen.length > 0) {
            title = itemSelected[0].name;
            button_title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: "Dropdown-Btn App_desc",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              },
              __self: this
            }, title);
            checker = true;
          } //none selected and none open


          if (itemSelected.length === 0 && itemOpen.length === 0) {
            title = "This is the Webpage of Johannes Walenta";
            button_title = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: "Dropdown-Btn_blank",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            }, title);
            checker = false;
          }
        }
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, button_title, checker ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown-Content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.closeAppHandler.bind(_this, items, dispatch, title),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, "Quit")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }));
      });
    }
  }]);

  return NavItem_AppTracker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_AppTracker);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/NavItem_File.js":
/*!*******************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_File.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_File.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NavItem_File =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem_File, _Component);

  function NavItem_File() {
    _classCallCheck(this, NavItem_File);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem_File).apply(this, arguments));
  }

  _createClass(NavItem_File, [{
    key: "closeAllApps",
    value: function closeAllApps(dispatch, items, value) {
      var updatedItems = _toConsumableArray(items);

      updatedItems.forEach(function (item) {
        return item.visible = false;
      });
      dispatch({
        type: "CLOSE_ALL_APPS",
        payload: updatedItems
      });
      value.lastOpenID = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, function (value) {
        var dispatch = value.dispatch,
            items = value.items;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "Dropdown-Btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, "File"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown-Content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.closeAllApps.bind(_this, dispatch, items, value),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, "Close All Apps")));
      });
    }
  }]);

  return NavItem_File;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_File);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/NavItem_Go.js":
/*!*****************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_Go.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_Go.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NavItem_Go =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem_Go, _Component);

  function NavItem_Go() {
    _classCallCheck(this, NavItem_Go);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem_Go).apply(this, arguments));
  }

  _createClass(NavItem_Go, [{
    key: "openApp",
    value: function openApp(dispatch, items, value, id) {
      value.lastOpenID = id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      });
      ItemToUpdate.visible = true;
      dispatch({
        type: "OPEN_APP",
        payload: updatedItems
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, function (value) {
        var dispatch = value.dispatch,
            items = value.items;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "Dropdown-Btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "Go"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown-Content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 0),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "My Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "Paint"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Spotify")));
      });
    }
  }]);

  return NavItem_Go;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_Go);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/NavItem_Help.js":
/*!*******************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_Help.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_Help.js";


var NavItem_Help = function NavItem_Help(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "Dropdown-Btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Dropdown-Content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Send a Message")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem_Help);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/NavItem_Start.js":
/*!********************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_Start.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_Start.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var NavItem_Start =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem_Start, _Component);

  function NavItem_Start() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NavItem_Start);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NavItem_Start)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      toggler: false
    });

    return _this;
  }

  _createClass(NavItem_Start, [{
    key: "openApp",
    value: function openApp(dispatch, items, value, id) {
      value.lastOpenID = id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      });
      ItemToUpdate.visible = true;
      dispatch({
        type: "OPEN_APP",
        payload: updatedItems
      });
    }
  }, {
    key: "closeWindow",
    value: function closeWindow() {
      console.log("close window");
      window.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, function (value) {
        var dispatch = value.dispatch,
            items = value.items;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown",
          onMouseEnter: function onMouseEnter() {
            return _this2.setState({
              toggler: true
            });
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setState({
              toggler: false
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "Dropdown-Btn",
          style: {
            background: _this2.state.toggler ? "#B68282" : "linear-gradient(to right, #0099f7, #f11712)",
            backgroundSize: "150% 150%",
            backgroundPosition: "center",
            paddingRight: "45px",
            paddingLeft: "40px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Johannes Walenta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown-Content",
          style: {
            width: "100%",
            textAlign: "start"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: {
            paddingLeft: "25px"
          },
          href: "#",
          onClick: _this2.openApp.bind(_this2, dispatch, items, value, 3),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, " ", "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: {
            paddingLeft: "25px"
          },
          href: "https://codepen.io/timebasher/",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, " ", "CodePen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: {
            paddingLeft: "25px"
          },
          href: "https://github.com/timebasher",
          target: "_blank",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, " ", "Github")));
      });
    }
  }]);

  return NavItem_Start;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_Start);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/NavItem_View.js":
/*!*******************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_View.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_View.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NavItem_View =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem_View, _Component);

  function NavItem_View() {
    _classCallCheck(this, NavItem_View);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem_View).apply(this, arguments));
  }

  _createClass(NavItem_View, [{
    key: "goFullscreen",
    value: function goFullscreen() {
      var el = document.documentElement;
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen;
      rfs.call(el);
    }
  }, {
    key: "changeBackground",
    value: function changeBackground(dispatch, counter, background) {
      var num = 1;
      var length = background.length - 1;

      if (counter >= length) {
        num = -length;
      }

      dispatch({
        type: "INCREASE_COUNTER",
        payload: num
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, function (value) {
        var dispatch = value.dispatch,
            counter = value.counter,
            background = value.background;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "Dropdown-Btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, "View"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown-Content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.goFullscreen.bind(_this),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Enter Fullscreen Mode"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.changeBackground.bind(_this, dispatch, counter, background),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "Change Background")));
      });
    }
  }]);

  return NavItem_View;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_View);

/***/ }),

/***/ "./component/DesktopLogic/Navbar/Navbar.js":
/*!*************************************************!*\
  !*** ./component/DesktopLogic/Navbar/Navbar.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-live-clock */ "react-live-clock");
/* harmony import */ var react_live_clock__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_live_clock__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavItem_Help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavItem_Help */ "./component/DesktopLogic/Navbar/NavItem_Help.js");
/* harmony import */ var _NavItem_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavItem_View */ "./component/DesktopLogic/Navbar/NavItem_View.js");
/* harmony import */ var _NavItem_Go__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NavItem_Go */ "./component/DesktopLogic/Navbar/NavItem_Go.js");
/* harmony import */ var _NavItem_Start__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavItem_Start */ "./component/DesktopLogic/Navbar/NavItem_Start.js");
/* harmony import */ var _NavItem_AppTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavItem_AppTracker */ "./component/DesktopLogic/Navbar/NavItem_AppTracker.js");
/* harmony import */ var _NavItem_File__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavItem_File */ "./component/DesktopLogic/Navbar/NavItem_File.js");
/* harmony import */ var _css_Navbar_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../css/Navbar.css */ "./css/Navbar.css");
/* harmony import */ var _css_Navbar_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_Navbar_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\Navbar.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-Left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem_Start__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem_AppTracker__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem_File__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem_Go__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem_View__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavItem_Help__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-Right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_live_clock__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "clock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./component/DragAndDropLogic/DropTarget.js":
/*!**************************************************!*\
  !*** ./component/DragAndDropLogic/DropTarget.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DragAndDropLogic\\DropTarget.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var itemSource = {
  drop: function drop(props, monitor, component) {
    var item = monitor.getItem();
    var delta = monitor.getDifferenceFromInitialOffset();
    var left = Math.round(item.left + delta.x);
    var top = Math.round(item.top + delta.y);
    return props.moveBox(item, left, top);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    item: monitor.getItem(),
    hovered: monitor.isOver()
  };
}

var Board =
/*#__PURE__*/
function (_Component) {
  _inherits(Board, _Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _getPrototypeOf(Board).apply(this, arguments));
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          connectDropTarget = _this$props.connectDropTarget,
          item = _this$props.item,
          hovered = _this$props.hovered;
      return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Board",
        style: {
          backgroundColor: hovered ? "grey" : "transparent"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DropTarget"])("item", itemSource, collect)(Board));

/***/ }),

/***/ "./component/DragAndDropLogic/Item.js":
/*!********************************************!*\
  !*** ./component/DragAndDropLogic/Item.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppFrame_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppFrame/Toolbar */ "./component/AppFrame/Toolbar.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DragAndDropLogic\\Item.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var itemSource = {
  beginDrag: function beginDrag(props) {
    return props.item;
  },
  endDrag: function endDrag(props, monitor, component) {
    return props.handleDrop(props.item);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, _getPrototypeOf(Item).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isDragging = _this$props.isDragging,
          connectDragSource = _this$props.connectDragSource,
          connectDragPreview = _this$props.connectDragPreview,
          item = _this$props.item,
          minimized = _this$props.minimized,
          focused = _this$props.focused;

      if (isDragging) {
        return null;
      }

      return connectDragPreview && connectDragSource && connectDragPreview(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-frame",
        onClick: this.props.clickAppFrame,
        id: "app-frame-".concat(item.id),
        style: {
          zIndex: focused === item.id ? "600" : "500",
          left: item.left,
          top: item.top,
          width: item.width,
          height: item.height,
          backgroundColor: item.color,
          transform: "scale(".concat(item.scale, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, connectDragSource(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AppFrame_Toolbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        CloseClick: this.props.CloseClick,
        MinimizeClick: this.props.MinimizeClick,
        title: item.name,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-header__pattern",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "app-frame-body".concat(minimized ? " minimized" : " normal"),
        style: {
          height: "calc(100% - 50px)" //Toolbar + Spacing = 50px

        },
        onClick: this.props.clickAppBody,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return Item;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["DragSource"])("item", itemSource, collect)(Item));

/***/ }),

/***/ "./component/IntroAnimation/IntroAnimation.js":
/*!****************************************************!*\
  !*** ./component/IntroAnimation/IntroAnimation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingAnimation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typist */ "react-typist");
/* harmony import */ var react_typist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_IntroAnimation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/IntroAnimation.css */ "./css/IntroAnimation.css");
/* harmony import */ var _css_IntroAnimation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_IntroAnimation_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\IntroAnimation\\IntroAnimation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var LoadingAnimation =
/*#__PURE__*/
function (_Component) {
  _inherits(LoadingAnimation, _Component);

  function LoadingAnimation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LoadingAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadingAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      headerDone: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHeaderTyped", function () {
      _this.setState({
        headerDone: true
      });
    });

    return _this;
  }

  _createClass(LoadingAnimation, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loadingAnimation-Wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fakeMenu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fakeButtons fakeClose",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fakeButtons fakeMinimize",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fakeButtons fakeZoom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "fakeScreen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a, {
        avgTypingSpeed: 40,
        cursor: {
          hideWhenDone: true
        },
        onTypingDone: this.onHeaderTyped,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "my-custom-class",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, ">\xA0 $ npm start")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), this.state.headerDone ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          color: "yellow"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, ">\xA0 starting Emulator \xA0") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a, {
        avgTypingSpeed: 40,
        startDelay: 1200,
        cursor: {
          show: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay, {
        ms: 200,
        cursor: {
          show: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, ">\xA0 ."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay, {
        ms: 200,
        cursor: {
          show: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_typist__WEBPACK_IMPORTED_MODULE_1___default.a.Delay, {
        ms: 200,
        cursor: {
          show: false
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, ".")))));
    }
  }]);

  return LoadingAnimation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./container/OS/OS.js":
/*!****************************!*\
  !*** ./container/OS/OS.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./context.js");
/* harmony import */ var _css_AppOpenCloseAnimation_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../css/AppOpenCloseAnimation.css */ "./css/AppOpenCloseAnimation.css");
/* harmony import */ var _css_AppOpenCloseAnimation_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_AppOpenCloseAnimation_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_AppFrame_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../css/AppFrame.css */ "./css/AppFrame.css");
/* harmony import */ var _css_AppFrame_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_AppFrame_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_DragAndDropLogic_Item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/DragAndDropLogic/Item */ "./component/DragAndDropLogic/Item.js");
/* harmony import */ var _component_DragAndDropLogic_DropTarget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/DragAndDropLogic/DropTarget */ "./component/DragAndDropLogic/DropTarget.js");
/* harmony import */ var _component_DesktopLogic_DesktopIcon_DesktopIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/DesktopLogic/DesktopIcon/DesktopIcon */ "./component/DesktopLogic/DesktopIcon/DesktopIcon.js");
/* harmony import */ var _static_portfolio_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/portfolio.svg */ "./static/portfolio.svg");
/* harmony import */ var _static_portfolio_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_portfolio_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_spotify_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/spotify.svg */ "./static/spotify.svg");
/* harmony import */ var _static_spotify_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_spotify_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _static_watercolor_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../static/watercolor.svg */ "./static/watercolor.svg");
/* harmony import */ var _static_watercolor_svg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_static_watercolor_svg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _component_Apps_Spotify_Spotify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../component/Apps/Spotify/Spotify */ "./component/Apps/Spotify/Spotify.js");
/* harmony import */ var _component_Apps_MyWork_MyWork__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../component/Apps/MyWork/MyWork */ "./component/Apps/MyWork/MyWork.js");
/* harmony import */ var _component_Apps_Paint_Paint__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../component/Apps/Paint/Paint */ "./component/Apps/Paint/Paint.js");
/* harmony import */ var _component_Apps_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../component/Apps/AboutMe/AboutMe */ "./component/Apps/AboutMe/AboutMe.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\container\\OS\\OS.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 //css


 //components



 //assets



 //App Logic




 //Watch The Order its Important

var AppIcons = [{
  id: 0,
  top: 40,
  left: 40,
  name: "My Work",
  highlighted: false,
  SVG: _static_portfolio_svg__WEBPACK_IMPORTED_MODULE_10___default.a
}, {
  id: 1,
  top: 190,
  left: 40,
  name: "Paint.exe",
  highlighted: false,
  SVG: _static_watercolor_svg__WEBPACK_IMPORTED_MODULE_12___default.a
}, {
  id: 2,
  top: 340,
  left: 40,
  name: "Spotify.exe",
  highlighted: false,
  SVG: _static_spotify_svg__WEBPACK_IMPORTED_MODULE_11___default.a
}];

var Desktop =
/*#__PURE__*/
function (_Component) {
  _inherits(Desktop, _Component);

  function Desktop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Desktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Desktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      highlightedIconId: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDrop", function (item) {
      console.log(item, "drop");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "newLoaction", function (item, left, top, items, dispatch) {
      //Update top and left in the state to drag an drop the item,
      // also check if minimized, if so and dragged up again scal big again
      var id = item.id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      });

      if (ItemToUpdate.minimized) {
        ItemToUpdate.scale = 1;
        ItemToUpdate.minimized = false;
      }

      ItemToUpdate.top = top;
      ItemToUpdate.left = left;
      dispatch({
        type: "CHANGE_FRAME_POSITION",
        payload: updatedItems
      });
    });

    return _this;
  }

  _createClass(Desktop, [{
    key: "onClickAppFrame",
    value: function onClickAppFrame(item, items, dispatch) {
      //set State to fucused Frame ID
      var id = item.id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      });
      dispatch({
        type: "FOCUS_FRAME",
        payload: id
      });
    }
  }, {
    key: "onClickAppBody",
    value: function onClickAppBody(item, items, dispatch) {
      //set State to fucused Frame ID
      var id = item.id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      }); //Check if Item is Minimized, if so, maximize it again, otherwise do nothing

      if (ItemToUpdate.minimized) {
        ItemToUpdate.minimized = false;
        ItemToUpdate.scale = 1;
        ItemToUpdate.top = 250;
        dispatch({
          type: "TOGGLE_FRAME_SIZE_2",
          payload: updatedItems
        });
      } else {
        return;
      }
    }
  }, {
    key: "minimizeItem",
    value: function minimizeItem(item, items, dispatch) {
      //Minimize Button Logic
      var id = item.id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      });
      var wrapper = document.getElementById("DesktopWrapper");
      var windowHeight = wrapper.getBoundingClientRect().height;
      var newPosition = windowHeight - ItemToUpdate.height * 0.65;

      if (!ItemToUpdate.minimized) {
        ItemToUpdate.minimized = !ItemToUpdate.minimized;
        ItemToUpdate.scale = 0.5;
        ItemToUpdate.top = newPosition;
      } else {
        ItemToUpdate.minimized = !ItemToUpdate.minimized;
        ItemToUpdate.scale = 1;
        ItemToUpdate.top = 200;
      }

      dispatch({
        type: "TOGGLE_FRAME_SIZE",
        payload: updatedItems
      });
    }
  }, {
    key: "openApp",
    value: function openApp(item, items, dispatch, value) {
      //Open App of Close it
      var id = item.id;
      value.lastOpenID = id;

      var updatedItems = _toConsumableArray(items);

      var ItemToUpdate = updatedItems.find(function (item) {
        return item.id === id;
      });
      ItemToUpdate.visible = !ItemToUpdate.visible;
      dispatch({
        type: "OPEN_APP",
        payload: updatedItems
      });
    }
  }, {
    key: "highlightItem",
    value: function highlightItem(item) {
      this.setState({
        highlightedIconId: item.id
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      //Watch The Order its Important
      var Apps = [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Apps_MyWork_MyWork__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Apps_Paint_Paint__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Apps_Spotify_Spotify__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Apps_AboutMe_AboutMe__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, function (value) {
        var dispatch = value.dispatch,
            items = value.items,
            focusedFrameId = value.focusedFrameId;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Wrapper",
          id: "DesktopWrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }, items.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_1__["CSSTransition"], {
            classNames: "fade",
            timeout: {
              enter: 700,
              exit: 700
            },
            key: item.id,
            unmountOnExit: true,
            mountOnEnter: true,
            in: item.visible,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DragAndDropLogic_Item__WEBPACK_IMPORTED_MODULE_7__["default"], {
            focused: focusedFrameId,
            item: item,
            minimized: item.minimized,
            index: index,
            clickAppFrame: _this2.onClickAppFrame.bind(_this2, item, items, dispatch),
            clickAppBody: _this2.onClickAppBody.bind(_this2, item, items, dispatch),
            CloseClick: _this2.openApp.bind(_this2, item, items, dispatch),
            MinimizeClick: _this2.minimizeItem.bind(_this2, item, items, dispatch),
            handleDrop: function handleDrop(item) {
              return _this2.onDrop(item);
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, //THE APP TO OUTPUT
          Apps[item.id])));
        }), AppIcons.map(function (item, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DesktopLogic_DesktopIcon_DesktopIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
            Click: _this2.highlightItem.bind(_this2, item),
            DoubleClick: _this2.openApp.bind(_this2, item, items, dispatch, value),
            highlighted: _this2.state.highlightedIconId,
            key: item.id,
            item: item,
            index: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 229
            },
            __self: this
          }, item.name);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DragAndDropLogic_DropTarget__WEBPACK_IMPORTED_MODULE_8__["default"], {
          moveBox: function moveBox(item, left, top) {
            return _this2.newLoaction(item, left, top, items, dispatch);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          },
          __self: this
        }));
      });
    }
  }]);

  return Desktop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2___default.a)(Desktop));

/***/ }),

/***/ "./context.js":
/*!********************!*\
  !*** ./context.js ***!
  \********************/
/*! exports provided: Provider, Consumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\context.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var reducer = function reducer(state, action) {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return _objectSpread({}, state, {
        counter: state.counter + action.payload
      });

    case "OPEN_APP":
      return _objectSpread({}, state, {
        items: action.payload
      });

    case "CLOSE_ALL_APPS":
      return _objectSpread({}, state, {
        items: action.payload
      });

    case "CHANGE_FRAME_POSITION":
      return _objectSpread({}, state, {
        items: action.payload
      });

    case "TOGGLE_FRAME_SIZE":
      return _objectSpread({}, state, {
        items: action.payload
      });

    case "TOGGLE_FRAME_SIZE_2":
      return _objectSpread({}, state, {
        items: action.payload
      });

    case "FOCUS_FRAME":
      return _objectSpread({}, state, {
        focusedFrameId: action.payload
      });

    default:
      return state;
  }
};

var Provider =
/*#__PURE__*/
function (_Component) {
  _inherits(Provider, _Component);

  function Provider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Provider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      background: ["linear-gradient(to right, #0099f7, #f11712)", "#008081", "yellow"],
      counter: 0,
      lastOpenID: 0,
      items: [{
        id: 0,
        name: "My Work",
        top: 207,
        left: 100,
        width: 400,
        height: 300,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#0004FF"
      }, {
        id: 1,
        name: "Paint.exe",
        top: 200,
        left: 700,
        width: 402,
        height: 450,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#6cc3af"
      }, {
        id: 2,
        name: "Spotify.exe",
        top: 180,
        left: 330,
        width: 800,
        height: 600,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#EA1B19"
      }, {
        id: 3,
        name: "AboutMe.txt",
        top: 180,
        left: 330,
        width: 650,
        height: 450,
        scale: 1,
        minimized: false,
        visible: false,
        color: "#FFF200"
      }],
      focusedFrameId: null,
      dispatch: function dispatch(action) {
        return _this.setState(function (state) {
          return reducer(state, action);
        });
      }
    });

    return _this;
  }

  _createClass(Provider, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
        value: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return Provider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);
var Consumer = Context.Consumer;

/***/ }),

/***/ "./css/App.css":
/*!*********************!*\
  !*** ./css/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/AppFrame.css":
/*!**************************!*\
  !*** ./css/AppFrame.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/AppOpenCloseAnimation.css":
/*!***************************************!*\
  !*** ./css/AppOpenCloseAnimation.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/Background.css":
/*!****************************!*\
  !*** ./css/Background.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/IntroAnimation.css":
/*!********************************!*\
  !*** ./css/IntroAnimation.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/Layout.css":
/*!************************!*\
  !*** ./css/Layout.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./css/Navbar.css":
/*!************************!*\
  !*** ./css/Navbar.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./hoc/Layout/Layout.js":
/*!******************************!*\
  !*** ./hoc/Layout/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_Layout_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/Layout.css */ "./css/Layout.css");
/* harmony import */ var _css_Layout_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_Layout_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _container_OS_OS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../container/OS/OS */ "./container/OS/OS.js");
/* harmony import */ var _component_DesktopLogic_Background_Background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/DesktopLogic/Background/Background */ "./component/DesktopLogic/Background/Background.js");
/* harmony import */ var _component_DesktopLogic_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../component/DesktopLogic/Navbar/Navbar */ "./component/DesktopLogic/Navbar/Navbar.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\hoc\\Layout\\Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DesktopLogic_Background_Background__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "Navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DesktopLogic_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "Main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_OS_OS__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_1___default.a)(Layout));

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
/* harmony import */ var _component_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/App */ "./component/App.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\pages\\index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/DoubleLine.png":
/*!*******************************!*\
  !*** ./static/DoubleLine.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAABZJREFUCB1jYMABGP8DAQ45EoVJNwoAprsH+7svb+MAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/portfolio.svg":
/*!******************************!*\
  !*** ./static/portfolio.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjEzOS40ODQiIHk9IjI0LjY0NSIgc3R5bGU9ImZpbGw6I0UwRTBEMzsiIHdpZHRoPSIzNzAuMjkzIiBoZWlnaHQ9IjQ2Mi43MTQiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzMzNFNDg7IiBkPSJNNDU0LjM0NSwxMDAuMzkySDE5NC45MjNjLTQuODY1LDAtOC44MDktMy45NDMtOC44MDktOC44MDlzMy45NDQtOC44MDksOC44MDktOC44MDloMjU5LjQyMg0KCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzQ2My4xNTQsOTYuNDQ4LDQ1OS4yMTEsMTAwLjM5Miw0NTQuMzQ1LDEwMC4zOTJ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTQ1NC4zNDUsMTc2LjQ2NUgxOTQuOTIzYy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDkNCgkJaDI1OS40MjJjNC44NjYsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUM0NjMuMTU0LDE3Mi41MjIsNDU5LjIxMSwxNzYuNDY1LDQ1NC4zNDUsMTc2LjQ2NXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTQ1NC4zNDUsMjE0LjUwM2gtNTkuMjIyYy00Ljg2NiwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDMtOC44MDksOC44MDktOC44MDloNTkuMjIyDQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzQ2My4xNTQsMjEwLjU1OSw0NTkuMjExLDIxNC41MDMsNDU0LjM0NSwyMTQuNTAzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1QzY2NzA7IiBkPSJNMzcwLjE4MiwyMTQuNTAzSDE5NC45MjNjLTQuODY1LDAtOC44MDktMy45NDMtOC44MDktOC44MDljMC00Ljg2NiwzLjk0NC04LjgwOSw4LjgwOS04LjgwOQ0KCQloMTc1LjI1OWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzM3OC45OSwyMTAuNTU5LDM3NS4wNDYsMjE0LjUwMywzNzAuMTgyLDIxNC41MDN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik00NTQuMzQ1LDI1Mi41NEgzMDkuNDVjLTQuODY2LDAtOC44MDktMy45NDMtOC44MDktOC44MDlzMy45NDMtOC44MDksOC44MDktOC44MDloMTQ0Ljg5Ng0KCQljNC44NjYsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOVM0NTkuMjExLDI1Mi41NCw0NTQuMzQ1LDI1Mi41NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTI4NS41OSwyNTIuNTRoLTkwLjY2OGMtNC44NjUsMC04LjgwOS0zLjk0My04LjgwOS04LjgwOXMzLjk0NC04LjgwOSw4LjgwOS04LjgwOWg5MC42NjgNCgkJYzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlTMjkwLjQ1NiwyNTIuNTQsMjg1LjU5LDI1Mi41NHoiLz4NCjwvZz4NCjxyZWN0IHg9IjEzOS40ODQiIHk9IjI0LjY0NSIgc3R5bGU9Im9wYWNpdHk6MC4xO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiB3aWR0aD0iMjU0LjU5NCIgaGVpZ2h0PSI0NjIuNzE0Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTQ1NC4zNDUsMzI4LjYxMkgyOTguNTQ1Yy00Ljg2NiwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDMtOC44MDksOC44MDktOC44MDkNCgkJaDE1NS44MDFjNC44NjYsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUM0NjMuMTU0LDMyNC42NjksNDU5LjIxMSwzMjguNjEyLDQ1NC4zNDUsMzI4LjYxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTI2OC4xNzksMzI4LjYxMmgtNzMuMjU4Yy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDloNzMuMjU4DQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzI3Ni45ODgsMzI0LjY2OSwyNzMuMDQ1LDMyOC42MTIsMjY4LjE3OSwzMjguNjEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1QzY2NzA7IiBkPSJNNDU0LjM0NSwzNjYuNjQ3aC04NC4xNjRjLTQuODY2LDAtOC44MDktMy45NDMtOC44MDktOC44MDljMC00Ljg2NiwzLjk0My04LjgwOSw4LjgwOS04LjgwOWg4NC4xNjQNCgkJYzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlDNDYzLjE1NCwzNjIuNzA0LDQ1OS4yMTEsMzY2LjY0Nyw0NTQuMzQ1LDM2Ni42NDd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik0zNDAuNDgsMzY2LjY0N0gxOTQuOTIzYy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDlIMzQwLjQ4DQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzM0OS4yODksMzYyLjcwNCwzNDUuMzQ1LDM2Ni42NDcsMzQwLjQ4LDM2Ni42NDd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik00NTQuMzQ1LDQwNC42ODNIMTk0LjkyM2MtNC44NjUsMC04LjgwOS0zLjk0NC04LjgwOS04LjgwOWMwLTQuODY2LDMuOTQ0LTguODA5LDguODA5LTguODA5DQoJCWgyNTkuNDIyYzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlDNDYzLjE1NCw0MDAuNzM5LDQ1OS4yMTEsNDA0LjY4Myw0NTQuMzQ1LDQwNC42ODN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik0zNTcuMTY4LDQ0Mi43MThIMTk0LjkyM2MtNC44NjUsMC04LjgwOS0zLjk0My04LjgwOS04LjgwOWMwLTQuODY2LDMuOTQ0LTguODA5LDguODA5LTguODA5DQoJCWgxNjIuMjQ1YzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlDMzY1Ljk3Nyw0MzguNzc1LDM2Mi4wMzMsNDQyLjcxOCwzNTcuMTY4LDQ0Mi43MTh6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzMzRTQ4OyIgZD0iTTM0Ni45NjksMjMuNDljMC0xMi45MTktMTAuNTctMjMuNDktMjMuNDktMjMuNDlIMTk4LjA4N2MtMTIuOTE5LDAtMjMuNDksMTAuNTctMjMuNDksMjMuNDl2NDY1LjAyDQoJYzAsMTIuOTE5LDEwLjU3LDIzLjQ5LDIzLjQ5LDIzLjQ5aDEyNS4zOTJjMTIuOTE5LDAsMjMuNDktMTAuNTcsMjMuNDktMjMuNDlWMjMuNDl6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNENDkwMDA7IiBjeD0iMjYwLjc4NSIgY3k9IjQyMS44ODgiIHI9IjQ3LjY3NCIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMzMzRTQ4OyIgY3g9IjI2MC43ODUiIGN5PSI0MjEuODg4IiByPSIyMC42NiIvPg0KPHJlY3QgeD0iMjA5LjY4MyIgeT0iNTAuNzM4IiBzdHlsZT0iZmlsbDojRTBFMEQzOyIgd2lkdGg9IjEwMi4yMDQiIGhlaWdodD0iMTk0LjQzNyIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzFFMjUyQjsiIGQ9Ik0yODMuMjkyLDExOS4xNzdIMjM4LjI3Yy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDloNDUuMDIyDQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzI5Mi4xLDExNS4yMzMsMjg4LjE1OCwxMTkuMTc3LDI4My4yOTIsMTE5LjE3N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMUUyNTJCOyIgZD0iTTI4My4yOTIsMTUwLjg4OEgyMzguMjdjLTQuODY1LDAtOC44MDktMy45NDMtOC44MDktOC44MDlzMy45NDQtOC44MDksOC44MDktOC44MDloNDUuMDIyDQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzI5Mi4xLDE0Ni45NDQsMjg4LjE1OCwxNTAuODg4LDI4My4yOTIsMTUwLjg4OHoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDgyQ0E7IiBkPSJNMTc0LjU5NywyMy40OWMwLTEyLjkxOS0xMC41Ny0yMy40OS0yMy40OS0yMy40OUgyNS43MTNDMTIuNzk0LDAsMi4yMjMsMTAuNTcsMi4yMjMsMjMuNDl2NDY1LjAyDQoJYzAsMTIuOTE5LDEwLjU3LDIzLjQ5LDIzLjQ5LDIzLjQ5aDEyNS4zOTNjMTIuOTE5LDAsMjMuNDktMTAuNTcsMjMuNDktMjMuNDlWMjMuNDlIMTc0LjU5N3oiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q0OTAwMDsiIGN4PSI4OC40MDUiIGN5PSI0MjEuODg4IiByPSI0Ny42NzQiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzMzM0U0ODsiIGN4PSI4OC40MDUiIGN5PSI0MjEuODg4IiByPSIyMC42NiIvPg0KPHJlY3QgeD0iMzcuMzA5IiB5PSI1MC43MzgiIHN0eWxlPSJmaWxsOiNFMEUwRDM7IiB3aWR0aD0iMTAyLjIwNCIgaGVpZ2h0PSIxOTQuNDM3Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMUUyNTJCOyIgZD0iTTExMC45MiwxMTkuMTc3SDY1Ljg5N2MtNC44NjUsMC04LjgwOS0zLjk0My04LjgwOS04LjgwOWMwLTQuODY2LDMuOTQ0LTguODA5LDguODA5LTguODA5aDQ1LjAyMw0KCQljNC44NjUsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUMxMTkuNzI5LDExNS4yMzMsMTE1Ljc4NSwxMTkuMTc3LDExMC45MiwxMTkuMTc3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMxRTI1MkI7IiBkPSJNMTEwLjkyLDE1MC44ODhINjUuODk3Yy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5czMuOTQ0LTguODA5LDguODA5LTguODA5aDQ1LjAyMw0KCQljNC44NjUsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUMxMTkuNzI5LDE0Ni45NDQsMTE1Ljc4NSwxNTAuODg4LDExMC45MiwxNTAuODg4eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./static/spotify.svg":
/*!****************************!*\
  !*** ./static/spotify.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRDQUY1MDsiIGQ9Ik0yNTYsMEMxMTQuNjE1LDAsMCwxMTQuNjE1LDAsMjU2czExNC42MTUsMjU2LDI1NiwyNTZzMjU2LTExNC42MTUsMjU2LTI1Ng0KCUM1MTEuODQ3LDExNC42NzgsMzk3LjMyMiwwLjE1MywyNTYsMHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMzYyLjY2NywzNzMuMzMzYy0yLjE5Mi0wLjAwMy00LjMzLTAuNjgxLTYuMTIzLTEuOTQxYy02Mi43ODQtNDQuMTM5LTE2Ni42NzctNDYuNjM1LTIzNi44LTMwLjMzNg0KCQljLTUuNzM4LDEuMzM3LTExLjQ3My0yLjIzLTEyLjgxMS03Ljk2OGMtMS4zMzctNS43MzgsMi4yMy0xMS40NzMsNy45NjgtMTIuODExYzc0LjQ5Ni0xNy4zNjUsMTg1Ljc0OS0xNC4yMjksMjUzLjg2NywzMy42NjQNCgkJYzQuODE5LDMuMzg5LDUuOTc4LDEwLjA0MiwyLjU5LDE0Ljg2MUMzNjkuMzY3LDM3MS42MzMsMzY2LjEyNywzNzMuMzIyLDM2Mi42NjcsMzczLjMzM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzc0NzRGOyIgZD0iTTM5NC42NjcsMzA5LjMzM2MtMi4yMzUsMC4wMDEtNC40MTQtMC43MDEtNi4yMjktMi4wMDUNCgkJYy03Mi41MzMtNTIuMDMyLTE2MS4zNDQtNjUuMDQ1LTI3OS42MTYtNDAuODk2Yy01LjcyMSwxLjQwNi0xMS40OTgtMi4wOTItMTIuOTA0LTcuODEyYy0xLjQwNi01LjcyMSwyLjA5Mi0xMS40OTgsNy44MTItMTIuOTA0DQoJCWMwLjI3My0wLjA2NywwLjU0OC0wLjEyMywwLjgyNS0wLjE2OWMxMjQuNTQ0LTI1LjQyOSwyMTguNjY3LTExLjMyOCwyOTYuMzg0LDQ0LjQzN2M0Ljc4NCwzLjQzOCw1Ljg3NCwxMC4xMDQsMi40MzYsMTQuODg3DQoJCWMtMi4wMDUsMi43ODktNS4yMyw0LjQ0Mi04LjY2NSw0LjQ0MUwzOTQuNjY3LDMwOS4zMzN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzM3NDc0RjsiIGQ9Ik00MjYuNjY3LDIyNGMtMi4xMzcsMC4wMDMtNC4yMjUtMC42MzYtNS45OTUtMS44MzVjLTkxLjY5MS02Mi4yNzItMjMwLjk3Ni02Mi42MTMtMzIxLjEwOS0zMC43ODQNCgkJYy01LjQ4NSwyLjE1LTExLjY3NC0wLjU1My0xMy44MjQtNi4wMzhjLTIuMTUtNS40ODUsMC41NTMtMTEuNjc0LDYuMDM4LTEzLjgyNGMwLjIxOC0wLjA4NSwwLjQzOC0wLjE2MywwLjY2MS0wLjIzNA0KCQljOTUuMTg5LTMzLjY2NCwyNDIuNjI0LTMzLjA0NSwzNDAuMjI0LDMzLjIxNmM0Ljg3OCwzLjMwMyw2LjE1NCw5LjkzNSwyLjg1MSwxNC44MTNDNDMzLjUyNSwyMjIuMjQ5LDQzMC4yMSwyMjQuMDA1LDQyNi42NjcsMjI0eiINCgkJLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./static/watercolor.svg":
/*!*******************************!*\
  !*** ./static/watercolor.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcwIDQ3MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcwIDQ3MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0M3NTsiIGQ9Ik0xOTEuMjUsNTAuOXYyNUg0NDIuNWM2Ljg5MywwLDEyLjUtNS42MDcsMTIuNS0xMi41cy01LjYwNy0xMi41LTEyLjUtMTIuNUgxOTEuMjV6Ii8+DQoJPHJlY3QgeD0iMTAxLjI1IiB5PSI1MC45IiBzdHlsZT0iZmlsbDojOThEOUQ1OyIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjI1Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzI3NEI2RDsiIGQ9Ik0zNy41LDg1LjljNy4yMTgsMCwyNi44NzYtMy4xMDMsNDguNzUtOC4zNzJWNDkuMjcyQzY0LjM3Niw0NC4wMDMsNDQuNzE4LDQwLjksMzcuNSw0MC45DQoJCUMyNS4wOTQsNDAuOSwxNSw1MC45OTQsMTUsNjMuNFMyNS4wOTQsODUuOSwzNy41LDg1Ljl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA4Mjk0NzsiIGQ9Ik0zNy41LDEwMC45YzEwLjE4OCwwLDM0LjEyMS00LjE5MSw1Ny4xODQtMTBINDQyLjVjMTUuMTYzLDAsMjcuNS0xMi4zMzcsMjcuNS0yNy41DQoJCXMtMTIuMzM3LTI3LjUtMjcuNS0yNy41SDk0LjY4NGMtMjMuMDYzLTUuODA5LTQ2Ljk5NS0xMC01Ny4xODQtMTBDMTYuODIyLDI1LjksMCw0Mi43MjMsMCw2My40UzE2LjgyMiwxMDAuOSwzNy41LDEwMC45eg0KCQkgTTM3LjUsNDAuOWM3LjIxOCwwLDI2Ljg3NiwzLjEwMyw0OC43NSw4LjM3MnYyOC4yNTZDNjQuMzc2LDgyLjc5Nyw0NC43MTgsODUuOSwzNy41LDg1LjlDMjUuMDk0LDg1LjksMTUsNzUuODA3LDE1LDYzLjQNCgkJUzI1LjA5NCw0MC45LDM3LjUsNDAuOXogTTQ1NSw2My40YzAsNi44OTMtNS42MDcsMTIuNS0xMi41LDEyLjVIMTkxLjI1di0yNUg0NDIuNUM0NDkuMzkzLDUwLjksNDU1LDU2LjUwOCw0NTUsNjMuNHogTTE3Ni4yNSw1MC45DQoJCXYyNWgtNzV2LTI1SDE3Ni4yNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjJFQkQ5OyIgZD0iTTQzMi41LDEzMC45aC0zOTVjLTEyLjQwNiwwLTIyLjUsMTAuMDk0LTIyLjUsMjIuNVY0MDYuNmMwLDEyLjQwNiwxMC4wOTQsMjIuNSwyMi41LDIyLjVoMzk1DQoJCWMxMi40MDYsMCwyMi41LTEwLjA5NCwyMi41LTIyLjVWMTUzLjRDNDU1LDE0MC45OTQsNDQ0LjkwNiwxMzAuOSw0MzIuNSwxMzAuOXogTTkzLjM1LDQxNC4xYy0zNC45MDMsMC02My4zLTI4LjM5Ni02My4zLTYzLjMNCgkJczI4LjM5Ni02My4zLDYzLjMtNjMuM2MxMC44ODEsMCwyMS42MjksMi44MjIsMzEuMDgzLDguMTYyYzMuNjA2LDIuMDM3LDQuODc5LDYuNjEyLDIuODQyLDEwLjIxOQ0KCQljLTAuMDgyLDAuMTQ2LTAuMTc1LDAuMjgtMC4yNjUsMC40MThjNC4wOTIsMy4xLDcuNzQxLDYuNzUsMTAuODQxLDEwLjg0MWMwLjEzOC0wLjA5LDAuMjczLTAuMTgzLDAuNDE4LTAuMjY1DQoJCWMzLjYwNy0yLjAzNiw4LjE4My0wLjc2NSwxMC4yMTksMi44NDJjNS4zNDEsOS40NTQsOC4xNjMsMjAuMjAzLDguMTYzLDMxLjA4M0MxNTYuNjUsMzg1LjcwMywxMjguMjU0LDQxNC4xLDkzLjM1LDQxNC4xeg0KCQkgTTkzLjM1LDI3Mi41Yy0zNC45MDMsMC02My4zLTI4LjM5Ni02My4zLTYzLjNzMjguMzk2LTYzLjMsNjMuMy02My4zYzM0LjkwNCwwLDYzLjMwMSwyOC4zOTYsNjMuMzAxLDYzLjMNCgkJUzEyOC4yNTQsMjcyLjUsOTMuMzUsMjcyLjV6IE0yMzUsNDE0LjFjLTM0LjkwMywwLTYzLjMtMjguMzk2LTYzLjMtNjMuM3MyOC4zOTYtNjMuMyw2My4zLTYzLjNzNjMuMywyOC4zOTYsNjMuMyw2My4zDQoJCVMyNjkuOTAzLDQxNC4xLDIzNSw0MTQuMXogTTIzNSwyNzIuNWMtMzQuOTAzLDAtNjMuMy0yOC4zOTYtNjMuMy02My4zczI4LjM5Ni02My4zLDYzLjMtNjMuM3M2My4zLDI4LjM5Niw2My4zLDYzLjMNCgkJUzI2OS45MDMsMjcyLjUsMjM1LDI3Mi41eiBNMzc2LjY1LDQxNC4xYy0zNC45MDQsMC02My4zMDEtMjguMzk2LTYzLjMwMS02My4zczI4LjM5Ni02My4zLDYzLjMwMS02My4zDQoJCWMzNC45MDMsMCw2My4zLDI4LjM5Niw2My4zLDYzLjNTNDExLjU1NCw0MTQuMSwzNzYuNjUsNDE0LjF6IE0zNzYuNjUsMjcyLjVjLTM0LjkwNCwwLTYzLjMwMS0yOC4zOTYtNjMuMzAxLTYzLjMNCgkJczI4LjM5Ni02My4zLDYzLjMwMS02My4zYzM0LjkwMywwLDYzLjMsMjguMzk2LDYzLjMsNjMuM1M0MTEuNTU0LDI3Mi41LDM3Ni42NSwyNzIuNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjI0ODRCOyIgZD0iTTkzLjM1LDE2MC45Yy0yNi42MzMsMC00OC4zLDIxLjY2Ny00OC4zLDQ4LjNzMjEuNjY3LDQ4LjMsNDguMyw0OC4zczQ4LjMwMS0yMS42NjcsNDguMzAxLTQ4LjMNCgkJUzExOS45ODIsMTYwLjksOTMuMzUsMTYwLjl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGNkUxRDsiIGQ9Ik0yMzUsMTYwLjljLTI2LjYzMywwLTQ4LjMsMjEuNjY3LTQ4LjMsNDguM3MyMS42NjcsNDguMyw0OC4zLDQ4LjNzNDguMy0yMS42NjcsNDguMy00OC4zDQoJCVMyNjEuNjMzLDE2MC45LDIzNSwxNjAuOXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQzc1OyIgZD0iTTM3Ni42NSwxNjAuOWMtMjYuNjMzLDAtNDguMzAxLDIxLjY2Ny00OC4zMDEsNDguM3MyMS42NjgsNDguMyw0OC4zMDEsNDguM3M0OC4zLTIxLjY2Nyw0OC4zLTQ4LjMNCgkJUzQwMy4yODMsMTYwLjksMzc2LjY1LDE2MC45eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMxODVGOEQ7IiBkPSJNMTI3LjAwOSwzMDYuM2MtMi4xNDYsMy4yNzktNi40OTEsNC4zNzgtOS45NTMsMi40MjNjLTcuMjA4LTQuMDcxLTE1LjQwNS02LjIyMy0yMy43MDYtNi4yMjMNCgkJYy0yNi42MzMsMC00OC4zLDIxLjY2Ny00OC4zLDQ4LjNzMjEuNjY3LDQ4LjMsNDguMyw0OC4zczQ4LjMwMS0yMS42NjcsNDguMzAxLTQ4LjNjMC04LjMwMS0yLjE1Mi0xNi40OTgtNi4yMjQtMjMuNzA2DQoJCWMtMS45NTUtMy40NjEtMC44NTYtNy44MDcsMi40MjMtOS45NTNDMTM0Ljc1LDMxMy4wNDksMTMxLjEsMzA5LjM5OSwxMjcuMDA5LDMwNi4zeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM2REE4RDY7IiBkPSJNMjM1LDMwMi41Yy0yNi42MzMsMC00OC4zLDIxLjY2Ny00OC4zLDQ4LjNzMjEuNjY3LDQ4LjMsNDguMyw0OC4zczQ4LjMtMjEuNjY3LDQ4LjMtNDguMw0KCQlTMjYxLjYzMywzMDIuNSwyMzUsMzAyLjV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6Izk4RDlENTsiIGQ9Ik0zNzYuNjUsMzAyLjVjLTI2LjYzMywwLTQ4LjMwMSwyMS42NjctNDguMzAxLDQ4LjNzMjEuNjY4LDQ4LjMsNDguMzAxLDQ4LjNzNDguMy0yMS42NjcsNDguMy00OC4zDQoJCVM0MDMuMjgzLDMwMi41LDM3Ni42NSwzMDIuNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDgyOTQ3OyIgZD0iTTQzMi41LDExNS45aC0zOTVDMTYuODIyLDExNS45LDAsMTMyLjcyMywwLDE1My40VjQwNi42YzAsMjAuNjc4LDE2LjgyMiwzNy41LDM3LjUsMzcuNWgzOTUNCgkJYzIwLjY3OCwwLDM3LjUtMTYuODIyLDM3LjUtMzcuNVYxNTMuNEM0NzAsMTMyLjcyMyw0NTMuMTc4LDExNS45LDQzMi41LDExNS45eiBNNDU1LDQwNi42YzAsMTIuNDA2LTEwLjA5NCwyMi41LTIyLjUsMjIuNWgtMzk1DQoJCWMtMTIuNDA2LDAtMjIuNS0xMC4wOTQtMjIuNS0yMi41VjE1My40YzAtMTIuNDA2LDEwLjA5NC0yMi41LDIyLjUtMjIuNWgzOTVjMTIuNDA2LDAsMjIuNSwxMC4wOTQsMjIuNSwyMi41VjQwNi42eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwODI5NDc7IiBkPSJNOTMuMzUsMTQ1LjljLTM0LjkwMywwLTYzLjMsMjguMzk2LTYzLjMsNjMuM3MyOC4zOTYsNjMuMyw2My4zLDYzLjMNCgkJYzM0LjkwNCwwLDYzLjMwMS0yOC4zOTYsNjMuMzAxLTYzLjNTMTI4LjI1NCwxNDUuOSw5My4zNSwxNDUuOXogTTkzLjM1LDI1Ny41Yy0yNi42MzMsMC00OC4zLTIxLjY2Ny00OC4zLTQ4LjMNCgkJczIxLjY2Ny00OC4zLDQ4LjMtNDguM3M0OC4zMDEsMjEuNjY3LDQ4LjMwMSw0OC4zUzExOS45ODIsMjU3LjUsOTMuMzUsMjU3LjV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA4Mjk0NzsiIGQ9Ik0yMzUsMTQ1LjljLTM0LjkwMywwLTYzLjMsMjguMzk2LTYzLjMsNjMuM3MyOC4zOTYsNjMuMyw2My4zLDYzLjNzNjMuMy0yOC4zOTYsNjMuMy02My4zDQoJCVMyNjkuOTAzLDE0NS45LDIzNSwxNDUuOXogTTIzNSwyNTcuNWMtMjYuNjMzLDAtNDguMy0yMS42NjctNDguMy00OC4zczIxLjY2Ny00OC4zLDQ4LjMtNDguM3M0OC4zLDIxLjY2Nyw0OC4zLDQ4LjMNCgkJUzI2MS42MzMsMjU3LjUsMjM1LDI1Ny41eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwODI5NDc7IiBkPSJNMzc2LjY1LDE0NS45Yy0zNC45MDQsMC02My4zMDEsMjguMzk2LTYzLjMwMSw2My4zczI4LjM5Niw2My4zLDYzLjMwMSw2My4zDQoJCWMzNC45MDMsMCw2My4zLTI4LjM5Niw2My4zLTYzLjNTNDExLjU1NCwxNDUuOSwzNzYuNjUsMTQ1Ljl6IE0zNzYuNjUsMjU3LjVjLTI2LjYzMywwLTQ4LjMwMS0yMS42NjctNDguMzAxLTQ4LjMNCgkJczIxLjY2OC00OC4zLDQ4LjMwMS00OC4zczQ4LjMsMjEuNjY3LDQ4LjMsNDguM1M0MDMuMjgzLDI1Ny41LDM3Ni42NSwyNTcuNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDgyOTQ3OyIgZD0iTTIzNSwyODcuNWMtMzQuOTAzLDAtNjMuMywyOC4zOTYtNjMuMyw2My4zczI4LjM5Niw2My4zLDYzLjMsNjMuM3M2My4zLTI4LjM5Niw2My4zLTYzLjMNCgkJUzI2OS45MDMsMjg3LjUsMjM1LDI4Ny41eiBNMjM1LDM5OS4xYy0yNi42MzMsMC00OC4zLTIxLjY2Ny00OC4zLTQ4LjNzMjEuNjY3LTQ4LjMsNDguMy00OC4zczQ4LjMsMjEuNjY3LDQ4LjMsNDguMw0KCQlTMjYxLjYzMywzOTkuMSwyMzUsMzk5LjF6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA4Mjk0NzsiIGQ9Ik0zNzYuNjUsMjg3LjVjLTM0LjkwNCwwLTYzLjMwMSwyOC4zOTYtNjMuMzAxLDYzLjNzMjguMzk2LDYzLjMsNjMuMzAxLDYzLjMNCgkJYzM0LjkwMywwLDYzLjMtMjguMzk2LDYzLjMtNjMuM1M0MTEuNTU0LDI4Ny41LDM3Ni42NSwyODcuNXogTTM3Ni42NSwzOTkuMWMtMjYuNjMzLDAtNDguMzAxLTIxLjY2Ny00OC4zMDEtNDguMw0KCQlzMjEuNjY4LTQ4LjMsNDguMzAxLTQ4LjNzNDguMywyMS42NjcsNDguMyw0OC4zUzQwMy4yODMsMzk5LjEsMzc2LjY1LDM5OS4xeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwODI5NDc7IiBkPSJNMTM4LjI2OSwzMTYuODc1Yy0wLjE0NSwwLjA4Mi0wLjI4LDAuMTc1LTAuNDE4LDAuMjY1Yy0zLjI4LDIuMTQ3LTQuMzc5LDYuNDkzLTIuNDI0LDkuOTU0DQoJCWM0LjA3MSw3LjIwOCw2LjIyNCwxNS40MDUsNi4yMjQsMjMuNzA2YzAsMjYuNjMzLTIxLjY2OCw0OC4zLTQ4LjMwMSw0OC4zcy00OC4zLTIxLjY2Ny00OC4zLTQ4LjNzMjEuNjY3LTQ4LjMsNDguMy00OC4zDQoJCWM4LjMwMSwwLDE2LjQ5OCwyLjE1MSwyMy43MDYsNi4yMjNjMy40NjMsMS45NTYsNy44MDcsMC44NTYsOS45NTMtMi40MjNjMC4wOTEtMC4xMzksMC4xODMtMC4yNzMsMC4yNjUtMC40MTkNCgkJYzIuMDM3LTMuNjA2LDAuNzY1LTguMTgyLTIuODQyLTEwLjIxOWMtOS40NTQtNS4zNC0yMC4yMDItOC4xNjItMzEuMDgzLTguMTYyYy0zNC45MDMsMC02My4zLDI4LjM5Ni02My4zLDYzLjMNCgkJczI4LjM5Niw2My4zLDYzLjMsNjMuM2MzNC45MDQsMCw2My4zMDEtMjguMzk2LDYzLjMwMS02My4zYzAtMTAuODgtMi44MjItMjEuNjI5LTguMTYzLTMxLjA4Mw0KCQlDMTQ2LjQ1MSwzMTYuMTEsMTQxLjg3NiwzMTQuODM5LDEzOC4yNjksMzE2Ljg3NXoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "dom-to-image":
/*!*******************************!*\
  !*** external "dom-to-image" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-to-image");

/***/ }),

/***/ "file-saver":
/*!*****************************!*\
  !*** external "file-saver" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dnd":
/*!****************************!*\
  !*** external "react-dnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),

/***/ "react-dnd-html5-backend":
/*!******************************************!*\
  !*** external "react-dnd-html5-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),

/***/ "react-live-clock":
/*!***********************************!*\
  !*** external "react-live-clock" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-live-clock");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/styles/hljs":
/*!*******************************************************!*\
  !*** external "react-syntax-highlighter/styles/hljs" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/styles/hljs");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "react-typist":
/*!*******************************!*\
  !*** external "react-typist" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map