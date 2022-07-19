"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[303],{700:(t,a,e)=>{e.d(a,{Z:()=>s});var i=e(3645),n=e.n(i)()((function(t){return t[1]}));n.push([t.id,".venues_photos[data-v-467c2a76]{background-color:#000;margin:0 20px;padding:20px}.venues[data-v-467c2a76]{background:linear-gradient(90deg,#60a8f7,#906af5 38%,#b935f2)}.title-venues[data-v-467c2a76]{color:#000;font-size:100px;line-height:90px;text-align:right}@media screen and (max-width:768px){.title-venues[data-v-467c2a76]{color:#000;font-size:90px;line-height:80px;text-align:center}}.title-image[data-v-467c2a76]{width:158px}@media screen and (max-width:768px){.title-image[data-v-467c2a76]{margin-left:auto;margin-right:auto;text-align:right;width:35%}}@media screen and (min-width:769px){.title-image[data-v-467c2a76]{margin-left:48px;padding-top:14px}}.title-venues2[data-v-467c2a76]{font-size:125px}@media screen and (max-width:768px){.title-venues2[data-v-467c2a76]{font-size:115px}}.footer-styles[data-v-467c2a76]{background:linear-gradient(transparent,35%,#110315);opacity:1;padding:96px 24px 48px}.text-photo-title[data-v-467c2a76]{color:#fff;font-family:FFDINforPUMA-Bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:18px;left:0;position:absolute;text-transform:uppercase;top:50%;width:100%}.text-photo-title.two-lines[data-v-467c2a76],.text-photo-title.venue-active[data-v-467c2a76]{top:47%}.text-photo-title.venue-active-third[data-v-467c2a76]{top:42%}.text-photo-date[data-v-467c2a76]{bottom:0;font-family:FFDINforPUMA-Regular,Helvetica Neue,Helvetica,Arial,sans-serif;padding-bottom:12px;padding-right:20px;text-align:right}.text-photo-date[data-v-467c2a76],.text-photo-register[data-v-467c2a76]{color:#fff;font-size:18px;left:0;position:absolute;text-transform:uppercase;width:100%}.text-photo-register[data-v-467c2a76]{color:#d700fb;font-family:FFDINforPUMA-Bold,Helvetica Neue,Helvetica,Arial,sans-serif;padding-left:20px;padding-top:20px;text-align:left;top:0}.venue0[data-v-467c2a76]{animation:fadein-data-v-467c2a76 1s;-moz-animation:fadein-data-v-467c2a76 1s;-webkit-animation:fadein-data-v-467c2a76 1s;-o-animation:fadein-data-v-467c2a76 1s}.venue1[data-v-467c2a76]{animation:fadein-data-v-467c2a76 2s;-moz-animation:fadein-data-v-467c2a76 2s;-webkit-animation:fadein-data-v-467c2a76 2s;-o-animation:fadein-data-v-467c2a76 2s}.venue2[data-v-467c2a76]{animation:fadein-data-v-467c2a76 3s;-moz-animation:fadein-data-v-467c2a76 3s;-webkit-animation:fadein-data-v-467c2a76 3s;-o-animation:fadein-data-v-467c2a76 3s}@keyframes fadein-data-v-467c2a76{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-data-v-467c2a76{0%{opacity:0}to{opacity:1}}",""]);const s=n},4303:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});const i={name:"venues",data:function(){return{workout:{},venues:[]}},mounted:function(){var t=this;axios.get("api/workout").then((function(a){var e=a.data;t.workout=Object.assign({},e.data),console.log(t.workout)})),axios.get("api/venues").then((function(a){var e=a.data;t.venues=[].concat(e.data)}))},methods:{handleGoTo:function(t){t.preventDefault(),this.$router.push("/registro")},setElement:function(t){this.gsap.to(t,{autoAlpha:0,scale:.8,duration:0})},showElement:function(t,a){this.gsap.to(t,{autoAlpha:1,scale:1,duration:3.5,delay:a})}}};var n=e(3379),s=e.n(n),o=e(700),c={insert:"head",singleton:!1};s()(o.Z,c);o.Z.locals;const d=(0,e(1900).Z)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"venues"},[e("div",{staticClass:"columns",staticStyle:{"padding-top":"40px","padding-bottom":"40px"}},[t._m(0),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"title-image"},[e("b-image",{attrs:{responsive:"",src:"/assets/img/logoTeamFaster.png",ratio:"1by1"}})],1)])]),t._v(" "),e("div",{staticClass:"venues_photos"},[e("div",{staticClass:"columns "},[t.venues.length&&Object.keys(t.workout).length?t._l(t.venues.slice(0,3),(function(a,i){return e("div",{staticClass:"column is-clickable",class:"venue"+i,staticStyle:{position:"relative"}},[e("div",[e("b-image",{attrs:{responsive:"",src:"/assets/img/"+a.thumbnail,ratio:"1by1"}}),t._v(" "),e("div",{staticClass:"text-photo-title venue-active"},[t._v("\n              "+t._s(a.name)+"\n              "),e("br"),t._v(" "),a.id==t.workout.venue.id?[e("b-button",{staticClass:"register-button",attrs:{rounded:"",size:"is-medium"},on:{click:t.handleGoTo}},[t._v("\n                  ¡Regístrate ahora!\n                ")])]:t._e()],2),t._v(" "),e("div",{staticClass:"text-photo-date"},[t._v("\n              "+t._s(a.workout?a.workout.date_start:"-")+"\n            ")])],1)])})):t._e()],2),t._v(" "),e("div",{staticClass:"columns"},[t.venues.length&&Object.keys(t.workout).length?t._l(t.venues.slice(3,6),(function(a,i){return e("div",{staticClass:"column is-clickable",class:"venue"+i,staticStyle:{position:"relative"}},[e("b-image",{attrs:{responsive:"",src:"/assets/img/"+a.thumbnail,ratio:"1by1"}}),t._v(" "),e("div",{staticClass:"text-photo-title venue-active"},[t._v("\n            "+t._s(a.name)+"\n            "),e("br"),t._v(" "),a.id==t.workout.venue.id?[e("b-button",{staticClass:"register-button",attrs:{rounded:"",size:"is-medium"},on:{click:t.handleGoTo}},[t._v("\n                ¡Regístrate ahora!\n              ")])]:t._e()],2),t._v(" "),e("div",{staticClass:"text-photo-date"},[t._v("\n            "+t._s(a.workout?a.workout.date_start:"-")+"\n          ")])],1)})):t._e()],2)]),t._v(" "),t._m(1)])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column gotica-italic title-venues"},[e("div",{staticClass:"title-venues1"},[t._v("\n        Vive una\n      ")]),t._v(" "),e("div",{staticClass:"title-venues2"},[t._v("\n        experiencia\n      ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-styles"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column tm-puma has-text-left"},[t._v("\n        @2022 puma. Todos los derechos reservados\n      ")]),t._v(" "),e("div",{staticClass:"column tm-puma has-text-right"},[t._v("\n        redes\n      ")])])])}],!1,null,"467c2a76",null).exports}}]);