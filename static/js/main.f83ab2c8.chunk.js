(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var n=c(3),s=c.n(n),a=c(5),o=c(1),r=c(4),i=c.n(r),l=(c(10),c(11),c(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],u=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],n=e[1],s=function(){return n("")},r=function(t){return t===c};return Object(l.jsxs)("main",{className:"section container",children:[Object(l.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[c?"".concat(c," is selected"):"No goods selected",c&&Object(l.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:s})]}),Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("tbody",{children:d.map((function(t){return Object(l.jsxs)("tr",{"data-cy":"Good",className:i()({"has-background-success-light":r(t)}),children:[Object(l.jsx)("td",{children:r(t)?Object(l.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:s,children:"-"}):Object(l.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return n(t)},children:"+"})}),Object(l.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.f83ab2c8.chunk.js.map