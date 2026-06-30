"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/prescriptions/recent/route";
exports.ids = ["app/api/prescriptions/recent/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprescriptions%2Frecent%2Froute&page=%2Fapi%2Fprescriptions%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprescriptions%2Frecent%2Froute.ts&appDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprescriptions%2Frecent%2Froute&page=%2Fapi%2Fprescriptions%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprescriptions%2Frecent%2Froute.ts&appDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_91950_Desktop_RxNXT_Cloud_Ready_Developer_Handsoff_app_api_prescriptions_recent_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/prescriptions/recent/route.ts */ \"(rsc)/./app/api/prescriptions/recent/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/prescriptions/recent/route\",\n        pathname: \"/api/prescriptions/recent\",\n        filename: \"route\",\n        bundlePath: \"app/api/prescriptions/recent/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\91950\\\\Desktop\\\\RxNXT_Cloud_Ready_Developer_Handsoff\\\\app\\\\api\\\\prescriptions\\\\recent\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_91950_Desktop_RxNXT_Cloud_Ready_Developer_Handsoff_app_api_prescriptions_recent_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/prescriptions/recent/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcmVzY3JpcHRpb25zJTJGcmVjZW50JTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcmVzY3JpcHRpb25zJTJGcmVjZW50JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJlc2NyaXB0aW9ucyUyRnJlY2VudCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUM5MTk1MCU1Q0Rlc2t0b3AlNUNSeE5YVF9DbG91ZF9SZWFkeV9EZXZlbG9wZXJfSGFuZHNvZmYlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1QzkxOTUwJTVDRGVza3RvcCU1Q1J4TlhUX0Nsb3VkX1JlYWR5X0RldmVsb3Blcl9IYW5kc29mZiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDMEQ7QUFDdkk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yeG54dC1kcnVnLW1hbmFnZW1lbnQvPzY2NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcOTE5NTBcXFxcRGVza3RvcFxcXFxSeE5YVF9DbG91ZF9SZWFkeV9EZXZlbG9wZXJfSGFuZHNvZmZcXFxcYXBwXFxcXGFwaVxcXFxwcmVzY3JpcHRpb25zXFxcXHJlY2VudFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcHJlc2NyaXB0aW9ucy9yZWNlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wcmVzY3JpcHRpb25zL3JlY2VudFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJlc2NyaXB0aW9ucy9yZWNlbnQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFw5MTk1MFxcXFxEZXNrdG9wXFxcXFJ4TlhUX0Nsb3VkX1JlYWR5X0RldmVsb3Blcl9IYW5kc29mZlxcXFxhcHBcXFxcYXBpXFxcXHByZXNjcmlwdGlvbnNcXFxccmVjZW50XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcmVzY3JpcHRpb25zL3JlY2VudC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprescriptions%2Frecent%2Froute&page=%2Fapi%2Fprescriptions%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprescriptions%2Frecent%2Froute.ts&appDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/prescriptions/recent/route.ts":
/*!***********************************************!*\
  !*** ./app/api/prescriptions/recent/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_auth_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth-server */ \"(rsc)/./lib/auth-server.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.ts\");\n\n\n\nasync function GET(request) {\n    const user = await (0,_lib_auth_server__WEBPACK_IMPORTED_MODULE_1__.getAuthenticatedUser)();\n    if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        error: \"Unauthorized\"\n    }, {\n        status: 401\n    });\n    const { searchParams } = new URL(request.url);\n    const patientId = searchParams.get(\"patientId\");\n    if (!patientId) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Patient ID is required\"\n        }, {\n            status: 400\n        });\n    }\n    try {\n        // Get the most recent prescription for this patient with all medicines\n        const prescription = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.prescription.findFirst({\n            where: {\n                patientId,\n                clinicId: user.clinicId\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            },\n            include: {\n                encounter: {\n                    select: {\n                        chiefComplaint: true,\n                        diagnosis: true,\n                        notes: true\n                    }\n                },\n                medicines: {\n                    include: {\n                        drug: {\n                            select: {\n                                genericName: true,\n                                brandName: true\n                            }\n                        }\n                    }\n                }\n            }\n        });\n        if (!prescription) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"No recent prescription found\",\n                data: null\n            });\n        }\n        const formattedMedicines = prescription.medicines.map((m)=>({\n                id: m.id,\n                drugId: m.drugId,\n                name: m.customName ?? m.drug?.brandName ?? m.drug?.genericName ?? \"Unknown\",\n                dosage_form: m.dosageForm,\n                strength: m.strength,\n                route: m.route,\n                frequency: m.frequency ?? \"\",\n                duration: m.duration ?? \"\",\n                instructions: m.instructions ?? \"\"\n            }));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            data: {\n                chiefComplaint: prescription.encounter?.chiefComplaint ?? \"\",\n                diagnosis: prescription.encounter?.diagnosis ?? \"\",\n                notes: prescription.encounter?.notes ?? \"\",\n                medicines: formattedMedicines\n            }\n        });\n    } catch (err) {\n        console.error(\"Recent prescription error:\", err);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: err.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ByZXNjcmlwdGlvbnMvcmVjZW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDYztBQUNuQjtBQUUvQixlQUFlRyxJQUFJQyxPQUFnQjtJQUN4QyxNQUFNQyxPQUFPLE1BQU1KLHNFQUFvQkE7SUFDdkMsSUFBSSxDQUFDSSxNQUFNLE9BQU9MLHFEQUFZQSxDQUFDTSxJQUFJLENBQUM7UUFBRUMsT0FBTztJQUFlLEdBQUc7UUFBRUMsUUFBUTtJQUFJO0lBRTdFLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSU4sUUFBUU8sR0FBRztJQUM1QyxNQUFNQyxZQUFZSCxhQUFhSSxHQUFHLENBQUM7SUFFbkMsSUFBSSxDQUFDRCxXQUFXO1FBQ2QsT0FBT1oscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXlCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzlFO0lBRUEsSUFBSTtRQUNGLHVFQUF1RTtRQUN2RSxNQUFNTSxlQUFlLE1BQU1aLCtDQUFNQSxDQUFDWSxZQUFZLENBQUNDLFNBQVMsQ0FBQztZQUN2REMsT0FBTztnQkFBRUo7Z0JBQVdLLFVBQVVaLEtBQUtZLFFBQVE7WUFBQztZQUM1Q0MsU0FBUztnQkFBRUMsV0FBVztZQUFPO1lBQzdCQyxTQUFTO2dCQUNQQyxXQUFXO29CQUNUQyxRQUFRO3dCQUFFQyxnQkFBZ0I7d0JBQU1DLFdBQVc7d0JBQU1DLE9BQU87b0JBQUs7Z0JBQy9EO2dCQUNBQyxXQUFXO29CQUNUTixTQUFTO3dCQUNQTyxNQUFNOzRCQUFFTCxRQUFRO2dDQUFFTSxhQUFhO2dDQUFNQyxXQUFXOzRCQUFLO3dCQUFFO29CQUN6RDtnQkFDRjtZQUNGO1FBQ0Y7UUFFQSxJQUFJLENBQUNmLGNBQWM7WUFDakIsT0FBT2QscURBQVlBLENBQUNNLElBQUksQ0FBQztnQkFBRXdCLFNBQVM7Z0JBQWdDQyxNQUFNO1lBQUs7UUFDakY7UUFFQSxNQUFNQyxxQkFBcUJsQixhQUFhWSxTQUFTLENBQUNPLEdBQUcsQ0FBQyxDQUFDQyxJQUFPO2dCQUM1REMsSUFBSUQsRUFBRUMsRUFBRTtnQkFDUkMsUUFBUUYsRUFBRUUsTUFBTTtnQkFDaEJDLE1BQU1ILEVBQUVJLFVBQVUsSUFBSUosRUFBRVAsSUFBSSxFQUFFRSxhQUFhSyxFQUFFUCxJQUFJLEVBQUVDLGVBQWU7Z0JBQ2xFVyxhQUFhTCxFQUFFTSxVQUFVO2dCQUN6QkMsVUFBVVAsRUFBRU8sUUFBUTtnQkFDcEJDLE9BQU9SLEVBQUVRLEtBQUs7Z0JBQ2RDLFdBQVdULEVBQUVTLFNBQVMsSUFBSTtnQkFDMUJDLFVBQVVWLEVBQUVVLFFBQVEsSUFBSTtnQkFDeEJDLGNBQWNYLEVBQUVXLFlBQVksSUFBSTtZQUNsQztRQUVBLE9BQU83QyxxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQ3ZCeUIsTUFBTTtnQkFDSlIsZ0JBQWdCVCxhQUFhTyxTQUFTLEVBQUVFLGtCQUFrQjtnQkFDMURDLFdBQVdWLGFBQWFPLFNBQVMsRUFBRUcsYUFBYTtnQkFDaERDLE9BQU9YLGFBQWFPLFNBQVMsRUFBRUksU0FBUztnQkFDeENDLFdBQVdNO1lBQ2I7UUFDRjtJQUVGLEVBQUUsT0FBT2MsS0FBVTtRQUNqQkMsUUFBUXhDLEtBQUssQ0FBQyw4QkFBOEJ1QztRQUM1QyxPQUFPOUMscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPdUMsSUFBSWhCLE9BQU87UUFBQyxHQUFHO1lBQUV0QixRQUFRO1FBQUk7SUFDakU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3J4bnh0LWRydWctbWFuYWdlbWVudC8uL2FwcC9hcGkvcHJlc2NyaXB0aW9ucy9yZWNlbnQvcm91dGUudHM/YmQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRBdXRoZW50aWNhdGVkVXNlciB9IGZyb20gJ0AvbGliL2F1dGgtc2VydmVyJztcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJ0AvbGliL3ByaXNtYSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0QXV0aGVudGljYXRlZFVzZXIoKTtcbiAgaWYgKCF1c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcblxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IHBhdGllbnRJZCA9IHNlYXJjaFBhcmFtcy5nZXQoJ3BhdGllbnRJZCcpO1xuXG4gIGlmICghcGF0aWVudElkKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdQYXRpZW50IElEIGlzIHJlcXVpcmVkJyB9LCB7IHN0YXR1czogNDAwIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZXQgdGhlIG1vc3QgcmVjZW50IHByZXNjcmlwdGlvbiBmb3IgdGhpcyBwYXRpZW50IHdpdGggYWxsIG1lZGljaW5lc1xuICAgIGNvbnN0IHByZXNjcmlwdGlvbiA9IGF3YWl0IHByaXNtYS5wcmVzY3JpcHRpb24uZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IHBhdGllbnRJZCwgY2xpbmljSWQ6IHVzZXIuY2xpbmljSWQgfSxcbiAgICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnZGVzYycgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgZW5jb3VudGVyOiB7XG4gICAgICAgICAgc2VsZWN0OiB7IGNoaWVmQ29tcGxhaW50OiB0cnVlLCBkaWFnbm9zaXM6IHRydWUsIG5vdGVzOiB0cnVlIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG1lZGljaW5lczoge1xuICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIGRydWc6IHsgc2VsZWN0OiB7IGdlbmVyaWNOYW1lOiB0cnVlLCBicmFuZE5hbWU6IHRydWUgfSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFwcmVzY3JpcHRpb24pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdObyByZWNlbnQgcHJlc2NyaXB0aW9uIGZvdW5kJywgZGF0YTogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBmb3JtYXR0ZWRNZWRpY2luZXMgPSBwcmVzY3JpcHRpb24ubWVkaWNpbmVzLm1hcCgobSkgPT4gKHtcbiAgICAgIGlkOiBtLmlkLFxuICAgICAgZHJ1Z0lkOiBtLmRydWdJZCxcbiAgICAgIG5hbWU6IG0uY3VzdG9tTmFtZSA/PyBtLmRydWc/LmJyYW5kTmFtZSA/PyBtLmRydWc/LmdlbmVyaWNOYW1lID8/ICdVbmtub3duJyxcbiAgICAgIGRvc2FnZV9mb3JtOiBtLmRvc2FnZUZvcm0sXG4gICAgICBzdHJlbmd0aDogbS5zdHJlbmd0aCxcbiAgICAgIHJvdXRlOiBtLnJvdXRlLFxuICAgICAgZnJlcXVlbmN5OiBtLmZyZXF1ZW5jeSA/PyAnJyxcbiAgICAgIGR1cmF0aW9uOiBtLmR1cmF0aW9uID8/ICcnLFxuICAgICAgaW5zdHJ1Y3Rpb25zOiBtLmluc3RydWN0aW9ucyA/PyAnJyxcbiAgICB9KSk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgZGF0YToge1xuICAgICAgICBjaGllZkNvbXBsYWludDogcHJlc2NyaXB0aW9uLmVuY291bnRlcj8uY2hpZWZDb21wbGFpbnQgPz8gJycsXG4gICAgICAgIGRpYWdub3NpczogcHJlc2NyaXB0aW9uLmVuY291bnRlcj8uZGlhZ25vc2lzID8/ICcnLFxuICAgICAgICBub3RlczogcHJlc2NyaXB0aW9uLmVuY291bnRlcj8ubm90ZXMgPz8gJycsXG4gICAgICAgIG1lZGljaW5lczogZm9ybWF0dGVkTWVkaWNpbmVzLFxuICAgICAgfSxcbiAgICB9KTtcblxuICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1JlY2VudCBwcmVzY3JpcHRpb24gZXJyb3I6JywgZXJyKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldEF1dGhlbnRpY2F0ZWRVc2VyIiwicHJpc21hIiwiR0VUIiwicmVxdWVzdCIsInVzZXIiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJwYXRpZW50SWQiLCJnZXQiLCJwcmVzY3JpcHRpb24iLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImNsaW5pY0lkIiwib3JkZXJCeSIsImNyZWF0ZWRBdCIsImluY2x1ZGUiLCJlbmNvdW50ZXIiLCJzZWxlY3QiLCJjaGllZkNvbXBsYWludCIsImRpYWdub3NpcyIsIm5vdGVzIiwibWVkaWNpbmVzIiwiZHJ1ZyIsImdlbmVyaWNOYW1lIiwiYnJhbmROYW1lIiwibWVzc2FnZSIsImRhdGEiLCJmb3JtYXR0ZWRNZWRpY2luZXMiLCJtYXAiLCJtIiwiaWQiLCJkcnVnSWQiLCJuYW1lIiwiY3VzdG9tTmFtZSIsImRvc2FnZV9mb3JtIiwiZG9zYWdlRm9ybSIsInN0cmVuZ3RoIiwicm91dGUiLCJmcmVxdWVuY3kiLCJkdXJhdGlvbiIsImluc3RydWN0aW9ucyIsImVyciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/prescriptions/recent/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth-server.ts":
/*!****************************!*\
  !*** ./lib/auth-server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAuthenticatedUser: () => (/* binding */ getAuthenticatedUser)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ \"(rsc)/./lib/auth.ts\");\n// lib/auth-server.ts\n// Server-side helper — call this in API routes to get the authenticated user.\n// Replaces the old getAuthenticatedUser() from lib/supabase/server.ts\n\n\n/**\n * Returns the authenticated user from the NextAuth JWT session.\n * Returns null if no valid session exists (triggers 401 in API routes).\n */ async function getAuthenticatedUser() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_0__.getServerSession)(_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n    if (!session?.user) return null;\n    const user = session.user;\n    return {\n        id: user.id,\n        email: user.email ?? \"\",\n        role: user.role ?? \"doctor\",\n        clinicId: user.clinicId ?? \"\",\n        fullName: user.name ?? null,\n        clinicName: user.clinicName ?? null\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC1zZXJ2ZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFCQUFxQjtBQUNyQiw4RUFBOEU7QUFDOUUsc0VBQXNFO0FBRXpCO0FBQ1I7QUFXckM7OztDQUdDLEdBQ00sZUFBZUU7SUFDcEIsTUFBTUMsVUFBVSxNQUFNSCwyREFBZ0JBLENBQUNDLDhDQUFXQTtJQUNsRCxJQUFJLENBQUNFLFNBQVNDLE1BQU0sT0FBTztJQUUzQixNQUFNQSxPQUFPRCxRQUFRQyxJQUFJO0lBQ3pCLE9BQU87UUFDTEMsSUFBSUQsS0FBS0MsRUFBRTtRQUNYQyxPQUFPRixLQUFLRSxLQUFLLElBQUk7UUFDckJDLE1BQU1ILEtBQUtHLElBQUksSUFBSTtRQUNuQkMsVUFBVUosS0FBS0ksUUFBUSxJQUFJO1FBQzNCQyxVQUFVTCxLQUFLTSxJQUFJLElBQUk7UUFDdkJDLFlBQVlQLEtBQUtPLFVBQVUsSUFBSTtJQUNqQztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnhueHQtZHJ1Zy1tYW5hZ2VtZW50Ly4vbGliL2F1dGgtc2VydmVyLnRzPzBiNDQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2F1dGgtc2VydmVyLnRzXG4vLyBTZXJ2ZXItc2lkZSBoZWxwZXIg4oCUIGNhbGwgdGhpcyBpbiBBUEkgcm91dGVzIHRvIGdldCB0aGUgYXV0aGVudGljYXRlZCB1c2VyLlxuLy8gUmVwbGFjZXMgdGhlIG9sZCBnZXRBdXRoZW50aWNhdGVkVXNlcigpIGZyb20gbGliL3N1cGFiYXNlL3NlcnZlci50c1xuXG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnLi9hdXRoJztcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGVkVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHJvbGU6IHN0cmluZztcbiAgY2xpbmljSWQ6IHN0cmluZztcbiAgZnVsbE5hbWU6IHN0cmluZyB8IG51bGw7XG4gIGNsaW5pY05hbWU6IHN0cmluZyB8IG51bGw7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYXV0aGVudGljYXRlZCB1c2VyIGZyb20gdGhlIE5leHRBdXRoIEpXVCBzZXNzaW9uLlxuICogUmV0dXJucyBudWxsIGlmIG5vIHZhbGlkIHNlc3Npb24gZXhpc3RzICh0cmlnZ2VycyA0MDEgaW4gQVBJIHJvdXRlcykuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoZW50aWNhdGVkVXNlcigpOiBQcm9taXNlPEF1dGhlbnRpY2F0ZWRVc2VyIHwgbnVsbD4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgdXNlciA9IHNlc3Npb24udXNlciBhcyBhbnk7XG4gIHJldHVybiB7XG4gICAgaWQ6IHVzZXIuaWQsXG4gICAgZW1haWw6IHVzZXIuZW1haWwgPz8gJycsXG4gICAgcm9sZTogdXNlci5yb2xlID8/ICdkb2N0b3InLFxuICAgIGNsaW5pY0lkOiB1c2VyLmNsaW5pY0lkID8/ICcnLFxuICAgIGZ1bGxOYW1lOiB1c2VyLm5hbWUgPz8gbnVsbCxcbiAgICBjbGluaWNOYW1lOiB1c2VyLmNsaW5pY05hbWUgPz8gbnVsbCxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJnZXRBdXRoZW50aWNhdGVkVXNlciIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJlbWFpbCIsInJvbGUiLCJjbGluaWNJZCIsImZ1bGxOYW1lIiwibmFtZSIsImNsaW5pY05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth-server.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n// lib/auth.ts\n// NextAuth configuration for RxNXT — fully local, credentials-based login.\n// No internet required. Validates email + password against the local SQLite DB.\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) return null;\n                // Look up user in local SQLite database\n                const user = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: credentials.email.toLowerCase().trim()\n                    },\n                    include: {\n                        clinic: true\n                    }\n                });\n                if (!user) return null;\n                // Verify password with bcrypt\n                const isValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                if (!isValid) return null;\n                return {\n                    id: user.id,\n                    email: user.email,\n                    name: user.fullName,\n                    role: user.role,\n                    clinicId: user.clinicId,\n                    clinicName: user.clinic.name\n                };\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // On login, copy user fields into the JWT token\n            if (user) {\n                token.id = user.id;\n                token.role = user.role;\n                token.clinicId = user.clinicId;\n                token.clinicName = user.clinicName;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            // Make user data available in useSession() on the client\n            if (session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n                session.user.clinicId = token.clinicId;\n                session.user.clinicName = token.clinicName;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    // For local dev, this secret just needs to exist — any string works\n    secret: process.env.NEXTAUTH_SECRET ?? \"rxnxt-local-dev-secret-key-2024\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGNBQWM7QUFDZCwyRUFBMkU7QUFDM0UsZ0ZBQWdGO0FBR2Q7QUFDcEM7QUFDSTtBQUUzQixNQUFNRyxjQUErQjtJQUMxQ0MsV0FBVztRQUNUSiwyRUFBbUJBLENBQUM7WUFDbEJLLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVSxPQUFPO2dCQUUxRCx3Q0FBd0M7Z0JBQ3hDLE1BQU1FLE9BQU8sTUFBTVYsMkNBQU1BLENBQUNVLElBQUksQ0FBQ0MsVUFBVSxDQUFDO29CQUN4Q0MsT0FBTzt3QkFBRVAsT0FBT0QsWUFBWUMsS0FBSyxDQUFDUSxXQUFXLEdBQUdDLElBQUk7b0JBQUc7b0JBQ3ZEQyxTQUFTO3dCQUFFQyxRQUFRO29CQUFLO2dCQUMxQjtnQkFFQSxJQUFJLENBQUNOLE1BQU0sT0FBTztnQkFFbEIsOEJBQThCO2dCQUM5QixNQUFNTyxVQUFVLE1BQU1sQix1REFBYyxDQUFDSyxZQUFZSSxRQUFRLEVBQUVFLEtBQUtGLFFBQVE7Z0JBQ3hFLElBQUksQ0FBQ1MsU0FBUyxPQUFPO2dCQUVyQixPQUFPO29CQUNMRSxJQUFJVCxLQUFLUyxFQUFFO29CQUNYZCxPQUFPSyxLQUFLTCxLQUFLO29CQUNqQkYsTUFBTU8sS0FBS1UsUUFBUTtvQkFDbkJDLE1BQU1YLEtBQUtXLElBQUk7b0JBQ2ZDLFVBQVVaLEtBQUtZLFFBQVE7b0JBQ3ZCQyxZQUFZYixLQUFLTSxNQUFNLENBQUNiLElBQUk7Z0JBQzlCO1lBQ0Y7UUFDRjtLQUNEO0lBRURxQixTQUFTO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUVBQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVuQixJQUFJLEVBQUU7WUFDdkIsZ0RBQWdEO1lBQ2hELElBQUlBLE1BQU07Z0JBQ1JtQixNQUFNVixFQUFFLEdBQUdULEtBQUtTLEVBQUU7Z0JBQ2xCVSxNQUFNUixJQUFJLEdBQUcsS0FBY0EsSUFBSTtnQkFDL0JRLE1BQU1QLFFBQVEsR0FBRyxLQUFjQSxRQUFRO2dCQUN2Q08sTUFBTU4sVUFBVSxHQUFHLEtBQWNBLFVBQVU7WUFDN0M7WUFDQSxPQUFPTTtRQUNUO1FBQ0EsTUFBTUwsU0FBUSxFQUFFQSxPQUFPLEVBQUVLLEtBQUssRUFBRTtZQUM5Qix5REFBeUQ7WUFDekQsSUFBSUwsUUFBUWQsSUFBSSxFQUFFO2dCQUNmYyxRQUFRZCxJQUFJLENBQVNTLEVBQUUsR0FBR1UsTUFBTVYsRUFBRTtnQkFDbENLLFFBQVFkLElBQUksQ0FBU1csSUFBSSxHQUFHUSxNQUFNUixJQUFJO2dCQUN0Q0csUUFBUWQsSUFBSSxDQUFTWSxRQUFRLEdBQUdPLE1BQU1QLFFBQVE7Z0JBQzlDRSxRQUFRZCxJQUFJLENBQVNhLFVBQVUsR0FBR00sTUFBTU4sVUFBVTtZQUNyRDtZQUNBLE9BQU9DO1FBQ1Q7SUFDRjtJQUVBTSxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBRUEsb0VBQW9FO0lBQ3BFQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWUsSUFBSTtBQUN6QyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnhueHQtZHJ1Zy1tYW5hZ2VtZW50Ly4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsaWIvYXV0aC50c1xuLy8gTmV4dEF1dGggY29uZmlndXJhdGlvbiBmb3IgUnhOWFQg4oCUIGZ1bGx5IGxvY2FsLCBjcmVkZW50aWFscy1iYXNlZCBsb2dpbi5cbi8vIE5vIGludGVybmV0IHJlcXVpcmVkLiBWYWxpZGF0ZXMgZW1haWwgKyBwYXNzd29yZCBhZ2FpbnN0IHRoZSBsb2NhbCBTUUxpdGUgREIuXG5cbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzJztcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi9wcmlzbWEnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiAnY3JlZGVudGlhbHMnLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6ICdFbWFpbCcsIHR5cGU6ICdlbWFpbCcgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy8gTG9vayB1cCB1c2VyIGluIGxvY2FsIFNRTGl0ZSBkYXRhYmFzZVxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHsgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLnRvTG93ZXJDYXNlKCkudHJpbSgpIH0sXG4gICAgICAgICAgaW5jbHVkZTogeyBjbGluaWM6IHRydWUgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCF1c2VyKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAvLyBWZXJpZnkgcGFzc3dvcmQgd2l0aCBiY3J5cHRcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIG5hbWU6IHVzZXIuZnVsbE5hbWUsXG4gICAgICAgICAgcm9sZTogdXNlci5yb2xlLFxuICAgICAgICAgIGNsaW5pY0lkOiB1c2VyLmNsaW5pY0lkLFxuICAgICAgICAgIGNsaW5pY05hbWU6IHVzZXIuY2xpbmljLm5hbWUsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xuICB9LFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIC8vIE9uIGxvZ2luLCBjb3B5IHVzZXIgZmllbGRzIGludG8gdGhlIEpXVCB0b2tlblxuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi5yb2xlID0gKHVzZXIgYXMgYW55KS5yb2xlO1xuICAgICAgICB0b2tlbi5jbGluaWNJZCA9ICh1c2VyIGFzIGFueSkuY2xpbmljSWQ7XG4gICAgICAgIHRva2VuLmNsaW5pY05hbWUgPSAodXNlciBhcyBhbnkpLmNsaW5pY05hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgLy8gTWFrZSB1c2VyIGRhdGEgYXZhaWxhYmxlIGluIHVzZVNlc3Npb24oKSBvbiB0aGUgY2xpZW50XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCA9IHRva2VuLmlkIGFzIHN0cmluZztcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLnJvbGUgPSB0b2tlbi5yb2xlIGFzIHN0cmluZztcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyBhbnkpLmNsaW5pY0lkID0gdG9rZW4uY2xpbmljSWQgYXMgc3RyaW5nO1xuICAgICAgICAoc2Vzc2lvbi51c2VyIGFzIGFueSkuY2xpbmljTmFtZSA9IHRva2VuLmNsaW5pY05hbWUgYXMgc3RyaW5nO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcblxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gICAgZXJyb3I6ICcvbG9naW4nLFxuICB9LFxuXG4gIC8vIEZvciBsb2NhbCBkZXYsIHRoaXMgc2VjcmV0IGp1c3QgbmVlZHMgdG8gZXhpc3Qg4oCUIGFueSBzdHJpbmcgd29ya3NcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgPz8gJ3J4bnh0LWxvY2FsLWRldi1zZWNyZXQta2V5LTIwMjQnLFxufTtcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsImluY2x1ZGUiLCJjbGluaWMiLCJpc1ZhbGlkIiwiY29tcGFyZSIsImlkIiwiZnVsbE5hbWUiLCJyb2xlIiwiY2xpbmljSWQiLCJjbGluaWNOYW1lIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// lib/prisma.ts\n// Singleton Prisma client — prevents \"too many connections\" in Next.js dev mode\n// (hot reload creates new instances on every save; this reuses one global instance).\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log:  true ? [\n        \"error\",\n        \"warn\"\n    ] : 0\n});\nif (true) {\n    globalForPrisma.prisma = prisma;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjtBQUNoQixnRkFBZ0Y7QUFDaEYscUZBQXFGO0FBRXZDO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFFakIsTUFBTUMsU0FDWEYsZ0JBQWdCRSxNQUFNLElBQ3RCLElBQUlILHdEQUFZQSxDQUFDO0lBQ2ZJLEtBQUtDLEtBQXlCLEdBQWdCO1FBQUM7UUFBUztLQUFPLEdBQUcsQ0FBUztBQUM3RSxHQUFHO0FBRUwsSUFBSUEsSUFBeUIsRUFBYztJQUN6Q0osZ0JBQWdCRSxNQUFNLEdBQUdBO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnhueHQtZHJ1Zy1tYW5hZ2VtZW50Ly4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9wcmlzbWEudHNcbi8vIFNpbmdsZXRvbiBQcmlzbWEgY2xpZW50IOKAlCBwcmV2ZW50cyBcInRvbyBtYW55IGNvbm5lY3Rpb25zXCIgaW4gTmV4dC5qcyBkZXYgbW9kZVxuLy8gKGhvdCByZWxvYWQgY3JlYXRlcyBuZXcgaW5zdGFuY2VzIG9uIGV2ZXJ5IHNhdmU7IHRoaXMgcmV1c2VzIG9uZSBnbG9iYWwgaW5zdGFuY2UpLlxuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmNvbnN0IGdsb2JhbEZvclByaXNtYSA9IGdsb2JhbFRoaXMgYXMgdW5rbm93biBhcyB7IHByaXNtYTogUHJpc21hQ2xpZW50IH07XG5cbmV4cG9ydCBjb25zdCBwcmlzbWEgPVxuICBnbG9iYWxGb3JQcmlzbWEucHJpc21hID8/XG4gIG5ldyBQcmlzbWFDbGllbnQoe1xuICAgIGxvZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgPyBbJ2Vycm9yJywgJ3dhcm4nXSA6IFsnZXJyb3InXSxcbiAgfSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBwcmlzbWE7XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZ2xvYmFsRm9yUHJpc21hIiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsImxvZyIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprescriptions%2Frecent%2Froute&page=%2Fapi%2Fprescriptions%2Frecent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprescriptions%2Frecent%2Froute.ts&appDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C91950%5CDesktop%5CRxNXT_Cloud_Ready_Developer_Handsoff&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();