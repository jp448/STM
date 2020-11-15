webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./packages/mars-theme/src/components/list/pagination.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);var urlParams=new URLSearchParams(state.router.link);var pageTyep=urlParams.get('type');console.log(state.router);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Container,null,data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"1oapuk3\",styles:\"width:800px;margin:0;padding:24px;list-style:none;display:grid;grid-template-columns:1fr 1fr;grid-gap:16px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgcGFnZVR5ZXAgPSB1cmxQYXJhbXMuZ2V0KCd0eXBlJyk7XG4gIGNvbnNvbGUubG9nKHN0YXRlLnJvdXRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXksIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cblxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG4gICAgICA8UGFnaW5hdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\",{target:\"exiu6z11\",label:\"Header\"})( false?undefined:{name:\"p2cv\",styles:\"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEN3QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc3QgcGFnZVR5ZXAgPSB1cmxQYXJhbXMuZ2V0KCd0eXBlJyk7XG4gIGNvbnNvbGUubG9nKHN0YXRlLnJvdXRlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXksIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cblxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG4gICAgICA8UGFnaW5hdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwicGFnZVR5ZXAiLCJjb25zb2xlIiwibG9nIiwiaXNBdXRob3IiLCJkZWNvZGUiLCJhdXRob3IiLCJpZCIsIm5hbWUiLCJpdGVtcyIsIm1hcCIsInR5cGUiLCJpdGVtIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQSxHQUFNQyxVQUFTLENBQUcsR0FBSUMsZ0JBQUosQ0FBb0JQLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFqQyxDQUFsQixDQUNBLEdBQU1HLFNBQVEsQ0FBR0YsU0FBUyxDQUFDSCxHQUFWLENBQWMsTUFBZCxDQUFqQixDQUNBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBSyxDQUFDSSxNQUFsQixFQUVBLE1BQ0UsMkRBQUMsU0FBRCxNQUlHSCxJQUFJLENBQUNVLFFBQUwsRUFDQywwREFBQyxNQUFELGlCQUNVLG1FQUFJQyx1REFBTSxDQUFDWixLQUFLLENBQUNFLE1BQU4sQ0FBYVcsTUFBYixDQUFvQlosSUFBSSxDQUFDYSxFQUF6QixFQUE2QkMsSUFBOUIsQ0FBVixDQURWLENBTEosQ0FXR2QsSUFBSSxDQUFDZSxLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFrQixJQUFqQixDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBaUIsT0FDaEMsR0FBTUssS0FBSSxDQUFHbkIsS0FBSyxDQUFDRSxNQUFOLENBQWFnQixJQUFiLEVBQW1CSixFQUFuQixDQUFiLENBQ0E7QUFDQSxNQUFPLDJEQUFDLGtEQUFELEVBQU0sR0FBRyxDQUFFSyxJQUFJLENBQUNMLEVBQWhCLENBQW9CLElBQUksQ0FBRUssSUFBMUIsRUFBUCxDQUNELENBSkEsQ0FYSCxDQWdCRSwwREFBQyxtREFBRCxNQWhCRixDQURGLENBb0JELENBM0JELENBNkJlQyx1SEFBTyxDQUFDckIsSUFBRCxDQUF0QixFQUVBLEdBQU1zQixVQUFTLDhnRkFBZixDQVVBLEdBQU1DLE9BQU0sMjlFQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zdCBwYWdlVHllcCA9IHVybFBhcmFtcy5nZXQoJ3R5cGUnKTtcbiAgY29uc29sZS5sb2coc3RhdGUucm91dGVyKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4gICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICl9XG5cbiAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICB9KX1cbiAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDE2cHg7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})