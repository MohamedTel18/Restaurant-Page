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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Reset and base styles */\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Georgia', serif;\r\n    line-height: 1.6;\r\n    color: #333;\r\n    background-color: #f8f6f3;\r\n}\r\n\r\n/* Header and Navigation */\r\nheader {\r\n    background: linear-gradient(135deg, #8b4513, #a0522d);\r\n    padding: 1rem 0;\r\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2rem;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 0 2rem;\r\n}\r\n\r\nnav button {\r\n    background: transparent;\r\n    border: 2px solid #fff;\r\n    color: #fff;\r\n    padding: 0.8rem 2rem;\r\n    font-size: 1.1rem;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    border-radius: 25px;\r\n    transition: all 0.3s ease;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\nnav button:hover {\r\n    background: #fff;\r\n    color: #8b4513;\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 4px 8px rgba(0,0,0,0.2);\r\n}\r\n\r\nnav button.active {\r\n    background: #fff;\r\n    color: #8b4513;\r\n}\r\n\r\n/* Content area */\r\n#content {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    padding: 3rem 2rem;\r\n}\r\n\r\n/* Homepage styles */\r\n.homepage {\r\n    text-align: center;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.homepage h1 {\r\n    font-size: 3rem;\r\n    color: #8b4513;\r\n    margin-bottom: 2rem;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);\r\n    font-weight: normal;\r\n}\r\n\r\n.homepage img {\r\n    width: 100%;\r\n    max-width: 600px;\r\n    height: 300px;\r\n    object-fit: cover;\r\n    border-radius: 15px;\r\n    margin: 2rem 0;\r\n    box-shadow: 0 8px 25px rgba(0,0,0,0.15);\r\n    transition: transform 0.3s ease;\r\n}\r\n\r\n.homepage img:hover {\r\n    transform: scale(1.02);\r\n}\r\n\r\n.homepage p {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 1.5rem;\r\n    color: #555;\r\n    text-align: justify;\r\n    line-height: 1.8;\r\n}\r\n\r\n.homepage p:first-of-type {\r\n    font-size: 1.3rem;\r\n    font-style: italic;\r\n    color: #8b4513;\r\n    font-weight: 500;\r\n}\r\n\r\n.homepage p:last-of-type {\r\n    background: linear-gradient(135deg, #8b4513, #a0522d);\r\n    color: #fff;\r\n    padding: 1.5rem;\r\n    border-radius: 10px;\r\n    margin-top: 2rem;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    box-shadow: 0 4px 15px rgba(139, 69, 19, 0.3);\r\n}\r\n\r\n/* Menu page styles */\r\n.menu-page {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.menu-page h1 {\r\n    font-size: 3rem;\r\n    color: #8b4513;\r\n    text-align: center;\r\n    margin-bottom: 3rem;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);\r\n}\r\n\r\n.menu-section {\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.menu-section h2 {\r\n    font-size: 2rem;\r\n    color: #8b4513;\r\n    border-bottom: 3px solid #8b4513;\r\n    padding-bottom: 0.5rem;\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.menu-item {\r\n    background: #fff;\r\n    padding: 1.5rem;\r\n    margin-bottom: 1rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\r\n    transition: transform 0.2s ease;\r\n}\r\n\r\n.menu-item:hover {\r\n    transform: translateY(-2px);\r\n    box-shadow: 0 6px 12px rgba(0,0,0,0.15);\r\n}\r\n\r\n.menu-item-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 0.5rem;\r\n}\r\n\r\n.menu-item-name {\r\n    font-size: 1.3rem;\r\n    font-weight: bold;\r\n    color: #8b4513;\r\n}\r\n\r\n.menu-item-price {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    color: #a0522d;\r\n}\r\n\r\n.menu-item-description {\r\n    color: #666;\r\n    font-style: italic;\r\n    line-height: 1.4;\r\n}\r\n\r\n/* About page styles */\r\n.about-page {\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.about-page h1 {\r\n    font-size: 3rem;\r\n    color: #8b4513;\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);\r\n}\r\n\r\n.chef-image {\r\n    width: 100%;\r\n    max-width: 500px;\r\n    height: 300px;\r\n    object-fit: cover;\r\n    border-radius: 15px;\r\n    margin: 2rem auto;\r\n    display: block;\r\n    box-shadow: 0 8px 25px rgba(0,0,0,0.15);\r\n}\r\n\r\n.story-section, .values-section, .awards-section {\r\n    margin-bottom: 3rem;\r\n    background: #fff;\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 6px rgba(0,0,0,0.1);\r\n}\r\n\r\n.story-section h2, .values-section h2, .awards-section h2 {\r\n    font-size: 2rem;\r\n    color: #8b4513;\r\n    margin-bottom: 1rem;\r\n    border-bottom: 2px solid #8b4513;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n.story-section p, .values-section p, .awards-section p {\r\n    font-size: 1.1rem;\r\n    line-height: 1.8;\r\n    color: #555;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.values-list {\r\n    list-style: none;\r\n    padding: 0;\r\n}\r\n\r\n.values-list li {\r\n    font-size: 1.1rem;\r\n    color: #555;\r\n    padding: 0.5rem 0;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n\r\n.values-list li:before {\r\n    content: \"✓ \";\r\n    color: #8b4513;\r\n    font-weight: bold;\r\n    margin-right: 0.5rem;\r\n}\r\n\r\n.awards-text {\r\n    font-size: 1.2rem;\r\n    line-height: 2;\r\n    text-align: center;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout() {\r\n    const content = document.getElementById('content');\r\n    \r\n    // Create about container\r\n    const aboutPage = document.createElement('div');\r\n    aboutPage.className = 'about-page';\r\n    \r\n    // Create title\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'About Bella Vista';\r\n    aboutPage.appendChild(title);\r\n    \r\n    // Create chef image\r\n    const chefImage = document.createElement('img');\r\n    chefImage.src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';\r\n    chefImage.alt = 'Chef Marco preparing pasta';\r\n    chefImage.className = 'chef-image';\r\n    aboutPage.appendChild(chefImage);\r\n    \r\n    // Create story section\r\n    const storySection = document.createElement('div');\r\n    storySection.className = 'story-section';\r\n    \r\n    const storyTitle = document.createElement('h2');\r\n    storyTitle.textContent = 'Our Story';\r\n    storySection.appendChild(storyTitle);\r\n    \r\n    const story1 = document.createElement('p');\r\n    story1.textContent = 'Bella Vista was founded in 2003 by Chef Marco Rossi, who immigrated from Tuscany with a dream of bringing authentic Italian flavors to New York City. With recipes passed down through four generations of his family, Chef Marco has created a dining experience that transports guests straight to the heart of Italy.';\r\n    storySection.appendChild(story1);\r\n    \r\n    const story2 = document.createElement('p');\r\n    story2.textContent = 'Our restaurant is built on the principles of famiglia (family), tradizione (tradition), and amore (love). Every dish is prepared with the finest imported ingredients and the same passion that has been the hallmark of the Rossi family for over a century.';\r\n    storySection.appendChild(story2);\r\n    \r\n    aboutPage.appendChild(storySection);\r\n    \r\n    // Create values section\r\n    const valuesSection = document.createElement('div');\r\n    valuesSection.className = 'values-section';\r\n    \r\n    const valuesTitle = document.createElement('h2');\r\n    valuesTitle.textContent = 'Our Values';\r\n    valuesSection.appendChild(valuesTitle);\r\n    \r\n    const valuesList = document.createElement('ul');\r\n    valuesList.className = 'values-list';\r\n    \r\n    const values = [\r\n        'Fresh, locally-sourced ingredients whenever possible',\r\n        'Traditional Italian cooking techniques and recipes',\r\n        'Warm, family-style hospitality',\r\n        'Supporting our local community',\r\n        'Creating memorable dining experiences'\r\n    ];\r\n    \r\n    values.forEach(value => {\r\n        const listItem = document.createElement('li');\r\n        listItem.textContent = value;\r\n        valuesList.appendChild(listItem);\r\n    });\r\n    \r\n    valuesSection.appendChild(valuesList);\r\n    aboutPage.appendChild(valuesSection);\r\n    \r\n    // Create awards section\r\n    const awardsSection = document.createElement('div');\r\n    awardsSection.className = 'awards-section';\r\n    \r\n    const awardsTitle = document.createElement('h2');\r\n    awardsTitle.textContent = 'Recognition';\r\n    awardsSection.appendChild(awardsTitle);\r\n    \r\n    const awards = document.createElement('p');\r\n    awards.className = 'awards-text';\r\n    awards.innerHTML = '⭐ Zagat Rated<br>🏆 \"Best Italian Restaurant\" - NYC Food Awards 2022<br>👨‍🍳 James Beard Award Nominee<br>📰 Featured in Food & Wine Magazine';\r\n    awardsSection.appendChild(awards);\r\n    \r\n    aboutPage.appendChild(awardsSection);\r\n    \r\n    // Clear content and append about\r\n    content.innerHTML = '';\r\n    content.appendChild(aboutPage);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomepage: () => (/* binding */ createHomepage)\n/* harmony export */ });\nfunction createHomepage() {\r\n    const content = document.getElementById('content');\r\n    \r\n    // Create homepage container\r\n    const homepage = document.createElement('div');\r\n    homepage.className = 'homepage';\r\n    \r\n    // Create and append title\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Welcome to Bella Vista Restaurant';\r\n    homepage.appendChild(title);\r\n    \r\n    // Create and append image\r\n    const image = document.createElement('img');\r\n    image.src = 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';\r\n    image.alt = 'Restaurant interior';\r\n    homepage.appendChild(image);\r\n    \r\n    // Create and append paragraphs\r\n    const paragraph1 = document.createElement('p');\r\n    paragraph1.textContent = 'Experience the finest Italian cuisine in the heart of the city. At Bella Vista, we pride ourselves on using only the freshest ingredients, traditional recipes passed down through generations, and creating an atmosphere that makes every meal memorable.';\r\n    homepage.appendChild(paragraph1);\r\n    \r\n    const paragraph2 = document.createElement('p');\r\n    paragraph2.textContent = 'Our chef-driven menu features authentic dishes from various regions of Italy, paired with an extensive wine selection that perfectly complements every bite. Whether you\\'re joining us for a romantic dinner, family celebration, or business lunch, Bella Vista promises an unforgettable dining experience.';\r\n    homepage.appendChild(paragraph2);\r\n    \r\n    const paragraph3 = document.createElement('p');\r\n    paragraph3.textContent = 'Come discover why we\\'ve been the neighborhood\\'s favorite restaurant for over 20 years!';\r\n    homepage.appendChild(paragraph3);\r\n    \r\n    // Clear content and append homepage\r\n    content.innerHTML = '';\r\n    content.appendChild(homepage);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menue.js */ \"./src/menue.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Load the homepage when the page first loads\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)();\r\n\r\n// Tab switching logic\r\nfunction initializeTabSwitching() {\r\n    const homeBtn = document.getElementById('homeButton');\r\n    const menuBtn = document.getElementById('menuButton');\r\n    const aboutBtn = document.getElementById('AboutButton');\r\n\r\n    // Remove active class from all buttons\r\n    function clearActiveButtons() {\r\n        homeBtn.classList.remove('active');\r\n        menuBtn.classList.remove('active');\r\n        aboutBtn.classList.remove('active');\r\n    }\r\n    \r\n    // Home tab\r\n    homeBtn.addEventListener('click', () => {\r\n        clearActiveButtons();\r\n        homeBtn.classList.add('active');\r\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomepage)();\r\n    });\r\n    \r\n    // Menu tab\r\n    menuBtn.addEventListener('click', () => {\r\n        clearActiveButtons();\r\n        menuBtn.classList.add('active');\r\n        (0,_menue_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)();\r\n    });\r\n    \r\n    // About tab\r\n    aboutBtn.addEventListener('click', () => {\r\n        clearActiveButtons();\r\n        aboutBtn.classList.add('active');\r\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.createAbout)();\r\n    });\r\n    \r\n    // Set home button as active by default\r\n    homeBtn.classList.add('active');\r\n}\r\n\r\n// Initialize tab switching when the DOM is loaded\r\ndocument.addEventListener('DOMContentLoaded', initializeTabSwitching);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menue.js":
/*!**********************!*\
  !*** ./src/menue.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu() {\r\n    const content = document.getElementById('content');\r\n    \r\n    // Create menu container\r\n    const menuPage = document.createElement('div');\r\n    menuPage.className = 'menu-page';\r\n    \r\n    // Create title\r\n    const title = document.createElement('h1');\r\n    title.textContent = 'Our Menu';\r\n    menuPage.appendChild(title);\r\n    \r\n    // Create appetizers section\r\n    const appetizersSection = document.createElement('div');\r\n    appetizersSection.className = 'menu-section';\r\n    \r\n    const appetizersTitle = document.createElement('h2');\r\n    appetizersTitle.textContent = 'Antipasti';\r\n    appetizersSection.appendChild(appetizersTitle);\r\n    \r\n    const appetizersList = [\r\n        { name: 'Bruschetta Classica', price: '$12', description: 'Toasted bread with fresh tomatoes, basil, and garlic' },\r\n        { name: 'Antipasto Misto', price: '$18', description: 'Selection of cured meats, cheeses, and marinated vegetables' },\r\n        { name: 'Calamari Fritti', price: '$15', description: 'Crispy fried squid with spicy marinara sauce' }\r\n    ];\r\n    \r\n    appetizersList.forEach(item => {\r\n        const menuItem = createMenuItem(item);\r\n        appetizersSection.appendChild(menuItem);\r\n    });\r\n    \r\n    menuPage.appendChild(appetizersSection);\r\n    \r\n    // Create main courses section\r\n    const mainSection = document.createElement('div');\r\n    mainSection.className = 'menu-section';\r\n    \r\n    const mainTitle = document.createElement('h2');\r\n    mainTitle.textContent = 'Primi & Secondi';\r\n    mainSection.appendChild(mainTitle);\r\n    \r\n    const mainsList = [\r\n        { name: 'Spaghetti Carbonara', price: '$22', description: 'Classic Roman pasta with eggs, pecorino cheese, and pancetta' },\r\n        { name: 'Osso Buco', price: '$32', description: 'Braised veal shanks with saffron risotto' },\r\n        { name: 'Linguine alle Vongole', price: '$26', description: 'Fresh clams with white wine, garlic, and parsley' },\r\n        { name: 'Bistecca alla Fiorentina', price: '$45', description: 'Grilled T-bone steak with rosemary and olive oil' }\r\n    ];\r\n    \r\n    mainsList.forEach(item => {\r\n        const menuItem = createMenuItem(item);\r\n        mainSection.appendChild(menuItem);\r\n    });\r\n    \r\n    menuPage.appendChild(mainSection);\r\n    \r\n    // Create desserts section\r\n    const dessertsSection = document.createElement('div');\r\n    dessertsSection.className = 'menu-section';\r\n    \r\n    const dessertsTitle = document.createElement('h2');\r\n    dessertsTitle.textContent = 'Dolci';\r\n    dessertsSection.appendChild(dessertsTitle);\r\n    \r\n    const dessertsList = [\r\n        { name: 'Tiramisu', price: '$9', description: 'Classic coffee-flavored dessert with mascarpone' },\r\n        { name: 'Panna Cotta', price: '$8', description: 'Vanilla custard with berry compote' },\r\n        { name: 'Cannoli Siciliani', price: '$7', description: 'Crispy shells filled with sweet ricotta cream' }\r\n    ];\r\n    \r\n    dessertsList.forEach(item => {\r\n        const menuItem = createMenuItem(item);\r\n        dessertsSection.appendChild(menuItem);\r\n    });\r\n    \r\n    menuPage.appendChild(dessertsSection);\r\n    \r\n    // Clear content and append menu\r\n    content.innerHTML = '';\r\n    content.appendChild(menuPage);\r\n}\r\n\r\nfunction createMenuItem(item) {\r\n    const menuItem = document.createElement('div');\r\n    menuItem.className = 'menu-item';\r\n    \r\n    const itemHeader = document.createElement('div');\r\n    itemHeader.className = 'menu-item-header';\r\n    \r\n    const itemName = document.createElement('span');\r\n    itemName.className = 'menu-item-name';\r\n    itemName.textContent = item.name;\r\n    \r\n    const itemPrice = document.createElement('span');\r\n    itemPrice.className = 'menu-item-price';\r\n    itemPrice.textContent = item.price;\r\n    \r\n    itemHeader.appendChild(itemName);\r\n    itemHeader.appendChild(itemPrice);\r\n    \r\n    const itemDescription = document.createElement('p');\r\n    itemDescription.className = 'menu-item-description';\r\n    itemDescription.textContent = item.description;\r\n    \r\n    menuItem.appendChild(itemHeader);\r\n    menuItem.appendChild(itemDescription);\r\n    \r\n    return menuItem;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menue.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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