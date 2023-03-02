exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 704:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "icon_image__HvLyv"
};


/***/ }),

/***/ 2139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(704);
/* harmony import */ var _icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icon_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);



const Icon = ({ src , url , delay , onHoverStart  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: url ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.a */ .E.a, {
            whileHover: {
                opacity: 0.3
            },
            href: url,
            target: "_blank",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.img */ .E.img, {
                alt: url,
                onHoverStart: onHoverStart,
                initial: {
                    scale: 1.3,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                whileHover: {
                    scale: 1.2
                },
                transition: {
                    delay: delay
                },
                src: src,
                className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().image)
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.img */ .E.img, {
            src: src,
            alt: "tech image",
            className: (_icon_module_scss__WEBPACK_IMPORTED_MODULE_2___default().image)
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ })

};
;