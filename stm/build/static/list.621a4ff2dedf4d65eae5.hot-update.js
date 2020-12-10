webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;console.log(media.media_details.sizes);var media_selected=media.media_details.sizes.medium;if(large){console.log('hi');media_selected=media.media_details.sizes.medium_large;console.log(media_selected.source_url);}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{style:{backgroundImage:\"url(\".concat(media_selected.source_url,\")\"),height:media_selected.height,width:media_selected.width}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Layer,{style:{height:media_selected.height,width:media_selected.width}}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Text,null,title)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"tc2y7t\",styles:\"margin-top:16px;height:400px;width:400px;position:relative;@media (min-width:100px) and (max-width:576px){width:100%;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QjRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbmNvbnNvbGUubG9nKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpO1xuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bTtcbiAgaWYgKGxhcmdlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZTtcbiAgICBjb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSlgLCBoZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX1cbiAgICAgICAgPlxuICAgICAgICA8TGF5ZXIgc3R5bGU9e3toZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX0+PC9MYXllcj5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgPC9TdHlsZWRJbWFnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcblxuICB9XG5gO1xuXG5jb25zdCBMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwyMzAsMjMwLDAuNyk7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj651\",label:\"StyledImage\"})( false?undefined:{name:\"xfck6p\",styles:\"position:absolute;background-size:contain;background-repeat:no-repeat;-o-object-fit:scale-down;object-fit:scale-down;overflow:hidden;&:hover{}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QzhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbmNvbnNvbGUubG9nKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpO1xuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bTtcbiAgaWYgKGxhcmdlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZTtcbiAgICBjb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSlgLCBoZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX1cbiAgICAgICAgPlxuICAgICAgICA8TGF5ZXIgc3R5bGU9e3toZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX0+PC9MYXllcj5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgPC9TdHlsZWRJbWFnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcblxuICB9XG5gO1xuXG5jb25zdCBMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwyMzAsMjMwLDAuNyk7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Layer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj652\",label:\"Layer\"})(\"position:absolute;top:0;left:0;\",StyledImage,\":hover &{background-color:rgba(230,230,230,0.7);}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHdCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbmNvbnNvbGUubG9nKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpO1xuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bTtcbiAgaWYgKGxhcmdlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZTtcbiAgICBjb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSlgLCBoZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX1cbiAgICAgICAgPlxuICAgICAgICA8TGF5ZXIgc3R5bGU9e3toZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX0+PC9MYXllcj5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgPC9TdHlsZWRJbWFnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcblxuICB9XG5gO1xuXG5jb25zdCBMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwyMzAsMjMwLDAuNyk7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\"));var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj653\",label:\"Text\"})(\"bottom:8px;left:16px;position:absolute;font-family:'Cutive Mono',monospace;visibility:hidden;\",StyledImage,\":hover &{visibility:visible;opacity:1;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHVCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbmNvbnNvbGUubG9nKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpO1xuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bTtcbiAgaWYgKGxhcmdlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZTtcbiAgICBjb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSlgLCBoZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX1cbiAgICAgICAgPlxuICAgICAgICA8TGF5ZXIgc3R5bGU9e3toZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX0+PC9MYXllcj5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgPC9TdHlsZWRJbWFnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcblxuICB9XG5gO1xuXG5jb25zdCBMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwyMzAsMjMwLDAuNyk7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl19 */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50IiwiY29uc29sZSIsImxvZyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsIm1lZGlhX3NlbGVjdGVkIiwibWVkaXVtIiwibWVkaXVtX2xhcmdlIiwic291cmNlX3VybCIsImJhY2tncm91bmRJbWFnZSIsImhlaWdodCIsIndpZHRoIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIlN0eWxlZEltYWdlIiwiTGF5ZXIiLCJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxjQUFhLENBQUcsUUFBaUMsSUFBaEMsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWFDLEtBQWIsQ0FBb0JDLEtBQXBCLENBQWdDLE1BQ3JELEdBQU1DLE1BQUssQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JMLEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNHLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FDZEcsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQUssQ0FBQ0ssYUFBTixDQUFvQkMsS0FBaEMsRUFDRSxHQUFJQyxlQUFjLENBQUdQLEtBQUssQ0FBQ0ssYUFBTixDQUFvQkMsS0FBcEIsQ0FBMEJFLE1BQS9DLENBQ0EsR0FBSVQsS0FBSixDQUFXLENBQ1RJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFDQUcsY0FBYyxDQUFHUCxLQUFLLENBQUNLLGFBQU4sQ0FBb0JDLEtBQXBCLENBQTBCRyxZQUEzQyxDQUNBTixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsY0FBYyxDQUFDRyxVQUEzQixFQUNELENBRUQsTUFDRSwyREFBQyxTQUFELE1BQ0ksMERBQUMsV0FBRCxFQUNFLEtBQUssQ0FBRSxDQUFDQyxlQUFlLGVBQVNKLGNBQWMsQ0FBQ0csVUFBeEIsS0FBaEIsQ0FBdURFLE1BQU0sQ0FBRUwsY0FBYyxDQUFDSyxNQUE5RSxDQUFzRkMsS0FBSyxDQUFFTixjQUFjLENBQUNNLEtBQTVHLENBRFQsRUFHQSwwREFBQyxLQUFELEVBQU8sS0FBSyxDQUFFLENBQUNELE1BQU0sQ0FBRUwsY0FBYyxDQUFDSyxNQUF4QixDQUFnQ0MsS0FBSyxDQUFFTixjQUFjLENBQUNNLEtBQXRELENBQWQsRUFIQSxDQUlBLDBEQUFDLElBQUQsTUFBT2YsS0FBUCxDQUpBLENBREosQ0FERixDQVVELENBdEJELENBd0JlZ0IsdUhBQU8sQ0FBQ25CLGFBQUQsQ0FBdEIsRUFFQSxHQUFNb0IsVUFBUyxnZ0dBQWYsQ0FVQSxHQUFNQyxZQUFXLDBoR0FBakIsQ0FZQSxHQUFNQyxNQUFLLGlKQUlQRCxXQUpPLHN3RkFBWCxDQVNBLEdBQU1FLEtBQUksOE1BTU5GLFdBTk0sNHZGQUFWIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcbmNvbnNvbGUubG9nKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpO1xuICBsZXQgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bTtcbiAgaWYgKGxhcmdlKSB7XG4gICAgY29uc29sZS5sb2coJ2hpJyk7XG4gICAgbWVkaWFfc2VsZWN0ZWQgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzLm1lZGl1bV9sYXJnZTtcbiAgICBjb25zb2xlLmxvZyhtZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHttZWRpYV9zZWxlY3RlZC5zb3VyY2VfdXJsfSlgLCBoZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX1cbiAgICAgICAgPlxuICAgICAgICA8TGF5ZXIgc3R5bGU9e3toZWlnaHQ6IG1lZGlhX3NlbGVjdGVkLmhlaWdodCwgd2lkdGg6IG1lZGlhX3NlbGVjdGVkLndpZHRofX0+PC9MYXllcj5cbiAgICAgICAgPFRleHQ+e3RpdGxlfTwvVGV4dD5cbiAgICAgICAgPC9TdHlsZWRJbWFnZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRJbWFnZSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcblxuICB9XG5gO1xuXG5jb25zdCBMYXllciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwyMzAsMjMwLDAuNyk7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDhweDtcbiAgbGVmdDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LWZhbWlseTogJ0N1dGl2ZSBNb25vJywgbW9ub3NwYWNlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7U3R5bGVkSW1hZ2V9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuYDtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})