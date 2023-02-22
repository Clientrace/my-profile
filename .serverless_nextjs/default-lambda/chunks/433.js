exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 8419:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "bar_container__4c_Z7",
	"bar": "bar_bar__JNNTP"
};


/***/ }),

/***/ 5265:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBody": "home_mainBody__gl5Ge",
	"logo": "home_logo__488_2",
	"mainTitle": "home_mainTitle__2VnF8",
	"mainSubtitle": "home_mainSubtitle__n_UBo",
	"socMed": "home_socMed__TVmz8",
	"stickyBanner": "home_stickyBanner__xMbiz",
	"nonStickyBanner": "home_nonStickyBanner__M9Tyt"
};


/***/ }),

/***/ 4806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3407);
/* harmony import */ var _bar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8419);
/* harmony import */ var _bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_bar_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const Bar = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.div */ .E.div, {
        initial: {
            x: 0
        },
        animate: {
            x: 500
        },
        className: (_bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.div */ .E.div, {
                className: (_bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bar)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .motion.div */ .E.div, {
                className: (_bar_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bar)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bar);


/***/ }),

/***/ 7433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/pages/components/icon/icon.js
var icon = __webpack_require__(2139);
// EXTERNAL MODULE: ./src/pages/components/animations/bar/bar.js
var bar = __webpack_require__(4806);
// EXTERNAL MODULE: ./src/pages/components/home/home.module.scss
var home_module = __webpack_require__(5265);
var home_module_default = /*#__PURE__*/__webpack_require__.n(home_module);
;// CONCATENATED MODULE: ./src/helper/scrollPos.js
const getScrollPosition = (element)=>{
    var xPos = 0;
    var yPos = 0;
    while(element){
        if (element.tagName === "BODY") {
            var xScroll = element.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = element.scrollTop || document.documentElement.scrollTop;
            xPos += element.offsetLeft - xScroll + element.clientLeft;
            yPos += element.offsetTop - yScroll + element.clientTop;
        } else {
            xPos += element.offsetLeft - element.scrollLeft + element.clientLeft;
            yPos += element.offsetTop - element.scrollTop + element.clientTop;
        }
        element = element.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
};
/* harmony default export */ const helper_scrollPos = (getScrollPosition);

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 194 modules
var motion = __webpack_require__(3407);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/pages/components/animations/name/name.js
var name_name = __webpack_require__(8371);
// EXTERNAL MODULE: ./src/pages/components/topnav/topnav.js
var topnav = __webpack_require__(4642);
;// CONCATENATED MODULE: ./src/pages/components/home/home.js









const StickyBanner = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.div */.E.div, {
        transition: {
            duration: 0.5
        },
        className: (home_module_default()).stickyBanner,
        children: /*#__PURE__*/ jsx_runtime.jsx(topnav["default"], {
            showBrand: true
        })
    });
};
const Home = ({ setCmdText , setCmdSticky  })=>{
    const TOP_BANNER_OFFSET = -150;
    const pageRef = (0,react.useRef)(null);
    const { 0: isSticky , 1: setSticky  } = (0,react.useState)(false);
    const handleScroll = ()=>{
        var scrollPos = helper_scrollPos(pageRef.current).y;
        setSticky(scrollPos < TOP_BANNER_OFFSET);
        setCmdSticky(scrollPos < TOP_BANNER_OFFSET);
    };
    (0,react.useEffect)(()=>{
        window.addEventListener("scroll", handleScroll);
        window.removeEventListener("scroll", ()=>handleScroll);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (home_module_default()).nonStickyBanner,
                children: /*#__PURE__*/ jsx_runtime.jsx(topnav["default"], {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                ref: pageRef,
                className: (home_module_default()).mainBody,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (home_module_default()).mainTitle,
                        children: /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.h1 */.E.h1, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            onHoverStart: ()=>setCmdText("> Yep, that's my name"),
                            children: /*#__PURE__*/ jsx_runtime.jsx(name_name["default"], {
                                text: "Kim Clarence Pe\xf1aflor",
                                initSpeed: 300
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.img */.E.img, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 0.1
                        },
                        transition: {
                            delay: 5
                        },
                        onHoverStart: ()=>setCmdText("> Awesome logo?"),
                        src: "/assets/logo.svg",
                        className: (home_module_default()).logo
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (home_module_default()).mainSubtitle,
                        children: /*#__PURE__*/ jsx_runtime.jsx(motion/* motion.h4 */.E.h4, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 5
                            },
                            children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                children: "< Full Stack Software Engineer />"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (home_module_default()).socMed,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(icon["default"], {
                                onHoverStart: ()=>setCmdText("> Jump to my facebook profile"),
                                src: "/assets/facebook.svg",
                                url: "https://web.facebook.com/kcpenaflor11",
                                delay: 5.2
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(icon["default"], {
                                onHoverStart: ()=>setCmdText("> Jump to my github page"),
                                src: "/assets/github.svg",
                                url: "https://github.com/Clientrace",
                                delay: 5.4
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(icon["default"], {
                                onHoverStart: ()=>setCmdText("> View my linkedin page"),
                                src: "/assets/linkedin.svg",
                                url: "https://www.linkedin.com/in/kcpenaflor",
                                delay: 5.6
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(icon["default"], {
                                onHoverStart: ()=>setCmdText("> Visit my instagram"),
                                src: "/assets/instagram.svg",
                                url: "https://www.instagram.com/kcpenaflor/",
                                delay: 5.8
                            })
                        ]
                    })
                ]
            }),
            isSticky && /*#__PURE__*/ jsx_runtime.jsx(StickyBanner, {})
        ]
    });
};
/* harmony default export */ const home = (Home);


/***/ })

};
;