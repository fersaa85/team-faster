"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[355],{5745:(t,e,o)=>{o.d(e,{Z:()=>i});var a=o(3645),n=o.n(a)()((function(t){return t[1]}));n.push([t.id,".footer-styles[data-v-de426b34]{opacity:1;padding:96px 24px 48px}@media screen and (max-width:768px){.footer-styles .footer-1[data-v-de426b34]{text-align:center}}.footer-styles .footer-2[data-v-de426b34]{text-align:right}@media screen and (max-width:768px){.footer-styles .footer-2[data-v-de426b34]{margin-top:20px;text-align:center}}.footer-styles .sponsors[data-v-de426b34]{font-size:24px;margin-bottom:36px}@media screen and (max-width:1215px){.footer-styles .sponsors[data-v-de426b34]{font-size:20px}}@media screen and (max-width:768px){.footer-styles .sponsors[data-v-de426b34]{margin-bottom:0}.footer-styles .nature[data-v-de426b34]{margin-top:-14px}}",""]);const i=n},3269:(t,e,o)=>{o.d(e,{Z:()=>i});var a=o(3645),n=o.n(a)()((function(t){return t[1]}));n.push([t.id,".footer-style[data-v-0b1d5731]{bottom:0;position:absolute;width:100%}.venues_photos[data-v-0b1d5731]{background-color:#000;margin:0 160px;padding:20px}@media screen and (max-width:768px){.venues_photos[data-v-0b1d5731]{margin:0 40px}}.blog[data-v-0b1d5731]{background:url(/assets/img/fondo-blog-puma.jpg);background-size:cover;min-height:100vh;overflow-x:hidden}.title-venues[data-v-0b1d5731]{color:#fff;font-size:100px;line-height:90px;text-align:right}@media screen and (max-width:768px){.title-venues[data-v-0b1d5731]{font-size:90px;line-height:80px;text-align:center}}.title-image[data-v-0b1d5731]{width:158px}@media screen and (max-width:768px){.title-image[data-v-0b1d5731]{margin-left:auto;margin-right:auto;text-align:right;width:35%}}@media screen and (min-width:769px){.title-image[data-v-0b1d5731]{margin-left:48px;padding-top:14px}}.title-venues2[data-v-0b1d5731]{font-size:125px}@media screen and (max-width:768px){.title-venues2[data-v-0b1d5731]{font-size:115px}}.text-photo-title[data-v-0b1d5731]{background:linear-gradient(transparent,80%,#110315);color:#fff;font-family:FFDINforPUMA-Bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:18px;height:100%;left:0;position:absolute;text-align:left;text-transform:uppercase;top:0;width:100%}.text-photo-title .photo-info[data-v-0b1d5731]{bottom:0;margin:auto;padding-bottom:14px;padding-left:14px;position:absolute}.text-photo-title .photo-info1[data-v-0b1d5731]{font-size:40px}.text-photo-title .photo-info2[data-v-0b1d5731]{font-size:20px}.img-container:hover .text-photo-title[data-v-0b1d5731]{opacity:1;visibility:visible}",""]);const i=n},2065:(t,e,o)=>{o.d(e,{Z:()=>r});const a={name:"footer",data:function(){return{isErrors:!1,sponsors:[]}},mounted:function(){var t=this;console.log("v=2.0.1"),axios.get("/api/sponsors").then((function(e){var o=e.data.data;t.sponsors=[].concat(o)})).catch((function(){t.isErrors=!0}))}};var n=o(3379),i=o.n(n),s=o(5745),d={insert:"head",singleton:!1};i()(s.Z,d);s.Z.locals;const r=(0,o(1900).Z)(a,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-styles"},[o("div",{staticClass:"columns is-vcentered"},[o("div",{staticClass:"column tm-puma footer-1"},[t._v("\n            @2022 puma. Todos los derechos reservados\n        ")])])])}],!1,null,"de426b34",null).exports},3355:(t,e,o)=>{o.r(e),o.d(e,{default:()=>r});const a={components:{Footer:o(2065).Z},data:function(){return{posts:[],paginate:["blogs"]}},mounted:function(){var t=this;console.log("v=2.0.2"),axios.get("api/blog").then((function(e){var o=e.data;console.log(o),t.posts=[].concat(o.data)}))},methods:{}};var n=o(3379),i=o.n(n),s=o(3269),d={insert:"head",singleton:!1};i()(s.Z,d);s.Z.locals;const r=(0,o(1900).Z)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blog"},[[o("br"),o("br"),o("br"),t._v(" "),o("h1",{staticClass:"puma-bold",staticStyle:{color:"#ffffff","padding-top":"80px","font-size":"40px","min-height":"45vh"}},[t._v("Próximamente")])],t._v(" "),o("Footer",{staticClass:"footer-style"})],2)}),[],!1,null,"0b1d5731",null).exports}}]);