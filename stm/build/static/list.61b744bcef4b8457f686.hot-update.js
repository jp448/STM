webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title}=_ref;var media=state.source.attachment[id];if(!media)return null;var srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(\"\".concat(current.join(\" \"),\"w\").concat(index!==array.length-1?\", \":\"\")),\"\")||null;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{alt:media.title.rendered,src:media.source_url,srcSet:srcset}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Text,null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"ab8a4c\",styles:\"margin-top:16px;height:300px;width:400px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICAgIHNyY1NldD17c3Jjc2V0fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gICR7VGV4dH06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj651\",label:\"Text\"})(\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);visibility:hidden;\",Container,\":hover &{visibility:visible;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3VCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICAgIHNyY1NldD17c3Jjc2V0fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gICR7VGV4dH06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gOyJdfQ== */\"));var StyledImage=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"ehhdj652\",label:\"StyledImage\"})(\"display:block;height:100%;width:100%;-o-object-fit:scale-down;object-fit:scale-down;overflow:hidden;&:hover{opacity:0.8;}\",Text,\":hover &{opacity:0.5;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGlDIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICAgIHNyY1NldD17c3Jjc2V0fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gICR7VGV4dH06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gOyJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsIm1lZGlhIiwic291cmNlIiwiYXR0YWNobWVudCIsInNyY3NldCIsIk9iamVjdCIsInZhbHVlcyIsIm1lZGlhX2RldGFpbHMiLCJzaXplcyIsIm1hcCIsIml0ZW0iLCJzb3VyY2VfdXJsIiwid2lkdGgiLCJyZWR1Y2UiLCJmaW5hbCIsImN1cnJlbnQiLCJpbmRleCIsImFycmF5IiwiY29uY2F0Iiwiam9pbiIsImxlbmd0aCIsInJlbmRlcmVkIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIlRleHQiLCJTdHlsZWRJbWFnZSIsIkltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxjQUFhLENBQUcsUUFBMEIsSUFBekIsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWFDLEtBQWIsQ0FBeUIsTUFDOUMsR0FBTUMsTUFBSyxDQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsVUFBYixDQUF3QkosRUFBeEIsQ0FBZCxDQUVBLEdBQUksQ0FBQ0UsS0FBTCxDQUFZLE1BQU8sS0FBUCxDQUVaLEdBQU1HLE9BQU0sQ0FDVkMsTUFBTSxDQUFDQyxNQUFQLENBQWNMLEtBQUssQ0FBQ00sYUFBTixDQUFvQkMsS0FBbEMsQ0FDRTtBQURGLENBRUdDLEdBRkgsQ0FFUUMsSUFBRCxFQUFVLENBQUNBLElBQUksQ0FBQ0MsVUFBTixDQUFrQkQsSUFBSSxDQUFDRSxLQUF2QixDQUZqQixDQUdFO0FBSEYsQ0FJR0MsTUFKSCxDQUtJLENBQUNDLEtBQUQsQ0FBUUMsT0FBUixDQUFpQkMsS0FBakIsQ0FBd0JDLEtBQXhCLEdBQ0VILEtBQUssQ0FBQ0ksTUFBTixXQUNLSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxHQUFiLENBREwsYUFDMEJILEtBQUssR0FBS0MsS0FBSyxDQUFDRyxNQUFOLENBQWUsQ0FBekIsQ0FBNkIsSUFBN0IsQ0FBb0MsRUFEOUQsRUFOTixDQVNJLEVBVEosR0FVTyxJQVhULENBYUEsTUFDRSwyREFBQyxTQUFELE1BQ0ksMERBQUMsV0FBRCxFQUNFLEdBQUcsQ0FBRW5CLEtBQUssQ0FBQ0QsS0FBTixDQUFZcUIsUUFEbkIsQ0FFRSxHQUFHLENBQUVwQixLQUFLLENBQUNVLFVBRmIsQ0FHRSxNQUFNLENBQUVQLE1BSFYsRUFESixDQU1JLDBEQUFDLElBQUQsTUFBT0osS0FBUCxDQU5KLENBREYsQ0FVRCxDQTVCRCxDQThCZXNCLHVIQUFPLENBQUN6QixhQUFELENBQXRCLEVBRUEsR0FBTTBCLFVBQVMscXNGQUFmLENBT0EsR0FBTUMsS0FBSSxxTUFNTkQsU0FOTSxrL0VBQVYsQ0FXQSxHQUFNRSxZQUFXLENBQUcsa0ZBQU9DLGtFQUFQLHlDQUFILDZIQVViRixJQVZhLDIrRUFBakIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbmNvbnN0IEZlYXR1cmVkSW1hZ2UgPSAoeyBzdGF0ZSwgaWQsIHRpdGxlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgYWx0PXttZWRpYS50aXRsZS5yZW5kZXJlZH1cbiAgICAgICAgICBzcmM9e21lZGlhLnNvdXJjZV91cmx9XG4gICAgICAgICAgc3JjU2V0PXtzcmNzZXR9XG4gICAgICAgIC8+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICR7Q29udGFpbmVyfTpob3ZlciAmIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgJHtUZXh0fTpob3ZlciAmIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})