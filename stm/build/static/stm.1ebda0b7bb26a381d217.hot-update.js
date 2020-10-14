webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var mediaHandler={name:\"media\",priority:10,pattern:\"media\",func:function(){var _func=_asyncToGenerator(function*(_ref){var{route,state,libraries}=_ref;var{api}=libraries.source;// 1. fetch the data you want from the endpoint page\nvar response=yield api.get({endpoint:\"media\"});// 2. get an array with each item in json format\nvar items=yield response.json();// 3. add data to source\nvar currentPageData=state.source.data[route];Object.assign(currentPageData,{items});});function func(_x){return _func.apply(this,arguments);}return func;}()};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\n     *  In Frontity, any package can add React components to the site.\n     *  We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{beforeSSR:(_ref2)=>{var{actions}=_ref2;return/*#__PURE__*/_asyncToGenerator(function*(){yield actions.source.fetch(\"media\");});},toggleMobileMenu:(_ref4)=>{var{state}=_ref4;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref5)=>{var{state}=_ref5;state.theme.isMobileMenuOpen=false;}}},libraries:{html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * inside the content HTML. You can add your own processors too\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]]},source:{handlers:[mediaHandler]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbIm1lZGlhSGFuZGxlciIsIm5hbWUiLCJwcmlvcml0eSIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJzdGF0ZSIsImxpYnJhcmllcyIsImFwaSIsInNvdXJjZSIsInJlc3BvbnNlIiwiZ2V0IiwiZW5kcG9pbnQiLCJpdGVtcyIsImpzb24iLCJjdXJyZW50UGFnZURhdGEiLCJkYXRhIiwiT2JqZWN0IiwiYXNzaWduIiwibWFyc1RoZW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwibWVudSIsImlzTW9iaWxlTWVudU9wZW4iLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsImJlZm9yZVNTUiIsImZldGNoIiwidG9nZ2xlTW9iaWxlTWVudSIsImNsb3NlTW9iaWxlTWVudSIsImh0bWwycmVhY3QiLCJwcm9jZXNzb3JzIiwiaW1hZ2UiLCJpZnJhbWUiLCJoYW5kbGVycyJdLCJtYXBwaW5ncyI6Ijs7Oztta0JBSUEsR0FBTUEsYUFBWSxDQUFHLENBQ25CQyxJQUFJLENBQUUsT0FEYSxDQUVuQkMsUUFBUSxDQUFFLEVBRlMsQ0FHbkJDLE9BQU8sQ0FBRSxPQUhVLENBSW5CQyxJQUFJLHdDQUFFLGVBQXVDLElBQWhDLENBQUVDLEtBQUYsQ0FBU0MsS0FBVCxDQUFnQkMsU0FBaEIsQ0FBZ0MsTUFDM0MsR0FBTSxDQUFFQyxHQUFGLEVBQVVELFNBQVMsQ0FBQ0UsTUFBMUIsQ0FFQTtBQUNBLEdBQU1DLFNBQVEsTUFBU0YsSUFBRyxDQUFDRyxHQUFKLENBQVEsQ0FDN0JDLFFBQVEsQ0FBRSxPQURtQixDQUFSLENBQXZCLENBSUE7QUFDQSxHQUFNQyxNQUFLLE1BQVNILFNBQVEsQ0FBQ0ksSUFBVCxFQUFwQixDQUVBO0FBQ0EsR0FBTUMsZ0JBQWUsQ0FBR1QsS0FBSyxDQUFDRyxNQUFOLENBQWFPLElBQWIsQ0FBa0JYLEtBQWxCLENBQXhCLENBRUFZLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSCxlQUFkLENBQStCLENBQzdCRixLQUQ2QixDQUEvQixFQUdELENBakJHLHVFQUplLENBQXJCLENBd0JBLEdBQU1NLFVBQVMsQ0FBRyxDQUNoQmxCLElBQUksQ0FBRSxzQkFEVSxDQUVoQm1CLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0lDLEtBQUssQ0FBRUMsbURBTEYsQ0FGUyxDQVNoQmhCLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0llLEtBQUssQ0FBRSxDQUNMRSxJQUFJLENBQUUsRUFERCxDQUVMQyxnQkFBZ0IsQ0FBRSxLQUZiLENBR0xDLFFBQVEsQ0FBRSxDQUNSQyxVQUFVLENBQUUsS0FESixDQUVSQyxVQUFVLENBQUUsS0FGSixDQUhMLENBTEYsQ0FUUyxDQXVCaEI7QUFDRjtBQUNBO0FBQ0EsS0FDRUMsT0FBTyxDQUFFLENBQ1BQLEtBQUssQ0FBRSxDQUNMUSxTQUFTLENBQUUsYUFBQyxDQUFFRCxPQUFGLENBQUQsNENBQWlCLFdBQVksQ0FDdEMsS0FBTUEsUUFBTyxDQUFDbkIsTUFBUixDQUFlcUIsS0FBZixDQUFxQixPQUFyQixDQUFOLENBQ0QsQ0FGVSxHQUROLENBSUxDLGdCQUFnQixDQUFFLFNBQWUsSUFBZCxDQUFFekIsS0FBRixDQUFjLE9BQy9CQSxLQUFLLENBQUNlLEtBQU4sQ0FBWUcsZ0JBQVosQ0FBK0IsQ0FBQ2xCLEtBQUssQ0FBQ2UsS0FBTixDQUFZRyxnQkFBNUMsQ0FDRCxDQU5JLENBT0xRLGVBQWUsQ0FBRSxTQUFlLElBQWQsQ0FBRTFCLEtBQUYsQ0FBYyxPQUM5QkEsS0FBSyxDQUFDZSxLQUFOLENBQVlHLGdCQUFaLENBQStCLEtBQS9CLENBQ0QsQ0FUSSxDQURBLENBM0JPLENBd0NoQmpCLFNBQVMsQ0FBRSxDQUNUMEIsVUFBVSxDQUFFLENBQ1Y7QUFDTjtBQUNBO0FBQ0EsU0FDTUMsVUFBVSxDQUFFLENBQUNDLDZFQUFELENBQVFDLDhFQUFSLENBTEYsQ0FESCxDQVFUM0IsTUFBTSxDQUFFLENBQ040QixRQUFRLENBQUUsQ0FBQ3JDLFlBQUQsQ0FESixDQVJDLENBeENLLENBQWxCLENBc0RlbUIsd0VBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaW1hZ2VcIjtcbmltcG9ydCBpZnJhbWUgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaWZyYW1lXCI7XG5cbmNvbnN0IG1lZGlhSGFuZGxlciA9IHtcbiAgbmFtZTogXCJtZWRpYVwiLFxuICBwcmlvcml0eTogMTAsXG4gIHBhdHRlcm46IFwibWVkaWFcIixcbiAgZnVuYzogYXN5bmMgKHsgcm91dGUsIHN0YXRlLCBsaWJyYXJpZXMgfSkgPT4ge1xuICAgIGNvbnN0IHsgYXBpIH0gPSBsaWJyYXJpZXMuc291cmNlO1xuXG4gICAgLy8gMS4gZmV0Y2ggdGhlIGRhdGEgeW91IHdhbnQgZnJvbSB0aGUgZW5kcG9pbnQgcGFnZVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCh7XG4gICAgICBlbmRwb2ludDogXCJtZWRpYVwiLFxuICAgIH0pO1xuXG4gICAgLy8gMi4gZ2V0IGFuIGFycmF5IHdpdGggZWFjaCBpdGVtIGluIGpzb24gZm9ybWF0XG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcbiAgICBjb25zdCBjdXJyZW50UGFnZURhdGEgPSBzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV07XG5cbiAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xuICAgICAgaXRlbXMsXG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IG1hcnNUaGVtZSA9IHtcbiAgbmFtZTogXCJAZnJvbnRpdHkvbWFycy10aGVtZVwiLFxuICByb290czoge1xuICAgIC8qKlxuICAgICAqICBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxuICAgICAqICBXZSB1c2Ugcm9vdHMgZm9yIHRoYXQsIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IFRoZW1lLFxuICB9LFxuICBzdGF0ZToge1xuICAgIC8qKlxuICAgICAqIFN0YXRlIGlzIHdoZXJlIHRoZSBwYWNrYWdlcyBzdG9yZSB0aGVpciBkZWZhdWx0IHNldHRpbmdzIGFuZCBvdGhlclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiB7XG4gICAgICBtZW51OiBbXSxcbiAgICAgIGlzTW9iaWxlTWVudU9wZW46IGZhbHNlLFxuICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgc2hvd09uTGlzdDogZmFsc2UsXG4gICAgICAgIHNob3dPblBvc3Q6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICAvKipcbiAgICogQWN0aW9ucyBhcmUgZnVuY3Rpb25zIHRoYXQgbW9kaWZ5IHRoZSBzdGF0ZSBvciBkZWFsIHdpdGggb3RoZXIgcGFydHMgb2ZcbiAgICogRnJvbnRpdHkgbGlrZSBsaWJyYXJpZXMuXG4gICAqL1xuICBhY3Rpb25zOiB7XG4gICAgdGhlbWU6IHtcbiAgICAgIGJlZm9yZVNTUjogKHsgYWN0aW9ucyB9KSA9PiBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IGFjdGlvbnMuc291cmNlLmZldGNoKFwibWVkaWFcIik7XG4gICAgICB9LFxuICAgICAgdG9nZ2xlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gIXN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW47XG4gICAgICB9LFxuICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlicmFyaWVzOiB7XG4gICAgaHRtbDJyZWFjdDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXG4gICAgICAgKiBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC4gWW91IGNhbiBhZGQgeW91ciBvd24gcHJvY2Vzc29ycyB0b29cbiAgICAgICAqL1xuICAgICAgcHJvY2Vzc29yczogW2ltYWdlLCBpZnJhbWVdLFxuICAgIH0sXG4gICAgc291cmNlOiB7XG4gICAgICBoYW5kbGVyczogW21lZGlhSGFuZGxlcl1cbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFyc1RoZW1lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})