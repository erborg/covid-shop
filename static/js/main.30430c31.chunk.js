(this["webpackJsonpreact-project-4"]=this["webpackJsonpreact-project-4"]||[]).push([[0],{35:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c(1),r=c(5),i=c(6),j=c.n(i),o=c(0);function a(e){return Object(o.jsx)(j.a,{type:e.type,color:"#00BFFF",height:100,width:100,timeout:3e3})}function u(e){var t=Object(r.useImage)({srcList:e.image}).src;return Object(o.jsx)("img",{src:t,alt:"respirator"})}function b(e){return Object(o.jsx)(s.Suspense,{fallback:Object(o.jsx)(a,{type:"Puff"}),children:Object(o.jsx)(u,{image:e.image})})}function l(e){var t=e.info,c=Object(s.useState)(0),r=Object(n.a)(c,2),i=r[0],j=r[1];return Object(o.jsxs)("div",{className:"item",children:[Object(o.jsx)(b,{image:t.image}),Object(o.jsxs)("div",{className:"item-info",children:[Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("p",{children:t.desc})]}),Object(o.jsxs)("div",{className:"item-quantity",children:[Object(o.jsx)("button",{disabled:0===i,onClick:function(){i>0&&j(i-1)},className:"item-less",children:"-"}),Object(o.jsx)("h3",{className:"item-total",children:i}),Object(o.jsx)("button",{onClick:function(){j(i+1)},className:"item-more",children:"+"})]})]})}function h(){var e=function(){var e=Object(s.useState)([]),t=Object(n.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)(!0),j=Object(n.a)(i,2),o=j[0],a=j[1];return{get:function(e){return new Promise((function(t,c){fetch(e).then((function(e){return e.json()})).then((function(e){e||(a(!1),c(e)),a(!1),t(e),r(e)})).catch((function(e){a(!1),c(e)}))}))},loader:o,items:c}}(),t=e.get,c=e.loader,r=e.items;Object(s.useEffect)((function(){t("https://covid-shop-mcs.herokuapp.com/").then((function(e){return console.log(e)})).catch((function(e){return console.error(e)}))}),[]);var i=r.map((function(e,t){return Object(o.jsx)(l,{info:e},t)}));return Object(o.jsx)("div",{className:"shop",children:c?Object(o.jsx)(a,{type:"ThreeDots"}):i})}var O=c(7);function m(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),c=t[0],r=t[1];return c?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{}),Object(o.jsx)("button",{className:"btn",onClick:function(){return r(!1)},children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"\u041d\u0443\u0436\u043d\u043e \u0437\u0430\u043b\u043e\u0433\u0438\u043d\u0438\u0442\u044c\u0441\u044f!"}),Object(o.jsx)("button",{className:"btn",onClick:function(){return r(!0)},children:"\u0412\u043e\u0439\u0442\u0438"})]})}Object(O.render)(Object(o.jsx)(m,{}),document.querySelector("#root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.30430c31.chunk.js.map