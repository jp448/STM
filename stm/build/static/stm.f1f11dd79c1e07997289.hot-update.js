webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"0px\");var submenu=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);function toggleNavBar(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(submenu.current.scrollHeight,\"px\"));}var menuItems=[];state.theme.menu.map(e=>{menuItems.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:e.name},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:e.link,\"aria-current\":state.router.link===e.link?\"page\":undefined},e.name)));});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavTop,null,menuItems));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"1yoc3yj\",styles:\"list-style:none;display:flex;width:848px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;position:fixed;flex-direction:column-reverse;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkMrQiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuICBcbiAgY29uc3QgbWVudUl0ZW1zID0gW11cblxuICBzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICBtZW51SXRlbXMucHVzaCg8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgIHtlLm5hbWV9XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICA8TmF2VG9wPnttZW51SXRlbXN9PC9OYXZUb3A+XG4gICAgICBcbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdlRvcCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZCb3R0b20gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGVhc2U7XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMDUwNDAxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavTop=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavTop\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNER5QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuICBcbiAgY29uc3QgbWVudUl0ZW1zID0gW11cblxuICBzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICBtZW51SXRlbXMucHVzaCg8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgIHtlLm5hbWV9XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICA8TmF2VG9wPnttZW51SXRlbXN9PC9OYXZUb3A+XG4gICAgICBcbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdlRvcCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZCb3R0b20gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGVhc2U7XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMDUwNDAxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuIl19 */\");var NavBottom=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n2\",label:\"NavBottom\"})( false?undefined:{name:\"ssjoz4\",styles:\"background-color:white;overflow:hidden;transition:max-height 0.6s ease;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0Q0QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuICBcbiAgY29uc3QgbWVudUl0ZW1zID0gW11cblxuICBzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICBtZW51SXRlbXMucHVzaCg8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgIHtlLm5hbWV9XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICA8TmF2VG9wPnttZW51SXRlbXN9PC9OYXZUb3A+XG4gICAgICBcbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdlRvcCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZCb3R0b20gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGVhc2U7XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMDUwNDAxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n3\",label:\"NavItem\"})( false?undefined:{name:\"86gp1w\",styles:\"padding:0;margin:0 16px;color:#050401;font-size:0.9em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:black;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}&:hover{color:red;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUUwQiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgfVxuICBcbiAgY29uc3QgbWVudUl0ZW1zID0gW11cblxuICBzdGF0ZS50aGVtZS5tZW51Lm1hcChlID0+IHtcbiAgICBtZW51SXRlbXMucHVzaCg8TmF2SXRlbSBrZXk9e2UubmFtZX0+XG4gICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgPExpbmsgbGluaz17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgIHtlLm5hbWV9XG4gICAgICA8L0xpbms+XG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICA8TmF2VG9wPnttZW51SXRlbXN9PC9OYXZUb3A+XG4gICAgICBcbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdlRvcCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZCb3R0b20gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGVhc2U7XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMDUwNDAxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwic2V0QWN0aXZlIiwic2V0QWN0aXZlU3RhdGUiLCJ1c2VTdGF0ZSIsInNldEhlaWdodCIsInNldEhlaWdodFN0YXRlIiwic3VibWVudSIsInVzZVJlZiIsInRvZ2dsZU5hdkJhciIsImN1cnJlbnQiLCJzY3JvbGxIZWlnaHQiLCJtZW51SXRlbXMiLCJ0aGVtZSIsIm1lbnUiLCJtYXAiLCJlIiwicHVzaCIsIm5hbWUiLCJsaW5rIiwicm91dGVyIiwidW5kZWZpbmVkIiwiY29ubmVjdCIsIk5hdkNvbnRhaW5lciIsIk5hdlRvcCIsIk5hdkJvdHRvbSIsIk5hdkl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxHQUFNQSxJQUFHLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUN6QixHQUFNLENBQUNDLFNBQUQsQ0FBWUMsY0FBWixFQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQTVDLENBQ0EsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJGLHNEQUFRLENBQUMsS0FBRCxDQUE1QyxDQUVBLEdBQU1HLFFBQU8sQ0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXRCLENBRUEsUUFBU0MsYUFBVCxFQUF3QixDQUN0Qk4sY0FBYyxDQUFDRCxTQUFTLEdBQUssRUFBZCxDQUFtQixRQUFuQixDQUE4QixFQUEvQixDQUFkLENBQ0FJLGNBQWMsQ0FDWkosU0FBUyxHQUFLLFFBQWQsQ0FBeUIsS0FBekIsV0FBb0NLLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkMsWUFBcEQsTUFEWSxDQUFkLENBR0QsQ0FFRCxHQUFNQyxVQUFTLENBQUcsRUFBbEIsQ0FFQVgsS0FBSyxDQUFDWSxLQUFOLENBQVlDLElBQVosQ0FBaUJDLEdBQWpCLENBQXFCQyxDQUFDLEVBQUksQ0FDeEJKLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLDBEQUFDLE9BQUQsRUFBUyxHQUFHLENBQUVELENBQUMsQ0FBQ0UsSUFBaEIsRUFFYiwwREFBQyw2Q0FBRCxFQUFNLElBQUksQ0FBRUYsQ0FBQyxDQUFDRyxJQUFkLENBQW9CLGVBQWNsQixLQUFLLENBQUNtQixNQUFOLENBQWFELElBQWIsR0FBc0JILENBQUMsQ0FBQ0csSUFBeEIsQ0FBK0IsTUFBL0IsQ0FBd0NFLFNBQTFFLEVBQ0dMLENBQUMsQ0FBQ0UsSUFETCxDQUZhLENBQWYsRUFNRCxDQVBELEVBU0EsTUFDRSwyREFBQyxZQUFELE1BQ0UsMERBQUMsTUFBRCxNQUFTTixTQUFULENBREYsQ0FERixDQU1ELENBOUJELENBZ0NlVSx1SEFBTyxDQUFDdEIsR0FBRCxDQUF0QixFQUVBLEdBQU11QixhQUFZLHdySEFBbEIsQ0FpQkEsR0FBTUMsT0FBTSxvNUdBQVosQ0FHQSxHQUFNQyxVQUFTLHNpSEFBZixDQU1BLEdBQU1DLFFBQU8sczFIQUFiIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9ICBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcblxuICBjb25zdCBzdWJtZW51ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU5hdkJhcigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7c3VibWVudS5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICB9XG4gIFxuICBjb25zdCBtZW51SXRlbXMgPSBbXVxuXG4gIHN0YXRlLnRoZW1lLm1lbnUubWFwKGUgPT4ge1xuICAgIG1lbnVJdGVtcy5wdXNoKDxOYXZJdGVtIGtleT17ZS5uYW1lfT5cbiAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICA8TGluayBsaW5rPXtlLmxpbmt9IGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAge2UubmFtZX1cbiAgICAgIDwvTGluaz5cbiAgICA8L05hdkl0ZW0+KVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIDxOYXZUb3A+e21lbnVJdGVtc308L05hdlRvcD5cbiAgICAgIFxuICAgIDwvTmF2Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODQ4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuY29uc3QgTmF2VG9wID0gc3R5bGVkLmRpdmBcbmA7XG5cbmNvbnN0IE5hdkJvdHRvbSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNnMgZWFzZTtcbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgY29sb3I6ICMwNTA0MDE7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuXG4gICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAmOmxhc3Qtb2YtdHlwZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgfVxuICB9XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})