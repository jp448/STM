webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// FeaturedImage is the image show on the stm page \nvar FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;var media_selected=media.media_details.sizes.home_small;if(media.mime_type==='image/gif'){media_selected=media;}else{if(large){media_selected=media.media_details.sizes.home_large;if(!media_selected){// If an image is smaller than the size to be generated it fails to be generated. Hence fallback!\nmedia_selected=media.media_details.sizes.home_small;}}}media_selected=media;var width=media_selected.width;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,{style:{width:width}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{src:media_selected.source_url,width:width,alt:\"test\",key:media_selected.id}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1od93p9\",styles:\"margin-top:16px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3Qgd2lkdGggPSBtZWRpYV9zZWxlY3RlZC53aWR0aDtcbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e3dpZHRoOiB3aWR0aH19ID5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBrZXk9e21lZGlhX3NlbGVjdGVkLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj651\",label:\"StyledImage\"})(\"max-width:100%;height:auto;margin:auto;display:block;\",Container,\":hover &{opacity:0.4;}@media (min-width:100px) and (max-width:576px){max-width:100% !important;width:auto !important;height:auto !important;display:block;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3Qgd2lkdGggPSBtZWRpYV9zZWxlY3RlZC53aWR0aDtcbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e3dpZHRoOiB3aWR0aH19ID5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBrZXk9e21lZGlhX3NlbGVjdGVkLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdfQ== */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",Container,\":hover &{visibility:visible;}@media (min-width:100px) and (max-width:576px){bottom:-24px;visibility:visible;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3Qgd2lkdGggPSBtZWRpYV9zZWxlY3RlZC53aWR0aDtcbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e3dpZHRoOiB3aWR0aH19ID5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBrZXk9e21lZGlhX3NlbGVjdGVkLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwibWVkaWFfc2VsZWN0ZWQiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJob21lX3NtYWxsIiwibWltZV90eXBlIiwiaG9tZV9sYXJnZSIsIndpZHRoIiwic291cmNlX3VybCIsImNvbm5lY3QiLCJDb250YWluZXIiLCJTdHlsZWRJbWFnZSIsIlRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7cVJBR0E7QUFFQSxHQUFNQSxjQUFhLENBQUcsUUFBaUMsSUFBaEMsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWFDLEtBQWIsQ0FBb0JDLEtBQXBCLENBQWdDLE1BQ3JELEdBQU1DLE1BQUssQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JMLEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNHLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FFWixHQUFJRyxlQUFjLENBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJDLFVBQS9DLENBQ0EsR0FBSU4sS0FBSyxDQUFDTyxTQUFOLEdBQW9CLFdBQXhCLENBQXFDLENBQ25DSixjQUFjLENBQUdILEtBQWpCLENBQ0QsQ0FGRCxJQUVPLENBQ0wsR0FBSUQsS0FBSixDQUFXLENBQ1RJLGNBQWMsQ0FBR0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFwQixDQUEwQkcsVUFBM0MsQ0FDQSxHQUFJLENBQUNMLGNBQUwsQ0FBcUIsQ0FDbkI7QUFDQUEsY0FBYyxDQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCQyxVQUEzQyxDQUNELENBQ0YsQ0FDRixDQUNESCxjQUFjLENBQUdILEtBQWpCLENBQ0EsR0FBTVMsTUFBSyxDQUFHTixjQUFjLENBQUNNLEtBQTdCLENBRUEsTUFDRSwyREFBQyxTQUFELEVBQVcsS0FBSyxDQUFFLENBQUNBLEtBQUssQ0FBRUEsS0FBUixDQUFsQixFQUNJLDBEQUFDLFdBQUQsRUFDRSxHQUFHLENBQUVOLGNBQWMsQ0FBQ08sVUFEdEIsQ0FDa0MsS0FBSyxDQUFFRCxLQUR6QyxDQUNnRCxHQUFHLENBQUMsTUFEcEQsQ0FDMkQsR0FBRyxDQUFFTixjQUFjLENBQUNOLEVBRC9FLEVBREosQ0FJSSwwREFBQyxJQUFELE1BQU9DLEtBQVAsQ0FKSixDQURGLENBUUQsQ0E1QkQsQ0E4QmVhLHVIQUFPLENBQUNoQixhQUFELENBQXRCLEVBRUEsR0FBTWlCLFVBQVMsaWdHQUFmLENBS0EsR0FBTUMsWUFBVyw2S0FLYkQsU0FMYSxvOEZBQWpCLENBZ0JBLEdBQU1FLEtBQUksOE1BTU5GLFNBTk0sczVGQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3Qgd2lkdGggPSBtZWRpYV9zZWxlY3RlZC53aWR0aDtcbiAgXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBzdHlsZT17e3dpZHRoOiB3aWR0aH19ID5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17d2lkdGh9IGFsdD1cInRlc3RcIiBrZXk9e21lZGlhX3NlbGVjdGVkLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})