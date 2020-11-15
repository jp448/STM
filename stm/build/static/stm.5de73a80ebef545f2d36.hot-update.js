webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;var[setActive,setActiveState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var[setHeight,setHeightState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"0px\");var[setMenu,setMenuState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");var submenu=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);function toggleNavBar(){setActiveState(setActive===\"\"?\"active\":\"\");setHeightState(setActive===\"active\"?\"0px\":\"\".concat(submenu.current.scrollHeight,\"px\"));setMenuState(state.theme.menu[3].name);}var menuItems=[];state.theme.menu.map(e=>{menuItems.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:e.name},e.menu.length===0?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:e.link,\"aria-current\":state.router.link===e.link?\"page\":undefined},e.name):Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",{onClick:toggleNavBar},e.name)));});return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,menuItems,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavBottom,{ref:submenu,style:{maxHeight:\"\".concat(setHeight)}},setMenu));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"b8ztud\",styles:\"list-style:none;display:flex;width:848px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;position:fixed;@media screen and (max-width:560px){display:none;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0QrQiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG4gIGNvbnN0IFtzZXRNZW51LCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgICBzZXRNZW51U3RhdGUoXG4gICAgICBzdGF0ZS50aGVtZS5tZW51WzNdLm5hbWVcbiAgICApO1xuICB9XG4gIFxuICBjb25zdCBtZW51SXRlbXMgPSBbXVxuXG4gIHN0YXRlLnRoZW1lLm1lbnUubWFwKGUgPT4ge1xuICAgIG1lbnVJdGVtcy5wdXNoKDxOYXZJdGVtIGtleT17ZS5uYW1lfT5cbiAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICB7IGUubWVudS5sZW5ndGggPT09IDAgPyA8TGluayBsaW5rPXtlLmxpbmt9IGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAge2UubmFtZX08L0xpbms+IDogPHAgb25DbGljaz17dG9nZ2xlTmF2QmFyfT57ZS5uYW1lfTwvcD4gfVxuICAgICAgXG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgICAgPE5hdkJvdHRvbVxuICAgICAgICByZWY9e3N1Ym1lbnV9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID57c2V0TWVudX08L05hdkJvdHRvbT5cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZUb3AgPSBzdHlsZWQuZGl2YFxuYDtcblxuY29uc3QgTmF2Qm90dG9tID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavTop=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavTop\"})( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0V5QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG4gIGNvbnN0IFtzZXRNZW51LCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgICBzZXRNZW51U3RhdGUoXG4gICAgICBzdGF0ZS50aGVtZS5tZW51WzNdLm5hbWVcbiAgICApO1xuICB9XG4gIFxuICBjb25zdCBtZW51SXRlbXMgPSBbXVxuXG4gIHN0YXRlLnRoZW1lLm1lbnUubWFwKGUgPT4ge1xuICAgIG1lbnVJdGVtcy5wdXNoKDxOYXZJdGVtIGtleT17ZS5uYW1lfT5cbiAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICB7IGUubWVudS5sZW5ndGggPT09IDAgPyA8TGluayBsaW5rPXtlLmxpbmt9IGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAge2UubmFtZX08L0xpbms+IDogPHAgb25DbGljaz17dG9nZ2xlTmF2QmFyfT57ZS5uYW1lfTwvcD4gfVxuICAgICAgXG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgICAgPE5hdkJvdHRvbVxuICAgICAgICByZWY9e3N1Ym1lbnV9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID57c2V0TWVudX08L05hdkJvdHRvbT5cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZUb3AgPSBzdHlsZWQuZGl2YFxuYDtcblxuY29uc3QgTmF2Qm90dG9tID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdfQ== */\");var NavBottom=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n2\",label:\"NavBottom\"})( false?undefined:{name:\"ssjoz4\",styles:\"background-color:white;overflow:hidden;transition:max-height 0.6s ease;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUU0QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG4gIGNvbnN0IFtzZXRNZW51LCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgICBzZXRNZW51U3RhdGUoXG4gICAgICBzdGF0ZS50aGVtZS5tZW51WzNdLm5hbWVcbiAgICApO1xuICB9XG4gIFxuICBjb25zdCBtZW51SXRlbXMgPSBbXVxuXG4gIHN0YXRlLnRoZW1lLm1lbnUubWFwKGUgPT4ge1xuICAgIG1lbnVJdGVtcy5wdXNoKDxOYXZJdGVtIGtleT17ZS5uYW1lfT5cbiAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICB7IGUubWVudS5sZW5ndGggPT09IDAgPyA8TGluayBsaW5rPXtlLmxpbmt9IGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAge2UubmFtZX08L0xpbms+IDogPHAgb25DbGljaz17dG9nZ2xlTmF2QmFyfT57ZS5uYW1lfTwvcD4gfVxuICAgICAgXG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgICAgPE5hdkJvdHRvbVxuICAgICAgICByZWY9e3N1Ym1lbnV9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID57c2V0TWVudX08L05hdkJvdHRvbT5cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZUb3AgPSBzdHlsZWQuZGl2YFxuYDtcblxuY29uc3QgTmF2Qm90dG9tID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n3\",label:\"NavItem\"})( false?undefined:{name:\"86gp1w\",styles:\"padding:0;margin:0 16px;color:#050401;font-size:0.9em;box-sizing:border-box;flex-shrink:0;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:black;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}&:hover{color:red;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkUwQiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSAgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbc2V0QWN0aXZlLCBzZXRBY3RpdmVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NldEhlaWdodCwgc2V0SGVpZ2h0U3RhdGVdID0gdXNlU3RhdGUoXCIwcHhcIik7XG4gIGNvbnN0IFtzZXRNZW51LCBzZXRNZW51U3RhdGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgc3VibWVudSA9IHVzZVJlZihudWxsKTtcblxuICBmdW5jdGlvbiB0b2dnbGVOYXZCYXIoKSB7XG4gICAgc2V0QWN0aXZlU3RhdGUoc2V0QWN0aXZlID09PSBcIlwiID8gXCJhY3RpdmVcIiA6IFwiXCIpO1xuICAgIHNldEhlaWdodFN0YXRlKFxuICAgICAgc2V0QWN0aXZlID09PSBcImFjdGl2ZVwiID8gXCIwcHhcIiA6IGAke3N1Ym1lbnUuY3VycmVudC5zY3JvbGxIZWlnaHR9cHhgXG4gICAgKTtcbiAgICBzZXRNZW51U3RhdGUoXG4gICAgICBzdGF0ZS50aGVtZS5tZW51WzNdLm5hbWVcbiAgICApO1xuICB9XG4gIFxuICBjb25zdCBtZW51SXRlbXMgPSBbXVxuXG4gIHN0YXRlLnRoZW1lLm1lbnUubWFwKGUgPT4ge1xuICAgIG1lbnVJdGVtcy5wdXNoKDxOYXZJdGVtIGtleT17ZS5uYW1lfT5cbiAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICB7IGUubWVudS5sZW5ndGggPT09IDAgPyA8TGluayBsaW5rPXtlLmxpbmt9IGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAge2UubmFtZX08L0xpbms+IDogPHAgb25DbGljaz17dG9nZ2xlTmF2QmFyfT57ZS5uYW1lfTwvcD4gfVxuICAgICAgXG4gICAgPC9OYXZJdGVtPilcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxOYXZDb250YWluZXI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgICAgPE5hdkJvdHRvbVxuICAgICAgICByZWY9e3N1Ym1lbnV9XG4gICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogYCR7c2V0SGVpZ2h0fWAgfX1cbiAgICAgID57c2V0TWVudX08L05hdkJvdHRvbT5cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDg0OHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDAgMjRweDtcbiAgbWFyZ2luOiAwO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBOYXZUb3AgPSBzdHlsZWQuZGl2YFxuYDtcblxuY29uc3QgTmF2Qm90dG9tID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC42cyBlYXNlO1xuYDtcblxuY29uc3QgTmF2SXRlbSA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBjb2xvcjogIzA1MDQwMTtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG5cbiAgJiA+IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMmVtO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBVc2UgZm9yIHNlbWFudGljIGFwcHJvYWNoIHRvIHN0eWxlIHRoZSBjdXJyZW50IGxpbmsgKi9cbiAgICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogYmxhY2s7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwic2V0QWN0aXZlIiwic2V0QWN0aXZlU3RhdGUiLCJ1c2VTdGF0ZSIsInNldEhlaWdodCIsInNldEhlaWdodFN0YXRlIiwic2V0TWVudSIsInNldE1lbnVTdGF0ZSIsInN1Ym1lbnUiLCJ1c2VSZWYiLCJ0b2dnbGVOYXZCYXIiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwidGhlbWUiLCJtZW51IiwibmFtZSIsIm1lbnVJdGVtcyIsIm1hcCIsImUiLCJwdXNoIiwibGVuZ3RoIiwibGluayIsInJvdXRlciIsInVuZGVmaW5lZCIsIm1heEhlaWdodCIsImNvbm5lY3QiLCJOYXZDb250YWluZXIiLCJOYXZUb3AiLCJOYXZCb3R0b20iLCJOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsSUFBRyxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDekIsR0FBTSxDQUFDQyxTQUFELENBQVlDLGNBQVosRUFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUE1QyxDQUNBLEdBQU0sQ0FBQ0MsU0FBRCxDQUFZQyxjQUFaLEVBQThCRixzREFBUSxDQUFDLEtBQUQsQ0FBNUMsQ0FDQSxHQUFNLENBQUNHLE9BQUQsQ0FBVUMsWUFBVixFQUEwQkosc0RBQVEsQ0FBQyxFQUFELENBQXhDLENBRUEsR0FBTUssUUFBTyxDQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBdEIsQ0FFQSxRQUFTQyxhQUFULEVBQXdCLENBQ3RCUixjQUFjLENBQUNELFNBQVMsR0FBSyxFQUFkLENBQW1CLFFBQW5CLENBQThCLEVBQS9CLENBQWQsQ0FDQUksY0FBYyxDQUNaSixTQUFTLEdBQUssUUFBZCxDQUF5QixLQUF6QixXQUFvQ08sT0FBTyxDQUFDRyxPQUFSLENBQWdCQyxZQUFwRCxNQURZLENBQWQsQ0FHQUwsWUFBWSxDQUNWUCxLQUFLLENBQUNhLEtBQU4sQ0FBWUMsSUFBWixDQUFpQixDQUFqQixFQUFvQkMsSUFEVixDQUFaLENBR0QsQ0FFRCxHQUFNQyxVQUFTLENBQUcsRUFBbEIsQ0FFQWhCLEtBQUssQ0FBQ2EsS0FBTixDQUFZQyxJQUFaLENBQWlCRyxHQUFqQixDQUFxQkMsQ0FBQyxFQUFJLENBQ3hCRixTQUFTLENBQUNHLElBQVYsQ0FBZSwwREFBQyxPQUFELEVBQVMsR0FBRyxDQUFFRCxDQUFDLENBQUNILElBQWhCLEVBRVhHLENBQUMsQ0FBQ0osSUFBRixDQUFPTSxNQUFQLEdBQWtCLENBQWxCLENBQXNCLDBEQUFDLDZDQUFELEVBQU0sSUFBSSxDQUFFRixDQUFDLENBQUNHLElBQWQsQ0FBb0IsZUFBY3JCLEtBQUssQ0FBQ3NCLE1BQU4sQ0FBYUQsSUFBYixHQUFzQkgsQ0FBQyxDQUFDRyxJQUF4QixDQUErQixNQUEvQixDQUF3Q0UsU0FBMUUsRUFDckJMLENBQUMsQ0FBQ0gsSUFEbUIsQ0FBdEIsQ0FDa0IsK0RBQUcsT0FBTyxDQUFFTCxZQUFaLEVBQTJCUSxDQUFDLENBQUNILElBQTdCLENBSFAsQ0FBZixFQU1ELENBUEQsRUFTQSxNQUNFLDJEQUFDLFlBQUQsTUFDR0MsU0FESCxDQUVFLDBEQUFDLFNBQUQsRUFDRSxHQUFHLENBQUVSLE9BRFAsQ0FFRSxLQUFLLENBQUUsQ0FBRWdCLFNBQVMsV0FBS3BCLFNBQUwsQ0FBWCxDQUZULEVBR0VFLE9BSEYsQ0FGRixDQURGLENBU0QsQ0FyQ0QsQ0F1Q2VtQix1SEFBTyxDQUFDMUIsR0FBRCxDQUF0QixFQUVBLEdBQU0yQixhQUFZLHE5SEFBbEIsQ0FnQkEsR0FBTUMsT0FBTSxndEhBQVosQ0FHQSxHQUFNQyxVQUFTLGsySEFBZixDQU1BLEdBQU1DLFFBQU8sa3BJQUFiIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9uYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9ICBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFtzZXRBY3RpdmUsIHNldEFjdGl2ZVN0YXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc2V0SGVpZ2h0LCBzZXRIZWlnaHRTdGF0ZV0gPSB1c2VTdGF0ZShcIjBweFwiKTtcbiAgY29uc3QgW3NldE1lbnUsIHNldE1lbnVTdGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBzdWJtZW51ID0gdXNlUmVmKG51bGwpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU5hdkJhcigpIHtcbiAgICBzZXRBY3RpdmVTdGF0ZShzZXRBY3RpdmUgPT09IFwiXCIgPyBcImFjdGl2ZVwiIDogXCJcIik7XG4gICAgc2V0SGVpZ2h0U3RhdGUoXG4gICAgICBzZXRBY3RpdmUgPT09IFwiYWN0aXZlXCIgPyBcIjBweFwiIDogYCR7c3VibWVudS5jdXJyZW50LnNjcm9sbEhlaWdodH1weGBcbiAgICApO1xuICAgIHNldE1lbnVTdGF0ZShcbiAgICAgIHN0YXRlLnRoZW1lLm1lbnVbM10ubmFtZVxuICAgICk7XG4gIH1cbiAgXG4gIGNvbnN0IG1lbnVJdGVtcyA9IFtdXG5cbiAgc3RhdGUudGhlbWUubWVudS5tYXAoZSA9PiB7XG4gICAgbWVudUl0ZW1zLnB1c2goPE5hdkl0ZW0ga2V5PXtlLm5hbWV9PlxuICAgICAgey8qIElmIGxpbmsgdXJsIGlzIHRoZSBjdXJyZW50IHBhZ2UsIGFkZCBgYXJpYS1jdXJyZW50YCBmb3IgYTExeSAqL31cbiAgICAgIHsgZS5tZW51Lmxlbmd0aCA9PT0gMCA/IDxMaW5rIGxpbms9e2UubGlua30gYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gZS5saW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICB7ZS5uYW1lfTwvTGluaz4gOiA8cCBvbkNsaWNrPXt0b2dnbGVOYXZCYXJ9PntlLm5hbWV9PC9wPiB9XG4gICAgICBcbiAgICA8L05hdkl0ZW0+KVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHttZW51SXRlbXN9XG4gICAgICA8TmF2Qm90dG9tXG4gICAgICAgIHJlZj17c3VibWVudX1cbiAgICAgICAgc3R5bGU9e3sgbWF4SGVpZ2h0OiBgJHtzZXRIZWlnaHR9YCB9fVxuICAgICAgPntzZXRNZW51fTwvTmF2Qm90dG9tPlxuICAgIDwvTmF2Q29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChOYXYpO1xuXG5jb25zdCBOYXZDb250YWluZXIgPSBzdHlsZWQubmF2YFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODQ4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbmA7XG5cbmNvbnN0IE5hdlRvcCA9IHN0eWxlZC5kaXZgXG5gO1xuXG5jb25zdCBOYXZCb3R0b20gPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGVhc2U7XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGNvbG9yOiAjMDUwNDAxO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmbGV4LXNocmluazogMDtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiBibGFjaztcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmVkO1xuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})