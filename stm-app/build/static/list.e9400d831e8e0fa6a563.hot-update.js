webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list-item.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list-item.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-media */ \"./packages/mars-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/**\n * Item Component\n *\n * It renders the preview of a blog post. Each blog post contains\n * - Title: clickable title of the post\n * - Author: name of author and published date\n * - FeaturedMedia: the featured image/video of the post\n */var Item=(_ref)=>{var{state,item}=_ref;var author=state.source.author[item.author];var date=new Date(item.date);console.log(item);var Article=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"article\",{target:\"e1p5zhim0\",label:\"Article\"})(\"padding-top:\",Math.floor(Math.random()*100+-10),\"px;padding-bottom:\",Math.floor(Math.random()*100+-10),\"px;padding-left:\",Math.floor(Math.random()*50+-10),\"px;padding-right:\",Math.floor(Math.random()*50+-10),\"px;\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0tYXBwL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtLWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbi8qKlxuICogSXRlbSBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBwcmV2aWV3IG9mIGEgYmxvZyBwb3N0LiBFYWNoIGJsb2cgcG9zdCBjb250YWluc1xuICogLSBUaXRsZTogY2xpY2thYmxlIHRpdGxlIG9mIHRoZSBwb3N0XG4gKiAtIEF1dGhvcjogbmFtZSBvZiBhdXRob3IgYW5kIHB1Ymxpc2hlZCBkYXRlXG4gKiAtIEZlYXR1cmVkTWVkaWE6IHRoZSBmZWF0dXJlZCBpbWFnZS92aWRlbyBvZiB0aGUgcG9zdFxuICovXG5jb25zdCBJdGVtID0gKHsgc3RhdGUsIGl0ZW0gfSkgPT4ge1xuICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW2l0ZW0uYXV0aG9yXTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG4gIGNvbnNvbGUubG9nKGl0ZW0pO1xuICBjb25zdCBBcnRpY2xlID0gc3R5bGVkLmFydGljbGVgXG4gICAgcGFkZGluZy10b3A6ICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCsoLTEwKSl9cHg7XG4gICAgcGFkZGluZy1ib3R0b206ICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwMCsoLTEwKSl9cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1MCsoLTEwKSl9cHg7XG4gICAgcGFkZGluZy1yaWdodDogJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqNTArKC0xMCkpfXB4O1xuICBgO1xuICByZXR1cm4gKFxuICAgIDxBcnRpY2xlPlxuICAgICAgPExpbmsgbGluaz17aXRlbS5saW5rfT5cbiAgICAgICAgPEZlYXR1cmVkTWVkaWEgaWQ9e2l0ZW19IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9BcnRpY2xlPlxuICApO1xufTtcblxuLy8gQ29ubmVjdCB0aGUgSXRlbSB0byBnYWluIGFjY2VzcyB0byBgc3RhdGVgIGFzIGEgcHJvcFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChJdGVtKTtcblxuXG5cbiJdfQ== */\"));return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Article,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:item.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{id:item})));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Item));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLmpzPzdkMjEiXSwibmFtZXMiOlsiSXRlbSIsInN0YXRlIiwiaXRlbSIsImF1dGhvciIsInNvdXJjZSIsImRhdGUiLCJEYXRlIiwiY29uc29sZSIsImxvZyIsIkFydGljbGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsaW5rIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS0E7Ozs7Ozs7R0FRQSxHQUFNQSxLQUFJLENBQUcsUUFBcUIsSUFBcEIsQ0FBRUMsS0FBRixDQUFTQyxJQUFULENBQW9CLE1BQ2hDLEdBQU1DLE9BQU0sQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFELE1BQWIsQ0FBb0JELElBQUksQ0FBQ0MsTUFBekIsQ0FBZixDQUNBLEdBQU1FLEtBQUksQ0FBRyxHQUFJQyxLQUFKLENBQVNKLElBQUksQ0FBQ0csSUFBZCxDQUFiLENBQ0FFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixJQUFaLEVBQ0EsR0FBTU8sUUFBTyxxSUFDSUMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxHQUFjLEdBQWQsQ0FBbUIsQ0FBQyxFQUEvQixDQURKLHNCQUVPRixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEdBQWMsR0FBZCxDQUFtQixDQUFDLEVBQS9CLENBRlAsb0JBR0tGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsR0FBYyxFQUFkLENBQWtCLENBQUMsRUFBOUIsQ0FITCxxQkFJTUYsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxHQUFjLEVBQWQsQ0FBa0IsQ0FBQyxFQUE5QixDQUpOLG8zREFBYixDQU1BLE1BQ0UsMkRBQUMsT0FBRCxNQUNFLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFVixJQUFJLENBQUNXLElBQWpCLEVBQ0UsMERBQUMsdURBQUQsRUFBZSxFQUFFLENBQUVYLElBQW5CLEVBREYsQ0FERixDQURGLENBT0QsQ0FqQkQsQ0FtQkE7QUFDZVksdUhBQU8sQ0FBQ2QsSUFBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LWl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5pbXBvcnQgRmVhdHVyZWRNZWRpYSBmcm9tIFwiLi4vZmVhdHVyZWQtbWVkaWFcIjtcblxuLyoqXG4gKiBJdGVtIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIHByZXZpZXcgb2YgYSBibG9nIHBvc3QuIEVhY2ggYmxvZyBwb3N0IGNvbnRhaW5zXG4gKiAtIFRpdGxlOiBjbGlja2FibGUgdGl0bGUgb2YgdGhlIHBvc3RcbiAqIC0gQXV0aG9yOiBuYW1lIG9mIGF1dGhvciBhbmQgcHVibGlzaGVkIGRhdGVcbiAqIC0gRmVhdHVyZWRNZWRpYTogdGhlIGZlYXR1cmVkIGltYWdlL3ZpZGVvIG9mIHRoZSBwb3N0XG4gKi9cbmNvbnN0IEl0ZW0gPSAoeyBzdGF0ZSwgaXRlbSB9KSA9PiB7XG4gIGNvbnN0IGF1dGhvciA9IHN0YXRlLnNvdXJjZS5hdXRob3JbaXRlbS5hdXRob3JdO1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoaXRlbS5kYXRlKTtcbiAgY29uc29sZS5sb2coaXRlbSk7XG4gIGNvbnN0IEFydGljbGUgPSBzdHlsZWQuYXJ0aWNsZWBcbiAgICBwYWRkaW5nLXRvcDogJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKygtMTApKX1weDtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTAwKygtMTApKX1weDtcbiAgICBwYWRkaW5nLWxlZnQ6ICR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjUwKygtMTApKX1weDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSo1MCsoLTEwKSl9cHg7XG4gIGA7XG4gIHJldHVybiAoXG4gICAgPEFydGljbGU+XG4gICAgICA8TGluayBsaW5rPXtpdGVtLmxpbmt9PlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17aXRlbX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L0FydGljbGU+XG4gICk7XG59O1xuXG4vLyBDb25uZWN0IHRoZSBJdGVtIHRvIGdhaW4gYWNjZXNzIHRvIGBzdGF0ZWAgYXMgYSBwcm9wXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEl0ZW0pO1xuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list-item.js\n");

/***/ })

})