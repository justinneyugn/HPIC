/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map_render.js */ \"./src/scripts/map_render.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_scripts_map_render_js__WEBPACK_IMPORTED_MODULE_0__.fn1)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQUNGLEVBQUFBLDJEQUFHO0FBQUcsQ0FBM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmbjF9IGZyb20gXCIuL3NjcmlwdHMvbWFwX3JlbmRlci5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7Zm4xKCl9KSJdLCJuYW1lcyI6WyJmbjEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map_render.js":
/*!***********************************!*\
  !*** ./src/scripts/map_render.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fn1\": function() { return /* binding */ fn1; }\n/* harmony export */ });\nfunction fn1() {\n  console.log(\"3\");\n  var margin = {\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  };\n  var height = 400 - margin.top - margin.bottom;\n  var width = 800 - margin.left - margin.right; // boilerplate for starting a d3 visualization\n\n  var svg = d3.select(\"#map\").append(\"svg\").attr(\"height\", height + margin.top + margin.bottom).attr(\"width\", width + margin.left + margin.right).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // us.json imported from GeoJSON from TopoJSON\n\n  d3.queue().defer(d3.json, \"../src/scripts/us.json\").await(ready); // create basis for legend\n\n  var color = d3.scale.linear().range([\"rgb(213,222,217)\", \"rgb(69,173,168)\", \"rgb(84,36,55)\", \"rgb(238,130,238)\", \"rgb(60,179,113\"]);\n  var legendText = [\"Nene Leakes\", \"Kim Zolciak-Biermann\", \"Porsha Williams\", \"Kenya Moore\"];\n  var div = d3.select(\"map\").append(\"div\").attr(\"class\", \"tooltip\").style(\"opacity\", 0); // uses Albers USA through GeoMercator and centers it while zooming in \n\n  var projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(900); // creates path (geoPath) and sets projection\n  // changes latitude and logitude in order to render a round map onto our flat surface\n\n  var path = d3.geoPath().projection(projection);\n\n  function ready(error, data) {\n    console.log(data); // topojson.feature converts raw geo data into useable geo data\n\n    var states = topojson.feature(data, data.objects.states).features;\n    console.log(states); // load in 2012 data\n\n    d3.csv(\"../src/data/2012_test.csv\", function (dataset) {\n      color.domain([0, 1, 2, 3, 4]); // set range of input data\n\n      for (var i = 0; i < dataset.length; i++) {\n        var dataState = dataset[i].State;\n        console.log(dataState);\n        var dataValue = 0;\n        var arr = [parseInt(dataset[i].Nene), parseInt(dataset[i].Kim), parseInt(dataset[i].Kandi), parseInt(dataset[i].Porsha), parseInt(dataset[i].Kenya)];\n        var biggest = Math.max.apply(Math, arr);\n        dataValue = arr.indexOf(biggest);\n      }\n    });\n    svg.selectAll(\".state\").data(states).enter().append(\"path\").attr(\"class\", \"state\") // \"d\" is the coordinate points for each state, path draws it\n    .attr(\"d\", path);\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBS1UsR0FMVixFQUtlZ0IsSUFMZjtBQU9IO0FBQ0o7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvc2NyaXB0cy9tYXBfcmVuZGVyLmpzPzAxYzMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZuMSgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiM1wiKTtcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBib3R0b206IDB9O1xuICAgIGxldCBoZWlnaHQgPSA0MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgICBsZXQgd2lkdGggPSA4MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxuICAgIC8vIGJvaWxlcnBsYXRlIGZvciBzdGFydGluZyBhIGQzIHZpc3VhbGl6YXRpb25cbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyB1cy5qc29uIGltcG9ydGVkIGZyb20gR2VvSlNPTiBmcm9tIFRvcG9KU09OXG4gICAgZDMucXVldWUoKVxuICAgICAgICAuZGVmZXIoZDMuanNvbiwgXCIuLi9zcmMvc2NyaXB0cy91cy5qc29uXCIpXG4gICAgICAgIC5hd2FpdChyZWFkeSk7XG5cbiAgICAvLyBjcmVhdGUgYmFzaXMgZm9yIGxlZ2VuZFxuICAgIGxldCBjb2xvciA9IGQzLnNjYWxlLmxpbmVhcigpXG4gICAgICAgIC5yYW5nZShbXCJyZ2IoMjEzLDIyMiwyMTcpXCIsXCJyZ2IoNjksMTczLDE2OClcIixcInJnYig4NCwzNiw1NSlcIixcInJnYigyMzgsMTMwLDIzOClcIixcInJnYig2MCwxNzksMTEzXCJdKTtcbiAgICBcbiAgICBsZXQgbGVnZW5kVGV4dCA9IFtcIk5lbmUgTGVha2VzXCIsIFwiS2ltIFpvbGNpYWstQmllcm1hbm5cIiwgXCJQb3JzaGEgV2lsbGlhbXNcIiwgXCJLZW55YSBNb29yZVwiXTtcblxuICAgIGxldCBkaXYgPSBkMy5zZWxlY3QoXCJtYXBcIilcbiAgICAgICAgLmFwcGVuZChcImRpdlwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuXG4gICAgLy8gdXNlcyBBbGJlcnMgVVNBIHRocm91Z2ggR2VvTWVyY2F0b3IgYW5kIGNlbnRlcnMgaXQgd2hpbGUgem9vbWluZyBpbiBcbiAgICBsZXQgcHJvamVjdGlvbiA9IGQzLmdlb0FsYmVyc1VzYSgpXG4gICAgICAgIC50cmFuc2xhdGUoWyB3aWR0aCAvIDIsIGhlaWdodCAvIDJdKVxuICAgICAgICAuc2NhbGUoOTAwKTtcblxuICAgIC8vIGNyZWF0ZXMgcGF0aCAoZ2VvUGF0aCkgYW5kIHNldHMgcHJvamVjdGlvblxuICAgIC8vIGNoYW5nZXMgbGF0aXR1ZGUgYW5kIGxvZ2l0dWRlIGluIG9yZGVyIHRvIHJlbmRlciBhIHJvdW5kIG1hcCBvbnRvIG91ciBmbGF0IHN1cmZhY2VcbiAgICBsZXQgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgICAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuXG4gICAgZnVuY3Rpb24gcmVhZHkoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy8gdG9wb2pzb24uZmVhdHVyZSBjb252ZXJ0cyByYXcgZ2VvIGRhdGEgaW50byB1c2VhYmxlIGdlbyBkYXRhXG4gICAgICAgIGxldCBzdGF0ZXMgPSB0b3BvanNvbi5mZWF0dXJlKGRhdGEsIGRhdGEub2JqZWN0cy5zdGF0ZXMpLmZlYXR1cmVzXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlcyk7XG5cbiAgICAgICAgLy8gbG9hZCBpbiAyMDEyIGRhdGFcbiAgICAgICAgZDMuY3N2KFwiLi4vc3JjL2RhdGEvMjAxMl90ZXN0LmNzdlwiLCBmdW5jdGlvbihkYXRhc2V0KXtcbiAgICAgICAgICAgIGNvbG9yLmRvbWFpbihbMCwxLDIsMyw0XSk7IC8vIHNldCByYW5nZSBvZiBpbnB1dCBkYXRhXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhU3RhdGUgPSBkYXRhc2V0W2ldLlN0YXRlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFTdGF0ZSlcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVZhbHVlID0gMFxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbcGFyc2VJbnQoZGF0YXNldFtpXS5OZW5lKSwgcGFyc2VJbnQoZGF0YXNldFtpXS5LaW0pLCBwYXJzZUludChkYXRhc2V0W2ldLkthbmRpKSwgcGFyc2VJbnQoZGF0YXNldFtpXS5Qb3JzaGEpLCBwYXJzZUludChkYXRhc2V0W2ldLktlbnlhKV1cbiAgICAgICAgICAgICAgICBsZXQgYmlnZ2VzdCA9IE1hdGgubWF4KC4uLmFycik7XG4gICAgICAgICAgICAgICAgZGF0YVZhbHVlID0gYXJyLmluZGV4T2YoYmlnZ2VzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc3ZnLnNlbGVjdEFsbChcIi5zdGF0ZVwiKVxuICAgICAgICAgICAgLmRhdGEoc3RhdGVzKVxuICAgICAgICAgICAgLmVudGVyKCkuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInN0YXRlXCIpXG4gICAgICAgICAgICAvLyBcImRcIiBpcyB0aGUgY29vcmRpbmF0ZSBwb2ludHMgZm9yIGVhY2ggc3RhdGUsIHBhdGggZHJhd3MgaXRcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKVxuXG4gICAgfVxufTtcbiJdLCJuYW1lcyI6WyJmbjEiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJxdWV1ZSIsImRlZmVyIiwianNvbiIsImF3YWl0IiwicmVhZHkiLCJjb2xvciIsInNjYWxlIiwibGluZWFyIiwicmFuZ2UiLCJsZWdlbmRUZXh0IiwiZGl2Iiwic3R5bGUiLCJwcm9qZWN0aW9uIiwiZ2VvQWxiZXJzVXNhIiwidHJhbnNsYXRlIiwicGF0aCIsImdlb1BhdGgiLCJlcnJvciIsImRhdGEiLCJzdGF0ZXMiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZmVhdHVyZXMiLCJjc3YiLCJkYXRhc2V0IiwiZG9tYWluIiwiaSIsImxlbmd0aCIsImRhdGFTdGF0ZSIsIlN0YXRlIiwiZGF0YVZhbHVlIiwiYXJyIiwicGFyc2VJbnQiLCJOZW5lIiwiS2ltIiwiS2FuZGkiLCJQb3JzaGEiLCJLZW55YSIsImJpZ2dlc3QiLCJNYXRoIiwibWF4IiwiaW5kZXhPZiIsInNlbGVjdEFsbCIsImVudGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/map_render.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;