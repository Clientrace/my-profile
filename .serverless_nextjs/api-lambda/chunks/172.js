exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 7989:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBodyContainer": "contact_mainBodyContainer__Vm8BB",
	"body": "contact_body__UjXxT",
	"socials": "contact_socials__EUFhF"
};


/***/ }),

/***/ 1172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _divider_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6007);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7989);
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_contact_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _heading_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2595);
/* harmony import */ var _subheading_subheading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8523);
/* harmony import */ var _animations_name_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8371);
/* harmony import */ var _icon_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2139);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3407);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7294);









const Contact = ({ setCmdText , hoverAction  })=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_7__/* .motion.div */ .E.div, {
        className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mainBodyContainer),
        style: {
            opacity: 0.8
        },
        whileHover: {
            opacity: 1
        },
        onHoverStart: ()=>hoverAction(),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default().body),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heading_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    iconUrl: "/assets/contact.svg",
                    children: loaded ? "Contact" : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_animations_name_name__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        text: "Contact",
                        initSpeed: 200,
                        teardown: ()=>setLoaded(true)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default().container),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_subheading_subheading__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                children: "You can reach me via the following:"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_divider_divider__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default().contactList),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "Email: kimc.penaflor@gmail.com"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "Mobile: +639260797073"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            "Socials:",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_8___default().socials),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                        onHoverStart: ()=>setCmdText("> Jump to my facebook profile"),
                                                        src: "/assets/facebook_dark.svg",
                                                        url: "https://web.facebook.com/kcpenaflor11"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                        onHoverStart: ()=>setCmdText("> Jump to my github page"),
                                                        src: "/assets/github_dark.svg",
                                                        url: "https://github.com/Clientrace"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                        onHoverStart: ()=>setCmdText("> View my linkedin page"),
                                                        src: "/assets/linkedin_dark.svg",
                                                        url: "https://www.linkedin.com/in/kcpenaflor"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icon_icon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                                        onHoverStart: ()=>setCmdText("> Visit my instagram"),
                                                        src: "/assets/instagram_dark.svg",
                                                        url: "https://www.instagram.com/kcpenaflor/"
                                                    })
                                                ]
                                            })
                                        ]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);


/***/ })

};
;