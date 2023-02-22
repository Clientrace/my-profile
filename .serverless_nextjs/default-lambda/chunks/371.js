"use strict";
exports.id = 371;
exports.ids = [371];
exports.modules = {

/***/ 2746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useInterval)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);

/*
    Custom useInterval hook for delta time
    Tracks delta time index for changing background/components
    Save's the initial time stamp for time ellapsed computation.
*/ const useInterval = (callback, delay)=>{
    const callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        callbackRef.current = callback;
    }, [
        callback
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const tick = ()=>{
            callbackRef.current();
        };
        if (delay) {
            let id = setInterval(tick, delay);
            return ()=>clearInterval(id);
        }
    }, [
        delay
    ]);
};


/***/ }),

/***/ 8371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _helper_delta_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2746);



const Name = ({ initSpeed , text ="" , teardown , refSpeed =100  })=>{
    let fullname = [];
    for(var i = 0; i < text.length; i++){
        fullname.push(text[i]);
    }
    const { 0: bleep , 1: setBleep  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: speed , 1: setSpeed  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initSpeed);
    const { 0: name , 1: setName  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setName([]);
    }, [
        text
    ]);
    (0,_helper_delta_timer__WEBPACK_IMPORTED_MODULE_2__/* .useInterval */ .Y)(()=>{
        setBleep(!bleep);
        if (name.length >= fullname.length) {
            if (teardown) {
                teardown();
            }
        }
    }, 750);
    (0,_helper_delta_timer__WEBPACK_IMPORTED_MODULE_2__/* .useInterval */ .Y)(()=>{
        if (name !== fullname) {
            const n = [
                ...fullname.splice(0, name.length),
                "_"
            ];
            setName(n);
        }
        if (name.length > 5) {
            setSpeed(refSpeed);
        }
    }, speed);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: name.map((el, idx)=>{
            if (idx == name.length - 1) {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    style: {
                        opacity: bleep ? 0 : 1
                    },
                    children: el
                }, `nameid-${idx}`);
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: el
            });
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Name);


/***/ })

};
;