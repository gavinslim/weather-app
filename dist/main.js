/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/sunset.jpg */ \"./src/images/sunset.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-dark: #333;\\n  --background-color: rgba(255, 255, 255, 0);\\n}\\n\\nbody {\\n  font-family: montserrat, sans-serif;\\n  margin: 0px;\\n  color: var(--primary-dark);\\n}\\n\\n#main {\\n  height: 100vh; \\n  position: relative;\\n}\\n\\n.background-img {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  object-fit: cover;\\n  background-size: cover;\\n}\\n\\n#weather-container {\\n  border-radius: 25px;\\n  gap: 10px;\\n\\n  display: flex;\\n  flex-direction: column;\\n\\n  padding: 18px;\\n  width: 400px;\\n\\n  position: absolute;\\n  top: 72px;\\n  left: 48px;\\n}\\n\\n#main-container {\\n  position: absolute;\\n  top: 72px;\\n  left: 48px;\\n\\n  padding: 18px;\\n\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n#main-container #weather {\\n  font-size: 48px;\\n  font-weight: 700;\\n  margin-bottom: 4px;\\n}\\n\\n#main-container #location {\\n  font-size: 20px;\\n  margin-bottom: 18px;\\n}\\n\\n#temperature-container {\\n  display: flex;\\n  align-items: center;\\n  gap: 30px;\\n\\n  margin-bottom: 18px;\\n}\\n\\n#temperature-container .weather-icon {\\n  font-size: 60px;\\n}\\n\\n#temperature-container #temperature {\\n  font-size: 48px;\\n  font-weight: 700;\\n}\\n\\n#input-container {\\n  border-bottom: 1px solid black;\\n  background-color: white;\\n  opacity: 50%;\\n\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  width: 160px;\\n  border-radius: 5px;\\n}\\n\\n#input-container input {\\n  height: 24px;\\n  border: none;\\n  width: 120px;\\n}\\n\\n#input-container input:focus {\\n  outline: none;\\n}\\n\\n/* Supplemental container */\\n#supplemental-container {\\n  border-radius: 25px;\\n\\n  position: absolute;\\n  top: 72px;\\n  right: 48px;\\n  padding: 18px;\\n\\n\\n  display: flex;\\n  flex-direction: column;\\n  gap: 16px;\\n}\\n\\n.sub-supplemental {\\n  display: flex;\\n  align-items: center;\\n  font-size: 20px;\\n  gap: 18px;\\n}\\n\\n.sub-supplemental .supp-icon {\\n  font-size: 28px;\\n  width: 28px;\\n  text-align: center;\\n}\\n\\n/* #range {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  height: 100px;\\n  gap: 14px;\\n} */\\n\\n/* Daily Container */\\n#daily-container {\\n  position: absolute;\\n  bottom: 120px;\\n  left: 48px;\\n  right: 48px;\\n\\n  color: white;\\n\\n  display: flex;\\n  justify-content: space-evenly;\\n}\\n\\n#daily-container .daily {\\n  padding: 12px;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\\n  gap: 8px;\\n}\\n\\n.daily .date-str {\\n  font-size: 28px;\\n}\\n\\n.daily .date-num {\\n  font-size: 22px;\\n  margin-bottom: 24px;\\n}\\n\\n.daily .weather-icon {\\n  font-size: 70px;\\n  margin-bottom: 24px;\\n}\\n\\n.daily .range {\\n  font-size: 22px;\\n  display: flex;\\n  gap: 20px;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', (0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/modules/functions.js\");\n\n\nconst content = document.querySelector('.content');\n\nfunction addUserInput() {\n  const container = document.createElement('div');\n  container.setAttribute('id', 'input-container');\n\n  const input = document.createElement('input');\n  input.setAttribute('type', 'text');\n  input.setAttribute('id', 'user-input');\n  input.setAttribute('placeholder', 'Search for location');\n  container.appendChild(input);\n\n  const icon = document.createElement('i');\n  icon.classList.add('fa-solid', 'fa-magnifying-glass');\n  container.appendChild(icon);\n\n  return container;\n}\n\nfunction addWeatherInfo(field) {\n  const temp = document.createElement('div');\n  temp.setAttribute('id', `${field}`);\n  return temp;\n}\n\nfunction addSubSuppContainer(iconClass, field) {\n  const container = document.createElement('div');\n  container.classList.add('sub-supplemental');\n\n  // Add icon\n  const icon = document.createElement('div');\n  icon.classList.add('supp-icon', 'fa-solid', iconClass);\n  container.appendChild(icon);\n\n  // Add value\n  container.appendChild(addWeatherInfo(field));\n\n  return container;\n}\n\nfunction addTempContainer() {\n  const container = document.createElement('div');\n  container.setAttribute('id', 'temperature-container');\n\n  const icon = document.createElement('div');\n  icon.classList.add('weather-icon');\n  container.appendChild(icon);\n\n  const temperature = document.createElement('div');\n  temperature.setAttribute('id', 'data-container');\n\n  const currentTempText = document.createElement('div');\n  currentTempText.textContent = 'Current';\n  temperature.appendChild(currentTempText);\n\n  temperature.appendChild(addWeatherInfo('temperature'));\n  container.appendChild(temperature);\n\n  return container;\n}\n\n// Main weather data\nfunction addMainWeatherContainer() {\n  const container = document.createElement('div');\n  container.setAttribute('id', 'main-container');\n\n  container.appendChild(addWeatherInfo('date'));\n  container.appendChild(addWeatherInfo('weather'));\n  container.appendChild(addWeatherInfo('location'));\n\n  container.appendChild(addTempContainer());\n\n  container.appendChild(addUserInput());\n\n  // const range = document.createElement('div');\n  // range.setAttribute('id', 'range');\n  // range.appendChild(addSubSuppContainer('fa-temperature-low', 'temp-min'));\n  // range.appendChild(addSubSuppContainer('fa-temperature-high', 'temp-max'));\n  // container.appendChild(range);\n\n  return container;\n}\n\n// Supplemental weather data\nfunction addSuppWeatherContainer() {\n  const container = document.createElement('div');\n  container.setAttribute('id', 'supplemental-container');\n\n  // Wind speed, pressure, humidity\n  container.appendChild(addSubSuppContainer('fa-wind', 'wind'));\n  container.appendChild(addSubSuppContainer('fa-stopwatch', 'pressure'));\n  container.appendChild(addSubSuppContainer('fa-droplet', 'humidity'));\n\n  // Sunrise and sunset time\n  container.appendChild(addSubSuppContainer('fa-sun', 'sunrise'));\n  container.appendChild(addSubSuppContainer('fa-moon', 'sunset'));\n\n  return container;\n}\n\n// Daily weather data\nfunction addDailyWeatherContainer() {\n  const container = document.createElement('div');\n  container.setAttribute('id', 'daily-container');\n\n  for (let i = 1; i <= 7; i += 1) {\n    container.innerHTML += `\n      <div class='daily'>\n        <div class='date-str' id='date-str-${i}'></div>\n        <div class='date-num' id='date-num-${i}'></div>\n        <div class='icon' id='icon-${i}'></div>\n        <div class='range'>\n          <div id='max-${i}'></div>\n          <div id='min-${i}'></div>\n        </div>\n      </div>\n    `;\n  }\n  return container;\n}\n\nfunction initMain() {\n  const main = document.createElement('div');\n  main.setAttribute('id', 'main');\n  main.classList.add('background-img');\n\n  main.appendChild(addMainWeatherContainer());\n  main.appendChild(addSuppWeatherContainer());\n  main.appendChild(addDailyWeatherContainer());\n\n  content.appendChild(main);\n}\n\nfunction initFooter() {\n  const footer = document.createElement('div');\n  footer.setAttribute('id', 'footer');\n  content.appendChild(footer);\n}\n\nfunction loadpage() {\n  // initHeader();\n  initMain();\n  initFooter();\n\n  (0,_functions__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadpage);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _icons_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons.json */ \"./src/modules/icons.json\");\n\n\nfunction capitalizeFirstLetters(string) {\n  const words = string.split(' ');\n\n  for (let i = 0; i < words.length; i += 1) {\n    words[i] = words[i][0].toUpperCase() + words[i].substr(1);\n  }\n\n  return words.join(' ');\n}\n\nconst initDate = () => {\n  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\n  const months = [\n    'January', 'February', 'March',\n    'April', 'May', 'June',\n    'July', 'August', 'September',\n    'October', 'November', 'December',\n  ];\n\n  const getToday = () => {\n    const date = new Date();\n    return `${weekday[date.getDay()]},  ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;\n  };\n\n  const getDay = (unixTime) => {\n    const date = new Date(unixTime * 1000);\n\n    return {\n      str: weekday[date.getDay()].substr(0, 3),\n      num: date.getDate(),\n    };\n  };\n\n  const convertTime = (unixTime) => {\n    const date = new Date(unixTime * 1000);\n    let hours = date.getHours();\n    const minutes = `0${date.getMinutes()}`;\n\n    const end = hours < 12 ? 'am' : 'pm';\n    if (hours > 12) { hours -= 12; }\n\n    const formattedTime = `${hours}:${minutes.substr(-2)} ${end}`;\n    return formattedTime;\n  };\n\n  return { getToday, getDay, convertTime };\n};\n\n// Constructor function\nfunction WeatherData(inData) {\n  this.icon = inData.weather[0].id;\n  this.weather = inData.weather[0].description;\n  this.temp = inData.temp;\n  this.feelsLike = inData.feels_like;\n  this.windSpeed = inData.wind_speed;\n  this.pressure = inData.pressure;\n  this.humidity = inData.humidity;\n  this.sunrise = inData.sunrise;\n  this.sunset = inData.sunset;\n\n  this.setLocation = (location) => {\n    this.location = location;\n  };\n\n  this.setTempRange = (min, max) => {\n    this.minTemp = parseInt(min, 10);\n    this.maxTemp = parseInt(max, 10);\n  };\n\n  this.setDay = (day) => {\n    this.day = day;\n  };\n}\n\nfunction setWeatherIcon(field, code) {\n  const weatherDict = {\n    thunderstorm: 'fa-cloud-rain',\n    clouds: 'fa-cloud',\n    rain: 'fa-cloud-showers-heavy',\n    snow: 'fa-snowflake',\n    clear: 'fa-sun',\n    drizzle: 'fa-cloud-rain',\n    mist: 'fa-smog',\n    tornado: 'fa-wind',\n    squall: 'fa-wind',\n    ash: 'fa-meteor',\n    haze: 'fa-smog',\n  };\n\n  const weather = document.querySelector(field);\n  weather.className = '';\n  weather.classList.add('weather-icon', 'fa-solid', weatherDict[_icons_json__WEBPACK_IMPORTED_MODULE_0__[code].icon]);\n}\n\nfunction setWeatherInfo(field, fieldData) {\n  const temp = document.querySelector(field);\n  temp.textContent = fieldData;\n}\n\nfunction displayCurrentWeatherData(inData) {\n  const data = new WeatherData(inData);\n  const date = initDate();\n\n  // Load data for main container\n  setWeatherInfo('#weather', capitalizeFirstLetters(data.weather));\n  setWeatherInfo('#temperature', `${parseInt(data.temp, 10)} ??C`);\n  setWeatherInfo('#date', date.getToday());\n  setWeatherIcon('.weather-icon', data.icon);\n\n  // Load wind, pressure, and humidity\n  setWeatherInfo('#wind', `${parseInt(data.windSpeed, 10)} m/s`);\n  setWeatherInfo('#pressure', `${data.pressure} hPa`);\n  setWeatherInfo('#humidity', `${data.humidity}%`);\n\n  // Load data for supplemental container\n  setWeatherInfo('#sunrise', date.convertTime(data.sunrise));\n  setWeatherInfo('#sunset', date.convertTime(data.sunset));\n}\n\n// Async API call to Openweathermap\nfunction displayDailyWeatherData(inData) {\n  inData.forEach((dayData, index) => {\n    if (index !== 0) {\n      // Retrieve temperature range for today\n      // const todayData = new WeatherData(dayData);\n      // setWeatherInfo('temp-min', `${parseInt(todayData.temp.min, 10)} ??C`);\n      // setWeatherInfo('temp-max', `${parseInt(todayData.temp.max, 10)} ??C`);\n\n      const data = new WeatherData(dayData);\n      data.setTempRange(dayData.temp.min, dayData.temp.max);\n\n      const day = initDate().getDay(dayData.dt);\n      setWeatherInfo(`#date-str-${index}`, day.str);\n      setWeatherInfo(`#date-num-${index}`, day.num);\n      setWeatherIcon(`#icon-${index}`, data.icon);\n      setWeatherInfo(`#min-${index}`, `${data.minTemp}??`);\n      setWeatherInfo(`#max-${index}`, `${data.maxTemp}??`);\n    }\n  });\n}\n\nasync function getWeather(searchTerm = 'Vancouver') {\n  const key = 'a4c83ab0b3a1b833a65c948cf5fe6e58';\n\n  try {\n    // Get long and lat\n    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=3&appid=${key}`;\n    const response = await fetch(url, { mode: 'cors' });\n    const responseData = await response.json();\n    setWeatherInfo('#location', `${responseData[0].name}, ${responseData[0].country}`);\n\n    // Perform One Call API\n    const urlCall = `https://api.openweathermap.org/data/2.5/onecall?lat=${responseData[0].lat}&lon=${responseData[0].lon}&exclude=minutely,hourly,alerts&appid=${key}&units=metric`;\n    const responseCall = await fetch(urlCall, { mode: 'cors' });\n    const responseDataCall = await responseCall.json();\n\n    displayCurrentWeatherData(responseDataCall.current);\n    displayDailyWeatherData(responseDataCall.daily);\n  } catch (err) {\n    console.log(new Error(err));\n  }\n}\n\n// Adding user location input feature\nfunction addUserInputFeature() {\n  window.addEventListener('keydown', (e) => {\n    if ((e.key === 'Enter') && (e.target.matches('input'))) {\n      const location = e.target.value;\n      getWeather(location);\n      e.target.value = '';\n    }\n  });\n}\n\nfunction loadFeatures() {\n  addUserInputFeature();\n  getWeather('Vancouver');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFeatures);\n\n\n//# sourceURL=webpack://weather-app/./src/modules/functions.js?");

/***/ }),

/***/ "./src/images/sunset.jpg":
/*!*******************************!*\
  !*** ./src/images/sunset.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b58dbea9e40abc72270c.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/images/sunset.jpg?");

/***/ }),

/***/ "./src/modules/icons.json":
/*!********************************!*\
  !*** ./src/modules/icons.json ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"200\":{\"description\":\"thunderstorm with light rain\",\"icon\":\"thunderstorm\"},\"201\":{\"description\":\"thunderstorm with rain\",\"icon\":\"thunderstorm\"},\"202\":{\"description\":\"thunderstorm with heavy rain\",\"icon\":\"thunderstorm\"},\"210\":{\"description\":\"light thunderstorm\",\"icon\":\"thunderstorm\"},\"211\":{\"description\":\"thunderstorm\",\"icon\":\"thunderstorm\"},\"221\":{\"description\":\"ragged thunderstorm\",\"icon\":\"thunderstorm\"},\"230\":{\"description\":\"thunderstorm with light drizzle\",\"icon\":\"thunderstorm\"},\"231\":{\"description\":\"thunderstorm with drizzle\",\"icon\":\"thunderstorm\"},\"232\":{\"description\":\"thunderstorm with heavy drizzle\",\"icon\":\"thunderstorm\"},\"300\":{\"description\":\"light intensity drizzle\",\"icon\":\"drizzle\"},\"301\":{\"description\":\"drizzle\",\"icon\":\"drizzle\"},\"302\":{\"description\":\"heavy intensity drizzle\",\"icon\":\"drizzle\"},\"310\":{\"description\":\"light intensity drizzle rain\",\"icon\":\"drizzle\"},\"311\":{\"description\":\"drizzle rain\",\"icon\":\"drizzle\"},\"312\":{\"description\":\"heavy intensity drizzle rain\",\"icon\":\"drizzle\"},\"313\":{\"description\":\"shower rain and drizzle\",\"icon\":\"drizzle\"},\"314\":{\"description\":\"heavy shower rain and drizzle\",\"icon\":\"drizzle\"},\"321\":{\"description\":\"shower drizzle\",\"icon\":\"drizzle\"},\"500\":{\"description\":\"light rain\",\"icon\":\"rain\"},\"501\":{\"description\":\"moderate rain\",\"icon\":\"rain\"},\"502\":{\"description\":\"heavy intensity rain\",\"icon\":\"rain\"},\"503\":{\"description\":\"very heavy rain\",\"icon\":\"rain\"},\"504\":{\"description\":\"extreme rain\",\"icon\":\"rain\"},\"511\":{\"description\":\"freezing rain\",\"icon\":\"rain\"},\"520\":{\"description\":\"light intensity shower rain\",\"icon\":\"rain\"},\"521\":{\"description\":\"shower rain\",\"icon\":\"rain\"},\"522\":{\"description\":\"heavy intensity shower rain\",\"icon\":\"rain\"},\"531\":{\"description\":\"ragged shower rain\",\"icon\":\"rain\"},\"600\":{\"description\":\"light snow\",\"icon\":\"snow\"},\"601\":{\"description\":\"snow\",\"icon\":\"snow\"},\"602\":{\"description\":\"heavy snow\",\"icon\":\"snow\"},\"611\":{\"description\":\"sleet\",\"icon\":\"snow\"},\"612\":{\"description\":\"light shower sleet\",\"icon\":\"snow\"},\"613\":{\"description\":\"shower sleet\",\"icon\":\"snow\"},\"615\":{\"description\":\"light rain and snow\",\"icon\":\"snow\"},\"616\":{\"description\":\"rain and snow\",\"icon\":\"snow\"},\"620\":{\"description\":\"light shower snow\",\"icon\":\"snow\"},\"621\":{\"description\":\"shower snow\",\"icon\":\"snow\"},\"622\":{\"description\":\"heavy shower snow\",\"icon\":\"snow\"},\"701\":{\"description\":\"mist\",\"icon\":\"mist\"},\"711\":{\"description\":\"smoke\",\"icon\":\"smoke\"},\"721\":{\"description\":\"haze\",\"icon\":\"haze\"},\"731\":{\"description\":\"sand/dust whirls\",\"icon\":\"dust\"},\"741\":{\"description\":\"fog\",\"icon\":\"fog\"},\"751\":{\"description\":\"sand\",\"icon\":\"sand\"},\"761\":{\"description\":\"dust\",\"icon\":\"dust\"},\"762\":{\"description\":\"volcanic ash\",\"icon\":\"ash\"},\"771\":{\"description\":\"squalls\",\"icon\":\"squall\"},\"781\":{\"description\":\"tornado\",\"icon\":\"tornado\"},\"800\":{\"description\":\"clear sky\",\"icon\":\"clear\"},\"801\":{\"description\":\"few clouds\",\"icon\":\"clouds\"},\"802\":{\"description\":\"scattered clouds\",\"icon\":\"clouds\"},\"803\":{\"description\":\"broken clouds\",\"icon\":\"clouds\"},\"804\":{\"description\":\"overcast clouds\",\"icon\":\"clouds\"}}');\n\n//# sourceURL=webpack://weather-app/./src/modules/icons.json?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;