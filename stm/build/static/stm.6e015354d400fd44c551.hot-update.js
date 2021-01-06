webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/info-container.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/info-container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utility_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/accordion */ \"./packages/mars-theme/src/components/utility/accordion.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}//Info Container is opened when user clicks on the accordian component. Info container contains information about the project\n//such as year, location, programm\nvar InfoContainer=(_ref)=>{var{state,actions,post,libraries}=_ref;// Get the html2react component.\nvar Html2React=libraries.html2react.Component;var ProjectTitle=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Title,{dangerouslySetInnerHTML:{__html:post.title.rendered}});var ContentAccordion=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Project info\"),post.acf.year===undefined||post.acf.year===\"\"?\"\":Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"jahr: \",post.acf.year),post.acf.location===undefined||post.acf.location===\"\"?\"\":Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"ort: \",post.acf.location),post.acf.programm===undefined||post.acf.programm===\"\"?\"\":Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"programm: \",post.acf.program),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:post.content.rendered}));return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(CollapsibleStyled,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_utility_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{title:ProjectTitle,content:ContentAccordion}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(InfoContainer));var CollapsibleStyled=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"em8du1x0\",label:\"CollapsibleStyled\"})( false?undefined:{name:\"1ykozy7\",styles:\"bottom:0;position:fixed;width:100%;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ29DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi91dGlsaXR5L2FjY29yZGlvblwiO1xuXG4vL0luZm8gQ29udGFpbmVyIGlzIG9wZW5lZCB3aGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBhY2NvcmRpYW4gY29tcG9uZW50LiBJbmZvIGNvbnRhaW5lciBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvamVjdFxuLy9zdWNoIGFzIHllYXIsIGxvY2F0aW9uLCBwcm9ncmFtbVxuXG5jb25zdCBJbmZvQ29udGFpbmVyID0gKHsgc3RhdGUsIGFjdGlvbnMsIHBvc3QsIGxpYnJhcmllcyB9KSA9PiB7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcbiAgXG4gIGNvbnN0IFByb2plY3RUaXRsZSA9IDxUaXRsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX0gLz47XG5cbiAgY29uc3QgQ29udGVudEFjY29yZGlvbiA9IDxkaXY+XG4gICAgPHA+UHJvamVjdCBpbmZvPC9wPlxuICAgIHsocG9zdC5hY2YueWVhciA9PT0gdW5kZWZpbmVkIHx8IHBvc3QuYWNmLnllYXIgPT09IFwiXCIpID8gXCJcIiA6IDxwPmphaHI6IHtwb3N0LmFjZi55ZWFyfTwvcD59XG4gICAgeyhwb3N0LmFjZi5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc3QuYWNmLmxvY2F0aW9uID09PSBcIlwiKSAgPyBcIlwiIDogPHA+b3J0OiB7cG9zdC5hY2YubG9jYXRpb259PC9wPn1cbiAgICB7KHBvc3QuYWNmLnByb2dyYW1tID09PSB1bmRlZmluZWQgfHwgcG9zdC5hY2YucHJvZ3JhbW0gPT09IFwiXCIpICA/IFwiXCIgOiA8cD5wcm9ncmFtbToge3Bvc3QuYWNmLnByb2dyYW19PC9wPn1cbiAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcbiAgICBieSB0aGUgcHJvY2Vzc29ycyB3ZSBpbmNsdWRlZCBpbiB0aGUgbGlicmFyaWVzLmh0bWwycmVhY3QucHJvY2Vzc29ycyBhcnJheS4gKi99XG4gICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICA8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2libGVTdHlsZWQ+XG4gICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgIHRpdGxlPXtQcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtDb250ZW50QWNjb3JkaW9ufVxuICAgICAgICAvPiAgICAgICAgICAgIFxuICAgIDwvQ29sbGFwc2libGVTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEluZm9Db250YWluZXIpO1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMpO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Title=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\",{target:\"em8du1x1\",label:\"Title\"})( false?undefined:{name:\"l93txq\",styles:\"margin:0;color:rgba(12,17,43);font-size:1rem !important;text-align:left !important;text-decoration:none !important;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ3VCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi91dGlsaXR5L2FjY29yZGlvblwiO1xuXG4vL0luZm8gQ29udGFpbmVyIGlzIG9wZW5lZCB3aGVuIHVzZXIgY2xpY2tzIG9uIHRoZSBhY2NvcmRpYW4gY29tcG9uZW50LiBJbmZvIGNvbnRhaW5lciBjb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgcHJvamVjdFxuLy9zdWNoIGFzIHllYXIsIGxvY2F0aW9uLCBwcm9ncmFtbVxuXG5jb25zdCBJbmZvQ29udGFpbmVyID0gKHsgc3RhdGUsIGFjdGlvbnMsIHBvc3QsIGxpYnJhcmllcyB9KSA9PiB7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcbiAgXG4gIGNvbnN0IFByb2plY3RUaXRsZSA9IDxUaXRsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX0gLz47XG5cbiAgY29uc3QgQ29udGVudEFjY29yZGlvbiA9IDxkaXY+XG4gICAgPHA+UHJvamVjdCBpbmZvPC9wPlxuICAgIHsocG9zdC5hY2YueWVhciA9PT0gdW5kZWZpbmVkIHx8IHBvc3QuYWNmLnllYXIgPT09IFwiXCIpID8gXCJcIiA6IDxwPmphaHI6IHtwb3N0LmFjZi55ZWFyfTwvcD59XG4gICAgeyhwb3N0LmFjZi5sb2NhdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc3QuYWNmLmxvY2F0aW9uID09PSBcIlwiKSAgPyBcIlwiIDogPHA+b3J0OiB7cG9zdC5hY2YubG9jYXRpb259PC9wPn1cbiAgICB7KHBvc3QuYWNmLnByb2dyYW1tID09PSB1bmRlZmluZWQgfHwgcG9zdC5hY2YucHJvZ3JhbW0gPT09IFwiXCIpICA/IFwiXCIgOiA8cD5wcm9ncmFtbToge3Bvc3QuYWNmLnByb2dyYW19PC9wPn1cbiAgICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcbiAgICBieSB0aGUgcHJvY2Vzc29ycyB3ZSBpbmNsdWRlZCBpbiB0aGUgbGlicmFyaWVzLmh0bWwycmVhY3QucHJvY2Vzc29ycyBhcnJheS4gKi99XG4gICAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPlxuICA8L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8Q29sbGFwc2libGVTdHlsZWQ+XG4gICAgICAgIDxBY2NvcmRpb25cbiAgICAgICAgICAgIHRpdGxlPXtQcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICBjb250ZW50PXtDb250ZW50QWNjb3JkaW9ufVxuICAgICAgICAvPiAgICAgICAgICAgIFxuICAgIDwvQ29sbGFwc2libGVTdHlsZWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEluZm9Db250YWluZXIpO1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMpO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbmA7Il19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZm8tY29udGFpbmVyLmpzPzFlZTkiXSwibmFtZXMiOlsiSW5mb0NvbnRhaW5lciIsInN0YXRlIiwiYWN0aW9ucyIsInBvc3QiLCJsaWJyYXJpZXMiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsIlByb2plY3RUaXRsZSIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJDb250ZW50QWNjb3JkaW9uIiwiYWNmIiwieWVhciIsInVuZGVmaW5lZCIsImxvY2F0aW9uIiwicHJvZ3JhbW0iLCJwcm9ncmFtIiwiY29udGVudCIsImNvbm5lY3QiLCJDb2xsYXBzaWJsZVN0eWxlZCIsIlRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQTtBQUNBO0FBRUEsR0FBTUEsY0FBYSxDQUFHLFFBQXlDLElBQXhDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFrQkMsSUFBbEIsQ0FBd0JDLFNBQXhCLENBQXdDLE1BRTdEO0FBQ0EsR0FBTUMsV0FBVSxDQUFHRCxTQUFTLENBQUNFLFVBQVYsQ0FBcUJDLFNBQXhDLENBRUEsR0FBTUMsYUFBWSxDQUFHLDBEQUFDLEtBQUQsRUFBTyx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxRQUFyQixDQUFoQyxFQUFyQixDQUVBLEdBQU1DLGlCQUFnQixDQUFHLHFFQUN2QixrRkFEdUIsQ0FFckJULElBQUksQ0FBQ1UsR0FBTCxDQUFTQyxJQUFULEdBQWtCQyxTQUFsQixFQUErQlosSUFBSSxDQUFDVSxHQUFMLENBQVNDLElBQVQsR0FBa0IsRUFBbEQsQ0FBd0QsRUFBeEQsQ0FBNkQsNEVBQVVYLElBQUksQ0FBQ1UsR0FBTCxDQUFTQyxJQUFuQixDQUZ2QyxDQUdyQlgsSUFBSSxDQUFDVSxHQUFMLENBQVNHLFFBQVQsR0FBc0JELFNBQXRCLEVBQW1DWixJQUFJLENBQUNVLEdBQUwsQ0FBU0csUUFBVCxHQUFzQixFQUExRCxDQUFpRSxFQUFqRSxDQUFzRSwyRUFBU2IsSUFBSSxDQUFDVSxHQUFMLENBQVNHLFFBQWxCLENBSGhELENBSXJCYixJQUFJLENBQUNVLEdBQUwsQ0FBU0ksUUFBVCxHQUFzQkYsU0FBdEIsRUFBbUNaLElBQUksQ0FBQ1UsR0FBTCxDQUFTSSxRQUFULEdBQXNCLEVBQTFELENBQWlFLEVBQWpFLENBQXNFLGdGQUFjZCxJQUFJLENBQUNVLEdBQUwsQ0FBU0ssT0FBdkIsQ0FKaEQsQ0FPdkIsMERBQUMsVUFBRCxFQUFZLElBQUksQ0FBRWYsSUFBSSxDQUFDZ0IsT0FBTCxDQUFhUixRQUEvQixFQVB1QixDQUF6QixDQVVBLE1BQ0UsMkRBQUMsaUJBQUQsTUFDSSwwREFBQywwREFBRCxFQUNJLEtBQUssQ0FBRUgsWUFEWCxDQUVJLE9BQU8sQ0FBRUksZ0JBRmIsRUFESixDQURGLENBUUQsQ0F6QkQsQ0EyQmVRLHVIQUFPLENBQUNwQixhQUFELENBQXRCLEVBRUEsR0FBTXFCLGtCQUFpQixrMkZBQXZCLENBTUEsR0FBTUMsTUFBSyxvNkZBQVgiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZm8tY29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL3V0aWxpdHkvYWNjb3JkaW9uXCI7XG5cbi8vSW5mbyBDb250YWluZXIgaXMgb3BlbmVkIHdoZW4gdXNlciBjbGlja3Mgb24gdGhlIGFjY29yZGlhbiBjb21wb25lbnQuIEluZm8gY29udGFpbmVyIGNvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm9qZWN0XG4vL3N1Y2ggYXMgeWVhciwgbG9jYXRpb24sIHByb2dyYW1tXG5cbmNvbnN0IEluZm9Db250YWluZXIgPSAoeyBzdGF0ZSwgYWN0aW9ucywgcG9zdCwgbGlicmFyaWVzIH0pID0+IHtcblxuICAvLyBHZXQgdGhlIGh0bWwycmVhY3QgY29tcG9uZW50LlxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuICBcbiAgY29uc3QgUHJvamVjdFRpdGxlID0gPFRpdGxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fSAvPjtcblxuICBjb25zdCBDb250ZW50QWNjb3JkaW9uID0gPGRpdj5cbiAgICA8cD5Qcm9qZWN0IGluZm88L3A+XG4gICAgeyhwb3N0LmFjZi55ZWFyID09PSB1bmRlZmluZWQgfHwgcG9zdC5hY2YueWVhciA9PT0gXCJcIikgPyBcIlwiIDogPHA+amFocjoge3Bvc3QuYWNmLnllYXJ9PC9wPn1cbiAgICB7KHBvc3QuYWNmLmxvY2F0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zdC5hY2YubG9jYXRpb24gPT09IFwiXCIpICA/IFwiXCIgOiA8cD5vcnQ6IHtwb3N0LmFjZi5sb2NhdGlvbn08L3A+fVxuICAgIHsocG9zdC5hY2YucHJvZ3JhbW0gPT09IHVuZGVmaW5lZCB8fCBwb3N0LmFjZi5wcm9ncmFtbSA9PT0gXCJcIikgID8gXCJcIiA6IDxwPnByb2dyYW1tOiB7cG9zdC5hY2YucHJvZ3JhbX08L3A+fVxuICAgIHsvKiBSZW5kZXIgdGhlIGNvbnRlbnQgdXNpbmcgdGhlIEh0bWwyUmVhY3QgY29tcG9uZW50IHNvIHRoZSBIVE1MIGlzIHByb2Nlc3NlZFxuICAgIGJ5IHRoZSBwcm9jZXNzb3JzIHdlIGluY2x1ZGVkIGluIHRoZSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5wcm9jZXNzb3JzIGFycmF5LiAqL31cbiAgICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+XG4gIDwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzaWJsZVN0eWxlZD5cbiAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgdGl0bGU9e1Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e0NvbnRlbnRBY2NvcmRpb259XG4gICAgICAgIC8+ICAgICAgICAgICAgXG4gICAgPC9Db2xsYXBzaWJsZVN0eWxlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSW5mb0NvbnRhaW5lcik7XG5cbmNvbnN0IENvbGxhcHNpYmxlU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0Myk7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/info-container.js\n");

/***/ })

})