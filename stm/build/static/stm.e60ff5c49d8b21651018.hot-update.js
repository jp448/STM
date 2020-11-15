webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"0px\");var submenu=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);function toggleNavBar(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(submenu.current.scrollHeight,\"px\"));}console.log(state.theme.menu);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,state.theme.menu.map(e=>{Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:e.name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:e.link,\"aria-current\":state.router.link===e.link?\"page\":undefined},e.name));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"b8ztud\",styles:\"list-style:none;display:flex;width:848px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;position:fixed;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0MrQiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHN0YXRlLnRoZW1lLm1lbnUpO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgIHtlLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgfSl9XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE5hdik7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4NDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavItem\"})( false?undefined:{name:\"86gp1w\",styles:\"padding:0;margin:0 16px;color:#050401;font-size:0.9em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:black;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}&:hover{color:red;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0QwQiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHN0YXRlLnRoZW1lLm1lbnUpO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgIHtlLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgfSl9XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE5hdik7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4NDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwic2V0QWN0aXZlIiwic2V0QWN0aXZlU3RhdGUiLCJ1c2VTdGF0ZSIsInNldEhlaWdodCIsInNldEhlaWdodFN0YXRlIiwic3VibWVudSIsInVzZVJlZiIsInRvZ2dsZU5hdkJhciIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJjb25zb2xlIiwibG9nIiwidGhlbWUiLCJtZW51IiwibWFwIiwiZSIsIm5hbWUiLCJsaW5rIiwicm91dGVyIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIk5hdkNvbnRhaW5lciIsIk5hdkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNQSxJQUFHLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUN6QixHQUFNLENBQUNDLFNBQUQsQ0FBWUMsY0FBWixFQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQTVDLENBQ0EsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUE1QyxDQUVBLEdBQU1HLFFBQU8sQ0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCLENBRUEsUUFBU0MsYUFBVCxFQUF3QixDQUN0Qk4sY0FBYyxDQUFDRCxTQUFTLEdBQUssRUFBZCxDQUFtQixRQUFuQixDQUE4QixFQUEvQixDQUFkLENBQ0FJLGNBQWMsQ0FDWkosU0FBUyxHQUFLLFFBQWQsQ0FBeUIsS0FBekIsV0FBb0NLLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsWUFBcEQsTUFEWSxDQUFkLENBR0QsQ0FFREMsT0FBTyxDQUFDQyxHQUFSLENBQVlaLEtBQUssQ0FBQ2EsS0FBTixDQUFZQyxJQUF4QixFQUVBLE1BQ0UsMkRBQUMsWUFBRCxNQUNHZCxLQUFLLENBQUNhLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsR0FBakIsQ0FBcUJDLENBQUMsRUFBSSxDQUN2QiwwREFBQyxPQUFELEVBQVMsR0FBRyxDQUFFQSxDQUFDLENBQUNDLElBQWhCLEVBRUUsMERBQUMsNkNBQUQsRUFBTSxJQUFJLENBQUVELENBQUMsQ0FBQ0UsSUFBZCxDQUFvQixlQUFjbEIsS0FBSyxDQUFDbUIsTUFBTixDQUFhRCxJQUFiLEdBQXNCRixDQUFDLENBQUNFLElBQXhCLENBQStCLE1BQS9CLENBQXdDRSxTQUExRSxFQUNHSixDQUFDLENBQUNDLElBREwsQ0FGRixFQU1ILENBUEEsQ0FESCxDQURGLENBWUQsQ0EzQkQsQ0E2QmVJLHVIQUFPLENBQUN0QixHQUFELENBQXRCLEVBRUEsR0FBTXVCLGFBQVksaTVHQUFsQixDQWdCQSxHQUFNQyxRQUFPLDhrSEFBYiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuXG4gIGNvbnNvbGUubG9nKHN0YXRlLnRoZW1lLm1lbnUpO1xuXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICAgICAgICA8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgIHtlLm5hbWV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgfSl9XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE5hdik7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiA4NDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})