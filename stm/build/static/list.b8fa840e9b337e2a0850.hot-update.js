webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/featured-image.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/featured-image.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var FeaturedImage=(_ref)=>{var{state,id,title,large}=_ref;var media=state.source.attachment[id];if(!media)return null;var srcset=Object.values(media.media_details.sizes)// Get the url and width of each size.\n.map(item=>[item.source_url,item.width])// Recude them to a string with the format required by `srcset`.\n.reduce((final,current,index,array)=>final.concat(\"\".concat(current.join(\" \"),\"w\").concat(index!==array.length-1?\", \":\"\")),\"\")||null;return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledImage,{style:{backgroundImage:media.title.rendered}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Text,null,title)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(FeaturedImage));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj650\",label:\"Container\"})( false?undefined:{name:\"1x3rn84\",styles:\"margin-top:16px;height:300px;width:400px;position:relative;@media (min-width:100px) and (max-width:576px){width:100%;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzRCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogbWVkaWEudGl0bGUucmVuZGVyZWR9fVxuICAgICAgICA+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5gOyJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Text=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ehhdj651\",label:\"Text\"})(\"position:absolute;top:10px;left:10px;transform:translate(-50%,-50%);font-family:'Cutive Mono',monospace;visibility:hidden;\",Container,\":hover &{visibility:visible;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3VCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogbWVkaWEudGl0bGUucmVuZGVyZWR9fVxuICAgICAgICA+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5gOyJdfQ== */\"));var StyledImage=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"img\",{target:\"ehhdj652\",label:\"StyledImage\"})(\"display:block;height:100%;width:100%;-o-object-fit:scale-down;object-fit:scale-down;overflow:hidden;\",Container,\":hover &{opacity:0.3;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RDhCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mZWF0dXJlZC1pbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuXG5jb25zdCBGZWF0dXJlZEltYWdlID0gKHsgc3RhdGUsIGlkLCB0aXRsZSwgbGFyZ2UgfSkgPT4ge1xuICBjb25zdCBtZWRpYSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50W2lkXTtcblxuICBpZiAoIW1lZGlhKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBzcmNzZXQgPVxuICAgIE9iamVjdC52YWx1ZXMobWVkaWEubWVkaWFfZGV0YWlscy5zaXplcylcbiAgICAgIC8vIEdldCB0aGUgdXJsIGFuZCB3aWR0aCBvZiBlYWNoIHNpemUuXG4gICAgICAubWFwKChpdGVtKSA9PiBbaXRlbS5zb3VyY2VfdXJsLCBpdGVtLndpZHRoXSlcbiAgICAgIC8vIFJlY3VkZSB0aGVtIHRvIGEgc3RyaW5nIHdpdGggdGhlIGZvcm1hdCByZXF1aXJlZCBieSBgc3Jjc2V0YC5cbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChmaW5hbCwgY3VycmVudCwgaW5kZXgsIGFycmF5KSA9PlxuICAgICAgICAgIGZpbmFsLmNvbmNhdChcbiAgICAgICAgICAgIGAke2N1cnJlbnQuam9pbihcIiBcIil9dyR7aW5kZXggIT09IGFycmF5Lmxlbmd0aCAtIDEgPyBcIiwgXCIgOiBcIlwifWBcbiAgICAgICAgICApLFxuICAgICAgICBcIlwiXG4gICAgICApIHx8IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogbWVkaWEudGl0bGUucmVuZGVyZWR9fVxuICAgICAgICA+XG4gICAgICAgIDxUZXh0Pnt0aXRsZX08L1RleHQ+XG4gICAgICAgIDwvU3R5bGVkSW1hZ2U+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZlYXR1cmVkSW1hZ2UpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMHB4KSBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgVGV4dCA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkSW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgLW8tb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAke0NvbnRhaW5lcn06aG92ZXIgJiB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5gOyJdfQ== */\"));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZlYXR1cmVkLWltYWdlLmpzPzM2MmEiXSwibmFtZXMiOlsiRmVhdHVyZWRJbWFnZSIsInN0YXRlIiwiaWQiLCJ0aXRsZSIsImxhcmdlIiwibWVkaWEiLCJzb3VyY2UiLCJhdHRhY2htZW50Iiwic3Jjc2V0IiwiT2JqZWN0IiwidmFsdWVzIiwibWVkaWFfZGV0YWlscyIsInNpemVzIiwibWFwIiwiaXRlbSIsInNvdXJjZV91cmwiLCJ3aWR0aCIsInJlZHVjZSIsImZpbmFsIiwiY3VycmVudCIsImluZGV4IiwiYXJyYXkiLCJjb25jYXQiLCJqb2luIiwibGVuZ3RoIiwiYmFja2dyb3VuZEltYWdlIiwicmVuZGVyZWQiLCJjb25uZWN0IiwiQ29udGFpbmVyIiwiVGV4dCIsIlN0eWxlZEltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQSxHQUFNQSxjQUFhLENBQUcsUUFBaUMsSUFBaEMsQ0FBRUMsS0FBRixDQUFTQyxFQUFULENBQWFDLEtBQWIsQ0FBb0JDLEtBQXBCLENBQWdDLE1BQ3JELEdBQU1DLE1BQUssQ0FBR0osS0FBSyxDQUFDSyxNQUFOLENBQWFDLFVBQWIsQ0FBd0JMLEVBQXhCLENBQWQsQ0FFQSxHQUFJLENBQUNHLEtBQUwsQ0FBWSxNQUFPLEtBQVAsQ0FFWixHQUFNRyxPQUFNLENBQ1ZDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjTCxLQUFLLENBQUNNLGFBQU4sQ0FBb0JDLEtBQWxDLENBQ0U7QUFERixDQUVHQyxHQUZILENBRVFDLElBQUQsRUFBVSxDQUFDQSxJQUFJLENBQUNDLFVBQU4sQ0FBa0JELElBQUksQ0FBQ0UsS0FBdkIsQ0FGakIsQ0FHRTtBQUhGLENBSUdDLE1BSkgsQ0FLSSxDQUFDQyxLQUFELENBQVFDLE9BQVIsQ0FBaUJDLEtBQWpCLENBQXdCQyxLQUF4QixHQUNFSCxLQUFLLENBQUNJLE1BQU4sV0FDS0gsT0FBTyxDQUFDSSxJQUFSLENBQWEsR0FBYixDQURMLGFBQzBCSCxLQUFLLEdBQUtDLEtBQUssQ0FBQ0csTUFBTixDQUFlLENBQXpCLENBQTZCLElBQTdCLENBQW9DLEVBRDlELEVBTk4sQ0FTSSxFQVRKLEdBVU8sSUFYVCxDQWFBLE1BQ0UsMkRBQUMsU0FBRCxNQUNJLDBEQUFDLFdBQUQsRUFDRSxLQUFLLENBQUUsQ0FBQ0MsZUFBZSxDQUFFcEIsS0FBSyxDQUFDRixLQUFOLENBQVl1QixRQUE5QixDQURULEVBR0EsMERBQUMsSUFBRCxNQUFPdkIsS0FBUCxDQUhBLENBREosQ0FERixDQVNELENBM0JELENBNkJld0IsdUhBQU8sQ0FBQzNCLGFBQUQsQ0FBdEIsRUFFQSxHQUFNNEIsVUFBUyx5MkZBQWYsQ0FVQSxHQUFNQyxLQUFJLDJPQU9ORCxTQVBNLDBsRkFBVixDQVlBLEdBQU1FLFlBQVcsNE5BUWJGLFNBUmEsbWxGQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvZmVhdHVyZWQtaW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvaW1hZ2VcIjtcblxuY29uc3QgRmVhdHVyZWRJbWFnZSA9ICh7IHN0YXRlLCBpZCwgdGl0bGUsIGxhcmdlIH0pID0+IHtcbiAgY29uc3QgbWVkaWEgPSBzdGF0ZS5zb3VyY2UuYXR0YWNobWVudFtpZF07XG5cbiAgaWYgKCFtZWRpYSkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3Qgc3Jjc2V0ID1cbiAgICBPYmplY3QudmFsdWVzKG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXMpXG4gICAgICAvLyBHZXQgdGhlIHVybCBhbmQgd2lkdGggb2YgZWFjaCBzaXplLlxuICAgICAgLm1hcCgoaXRlbSkgPT4gW2l0ZW0uc291cmNlX3VybCwgaXRlbS53aWR0aF0pXG4gICAgICAvLyBSZWN1ZGUgdGhlbSB0byBhIHN0cmluZyB3aXRoIHRoZSBmb3JtYXQgcmVxdWlyZWQgYnkgYHNyY3NldGAuXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoZmluYWwsIGN1cnJlbnQsIGluZGV4LCBhcnJheSkgPT5cbiAgICAgICAgICBmaW5hbC5jb25jYXQoXG4gICAgICAgICAgICBgJHtjdXJyZW50LmpvaW4oXCIgXCIpfXcke2luZGV4ICE9PSBhcnJheS5sZW5ndGggLSAxID8gXCIsIFwiIDogXCJcIn1gXG4gICAgICAgICAgKSxcbiAgICAgICAgXCJcIlxuICAgICAgKSB8fCBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPFN0eWxlZEltYWdlXG4gICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IG1lZGlhLnRpdGxlLnJlbmRlcmVkfX1cbiAgICAgICAgPlxuICAgICAgICA8VGV4dD57dGl0bGV9PC9UZXh0PlxuICAgICAgICA8L1N0eWxlZEltYWdlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGZWF0dXJlZEltYWdlKTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDBweCkgYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFRleHQgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtZmFtaWx5OiAnQ3V0aXZlIE1vbm8nLCBtb25vc3BhY2U7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC1vLW9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgJHtDb250YWluZXJ9OmhvdmVyICYge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/featured-image.js\n");

/***/ })

})