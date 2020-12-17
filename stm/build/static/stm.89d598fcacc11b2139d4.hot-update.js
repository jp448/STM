webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/info-container.js":
/*!**************************************************************!*\
  !*** ./packages/mars-theme/src/components/info-container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utility_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility/accordion */ \"./packages/mars-theme/src/components/utility/accordion.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var InfoContainer=(_ref)=>{var{state,actions,post,libraries}=_ref;// Get the html2react component.\nvar Html2React=libraries.html2react.Component;var ProjectTitle=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Title,{dangerouslySetInnerHTML:{__html:post.title.rendered}});var ContentAccordion=Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Project info\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"jahr: \",post.acf.year),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"ort: \",post.acf.location),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"programm: \",post.acf.program),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(Html2React,{html:post.content.rendered}));return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(CollapsibleStyled,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_utility_accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{title:ProjectTitle,content:ContentAccordion}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(InfoContainer));var CollapsibleStyled=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"em8du1x0\",label:\"CollapsibleStyled\"})( false?undefined:{name:\"p1eya5\",styles:\"bottom:0;position:sticky;width:100%;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQm9DIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi91dGlsaXR5L2FjY29yZGlvblwiO1xuXG5jb25zdCBJbmZvQ29udGFpbmVyID0gKHsgc3RhdGUsIGFjdGlvbnMsIHBvc3QsIGxpYnJhcmllcyB9KSA9PiB7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcbiAgXG4gIGNvbnN0IFByb2plY3RUaXRsZSA9IDxUaXRsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX0gLz47XG5cbiAgY29uc3QgQ29udGVudEFjY29yZGlvbiA9IDxkaXY+PHA+UHJvamVjdCBpbmZvPC9wPlxuICA8cD5qYWhyOiB7cG9zdC5hY2YueWVhcn08L3A+XG4gIDxwPm9ydDoge3Bvc3QuYWNmLmxvY2F0aW9ufTwvcD5cbiAgPHA+cHJvZ3JhbW06IHtwb3N0LmFjZi5wcm9ncmFtfTwvcD5cbiAgey8qIFJlbmRlciB0aGUgY29udGVudCB1c2luZyB0aGUgSHRtbDJSZWFjdCBjb21wb25lbnQgc28gdGhlIEhUTUwgaXMgcHJvY2Vzc2VkXG4gIGJ5IHRoZSBwcm9jZXNzb3JzIHdlIGluY2x1ZGVkIGluIHRoZSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5wcm9jZXNzb3JzIGFycmF5LiAqL31cbiAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzaWJsZVN0eWxlZD5cbiAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgdGl0bGU9e1Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e0NvbnRlbnRBY2NvcmRpb259XG4gICAgICAgIC8+ICAgICAgICAgICAgXG4gICAgPC9Db2xsYXBzaWJsZVN0eWxlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSW5mb0NvbnRhaW5lcik7XG5cbmNvbnN0IENvbGxhcHNpYmxlU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMpO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Title=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h1\",{target:\"em8du1x1\",label:\"Title\"})( false?undefined:{name:\"nwh6xa\",styles:\"margin:0;color:rgba(12,17,43);font-size:1rem !important;text-align:center !important;text-decoration:none !important;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQ3VCIiwiZmlsZSI6Ii9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9pbmZvLWNvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tIFwiLi91dGlsaXR5L2FjY29yZGlvblwiO1xuXG5jb25zdCBJbmZvQ29udGFpbmVyID0gKHsgc3RhdGUsIGFjdGlvbnMsIHBvc3QsIGxpYnJhcmllcyB9KSA9PiB7XG5cbiAgLy8gR2V0IHRoZSBodG1sMnJlYWN0IGNvbXBvbmVudC5cbiAgY29uc3QgSHRtbDJSZWFjdCA9IGxpYnJhcmllcy5odG1sMnJlYWN0LkNvbXBvbmVudDtcbiAgXG4gIGNvbnN0IFByb2plY3RUaXRsZSA9IDxUaXRsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QudGl0bGUucmVuZGVyZWQgfX0gLz47XG5cbiAgY29uc3QgQ29udGVudEFjY29yZGlvbiA9IDxkaXY+PHA+UHJvamVjdCBpbmZvPC9wPlxuICA8cD5qYWhyOiB7cG9zdC5hY2YueWVhcn08L3A+XG4gIDxwPm9ydDoge3Bvc3QuYWNmLmxvY2F0aW9ufTwvcD5cbiAgPHA+cHJvZ3JhbW06IHtwb3N0LmFjZi5wcm9ncmFtfTwvcD5cbiAgey8qIFJlbmRlciB0aGUgY29udGVudCB1c2luZyB0aGUgSHRtbDJSZWFjdCBjb21wb25lbnQgc28gdGhlIEhUTUwgaXMgcHJvY2Vzc2VkXG4gIGJ5IHRoZSBwcm9jZXNzb3JzIHdlIGluY2x1ZGVkIGluIHRoZSBsaWJyYXJpZXMuaHRtbDJyZWFjdC5wcm9jZXNzb3JzIGFycmF5LiAqL31cbiAgPEh0bWwyUmVhY3QgaHRtbD17cG9zdC5jb250ZW50LnJlbmRlcmVkfSAvPjwvZGl2PjtcblxuICByZXR1cm4gKFxuICAgIDxDb2xsYXBzaWJsZVN0eWxlZD5cbiAgICAgICAgPEFjY29yZGlvblxuICAgICAgICAgICAgdGl0bGU9e1Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgIGNvbnRlbnQ9e0NvbnRlbnRBY2NvcmRpb259XG4gICAgICAgIC8+ICAgICAgICAgICAgXG4gICAgPC9Db2xsYXBzaWJsZVN0eWxlZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoSW5mb0NvbnRhaW5lcik7XG5cbmNvbnN0IENvbGxhcHNpYmxlU3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBtYXJnaW46IDA7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMpO1xuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZm8tY29udGFpbmVyLmpzPzFlZTkiXSwibmFtZXMiOlsiSW5mb0NvbnRhaW5lciIsInN0YXRlIiwiYWN0aW9ucyIsInBvc3QiLCJsaWJyYXJpZXMiLCJIdG1sMlJlYWN0IiwiaHRtbDJyZWFjdCIsIkNvbXBvbmVudCIsIlByb2plY3RUaXRsZSIsIl9faHRtbCIsInRpdGxlIiwicmVuZGVyZWQiLCJDb250ZW50QWNjb3JkaW9uIiwiYWNmIiwieWVhciIsImxvY2F0aW9uIiwicHJvZ3JhbSIsImNvbnRlbnQiLCJjb25uZWN0IiwiQ29sbGFwc2libGVTdHlsZWQiLCJUaXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cVJBSUEsR0FBTUEsY0FBYSxDQUFHLFFBQXlDLElBQXhDLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUFrQkMsSUFBbEIsQ0FBd0JDLFNBQXhCLENBQXdDLE1BRTdEO0FBQ0EsR0FBTUMsV0FBVSxDQUFHRCxTQUFTLENBQUNFLFVBQVYsQ0FBcUJDLFNBQXhDLENBRUEsR0FBTUMsYUFBWSxDQUFHLDBEQUFDLEtBQUQsRUFBTyx1QkFBdUIsQ0FBRSxDQUFFQyxNQUFNLENBQUVOLElBQUksQ0FBQ08sS0FBTCxDQUFXQyxRQUFyQixDQUFoQyxFQUFyQixDQUVBLEdBQU1DLGlCQUFnQixDQUFHLHFFQUFLLGtGQUFMLENBQ3pCLDRFQUFVVCxJQUFJLENBQUNVLEdBQUwsQ0FBU0MsSUFBbkIsQ0FEeUIsQ0FFekIsMkVBQVNYLElBQUksQ0FBQ1UsR0FBTCxDQUFTRSxRQUFsQixDQUZ5QixDQUd6QixnRkFBY1osSUFBSSxDQUFDVSxHQUFMLENBQVNHLE9BQXZCLENBSHlCLENBTXpCLDBEQUFDLFVBQUQsRUFBWSxJQUFJLENBQUViLElBQUksQ0FBQ2MsT0FBTCxDQUFhTixRQUEvQixFQU55QixDQUF6QixDQVFBLE1BQ0UsMkRBQUMsaUJBQUQsTUFDSSwwREFBQywwREFBRCxFQUNJLEtBQUssQ0FBRUgsWUFEWCxDQUVJLE9BQU8sQ0FBRUksZ0JBRmIsRUFESixDQURGLENBUUQsQ0F2QkQsQ0F5QmVNLHVIQUFPLENBQUNsQixhQUFELENBQXRCLEVBRUEsR0FBTW1CLGtCQUFpQiw4MEVBQXZCLENBTUEsR0FBTUMsTUFBSyxrNUVBQVgiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2luZm8tY29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gXCIuL3V0aWxpdHkvYWNjb3JkaW9uXCI7XG5cbmNvbnN0IEluZm9Db250YWluZXIgPSAoeyBzdGF0ZSwgYWN0aW9ucywgcG9zdCwgbGlicmFyaWVzIH0pID0+IHtcblxuICAvLyBHZXQgdGhlIGh0bWwycmVhY3QgY29tcG9uZW50LlxuICBjb25zdCBIdG1sMlJlYWN0ID0gbGlicmFyaWVzLmh0bWwycmVhY3QuQ29tcG9uZW50O1xuICBcbiAgY29uc3QgUHJvamVjdFRpdGxlID0gPFRpdGxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC50aXRsZS5yZW5kZXJlZCB9fSAvPjtcblxuICBjb25zdCBDb250ZW50QWNjb3JkaW9uID0gPGRpdj48cD5Qcm9qZWN0IGluZm88L3A+XG4gIDxwPmphaHI6IHtwb3N0LmFjZi55ZWFyfTwvcD5cbiAgPHA+b3J0OiB7cG9zdC5hY2YubG9jYXRpb259PC9wPlxuICA8cD5wcm9ncmFtbToge3Bvc3QuYWNmLnByb2dyYW19PC9wPlxuICB7LyogUmVuZGVyIHRoZSBjb250ZW50IHVzaW5nIHRoZSBIdG1sMlJlYWN0IGNvbXBvbmVudCBzbyB0aGUgSFRNTCBpcyBwcm9jZXNzZWRcbiAgYnkgdGhlIHByb2Nlc3NvcnMgd2UgaW5jbHVkZWQgaW4gdGhlIGxpYnJhcmllcy5odG1sMnJlYWN0LnByb2Nlc3NvcnMgYXJyYXkuICovfVxuICA8SHRtbDJSZWFjdCBodG1sPXtwb3N0LmNvbnRlbnQucmVuZGVyZWR9IC8+PC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPENvbGxhcHNpYmxlU3R5bGVkPlxuICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgICB0aXRsZT17UHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgY29udGVudD17Q29udGVudEFjY29yZGlvbn1cbiAgICAgICAgLz4gICAgICAgICAgICBcbiAgICA8L0NvbGxhcHNpYmxlU3R5bGVkPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChJbmZvQ29udGFpbmVyKTtcblxuY29uc3QgQ29sbGFwc2libGVTdHlsZWQgPSBzdHlsZWQuZGl2YFxuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0Myk7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/info-container.js\n");

/***/ })

})