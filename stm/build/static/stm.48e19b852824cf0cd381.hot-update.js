webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/accordion.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/accordion.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './utility/accordion.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction Accordion(props){var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"0px\");var content=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);function toggleAccordion(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(content.current.scrollHeight,\"px\"));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"accordion__section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\",{className:\"accordion \".concat(setActive),onClick:toggleAccordion},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"p\",{className:\"accordion__title\"},props.title)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{ref:content,style:{maxHeight:\"\".concat(setHeight)},className:\"accordion__content\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"accordion__text\",dangerouslySetInnerHTML:{__html:props.content}})));}/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvYWNjb3JkaW9uLmpzPzJjYWIiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwicHJvcHMiLCJzZXRBY3RpdmUiLCJzZXRBY3RpdmVTdGF0ZSIsInVzZVN0YXRlIiwic2V0SGVpZ2h0Iiwic2V0SGVpZ2h0U3RhdGUiLCJjb250ZW50IiwidXNlUmVmIiwidG9nZ2xlQWNjb3JkaW9uIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsInRpdGxlIiwibWF4SGVpZ2h0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUEsUUFBU0EsVUFBVCxDQUFtQkMsS0FBbkIsQ0FBMEIsQ0FDeEIsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QyxDQUNBLEdBQU0sQ0FBQ0MsU0FBRCxDQUFZQyxjQUFaLEVBQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FFQSxHQUFNRyxRQUFPLENBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QixDQUVBLFFBQVNDLGdCQUFULEVBQTJCLENBQ3pCTixjQUFjLENBQUNELFNBQVMsR0FBSyxFQUFkLENBQW1CLFFBQW5CLENBQThCLEVBQS9CLENBQWQsQ0FDQUksY0FBYyxDQUNaSixTQUFTLEdBQUssUUFBZCxDQUF5QixLQUF6QixXQUFvQ0ssT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxZQUFwRCxNQURZLENBQWQsQ0FHRCxDQUVELE1BQ0Usa0VBQUssU0FBUyxDQUFDLG9CQUFmLEVBQ0Usb0VBQVEsU0FBUyxxQkFBZVQsU0FBZixDQUFqQixDQUE2QyxPQUFPLENBQUVPLGVBQXRELEVBQ0UsK0RBQUcsU0FBUyxDQUFDLGtCQUFiLEVBQWlDUixLQUFLLENBQUNXLEtBQXZDLENBREYsQ0FERixDQUlFLGlFQUNFLEdBQUcsQ0FBRUwsT0FEUCxDQUVFLEtBQUssQ0FBRSxDQUFFTSxTQUFTLFdBQUtSLFNBQUwsQ0FBWCxDQUZULENBR0UsU0FBUyxDQUFDLG9CQUhaLEVBS0UsaUVBQ0UsU0FBUyxDQUFDLGlCQURaLENBRUUsdUJBQXVCLENBQUUsQ0FBRVMsTUFBTSxDQUFFYixLQUFLLENBQUNNLE9BQWhCLENBRjNCLEVBTEYsQ0FKRixDQURGLENBaUJELENBRWNQLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCIuL3V0aWxpdHkvYWNjb3JkaW9uLmNzc1wiO1xuXG5cbmZ1bmN0aW9uIEFjY29yZGlvbihwcm9wcykge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3QgY29udGVudCA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVBY2NvcmRpb24oKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke2NvbnRlbnQuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvcmRpb25fX3NlY3Rpb25cIj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgYWNjb3JkaW9uICR7c2V0QWN0aXZlfWB9IG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fdGl0bGVcIj57cHJvcHMudGl0bGV9PC9wPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17Y29udGVudH1cbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBgJHtzZXRIZWlnaHR9YCB9fVxuICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX2NvbnRlbnRcIlxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX190ZXh0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHByb3BzLmNvbnRlbnQgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/accordion.js\n");

/***/ })

})