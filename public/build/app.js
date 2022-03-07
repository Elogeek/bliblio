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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUFBLG1CQUFPLENBQUMsbUhBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1R0FBRCxDQUFQLEVBR0E7OztBQUNBLElBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixVQUExQixDQUFqQjtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3BCLE1BQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFnQixHQUEzQixFQUFnQ0csUUFBaEMsQ0FBeUMsRUFBekMsQ0FBYjtBQUNBTCxJQUFBQSxLQUFLLElBQUtFLE1BQU0sQ0FBQ0ksTUFBUCxLQUFtQixDQUFuQixHQUF1QixNQUFNSixNQUE3QixHQUFzQ0EsTUFBaEQ7QUFDSDs7QUFDRCxTQUFPLE1BQU1GLEtBQWI7QUFDSCxFQUVEOzs7MkJBQ1FDLEdBQU9NO0FBQ1gsTUFBSUMsSUFBSSxHQUFHLEdBQVg7QUFDQVosRUFBQUEsVUFBVSxDQUFDSyxDQUFELENBQVYsQ0FBY1EsZ0JBQWQsQ0FBK0IsV0FBL0IsRUFBNEMsWUFBWTtBQUNwREMsSUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkIsVUFBSUMsQ0FBQyxHQUFHZixVQUFVLENBQUNLLENBQUQsQ0FBVixDQUFjVyxXQUF0QjtBQUNBaEIsTUFBQUEsVUFBVSxDQUFDSyxDQUFELENBQVYsQ0FBY1ksU0FBZCxHQUEwQixFQUExQjs7QUFFQSxXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLE9BQU8sR0FBR0osQ0FBQyxDQUFDTCxNQUEzQixFQUFtQ1EsQ0FBQyxHQUFHQyxPQUF2QyxFQUFnRCxFQUFFRCxDQUFsRCxFQUFxRDtBQUNqRDtBQUNBLFlBQUlFLElBQUksR0FBR25CLFFBQVEsQ0FBQ29CLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBckIsUUFBQUEsVUFBVSxDQUFDSyxDQUFELENBQVYsQ0FBY2lCLFdBQWQsQ0FBMEJGLElBQTFCO0FBQ0FBLFFBQUFBLElBQUksQ0FBQ0osV0FBTCxHQUFtQkQsQ0FBQyxDQUFDRyxDQUFELENBQXBCO0FBQ0FFLFFBQUFBLElBQUksQ0FBQ0csS0FBTCxDQUFXbkIsS0FBWCxHQUFtQkQsWUFBWSxFQUEvQjtBQUNBSCxRQUFBQSxVQUFVLENBQUNLLENBQUQsQ0FBVixDQUFja0IsS0FBZCxDQUFvQkMsVUFBcEIsR0FBaUMsTUFBakM7QUFDQXhCLFFBQUFBLFVBQVUsQ0FBQ0ssQ0FBRCxDQUFWLENBQWNrQixLQUFkLENBQW9CRSxRQUFwQixHQUErQixNQUEvQjtBQUVIO0FBQ0osS0FkUyxFQWNQYixJQWRPLENBQVY7QUFlQUEsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLEdBQUcsR0FBZDtBQUNILEdBakJEOzs7QUFGSixLQUFJLElBQUlQLENBQUMsR0FBRyxDQUFSLEVBQVdNLE1BQU0sR0FBR1gsVUFBVSxDQUFDVSxNQUFuQyxFQUEyQ0wsQ0FBQyxHQUFHTSxNQUEvQyxFQUF1RCxFQUFFTixDQUF6RCxFQUE0RDtBQUFBLFFBQXBEQSxDQUFvRCxFQUE3Q00sTUFBNkM7QUFxQjNEOzs7Ozs7Ozs7OztBQ3BERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJy9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnXG5cbnJlcXVpcmUoJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzcycpO1xucmVxdWlyZSgnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJyk7XG5cblxuLy8gQW5pbWF0aW9uIHRpdGxlIGNvbG9yIHNoZWxmXG5sZXQgdGl0bGVTaGVsZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hlbGYgcFwiKTtcblxuLypcbkdlbmVyYXRlIGEgcmFuZG9tIGNvbG9yc1xuKi9cbmZ1bmN0aW9uIHJhaW5ib3dDb2xvcigpIHtcbiAgICBsZXQgY29sb3IgPSAnJztcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgY29sb3IgKz0gKHJhbmRvbS5sZW5ndGggPT09ICAxID8gXCIwXCIgKyByYW5kb20gOiByYW5kb20pO1xuICAgIH1cbiAgICByZXR1cm4gXCIjXCIgKyBjb2xvcjtcbn1cblxuLy8gZm9yIGVhY2ggbGV0dGVyXG5mb3IobGV0IGkgPSAwLCBsZXR0ZXIgPSB0aXRsZVNoZWxmLmxlbmd0aDsgaSA8IGxldHRlcjsgKytpKSB7XG4gICAgbGV0IHRpbWUgPSAzMDA7XG4gICAgdGl0bGVTaGVsZltpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IGIgPSB0aXRsZVNoZWxmW2ldLnRleHRDb250ZW50O1xuICAgICAgICAgICAgdGl0bGVTaGVsZltpXS5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgZm9yKGxldCBhID0gMCwgbGV0dGVycyA9IGIubGVuZ3RoOyBhIDwgbGV0dGVyczsgKythKSB7XG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgc3BhblxuICAgICAgICAgICAgICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHRpdGxlU2hlbGZbaV0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGJbYV07XG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5jb2xvciA9IHJhaW5ib3dDb2xvcigpIDtcbiAgICAgICAgICAgICAgICB0aXRsZVNoZWxmW2ldLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gICAgICAgICAgICAgICAgdGl0bGVTaGVsZltpXS5zdHlsZS5mb250U2l6ZSA9IFwiNTBweFwiO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgICB0aW1lID0gdGltZSArIDUwMDtcbiAgICB9KVxuXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJ0aXRsZVNoZWxmIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmFpbmJvd0NvbG9yIiwiY29sb3IiLCJpIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJsZW5ndGgiLCJsZXR0ZXIiLCJ0aW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJiIiwidGV4dENvbnRlbnQiLCJpbm5lckhUTUwiLCJhIiwibGV0dGVycyIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=