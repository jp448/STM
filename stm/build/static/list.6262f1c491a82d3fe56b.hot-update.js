webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}// FeaturedImage is the image show on the stm page \nvar FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;var media_selected=media.media_details.sizes.home_small;if(media.mime_type==='image/gif'){media_selected=media;}else{if(large){media_selected=media.media_details.sizes.home_large;if(!media_selected){// If an image is smaller than the size to be generated it fails to be generated. Hence fallback!\nmedia_selected=media.media_details.sizes.home_small;}}}media_selected=media;var img_width=media_selected.width;console.log(media_selected);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,{key:media_selected.title.rendered},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(StyledImage,{src:media_selected.source_url,width:img_width,alt:media_selected.alt_text,key:media_selected.id}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1gomreu\",styles:\"position:relative;display:inline-block;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3QgaW1nX3dpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5jb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBrZXk9e21lZGlhX3NlbGVjdGVkLnRpdGxlLnJlbmRlcmVkfSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHNyYz17bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0gd2lkdGg9e2ltZ193aWR0aH0gYWx0PXttZWRpYV9zZWxlY3RlZC5hbHRfdGV4dH0ga2V5PXttZWRpYV9zZWxlY3RlZC5pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj651\",label:\"StyledImage\"})(\"max-width:100%;height:auto;margin:auto;display:block;\",Container,\":hover &{opacity:0.4;}@media (min-width:100px) and (max-width:576px){max-width:100% !important;width:auto !important;height:auto !important;display:block;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3QgaW1nX3dpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5jb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBrZXk9e21lZGlhX3NlbGVjdGVkLnRpdGxlLnJlbmRlcmVkfSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHNyYz17bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0gd2lkdGg9e2ltZ193aWR0aH0gYWx0PXttZWRpYV9zZWxlY3RlZC5hbHRfdGV4dH0ga2V5PXttZWRpYV9zZWxlY3RlZC5pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdfQ== */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",Container,\":hover &{visibility:visible;}@media (min-width:100px) and (max-width:576px){bottom:-24px;visibility:visible;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG4vLyBGZWF0dXJlZEltYWdlIGlzIHRoZSBpbWFnZSBzaG93IG9uIHRoZSBzdG0gcGFnZSBcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgbGV0IG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICBpZiAobWVkaWEubWltZV90eXBlID09PSAnaW1hZ2UvZ2lmJykge1xuICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWE7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGxhcmdlKSB7XG4gICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9sYXJnZTtcbiAgICAgIGlmICghbWVkaWFfc2VsZWN0ZWQpIHtcbiAgICAgICAgLy8gSWYgYW4gaW1hZ2UgaXMgc21hbGxlciB0aGFuIHRoZSBzaXplIHRvIGJlIGdlbmVyYXRlZCBpdCBmYWlscyB0byBiZSBnZW5lcmF0ZWQuIEhlbmNlIGZhbGxiYWNrIVxuICAgICAgICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMuaG9tZV9zbWFsbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgY29uc3QgaW1nX3dpZHRoID0gbWVkaWFfc2VsZWN0ZWQud2lkdGg7XG5jb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZCk7XG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lciBrZXk9e21lZGlhX3NlbGVjdGVkLnRpdGxlLnJlbmRlcmVkfSA+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIHNyYz17bWVkaWFfc2VsZWN0ZWQuc291cmNlX3VybH0gd2lkdGg9e2ltZ193aWR0aH0gYWx0PXttZWRpYV9zZWxlY3RlZC5hbHRfdGV4dH0ga2V5PXttZWRpYV9zZWxlY3RlZC5pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgYm90dG9tOiAtMjRweDtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gOyJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwibWVkaWFfc2VsZWN0ZWQiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJob21lX3NtYWxsIiwibWltZV90eXBlIiwiaG9tZV9sYXJnZSIsImltZ193aWR0aCIsIndpZHRoIiwiY29uc29sZSIsImxvZyIsInJlbmRlcmVkIiwic291cmNlX3VybCIsImFsdF90ZXh0IiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIlN0eWxlZEltYWdlIiwiVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztxUkFHQTtBQUVBLEdBQU1BLGNBQWEsQ0FBRyxRQUFpQyxJQUFoQyxDQUFFQyxLQUFGLENBQVNDLEVBQVQsQ0FBYUMsS0FBYixDQUFvQkMsS0FBcEIsQ0FBZ0MsTUFDckQsR0FBTUMsTUFBSyxDQUFHSixLQUFLLENBQUNLLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkwsRUFBeEIsQ0FBZCxDQUVBLEdBQUksQ0FBQ0csS0FBTCxDQUFZLE1BQU8sS0FBUCxDQUVaLEdBQUlHLGVBQWMsQ0FBR0gsS0FBSyxDQUFDSSxhQUFOLENBQW9CQyxLQUFwQixDQUEwQkMsVUFBL0MsQ0FDQSxHQUFJTixLQUFLLENBQUNPLFNBQU4sR0FBb0IsV0FBeEIsQ0FBcUMsQ0FDbkNKLGNBQWMsQ0FBR0gsS0FBakIsQ0FDRCxDQUZELElBRU8sQ0FDTCxHQUFJRCxLQUFKLENBQVcsQ0FDVEksY0FBYyxDQUFHSCxLQUFLLENBQUNJLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCRyxVQUEzQyxDQUNBLEdBQUksQ0FBQ0wsY0FBTCxDQUFxQixDQUNuQjtBQUNBQSxjQUFjLENBQUdILEtBQUssQ0FBQ0ksYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJDLFVBQTNDLENBQ0QsQ0FDRixDQUNGLENBQ0RILGNBQWMsQ0FBR0gsS0FBakIsQ0FDQSxHQUFNUyxVQUFTLENBQUdOLGNBQWMsQ0FBQ08sS0FBakMsQ0FDRkMsT0FBTyxDQUFDQyxHQUFSLENBQVlULGNBQVosRUFDRSxNQUNFLDJEQUFDLFNBQUQsRUFBVyxHQUFHLENBQUVBLGNBQWMsQ0FBQ0wsS0FBZixDQUFxQmUsUUFBckMsRUFDSSwwREFBQyxXQUFELEVBQ0UsR0FBRyxDQUFFVixjQUFjLENBQUNXLFVBRHRCLENBQ2tDLEtBQUssQ0FBRUwsU0FEekMsQ0FDb0QsR0FBRyxDQUFFTixjQUFjLENBQUNZLFFBRHhFLENBQ2tGLEdBQUcsQ0FBRVosY0FBYyxDQUFDTixFQUR0RyxFQURKLENBSUksMERBQUMsSUFBRCxNQUFPQyxLQUFQLENBSkosQ0FERixDQVFELENBNUJELENBOEJla0IsdUhBQU8sQ0FBQ3JCLGFBQUQsQ0FBdEIsRUFFQSxHQUFNc0IsVUFBUyxrbUdBQWYsQ0FLQSxHQUFNQyxZQUFXLDZLQUtiRCxTQUxhLGdpR0FBakIsQ0FnQkEsR0FBTUUsS0FBSSw4TUFNTkYsU0FOTSxrL0ZBQVYiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbi8vIEZlYXR1cmVkSW1hZ2UgaXMgdGhlIGltYWdlIHNob3cgb24gdGhlIHN0bSBwYWdlIFxuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLmhvbWVfc21hbGw7XG4gIGlmIChtZWRpYS5taW1lX3R5cGUgPT09ICdpbWFnZS9naWYnKSB7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYTtcbiAgfSBlbHNlIHtcbiAgICBpZiAobGFyZ2UpIHtcbiAgICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX2xhcmdlO1xuICAgICAgaWYgKCFtZWRpYV9zZWxlY3RlZCkge1xuICAgICAgICAvLyBJZiBhbiBpbWFnZSBpcyBzbWFsbGVyIHRoYW4gdGhlIHNpemUgdG8gYmUgZ2VuZXJhdGVkIGl0IGZhaWxzIHRvIGJlIGdlbmVyYXRlZC4gSGVuY2UgZmFsbGJhY2shXG4gICAgICAgIG1lZGlhX3NlbGVjdGVkID0gbWVkaWEubWVkaWFfZGV0YWlscy5zaXplcy5ob21lX3NtYWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBtZWRpYV9zZWxlY3RlZCA9IG1lZGlhO1xuICBjb25zdCBpbWdfd2lkdGggPSBtZWRpYV9zZWxlY3RlZC53aWR0aDtcbmNvbnNvbGUubG9nKG1lZGlhX3NlbGVjdGVkKTtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGtleT17bWVkaWFfc2VsZWN0ZWQudGl0bGUucmVuZGVyZWR9ID5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3JjPXttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSB3aWR0aD17aW1nX3dpZHRofSBhbHQ9e21lZGlhX3NlbGVjdGVkLmFsdF90ZXh0fSBrZXk9e21lZGlhX3NlbGVjdGVkLmlkfVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5pbWdgXG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICBib3R0b206IC0yNHB4O1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})