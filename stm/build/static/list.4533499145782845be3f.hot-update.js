webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];console.log(\"media\");console.log(media);if(!media)return null;var media_selected=media.media_details.sizes.home_small;if(large){media_selected=media.media_details.sizes.home_large;if(!media_selected){// If an image is smaller than the size to be generated it fails to be generated. Hence fallback!\nmedia_selected=media.media_details.sizes.home_small;}}//const height = media_selected.height;\nvar width=media_selected.width;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{src:media_selected.source_url,width:width,alt:\"test\",key:media_selected.id}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1od93p9\",styles:\"margin-top:16px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBjb25zb2xlLmxvZyhcIm1lZGlhXCIpO1xuICBjb25zb2xlLmxvZyhtZWRpYSk7XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfbGFyZ2U7XG4gICAgaWYgKCFtZWRpYV9zZWxlY3RlZCkge1xuICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gICAgfVxuICB9XG5cbiAgLy9jb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIGtleT17bWVkaWFfc2VsZWN0ZWQuaWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3R0b206IC0yNHB4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj651\",label:\"StyledImage\"})(\"max-width:100%;height:auto;margin:auto;display:block;\",Container,\":hover &{opacity:0.4;}@media (min-width:100px) and (max-width:576px){max-width:100% !important;width:auto !important;height:auto !important;display:block;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBjb25zb2xlLmxvZyhcIm1lZGlhXCIpO1xuICBjb25zb2xlLmxvZyhtZWRpYSk7XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfbGFyZ2U7XG4gICAgaWYgKCFtZWRpYV9zZWxlY3RlZCkge1xuICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gICAgfVxuICB9XG5cbiAgLy9jb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIGtleT17bWVkaWFfc2VsZWN0ZWQuaWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3R0b206IC0yNHB4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbmA7XG5cbiJdfQ== */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",Container,\":hover &{visibility:visible;}@media (min-width:100px) and (max-width:576px){bottom:-24px;visibility:visible;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBjb25zb2xlLmxvZyhcIm1lZGlhXCIpO1xuICBjb25zb2xlLmxvZyhtZWRpYSk7XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfbGFyZ2U7XG4gICAgaWYgKCFtZWRpYV9zZWxlY3RlZCkge1xuICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gICAgfVxuICB9XG5cbiAgLy9jb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIGtleT17bWVkaWFfc2VsZWN0ZWQuaWR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3R0b206IC0yNHB4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbmA7XG5cbiJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwiY29uc29sZSIsImxvZyIsIm1lZGlhX3NlbGVjdGVkIiwibWVkaWFfZGV0YWlscyIsInNpemVzIiwiaG9tZV9zbWFsbCIsImhvbWVfbGFyZ2UiLCJ3aWR0aCIsInNvdXJjZV91cmwiLCJjb25uZWN0IiwiQ29udGFpbmVyIiwiU3R5bGVkSW1hZ2UiLCJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FSQUdBLEdBQU1BLGNBQWEsQ0FBRyxRQUFpQyxJQUFoQyxDQUFFQyxLQUFGLENBQVNDLEVBQVQsQ0FBYUMsS0FBYixDQUFvQkMsS0FBcEIsQ0FBZ0MsTUFDckQsR0FBTUMsTUFBSyxDQUFHSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkwsRUFBeEIsQ0FBZCxDQUVBTSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQ0FELE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixLQUFaLEVBRUEsR0FBSSxDQUFDQSxLQUFMLENBQVksTUFBTyxLQUFQLENBRVosR0FBSUssZUFBYyxDQUFHTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCQyxVQUEvQyxDQUVBLEdBQUlULEtBQUosQ0FBVyxDQUNUTSxjQUFjLENBQUdMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJFLFVBQTNDLENBQ0EsR0FBSSxDQUFDSixjQUFMLENBQXFCLENBQ25CO0FBQ0FBLGNBQWMsQ0FBR0wsS0FBSyxDQUFDTSxhQUFOLENBQW9CQyxLQUFwQixDQUEwQkMsVUFBM0MsQ0FDRCxDQUNGLENBRUQ7QUFDQSxHQUFNRSxNQUFLLENBQUdMLGNBQWMsQ0FBQ0ssS0FBN0IsQ0FFQSxNQUNFLDJEQUFDLFNBQUQsTUFDSSwwREFBQyxXQUFELEVBQ0UsR0FBRyxDQUFFTCxjQUFjLENBQUNNLFVBRHRCLENBQ2tDLEtBQUssQ0FBRUQsS0FEekMsQ0FDZ0QsR0FBRyxDQUFDLE1BRHBELENBQzJELEdBQUcsQ0FBRUwsY0FBYyxDQUFDUixFQUQvRSxFQURKLENBSUksMERBQUMsSUFBRCxNQUFPQyxLQUFQLENBSkosQ0FERixDQVFELENBN0JELENBK0JlYyx1SEFBTyxDQUFDakIsYUFBRCxDQUF0QixFQUVBLEdBQU1rQixVQUFTLHEzRkFBZixDQUtBLEdBQU1DLFlBQVcsNktBS2JELFNBTGEsd3pGQUFqQixDQWdCQSxHQUFNRSxLQUFJLDhNQU1ORixTQU5NLDB3RkFBViIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtaW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgY29uc29sZS5sb2coXCJtZWRpYVwiKTtcbiAgY29uc29sZS5sb2cobWVkaWEpO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGxldCBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgXG4gIGlmIChsYXJnZSkge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX2xhcmdlO1xuICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgIC8vIElmIGFuIGltYWdlIGlzIHNtYWxsZXIgdGhhbiB0aGUgc2l6ZSB0byBiZSBnZW5lcmF0ZWQgaXQgZmFpbHMgdG8gYmUgZ2VuZXJhdGVkLiBIZW5jZSBmYWxsYmFjayFcbiAgICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vY29uc3QgaGVpZ2h0ID0gbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0O1xuICBjb25zdCB3aWR0aCA9IG1lZGlhX3NlbGVjdGVkLndpZHRoO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBrZXk9e21lZGlhX3NlbGVjdGVkLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})