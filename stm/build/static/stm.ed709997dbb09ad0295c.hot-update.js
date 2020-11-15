webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/accordion.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/accordion.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _accordion_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.css */ \"./packages/mars-theme/src/components/utility/accordion.css\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction Accordion(props){var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"0px\");var content=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);function toggleAccordion(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(content.current.scrollHeight,\"px\"));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(AccordionSection,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"button\",{className:\"accordion \".concat(setActive),onClick:toggleAccordion},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\",{className:\"accordion__title\"},props.title)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{ref:content,style:{maxHeight:\"\".concat(setHeight)},className:\"accordion__content\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\",{className:\"accordion__text\",dangerouslySetInnerHTML:{__html:props.content}})));}/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);var AccordionSection=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ekgwfsb0\",label:\"AccordionSection\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q21DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuaW1wb3J0IFwiLi9hY2NvcmRpb24uY3NzXCI7XG5cbmZ1bmN0aW9uIEFjY29yZGlvbihwcm9wcykge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke2NvbnRlbnQuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEFjY29yZGlvblNlY3Rpb24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGFjY29yZGlvbiAke3NldEFjdGl2ZX1gfSBvbkNsaWNrPXt0b2dnbGVBY2NvcmRpb259PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJhY2NvcmRpb25fX3RpdGxlXCI+e3Byb3BzLnRpdGxlfTwvcD5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGRpdlxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX19jb250ZW50XCJcbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fdGV4dFwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcm9wcy5jb250ZW50IH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG5gOyJdfQ== */\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvYWNjb3JkaW9uLmpzPzJjYWIiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwicHJvcHMiLCJzZXRBY3RpdmUiLCJzZXRBY3RpdmVTdGF0ZSIsInVzZVN0YXRlIiwic2V0SGVpZ2h0Iiwic2V0SGVpZ2h0U3RhdGUiLCJjb250ZW50IiwidXNlUmVmIiwidG9nZ2xlQWNjb3JkaW9uIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsInRpdGxlIiwibWF4SGVpZ2h0IiwiX19odG1sIiwiQWNjb3JkaW9uU2VjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsUUFBU0EsVUFBVCxDQUFtQkMsS0FBbkIsQ0FBMEIsQ0FDeEIsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QyxDQUNBLEdBQU0sQ0FBQ0MsU0FBRCxDQUFZQyxjQUFaLEVBQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FFQSxHQUFNRyxRQUFPLENBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QixDQUVBLFFBQVNDLGdCQUFULEVBQTJCLENBQ3pCTixjQUFjLENBQUNELFNBQVMsR0FBSyxFQUFkLENBQW1CLFFBQW5CLENBQThCLEVBQS9CLENBQWQsQ0FDQUksY0FBYyxDQUNaSixTQUFTLEdBQUssUUFBZCxDQUF5QixLQUF6QixXQUFvQ0ssT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxZQUFwRCxNQURZLENBQWQsQ0FHRCxDQUVELE1BQ0UsMkRBQUMsZ0JBQUQsTUFDRSxvRUFBUSxTQUFTLHFCQUFlVCxTQUFmLENBQWpCLENBQTZDLE9BQU8sQ0FBRU8sZUFBdEQsRUFDRSwrREFBRyxTQUFTLENBQUMsa0JBQWIsRUFBaUNSLEtBQUssQ0FBQ1csS0FBdkMsQ0FERixDQURGLENBSUUsaUVBQ0UsR0FBRyxDQUFFTCxPQURQLENBRUUsS0FBSyxDQUFFLENBQUVNLFNBQVMsV0FBS1IsU0FBTCxDQUFYLENBRlQsQ0FHRSxTQUFTLENBQUMsb0JBSFosRUFLRSxpRUFDRSxTQUFTLENBQUMsaUJBRFosQ0FFRSx1QkFBdUIsQ0FBRSxDQUFFUyxNQUFNLENBQUViLEtBQUssQ0FBQ00sT0FBaEIsQ0FGM0IsRUFMRixDQUpGLENBREYsQ0FpQkQsQ0FFY1Asd0VBQWYsRUFFQSxHQUFNZSxpQkFBZ0IscS9EQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvdXRpbGl0eS9hY2NvcmRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmltcG9ydCBcIi4vYWNjb3JkaW9uLmNzc1wiO1xuXG5mdW5jdGlvbiBBY2NvcmRpb24ocHJvcHMpIHtcbiAgY29uc3QgW3NldEFjdGl2ZSwgc2V0QWN0aXZlU3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzZXRIZWlnaHQsIHNldEhlaWdodFN0YXRlXSA9IHVzZVN0YXRlKFwiMHB4XCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSB1c2VSZWYobnVsbCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xuICAgIHNldEFjdGl2ZVN0YXRlKHNldEFjdGl2ZSA9PT0gXCJcIiA/IFwiYWN0aXZlXCIgOiBcIlwiKTtcbiAgICBzZXRIZWlnaHRTdGF0ZShcbiAgICAgIHNldEFjdGl2ZSA9PT0gXCJhY3RpdmVcIiA/IFwiMHB4XCIgOiBgJHtjb250ZW50LmN1cnJlbnQuc2Nyb2xsSGVpZ2h0fXB4YFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBY2NvcmRpb25TZWN0aW9uPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BhY2NvcmRpb24gJHtzZXRBY3RpdmV9YH0gb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX190aXRsZVwiPntwcm9wcy50aXRsZX08L3A+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250ZW50fVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGAke3NldEhlaWdodH1gIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29udGVudFwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX3RleHRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuY29udGVudCB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9BY2NvcmRpb25TZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG5cbmNvbnN0IEFjY29yZGlvblNlY3Rpb24gPSBzdHlsZWQuZGl2YFxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/accordion.js\n");

/***/ })

})