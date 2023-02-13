"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_v2_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'footer',
  data: function data() {
    return {
      isErrors: false,
      sponsors: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    console.log("v=2.0.1");
    axios.get("/api/sponsors").then(function (_ref) {
      var data = _ref.data.data;
      _this.sponsors = [].concat(data);
    })["catch"](function () {
      _this.isErrors = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Footer.vue */ "./resources/js/Components/Footer.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'home',
  components: {
    Footer: _Components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      panels: null,
      scrollTween: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    console.log("v=2.0.1");
    window.scrollTo(0, 0);
    this.setLogoInicio(); // this.setFondoInicio();

    this.setWelcome();
    this.setWelcomeText(); // this.setPage1();

    this.setPage2();
    this.setPage3(); // this.setTeamFaster();
    // this.setTitleVenue();
    // this.setCoachesText();
    // this.setCoachesImg();

    setTimeout(function () {
      _this.showWelcome();
    }, 500); // this.setVive();
    //   axios
    //       .get('api/workout')
    //       .then(({ data: { data } }) => {
    //           this.slug = data.venue.slug;
    //           this.info = Object.assign({}, {
    //               name: data.venue.name,
    //               fecha: data.date_start,
    //               lugar: data.venue.address,
    //               tipo:  data.description,
    //               coach:  data.coatch.name,
    //               photo: data.venue.image,
    //               map: data.venue.image_map,
    //               available: true
    //           });
    //       });
  },
  methods: {
    // goToSection(i) {
    //   console.log('goToSection', i);
    //   console.log('window.innerHeight', window.innerHeight);
    //   this.scrollTween = this.gsap.to(window, {
    //     scrollTo: {y: i * window.innerHeight, autoKill: false},
    //     duration: 1,
    //     onComplete: () => this.scrollTween = null,
    //     overwrite: true
    //   });
    // }
    gra: function gra(min, max) {
      return Math.random() * (max - min) + min;
    },
    init: function init() {
      var items = document.querySelectorAll('section'); // cssScrollSnapPolyfill();
    },
    // showLogoInicio(){
    //   this.gsap.to(
    //     this.$refs.logoInicio,
    //     {autoAlpha: 1, duration: 0.8, scaleX:1, scaleY:1, delay:0, ease: "Power2.easeOut", onComplete: this.showWelcomeText  }
    //   );
    // },
    setWelcome: function setWelcome() {
      this.gsap.to(".welcome-img", {
        autoAlpha: 0,
        duration: 0,
        y: 400
      });
    },
    setWelcomeText: function setWelcomeText() {
      this.gsap.to(".welcome-text", {
        autoAlpha: 0,
        duration: 0
      });
      this.gsap.to(".registrarme-button", {
        autoAlpha: 0,
        duration: 0
      });
    },
    setLogoInicio: function setLogoInicio() {
      this.gsap.to(this.$refs.logoInicio, {
        autoAlpha: 0,
        duration: 0,
        scaleX: 0,
        scaleY: 0
      });
    },
    showWelcome: function showWelcome() {
      this.gsap.to(".welcome-img", {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "Power2.easeOut",
        onComplete: this.setPage1
      });
    },
    // showWelcomeText(){
    //   this.gsap.to(
    //     ".welcome-text",
    //     {autoAlpha: 1, duration: 0.8, ease: "Power2.easeIn" }
    //   );
    //   this.gsap.to(
    //     ".registrarme-button",
    //     {autoAlpha: 1, duration: 1, ease: "Power2.easeIn" }
    //   );
    // },
    setPage1: function setPage1() {
      this.gsap.to(".welcome-text", {
        scrollTrigger: ".welcome-text",
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "Power2.easeIn"
      });
      this.gsap.to(".registrarme-button", {
        scrollTrigger: ".registrarme-button",
        autoAlpha: 1,
        duration: 1,
        delay: 0.5,
        ease: "Power2.easeIn"
      });
      this.gsap.to(this.$refs.logoInicio, {
        scrollTrigger: this.$refs.logoInicio,
        autoAlpha: 1,
        duration: 0.8,
        scaleX: 1,
        scaleY: 1,
        delay: 0,
        ease: "Power2.easeOut"
      });
    },
    setPage2: function setPage2() {
      this.gsap.from(".unete", {
        scrollTrigger: ".unete",
        // start the animation when ".box" enters the viewport (once)
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "Power2.easeOut"
      });
      this.gsap.from(".vuelvete", {
        scrollTrigger: ".vuelvete",
        // start the animation when ".box" enters the viewport (once)
        x: 100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "Power2.easeOut"
      });
      this.gsap.from(".logo-simple", {
        scrollTrigger: ".logo-simple",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "Power2.easeIn"
      });
    },
    setPage3: function setPage3() {
      this.gsap.from(".coaches", {
        scrollTrigger: ".coaches",
        // start the animation when ".box" enters the viewport (once)
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "Power2.easeOut"
      });
      this.gsap.from(".tu-style", {
        scrollTrigger: ".tu-style",
        // start the animation when ".box" enters the viewport (once)
        scaleX: 0,
        scaleY: 0,
        autoAlpha: 0,
        duration: 1,
        delay: 0.5,
        ease: "Power2.easeOut"
      });
      this.gsap.from(".models1", {
        scrollTrigger: ".models1",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        x: -100,
        duration: 0.8,
        delay: 0.8,
        ease: "Power2.easeIn"
      });
      this.gsap.from(".models2", {
        scrollTrigger: ".models2",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.8,
        ease: "Power2.easeIn"
      });
      this.gsap.from(".models3", {
        scrollTrigger: ".models3",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        x: 100,
        duration: 0.8,
        delay: 0.8,
        ease: "Power2.easeIn"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer-styles[data-v-3c0d6e26] {\n  padding: 96px 24px 48px;\n  background: linear-gradient(transparent, 35%, #110315);\n  opacity: 1;\n}\n.footer-styles .footer-1[data-v-3c0d6e26] {\n  text-align: left;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-1[data-v-3c0d6e26] {\n    text-align: center;\n}\n}\n.footer-styles .footer-2[data-v-3c0d6e26] {\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-2[data-v-3c0d6e26] {\n    margin-top: 20px;\n    text-align: center;\n}\n}\n.footer-styles .sponsors[data-v-3c0d6e26] {\n  font-size: 24px;\n  margin-bottom: 36px;\n}\n@media screen and (max-width: 1215px) {\n.footer-styles .sponsors[data-v-3c0d6e26] {\n    font-size: 20px;\n}\n}\n@media screen and (max-width: 768px) {\n.footer-styles .sponsors[data-v-3c0d6e26] {\n    margin-bottom: 0px;\n}\n}\n@media screen and (max-width: 768px) {\n.footer-styles .nature[data-v-3c0d6e26] {\n    margin-top: -14px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".home[data-v-09793f8e] {\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n.panel[data-v-09793f8e] {\n  min-height: 100vh;\n  border-radius: 0;\n}\n.uno[data-v-09793f8e] {\n  background-color: black;\n  background-image: url(\"/assets/img/puma-web1.png\");\n  background-position-x: center;\n}\n.dos[data-v-09793f8e] {\n  background-color: black;\n  background-image: url(\"/assets/img/puma-web2.png\");\n  background-position-x: right;\n}\n.tres[data-v-09793f8e] {\n  background-color: black;\n  background-image: url(\"/assets/img/puma-web3.png\");\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.unete[data-v-09793f8e] {\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 120px;\n  text-transform: uppercase;\n  line-height: 120px;\n  text-align: center;\n  color: white;\n  border-bottom: 10px solid #b99571;\n  margin-left: 130px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n@media screen and (min-width: 1216px) and (max-width: 1408px) {\n.unete[data-v-09793f8e] {\n    font-size: 100px;\n    line-height: 100px;\n}\n}\n@media screen and (min-width: 1134px) and (max-width: 1215px) {\n.unete[data-v-09793f8e] {\n    font-size: 80px;\n    line-height: 80px;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1133px) {\n.unete[data-v-09793f8e] {\n    font-size: 80px;\n    line-height: 80px;\n    margin-left: 100px;\n}\n}\n@media screen and (max-width: 1023px) {\n.unete[data-v-09793f8e] {\n    font-size: 70px;\n    line-height: 70px;\n    margin-left: 80px;\n}\n}\n@media screen and (max-width: 870px) {\n.unete[data-v-09793f8e] {\n    font-size: 60px;\n    line-height: 60px;\n    margin-left: 60px;\n}\n}\n@media screen and (max-width: 768px) {\n.unete[data-v-09793f8e] {\n    font-size: 80px;\n    line-height: 80px;\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n.logo-simple[data-v-09793f8e] {\n  width: 354px;\n  padding-left: 139px;\n  padding-top: 54px;\n  padding-bottom: 54px;\n}\n@media screen and (max-width: 1023px) {\n.logo-simple[data-v-09793f8e] {\n    padding-left: 80px;\n}\n}\n@media screen and (max-width: 870px) {\n.logo-simple[data-v-09793f8e] {\n    padding-left: 60px;\n    width: 300px;\n}\n}\n@media screen and (max-width: 768px) {\n.logo-simple[data-v-09793f8e] {\n    width: 300px;\n    padding-left: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n.vuelvete[data-v-09793f8e] {\n  font-family: 'FFDINforPUMA-Regular\"', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-align: left;\n  font-size: 35px;\n  line-height: 42px;\n  color: white;\n  padding-left: 15px;\n}\n@media screen and (min-width: 1216px) and (max-width: 1408px) {\n.vuelvete[data-v-09793f8e] {\n    font-size: 30px;\n}\n}\n@media screen and (min-width: 1134px) and (max-width: 1215px) {\n.vuelvete[data-v-09793f8e] {\n    font-size: 26px;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1133px) {\n.vuelvete[data-v-09793f8e] {\n    font-size: 26px;\n}\n}\n@media screen and (max-width: 1023px) {\n.vuelvete[data-v-09793f8e] {\n    font-size: 26px;\n}\n}\n@media screen and (max-width: 768px) {\n.vuelvete[data-v-09793f8e] {\n    font-size: 23px;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin: auto;\n    text-align: center;\n}\n}\n.coaches[data-v-09793f8e] {\n  font-family: \"GoticaModerna-KK-Italic\";\n  color: white;\n  font-size: 132px;\n  padding-top: 199px;\n}\n@media screen and (max-width: 1133px) {\n.coaches[data-v-09793f8e] {\n    font-size: 120px;\n}\n}\n@media screen and (max-width: 1024px) {\n.coaches[data-v-09793f8e] {\n    font-size: 100px;\n    padding-left: 30px;\n    padding-right: 30px;\n    line-height: 90px;\n}\n}\n.tu-style[data-v-09793f8e] {\n  width: 25%;\n  text-align: center;\n  margin: auto;\n  margin-top: -47px;\n  padding-right: 26px;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 1215px) {\n.tu-style[data-v-09793f8e] {\n    width: 30%;\n    margin-top: -30px;\n}\n}\n@media screen and (max-width: 1024px) {\n.tu-style[data-v-09793f8e] {\n    width: 30%;\n    margin-top: 0;\n}\n}\n@media screen and (max-width: 768px) {\n.tu-style[data-v-09793f8e] {\n    width: 60%;\n    margin-top: 0;\n}\n}\n.photos-models[data-v-09793f8e] {\n  padding: 40px 89px;\n  margin: auto;\n}\n.photos-models figure[data-v-09793f8e] {\n  width: 100%;\n}\n.registrarme-button[data-v-09793f8e] {\n  color: white;\n  text-transform: uppercase;\n  font-size: 28px;\n  padding: 11px 61px 8px;\n  background-color: #b99571;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 69px;\n  margin-bottom: 70px;\n  cursor: pointer;\n  margin-left: 1px;\n}\n@media screen and (max-width: 768px) {\n.registrarme-button[data-v-09793f8e] {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 81vw;\n}\n}\n.welcome-text[data-v-09793f8e] {\n  color: white;\n  font-size: 33px;\n  text-align: left;\n}\n@media screen and (min-width: 1216px) and (max-width: 1408px) {\n.welcome-text[data-v-09793f8e] {\n    font-size: 30px;\n}\n}\n@media screen and (min-width: 1134px) and (max-width: 1215px) {\n.welcome-text[data-v-09793f8e] {\n    font-size: 30px;\n}\n}\n@media screen and (min-width: 1024px) and (max-width: 1133px) {\n.welcome-text[data-v-09793f8e] {\n    font-size: 30px;\n}\n}\n@media screen and (max-width: 1023px) {\n.welcome-text[data-v-09793f8e] {\n    font-size: 26px;\n}\n}\n@media screen and (max-width: 768px) {\n.welcome-text[data-v-09793f8e] {\n    font-size: 26px;\n}\n}\n.netw-style[data-v-09793f8e] {\n  width: 65px;\n  position: relative;\n  top: 581px;\n  cursor: pointer;\n}\n.welcome-img[data-v-09793f8e] {\n  width: 100%;\n  padding-bottom: 40px;\n  padding-top: 68px;\n}\n.logo-style[data-v-09793f8e] {\n  width: 70%;\n  margin-top: -51px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@media screen and (max-width: 768px) {\n.logo-style[data-v-09793f8e] {\n    padding-bottom: 60px;\n    width: 40%;\n}\n}\n.panel[data-v-09793f8e]:not(:last-child) {\n  margin-bottom: 0;\n}\n.panel1-column1[data-v-09793f8e] {\n  padding-left: 183px;\n}\n@media screen and (max-width: 1023px) {\n.panel1-column1[data-v-09793f8e] {\n    padding-left: 140px;\n}\n}\n@media screen and (max-width: 768px) {\n.panel1-column1[data-v-09793f8e] {\n    padding-left: 19vw;\n    padding-right: 19vw;\n    margin: auto;\n    margin-top: -209px;\n}\n}\n.panel2-columns[data-v-09793f8e] {\n  padding-top: 55px;\n}\n.panel2-column1[data-v-09793f8e] {\n  padding-top: 31vh;\n}\n@media screen and (max-width: 768px) {\n.panel2-column1[data-v-09793f8e] {\n    padding-top: 95px;\n}\n}\n.panel2-column2[data-v-09793f8e] {\n  padding-top: 35vh;\n}\n@media screen and (max-width: 768px) {\n.panel2-column2[data-v-09793f8e] {\n    padding-top: 0;\n    padding-bottom: 50px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_3c0d6e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_3c0d6e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_3c0d6e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_09793f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_09793f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_09793f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/Components/Footer.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_3c0d6e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=3c0d6e26&scoped=true& */ "./resources/js/Components/Footer.vue?vue&type=template&id=3c0d6e26&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/Components/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _Footer_vue_vue_type_style_index_0_id_3c0d6e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& */ "./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_3c0d6e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_3c0d6e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3c0d6e26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/v2/Home.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/v2/Home.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_09793f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=09793f8e&scoped=true& */ "./resources/js/Pages/v2/Home.vue?vue&type=template&id=09793f8e&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/v2/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_09793f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true& */ "./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_09793f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_09793f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "09793f8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/v2/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/Components/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/v2/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/v2/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_3c0d6e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_09793f8e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=style&index=0&id=09793f8e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/Footer.vue?vue&type=template&id=3c0d6e26&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Footer.vue?vue&type=template&id=3c0d6e26&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3c0d6e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3c0d6e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_3c0d6e26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=3c0d6e26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=template&id=3c0d6e26&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/v2/Home.vue?vue&type=template&id=09793f8e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/v2/Home.vue?vue&type=template&id=09793f8e&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_09793f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_09793f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_09793f8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=09793f8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=template&id=09793f8e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=template&id=3c0d6e26&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=template&id=3c0d6e26&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "footer-styles" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "columns is-variable is-8 tm-puma",
        staticStyle: { "margin-bottom": "60px" },
      },
      [
        _c("div", {
          staticClass:
            "column is-2-tablet is-3-desktop is-3-widescreen is-4-fullhd",
        }),
        _vm._v(" "),
        _vm.sponsors.length
          ? _vm._l(_vm.sponsors, function (item, index) {
              return _c(
                "div",
                {
                  staticClass: "column is-5-mobile",
                  staticStyle: { margin: "auto" },
                },
                [
                  _c("p", { staticClass: "text-center" }, [
                    _c("img", { attrs: { src: item.image, width: "100px" } }),
                  ]),
                ]
              )
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "column is-2-tablet is-3-desktop is-3-widescreen is-4-fullhd",
        }),
      ],
      2
    ),
    _vm._v(" "),
    _vm._m(5),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tm-puma columns sponsors",
        staticStyle: { "text-transform": "uppercase" },
      },
      [
        _c("div", {
          staticClass:
            "column is-1-tablet is-4-desktop is-4-widescreen is-4-fullhd",
        }),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _vm._v("\n            Nuestros patrocinadores:\n        "),
        ]),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "column is-1-tablet is-4-desktop is-4-widescreen is-4-fullhd",
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "column is-5-mobile", staticStyle: { margin: "auto" } },
      [
        _c("p", { staticClass: "text-center" }, [
          _c("img", { attrs: { src: "/assets/img/G_Logo_Blanco.png" } }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "column is-5-mobile", staticStyle: { margin: "auto" } },
      [
        _c("p", { staticClass: "text-center" }, [
          _c("img", {
            attrs: {
              src: "/assets/img/FCEAD3F3-B3B4-4191-AC0F-F59D13D38564.png",
            },
          }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "column is-5-mobile", staticStyle: { margin: "auto" } },
      [
        _c("p", { staticClass: "text-center nature" }, [
          _c("img", { attrs: { src: "/assets/img/Logo_NV.png" } }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "column is-5-mobile", staticStyle: { margin: "auto" } },
      [
        _c("p", { staticClass: "text-center nature" }, [
          _c("img", {
            attrs: { src: "/assets/img/ISDIN-Love-Your-Skin_Blanco.png" },
          }),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns is-vcentered" }, [
      _c("div", { staticClass: "column tm-puma footer-1" }, [
        _vm._v(
          "\n            @2022 puma. Todos los derechos reservados\n        "
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column tm-puma footer-2" }, [
        _c(
          "a",
          {
            staticStyle: { "margin-left": "5px", "margin-right": "5px" },
            attrs: {
              href: "https://www.facebook.com/PUMAMexico",
              target: "_blank",
            },
          },
          [
            _c("img", {
              attrs: {
                src: "/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png",
                width: "30px",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticStyle: { "margin-left": "5px", "margin-right": "5px" },
            attrs: {
              href: "https://twitter.com/pumamexico/",
              target: "_blank",
            },
          },
          [
            _c("img", {
              attrs: {
                src: "/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png",
                width: "30px",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticStyle: { "margin-left": "5px", "margin-right": "5px" },
            attrs: {
              href: "https://www.instagram.com/pumamexico/",
              target: "_blank",
            },
          },
          [
            _c("img", {
              attrs: {
                src: "/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png",
                width: "30px",
              },
            }),
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticStyle: { "margin-left": "5px", "margin-right": "5px" },
            attrs: { href: "https://www.youtube.com/puma", target: "_blank" },
          },
          [
            _c("img", {
              attrs: {
                src: "/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png",
                width: "30px",
              },
            }),
          ]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=template&id=09793f8e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/v2/Home.vue?vue&type=template&id=09793f8e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "home" }, [
    _c("section", { staticClass: "description panel uno" }, [
      _c("div", [
        _c(
          "div",
          { staticClass: "netw-style" },
          [
            _c("b-image", {
              attrs: {
                responsive: "",
                src: "/assets/img/socnet.png",
                ratio: "74by348",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "columns", staticStyle: { margin: "0" } }, [
          _c("div", { staticClass: "column panel1-column1" }, [
            _c(
              "div",
              { staticClass: "welcome-img" },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/welcome.png",
                    ratio: "753by209",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "puma-bold registrarme-button" }, [
              _vm._v("\n            Registrarme\n          "),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c(
              "div",
              { ref: "logoInicio", staticClass: "logo-style" },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/logoTeamFaster.png",
                    ratio: "1by1",
                  },
                }),
              ],
              1
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "panel dos" }, [
      _c("div", [
        _c(
          "div",
          {
            staticClass: "columns panel2-columns",
            staticStyle: { margin: "0" },
          },
          [
            _c("div", { staticClass: "column is-5 panel2-column1" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "logo-simple" },
                [
                  _c("b-image", {
                    attrs: {
                      responsive: "",
                      src: "/assets/img/LOGO-TEAMFASTER.jpg",
                      ratio: "1by1",
                    },
                  }),
                ],
                1
              ),
            ]),
            _vm._v(" "),
            _vm._m(2),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "panel tres" }, [
      _c("div", { staticClass: "coaches" }, [
        _c("div", [
          _vm._v("\n        ¡Nuestros coaches están listos!\n      "),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tu-style" },
          [
            _c("b-image", {
              staticClass: "model-2",
              attrs: {
                responsive: "",
                src: "/assets/img/ytu.png",
                ratio: "519by225",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "photos-models columns", staticStyle: { margin: "0" } },
        [
          _c(
            "div",
            { staticClass: "column models1" },
            [
              _c("b-image", {
                staticClass: "model-2",
                attrs: {
                  responsive: "",
                  src: "/assets/img/models.png",
                  ratio: "512by339",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column models2" },
            [
              _c("b-image", {
                staticClass: "model-2",
                attrs: {
                  responsive: "",
                  src: "/assets/img/models2.png",
                  ratio: "512by339",
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "column models3" },
            [
              _c("b-image", {
                staticClass: "model-2",
                attrs: {
                  responsive: "",
                  src: "/assets/img/models3.png",
                  ratio: "512by339",
                },
              }),
            ],
            1
          ),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "puma-regular welcome-text" }, [
      _c("div", [
        _vm._v(
          "\n              Aquí comienza la mejor experiencia de\n              entrenamientos en combinación con coaches\n              que te ayudarán a liberar tu potencial\n            "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "unete" }, [
      _c("div", [_vm._v("\n              !Únete\n            ")]),
      _vm._v(" "),
      _c("div", [_vm._v("\n              Al reto!\n            ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column panel2-column2" }, [
      _c("div", { staticClass: "vuelvete" }, [
        _c("div", [
          _vm._v(
            "\n              Vuélvete parte de nuestra familia\n            "
          ),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "\n              Team Faster y entrena como los\n            "
          ),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v(
            "\n              grandes en alguna de las sedes\n            "
          ),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v("\n              que tenemos para ti.\n            "),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);