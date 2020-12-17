webpackHotUpdate("stm",{

/***/ "./packages/mars-theme/src/components/list/tablesorter.js":
/*!****************************************************************!*\
  !*** ./packages/mars-theme/src/components/list/tablesorter.js ***!
  \****************************************************************/
/*! exports provided: sortItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sortItems\", function() { return sortItems; });\nfunction sortItems(tableitems,header,direction){var getData=item=>{return item!==undefined?item:'99999';};switch(header){case'jahr':if(direction){tableitems.sort((a,b)=>parseInt(getData(a.acf.year))>parseInt(getData(b.acf.year))?1:-1);}else{tableitems.sort((a,b)=>parseInt(getData(a.acf.year))<parseInt(getData(b.acf.year))?1:-1);}break;case'programm':if(direction){tableitems.sort((a,b)=>getData(a.acf.program)>getData(b.acf.program)?1:-1);}else{tableitems.sort((a,b)=>getData(a.acf.program)<getData(b.acf.program)?1:-1);}break;case'ort':if(direction){tableitems.sort((a,b)=>getData(a.acf.location)>getData(b.acf.location)?1:-1);}else{tableitems.sort((a,b)=>getData(a.acf.location)<getData(b.acf.location)?1:-1);}break;case'inhalt':if(direction){tableitems.sort((a,b)=>getData(a.acf.description)>getData(b.acf.description)?1:-1);}else{tableitems.sort((a,b)=>getData(a.acf.description)<getData(b.acf.description)?1:-1);}break;case'wettbewerb':if(direction){tableitems.sort((a,b)=>getData(a.acf.competition)>getData(b.acf.competition)?1:-1);}else{tableitems.sort((a,b)=>getData(a.acf.competition)<getData(b.acf.competition)?1:-1);}break;case'gebaut':if(direction){tableitems.sort((a,b)=>getData(a.acf.built)>getData(b.acf.built)?1:-1);}else{tableitems.sort((a,b)=>getData(a.acf.built)<getData(b.acf.built)?1:-1);}break;case'project':if(direction){tableitems.sort((a,b)=>getData(a.atitle.rendered)>getData(b.title.rendered)?1:-1);}else{tableitems.sort((a,b)=>getData(a.title.rendered)<getData(b.title.rendered)?1:-1);}break;}};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvdGFibGVzb3J0ZXIuanM/MjJjNCJdLCJuYW1lcyI6WyJzb3J0SXRlbXMiLCJ0YWJsZWl0ZW1zIiwiaGVhZGVyIiwiZGlyZWN0aW9uIiwiZ2V0RGF0YSIsIml0ZW0iLCJ1bmRlZmluZWQiLCJzb3J0IiwiYSIsImIiLCJwYXJzZUludCIsImFjZiIsInllYXIiLCJwcm9ncmFtIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsImNvbXBldGl0aW9uIiwiYnVpbHQiLCJhdGl0bGUiLCJyZW5kZXJlZCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sUUFBU0EsVUFBVCxDQUFtQkMsVUFBbkIsQ0FBK0JDLE1BQS9CLENBQXVDQyxTQUF2QyxDQUFrRCxDQUNyRCxHQUFNQyxRQUFPLENBQUlDLElBQUQsRUFBVSxDQUN0QixNQUFPQSxLQUFJLEdBQUtDLFNBQVQsQ0FBcUJELElBQXJCLENBQTRCLE9BQW5DLENBQ0gsQ0FGRCxDQUlGLE9BQVFILE1BQVIsRUFDSSxJQUFLLE1BQUwsQ0FDSSxHQUFJQyxTQUFKLENBQWUsQ0FDYkYsVUFBVSxDQUFDTSxJQUFYLENBQWdCLENBQUNDLENBQUQsQ0FBSUMsQ0FBSixHQUFXQyxRQUFRLENBQUNOLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDRyxHQUFGLENBQU1DLElBQVAsQ0FBUixDQUFSLENBQWdDRixRQUFRLENBQUNOLE9BQU8sQ0FBQ0ssQ0FBQyxDQUFDRSxHQUFGLENBQU1DLElBQVAsQ0FBUixDQUF6QyxDQUFrRSxDQUFsRSxDQUFzRSxDQUFDLENBQWpHLEVBQ0QsQ0FGRCxJQUVPLENBQ0xYLFVBQVUsQ0FBQ00sSUFBWCxDQUFnQixDQUFDQyxDQUFELENBQUlDLENBQUosR0FBV0MsUUFBUSxDQUFDTixPQUFPLENBQUNJLENBQUMsQ0FBQ0csR0FBRixDQUFNQyxJQUFQLENBQVIsQ0FBUixDQUFnQ0YsUUFBUSxDQUFDTixP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QUNYRixVQUFVLENBQUNNLElBQVgsQ0FBZ0IsQ0FBQ0MsQ0FBRCxDQUFJQyxDQUFKLEdBQVdMLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDRyxHQUFGLENBQU1NLEtBQVAsQ0FBUCxDQUF1QmIsT0FBTyxDQUFDSyxDQUFDLENBQUNFLEdBQUYsQ0FBTU0sS0FBUCxDQUEvQixDQUFpRCxDQUFqRCxDQUFxRCxDQUFDLENBQWhGLEVBQ0gsQ0FGRCxJQUVPLENBQ0hoQixVQUFVLENBQUNNLElBQVgsQ0FBZ0IsQ0FBQ0MsQ0FBRCxDQUFJQyxDQUFKLEdBQVdMLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDRyxHQUFGLENBQU1NLEtBQVAsQ0FBUCxDQUF3QmIsT0FBTyxDQUFDSyxDQUFDLENBQUNFLEdBQUYsQ0FBTU0sS0FBUCxDQUFoQyxDQUFrRCxDQUFsRCxDQUFzRCxDQUFDLENBQWpGLEVBQ0gsQ0FDRCxNQUNKLElBQUssU0FBTCxDQUNJLEdBQUlkLFNBQUosQ0FBZSxDQUNYRixVQUFVLENBQUNNLElBQVgsQ0FBZ0IsQ0FBQ0MsQ0FBRCxDQUFJQyxDQUFKLEdBQVdMLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDVSxNQUFGLENBQVNDLFFBQVYsQ0FBUCxDQUE2QmYsT0FBTyxDQUFDSyxDQUFDLENBQUNXLEtBQUYsQ0FBUUQsUUFBVCxDQUFyQyxDQUE0RCxDQUE1RCxDQUFnRSxDQUFDLENBQTNGLEVBQ0gsQ0FGRCxJQUVPLENBQ0hsQixVQUFVLENBQUNNLElBQVgsQ0FBZ0IsQ0FBQ0MsQ0FBRCxDQUFJQyxDQUFKLEdBQVdMLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDWSxLQUFGLENBQVFELFFBQVQsQ0FBUCxDQUE2QmYsT0FBTyxDQUFDSyxDQUFDLENBQUNXLEtBQUYsQ0FBUUQsUUFBVCxDQUFyQyxDQUE0RCxDQUE1RCxDQUFnRSxDQUFDLENBQTNGLEVBQ0gsQ0FDRCxNQWpETixDQW1ERCIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC90YWJsZXNvcnRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzb3J0SXRlbXModGFibGVpdGVtcywgaGVhZGVyLCBkaXJlY3Rpb24pIHtcbiAgICBjb25zdCBnZXREYXRhID0gKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IHVuZGVmaW5lZCA/IGl0ZW0gOiAnOTk5OTknO1xuICAgIH1cblxuICBzd2l0Y2ggKGhlYWRlcikge1xuICAgICAgY2FzZSAnamFocic6XG4gICAgICAgICAgaWYgKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgdGFibGVpdGVtcy5zb3J0KChhLCBiKSA9PiAocGFyc2VJbnQoZ2V0RGF0YShhLmFjZi55ZWFyKSkgPiBwYXJzZUludChnZXREYXRhKGIuYWNmLnllYXIpKSkgPyAxIDogLTEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZWl0ZW1zLnNvcnQoKGEsIGIpID0+IChwYXJzZUludChnZXREYXRhKGEuYWNmLnllYXIpKSA8IHBhcnNlSW50KGdldERhdGEoYi5hY2YueWVhcikpKSA/IDEgOiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncHJvZ3JhbW0nOlxuICAgICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRhYmxlaXRlbXMuc29ydCgoYSwgYikgPT4gKGdldERhdGEoYS5hY2YucHJvZ3JhbSkgPiBnZXREYXRhKGIuYWNmLnByb2dyYW0pICkgPyAxIDogLTEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZWl0ZW1zLnNvcnQoKGEsIGIpID0+IChnZXREYXRhKGEuYWNmLnByb2dyYW0pICA8IGdldERhdGEoYi5hY2YucHJvZ3JhbSkgKSA/IDEgOiAtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29ydCc6XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRhYmxlaXRlbXMuc29ydCgoYSwgYikgPT4gKGdldERhdGEoYS5hY2YubG9jYXRpb24pID4gZ2V0RGF0YShiLmFjZi5sb2NhdGlvbikgKSA/IDEgOiAtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZWl0ZW1zLnNvcnQoKGEsIGIpID0+IChnZXREYXRhKGEuYWNmLmxvY2F0aW9uKSAgPCBnZXREYXRhKGIuYWNmLmxvY2F0aW9uKSApID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBjYXNlICdpbmhhbHQnOlxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0YWJsZWl0ZW1zLnNvcnQoKGEsIGIpID0+IChnZXREYXRhKGEuYWNmLmRlc2NyaXB0aW9uKSA+IGdldERhdGEoYi5hY2YuZGVzY3JpcHRpb24pICkgPyAxIDogLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGVpdGVtcy5zb3J0KChhLCBiKSA9PiAoZ2V0RGF0YShhLmFjZi5kZXNjcmlwdGlvbikgIDwgZ2V0RGF0YShiLmFjZi5kZXNjcmlwdGlvbikgKSA/IDEgOiAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnd2V0dGJld2VyYic6XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRhYmxlaXRlbXMuc29ydCgoYSwgYikgPT4gKGdldERhdGEoYS5hY2YuY29tcGV0aXRpb24pID4gZ2V0RGF0YShiLmFjZi5jb21wZXRpdGlvbikgKSA/IDEgOiAtMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YWJsZWl0ZW1zLnNvcnQoKGEsIGIpID0+IChnZXREYXRhKGEuYWNmLmNvbXBldGl0aW9uKSAgPCBnZXREYXRhKGIuYWNmLmNvbXBldGl0aW9uKSApID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICBjYXNlICdnZWJhdXQnOlxuICAgICAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICB0YWJsZWl0ZW1zLnNvcnQoKGEsIGIpID0+IChnZXREYXRhKGEuYWNmLmJ1aWx0KSA+IGdldERhdGEoYi5hY2YuYnVpbHQpICkgPyAxIDogLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFibGVpdGVtcy5zb3J0KChhLCBiKSA9PiAoZ2V0RGF0YShhLmFjZi5idWlsdCkgIDwgZ2V0RGF0YShiLmFjZi5idWlsdCkgKSA/IDEgOiAtMSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAncHJvamVjdCc6XG4gICAgICAgIGlmIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIHRhYmxlaXRlbXMuc29ydCgoYSwgYikgPT4gKGdldERhdGEoYS5hdGl0bGUucmVuZGVyZWQpID4gZ2V0RGF0YShiLnRpdGxlLnJlbmRlcmVkKSApID8gMSA6IC0xKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhYmxlaXRlbXMuc29ydCgoYSwgYikgPT4gKGdldERhdGEoYS50aXRsZS5yZW5kZXJlZCkgIDwgZ2V0RGF0YShiLnRpdGxlLnJlbmRlcmVkKSApID8gMSA6IC0xKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgfSAgICAgIFxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/tablesorter.js\n");

/***/ })

})