"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[114],{6260:(t,a,e)=>{e.d(a,{Z:()=>n});var i=e(3645),s=e.n(i)()((function(t){return t[1]}));s.push([t.id,".register-button[data-v-0332dd25]{border-color:#fff;padding:4px 36px 0}@media screen and (max-width:1024px){.register-button[data-v-0332dd25]{font-size:1rem!important}}@media screen and (max-width:940px){.register-button[data-v-0332dd25]{font-size:.9rem!important}}@media screen and (max-width:768px){.register-button[data-v-0332dd25]{font-size:1.25rem!important}}.venues_photos[data-v-0332dd25]{background-color:#000;filter:grayscale(100%);margin:0 20px;padding:20px}.venues[data-v-0332dd25]{background:#000;color:#fff}.title-venues[data-v-0332dd25]{color:#fff;font-size:100px;line-height:90px;text-align:right}@media screen and (max-width:768px){.title-venues[data-v-0332dd25]{font-size:90px;line-height:80px;text-align:center}}.title-image[data-v-0332dd25]{width:158px}@media screen and (max-width:768px){.title-image[data-v-0332dd25]{margin-left:auto;margin-right:auto;text-align:right;width:35%}}@media screen and (min-width:769px){.title-image[data-v-0332dd25]{margin-left:48px;padding-top:14px}}.title-venues2[data-v-0332dd25]{font-size:125px}@media screen and (max-width:768px){.title-venues2[data-v-0332dd25]{font-size:115px}}.footer-styles[data-v-0332dd25]{background:linear-gradient(transparent,#000 45%,#000);opacity:1;padding:96px 24px 48px}.footer-styles .footer-1[data-v-0332dd25]{text-align:left}@media screen and (max-width:768px){.footer-styles .footer-1[data-v-0332dd25]{text-align:center}}.footer-styles .footer-2[data-v-0332dd25]{text-align:right}@media screen and (max-width:768px){.footer-styles .footer-2[data-v-0332dd25]{margin-top:20px;text-align:center}}.text-photo-title[data-v-0332dd25]{color:#fff;font-family:FFDINforPUMA-Bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:24px;left:0;padding:24px 12px;text-transform:uppercase;top:50%;width:100%}.text-photo-date[data-v-0332dd25]{bottom:0;padding-bottom:12px;text-align:center}.text-photo-date[data-v-0332dd25],.text-photo-register[data-v-0332dd25]{color:#fff;font-family:FFDINforPUMA-Bold,Helvetica Neue,Helvetica,Arial,sans-serif;font-size:18px;left:0;text-transform:uppercase;width:100%}.text-photo-register[data-v-0332dd25]{padding-left:20px;padding-top:20px;position:absolute;text-align:left;top:0}.venue0[data-v-0332dd25]{animation:fadein-data-v-0332dd25 1s;-moz-animation:fadein-data-v-0332dd25 1s;-webkit-animation:fadein-data-v-0332dd25 1s;-o-animation:fadein-data-v-0332dd25 1s}.venue1[data-v-0332dd25]{animation:fadein-data-v-0332dd25 2s;-moz-animation:fadein-data-v-0332dd25 2s;-webkit-animation:fadein-data-v-0332dd25 2s;-o-animation:fadein-data-v-0332dd25 2s}.venue2[data-v-0332dd25]{animation:fadein-data-v-0332dd25 3s;-moz-animation:fadein-data-v-0332dd25 3s;-webkit-animation:fadein-data-v-0332dd25 3s;-o-animation:fadein-data-v-0332dd25 3s}.empty[data-v-0332dd25]{height:30vw}@keyframes fadein-data-v-0332dd25{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadein-data-v-0332dd25{0%{opacity:0}to{opacity:1}}",""]);const n=s},3114:(t,a,e)=>{e.r(a),e.d(a,{default:()=>r});const i={name:"venues",data:function(){return{workout:{},venues:[]}},mounted:function(){var t=this;window.scrollTo(0,0),axios.get("api/workout").then((function(a){var e=a.data;t.workout=Object.assign({},e.data),console.log(t.workout)})),axios.get("api/venues").then((function(a){var e=a.data;t.venues=[].concat(e.data)}))},methods:{handleGoTo:function(t){this.$router.push("/galeria/"+t)},setElement:function(t){this.gsap.to(t,{autoAlpha:0,scale:.8,duration:0})},showElement:function(t,a){this.gsap.to(t,{autoAlpha:1,scale:1,duration:3.5,delay:a})},handleFormatDay:function(t){var a=t.split(" ")[0].split("-");return console.log(a[2]),a[2]},handleFormatMonth:function(t){return{"07":"jul","08":"ago","09":"sep",10:"oct",11:"nov",12:"dic"}[t.split(" ")[0].split("-")[1]]}}};var s=e(3379),n=e.n(s),d=e(6260),o={insert:"head",singleton:!1};n()(d.Z,o);d.Z.locals;const r=(0,e(1900).Z)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"venues"},[e("div",{staticClass:"columns",staticStyle:{"padding-top":"40px","padding-bottom":"40px"}},[t._m(0),t._v(" "),e("div",{staticClass:"column"},[e("div",{staticClass:"title-image"},[e("b-image",{attrs:{responsive:"",src:"/assets/img/logoTeamFaster.png",ratio:"1by1"}})],1)])]),t._v(" "),e("div",{staticClass:"venues_photos"},[e("div",{staticClass:"columns ",staticStyle:{"margin-bottom":"60px"}},[t.venues.length&&Object.keys(t.workout).length?t._l(t.venues.slice(0,3),(function(a,i){return e("div",{key:i,staticClass:"column is-clickable",class:"venue"+i,staticStyle:{position:"relative"}},[e("div",{on:{click:function(e){return t.handleGoTo(a.id)}}},[e("b-image",{attrs:{responsive:"",src:"/assets/img/"+a.thumbnail,ratio:"2by1"}}),t._v(" "),e("div",{staticClass:"text-photo-title venue-active"},[t._v("\n              "+t._s(a.name)+"\n              \n              "),e("div",{staticClass:"text-photo-date"},[t._v("\n                "+t._s(a.workout?t.handleFormatDay(a.workout.date_start):"-")+"\n                "+t._s(a.workout?t.handleFormatMonth(a.workout.date_start):"-")+"\n              ")]),t._v(" "),e("div",[e("b-button",{staticClass:"register-button",attrs:{rounded:"",size:"is-medium","data-id":a.id},on:{click:function(e){return t.handleGoTo(a.id)}}},[t._v("\n                  Ver Galería\n                ")])],1)])],1)])})):[e("div",{staticClass:"column empty"}),t._v(" "),e("div",{staticClass:"column empty"}),t._v(" "),e("div",{staticClass:"column empty"})]],2),t._v(" "),e("div",{staticClass:"columns is-centered"},[t.venues.length&&Object.keys(t.workout).length?t._l(t.venues.slice(3,6),(function(a,i){return e("div",{key:i,staticClass:"column is-clickable is-4",class:"venue"+i,staticStyle:{position:"relative"}},[e("b-image",{attrs:{responsive:"",src:"/assets/img/"+a.thumbnail,ratio:"2by1"}}),t._v(" "),e("div",{staticClass:"text-photo-title venue-active",class:{"venue-active":a.id==t.workout.venue.id}},[t._v("\n            "+t._s(a.name)+"\n            "),e("div",{staticClass:"text-photo-date"},[t._v("\n              "+t._s(a.workout?t.handleFormatDay(a.workout.date_start):"-")+"\n              "+t._s(a.workout?t.handleFormatMonth(a.workout.date_start):"-")+"\n            ")]),t._v(" "),e("div",[e("b-button",{staticClass:"register-button",attrs:{rounded:"",size:"is-medium","data-id":a.id},on:{click:function(e){return t.handleGoTo(a.id)}}},[t._v("\n                  Ver Galería\n              ")])],1)])],1)})):[e("div",{staticClass:"column empty"}),t._v(" "),e("div",{staticClass:"column empty"}),t._v(" "),e("div",{staticClass:"column empty"})]],2)]),t._v(" "),t._m(1)])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"column gotica-italic title-venues"},[e("div",{staticClass:"title-venues1"},[t._v("\n        Galería\n      ")]),t._v(" "),e("div",{staticClass:"title-venues2"},[t._v("\n        De fotos\n      ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer-styles"},[e("div",{staticClass:"columns is-vcentered",staticStyle:{margin:"0"}},[e("div",{staticClass:"column tm-puma footer-1"},[t._v("\n        @2022 puma. Todos los derechos reservados\n      ")]),t._v(" "),e("div",{staticClass:"column tm-puma footer-2"},[e("a",{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{href:"https://www.facebook.com/PUMAMexico",target:"_blank"}},[e("img",{attrs:{src:"/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png",width:"30px"}})]),t._v(" "),e("a",{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{href:"https://twitter.com/pumamexico/",target:"_blank"}},[e("img",{attrs:{src:"/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png",width:"30px"}})]),t._v(" "),e("a",{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{href:"https://www.instagram.com/pumamexico/",target:"_blank"}},[e("img",{attrs:{src:"/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png",width:"30px"}})]),t._v(" "),e("a",{staticStyle:{"margin-left":"5px","margin-right":"5px"},attrs:{href:"https://www.youtube.com/puma",target:"_blank"}},[e("img",{attrs:{src:"/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png",width:"30px"}})])])])])}],!1,null,"0332dd25",null).exports}}]);