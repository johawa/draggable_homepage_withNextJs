webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/Apps/Paint/Paint.js":
/*!***************************************!*\
  !*** ./component/Apps/Paint/Paint.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dom-to-image */ "./node_modules/dom-to-image/src/dom-to-image.js");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/src/FileSaver.js");
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

/***/ })

})
//# sourceMappingURL=index.js.aa9eaf439c69f6eab9fa.hot-update.js.map