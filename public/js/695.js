"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[695],{1695:(t,n,s)=>{s.r(n),s.d(n,{default:()=>e});const a={data:function(){return{posts:[],paginate:["blogs"]}},mounted:function(){var t=this;axios.get("api/blog").then((function(n){var s=n.data;console.log(s),t.posts=[].concat(s.data)}))},methods:{}};const e=(0,s(1900).Z)(a,(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",{staticClass:"pt-5 pb-5"},[s("h1",[t._v(" Blog ")]),t._v(" "),t._l(t.posts,(function(n){return s("div",[s("p",[t._v(t._s(n.title))]),t._v(" "),s("b-navbar-item",{staticClass:"nav-bar-button",class:{"button-active":"blog"==t.$route.name},attrs:{tag:"router-link",to:{path:"/blog/"+n.slug}}},[t._v("\n            "+t._s(n.title)+"\n        ")])],1)}))],2)}),[],!1,null,null,null).exports}}]);