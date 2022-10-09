/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/burger/burger.js":
/*!************************************************!*\
  !*** ./src/blocks/components/burger/burger.js ***!
  \************************************************/
/***/ (function() {

var burgerMenu = document.getElementById('burger-menu');
burgerMenu.addEventListener('click', function () {
  var body = document.body.classList;
  var menu = burgerMenu.classList;

  if (!body.contains('menu-open')) {
    body.add('menu-open');
    menu.add('burger_active');
  } else {
    body.remove('menu-open');
    menu.remove('burger_active');
  }
});

/***/ }),

/***/ "./src/blocks/components/menu/menu.js":
/*!********************************************!*\
  !*** ./src/blocks/components/menu/menu.js ***!
  \********************************************/
/***/ (function() {

var navMenu = document.getElementById('menu');
var links = navMenu.getElementsByClassName('menu__link');
var menu = document.getElementById('burger-menu').classList;
var body = document.body.classList;
Array.from(links).forEach(function (link) {
  link.addEventListener('click', function () {
    body.remove('menu-open');
    menu.remove('burger_active');
  });
});

/***/ }),

/***/ "./src/blocks/components/select/select.js":
/*!************************************************!*\
  !*** ./src/blocks/components/select/select.js ***!
  \************************************************/
/***/ (function() {

var selectParent = document.getElementById('form-select');
var select = selectParent.getElementsByClassName('custom-select')[0];
var selected = selectParent.getElementsByClassName('custom-select__fake-selected')[0];
var selectValue = selectParent.getElementsByClassName('custom-select__value')[0]; // const options = selectParent.getElementsByClassName('custom-select__fake-options');

var optionsList = selectParent.getElementsByClassName('custom-select__fake-option');
var realSelect = selectParent.getElementsByClassName('custom-select__real')[0];
var processOpening = '';
var processClosing = '';
selected.addEventListener('click', function () {
  if (select.classList.contains('active')) {
    if (processOpening) clearTimeout(processOpening);
    select.classList.remove('active');
    processClosing = setTimeout(function () {
      select.classList.remove('opened');
    }, 500);
  } else {
    if (processClosing) clearTimeout(processClosing);
    select.classList.add('active');
    processOpening = setTimeout(function () {
      select.classList.add('opened');
    }, 500);
  }
});
Array.from(optionsList).forEach(function (option) {
  option.addEventListener('click', function () {
    var optionValue = this.getAttribute('data-value');
    var optionText = this.innerText;
    realSelect.value = optionValue;
    selectValue.innerHTML = optionText;
    selectValue.classList.remove('custom-select__value_disabled');
    select.classList.remove('active');
    select.classList.remove('opened');
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/form/form.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/form/form.js ***!
  \*****************************************/
/***/ (function() {

var percent = document.getElementById('form-percent');
var range = percent.getElementsByClassName('input-range__input')[0];
var label = percent.getElementsByClassName('input-range__label_percent')[0];
range.addEventListener('input', function () {
  label.innerHTML = this.value;
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/order/order.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/order/order.js ***!
  \*******************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/modules/settings/settings.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/settings/settings.js ***!
  \*************************************************/
/***/ (function() {

var _e = 'form__elements_';
var settings = document.getElementById('layout-settings');
var changeInputs = document.getElementById('change-inputs');
var changeCircle = document.getElementById('change-circle');
var form = document.getElementById('order-form');
var changeable = form.getElementsByClassName('form__changeable')[0];
var cloneChild = changeable.querySelector('.form__col:last-child');

var message = function message(text, display) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'log';

  switch (display) {
    case 'alert':
      {
        alert(text);
      }
      break;

    case 'console':
      {
        if (type == 'error') console.error(text);else if (type == 'warn') console.warn(text);else console.log(text);
      }
      break;

    case 'any':
    default:
      {
        alert(text);
        if (type == 'error') console.error(text);else if (type == 'warn') console.warn(text);else console.log(text);
      }
      break;
  }
};

var getRandomIntInclusive = function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

var getCurrentClassName = function getCurrentClassName() {
  return Array.from(changeable.classList).find(function (className) {
    if (className.indexOf(_e, 0) === 0) return className;
  });
};

var classRename = function classRename(value) {
  var className = getCurrentClassName();
  changeable.classList.remove(className);
  changeable.classList.add(_e + value);
};

var getCurrentCountElements = function getCurrentCountElements() {
  return +getFormElements().length;
};

var getFormElements = function getFormElements() {
  return Array.from(changeable.childNodes).filter(function (child) {
    return child.classList !== undefined;
  });
};

var getClassNumber = function getClassNumber(value) {
  //let f = arguments.callee.name;
  if (value % 12 == 0) {
    return 12;
  }

  value = value % 12 + 6;

  if (value > 12) {
    value = getClassNumber(value);
  }

  return value;
};

var createChildren = function createChildren() {
  var name = 'form-dynamic-field-';
  var typesList = ['time', 'date', 'number', 'tel', 'email', 'text', 'url', 'password']; // 'week' don't work on iOs
  // 'month' don't work on Firefox
  // 'datetime-local' too long

  if (cloneChild === null || !cloneChild) {
    console.error('The child was not cloned.');
    return false;
  }

  var random = getRandomIntInclusive(0, typesList.length - 1);
  var clone = cloneChild.cloneNode(true);
  var label = clone.childNodes[1];
  var input = label.childNodes[1];
  var n = getCurrentCountElements() + 1;
  clone.setAttribute('id', name + n);
  label.setAttribute('for', name + n);
  input.setAttribute('name', name + n);
  input.setAttribute('id', name + n);
  input.setAttribute('type', typesList[random]);
  input.setAttribute('placeholder', 'Укажите ' + typesList[random]);
  return changeable.appendChild(clone);
};

var addNewInput = function addNewInput(value) {
  var countNow = getCurrentCountElements();
  var needToAdd = value - countNow;

  for (var i = 0; i < needToAdd; i++) {
    var tryCreateNewEleemnt = createChildren();

    if (tryCreateNewEleemnt == null || !tryCreateNewEleemnt) {
      console.error('Failed to add element');
      return false;
    }

    ;
  }
};

var removeInputs = function removeInputs(leaveCount) {
  var allChildrens = getFormElements();
  var countChildrens = getCurrentCountElements();

  for (var i = 0; i < countChildrens; i++) {
    if (i > leaveCount - 1) {
      allChildrens[i].remove(this);
    }
  }
};

var changeClassName = function changeClassName(event) {
  var value = +this.value.replace(/[^0-9]/ig, '');

  if (!Number.isInteger(value)) {
    message('Not a number is specified', 'console', 'error');
    return false;
  } else if (changeable === null) {
    message('An element with the "form__changeable" class was not found', 'console', 'error');
    return false;
  }

  if (value > 99) {
    this.value = 99;
    message('Возможно, стоит разделить форму на несколько этапов/страниц заполнения формы? Пользователи не любят заполнять длинные формы. Сейчас рекмоендуется предлагать пользователям не больше 3-ёх пунктов заполнения формы. Четыре -- уже считается избыточным. Если их больше трёх -- их заполнение разбивают на несколько этапов (форм).', 'any', 'warn');
    return false;
  } else if (value < 1) {
    changeable.style.display = 'none';
    this.value = 0;
    return false;
  } else {
    changeable.style.display = '';
  }

  var current = getCurrentCountElements();

  if (value > current) {
    addNewInput(value);
  } else if (value < current) {
    removeInputs(value);
  }

  if (value > 12) {
    value = getClassNumber(value);
  }

  classRename(value);
};

settings.addEventListener('click', function () {
  settings.parentElement.classList.toggle('open');
}); //changeInputs.addEventListener('change', changeClassName);

changeInputs.oninput = changeInputs.oncut = changeInputs.oncopy = changeInputs.onpaste = changeClassName;

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/menu/menu */ "./src/blocks/components/menu/menu.js");
/* harmony import */ var _components_menu_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_menu_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %components%/burger/burger */ "./src/blocks/components/burger/burger.js");
/* harmony import */ var _components_burger_burger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_burger_burger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_select_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %components%/select/select */ "./src/blocks/components/select/select.js");
/* harmony import */ var _components_select_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_select_select__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_order_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/order/order */ "./src/blocks/modules/order/order.js");
/* harmony import */ var _modules_order_order__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_order_order__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/form/form */ "./src/blocks/modules/form/form.js");
/* harmony import */ var _modules_form_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_form_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_settings_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/settings/settings */ "./src/blocks/modules/settings/settings.js");
/* harmony import */ var _modules_settings_settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_settings_settings__WEBPACK_IMPORTED_MODULE_4__);






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");


}();
/******/ })()
;
//# sourceMappingURL=main.js.map