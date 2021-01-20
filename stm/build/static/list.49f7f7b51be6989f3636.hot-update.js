webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}function shuffleArray(array){// only shuffle in client side to prevent images not matching item description\nif(typeof window!=='undefined'){var i=array.length-1;for(;i>0;i--){var j=Math.floor(Math.random()*(i+1));var temp=array[i];array[i]=array[j];array[j]=temp;}}return array;}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);var projects=data.items;var array_random=[];projects.forEach((obj,idx)=>{array_random.push(idx);});array_random=shuffleArray(array_random);console.log(projects);var sizeArray=[false];var toggle=true;for(var i=1;i<projects.length;i+=2){sizeArray.push(toggle);if(i+2<=projects.length){sizeArray.push(toggle);}toggle=!toggle;}var iterator=-1;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,array_random.map((_ref2)=>{var{obj,idx}=_ref2;var element=projects[idx];var item=state.source[element.type][element.id];iterator+=1;// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item,large:sizeArray[iterator]});}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"haqysp\",styles:\"margin:0;margin-top:50px;padding:15px;list-style:none;display:flex;flex-wrap:wrap;justify-content:center;@media (min-width:100px) and (max-width:576px){display:flex;flex-wrap:wrap;padding:0px;margin-top:60px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcblxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gIC8vIG9ubHkgc2h1ZmZsZSBpbiBjbGllbnQgc2lkZSB0byBwcmV2ZW50IGltYWdlcyBub3QgbWF0Y2hpbmcgaXRlbSBkZXNjcmlwdGlvblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcbiAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICBsZXQgcHJvamVjdHMgPSBkYXRhLml0ZW1zO1xuICBsZXQgYXJyYXlfcmFuZG9tID0gW107XG4gIHByb2plY3RzLmZvckVhY2goKG9iaiwgaWR4KSA9PiB7YXJyYXlfcmFuZG9tLnB1c2goaWR4KSB9KTtcbiAgYXJyYXlfcmFuZG9tID0gc2h1ZmZsZUFycmF5KGFycmF5X3JhbmRvbSk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gIGxldCBzaXplQXJyYXkgPSBbZmFsc2VdO1xuICBsZXQgdG9nZ2xlID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHNpemVBcnJheS5wdXNoKHRvZ2dsZSk7XG4gICAgaWYgKGkgKyAyIDw9IHByb2plY3RzLmxlbmd0aCkge1xuICAgICAgc2l6ZUFycmF5LnB1c2godG9nZ2xlKTtcbiAgICB9XG4gICAgdG9nZ2xlID0gIXRvZ2dsZTtcbiAgfVxuICBsZXQgaXRlcmF0b3IgPSAtMTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuXG4gICAgICB7YXJyYXlfcmFuZG9tLm1hcCgoeyBvYmosIGlkeCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9qZWN0c1tpZHhdO1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW2VsZW1lbnQudHlwZV1bZWxlbWVudC5pZF07XG4gICAgICAgIGl0ZXJhdG9yICs9IDE7XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gKDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gbGFyZ2U9e3NpemVBcnJheVtpdGVyYXRvcl19IC8+KTtcbiAgICAgICB9KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbInNodWZmbGVBcnJheSIsImFycmF5Iiwid2luZG93IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTGlzdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJwcm9qZWN0cyIsIml0ZW1zIiwiYXJyYXlfcmFuZG9tIiwiZm9yRWFjaCIsIm9iaiIsImlkeCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwic2l6ZUFycmF5IiwidG9nZ2xlIiwiaXRlcmF0b3IiLCJtYXAiLCJlbGVtZW50IiwiaXRlbSIsInR5cGUiLCJpZCIsImNvbm5lY3QiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBLFFBQVNBLGFBQVQsQ0FBc0JDLEtBQXRCLENBQTZCLENBQzNCO0FBQ0EsR0FBSSxNQUFPQyxPQUFQLEdBQWtCLFdBQXRCLENBQW1DLENBQ2pDLEdBQUlDLEVBQUMsQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWUsQ0FBdkIsQ0FDQSxLQUFPRCxDQUFDLENBQUcsQ0FBWCxDQUFjQSxDQUFDLEVBQWYsQ0FBbUIsQ0FDakIsR0FBTUUsRUFBQyxDQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLElBQWlCTCxDQUFDLENBQUcsQ0FBckIsQ0FBWCxDQUFWLENBQ0EsR0FBTU0sS0FBSSxDQUFHUixLQUFLLENBQUNFLENBQUQsQ0FBbEIsQ0FDQUYsS0FBSyxDQUFDRSxDQUFELENBQUwsQ0FBV0YsS0FBSyxDQUFDSSxDQUFELENBQWhCLENBQ0FKLEtBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVdJLElBQVgsQ0FDRCxDQUNGLENBQ0QsTUFBT1IsTUFBUCxDQUNELENBRUQsR0FBTVMsS0FBSSxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDMUI7QUFDQSxHQUFNQyxLQUFJLENBQUdELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxHQUFiLENBQWlCSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBOUIsQ0FBYixDQUVBLEdBQUlDLFNBQVEsQ0FBR0wsSUFBSSxDQUFDTSxLQUFwQixDQUNBLEdBQUlDLGFBQVksQ0FBRyxFQUFuQixDQUNBRixRQUFRLENBQUNHLE9BQVQsQ0FBaUIsQ0FBQ0MsR0FBRCxDQUFNQyxHQUFOLEdBQWMsQ0FBQ0gsWUFBWSxDQUFDSSxJQUFiLENBQWtCRCxHQUFsQixFQUF3QixDQUF4RCxFQUNBSCxZQUFZLENBQUduQixZQUFZLENBQUNtQixZQUFELENBQTNCLENBRUFLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaLEVBRUEsR0FBSVMsVUFBUyxDQUFHLENBQUMsS0FBRCxDQUFoQixDQUNBLEdBQUlDLE9BQU0sQ0FBRyxJQUFiLENBQ0EsSUFBSyxHQUFJeEIsRUFBQyxDQUFHLENBQWIsQ0FBZ0JBLENBQUMsQ0FBR2MsUUFBUSxDQUFDYixNQUE3QixDQUFxQ0QsQ0FBQyxFQUFJLENBQTFDLENBQTZDLENBQzNDdUIsU0FBUyxDQUFDSCxJQUFWLENBQWVJLE1BQWYsRUFDQSxHQUFJeEIsQ0FBQyxDQUFHLENBQUosRUFBU2MsUUFBUSxDQUFDYixNQUF0QixDQUE4QixDQUM1QnNCLFNBQVMsQ0FBQ0gsSUFBVixDQUFlSSxNQUFmLEVBQ0QsQ0FDREEsTUFBTSxDQUFHLENBQUNBLE1BQVYsQ0FDRCxDQUNELEdBQUlDLFNBQVEsQ0FBRyxDQUFDLENBQWhCLENBRUEsTUFDRSwyREFBQyxTQUFELE1BR0dULFlBQVksQ0FBQ1UsR0FBYixDQUFpQixTQUFrQixJQUFqQixDQUFFUixHQUFGLENBQU9DLEdBQVAsQ0FBaUIsT0FDbEMsR0FBTVEsUUFBTyxDQUFHYixRQUFRLENBQUNLLEdBQUQsQ0FBeEIsQ0FDQSxHQUFNUyxLQUFJLENBQUdwQixLQUFLLENBQUNFLE1BQU4sQ0FBYWlCLE9BQU8sQ0FBQ0UsSUFBckIsRUFBMkJGLE9BQU8sQ0FBQ0csRUFBbkMsQ0FBYixDQUNBTCxRQUFRLEVBQUksQ0FBWixDQUNBO0FBQ0EsTUFBUSwyREFBQyxrREFBRCxFQUFNLEdBQUcsQ0FBRUcsSUFBSSxDQUFDRSxFQUFoQixDQUFvQixJQUFJLENBQUVGLElBQTFCLENBQWdDLEtBQUssQ0FBRUwsU0FBUyxDQUFDRSxRQUFELENBQWhELEVBQVIsQ0FDQSxDQU5ELENBSEgsQ0FERixDQWFELENBbkNELENBcUNlTSx1SEFBTyxDQUFDeEIsSUFBRCxDQUF0QixFQUVBLEdBQU15QixVQUFTLCt2R0FBZiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcblxuZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5KSB7XG4gIC8vIG9ubHkgc2h1ZmZsZSBpbiBjbGllbnQgc2lkZSB0byBwcmV2ZW50IGltYWdlcyBub3QgbWF0Y2hpbmcgaXRlbSBkZXNjcmlwdGlvblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcbiAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICBsZXQgcHJvamVjdHMgPSBkYXRhLml0ZW1zO1xuICBsZXQgYXJyYXlfcmFuZG9tID0gW107XG4gIHByb2plY3RzLmZvckVhY2goKG9iaiwgaWR4KSA9PiB7YXJyYXlfcmFuZG9tLnB1c2goaWR4KSB9KTtcbiAgYXJyYXlfcmFuZG9tID0gc2h1ZmZsZUFycmF5KGFycmF5X3JhbmRvbSk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuXG4gIGxldCBzaXplQXJyYXkgPSBbZmFsc2VdO1xuICBsZXQgdG9nZ2xlID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkgKz0gMikge1xuICAgIHNpemVBcnJheS5wdXNoKHRvZ2dsZSk7XG4gICAgaWYgKGkgKyAyIDw9IHByb2plY3RzLmxlbmd0aCkge1xuICAgICAgc2l6ZUFycmF5LnB1c2godG9nZ2xlKTtcbiAgICB9XG4gICAgdG9nZ2xlID0gIXRvZ2dsZTtcbiAgfVxuICBsZXQgaXRlcmF0b3IgPSAtMTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuXG4gICAgICB7YXJyYXlfcmFuZG9tLm1hcCgoeyBvYmosIGlkeCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9qZWN0c1tpZHhdO1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW2VsZW1lbnQudHlwZV1bZWxlbWVudC5pZF07XG4gICAgICAgIGl0ZXJhdG9yICs9IDE7XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gKDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gbGFyZ2U9e3NpemVBcnJheVtpdGVyYXRvcl19IC8+KTtcbiAgICAgICB9KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})