webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}function shuffleArray(array){// only shuffle in client side to prevent images not matching item description\nvar i=array.length-1;for(;i>0;i--){var j=Math.floor(Math.random()*(i+1));var temp=array[i];array[i]=array[j];array[j]=temp;}return array;}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);console.log(data.items);var[projects,setProjects]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(data.items);Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{setProjects(shuffleArray([...projects]));},[]);var sizeArray=[false];var toggle=true;for(var i=1;i<projects.length;i+=2){sizeArray.push(toggle);if(i+2<=projects.length){sizeArray.push(toggle);}toggle=!toggle;}var iterator=-1;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,projects.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];if(item.featured_media!==0){iterator+=1;// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item,large:sizeArray[iterator]});}else{return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null);}}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"lnlbfz\",styles:\"margin:0;margin-top:150px;padding:15px 0px;list-style:none;display:flex;flex-wrap:wrap;justify-content:center;@media (min-width:100px) and (max-width:576px){display:flex;flex-wrap:wrap;padding:0px;margin-top:60px;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5cbmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheSkge1xuICAvLyBvbmx5IHNodWZmbGUgaW4gY2xpZW50IHNpZGUgdG8gcHJldmVudCBpbWFnZXMgbm90IG1hdGNoaW5nIGl0ZW0gZGVzY3JpcHRpb25cbiAgICBsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcbiAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnNvbGUubG9nKGRhdGEuaXRlbXMpO1xuXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoZGF0YS5pdGVtcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9qZWN0cyhzaHVmZmxlQXJyYXkoWy4uLnByb2plY3RzXSkpO1xuICB9LCBbXSk7XG5cbiAgbGV0IHNpemVBcnJheSA9IFtmYWxzZV07XG4gIGxldCB0b2dnbGUgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgc2l6ZUFycmF5LnB1c2godG9nZ2xlKTtcbiAgICBpZiAoaSArIDIgPD0gcHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICBzaXplQXJyYXkucHVzaCh0b2dnbGUpO1xuICAgIH1cbiAgICB0b2dnbGUgPSAhdG9nZ2xlO1xuICB9XG4gIGxldCBpdGVyYXRvciA9IC0xO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgaWYgKGl0ZW0uZmVhdHVyZWRfbWVkaWEgIT09IDApIHtcbiAgICAgICAgICBpdGVyYXRvciArPSAxO1xuICAgICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICAgIHJldHVybiAoPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBsYXJnZT17c2l6ZUFycmF5W2l0ZXJhdG9yXX0gLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoPD48Lz4pO1xuICAgICAgICB9XG4gICAgICAgfSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbInNodWZmbGVBcnJheSIsImFycmF5IiwiaSIsImxlbmd0aCIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZW1wIiwiTGlzdCIsInN0YXRlIiwiZGF0YSIsInNvdXJjZSIsImdldCIsInJvdXRlciIsImxpbmsiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzaXplQXJyYXkiLCJ0b2dnbGUiLCJwdXNoIiwiaXRlcmF0b3IiLCJtYXAiLCJ0eXBlIiwiaWQiLCJpdGVtIiwiZmVhdHVyZWRfbWVkaWEiLCJjb25uZWN0IiwiQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxRQUFTQSxhQUFULENBQXNCQyxLQUF0QixDQUE2QixDQUMzQjtBQUNFLEdBQUlDLEVBQUMsQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWUsQ0FBdkIsQ0FDQSxLQUFPRCxDQUFDLENBQUcsQ0FBWCxDQUFjQSxDQUFDLEVBQWYsQ0FBbUIsQ0FDakIsR0FBTUUsRUFBQyxDQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLElBQWlCTCxDQUFDLENBQUcsQ0FBckIsQ0FBWCxDQUFWLENBQ0EsR0FBTU0sS0FBSSxDQUFHUCxLQUFLLENBQUNDLENBQUQsQ0FBbEIsQ0FDQUQsS0FBSyxDQUFDQyxDQUFELENBQUwsQ0FBV0QsS0FBSyxDQUFDRyxDQUFELENBQWhCLENBQ0FILEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVdJLElBQVgsQ0FDRCxDQUNILE1BQU9QLE1BQVAsQ0FDRCxDQUVELEdBQU1RLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQUksQ0FBQ08sS0FBakIsRUFFQSxHQUFNLENBQUNDLFFBQUQsQ0FBV0MsV0FBWCxFQUEwQkMsc0RBQVEsQ0FBQ1YsSUFBSSxDQUFDTyxLQUFOLENBQXhDLENBRUFJLHVEQUFTLENBQUMsSUFBTSxDQUNkRixXQUFXLENBQUNwQixZQUFZLENBQUMsQ0FBQyxHQUFHbUIsUUFBSixDQUFELENBQWIsQ0FBWCxDQUNELENBRlEsQ0FFTixFQUZNLENBQVQsQ0FJQSxHQUFJSSxVQUFTLENBQUcsQ0FBQyxLQUFELENBQWhCLENBQ0EsR0FBSUMsT0FBTSxDQUFHLElBQWIsQ0FDQSxJQUFLLEdBQUl0QixFQUFDLENBQUcsQ0FBYixDQUFnQkEsQ0FBQyxDQUFHaUIsUUFBUSxDQUFDaEIsTUFBN0IsQ0FBcUNELENBQUMsRUFBSSxDQUExQyxDQUE2QyxDQUMzQ3FCLFNBQVMsQ0FBQ0UsSUFBVixDQUFlRCxNQUFmLEVBQ0EsR0FBSXRCLENBQUMsQ0FBRyxDQUFKLEVBQVNpQixRQUFRLENBQUNoQixNQUF0QixDQUE4QixDQUM1Qm9CLFNBQVMsQ0FBQ0UsSUFBVixDQUFlRCxNQUFmLEVBQ0QsQ0FDREEsTUFBTSxDQUFHLENBQUNBLE1BQVYsQ0FDRCxDQUNELEdBQUlFLFNBQVEsQ0FBRyxDQUFDLENBQWhCLENBRUEsTUFDRSwyREFBQyxTQUFELE1BR0dQLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFNBQWtCLElBQWpCLENBQUVDLElBQUYsQ0FBUUMsRUFBUixDQUFpQixPQUM5QixHQUFNQyxLQUFJLENBQUdwQixLQUFLLENBQUNFLE1BQU4sQ0FBYWdCLElBQWIsRUFBbUJDLEVBQW5CLENBQWIsQ0FDQSxHQUFJQyxJQUFJLENBQUNDLGNBQUwsR0FBd0IsQ0FBNUIsQ0FBK0IsQ0FDN0JMLFFBQVEsRUFBSSxDQUFaLENBQ0E7QUFDQSxNQUFRLDJEQUFDLGtEQUFELEVBQU0sR0FBRyxDQUFFSSxJQUFJLENBQUNELEVBQWhCLENBQW9CLElBQUksQ0FBRUMsSUFBMUIsQ0FBZ0MsS0FBSyxDQUFFUCxTQUFTLENBQUNHLFFBQUQsQ0FBaEQsRUFBUixDQUNELENBSkQsSUFJTyxDQUNMLE1BQVEsc0hBQVIsQ0FDRCxDQUNELENBVEQsQ0FISCxDQURGLENBZ0JELENBdENELENBd0NlTSx1SEFBTyxDQUFDdkIsSUFBRCxDQUF0QixFQUVBLEdBQU13QixVQUFTLHd3R0FBZiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5cbmZ1bmN0aW9uIHNodWZmbGVBcnJheShhcnJheSkge1xuICAvLyBvbmx5IHNodWZmbGUgaW4gY2xpZW50IHNpZGUgdG8gcHJldmVudCBpbWFnZXMgbm90IG1hdGNoaW5nIGl0ZW0gZGVzY3JpcHRpb25cbiAgICBsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7XG4gICAgZm9yICg7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIGNvbnN0IHRlbXAgPSBhcnJheVtpXTtcbiAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICBhcnJheVtqXSA9IHRlbXA7XG4gICAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnNvbGUubG9nKGRhdGEuaXRlbXMpO1xuXG4gIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoZGF0YS5pdGVtcyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQcm9qZWN0cyhzaHVmZmxlQXJyYXkoWy4uLnByb2plY3RzXSkpO1xuICB9LCBbXSk7XG5cbiAgbGV0IHNpemVBcnJheSA9IFtmYWxzZV07XG4gIGxldCB0b2dnbGUgPSB0cnVlO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgc2l6ZUFycmF5LnB1c2godG9nZ2xlKTtcbiAgICBpZiAoaSArIDIgPD0gcHJvamVjdHMubGVuZ3RoKSB7XG4gICAgICBzaXplQXJyYXkucHVzaCh0b2dnbGUpO1xuICAgIH1cbiAgICB0b2dnbGUgPSAhdG9nZ2xlO1xuICB9XG4gIGxldCBpdGVyYXRvciA9IC0xO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG5cbiAgICAgIHtwcm9qZWN0cy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgaWYgKGl0ZW0uZmVhdHVyZWRfbWVkaWEgIT09IDApIHtcbiAgICAgICAgICBpdGVyYXRvciArPSAxO1xuICAgICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICAgIHJldHVybiAoPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSBsYXJnZT17c2l6ZUFycmF5W2l0ZXJhdG9yXX0gLz4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAoPD48Lz4pO1xuICAgICAgICB9XG4gICAgICAgfSl9XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})