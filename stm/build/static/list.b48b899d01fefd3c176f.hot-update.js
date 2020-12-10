webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;console.log(media.media_details.sizes);var media_selected=media.media_details.sizes.medium;if(large){media_selected=media.media_details.sizes.large;}var height=media_selected.height;var width=media_selected.width;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,{style:{height:height,width:width}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{style:{backgroundImage:\"url(\".concat(media_selected.source_url,\")\"),height:media_selected.height,width:media_selected.width}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Layer,{style:{height:media_selected.height,width:media_selected.width}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Text,null,title)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"ismjwp\",styles:\"margin-top:16px;position:relative;@media (min-width:100px) and (max-width:576px){width:100%;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbiAgY29uc29sZS5sb2cobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcyk7XG4gIGxldCBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMubWVkaXVtO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmxhcmdlO1xuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0O1xuICBjb25zdCB3aWR0aCA9IG1lZGlhX3NlbGVjdGVkLndpZHRoO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGh9fSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0pYCwgaGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19XG4gICAgICAgID5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC1vLW9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6aG92ZXIge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj651\",label:\"StyledImage\"})( false?undefined:{name:\"xfck6p\",styles:\"position:absolute;background-size:contain;background-repeat:no-repeat;-o-object-fit:scale-down;object-fit:scale-down;overflow:hidden;&:hover{}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbiAgY29uc29sZS5sb2cobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcyk7XG4gIGxldCBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMubWVkaXVtO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmxhcmdlO1xuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0O1xuICBjb25zdCB3aWR0aCA9IG1lZGlhX3NlbGVjdGVkLndpZHRoO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGh9fSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0pYCwgaGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19XG4gICAgICAgID5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC1vLW9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6aG92ZXIge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Layer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Layer\"})(\"position:absolute;top:0;left:0;\",StyledImage,\":hover &{background-color:rgba(230,230,230,0.7);}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHdCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbiAgY29uc29sZS5sb2cobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcyk7XG4gIGxldCBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMubWVkaXVtO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmxhcmdlO1xuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0O1xuICBjb25zdCB3aWR0aCA9IG1lZGlhX3NlbGVjdGVkLndpZHRoO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGh9fSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0pYCwgaGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19XG4gICAgICAgID5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC1vLW9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6aG92ZXIge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG4iXX0= */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj653\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",StyledImage,\":hover &{visibility:visible;opacity:1;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbiAgY29uc29sZS5sb2cobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcyk7XG4gIGxldCBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMubWVkaXVtO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmxhcmdlO1xuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0O1xuICBjb25zdCB3aWR0aCA9IG1lZGlhX3NlbGVjdGVkLndpZHRoO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e2hlaWdodDogaGVpZ2h0LCB3aWR0aDogd2lkdGh9fSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0pYCwgaGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19XG4gICAgICAgID5cbiAgICAgICAgPExheWVyIHN0eWxlPXt7aGVpZ2h0OiBtZWRpYV9zZWxlY3RlZC5oZWlnaHQsIHdpZHRoOiBtZWRpYV9zZWxlY3RlZC53aWR0aH19PjwvTGF5ZXI+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIC1vLW9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICY6aG92ZXIge1xuXG4gIH1cbmA7XG5cbmNvbnN0IExheWVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLDIzMCwyMzAsMC43KTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG4iXX0= */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwiY29uc29sZSIsImxvZyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsIm1lZGlhX3NlbGVjdGVkIiwibWVkaXVtIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzb3VyY2VfdXJsIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIlN0eWxlZEltYWdlIiwiTGF5ZXIiLCJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxjQUFhLENBQUcsUUFBaUMsSUFBaEMsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWFDLEtBQWIsQ0FBb0JDLEtBQXBCLENBQWdDLE1BQ3JELEdBQU1DLE1BQUssQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JMLEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNHLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FDWkcsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQUssQ0FBQ0ssYUFBTixDQUFvQkMsS0FBaEMsRUFDQSxHQUFJQyxlQUFjLENBQUdQLEtBQUssQ0FBQ0ssYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJFLE1BQS9DLENBRUEsR0FBSVQsS0FBSixDQUFXLENBQ1RRLGNBQWMsQ0FBR1AsS0FBSyxDQUFDSyxhQUFOLENBQW9CQyxLQUFwQixDQUEwQlAsS0FBM0MsQ0FDRCxDQUVELEdBQU1VLE9BQU0sQ0FBR0YsY0FBYyxDQUFDRSxNQUE5QixDQUNBLEdBQU1DLE1BQUssQ0FBR0gsY0FBYyxDQUFDRyxLQUE3QixDQUVBLE1BQ0UsMkRBQUMsU0FBRCxFQUFXLEtBQUssQ0FBRSxDQUFDRCxNQUFNLENBQUVBLE1BQVQsQ0FBaUJDLEtBQUssQ0FBRUEsS0FBeEIsQ0FBbEIsRUFDSSwwREFBQyxXQUFELEVBQ0UsS0FBSyxDQUFFLENBQUNDLGVBQWUsZUFBU0osY0FBYyxDQUFDSyxVQUF4QixLQUFoQixDQUF1REgsTUFBTSxDQUFFRixjQUFjLENBQUNFLE1BQTlFLENBQXNGQyxLQUFLLENBQUVILGNBQWMsQ0FBQ0csS0FBNUcsQ0FEVCxFQUdBLDBEQUFDLEtBQUQsRUFBTyxLQUFLLENBQUUsQ0FBQ0QsTUFBTSxDQUFFRixjQUFjLENBQUNFLE1BQXhCLENBQWdDQyxLQUFLLENBQUVILGNBQWMsQ0FBQ0csS0FBdEQsQ0FBZCxFQUhBLENBSUEsMERBQUMsSUFBRCxNQUFPWixLQUFQLENBSkEsQ0FESixDQURGLENBVUQsQ0F4QkQsQ0EwQmVlLHVIQUFPLENBQUNsQixhQUFELENBQXRCLEVBRUEsR0FBTW1CLFVBQVMsKy9GQUFmLENBUUEsR0FBTUMsWUFBVyxrakdBQWpCLENBWUEsR0FBTUMsTUFBSyxpSkFJUEQsV0FKTyw4eEZBQVgsQ0FTQSxHQUFNRSxLQUFJLDhNQU1ORixXQU5NLG94RkFBViIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtaW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvaW1hZ2VcIjtcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG4gIGNvbnNvbGUubG9nKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpO1xuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bTtcbiAgXG4gIGlmIChsYXJnZSkge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5sYXJnZTtcbiAgfVxuXG4gIGNvbnN0IGhlaWdodCA9IG1lZGlhX3NlbGVjdGVkLmhlaWdodDtcbiAgY29uc3Qgd2lkdGggPSBtZWRpYV9zZWxlY3RlZC53aWR0aDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgc3R5bGU9e3toZWlnaHQ6IGhlaWdodCwgd2lkdGg6IHdpZHRofX0gPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9KWAsIGhlaWdodDogbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0LCB3aWR0aDogbWVkaWFfc2VsZWN0ZWQud2lkdGh9fVxuICAgICAgICA+XG4gICAgICAgIDxMYXllciBzdHlsZT17e2hlaWdodDogbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0LCB3aWR0aDogbWVkaWFfc2VsZWN0ZWQud2lkdGh9fT48L0xheWVyPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgICAgICA8L1N0eWxlZEltYWdlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcblxuICB9XG5gO1xuXG5jb25zdCBMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwyMzAsMjMwLDAuNyk7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})