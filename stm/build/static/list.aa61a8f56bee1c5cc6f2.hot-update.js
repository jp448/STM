webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./packages/mars-theme/src/components/list/pagination.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);function parseURLParams(link){var paramsMap={};var urlParams=link.split('?').filter(i=>i.includes('='));if(urlParams.length>0){var urlParamsSeperate=urlParams[0].split('&');urlParamsSeperate.forEach(e=>{var pair=e.split('=');if(pair.length>1){paramsMap[pair[0]]=pair[1];}});}return paramsMap;}var urlParams=parseURLParams(state.router.link);console.log(urlParams['type']);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Container,null,data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"1oapuk3\",styles:\"width:800px;margin:0;padding:24px;list-style:none;display:grid;grid-template-columns:1fr 1fr;grid-gap:16px;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbURnQyIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGZ1bmN0aW9uIHBhcnNlVVJMUGFyYW1zKGxpbmspIHtcbiAgICBsZXQgcGFyYW1zTWFwID0ge307XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbGluay5zcGxpdCgnPycpLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSk7XG4gICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1cmxQYXJhbXNTZXBlcmF0ZSA9IHVybFBhcmFtc1swXS5zcGxpdCgnJicpO1xuICAgICAgdXJsUGFyYW1zU2VwZXJhdGUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBlLnNwbGl0KCc9Jyk7XG4gICAgICAgIGlmIChwYWlyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwYXJhbXNNYXBbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtc01hcDtcbiAgfVxuXG4gIGNvbnN0IHVybFBhcmFtcyA9IHBhcnNlVVJMUGFyYW1zKHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc29sZS5sb2codXJsUGFyYW1zWyd0eXBlJ10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBmb3IgYSBzcGVjaWZpYyBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICBBdXRob3I6IDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cblxuICAgICAgey8qIEl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgb2YgdGhlIGxpc3QuICovfVxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFBhZ2luYXRpb24gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTZweDtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\",{target:\"exiu6z11\",label:\"Header\"})( false?undefined:{name:\"p2cv\",styles:\"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2NlbHlucHJvY3Rvci9jb2RlL2pwNDQ4L1NUTS9zdG0vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkR3QiIsImZpbGUiOiIvVXNlcnMvam9jZWx5bnByb2N0b3IvY29kZS9qcDQ0OC9TVE0vc3RtL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIGZ1bmN0aW9uIHBhcnNlVVJMUGFyYW1zKGxpbmspIHtcbiAgICBsZXQgcGFyYW1zTWFwID0ge307XG4gICAgY29uc3QgdXJsUGFyYW1zID0gbGluay5zcGxpdCgnPycpLmZpbHRlcihpID0+IGkuaW5jbHVkZXMoJz0nKSk7XG4gICAgaWYgKHVybFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB1cmxQYXJhbXNTZXBlcmF0ZSA9IHVybFBhcmFtc1swXS5zcGxpdCgnJicpO1xuICAgICAgdXJsUGFyYW1zU2VwZXJhdGUuZm9yRWFjaChlID0+IHtcbiAgICAgICAgbGV0IHBhaXIgPSBlLnNwbGl0KCc9Jyk7XG4gICAgICAgIGlmIChwYWlyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwYXJhbXNNYXBbcGFpclswXV0gPSBwYWlyWzFdO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtc01hcDtcbiAgfVxuXG4gIGNvbnN0IHVybFBhcmFtcyA9IHBhcnNlVVJMUGFyYW1zKHN0YXRlLnJvdXRlci5saW5rKTtcbiAgY29uc29sZS5sb2codXJsUGFyYW1zWyd0eXBlJ10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG5cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBmb3IgYSBzcGVjaWZpYyBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICBBdXRob3I6IDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgKX1cblxuICAgICAgey8qIEl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgb2YgdGhlIGxpc3QuICovfVxuICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgIH0pfVxuICAgICAgPFBhZ2luYXRpb24gLz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTGlzdCk7XG5cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjRweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTZweDtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwicGFyc2VVUkxQYXJhbXMiLCJwYXJhbXNNYXAiLCJ1cmxQYXJhbXMiLCJzcGxpdCIsImZpbHRlciIsImkiLCJpbmNsdWRlcyIsImxlbmd0aCIsInVybFBhcmFtc1NlcGVyYXRlIiwiZm9yRWFjaCIsImUiLCJwYWlyIiwiY29uc29sZSIsImxvZyIsImlzQXV0aG9yIiwiZGVjb2RlIiwiYXV0aG9yIiwiaWQiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJ0eXBlIiwiaXRlbSIsImNvbm5lY3QiLCJDb250YWluZXIiLCJIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztxUkFLQSxHQUFNQSxLQUFJLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMxQjtBQUNBLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsUUFBU0MsZUFBVCxDQUF3QkQsSUFBeEIsQ0FBOEIsQ0FDNUIsR0FBSUUsVUFBUyxDQUFHLEVBQWhCLENBQ0EsR0FBTUMsVUFBUyxDQUFHSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxNQUFoQixDQUF1QkMsQ0FBQyxFQUFJQSxDQUFDLENBQUNDLFFBQUYsQ0FBVyxHQUFYLENBQTVCLENBQWxCLENBQ0EsR0FBSUosU0FBUyxDQUFDSyxNQUFWLENBQW1CLENBQXZCLENBQTBCLENBQ3hCLEdBQU1DLGtCQUFpQixDQUFHTixTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFDLEtBQWIsQ0FBbUIsR0FBbkIsQ0FBMUIsQ0FDQUssaUJBQWlCLENBQUNDLE9BQWxCLENBQTBCQyxDQUFDLEVBQUksQ0FDN0IsR0FBSUMsS0FBSSxDQUFHRCxDQUFDLENBQUNQLEtBQUYsQ0FBUSxHQUFSLENBQVgsQ0FDQSxHQUFJUSxJQUFJLENBQUNKLE1BQUwsQ0FBYyxDQUFsQixDQUFxQixDQUNuQk4sU0FBUyxDQUFDVSxJQUFJLENBQUMsQ0FBRCxDQUFMLENBQVQsQ0FBcUJBLElBQUksQ0FBQyxDQUFELENBQXpCLENBQ0QsQ0FDRixDQUxELEVBTUQsQ0FDRCxNQUFPVixVQUFQLENBQ0QsQ0FFRCxHQUFNQyxVQUFTLENBQUdGLGNBQWMsQ0FBQ04sS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWQsQ0FBaEMsQ0FDQWEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLFNBQVMsQ0FBQyxNQUFELENBQXJCLEVBRUEsTUFDRSwyREFBQyxTQUFELE1BSUdQLElBQUksQ0FBQ21CLFFBQUwsRUFDQywwREFBQyxNQUFELGlCQUNVLG1FQUFJQyx1REFBTSxDQUFDckIsS0FBSyxDQUFDRSxNQUFOLENBQWFvQixNQUFiLENBQW9CckIsSUFBSSxDQUFDc0IsRUFBekIsRUFBNkJDLElBQTlCLENBQVYsQ0FEVixDQUxKLENBV0d2QixJQUFJLENBQUN3QixLQUFMLENBQVdDLEdBQVgsQ0FBZSxTQUFrQixJQUFqQixDQUFFQyxJQUFGLENBQVFKLEVBQVIsQ0FBaUIsT0FDaEMsR0FBTUssS0FBSSxDQUFHNUIsS0FBSyxDQUFDRSxNQUFOLENBQWF5QixJQUFiLEVBQW1CSixFQUFuQixDQUFiLENBQ0E7QUFDQSxNQUFPLDJEQUFDLGtEQUFELEVBQU0sR0FBRyxDQUFFSyxJQUFJLENBQUNMLEVBQWhCLENBQW9CLElBQUksQ0FBRUssSUFBMUIsRUFBUCxDQUNELENBSkEsQ0FYSCxDQWdCRSwwREFBQyxtREFBRCxNQWhCRixDQURGLENBb0JELENBMUNELENBNENlQyx1SEFBTyxDQUFDOUIsSUFBRCxDQUF0QixFQUVBLEdBQU0rQixVQUFTLDhnR0FBZixDQVVBLEdBQU1DLE9BQU0sMjlGQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgZnVuY3Rpb24gcGFyc2VVUkxQYXJhbXMobGluaykge1xuICAgIGxldCBwYXJhbXNNYXAgPSB7fTtcbiAgICBjb25zdCB1cmxQYXJhbXMgPSBsaW5rLnNwbGl0KCc/JykuZmlsdGVyKGkgPT4gaS5pbmNsdWRlcygnPScpKTtcbiAgICBpZiAodXJsUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHVybFBhcmFtc1NlcGVyYXRlID0gdXJsUGFyYW1zWzBdLnNwbGl0KCcmJyk7XG4gICAgICB1cmxQYXJhbXNTZXBlcmF0ZS5mb3JFYWNoKGUgPT4ge1xuICAgICAgICBsZXQgcGFpciA9IGUuc3BsaXQoJz0nKTtcbiAgICAgICAgaWYgKHBhaXIubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHBhcmFtc01hcFtwYWlyWzBdXSA9IHBhaXJbMV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zTWFwO1xuICB9XG5cbiAgY29uc3QgdXJsUGFyYW1zID0gcGFyc2VVUkxQYXJhbXMoc3RhdGUucm91dGVyLmxpbmspO1xuICBjb25zb2xlLmxvZyh1cmxQYXJhbXNbJ3R5cGUnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGEgdGF4b25vbXksIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cblxuICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgPC9IZWFkZXI+XG4gICAgICApfVxuXG4gICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgfSl9XG4gICAgICA8UGFnaW5hdGlvbiAvPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxNnB4O1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})