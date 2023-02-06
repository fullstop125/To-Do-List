"use strict";
(self["webpackChunkweb_pack"] = self["webpackChunkweb_pack"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-image: url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdyYWRpZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60g);\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: Arial, sans-serif;\n  color: white;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\n.intro {\n  margin-top: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.header-text {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.data-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.data-input input {\n  width: 300px;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  padding: 0 5px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n\n.refresh-btn {\n  padding: 10px 20px;\n  background-color: #42a5f5;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  margin-left: 10px;\n}\n\n.refresh-btn:hover {\n  background-color: #1e88e5;\n}\n\n.list-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 10px;\n  color: white;\n}\n\n.list-data li {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.clear-data {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n  font-size: 14px;\n  color: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n  background-color: #42a5f5;\n  border-radius: 5px;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.clear-data:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n\n.clear-data:active {\n  transform: translateY(2px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.list-mv-data {\n  cursor: move;\n  transition: all 0.3s ease-in-out;\n}\n\n.item-checked:checked + span {\n  text-decoration: line-through;\n  color: #9f9f9f;\n}\n\n.add-btn {\n  padding: 10px 20px;\n  background-color: #42a5f5;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  margin-right: -45px;\n}\n\n.add-btn:hover {\n  background-color: #1e88e5;\n}\n\n.clear-all-btn {\n  text-align: center;\n  border-radius: 5px;\n  transition: all 0.3s ease-in-out;\n  margin-top: 20px;\n  font-size: 14px;\n}\n\n.clear-all-btn:hover {\n  color: pink;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.task-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.task-label input {\n  width: 365px;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  padding: 0 5px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n  margin-left: -15%;\n}\n\n.task-label .add-btn {\n  margin-right: 0;\n  margin-bottom: 20px;\n}\n\n/* Path: src/script.js */\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qMAAqM;EACrM,sBAAsB;EACtB,4BAA4B;EAC5B,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,cAAc;EACd,0CAA0C;EAC1C,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,WAAW;EACX,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,uBAAuB;EACvB,gCAAgC;EAChC,eAAe;EACf,YAAY;EACZ,0CAA0C;EAC1C,YAAY;EACZ,aAAa;EACb,yBAAyB;EACzB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,2BAA2B;EAC3B,0CAA0C;AAC5C;;AAEA;EACE,0BAA0B;EAC1B,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,6BAA6B;EAC7B,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gCAAgC;EAChC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,sBAAsB;EACtB,cAAc;EACd,0CAA0C;EAC1C,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;AACrB;;AAEA,wBAAwB","sourcesContent":["body {\n  background-image: url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGdyYWRpZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60g);\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: Arial, sans-serif;\n  color: white;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\n.intro {\n  margin-top: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.header-text {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.data-input {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.data-input input {\n  width: 300px;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  padding: 0 5px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n}\n\n.refresh-btn {\n  padding: 10px 20px;\n  background-color: #42a5f5;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  margin-left: 10px;\n}\n\n.refresh-btn:hover {\n  background-color: #1e88e5;\n}\n\n.list-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 20px;\n  border-radius: 10px;\n  color: white;\n}\n\n.list-data li {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  width: 100%;\n  justify-content: space-between;\n}\n\n.clear-data {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  justify-content: center;\n  transition: all 0.3s ease-in-out;\n  font-size: 14px;\n  color: white;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n  border: none;\n  outline: none;\n  text-transform: uppercase;\n  background-color: #42a5f5;\n  border-radius: 5px;\n  width: 200px;\n  margin: 0 auto;\n}\n\n.clear-data:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);\n}\n\n.clear-data:active {\n  transform: translateY(2px);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n}\n\n.list-mv-data {\n  cursor: move;\n  transition: all 0.3s ease-in-out;\n}\n\n.item-checked:checked + span {\n  text-decoration: line-through;\n  color: #9f9f9f;\n}\n\n.add-btn {\n  padding: 10px 20px;\n  background-color: #42a5f5;\n  color: white;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  margin-right: -45px;\n}\n\n.add-btn:hover {\n  background-color: #1e88e5;\n}\n\n.clear-all-btn {\n  text-align: center;\n  border-radius: 5px;\n  transition: all 0.3s ease-in-out;\n  margin-top: 20px;\n  font-size: 14px;\n}\n\n.clear-all-btn:hover {\n  color: pink;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.task-label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.task-label input {\n  width: 365px;\n  height: 40px;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  padding: 0 5px;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n  margin-left: -15%;\n}\n\n.task-label .add-btn {\n  margin-right: 0;\n  margin-bottom: 20px;\n}\n\n/* Path: src/script.js */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addMyNewList": () => (/* binding */ addMyNewList),
/* harmony export */   "clearMyList": () => (/* binding */ clearMyList),
/* harmony export */   "deleteMyList": () => (/* binding */ deleteMyList),
/* harmony export */   "displayMyList": () => (/* binding */ displayMyList),
/* harmony export */   "setMyEventListeners": () => (/* binding */ setMyEventListeners)
/* harmony export */ });
/* harmony import */ var _eventSelector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventSelector.js */ "./src/eventSelector.js");
// eslint-disable-next-line import/no-cycle


const createToDo = (todo) => {
  const divCont = document.createElement('div');
  const li = document.createElement('li');
  const checkMyClass = todo.completed === true ? 'marked' : '';
  const checkMyValue = todo.completed === true ? 'checked' : '';
  divCont.classList.add('div-container');
  li.classList.add('to-do-Element');

  li.innerHTML = `
  <label class = "task-label">
  <input type="checkbox" class="checkbox" ${checkMyValue}>
  <input type="text" class="task-description ${checkMyClass}" value="${todo.description}">
  <input type ="hidden" class ="" value = "${todo.id}">
  
  </label>
  <i class="icon-ellipsis-vertical"></i>
  <i class="icon-trash"></i>
  
  
  `;
  divCont.appendChild(li);
  return divCont;
};
function setMyEventListeners() {
  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.addNewElements)();
  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.editMyListElements)();
  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.deleteMyListElements)();
  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.deleteAllMyListElements)();
  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.dragDropEventListener)();
  (0,_eventSelector_js__WEBPACK_IMPORTED_MODULE_0__.listMyCompletedElements)();
}
const displayMyList = (todos) => {
  const listDisplay = document.querySelector('.list-data');
  todos.forEach((todo) => {
    const div = createToDo(todo);
    listDisplay.appendChild(div);
  });
};
function addMyNewList() {
  const inputData = document.querySelector('.task-input');
  const listDisplay = document.querySelector('.list-data');
  let listData = [];
  if (localStorage.getItem('todos')) {
    listData = JSON.parse(localStorage.getItem('todos'));
  }
  listData.push({ description: inputData.value, completed: false, id: listData.length + 1 });
  inputData.value = '';
  listDisplay.innerHTML = '';
  displayMyList(listData);
  setMyEventListeners();
}
function deleteMyList(e) {
  const listDisplay = document.querySelector('.list-data');
  const removeElement = e.target.parentNode.parentNode;
  listDisplay.removeChild(removeElement);
}
function clearMyList() {
  const listDisplay = document.querySelector('.list-data');
  const removeList = document.querySelectorAll('.marked');

  removeList.forEach((e) => {
    const removeElement = e.parentElement.parentElement.parentElement;
    listDisplay.removeChild(removeElement);
  });
}


/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @param dragElement - the element that is being dragged
 * @param currentTask - the task that is currently in the column
 */
 const dropElements = (dragElement, currentTask) => {
  const pastTask = currentTask;
  const pastCont = currentTask.parentNode;
  const newTask = dragElement;
  const newCont = dragElement.parentNode;

  pastCont.appendChild(newTask);
  newCont.appendChild(pastTask);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dropElements);

/***/ }),

/***/ "./src/embedMyList.js":
/*!****************************!*\
  !*** ./src/embedMyList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * It adds or removes a class from the next sibling of the element that was clicked
 * @param e - the event object
 */
 const checkIsComplete = (e) => {
  e.target.completed = e.target.checked;
  if (e.target.completed === true) {
    e.currentTarget.nextElementSibling.classList.add('marked');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('marked');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkIsComplete);

/***/ }),

/***/ "./src/eventSelector.js":
/*!******************************!*\
  !*** ./src/eventSelector.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewElements": () => (/* binding */ addNewElements),
/* harmony export */   "deleteAllMyListElements": () => (/* binding */ deleteAllMyListElements),
/* harmony export */   "deleteMyListElements": () => (/* binding */ deleteMyListElements),
/* harmony export */   "dragDropEventListener": () => (/* binding */ dragDropEventListener),
/* harmony export */   "editMyListElements": () => (/* binding */ editMyListElements),
/* harmony export */   "listMyCompletedElements": () => (/* binding */ listMyCompletedElements)
/* harmony export */ });
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
/* harmony import */ var _embedMyList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./embedMyList.js */ "./src/embedMyList.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");
/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addRemove.js */ "./src/addRemove.js");



// eslint-disable-next-line import/no-cycle


/**
 * It takes the data from the DOM and stores it in the database
 */
function updateMyList() {
  const checkMyBoxElements = document.querySelectorAll('.checkbox');
  const descriptionElements = document.querySelectorAll('.task-description');

  const dataBase = [];
  for (let i = 0; i < checkMyBoxElements.length; i += 1) {
    dataBase.push({
      description: descriptionElements[i].value,
      completed: checkMyBoxElements[i].checked,
      id: i + 1,
    });
  }
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dataBase);
}
const dragDropEventListener = () => {
  const dragDropMyElements = document.querySelectorAll('.to-do-Element');
  const container = document.querySelectorAll('.div-container');
  const dataDragDrop = Array.from(dragDropMyElements);
  const dataContainer = Array.from(container);

  let dragElement = null;

  dataDragDrop.forEach((element) => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', () => {
      dragElement = element;
    });
    element.addEventListener('dragend', () => {
      dragElement = null;
    });
  });
  dataContainer.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
    container.addEventListener('drop', () => {
      (0,_drag_js__WEBPACK_IMPORTED_MODULE_0__["default"])(dragElement, container.firstElementChild);
      updateMyList();
    });
  });
};
const listMyCompletedElements = () => {
  const checkMyBoxElements = document.querySelectorAll('.checkbox');
  const checkMyBoxData = Array.from(checkMyBoxElements);
  checkMyBoxData.forEach((element) => {
    element.addEventListener('change', (e) => {
      (0,_embedMyList_js__WEBPACK_IMPORTED_MODULE_1__["default"])(e);
      updateMyList();
    });
  });
};

const addNewElements = () => {
  const inputData = document.querySelector('.task-input');
  inputData.addEventListener('keypress', (e) => {
    if (
      e.key === 'Enter'
      && inputData.value !== ''
      && e.target.matches('.task-input')
    ) {
      (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.addMyNewList)();
      updateMyList();
    }
  });
};
const editMyListElements = () => {
  const listInput = document.querySelectorAll('.task-description');
  const listData = Array.from(listInput);

  listData.forEach((data) => {
    data.addEventListener('input', () => {
      updateMyList();
    });
  });
};
const deleteMyListElements = () => {
  const myLists = document.querySelectorAll('.icon-trash');
  const myListData = Array.from(myLists);
  myListData.forEach((myLists) => {
    myLists.addEventListener('click', (e) => {
      (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.deleteMyList)(e);
      updateMyList();
    });
  });
};
const deleteAllMyListElements = () => {
  const clearLists = document.querySelector('.clear-all-btn');
  clearLists.addEventListener('click', () => {
    (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.clearMyList)();
    updateMyList();
  });
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRemove.js */ "./src/addRemove.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage.js");




let listData = [];

/* This is checking to see if there is a local storage item called todos. If there is, it will parse
the data and display it. If there is not, it will create a new local storage item called todos and
display it. */
if (localStorage.getItem('todos')) {
  listData = JSON.parse(localStorage.getItem('todos'));
  (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.displayMyList)(listData);
  (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.setMyEventListeners)();
} else {
  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"])(listData);
  (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.displayMyList)(listData);
  (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_1__.setMyEventListeners)();
}


/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * It takes a todoList array and saves it to localStorage
 * @param todoList - The todo list that we want to save to local storage.
 */
function storage(todoList) {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDJEQUFZO0FBQ2xCO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMERBQVc7QUFDZjtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHcUI7QUFDK0M7QUFDNUI7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFhO0FBQ2YsRUFBRSxrRUFBbUI7QUFDckIsRUFBRTtBQUNGLEVBQUUsNERBQU87QUFDVCxFQUFFLDREQUFhO0FBQ2YsRUFBRSxrRUFBbUI7QUFDckI7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLXBhY2svLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYi1wYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWItcGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYi1wYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYi1wYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYi1wYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWItcGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWItcGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWItcGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYi1wYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2svLi9zcmMvYWRkUmVtb3ZlLmpzIiwid2VicGFjazovL3dlYi1wYWNrLy4vc3JjL2RyYWcuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2svLi9zcmMvZW1iZWRNeUxpc3QuanMiLCJ3ZWJwYWNrOi8vd2ViLXBhY2svLi9zcmMvZXZlbnRTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWItcGFjay8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWItcGFjay8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU3OTU0ODEyMjA4MC1jMzVmZDY4MjBlY2I/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhOREY4ZkdkeVlXUnBaVzUwZkdWdWZEQjhmREI4ZkElM0QlM0QmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz01MDAmcT02MGcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4uaW50cm8ge1xcbiAgbWFyZ2luLXRvcDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5oZWFkZXItdGV4dCB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmRhdGEtaW5wdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kYXRhLWlucHV0IGlucHV0IHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnJlZnJlc2gtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MmE1ZjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4ucmVmcmVzaC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODhlNTtcXG59XFxuXFxuLmxpc3QtZGF0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5saXN0LWRhdGEgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNsZWFyLWRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhNWY1O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5jbGVhci1kYXRhOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmNsZWFyLWRhdGE6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5saXN0LW12LWRhdGEge1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5pdGVtLWNoZWNrZWQ6Y2hlY2tlZCArIHNwYW4ge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogIzlmOWY5ZjtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luLXJpZ2h0OiAtNDVweDtcXG59XFxuXFxuLmFkZC1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODhlNTtcXG59XFxuXFxuLmNsZWFyLWFsbC1idG4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY2xlYXItYWxsLWJ0bjpob3ZlciB7XFxuICBjb2xvcjogcGluaztcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1sYWJlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFzay1sYWJlbCBpbnB1dCB7XFxuICB3aWR0aDogMzY1cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogLTE1JTtcXG59XFxuXFxuLnRhc2stbGFiZWwgLmFkZC1idG4ge1xcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLyogUGF0aDogc3JjL3NjcmlwdC5qcyAqL1xcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxTUFBcU07RUFDck0sc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCwwQ0FBMEM7RUFDMUMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFdBQVc7RUFDWCw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQSx3QkFBd0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1Nzk1NDgxMjIwODAtYzM1ZmQ2ODIwZWNiP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4elpXRnlZMmg4TkRGOGZHZHlZV1JwWlc1MGZHVnVmREI4ZkRCOGZBJTNEJTNEJmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NTAwJnE9NjBnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmludHJvIHtcXG4gIG1hcmdpbi10b3A6IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uaGVhZGVyLXRleHQge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5kYXRhLWlucHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uZGF0YS1pbnB1dCBpbnB1dCB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5yZWZyZXNoLWJ0biB7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDJhNWY1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLnJlZnJlc2gtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTg4ZTU7XFxufVxcblxcbi5saXN0LWRhdGEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGlzdC1kYXRhIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jbGVhci1kYXRhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uY2xlYXItZGF0YTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5jbGVhci1kYXRhOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4ubGlzdC1tdi1kYXRhIHtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uaXRlbS1jaGVja2VkOmNoZWNrZWQgKyBzcGFuIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgY29sb3I6ICM5ZjlmOWY7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MmE1ZjU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG4gIG1hcmdpbi1yaWdodDogLTQ1cHg7XFxufVxcblxcbi5hZGQtYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTg4ZTU7XFxufVxcblxcbi5jbGVhci1hbGwtYnRuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmNsZWFyLWFsbC1idG46aG92ZXIge1xcbiAgY29sb3I6IHBpbms7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stbGFiZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stbGFiZWwgaW5wdXQge1xcbiAgd2lkdGg6IDM2NXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xNSU7XFxufVxcblxcbi50YXNrLWxhYmVsIC5hZGQtYnRuIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi8qIFBhdGg6IHNyYy9zY3JpcHQuanMgKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7XG4gIGFkZE5ld0VsZW1lbnRzLFxuICBlZGl0TXlMaXN0RWxlbWVudHMsXG4gIGRlbGV0ZU15TGlzdEVsZW1lbnRzLFxuICBkZWxldGVBbGxNeUxpc3RFbGVtZW50cyxcbiAgZHJhZ0Ryb3BFdmVudExpc3RlbmVyLFxuICBsaXN0TXlDb21wbGV0ZWRFbGVtZW50cyxcbn0gZnJvbSAnLi9ldmVudFNlbGVjdG9yLmpzJztcblxuY29uc3QgY3JlYXRlVG9EbyA9ICh0b2RvKSA9PiB7XG4gIGNvbnN0IGRpdkNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBjaGVja015Q2xhc3MgPSB0b2RvLmNvbXBsZXRlZCA9PT0gdHJ1ZSA/ICdtYXJrZWQnIDogJyc7XG4gIGNvbnN0IGNoZWNrTXlWYWx1ZSA9IHRvZG8uY29tcGxldGVkID09PSB0cnVlID8gJ2NoZWNrZWQnIDogJyc7XG4gIGRpdkNvbnQuY2xhc3NMaXN0LmFkZCgnZGl2LWNvbnRhaW5lcicpO1xuICBsaS5jbGFzc0xpc3QuYWRkKCd0by1kby1FbGVtZW50Jyk7XG5cbiAgbGkuaW5uZXJIVE1MID0gYFxuICA8bGFiZWwgY2xhc3MgPSBcInRhc2stbGFiZWxcIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY2hlY2tib3hcIiAke2NoZWNrTXlWYWx1ZX0+XG4gIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvbiAke2NoZWNrTXlDbGFzc31cIiB2YWx1ZT1cIiR7dG9kby5kZXNjcmlwdGlvbn1cIj5cbiAgPGlucHV0IHR5cGUgPVwiaGlkZGVuXCIgY2xhc3MgPVwiXCIgdmFsdWUgPSBcIiR7dG9kby5pZH1cIj5cbiAgXG4gIDwvbGFiZWw+XG4gIDxpIGNsYXNzPVwiaWNvbi1lbGxpcHNpcy12ZXJ0aWNhbFwiPjwvaT5cbiAgPGkgY2xhc3M9XCJpY29uLXRyYXNoXCI+PC9pPlxuICBcbiAgXG4gIGA7XG4gIGRpdkNvbnQuYXBwZW5kQ2hpbGQobGkpO1xuICByZXR1cm4gZGl2Q29udDtcbn07XG5mdW5jdGlvbiBzZXRNeUV2ZW50TGlzdGVuZXJzKCkge1xuICBhZGROZXdFbGVtZW50cygpO1xuICBlZGl0TXlMaXN0RWxlbWVudHMoKTtcbiAgZGVsZXRlTXlMaXN0RWxlbWVudHMoKTtcbiAgZGVsZXRlQWxsTXlMaXN0RWxlbWVudHMoKTtcbiAgZHJhZ0Ryb3BFdmVudExpc3RlbmVyKCk7XG4gIGxpc3RNeUNvbXBsZXRlZEVsZW1lbnRzKCk7XG59XG5jb25zdCBkaXNwbGF5TXlMaXN0ID0gKHRvZG9zKSA9PiB7XG4gIGNvbnN0IGxpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZGF0YScpO1xuICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gY3JlYXRlVG9Ebyh0b2RvKTtcbiAgICBsaXN0RGlzcGxheS5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn07XG5mdW5jdGlvbiBhZGRNeU5ld0xpc3QoKSB7XG4gIGNvbnN0IGlucHV0RGF0YSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWlucHV0Jyk7XG4gIGNvbnN0IGxpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZGF0YScpO1xuICBsZXQgbGlzdERhdGEgPSBbXTtcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB7XG4gICAgbGlzdERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcbiAgfVxuICBsaXN0RGF0YS5wdXNoKHsgZGVzY3JpcHRpb246IGlucHV0RGF0YS52YWx1ZSwgY29tcGxldGVkOiBmYWxzZSwgaWQ6IGxpc3REYXRhLmxlbmd0aCArIDEgfSk7XG4gIGlucHV0RGF0YS52YWx1ZSA9ICcnO1xuICBsaXN0RGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgZGlzcGxheU15TGlzdChsaXN0RGF0YSk7XG4gIHNldE15RXZlbnRMaXN0ZW5lcnMoKTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZU15TGlzdChlKSB7XG4gIGNvbnN0IGxpc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZGF0YScpO1xuICBjb25zdCByZW1vdmVFbGVtZW50ID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICBsaXN0RGlzcGxheS5yZW1vdmVDaGlsZChyZW1vdmVFbGVtZW50KTtcbn1cbmZ1bmN0aW9uIGNsZWFyTXlMaXN0KCkge1xuICBjb25zdCBsaXN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWRhdGEnKTtcbiAgY29uc3QgcmVtb3ZlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYXJrZWQnKTtcblxuICByZW1vdmVMaXN0LmZvckVhY2goKGUpID0+IHtcbiAgICBjb25zdCByZW1vdmVFbGVtZW50ID0gZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBsaXN0RGlzcGxheS5yZW1vdmVDaGlsZChyZW1vdmVFbGVtZW50KTtcbiAgfSk7XG59XG5leHBvcnQge1xuICBhZGRNeU5ld0xpc3QsIGRlbGV0ZU15TGlzdCwgY2xlYXJNeUxpc3QsIHNldE15RXZlbnRMaXN0ZW5lcnMsIGRpc3BsYXlNeUxpc3QsXG59OyIsIi8qKlxuICogQHBhcmFtIGRyYWdFbGVtZW50IC0gdGhlIGVsZW1lbnQgdGhhdCBpcyBiZWluZyBkcmFnZ2VkXG4gKiBAcGFyYW0gY3VycmVudFRhc2sgLSB0aGUgdGFzayB0aGF0IGlzIGN1cnJlbnRseSBpbiB0aGUgY29sdW1uXG4gKi9cbiBjb25zdCBkcm9wRWxlbWVudHMgPSAoZHJhZ0VsZW1lbnQsIGN1cnJlbnRUYXNrKSA9PiB7XG4gIGNvbnN0IHBhc3RUYXNrID0gY3VycmVudFRhc2s7XG4gIGNvbnN0IHBhc3RDb250ID0gY3VycmVudFRhc2sucGFyZW50Tm9kZTtcbiAgY29uc3QgbmV3VGFzayA9IGRyYWdFbGVtZW50O1xuICBjb25zdCBuZXdDb250ID0gZHJhZ0VsZW1lbnQucGFyZW50Tm9kZTtcblxuICBwYXN0Q29udC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbiAgbmV3Q29udC5hcHBlbmRDaGlsZChwYXN0VGFzayk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcm9wRWxlbWVudHM7IiwiLyoqXG4gKiBJdCBhZGRzIG9yIHJlbW92ZXMgYSBjbGFzcyBmcm9tIHRoZSBuZXh0IHNpYmxpbmcgb2YgdGhlIGVsZW1lbnQgdGhhdCB3YXMgY2xpY2tlZFxuICogQHBhcmFtIGUgLSB0aGUgZXZlbnQgb2JqZWN0XG4gKi9cbiBjb25zdCBjaGVja0lzQ29tcGxldGUgPSAoZSkgPT4ge1xuICBlLnRhcmdldC5jb21wbGV0ZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICBpZiAoZS50YXJnZXQuY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgZS5jdXJyZW50VGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdtYXJrZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBlLmN1cnJlbnRUYXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ21hcmtlZCcpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjaGVja0lzQ29tcGxldGU7IiwiaW1wb3J0IGRyb3BFbGVtZW50cyBmcm9tICcuL2RyYWcuanMnO1xuaW1wb3J0IGNoZWNrSXNDb21wbGV0ZSBmcm9tICcuL2VtYmVkTXlMaXN0LmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmltcG9ydCB7IGFkZE15TmV3TGlzdCwgZGVsZXRlTXlMaXN0LCBjbGVhck15TGlzdCB9IGZyb20gJy4vYWRkUmVtb3ZlLmpzJztcblxuLyoqXG4gKiBJdCB0YWtlcyB0aGUgZGF0YSBmcm9tIHRoZSBET00gYW5kIHN0b3JlcyBpdCBpbiB0aGUgZGF0YWJhc2VcbiAqL1xuZnVuY3Rpb24gdXBkYXRlTXlMaXN0KCkge1xuICBjb25zdCBjaGVja015Qm94RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKTtcbiAgY29uc3QgZGVzY3JpcHRpb25FbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLWRlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGF0YUJhc2UgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja015Qm94RWxlbWVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBkYXRhQmFzZS5wdXNoKHtcbiAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbkVsZW1lbnRzW2ldLnZhbHVlLFxuICAgICAgY29tcGxldGVkOiBjaGVja015Qm94RWxlbWVudHNbaV0uY2hlY2tlZCxcbiAgICAgIGlkOiBpICsgMSxcbiAgICB9KTtcbiAgfVxuICBzdG9yYWdlKGRhdGFCYXNlKTtcbn1cbmNvbnN0IGRyYWdEcm9wRXZlbnRMaXN0ZW5lciA9ICgpID0+IHtcbiAgY29uc3QgZHJhZ0Ryb3BNeUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvLWRvLUVsZW1lbnQnKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRpdi1jb250YWluZXInKTtcbiAgY29uc3QgZGF0YURyYWdEcm9wID0gQXJyYXkuZnJvbShkcmFnRHJvcE15RWxlbWVudHMpO1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gQXJyYXkuZnJvbShjb250YWluZXIpO1xuXG4gIGxldCBkcmFnRWxlbWVudCA9IG51bGw7XG5cbiAgZGF0YURyYWdEcm9wLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ3RydWUnKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsICgpID0+IHtcbiAgICAgIGRyYWdFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoKSA9PiB7XG4gICAgICBkcmFnRWxlbWVudCA9IG51bGw7XG4gICAgfSk7XG4gIH0pO1xuICBkYXRhQ29udGFpbmVyLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoKSA9PiB7XG4gICAgICBkcm9wRWxlbWVudHMoZHJhZ0VsZW1lbnQsIGNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB1cGRhdGVNeUxpc3QoKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuY29uc3QgbGlzdE15Q29tcGxldGVkRWxlbWVudHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoZWNrTXlCb3hFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xuICBjb25zdCBjaGVja015Qm94RGF0YSA9IEFycmF5LmZyb20oY2hlY2tNeUJveEVsZW1lbnRzKTtcbiAgY2hlY2tNeUJveERhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgIGNoZWNrSXNDb21wbGV0ZShlKTtcbiAgICAgIHVwZGF0ZU15TGlzdCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGFkZE5ld0VsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1pbnB1dCcpO1xuICBpbnB1dERhdGEuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgIGUua2V5ID09PSAnRW50ZXInXG4gICAgICAmJiBpbnB1dERhdGEudmFsdWUgIT09ICcnXG4gICAgICAmJiBlLnRhcmdldC5tYXRjaGVzKCcudGFzay1pbnB1dCcpXG4gICAgKSB7XG4gICAgICBhZGRNeU5ld0xpc3QoKTtcbiAgICAgIHVwZGF0ZU15TGlzdCgpO1xuICAgIH1cbiAgfSk7XG59O1xuY29uc3QgZWRpdE15TGlzdEVsZW1lbnRzID0gKCkgPT4ge1xuICBjb25zdCBsaXN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzay1kZXNjcmlwdGlvbicpO1xuICBjb25zdCBsaXN0RGF0YSA9IEFycmF5LmZyb20obGlzdElucHV0KTtcblxuICBsaXN0RGF0YS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgZGF0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgIHVwZGF0ZU15TGlzdCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBkZWxldGVNeUxpc3RFbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgbXlMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pY29uLXRyYXNoJyk7XG4gIGNvbnN0IG15TGlzdERhdGEgPSBBcnJheS5mcm9tKG15TGlzdHMpO1xuICBteUxpc3REYXRhLmZvckVhY2goKG15TGlzdHMpID0+IHtcbiAgICBteUxpc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGRlbGV0ZU15TGlzdChlKTtcbiAgICAgIHVwZGF0ZU15TGlzdCgpO1xuICAgIH0pO1xuICB9KTtcbn07XG5jb25zdCBkZWxldGVBbGxNeUxpc3RFbGVtZW50cyA9ICgpID0+IHtcbiAgY29uc3QgY2xlYXJMaXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1hbGwtYnRuJyk7XG4gIGNsZWFyTGlzdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJNeUxpc3QoKTtcbiAgICB1cGRhdGVNeUxpc3QoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBhZGROZXdFbGVtZW50cyxcbiAgZWRpdE15TGlzdEVsZW1lbnRzLFxuICBkZWxldGVNeUxpc3RFbGVtZW50cyxcbiAgZGVsZXRlQWxsTXlMaXN0RWxlbWVudHMsXG4gIGRyYWdEcm9wRXZlbnRMaXN0ZW5lcixcbiAgbGlzdE15Q29tcGxldGVkRWxlbWVudHMsXG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZGlzcGxheU15TGlzdCwgc2V0TXlFdmVudExpc3RlbmVycyB9IGZyb20gJy4vYWRkUmVtb3ZlLmpzJztcbmltcG9ydCBzdG9yYWdlIGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxubGV0IGxpc3REYXRhID0gW107XG5cbi8qIFRoaXMgaXMgY2hlY2tpbmcgdG8gc2VlIGlmIHRoZXJlIGlzIGEgbG9jYWwgc3RvcmFnZSBpdGVtIGNhbGxlZCB0b2Rvcy4gSWYgdGhlcmUgaXMsIGl0IHdpbGwgcGFyc2VcbnRoZSBkYXRhIGFuZCBkaXNwbGF5IGl0LiBJZiB0aGVyZSBpcyBub3QsIGl0IHdpbGwgY3JlYXRlIGEgbmV3IGxvY2FsIHN0b3JhZ2UgaXRlbSBjYWxsZWQgdG9kb3MgYW5kXG5kaXNwbGF5IGl0LiAqL1xuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKSB7XG4gIGxpc3REYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XG4gIGRpc3BsYXlNeUxpc3QobGlzdERhdGEpO1xuICBzZXRNeUV2ZW50TGlzdGVuZXJzKCk7XG59IGVsc2Uge1xuICBzdG9yYWdlKGxpc3REYXRhKTtcbiAgZGlzcGxheU15TGlzdChsaXN0RGF0YSk7XG4gIHNldE15RXZlbnRMaXN0ZW5lcnMoKTtcbn1cbiIsIi8qKlxuICogSXQgdGFrZXMgYSB0b2RvTGlzdCBhcnJheSBhbmQgc2F2ZXMgaXQgdG8gbG9jYWxTdG9yYWdlXG4gKiBAcGFyYW0gdG9kb0xpc3QgLSBUaGUgdG9kbyBsaXN0IHRoYXQgd2Ugd2FudCB0byBzYXZlIHRvIGxvY2FsIHN0b3JhZ2UuXG4gKi9cbmZ1bmN0aW9uIHN0b3JhZ2UodG9kb0xpc3QpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=