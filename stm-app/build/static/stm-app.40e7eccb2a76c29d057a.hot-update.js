webpackHotUpdate("stm-app",{

/***/ "./packages/mars-theme/src/components/featured-media.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-media.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedMedia=(_ref)=>{var{state,id}=_ref;var media=state.source.attachment[id];if(!media)return null;var srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(\"\".concat(current.join(\" \"),\"w\").concat(index!==array.length-1?\", \":\"\")),\"\")||null;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{alt:media.title.rendered,src:media.source_url,srcSet:srcset}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Text,null,\"Test\"));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedMedia));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1veh4wk0\",label:\"Container\"})( false?undefined:{name:\"ab8a4c\",styles:\"margin-top:16px;height:300px;width:400px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0tYXBwL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0M0QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtLWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbmNvbnN0IEZlYXR1cmVkTWVkaWEgPSAoeyBzdGF0ZSwgaWQgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+VGVzdDwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRNZWRpYSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcblxuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var StyledImage=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_frontity_components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"e1veh4wk1\",label:\"StyledImage\"})( false?undefined:{name:\"zmp2xq\",styles:\"display:block;height:100%;width:100%;-o-object-fit:scale-down;object-fit:scale-down;overflow:hidden;&:hover{opacity:0.5;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0tYXBwL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNpQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtLWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbmNvbnN0IEZlYXR1cmVkTWVkaWEgPSAoeyBzdGF0ZSwgaWQgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+VGVzdDwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRNZWRpYSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcblxuXG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1veh4wk2\",label:\"Text\"})(\"position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);visibility:visible;\",StyledImage,\":hover &{color:red;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0tYXBwL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR1QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtLWFwcC9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5cbmNvbnN0IEZlYXR1cmVkTWVkaWEgPSAoeyBzdGF0ZSwgaWQgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBhbHQ9e21lZGlhLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgICAgIHNyYz17bWVkaWEuc291cmNlX3VybH1cbiAgICAgICAgICBzcmNTZXQ9e3NyY3NldH1cbiAgICAgICAgLz5cbiAgICAgICAgPFRleHQ+VGVzdDwvVGV4dD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmVhdHVyZWRNZWRpYSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQoSW1hZ2UpYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG5gO1xuXG5jb25zdCBUZXh0ID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgJHtTdHlsZWRJbWFnZX06aG92ZXIgJiB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcblxuXG4iXX0= */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLW1lZGlhLmpzPzdmNjAiXSwibmFtZXMiOlsiRmVhdHVyZWRNZWRpYSIsInN0YXRlIiwiaWQiLCJtZWRpYSIsInNvdXJjZSIsImF0dGFjaG1lbnQiLCJzcmNzZXQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtZWRpYV9kZXRhaWxzIiwic2l6ZXMiLCJtYXAiLCJpdGVtIiwic291cmNlX3VybCIsIndpZHRoIiwicmVkdWNlIiwiZmluYWwiLCJjdXJyZW50IiwiaW5kZXgiLCJhcnJheSIsImNvbmNhdCIsImpvaW4iLCJsZW5ndGgiLCJ0aXRsZSIsInJlbmRlcmVkIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIlN0eWxlZEltYWdlIiwiSW1hZ2UiLCJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxjQUFhLENBQUcsUUFBbUIsSUFBbEIsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWtCLE1BQ3ZDLEdBQU1DLE1BQUssQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JILEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNDLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FFWixHQUFNRyxPQUFNLENBQ1ZDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0JDLEtBQWxDLENBQ0U7QUFERixDQUVHQyxHQUZILENBRVFDLElBQUQsRUFBVSxDQUFDQSxJQUFJLENBQUNDLFVBQU4sQ0FBa0JELElBQUksQ0FBQ0UsS0FBdkIsQ0FGakIsQ0FHRTtBQUhGLENBSUdDLE1BSkgsQ0FLSSxDQUFDQyxLQUFELENBQVFDLE9BQVIsQ0FBaUJDLEtBQWpCLENBQXdCQyxLQUF4QixHQUNFSCxLQUFLLENBQUNJLE1BQU4sV0FDS0gsT0FBTyxDQUFDSSxJQUFSLENBQWEsR0FBYixDQURMLGFBQzBCSCxLQUFLLEdBQUtDLEtBQUssQ0FBQ0csTUFBTixDQUFlLENBQXpCLENBQTZCLElBQTdCLENBQW9DLEVBRDlELEVBTk4sQ0FTSSxFQVRKLEdBVU8sSUFYVCxDQWFBLE1BQ0UsMkRBQUMsU0FBRCxNQUNJLDBEQUFDLFdBQUQsRUFDRSxHQUFHLENBQUVuQixLQUFLLENBQUNvQixLQUFOLENBQVlDLFFBRG5CLENBRUUsR0FBRyxDQUFFckIsS0FBSyxDQUFDVSxVQUZiLENBR0UsTUFBTSxDQUFFUCxNQUhWLEVBREosQ0FNSSwwREFBQyxJQUFELGFBTkosQ0FERixDQVVELENBNUJELENBOEJlbUIsdUhBQU8sQ0FBQ3pCLGFBQUQsQ0FBdEIsRUFFQSxHQUFNMEIsVUFBUyxzb0ZBQWYsQ0FPQSxHQUFNQyxZQUFXLENBQUcsa0ZBQU9DLGtFQUFQLDBDQUFILGlsRkFBakIsQ0FZQSxHQUFNQyxLQUFJLHVNQU1ORixXQU5NLHk2RUFBViIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtbWVkaWEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvaW1hZ2VcIjtcblxuY29uc3QgRmVhdHVyZWRNZWRpYSA9ICh7IHN0YXRlLCBpZCB9KSA9PiB7XG4gIGNvbnN0IG1lZGlhID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRbaWRdO1xuXG4gIGlmICghbWVkaWEpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IHNyY3NldCA9XG4gICAgT2JqZWN0LnZhbHVlcyhtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzKVxuICAgICAgLy8gR2V0IHRoZSB1cmwgYW5kIHdpZHRoIG9mIGVhY2ggc2l6ZS5cbiAgICAgIC5tYXAoKGl0ZW0pID0+IFtpdGVtLnNvdXJjZV91cmwsIGl0ZW0ud2lkdGhdKVxuICAgICAgLy8gUmVjdWRlIHRoZW0gdG8gYSBzdHJpbmcgd2l0aCB0aGUgZm9ybWF0IHJlcXVpcmVkIGJ5IGBzcmNzZXRgLlxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGZpbmFsLCBjdXJyZW50LCBpbmRleCwgYXJyYXkpID0+XG4gICAgICAgICAgZmluYWwuY29uY2F0KFxuICAgICAgICAgICAgYCR7Y3VycmVudC5qb2luKFwiIFwiKX13JHtpbmRleCAhPT0gYXJyYXkubGVuZ3RoIC0gMSA/IFwiLCBcIiA6IFwiXCJ9YFxuICAgICAgICAgICksXG4gICAgICAgIFwiXCJcbiAgICAgICkgfHwgbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTdHlsZWRJbWFnZVxuICAgICAgICAgIGFsdD17bWVkaWEudGl0bGUucmVuZGVyZWR9XG4gICAgICAgICAgc3JjPXttZWRpYS5zb3VyY2VfdXJsfVxuICAgICAgICAgIHNyY1NldD17c3Jjc2V0fVxuICAgICAgICAvPlxuICAgICAgICA8VGV4dD5UZXN0PC9UZXh0PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZE1lZGlhKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBTdHlsZWRJbWFnZSA9IHN0eWxlZChJbWFnZSlgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAtby1vYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAke1N0eWxlZEltYWdlfTpob3ZlciAmIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-media.js\n");

/***/ })

})