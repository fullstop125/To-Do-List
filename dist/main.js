"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_pack"] = self["webpackChunkweb_pack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.intro {\\n  margin-top: 15%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.data-input {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.data-input input {\\n  width: 300px;\\n  height: 40px;\\n  border-radius: 5px;\\n  border: 1px solid #ccc;\\n  padding: 0 5px;\\n}\\n\\n.refresh-btn {\\n  padding: 10px;\\n  color: black;\\n  cursor: pointer;\\n}\\n\\n.list-data {\\n  align-items: center;\\n  justify-content: center;\\n  list-style: none;\\n  width: 44%;\\n  margin-left: 40%;\\n  text-align: left;\\n}\\n\\n.list-data li {\\n  border-bottom: 0.5px solid #d9d8d8;\\n  width: 45%;\\n}\\n\\n.clear-data {\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n  justify-content: center;\\n}\\n\\n.list-mv-data {\\n  cursor: move;\\n  color: #9f9f9f;\\n}\\n\\n.item-checked:checked + span {\\n  text-decoration: line-through;\\n  color: #9f9f9f;\\n}\\n\\n.add-btn {\\n  padding: 10px;\\n  color: black;\\n  cursor: pointer;\\n  margin-right: -45px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web-pack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://web-pack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://web-pack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://web-pack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://web-pack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMyNewList\": () => (/* binding */ addMyNewList),\n/* harmony export */   \"clearMyList\": () => (/* binding */ clearMyList),\n/* harmony export */   \"deleteMyList\": () => (/* binding */ deleteMyList),\n/* harmony export */   \"displayMyList\": () => (/* binding */ displayMyList),\n/* harmony export */   \"setMyEventListeners\": () => (/* binding */ setMyEventListeners)\n/* harmony export */ });\n/* harmony import */ var _eventSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventSelector.js */ \"./src/eventSelector.js\");\n/* harmony import */ var _myList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myList.js */ \"./src/myList.js\");\n\n\nconst createToDo = (todo) => {\n  const divCont = document.createElement(\"div\");\n  const li = document.createElement(\"li\");\n  const checkMyClass = todo.completed === true ? \"marked\" : \"\";\n  const checkMyValue = todo.completed === true ? \"checked\" : \"\";\n  divCont.classList.add(\"div-container\");\n  li.classList.add(\"to-do-Element\");\n\n  li.innerHTML = `\n  <label class = \"task-label\">\n  <input type=\"checkbox\" class=\"checkbox\" ${checkMyValue}>\n  <input type=\"text\" class=\"task-description ${checkMyClass}\" value=\"${todo.description}\">\n  <input type = \" hidden\" class = \"\" value = \"${todo.id}\">\n  </label>\n  <i class=\"icon-ellipsis-vertical\"></i>\n  <i class=\"icon-trash\"></i>\n  `;\n  divCont.appendChild(li);\n  return divCont;\n};\nfunction setMyEventListeners() {\n  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.addNewElements)();\n  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.editMyListElements)();\n  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.deleteMyListElements)();\n  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllMyListElements)();\n  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.dragDropEventListener)();\n  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.listMyCompletedElements)();\n}\nconst displayMyList = (todos) => {\n  const listDisplay = document.querySelector(\".list-data\");\n  todos.forEach((todo) => {\n    const div = createToDo(todo);\n    listDisplay.appendChild(div);\n  });\n};\nfunction addMyNewList() {\n  const inputData = document.querySelector(\".task-input\");\n  const listDisplay = document.querySelector(\".list-data\");\n  let listData = [];\n  if (localStorage.getitem(\"todos\")) {\n    listData = JSON.parse(localStorage.getItem(\"todos\"));\n  }\n  listData.push(new _myList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](inputData.value, false, listData.length + 1));\n  inputData.value = \"\";\n  listDisplay.innerHTML = \"\";\n  displayMyList(listData);\n  setMyEventListeners();\n}\nfunction deleteMyList(e) {\n  const listDisplay = document.querySelector(\".list-data\");\n  const removeElement = e.target.parentNode.parentNode;\n  listDisplay.removeChild(removeElement);\n}\nfunction clearMyList() {\n  const listDisplay = document.querySelector(\".list-data\");\n  const removeList = document.querySelectorAll(\".marked\");\n\n  removeList.forEach((e) => {\n    const removeElement = e.parentNode.parentNode;\n    listDisplay.removeChild(removeElement);\n  });\n}\n \n\n//# sourceURL=webpack://web-pack/./src/addRemove.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction dropElements(dragElement, currentTask) {\n  const pastTask = currentTask;\n  const pastCont = currentTask.parentNode;\n  const newTask = dragElement;\n  const newCont = dragElement.parentNode;\n  pastCont.appendChild(newTask);\n  newCont.appendChild(pastTask);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropElements);\n\n//# sourceURL=webpack://web-pack/./src/drag.js?");

/***/ }),

/***/ "./src/embedMyList.js":
/*!****************************!*\
  !*** ./src/embedMyList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction checkIsComplete(e) {\n    e.target.completed = e.target.checked ;\n    if (e.target.completed === true) {\n        e.currentTarget.nextElementSibling.classList.add('marked');\n    } \n    else {\n        e.currentTarget.nextElementSibling.classList.remove('marked');\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkIsComplete);\n\n//# sourceURL=webpack://web-pack/./src/embedMyList.js?");

/***/ }),

/***/ "./src/eventSelector.js":
/*!******************************!*\
  !*** ./src/eventSelector.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewElements\": () => (/* binding */ addNewElements),\n/* harmony export */   \"deleteAllMyListElements\": () => (/* binding */ deleteAllMyListElements),\n/* harmony export */   \"deleteMyListElements\": () => (/* binding */ deleteMyListElements),\n/* harmony export */   \"dragDropEventListener\": () => (/* binding */ dragDropEventListener),\n/* harmony export */   \"editMyListElements\": () => (/* binding */ editMyListElements),\n/* harmony export */   \"listMyCompletedElements\": () => (/* binding */ listMyCompletedElements)\n/* harmony export */ });\n/* harmony import */ var _embedMyList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embedMyList.js */ \"./src/embedMyList.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n\n\n\n\nfunction updateMyList () {\n    const checkMyBoxElements = document.querySelectorAll('.checkbox');\n    const descriptionElements = document.querySelectorAll('.description-text');\n    const dataBase = [];\n    for (let i = 0; i < checkMyBoxElements.length; i+=1){\n        dataBase.push({\n            completed : checkMyBoxElements[i].checked,\n            description : descriptionElements[i].value,\n            id : i + 1,\n        });\n    }\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(dataBase);\n}\nconst dragDropEventListener = () => {\n  const dragDropMyElements = document.querySelectorAll('.to-do-Element');\n  const container = document.querySelector('.container');\n  const dataDragDrop = Array.from(dragDropMyElements);\n  const dataContainer = Array.from(container);\n\n    let dragElement = null;\n\n    dataDragDrop.forEach((element) => {\n    element.setAttribute('draggable', 'true');\n    element.addEventListener('dragstart', () => {\n        dragElement = element;\n    }\n    );\n    element.addEventListener('dragend', () => {\n        dragElement = null;\n    }\n    );\n }\n  );\n dataContainer.forEach((container) => {\n    container.addEventListener('dragover', (e) => {\n        e.preventDefault();\n    }\n    );\n    container.addEventListener('dragenter', (e) => {\n        e.preventDefault(); \n    }\n    );\n    container.addEventListener('drop', () => {\n        (0,_drag_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(dragElement, container.firstElementChild);\n        updateMyList();\n    }\n    );\n }\n );\n}\nconst listMyCompletedElements = () => {\n    const checkMyBoxElements = document.querySelectorAll('.checkbox');\n    const checkMyBoxData = Array.from(checkMyBoxElements);\n    checkMyBoxData.forEach((element) => {\n        element.addEventListener('change', (e) => {\n            (0,_embedMyList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e) ;\n            updateMyList();\n        }\n        );\n    }\n    );\n}\n\nconst addNewElements = () => {\n    const inputData = document.querySelector('.task-input');\n    inputData.addEventListener('keypress', (e) => {\n        if (e.key === 'Enter' && input.value !== '' && e.target.matches('.task-input') ){\n            addNewData();\n            updateMyList();\n        }\n    } ); \n} \nconst editMyListElements = () => {\n    const listInput = document.querySelectorAll('.description-text');\n    const listData = Array.from(listInput);\n\n    listData.forEach((data) => {\n        data.addEventListener('input', () => {\n            updateMyList();\n        }\n        );\n    }\n    );\n}\nconst deleteMyListElements = () => {\n    const myLists = document.querySelectorAll('.trash-icon');\n    const myListData = Array.from(myLists);\n    myListData.forEach((myLists) => {\n        myLists.addEventListener('click', (e) => {\n            deleteList(e);\n            updateMyList();\n        }\n        );\n    }\n    );\n}\n const deleteAllMyListElements = () => {\n    const clearLists = document.querySelector('.clear-all-btn');\n    clearLists.addEventListener('click', () => {\n        deleteAllList();\n        updateMyList();\n    }\n    );\n}\n\n\n\n//# sourceURL=webpack://web-pack/./src/eventSelector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/style.css */ \"./src/style.css\");\n/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRemove.js */ \"./src/addRemove.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\n\n\n\nlet listData = [];\n\nif (localStorage.getItem(\"todos\")) {\n    listData = JSON.parse(localStorage.getItem(\"todos\"));\n    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.displayMyList)(listData);\n    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.setMyEventListeners)();\n    }\n    else {\n        (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(listData);\n        (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.displayMyList)(listData);\n        (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.setMyEventListeners)();\n    }\n\n\n//# sourceURL=webpack://web-pack/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction storage(todoList) {\n    localStorage.setItem('todos', JSON.stringify(todoList));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);\n\n//# sourceURL=webpack://web-pack/./src/localStorage.js?");

/***/ }),

/***/ "./src/myList.js":
/*!***********************!*\
  !*** ./src/myList.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MyList {\n    constructor( description, completed , id) {\n        this.description = description;\n        this.completed = completed;\n        this.id = id;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyList);\n\n\n    \n\n//# sourceURL=webpack://web-pack/./src/myList.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);