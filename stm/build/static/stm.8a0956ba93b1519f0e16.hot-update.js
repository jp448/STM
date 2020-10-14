webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/post-gallery.js":
/*!************************************************************!*\
  !*** ./packages/mars-theme/src/components/post-gallery.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var PostGallery=(_ref)=>{var{state,actions,ids}=_ref;var gallery=ids.split(\",\");var image_ids=gallery.map(id=>Number(id));if(!image_ids||!image_ids.length)return null;var gallery_images=image_ids.map(element=>state.source.data['media/']['items'].find(o=>o.id===element));var items=[];// for (const [index, value] of gallery_images.entries()) {\n//   items.push(\n//   <Carousel.Item>\n//   <img\n//     className=\"d-block w-100\"\n//     alt={gallery_images[index].title.rendered}\n//     src={gallery_images[index].source_url}\n//   />\n// </Carousel.Item>)\n// }\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"CarouselProvider\"],{naturalSlideWidth:100,naturalSlideHeight:125,totalSlides:3},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Slider\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Slide\"],{index:0},\"I am the first Slide.\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Slide\"],{index:1},\"I am the second Slide.\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"Slide\"],{index:2},\"I am the third Slide.\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"ButtonBack\"],null,\"Back\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_4__[\"ButtonNext\"],null,\"Next\")));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(PostGallery));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ebqflc50\",label:\"Container\"})( false?undefined:{name:\"ab8a4c\",styles:\"margin-top:16px;height:300px;width:400px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LWdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0M0QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC1nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAZnJvbnRpdHkvY29tcG9uZW50cy9pbWFnZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWxQcm92aWRlciwgU2xpZGVyLCBTbGlkZSwgQnV0dG9uQmFjaywgQnV0dG9uTmV4dCB9IGZyb20gJ3B1cmUtcmVhY3QtY2Fyb3VzZWwnO1xuXG5jb25zdCBQb3N0R2FsbGVyeSA9ICh7IHN0YXRlLCBhY3Rpb25zLCBpZHMgfSkgPT4ge1xuICBsZXQgZ2FsbGVyeSA9IGlkcy5zcGxpdChcIixcIik7XG4gIGNvbnN0IGltYWdlX2lkcyA9IGdhbGxlcnkubWFwKGlkID0+IE51bWJlcihpZCkpO1xuXG4gIGlmICghaW1hZ2VfaWRzIHx8ICFpbWFnZV9pZHMubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBnYWxsZXJ5X2ltYWdlcyA9IGltYWdlX2lkcy5tYXAoZWxlbWVudCA9PiBzdGF0ZS5zb3VyY2UuZGF0YVsnbWVkaWEvJ11bJ2l0ZW1zJ10uZmluZChvID0+IG8uaWQgPT09IGVsZW1lbnQpKTtcblxuICBjb25zdCBpdGVtcyA9IFtdXG5cbiAgLy8gZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBnYWxsZXJ5X2ltYWdlcy5lbnRyaWVzKCkpIHtcbiAgLy8gICBpdGVtcy5wdXNoKFxuICAvLyAgIDxDYXJvdXNlbC5JdGVtPlxuICAvLyAgIDxpbWdcbiAgLy8gICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIlxuICAvLyAgICAgYWx0PXtnYWxsZXJ5X2ltYWdlc1tpbmRleF0udGl0bGUucmVuZGVyZWR9XG4gIC8vICAgICBzcmM9e2dhbGxlcnlfaW1hZ2VzW2luZGV4XS5zb3VyY2VfdXJsfVxuICAvLyAgIC8+XG4gIC8vIDwvQ2Fyb3VzZWwuSXRlbT4pXG4gIC8vIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDYXJvdXNlbFByb3ZpZGVyXG4gICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXsxMDB9XG4gICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17MTI1fVxuICAgICAgICB0b3RhbFNsaWRlcz17M31cbiAgICAgID5cbiAgICAgICAgPFNsaWRlcj5cbiAgICAgICAgICA8U2xpZGUgaW5kZXg9ezB9PkkgYW0gdGhlIGZpcnN0IFNsaWRlLjwvU2xpZGU+XG4gICAgICAgICAgPFNsaWRlIGluZGV4PXsxfT5JIGFtIHRoZSBzZWNvbmQgU2xpZGUuPC9TbGlkZT5cbiAgICAgICAgICA8U2xpZGUgaW5kZXg9ezJ9PkkgYW0gdGhlIHRoaXJkIFNsaWRlLjwvU2xpZGU+XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8QnV0dG9uQmFjaz5CYWNrPC9CdXR0b25CYWNrPlxuICAgICAgICA8QnV0dG9uTmV4dD5OZXh0PC9CdXR0b25OZXh0PlxuICAgICAgPC9DYXJvdXNlbFByb3ZpZGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChQb3N0R2FsbGVyeSk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QtZ2FsbGVyeS5qcz9jNTE2Il0sIm5hbWVzIjpbIlBvc3RHYWxsZXJ5Iiwic3RhdGUiLCJhY3Rpb25zIiwiaWRzIiwiZ2FsbGVyeSIsInNwbGl0IiwiaW1hZ2VfaWRzIiwibWFwIiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJnYWxsZXJ5X2ltYWdlcyIsImVsZW1lbnQiLCJzb3VyY2UiLCJkYXRhIiwiZmluZCIsIm8iLCJpdGVtcyIsImNvbm5lY3QiLCJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQSxHQUFNQSxZQUFXLENBQUcsUUFBNkIsSUFBNUIsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQWtCQyxHQUFsQixDQUE0QixNQUMvQyxHQUFJQyxRQUFPLENBQUdELEdBQUcsQ0FBQ0UsS0FBSixDQUFVLEdBQVYsQ0FBZCxDQUNBLEdBQU1DLFVBQVMsQ0FBR0YsT0FBTyxDQUFDRyxHQUFSLENBQVlDLEVBQUUsRUFBSUMsTUFBTSxDQUFDRCxFQUFELENBQXhCLENBQWxCLENBRUEsR0FBSSxDQUFDRixTQUFELEVBQWMsQ0FBQ0EsU0FBUyxDQUFDSSxNQUE3QixDQUFxQyxNQUFPLEtBQVAsQ0FFckMsR0FBTUMsZUFBYyxDQUFHTCxTQUFTLENBQUNDLEdBQVYsQ0FBY0ssT0FBTyxFQUFJWCxLQUFLLENBQUNZLE1BQU4sQ0FBYUMsSUFBYixDQUFrQixRQUFsQixFQUE0QixPQUE1QixFQUFxQ0MsSUFBckMsQ0FBMENDLENBQUMsRUFBSUEsQ0FBQyxDQUFDUixFQUFGLEdBQVNJLE9BQXhELENBQXpCLENBQXZCLENBRUEsR0FBTUssTUFBSyxDQUFHLEVBQWQsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQ0UsMkRBQUMsU0FBRCxNQUNJLDBEQUFDLG9FQUFELEVBQ0EsaUJBQWlCLENBQUUsR0FEbkIsQ0FFQSxrQkFBa0IsQ0FBRSxHQUZwQixDQUdBLFdBQVcsQ0FBRSxDQUhiLEVBS0EsMERBQUMsMERBQUQsTUFDRSwwREFBQyx5REFBRCxFQUFPLEtBQUssQ0FBRSxDQUFkLDBCQURGLENBRUUsMERBQUMseURBQUQsRUFBTyxLQUFLLENBQUUsQ0FBZCwyQkFGRixDQUdFLDBEQUFDLHlEQUFELEVBQU8sS0FBSyxDQUFFLENBQWQsMEJBSEYsQ0FMQSxDQVVBLDBEQUFDLDhEQUFELGFBVkEsQ0FXQSwwREFBQyw4REFBRCxhQVhBLENBREosQ0FERixDQWlCRCxDQXRDRCxDQXdDZUMsdUhBQU8sQ0FBQ2xCLFdBQUQsQ0FBdEIsRUFFQSxHQUFNbUIsVUFBUyw2cUZBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QtZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvaW1hZ2VcIjtcbmltcG9ydCB7IENhcm91c2VsUHJvdmlkZXIsIFNsaWRlciwgU2xpZGUsIEJ1dHRvbkJhY2ssIEJ1dHRvbk5leHQgfSBmcm9tICdwdXJlLXJlYWN0LWNhcm91c2VsJztcblxuY29uc3QgUG9zdEdhbGxlcnkgPSAoeyBzdGF0ZSwgYWN0aW9ucywgaWRzIH0pID0+IHtcbiAgbGV0IGdhbGxlcnkgPSBpZHMuc3BsaXQoXCIsXCIpO1xuICBjb25zdCBpbWFnZV9pZHMgPSBnYWxsZXJ5Lm1hcChpZCA9PiBOdW1iZXIoaWQpKTtcblxuICBpZiAoIWltYWdlX2lkcyB8fCAhaW1hZ2VfaWRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgZ2FsbGVyeV9pbWFnZXMgPSBpbWFnZV9pZHMubWFwKGVsZW1lbnQgPT4gc3RhdGUuc291cmNlLmRhdGFbJ21lZGlhLyddWydpdGVtcyddLmZpbmQobyA9PiBvLmlkID09PSBlbGVtZW50KSk7XG5cbiAgY29uc3QgaXRlbXMgPSBbXVxuXG4gIC8vIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgZ2FsbGVyeV9pbWFnZXMuZW50cmllcygpKSB7XG4gIC8vICAgaXRlbXMucHVzaChcbiAgLy8gICA8Q2Fyb3VzZWwuSXRlbT5cbiAgLy8gICA8aW1nXG4gIC8vICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgLy8gICAgIGFsdD17Z2FsbGVyeV9pbWFnZXNbaW5kZXhdLnRpdGxlLnJlbmRlcmVkfVxuICAvLyAgICAgc3JjPXtnYWxsZXJ5X2ltYWdlc1tpbmRleF0uc291cmNlX3VybH1cbiAgLy8gICAvPlxuICAvLyA8L0Nhcm91c2VsLkl0ZW0+KVxuICAvLyB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Q2Fyb3VzZWxQcm92aWRlclxuICAgICAgICBuYXR1cmFsU2xpZGVXaWR0aD17MTAwfVxuICAgICAgICBuYXR1cmFsU2xpZGVIZWlnaHQ9ezEyNX1cbiAgICAgICAgdG90YWxTbGlkZXM9ezN9XG4gICAgICA+XG4gICAgICAgIDxTbGlkZXI+XG4gICAgICAgICAgPFNsaWRlIGluZGV4PXswfT5JIGFtIHRoZSBmaXJzdCBTbGlkZS48L1NsaWRlPlxuICAgICAgICAgIDxTbGlkZSBpbmRleD17MX0+SSBhbSB0aGUgc2Vjb25kIFNsaWRlLjwvU2xpZGU+XG4gICAgICAgICAgPFNsaWRlIGluZGV4PXsyfT5JIGFtIHRoZSB0aGlyZCBTbGlkZS48L1NsaWRlPlxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPEJ1dHRvbkJhY2s+QmFjazwvQnV0dG9uQmFjaz5cbiAgICAgICAgPEJ1dHRvbk5leHQ+TmV4dDwvQnV0dG9uTmV4dD5cbiAgICAgIDwvQ2Fyb3VzZWxQcm92aWRlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdEdhbGxlcnkpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/post-gallery.js\n");

/***/ })

})