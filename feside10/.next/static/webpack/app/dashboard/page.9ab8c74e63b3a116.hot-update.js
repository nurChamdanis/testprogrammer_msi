"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./src/app/dashboard/page.tsx":
/*!************************************!*\
  !*** ./src/app/dashboard/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constant */ \"(app-pages-browser)/./constant/index.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Dashboard() {\n    _s();\n    const [salesData, setSalesData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // Async function to load data\n    const loadData = async ()=>{\n        try {\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(_constant__WEBPACK_IMPORTED_MODULE_1__.URL_BE + \"/api/sales_detail/all/0\");\n            console.log(data);\n            setSalesData(data); // Assuming the API returns the data in the expected format\n        } catch (err) {\n            console.error(\"Error fetching data:\", err);\n            setError(axios__WEBPACK_IMPORTED_MODULE_4__.AxiosError.arguments);\n        } finally{\n            setLoading(false);\n        }\n    };\n    // Use effect to call loadData on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        loadData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-bold mb-4\",\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"/dashboard/tambah\",\n                children: \"Tambah Transaksi\"\n            }, void 0, false, {\n                fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"datatable\",\n                children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, this) : error ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Error: \",\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 21\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    style: {\n                        width: \"100%\",\n                        border: \"solid 1px black\",\n                        borderCollapse: \"collapse\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"No\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"No Transaksi\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Tanggal\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Nama Customer\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Jumlah Barang\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Sub total\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Diskon\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Ongkir\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        children: \"Total\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: salesData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 37\n                                    }, this)\n                                }, item.sales_id, false, {\n                                    fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tfoot\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        colSpan: 8,\n                                        children: \"Grand Total\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {}, void 0, false, {\n                                        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\testprogrammer_msi\\\\feside10\\\\src\\\\app\\\\dashboard\\\\page.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_s(Dashboard, \"ftAupnuDBoUE9IIYHXJgSZx6vZ8=\");\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZGFzaGJvYXJkL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUyQztBQUNNO0FBQ0U7QUFjcEMsU0FBU007O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSCwrQ0FBUUEsQ0FBZ0IsRUFBRTtJQUU1RCxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBRW5DLDhCQUE4QjtJQUM5QixNQUFNUSxXQUFXO1FBQ2IsSUFBSTtZQUNBLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTWIsNkNBQUtBLENBQUNjLEdBQUcsQ0FBQ2YsNkNBQU1BLEdBQUc7WUFDMUNnQixRQUFRQyxHQUFHLENBQUNIO1lBRVpOLGFBQWFNLE9BQU8sMkRBQTJEO1FBQ25GLEVBQUUsT0FBT0ksS0FBSztZQUNWRixRQUFRTCxLQUFLLENBQUMsd0JBQXdCTztZQUN0Q04sU0FBU1YsNkNBQVVBLENBQUNpQixTQUFTO1FBQ2pDLFNBQVU7WUFDTlQsV0FBVztRQUNmO0lBQ0o7SUFFQSxpREFBaUQ7SUFDakROLGdEQUFTQSxDQUFDO1FBQ05TO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBeUI7Ozs7OzswQkFDdkMsOERBQUNFO2dCQUFFQyxNQUFNOzBCQUFxQjs7Ozs7OzBCQUM5Qiw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ1ZaLHdCQUNHLDhEQUFDZ0I7OEJBQUU7Ozs7OzJCQUNIZCxzQkFDQSw4REFBQ2M7O3dCQUFFO3dCQUFRZDs7Ozs7O3lDQUVYLDhEQUFDZTtvQkFBTUMsT0FBTzt3QkFBRUMsT0FBTzt3QkFBUUMsUUFBUTt3QkFBbUJDLGdCQUFnQjtvQkFBVzs7c0NBQ2pGLDhEQUFDQztzQ0FDRyw0RUFBQ0M7O2tEQUNHLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQTtrREFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR0osOERBQUNDO3NDQUNJM0IsVUFBVTRCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDMUIsOERBQUNMOzhDQUNHLDRFQUFDTTtrREFBSUQsUUFBUTs7Ozs7O21DQURSRCxLQUFLRyxRQUFROzs7Ozs7Ozs7O3NDQUs5Qiw4REFBQ0M7c0NBQ0csNEVBQUNSOztrREFDRyw4REFBQ007d0NBQUdHLFNBQVM7a0RBQUc7Ozs7OztrREFDaEIsOERBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakM7R0F0RXdCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9kYXNoYm9hcmQvcGFnZS50c3g/YzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IFVSTF9CRSB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50JztcclxuaW1wb3J0IGF4aW9zLCB7IEF4aW9zLCBBeGlvc0Vycm9yIH0gZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBTYWxlc0RldGFpbCB7XHJcbiAgICBzYWxlc19pZDogbnVtYmVyOyAvLyBBZGp1c3QgdGhlIHR5cGUgYmFzZWQgb24geW91ciBhY3R1YWwgZGF0YVxyXG4gICAgdGdsOiBzdHJpbmc7ICAgICAgLy8gQXNzdW1pbmcgZGF0ZSBpcyBhIHN0cmluZywgYWRqdXN0IGlmIGl0J3MgYSBEYXRlIG9iamVjdFxyXG4gICAgbmFtZTogc3RyaW5nOyAgICAgLy8gQXNzdW1pbmcgdGhpcyBpcyB0aGUgY3VzdG9tZXIncyBuYW1lXHJcbiAgICBxdHk6IG51bWJlcjsgICAgICAvLyBRdWFudGl0eVxyXG4gICAgdG90YWw6IG51bWJlcjsgICAgLy8gU3ViIHRvdGFsXHJcbiAgICBkaXNrb246IG51bWJlcjsgICAvLyBEaXNjb3VudFxyXG4gICAgb25na2lyOiBudW1iZXI7ICAgLy8gU2hpcHBpbmcgY29zdFxyXG4gICAgdG90YWxfYWxsOiBudW1iZXI7IC8vIFRvdGFsIGFtb3VudCwgYWRqdXN0IGFjY29yZGluZyB0byB5b3VyIEFQSVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG4gICAgY29uc3QgW3NhbGVzRGF0YSwgc2V0U2FsZXNEYXRhXSA9IHVzZVN0YXRlPFNhbGVzRGV0YWlsW10+KFtdKTtcclxuXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gQXN5bmMgZnVuY3Rpb24gdG8gbG9hZCBkYXRhXHJcbiAgICBjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChVUkxfQkUgKyBcIi9hcGkvc2FsZXNfZGV0YWlsL2FsbC8wXCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFNhbGVzRGF0YShkYXRhKTsgLy8gQXNzdW1pbmcgdGhlIEFQSSByZXR1cm5zIHRoZSBkYXRhIGluIHRoZSBleHBlY3RlZCBmb3JtYXRcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKEF4aW9zRXJyb3IuYXJndW1lbnRzKTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIFVzZSBlZmZlY3QgdG8gY2FsbCBsb2FkRGF0YSBvbiBjb21wb25lbnQgbW91bnRcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZERhdGEoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+RGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgICAgPGEgaHJlZj17Jy9kYXNoYm9hcmQvdGFtYmFoJ30+VGFtYmFoIFRyYW5zYWtzaTwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RhdGF0YWJsZSc+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IGVycm9yID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVycm9yOiB7ZXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYm9yZGVyOiAnc29saWQgMXB4IGJsYWNrJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm88L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5ObyBUcmFuc2Frc2k8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UYW5nZ2FsPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+TmFtYSBDdXN0b21lcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkp1bWxhaCBCYXJhbmc8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TdWIgdG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5EaXNrb248L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5PbmdraXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NhbGVzRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aXRlbS5zYWxlc19pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aW5kZXggKyAxfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xTcGFuPXs4fT5HcmFuZCBUb3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogWW91IGNhbiBjYWxjdWxhdGUgZ3JhbmQgdG90YWwgaGVyZSBpZiBuZWVkZWQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVVJMX0JFIiwiYXhpb3MiLCJBeGlvc0Vycm9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkRhc2hib2FyZCIsInNhbGVzRGF0YSIsInNldFNhbGVzRGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWREYXRhIiwiZGF0YSIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJhcmd1bWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImEiLCJocmVmIiwicCIsInRhYmxlIiwic3R5bGUiLCJ3aWR0aCIsImJvcmRlciIsImJvcmRlckNvbGxhcHNlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0ZCIsInNhbGVzX2lkIiwidGZvb3QiLCJjb2xTcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/dashboard/page.tsx\n"));

/***/ })

});