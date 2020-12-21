webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;var media_selected=media.media_details.sizes.home_small;if(large){media_selected=media.media_details.sizes.home_large;if(!media_selected){// If an image is smaller than the size to be generated it fails to be generated. Hence fallback!\nmedia_selected=media.media_details.sizes.home_small;}}var height=media_selected.height;var width=media_selected.width;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{src:media_selected.source_url,width:width,alt:\"test\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1od93p9\",styles:\"margin-top:16px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj651\",label:\"StyledImage\"})(\"max-width:100%;height:auto;margin:auto;\",Container,\":hover &{opacity:0.4;}@media (min-width:100px) and (max-width:576px){max-width:100% !important;width:auto !important;height:auto !important;display:block;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",Container,\":hover &{visibility:visible;opacity:1;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwibWVkaWFfc2VsZWN0ZWQiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJob21lX3NtYWxsIiwiaG9tZV9sYXJnZSIsImhlaWdodCIsIndpZHRoIiwic291cmNlX3VybCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJTdHlsZWRJbWFnZSIsIlRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cVJBR0EsR0FBTUEsY0FBYSxDQUFHLFFBQWlDLElBQWhDLENBQUVDLEtBQUYsQ0FBU0MsRUFBVCxDQUFhQyxLQUFiLENBQW9CQyxLQUFwQixDQUFnQyxNQUNyRCxHQUFNQyxNQUFLLENBQUdKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxVQUFiLENBQXdCTCxFQUF4QixDQUFkLENBRUEsR0FBSSxDQUFDRyxLQUFMLENBQVksTUFBTyxLQUFQLENBRVosR0FBSUcsZUFBYyxDQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCQyxVQUEvQyxDQUVBLEdBQUlQLEtBQUosQ0FBVyxDQUNUSSxjQUFjLENBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJFLFVBQTNDLENBQ0EsR0FBSSxDQUFDSixjQUFMLENBQXFCLENBQ25CO0FBQ0FBLGNBQWMsQ0FBR0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFwQixDQUEwQkMsVUFBM0MsQ0FDRCxDQUNGLENBRUQsR0FBTUUsT0FBTSxDQUFHTCxjQUFjLENBQUNLLE1BQTlCLENBQ0EsR0FBTUMsTUFBSyxDQUFHTixjQUFjLENBQUNNLEtBQTdCLENBRUEsTUFDRSwyREFBQyxTQUFELE1BQ0ksMERBQUMsV0FBRCxFQUNFLEdBQUcsQ0FBRU4sY0FBYyxDQUFDTyxVQUR0QixDQUNrQyxLQUFLLENBQUVELEtBRHpDLENBQ2dELEdBQUcsQ0FBQyxNQURwRCxFQURKLENBSUksMERBQUMsSUFBRCxNQUFPWCxLQUFQLENBSkosQ0FERixDQVFELENBMUJELENBNEJlYSx1SEFBTyxDQUFDaEIsYUFBRCxDQUF0QixFQUVBLEdBQU1pQixVQUFTLDZuRkFBZixDQUtBLEdBQU1DLFlBQVcsK0pBSWJELFNBSmEsZ2tGQUFqQixDQWVBLEdBQU1FLEtBQUksOE1BTU5GLFNBTk0sNDhFQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})