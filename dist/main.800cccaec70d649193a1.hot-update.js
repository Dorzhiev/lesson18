/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetimer"]("main",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n //timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('16 december 2020'); //menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); ////слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); ////калькулятор\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__.default)(100); /////send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n//# sourceURL=webpack://timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popupBtn = document.querySelectorAll('.popup-btn');\n  var popup = document.querySelector('.popup');\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        popup.style.display = 'none';\n      }\n    }\n  });\n  var popupContent = document.querySelector('.popup-content'),\n      popUp = document.querySelector('.popup'),\n      count = 0;\n\n  var opacityPopup = function opacityPopup() {\n    popUp.style.display = 'block'; // показать попап\n\n    if (screen.width > 768) {\n      // если ширина экрана больше заданного числа, то запустить анимацию\n      var start = Date.now(); // получить стартовое время анимации (в момент клика)\n\n      var timer = setInterval(function () {\n        var timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика\n\n        if (timePassed >= 800) {\n          clearInterval(timer); // если время достигло определенного числа удалить setInterval \n\n          return;\n        }\n\n        draw(timePassed); // отрисовка анимации \n      });\n\n      var draw = function draw(timePassed) {\n        var wContent = +getComputedStyle(popupContent).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )\n\n        wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали\n\n        popupContent.style.left = timePassed / 16 + '%'; // центрирование по горизонтали\n\n        popupContent.style.marginLeft = wContent; // центрирование по горизонтали\n      };\n    }\n  };\n\n  popupBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      opacityPopup();\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://timer/./src/modules/togglePopUp.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c2c506d6faafbbca1d72"
/******/ 	})();
/******/ 	
/******/ }
);