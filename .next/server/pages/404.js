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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/UiElements/Container/Container.styled.tsx":
/*!**************************************************************!*\
  !*** ./components/UiElements/Container/Container.styled.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ \"baseui\");\n/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ContainerArea = Object(baseui__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])('div', {\n  width: '100%',\n  maxWidth: '1080px',\n  paddingLeft: '15px',\n  paddingRight: '15px',\n  margin: '0 auto',\n  position: 'relative',\n  zIndex: 1,\n  '@media screen and (max-width: 1135px)': {\n    maxWidth: '920px'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContainerArea);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQ29udGFpbmVyL0NvbnRhaW5lci5zdHlsZWQudHN4PzkyM2EiXSwibmFtZXMiOlsiQ29udGFpbmVyQXJlYSIsInN0eWxlZCIsIndpZHRoIiwibWF4V2lkdGgiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpbiIsInBvc2l0aW9uIiwiekluZGV4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFFaEMsTUFBTUEsYUFBYSxHQUFHQyxxREFBTSxDQUFDLEtBQUssRUFBRTtFQUNuQ0MsS0FBSyxFQUFFLE1BQU07RUFDYkMsUUFBUSxFQUFFLFFBQVE7RUFDbEJDLFdBQVcsRUFBRSxNQUFNO0VBQ25CQyxZQUFZLEVBQUUsTUFBTTtFQUNwQkMsTUFBTSxFQUFFLFFBQVE7RUFDaEJDLFFBQVEsRUFBRSxVQUFVO0VBQ3BCQyxNQUFNLEVBQUUsQ0FBQztFQUVULHVDQUF1QyxFQUFFO0lBQ3hDTCxRQUFRLEVBQUU7RUFDWDtBQUNELENBQUMsQ0FBQztBQUVhSCw0RUFBYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVWlFbGVtZW50cy9Db250YWluZXIvQ29udGFpbmVyLnN0eWxlZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdHlsZWQgfSBmcm9tICdiYXNldWknO1xuXG5jb25zdCBDb250YWluZXJBcmVhID0gc3R5bGVkKCdkaXYnLCB7XG5cdHdpZHRoOiAnMTAwJScsXG5cdG1heFdpZHRoOiAnMTA4MHB4Jyxcblx0cGFkZGluZ0xlZnQ6ICcxNXB4Jyxcblx0cGFkZGluZ1JpZ2h0OiAnMTVweCcsXG5cdG1hcmdpbjogJzAgYXV0bycsXG5cdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHR6SW5kZXg6IDEsXG5cblx0J0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzVweCknOiB7XG5cdFx0bWF4V2lkdGg6ICc5MjBweCcsXG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyQXJlYTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UiElements/Container/Container.styled.tsx\n");

/***/ }),

/***/ "./components/UiElements/Container/Container.tsx":
/*!*******************************************************!*\
  !*** ./components/UiElements/Container/Container.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.styled */ \"./components/UiElements/Container/Container.styled.tsx\");\nvar _jsxFileName = \"/home/chouaib/code/learn/frontend/components/UiElements/Container/Container.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Container = ({\n  children\n}) => {\n  return __jsx(_Container_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 10\n    }\n  }, children);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQ29udGFpbmVyL0NvbnRhaW5lci50c3g/ZTkzYiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJjaGlsZHJlbiIsIl9fanN4IiwiQ29udGFpbmVyQXJlYSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDcUI7QUFFL0MsTUFBTUEsU0FBc0MsR0FBR0EsQ0FBQztFQUFFQztBQUFTLENBQUMsS0FBSztFQUMvRCxPQUFPQyxLQUFBLENBQUNDLHlEQUFhO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFFUixRQUF3QixDQUFDO0FBQ2xELENBQUM7QUFFY0Qsd0VBQVMiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQ29udGFpbmVyL0NvbnRhaW5lci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENvbnRhaW5lckFyZWEgZnJvbSAnLi9Db250YWluZXIuc3R5bGVkJztcblxuY29uc3QgQ29udGFpbmVyOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7fT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiA8Q29udGFpbmVyQXJlYT57Y2hpbGRyZW59PC9Db250YWluZXJBcmVhPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UiElements/Container/Container.tsx\n");

/***/ }),

/***/ "./components/UiElements/NotFound/NotFound.styled.tsx":
/*!************************************************************!*\
  !*** ./components/UiElements/NotFound/NotFound.styled.tsx ***!
  \************************************************************/
/*! exports provided: Title, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! baseui */ \"baseui\");\n/* harmony import */ var baseui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(baseui__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nconst NotFoundWrapper = Object(baseui__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])('div', {\n  width: '100%',\n  padding: '54px 15px',\n  textAlign: 'center'\n});\nconst Title = Object(baseui__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])('h2', ({\n  $theme\n}) => _objectSpread({}, $theme.typography.font950));\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundWrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VpRWxlbWVudHMvTm90Rm91bmQvTm90Rm91bmQuc3R5bGVkLnRzeD9jYjlhIl0sIm5hbWVzIjpbIk5vdEZvdW5kV3JhcHBlciIsInN0eWxlZCIsIndpZHRoIiwicGFkZGluZyIsInRleHRBbGlnbiIsIlRpdGxlIiwiJHRoZW1lIiwiX29iamVjdFNwcmVhZCIsInR5cG9ncmFwaHkiLCJmb250OTUwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUEsZUFBZSxHQUFHQyxxREFBTSxDQUFDLEtBQUssRUFBRTtFQUNwQ0MsS0FBSyxFQUFFLE1BQU07RUFDYkMsT0FBTyxFQUFFLFdBQVc7RUFDcEJDLFNBQVMsRUFBRTtBQUNiLENBQUMsQ0FBQztBQUVLLE1BQU1DLEtBQUssR0FBR0oscURBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUFFSztBQUFPLENBQUMsS0FBQUMsYUFBQSxLQUN4Q0QsTUFBTSxDQUFDRSxVQUFVLENBQUNDLE9BQU8sQ0FDNUIsQ0FBQztBQUVZVCw4RUFBZSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVWlFbGVtZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5zdHlsZWQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnYmFzZXVpJztcblxuY29uc3QgTm90Rm91bmRXcmFwcGVyID0gc3R5bGVkKCdkaXYnLCB7XG4gIHdpZHRoOiAnMTAwJScsXG4gIHBhZGRpbmc6ICc1NHB4IDE1cHgnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxufSk7XG5cbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZCgnaDInLCAoeyAkdGhlbWUgfSkgPT4gKHtcbiAgLi4uJHRoZW1lLnR5cG9ncmFwaHkuZm9udDk1MCxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmRXcmFwcGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UiElements/NotFound/NotFound.styled.tsx\n");

/***/ }),

/***/ "./components/UiElements/NotFound/NotFound.tsx":
/*!*****************************************************!*\
  !*** ./components/UiElements/NotFound/NotFound.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NotFound_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFound.styled */ \"./components/UiElements/NotFound/NotFound.styled.tsx\");\nvar _jsxFileName = \"/home/chouaib/code/learn/frontend/components/UiElements/NotFound/NotFound.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst NotFound = ({\n  title\n}) => {\n  return __jsx(_NotFound_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(_NotFound_styled__WEBPACK_IMPORTED_MODULE_1__[\"Title\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, title ? title : 'Page not found 😔'));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFound);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VpRWxlbWVudHMvTm90Rm91bmQvTm90Rm91bmQudHN4P2Q5YTQiXSwibmFtZXMiOlsiTm90Rm91bmQiLCJ0aXRsZSIsIl9fanN4IiwiTm90Rm91bmRXcmFwcGVyIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ2lDO0FBTTNELE1BQU1BLFFBQVEsR0FBR0EsQ0FBQztFQUFFQztBQUFxQixDQUFDLEtBQUs7RUFDN0MsT0FDRUMsS0FBQSxDQUFDQyx3REFBZTtJQUFBQyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDZFAsS0FBQSxDQUFDUSxzREFBSztJQUFBTixNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRVIsS0FBSyxHQUFHQSxLQUFLLEdBQUcsbUJBQTJCLENBQ3BDLENBQUM7QUFFdEIsQ0FBQztBQUVjRCx1RUFBUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvVWlFbGVtZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5vdEZvdW5kV3JhcHBlciwgeyBUaXRsZSB9IGZyb20gJy4vTm90Rm91bmQuc3R5bGVkJztcblxudHlwZSBOb3RGb3VuZFByb3BzID0ge1xuICB0aXRsZT86IHN0cmluZztcbn07XG5cbmNvbnN0IE5vdEZvdW5kID0gKHsgdGl0bGUgfTogTm90Rm91bmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxOb3RGb3VuZFdyYXBwZXI+XG4gICAgICA8VGl0bGU+e3RpdGxlID8gdGl0bGUgOiAnUGFnZSBub3QgZm91bmQg8J+YlCd9PC9UaXRsZT5cbiAgICA8L05vdEZvdW5kV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UiElements/NotFound/NotFound.tsx\n");

/***/ }),

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UiElements/Container/Container */ \"./components/UiElements/Container/Container.tsx\");\n/* harmony import */ var _components_UiElements_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/UiElements/NotFound/NotFound */ \"./components/UiElements/NotFound/NotFound.tsx\");\nvar _jsxFileName = \"/home/chouaib/code/learn/frontend/pages/404.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst NotFoundPage = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, \"404: Not found\")), __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }\n  }, __jsx(_components_UiElements_Container_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(_components_UiElements_NotFound_NotFound__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 6\n    }\n  }))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQudHN4PzA1ZGMiXSwibmFtZXMiOlsiTm90Rm91bmRQYWdlIiwiX19qc3giLCJSZWFjdCIsIkZyYWdtZW50IiwiSGVhZCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiQ29udGFpbmVyIiwiTm90Rm91bmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUVHO0FBQ3dDO0FBQ0g7QUFFbEUsTUFBTUEsWUFBMEIsR0FBR0EsQ0FBQSxLQUFNO0VBQ3hDLE9BQ0NDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNDRixLQUFBLENBQUNHLGdEQUFJO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNKVCxLQUFBO0lBQUFJLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFPLGdCQUFxQixDQUN2QixDQUFDLEVBQ1BULEtBQUE7SUFBQUksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ0NULEtBQUEsQ0FBQ1Usa0ZBQVM7SUFBQU4sTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1RULEtBQUEsQ0FBQ1csZ0ZBQVE7SUFBQVAsTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLENBQUUsQ0FDRCxDQUNQLENBQ0osQ0FBQztBQUVMLENBQUM7QUFFY1YsMkVBQVkiLCJmaWxlIjoiLi9wYWdlcy80MDQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL1VpRWxlbWVudHMvQ29udGFpbmVyL0NvbnRhaW5lcic7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9VaUVsZW1lbnRzL05vdEZvdW5kL05vdEZvdW5kJztcblxuY29uc3QgTm90Rm91bmRQYWdlOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+NDA0OiBOb3QgZm91bmQ8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PENvbnRhaW5lcj5cblx0XHRcdFx0XHQ8Tm90Rm91bmQgLz5cblx0XHRcdFx0PC9Db250YWluZXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/404.tsx\n");

/***/ }),

/***/ "baseui":
/*!*************************!*\
  !*** external "baseui" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"baseui\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYXNldWlcIj9iMmM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJhc2V1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhc2V1aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///baseui\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });