require("source-map-support").install(),function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}__webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{enumerable:!0,get:getter})},__webpack_require__.r=function(exports){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.t=function(value,mode){if(1&mode&&(value=__webpack_require__(value)),8&mode)return value;if(4&mode&&"object"==typeof value&&value&&value.__esModule)return value;var ns=Object.create(null);if(__webpack_require__.r(ns),Object.defineProperty(ns,"default",{enumerable:!0,value:value}),2&mode&&"string"!=typeof value)for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=4)}([function(module,exports){eval('module.exports = require("@sugoi/server");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3Vnb2kvc2VydmVyXCI/Zjk0OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN1Z29pL3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')},function(module,exports){eval('module.exports = require("@sugoi/socket");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3Vnb2kvc29ja2V0XCI/OGRlNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHN1Z29pL3NvY2tldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports){eval('module.exports = require("path");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n')},function(module,exports,__webpack_require__){"use strict";eval('\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst server_1 = __webpack_require__(0);\nconst socket_1 = __webpack_require__(1);\nlet IndexService = class IndexService {\n    constructor() {\n    }\n    static socketEventHandler(socket, message) {\n        socket_1.SocketHandler.getHandler().getServer().emit("new-message", message);\n    }\n};\n__decorate([\n    socket_1.SocketOn("message"),\n    __metadata("design:type", Function),\n    __metadata("design:paramtypes", [Object, Object]),\n    __metadata("design:returntype", void 0)\n], IndexService, "socketEventHandler", null);\nIndexService = __decorate([\n    server_1.Injectable(),\n    __metadata("design:paramtypes", [])\n], IndexService);\nexports.IndexService = IndexService;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRleC9zZXJ2aWNlcy9pbmRleC5zZXJ2aWNlLnRzP2ZjYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMkM7QUFDM0Msd0NBQXdEO0FBR3hELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFFckI7SUFDQSxDQUFDO0lBR0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBQyxPQUFPO1FBQ3BDLHNCQUFhLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUM7SUFDdkUsQ0FBQztDQUVKO0FBSkc7SUFEQyxpQkFBUSxDQUFDLFNBQVMsQ0FBQzs7Ozs0Q0FHbkI7QUFSUSxZQUFZO0lBRHhCLG1CQUFVLEVBQUU7O0dBQ0EsWUFBWSxDQVV4QjtBQVZZLG9DQUFZIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBzdWdvaS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFNvY2tldE9uLCBTb2NrZXRIYW5kbGVyIH0gZnJvbSBcIkBzdWdvaS9zb2NrZXRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluZGV4U2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIEBTb2NrZXRPbihcIm1lc3NhZ2VcIilcbiAgICBzdGF0aWMgc29ja2V0RXZlbnRIYW5kbGVyKHNvY2tldCxtZXNzYWdlKXtcbiAgICAgICAgU29ja2V0SGFuZGxlci5nZXRIYW5kbGVyKCkuZ2V0U2VydmVyKCkuZW1pdChcIm5ldy1tZXNzYWdlXCIsIG1lc3NhZ2UpXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nconst logger = __webpack_require__(5);\nconst socket_1 = __webpack_require__(1);\nconst app_1 = __webpack_require__(6);\nconst PORT = parseInt(Object({"ENV":"build:server"}).PORT) || 3000;\nconst HOST = app_1.server.rootPath;\nconst serverInstance = app_1.server\n    .build()\n    .listen(PORT, (error) => {\n    if (error) {\n        logger.error(error.message);\n        throw error;\n    }\n    logger.debug(`Server running @ ${HOST}:${PORT}`);\n});\nexports.serverInstance = serverInstance;\nconst io = socket_1.SocketHandler.init(serverInstance);\nexports.io = io;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZlci50cz81M2M4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtDO0FBQ2xDLHdDQUE0QztBQUM1QyxxQ0FBNkI7QUFHN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLDhCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ2hELE1BQU0sSUFBSSxHQUFHLFlBQU0sQ0FBQyxRQUFRLENBQUM7QUFFN0IsTUFBTSxjQUFjLEdBQUcsWUFBTTtLQUN4QixLQUFLLEVBQUU7S0FDUCxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDM0IsSUFBSSxLQUFLLEVBQUU7UUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixNQUFNLEtBQUssQ0FBQztLQUNmO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDLENBQUM7QUFJTSx3Q0FBYztBQUYzQixNQUFNLEVBQUUsR0FBRyxzQkFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVyQyxnQkFBRSIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9nZ2VyIGZyb20gJ3dpbnN0b24nO1xuaW1wb3J0IHtTb2NrZXRIYW5kbGVyfSBmcm9tIFwiQHN1Z29pL3NvY2tldFwiO1xuaW1wb3J0IHtzZXJ2ZXJ9IGZyb20gXCIuL2FwcFwiO1xuXG5cbmNvbnN0IFBPUlQgPSBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUKSB8fCAzMDAwO1xuY29uc3QgSE9TVCA9IHNlcnZlci5yb290UGF0aDtcblxuY29uc3Qgc2VydmVySW5zdGFuY2UgPSBzZXJ2ZXJcbiAgICAuYnVpbGQoKVxuICAgIC5saXN0ZW4oUE9SVCwgKGVycm9yOiBFcnJvcikgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgU2VydmVyIHJ1bm5pbmcgQCAke0hPU1R9OiR7UE9SVH1gKTtcbiAgICB9KTtcblxuY29uc3QgaW8gPSBTb2NrZXRIYW5kbGVyLmluaXQoc2VydmVySW5zdGFuY2UpO1xuXG5leHBvcnQgeyBpbywgc2VydmVySW5zdGFuY2UgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n')},function(module,exports){eval('module.exports = require("winston");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3aW5zdG9uXCI/Nzk3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwid2luc3RvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n')},function(module,exports,__webpack_require__){"use strict";eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst server_1 = __webpack_require__(0);\nconst bodyParser = __webpack_require__(7);\nconst compression = __webpack_require__(8);\nconst path = __webpack_require__(2);\nconst paths_1 = __webpack_require__(9);\nconst bootstrap_module_1 = __webpack_require__(10);\nconst authorization_class_1 = __webpack_require__(13);\nconst DEVELOPMENT = false; //process.env.ENV.indexOf('dev') !== -1;\nconst TESTING = false; //process.env.ENV.indexOf('test') !== -1;\nconst server = server_1.HttpServer.init(bootstrap_module_1.BootstrapModule, \"/\", null, authorization_class_1.Authorization)\n    //    .setStatic(paths.staticDir) // set static file directory path\n    .setMiddlewares((app) => {\n    app.disable('x-powered-by');\n    app.set('etag', 'strong');\n    app.set('host', Object({\"ENV\":\"build:server\"}).HOST || '0.0.0.0');\n    app.use(bodyParser.json());\n    app.use(compression());\n})\n    .setErrorHandlers((app) => {\n    app.use((req, res, next) => {\n        // Set fallback to send the web app index file\n        return res.sendFile(path.resolve(paths_1.paths.index));\n    });\n    // The value which will returns to the client in case of an exception\n    app.use(server_1.defaultErrorHandler(DEVELOPMENT || TESTING));\n});\nexports.server = server;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2FwcC50cz81ZGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQWdFO0FBQ2hFLDBDQUEwQztBQUMxQywyQ0FBMkM7QUFDM0Msb0NBQTZCO0FBQzdCLHVDQUF3QztBQUN4QyxtREFBcUQ7QUFDckQsc0RBQTZEO0FBRTdELE1BQU0sV0FBVyxHQUFHLEtBQUssMENBQXdDO0FBQ2pFLE1BQU0sT0FBTyxHQUFHLEtBQUssMkNBQXlDO0FBSTlELE1BQU0sTUFBTSxHQUFlLG1CQUFVLENBQUMsSUFBSSxDQUFDLGtDQUFlLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxtQ0FBYSxDQUFDO0lBQ3JGLG1FQUFtRTtLQUM5RCxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNwQixHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDhCQUFXLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRTNCLENBQUMsQ0FBQztLQUNELGdCQUFnQixDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDdkIsOENBQThDO1FBQzlDLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUMsQ0FBQztJQUNILHFFQUFxRTtJQUNyRSxHQUFHLENBQUMsR0FBRyxDQUFDLDRCQUFtQixDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQyxDQUFDO0FBRUMsd0JBQU0iLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlZmF1bHRFcnJvckhhbmRsZXIsIEh0dHBTZXJ2ZXIgfSBmcm9tIFwiQHN1Z29pL3NlcnZlclwiO1xuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBwYXRocyB9IGZyb20gXCIuLi9jb25maWcvcGF0aHNcIjtcbmltcG9ydCB7IEJvb3RzdHJhcE1vZHVsZSB9IGZyb20gXCIuL2Jvb3RzdHJhcC5tb2R1bGVcIjtcbmltcG9ydCB7IEF1dGhvcml6YXRpb24gfSBmcm9tIFwiLi9jbGFzc2VzL2F1dGhvcml6YXRpb24uY2xhc3NcIlxuXG5jb25zdCBERVZFTE9QTUVOVCA9IGZhbHNlLy9wcm9jZXNzLmVudi5FTlYuaW5kZXhPZignZGV2JykgIT09IC0xO1xuY29uc3QgVEVTVElORyA9IGZhbHNlLy9wcm9jZXNzLmVudi5FTlYuaW5kZXhPZigndGVzdCcpICE9PSAtMTtcblxuXG5cbmNvbnN0IHNlcnZlcjogSHR0cFNlcnZlciA9IEh0dHBTZXJ2ZXIuaW5pdChCb290c3RyYXBNb2R1bGUsIFwiL1wiLCBudWxsLCBBdXRob3JpemF0aW9uKVxuLy8gICAgLnNldFN0YXRpYyhwYXRocy5zdGF0aWNEaXIpIC8vIHNldCBzdGF0aWMgZmlsZSBkaXJlY3RvcnkgcGF0aFxuICAgIC5zZXRNaWRkbGV3YXJlcygoYXBwKSA9PiB7XG4gICAgICAgIGFwcC5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKTtcbiAgICAgICAgYXBwLnNldCgnZXRhZycsICdzdHJvbmcnKTtcbiAgICAgICAgYXBwLnNldCgnaG9zdCcsIHByb2Nlc3MuZW52LkhPU1QgfHwgJzAuMC4wLjAnKTtcbiAgICAgICAgYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XG4gICAgICAgIGFwcC51c2UoY29tcHJlc3Npb24oKSk7XG5cbiAgICB9KVxuICAgIC5zZXRFcnJvckhhbmRsZXJzKChhcHApID0+IHtcbiAgICAgICAgYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAgICAgICAgIC8vIFNldCBmYWxsYmFjayB0byBzZW5kIHRoZSB3ZWIgYXBwIGluZGV4IGZpbGVcbiAgICAgICAgICAgIHJldHVybiByZXMuc2VuZEZpbGUocGF0aC5yZXNvbHZlKHBhdGhzLmluZGV4KSlcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRoZSB2YWx1ZSB3aGljaCB3aWxsIHJldHVybnMgdG8gdGhlIGNsaWVudCBpbiBjYXNlIG9mIGFuIGV4Y2VwdGlvblxuICAgICAgICBhcHAudXNlKGRlZmF1bHRFcnJvckhhbmRsZXIoREVWRUxPUE1FTlQgfHwgVEVTVElORykpO1xuICAgIH0pO1xuXG5leHBvcnQge3NlcnZlcn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n")},function(module,exports){eval('module.exports = require("body-parser");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzgxODgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n')},function(module,exports){eval('module.exports = require("compression");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb21wcmVzc2lvblwiP2Y3OTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvbXByZXNzaW9uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n')},function(module,exports,__webpack_require__){"use strict";eval('\nObject.defineProperty(exports, "__esModule", { value: true });\nconst path = __webpack_require__(2);\nexports.paths = {\n    staticDir: path.resolve(__dirname, "../../client/"),\n    index: path.resolve(__dirname, \'../../client/index.html\')\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL3BhdGhzLnRzPzMyNWEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQ0FBNkI7QUFHaEIsYUFBSyxHQUFHO0lBQ3BCLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBQyxlQUFlLENBQUM7SUFDbEQsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDO0NBQ3pELENBQUMiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuXG5leHBvcnQgY29uc3QgcGF0aHMgPSB7XG5cdHN0YXRpY0RpcjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSxcIi4uLy4uL2NsaWVudC9cIiksXG5cdGluZGV4OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi4vLi4vY2xpZW50L2luZGV4Lmh0bWwnKVxufTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n')},function(module,exports,__webpack_require__){"use strict";eval('\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst server_1 = __webpack_require__(0);\nconst index_module_1 = __webpack_require__(11);\nlet BootstrapModule = class BootstrapModule {\n};\nBootstrapModule = __decorate([\n    server_1.ServerModule({\n        modules: [index_module_1.IndexModule],\n        controllers: [],\n        services: []\n    })\n], BootstrapModule);\nexports.BootstrapModule = BootstrapModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2Jvb3RzdHJhcC5tb2R1bGUudHM/NGQwZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUE0QztBQUM1QywrQ0FBNEQ7QUFRNUQsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtDQUFFO0FBQWpCLGVBQWU7SUFOM0IscUJBQVksQ0FBQztRQUNWLE9BQU8sRUFBQyxDQUFDLDBCQUFXLENBQUM7UUFDckIsV0FBVyxFQUFDLEVBQUU7UUFDZCxRQUFRLEVBQUMsRUFBRTtLQUVkLENBQUM7R0FDVyxlQUFlLENBQUU7QUFBakIsMENBQWUiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2ZXJNb2R1bGUgfSBmcm9tIFwiQHN1Z29pL3NlcnZlclwiXG5pbXBvcnQgeyBJbmRleE1vZHVsZSB9IGZyb20gXCIuLi9tb2R1bGVzL2luZGV4L2luZGV4Lm1vZHVsZVwiO1xuXG5AU2VydmVyTW9kdWxlKHtcbiAgICBtb2R1bGVzOltJbmRleE1vZHVsZV0sXG4gICAgY29udHJvbGxlcnM6W10sXG4gICAgc2VydmljZXM6W11cblxufSlcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBNb2R1bGV7fSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n')},function(module,exports,__webpack_require__){"use strict";eval('\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst server_1 = __webpack_require__(0);\nconst index_controller_1 = __webpack_require__(12);\nconst index_service_1 = __webpack_require__(3);\nlet IndexModule = class IndexModule {\n};\nIndexModule = __decorate([\n    server_1.ServerModule({\n        modules: [],\n        controllers: [index_controller_1.IndexController],\n        services: [index_service_1.IndexService]\n    })\n], IndexModule);\nexports.IndexModule = IndexModule;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRleC9pbmRleC5tb2R1bGUudHM/Y2Q2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHdDQUE0QztBQUM1QyxtREFBaUU7QUFDakUsK0NBQXdEO0FBT3hELElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRTtBQUFiLFdBQVc7SUFMdkIscUJBQVksQ0FBQztRQUNWLE9BQU8sRUFBQyxFQUFFO1FBQ1YsV0FBVyxFQUFDLENBQUMsa0NBQWUsQ0FBQztRQUM3QixRQUFRLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7R0FDVyxXQUFXLENBQUU7QUFBYixrQ0FBVyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlcnZlck1vZHVsZSB9IGZyb20gXCJAc3Vnb2kvc2VydmVyXCJcbmltcG9ydCB7IEluZGV4Q29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL2luZGV4LmNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEluZGV4U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2luZGV4LnNlcnZpY2VcIjtcblxuQFNlcnZlck1vZHVsZSh7XG4gICAgbW9kdWxlczpbXSxcbiAgICBjb250cm9sbGVyczpbSW5kZXhDb250cm9sbGVyXSxcbiAgICBzZXJ2aWNlczpbSW5kZXhTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBJbmRleE1vZHVsZXt9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n')},function(module,exports,__webpack_require__){"use strict";eval('\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (this && this.__metadata) || function (k, v) {\n    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst server_1 = __webpack_require__(0);\nconst index_service_1 = __webpack_require__(3);\nlet IndexController = class IndexController {\n    constructor(indexService) {\n        this.indexService = indexService;\n    }\n    /*    @RequestQueryParamsSchemaPolicy(ComparableSchema.ofType({\n            t:ComparableSchema.ofType(SchemaTypes.STRING).setMandatory(false)\n        }))*/\n    index() {\n        return "index is ready!";\n    }\n};\n__decorate([\n    server_1.HttpGet("/"),\n    __metadata("design:type", Function),\n    __metadata("design:paramtypes", []),\n    __metadata("design:returntype", void 0)\n], IndexController.prototype, "index", null);\nIndexController = __decorate([\n    server_1.Controller(\'/index\'),\n    __metadata("design:paramtypes", [index_service_1.IndexService])\n], IndexController);\nexports.IndexController = IndexController;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9pbmRleC9jb250cm9sbGVycy9pbmRleC5jb250cm9sbGVyLnRzP2JjMDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FNd0I7QUFDeEIsK0NBQXlEO0FBR3pELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFFeEIsWUFDWSxZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUVyQyxDQUFDO0lBT0Q7O2FBREs7SUFDTCxLQUFLO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0NBRUo7QUFKRztJQUpDLGdCQUFPLENBQUMsR0FBRyxDQUFDOzs7OzRDQU1aO0FBZFEsZUFBZTtJQUQzQixtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQ0FJUSw0QkFBWTtHQUg1QixlQUFlLENBZ0IzQjtBQWhCWSwwQ0FBZSIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29udHJvbGxlcixcbiAgICBIdHRwR2V0LFxuICAgIFJlcXVlc3RRdWVyeVBhcmFtc1NjaGVtYVBvbGljeSxcbiAgICBDb21wYXJhYmxlU2NoZW1hLFxuICAgIFNjaGVtYVR5cGVzXG4gfSBmcm9tIFwiQHN1Z29pL3NlcnZlclwiO1xuaW1wb3J0IHsgSW5kZXhTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2luZGV4LnNlcnZpY2VcIjtcblxuQENvbnRyb2xsZXIoJy9pbmRleCcpXG5leHBvcnQgY2xhc3MgSW5kZXhDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGluZGV4U2VydmljZTpJbmRleFNlcnZpY2VcbiAgICApe1xuICAgIH1cblxuXG4gICAgQEh0dHBHZXQoXCIvXCIpXG4vKiAgICBAUmVxdWVzdFF1ZXJ5UGFyYW1zU2NoZW1hUG9saWN5KENvbXBhcmFibGVTY2hlbWEub2ZUeXBlKHtcbiAgICAgICAgdDpDb21wYXJhYmxlU2NoZW1hLm9mVHlwZShTY2hlbWFUeXBlcy5TVFJJTkcpLnNldE1hbmRhdG9yeShmYWxzZSlcbiAgICB9KSkqL1xuICAgIGluZGV4KCl7XG4gICAgICAgIHJldHVybiBcImluZGV4IGlzIHJlYWR5IVwiO1xuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n')},function(module,exports,__webpack_require__){"use strict";eval('\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, "__esModule", { value: true });\nconst server_1 = __webpack_require__(0);\nclass Authorization extends server_1.AuthProvider {\n    /**\n     * Verify if the user is authorized\n     *\n     * @returns {Promise<boolean>}\n     */\n    isAuthenticated() {\n        return Promise.resolve(true);\n    }\n    /**\n    * Verify if the user has the right permissions\n    *\n    * @returns {Promise<boolean>}\n    */\n    isAllowedTo(...permissions) {\n        return Promise.resolve(null);\n    }\n    /**\n    * Verify if the user is in the right role\n    *\n    * @returns {Promise<boolean>}\n    */\n    isInRole(...roles) {\n        return Promise.resolve(null);\n    }\n    /**\n    * Retrieve the user and store it in cache for later use\n    *\n    * @returns {Promise<boolean>}\n    */\n    getUser(req, res, next) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let userData = yield this.getUserData();\n            if (!userData) {\n                userData = yield Promise.resolve(null).then(_userData => {\n                    this.setUserData(_userData);\n                    return _userData;\n                });\n            }\n            return userData;\n        });\n    }\n    isResourceOwner(resourceId) {\n        return Promise.resolve(null);\n    }\n}\nexports.Authorization = Authorization;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NsYXNzZXMvYXV0aG9yaXphdGlvbi5jbGFzcy50cz9hMzBjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3Q0FBMkQ7QUFFM0QsTUFBYSxhQUFjLFNBQVEscUJBQWlCO0lBQ2hEOzs7O09BSUc7SUFDSCxlQUFlO1FBQ1gsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRDs7OztNQUlFO0lBQ0YsV0FBVyxDQUFDLEdBQUcsV0FBOEI7UUFDckMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFHRDs7OztNQUlFO0lBQ0YsUUFBUSxDQUFDLEdBQUcsS0FBd0I7UUFDaEMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFHRDs7OztNQUlFO0lBQ0ksT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTs7WUFDeEIsSUFBSSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDeEMsSUFBRyxDQUFDLFFBQVEsRUFBQztnQkFDVCxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUU7b0JBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVCLE9BQU8sU0FBUyxDQUFDO2dCQUNyQixDQUFDLENBQUMsQ0FBQzthQUNOO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBS0QsZUFBZSxDQUFDLFVBQWU7UUFDM0IsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FFSjtBQXRERCxzQ0FzREMiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dGhQcm92aWRlcixUU3RyaW5nT3JOdW1iZXJ9IGZyb20gXCJAc3Vnb2kvc2VydmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uIGV4dGVuZHMgQXV0aFByb3ZpZGVyPGFueT4ge1xuICAgIC8qKlxuICAgICAqIFZlcmlmeSBpZiB0aGUgdXNlciBpcyBhdXRob3JpemVkXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cbiAgICAgKi9cbiAgICBpc0F1dGhlbnRpY2F0ZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIFZlcmlmeSBpZiB0aGUgdXNlciBoYXMgdGhlIHJpZ2h0IHBlcm1pc3Npb25zXG4gICAgKlxuICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAgKi9cbiAgICBpc0FsbG93ZWRUbyguLi5wZXJtaXNzaW9uczogVFN0cmluZ09yTnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIFZlcmlmeSBpZiB0aGUgdXNlciBpcyBpbiB0aGUgcmlnaHQgcm9sZVxuICAgICpcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgICovXG4gICAgaXNJblJvbGUoLi4ucm9sZXM6IFRTdHJpbmdPck51bWJlcltdKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIFJldHJpZXZlIHRoZSB1c2VyIGFuZCBzdG9yZSBpdCBpbiBjYWNoZSBmb3IgbGF0ZXIgdXNlXG4gICAgKlxuICAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XG4gICAgKi9cbiAgICBhc3luYyBnZXRVc2VyKHJlcSwgcmVzLCBuZXh0KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IHVzZXJEYXRhID0gYXdhaXQgdGhpcy5nZXRVc2VyRGF0YSgpO1xuICAgICAgICBpZighdXNlckRhdGEpe1xuICAgICAgICAgICAgdXNlckRhdGEgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUobnVsbCkudGhlbihfdXNlckRhdGE9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJEYXRhKF91c2VyRGF0YSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF91c2VyRGF0YTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1c2VyRGF0YTtcbiAgICB9XG5cblxuXG5cbiAgICBpc1Jlc291cmNlT3duZXIocmVzb3VyY2VJZDogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n')}]);