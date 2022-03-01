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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fn1\": function() { return /* binding */ fn1; }\n/* harmony export */ });\nfunction fn1() {\n  console.log(\"3\");\n  var margin = {\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  };\n  var height = 400 - margin.top - margin.bottom;\n  var width = 800 - margin.left - margin.right; // boilerplate for starting a d3 visualization\n\n  var svg = d3.select(\"#map\").append(\"svg\").attr(\"height\", height + margin.top + margin.bottom).attr(\"width\", width + margin.left + margin.right).append(\"g\").attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\"); // us.json imported from GeoJSON from TopoJSON\n\n  d3.queue().defer(d3.json, \"../src/scripts/us.json\").await(ready); // uses Albers USA through GeoMercator and centers it while zooming in \n\n  var projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(850); // creates path (geoPath) and sets projection\n  // changes latitude and logitude in order to render a round map onto our flat surface\n\n  var path = d3.geoPath().projection(projection);\n\n  function ready(error, data) {\n    console.log(data); // topojson.feature converts raw geo data into useable geo data\n\n    var states = topojson.feature(data, data.objects.states).features;\n    console.log(states);\n    svg.selectAll(\".state\").data(states).enter().append(\"path\").attr(\"class\", \"state\") // \"d\" is the coordinate points for each state, path draws it\n    .attr(\"d\", path);\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXBfcmVuZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxHQUFULEdBQWU7QUFFbEJDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUc7QUFBRUMsSUFBQUEsR0FBRyxFQUFFLENBQVA7QUFBVUMsSUFBQUEsSUFBSSxFQUFFLENBQWhCO0FBQW1CQyxJQUFBQSxLQUFLLEVBQUUsQ0FBMUI7QUFBNkJDLElBQUFBLE1BQU0sRUFBRTtBQUFyQyxHQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0MsR0FBYixHQUFtQkQsTUFBTSxDQUFDSSxNQUF2QztBQUNBLE1BQUlFLEtBQUssR0FBRyxNQUFNTixNQUFNLENBQUNFLElBQWIsR0FBb0JGLE1BQU0sQ0FBQ0csS0FBdkMsQ0FMa0IsQ0FPbEI7O0FBQ0EsTUFBSUksR0FBRyxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLEVBQ0xDLE1BREssQ0FDRSxLQURGLEVBRUxDLElBRkssQ0FFQSxRQUZBLEVBRVVOLE1BQU0sR0FBR0wsTUFBTSxDQUFDQyxHQUFoQixHQUFzQkQsTUFBTSxDQUFDSSxNQUZ2QyxFQUdMTyxJQUhLLENBR0EsT0FIQSxFQUdTTCxLQUFLLEdBQUdOLE1BQU0sQ0FBQ0UsSUFBZixHQUFzQkYsTUFBTSxDQUFDRyxLQUh0QyxFQUlMTyxNQUpLLENBSUUsR0FKRixFQUtMQyxJQUxLLENBS0EsV0FMQSxFQUthLGVBQWVYLE1BQU0sQ0FBQ0UsSUFBdEIsR0FBNkIsR0FBN0IsR0FBbUNGLE1BQU0sQ0FBQ0MsR0FBMUMsR0FBZ0QsR0FMN0QsQ0FBVixDQVJrQixDQWVsQjs7QUFDQU8sRUFBQUEsRUFBRSxDQUFDSSxLQUFILEdBQ0tDLEtBREwsQ0FDV0wsRUFBRSxDQUFDTSxJQURkLEVBQ29CLHdCQURwQixFQUVLQyxLQUZMLENBRVdDLEtBRlgsRUFoQmtCLENBcUJsQjs7QUFDQSxNQUFJQyxVQUFVLEdBQUdULEVBQUUsQ0FBQ1UsWUFBSCxHQUNaQyxTQURZLENBQ0YsQ0FBRWIsS0FBSyxHQUFHLENBQVYsRUFBYUQsTUFBTSxHQUFHLENBQXRCLENBREUsRUFFWmUsS0FGWSxDQUVOLEdBRk0sQ0FBakIsQ0F0QmtCLENBMEJsQjtBQUNBOztBQUNBLE1BQUlDLElBQUksR0FBR2IsRUFBRSxDQUFDYyxPQUFILEdBQ05MLFVBRE0sQ0FDS0EsVUFETCxDQUFYOztBQUdBLFdBQVNELEtBQVQsQ0FBZU8sS0FBZixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDeEIxQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWXlCLElBQVosRUFEd0IsQ0FHeEI7O0FBQ0EsUUFBSUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLE9BQVQsQ0FBaUJILElBQWpCLEVBQXVCQSxJQUFJLENBQUNJLE9BQUwsQ0FBYUgsTUFBcEMsRUFBNENJLFFBQXpEO0FBQ0EvQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWTBCLE1BQVo7QUFFQWxCLElBQUFBLEdBQUcsQ0FBQ3VCLFNBQUosQ0FBYyxRQUFkLEVBQ0tOLElBREwsQ0FDVUMsTUFEVixFQUVLTSxLQUZMLEdBRWFyQixNQUZiLENBRW9CLE1BRnBCLEVBR0tDLElBSEwsQ0FHVSxPQUhWLEVBR21CLE9BSG5CLEVBSUk7QUFKSixLQUtLQSxJQUxMLENBS1UsR0FMVixFQUtlVSxJQUxmO0FBT0g7QUFDSjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9zY3JpcHRzL21hcF9yZW5kZXIuanM/MDFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZm4xKCkge1xuXG4gICAgY29uc29sZS5sb2coXCIzXCIpO1xuICAgIGxldCBtYXJnaW4gPSB7IHRvcDogMCwgbGVmdDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMH07XG4gICAgbGV0IGhlaWdodCA9IDQwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICAgIGxldCB3aWR0aCA9IDgwMCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuXG4gICAgLy8gYm9pbGVycGxhdGUgZm9yIHN0YXJ0aW5nIGEgZDMgdmlzdWFsaXphdGlvblxuICAgIGxldCBzdmcgPSBkMy5zZWxlY3QoXCIjbWFwXCIpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodClcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBtYXJnaW4ubGVmdCArIFwiLFwiICsgbWFyZ2luLnRvcCArIFwiKVwiKTtcblxuICAgIC8vIHVzLmpzb24gaW1wb3J0ZWQgZnJvbSBHZW9KU09OIGZyb20gVG9wb0pTT05cbiAgICBkMy5xdWV1ZSgpXG4gICAgICAgIC5kZWZlcihkMy5qc29uLCBcIi4uL3NyYy9zY3JpcHRzL3VzLmpzb25cIilcbiAgICAgICAgLmF3YWl0KHJlYWR5KTtcblxuXG4gICAgLy8gdXNlcyBBbGJlcnMgVVNBIHRocm91Z2ggR2VvTWVyY2F0b3IgYW5kIGNlbnRlcnMgaXQgd2hpbGUgem9vbWluZyBpbiBcbiAgICBsZXQgcHJvamVjdGlvbiA9IGQzLmdlb0FsYmVyc1VzYSgpXG4gICAgICAgIC50cmFuc2xhdGUoWyB3aWR0aCAvIDIsIGhlaWdodCAvIDJdKVxuICAgICAgICAuc2NhbGUoODUwKTtcblxuICAgIC8vIGNyZWF0ZXMgcGF0aCAoZ2VvUGF0aCkgYW5kIHNldHMgcHJvamVjdGlvblxuICAgIC8vIGNoYW5nZXMgbGF0aXR1ZGUgYW5kIGxvZ2l0dWRlIGluIG9yZGVyIHRvIHJlbmRlciBhIHJvdW5kIG1hcCBvbnRvIG91ciBmbGF0IHN1cmZhY2VcbiAgICBsZXQgcGF0aCA9IGQzLmdlb1BhdGgoKVxuICAgICAgICAucHJvamVjdGlvbihwcm9qZWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIHJlYWR5KGVycm9yLCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIC8vIHRvcG9qc29uLmZlYXR1cmUgY29udmVydHMgcmF3IGdlbyBkYXRhIGludG8gdXNlYWJsZSBnZW8gZGF0YVxuICAgICAgICBsZXQgc3RhdGVzID0gdG9wb2pzb24uZmVhdHVyZShkYXRhLCBkYXRhLm9iamVjdHMuc3RhdGVzKS5mZWF0dXJlc1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZXMpO1xuXG4gICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIuc3RhdGVcIilcbiAgICAgICAgICAgIC5kYXRhKHN0YXRlcylcbiAgICAgICAgICAgIC5lbnRlcigpLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzdGF0ZVwiKVxuICAgICAgICAgICAgLy8gXCJkXCIgaXMgdGhlIGNvb3JkaW5hdGUgcG9pbnRzIGZvciBlYWNoIHN0YXRlLCBwYXRoIGRyYXdzIGl0XG4gICAgICAgICAgICAuYXR0cihcImRcIiwgcGF0aClcblxuICAgIH1cbn07XG4iXSwibmFtZXMiOlsiZm4xIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbiIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSIsImhlaWdodCIsIndpZHRoIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwicXVldWUiLCJkZWZlciIsImpzb24iLCJhd2FpdCIsInJlYWR5IiwicHJvamVjdGlvbiIsImdlb0FsYmVyc1VzYSIsInRyYW5zbGF0ZSIsInNjYWxlIiwicGF0aCIsImdlb1BhdGgiLCJlcnJvciIsImRhdGEiLCJzdGF0ZXMiLCJ0b3BvanNvbiIsImZlYXR1cmUiLCJvYmplY3RzIiwiZmVhdHVyZXMiLCJzZWxlY3RBbGwiLCJlbnRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/map_render.js\n");

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