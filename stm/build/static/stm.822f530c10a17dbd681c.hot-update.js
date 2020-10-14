webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/post-gallery.js":
/*!************************************************************!*\
  !*** ./packages/mars-theme/src/components/post-gallery.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _frontity_components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @frontity/components/image */ \"./node_modules/@frontity/components/image.tsx\");\n/* harmony import */ var pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pure-react-carousel */ \"./node_modules/pure-react-carousel/dist/index.es.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var PostGallery=(_ref)=>{var{state,actions,ids}=_ref;var gallery=ids.split(\",\");var image_ids=gallery.map(id=>Number(id));if(!image_ids||!image_ids.length)return null;var gallery_images=image_ids.map(element=>state.source.data['media/']['items'].find(o=>o.id===element));var items=[];for(var[index,value]of gallery_images.entries()){items.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"Slide\"],{index:index},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"img\",{className:\"d-block w-100\",alt:gallery_images[index].title.rendered,src:gallery_images[index].source_url})));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"CarouselProvider\"],{naturalSlideWidth:300,naturalSlideHeight:600,totalSlides:items.length},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"Slider\"],null,items),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"ButtonBack\"],null,\"Back\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(pure_react_carousel__WEBPACK_IMPORTED_MODULE_5__[\"ButtonNext\"],null,\"Next\")));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(PostGallery));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ebqflc50\",label:\"Container\"})( false?undefined:{name:\"ab8a4c\",styles:\"margin-top:16px;height:300px;width:400px;position:relative;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0LWdhbGxlcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkM0QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC1nYWxsZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgR2xvYmFsLCBjc3MgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQGZyb250aXR5L2NvbXBvbmVudHMvaW1hZ2VcIjtcbmltcG9ydCB7IENhcm91c2VsUHJvdmlkZXIsIFNsaWRlciwgU2xpZGUsIEJ1dHRvbkJhY2ssIEJ1dHRvbk5leHQgfSBmcm9tICdwdXJlLXJlYWN0LWNhcm91c2VsJztcblxuY29uc3QgUG9zdEdhbGxlcnkgPSAoeyBzdGF0ZSwgYWN0aW9ucywgaWRzIH0pID0+IHtcbiAgbGV0IGdhbGxlcnkgPSBpZHMuc3BsaXQoXCIsXCIpO1xuICBjb25zdCBpbWFnZV9pZHMgPSBnYWxsZXJ5Lm1hcChpZCA9PiBOdW1iZXIoaWQpKTtcblxuICBpZiAoIWltYWdlX2lkcyB8fCAhaW1hZ2VfaWRzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgZ2FsbGVyeV9pbWFnZXMgPSBpbWFnZV9pZHMubWFwKGVsZW1lbnQgPT4gc3RhdGUuc291cmNlLmRhdGFbJ21lZGlhLyddWydpdGVtcyddLmZpbmQobyA9PiBvLmlkID09PSBlbGVtZW50KSk7XG5cbiAgY29uc3QgaXRlbXMgPSBbXVxuXG4gIGZvciAoY29uc3QgW2luZGV4LCB2YWx1ZV0gb2YgZ2FsbGVyeV9pbWFnZXMuZW50cmllcygpKSB7XG4gICAgaXRlbXMucHVzaChcbiAgICA8U2xpZGUgaW5kZXg9e2luZGV4fT5cbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgICAgIGFsdD17Z2FsbGVyeV9pbWFnZXNbaW5kZXhdLnRpdGxlLnJlbmRlcmVkfVxuICAgICAgc3JjPXtnYWxsZXJ5X2ltYWdlc1tpbmRleF0uc291cmNlX3VybH1cbiAgICAvPlxuICA8L1NsaWRlPilcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENhcm91c2VsUHJvdmlkZXJcbiAgICAgICAgbmF0dXJhbFNsaWRlV2lkdGg9ezMwMH1cbiAgICAgICAgbmF0dXJhbFNsaWRlSGVpZ2h0PXs2MDB9XG4gICAgICAgIHRvdGFsU2xpZGVzPXtpdGVtcy5sZW5ndGh9XG4gICAgICA+XG4gICAgICAgIDxTbGlkZXI+XG4gICAgICAgICAge2l0ZW1zfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPEJ1dHRvbkJhY2s+QmFjazwvQnV0dG9uQmFjaz5cbiAgICAgICAgPEJ1dHRvbk5leHQ+TmV4dDwvQnV0dG9uTmV4dD5cbiAgICAgIDwvQ2Fyb3VzZWxQcm92aWRlcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdEdhbGxlcnkpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogNDAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QtZ2FsbGVyeS5qcz9jNTE2Il0sIm5hbWVzIjpbIlBvc3RHYWxsZXJ5Iiwic3RhdGUiLCJhY3Rpb25zIiwiaWRzIiwiZ2FsbGVyeSIsInNwbGl0IiwiaW1hZ2VfaWRzIiwibWFwIiwiaWQiLCJOdW1iZXIiLCJsZW5ndGgiLCJnYWxsZXJ5X2ltYWdlcyIsImVsZW1lbnQiLCJzb3VyY2UiLCJkYXRhIiwiZmluZCIsIm8iLCJpdGVtcyIsImluZGV4IiwidmFsdWUiLCJlbnRyaWVzIiwicHVzaCIsInRpdGxlIiwicmVuZGVyZWQiLCJzb3VyY2VfdXJsIiwiY29ubmVjdCIsIkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLFlBQVcsQ0FBRyxRQUE2QixJQUE1QixDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBa0JDLEdBQWxCLENBQTRCLE1BQy9DLEdBQUlDLFFBQU8sQ0FBR0QsR0FBRyxDQUFDRSxLQUFKLENBQVUsR0FBVixDQUFkLENBQ0EsR0FBTUMsVUFBUyxDQUFHRixPQUFPLENBQUNHLEdBQVIsQ0FBWUMsRUFBRSxFQUFJQyxNQUFNLENBQUNELEVBQUQsQ0FBeEIsQ0FBbEIsQ0FFQSxHQUFJLENBQUNGLFNBQUQsRUFBYyxDQUFDQSxTQUFTLENBQUNJLE1BQTdCLENBQXFDLE1BQU8sS0FBUCxDQUVyQyxHQUFNQyxlQUFjLENBQUdMLFNBQVMsQ0FBQ0MsR0FBVixDQUFjSyxPQUFPLEVBQUlYLEtBQUssQ0FBQ1ksTUFBTixDQUFhQyxJQUFiLENBQWtCLFFBQWxCLEVBQTRCLE9BQTVCLEVBQXFDQyxJQUFyQyxDQUEwQ0MsQ0FBQyxFQUFJQSxDQUFDLENBQUNSLEVBQUYsR0FBU0ksT0FBeEQsQ0FBekIsQ0FBdkIsQ0FFQSxHQUFNSyxNQUFLLENBQUcsRUFBZCxDQUVBLElBQUssR0FBTSxDQUFDQyxLQUFELENBQVFDLEtBQVIsQ0FBWCxFQUE2QlIsZUFBYyxDQUFDUyxPQUFmLEVBQTdCLENBQXVELENBQ3JESCxLQUFLLENBQUNJLElBQU4sQ0FDQSwwREFBQyx5REFBRCxFQUFPLEtBQUssQ0FBRUgsS0FBZCxFQUNBLGlFQUNFLFNBQVMsQ0FBQyxlQURaLENBRUUsR0FBRyxDQUFFUCxjQUFjLENBQUNPLEtBQUQsQ0FBZCxDQUFzQkksS0FBdEIsQ0FBNEJDLFFBRm5DLENBR0UsR0FBRyxDQUFFWixjQUFjLENBQUNPLEtBQUQsQ0FBZCxDQUFzQk0sVUFIN0IsRUFEQSxDQURBLEVBUUQsQ0FFRCxNQUNFLDJEQUFDLFNBQUQsTUFDSSwwREFBQyxvRUFBRCxFQUNBLGlCQUFpQixDQUFFLEdBRG5CLENBRUEsa0JBQWtCLENBQUUsR0FGcEIsQ0FHQSxXQUFXLENBQUVQLEtBQUssQ0FBQ1AsTUFIbkIsRUFLQSwwREFBQywwREFBRCxNQUNHTyxLQURILENBTEEsQ0FRQSwwREFBQyw4REFBRCxhQVJBLENBU0EsMERBQUMsOERBQUQsYUFUQSxDQURKLENBREYsQ0FlRCxDQXBDRCxDQXNDZVEsdUhBQU8sQ0FBQ3pCLFdBQUQsQ0FBdEIsRUFFQSxHQUFNMEIsVUFBUyxpOUVBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3Bvc3QtZ2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIEdsb2JhbCwgY3NzIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9jb21wb25lbnRzL2ltYWdlXCI7XG5pbXBvcnQgeyBDYXJvdXNlbFByb3ZpZGVyLCBTbGlkZXIsIFNsaWRlLCBCdXR0b25CYWNrLCBCdXR0b25OZXh0IH0gZnJvbSAncHVyZS1yZWFjdC1jYXJvdXNlbCc7XG5cbmNvbnN0IFBvc3RHYWxsZXJ5ID0gKHsgc3RhdGUsIGFjdGlvbnMsIGlkcyB9KSA9PiB7XG4gIGxldCBnYWxsZXJ5ID0gaWRzLnNwbGl0KFwiLFwiKTtcbiAgY29uc3QgaW1hZ2VfaWRzID0gZ2FsbGVyeS5tYXAoaWQgPT4gTnVtYmVyKGlkKSk7XG5cbiAgaWYgKCFpbWFnZV9pZHMgfHwgIWltYWdlX2lkcy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGdhbGxlcnlfaW1hZ2VzID0gaW1hZ2VfaWRzLm1hcChlbGVtZW50ID0+IHN0YXRlLnNvdXJjZS5kYXRhWydtZWRpYS8nXVsnaXRlbXMnXS5maW5kKG8gPT4gby5pZCA9PT0gZWxlbWVudCkpO1xuXG4gIGNvbnN0IGl0ZW1zID0gW11cblxuICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsdWVdIG9mIGdhbGxlcnlfaW1hZ2VzLmVudHJpZXMoKSkge1xuICAgIGl0ZW1zLnB1c2goXG4gICAgPFNsaWRlIGluZGV4PXtpbmRleH0+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXG4gICAgICBhbHQ9e2dhbGxlcnlfaW1hZ2VzW2luZGV4XS50aXRsZS5yZW5kZXJlZH1cbiAgICAgIHNyYz17Z2FsbGVyeV9pbWFnZXNbaW5kZXhdLnNvdXJjZV91cmx9XG4gICAgLz5cbiAgPC9TbGlkZT4pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICAgIDxDYXJvdXNlbFByb3ZpZGVyXG4gICAgICAgIG5hdHVyYWxTbGlkZVdpZHRoPXszMDB9XG4gICAgICAgIG5hdHVyYWxTbGlkZUhlaWdodD17NjAwfVxuICAgICAgICB0b3RhbFNsaWRlcz17aXRlbXMubGVuZ3RofVxuICAgICAgPlxuICAgICAgICA8U2xpZGVyPlxuICAgICAgICAgIHtpdGVtc31cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDxCdXR0b25CYWNrPkJhY2s8L0J1dHRvbkJhY2s+XG4gICAgICAgIDxCdXR0b25OZXh0Pk5leHQ8L0J1dHRvbk5leHQ+XG4gICAgICA8L0Nhcm91c2VsUHJvdmlkZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFBvc3RHYWxsZXJ5KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/post-gallery.js\n");

/***/ })

})