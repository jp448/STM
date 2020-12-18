webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;var media_selected=media.media_details.sizes.home_small;if(large){media_selected=media.media_details.sizes.home_large;if(!media_selected){// If an image is smaller than the size to be generated it fails to be generated. Hence fallback!\nmedia_selected=media.media_details.sizes.home_small;}}var height=media_selected.height;var width=media_selected.width;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{src:media_selected.source_url,height:height,width:width,alt:\"test\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Layer,{style:{height:height,width:width}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1q2r9fq\",styles:\"margin-top:16px;position:relative;@media (min-width:100px) and (max-width:576px){}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcblxuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj651\",label:\"StyledImage\"})( false?undefined:{name:\"11zglli\",styles:\"@media (min-width:100px) and (max-width:576px){}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcblxuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Layer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Layer\"})(\"position:absolute;top:0;left:0;\",StyledImage,\":hover &{background-color:rgba(230,230,230,0.7);opacity:0.4;}@media (min-width:100px) and (max-width:576px){}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHdCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcblxuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj653\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",StyledImage,\":hover &{visibility:visible;opacity:1;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcblxuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwibWVkaWFfc2VsZWN0ZWQiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJob21lX3NtYWxsIiwiaG9tZV9sYXJnZSIsImhlaWdodCIsIndpZHRoIiwic291cmNlX3VybCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJTdHlsZWRJbWFnZSIsIkxheWVyIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxUkFHQSxHQUFNQSxjQUFhLENBQUcsUUFBaUMsSUFBaEMsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWFDLEtBQWIsQ0FBb0JDLEtBQXBCLENBQWdDLE1BQ3JELEdBQU1DLE1BQUssQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JMLEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNHLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FFWixHQUFJRyxlQUFjLENBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJDLFVBQS9DLENBRUEsR0FBSVAsS0FBSixDQUFXLENBQ1RJLGNBQWMsQ0FBR0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFwQixDQUEwQkUsVUFBM0MsQ0FDQSxHQUFJLENBQUNKLGNBQUwsQ0FBcUIsQ0FDbkI7QUFDQUEsY0FBYyxDQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCQyxVQUEzQyxDQUNELENBQ0YsQ0FFRCxHQUFNRSxPQUFNLENBQUdMLGNBQWMsQ0FBQ0ssTUFBOUIsQ0FDQSxHQUFNQyxNQUFLLENBQUdOLGNBQWMsQ0FBQ00sS0FBN0IsQ0FFQSxNQUNFLDJEQUFDLFNBQUQsTUFDSSwwREFBQyxXQUFELEVBQ0UsR0FBRyxDQUFFTixjQUFjLENBQUNPLFVBRHRCLENBQ2tDLE1BQU0sQ0FBRUYsTUFEMUMsQ0FDa0QsS0FBSyxDQUFFQyxLQUR6RCxDQUNnRSxHQUFHLENBQUMsTUFEcEUsRUFESixDQUlJLDBEQUFDLEtBQUQsRUFBTyxLQUFLLENBQUUsQ0FBQ0QsTUFBTSxDQUFFQSxNQUFULENBQWlCQyxLQUFLLENBQUVBLEtBQXhCLENBQWQsRUFKSixDQUtJLDBEQUFDLElBQUQsTUFBT1gsS0FBUCxDQUxKLENBREYsQ0FTRCxDQTNCRCxDQTZCZWEsdUhBQU8sQ0FBQ2hCLGFBQUQsQ0FBdEIsRUFFQSxHQUFNaUIsVUFBUyw2NEZBQWYsQ0FRQSxHQUFNQyxZQUFXLDYyRkFBakIsQ0FNQSxHQUFNQyxNQUFLLGlKQUlQRCxXQUpPLGt2RkFBWCxDQWFBLEdBQU1FLEtBQUksOE1BTU5GLFdBTk0sNHFGQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IGhlaWdodD17aGVpZ2h0fSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcblxuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})