webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/utility/windowhook.js":
/*!******************************************************************!*\
  !*** ./packages/mars-theme/src/components/utility/windowhook.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useWindowDimensions; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction getWindowDimensions(){var{innerWidth:width,innerHeight:height}=window;return{width,height};}function useWindowDimensions(){var[windowDimensions,setWindowDimensions]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(getWindowDimensions());Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{function handleResize(){setWindowDimensions(getWindowDimensions());}window.addEventListener(\"resize\",handleResize);return()=>window.removeEventListener(\"resize\",handleResize);},[]);return windowDimensions;}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3V0aWxpdHkvd2luZG93aG9vay5qcz80ZTRiIl0sIm5hbWVzIjpbImdldFdpbmRvd0RpbWVuc2lvbnMiLCJpbm5lcldpZHRoIiwid2lkdGgiLCJpbm5lckhlaWdodCIsImhlaWdodCIsIndpbmRvdyIsInVzZVdpbmRvd0RpbWVuc2lvbnMiLCJ3aW5kb3dEaW1lbnNpb25zIiwic2V0V2luZG93RGltZW5zaW9ucyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsUUFBU0Esb0JBQVQsRUFBK0IsQ0FDN0IsR0FBTSxDQUFFQyxVQUFVLENBQUVDLEtBQWQsQ0FBcUJDLFdBQVcsQ0FBRUMsTUFBbEMsRUFBNkNDLE1BQW5ELENBQ0EsTUFBTyxDQUNMSCxLQURLLENBRUxFLE1BRkssQ0FBUCxDQUlELENBRWMsUUFBU0Usb0JBQVQsRUFBK0IsQ0FDNUMsR0FBTSxDQUFDQyxnQkFBRCxDQUFtQkMsbUJBQW5CLEVBQTBDQyxzREFBUSxDQUN0RFQsbUJBQW1CLEVBRG1DLENBQXhELENBSUFVLHVEQUFTLENBQUMsSUFBTSxDQUNkLFFBQVNDLGFBQVQsRUFBd0IsQ0FDdEJILG1CQUFtQixDQUFDUixtQkFBbUIsRUFBcEIsQ0FBbkIsQ0FDRCxDQUVESyxNQUFNLENBQUNPLGdCQUFQLENBQXdCLFFBQXhCLENBQWtDRCxZQUFsQyxFQUNBLE1BQU8sSUFBTU4sTUFBTSxDQUFDUSxtQkFBUCxDQUEyQixRQUEzQixDQUFxQ0YsWUFBckMsQ0FBYixDQUNELENBUFEsQ0FPTixFQVBNLENBQVQsQ0FTQSxNQUFPSixpQkFBUCxDQUNEIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy91dGlsaXR5L3dpbmRvd2hvb2suanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBnZXRXaW5kb3dEaW1lbnNpb25zKCkge1xuICBjb25zdCB7IGlubmVyV2lkdGg6IHdpZHRoLCBpbm5lckhlaWdodDogaGVpZ2h0IH0gPSB3aW5kb3c7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVdpbmRvd0RpbWVuc2lvbnMoKSB7XG4gIGNvbnN0IFt3aW5kb3dEaW1lbnNpb25zLCBzZXRXaW5kb3dEaW1lbnNpb25zXSA9IHVzZVN0YXRlKFxuICAgIGdldFdpbmRvd0RpbWVuc2lvbnMoKVxuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgICAgc2V0V2luZG93RGltZW5zaW9ucyhnZXRXaW5kb3dEaW1lbnNpb25zKCkpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gd2luZG93RGltZW5zaW9ucztcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/utility/windowhook.js\n");

/***/ })

})