(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[268],{197:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(7294),i=function(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}},4806:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(4731),a=n(3175),o=n.n(a);t.default=function(){return(0,r.jsxs)(i.E.div,{initial:{x:0},animate:{x:500},className:o().container,children:[(0,r.jsx)(i.E.div,{className:o().bar}),(0,r.jsx)(i.E.div,{className:o().bar})]})}},8371:function(e,t,n){"use strict";n.r(t);var r=n(797),i=n(5893),a=n(7294),o=n(197);t.default=function(e){for(var t=e.initSpeed,n=e.text,s=void 0===n?"":n,c=e.teardown,l=e.refSpeed,u=void 0===l?100:l,d=[],f=0;f<s.length;f++)d.push(s[f]);var m=(0,a.useState)(!1),v=m[0],h=m[1],p=(0,a.useState)(t),x=p[0],_=p[1],j=(0,a.useState)([]),g=j[0],y=j[1];return(0,a.useEffect)((function(){y([])}),[s]),(0,o.Y)((function(){h(!v),g.length>=d.length&&c&&c()}),750),(0,o.Y)((function(){if(g!==d){var e=(0,r.Z)(d.splice(0,g.length)).concat(["_"]);y(e)}g.length>5&&_(u)}),x),(0,i.jsx)(i.Fragment,{children:g.map((function(e,t){return t==g.length-1?(0,i.jsx)("a",{style:{opacity:v?0:1},children:e},"nameid-".concat(t)):(0,i.jsx)(i.Fragment,{children:e})}))})}},6964:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(4731),a=n(1059),o=n.n(a),s=n(8371);t.default=function(e){var t=e.initText,n=void 0===t?"":t,a=e.showFlag,c=void 0===a||a,l=e.setAccessFlag,u=e.cmdText,d=void 0===u?"":u,f=e.sticky,m=void 0!==f&&f;return(0,r.jsx)(i.E.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.2},className:o()[m?"command-sticky":"command"],children:c?(0,r.jsx)(s.default,{text:d,initSpeed:100,refSpeed:60,teardown:function(){return l(!0)}}):n})}},4003:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(1567),a=n.n(i);t.default=function(){return(0,r.jsx)("div",{className:a().divider})}},2595:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(8361),a=n.n(i),o=n(2139);t.default=function(e){var t=e.children,n=e.iconUrl,i=void 0===n?null:n;return(0,r.jsxs)("h2",{className:a().heading,children:[(0,r.jsx)(o.default,{src:i||"/assets/block.svg"})," ",t]})}},4631:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(1799);function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}var a=n(5893),o=n(2139),s=(n(4806),n(2624)),c=n.n(s),l=function(e){for(var t=0,n=0;e;){if("BODY"===e.tagName){var r=e.scrollLeft||document.documentElement.scrollLeft,i=e.scrollTop||document.documentElement.scrollTop;t+=e.offsetLeft-r+e.clientLeft,n+=e.offsetTop-i+e.clientTop}else t+=e.offsetLeft-e.scrollLeft+e.clientLeft,n+=e.offsetTop-e.scrollTop+e.clientTop;e=e.offsetParent}return{x:t,y:n}},u=n(4731),d=n(7294),f=n(8371),m=n(4642),v=function(){return(0,a.jsx)(u.E.div,{transition:{duration:.5},className:c().stickyBanner,children:(0,a.jsx)(m.default,{showBrand:!0})})},h=function(e){var t=e.headingText,n=e.subheadingText,s=e.setCmdText,h=e.setCmdSticky,p=e.animationFlag,x=(0,d.useRef)(null),_=(0,d.useState)(!1),j=_[0],g=_[1],y=p&&{initial:{opacity:0},animate:{opacity:1},transition:{delay:5}},b=p&&{initial:{opacity:0},animate:{opacity:.1},transition:{delay:5}},k=function(){var e=l(x.current).y;g(e<-150),h(e<-150)};return(0,d.useEffect)((function(){window.addEventListener("scroll",k),window.removeEventListener("scroll",(function(){return k}))}),[k]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:c().nonStickyBanner,children:(0,a.jsx)(m.default,{})}),(0,a.jsxs)("div",{ref:x,className:c().mainBody,children:[(0,a.jsx)("div",{className:c().mainTitle,children:(0,a.jsx)(u.E.h1,{initial:{opacity:0},animate:{opacity:1},onHoverStart:function(){return s("> Yep, that's my name")},children:(0,a.jsx)(f.default,{text:t,initSpeed:300})})}),(0,a.jsx)(u.E.img,i((0,r.Z)({},b),{onHoverStart:function(){return s("> Awesome logo?")},src:"/assets/logo.svg",className:c().logo})),(0,a.jsx)("div",{className:c().mainSubtitle,children:(0,a.jsx)(u.E.h4,i((0,r.Z)({},y),{children:(0,a.jsx)("i",{children:n})}))}),(0,a.jsxs)("div",{className:c().socMed,children:[(0,a.jsx)(o.default,{onHoverStart:function(){return s("> Jump to my facebook profile")},src:"/assets/facebook.svg",url:"https://web.facebook.com/kcpenaflor11",delay:p?5.2:.1}),(0,a.jsx)(o.default,{onHoverStart:function(){return s("> Jump to my github page")},src:"/assets/github.svg",url:"https://github.com/Clientrace",delay:p?5.4:.2}),(0,a.jsx)(o.default,{onHoverStart:function(){return s("> View my linkedin page")},src:"/assets/linkedin.svg",url:"https://www.linkedin.com/in/kcpenaflor",delay:p?5.6:.3}),(0,a.jsx)(o.default,{onHoverStart:function(){return s("> Visit my instagram")},src:"/assets/instagram.svg",url:"https://www.instagram.com/kcpenaflor/",delay:p?5.8:.4})]})]}),j&&(0,a.jsx)(v,{})]})}},2139:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(1147),a=n.n(i),o=n(4731);t.default=function(e){var t=e.src,n=e.url,i=e.delay,s=e.onHoverStart;return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)(o.E.a,{whileHover:{opacity:.3},href:n,target:"_blank",children:(0,r.jsx)(o.E.img,{alt:n,onHoverStart:s,initial:{scale:1.3,opacity:0},animate:{scale:1,opacity:1},whileHover:{scale:1.2},transition:{delay:i},src:t,className:a().image})}):(0,r.jsx)(o.E.img,{src:t,alt:"tech image",className:a().image})})}},8010:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(4025),a=n.n(i),o=n(4731);t.default=function(e){var t=e.name,n=e.subtitle,i=e.tech,s=void 0===i?[]:i,c=e.linkoutUrl;return(0,r.jsx)(o.E.div,{whileHover:{scale:.95},style:{backgroundColor:"black",cursor:"pointer"},className:a().mainBody,children:(0,r.jsxs)("div",{className:a().overlay,children:[(0,r.jsx)("div",{children:(0,r.jsx)("b",{children:t})}),(0,r.jsx)("div",{className:a()["link-out"],children:(0,r.jsx)(o.E.a,{href:c,target:"_blank",children:(0,r.jsx)(o.E.img,{alt:"link out icon",whileHover:{scale:1.2},src:"/assets/link-out.svg"})})}),(0,r.jsx)("div",{className:a().description,children:n}),(0,r.jsx)("div",{className:a().red}),(0,r.jsx)("div",{className:a().tech,children:(0,r.jsx)("div",{children:s.map((function(e,t){return(0,r.jsx)("img",{src:"/assets/".concat(e,".svg")},"proj-".concat(t))}))})}),(0,r.jsx)("div",{className:a().action,children:"View Project"})]})})}},8523:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(3754),a=n.n(i);t.default=function(e){var t=e.children;return(0,r.jsx)("h4",{className:a().subheading,children:t})}},4642:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(3614),a=n.n(i),o=n(8340),s=n(5316),c=function(e){e.active;var t=e.name,n=e.link;return(0,r.jsx)("div",{children:(0,r.jsx)(o.Z.Link,{href:n,children:t})})};t.default=function(e){var t=e.pageIndex,n=e.showBrand,i=void 0!==n&&n;return(0,r.jsx)("div",{className:a().mainBody,children:(0,r.jsxs)(s.Z,{expand:"lg",variant:"dark",className:"mr-auto",children:[(0,r.jsx)(s.Z.Toggle,{"aria-controls":"responsive-navbar-nav"}),i&&(0,r.jsxs)(s.Z.Brand,{className:a().brand,children:[(0,r.jsx)("img",{src:"/assets/logo.svg",alt:"main logo"}),"Kim Clarence Penaflor"]}),(0,r.jsx)(s.Z.Collapse,{children:(0,r.jsx)(o.Z,{activeKey:t,className:"ms-auto",children:[{title:"Reboot",link:"/"}].map((function(e,t){return(0,r.jsx)(c,{name:e.title,link:e.link},"navitem-".concat(t))}))})})]})})}},3175:function(e){e.exports={container:"bar_container__4c_Z7",bar:"bar_bar__JNNTP"}},1059:function(e){e.exports={command:"cmd_command__nkS2T","command-sticky":"cmd_command-sticky__iZBba"}},1567:function(e){e.exports={divider:"divider_divider__rnRM1"}},8361:function(e){e.exports={heading:"heading_heading__sG7Co"}},2624:function(e){e.exports={mainBody:"home_mainBody__gl5Ge",logo:"home_logo__488_2",mainTitle:"home_mainTitle__2VnF8",mainSubtitle:"home_mainSubtitle__n_UBo",socMed:"home_socMed__TVmz8",stickyBanner:"home_stickyBanner__xMbiz",nonStickyBanner:"home_nonStickyBanner__M9Tyt"}},1147:function(e){e.exports={image:"icon_image__HvLyv"}},4025:function(e){e.exports={mainBody:"projectCard_mainBody__i2vhj",overlay:"projectCard_overlay__ekRYU","link-out":"projectCard_link-out__LNgsC",description:"projectCard_description__X0ZLW",red:"projectCard_red__kUvfN",tech:"projectCard_tech__pwItR",action:"projectCard_action__970OD"}},3754:function(e){e.exports={subheading:"subheading_subheading__0K4iF"}},3614:function(e){e.exports={mainBody:"topnav_mainBody__6pwMg",brand:"topnav_brand__lLHXr"}},9008:function(e,t,n){e.exports=n(5443)},797:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}}]);