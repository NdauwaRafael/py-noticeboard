/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./noticeboard/frontend/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./noticeboard/frontend/src/components/App.js":
/*!****************************************************!*\
  !*** ./noticeboard/frontend/src/components/App.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/noticeboard/frontend/src/components/App.js: Unexpected token (30:47)\\n\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39mrender(\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mProvider\\u001b[39m store\\u001b[33m=\\u001b[39m{store}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 30 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mAlertProvider\\u001b[39m template\\u001b[33m=\\u001b[39m{\\u001b[33mAlertTemplate\\u001b[39m}\\u001b[33m,\\u001b[39m {\\u001b[33m...\\u001b[39malertOptions}\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                                               \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 31 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 32 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mAlertProvider\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 33 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mProvider\\u001b[39m \\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n    at Object.raise (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Object.unexpected (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5165:16)\\n    at Object.jsxParseIdentifier (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3350:12)\\n    at Object.jsxParseNamespacedName (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3360:23)\\n    at Object.jsxParseAttribute (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3443:22)\\n    at Object.jsxParseOpeningElementAfterName (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3464:28)\\n    at Object.jsxParseOpeningElementAt (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3457:17)\\n    at Object.jsxParseElementAt (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3489:33)\\n    at Object.jsxParseElementAt (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3505:32)\\n    at Object.jsxParseElement (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3558:17)\\n    at Object.parseExprAtom (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:3565:19)\\n    at Object.parseExprSubscripts (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5916:23)\\n    at Object.parseMaybeUnary (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Object.parseExprOps (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Object.parseMaybeConditional (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Object.parseMaybeAssign (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5703:21)\\n    at Object.parseExprListItem (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:6979:18)\\n    at Object.parseCallExpressionArguments (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:6123:22)\\n    at Object.parseSubscript (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:6018:29)\\n    at Object.parseSubscripts (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5937:19)\\n    at Object.parseExprSubscripts (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5926:17)\\n    at Object.parseMaybeUnary (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Object.parseExprOps (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Object.parseMaybeConditional (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Object.parseMaybeAssign (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5703:21)\\n    at Object.parseExpression (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:5651:23)\\n    at Object.parseStatementContent (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:7422:23)\\n    at Object.parseStatement (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:7293:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:7879:25)\\n    at Object.parseBlockBody (/Users/cytonn/Other_Work/Python/NOTICEBOARD_PROJECT/node_modules/@babel/parser/lib/index.js:7866:10)\");\n\n//# sourceURL=webpack:///./noticeboard/frontend/src/components/App.js?");

/***/ }),

/***/ "./noticeboard/frontend/src/index.js":
/*!*******************************************!*\
  !*** ./noticeboard/frontend/src/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./noticeboard/frontend/src/components/App.js\");\n\n\n//# sourceURL=webpack:///./noticeboard/frontend/src/index.js?");

/***/ })

/******/ });