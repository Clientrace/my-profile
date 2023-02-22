(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{1831:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/skills/skills",function(){return n(2131)}])},197:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(7294),i=function(e,t){var n=(0,r.useRef)();(0,r.useEffect)((function(){n.current=e}),[e]),(0,r.useEffect)((function(){if(t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}},8371:function(e,t,n){"use strict";n.r(t);var r=n(797),i=n(5893),a=n(7294),s=n(197);t.default=function(e){for(var t=e.initSpeed,n=e.text,c=void 0===n?"":n,o=e.teardown,l=e.refSpeed,u=void 0===l?100:l,d=[],f=0;f<c.length;f++)d.push(c[f]);var h=(0,a.useState)(!1),m=h[0],v=h[1],x=(0,a.useState)(t),_=x[0],g=x[1],p=(0,a.useState)([]),y=p[0],j=p[1];return(0,a.useEffect)((function(){j([])}),[c]),(0,s.Y)((function(){v(!m),y.length>=d.length&&o&&o()}),750),(0,s.Y)((function(){if(y!==d){var e=(0,r.Z)(d.splice(0,y.length)).concat(["_"]);j(e)}y.length>5&&g(u)}),_),(0,i.jsx)(i.Fragment,{children:y.map((function(e,t){return t==y.length-1?(0,i.jsx)("a",{style:{opacity:m?0:1},children:e},"nameid-".concat(t)):(0,i.jsx)(i.Fragment,{children:e})}))})}},4003:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(1567),a=n.n(i);t.default=function(){return(0,r.jsx)("div",{className:a().divider})}},807:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(1857),a=n.n(i),s=n(4731);t.default=function(e){var t=e.percent;return(0,r.jsx)(s.E.div,{initial:{width:0},animate:{width:t},transition:{duration:1},className:a().gauage})}},2595:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(8361),a=n.n(i),s=n(2139);t.default=function(e){var t=e.children,n=e.iconUrl,i=void 0===n?null:n;return(0,r.jsxs)("h2",{className:a().heading,children:[(0,r.jsx)(s.default,{src:i||"/assets/block.svg"})," ",t]})}},2139:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(1147),a=n.n(i),s=n(4731);t.default=function(e){var t=e.src,n=e.url,i=e.delay,c=e.onHoverStart;return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)(s.E.a,{whileHover:{opacity:.3},href:n,target:"_blank",children:(0,r.jsx)(s.E.img,{onHoverStart:c,initial:{scale:1.3,opacity:0},animate:{scale:1,opacity:1},whileHover:{scale:1.2},transition:{delay:i},src:t,className:a().image})}):(0,r.jsx)(s.E.img,{src:t,className:a().image})})}},2131:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(698),a=n.n(i),s=n(2595),c=n(8523),o=n(807),l=n(4003),u=n(2403),d=n(8371),f=n(4731),h=n(7294),m=function(e){var t=e.title,n=e.meter;return(0,r.jsxs)("div",{className:a().gaugeBar,children:[(0,r.jsx)("div",{className:a().title,children:t}),(0,r.jsx)("div",{className:a().meter,children:(0,r.jsx)(o.default,{percent:n})})]})};t.default=function(e){var t=e.hoverAction,n=(0,h.useState)(!1),i=n[0],o=n[1];return(0,r.jsx)(f.E.div,{className:a().mainBodyContainer,onHoverStart:function(){return t()},style:{opacity:.8},whileHover:{opacity:1},children:(0,r.jsxs)("div",{className:a().body,children:[(0,r.jsx)(s.default,{children:i?"Technical Skills":(0,r.jsx)(d.default,{text:"Technical Skills",initSpeed:100,teardown:function(){return o(!0)}})}),(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)("div",{className:a().content,children:[(0,r.jsx)(c.default,{children:"Basic (Languages and Databases):"}),"Python, Javascript, NodeJS, Go lang, HTML, CSS, Java, C, C++, MySQL, NoSQL",(0,r.jsx)(l.default,{}),(0,r.jsx)(c.default,{children:"Advance (Frameworks, Platforms, Cloud, and Other Technologies):"}),"ReactJS, AngularJS, VueJS, DynamoDB, AWS, Serverless, Terraform, Postgres, Redis, OpenCV, Linux, MongoDB, NativeScript, DialogFlow, Postman, Cypress",(0,r.jsx)(l.default,{}),(0,r.jsx)(c.default,{children:"Personal Github Contributions:"}),(0,r.jsx)("div",{className:a().contributions,children:(0,r.jsx)(u.Z,{username:"Clientrace"})})]}),(0,r.jsx)("div",{className:a().content,children:(0,r.jsxs)("div",{className:a().chart,children:[(0,r.jsx)("h2",{children:"Language Mastery Chart"}),(0,r.jsx)("h5",{children:"Rating myself in each languages"}),(0,r.jsxs)("div",{className:a()["chart-content"],children:[(0,r.jsx)(m,{title:"Python (5yrs Exp)",meter:"85%"}),(0,r.jsx)(m,{title:"Javascript (4yrs Exp)",meter:"75%"}),(0,r.jsx)(m,{title:"NodeJS (4yrs Exp)",meter:"75%"}),(0,r.jsx)(m,{title:"Go lang (2yrs Exp)",meter:"60%"}),(0,r.jsx)(m,{title:"HTML (5yrs Exp)",meter:"70%"}),(0,r.jsx)(m,{title:"CSS (5yrs Exp)",meter:"60%"}),(0,r.jsx)(m,{title:"Java (2yrs Exp)",meter:"40%"}),(0,r.jsx)(m,{title:"C (1yr Exp)",meter:"30%"}),(0,r.jsx)(m,{title:"C++ (1yr Exp)",meter:"20%"})]})]})})]})]})})}},8523:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(3754),a=n.n(i);t.default=function(e){var t=e.children;return(0,r.jsx)("h4",{className:a().subheading,children:t})}},1567:function(e){e.exports={divider:"divider_divider__rnRM1"}},1857:function(e){e.exports={gauage:"gauge_gauage__AT2DW"}},8361:function(e){e.exports={heading:"heading_heading__sG7Co"}},1147:function(e){e.exports={image:"icon_image__HvLyv"}},698:function(e){e.exports={mainBodyContainer:"skills_mainBodyContainer__do1H7",body:"skills_body__JziSx",container:"skills_container__tkJZI",content:"skills_content__z8pKy",contributions:"skills_contributions__U_P_t",chart:"skills_chart__n6KfD","chart-content":"skills_chart-content__yTYIa",gaugeBar:"skills_gaugeBar__77Aiq",title:"skills_title__RRIIz",meter:"skills_meter__I3f8O"}},3754:function(e){e.exports={subheading:"subheading_subheading__0K4iF"}},797:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return i}})}},function(e){e.O(0,[731,403,774,888,179],(function(){return t=1831,e(e.s=t);var t}));var t=e.O();_N_E=t}]);