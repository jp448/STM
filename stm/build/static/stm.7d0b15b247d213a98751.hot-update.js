webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/info-container.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/info-container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utility_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/accordion */ \"./packages/mars-theme/src/components/utility/accordion.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var InfoContainer=(_ref)=>{var{state,actions,post,libraries}=_ref;// Get the html2react component.\nvar Html2React=libraries.html2react.Component;var ProjectTitle=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Title,{dangerouslySetInnerHTML:{__html:post.title.rendered}});console.log(\"hi\");console.log(post.acf.year);console.log(post.acf.location);var ContentAccordion=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Project info\"),post.acf.year===undefined||\"\"?\"\":Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"jahr: \",post.acf.year),post.acf.location===undefined||\"\"?\"\":Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"ort: \",post.acf.location),post.acf.program===undefined||\"\"?\"\":Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"programm: \",post.acf.program),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:post.content.rendered}));return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(CollapsibleStyled,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_utility_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{title:ProjectTitle,content:ContentAccordion}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(InfoContainer));var CollapsibleStyled=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"em8du1x0\",label:\"CollapsibleStyled\"})( false?undefined:{name:\"1ykozy7\",styles:\"bottom:0;position:fixed;width:100%;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ29DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi91dGlsaXR5L2FjY29yZGlvblwiO1xuXG5jb25zdCBJbmZvQ29udGFpbmVyID0gKHsgc3RhdGUsIGFjdGlvbnMsIHBvc3QsIGxpYnJhcmllcyB9KSA9PiB7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcbiAgXG4gIGNvbnN0IFByb2plY3RUaXRsZSA9IDxUaXRsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX0gLz47XG5cbiAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgY29uc29sZS5sb2cocG9zdC5hY2YueWVhcik7XG4gIGNvbnNvbGUubG9nKHBvc3QuYWNmLmxvY2F0aW9uKTtcblxuICBjb25zdCBDb250ZW50QWNjb3JkaW9uID0gPGRpdj5cbiAgICA8cD5Qcm9qZWN0IGluZm88L3A+XG4gICAge3Bvc3QuYWNmLnllYXIgPT09IHVuZGVmaW5lZCB8fCBcIlwiID8gXCJcIiA6IDxwPmphaHI6IHtwb3N0LmFjZi55ZWFyfTwvcD59XG4gICAge3Bvc3QuYWNmLmxvY2F0aW9uID09PSB1bmRlZmluZWQgfHwgXCJcIiA/IFwiXCIgOiA8cD5vcnQ6IHtwb3N0LmFjZi5sb2NhdGlvbn08L3A+fVxuICAgIHtwb3N0LmFjZi5wcm9ncmFtID09PSB1bmRlZmluZWQgfHwgXCJcIiA/IFwiXCIgOiA8cD5wcm9ncmFtbToge3Bvc3QuYWNmLnByb2dyYW19PC9wPn1cbiAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcbiAgICBieSB0aGUgcHJvY2Vzc29ycyB3ZSBpbmNsdWRlZCBpbiB0aGUgbGlicmFyaWVzLmh0bWwycmVhY3QucHJvY2Vzc29ycyBhcnJheS4gKi99XG4gICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICA8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2libGVTdHlsZWQ+XG4gICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgIHRpdGxlPXtQcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtDb250ZW50QWNjb3JkaW9ufVxuICAgICAgICAvPiAgICAgICAgICAgIFxuICAgIDwvQ29sbGFwc2libGVTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEluZm9Db250YWluZXIpO1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMpO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Title=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\",{target:\"em8du1x1\",label:\"Title\"})( false?undefined:{name:\"nwh6xa\",styles:\"margin:0;color:rgba(12,17,43);font-size:1rem !important;text-align:center !important;text-decoration:none !important;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ3VCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi91dGlsaXR5L2FjY29yZGlvblwiO1xuXG5jb25zdCBJbmZvQ29udGFpbmVyID0gKHsgc3RhdGUsIGFjdGlvbnMsIHBvc3QsIGxpYnJhcmllcyB9KSA9PiB7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcbiAgXG4gIGNvbnN0IFByb2plY3RUaXRsZSA9IDxUaXRsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX0gLz47XG5cbiAgY29uc29sZS5sb2coXCJoaVwiKTtcbiAgY29uc29sZS5sb2cocG9zdC5hY2YueWVhcik7XG4gIGNvbnNvbGUubG9nKHBvc3QuYWNmLmxvY2F0aW9uKTtcblxuICBjb25zdCBDb250ZW50QWNjb3JkaW9uID0gPGRpdj5cbiAgICA8cD5Qcm9qZWN0IGluZm88L3A+XG4gICAge3Bvc3QuYWNmLnllYXIgPT09IHVuZGVmaW5lZCB8fCBcIlwiID8gXCJcIiA6IDxwPmphaHI6IHtwb3N0LmFjZi55ZWFyfTwvcD59XG4gICAge3Bvc3QuYWNmLmxvY2F0aW9uID09PSB1bmRlZmluZWQgfHwgXCJcIiA/IFwiXCIgOiA8cD5vcnQ6IHtwb3N0LmFjZi5sb2NhdGlvbn08L3A+fVxuICAgIHtwb3N0LmFjZi5wcm9ncmFtID09PSB1bmRlZmluZWQgfHwgXCJcIiA/IFwiXCIgOiA8cD5wcm9ncmFtbToge3Bvc3QuYWNmLnByb2dyYW19PC9wPn1cbiAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcbiAgICBieSB0aGUgcHJvY2Vzc29ycyB3ZSBpbmNsdWRlZCBpbiB0aGUgbGlicmFyaWVzLmh0bWwycmVhY3QucHJvY2Vzc29ycyBhcnJheS4gKi99XG4gICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICA8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2libGVTdHlsZWQ+XG4gICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgIHRpdGxlPXtQcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtDb250ZW50QWNjb3JkaW9ufVxuICAgICAgICAvPiAgICAgICAgICAgIFxuICAgIDwvQ29sbGFwc2libGVTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEluZm9Db250YWluZXIpO1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMpO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZm8tY29udGFpbmVyLmpzPzFlZTkiXSwibmFtZXMiOlsiSW5mb0NvbnRhaW5lciIsInN0YXRlIiwiYWN0aW9ucyIsInBvc3QiLCJsaWJyYXJpZXMiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsIlByb2plY3RUaXRsZSIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJjb25zb2xlIiwibG9nIiwiYWNmIiwieWVhciIsImxvY2F0aW9uIiwiQ29udGVudEFjY29yZGlvbiIsInVuZGVmaW5lZCIsInByb2dyYW0iLCJjb250ZW50IiwiY29ubmVjdCIsIkNvbGxhcHNpYmxlU3R5bGVkIiwiVGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBLEdBQU1BLGNBQWEsQ0FBRyxRQUF5QyxJQUF4QyxDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBa0JDLElBQWxCLENBQXdCQyxTQUF4QixDQUF3QyxNQUU3RDtBQUNBLEdBQU1DLFdBQVUsQ0FBR0QsU0FBUyxDQUFDRSxVQUFWLENBQXFCQyxTQUF4QyxDQUVBLEdBQU1DLGFBQVksQ0FBRywwREFBQyxLQUFELEVBQU8sdUJBQXVCLENBQUUsQ0FBRUMsTUFBTSxDQUFFTixJQUFJLENBQUNPLEtBQUwsQ0FBV0MsUUFBckIsQ0FBaEMsRUFBckIsQ0FFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVksSUFBWixFQUNBRCxPQUFPLENBQUNDLEdBQVIsQ0FBWVYsSUFBSSxDQUFDVyxHQUFMLENBQVNDLElBQXJCLEVBQ0FILE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFJLENBQUNXLEdBQUwsQ0FBU0UsUUFBckIsRUFFQSxHQUFNQyxpQkFBZ0IsQ0FBRyxxRUFDdkIsa0ZBRHVCLENBRXRCZCxJQUFJLENBQUNXLEdBQUwsQ0FBU0MsSUFBVCxHQUFrQkcsU0FBbEIsRUFBK0IsRUFBL0IsQ0FBb0MsRUFBcEMsQ0FBeUMsNEVBQVVmLElBQUksQ0FBQ1csR0FBTCxDQUFTQyxJQUFuQixDQUZuQixDQUd0QlosSUFBSSxDQUFDVyxHQUFMLENBQVNFLFFBQVQsR0FBc0JFLFNBQXRCLEVBQW1DLEVBQW5DLENBQXdDLEVBQXhDLENBQTZDLDJFQUFTZixJQUFJLENBQUNXLEdBQUwsQ0FBU0UsUUFBbEIsQ0FIdkIsQ0FJdEJiLElBQUksQ0FBQ1csR0FBTCxDQUFTSyxPQUFULEdBQXFCRCxTQUFyQixFQUFrQyxFQUFsQyxDQUF1QyxFQUF2QyxDQUE0QyxnRkFBY2YsSUFBSSxDQUFDVyxHQUFMLENBQVNLLE9BQXZCLENBSnRCLENBT3ZCLDBEQUFDLFVBQUQsRUFBWSxJQUFJLENBQUVoQixJQUFJLENBQUNpQixPQUFMLENBQWFULFFBQS9CLEVBUHVCLENBQXpCLENBVUEsTUFDRSwyREFBQyxpQkFBRCxNQUNJLDBEQUFDLDBEQUFELEVBQ0ksS0FBSyxDQUFFSCxZQURYLENBRUksT0FBTyxDQUFFUyxnQkFGYixFQURKLENBREYsQ0FRRCxDQTdCRCxDQStCZUksdUhBQU8sQ0FBQ3JCLGFBQUQsQ0FBdEIsRUFFQSxHQUFNc0Isa0JBQWlCLDBxRkFBdkIsQ0FNQSxHQUFNQyxNQUFLLDh1RkFBWCIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvaW5mby1jb250YWluZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4vdXRpbGl0eS9hY2NvcmRpb25cIjtcblxuY29uc3QgSW5mb0NvbnRhaW5lciA9ICh7IHN0YXRlLCBhY3Rpb25zLCBwb3N0LCBsaWJyYXJpZXMgfSkgPT4ge1xuXG4gIC8vIEdldCB0aGUgaHRtbDJyZWFjdCBjb21wb25lbnQuXG4gIGNvbnN0IEh0bWwyUmVhY3QgPSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5Db21wb25lbnQ7XG4gIFxuICBjb25zdCBQcm9qZWN0VGl0bGUgPSA8VGl0bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0LnRpdGxlLnJlbmRlcmVkIH19IC8+O1xuXG4gIGNvbnNvbGUubG9nKFwiaGlcIik7XG4gIGNvbnNvbGUubG9nKHBvc3QuYWNmLnllYXIpO1xuICBjb25zb2xlLmxvZyhwb3N0LmFjZi5sb2NhdGlvbik7XG5cbiAgY29uc3QgQ29udGVudEFjY29yZGlvbiA9IDxkaXY+XG4gICAgPHA+UHJvamVjdCBpbmZvPC9wPlxuICAgIHtwb3N0LmFjZi55ZWFyID09PSB1bmRlZmluZWQgfHwgXCJcIiA/IFwiXCIgOiA8cD5qYWhyOiB7cG9zdC5hY2YueWVhcn08L3A+fVxuICAgIHtwb3N0LmFjZi5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IFwiXCIgPyBcIlwiIDogPHA+b3J0OiB7cG9zdC5hY2YubG9jYXRpb259PC9wPn1cbiAgICB7cG9zdC5hY2YucHJvZ3JhbSA9PT0gdW5kZWZpbmVkIHx8IFwiXCIgPyBcIlwiIDogPHA+cHJvZ3JhbW06IHtwb3N0LmFjZi5wcm9ncmFtfTwvcD59XG4gICAgey8qIFJlbmRlciB0aGUgY29udGVudCB1c2luZyB0aGUgSHRtbDJSZWFjdCBjb21wb25lbnQgc28gdGhlIEhUTUwgaXMgcHJvY2Vzc2VkXG4gICAgYnkgdGhlIHByb2Nlc3NvcnMgd2UgaW5jbHVkZWQgaW4gdGhlIGxpYnJhcmllcy5odG1sMnJlYWN0LnByb2Nlc3NvcnMgYXJyYXkuICovfVxuICAgIDxIdG1sMlJlYWN0IGh0bWw9e3Bvc3QuY29udGVudC5yZW5kZXJlZH0gLz5cbiAgPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNpYmxlU3R5bGVkPlxuICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgICB0aXRsZT17UHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgY29udGVudD17Q29udGVudEFjY29yZGlvbn1cbiAgICAgICAgLz4gICAgICAgICAgICBcbiAgICA8L0NvbGxhcHNpYmxlU3R5bGVkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChJbmZvQ29udGFpbmVyKTtcblxuY29uc3QgQ29sbGFwc2libGVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oMWBcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzKTtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/info-container.js\n");

/***/ })

})