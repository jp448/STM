webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/accordion.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/accordion.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _accordion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.css */ \"./packages/mars-theme/src/components/utility/accordion.css\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}function Accordion(props){var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"0px\");var content=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);function toggleAccordion(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(content.current.scrollHeight,\"px\"));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(AccordionSection,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"button\",{className:\"accordion \".concat(setActive),onClick:toggleAccordion},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",{className:\"accordion__title\"},props.title)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{ref:content,style:{maxHeight:\"\".concat(setHeight)},className:\"accordion__content\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{className:\"accordion__text\",dangerouslySetInnerHTML:{__html:props.content}})));}/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);var AccordionSection=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ekgwfsb0\",label:\"AccordionSection\"})( false?undefined:{name:\"1v3870x\",styles:\"display:flex;flex-direction:column-reverse;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q21DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuaW1wb3J0IFwiLi9hY2NvcmRpb24uY3NzXCI7XG5cbmZ1bmN0aW9uIEFjY29yZGlvbihwcm9wcykge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke2NvbnRlbnQuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvblNlY3Rpb24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGFjY29yZGlvbiAke3NldEFjdGl2ZX1gfSBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhY2NvcmRpb25fX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb250ZW50XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fdGV4dFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5jb250ZW50IH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvYWNjb3JkaW9uLmpzPzJjYWIiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwicHJvcHMiLCJzZXRBY3RpdmUiLCJzZXRBY3RpdmVTdGF0ZSIsInVzZVN0YXRlIiwic2V0SGVpZ2h0Iiwic2V0SGVpZ2h0U3RhdGUiLCJjb250ZW50IiwidXNlUmVmIiwidG9nZ2xlQWNjb3JkaW9uIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsInRpdGxlIiwibWF4SGVpZ2h0IiwiX19odG1sIiwiQWNjb3JkaW9uU2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O3FSQUtBLFFBQVNBLFVBQVQsQ0FBbUJDLEtBQW5CLENBQTBCLENBQ3hCLEdBQU0sQ0FBQ0MsU0FBRCxDQUFZQyxjQUFaLEVBQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBNUMsQ0FDQSxHQUFNLENBQUNDLFNBQUQsQ0FBWUMsY0FBWixFQUE4QkYsc0RBQVEsQ0FBQyxLQUFELENBQTVDLENBRUEsR0FBTUcsUUFBTyxDQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdEIsQ0FFQSxRQUFTQyxnQkFBVCxFQUEyQixDQUN6Qk4sY0FBYyxDQUFDRCxTQUFTLEdBQUssRUFBZCxDQUFtQixRQUFuQixDQUE4QixFQUEvQixDQUFkLENBQ0FJLGNBQWMsQ0FDWkosU0FBUyxHQUFLLFFBQWQsQ0FBeUIsS0FBekIsV0FBb0NLLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsWUFBcEQsTUFEWSxDQUFkLENBR0QsQ0FFRCxNQUNFLDJEQUFDLGdCQUFELE1BQ0Usb0VBQVEsU0FBUyxxQkFBZVQsU0FBZixDQUFqQixDQUE2QyxPQUFPLENBQUVPLGVBQXRELEVBQ0UsK0RBQUcsU0FBUyxDQUFDLGtCQUFiLEVBQWlDUixLQUFLLENBQUNXLEtBQXZDLENBREYsQ0FERixDQUlFLGlFQUNFLEdBQUcsQ0FBRUwsT0FEUCxDQUVFLEtBQUssQ0FBRSxDQUFFTSxTQUFTLFdBQUtSLFNBQUwsQ0FBWCxDQUZULENBR0UsU0FBUyxDQUFDLG9CQUhaLEVBS0UsaUVBQ0UsU0FBUyxDQUFDLGlCQURaLENBRUUsdUJBQXVCLENBQUUsQ0FBRVMsTUFBTSxDQUFFYixLQUFLLENBQUNNLE9BQWhCLENBRjNCLEVBTEYsQ0FKRixDQURGLENBaUJELENBRWNQLHdFQUFmLEVBRUEsR0FBTWUsaUJBQWdCLDZxRUFBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvYWNjb3JkaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5pbXBvcnQgXCIuL2FjY29yZGlvbi5jc3NcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYWNjb3JkaW9uICR7c2V0QWN0aXZlfWB9IG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fdGl0bGVcIj57cHJvcHMudGl0bGV9PC9wPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGVudH1cbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBgJHtzZXRIZWlnaHR9YCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbnRlbnRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX190ZXh0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLmNvbnRlbnQgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvQWNjb3JkaW9uU2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3JkaW9uO1xuXG5jb25zdCBBY2NvcmRpb25TZWN0aW9uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/accordion.js\n");

/***/ })

})