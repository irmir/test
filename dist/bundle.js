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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _src_styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_js_get_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/js/get-list */ "./src/js/get-list.js");
/* harmony import */ var _src_js_create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/create-element */ "./src/js/create-element.js");
/* harmony import */ var _src_js_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/js/search */ "./src/js/search.js");
/* harmony import */ var _src_js_create_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/js/create-html */ "./src/js/create-html.js");
/* harmony import */ var _src_js_show_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/js/show-menu */ "./src/js/show-menu.js");
/* harmony import */ var _src_js_modal_window_operations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/js/modal-window-operations */ "./src/js/modal-window-operations.js");








(async function () {
  const wrapper = Object(_src_js_create_element__WEBPACK_IMPORTED_MODULE_2__["default"])('div', {
    'className': 'wrapper'
  });
  const buttonAdd = Object(_src_js_create_html__WEBPACK_IMPORTED_MODULE_4__["createButtonAdd"])();
  buttonAdd.addEventListener('click', _src_js_modal_window_operations__WEBPACK_IMPORTED_MODULE_6__["showModalWindow"]);
  const list = await Object(_src_js_get_list__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const ulEl = Object(_src_js_create_html__WEBPACK_IMPORTED_MODULE_4__["createListOnPage"])(list);
  ulEl.addEventListener('click', _src_js_show_menu__WEBPACK_IMPORTED_MODULE_5__["default"]);
  Object(_src_js_search__WEBPACK_IMPORTED_MODULE_3__["default"])(wrapper, ulEl, list);
  wrapper.appendChild(buttonAdd);
  wrapper.appendChild(ulEl);
  document.body.appendChild(wrapper);
})();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n    font-family: sans-serif;\n}\ninput {\n    border-radius: 5px;\n    box-shadow: none;\n    height: 24px;\n    padding: 0 5px;\n    box-sizing: border-box;\n    width: 250px;\n    border: 1px solid rgb(166, 166, 166);\n    width: auto;\n    outline:none;\n}\nbutton.add, button.cancel {\n    text-transform: uppercase;\n    border-radius: 4px;\n    font-size: 11px;\n    line-height: 11px;\n    padding: 5px 15px;\n    background: #d4d4d1;\n    font-weight: bold;\n    height: 24px;\n}\nbutton:hover {\n    cursor: pointer;\n    background-color: #a0a09e;\n}\nbutton {\n    border: none;\n    background: none;\n    padding: 0;\n    margin-left: 10px;\n}\nbutton:active, button:focus {\n    outline: none;\n  }\nli {\n    list-style-type: none;\n    line-height: 24px;\n    padding-right: 15px;\n}\n.wrapper {\n    padding-top: 40px;\n}\n.wrapper .add {\n    margin-left: 15px;\n}\n.wrapper .input-search{\n    margin-left: 40px;\n}\n.string-wrapper {\n    display: flex;\n}\n.string-wrapper button:hover {\n    background-color: transparent;\n}\n.menu {\n    cursor: pointer;\n    position: fixed;\n    padding: 10px;\n    font-size: 10px;\n    margin: 0;\n    background: white;\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n    width: 50px;\n    height: 54px;\n    border-radius: 4px;\n}\n.menu button {\n    margin: 0;\n}\n.menu li {\n    line-height: 18px;\n}\n.background {\n    width: 100%;\n    height: 100%;\n    background-color:rgba(0,0,0,0.1);\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 1;\n}\n.window {\n    position: relative;\n    top: 90px;\n    left: 40px;\n    width: 200px;\n    height: 100px;\n    text-align: center;\n    background-color: #ffffff;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    border-radius: 4px; \n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n    z-index: 2;\n}\n.window input {\n    width: 170px;\n}\n.window button {\n    display: block;\n    margin: 10px 10px;\n}\n.button-block {\n    display: flex;\n    justify-content: space-evenly;\n    margin-top: 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/js/create-element.js":
/*!**********************************!*\
  !*** ./src/js/create-element.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
function createElement(tagName, propertyes, attributes) {
  var elem = document.createElement(tagName);

  for (var item in propertyes) {
    elem[item] = propertyes[item];
  }

  for (var _item in attributes) {
    elem.setAttribute(_item, attributes[_item]);
  }

  return elem;
}

/***/ }),

/***/ "./src/js/create-html.js":
/*!*******************************!*\
  !*** ./src/js/create-html.js ***!
  \*******************************/
/*! exports provided: createButtonAdd, createListOnPage, createMenu, createModalWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonAdd", function() { return createButtonAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createListOnPage", function() { return createListOnPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMenu", function() { return createMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModalWindow", function() { return createModalWindow; });
/* harmony import */ var _create_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-list */ "./src/js/create-list.js");
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-element */ "./src/js/create-element.js");
/* harmony import */ var _modal_window_operations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window-operations */ "./src/js/modal-window-operations.js");





function createButtonAdd() {
  var buttonAdd = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('button', {
    'className': 'add',
    'innerText': 'add'
  }, {
    'id': 'butt-elem'
  });
  return buttonAdd;
}

function createListOnPage(arrList) {
  var ulEl = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('ul', null, {
    'id': 'ul-elem'
  });
  ulEl.appendChild(Object(_create_list__WEBPACK_IMPORTED_MODULE_0__["default"])(arrList));
  return ulEl;
}

function createMenu() {
  var ulMenu = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('ul', {
    'className': 'menu'
  });
  ulMenu.style.display = 'none';
  var options = [];
  var optionNames = ['change', 'delete', 'save'];
  optionNames.forEach(item => {
    var option = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('li');
    var innerButt = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('button', {
      'className': item,
      'innerText': item
    });
    option.appendChild(innerButt);

    if (innerButt.className === 'save') {
      innerButt.disabled = true;
    }

    options.push(option);
  });
  ulMenu.append(...options);
  document.body.appendChild(ulMenu);
  return ulMenu;
}

function createModalWindow() {
  var background = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('div', {
    'className': 'background'
  }, {
    'id': 'background'
  });
  background.style.display = 'none';
  var window = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('div', {
    'className': 'window'
  }, {
    'id': 'window'
  });
  background.appendChild(window);
  background.addEventListener('click', _modal_window_operations__WEBPACK_IMPORTED_MODULE_2__["closeWindow"]);
  var input = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('input');
  window.appendChild(input);
  var buttonBlock = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('div', {
    'className': 'button-block'
  });
  window.appendChild(buttonBlock);
  var buttonAdd = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('button', {
    'className': 'add',
    'innerText': 'add'
  });
  buttonAdd.addEventListener('click', _modal_window_operations__WEBPACK_IMPORTED_MODULE_2__["addText"]);
  buttonBlock.appendChild(buttonAdd);
  var buttonCancel = Object(_create_element__WEBPACK_IMPORTED_MODULE_1__["default"])('button', {
    'className': 'cancel',
    'innerText': 'cancel'
  });
  buttonCancel.addEventListener('click', _modal_window_operations__WEBPACK_IMPORTED_MODULE_2__["closeWindow"]);
  buttonBlock.appendChild(buttonCancel);
  document.body.appendChild(background);
  return background;
}



/***/ }),

/***/ "./src/js/create-list.js":
/*!*******************************!*\
  !*** ./src/js/create-list.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createList; });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/js/create-element.js");

function createList(arrList) {
  var fragment = new DocumentFragment();

  for (var i = 0; i < arrList.length; i++) {
    var spanEl = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('span');
    spanEl.innerText = arrList[i].title;
    var liEl = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('li', null, {
      'data-id': i
    });
    liEl.appendChild(spanEl);
    var buttonList = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('button', {
      'className': 'dots'
    }, {
      'data-id': i
    });
    buttonList.innerText = '...';
    var stringWrapper = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      'className': 'string-wrapper'
    });
    stringWrapper.appendChild(liEl);
    stringWrapper.appendChild(buttonList);
    fragment.appendChild(stringWrapper);
  }

  return fragment;
}

/***/ }),

/***/ "./src/js/get-list.js":
/*!****************************!*\
  !*** ./src/js/get-list.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getList; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getList() {
  return _getList.apply(this, arguments);
}

function _getList() {
  _getList = _asyncToGenerator(function* () {
    var response = yield fetch('https://jsonplaceholder.typicode.com/todos');
    var list = yield response.json();
    return list;
  });
  return _getList.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/modal-window-operations.js":
/*!*******************************************!*\
  !*** ./src/js/modal-window-operations.js ***!
  \*******************************************/
/*! exports provided: showModalWindow, addText, closeWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModalWindow", function() { return showModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addText", function() { return addText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeWindow", function() { return closeWindow; });
/* harmony import */ var _create_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-list */ "./src/js/create-list.js");
/* harmony import */ var _create_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-html */ "./src/js/create-html.js");



function showModalWindow() {
  var modalWindow = Object(_create_html__WEBPACK_IMPORTED_MODULE_1__["createModalWindow"])();
  modalWindow.style.display = 'block';
}

function addText(event) {
  var text = event.target.parentNode.previousElementSibling.value;

  if (text.length === 0) {
    return alert('Please fill in the field');
  }

  var array = [];
  var obj = {};
  obj.title = text;
  array.push(obj);
  var ulEl = document.getElementById('ul-elem');
  ulEl.appendChild(Object(_create_list__WEBPACK_IMPORTED_MODULE_0__["default"])(array));
  closeWindow(event);
}

function closeWindow(event) {
  if (event.target.className === 'background') {
    return event.target.parentNode.removeChild(event.target);
  }

  if (event.target === event.currentTarget) {
    var window = event.target.parentNode.parentNode;
    window.parentNode.parentNode.removeChild(window.parentNode);
  }
}





/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return search; });
/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-element */ "./src/js/create-element.js");
/* harmony import */ var _create_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-list */ "./src/js/create-list.js");


function search(wrapper, ulEl, list) {
  var input = Object(_create_element__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    'className': 'input-search'
  });
  wrapper.appendChild(input);
  var search = debounce(function () {
    var newList = list.filter(function (item) {
      return item.title.startsWith(input.value);
    });
    var newUl = Object(_create_list__WEBPACK_IMPORTED_MODULE_1__["default"])(newList);
    ulEl.innerText = '';
    ulEl.appendChild(newUl);
  }, 500);
  input.addEventListener('input', search);

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  ;
  return;
}

/***/ }),

/***/ "./src/js/show-menu.js":
/*!*****************************!*\
  !*** ./src/js/show-menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showMenu; });
/* harmony import */ var _create_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-html */ "./src/js/create-html.js");

function showMenu(event) {
  var ulMenu = Object(_create_html__WEBPACK_IMPORTED_MODULE_0__["createMenu"])();
  var target = event.target;

  if (event.target.className === 'dots') {
    if (ulMenu.style.display === 'none') {
      var coord = target.getBoundingClientRect();
      ulMenu.style.cssText = "display: block!important; top: ".concat(coord.bottom, "px; left: ").concat(coord.left, "px");
    } else {
      ulMenu.style.cssText = "display:none";
    }

    var inputEl = document.createElement('input');

    ulMenu.onclick = function (event) {
      if (event.target.className === 'change') {
        var liEl = target.previousElementSibling;
        inputEl.value = liEl.innerText;

        var _coord = liEl.getBoundingClientRect();

        inputEl.style.width = "".concat(_coord.width, "px");
        var divEl = liEl.parentNode;
        divEl.insertBefore(inputEl, target);
        liEl.parentNode.removeChild(liEl);
        inputEl.focus();
        ulMenu.lastElementChild.firstElementChild.disabled = false;
        event.target.disabled = true;
        event.target.parentNode.nextElementSibling.firstElementChild.disabled = true;
      }

      if (event.target.className === 'save') {
        var newLi = document.createElement('li');
        var spanEl = document.createElement('span');
        spanEl.innerText = inputEl.value;
        newLi.style.width = "auto";
        newLi.append(spanEl);
        var _divEl = target.previousElementSibling.parentNode;

        _divEl.insertBefore(newLi, target);

        var existingInput = target.parentNode.firstElementChild;
        existingInput.parentNode.removeChild(existingInput);
        ulMenu.style.display = "none";
        event.target.disabled = true;
        var firstLi = ulMenu.firstElementChild;
        firstLi.firstElementChild.disabled = false;
        firstLi.nextElementSibling.firstElementChild.disabled = false;
      }

      if (event.target.className === 'delete') {
        var _liEl = target.previousElementSibling;

        _liEl.parentNode.parentNode.removeChild(_liEl.parentNode);

        ulMenu.style.display = "none";
      }
    };
  }
}

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jcmVhdGUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY3JlYXRlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NyZWF0ZS1saXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nZXQtbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kYWwtd2luZG93LW9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hvdy1tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2V0TGlzdCBmcm9tICcuL3NyYy9qcy9nZXQtbGlzdCc7XG5pbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL3NyYy9qcy9jcmVhdGUtZWxlbWVudCc7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc3JjL2pzL3NlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVCdXR0b25BZGQsIGNyZWF0ZUxpc3RPblBhZ2UgfSBmcm9tICcuL3NyYy9qcy9jcmVhdGUtaHRtbCc7XG5pbXBvcnQgc2hvd01lbnUgZnJvbSAnLi9zcmMvanMvc2hvdy1tZW51JztcbmltcG9ydCB7IHNob3dNb2RhbFdpbmRvdyB9IGZyb20gJy4vc3JjL2pzL21vZGFsLXdpbmRvdy1vcGVyYXRpb25zJztcblxuKGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAnY2xhc3NOYW1lJzogJ3dyYXBwZXInXG4gIH0pO1xuICBjb25zdCBidXR0b25BZGQgPSBjcmVhdGVCdXR0b25BZGQoKTtcbiAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsV2luZG93KTtcbiAgY29uc3QgbGlzdCA9IGF3YWl0IGdldExpc3QoKTtcbiAgY29uc3QgdWxFbCA9IGNyZWF0ZUxpc3RPblBhZ2UobGlzdCk7XG4gIHVsRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XG4gIHNlYXJjaCh3cmFwcGVyLCB1bEVsLCBsaXN0KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25BZGQpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHVsRWwpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufSkoKTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG5pbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTY2LCAxNjYsIDE2Nik7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICBvdXRsaW5lOm5vbmU7XFxufVxcbmJ1dHRvbi5hZGQsIGJ1dHRvbi5jYW5jZWwge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGQxO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGEwOWU7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbmJ1dHRvbjphY3RpdmUsIGJ1dHRvbjpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICB9XFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbn1cXG4ud3JhcHBlciB7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG4ud3JhcHBlciAuYWRkIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi53cmFwcGVyIC5pbnB1dC1zZWFyY2h7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xcbn1cXG4uc3RyaW5nLXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3RyaW5nLXdyYXBwZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5tZW51IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjEpO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1NHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi5tZW51IGJ1dHRvbiB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLm1lbnUgbGkge1xcbiAgICBsaW5lLWhlaWdodDogMThweDtcXG59XFxuLmJhY2tncm91bmQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsMC4xKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcbi53aW5kb3cge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogOTBweDtcXG4gICAgbGVmdDogNDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IFxcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMSk7XFxuICAgIHotaW5kZXg6IDI7XFxufVxcbi53aW5kb3cgaW5wdXQge1xcbiAgICB3aWR0aDogMTcwcHg7XFxufVxcbi53aW5kb3cgYnV0dG9uIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbn1cXG4uYnV0dG9uLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIHByb3BlcnR5ZXMsIGF0dHJpYnV0ZXMpIHtcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gIGZvciAodmFyIGl0ZW0gaW4gcHJvcGVydHllcykge1xuICAgIGVsZW1baXRlbV0gPSBwcm9wZXJ0eWVzW2l0ZW1dO1xuICB9XG5cbiAgZm9yICh2YXIgX2l0ZW0gaW4gYXR0cmlidXRlcykge1xuICAgIGVsZW0uc2V0QXR0cmlidXRlKF9pdGVtLCBhdHRyaWJ1dGVzW19pdGVtXSk7XG4gIH1cblxuICByZXR1cm4gZWxlbTtcbn0iLCJpbXBvcnQgY3JlYXRlTGlzdCBmcm9tICcuL2NyZWF0ZS1saXN0JztcbmltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuaW1wb3J0IHsgYWRkVGV4dCB9IGZyb20gJy4vbW9kYWwtd2luZG93LW9wZXJhdGlvbnMnO1xuaW1wb3J0IHsgY2xvc2VXaW5kb3cgfSBmcm9tICcuL21vZGFsLXdpbmRvdy1vcGVyYXRpb25zJztcblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uQWRkKCkge1xuICB2YXIgYnV0dG9uQWRkID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICdjbGFzc05hbWUnOiAnYWRkJyxcbiAgICAnaW5uZXJUZXh0JzogJ2FkZCdcbiAgfSwge1xuICAgICdpZCc6ICdidXR0LWVsZW0nXG4gIH0pO1xuICByZXR1cm4gYnV0dG9uQWRkO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaXN0T25QYWdlKGFyckxpc3QpIHtcbiAgdmFyIHVsRWwgPSBjcmVhdGVFbGVtZW50KCd1bCcsIG51bGwsIHtcbiAgICAnaWQnOiAndWwtZWxlbSdcbiAgfSk7XG4gIHVsRWwuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdChhcnJMaXN0KSk7XG4gIHJldHVybiB1bEVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICB2YXIgdWxNZW51ID0gY3JlYXRlRWxlbWVudCgndWwnLCB7XG4gICAgJ2NsYXNzTmFtZSc6ICdtZW51J1xuICB9KTtcbiAgdWxNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHZhciBvcHRpb25zID0gW107XG4gIHZhciBvcHRpb25OYW1lcyA9IFsnY2hhbmdlJywgJ2RlbGV0ZScsICdzYXZlJ107XG4gIG9wdGlvbk5hbWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgdmFyIG9wdGlvbiA9IGNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdmFyIGlubmVyQnV0dCA9IGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIHtcbiAgICAgICdjbGFzc05hbWUnOiBpdGVtLFxuICAgICAgJ2lubmVyVGV4dCc6IGl0ZW1cbiAgICB9KTtcbiAgICBvcHRpb24uYXBwZW5kQ2hpbGQoaW5uZXJCdXR0KTtcblxuICAgIGlmIChpbm5lckJ1dHQuY2xhc3NOYW1lID09PSAnc2F2ZScpIHtcbiAgICAgIGlubmVyQnV0dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gIH0pO1xuICB1bE1lbnUuYXBwZW5kKC4uLm9wdGlvbnMpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHVsTWVudSk7XG4gIHJldHVybiB1bE1lbnU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsV2luZG93KCkge1xuICB2YXIgYmFja2dyb3VuZCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAnY2xhc3NOYW1lJzogJ2JhY2tncm91bmQnXG4gIH0sIHtcbiAgICAnaWQnOiAnYmFja2dyb3VuZCdcbiAgfSk7XG4gIGJhY2tncm91bmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgdmFyIHdpbmRvdyA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAnY2xhc3NOYW1lJzogJ3dpbmRvdydcbiAgfSwge1xuICAgICdpZCc6ICd3aW5kb3cnXG4gIH0pO1xuICBiYWNrZ3JvdW5kLmFwcGVuZENoaWxkKHdpbmRvdyk7XG4gIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVdpbmRvdyk7XG4gIHZhciBpbnB1dCA9IGNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHdpbmRvdy5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHZhciBidXR0b25CbG9jayA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAnY2xhc3NOYW1lJzogJ2J1dHRvbi1ibG9jaydcbiAgfSk7XG4gIHdpbmRvdy5hcHBlbmRDaGlsZChidXR0b25CbG9jayk7XG4gIHZhciBidXR0b25BZGQgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgJ2NsYXNzTmFtZSc6ICdhZGQnLFxuICAgICdpbm5lclRleHQnOiAnYWRkJ1xuICB9KTtcbiAgYnV0dG9uQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVGV4dCk7XG4gIGJ1dHRvbkJsb2NrLmFwcGVuZENoaWxkKGJ1dHRvbkFkZCk7XG4gIHZhciBidXR0b25DYW5jZWwgPSBjcmVhdGVFbGVtZW50KCdidXR0b24nLCB7XG4gICAgJ2NsYXNzTmFtZSc6ICdjYW5jZWwnLFxuICAgICdpbm5lclRleHQnOiAnY2FuY2VsJ1xuICB9KTtcbiAgYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VXaW5kb3cpO1xuICBidXR0b25CbG9jay5hcHBlbmRDaGlsZChidXR0b25DYW5jZWwpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuICByZXR1cm4gYmFja2dyb3VuZDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQnV0dG9uQWRkLCBjcmVhdGVMaXN0T25QYWdlLCBjcmVhdGVNZW51LCBjcmVhdGVNb2RhbFdpbmRvdyB9OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gJy4vY3JlYXRlLWVsZW1lbnQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTGlzdChhcnJMaXN0KSB7XG4gIHZhciBmcmFnbWVudCA9IG5ldyBEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNwYW5FbCA9IGNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuRWwuaW5uZXJUZXh0ID0gYXJyTGlzdFtpXS50aXRsZTtcbiAgICB2YXIgbGlFbCA9IGNyZWF0ZUVsZW1lbnQoJ2xpJywgbnVsbCwge1xuICAgICAgJ2RhdGEtaWQnOiBpXG4gICAgfSk7XG4gICAgbGlFbC5hcHBlbmRDaGlsZChzcGFuRWwpO1xuICAgIHZhciBidXR0b25MaXN0ID0gY3JlYXRlRWxlbWVudCgnYnV0dG9uJywge1xuICAgICAgJ2NsYXNzTmFtZSc6ICdkb3RzJ1xuICAgIH0sIHtcbiAgICAgICdkYXRhLWlkJzogaVxuICAgIH0pO1xuICAgIGJ1dHRvbkxpc3QuaW5uZXJUZXh0ID0gJy4uLic7XG4gICAgdmFyIHN0cmluZ1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7XG4gICAgICAnY2xhc3NOYW1lJzogJ3N0cmluZy13cmFwcGVyJ1xuICAgIH0pO1xuICAgIHN0cmluZ1dyYXBwZXIuYXBwZW5kQ2hpbGQobGlFbCk7XG4gICAgc3RyaW5nV3JhcHBlci5hcHBlbmRDaGlsZChidXR0b25MaXN0KTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdHJpbmdXcmFwcGVyKTtcbiAgfVxuXG4gIHJldHVybiBmcmFnbWVudDtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMaXN0KCkge1xuICByZXR1cm4gX2dldExpc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2dldExpc3QoKSB7XG4gIF9nZXRMaXN0ID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qICgpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zJyk7XG4gICAgdmFyIGxpc3QgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH0pO1xuICByZXR1cm4gX2dldExpc3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJpbXBvcnQgY3JlYXRlTGlzdCBmcm9tICcuL2NyZWF0ZS1saXN0JztcbmltcG9ydCB7IGNyZWF0ZU1vZGFsV2luZG93IH0gZnJvbSAnLi9jcmVhdGUtaHRtbCc7XG5cbmZ1bmN0aW9uIHNob3dNb2RhbFdpbmRvdygpIHtcbiAgdmFyIG1vZGFsV2luZG93ID0gY3JlYXRlTW9kYWxXaW5kb3coKTtcbiAgbW9kYWxXaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGFkZFRleHQoZXZlbnQpIHtcbiAgdmFyIHRleHQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnZhbHVlO1xuXG4gIGlmICh0ZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBhbGVydCgnUGxlYXNlIGZpbGwgaW4gdGhlIGZpZWxkJyk7XG4gIH1cblxuICB2YXIgYXJyYXkgPSBbXTtcbiAgdmFyIG9iaiA9IHt9O1xuICBvYmoudGl0bGUgPSB0ZXh0O1xuICBhcnJheS5wdXNoKG9iaik7XG4gIHZhciB1bEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VsLWVsZW0nKTtcbiAgdWxFbC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0KGFycmF5KSk7XG4gIGNsb3NlV2luZG93KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VXaW5kb3coZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdiYWNrZ3JvdW5kJykge1xuICAgIHJldHVybiBldmVudC50YXJnZXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChldmVudC50YXJnZXQpO1xuICB9XG5cbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgIHZhciB3aW5kb3cgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHdpbmRvdy5wYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2luZG93LnBhcmVudE5vZGUpO1xuICB9XG59XG5cbmV4cG9ydCB7IHNob3dNb2RhbFdpbmRvdyB9O1xuZXhwb3J0IHsgYWRkVGV4dCB9O1xuZXhwb3J0IHsgY2xvc2VXaW5kb3cgfTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICcuL2NyZWF0ZS1lbGVtZW50JztcbmltcG9ydCBjcmVhdGVMaXN0IGZyb20gJy4vY3JlYXRlLWxpc3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VhcmNoKHdyYXBwZXIsIHVsRWwsIGxpc3QpIHtcbiAgdmFyIGlucHV0ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XG4gICAgJ2NsYXNzTmFtZSc6ICdpbnB1dC1zZWFyY2gnXG4gIH0pO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgdmFyIHNlYXJjaCA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbmV3TGlzdCA9IGxpc3QuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS50aXRsZS5zdGFydHNXaXRoKGlucHV0LnZhbHVlKTtcbiAgICB9KTtcbiAgICB2YXIgbmV3VWwgPSBjcmVhdGVMaXN0KG5ld0xpc3QpO1xuICAgIHVsRWwuaW5uZXJUZXh0ID0gJyc7XG4gICAgdWxFbC5hcHBlbmRDaGlsZChuZXdVbCk7XG4gIH0sIDUwMCk7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgc2VhcmNoKTtcblxuICBmdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgICB2YXIgdGltZW91dDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG5cbiAgICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uIGxhdGVyKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICAgIGlmIChjYWxsTm93KSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gIH1cblxuICA7XG4gIHJldHVybjtcbn0iLCJpbXBvcnQgeyBjcmVhdGVNZW51IH0gZnJvbSAnLi9jcmVhdGUtaHRtbCc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaG93TWVudShldmVudCkge1xuICB2YXIgdWxNZW51ID0gY3JlYXRlTWVudSgpO1xuICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnZG90cycpIHtcbiAgICBpZiAodWxNZW51LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdmFyIGNvb3JkID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdWxNZW51LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDsgdG9wOiBcIi5jb25jYXQoY29vcmQuYm90dG9tLCBcInB4OyBsZWZ0OiBcIikuY29uY2F0KGNvb3JkLmxlZnQsIFwicHhcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVsTWVudS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5Om5vbmVcIjtcbiAgICB9XG5cbiAgICB2YXIgaW5wdXRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cbiAgICB1bE1lbnUub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdjaGFuZ2UnKSB7XG4gICAgICAgIHZhciBsaUVsID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGlucHV0RWwudmFsdWUgPSBsaUVsLmlubmVyVGV4dDtcblxuICAgICAgICB2YXIgX2Nvb3JkID0gbGlFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpbnB1dEVsLnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQoX2Nvb3JkLndpZHRoLCBcInB4XCIpO1xuICAgICAgICB2YXIgZGl2RWwgPSBsaUVsLnBhcmVudE5vZGU7XG4gICAgICAgIGRpdkVsLmluc2VydEJlZm9yZShpbnB1dEVsLCB0YXJnZXQpO1xuICAgICAgICBsaUVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGlFbCk7XG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcbiAgICAgICAgdWxNZW51Lmxhc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLmZpcnN0RWxlbWVudENoaWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc05hbWUgPT09ICdzYXZlJykge1xuICAgICAgICB2YXIgbmV3TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB2YXIgc3BhbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuRWwuaW5uZXJUZXh0ID0gaW5wdXRFbC52YWx1ZTtcbiAgICAgICAgbmV3TGkuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcbiAgICAgICAgbmV3TGkuYXBwZW5kKHNwYW5FbCk7XG4gICAgICAgIHZhciBfZGl2RWwgPSB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5wYXJlbnROb2RlO1xuXG4gICAgICAgIF9kaXZFbC5pbnNlcnRCZWZvcmUobmV3TGksIHRhcmdldCk7XG5cbiAgICAgICAgdmFyIGV4aXN0aW5nSW5wdXQgPSB0YXJnZXQucGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgZXhpc3RpbmdJbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGV4aXN0aW5nSW5wdXQpO1xuICAgICAgICB1bE1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBldmVudC50YXJnZXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB2YXIgZmlyc3RMaSA9IHVsTWVudS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgZmlyc3RMaS5maXJzdEVsZW1lbnRDaGlsZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBmaXJzdExpLm5leHRFbGVtZW50U2libGluZy5maXJzdEVsZW1lbnRDaGlsZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgdmFyIF9saUVsID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgX2xpRWwucGFyZW50Tm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKF9saUVsLnBhcmVudE5vZGUpO1xuXG4gICAgICAgIHVsTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDckNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==