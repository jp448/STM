webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./packages/mars-theme/src/components/list/pagination.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);var sizeArray=[];for(var i=0;i<data.length;i++){}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Container,null,data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item,large:true});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"1v8lo52\",styles:\"margin:0;padding:24px;list-style:none;display:grid;grid-template-columns:1fr 1fr;grid-gap:16px;@media (min-width:100px) and (max-width:576px){grid-template-columns:1fr;grid-gap:8px;padding:0;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGxldCBzaXplQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBmb3IgYSBzcGVjaWZpYyBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICBBdXRob3I6IDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgcmV0dXJuICg8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IGxhcmdlPXt0cnVlfSAvPik7XG4gICAgICAgfSl9XG4gICAgICA8UGFnaW5hdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTZweDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\",{target:\"exiu6z11\",label:\"Header\"})( false?undefined:{name:\"p2cv\",styles:\"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0R3QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGxldCBzaXplQXJyYXkgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBmb3IgYSBzcGVjaWZpYyBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICBBdXRob3I6IDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgcmV0dXJuICg8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IGxhcmdlPXt0cnVlfSAvPik7XG4gICAgICAgfSl9XG4gICAgICA8UGFnaW5hdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTZweDtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWdhcDogOHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwic2l6ZUFycmF5IiwiaSIsImxlbmd0aCIsImlzQXV0aG9yIiwiZGVjb2RlIiwiYXV0aG9yIiwiaWQiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwiaXRlbSIsImNvbm5lY3QiLCJDb250YWluZXIiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQSxHQUFNQSxLQUFJLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMxQjtBQUNBLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsR0FBSUMsVUFBUyxDQUFHLEVBQWhCLENBQ0EsSUFBSyxHQUFJQyxFQUFDLENBQUcsQ0FBYixDQUFnQkEsQ0FBQyxDQUFHTixJQUFJLENBQUNPLE1BQXpCLENBQWlDRCxDQUFDLEVBQWxDLENBQXNDLENBRXJDLENBRUQsTUFDRSwyREFBQyxTQUFELE1BSUdOLElBQUksQ0FBQ1EsUUFBTCxFQUNDLDBEQUFDLE1BQUQsaUJBQ1UsbUVBQUlDLHVEQUFNLENBQUNWLEtBQUssQ0FBQ0UsTUFBTixDQUFhUyxNQUFiLENBQW9CVixJQUFJLENBQUNXLEVBQXpCLEVBQTZCQyxJQUE5QixDQUFWLENBRFYsQ0FMSixDQVNHWixJQUFJLENBQUNhLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFNBQWtCLElBQWpCLENBQUVDLElBQUYsQ0FBUUosRUFBUixDQUFpQixPQUNoQyxHQUFNSyxLQUFJLENBQUdqQixLQUFLLENBQUNFLE1BQU4sQ0FBYWMsSUFBYixFQUFtQkosRUFBbkIsQ0FBYixDQUNBO0FBQ0EsTUFBUSwyREFBQyxrREFBRCxFQUFNLEdBQUcsQ0FBRUssSUFBSSxDQUFDTCxFQUFoQixDQUFvQixJQUFJLENBQUVLLElBQTFCLENBQWdDLEtBQUssQ0FBRSxJQUF2QyxFQUFSLENBQ0EsQ0FKRCxDQVRILENBY0UsMERBQUMsbURBQUQsTUFkRixDQURGLENBa0JELENBM0JELENBNkJlQyx1SEFBTyxDQUFDbkIsSUFBRCxDQUF0QixFQUVBLEdBQU1vQixVQUFTLHVuRkFBZixDQWNBLEdBQU1DLE9BQU0sKytFQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgbGV0IHNpemVBcnJheSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXksIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cblxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gKDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gbGFyZ2U9e3RydWV9IC8+KTtcbiAgICAgICB9KX1cbiAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})