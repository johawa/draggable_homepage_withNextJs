webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./component/DesktopLogic/Navbar/NavItem_Help.js":
/*!*******************************************************!*\
  !*** ./component/DesktopLogic/Navbar/NavItem_Help.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context */ "./context.js");
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




var NavItem_Help =
/*#__PURE__*/
function (_Component) {
  _inherits(NavItem_Help, _Component);

  function NavItem_Help() {
    _classCallCheck(this, NavItem_Help);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavItem_Help).apply(this, arguments));
  }

  _createClass(NavItem_Help, [{
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

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_1__["Consumer"], null, function (value) {
        var dispatch = value.dispatch,
            items = value.items;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "Dropdown-Btn"
        }, "Help"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "Dropdown-Content"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 4)
        }, "Found a Bug ? Send Message")));
      });
    }
  }]);

  return NavItem_Help;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NavItem_Help);

/***/ })

})
//# sourceMappingURL=index.js.0a0782560e29595a1b82.hot-update.js.map