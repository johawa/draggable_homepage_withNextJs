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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-typist");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAABZJREFUCB1jYMABGP8DAQ45EoVJNwoAprsH+7svb+MAAAAASUVORK5CYII="

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHg9IjEzOS40ODQiIHk9IjI0LjY0NSIgc3R5bGU9ImZpbGw6I0UwRTBEMzsiIHdpZHRoPSIzNzAuMjkzIiBoZWlnaHQ9IjQ2Mi43MTQiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMzMzNFNDg7IiBkPSJNNDU0LjM0NSwxMDAuMzkySDE5NC45MjNjLTQuODY1LDAtOC44MDktMy45NDMtOC44MDktOC44MDlzMy45NDQtOC44MDksOC44MDktOC44MDloMjU5LjQyMg0KCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzQ2My4xNTQsOTYuNDQ4LDQ1OS4yMTEsMTAwLjM5Miw0NTQuMzQ1LDEwMC4zOTJ6Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTQ1NC4zNDUsMTc2LjQ2NUgxOTQuOTIzYy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDkNCgkJaDI1OS40MjJjNC44NjYsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUM0NjMuMTU0LDE3Mi41MjIsNDU5LjIxMSwxNzYuNDY1LDQ1NC4zNDUsMTc2LjQ2NXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTQ1NC4zNDUsMjE0LjUwM2gtNTkuMjIyYy00Ljg2NiwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDMtOC44MDksOC44MDktOC44MDloNTkuMjIyDQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzQ2My4xNTQsMjEwLjU1OSw0NTkuMjExLDIxNC41MDMsNDU0LjM0NSwyMTQuNTAzeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1QzY2NzA7IiBkPSJNMzcwLjE4MiwyMTQuNTAzSDE5NC45MjNjLTQuODY1LDAtOC44MDktMy45NDMtOC44MDktOC44MDljMC00Ljg2NiwzLjk0NC04LjgwOSw4LjgwOS04LjgwOQ0KCQloMTc1LjI1OWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzM3OC45OSwyMTAuNTU5LDM3NS4wNDYsMjE0LjUwMywzNzAuMTgyLDIxNC41MDN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik00NTQuMzQ1LDI1Mi41NEgzMDkuNDVjLTQuODY2LDAtOC44MDktMy45NDMtOC44MDktOC44MDlzMy45NDMtOC44MDksOC44MDktOC44MDloMTQ0Ljg5Ng0KCQljNC44NjYsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOVM0NTkuMjExLDI1Mi41NCw0NTQuMzQ1LDI1Mi41NHoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTI4NS41OSwyNTIuNTRoLTkwLjY2OGMtNC44NjUsMC04LjgwOS0zLjk0My04LjgwOS04LjgwOXMzLjk0NC04LjgwOSw4LjgwOS04LjgwOWg5MC42NjgNCgkJYzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlTMjkwLjQ1NiwyNTIuNTQsMjg1LjU5LDI1Mi41NHoiLz4NCjwvZz4NCjxyZWN0IHg9IjEzOS40ODQiIHk9IjI0LjY0NSIgc3R5bGU9Im9wYWNpdHk6MC4xO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7IiB3aWR0aD0iMjU0LjU5NCIgaGVpZ2h0PSI0NjIuNzE0Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTQ1NC4zNDUsMzI4LjYxMkgyOTguNTQ1Yy00Ljg2NiwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDMtOC44MDksOC44MDktOC44MDkNCgkJaDE1NS44MDFjNC44NjYsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUM0NjMuMTU0LDMyNC42NjksNDU5LjIxMSwzMjguNjEyLDQ1NC4zNDUsMzI4LjYxMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojNUM2NjcwOyIgZD0iTTI2OC4xNzksMzI4LjYxMmgtNzMuMjU4Yy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDloNzMuMjU4DQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzI3Ni45ODgsMzI0LjY2OSwyNzMuMDQ1LDMyOC42MTIsMjY4LjE3OSwzMjguNjEyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM1QzY2NzA7IiBkPSJNNDU0LjM0NSwzNjYuNjQ3aC04NC4xNjRjLTQuODY2LDAtOC44MDktMy45NDMtOC44MDktOC44MDljMC00Ljg2NiwzLjk0My04LjgwOSw4LjgwOS04LjgwOWg4NC4xNjQNCgkJYzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlDNDYzLjE1NCwzNjIuNzA0LDQ1OS4yMTEsMzY2LjY0Nyw0NTQuMzQ1LDM2Ni42NDd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik0zNDAuNDgsMzY2LjY0N0gxOTQuOTIzYy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDlIMzQwLjQ4DQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzM0OS4yODksMzYyLjcwNCwzNDUuMzQ1LDM2Ni42NDcsMzQwLjQ4LDM2Ni42NDd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik00NTQuMzQ1LDQwNC42ODNIMTk0LjkyM2MtNC44NjUsMC04LjgwOS0zLjk0NC04LjgwOS04LjgwOWMwLTQuODY2LDMuOTQ0LTguODA5LDguODA5LTguODA5DQoJCWgyNTkuNDIyYzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlDNDYzLjE1NCw0MDAuNzM5LDQ1OS4yMTEsNDA0LjY4Myw0NTQuMzQ1LDQwNC42ODN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzVDNjY3MDsiIGQ9Ik0zNTcuMTY4LDQ0Mi43MThIMTk0LjkyM2MtNC44NjUsMC04LjgwOS0zLjk0My04LjgwOS04LjgwOWMwLTQuODY2LDMuOTQ0LTguODA5LDguODA5LTguODA5DQoJCWgxNjIuMjQ1YzQuODY2LDAsOC44MDksMy45NDMsOC44MDksOC44MDlDMzY1Ljk3Nyw0MzguNzc1LDM2Mi4wMzMsNDQyLjcxOCwzNTcuMTY4LDQ0Mi43MTh6Ii8+DQo8L2c+DQo8cGF0aCBzdHlsZT0iZmlsbDojMzMzRTQ4OyIgZD0iTTM0Ni45NjksMjMuNDljMC0xMi45MTktMTAuNTctMjMuNDktMjMuNDktMjMuNDlIMTk4LjA4N2MtMTIuOTE5LDAtMjMuNDksMTAuNTctMjMuNDksMjMuNDl2NDY1LjAyDQoJYzAsMTIuOTE5LDEwLjU3LDIzLjQ5LDIzLjQ5LDIzLjQ5aDEyNS4zOTJjMTIuOTE5LDAsMjMuNDktMTAuNTcsMjMuNDktMjMuNDlWMjMuNDl6Ii8+DQo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNENDkwMDA7IiBjeD0iMjYwLjc4NSIgY3k9IjQyMS44ODgiIHI9IjQ3LjY3NCIvPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojMzMzRTQ4OyIgY3g9IjI2MC43ODUiIGN5PSI0MjEuODg4IiByPSIyMC42NiIvPg0KPHJlY3QgeD0iMjA5LjY4MyIgeT0iNTAuNzM4IiBzdHlsZT0iZmlsbDojRTBFMEQzOyIgd2lkdGg9IjEwMi4yMDQiIGhlaWdodD0iMTk0LjQzNyIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzFFMjUyQjsiIGQ9Ik0yODMuMjkyLDExOS4xNzdIMjM4LjI3Yy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5YzAtNC44NjYsMy45NDQtOC44MDksOC44MDktOC44MDloNDUuMDIyDQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzI5Mi4xLDExNS4yMzMsMjg4LjE1OCwxMTkuMTc3LDI4My4yOTIsMTE5LjE3N3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMUUyNTJCOyIgZD0iTTI4My4yOTIsMTUwLjg4OEgyMzguMjdjLTQuODY1LDAtOC44MDktMy45NDMtOC44MDktOC44MDlzMy45NDQtOC44MDksOC44MDktOC44MDloNDUuMDIyDQoJCWM0Ljg2NiwwLDguODA5LDMuOTQzLDguODA5LDguODA5QzI5Mi4xLDE0Ni45NDQsMjg4LjE1OCwxNTAuODg4LDI4My4yOTIsMTUwLjg4OHoiLz4NCjwvZz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMwMDgyQ0E7IiBkPSJNMTc0LjU5NywyMy40OWMwLTEyLjkxOS0xMC41Ny0yMy40OS0yMy40OS0yMy40OUgyNS43MTNDMTIuNzk0LDAsMi4yMjMsMTAuNTcsMi4yMjMsMjMuNDl2NDY1LjAyDQoJYzAsMTIuOTE5LDEwLjU3LDIzLjQ5LDIzLjQ5LDIzLjQ5aDEyNS4zOTNjMTIuOTE5LDAsMjMuNDktMTAuNTcsMjMuNDktMjMuNDlWMjMuNDlIMTc0LjU5N3oiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q0OTAwMDsiIGN4PSI4OC40MDUiIGN5PSI0MjEuODg4IiByPSI0Ny42NzQiLz4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6IzMzM0U0ODsiIGN4PSI4OC40MDUiIGN5PSI0MjEuODg4IiByPSIyMC42NiIvPg0KPHJlY3QgeD0iMzcuMzA5IiB5PSI1MC43MzgiIHN0eWxlPSJmaWxsOiNFMEUwRDM7IiB3aWR0aD0iMTAyLjIwNCIgaGVpZ2h0PSIxOTQuNDM3Ii8+DQo8Zz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMUUyNTJCOyIgZD0iTTExMC45MiwxMTkuMTc3SDY1Ljg5N2MtNC44NjUsMC04LjgwOS0zLjk0My04LjgwOS04LjgwOWMwLTQuODY2LDMuOTQ0LTguODA5LDguODA5LTguODA5aDQ1LjAyMw0KCQljNC44NjUsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUMxMTkuNzI5LDExNS4yMzMsMTE1Ljc4NSwxMTkuMTc3LDExMC45MiwxMTkuMTc3eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMxRTI1MkI7IiBkPSJNMTEwLjkyLDE1MC44ODhINjUuODk3Yy00Ljg2NSwwLTguODA5LTMuOTQzLTguODA5LTguODA5czMuOTQ0LTguODA5LDguODA5LTguODA5aDQ1LjAyMw0KCQljNC44NjUsMCw4LjgwOSwzLjk0Myw4LjgwOSw4LjgwOUMxMTkuNzI5LDE0Ni45NDQsMTE1Ljc4NSwxNTAuODg4LDExMC45MiwxNTAuODg4eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzRDQUY1MDsiIGQ9Ik0yNTYsMEMxMTQuNjE1LDAsMCwxMTQuNjE1LDAsMjU2czExNC42MTUsMjU2LDI1NiwyNTZzMjU2LTExNC42MTUsMjU2LTI1Ng0KCUM1MTEuODQ3LDExNC42NzgsMzk3LjMyMiwwLjE1MywyNTYsMHoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMzNzQ3NEY7IiBkPSJNMzYyLjY2NywzNzMuMzMzYy0yLjE5Mi0wLjAwMy00LjMzLTAuNjgxLTYuMTIzLTEuOTQxYy02Mi43ODQtNDQuMTM5LTE2Ni42NzctNDYuNjM1LTIzNi44LTMwLjMzNg0KCQljLTUuNzM4LDEuMzM3LTExLjQ3My0yLjIzLTEyLjgxMS03Ljk2OGMtMS4zMzctNS43MzgsMi4yMy0xMS40NzMsNy45NjgtMTIuODExYzc0LjQ5Ni0xNy4zNjUsMTg1Ljc0OS0xNC4yMjksMjUzLjg2NywzMy42NjQNCgkJYzQuODE5LDMuMzg5LDUuOTc4LDEwLjA0MiwyLjU5LDE0Ljg2MUMzNjkuMzY3LDM3MS42MzMsMzY2LjEyNywzNzMuMzIyLDM2Mi42NjcsMzczLjMzM3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMzc0NzRGOyIgZD0iTTM5NC42NjcsMzA5LjMzM2MtMi4yMzUsMC4wMDEtNC40MTQtMC43MDEtNi4yMjktMi4wMDUNCgkJYy03Mi41MzMtNTIuMDMyLTE2MS4zNDQtNjUuMDQ1LTI3OS42MTYtNDAuODk2Yy01LjcyMSwxLjQwNi0xMS40OTgtMi4wOTItMTIuOTA0LTcuODEyYy0xLjQwNi01LjcyMSwyLjA5Mi0xMS40OTgsNy44MTItMTIuOTA0DQoJCWMwLjI3My0wLjA2NywwLjU0OC0wLjEyMywwLjgyNS0wLjE2OWMxMjQuNTQ0LTI1LjQyOSwyMTguNjY3LTExLjMyOCwyOTYuMzg0LDQ0LjQzN2M0Ljc4NCwzLjQzOCw1Ljg3NCwxMC4xMDQsMi40MzYsMTQuODg3DQoJCWMtMi4wMDUsMi43ODktNS4yMyw0LjQ0Mi04LjY2NSw0LjQ0MUwzOTQuNjY3LDMwOS4zMzN6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzM3NDc0RjsiIGQ9Ik00MjYuNjY3LDIyNGMtMi4xMzcsMC4wMDMtNC4yMjUtMC42MzYtNS45OTUtMS44MzVjLTkxLjY5MS02Mi4yNzItMjMwLjk3Ni02Mi42MTMtMzIxLjEwOS0zMC43ODQNCgkJYy01LjQ4NSwyLjE1LTExLjY3NC0wLjU1My0xMy44MjQtNi4wMzhjLTIuMTUtNS40ODUsMC41NTMtMTEuNjc0LDYuMDM4LTEzLjgyNGMwLjIxOC0wLjA4NSwwLjQzOC0wLjE2MywwLjY2MS0wLjIzNA0KCQljOTUuMTg5LTMzLjY2NCwyNDIuNjI0LTMzLjA0NSwzNDAuMjI0LDMzLjIxNmM0Ljg3OCwzLjMwMyw2LjE1NCw5LjkzNSwyLjg1MSwxNC44MTNDNDMzLjUyNSwyMjIuMjQ5LDQzMC4yMSwyMjQuMDA1LDQyNi42NjcsMjI0eiINCgkJLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDcwIDQ3MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcwIDQ3MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGQ0M3NTsiIGQ9Ik0xOTEuMjUsNTAuOXYyNUg0NDIuNWM2Ljg5MywwLDEyLjUtNS42MDcsMTIuNS0xMi41cy01LjYwNy0xMi41LTEyLjUtMTIuNUgxOTEuMjV6Ii8+DQoJPHJlY3QgeD0iMTAxLjI1IiB5PSI1MC45IiBzdHlsZT0iZmlsbDojOThEOUQ1OyIgd2lkdGg9Ijc1IiBoZWlnaHQ9IjI1Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzI3NEI2RDsiIGQ9Ik0zNy41LDg1LjljNy4yMTgsMCwyNi44NzYtMy4xMDMsNDguNzUtOC4zNzJWNDkuMjcyQzY0LjM3Niw0NC4wMDMsNDQuNzE4LDQwLjksMzcuNSw0MC45DQoJCUMyNS4wOTQsNDAuOSwxNSw1MC45OTQsMTUsNjMuNFMyNS4wOTQsODUuOSwzNy41LDg1Ljl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA4Mjk0NzsiIGQ9Ik0zNy41LDEwMC45YzEwLjE4OCwwLDM0LjEyMS00LjE5MSw1Ny4xODQtMTBINDQyLjVjMTUuMTYzLDAsMjcuNS0xMi4zMzcsMjcuNS0yNy41DQoJCXMtMTIuMzM3LTI3LjUtMjcuNS0yNy41SDk0LjY4NGMtMjMuMDYzLTUuODA5LTQ2Ljk5NS0xMC01Ny4xODQtMTBDMTYuODIyLDI1LjksMCw0Mi43MjMsMCw2My40UzE2LjgyMiwxMDAuOSwzNy41LDEwMC45eg0KCQkgTTM3LjUsNDAuOWM3LjIxOCwwLDI2Ljg3NiwzLjEwMyw0OC43NSw4LjM3MnYyOC4yNTZDNjQuMzc2LDgyLjc5Nyw0NC43MTgsODUuOSwzNy41LDg1LjlDMjUuMDk0LDg1LjksMTUsNzUuODA3LDE1LDYzLjQNCgkJUzI1LjA5NCw0MC45LDM3LjUsNDAuOXogTTQ1NSw2My40YzAsNi44OTMtNS42MDcsMTIuNS0xMi41LDEyLjVIMTkxLjI1di0yNUg0NDIuNUM0NDkuMzkzLDUwLjksNDU1LDU2LjUwOCw0NTUsNjMuNHogTTE3Ni4yNSw1MC45DQoJCXYyNWgtNzV2LTI1SDE3Ni4yNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjJFQkQ5OyIgZD0iTTQzMi41LDEzMC45aC0zOTVjLTEyLjQwNiwwLTIyLjUsMTAuMDk0LTIyLjUsMjIuNVY0MDYuNmMwLDEyLjQwNiwxMC4wOTQsMjIuNSwyMi41LDIyLjVoMzk1DQoJCWMxMi40MDYsMCwyMi41LTEwLjA5NCwyMi41LTIyLjVWMTUzLjRDNDU1LDE0MC45OTQsNDQ0LjkwNiwxMzAuOSw0MzIuNSwxMzAuOXogTTkzLjM1LDQxNC4xYy0zNC45MDMsMC02My4zLTI4LjM5Ni02My4zLTYzLjMNCgkJczI4LjM5Ni02My4zLDYzLjMtNjMuM2MxMC44ODEsMCwyMS42MjksMi44MjIsMzEuMDgzLDguMTYyYzMuNjA2LDIuMDM3LDQuODc5LDYuNjEyLDIuODQyLDEwLjIxOQ0KCQljLTAuMDgyLDAuMTQ2LTAuMTc1LDAuMjgtMC4yNjUsMC40MThjNC4wOTIsMy4xLDcuNzQxLDYuNzUsMTAuODQxLDEwLjg0MWMwLjEzOC0wLjA5LDAuMjczLTAuMTgzLDAuNDE4LTAuMjY1DQoJCWMzLjYwNy0yLjAzNiw4LjE4My0wLjc2NSwxMC4yMTksMi44NDJjNS4zNDEsOS40NTQsOC4xNjMsMjAuMjAzLDguMTYzLDMxLjA4M0MxNTYuNjUsMzg1LjcwMywxMjguMjU0LDQxNC4xLDkzLjM1LDQxNC4xeg0KCQkgTTkzLjM1LDI3Mi41Yy0zNC45MDMsMC02My4zLTI4LjM5Ni02My4zLTYzLjNzMjguMzk2LTYzLjMsNjMuMy02My4zYzM0LjkwNCwwLDYzLjMwMSwyOC4zOTYsNjMuMzAxLDYzLjMNCgkJUzEyOC4yNTQsMjcyLjUsOTMuMzUsMjcyLjV6IE0yMzUsNDE0LjFjLTM0LjkwMywwLTYzLjMtMjguMzk2LTYzLjMtNjMuM3MyOC4zOTYtNjMuMyw2My4zLTYzLjNzNjMuMywyOC4zOTYsNjMuMyw2My4zDQoJCVMyNjkuOTAzLDQxNC4xLDIzNSw0MTQuMXogTTIzNSwyNzIuNWMtMzQuOTAzLDAtNjMuMy0yOC4zOTYtNjMuMy02My4zczI4LjM5Ni02My4zLDYzLjMtNjMuM3M2My4zLDI4LjM5Niw2My4zLDYzLjMNCgkJUzI2OS45MDMsMjcyLjUsMjM1LDI3Mi41eiBNMzc2LjY1LDQxNC4xYy0zNC45MDQsMC02My4zMDEtMjguMzk2LTYzLjMwMS02My4zczI4LjM5Ni02My4zLDYzLjMwMS02My4zDQoJCWMzNC45MDMsMCw2My4zLDI4LjM5Niw2My4zLDYzLjNTNDExLjU1NCw0MTQuMSwzNzYuNjUsNDE0LjF6IE0zNzYuNjUsMjcyLjVjLTM0LjkwNCwwLTYzLjMwMS0yOC4zOTYtNjMuMzAxLTYzLjMNCgkJczI4LjM5Ni02My4zLDYzLjMwMS02My4zYzM0LjkwMywwLDYzLjMsMjguMzk2LDYzLjMsNjMuM1M0MTEuNTU0LDI3Mi41LDM3Ni42NSwyNzIuNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRjI0ODRCOyIgZD0iTTkzLjM1LDE2MC45Yy0yNi42MzMsMC00OC4zLDIxLjY2Ny00OC4zLDQ4LjNzMjEuNjY3LDQ4LjMsNDguMyw0OC4zczQ4LjMwMS0yMS42NjcsNDguMzAxLTQ4LjMNCgkJUzExOS45ODIsMTYwLjksOTMuMzUsMTYwLjl6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGNkUxRDsiIGQ9Ik0yMzUsMTYwLjljLTI2LjYzMywwLTQ4LjMsMjEuNjY3LTQ4LjMsNDguM3MyMS42NjcsNDguMyw0OC4zLDQ4LjNzNDguMy0yMS42NjcsNDguMy00OC4zDQoJCVMyNjEuNjMzLDE2MC45LDIzNSwxNjAuOXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZDQzc1OyIgZD0iTTM3Ni42NSwxNjAuOWMtMjYuNjMzLDAtNDguMzAxLDIxLjY2Ny00OC4zMDEsNDguM3MyMS42NjgsNDguMyw0OC4zMDEsNDguM3M0OC4zLTIxLjY2Nyw0OC4zLTQ4LjMNCgkJUzQwMy4yODMsMTYwLjksMzc2LjY1LDE2MC45eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMxODVGOEQ7IiBkPSJNMTI3LjAwOSwzMDYuM2MtMi4xNDYsMy4yNzktNi40OTEsNC4zNzgtOS45NTMsMi40MjNjLTcuMjA4LTQuMDcxLTE1LjQwNS02LjIyMy0yMy43MDYtNi4yMjMNCgkJYy0yNi42MzMsMC00OC4zLDIxLjY2Ny00OC4zLDQ4LjNzMjEuNjY3LDQ4LjMsNDguMyw0OC4zczQ4LjMwMS0yMS42NjcsNDguMzAxLTQ4LjNjMC04LjMwMS0yLjE1Mi0xNi40OTgtNi4yMjQtMjMuNzA2DQoJCWMtMS45NTUtMy40NjEtMC44NTYtNy44MDcsMi40MjMtOS45NTNDMTM0Ljc1LDMxMy4wNDksMTMxLjEsMzA5LjM5OSwxMjcuMDA5LDMwNi4zeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiM2REE4RDY7IiBkPSJNMjM1LDMwMi41Yy0yNi42MzMsMC00OC4zLDIxLjY2Ny00OC4zLDQ4LjNzMjEuNjY3LDQ4LjMsNDguMyw0OC4zczQ4LjMtMjEuNjY3LDQ4LjMtNDguMw0KCQlTMjYxLjYzMywzMDIuNSwyMzUsMzAyLjV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6Izk4RDlENTsiIGQ9Ik0zNzYuNjUsMzAyLjVjLTI2LjYzMywwLTQ4LjMwMSwyMS42NjctNDguMzAxLDQ4LjNzMjEuNjY4LDQ4LjMsNDguMzAxLDQ4LjNzNDguMy0yMS42NjcsNDguMy00OC4zDQoJCVM0MDMuMjgzLDMwMi41LDM3Ni42NSwzMDIuNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDgyOTQ3OyIgZD0iTTQzMi41LDExNS45aC0zOTVDMTYuODIyLDExNS45LDAsMTMyLjcyMywwLDE1My40VjQwNi42YzAsMjAuNjc4LDE2LjgyMiwzNy41LDM3LjUsMzcuNWgzOTUNCgkJYzIwLjY3OCwwLDM3LjUtMTYuODIyLDM3LjUtMzcuNVYxNTMuNEM0NzAsMTMyLjcyMyw0NTMuMTc4LDExNS45LDQzMi41LDExNS45eiBNNDU1LDQwNi42YzAsMTIuNDA2LTEwLjA5NCwyMi41LTIyLjUsMjIuNWgtMzk1DQoJCWMtMTIuNDA2LDAtMjIuNS0xMC4wOTQtMjIuNS0yMi41VjE1My40YzAtMTIuNDA2LDEwLjA5NC0yMi41LDIyLjUtMjIuNWgzOTVjMTIuNDA2LDAsMjIuNSwxMC4wOTQsMjIuNSwyMi41VjQwNi42eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwODI5NDc7IiBkPSJNOTMuMzUsMTQ1LjljLTM0LjkwMywwLTYzLjMsMjguMzk2LTYzLjMsNjMuM3MyOC4zOTYsNjMuMyw2My4zLDYzLjMNCgkJYzM0LjkwNCwwLDYzLjMwMS0yOC4zOTYsNjMuMzAxLTYzLjNTMTI4LjI1NCwxNDUuOSw5My4zNSwxNDUuOXogTTkzLjM1LDI1Ny41Yy0yNi42MzMsMC00OC4zLTIxLjY2Ny00OC4zLTQ4LjMNCgkJczIxLjY2Ny00OC4zLDQ4LjMtNDguM3M0OC4zMDEsMjEuNjY3LDQ4LjMwMSw0OC4zUzExOS45ODIsMjU3LjUsOTMuMzUsMjU3LjV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA4Mjk0NzsiIGQ9Ik0yMzUsMTQ1LjljLTM0LjkwMywwLTYzLjMsMjguMzk2LTYzLjMsNjMuM3MyOC4zOTYsNjMuMyw2My4zLDYzLjNzNjMuMy0yOC4zOTYsNjMuMy02My4zDQoJCVMyNjkuOTAzLDE0NS45LDIzNSwxNDUuOXogTTIzNSwyNTcuNWMtMjYuNjMzLDAtNDguMy0yMS42NjctNDguMy00OC4zczIxLjY2Ny00OC4zLDQ4LjMtNDguM3M0OC4zLDIxLjY2Nyw0OC4zLDQ4LjMNCgkJUzI2MS42MzMsMjU3LjUsMjM1LDI1Ny41eiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwODI5NDc7IiBkPSJNMzc2LjY1LDE0NS45Yy0zNC45MDQsMC02My4zMDEsMjguMzk2LTYzLjMwMSw2My4zczI4LjM5Niw2My4zLDYzLjMwMSw2My4zDQoJCWMzNC45MDMsMCw2My4zLTI4LjM5Niw2My4zLTYzLjNTNDExLjU1NCwxNDUuOSwzNzYuNjUsMTQ1Ljl6IE0zNzYuNjUsMjU3LjVjLTI2LjYzMywwLTQ4LjMwMS0yMS42NjctNDguMzAxLTQ4LjMNCgkJczIxLjY2OC00OC4zLDQ4LjMwMS00OC4zczQ4LjMsMjEuNjY3LDQ4LjMsNDguM1M0MDMuMjgzLDI1Ny41LDM3Ni42NSwyNTcuNXoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojMDgyOTQ3OyIgZD0iTTIzNSwyODcuNWMtMzQuOTAzLDAtNjMuMywyOC4zOTYtNjMuMyw2My4zczI4LjM5Niw2My4zLDYzLjMsNjMuM3M2My4zLTI4LjM5Niw2My4zLTYzLjMNCgkJUzI2OS45MDMsMjg3LjUsMjM1LDI4Ny41eiBNMjM1LDM5OS4xYy0yNi42MzMsMC00OC4zLTIxLjY2Ny00OC4zLTQ4LjNzMjEuNjY3LTQ4LjMsNDguMy00OC4zczQ4LjMsMjEuNjY3LDQ4LjMsNDguMw0KCQlTMjYxLjYzMywzOTkuMSwyMzUsMzk5LjF6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzA4Mjk0NzsiIGQ9Ik0zNzYuNjUsMjg3LjVjLTM0LjkwNCwwLTYzLjMwMSwyOC4zOTYtNjMuMzAxLDYzLjNzMjguMzk2LDYzLjMsNjMuMzAxLDYzLjMNCgkJYzM0LjkwMywwLDYzLjMtMjguMzk2LDYzLjMtNjMuM1M0MTEuNTU0LDI4Ny41LDM3Ni42NSwyODcuNXogTTM3Ni42NSwzOTkuMWMtMjYuNjMzLDAtNDguMzAxLTIxLjY2Ny00OC4zMDEtNDguMw0KCQlzMjEuNjY4LTQ4LjMsNDguMzAxLTQ4LjNzNDguMywyMS42NjcsNDguMyw0OC4zUzQwMy4yODMsMzk5LjEsMzc2LjY1LDM5OS4xeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiMwODI5NDc7IiBkPSJNMTM4LjI2OSwzMTYuODc1Yy0wLjE0NSwwLjA4Mi0wLjI4LDAuMTc1LTAuNDE4LDAuMjY1Yy0zLjI4LDIuMTQ3LTQuMzc5LDYuNDkzLTIuNDI0LDkuOTU0DQoJCWM0LjA3MSw3LjIwOCw2LjIyNCwxNS40MDUsNi4yMjQsMjMuNzA2YzAsMjYuNjMzLTIxLjY2OCw0OC4zLTQ4LjMwMSw0OC4zcy00OC4zLTIxLjY2Ny00OC4zLTQ4LjNzMjEuNjY3LTQ4LjMsNDguMy00OC4zDQoJCWM4LjMwMSwwLDE2LjQ5OCwyLjE1MSwyMy43MDYsNi4yMjNjMy40NjMsMS45NTYsNy44MDcsMC44NTYsOS45NTMtMi40MjNjMC4wOTEtMC4xMzksMC4xODMtMC4yNzMsMC4yNjUtMC40MTkNCgkJYzIuMDM3LTMuNjA2LDAuNzY1LTguMTgyLTIuODQyLTEwLjIxOWMtOS40NTQtNS4zNC0yMC4yMDItOC4xNjItMzEuMDgzLTguMTYyYy0zNC45MDMsMC02My4zLDI4LjM5Ni02My4zLDYzLjMNCgkJczI4LjM5Niw2My4zLDYzLjMsNjMuM2MzNC45MDQsMCw2My4zMDEtMjguMzk2LDYzLjMwMS02My4zYzAtMTAuODgtMi44MjItMjEuNjI5LTguMTYzLTMxLjA4Mw0KCQlDMTQ2LjQ1MSwzMTYuMTEsMTQxLjg3NiwzMTQuODM5LDEzOC4yNjksMzE2Ljg3NXoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("dom-to-image");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-live-clock");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports) {



/***/ }),
/* 22 */
/***/ (function(module, exports) {



/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("file-saver");

/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports) {



/***/ }),
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./context.js
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


var Context = external_react_default.a.createContext();

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

var context_Provider =
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
        color: "aqua"
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
        color: "yellow"
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
        color: "red"
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
      return external_react_default.a.createElement(Context.Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return Provider;
}(external_react_["Component"]);
var Consumer = Context.Consumer;
// EXTERNAL MODULE: ./css/App.css
var App = __webpack_require__(19);

// EXTERNAL MODULE: external "react-dnd-html5-backend"
var external_react_dnd_html5_backend_ = __webpack_require__(4);
var external_react_dnd_html5_backend_default = /*#__PURE__*/__webpack_require__.n(external_react_dnd_html5_backend_);

// EXTERNAL MODULE: external "react-dnd"
var external_react_dnd_ = __webpack_require__(1);

// EXTERNAL MODULE: ./css/Layout.css
var css_Layout = __webpack_require__(20);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__(7);

// EXTERNAL MODULE: ./css/AppOpenCloseAnimation.css
var AppOpenCloseAnimation = __webpack_require__(21);

// EXTERNAL MODULE: ./css/AppFrame.css
var AppFrame = __webpack_require__(22);

// EXTERNAL MODULE: ./static/DoubleLine.png
var DoubleLine = __webpack_require__(8);
var DoubleLine_default = /*#__PURE__*/__webpack_require__.n(DoubleLine);

// CONCATENATED MODULE: ./component/AppFrame/Toolbar.js
function Toolbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Toolbar_typeof = function _typeof(obj) { return typeof obj; }; } else { Toolbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Toolbar_typeof(obj); }

function Toolbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Toolbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Toolbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Toolbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Toolbar_defineProperties(Constructor, staticProps); return Constructor; }

function Toolbar_possibleConstructorReturn(self, call) { if (call && (Toolbar_typeof(call) === "object" || typeof call === "function")) { return call; } return Toolbar_assertThisInitialized(self); }

function Toolbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Toolbar_getPrototypeOf(o) { Toolbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Toolbar_getPrototypeOf(o); }

function Toolbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Toolbar_setPrototypeOf(subClass, superClass); }

function Toolbar_setPrototypeOf(o, p) { Toolbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Toolbar_setPrototypeOf(o, p); }




var Toolbar_Toolbar =
/*#__PURE__*/
function (_Component) {
  Toolbar_inherits(Toolbar, _Component);

  function Toolbar() {
    Toolbar_classCallCheck(this, Toolbar);

    return Toolbar_possibleConstructorReturn(this, Toolbar_getPrototypeOf(Toolbar).apply(this, arguments));
  }

  Toolbar_createClass(Toolbar, [{
    key: "closeAppFrame",
    value: function closeAppFrame() {
      console.log("close AppFrame");
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "app-toolbar",
        style: {
          backgroundImage: "url(".concat(DoubleLine_default.a, ")")
        }
      }, external_react_default.a.createElement("ul", {
        className: "app-controls"
      }, external_react_default.a.createElement("li", {
        className: "close",
        onClick: this.props.CloseClick
      }), external_react_default.a.createElement("li", {
        className: "minimise",
        onClick: this.props.MinimizeClick
      }), external_react_default.a.createElement("li", {
        className: "maximise"
      })), external_react_default.a.createElement("div", {
        className: "app-title"
      }, this.props.title));
    }
  }]);

  return Toolbar;
}(external_react_["Component"]);

/* harmony default export */ var AppFrame_Toolbar = (Toolbar_Toolbar);
// CONCATENATED MODULE: ./component/DragAndDropLogic/Item.js
function Item_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Item_typeof = function _typeof(obj) { return typeof obj; }; } else { Item_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Item_typeof(obj); }

function Item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Item_createClass(Constructor, protoProps, staticProps) { if (protoProps) Item_defineProperties(Constructor.prototype, protoProps); if (staticProps) Item_defineProperties(Constructor, staticProps); return Constructor; }

function Item_possibleConstructorReturn(self, call) { if (call && (Item_typeof(call) === "object" || typeof call === "function")) { return call; } return Item_assertThisInitialized(self); }

function Item_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Item_getPrototypeOf(o) { Item_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Item_getPrototypeOf(o); }

function Item_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Item_setPrototypeOf(subClass, superClass); }

function Item_setPrototypeOf(o, p) { Item_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Item_setPrototypeOf(o, p); }




var itemSource = {
  beginDrag: function beginDrag(props) {
    console.log(props.item);
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

var Item_Item =
/*#__PURE__*/
function (_Component) {
  Item_inherits(Item, _Component);

  function Item() {
    Item_classCallCheck(this, Item);

    return Item_possibleConstructorReturn(this, Item_getPrototypeOf(Item).apply(this, arguments));
  }

  Item_createClass(Item, [{
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

      console.log(minimized);
      return connectDragPreview && connectDragSource && connectDragPreview(external_react_default.a.createElement("div", {
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
        }
      }, connectDragSource(external_react_default.a.createElement("div", {
        className: "app-header"
      }, external_react_default.a.createElement(AppFrame_Toolbar, {
        CloseClick: this.props.CloseClick,
        MinimizeClick: this.props.MinimizeClick,
        title: item.name
      }), external_react_default.a.createElement("div", {
        className: "app-header__pattern"
      }))), external_react_default.a.createElement("div", {
        className: "app-frame-body".concat(minimized ? " minimized" : " normal"),
        style: {
          height: "80%"
        },
        onClick: this.props.clickAppBody
      }, this.props.children)));
    }
  }]);

  return Item;
}(external_react_["Component"]);

/* harmony default export */ var DragAndDropLogic_Item = (Object(external_react_dnd_["DragSource"])("item", itemSource, collect)(Item_Item));
// CONCATENATED MODULE: ./component/DragAndDropLogic/DropTarget.js
function DropTarget_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DropTarget_typeof = function _typeof(obj) { return typeof obj; }; } else { DropTarget_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DropTarget_typeof(obj); }

function DropTarget_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DropTarget_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DropTarget_createClass(Constructor, protoProps, staticProps) { if (protoProps) DropTarget_defineProperties(Constructor.prototype, protoProps); if (staticProps) DropTarget_defineProperties(Constructor, staticProps); return Constructor; }

function DropTarget_possibleConstructorReturn(self, call) { if (call && (DropTarget_typeof(call) === "object" || typeof call === "function")) { return call; } return DropTarget_assertThisInitialized(self); }

function DropTarget_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DropTarget_getPrototypeOf(o) { DropTarget_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DropTarget_getPrototypeOf(o); }

function DropTarget_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DropTarget_setPrototypeOf(subClass, superClass); }

function DropTarget_setPrototypeOf(o, p) { DropTarget_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DropTarget_setPrototypeOf(o, p); }



var DropTarget_itemSource = {
  drop: function drop(props, monitor, component) {
    var item = monitor.getItem();
    var delta = monitor.getDifferenceFromInitialOffset();
    var left = Math.round(item.left + delta.x);
    var top = Math.round(item.top + delta.y);
    return props.moveBox(item, left, top);
  }
};

function DropTarget_collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    item: monitor.getItem(),
    hovered: monitor.isOver()
  };
}

var DropTarget_Board =
/*#__PURE__*/
function (_Component) {
  DropTarget_inherits(Board, _Component);

  function Board() {
    DropTarget_classCallCheck(this, Board);

    return DropTarget_possibleConstructorReturn(this, DropTarget_getPrototypeOf(Board).apply(this, arguments));
  }

  DropTarget_createClass(Board, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          connectDropTarget = _this$props.connectDropTarget,
          item = _this$props.item,
          hovered = _this$props.hovered;
      return connectDropTarget(external_react_default.a.createElement("div", {
        className: "Board",
        style: {
          backgroundColor: hovered ? "grey" : "transparent"
        }
      }));
    }
  }]);

  return Board;
}(external_react_["Component"]);

/* harmony default export */ var DropTarget = (Object(external_react_dnd_["DropTarget"])("item", DropTarget_itemSource, DropTarget_collect)(DropTarget_Board));
// CONCATENATED MODULE: ./component/DesktopLogic/DesktopIcon/DesktopIcon.js


var DesktopIcon_desktopIcon = function desktopIcon(props) {
  var item = props.item,
      highlighted = props.highlighted;
  return external_react_default.a.createElement("div", {
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
    }
  }, external_react_default.a.createElement("div", {
    className: "App-Icon__SVG",
    style: {
      width: "70px",
      height: "70px",
      backgroundImage: "url(".concat(item.SVG, ")"),
      backgroundRepeat: "no-repeat"
    }
  }), external_react_default.a.createElement("div", {
    style: {
      backgroundColor: highlighted === item.id ? "#0004FF" : "transparent",
      color: highlighted === item.id ? "#F2F2FF" : "black",
      margin: "5px",
      marginTop: "8px",
      paddingLeft: "5px",
      paddingRight: "5px"
    }
  }, item.name));
};

/* harmony default export */ var DesktopIcon = (DesktopIcon_desktopIcon);
// EXTERNAL MODULE: ./static/portfolio.svg
var portfolio = __webpack_require__(9);
var portfolio_default = /*#__PURE__*/__webpack_require__.n(portfolio);

// EXTERNAL MODULE: ./static/spotify.svg
var spotify = __webpack_require__(10);
var spotify_default = /*#__PURE__*/__webpack_require__.n(spotify);

// EXTERNAL MODULE: ./static/watercolor.svg
var watercolor = __webpack_require__(11);
var watercolor_default = /*#__PURE__*/__webpack_require__.n(watercolor);

// CONCATENATED MODULE: ./component/Apps/Spotify/Spotify.js


var Spotify_Spotify = function Spotify(props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
    href: "https://spotify-login-backend.herokuapp.com/",
    target: "_blank"
  }, external_react_default.a.createElement("h3", null, "Go To Spotify App... Please dont mind the loading-time, its still running on a free Heroku Host"))));
};

/* harmony default export */ var Apps_Spotify_Spotify = (Spotify_Spotify);
// CONCATENATED MODULE: ./component/Apps/MyWork/MyWork.js


var MyWork_MyWork = function MyWork(props) {
  return external_react_default.a.createElement("div", null, "MyWork");
};

/* harmony default export */ var Apps_MyWork_MyWork = (MyWork_MyWork);
// EXTERNAL MODULE: external "dom-to-image"
var external_dom_to_image_ = __webpack_require__(12);
var external_dom_to_image_default = /*#__PURE__*/__webpack_require__.n(external_dom_to_image_);

// EXTERNAL MODULE: external "file-saver"
var external_file_saver_ = __webpack_require__(23);

// EXTERNAL MODULE: ./component/Apps/Paint/Paint.css
var Paint_Paint = __webpack_require__(24);

// CONCATENATED MODULE: ./component/Apps/Paint/Paint.js
function Paint_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Paint_typeof = function _typeof(obj) { return typeof obj; }; } else { Paint_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Paint_typeof(obj); }

function Paint_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Paint_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Paint_createClass(Constructor, protoProps, staticProps) { if (protoProps) Paint_defineProperties(Constructor.prototype, protoProps); if (staticProps) Paint_defineProperties(Constructor, staticProps); return Constructor; }

function Paint_possibleConstructorReturn(self, call) { if (call && (Paint_typeof(call) === "object" || typeof call === "function")) { return call; } return Paint_assertThisInitialized(self); }

function Paint_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Paint_getPrototypeOf(o) { Paint_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Paint_getPrototypeOf(o); }

function Paint_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Paint_setPrototypeOf(subClass, superClass); }

function Paint_setPrototypeOf(o, p) { Paint_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Paint_setPrototypeOf(o, p); }

 //Download Image




var amountCells = 625; //25 * 25

var colors = ["rgb(148, 29, 43)", "rgb(255, 229, 0)", "rgb(180, 143, 128)", "rgb(150, 187, 206)", "rgb(199, 197, 185)", "rgb(42, 69, 138)", "rgb(130, 129, 134)", "rgb(116, 116, 118)", "rgb(243, 253, 254)", "rgb(68, 72, 82)"];

var Paint_Cell = function Cell(props) {
  return external_react_default.a.createElement("div", {
    className: "GridCell cell".concat(props.nr),
    onClick: props.fill
  });
};

var Paint_Color = function Color(props) {
  return external_react_default.a.createElement("div", {
    className: "ColorCell",
    onClick: props.chooseColor,
    style: {
      backgroundColor: props.color,
      outline: props.choosen
    }
  });
};

var Paint_Button = function Button(props) {
  return external_react_default.a.createElement("button", {
    className: "button",
    onClick: props.ClickButton
  }, props.title);
};

var Paint_Paint_Paint =
/*#__PURE__*/
function (_React$Component) {
  Paint_inherits(Paint, _React$Component);

  function Paint() {
    var _this;

    Paint_classCallCheck(this, Paint);

    _this = Paint_possibleConstructorReturn(this, Paint_getPrototypeOf(Paint).call(this));
    _this.state = {
      lenght: new Array(amountCells).fill(0),
      currentColor: "white",
      reset: false
    };
    return _this;
  }

  Paint_createClass(Paint, [{
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
      external_dom_to_image_default.a.toBlob(document.getElementById("draw-wrapper")).then(function (blob) {
        window.saveAs(blob, "My_Art.png");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        id: "draw-wrapper"
      }, external_react_default.a.createElement("div", {
        className: "container",
        style: {
          backgroundColor: this.state.currentColor
        }
      }, this.state.lenght.map(function (item, index) {
        return external_react_default.a.createElement(Paint_Cell, {
          key: index,
          nr: _this2.state.reset ? "_afterreset_".concat(index) : index,
          fill: function fill(event) {
            return _this2.handleMouseClick(index, event);
          }
        });
      }))), external_react_default.a.createElement("div", {
        className: "colorpicker"
      }, colors.map(function (clr, index) {
        return external_react_default.a.createElement(Paint_Color, {
          key: index,
          color: clr,
          chooseColor: function chooseColor(event) {
            return _this2.changeColor(event);
          },
          choosen: _this2.state.currentColor === clr ? "5px solid lime" : null
        });
      })), external_react_default.a.createElement("div", {
        className: "button-box"
      }, external_react_default.a.createElement(Paint_Button, {
        ClickButton: function ClickButton(event) {
          return _this2.resteHanlder(event);
        },
        title: this.state.reset ? "RESET" : "BEGIN TO DRAW"
      })), external_react_default.a.createElement("div", {
        className: "button-box__save"
      }, external_react_default.a.createElement(Paint_Button, {
        ClickButton: function ClickButton(event) {
          return _this2.downloadLink(event);
        },
        title: "Download"
      })));
    }
  }]);

  return Paint;
}(external_react_default.a.Component);

/* harmony default export */ var Apps_Paint_Paint = (Paint_Paint_Paint);
// CONCATENATED MODULE: ./container/OS/OS.js
function OS_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OS_typeof = function _typeof(obj) { return typeof obj; }; } else { OS_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OS_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function OS_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OS_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OS_createClass(Constructor, protoProps, staticProps) { if (protoProps) OS_defineProperties(Constructor.prototype, protoProps); if (staticProps) OS_defineProperties(Constructor, staticProps); return Constructor; }

function OS_possibleConstructorReturn(self, call) { if (call && (OS_typeof(call) === "object" || typeof call === "function")) { return call; } return OS_assertThisInitialized(self); }

function OS_getPrototypeOf(o) { OS_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OS_getPrototypeOf(o); }

function OS_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) OS_setPrototypeOf(subClass, superClass); }

function OS_setPrototypeOf(o, p) { OS_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OS_setPrototypeOf(o, p); }

function OS_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OS_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





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
  SVG: portfolio_default.a
}, {
  id: 1,
  top: 190,
  left: 40,
  name: "Paint.exe",
  highlighted: false,
  SVG: watercolor_default.a
}, {
  id: 2,
  top: 340,
  left: 40,
  name: "Spotify.exe",
  highlighted: false,
  SVG: spotify_default.a
}];

var OS_Desktop =
/*#__PURE__*/
function (_Component) {
  OS_inherits(Desktop, _Component);

  function Desktop() {
    var _getPrototypeOf2;

    var _this;

    OS_classCallCheck(this, Desktop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = OS_possibleConstructorReturn(this, (_getPrototypeOf2 = OS_getPrototypeOf(Desktop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    OS_defineProperty(OS_assertThisInitialized(OS_assertThisInitialized(_this)), "state", {
      highlightedIconId: null
    });

    OS_defineProperty(OS_assertThisInitialized(OS_assertThisInitialized(_this)), "onDrop", function (item) {
      null;
    });

    OS_defineProperty(OS_assertThisInitialized(OS_assertThisInitialized(_this)), "newLoaction", function (item, left, top, items, dispatch) {
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

  OS_createClass(Desktop, [{
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
      var Apps = [external_react_default.a.createElement(Apps_MyWork_MyWork, null), external_react_default.a.createElement(Apps_Paint_Paint, null), external_react_default.a.createElement(Apps_Spotify_Spotify, null)];
      return external_react_default.a.createElement(Consumer, null, function (value) {
        var dispatch = value.dispatch,
            items = value.items,
            focusedFrameId = value.focusedFrameId;
        return external_react_default.a.createElement("div", {
          className: "Wrapper",
          id: "DesktopWrapper"
        }, items.map(function (item, index) {
          return external_react_default.a.createElement(external_react_transition_group_["CSSTransition"], {
            classNames: "fade",
            timeout: {
              enter: 700,
              exit: 700
            },
            key: item.id,
            unmountOnExit: true,
            mountOnEnter: true,
            in: item.visible
          }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(DragAndDropLogic_Item, {
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
            }
          }, //THE APP TO OUTPUT
          Apps[item.id])));
        }), AppIcons.map(function (item, index) {
          return external_react_default.a.createElement(DesktopIcon, {
            Click: _this2.highlightItem.bind(_this2, item),
            DoubleClick: _this2.openApp.bind(_this2, item, items, dispatch, value),
            highlighted: _this2.state.highlightedIconId,
            key: item.id,
            item: item,
            index: index
          }, item.name);
        }), external_react_default.a.createElement(DropTarget, {
          moveBox: function moveBox(item, left, top) {
            return _this2.newLoaction(item, left, top, items, dispatch);
          }
        }));
      });
    }
  }]);

  return Desktop;
}(external_react_["Component"]);

/* harmony default export */ var OS = (Object(external_react_dnd_["DragDropContext"])(external_react_dnd_html5_backend_default.a)(OS_Desktop));
// EXTERNAL MODULE: ./css/Background.css
var css_Background = __webpack_require__(25);

// CONCATENATED MODULE: ./component/DesktopLogic/Background/Background.js
function Background_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Background_typeof = function _typeof(obj) { return typeof obj; }; } else { Background_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Background_typeof(obj); }

function Background_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Background_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Background_createClass(Constructor, protoProps, staticProps) { if (protoProps) Background_defineProperties(Constructor.prototype, protoProps); if (staticProps) Background_defineProperties(Constructor, staticProps); return Constructor; }

function Background_possibleConstructorReturn(self, call) { if (call && (Background_typeof(call) === "object" || typeof call === "function")) { return call; } return Background_assertThisInitialized(self); }

function Background_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Background_getPrototypeOf(o) { Background_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Background_getPrototypeOf(o); }

function Background_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Background_setPrototypeOf(subClass, superClass); }

function Background_setPrototypeOf(o, p) { Background_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Background_setPrototypeOf(o, p); }





var Background_Background =
/*#__PURE__*/
function (_Component) {
  Background_inherits(Background, _Component);

  function Background() {
    Background_classCallCheck(this, Background);

    return Background_possibleConstructorReturn(this, Background_getPrototypeOf(Background).apply(this, arguments));
  }

  Background_createClass(Background, [{
    key: "render",
    value: function render() {
      var _this = this;

      return external_react_default.a.createElement(Consumer, null, function (value) {
        var background = value.background,
            counter = value.counter; //counter = 0 by default

        return external_react_default.a.createElement("div", {
          className: "Background",
          style: {
            background: background[counter]
          }
        }, _this.props.children);
      });
    }
  }]);

  return Background;
}(external_react_["Component"]);

/* harmony default export */ var DesktopLogic_Background_Background = (Background_Background);
// EXTERNAL MODULE: external "react-live-clock"
var external_react_live_clock_ = __webpack_require__(13);
var external_react_live_clock_default = /*#__PURE__*/__webpack_require__.n(external_react_live_clock_);

// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/NavItem_Help.js


var NavItem_Help_NavItem_Help = function NavItem_Help(props) {
  return external_react_default.a.createElement("div", {
    className: "Dropdown"
  }, external_react_default.a.createElement("button", {
    className: "Dropdown-Btn"
  }, "Help"), external_react_default.a.createElement("div", {
    className: "Dropdown-Content"
  }, external_react_default.a.createElement("a", {
    href: "#"
  }, "Send a Message")));
};

/* harmony default export */ var Navbar_NavItem_Help = (NavItem_Help_NavItem_Help);
// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/NavItem_View.js
function NavItem_View_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavItem_View_typeof = function _typeof(obj) { return typeof obj; }; } else { NavItem_View_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavItem_View_typeof(obj); }

function NavItem_View_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavItem_View_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavItem_View_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavItem_View_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavItem_View_defineProperties(Constructor, staticProps); return Constructor; }

function NavItem_View_possibleConstructorReturn(self, call) { if (call && (NavItem_View_typeof(call) === "object" || typeof call === "function")) { return call; } return NavItem_View_assertThisInitialized(self); }

function NavItem_View_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavItem_View_getPrototypeOf(o) { NavItem_View_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavItem_View_getPrototypeOf(o); }

function NavItem_View_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavItem_View_setPrototypeOf(subClass, superClass); }

function NavItem_View_setPrototypeOf(o, p) { NavItem_View_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavItem_View_setPrototypeOf(o, p); }




var NavItem_View_NavItem_View =
/*#__PURE__*/
function (_Component) {
  NavItem_View_inherits(NavItem_View, _Component);

  function NavItem_View() {
    NavItem_View_classCallCheck(this, NavItem_View);

    return NavItem_View_possibleConstructorReturn(this, NavItem_View_getPrototypeOf(NavItem_View).apply(this, arguments));
  }

  NavItem_View_createClass(NavItem_View, [{
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

      return external_react_default.a.createElement(Consumer, null, function (value) {
        var dispatch = value.dispatch,
            counter = value.counter,
            background = value.background;
        return external_react_default.a.createElement("div", {
          className: "Dropdown"
        }, external_react_default.a.createElement("button", {
          className: "Dropdown-Btn"
        }, "View"), external_react_default.a.createElement("div", {
          className: "Dropdown-Content"
        }, external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.goFullscreen.bind(_this)
        }, "Enter Fullscreen Mode"), external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.changeBackground.bind(_this, dispatch, counter, background)
        }, "Change Background")));
      });
    }
  }]);

  return NavItem_View;
}(external_react_["Component"]);

/* harmony default export */ var Navbar_NavItem_View = (NavItem_View_NavItem_View);
// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/NavItem_Go.js
function NavItem_Go_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavItem_Go_typeof = function _typeof(obj) { return typeof obj; }; } else { NavItem_Go_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavItem_Go_typeof(obj); }

function NavItem_Go_toConsumableArray(arr) { return NavItem_Go_arrayWithoutHoles(arr) || NavItem_Go_iterableToArray(arr) || NavItem_Go_nonIterableSpread(); }

function NavItem_Go_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function NavItem_Go_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function NavItem_Go_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function NavItem_Go_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavItem_Go_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavItem_Go_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavItem_Go_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavItem_Go_defineProperties(Constructor, staticProps); return Constructor; }

function NavItem_Go_possibleConstructorReturn(self, call) { if (call && (NavItem_Go_typeof(call) === "object" || typeof call === "function")) { return call; } return NavItem_Go_assertThisInitialized(self); }

function NavItem_Go_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavItem_Go_getPrototypeOf(o) { NavItem_Go_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavItem_Go_getPrototypeOf(o); }

function NavItem_Go_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavItem_Go_setPrototypeOf(subClass, superClass); }

function NavItem_Go_setPrototypeOf(o, p) { NavItem_Go_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavItem_Go_setPrototypeOf(o, p); }




var NavItem_Go_NavItem_Go =
/*#__PURE__*/
function (_Component) {
  NavItem_Go_inherits(NavItem_Go, _Component);

  function NavItem_Go() {
    NavItem_Go_classCallCheck(this, NavItem_Go);

    return NavItem_Go_possibleConstructorReturn(this, NavItem_Go_getPrototypeOf(NavItem_Go).apply(this, arguments));
  }

  NavItem_Go_createClass(NavItem_Go, [{
    key: "openApp",
    value: function openApp(dispatch, items, value, id) {
      value.lastOpenID = id;

      var updatedItems = NavItem_Go_toConsumableArray(items);

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

      return external_react_default.a.createElement(Consumer, null, function (value) {
        var dispatch = value.dispatch,
            items = value.items;
        return external_react_default.a.createElement("div", {
          className: "Dropdown"
        }, external_react_default.a.createElement("button", {
          className: "Dropdown-Btn"
        }, "Go"), external_react_default.a.createElement("div", {
          className: "Dropdown-Content"
        }, external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 0)
        }, "My Work"), external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 1)
        }, "Paint"), external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.openApp.bind(_this, dispatch, items, value, 2)
        }, "Spotify")));
      });
    }
  }]);

  return NavItem_Go;
}(external_react_["Component"]);

/* harmony default export */ var Navbar_NavItem_Go = (NavItem_Go_NavItem_Go);
// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/NavItem_Start.js
function NavItem_Start_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavItem_Start_typeof = function _typeof(obj) { return typeof obj; }; } else { NavItem_Start_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavItem_Start_typeof(obj); }

function NavItem_Start_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavItem_Start_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavItem_Start_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavItem_Start_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavItem_Start_defineProperties(Constructor, staticProps); return Constructor; }

function NavItem_Start_possibleConstructorReturn(self, call) { if (call && (NavItem_Start_typeof(call) === "object" || typeof call === "function")) { return call; } return NavItem_Start_assertThisInitialized(self); }

function NavItem_Start_getPrototypeOf(o) { NavItem_Start_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavItem_Start_getPrototypeOf(o); }

function NavItem_Start_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavItem_Start_setPrototypeOf(subClass, superClass); }

function NavItem_Start_setPrototypeOf(o, p) { NavItem_Start_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavItem_Start_setPrototypeOf(o, p); }

function NavItem_Start_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavItem_Start_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var NavItem_Start_NavItem_Start =
/*#__PURE__*/
function (_Component) {
  NavItem_Start_inherits(NavItem_Start, _Component);

  function NavItem_Start() {
    var _getPrototypeOf2;

    var _this;

    NavItem_Start_classCallCheck(this, NavItem_Start);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = NavItem_Start_possibleConstructorReturn(this, (_getPrototypeOf2 = NavItem_Start_getPrototypeOf(NavItem_Start)).call.apply(_getPrototypeOf2, [this].concat(args)));

    NavItem_Start_defineProperty(NavItem_Start_assertThisInitialized(NavItem_Start_assertThisInitialized(_this)), "state", {
      toggler: false
    });

    return _this;
  }

  NavItem_Start_createClass(NavItem_Start, [{
    key: "closeWindow",
    value: function closeWindow() {
      console.log("close window");
      window.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_default.a.createElement("div", {
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
        }
      }, external_react_default.a.createElement("button", {
        className: "Dropdown-Btn",
        style: {
          background: this.state.toggler ? "#B68282" : "linear-gradient(to right, #0099f7, #f11712)",
          backgroundSize: "150% 150%",
          backgroundPosition: "center",
          paddingRight: "45px",
          paddingLeft: "40px"
        }
      }, "Johannes Walenta"), external_react_default.a.createElement("div", {
        className: "Dropdown-Content",
        style: {
          width: "100%",
          textAlign: "start"
        }
      }, external_react_default.a.createElement("a", {
        style: {
          paddingLeft: "25px"
        },
        href: "#"
      }, " ", "About Me"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("a", {
        style: {
          paddingLeft: "25px"
        },
        href: "https://codepen.io/timebasher/",
        target: "_blank"
      }, " ", "CodePen"), external_react_default.a.createElement("a", {
        style: {
          paddingLeft: "25px"
        },
        href: "https://github.com/timebasher",
        target: "_blank"
      }, " ", "Github"), external_react_default.a.createElement("a", {
        style: {
          paddingLeft: "25px"
        },
        href: "#"
      }, " ", "Email"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("a", {
        style: {
          paddingLeft: "25px"
        },
        href: "#",
        onClick: this.closeWindow.bind(this)
      }, " ", "Shut Down")));
    }
  }]);

  return NavItem_Start;
}(external_react_["Component"]);

/* harmony default export */ var Navbar_NavItem_Start = (NavItem_Start_NavItem_Start);
// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/NavItem_AppTracker.js
function NavItem_AppTracker_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavItem_AppTracker_typeof = function _typeof(obj) { return typeof obj; }; } else { NavItem_AppTracker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavItem_AppTracker_typeof(obj); }

function NavItem_AppTracker_toConsumableArray(arr) { return NavItem_AppTracker_arrayWithoutHoles(arr) || NavItem_AppTracker_iterableToArray(arr) || NavItem_AppTracker_nonIterableSpread(); }

function NavItem_AppTracker_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function NavItem_AppTracker_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function NavItem_AppTracker_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function NavItem_AppTracker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavItem_AppTracker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavItem_AppTracker_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavItem_AppTracker_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavItem_AppTracker_defineProperties(Constructor, staticProps); return Constructor; }

function NavItem_AppTracker_possibleConstructorReturn(self, call) { if (call && (NavItem_AppTracker_typeof(call) === "object" || typeof call === "function")) { return call; } return NavItem_AppTracker_assertThisInitialized(self); }

function NavItem_AppTracker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavItem_AppTracker_getPrototypeOf(o) { NavItem_AppTracker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavItem_AppTracker_getPrototypeOf(o); }

function NavItem_AppTracker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavItem_AppTracker_setPrototypeOf(subClass, superClass); }

function NavItem_AppTracker_setPrototypeOf(o, p) { NavItem_AppTracker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavItem_AppTracker_setPrototypeOf(o, p); }




var NavItem_AppTracker_NavItem_AppTracker =
/*#__PURE__*/
function (_Component) {
  NavItem_AppTracker_inherits(NavItem_AppTracker, _Component);

  function NavItem_AppTracker() {
    NavItem_AppTracker_classCallCheck(this, NavItem_AppTracker);

    return NavItem_AppTracker_possibleConstructorReturn(this, NavItem_AppTracker_getPrototypeOf(NavItem_AppTracker).apply(this, arguments));
  }

  NavItem_AppTracker_createClass(NavItem_AppTracker, [{
    key: "closeAppHandler",
    value: function closeAppHandler(items, dispatch, title) {
      var updatedItems = NavItem_AppTracker_toConsumableArray(items);

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

      var title;
      var checker = false;
      return external_react_default.a.createElement(Consumer, null, function (value) {
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
            checker = true;
          } //Choose wich of the opened Apps are selected


          if (itemSelected.length > 0 && itemOpen.length > 0) {
            title = itemSelected[0].name;
            checker = true;
          } //none selected and none open


          if (itemSelected.length === 0 && itemOpen.length === 0) {
            title = "/C/Johannes-Walenta.html";
            checker = false;
          }
        }
        return external_react_default.a.createElement("div", {
          className: "Dropdown"
        }, external_react_default.a.createElement("button", {
          className: "Dropdown-Btn App_desc"
        }, title), checker ? external_react_default.a.createElement("div", {
          className: "Dropdown-Content"
        }, external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.closeAppHandler.bind(_this, items, dispatch, title)
        }, "Quit")) : external_react_default.a.createElement(external_react_default.a.Fragment, null));
      });
    }
  }]);

  return NavItem_AppTracker;
}(external_react_["Component"]);

/* harmony default export */ var Navbar_NavItem_AppTracker = (NavItem_AppTracker_NavItem_AppTracker);
// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/NavItem_File.js
function NavItem_File_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NavItem_File_typeof = function _typeof(obj) { return typeof obj; }; } else { NavItem_File_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NavItem_File_typeof(obj); }

function NavItem_File_toConsumableArray(arr) { return NavItem_File_arrayWithoutHoles(arr) || NavItem_File_iterableToArray(arr) || NavItem_File_nonIterableSpread(); }

function NavItem_File_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function NavItem_File_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function NavItem_File_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function NavItem_File_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NavItem_File_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NavItem_File_createClass(Constructor, protoProps, staticProps) { if (protoProps) NavItem_File_defineProperties(Constructor.prototype, protoProps); if (staticProps) NavItem_File_defineProperties(Constructor, staticProps); return Constructor; }

function NavItem_File_possibleConstructorReturn(self, call) { if (call && (NavItem_File_typeof(call) === "object" || typeof call === "function")) { return call; } return NavItem_File_assertThisInitialized(self); }

function NavItem_File_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NavItem_File_getPrototypeOf(o) { NavItem_File_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NavItem_File_getPrototypeOf(o); }

function NavItem_File_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NavItem_File_setPrototypeOf(subClass, superClass); }

function NavItem_File_setPrototypeOf(o, p) { NavItem_File_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NavItem_File_setPrototypeOf(o, p); }




var NavItem_File_NavItem_File =
/*#__PURE__*/
function (_Component) {
  NavItem_File_inherits(NavItem_File, _Component);

  function NavItem_File() {
    NavItem_File_classCallCheck(this, NavItem_File);

    return NavItem_File_possibleConstructorReturn(this, NavItem_File_getPrototypeOf(NavItem_File).apply(this, arguments));
  }

  NavItem_File_createClass(NavItem_File, [{
    key: "closeAllApps",
    value: function closeAllApps(dispatch, items, value) {
      var updatedItems = NavItem_File_toConsumableArray(items);

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

      return external_react_default.a.createElement(Consumer, null, function (value) {
        var dispatch = value.dispatch,
            items = value.items;
        return external_react_default.a.createElement("div", {
          className: "Dropdown"
        }, external_react_default.a.createElement("button", {
          className: "Dropdown-Btn"
        }, "File"), external_react_default.a.createElement("div", {
          className: "Dropdown-Content"
        }, external_react_default.a.createElement("a", {
          href: "#",
          onClick: _this.closeAllApps.bind(_this, dispatch, items, value)
        }, "Close All Apps")));
      });
    }
  }]);

  return NavItem_File;
}(external_react_["Component"]);

/* harmony default export */ var Navbar_NavItem_File = (NavItem_File_NavItem_File);
// EXTERNAL MODULE: ./css/Navbar.css
var css_Navbar = __webpack_require__(26);

// CONCATENATED MODULE: ./component/DesktopLogic/Navbar/Navbar.js
function Navbar_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Navbar_typeof = function _typeof(obj) { return typeof obj; }; } else { Navbar_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Navbar_typeof(obj); }

function Navbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Navbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Navbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Navbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Navbar_defineProperties(Constructor, staticProps); return Constructor; }

function Navbar_possibleConstructorReturn(self, call) { if (call && (Navbar_typeof(call) === "object" || typeof call === "function")) { return call; } return Navbar_assertThisInitialized(self); }

function Navbar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Navbar_getPrototypeOf(o) { Navbar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Navbar_getPrototypeOf(o); }

function Navbar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Navbar_setPrototypeOf(subClass, superClass); }

function Navbar_setPrototypeOf(o, p) { Navbar_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Navbar_setPrototypeOf(o, p); }











var Navbar_Navbar =
/*#__PURE__*/
function (_Component) {
  Navbar_inherits(Navbar, _Component);

  function Navbar() {
    Navbar_classCallCheck(this, Navbar);

    return Navbar_possibleConstructorReturn(this, Navbar_getPrototypeOf(Navbar).apply(this, arguments));
  }

  Navbar_createClass(Navbar, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("div", {
        className: "nav-Left"
      }, external_react_default.a.createElement(Navbar_NavItem_Start, null), external_react_default.a.createElement(Navbar_NavItem_AppTracker, null), external_react_default.a.createElement(Navbar_NavItem_File, null), external_react_default.a.createElement(Navbar_NavItem_Go, null), external_react_default.a.createElement(Navbar_NavItem_View, null), external_react_default.a.createElement(Navbar_NavItem_Help, null)), external_react_default.a.createElement("div", {
        className: "nav-Right"
      }, external_react_default.a.createElement(external_react_live_clock_default.a, {
        className: "clock"
      })));
    }
  }]);

  return Navbar;
}(external_react_["Component"]);

/* harmony default export */ var DesktopLogic_Navbar_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./hoc/Layout/Layout.js
function Layout_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout_typeof = function _typeof(obj) { return typeof obj; }; } else { Layout_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout_typeof(obj); }

function Layout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout_createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout_defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout_defineProperties(Constructor, staticProps); return Constructor; }

function Layout_possibleConstructorReturn(self, call) { if (call && (Layout_typeof(call) === "object" || typeof call === "function")) { return call; } return Layout_assertThisInitialized(self); }

function Layout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Layout_getPrototypeOf(o) { Layout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Layout_getPrototypeOf(o); }

function Layout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Layout_setPrototypeOf(subClass, superClass); }

function Layout_setPrototypeOf(o, p) { Layout_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Layout_setPrototypeOf(o, p); }









var Layout_Layout =
/*#__PURE__*/
function (_Component) {
  Layout_inherits(Layout, _Component);

  function Layout() {
    Layout_classCallCheck(this, Layout);

    return Layout_possibleConstructorReturn(this, Layout_getPrototypeOf(Layout).apply(this, arguments));
  }

  Layout_createClass(Layout, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(DesktopLogic_Background_Background, null, external_react_default.a.createElement("div", {
        className: "Container"
      }, external_react_default.a.createElement("nav", {
        className: "Navbar"
      }, external_react_default.a.createElement(DesktopLogic_Navbar_Navbar, null)), external_react_default.a.createElement("main", {
        className: "Main"
      }, external_react_default.a.createElement(OS, null))));
    }
  }]);

  return Layout;
}(external_react_["Component"]);

/* harmony default export */ var hoc_Layout_Layout = (Object(external_react_dnd_["DragDropContext"])(external_react_dnd_html5_backend_default.a)(Layout_Layout));
// EXTERNAL MODULE: external "react-typist"
var external_react_typist_ = __webpack_require__(3);
var external_react_typist_default = /*#__PURE__*/__webpack_require__.n(external_react_typist_);

// EXTERNAL MODULE: ./css/IntroAnimation.css
var IntroAnimation = __webpack_require__(27);

// CONCATENATED MODULE: ./component/IntroAnimation/IntroAnimation.js
function IntroAnimation_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { IntroAnimation_typeof = function _typeof(obj) { return typeof obj; }; } else { IntroAnimation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return IntroAnimation_typeof(obj); }

function IntroAnimation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function IntroAnimation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function IntroAnimation_createClass(Constructor, protoProps, staticProps) { if (protoProps) IntroAnimation_defineProperties(Constructor.prototype, protoProps); if (staticProps) IntroAnimation_defineProperties(Constructor, staticProps); return Constructor; }

function IntroAnimation_possibleConstructorReturn(self, call) { if (call && (IntroAnimation_typeof(call) === "object" || typeof call === "function")) { return call; } return IntroAnimation_assertThisInitialized(self); }

function IntroAnimation_getPrototypeOf(o) { IntroAnimation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return IntroAnimation_getPrototypeOf(o); }

function IntroAnimation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) IntroAnimation_setPrototypeOf(subClass, superClass); }

function IntroAnimation_setPrototypeOf(o, p) { IntroAnimation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return IntroAnimation_setPrototypeOf(o, p); }

function IntroAnimation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function IntroAnimation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var IntroAnimation_LoadingAnimation =
/*#__PURE__*/
function (_Component) {
  IntroAnimation_inherits(LoadingAnimation, _Component);

  function LoadingAnimation() {
    var _getPrototypeOf2;

    var _this;

    IntroAnimation_classCallCheck(this, LoadingAnimation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = IntroAnimation_possibleConstructorReturn(this, (_getPrototypeOf2 = IntroAnimation_getPrototypeOf(LoadingAnimation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    IntroAnimation_defineProperty(IntroAnimation_assertThisInitialized(IntroAnimation_assertThisInitialized(_this)), "state", {
      headerDone: false
    });

    IntroAnimation_defineProperty(IntroAnimation_assertThisInitialized(IntroAnimation_assertThisInitialized(_this)), "onHeaderTyped", function () {
      _this.setState({
        headerDone: true
      });
    });

    return _this;
  }

  IntroAnimation_createClass(LoadingAnimation, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "loadingAnimation-Wrapper"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "fakeMenu"
      }, external_react_default.a.createElement("div", {
        className: "fakeButtons fakeClose"
      }), external_react_default.a.createElement("div", {
        className: "fakeButtons fakeMinimize"
      }), external_react_default.a.createElement("div", {
        className: "fakeButtons fakeZoom"
      })), external_react_default.a.createElement("div", {
        className: "fakeScreen"
      }, external_react_default.a.createElement(external_react_typist_default.a, {
        avgTypingSpeed: 40,
        cursor: {
          hideWhenDone: true
        },
        onTypingDone: this.onHeaderTyped
      }, external_react_default.a.createElement("span", {
        className: "my-custom-class"
      }, ">\xA0 $ npm start")), external_react_default.a.createElement("br", null), this.state.headerDone ? external_react_default.a.createElement("span", {
        style: {
          color: "yellow"
        }
      }, ">\xA0 starting Emulator \xA0") : null, external_react_default.a.createElement(external_react_typist_default.a, {
        avgTypingSpeed: 40,
        startDelay: 1200,
        cursor: {
          show: false
        }
      }, external_react_default.a.createElement("br", null), external_react_default.a.createElement(external_react_typist_default.a.Delay, {
        ms: 200,
        cursor: {
          show: false
        }
      }), external_react_default.a.createElement("span", null, ">\xA0 ."), external_react_default.a.createElement(external_react_typist_default.a.Delay, {
        ms: 200,
        cursor: {
          show: false
        }
      }), external_react_default.a.createElement("span", null, "."), external_react_default.a.createElement(external_react_typist_default.a.Delay, {
        ms: 200,
        cursor: {
          show: false
        }
      }), external_react_default.a.createElement("span", null, ".")))));
    }
  }]);

  return LoadingAnimation;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./component/App.js
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//servers as App like app Component in React






var App_Wrapper =
/*#__PURE__*/
function (_Component) {
  App_inherits(Wrapper, _Component);

  function Wrapper() {
    var _getPrototypeOf2;

    var _this;

    App_classCallCheck(this, Wrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = App_possibleConstructorReturn(this, (_getPrototypeOf2 = App_getPrototypeOf(Wrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    App_defineProperty(App_assertThisInitialized(App_assertThisInitialized(_this)), "state", {
      loaded: false
    });

    return _this;
  }

  App_createClass(Wrapper, [{
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
      var loaded = this.state.loaded;
      return loaded ? external_react_default.a.createElement(context_Provider, null, external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(hoc_Layout_Layout, null))) : external_react_default.a.createElement(IntroAnimation_LoadingAnimation, null);
    }
  }]);

  return Wrapper;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./pages/index.js
function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }




var pages_Index =
/*#__PURE__*/
function (_Component) {
  pages_inherits(Index, _Component);

  function Index() {
    pages_classCallCheck(this, Index);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(Index).apply(this, arguments));
  }

  pages_createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(App_Wrapper, null);
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);