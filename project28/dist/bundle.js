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
/***/ (function() {

eval("class Red{\r\n   constructor(a, b, c) {\r\n      this.re = a;\r\n      this.re2 = b;\r\n      this.re3 = c;\r\n   }\r\n   re4 = 5;\r\n   re5 = 6;\r\n   say() {\r\n      console.log(689)\r\n   }\r\n   static re6 = 'fr0';\r\n   static hello() {\r\n      console.log('hi');\r\n   }\r\n   static thi() { return new this(1,2,3) };\r\n}\r\nconst black = new Red('t', 'tt', 'ttt');\r\nconsole.log(black);\r\nconsole.log(black.re4);\r\nconsole.log(black.re5);\r\nRed.hello();\r\nconsole.log(Red.re6);\r\nlet gu = Red.thi();\r\nconsole.log(gu);\r\n//Функция-конструктор\r\nconsole.log(4);\r\nconst Constr = function (first,second) {\r\n   this.first = first;\r\n   this.second = second;\r\n}\r\nConstr.prototype.write = function () {\r\n   console.log(333);\r\n}\r\nconst ex = new Constr('tt', 'yy');\r\nconsole.log(ex);\r\nconsole.log(1);\r\nconsole.log(parseInt(`111ABCDEFG`, 16));\r\n\r\n//this,bind,apply,call\r\nconst Obj = {\r\n   name: 1,\r\n    he(){\r\n       console.log(this.name);\r\n   }\r\n}\r\nconst obj2 = {\r\n   name:2\r\n}\r\nObj.he.bind(this)();\r\n//////\r\nconst button = document.querySelector('button');\r\n\r\nclass AboutButton{\r\n   constructor(elem) {\r\n      this.elem =elem;\r\n   }\r\n   setListener() {\r\n      \r\n      this.elem.addEventListener('click', this.onButton)\r\n   }\r\n   onButton(){\r\n      //e.preventDefault();\r\n      console.log(1);\r\n   }\r\n  \r\n}\r\n\r\nconst but = new AboutButton(button);\r\nbut.setListener();\r\nclass Ed{\r\n   #tt;\r\n   constructor(first2,second){\r\n      this.first = first2;\r\n      this.second = second;\r\n   }\r\n   say() {\r\n      console.log(5);\r\n   }\r\n}\r\nclass Ed2 extends Ed{\r\n   #rr;\r\n   constructor(first, second) {\r\n      super(first, second);   \r\n   }\r\n   fun() {\r\n      super.say();\r\n   }\r\n   set rr(rr) {\r\n      this.#rr = rr;\r\n   }\r\n   get rr2() {\r\n      return this.#rr;\r\n   }\r\n}\r\nconst ed3 = new Ed2(1,2); ed3.fun();\r\ned3.rr = 4; console.log(ed3.rr2); console.log(ed3.first);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;