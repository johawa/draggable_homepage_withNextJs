webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/DesktopLogic/Navbar/NavItem_Start.js":
/*!********************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_Start.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
var _jsxFileName = "C:\\Users\\Johannes\\Desktop\\Next_Homepage\\component\\DesktopLogic\\Navbar\\NavItem_Start.js";

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
          lineNumber: 16
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
            lineNumber: 20
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
            lineNumber: 25
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
            lineNumber: 39
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
            lineNumber: 43
          },
          __self: this
        }, " ", "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
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
            lineNumber: 52
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
            lineNumber: 60
          },
          __self: this
        }, " ", "Github"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: {
            paddingLeft: "25px"
          },
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, " ", "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          style: {
            paddingLeft: "25px"
          },
          href: "#",
          onClick: _this2.closeWindow.bind(_this2),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, " ", "Shut Down")));
      });
    }
  }]);

  return NavItem_Start;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_Start);

/***/ })

})
//# sourceMappingURL=index.js.498042a596080210f978.hot-update.js.map