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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _visualization_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../visualization.js */ \"./visualization.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  return (0,_visualization_js__WEBPACK_IMPORTED_MODULE_0__.fn1)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QztBQUFBLFNBQU1GLHNEQUFHLEVBQVQ7QUFBQSxDQUE5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2ZuMX0gZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb24uanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4gZm4xKCkpIl0sIm5hbWVzIjpbImZuMSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./visualization.js":
/*!**************************!*\
  !*** ./visualization.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fn1\": function() { return /* binding */ fn1; }\n/* harmony export */ });\nvar fn1 = function fn1() {\n  var margin = {\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  };\n  var height = 400 - margin.top - margin.bottom;\n  var width = 800 - margin.left - margin.right; // boilerplate for starting a d3 visualization\n\n  var svg = d3.select(\"#map\").append(\"svg\").attr(\"height\", height + margin.top + margin.bottom).attr(\"width\", width + margin.left + margin.right).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // us.json imported from: \n\n  d3.queue().defer(d3.json, \"us.json\").await(ready); // uses Albers USA and centers it while zooming in \n\n  var projection = d3.geoMercator().translate([width / 2, height / 2]).scale(100); // creates path (geoPath) and sets projection\n\n  var path = d3.geoPath().projection(projection);\n\n  function ready(error, data) {\n    console.log(data); // topojson.feature converts raw geo data into useable geo data\n\n    var states = topojson.feature(data, data.objects.states).features;\n    console.log(states); // add paths for each state\n\n    svg.selectAll(\".state\").data(states).enter().append(\"path\").attr(\"class\", \"state\").attr(\"d\", path);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi92aXN1YWxpemF0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFNO0FBR3JCLE1BQUlDLE1BQU0sR0FBRztBQUFFQyxJQUFBQSxHQUFHLEVBQUUsQ0FBUDtBQUFVQyxJQUFBQSxJQUFJLEVBQUUsQ0FBaEI7QUFBbUJDLElBQUFBLEtBQUssRUFBRSxDQUExQjtBQUE2QkMsSUFBQUEsTUFBTSxFQUFFO0FBQXJDLEdBQWI7QUFDQSxNQUFJQyxNQUFNLEdBQUcsTUFBTUwsTUFBTSxDQUFDQyxHQUFiLEdBQW1CRCxNQUFNLENBQUNJLE1BQXZDO0FBQ0EsTUFBSUUsS0FBSyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ0UsSUFBYixHQUFvQkYsTUFBTSxDQUFDRyxLQUF2QyxDQUxxQixDQU9yQjs7QUFDQSxNQUFJSSxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLE1BQVYsRUFDTEMsTUFESyxDQUNFLEtBREYsRUFFTEMsSUFGSyxDQUVBLFFBRkEsRUFFVU4sTUFBTSxHQUFHTCxNQUFNLENBQUNDLEdBQWhCLEdBQXNCRCxNQUFNLENBQUNJLE1BRnZDLEVBR0xPLElBSEssQ0FHQSxPQUhBLEVBR1NMLEtBQUssR0FBR04sTUFBTSxDQUFDRSxJQUFmLEdBQXNCRixNQUFNLENBQUNHLEtBSHRDLEVBSUxPLE1BSkssQ0FJRSxHQUpGLEVBS0xDLElBTEssQ0FLQSxXQUxBLEVBS2EsZUFBZVgsTUFBTSxDQUFDRSxJQUF0QixHQUE2QixHQUE3QixHQUFtQ0YsTUFBTSxDQUFDQyxHQUExQyxHQUFnRCxHQUw3RCxDQUFWLENBUnFCLENBZXJCOztBQUNBTyxFQUFBQSxFQUFFLENBQUNJLEtBQUgsR0FDS0MsS0FETCxDQUNXTCxFQUFFLENBQUNNLElBRGQsRUFDb0IsU0FEcEIsRUFFS0MsS0FGTCxDQUVXQyxLQUZYLEVBaEJxQixDQW9CckI7O0FBQ0EsTUFBSUMsVUFBVSxHQUFHVCxFQUFFLENBQUNVLFdBQUgsR0FDWkMsU0FEWSxDQUNGLENBQUViLEtBQUssR0FBRyxDQUFWLEVBQWFELE1BQU0sR0FBRyxDQUF0QixDQURFLEVBRVplLEtBRlksQ0FFTixHQUZNLENBQWpCLENBckJxQixDQXlCckI7O0FBQ0EsTUFBSUMsSUFBSSxHQUFHYixFQUFFLENBQUNjLE9BQUgsR0FDTkwsVUFETSxDQUNLQSxVQURMLENBQVg7O0FBR0EsV0FBU0QsS0FBVCxDQUFlTyxLQUFmLEVBQXNCQyxJQUF0QixFQUE0QjtBQUN4QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFEd0IsQ0FHeEI7O0FBQ0EsUUFBSUcsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUJMLElBQWpCLEVBQXVCQSxJQUFJLENBQUNNLE9BQUwsQ0FBYUgsTUFBcEMsRUFBNENJLFFBQXpEO0FBQ0FOLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFaLEVBTHdCLENBT3hCOztBQUNBcEIsSUFBQUEsR0FBRyxDQUFDeUIsU0FBSixDQUFjLFFBQWQsRUFDS1IsSUFETCxDQUNVRyxNQURWLEVBRUtNLEtBRkwsR0FFYXZCLE1BRmIsQ0FFb0IsTUFGcEIsRUFHS0MsSUFITCxDQUdVLE9BSFYsRUFHbUIsT0FIbkIsRUFJS0EsSUFKTCxDQUlVLEdBSlYsRUFJZVUsSUFKZjtBQUtIO0FBQ0osQ0EzQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vdmlzdWFsaXphdGlvbi5qcz9iZGY3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmbjEgPSAoKSA9PiB7XG5cbiAgICBcbiAgICBsZXQgbWFyZ2luID0geyB0b3A6IDAsIGxlZnQ6IDAsIHJpZ2h0OiAwLCBib3R0b206IDB9O1xuICAgIGxldCBoZWlnaHQgPSA0MDAgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgICBsZXQgd2lkdGggPSA4MDAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcblxuICAgIC8vIGJvaWxlcnBsYXRlIGZvciBzdGFydGluZyBhIGQzIHZpc3VhbGl6YXRpb25cbiAgICBsZXQgc3ZnID0gZDMuc2VsZWN0KFwiI21hcFwiKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCArIG1hcmdpbi50b3AgKyBtYXJnaW4uYm90dG9tKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICsgbWFyZ2luLmxlZnQgKyBtYXJnaW4ucmlnaHQpXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbiAgICAvLyB1cy5qc29uIGltcG9ydGVkIGZyb206IFxuICAgIGQzLnF1ZXVlKClcbiAgICAgICAgLmRlZmVyKGQzLmpzb24sIFwidXMuanNvblwiKVxuICAgICAgICAuYXdhaXQocmVhZHkpO1xuXG4gICAgLy8gdXNlcyBBbGJlcnMgVVNBIGFuZCBjZW50ZXJzIGl0IHdoaWxlIHpvb21pbmcgaW4gXG4gICAgbGV0IHByb2plY3Rpb24gPSBkMy5nZW9NZXJjYXRvcigpXG4gICAgICAgIC50cmFuc2xhdGUoWyB3aWR0aCAvIDIsIGhlaWdodCAvIDJdKVxuICAgICAgICAuc2NhbGUoMTAwKTtcblxuICAgIC8vIGNyZWF0ZXMgcGF0aCAoZ2VvUGF0aCkgYW5kIHNldHMgcHJvamVjdGlvblxuICAgIGxldCBwYXRoID0gZDMuZ2VvUGF0aCgpXG4gICAgICAgIC5wcm9qZWN0aW9uKHByb2plY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gcmVhZHkoZXJyb3IsIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG5cbiAgICAgICAgLy8gdG9wb2pzb24uZmVhdHVyZSBjb252ZXJ0cyByYXcgZ2VvIGRhdGEgaW50byB1c2VhYmxlIGdlbyBkYXRhXG4gICAgICAgIGxldCBzdGF0ZXMgPSB0b3BvanNvbi5mZWF0dXJlKGRhdGEsIGRhdGEub2JqZWN0cy5zdGF0ZXMpLmZlYXR1cmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZXMpO1xuXG4gICAgICAgIC8vIGFkZCBwYXRocyBmb3IgZWFjaCBzdGF0ZVxuICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLnN0YXRlXCIpXG4gICAgICAgICAgICAuZGF0YShzdGF0ZXMpXG4gICAgICAgICAgICAuZW50ZXIoKS5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic3RhdGVcIilcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBwYXRoKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6WyJmbjEiLCJtYXJnaW4iLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJoZWlnaHQiLCJ3aWR0aCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInF1ZXVlIiwiZGVmZXIiLCJqc29uIiwiYXdhaXQiLCJyZWFkeSIsInByb2plY3Rpb24iLCJnZW9NZXJjYXRvciIsInRyYW5zbGF0ZSIsInNjYWxlIiwicGF0aCIsImdlb1BhdGgiLCJlcnJvciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdGVzIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsImZlYXR1cmVzIiwic2VsZWN0QWxsIiwiZW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./visualization.js\n");

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