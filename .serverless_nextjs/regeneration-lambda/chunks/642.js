exports.id = 642;
exports.ids = [642];
exports.modules = {

/***/ 3060:
/***/ ((module) => {

// Exports
module.exports = {
	"mainBody": "topnav_mainBody__6pwMg",
	"brand": "topnav_brand__lLHXr"
};


/***/ }),

/***/ 4642:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _topnav_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3060);
/* harmony import */ var _topnav_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_topnav_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1830);



const NavItem = ({ active , name , link  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* .Nav.Link */ .JL.Link, {
            href: link,
            children: name
        })
    });
};
const TopNav = ({ pageIndex , showBrand =false  })=>{
    const navList = [
        {
            title: "Reboot",
            link: "/"
        }
    ];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_topnav_module_scss__WEBPACK_IMPORTED_MODULE_2___default().mainBody),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* .Navbar */ .wp, {
            expand: "lg",
            variant: "dark",
            className: "mr-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* .Navbar.Toggle */ .wp.Toggle, {
                    "aria-controls": "responsive-navbar-nav"
                }),
                showBrand && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* .Navbar.Brand */ .wp.Brand, {
                    className: (_topnav_module_scss__WEBPACK_IMPORTED_MODULE_2___default().brand),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/assets/logo.svg",
                            alt: "main logo"
                        }),
                        "Kim Clarence Penaflor"
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* .Navbar.Collapse */ .wp.Collapse, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__/* .Nav */ .JL, {
                        activeKey: pageIndex,
                        className: "ms-auto",
                        children: navList.map((data, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                                name: data["title"],
                                link: data["link"]
                            }, `navitem-${index}`);
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);


/***/ })

};
;