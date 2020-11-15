webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/accordion.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/accordion.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'accordion.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction Accordion(props){var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"0px\");var content=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);function toggleAccordion(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(content.current.scrollHeight,\"px\"));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"accordion__section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"button\",{className:\"accordion \".concat(setActive),onClick:toggleAccordion},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"p\",{className:\"accordion__title\"},props.title)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{ref:content,style:{maxHeight:\"\".concat(setHeight)},className:\"accordion__content\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"div\",{className:\"accordion__text\",dangerouslySetInnerHTML:{__html:props.content}})));}/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvYWNjb3JkaW9uLmpzPzJjYWIiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwicHJvcHMiLCJzZXRBY3RpdmUiLCJzZXRBY3RpdmVTdGF0ZSIsInVzZVN0YXRlIiwic2V0SGVpZ2h0Iiwic2V0SGVpZ2h0U3RhdGUiLCJjb250ZW50IiwidXNlUmVmIiwidG9nZ2xlQWNjb3JkaW9uIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsInRpdGxlIiwibWF4SGVpZ2h0IiwiX19odG1sIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUEsUUFBU0EsVUFBVCxDQUFtQkMsS0FBbkIsQ0FBMEIsQ0FDeEIsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QyxDQUNBLEdBQU0sQ0FBQ0MsU0FBRCxDQUFZQyxjQUFaLEVBQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FFQSxHQUFNRyxRQUFPLENBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QixDQUVBLFFBQVNDLGdCQUFULEVBQTJCLENBQ3pCTixjQUFjLENBQUNELFNBQVMsR0FBSyxFQUFkLENBQW1CLFFBQW5CLENBQThCLEVBQS9CLENBQWQsQ0FDQUksY0FBYyxDQUNaSixTQUFTLEdBQUssUUFBZCxDQUF5QixLQUF6QixXQUFvQ0ssT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxZQUFwRCxNQURZLENBQWQsQ0FHRCxDQUVELE1BQ0Usa0VBQUssU0FBUyxDQUFDLG9CQUFmLEVBQ0Usb0VBQVEsU0FBUyxxQkFBZVQsU0FBZixDQUFqQixDQUE2QyxPQUFPLENBQUVPLGVBQXRELEVBQ0UsK0RBQUcsU0FBUyxDQUFDLGtCQUFiLEVBQWlDUixLQUFLLENBQUNXLEtBQXZDLENBREYsQ0FERixDQUlFLGlFQUNFLEdBQUcsQ0FBRUwsT0FEUCxDQUVFLEtBQUssQ0FBRSxDQUFFTSxTQUFTLFdBQUtSLFNBQUwsQ0FBWCxDQUZULENBR0UsU0FBUyxDQUFDLG9CQUhaLEVBS0UsaUVBQ0UsU0FBUyxDQUFDLGlCQURaLENBRUUsdUJBQXVCLENBQUUsQ0FBRVMsTUFBTSxDQUFFYixLQUFLLENBQUNNLE9BQWhCLENBRjNCLEVBTEYsQ0FKRixDQURGLENBaUJELENBRWNQLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcImFjY29yZGlvbi5jc3NcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY29yZGlvbl9fc2VjdGlvblwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BhY2NvcmRpb24gJHtzZXRBY3RpdmV9YH0gb25DbGljaz17dG9nZ2xlQWNjb3JkaW9ufT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWNjb3JkaW9uX190aXRsZVwiPntwcm9wcy50aXRsZX08L3A+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPXtjb250ZW50fVxuICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6IGAke3NldEhlaWdodH1gIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImFjY29yZGlvbl9fY29udGVudFwiXG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhY2NvcmRpb25fX3RleHRcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMuY29udGVudCB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/accordion.js\n");

/***/ })

})