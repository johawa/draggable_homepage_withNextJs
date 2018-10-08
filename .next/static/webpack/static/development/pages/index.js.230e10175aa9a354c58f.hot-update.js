webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./container/OS/OS.js":
/*!****************************!*\
  !*** ./container/OS/OS.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/lib/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/lib/index.js");
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
      console.log(item, 'drop');
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
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Apps_Paint_Paint__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Apps_Spotify_Spotify__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["Consumer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
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
            lineNumber: 170
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
              lineNumber: 173
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
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
              lineNumber: 185
            },
            __self: this
          }, //THE APP TO OUTPUT
          Apps[item[3]])));
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
              lineNumber: 228
            },
            __self: this
          }, item.name);
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_DragAndDropLogic_DropTarget__WEBPACK_IMPORTED_MODULE_8__["default"], {
          moveBox: function moveBox(item, left, top) {
            return _this2.newLoaction(item, left, top, items, dispatch);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          },
          __self: this
        }));
      });
    }
  }]);

  return Desktop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DragDropContext"])(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_2___default.a)(Desktop));

/***/ })

})
//# sourceMappingURL=index.js.230e10175aa9a354c58f.hot-update.js.map