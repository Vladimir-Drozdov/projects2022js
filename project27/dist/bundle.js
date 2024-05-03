/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("const a = 3;\r\nconst b = 4;\r\nconst c = 5;\r\nconsole.log(Array.of(a, b, c));\r\nconst t = Array.of(a, b, c);\r\nfor (const value of t) {\r\n   continue;\r\n   console.log(value);\r\n\r\n}\r\nconst r = {\r\n   t: 3,\r\n   get lev() {\r\n      return this.t;\r\n   },\r\n   level() {\r\n      return this.t;\r\n   },\r\n   set lev2(newt) {\r\n      this.t = newt;\r\n   }\r\n}\r\nconsole.log(r.lev, r.level());\r\nr.lev2 = 4;\r\nconsole.log(r.lev, r.level(), r.t);\r\n\r\nconst plenty = new Set([3, 4, 5, 'nape']);\r\nconsole.log(plenty);\r\nconsole.log(plenty.has(3));//true\r\nconst weak = new WeakSet();\r\nconst obj = { tt: 4 };\r\nweak.add(obj);\r\nconsole.log(weak.has(obj));\r\n//Map\r\nconst obj2 = { ed: 17 };\r\nconst mass = [1, 2, 3];\r\nconst te = 'rtfgh';\r\nconst re = 7;\r\nconst map = new Map([[obj2, mass], [te, re]]);\r\nfor (let value of map) {\r\n   console.log(`${value[0].ed} и ${value[1][0]}`);\r\n}\r\n///\r\nconst r2 = (a,b,c) => {\r\n   return Math.floor(Math.random() * (Math.max(a, b, c)));\r\n}\r\nconst jj = {\r\n   [r2(3,4,5)]:5,\r\n}\r\nconsole.log(jj); console.log(r2(7, 8, 90));\r\nconst ob = {\r\n   t: '5555',\r\n   tt: 666,\r\n   tt2() {\r\n      return 1;\r\n   }\r\n}\r\nfor (let key of Object.keys(ob)) {\r\n   console.log(typeof ob[key]);\r\n}\r\nconst ma = [1, 2, 3];\r\nfor (let key of ma.keys()) {\r\n   console.log(key);\r\n}\r\nObject.prototype.er2 = [3, 4, 5];\r\nconsole.log(ob.hasOwnProperty('t'));\r\nconsole.log(ob.hasOwnProperty('er'));\r\ndelete ob.t;\r\nconsole.log(ob.t);\r\n\r\nconst odfge = Object.fromEntries([[1, 2], ['t', 6]]);\r\nconsole.log(odfge);\r\nconsole.log(Object.entries(ob));\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;