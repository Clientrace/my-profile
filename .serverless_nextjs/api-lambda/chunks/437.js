exports.id = 437;
exports.ids = [437];
exports.modules = {

/***/ 9493:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBodyContainer": "projects_mainBodyContainer__t3p0x",
	"body": "projects_body__SvS6w",
	"projectList": "projects_projectList__jcn_o",
	"card": "projects_card__nhqCL"
};


/***/ }),

/***/ 9437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _divider_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6007);
/* harmony import */ var _heading_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2595);
/* harmony import */ var _subheading_subheading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8523);
/* harmony import */ var _projects_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9493);
/* harmony import */ var _projects_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_projects_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _projectCard_projectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8010);
/* harmony import */ var _animations_name_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8371);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7294);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3407);









const Projects = ({ hoverAction  })=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion.div */ .E.div, {
        onHoverStart: ()=>hoverAction(),
        className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainBodyContainer),
        style: {
            opacity: 0.8
        },
        whileHover: {
            opacity: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    iconUrl: "/assets/folder.svg",
                    children: loaded ? "Projects" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animations_name_name__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        text: "Projects",
                        initSpeed: 200,
                        teardown: ()=>setLoaded(true)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion.div */ .E.div, {
                    className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subheading_subheading__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                children: "Personal Projects"
                            }),
                            "I have worked on a lot of pet projects, some are publicly viewable on my github account.",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_projects_module_scss__WEBPACK_IMPORTED_MODULE_8___default().projectList),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion.div */ .E.div, {
                                        initial: {
                                            scale: 0.9,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_projectCard_projectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            name: "Friday Bot",
                                            tech: [
                                                "python"
                                            ],
                                            subtitle: "A Facebook Chatbot"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion.div */ .E.div, {
                                        initial: {
                                            scale: 0.9,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_projectCard_projectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            name: "Inxscape",
                                            tech: [
                                                "javascript",
                                                "python"
                                            ],
                                            subtitle: "Headless Web CMS Tool"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion.div */ .E.div, {
                                        initial: {
                                            scale: 0.9,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            opacity: 1
                                        },
                                        transition: {
                                            delay: 0.6
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_projectCard_projectCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                            name: "Pymicro",
                                            tech: [
                                                "python"
                                            ],
                                            subtitle: "Microservice framework"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);


/***/ })

};
;