webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}function shuffleArray(array){// only shuffle in client side to prevent images not matching item description\nif(typeof window!=='undefined'){var i=array.length-1;for(;i>0;i--){var j=Math.floor(Math.random()*(i+1));var temp=array[i];array[i]=array[j];array[j]=temp;}}return array;}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);//let projects = shuffleArray([...data.items]);\nvar sizeArray=[false];var toggle=true;for(var i=1;i<projects.length;i+=2){sizeArray.push(toggle);if(i+2<=projects.length){sizeArray.push(toggle);}toggle=!toggle;}var iterator=-1;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,projects.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];iterator+=1;// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item,large:sizeArray[iterator]});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"haqysp\",styles:\"margin:0;margin-top:50px;padding:15px;list-style:none;display:flex;flex-wrap:wrap;justify-content:center;@media (min-width:100px) and (max-width:576px){display:flex;flex-wrap:wrap;padding:0px;margin-top:60px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcblxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gIC8vIG9ubHkgc2h1ZmZsZSBpbiBjbGllbnQgc2lkZSB0byBwcmV2ZW50IGltYWdlcyBub3QgbWF0Y2hpbmcgaXRlbSBkZXNjcmlwdGlvblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcbiAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICAvL2xldCBwcm9qZWN0cyA9IHNodWZmbGVBcnJheShbLi4uZGF0YS5pdGVtc10pO1xuXG4gIGxldCBzaXplQXJyYXkgPSBbZmFsc2VdO1xuICBsZXQgdG9nZ2xlID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHNpemVBcnJheS5wdXNoKHRvZ2dsZSk7XG4gICAgaWYgKGkgKyAyIDw9IHByb2plY3RzLmxlbmd0aCkge1xuICAgICAgc2l6ZUFycmF5LnB1c2godG9nZ2xlKTtcbiAgICB9XG4gICAgdG9nZ2xlID0gIXRvZ2dsZTtcbiAgfVxuICBsZXQgaXRlcmF0b3IgPSAtMTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuXG4gICAgICB7cHJvamVjdHMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIGl0ZXJhdG9yICs9IDE7XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gKDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gbGFyZ2U9e3NpemVBcnJheVtpdGVyYXRvcl19IC8+KTtcbiAgICAgICB9KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbInNodWZmbGVBcnJheSIsImFycmF5Iiwid2luZG93IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTGlzdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJzaXplQXJyYXkiLCJ0b2dnbGUiLCJwcm9qZWN0cyIsInB1c2giLCJpdGVyYXRvciIsIm1hcCIsInR5cGUiLCJpZCIsIml0ZW0iLCJjb25uZWN0IiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxRQUFTQSxhQUFULENBQXNCQyxLQUF0QixDQUE2QixDQUMzQjtBQUNBLEdBQUksTUFBT0MsT0FBUCxHQUFrQixXQUF0QixDQUFtQyxDQUNqQyxHQUFJQyxFQUFDLENBQUdGLEtBQUssQ0FBQ0csTUFBTixDQUFlLENBQXZCLENBQ0EsS0FBT0QsQ0FBQyxDQUFHLENBQVgsQ0FBY0EsQ0FBQyxFQUFmLENBQW1CLENBQ2pCLEdBQU1FLEVBQUMsQ0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxJQUFpQkwsQ0FBQyxDQUFHLENBQXJCLENBQVgsQ0FBVixDQUNBLEdBQU1NLEtBQUksQ0FBR1IsS0FBSyxDQUFDRSxDQUFELENBQWxCLENBQ0FGLEtBQUssQ0FBQ0UsQ0FBRCxDQUFMLENBQVdGLEtBQUssQ0FBQ0ksQ0FBRCxDQUFoQixDQUNBSixLQUFLLENBQUNJLENBQUQsQ0FBTCxDQUFXSSxJQUFYLENBQ0QsQ0FDRixDQUNELE1BQU9SLE1BQVAsQ0FDRCxDQUVELEdBQU1TLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FFQTtBQUVBLEdBQUlDLFVBQVMsQ0FBRyxDQUFDLEtBQUQsQ0FBaEIsQ0FDQSxHQUFJQyxPQUFNLENBQUcsSUFBYixDQUNBLElBQUssR0FBSWYsRUFBQyxDQUFHLENBQWIsQ0FBZ0JBLENBQUMsQ0FBR2dCLFFBQVEsQ0FBQ2YsTUFBN0IsQ0FBcUNELENBQUMsRUFBSSxDQUExQyxDQUE2QyxDQUMzQ2MsU0FBUyxDQUFDRyxJQUFWLENBQWVGLE1BQWYsRUFDQSxHQUFJZixDQUFDLENBQUcsQ0FBSixFQUFTZ0IsUUFBUSxDQUFDZixNQUF0QixDQUE4QixDQUM1QmEsU0FBUyxDQUFDRyxJQUFWLENBQWVGLE1BQWYsRUFDRCxDQUNEQSxNQUFNLENBQUcsQ0FBQ0EsTUFBVixDQUNELENBQ0QsR0FBSUcsU0FBUSxDQUFHLENBQUMsQ0FBaEIsQ0FFQSxNQUNFLDJEQUFDLFNBQUQsTUFHR0YsUUFBUSxDQUFDRyxHQUFULENBQWEsU0FBa0IsSUFBakIsQ0FBRUMsSUFBRixDQUFRQyxFQUFSLENBQWlCLE9BQzlCLEdBQU1DLEtBQUksQ0FBR2QsS0FBSyxDQUFDRSxNQUFOLENBQWFVLElBQWIsRUFBbUJDLEVBQW5CLENBQWIsQ0FDQUgsUUFBUSxFQUFJLENBQVosQ0FDQTtBQUNBLE1BQVEsMkRBQUMsa0RBQUQsRUFBTSxHQUFHLENBQUVJLElBQUksQ0FBQ0QsRUFBaEIsQ0FBb0IsSUFBSSxDQUFFQyxJQUExQixDQUFnQyxLQUFLLENBQUVSLFNBQVMsQ0FBQ0ksUUFBRCxDQUFoRCxFQUFSLENBQ0EsQ0FMRCxDQUhILENBREYsQ0FZRCxDQTdCRCxDQStCZUssdUhBQU8sQ0FBQ2hCLElBQUQsQ0FBdEIsRUFFQSxHQUFNaUIsVUFBUyxtL0ZBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5cbmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheSkge1xuICAvLyBvbmx5IHNodWZmbGUgaW4gY2xpZW50IHNpZGUgdG8gcHJldmVudCBpbWFnZXMgbm90IG1hdGNoaW5nIGl0ZW0gZGVzY3JpcHRpb25cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IGkgPSBhcnJheS5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBpID4gMDsgaS0tKSB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBjb25zdCB0ZW1wID0gYXJyYXlbaV07XG4gICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgLy9sZXQgcHJvamVjdHMgPSBzaHVmZmxlQXJyYXkoWy4uLmRhdGEuaXRlbXNdKTtcblxuICBsZXQgc2l6ZUFycmF5ID0gW2ZhbHNlXTtcbiAgbGV0IHRvZ2dsZSA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICBzaXplQXJyYXkucHVzaCh0b2dnbGUpO1xuICAgIGlmIChpICsgMiA8PSBwcm9qZWN0cy5sZW5ndGgpIHtcbiAgICAgIHNpemVBcnJheS5wdXNoKHRvZ2dsZSk7XG4gICAgfVxuICAgIHRvZ2dsZSA9ICF0b2dnbGU7XG4gIH1cbiAgbGV0IGl0ZXJhdG9yID0gLTE7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXksIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cblxuICAgICAge3Byb2plY3RzLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICBpdGVyYXRvciArPSAxO1xuICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgcmV0dXJuICg8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IGxhcmdlPXtzaXplQXJyYXlbaXRlcmF0b3JdfSAvPik7XG4gICAgICAgfSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})