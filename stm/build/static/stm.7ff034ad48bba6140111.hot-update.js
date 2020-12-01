webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/accordion.js":
/*!*****************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/accordion.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}function Accordion(props){var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"0px\");var content=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);function toggleAccordion(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(content.current.scrollHeight,\"px\"));}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(AccordionSection,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(AccordionContent,{ref:content,style:{maxHeight:\"\".concat(setHeight)}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(AccordionText,null,props.content)),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(AccordionStyle,{onClick:toggleAccordion},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(AccordionTitle,null,props.title,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"i\",{class:\"fas fa-sort-up\"}))));}/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);var AccordionSection=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ekgwfsb0\",label:\"AccordionSection\"})( false?undefined:{name:\"1v3870x\",styles:\"display:flex;flex-direction:column-reverse;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ21DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxBY2NvcmRpb25Db250ZW50IFxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblRleHQ+XG4gICAgICAgICAgICB7cHJvcHMuY29udGVudH1cbiAgICAgICAgPC9BY2NvcmRpb25UZXh0PiBcbiAgICAgIDwvQWNjb3JkaW9uQ29udGVudD4gIFxuICAgICAgPEFjY29yZGlvblN0eWxlIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxBY2NvcmRpb25UaXRsZT57cHJvcHMudGl0bGV9PGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT48L0FjY29yZGlvblRpdGxlPlxuICAgICAgPC9BY2NvcmRpb25TdHlsZT5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7XG5cbmNvbnN0IEFjY29yZGlvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmA7XG5cbmNvbnN0IEFjY29yZGlvblRpdGxlID0gc3R5bGVkLnBgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgQWNjb3JkaW9uVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var AccordionStyle=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"button\",{target:\"ekgwfsb1\",label:\"AccordionStyle\"})( false?undefined:{name:\"1j65miv\",styles:\"background-color:#fff;color:#444;cursor:pointer;padding:18px;display:flex;align-items:center;border:none;outline:none;transition:background-color 0.6s ease;&:hover{background-color:#fff;}&:active{background-color:#fff;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q29DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxBY2NvcmRpb25Db250ZW50IFxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblRleHQ+XG4gICAgICAgICAgICB7cHJvcHMuY29udGVudH1cbiAgICAgICAgPC9BY2NvcmRpb25UZXh0PiBcbiAgICAgIDwvQWNjb3JkaW9uQ29udGVudD4gIFxuICAgICAgPEFjY29yZGlvblN0eWxlIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxBY2NvcmRpb25UaXRsZT57cHJvcHMudGl0bGV9PGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT48L0FjY29yZGlvblRpdGxlPlxuICAgICAgPC9BY2NvcmRpb25TdHlsZT5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7XG5cbmNvbnN0IEFjY29yZGlvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmA7XG5cbmNvbnN0IEFjY29yZGlvblRpdGxlID0gc3R5bGVkLnBgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgQWNjb3JkaW9uVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var AccordionTitle=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"p\",{target:\"ekgwfsb2\",label:\"AccordionTitle\"})( false?undefined:{name:\"a5mw1v\",styles:\"font-family:\\\"Open Sans\\\",sans-serif;font-weight:600;font-size:14px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRCtCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxBY2NvcmRpb25Db250ZW50IFxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblRleHQ+XG4gICAgICAgICAgICB7cHJvcHMuY29udGVudH1cbiAgICAgICAgPC9BY2NvcmRpb25UZXh0PiBcbiAgICAgIDwvQWNjb3JkaW9uQ29udGVudD4gIFxuICAgICAgPEFjY29yZGlvblN0eWxlIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxBY2NvcmRpb25UaXRsZT57cHJvcHMudGl0bGV9PGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT48L0FjY29yZGlvblRpdGxlPlxuICAgICAgPC9BY2NvcmRpb25TdHlsZT5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7XG5cbmNvbnN0IEFjY29yZGlvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmA7XG5cbmNvbnN0IEFjY29yZGlvblRpdGxlID0gc3R5bGVkLnBgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgQWNjb3JkaW9uVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var AccordionContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ekgwfsb3\",label:\"AccordionContent\"})( false?undefined:{name:\"ssjoz4\",styles:\"background-color:white;overflow:hidden;transition:max-height 0.6s ease;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRW1DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxBY2NvcmRpb25Db250ZW50IFxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblRleHQ+XG4gICAgICAgICAgICB7cHJvcHMuY29udGVudH1cbiAgICAgICAgPC9BY2NvcmRpb25UZXh0PiBcbiAgICAgIDwvQWNjb3JkaW9uQ29udGVudD4gIFxuICAgICAgPEFjY29yZGlvblN0eWxlIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxBY2NvcmRpb25UaXRsZT57cHJvcHMudGl0bGV9PGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT48L0FjY29yZGlvblRpdGxlPlxuICAgICAgPC9BY2NvcmRpb25TdHlsZT5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7XG5cbmNvbnN0IEFjY29yZGlvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmA7XG5cbmNvbnN0IEFjY29yZGlvblRpdGxlID0gc3R5bGVkLnBgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgQWNjb3JkaW9uVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var AccordionText=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"ekgwfsb4\",label:\"AccordionText\"})( false?undefined:{name:\"1mmuiph\",styles:\"font-family:\\\"Open Sans\\\",sans-serif;font-weight:400;font-size:14px;padding:18px;border-top:4px solid black;font-family:'Cutive Mono',monospace;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRWdDIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxBY2NvcmRpb25Db250ZW50IFxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblRleHQ+XG4gICAgICAgICAgICB7cHJvcHMuY29udGVudH1cbiAgICAgICAgPC9BY2NvcmRpb25UZXh0PiBcbiAgICAgIDwvQWNjb3JkaW9uQ29udGVudD4gIFxuICAgICAgPEFjY29yZGlvblN0eWxlIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxBY2NvcmRpb25UaXRsZT57cHJvcHMudGl0bGV9PGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT48L0FjY29yZGlvblRpdGxlPlxuICAgICAgPC9BY2NvcmRpb25TdHlsZT5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7XG5cbmNvbnN0IEFjY29yZGlvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmA7XG5cbmNvbnN0IEFjY29yZGlvblRpdGxlID0gc3R5bGVkLnBgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgQWNjb3JkaW9uVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvYWNjb3JkaW9uLmpzPzJjYWIiXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwicHJvcHMiLCJzZXRBY3RpdmUiLCJzZXRBY3RpdmVTdGF0ZSIsInVzZVN0YXRlIiwic2V0SGVpZ2h0Iiwic2V0SGVpZ2h0U3RhdGUiLCJjb250ZW50IiwidXNlUmVmIiwidG9nZ2xlQWNjb3JkaW9uIiwiY3VycmVudCIsInNjcm9sbEhlaWdodCIsIm1heEhlaWdodCIsInRpdGxlIiwiQWNjb3JkaW9uU2VjdGlvbiIsIkFjY29yZGlvblN0eWxlIiwiQWNjb3JkaW9uVGl0bGUiLCJBY2NvcmRpb25Db250ZW50IiwiQWNjb3JkaW9uVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7cVJBR0EsUUFBU0EsVUFBVCxDQUFtQkMsS0FBbkIsQ0FBMEIsQ0FDeEIsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QyxDQUNBLEdBQU0sQ0FBQ0MsU0FBRCxDQUFZQyxjQUFaLEVBQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FFQSxHQUFNRyxRQUFPLENBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QixDQUVBLFFBQVNDLGdCQUFULEVBQTJCLENBQ3pCTixjQUFjLENBQUNELFNBQVMsR0FBSyxFQUFkLENBQW1CLFFBQW5CLENBQThCLEVBQS9CLENBQWQsQ0FDQUksY0FBYyxDQUNaSixTQUFTLEdBQUssUUFBZCxDQUF5QixLQUF6QixXQUFvQ0ssT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxZQUFwRCxNQURZLENBQWQsQ0FHRCxDQUVELE1BQ0UsMkRBQUMsZ0JBQUQsTUFDRSwwREFBQyxnQkFBRCxFQUNFLEdBQUcsQ0FBRUosT0FEUCxDQUVFLEtBQUssQ0FBRSxDQUFFSyxTQUFTLFdBQUtQLFNBQUwsQ0FBWCxDQUZULEVBSUUsMERBQUMsYUFBRCxNQUNLSixLQUFLLENBQUNNLE9BRFgsQ0FKRixDQURGLENBU0UsMERBQUMsY0FBRCxFQUFnQixPQUFPLENBQUVFLGVBQXpCLEVBQ0UsMERBQUMsY0FBRCxNQUFpQlIsS0FBSyxDQUFDWSxLQUF2QixDQUE2QiwrREFBRyxLQUFLLENBQUMsZ0JBQVQsRUFBN0IsQ0FERixDQVRGLENBREYsQ0FlRCxDQUVjYix3RUFBZixFQUVBLEdBQU1jLGlCQUFnQix5ckdBQXRCLENBS0EsR0FBTUMsZUFBYywwMkdBQXBCLENBa0JBLEdBQU1DLGVBQWMsNnNHQUFwQixDQU1BLEdBQU1DLGlCQUFnQixvdEdBQXRCLENBTUEsR0FBTUMsY0FBYSwyeEdBQW5CIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L2FjY29yZGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcblxuZnVuY3Rpb24gQWNjb3JkaW9uKHByb3BzKSB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBjb250ZW50ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7Y29udGVudC5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QWNjb3JkaW9uU2VjdGlvbj5cbiAgICAgIDxBY2NvcmRpb25Db250ZW50IFxuICAgICAgICByZWY9e2NvbnRlbnR9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID5cbiAgICAgICAgPEFjY29yZGlvblRleHQ+XG4gICAgICAgICAgICB7cHJvcHMuY29udGVudH1cbiAgICAgICAgPC9BY2NvcmRpb25UZXh0PiBcbiAgICAgIDwvQWNjb3JkaW9uQ29udGVudD4gIFxuICAgICAgPEFjY29yZGlvblN0eWxlIG9uQ2xpY2s9e3RvZ2dsZUFjY29yZGlvbn0+XG4gICAgICAgIDxBY2NvcmRpb25UaXRsZT57cHJvcHMudGl0bGV9PGkgY2xhc3M9XCJmYXMgZmEtc29ydC11cFwiPjwvaT48L0FjY29yZGlvblRpdGxlPlxuICAgICAgPC9BY2NvcmRpb25TdHlsZT5cbiAgICA8L0FjY29yZGlvblNlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjY29yZGlvbjtcblxuY29uc3QgQWNjb3JkaW9uU2VjdGlvbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbmA7XG5cbmNvbnN0IEFjY29yZGlvblN0eWxlID0gc3R5bGVkLmJ1dHRvbmBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNnMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbmA7XG5cbmNvbnN0IEFjY29yZGlvblRpdGxlID0gc3R5bGVkLnBgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG5gO1xuXG5jb25zdCBBY2NvcmRpb25Db250ZW50ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgQWNjb3JkaW9uVGV4dCA9IHN0eWxlZC5kaXZgXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgYmxhY2s7XG4gICAgZm9udC1mYW1pbHk6ICdDdXRpdmUgTW9ubycsIG1vbm9zcGFjZTtcbmA7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/accordion.js\n");

/***/ })

})