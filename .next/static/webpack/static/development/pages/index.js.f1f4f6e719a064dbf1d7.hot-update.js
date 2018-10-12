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
var _this = undefined;



var NavItem_Help = function NavItem_Help(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Consumer, null, function (value) {
    var dispatch = value.dispatch,
        items = value.items;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Dropdown"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "Dropdown-Btn"
    }, "Go"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Dropdown-Content"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: _this.openApp.bind(_this, dispatch, items, value, 0)
    }, "My Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: _this.openApp.bind(_this, dispatch, items, value, 1)
    }, "Paint"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#",
      onClick: _this.openApp.bind(_this, dispatch, items, value, 2)
    }, "Spotify")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem_Help);

/***/ })

})
//# sourceMappingURL=index.js.f1f4f6e719a064dbf1d7.hot-update.js.map