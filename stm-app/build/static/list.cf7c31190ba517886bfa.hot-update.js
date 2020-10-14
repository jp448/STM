webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list-item.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list-item.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-media */ \"./packages/mars-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/**\n * Item Component\n *\n * It renders the preview of a blog post. Each blog post contains\n * - Title: clickable title of the post\n * - Author: name of author and published date\n * - FeaturedMedia: the featured image/video of the post\n */var Item=(_ref)=>{var{state,item}=_ref;var author=state.source.author[item.author];var date=new Date(item.date);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"article\",{style:\"padding: 20px\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:item.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{id:item.featured_media})));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Item));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLmpzPzdkMjEiXSwibmFtZXMiOlsiSXRlbSIsInN0YXRlIiwiaXRlbSIsImF1dGhvciIsInNvdXJjZSIsImRhdGUiLCJEYXRlIiwibGluayIsImZlYXR1cmVkX21lZGlhIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7Ozs7Ozs7R0FRQSxHQUFNQSxLQUFJLENBQUcsUUFBcUIsSUFBcEIsQ0FBRUMsS0FBRixDQUFTQyxJQUFULENBQW9CLE1BQ2hDLEdBQU1DLE9BQU0sQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFELE1BQWIsQ0FBb0JELElBQUksQ0FBQ0MsTUFBekIsQ0FBZixDQUNBLEdBQU1FLEtBQUksQ0FBRyxHQUFJQyxLQUFKLENBQVNKLElBQUksQ0FBQ0csSUFBZCxDQUFiLENBRUEsTUFDRSxzRUFBUyxLQUFLLENBQUMsZUFBZixFQUNFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFSCxJQUFJLENBQUNLLElBQWpCLEVBQ0UsMERBQUMsdURBQUQsRUFBZSxFQUFFLENBQUVMLElBQUksQ0FBQ00sY0FBeEIsRUFERixDQURGLENBREYsQ0FPRCxDQVhELENBYUE7QUFDZUMsdUhBQU8sQ0FBQ1QsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuLyoqXG4gKiBJdGVtIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIHByZXZpZXcgb2YgYSBibG9nIHBvc3QuIEVhY2ggYmxvZyBwb3N0IGNvbnRhaW5zXG4gKiAtIFRpdGxlOiBjbGlja2FibGUgdGl0bGUgb2YgdGhlIHBvc3RcbiAqIC0gQXV0aG9yOiBuYW1lIG9mIGF1dGhvciBhbmQgcHVibGlzaGVkIGRhdGVcbiAqIC0gRmVhdHVyZWRNZWRpYTogdGhlIGZlYXR1cmVkIGltYWdlL3ZpZGVvIG9mIHRoZSBwb3N0XG4gKi9cbmNvbnN0IEl0ZW0gPSAoeyBzdGF0ZSwgaXRlbSB9KSA9PiB7XG4gIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbaXRlbS5hdXRob3JdO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXRlbS5kYXRlKTtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgPExpbmsgbGluaz17aXRlbS5saW5rfT5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e2l0ZW0uZmVhdHVyZWRfbWVkaWF9IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9hcnRpY2xlPlxuICApO1xufTtcblxuLy8gQ29ubmVjdCB0aGUgSXRlbSB0byBnYWluIGFjY2VzcyB0byBgc3RhdGVgIGFzIGEgcHJvcFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChJdGVtKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list-item.js\n");

/***/ })

})