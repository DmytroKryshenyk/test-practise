(function(t){function e(e){for(var r,i,s=e[0],u=e[1],l=e[2],f=0,p=[];f<s.length;f++)i=s[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"077e":function(t,e,n){},3074:function(t,e,n){},3420:function(t,e,n){},"4bc2":function(t,e,n){"use strict";var r=n("077e"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Form")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"formResults",mode:"out-in"}},[t.showSubmitInfo?t._e():n("form",{on:{submit:function(e){e.preventDefault(),t.showSubmitInfo=!0}}},[n("FormProgressBar",{attrs:{progressbar:t.progressBar}}),n("FormList",{attrs:{info:t.info,"is-valid-value":t.isValidValue}}),n("button",{attrs:{disabled:100!==t.progressBar,type:"submit"}},[t._v("Send Data")])],1),t.showSubmitInfo?n("FormResults",{attrs:{info:t.info}}):t._e()],1),n("button",{on:{click:function(e){t.showSubmitInfo=!t.showSubmitInfo}}},[t._v("click")])],1)},s=[],u=(n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.info,function(e,r,a){return n("li",{key:a},[n("label",[t._v(t._s(e.name))]),n("i",{staticClass:"animated",class:{"valid heartBeat":e.isValid,"unvalid zoomIn ":!e.isValid&&e.value}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{type:"text"},domProps:{value:e.value},on:{input:[function(n){n.target.composing||t.$set(e,"value",n.target.value)},function(e){return t.isValidValue(r)}]}})])}),0)}),l=[],c={name:"FormList",props:["info","isValidValue"]},f=c,p=(n("d27b"),n("2877")),d=Object(p["a"])(f,u,l,!1,null,"5b46a34a",null),m=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"progress-bar"}},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:{width:t.progressbar+"%"}})])])},b=[],h={name:"FormProgressBar",props:["progressbar"]},g=h,_=(n("77b9"),Object(p["a"])(g,v,b,!1,null,"5af6b0d7",null)),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"results"},t._l(t.info,function(e,r){return n("div",{key:r},[n("p",[t._v(t._s(e.name)+": "+t._s(e.value))])])}),0)},V=[],F={name:"FormResults",props:["info"]},O=F,S=(n("4bc2"),Object(p["a"])(O,w,V,!1,null,"76605725",null)),j=S.exports,x={name:"Form",components:{FormList:m,FormProgressBar:y,FormResults:j},data:function(){return{info:[{name:"Name",value:"",pattern:/^[a-zA-Z ]{2,30}$/,isValid:!1},{name:"Phone",value:"",pattern:/^[0-9]{7,14}$/,isValid:!1},{name:"Email",value:"",pattern:/.+/,isValid:!1},{name:"Some Field 1",value:"",pattern:/.+/,isValid:!1},{name:"Some Field 2",value:"",pattern:/.+/,isValid:!1}],showSubmitInfo:!1}},methods:{isValidValue:function(t){var e=this.info[t].pattern,n=this.info[t].value;this.info[t].isValid=e.test(n)}},computed:{progressBar:function(){var t=this.info.length,e=100/t,n=0;return this.info.forEach(function(t){t.isValid&&(n+=e)}),n}}},P=x,$=(n("ea15"),Object(p["a"])(P,i,s,!1,null,"5bb787c0",null)),k=$.exports,B={name:"App",components:{Form:k}},E=B,I=Object(p["a"])(E,a,o,!1,null,null,null),C=I.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"6c83":function(t,e,n){},"77b9":function(t,e,n){"use strict";var r=n("3420"),a=n.n(r);a.a},d27b:function(t,e,n){"use strict";var r=n("6c83"),a=n.n(r);a.a},ea15:function(t,e,n){"use strict";var r=n("3074"),a=n.n(r);a.a}});
//# sourceMappingURL=app.6dcd413f.js.map