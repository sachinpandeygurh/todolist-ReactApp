(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(4),c=n.n(l);n(15),n(17),n(3);var o=function(){return r.a.createElement("nav",null,"Gate ready to complete ",r.a.createElement("span",null,"Your Daily Goal")," ")},u=n(5),i=n(1);var m=function(e){var t=e.title,n=e.description,a=e.deleteTask,l=e.index;return r.a.createElement("div",{className:"task"},r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("span",null,n)),r.a.createElement("button",{type:"button",for:"remove",onClick:function(){return a(l)}},"-"))};var s=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],d=o[1],p=Object(a.useState)(""),f=Object(i.a)(p,2),v=f[0],E=f[1],b=function(e){var t=n.filter(function(t,n){return n!==e});console.log(t),l(t)};return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Create your Todo List"),r.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault();var t={title:s,description:v};l([].concat(Object(u.a)(n),[t])),d(""),E("")}},r.a.createElement("input",{type:"text",name:"",id:"",placeholder:"Title",value:s,onChange:function(e){return d(e.target.value)}}),r.a.createElement("textarea",{name:"",id:"",cols:"",rows:"",placeholder:"Discription",value:v,onChange:function(e){return E(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Add")),n.map(function(e,t){return r.a.createElement(m,{key:t,title:e.title,description:e.description,deleteTask:b,index:t})}))};var d=function(){return r.a.createElement("div",{className:""},r.a.createElement(o,null),r.a.createElement(s,null))};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)))},3:function(e,t,n){},6:function(e,t,n){e.exports=n(21)}},[[6,2,1]]]);
//# sourceMappingURL=main.d87b6231.chunk.js.map