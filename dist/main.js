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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _visualization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visualization.js */ \"./visualization.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_visualization_js__WEBPACK_IMPORTED_MODULE_0__.fn1)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQUNGLEVBQUFBLHNEQUFHO0FBQUcsQ0FBM0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmbjF9IGZyb20gXCIuLi92aXN1YWxpemF0aW9uLmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtmbjEoKX0pIl0sIm5hbWVzIjpbImZuMSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./visualization.js":
/*!**************************!*\
  !*** ./visualization.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fn1\": function() { return /* binding */ fn1; }\n/* harmony export */ });\nfunction fn1() {\n  console.log(\"3\");\n  var margin = {\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  };\n  var height = 400 - margin.top - margin.bottom;\n  var width = 800 - margin.left - margin.right; // boilerplate for starting a d3 visualization\n\n  var svg = d3.select(\"#map\").append(\"svg\").attr(\"height\", height + margin.top + margin.bottom).attr(\"width\", width + margin.left + margin.right).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // us.json imported from GeoJSON from TopoJSON\n\n  d3.queue().defer(d3.json, \"us.json\").await(ready); // uses Albers USA through GeoMercator and centers it while zooming in \n\n  var projection = d3.geoMercator().translate([width / 2, height / 2]).scale(100); // creates path (geoPath) and sets projection\n  // changes latitude and logitude in order to render a round map onto our flat surface\n\n  var path = d3.geoPath().projection(projection);\n\n  function ready(error, data) {\n    console.log(data); // topojson.feature converts raw geo data into useable geo data\n\n    var states = topojson.feature(data, data.objects.states).features;\n    console.log(states);\n    svg.selectAll(\".state\").data(states).enter().append(\"path\").attr(\"class\", \"state\").attr(\"d\", path);\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aXN1YWxpemF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxHQUFULEdBQWU7QUFFbEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUc7QUFBRUMsSUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVUMsSUFBQUEsSUFBSSxFQUFFLENBQWhCO0FBQW1CQyxJQUFBQSxLQUFLLEVBQUUsQ0FBMUI7QUFBNkJDLElBQUFBLE1BQU0sRUFBRTtBQUFyQyxHQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0MsR0FBYixHQUFtQkQsTUFBTSxDQUFDSSxNQUF2QztBQUNBLE1BQUlFLEtBQUssR0FBRyxNQUFNTixNQUFNLENBQUNFLElBQWIsR0FBb0JGLE1BQU0sQ0FBQ0csS0FBdkMsQ0FMa0IsQ0FPbEI7O0FBQ0EsTUFBSUksR0FBRyxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLEVBQ0xDLE1BREssQ0FDRSxLQURGLEVBRUxDLElBRkssQ0FFQSxRQUZBLEVBRVVOLE1BQU0sR0FBR0wsTUFBTSxDQUFDQyxHQUFoQixHQUFzQkQsTUFBTSxDQUFDSSxNQUZ2QyxFQUdMTyxJQUhLLENBR0EsT0FIQSxFQUdTTCxLQUFLLEdBQUdOLE1BQU0sQ0FBQ0UsSUFBZixHQUFzQkYsTUFBTSxDQUFDRyxLQUh0QyxFQUlMTyxNQUpLLENBSUUsR0FKRixFQUtMQyxJQUxLLENBS0EsV0FMQSxFQUthLGVBQWVYLE1BQU0sQ0FBQ0UsSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUNGLE1BQU0sQ0FBQ0MsR0FBMUMsR0FBZ0QsR0FMN0QsQ0FBVixDQVJrQixDQWVsQjs7QUFDQU8sRUFBQUEsRUFBRSxDQUFDSSxLQUFILEdBQ0tDLEtBREwsQ0FDV0wsRUFBRSxDQUFDTSxJQURkLEVBQ29CLFNBRHBCLEVBRUtDLEtBRkwsQ0FFV0MsS0FGWCxFQWhCa0IsQ0FxQmxCOztBQUNBLE1BQUlDLFVBQVUsR0FBR1QsRUFBRSxDQUFDVSxXQUFILEdBQ1pDLFNBRFksQ0FDRixDQUFFYixLQUFLLEdBQUcsQ0FBVixFQUFhRCxNQUFNLEdBQUcsQ0FBdEIsQ0FERSxFQUVaZSxLQUZZLENBRU4sR0FGTSxDQUFqQixDQXRCa0IsQ0EwQmxCO0FBQ0E7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHYixFQUFFLENBQUNjLE9BQUgsR0FDTkwsVUFETSxDQUNLQSxVQURMLENBQVg7O0FBR0EsV0FBU0QsS0FBVCxDQUFlTyxLQUFmLEVBQXNCQyxJQUF0QixFQUE0QjtBQUN4QjFCLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZeUIsSUFBWixFQUR3QixDQUd4Qjs7QUFDQSxRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkgsSUFBakIsRUFBdUJBLElBQUksQ0FBQ0ksT0FBTCxDQUFhSCxNQUFwQyxFQUE0Q0ksUUFBekQ7QUFDQS9CLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMEIsTUFBWjtBQUVBbEIsSUFBQUEsR0FBRyxDQUFDdUIsU0FBSixDQUFjLFFBQWQsRUFDS04sSUFETCxDQUNVQyxNQURWLEVBRUtNLEtBRkwsR0FFYXJCLE1BRmIsQ0FFb0IsTUFGcEIsRUFHS0MsSUFITCxDQUdVLE9BSFYsRUFHbUIsT0FIbkIsRUFJS0EsSUFKTCxDQUlVLEdBSlYsRUFJZVUsSUFKZjtBQUtIO0FBQ0o7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi92aXN1YWxpemF0aW9uLmpzP2JkZjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZuMSgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiM1wiKTtcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBib3R0b206IDB9O1xuICAgIGxldCBoZWlnaHQgPSA0MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgICBsZXQgd2lkdGggPSA4MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxuICAgIC8vIGJvaWxlcnBsYXRlIGZvciBzdGFydGluZyBhIGQzIHZpc3VhbGl6YXRpb25cbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyB1cy5qc29uIGltcG9ydGVkIGZyb20gR2VvSlNPTiBmcm9tIFRvcG9KU09OXG4gICAgZDMucXVldWUoKVxuICAgICAgICAuZGVmZXIoZDMuanNvbiwgXCJ1cy5qc29uXCIpXG4gICAgICAgIC5hd2FpdChyZWFkeSk7XG5cblxuICAgIC8vIHVzZXMgQWxiZXJzIFVTQSB0aHJvdWdoIEdlb01lcmNhdG9yIGFuZCBjZW50ZXJzIGl0IHdoaWxlIHpvb21pbmcgaW4gXG4gICAgbGV0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4gICAgICAgIC50cmFuc2xhdGUoWyB3aWR0aCAvIDIsIGhlaWdodCAvIDJdKVxuICAgICAgICAuc2NhbGUoMTAwKTtcblxuICAgIC8vIGNyZWF0ZXMgcGF0aCAoZ2VvUGF0aCkgYW5kIHNldHMgcHJvamVjdGlvblxuICAgIC8vIGNoYW5nZXMgbGF0aXR1ZGUgYW5kIGxvZ2l0dWRlIGluIG9yZGVyIHRvIHJlbmRlciBhIHJvdW5kIG1hcCBvbnRvIG91ciBmbGF0IHN1cmZhY2VcbiAgICBsZXQgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgICAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIHJlYWR5KGVycm9yLCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIHRvcG9qc29uLmZlYXR1cmUgY29udmVydHMgcmF3IGdlbyBkYXRhIGludG8gdXNlYWJsZSBnZW8gZGF0YVxuICAgICAgICBsZXQgc3RhdGVzID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuc3RhdGVzKS5mZWF0dXJlc1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZXMpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuc3RhdGVcIilcbiAgICAgICAgICAgIC5kYXRhKHN0YXRlcylcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZVwiKVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIHBhdGgpXG4gICAgfVxufTtcbiJdLCJuYW1lcyI6WyJmbjEiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luIiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJxdWV1ZSIsImRlZmVyIiwianNvbiIsImF3YWl0IiwicmVhZHkiLCJwcm9qZWN0aW9uIiwiZ2VvTWVyY2F0b3IiLCJ0cmFuc2xhdGUiLCJzY2FsZSIsInBhdGgiLCJnZW9QYXRoIiwiZXJyb3IiLCJkYXRhIiwic3RhdGVzIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsImZlYXR1cmVzIiwic2VsZWN0QWxsIiwiZW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./visualization.js\n");

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