webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list-item.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list-item.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _featured_media__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../featured-media */ \"./packages/mars-theme/src/components/featured-media.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/**\n * Item Component\n *\n * It renders the preview of a blog post. Each blog post contains\n * - Title: clickable title of the post\n * - Author: name of author and published date\n * - FeaturedMedia: the featured image/video of the post\n */var Item=(_ref)=>{var{state,item}=_ref;var author=state.source.author[item.author];var date=new Date(item.date);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"article\",{style:{paddingLeft:Math.floor(Math.random()*10+20)}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:item.link},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_featured_media__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{id:item.featured_media})));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Item));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLmpzPzdkMjEiXSwibmFtZXMiOlsiSXRlbSIsInN0YXRlIiwiaXRlbSIsImF1dGhvciIsInNvdXJjZSIsImRhdGUiLCJEYXRlIiwicGFkZGluZ0xlZnQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsaW5rIiwiZmVhdHVyZWRfbWVkaWEiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7Ozs7OztHQVFBLEdBQU1BLEtBQUksQ0FBRyxRQUFxQixJQUFwQixDQUFFQyxLQUFGLENBQVNDLElBQVQsQ0FBb0IsTUFDaEMsR0FBTUMsT0FBTSxDQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUQsTUFBYixDQUFvQkQsSUFBSSxDQUFDQyxNQUF6QixDQUFmLENBQ0EsR0FBTUUsS0FBSSxDQUFHLEdBQUlDLEtBQUosQ0FBU0osSUFBSSxDQUFDRyxJQUFkLENBQWIsQ0FFQSxNQUNFLHNFQUFTLEtBQUssQ0FBRSxDQUFDRSxXQUFXLENBQUVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsR0FBYyxFQUFkLENBQWlCLEVBQTVCLENBQWQsQ0FBaEIsRUFDRSwwREFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRVIsSUFBSSxDQUFDUyxJQUFqQixFQUNFLDBEQUFDLHVEQUFELEVBQWUsRUFBRSxDQUFFVCxJQUFJLENBQUNVLGNBQXhCLEVBREYsQ0FERixDQURGLENBT0QsQ0FYRCxDQWFBO0FBQ2VDLHVIQUFPLENBQUNiLElBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC1pdGVtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vbGlua1wiO1xuaW1wb3J0IEZlYXR1cmVkTWVkaWEgZnJvbSBcIi4uL2ZlYXR1cmVkLW1lZGlhXCI7XG5cbi8qKlxuICogSXRlbSBDb21wb25lbnRcbiAqXG4gKiBJdCByZW5kZXJzIHRoZSBwcmV2aWV3IG9mIGEgYmxvZyBwb3N0LiBFYWNoIGJsb2cgcG9zdCBjb250YWluc1xuICogLSBUaXRsZTogY2xpY2thYmxlIHRpdGxlIG9mIHRoZSBwb3N0XG4gKiAtIEF1dGhvcjogbmFtZSBvZiBhdXRob3IgYW5kIHB1Ymxpc2hlZCBkYXRlXG4gKiAtIEZlYXR1cmVkTWVkaWE6IHRoZSBmZWF0dXJlZCBpbWFnZS92aWRlbyBvZiB0aGUgcG9zdFxuICovXG5jb25zdCBJdGVtID0gKHsgc3RhdGUsIGl0ZW0gfSkgPT4ge1xuICBjb25zdCBhdXRob3IgPSBzdGF0ZS5zb3VyY2UuYXV0aG9yW2l0ZW0uYXV0aG9yXTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGl0ZW0uZGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBzdHlsZT17e3BhZGRpbmdMZWZ0OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTArMjApfX0+XG4gICAgICA8TGluayBsaW5rPXtpdGVtLmxpbmt9PlxuICAgICAgICA8RmVhdHVyZWRNZWRpYSBpZD17aXRlbS5mZWF0dXJlZF9tZWRpYX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG4vLyBDb25uZWN0IHRoZSBJdGVtIHRvIGdhaW4gYWNjZXNzIHRvIGBzdGF0ZWAgYXMgYSBwcm9wXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEl0ZW0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list-item.js\n");

/***/ })

})