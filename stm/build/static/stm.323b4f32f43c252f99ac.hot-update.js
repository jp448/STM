webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/menu-modal.js":
/*!**********************************************************!*\
  !*** ./packages/mars-theme/src/components/menu-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var MenuModal=(_ref)=>{var{state}=_ref;var[openSubMenu,setOpenSubMenu]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(-1);var _onClick=(event,link)=>{setOpenSubMenu(-1);// Do nothing if it's an external link\nif(link.startsWith(\"http\"))return;event.preventDefault();// Set the router to the new url.\nactions.router.set(link);// Scroll the page to the top\nwindow.scrollTo(0,0);// if the menu modal is open, close it so it doesn't block rendering\nif(state.theme.isMobileMenuOpen){actions.theme.closeMobileMenu();}};function generateSubMenu(id){var submenuItems=[];state.theme.menu[id].menu.map(e=>{submenuItems.push(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuLink,{key:e.name,href:e.link,\"aria-current\":state.router.link===e.link?\"page\":undefined},e.name));});return submenuItems;}var{menu}=state.theme;var isThereLinks=menu!=null&&menu.length>0;var menuList=[];isThereLinks&&menu.map((e,idx)=>{var submenuList=generateSubMenu(idx);openSubMenu===e.id?setOpenSubMenu(-1):setOpenSubMenu(e.id);menuList.push(e.menu.length===0?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuLink,{key:e.name,href:e.link,onClick:event=>_onClick(event,e.link),\"aria-current\":state.router.link===e.link?\"page\":undefined},e.name):Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuLink,{key:e.name,\"arria-current\":\"page\",onClick:()=>toggleNavBar(idx)},e.name),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(NavSub,{style:e.id===openSubMenu?{display:\"inline\"}:{}},submenuList)));});console.log(menuList);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuOverlay,null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(MenuContent,{as:\"nav\"},menuList));};var MenuOverlay=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu0\",label:\"MenuOverlay\"})( false?undefined:{name:\"1imod2o\",styles:\"background-color:#fff;width:100vw;height:100vh;overflow:hidden auto;position:fixed;z-index:2;top:0;left:0;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEOEIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgW29wZW5TdWJNZW51LCBzZXRPcGVuU3ViTWVudV0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgY29uc3Qgb25DbGljayA9IChldmVudCwgbGluaykgPT4ge1xuICAgIHNldE9wZW5TdWJNZW51KC0xKTtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW4gZXh0ZXJuYWwgbGlua1xuICAgIGlmIChsaW5rLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm47XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFNldCB0aGUgcm91dGVyIHRvIHRoZSBuZXcgdXJsLlxuICAgIGFjdGlvbnMucm91dGVyLnNldChsaW5rKTtcblxuICAgIC8vIFNjcm9sbCB0aGUgcGFnZSB0byB0aGUgdG9wXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgLy8gaWYgdGhlIG1lbnUgbW9kYWwgaXMgb3BlbiwgY2xvc2UgaXQgc28gaXQgZG9lc24ndCBibG9jayByZW5kZXJpbmdcbiAgICBpZiAoc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3Blbikge1xuICAgICAgYWN0aW9ucy50aGVtZS5jbG9zZU1vYmlsZU1lbnUoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTdWJNZW51KGlkKSB7XG4gICAgY29uc3Qgc3VibWVudUl0ZW1zID0gW11cbiAgICBzdGF0ZS50aGVtZS5tZW51W2lkXS5tZW51Lm1hcChlID0+IHtcbiAgICAgIHN1Ym1lbnVJdGVtcy5wdXNoKFxuICAgICAgICA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gZS5saW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtlLm5hbWV9PC9NZW51TGluaz4pXG4gICAgfSlcbiAgICByZXR1cm4gc3VibWVudUl0ZW1zO1xuICB9XG5cbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICBsZXQgbWVudUxpc3QgPSBbXTtcbiAgaXNUaGVyZUxpbmtzICYmIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICBjb25zdCBzdWJtZW51TGlzdCA9IGdlbmVyYXRlU3ViTWVudShpZHgpO1xuICAgIG9wZW5TdWJNZW51ID09PSBlLmlkID8gc2V0T3BlblN1Yk1lbnUoLTEpIDogc2V0T3BlblN1Yk1lbnUoZS5pZCk7XG4gICAgbWVudUxpc3QucHVzaChcbiAgICAgIGUubWVudS5sZW5ndGggPT09IDAgPyA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gb25DbGljaz17KGV2ZW50KSA9PiBvbkNsaWNrKGV2ZW50LCBlLmxpbmspfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICB7ZS5uYW1lfTwvTWVudUxpbms+IDogPD48TWVudUxpbmsga2V5PXtlLm5hbWV9IGFycmlhLWN1cnJlbnQ9XCJwYWdlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2QmFyKGlkeCl9PntlLm5hbWV9PC9NZW51TGluaz48TmF2U3ViXG4gICAgICBzdHlsZT17ZS5pZCA9PT0gb3BlblN1Yk1lbnUgPyB7IGRpc3BsYXk6IGBpbmxpbmVgfSA6IHt9fT57c3VibWVudUxpc3R9PC9OYXZTdWI+PC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobWVudUxpc3QpO1xuICAgICAgICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7bWVudUxpc3R9XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBOYXZTdWIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogZ3JheTtcbiAgZGlzcGxheTogbm9uZTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuContent=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu1\",label:\"MenuContent\"})( false?undefined:{name:\"4ma18r\",styles:\"z-index:3;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlFOEIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgW29wZW5TdWJNZW51LCBzZXRPcGVuU3ViTWVudV0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgY29uc3Qgb25DbGljayA9IChldmVudCwgbGluaykgPT4ge1xuICAgIHNldE9wZW5TdWJNZW51KC0xKTtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW4gZXh0ZXJuYWwgbGlua1xuICAgIGlmIChsaW5rLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm47XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFNldCB0aGUgcm91dGVyIHRvIHRoZSBuZXcgdXJsLlxuICAgIGFjdGlvbnMucm91dGVyLnNldChsaW5rKTtcblxuICAgIC8vIFNjcm9sbCB0aGUgcGFnZSB0byB0aGUgdG9wXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgLy8gaWYgdGhlIG1lbnUgbW9kYWwgaXMgb3BlbiwgY2xvc2UgaXQgc28gaXQgZG9lc24ndCBibG9jayByZW5kZXJpbmdcbiAgICBpZiAoc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3Blbikge1xuICAgICAgYWN0aW9ucy50aGVtZS5jbG9zZU1vYmlsZU1lbnUoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTdWJNZW51KGlkKSB7XG4gICAgY29uc3Qgc3VibWVudUl0ZW1zID0gW11cbiAgICBzdGF0ZS50aGVtZS5tZW51W2lkXS5tZW51Lm1hcChlID0+IHtcbiAgICAgIHN1Ym1lbnVJdGVtcy5wdXNoKFxuICAgICAgICA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gZS5saW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtlLm5hbWV9PC9NZW51TGluaz4pXG4gICAgfSlcbiAgICByZXR1cm4gc3VibWVudUl0ZW1zO1xuICB9XG5cbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICBsZXQgbWVudUxpc3QgPSBbXTtcbiAgaXNUaGVyZUxpbmtzICYmIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICBjb25zdCBzdWJtZW51TGlzdCA9IGdlbmVyYXRlU3ViTWVudShpZHgpO1xuICAgIG9wZW5TdWJNZW51ID09PSBlLmlkID8gc2V0T3BlblN1Yk1lbnUoLTEpIDogc2V0T3BlblN1Yk1lbnUoZS5pZCk7XG4gICAgbWVudUxpc3QucHVzaChcbiAgICAgIGUubWVudS5sZW5ndGggPT09IDAgPyA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gb25DbGljaz17KGV2ZW50KSA9PiBvbkNsaWNrKGV2ZW50LCBlLmxpbmspfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICB7ZS5uYW1lfTwvTWVudUxpbms+IDogPD48TWVudUxpbmsga2V5PXtlLm5hbWV9IGFycmlhLWN1cnJlbnQ9XCJwYWdlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2QmFyKGlkeCl9PntlLm5hbWV9PC9NZW51TGluaz48TmF2U3ViXG4gICAgICBzdHlsZT17ZS5pZCA9PT0gb3BlblN1Yk1lbnUgPyB7IGRpc3BsYXk6IGBpbmxpbmVgfSA6IHt9fT57c3VibWVudUxpc3R9PC9OYXZTdWI+PC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobWVudUxpc3QpO1xuICAgICAgICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7bWVudUxpc3R9XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBOYXZTdWIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogZ3JheTtcbiAgZGlzcGxheTogbm9uZTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavSub=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"eqtk5fu2\",label:\"NavSub\"})( false?undefined:{name:\"gwerwi\",styles:\"color:gray;display:none;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFeUIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgW29wZW5TdWJNZW51LCBzZXRPcGVuU3ViTWVudV0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgY29uc3Qgb25DbGljayA9IChldmVudCwgbGluaykgPT4ge1xuICAgIHNldE9wZW5TdWJNZW51KC0xKTtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW4gZXh0ZXJuYWwgbGlua1xuICAgIGlmIChsaW5rLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm47XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFNldCB0aGUgcm91dGVyIHRvIHRoZSBuZXcgdXJsLlxuICAgIGFjdGlvbnMucm91dGVyLnNldChsaW5rKTtcblxuICAgIC8vIFNjcm9sbCB0aGUgcGFnZSB0byB0aGUgdG9wXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgLy8gaWYgdGhlIG1lbnUgbW9kYWwgaXMgb3BlbiwgY2xvc2UgaXQgc28gaXQgZG9lc24ndCBibG9jayByZW5kZXJpbmdcbiAgICBpZiAoc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3Blbikge1xuICAgICAgYWN0aW9ucy50aGVtZS5jbG9zZU1vYmlsZU1lbnUoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTdWJNZW51KGlkKSB7XG4gICAgY29uc3Qgc3VibWVudUl0ZW1zID0gW11cbiAgICBzdGF0ZS50aGVtZS5tZW51W2lkXS5tZW51Lm1hcChlID0+IHtcbiAgICAgIHN1Ym1lbnVJdGVtcy5wdXNoKFxuICAgICAgICA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gZS5saW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtlLm5hbWV9PC9NZW51TGluaz4pXG4gICAgfSlcbiAgICByZXR1cm4gc3VibWVudUl0ZW1zO1xuICB9XG5cbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICBsZXQgbWVudUxpc3QgPSBbXTtcbiAgaXNUaGVyZUxpbmtzICYmIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICBjb25zdCBzdWJtZW51TGlzdCA9IGdlbmVyYXRlU3ViTWVudShpZHgpO1xuICAgIG9wZW5TdWJNZW51ID09PSBlLmlkID8gc2V0T3BlblN1Yk1lbnUoLTEpIDogc2V0T3BlblN1Yk1lbnUoZS5pZCk7XG4gICAgbWVudUxpc3QucHVzaChcbiAgICAgIGUubWVudS5sZW5ndGggPT09IDAgPyA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gb25DbGljaz17KGV2ZW50KSA9PiBvbkNsaWNrKGV2ZW50LCBlLmxpbmspfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICB7ZS5uYW1lfTwvTWVudUxpbms+IDogPD48TWVudUxpbmsga2V5PXtlLm5hbWV9IGFycmlhLWN1cnJlbnQ9XCJwYWdlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2QmFyKGlkeCl9PntlLm5hbWV9PC9NZW51TGluaz48TmF2U3ViXG4gICAgICBzdHlsZT17ZS5pZCA9PT0gb3BlblN1Yk1lbnUgPyB7IGRpc3BsYXk6IGBpbmxpbmVgfSA6IHt9fT57c3VibWVudUxpc3R9PC9OYXZTdWI+PC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobWVudUxpc3QpO1xuICAgICAgICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7bWVudUxpc3R9XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBOYXZTdWIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogZ3JheTtcbiAgZGlzcGxheTogbm9uZTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var MenuLink=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a\",{target:\"eqtk5fu3\",label:\"MenuLink\"})( false?undefined:{name:\"4yjzzx\",styles:\"width:100%;display:inline-block;outline:0;font-size:20px;text-align:center;padding:1.2rem 0;&:hover,&:focus{background-color:rgba(0,0,0,0.05);}&[aria-current=\\\"page\\\"]{color:black;font-weight:bold;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9tZW51LW1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtGeUIiLCJmaWxlIjoiL1VzZXJzL2pvY2VseW5wcm9jdG9yL2NvZGUvanA0NDgvU1RNL3N0bS9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0eWxlZCwgY29ubmVjdCB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBNZW51TW9kYWwgPSAoeyBzdGF0ZSB9KSA9PiB7XG5cbiAgY29uc3QgW29wZW5TdWJNZW51LCBzZXRPcGVuU3ViTWVudV0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgY29uc3Qgb25DbGljayA9IChldmVudCwgbGluaykgPT4ge1xuICAgIHNldE9wZW5TdWJNZW51KC0xKTtcbiAgICAvLyBEbyBub3RoaW5nIGlmIGl0J3MgYW4gZXh0ZXJuYWwgbGlua1xuICAgIGlmIChsaW5rLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm47XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFNldCB0aGUgcm91dGVyIHRvIHRoZSBuZXcgdXJsLlxuICAgIGFjdGlvbnMucm91dGVyLnNldChsaW5rKTtcblxuICAgIC8vIFNjcm9sbCB0aGUgcGFnZSB0byB0aGUgdG9wXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuXG4gICAgLy8gaWYgdGhlIG1lbnUgbW9kYWwgaXMgb3BlbiwgY2xvc2UgaXQgc28gaXQgZG9lc24ndCBibG9jayByZW5kZXJpbmdcbiAgICBpZiAoc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3Blbikge1xuICAgICAgYWN0aW9ucy50aGVtZS5jbG9zZU1vYmlsZU1lbnUoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVTdWJNZW51KGlkKSB7XG4gICAgY29uc3Qgc3VibWVudUl0ZW1zID0gW11cbiAgICBzdGF0ZS50aGVtZS5tZW51W2lkXS5tZW51Lm1hcChlID0+IHtcbiAgICAgIHN1Ym1lbnVJdGVtcy5wdXNoKFxuICAgICAgICA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gYXJpYS1jdXJyZW50PXtzdGF0ZS5yb3V0ZXIubGluayA9PT0gZS5saW5rID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9PlxuICAgICAgICAgIHtlLm5hbWV9PC9NZW51TGluaz4pXG4gICAgfSlcbiAgICByZXR1cm4gc3VibWVudUl0ZW1zO1xuICB9XG5cbiAgY29uc3QgeyBtZW51IH0gPSBzdGF0ZS50aGVtZTtcbiAgY29uc3QgaXNUaGVyZUxpbmtzID0gbWVudSAhPSBudWxsICYmIG1lbnUubGVuZ3RoID4gMDtcblxuICBsZXQgbWVudUxpc3QgPSBbXTtcbiAgaXNUaGVyZUxpbmtzICYmIG1lbnUubWFwKChlLCBpZHgpID0+IHtcbiAgICBjb25zdCBzdWJtZW51TGlzdCA9IGdlbmVyYXRlU3ViTWVudShpZHgpO1xuICAgIG9wZW5TdWJNZW51ID09PSBlLmlkID8gc2V0T3BlblN1Yk1lbnUoLTEpIDogc2V0T3BlblN1Yk1lbnUoZS5pZCk7XG4gICAgbWVudUxpc3QucHVzaChcbiAgICAgIGUubWVudS5sZW5ndGggPT09IDAgPyA8TWVudUxpbmsga2V5PXtlLm5hbWV9IGhyZWY9e2UubGlua30gb25DbGljaz17KGV2ZW50KSA9PiBvbkNsaWNrKGV2ZW50LCBlLmxpbmspfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICB7ZS5uYW1lfTwvTWVudUxpbms+IDogPD48TWVudUxpbmsga2V5PXtlLm5hbWV9IGFycmlhLWN1cnJlbnQ9XCJwYWdlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlTmF2QmFyKGlkeCl9PntlLm5hbWV9PC9NZW51TGluaz48TmF2U3ViXG4gICAgICBzdHlsZT17ZS5pZCA9PT0gb3BlblN1Yk1lbnUgPyB7IGRpc3BsYXk6IGBpbmxpbmVgfSA6IHt9fT57c3VibWVudUxpc3R9PC9OYXZTdWI+PC8+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2cobWVudUxpc3QpO1xuICAgICAgICBcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TWVudU92ZXJsYXkgLz5cbiAgICAgIDxNZW51Q29udGVudCBhcz1cIm5hdlwiPlxuICAgICAgICB7bWVudUxpc3R9XG4gICAgICA8L01lbnVDb250ZW50PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgTWVudU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG5gO1xuXG5jb25zdCBNZW51Q29udGVudCA9IHN0eWxlZC5kaXZgXG4gIHotaW5kZXg6IDM7XG5gO1xuXG5jb25zdCBOYXZTdWIgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogZ3JheTtcbiAgZGlzcGxheTogbm9uZTtcbmA7XG5cbmNvbnN0IE1lbnVMaW5rID0gc3R5bGVkLmFgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxLjJyZW0gMDtcblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB9XG4gIC8qIHN0eWxlcyBmb3IgYWN0aXZlIGxpbmsgKi9cbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgLyogYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGJsYWNrOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1lbnVNb2RhbCk7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MenuModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL21lbnUtbW9kYWwuanM/ZTNlOSJdLCJuYW1lcyI6WyJNZW51TW9kYWwiLCJzdGF0ZSIsIm9wZW5TdWJNZW51Iiwic2V0T3BlblN1Yk1lbnUiLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJldmVudCIsImxpbmsiLCJzdGFydHNXaXRoIiwicHJldmVudERlZmF1bHQiLCJhY3Rpb25zIiwicm91dGVyIiwic2V0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJ0aGVtZSIsImlzTW9iaWxlTWVudU9wZW4iLCJjbG9zZU1vYmlsZU1lbnUiLCJnZW5lcmF0ZVN1Yk1lbnUiLCJpZCIsInN1Ym1lbnVJdGVtcyIsIm1lbnUiLCJtYXAiLCJlIiwicHVzaCIsIm5hbWUiLCJ1bmRlZmluZWQiLCJpc1RoZXJlTGlua3MiLCJsZW5ndGgiLCJtZW51TGlzdCIsImlkeCIsInN1Ym1lbnVMaXN0IiwidG9nZ2xlTmF2QmFyIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJNZW51T3ZlcmxheSIsIk1lbnVDb250ZW50IiwiTmF2U3ViIiwiTWVudUxpbmsiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O3FSQUdBLEdBQU1BLFVBQVMsQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BRS9CLEdBQU0sQ0FBQ0MsV0FBRCxDQUFjQyxjQUFkLEVBQWdDQyxzREFBUSxDQUFDLENBQUMsQ0FBRixDQUE5QyxDQUVBLEdBQU1DLFNBQU8sQ0FBRyxDQUFDQyxLQUFELENBQVFDLElBQVIsR0FBaUIsQ0FDL0JKLGNBQWMsQ0FBQyxDQUFDLENBQUYsQ0FBZCxDQUNBO0FBQ0EsR0FBSUksSUFBSSxDQUFDQyxVQUFMLENBQWdCLE1BQWhCLENBQUosQ0FBNkIsT0FFN0JGLEtBQUssQ0FBQ0csY0FBTixHQUNBO0FBQ0FDLE9BQU8sQ0FBQ0MsTUFBUixDQUFlQyxHQUFmLENBQW1CTCxJQUFuQixFQUVBO0FBQ0FN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eEMsU0FBRCxDQUF0QiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbWVudS1tb2RhbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0IH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmNvbnN0IE1lbnVNb2RhbCA9ICh7IHN0YXRlIH0pID0+IHtcblxuICBjb25zdCBbb3BlblN1Yk1lbnUsIHNldE9wZW5TdWJNZW51XSA9IHVzZVN0YXRlKC0xKTtcblxuICBjb25zdCBvbkNsaWNrID0gKGV2ZW50LCBsaW5rKSA9PiB7XG4gICAgc2V0T3BlblN1Yk1lbnUoLTEpO1xuICAgIC8vIERvIG5vdGhpbmcgaWYgaXQncyBhbiBleHRlcm5hbCBsaW5rXG4gICAgaWYgKGxpbmsuc3RhcnRzV2l0aChcImh0dHBcIikpIHJldHVybjtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gU2V0IHRoZSByb3V0ZXIgdG8gdGhlIG5ldyB1cmwuXG4gICAgYWN0aW9ucy5yb3V0ZXIuc2V0KGxpbmspO1xuXG4gICAgLy8gU2Nyb2xsIHRoZSBwYWdlIHRvIHRoZSB0b3BcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cbiAgICAvLyBpZiB0aGUgbWVudSBtb2RhbCBpcyBvcGVuLCBjbG9zZSBpdCBzbyBpdCBkb2Vzbid0IGJsb2NrIHJlbmRlcmluZ1xuICAgIGlmIChzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuKSB7XG4gICAgICBhY3Rpb25zLnRoZW1lLmNsb3NlTW9iaWxlTWVudSgpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBnZW5lcmF0ZVN1Yk1lbnUoaWQpIHtcbiAgICBjb25zdCBzdWJtZW51SXRlbXMgPSBbXVxuICAgIHN0YXRlLnRoZW1lLm1lbnVbaWRdLm1lbnUubWFwKGUgPT4ge1xuICAgICAgc3VibWVudUl0ZW1zLnB1c2goXG4gICAgICAgIDxNZW51TGluayBrZXk9e2UubmFtZX0gaHJlZj17ZS5saW5rfSBhcmlhLWN1cnJlbnQ9e3N0YXRlLnJvdXRlci5saW5rID09PSBlLmxpbmsgPyBcInBhZ2VcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAge2UubmFtZX08L01lbnVMaW5rPilcbiAgICB9KVxuICAgIHJldHVybiBzdWJtZW51SXRlbXM7XG4gIH1cblxuICBjb25zdCB7IG1lbnUgfSA9IHN0YXRlLnRoZW1lO1xuICBjb25zdCBpc1RoZXJlTGlua3MgPSBtZW51ICE9IG51bGwgJiYgbWVudS5sZW5ndGggPiAwO1xuXG4gIGxldCBtZW51TGlzdCA9IFtdO1xuICBpc1RoZXJlTGlua3MgJiYgbWVudS5tYXAoKGUsIGlkeCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1lbnVMaXN0ID0gZ2VuZXJhdGVTdWJNZW51KGlkeCk7XG4gICAgb3BlblN1Yk1lbnUgPT09IGUuaWQgPyBzZXRPcGVuU3ViTWVudSgtMSkgOiBzZXRPcGVuU3ViTWVudShlLmlkKTtcbiAgICBtZW51TGlzdC5wdXNoKFxuICAgICAgZS5tZW51Lmxlbmd0aCA9PT0gMCA/IDxNZW51TGluayBrZXk9e2UubmFtZX0gaHJlZj17ZS5saW5rfSBvbkNsaWNrPXsoZXZlbnQpID0+IG9uQ2xpY2soZXZlbnQsIGUubGluayl9IGFyaWEtY3VycmVudD17c3RhdGUucm91dGVyLmxpbmsgPT09IGUubGluayA/IFwicGFnZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgIHtlLm5hbWV9PC9NZW51TGluaz4gOiA8PjxNZW51TGluayBrZXk9e2UubmFtZX0gYXJyaWEtY3VycmVudD1cInBhZ2VcIiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVOYXZCYXIoaWR4KX0+e2UubmFtZX08L01lbnVMaW5rPjxOYXZTdWJcbiAgICAgIHN0eWxlPXtlLmlkID09PSBvcGVuU3ViTWVudSA/IHsgZGlzcGxheTogYGlubGluZWB9IDoge319PntzdWJtZW51TGlzdH08L05hdlN1Yj48Lz5cbiAgICApO1xuICB9KTtcblxuICBjb25zb2xlLmxvZyhtZW51TGlzdCk7XG4gICAgICAgIFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxNZW51T3ZlcmxheSAvPlxuICAgICAgPE1lbnVDb250ZW50IGFzPVwibmF2XCI+XG4gICAgICAgIHttZW51TGlzdH1cbiAgICAgIDwvTWVudUNvbnRlbnQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBNZW51T3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbmA7XG5cbmNvbnN0IE1lbnVDb250ZW50ID0gc3R5bGVkLmRpdmBcbiAgei1pbmRleDogMztcbmA7XG5cbmNvbnN0IE5hdlN1YiA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiBncmF5O1xuICBkaXNwbGF5OiBub25lO1xuYDtcblxuY29uc3QgTWVudUxpbmsgPSBzdHlsZWQuYWBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuMnJlbSAwO1xuXG4gICY6aG92ZXIsXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIH1cbiAgLyogc3R5bGVzIGZvciBhY3RpdmUgbGluayAqL1xuICAmW2FyaWEtY3VycmVudD1cInBhZ2VcIl0ge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvKiBib3JkZXItYm90dG9tOiA0cHggc29saWQgYmxhY2s7ICovXG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWVudU1vZGFsKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/menu-modal.js\n");

/***/ })

})