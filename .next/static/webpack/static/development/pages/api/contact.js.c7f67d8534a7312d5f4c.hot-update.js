webpackHotUpdate("static\\development\\pages\\api\\contact.js",{

/***/ "./pages/api/contact/index.js":
/*!************************************!*\
  !*** ./pages/api/contact/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_form_validator_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-form-validator-core */ "./node_modules/react-form-validator-core/lib/index.js");
/* harmony import */ var react_form_validator_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_form_validator_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Validator */ "./pages/api/contact/Validator.js");
/* harmony import */ var _TextareaValidator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextareaValidator */ "./pages/api/contact/TextareaValidator.js");
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







var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "runFormvalidation", function () {
      var result = _this.form.walk(_this.form.childs);

      _this.setState({
        FormValid: result
      });

      console.log(result); // result will be true or false
    });

    _this.state = {
      submitting: false,
      submitted: false,
      FormValid: false,
      email: "",
      message: "",
      name: ""
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "handleChangeName",
    value: function handleChangeName(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "handleChangeEmail",
    value: function handleChangeEmail(event) {
      this.setState({
        email: event.target.value
      });
    }
  }, {
    key: "handleChangeMessage",
    value: function handleChangeMessage(event) {
      this.setState({
        message: event.target.value
      });
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var _this2 = this;

      if (this.state.FormValid) {
        var _this$state = this.state,
            email = _this$state.email,
            message = _this$state.message,
            name = _this$state.name;
        fetch("/api/contact", {
          method: "post",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            message: message,
            name: name
          })
        }).then(function (res) {
          res.status === 200 ? _this2.setState({
            submitted: true
          }) : "";
        });
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_form_validator_core__WEBPACK_IMPORTED_MODULE_2__["ValidatorForm"], {
        className: "board-form",
        ref: function ref(r) {
          return _this3.form = r;
        },
        onChange: this.runFormvalidation,
        onSubmit: function onSubmit(e) {
          e.preventDefault();

          _this3.submitForm();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "f fw grid-row--s"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb1 pb05"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Name :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Validator__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "name",
        label: "Name",
        validators: ["required", "minStringLength: 2", "maxStringLength: 30"],
        errorMessages: ["Please tell me your name", "Your name is to Short", "Your name is to Long"],
        value: this.state.name,
        onChange: this.handleChangeName.bind(this)
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb1 pb05"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Email :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Validator__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "email",
        label: "Email",
        validators: ["required", "isEmail"],
        errorMessages: ["Please fill in a Email", "This is not a real Email-Address"],
        value: this.state.email,
        onChange: this.handleChangeEmail.bind(this)
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mb1 pb05"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Message :", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextareaValidator__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "message",
        label: "Message",
        validators: ["required", "minStringLength: 2", "maxStringLength: 500"],
        errorMessages: ["Please write a Message", "Your Message is too short", "Your Message is too long"],
        value: this.state.message,
        onChange: this.handleChangeMessage.bind(this)
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.FormValid ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit"
      }, "'Send'") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        disabled: true
      }, "'Send'"))));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Contact);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/api\\contact\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.c7f67d8534a7312d5f4c.hot-update.js.map