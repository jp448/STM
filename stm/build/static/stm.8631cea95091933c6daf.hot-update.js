webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/menu-modal.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/menu-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var MenuModal=(_ref)=>{var{state}=_ref;var{menu}=state.theme;var isThereLinks=menu!=null&&menu.length>0;console.log(menu);console.log(isThereLinks);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuOverlay,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuContent,{as:\"nav\"},isThereLinks&&menu.map((e,idx)=>{return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(MenuLink,{key:e.name,link:e.link,\"aria-current\":state.router.link===e.link?\"page\":undefined},e.name);})));};var MenuOverlay=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu0\",label:\"MenuOverlay\"})( false?undefined:{name:\"1imod2o\",styles:\"background-color:#fff;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCOEIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuICBjb25zb2xlLmxvZyhtZW51KTtcbiAgY29uc29sZS5sb2coaXNUaGVyZUxpbmtzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17ZS5uYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtlLmxpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZS5uYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu1\",label:\"MenuContent\"})( false?undefined:{name:\"4ma18r\",styles:\"z-index:3;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDOEIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuICBjb25zb2xlLmxvZyhtZW51KTtcbiAgY29uc29sZS5sb2coaXNUaGVyZUxpbmtzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17ZS5uYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtlLmxpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZS5uYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"eqtk5fu2\",label:\"MenuLink\"})( false?undefined:{name:\"4yjzzx\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;&:hover,&:focus{background-color:rgba(0,0,0,0.05);}&[aria-current=\\\"page\\\"]{color:black;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDNkIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuY29uc3QgTWVudU1vZGFsID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuICBjb25zb2xlLmxvZyhtZW51KTtcbiAgY29uc29sZS5sb2coaXNUaGVyZUxpbmtzKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1lbnVPdmVybGF5IC8+XG4gICAgICA8TWVudUNvbnRlbnQgYXM9XCJuYXZcIj5cbiAgICAgICAge2lzVGhlcmVMaW5rcyAmJlxuICAgICAgICAgIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoPE1lbnVMaW5rXG4gICAgICAgICAgICAgIGtleT17ZS5uYW1lfVxuICAgICAgICAgICAgICBsaW5rPXtlLmxpbmt9XG4gICAgICAgICAgICAgIGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7ZS5uYW1lfVxuICAgICAgICAgICAgPC9NZW51TGluaz4pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9NZW51Q29udGVudD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IE1lbnVPdmVybGF5ID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuYDtcblxuY29uc3QgTWVudUNvbnRlbnQgPSBzdHlsZWQuZGl2YFxuICB6LWluZGV4OiAzO1xuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQoTGluaylgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanM/ZTNlOSJdLCJuYW1lcyI6WyJNZW51TW9kYWwiLCJzdGF0ZSIsIm1lbnUiLCJ0aGVtZSIsImlzVGhlcmVMaW5rcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlIiwiaWR4IiwibmFtZSIsImxpbmsiLCJyb3V0ZXIiLCJ1bmRlZmluZWQiLCJNZW51T3ZlcmxheSIsIk1lbnVDb250ZW50IiwiTWVudUxpbmsiLCJMaW5rIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cVJBSUEsR0FBTUEsVUFBUyxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDL0IsR0FBTSxDQUFFQyxJQUFGLEVBQVdELEtBQUssQ0FBQ0UsS0FBdkIsQ0FDQSxHQUFNQyxhQUFZLENBQUdGLElBQUksRUFBSSxJQUFSLEVBQWdCQSxJQUFJLENBQUNHLE1BQUwsQ0FBYyxDQUFuRCxDQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWixFQUNBSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsWUFBWixFQUNBLE1BQ0Usc0hBQ0UsMERBQUMsV0FBRCxNQURGLENBRUUsMERBQUMsV0FBRCxFQUFhLEVBQUUsQ0FBQyxLQUFoQixFQUNHQSxZQUFZLEVBQ1hGLElBQUksQ0FBQ00sR0FBTCxDQUFTLENBQUNDLENBQUQsQ0FBSUMsR0FBSixHQUFZLENBQ25CLE1BQVEsMkRBQUMsUUFBRCxFQUNOLEdBQUcsQ0FBRUQsQ0FBQyxDQUFDRSxJQURELENBRU4sSUFBSSxDQUFFRixDQUFDLENBQUNHLElBRkYsQ0FHTixlQUFjWCxLQUFLLENBQUNZLE1BQU4sQ0FBYUQsSUFBYixHQUFzQkgsQ0FBQyxDQUFDRyxJQUF4QixDQUErQixNQUEvQixDQUF3Q0UsU0FIaEQsRUFLTEwsQ0FBQyxDQUFDRSxJQUxHLENBQVIsQ0FPRCxDQVJELENBRkosQ0FGRixDQURGLENBa0JELENBdkJELENBeUJBLEdBQU1JLFlBQVcsbWlGQUFqQixDQVdBLEdBQU1DLFlBQVcsazhFQUFqQixDQUlBLEdBQU1DLFNBQVEsQ0FBRyxrRkFBT0MsNkNBQVAsc0NBQUgsMGdGQUFkLENBb0JlQyx1SEFBTyxDQUFDbkIsU0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IHsgbWVudSB9ID0gc3RhdGUudGhlbWU7XG4gIGNvbnN0IGlzVGhlcmVMaW5rcyA9IG1lbnUgIT0gbnVsbCAmJiBtZW51Lmxlbmd0aCA+IDA7XG4gIGNvbnNvbGUubG9nKG1lbnUpO1xuICBjb25zb2xlLmxvZyhpc1RoZXJlTGlua3MpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7aXNUaGVyZUxpbmtzICYmXG4gICAgICAgICAgbWVudS5tYXAoKGUsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICg8TWVudUxpbmtcbiAgICAgICAgICAgICAga2V5PXtlLm5hbWV9XG4gICAgICAgICAgICAgIGxpbms9e2UubGlua31cbiAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gZS5saW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtlLm5hbWV9XG4gICAgICAgICAgICA8L01lbnVMaW5rPilcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBNZW51TGluayA9IHN0eWxlZChMaW5rKWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7ICovXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWVudU1vZGFsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/menu-modal.js\n");

/***/ })

})