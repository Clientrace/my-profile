exports.id = 131;
exports.ids = [131];
exports.modules = {

/***/ 8919:
/***/ ((module) => {

// Exports
module.exports = {
	"divider": "divider_divider__rnRM1"
};


/***/ }),

/***/ 1902:
/***/ ((module) => {

// Exports
module.exports = {
	"gauage": "gauge_gauage__AT2DW"
};


/***/ }),

/***/ 8109:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "heading_heading__sG7Co"
};


/***/ }),

/***/ 4600:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBodyContainer": "skills_mainBodyContainer__do1H7",
	"body": "skills_body__JziSx",
	"container": "skills_container__tkJZI",
	"content": "skills_content__z8pKy",
	"contributions": "skills_contributions__U_P_t",
	"chart": "skills_chart__n6KfD",
	"chart-content": "skills_chart-content__yTYIa",
	"gaugeBar": "skills_gaugeBar__77Aiq",
	"title": "skills_title__RRIIz",
	"meter": "skills_meter__I3f8O"
};


/***/ }),

/***/ 4263:
/***/ ((module) => {

// Exports
module.exports = {
	"subheading": "subheading_subheading__0K4iF"
};


/***/ }),

/***/ 6007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _divider_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8919);
/* harmony import */ var _divider_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divider_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Divider = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_divider_module_scss__WEBPACK_IMPORTED_MODULE_1___default().divider)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);


/***/ }),

/***/ 807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _gauge_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1902);
/* harmony import */ var _gauge_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_gauge_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);



const Gauage = ({ percent  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.div */ .E.div, {
        initial: {
            width: 0
        },
        animate: {
            width: percent
        },
        transition: {
            duration: 1
        },
        className: (_gauge_module_scss__WEBPACK_IMPORTED_MODULE_2___default().gauage)
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gauage);


/***/ }),

/***/ 2595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _heading_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8109);
/* harmony import */ var _heading_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heading_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_icon_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);



const Heading = ({ children , iconUrl =null  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
        className: (_heading_module_scss__WEBPACK_IMPORTED_MODULE_2___default().heading),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icon_icon__WEBPACK_IMPORTED_MODULE_1__["default"], {
                src: iconUrl ? iconUrl : "/assets/block.svg"
            }),
            " ",
            children
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 2131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4600);
/* harmony import */ var _skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_skills_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _heading_heading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2595);
/* harmony import */ var _subheading_subheading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8523);
/* harmony import */ var _gauge_gauge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(807);
/* harmony import */ var _divider_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6007);
/* harmony import */ var react_github_graph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2384);
/* harmony import */ var react_github_graph__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_github_graph__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _animations_name_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8371);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3407);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7294);










const GauageBar = ({ title , meter  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().gaugeBar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().meter),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_gauge_gauge__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    percent: meter
                })
            })
        ]
    });
};
const Skills = ({ hoverAction , animationFlag  })=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_9__/* .motion.div */ .E.div, {
        className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainBodyContainer),
        onHoverStart: ()=>hoverAction(),
        style: {
            opacity: 0.8
        },
        whileHover: {
            opacity: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_heading__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    children: loaded || !animationFlag ? "Technical Skills" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animations_name_name__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        text: "Technical Skills",
                        initSpeed: 100,
                        teardown: ()=>setLoaded(true)
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subheading_subheading__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    children: "Basic (Languages and Databases):"
                                }),
                                "Python, Javascript, NodeJS, Go lang, HTML, CSS, Java, C, C++, MySQL, NoSQL",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subheading_subheading__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    children: "Advance (Frameworks, Platforms, Cloud, and Other Technologies):"
                                }),
                                "ReactJS, AngularJS, VueJS, DynamoDB, AWS, Serverless, Terraform, Postgres, Redis, OpenCV, Linux, MongoDB, NativeScript, DialogFlow, Postman, Cypress",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subheading_subheading__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                    children: "Personal Github Contributions:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contributions),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_github_graph__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        username: "Clientrace"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default().chart),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: "Language Mastery Chart"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Rating myself in each languages"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_skills_module_scss__WEBPACK_IMPORTED_MODULE_8___default()["chart-content"]),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "Python (5yrs Exp)",
                                                meter: "85%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "Javascript (4yrs Exp)",
                                                meter: "75%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "NodeJS (4yrs Exp)",
                                                meter: "75%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "Go lang (2yrs Exp)",
                                                meter: "60%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "HTML (5yrs Exp)",
                                                meter: "70%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "CSS (5yrs Exp)",
                                                meter: "60%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "Java (2yrs Exp)",
                                                meter: "40%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "C (1yr Exp)",
                                                meter: "30%"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GauageBar, {
                                                title: "C++ (1yr Exp)",
                                                meter: "20%"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);


/***/ }),

/***/ 8523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _subheading_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4263);
/* harmony import */ var _subheading_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subheading_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Subheading = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
        className: (_subheading_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subheading),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subheading);


/***/ })

};
;