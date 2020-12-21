webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;var media_selected=media.media_details.sizes.home_small;if(large){media_selected=media.media_details.sizes.home_large;if(!media_selected){// If an image is smaller than the size to be generated it fails to be generated. Hence fallback!\nmedia_selected=media.media_details.sizes.home_small;}}var height=media_selected.height;var width=media_selected.width;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{src:media_selected.source_url,width:width,alt:\"test\"}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1od93p9\",styles:\"margin-top:16px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj651\",label:\"StyledImage\"})(\"max-width:100%;height:auto;margin:auto;display:block;\",Container,\":hover &{opacity:0.4;}@media (min-width:100px) and (max-width:576px){max-width:100% !important;width:auto !important;height:auto !important;display:block;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",Container,\":hover &{visibility:visible;opacity:1;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIFxuICBpZiAobGFyZ2UpIHtcbiAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICBpZiAoIW1lZGlhX3NlbGVjdGVkKSB7XG4gICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICB9XG4gIH1cblxuICBjb25zdCBoZWlnaHQgPSBtZWRpYV9zZWxlY3RlZC5oZWlnaHQ7XG4gIGNvbnN0IHdpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzcmM9e21lZGlhX3NlbGVjdGVkLnNvdXJjZV91cmx9IHdpZHRoPXt3aWR0aH0gYWx0PVwidGVzdFwiIFxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbmA7XG5cbiJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwibWVkaWFfc2VsZWN0ZWQiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJob21lX3NtYWxsIiwiaG9tZV9sYXJnZSIsImhlaWdodCIsIndpZHRoIiwic291cmNlX3VybCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJTdHlsZWRJbWFnZSIsIlRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cVJBR0EsR0FBTUEsY0FBYSxDQUFHLFFBQWlDLElBQWhDLENBQUVDLEtBQUYsQ0FBU0MsRUFBVCxDQUFhQyxLQUFiLENBQW9CQyxLQUFwQixDQUFnQyxNQUNyRCxHQUFNQyxNQUFLLENBQUdKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxVQUFiLENBQXdCTCxFQUF4QixDQUFkLENBRUEsR0FBSSxDQUFDRyxLQUFMLENBQVksTUFBTyxLQUFQLENBRVosR0FBSUcsZUFBYyxDQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCQyxVQUEvQyxDQUVBLEdBQUlQLEtBQUosQ0FBVyxDQUNUSSxjQUFjLENBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJFLFVBQTNDLENBQ0EsR0FBSSxDQUFDSixjQUFMLENBQXFCLENBQ25CO0FBQ0FBLGNBQWMsQ0FBR0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFwQixDQUEwQkMsVUFBM0MsQ0FDRCxDQUNGLENBRUQsR0FBTUUsT0FBTSxDQUFHTCxjQUFjLENBQUNLLE1BQTlCLENBQ0EsR0FBTUMsTUFBSyxDQUFHTixjQUFjLENBQUNNLEtBQTdCLENBRUEsTUFDRSwyREFBQyxTQUFELE1BQ0ksMERBQUMsV0FBRCxFQUNFLEdBQUcsQ0FBRU4sY0FBYyxDQUFDTyxVQUR0QixDQUNrQyxLQUFLLENBQUVELEtBRHpDLENBQ2dELEdBQUcsQ0FBQyxNQURwRCxFQURKLENBSUksMERBQUMsSUFBRCxNQUFPWCxLQUFQLENBSkosQ0FERixDQVFELENBMUJELENBNEJlYSx1SEFBTyxDQUFDaEIsYUFBRCxDQUF0QixFQUVBLEdBQU1pQixVQUFTLHlwRkFBZixDQUtBLEdBQU1DLFlBQVcsNktBS2JELFNBTGEsNGxGQUFqQixDQWdCQSxHQUFNRSxLQUFJLDhNQU1ORixTQU5NLHcrRUFBViIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtaW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBcbiAgaWYgKGxhcmdlKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfbGFyZ2U7XG4gICAgaWYgKCFtZWRpYV9zZWxlY3RlZCkge1xuICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGVpZ2h0ID0gbWVkaWFfc2VsZWN0ZWQuaGVpZ2h0O1xuICBjb25zdCB3aWR0aCA9IG1lZGlhX3NlbGVjdGVkLndpZHRoO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBcbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2BcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5gO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})