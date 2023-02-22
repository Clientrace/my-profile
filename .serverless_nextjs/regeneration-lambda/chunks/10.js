exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 7519:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBody": "projectCard_mainBody__i2vhj",
	"overlay": "projectCard_overlay__ekRYU",
	"description": "projectCard_description__X0ZLW",
	"red": "projectCard_red__kUvfN",
	"tech": "projectCard_tech__pwItR",
	"action": "projectCard_action__970OD"
};


/***/ }),

/***/ 8010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7519);
/* harmony import */ var _projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);



const ProjectCard = ({ name , subtitle , tech =[]  })=>{
    const renderTechIcons = ()=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: tech.map((data, idx)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `/assets/${data}.svg`
                }, `proj-${idx}`);
            })
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.div */ .E.div, {
        whileHover: {
            scale: 0.95
        },
        style: {
            backgroundColor: "black",
            cursor: "pointer"
        },
        className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mainBody),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().overlay),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                        children: name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().description),
                    children: subtitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().red)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().tech),
                    children: renderTechIcons()
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_projectCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default().action),
                    children: "View Project"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);


/***/ })

};
;