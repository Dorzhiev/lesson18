/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatetimer"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'что то пошло не так..',\n      loadMessage = 'Загрузка',\n      successMesage = 'Спасибо! Мы скоро с вами свяжемся';\n  var form = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.textContent = 'тут будет сообщение!';\n  statusMessage.style.cssText = 'font-size: 2rem;';\n  statusMessage.style.cssText = 'font-size: 2rem; color: white;';\n  form.forEach(function (item) {\n    return item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      item.appendChild(statusMessage); // добавляем к определенной форме сообщение\n\n      statusMessage.textContent = loadMessage;\n      var formData = new FormData(item); // записываем данные с определенной формы\n\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error('status network not 200');\n        }\n\n        statusMessage.textContent = successMesage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n\n          _toConsumableArray(document.querySelectorAll('input')).forEach(function (item) {\n            return item.value = '';\n          });\n        }, 3000);\n      }, function (error) {\n        statusMessage.textContent = errorMessage;\n        setTimeout(function () {\n          statusMessage.textContent = '';\n\n          _toConsumableArray(document.querySelectorAll('input')).forEach(function (item) {\n            return item.value = '';\n          });\n        }, 3000);\n      });\n    });\n  });\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body),\n      credentials: 'include',\n      cache: 'default'\n    });\n  };\n\n  var formPhone = document.querySelectorAll('.form-phone');\n  formPhone.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n\n      if (target.matches('input')) {\n        target.value = target.value.replace(/(?!^\\+)\\D/g, '');\n      }\n    });\n  });\n  var formName = document.querySelectorAll('.form-name');\n  formName.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n\n      if (target.matches('input')) {\n        target.value = target.value.replace(/(?![а-яА-Я])\\D|[0-9]/g, '');\n      }\n    });\n  });\n  var formMessage = document.querySelector('.mess');\n  formMessage.addEventListener('input', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/[^а-яА-Я\\s\\,\\.\\?\\!\\-\\;\\:]/g, '');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://timer/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "125f34a241da963ba728"
/******/ 	})();
/******/ 	
/******/ }
);