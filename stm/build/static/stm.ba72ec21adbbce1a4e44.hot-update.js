webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/Accordion.css":
/*!******************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/Accordion.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/* Style the accordion section */\\n.accordion__section {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n/* Style the buttons that are used to open and close the accordion panel */\\n.accordion {\\n  background-color: #eee;\\n  color: #444;\\n  cursor: pointer;\\n  padding: 18px;\\n  display: flex;\\n  align-items: center;\\n  border: none;\\n  outline: none;\\n  transition: background-color 0.6s ease;\\n}\\n\\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\\n.accordion:hover,\\n.active {\\n  background-color: #ccc;\\n}\\n\\n/* Style the accordion content title */\\n.accordion__title {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-weight: 600;\\n  font-size: 14px;\\n}\\n\\n/* Style the accordion chevron icon */\\n.accordion__icon {\\n  margin-left: auto;\\n  transition: transform 0.6s ease;\\n}\\n\\n/* Style to rotate icon when state is active */\\n.rotate {\\n  transform: rotate(90deg);\\n}\\n\\n/* Style the accordion content panel. Note: hidden by default */\\n.accordion__content {\\n  background-color: white;\\n  overflow: hidden;\\n  transition: max-height 0.6s ease;\\n}\\n\\n/* Style the accordion content text */\\n.accordion__text {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 14px;\\n  padding: 18px;\\n}\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvQWNjb3JkaW9uLmNzcz85MzY3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsd0hBQXlELGtCQUFrQiwyQkFBMkIsR0FBRyw2RkFBNkYsMkJBQTJCLGdCQUFnQixvQkFBb0Isa0JBQWtCLGtCQUFrQix3QkFBd0IsaUJBQWlCLGtCQUFrQiwyQ0FBMkMsR0FBRyw2S0FBNkssMkJBQTJCLEdBQUcsZ0VBQWdFLDJDQUEyQyxxQkFBcUIsb0JBQW9CLEdBQUcsOERBQThELHNCQUFzQixvQ0FBb0MsR0FBRyw4REFBOEQsNkJBQTZCLEdBQUcsMkZBQTJGLDRCQUE0QixxQkFBcUIscUNBQXFDLEdBQUcsOERBQThELDJDQUEyQyxxQkFBcUIsb0JBQW9CLGtCQUFrQixHQUFHLEMiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvQWNjb3JkaW9uLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLyogU3R5bGUgdGhlIGFjY29yZGlvbiBzZWN0aW9uICovXFxuLmFjY29yZGlvbl9fc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgdGhhdCBhcmUgdXNlZCB0byBvcGVuIGFuZCBjbG9zZSB0aGUgYWNjb3JkaW9uIHBhbmVsICovXFxuLmFjY29yZGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgY29sb3I6ICM0NDQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwYWRkaW5nOiAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjZzIGVhc2U7XFxufVxcblxcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIGJ1dHRvbiBpZiBpdCBpcyBjbGlja2VkIG9uIChhZGQgdGhlIC5hY3RpdmUgY2xhc3Mgd2l0aCBKUyksIGFuZCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIGl0IChob3ZlcikgKi9cXG4uYWNjb3JkaW9uOmhvdmVyLFxcbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLyogU3R5bGUgdGhlIGFjY29yZGlvbiBjb250ZW50IHRpdGxlICovXFxuLmFjY29yZGlvbl9fdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGFjY29yZGlvbiBjaGV2cm9uIGljb24gKi9cXG4uYWNjb3JkaW9uX19pY29uIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnMgZWFzZTtcXG59XFxuXFxuLyogU3R5bGUgdG8gcm90YXRlIGljb24gd2hlbiBzdGF0ZSBpcyBhY3RpdmUgKi9cXG4ucm90YXRlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGFjY29yZGlvbiBjb250ZW50IHBhbmVsLiBOb3RlOiBoaWRkZW4gYnkgZGVmYXVsdCAqL1xcbi5hY2NvcmRpb25fX2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjZzIGVhc2U7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBhY2NvcmRpb24gY29udGVudCB0ZXh0ICovXFxuLmFjY29yZGlvbl9fdGV4dCB7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMThweDtcXG59XCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/Accordion.css\n");

/***/ })

})