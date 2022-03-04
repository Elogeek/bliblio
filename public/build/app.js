"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)



__webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");

__webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js"); // Animation title color shelf


var titleShelf = document.querySelectorAll(".shelf p");
/*
Generate a random colors
*/

function rainbowColor() {
  var color = '';

  for (var i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * 256).toString(16);
    color += random.length === 1 ? "0" + random : random;
  }

  return "#" + color;
} // for each letter


var _loop = function _loop(i, letter) {
  var time = 300;
  titleShelf[i].addEventListener('mouseover', function () {
    setTimeout(function () {
      var b = titleShelf[i].textContent;
      titleShelf[i].innerHTML = '';

      for (var a = 0, letters = b.length; a < letters; ++a) {
        // Create a span
        var span = document.createElement('span');
        titleShelf[i].appendChild(span);
        span.textContent = b[a];
        span.style.color = rainbowColor();
        titleShelf[i].style.fontWeight = 'bold';
        titleShelf[i].style.fontSize = "50px";
      }
    }, time);
    time = time + 500;
  });
};

for (var i = 0, letter = titleShelf.length; i < letter; ++i) {
  _loop(i, letter);
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_core-js_modules_es_d-0a5281"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQLEVBR0E7OztBQUNBLElBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUFqQjtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3BCLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixHQUEzQixFQUFnQ0csUUFBaEMsQ0FBeUMsRUFBekMsQ0FBYjtBQUNBTCxJQUFBQSxLQUFLLElBQUtFLE1BQU0sQ0FBQ0ksTUFBUCxLQUFtQixDQUFuQixHQUF1QixNQUFNSixNQUE3QixHQUFzQ0EsTUFBaEQ7QUFDSDs7QUFDRCxTQUFPLE1BQU1GLEtBQWI7QUFDSCxFQUVEOzs7MkJBQ1FDLEdBQU9NO0FBQ1gsTUFBSUMsSUFBSSxHQUFHLEdBQVg7QUFDQVosRUFBQUEsVUFBVSxDQUFDSyxDQUFELENBQVYsQ0FBY1EsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBNEMsWUFBWTtBQUNwREMsSUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkIsVUFBSUMsQ0FBQyxHQUFHZixVQUFVLENBQUNLLENBQUQsQ0FBVixDQUFjVyxXQUF0QjtBQUNBaEIsTUFBQUEsVUFBVSxDQUFDSyxDQUFELENBQVYsQ0FBY1ksU0FBZCxHQUEwQixFQUExQjs7QUFFQSxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLE9BQU8sR0FBR0osQ0FBQyxDQUFDTCxNQUEzQixFQUFtQ1EsQ0FBQyxHQUFHQyxPQUF2QyxFQUFnRCxFQUFFRCxDQUFsRCxFQUFxRDtBQUNqRDtBQUNBLFlBQUlFLElBQUksR0FBR25CLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBckIsUUFBQUEsVUFBVSxDQUFDSyxDQUFELENBQVYsQ0FBY2lCLFdBQWQsQ0FBMEJGLElBQTFCO0FBQ0FBLFFBQUFBLElBQUksQ0FBQ0osV0FBTCxHQUFtQkQsQ0FBQyxDQUFDRyxDQUFELENBQXBCO0FBQ0FFLFFBQUFBLElBQUksQ0FBQ0csS0FBTCxDQUFXbkIsS0FBWCxHQUFtQkQsWUFBWSxFQUEvQjtBQUNBSCxRQUFBQSxVQUFVLENBQUNLLENBQUQsQ0FBVixDQUFja0IsS0FBZCxDQUFvQkMsVUFBcEIsR0FBaUMsTUFBakM7QUFDQXhCLFFBQUFBLFVBQVUsQ0FBQ0ssQ0FBRCxDQUFWLENBQWNrQixLQUFkLENBQW9CRSxRQUFwQixHQUErQixNQUEvQjtBQUVIO0FBQ0osS0FkUyxFQWNQYixJQWRPLENBQVY7QUFlQUEsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBZDtBQUNILEdBakJEOzs7QUFGSixLQUFJLElBQUlQLENBQUMsR0FBRyxDQUFSLEVBQVdNLE1BQU0sR0FBR1gsVUFBVSxDQUFDVSxNQUFuQyxFQUEyQ0wsQ0FBQyxHQUFHTSxNQUEvQyxFQUF1RCxFQUFFTixDQUF6RCxFQUE0RDtBQUFBLFFBQXBEQSxDQUFvRCxFQUE3Q00sTUFBNkM7QUFxQjNEOzs7Ozs7Ozs7OztBQ3BERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuaW1wb3J0ICcvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJ1xuXG5yZXF1aXJlKCdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLm1pbi5jc3MnKTtcbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbC5qcycpO1xuXG5cbi8vIEFuaW1hdGlvbiB0aXRsZSBjb2xvciBzaGVsZlxubGV0IHRpdGxlU2hlbGYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoZWxmIHBcIik7XG5cbi8qXG5HZW5lcmF0ZSBhIHJhbmRvbSBjb2xvcnNcbiovXG5mdW5jdGlvbiByYWluYm93Q29sb3IoKSB7XG4gICAgbGV0IGNvbG9yID0gJyc7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBsZXQgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KS50b1N0cmluZygxNik7XG4gICAgICAgIGNvbG9yICs9IChyYW5kb20ubGVuZ3RoID09PSAgMSA/IFwiMFwiICsgcmFuZG9tIDogcmFuZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIFwiI1wiICsgY29sb3I7XG59XG5cbi8vIGZvciBlYWNoIGxldHRlclxuZm9yKGxldCBpID0gMCwgbGV0dGVyID0gdGl0bGVTaGVsZi5sZW5ndGg7IGkgPCBsZXR0ZXI7ICsraSkge1xuICAgIGxldCB0aW1lID0gMzAwO1xuICAgIHRpdGxlU2hlbGZbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBiID0gdGl0bGVTaGVsZltpXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIHRpdGxlU2hlbGZbaV0uaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgICAgIGZvcihsZXQgYSA9IDAsIGxldHRlcnMgPSBiLmxlbmd0aDsgYSA8IGxldHRlcnM7ICsrYSkge1xuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHNwYW5cbiAgICAgICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICB0aXRsZVNoZWxmW2ldLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBiW2FdO1xuICAgICAgICAgICAgICAgIHNwYW4uc3R5bGUuY29sb3IgPSByYWluYm93Q29sb3IoKSA7XG4gICAgICAgICAgICAgICAgdGl0bGVTaGVsZltpXS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnO1xuICAgICAgICAgICAgICAgIHRpdGxlU2hlbGZbaV0uc3R5bGUuZm9udFNpemUgPSBcIjUwcHhcIjtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgdGltZSA9IHRpbWUgKyA1MDA7XG4gICAgfSlcblxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidGl0bGVTaGVsZiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInJhaW5ib3dDb2xvciIsImNvbG9yIiwiaSIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwibGVuZ3RoIiwibGV0dGVyIiwidGltZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRUaW1lb3V0IiwiYiIsInRleHRDb250ZW50IiwiaW5uZXJIVE1MIiwiYSIsImxldHRlcnMiLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9