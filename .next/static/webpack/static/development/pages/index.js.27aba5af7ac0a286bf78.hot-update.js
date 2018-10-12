webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        color: "#00FFC5"
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

/***/ })

})
//# sourceMappingURL=index.js.27aba5af7ac0a286bf78.hot-update.js.map