(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{1985:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/home/home",function(){return t(7433)}])},197:function(n,e,t){"use strict";t.d(e,{Y:function(){return a}});var r=t(7294),a=function(n,e){var t=(0,r.useRef)();(0,r.useEffect)((function(){t.current=n}),[n]),(0,r.useEffect)((function(){if(e){var n=setInterval((function(){t.current()}),e);return function(){return clearInterval(n)}}}),[e])}},4806:function(n,e,t){"use strict";t.r(e);var r=t(5893),a=t(4731),i=t(3175),o=t.n(i);e.default=function(){return(0,r.jsxs)(a.E.div,{initial:{x:0},animate:{x:500},className:o().container,children:[(0,r.jsx)(a.E.div,{className:o().bar}),(0,r.jsx)(a.E.div,{className:o().bar})]})}},8371:function(n,e,t){"use strict";t.r(e);var r=t(797),a=t(5893),i=t(7294),o=t(197);e.default=function(n){for(var e=n.initSpeed,t=n.text,s=void 0===t?"":t,c=n.teardown,l=n.refSpeed,u=void 0===l?100:l,f=[],d=0;d<s.length;d++)f.push(s[d]);var m=(0,i.useState)(!1),v=m[0],h=m[1],p=(0,i.useState)(e),y=p[0],_=p[1],g=(0,i.useState)([]),x=g[0],j=g[1];return(0,i.useEffect)((function(){j([])}),[s]),(0,o.Y)((function(){h(!v),x.length>=f.length&&c&&c()}),750),(0,o.Y)((function(){if(x!==f){var n=(0,r.Z)(f.splice(0,x.length)).concat(["_"]);j(n)}x.length>5&&_(u)}),y),(0,a.jsx)(a.Fragment,{children:x.map((function(n,e){return e==x.length-1?(0,a.jsx)("a",{style:{opacity:v?0:1},children:n},"nameid-".concat(e)):(0,a.jsx)(a.Fragment,{children:n})}))})}},7433:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var r=t(5893),a=t(2139),i=(t(4806),t(2624)),o=t.n(i),s=function(n){for(var e=0,t=0;n;){if("BODY"===n.tagName){var r=n.scrollLeft||document.documentElement.scrollLeft,a=n.scrollTop||document.documentElement.scrollTop;e+=n.offsetLeft-r+n.clientLeft,t+=n.offsetTop-a+n.clientTop}else e+=n.offsetLeft-n.scrollLeft+n.clientLeft,t+=n.offsetTop-n.scrollTop+n.clientTop;n=n.offsetParent}return{x:e,y:t}},c=t(4731),l=t(7294),u=t(8371),f=t(4642),d=function(){return(0,r.jsx)(c.E.div,{transition:{duration:.5},className:o().stickyBanner,children:(0,r.jsx)(f.default,{showBrand:!0})})},m=function(n){var e=n.setCmdText,t=n.setCmdSticky,i=(0,l.useRef)(null),m=(0,l.useState)(!1),v=m[0],h=m[1],p=function(){var n=s(i.current).y;h(n<-150),t(n<-150)};return(0,l.useEffect)((function(){window.addEventListener("scroll",p),window.removeEventListener("scroll",(function(){return p}))}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:o().nonStickyBanner,children:(0,r.jsx)(f.default,{})}),(0,r.jsxs)("div",{ref:i,className:o().mainBody,children:[(0,r.jsx)("div",{className:o().mainTitle,children:(0,r.jsx)(c.E.h1,{initial:{opacity:0},animate:{opacity:1},onHoverStart:function(){return e("> Yep, that's my name")},children:(0,r.jsx)(u.default,{text:"Kim Clarence Pe\xf1aflor",initSpeed:300})})}),(0,r.jsx)(c.E.img,{initial:{opacity:0},animate:{opacity:.1},transition:{delay:5},onHoverStart:function(){return e("> Awesome logo?")},src:"/assets/logo.svg",className:o().logo}),(0,r.jsx)("div",{className:o().mainSubtitle,children:(0,r.jsx)(c.E.h4,{initial:{opacity:0},animate:{opacity:1},transition:{delay:5},children:(0,r.jsx)("i",{children:"< Full Stack Software Engineer />"})})}),(0,r.jsxs)("div",{className:o().socMed,children:[(0,r.jsx)(a.default,{onHoverStart:function(){return e("> Jump to my facebook profile")},src:"/assets/facebook.svg",url:"https://web.facebook.com/kcpenaflor11",delay:5.2}),(0,r.jsx)(a.default,{onHoverStart:function(){return e("> Jump to my github page")},src:"/assets/github.svg",url:"https://github.com/Clientrace",delay:5.4}),(0,r.jsx)(a.default,{onHoverStart:function(){return e("> View my linkedin page")},src:"/assets/linkedin.svg",url:"https://www.linkedin.com/in/kcpenaflor",delay:5.6}),(0,r.jsx)(a.default,{onHoverStart:function(){return e("> Visit my instagram")},src:"/assets/instagram.svg",url:"https://www.instagram.com/kcpenaflor/",delay:5.8})]})]}),v&&(0,r.jsx)(d,{})]})}},2139:function(n,e,t){"use strict";t.r(e);var r=t(5893),a=t(1147),i=t.n(a),o=t(4731);e.default=function(n){var e=n.src,t=n.url,a=n.delay,s=n.onHoverStart;return(0,r.jsx)(r.Fragment,{children:t?(0,r.jsx)(o.E.a,{whileHover:{opacity:.3},href:t,target:"_blank",children:(0,r.jsx)(o.E.img,{onHoverStart:s,initial:{scale:1.3,opacity:0},animate:{scale:1,opacity:1},whileHover:{scale:1.2},transition:{delay:a},src:e,className:i().image})}):(0,r.jsx)(o.E.img,{src:e,className:i().image})})}},4642:function(n,e,t){"use strict";t.r(e);var r=t(5893),a=t(3614),i=t.n(a),o=t(8340),s=t(5316),c=function(n){n.active;var e=n.name,t=n.link;return(0,r.jsx)("div",{children:(0,r.jsx)(o.Z.Link,{href:t,children:e})})};e.default=function(n){var e=n.pageIndex,t=n.showBrand,a=void 0!==t&&t;return(0,r.jsx)("div",{className:i().mainBody,children:(0,r.jsxs)(s.Z,{expand:"lg",variant:"dark",className:"mr-auto",children:[(0,r.jsx)(s.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),a&&(0,r.jsxs)(s.Z.Brand,{className:i().brand,children:[(0,r.jsx)("img",{src:"/assets/logo.svg"}),"Kim Clarence Penaflor"]}),(0,r.jsx)(s.Z.Collapse,{children:(0,r.jsx)(o.Z,{activeKey:e,className:"ms-auto",children:[{title:"Reboot",link:"/"}].map((function(n,e){return(0,r.jsx)(c,{name:n.title,link:n.link},"navitem-".concat(e))}))})})]})})}},3175:function(n){n.exports={container:"bar_container__4c_Z7",bar:"bar_bar__JNNTP"}},2624:function(n){n.exports={mainBody:"home_mainBody__gl5Ge",logo:"home_logo__488_2",mainTitle:"home_mainTitle__2VnF8",mainSubtitle:"home_mainSubtitle__n_UBo",socMed:"home_socMed__TVmz8",stickyBanner:"home_stickyBanner__xMbiz",nonStickyBanner:"home_nonStickyBanner__M9Tyt"}},1147:function(n){n.exports={image:"icon_image__HvLyv"}},3614:function(n){n.exports={mainBody:"topnav_mainBody__6pwMg",brand:"topnav_brand__lLHXr"}},797:function(n,e,t){"use strict";function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function a(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(n){if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(e,{Z:function(){return a}})}},function(n){n.O(0,[731,105,774,888,179],(function(){return e=1985,n(n.s=e);var e}));var e=n.O();_N_E=e}]);