(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=(n(15),n(9)),u=n(2),o=n(0),j=function(t){var e=t.setCategory,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],i=r[1];return Object(o.jsx)("div",{children:Object(o.jsx)("form",{onSubmit:function(t){a.trim().length>2&&e(a),t.preventDefault()},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){i(t.target.value)}})})})},d=n(10),l=n(6),b=n.n(l),p=n(8),f=function(){var t=Object(p.a)(b.a.mark((function t(e){var n,c,r,a,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&api_key=emDLS5x82wPczycH9HcUNRWDNrJLJVTd&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){t.id;var e=t.title,n=t.url;return Object(o.jsxs)("div",{className:"card animate__fadeIn_10s",children:[Object(o.jsx)("img",{src:n,alt:e}),Object(o.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){a({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,a=n.loading;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("h3",{children:["Category ",e]}),a&&"Cargando",Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(O,Object(d.a)({},t),t.id+t.title)}))})]})},x=function(){var t=Object(c.useState)(["Dragon ball"]),e=Object(u.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)("hr",{}),Object(o.jsx)(j,{setCategory:function(t){r([].concat(Object(s.a)(n),[t]))}}),Object(o.jsx)("ol",{children:n.map((function(t,e){return Object(o.jsx)(h,{category:t},"cat".concat(e))}))})]})};i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5284221b.chunk.js.map