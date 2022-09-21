"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Home_vue"],{

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'footer'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Footer.vue */ "./resources/js/Components/Footer.vue");
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
      info: {},
      slug: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.scrollTo(0, 0);
    this.setLogoInicio();
    this.setFondoInicio();
    this.setWelcome(); // this.setuneteAl();

    this.setTeamFaster();
    this.setTitleVenue();
    this.setCoachesText();
    this.setCoachesImg();
    this.setVive();
    axios.get('api/workout').then(function (_ref) {
      var data = _ref.data.data;
      _this.slug = data.venue.slug;
      _this.info = Object.assign({}, {
        name: data.venue.name,
        fecha: data.date_start,
        lugar: data.venue.address,
        tipo: data.description,
        coach: data.coatch.name,
        photo: data.venue.image,
        map: data.venue.image_map,
        available: true
      });
    });
  },
  methods: {
    // setuneteAl(){
    //   this.gsap.from(this.$refs.uneteAl, {
    //     scrollTrigger: this.$refs.uneteAl, // start the animation when ".box" enters the viewport (once)
    //     y:100,
    //     autoAlpha:0,
    //     duration:1,
    //     delay:0.2,
    //     ease: "Power2.easeOut"
    //   });
    // },
    setTeamFaster: function setTeamFaster() {
      this.gsap.from(".join-text", {
        scrollTrigger: ".join-text-r2",
        // start the animation when ".box" enters the viewport (once)
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "Power2.easeOut"
      });
    },
    setTitleVenue: function setTitleVenue() {
      this.gsap.from(".join-text-r1", {
        scrollTrigger: ".join-text-r2",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        ease: "Power2.easeIn"
      });
      this.gsap.from(".join-text-r2", {
        scrollTrigger: ".join-text-r2",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        ease: "Power2.easeIn"
      });
      this.gsap.from(this.$refs.buttonRegistrarse, {
        scrollTrigger: this.$refs.buttonRegistrarse,
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.8,
        y: 50,
        ease: "Power2.easeOut"
      });
    },
    setCoachesText: function setCoachesText() {
      this.gsap.from(this.$refs.coachesText1, {
        scrollTrigger: this.$refs.coachesText1,
        autoAlpha: 0,
        duration: 0.8,
        x: -80,
        ease: "Power2.easeOut"
      });
      this.gsap.from(this.$refs.coachesText2, {
        scrollTrigger: this.$refs.coachesText2,
        autoAlpha: 0,
        duration: 0.8,
        x: 80,
        delay: 0.4,
        ease: "Power2.easeOut"
      });
      this.gsap.from(this.$refs.coachesText3, {
        scrollTrigger: this.$refs.coachesText3,
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "Power2.easeIn"
      });
      this.gsap.from(this.$refs.coachesText4, {
        scrollTrigger: this.$refs.coachesText4,
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.8,
        y: 80,
        ease: "Power2.easeOut"
      });
      this.gsap.from(this.$refs.coachesText1D, {
        scrollTrigger: this.$refs.coachesText1D,
        autoAlpha: 0,
        duration: 0.8,
        x: -80,
        delay: 0,
        ease: "Power2.easeOut"
      });
      this.gsap.from(this.$refs.coachesText2D, {
        scrollTrigger: this.$refs.coachesText2D,
        autoAlpha: 0,
        duration: 0.8,
        x: 80,
        delay: 0.4,
        ease: "Power2.easeOut"
      });
      this.gsap.from(this.$refs.coachesText3D, {
        scrollTrigger: this.$refs.coachesText3D,
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.6,
        ease: "Power2.easeIn"
      });
      this.gsap.from(this.$refs.coachesText4D, {
        scrollTrigger: this.$refs.coachesText4D,
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.8,
        delay: 0.8,
        y: 80,
        ease: "Power2.easeOut"
      });
    },
    setCoachesImg: function setCoachesImg() {
      this.gsap.from(this.$refs.coachesImgs, {
        scrollTrigger: {
          trigger: this.$refs.coachesText4D,
          // start the animation when ".box" enters the viewport (once)
          toggleActions: "play complete reverse"
        },
        duration: 1.5,
        delay: 0.5,
        yPercent: -37,
        ease: "Power2.easeOut"
      });
    },
    setVive: function setVive() {
      this.gsap.from(".section-venues1", {
        scrollTrigger: ".section-venues1",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.6,
        scaleX: 0.9,
        scaleY: 0.9,
        delay: 0.4,
        ease: "Power2.easeIn"
      });
      this.gsap.from(".section-venues2", {
        scrollTrigger: ".section-venues2",
        // start the animation when ".box" enters the viewport (once)
        autoAlpha: 0,
        duration: 0.6,
        delay: 1,
        ease: "Power2.easeIn"
      });
      this.gsap.from(".section-venues-down-img", {
        scrollTrigger: ".section-galery-up-txt3",
        // start the animation when ".box" enters the viewport (once)
        duration: 0.6,
        delay: 1,
        scaleX: 1.2,
        scaleY: 1.2
      });
      this.gsap.from(this.$refs.logoGalery, {
        scrollTrigger: this.$refs.logoGalery,
        // start the animation when ".box" enters the viewport (once)
        duration: 0.6,
        delay: 0.2,
        scaleX: 0,
        scaleY: 0,
        autoAlpha: 0
      }); // this.gsap.from(".cdmx-gallery", {
      //   scrollTrigger: ".cdmx-gallery", // start the animation when ".box" enters the viewport (once)
      //   duration:0.6,
      //   autoAlpha:0,
      //   delay:0.2,
      //   ease: "Power2.easeIn"
      // });

      this.gsap.from(".section-galery-up-txt3", {
        scrollTrigger: this.$refs.logoGalery,
        // start the animation when ".box" enters the viewport (once)
        duration: 0.6,
        autoAlpha: 0,
        delay: 0.4,
        x: 80,
        ease: "Power2.easeIn"
      });
      this.gsap.from(this.$refs.teamFast1, {
        scrollTrigger: this.$refs.teamFast1,
        // start the animation when ".box" enters the viewport (once)
        duration: 0.6,
        autoAlpha: 0,
        delay: 0.2,
        y: -50,
        ease: "Power2.easeOut"
      });
      this.gsap.from(this.$refs.teamFast2, {
        scrollTrigger: this.$refs.teamFast2,
        // start the animation when ".box" enters the viewport (once)
        duration: 0.6,
        autoAlpha: 0,
        delay: 0.6,
        x: -50,
        ease: "Power2.easeOut"
      });
    },
    handleGoTo: function handleGoTo(e) {
      e.preventDefault();
      this.$router.push('/registro');
    },
    loadfondoHome: function loadfondoHome() {
      console.log('loadfondoHome');
      this.showFondoInicio();
      this.showLogoInicio();
    },
    setLogoInicio: function setLogoInicio() {
      this.gsap.to(this.$refs.logoInicio, {
        autoAlpha: 0,
        duration: 0,
        scaleX: 0,
        scaleY: 0
      });
    },
    setFondoInicio: function setFondoInicio() {
      console.log('fondoInicio');
      this.gsap.to(this.$refs.fondoInicio, {
        autoAlpha: 0,
        duration: 0
      });
    },
    setWelcome: function setWelcome() {
      this.gsap.to(".welcome", {
        autoAlpha: 0,
        duration: 0,
        y: 400
      });
    },
    showFondoInicio: function showFondoInicio() {
      this.gsap.to(this.$refs.fondoInicio, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "Power2.easeIn"
      });
    },
    showLogoInicio: function showLogoInicio() {
      this.gsap.to(this.$refs.logoInicio, {
        autoAlpha: 1,
        duration: 0.8,
        scaleX: 1,
        scaleY: 1,
        delay: 0.2,
        ease: "Power2.easeOut",
        onComplete: this.showWelcome
      });
    },
    showWelcome: function showWelcome() {
      this.gsap.to(".welcome", {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "Power2.easeOut"
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".home[data-v-6a63e488] {\n  max-width: 100vw;\n  overflow-x: hidden;\n}\n.footer-styles[data-v-6a63e488] {\n  padding: 96px 24px 48px;\n  background: linear-gradient(transparent, 35%, #110315);\n  opacity: 1;\n}\n.footer-styles .footer-1[data-v-6a63e488] {\n  text-align: left;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-1[data-v-6a63e488] {\n    text-align: center;\n}\n}\n.footer-styles .footer-2[data-v-6a63e488] {\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-2[data-v-6a63e488] {\n    margin-top: 20px;\n    text-align: center;\n}\n}\n.first-section[data-v-6a63e488] {\n  position: relative;\n  height: 830px;\n  overflow: hidden;\n}\n@media screen and (max-width: 768px) {\n.first-section[data-v-6a63e488] {\n    height: 1080px;\n}\n.first-section .fondo-home[data-v-6a63e488] {\n    padding-top: 152% !important;\n    padding-left: 10%;\n    width: 210%;\n}\n}\n.first-section .logo-container[data-v-6a63e488] {\n  top: 224px;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n@media screen and (max-width: 1463px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 176px;\n}\n}\n@media screen and (max-width: 1252px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 166px;\n}\n}\n@media screen and (max-width: 1156px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 150px;\n}\n}\n@media screen and (max-width: 1092px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 135px;\n}\n}\n@media screen and (max-width: 1000px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 125px;\n}\n}\n@media screen and (max-width: 978px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 115px;\n}\n}\n@media screen and (max-width: 875px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 95px;\n}\n}\n@media screen and (max-width: 768px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 80px;\n}\n}\n@media screen and (max-width: 610px) {\n.first-section .logo-container[data-v-6a63e488] {\n    top: 70px;\n}\n}\n.first-section .logo-container .logo-galery[data-v-6a63e488] {\n  width: 20%;\n  margin: auto;\n}\n@media screen and (max-width: 768px) {\n.first-section .logo-container .logo-galery[data-v-6a63e488] {\n    width: 30%;\n}\n}\n.vertical-sect[data-v-6a63e488] {\n  height: 950px;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n  margin: -181px 0 0;\n}\n.section-coaches[data-v-6a63e488] {\n  height: 950px;\n}\n.section-coaches .coaches1[data-v-6a63e488] {\n  height: 100%;\n  padding-top: 54px !important;\n  filter: grayscale(100%);\n}\n@media screen and (max-width: 768px) {\n.section-coaches[data-v-6a63e488] {\n    -webkit-clip-path: none;\n            clip-path: none;\n    height: 100%;\n    margin-top: -26%;\n}\n}\n@media screen and (max-width: 687px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -28%;\n}\n}\n@media screen and (max-width: 635px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -30%;\n}\n}\n@media screen and (max-width: 599px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -32%;\n}\n}\n@media screen and (max-width: 561px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -34%;\n}\n}\n@media screen and (max-width: 527px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -36%;\n}\n}\n@media screen and (max-width: 527px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -38%;\n}\n}\n@media screen and (max-width: 469px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -40%;\n}\n}\n@media screen and (max-width: 443px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -43%;\n}\n}\n@media screen and (max-width: 415px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -46%;\n}\n}\n@media screen and (max-width: 387px) {\n.section-coaches[data-v-6a63e488] {\n    margin-top: -49%;\n}\n}\n.coaches2[data-v-6a63e488] {\n  padding-top: 207px !important;\n  background: linear-gradient(135deg, #6b6c77, #242127);\n  height: 915px;\n}\n@media screen and (max-width: 768px) {\n.coaches2[data-v-6a63e488] {\n    padding-top: 230px !important;\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 85%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 85%, 0% 100%);\n    z-index: 1;\n    position: relative;\n    height: 750px !important;\n}\n}\n.coaches2 .coaches-text[data-v-6a63e488] {\n  padding-right: 52px !important;\n}\n@media screen and (max-width: 1080px) {\n.coaches2[data-v-6a63e488] {\n    padding-top: 230px !important;\n}\n}\n@media screen and (max-width: 980px) {\n.coaches2[data-v-6a63e488] {\n    padding-top: 240px !important;\n}\n}\n@media screen and (max-width: 850px) {\n.coaches2[data-v-6a63e488] {\n    padding-top: 260px !important;\n}\n}\n@media screen and (max-width: 768px) {\n.coaches2[data-v-6a63e488] {\n    padding-top: 260px !important;\n    height: 915px;\n}\n}\n.coaches-text1[data-v-6a63e488] {\n  color: black;\n  font-size: 150px;\n  line-height: 150px;\n}\n@media screen and (max-width: 1080px) {\n.coaches-text1[data-v-6a63e488] {\n    font-size: 140px;\n    line-height: 140px;\n}\n}\n@media screen and (max-width: 980px) {\n.coaches-text1[data-v-6a63e488] {\n    font-size: 130px;\n    line-height: 130px;\n}\n}\n@media screen and (max-width: 850px) {\n.coaches-text1[data-v-6a63e488] {\n    font-size: 120px;\n    line-height: 120px;\n}\n}\n@media screen and (max-width: 768px) {\n.coaches-text1[data-v-6a63e488] {\n    font-size: 90px;\n    line-height: 90px;\n}\n}\n.coaches-text2[data-v-6a63e488] {\n  color: white;\n  font-size: 180px;\n  line-height: 112px;\n  padding-left: 51px;\n}\n@media screen and (max-width: 1080px) {\n.coaches-text2[data-v-6a63e488] {\n    font-size: 170px;\n    line-height: 102px;\n}\n}\n@media screen and (max-width: 980px) {\n.coaches-text2[data-v-6a63e488] {\n    font-size: 160px;\n    line-height: 92px;\n}\n}\n@media screen and (max-width: 850px) {\n.coaches-text2[data-v-6a63e488] {\n    font-size: 150px;\n    line-height: 82px;\n}\n}\n@media screen and (max-width: 768px) {\n.coaches-text2[data-v-6a63e488] {\n    font-size: 130px;\n    line-height: 82px;\n}\n}\n.coaches-text3[data-v-6a63e488] {\n  color: black;\n  font-size: 120px;\n  line-height: 133px;\n  padding-left: 50px;\n}\n@media screen and (max-width: 1080px) {\n.coaches-text3[data-v-6a63e488] {\n    font-size: 110px;\n    line-height: 123px;\n}\n}\n@media screen and (max-width: 980px) {\n.coaches-text3[data-v-6a63e488] {\n    font-size: 100px;\n    line-height: 113px;\n}\n}\n@media screen and (max-width: 850px) {\n.coaches-text3[data-v-6a63e488] {\n    font-size: 90px;\n    line-height: 103px;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 784px) {\n.coaches-text3[data-v-6a63e488] {\n    padding-left: 0px;\n    text-align: right;\n}\n}\n@media screen and (max-width: 768px) {\n.coaches-text3[data-v-6a63e488] {\n    font-size: 80px;\n    line-height: 103px;\n}\n}\n.coaches-text4[data-v-6a63e488] {\n  color: white;\n  font-size: 80px;\n  line-height: 34px;\n  padding-left: 181px;\n}\n@media screen and (max-width: 1080px) {\n.coaches-text4[data-v-6a63e488] {\n    font-size: 70px;\n    line-height: 24px;\n}\n}\n@media screen and (max-width: 980px) {\n.coaches-text4[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 14px;\n}\n}\n@media screen and (max-width: 904px) {\n.coaches-text4[data-v-6a63e488] {\n    padding-left: 0;\n    text-align: right;\n}\n}\n@media screen and (max-width: 850px) {\n.coaches-text4[data-v-6a63e488] {\n    font-size: 50px;\n    line-height: 4px;\n}\n}\n@media screen and (max-width: 768px) {\n.coaches-text4[data-v-6a63e488] {\n    padding-left: 0;\n    padding-right: 4%;\n}\n}\n.section-venues-up[data-v-6a63e488] {\n  height: 950px;\n  background: black;\n  padding-top: 178px;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n  margin-top: -178px;\n}\n@media screen and (max-width: 1080px) {\n.section-venues-up[data-v-6a63e488] {\n    padding-top: 188px;\n}\n}\n@media screen and (max-width: 980px) {\n.section-venues-up[data-v-6a63e488] {\n    padding-top: 198px;\n}\n}\n@media screen and (max-width: 850px) {\n.section-venues-up[data-v-6a63e488] {\n    padding-top: 208px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-venues-up[data-v-6a63e488] {\n    padding-top: 130px;\n    height: 1000px;\n}\n}\n.section-venues-up .section-venues1[data-v-6a63e488] {\n  font-size: 180px;\n  line-height: 150px;\n  color: white;\n  text-align: right;\n}\n@media screen and (max-width: 1080px) {\n.section-venues-up .section-venues1[data-v-6a63e488] {\n    font-size: 170px;\n    line-height: 140px;\n}\n}\n@media screen and (max-width: 980px) {\n.section-venues-up .section-venues1[data-v-6a63e488] {\n    font-size: 160px;\n    line-height: 130px;\n}\n}\n@media screen and (max-width: 850px) {\n.section-venues-up .section-venues1[data-v-6a63e488] {\n    font-size: 150px;\n    line-height: 120px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-venues-up .section-venues1[data-v-6a63e488] {\n    margin-right: 6%;\n    font-size: 110px;\n    line-height: 90px;\n}\n}\n.section-venues-up .txt-aire[data-v-6a63e488] {\n  color: white;\n}\n.section-venues-up .section-venues2[data-v-6a63e488] {\n  font-size: 80px;\n  line-height: 80px;\n  color: #6d6e79;\n  text-align: left;\n  padding-left: 24px !important;\n  padding-top: 65px !important;\n}\n@media screen and (max-width: 1080px) {\n.section-venues-up .section-venues2[data-v-6a63e488] {\n    font-size: 70px;\n    line-height: 70px;\n}\n}\n@media screen and (max-width: 980px) {\n.section-venues-up .section-venues2[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 60px;\n}\n}\n@media screen and (max-width: 850px) {\n.section-venues-up .section-venues2[data-v-6a63e488] {\n    font-size: 50px;\n    line-height: 50px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-venues-up .section-venues2[data-v-6a63e488] {\n    padding-top: 45px !important;\n}\n}\n.section-venues-up .section-venues2 span[data-v-6a63e488] {\n  font-size: 120px;\n  margin-top: 14px;\n  margin-left: 14px;\n  position: absolute;\n}\n@media screen and (max-width: 1080px) {\n.section-venues-up .section-venues2 span[data-v-6a63e488] {\n    font-size: 110px;\n}\n}\n@media screen and (max-width: 980px) {\n.section-venues-up .section-venues2 span[data-v-6a63e488] {\n    font-size: 100px;\n}\n}\n@media screen and (max-width: 850px) {\n.section-venues-up .section-venues2 span[data-v-6a63e488] {\n    font-size: 90px;\n}\n}\n.section-venues-down[data-v-6a63e488] {\n  overflow: hidden;\n  height: 950px;\n  margin-top: -500px !important;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n@media screen and (max-width: 768px) {\n.section-venues-down[data-v-6a63e488] {\n    height: 198vw;\n    -webkit-clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 693px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 11%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 11%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 643px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 585px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 539px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 493px) {\n.section-venues-down[data-v-6a63e488] {\n    height: 221vw;\n    -webkit-clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 459px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 428px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 406px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 378px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 350px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n@media screen and (max-width: 338px) {\n.section-venues-down[data-v-6a63e488] {\n    -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n            clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n}\n.section-venues-down .section-venues-down-img[data-v-6a63e488] {\n  filter: grayscale(80%);\n}\n@media screen and (min-width: 769px) {\n.section-venues-down .section-venues-down-img .img1-v[data-v-6a63e488] {\n    margin-top: 150px;\n}\n.section-venues-down .section-venues-down-img .img2-v[data-v-6a63e488] {\n    margin-top: 120px;\n}\n.section-venues-down .section-venues-down-img .img3-v[data-v-6a63e488] {\n    margin-top: 90px;\n}\n.section-venues-down .section-venues-down-img .img4-v[data-v-6a63e488] {\n    margin-top: 60px;\n}\n.section-venues-down .section-venues-down-img .img5-v[data-v-6a63e488] {\n    margin-top: 30px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-venues-down .section-venues-down-img .img1-v[data-v-6a63e488] {\n    padding-top: 250% !important;\n}\n.section-venues-down .section-venues-down-img .img2-v[data-v-6a63e488] {\n    padding-top: 250% !important;\n}\n}\n.section-venues-down .venue-name[data-v-6a63e488] {\n  color: white;\n  position: absolute;\n  width: 100%;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.section-venues-down .venue-name.pos-1[data-v-6a63e488] {\n  top: 61%;\n}\n.section-venues-down .venue-name.pos-2[data-v-6a63e488] {\n  top: 58%;\n}\n.section-venues-down .venue-name.pos-3[data-v-6a63e488] {\n  top: 56%;\n}\n.section-venues-down .venue-name.pos-4[data-v-6a63e488] {\n  top: 54%;\n}\n.section-venues-down .venue-name.pos-5[data-v-6a63e488] {\n  top: 52%;\n}\n.section-venues-down .venue-name.pos-6[data-v-6a63e488] {\n  top: 50%;\n}\n.section-venues-down-text[data-v-6a63e488] {\n  position: absolute;\n  width: 100%;\n  padding-top: 146px;\n  font-size: 225px;\n  z-index: 1;\n  color: white;\n  text-shadow: -4px 3px 0px #000000;\n}\n@media screen and (max-width: 1471px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 10%;\n}\n}\n@media screen and (max-width: 1422px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 9%;\n}\n}\n@media screen and (max-width: 1355px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 8%;\n}\n}\n@media screen and (max-width: 1092px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 8%;\n    font-size: 215px;\n}\n}\n@media screen and (max-width: 1047px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 7.2%;\n}\n}\n@media screen and (max-width: 946px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 7.2%;\n    font-size: 205px;\n}\n}\n@media screen and (max-width: 912px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 7.2%;\n}\n}\n@media screen and (max-width: 890px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 7.2%;\n    font-size: 195px;\n}\n}\n@media screen and (max-width: 829px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 7.2%;\n    font-size: 175px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 59%;\n    font-size: 225px;\n}\n}\n@media screen and (max-width: 635px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 57%;\n    font-size: 225px;\n}\n}\n@media screen and (max-width: 580px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 55%;\n    font-size: 225px;\n}\n}\n@media screen and (max-width: 520px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 53%;\n    font-size: 225px;\n}\n}\n@media screen and (max-width: 450px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 48%;\n    font-size: 225px;\n}\n}\n@media screen and (max-width: 400px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 45%;\n    font-size: 210px;\n}\n}\n@media screen and (max-width: 370px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 42%;\n    font-size: 210px;\n}\n}\n@media screen and (max-width: 337px) {\n.section-venues-down-text[data-v-6a63e488] {\n    padding-top: 39%;\n    font-size: 200px;\n}\n}\n.second-section[data-v-6a63e488] {\n  background: black;\n  background: linear-gradient(60deg, black, #9b98a2 40%, #a1a1a1);\n  height: 750px;\n  margin-top: -7.5% !important;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n  position: relative;\n}\n@media screen and (max-width: 1297px) {\n.second-section[data-v-6a63e488] {\n    height: 800px;\n}\n}\n@media screen and (max-width: 768px) {\n.second-section[data-v-6a63e488] {\n    height: 860px;\n}\n}\n.second-section .join-text[data-v-6a63e488] {\n  padding-top: 218px;\n  width: 100%;\n  text-align: center;\n  font-size: 180px;\n  line-height: 150px;\n  background: linear-gradient(#82838e, 62%, #dedee0);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n@media screen and (max-width: 1080px) {\n.second-section .join-text[data-v-6a63e488] {\n    font-size: 170px;\n    line-height: 140px;\n}\n}\n@media screen and (max-width: 980px) {\n.second-section .join-text[data-v-6a63e488] {\n    font-size: 160px;\n    line-height: 130px;\n}\n}\n@media screen and (max-width: 850px) {\n.second-section .join-text[data-v-6a63e488] {\n    font-size: 150px;\n    line-height: 120px;\n}\n}\n@media screen and (max-width: 768px) {\n.second-section .join-text[data-v-6a63e488] {\n    font-size: 95px;\n    line-height: 60px;\n    padding-top: 170px;\n}\n}\n.second-section .join-txt-2[data-v-6a63e488] {\n  font-size: 120px;\n  line-height: 120px;\n}\n.second-section .join-txt-2.txt-al[data-v-6a63e488] {\n  margin-left: -22px;\n}\n@media screen and (max-width: 768px) {\n.second-section .join-txt-2.txt-al[data-v-6a63e488] {\n    margin-left: -12px;\n}\n}\n.second-section .join-txt-2.team-txt[data-v-6a63e488] {\n  margin-right: -20px;\n  vertical-align: top;\n}\n@media screen and (max-width: 768px) {\n.second-section .join-txt-2.team-txt[data-v-6a63e488] {\n    margin-right: -12px;\n    line-height: 35px;\n}\n}\n@media screen and (max-width: 1080px) {\n.second-section .join-txt-2[data-v-6a63e488] {\n    font-size: 110px;\n    line-height: 123px;\n}\n}\n@media screen and (max-width: 980px) {\n.second-section .join-txt-2[data-v-6a63e488] {\n    font-size: 100px;\n    line-height: 113px;\n}\n}\n@media screen and (max-width: 850px) {\n.second-section .join-txt-2[data-v-6a63e488] {\n    font-size: 90px;\n    line-height: 103px;\n}\n}\n@media screen and (min-width: 769px) and (max-width: 784px) {\n.second-section .join-txt-2[data-v-6a63e488] {\n    padding-left: 0px;\n    text-align: right;\n}\n}\n@media screen and (max-width: 768px) {\n.second-section .join-txt-2[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 85px;\n}\n}\n.second-section .join-text-r1[data-v-6a63e488] {\n  padding-top: 189px;\n  padding-left: 4px;\n  padding-right: 4px;\n  color: white;\n  font-size: 150px;\n  line-height: 150px;\n}\n@media screen and (max-width: 1391px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    font-size: 140px;\n    line-height: 140px;\n}\n}\n@media screen and (max-width: 1273px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    font-size: 130px;\n    line-height: 130px;\n}\n}\n@media screen and (max-width: 1225px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    font-size: 120px;\n    line-height: 120px;\n}\n}\n@media screen and (max-width: 1100px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    font-size: 100px;\n    line-height: 100px;\n}\n}\n@media screen and (max-width: 986px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    font-size: 90px;\n    line-height: 90px;\n}\n}\n@media screen and (max-width: 860px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    font-size: 80px;\n    line-height: 90px;\n}\n}\n@media screen and (max-width: 768px) {\n.second-section .join-text-r1[data-v-6a63e488] {\n    padding-top: 30px;\n    font-size: 80px;\n    line-height: 100px;\n}\n}\n.second-section .join-text-r2[data-v-6a63e488] {\n  color: white;\n  padding: 4%;\n  font-size: 30px;\n}\n@media screen and (max-width: 1038px) {\n.second-section .join-text-r2[data-v-6a63e488] {\n    font-size: 25px;\n}\n}\n@media screen and (max-width: 768px) {\n.second-section .join-text-r2[data-v-6a63e488] {\n    font-size: 22px;\n}\n}\n.second-section .register-button[data-v-6a63e488] {\n  margin-top: 50px;\n  background-color: #6d6e79;\n  border-color: #6d6e79;\n  color: white;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  padding: 3px 36px 0;\n}\n.second-section .bg2[data-v-6a63e488] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-image: repeating-linear-gradient(-45deg, transparent, transparent 20px, black 20px, black 40px);\n  /* with multiple color stop lengths */\n  background-image: repeating-linear-gradient(11deg, transparent 0 14px, black 20px 5.5%);\n}\n.second-section .bg3[data-v-6a63e488] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: linear-gradient(-159deg, transparent, 60%, black);\n}\n@media screen and (max-width: 1857px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -8% !important;\n}\n}\n@media screen and (max-width: 1764px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -8.5% !important;\n}\n}\n@media screen and (max-width: 1704px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -9% !important;\n}\n}\n@media screen and (max-width: 1680px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -9% !important;\n}\n}\n@media screen and (max-width: 1639px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -9% !important;\n}\n}\n@media screen and (max-width: 1612px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -9% !important;\n}\n}\n@media screen and (max-width: 1595px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -10% !important;\n}\n}\n@media screen and (max-width: 1576px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -10% !important;\n}\n}\n@media screen and (max-width: 1529px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -11% !important;\n}\n}\n@media screen and (max-width: 1481px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -12% !important;\n}\n}\n@media screen and (max-width: 1462px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -15% !important;\n}\n}\n@media screen and (max-width: 1381px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -18% !important;\n}\n}\n@media screen and (max-width: 1328px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -21% !important;\n}\n}\n@media screen and (max-width: 1272px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -24% !important;\n}\n}\n@media screen and (max-width: 1224px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -27% !important;\n}\n}\n@media screen and (max-width: 1177px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -31% !important;\n}\n}\n@media screen and (max-width: 1122px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -35% !important;\n}\n}\n@media screen and (max-width: 1073px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -38% !important;\n}\n}\n@media screen and (max-width: 1040px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -42% !important;\n}\n}\n@media screen and (max-width: 1000px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -46% !important;\n}\n}\n@media screen and (max-width: 962px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -50% !important;\n}\n}\n@media screen and (max-width: 928px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -54% !important;\n}\n}\n@media screen and (max-width: 894px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -57% !important;\n}\n}\n@media screen and (max-width: 871px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -61% !important;\n}\n}\n@media screen and (max-width: 842px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -65% !important;\n}\n}\n@media screen and (max-width: 816px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -69% !important;\n}\n}\n@media screen and (max-width: 789px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -73% !important;\n}\n}\n@media screen and (max-width: 768px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -40% !important;\n}\n}\n@media screen and (max-width: 766px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -40% !important;\n}\n}\n@media screen and (max-width: 673px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -40% !important;\n}\n}\n@media screen and (max-width: 652px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -60% !important;\n}\n}\n@media screen and (max-width: 594px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -70% !important;\n}\n}\n@media screen and (max-width: 568px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -90% !important;\n}\n}\n@media screen and (max-width: 523px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -110% !important;\n}\n}\n@media screen and (max-width: 468px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -120% !important;\n}\n}\n@media screen and (max-width: 452px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -130% !important;\n}\n}\n@media screen and (max-width: 436px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -140% !important;\n}\n}\n@media screen and (max-width: 424px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -150% !important;\n}\n}\n@media screen and (max-width: 400px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -160% !important;\n}\n}\n@media screen and (max-width: 392px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -180% !important;\n}\n}\n@media screen and (max-width: 380px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -180% !important;\n}\n}\n@media screen and (max-width: 373px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -190% !important;\n}\n}\n@media screen and (max-width: 360px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -200% !important;\n}\n}\n@media screen and (max-width: 352px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -210% !important;\n}\n}\n@media screen and (max-width: 344px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -220% !important;\n}\n}\n@media screen and (max-width: 332px) {\n.second-section[data-v-6a63e488] {\n    margin-top: -230% !important;\n}\n}\n.mobile-section[data-v-6a63e488] {\n  height: 950px;\n  margin-top: -500px !important;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n}\n@media screen and (max-width: 1471px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -37% !important;\n}\n}\n@media screen and (max-width: 1422px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -40% !important;\n}\n}\n@media screen and (max-width: 1355px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -43% !important;\n}\n}\n@media screen and (max-width: 1300px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -46% !important;\n}\n}\n@media screen and (max-width: 1252px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -49% !important;\n}\n}\n@media screen and (max-width: 1207px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -52% !important;\n}\n}\n@media screen and (max-width: 1164px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -55% !important;\n}\n}\n@media screen and (max-width: 1126px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -58% !important;\n}\n}\n@media screen and (max-width: 1092px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -62% !important;\n}\n}\n@media screen and (max-width: 1047px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -66% !important;\n}\n}\n@media screen and (max-width: 1003px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -68% !important;\n}\n}\n@media screen and (max-width: 987px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -72% !important;\n}\n}\n@media screen and (max-width: 946px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -76% !important;\n}\n}\n@media screen and (max-width: 912px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -79% !important;\n}\n}\n@media screen and (max-width: 890px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -82% !important;\n}\n}\n@media screen and (max-width: 867px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -85% !important;\n}\n}\n@media screen and (max-width: 845px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -88% !important;\n}\n}\n@media screen and (max-width: 829px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -91% !important;\n}\n}\n@media screen and (max-width: 787px) {\n.mobile-section[data-v-6a63e488] {\n    margin-top: -94% !important;\n}\n}\n.gallery-container[data-v-6a63e488] {\n  position: relative;\n}\n.gallery-container .logo-container[data-v-6a63e488] {\n  top: 335px;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n@media screen and (max-width: 1252px) {\n.gallery-container .logo-container[data-v-6a63e488] {\n    top: 270px;\n}\n}\n@media screen and (max-width: 1092px) {\n.gallery-container .logo-container[data-v-6a63e488] {\n    top: 240px;\n}\n}\n@media screen and (max-width: 867px) {\n.gallery-container .logo-container[data-v-6a63e488] {\n    top: 200px;\n}\n}\n@media screen and (max-width: 768px) {\n.gallery-container .logo-container[data-v-6a63e488] {\n    top: 233px;\n}\n}\n@media screen and (max-width: 689px) {\n.gallery-container .logo-container[data-v-6a63e488] {\n    top: 233px;\n}\n}\n.gallery-container .logo-container .logo-galery[data-v-6a63e488] {\n  width: 20%;\n  margin: auto;\n}\n@media screen and (max-width: 768px) {\n.gallery-container .logo-container .logo-galery[data-v-6a63e488] {\n    width: 30%;\n}\n}\n.section-galery-up[data-v-6a63e488] {\n  background: black;\n}\n@media screen and (max-width: 768px) {\n.section-galery-up[data-v-6a63e488] {\n    -webkit-clip-path: none;\n            clip-path: none;\n    height: 850px;\n}\n}\n.section-galery-up .container-txt1[data-v-6a63e488] {\n  padding-top: 158px !important;\n}\n@media screen and (max-width: 1207px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 142px !important;\n}\n}\n@media screen and (max-width: 1164px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 125px !important;\n}\n}\n@media screen and (max-width: 1047px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 118px !important;\n}\n}\n@media screen and (max-width: 1003px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 110px !important;\n}\n}\n@media screen and (max-width: 987px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 110px !important;\n}\n}\n@media screen and (max-width: 946px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 110px !important;\n}\n}\n@media screen and (max-width: 912px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 110px !important;\n}\n}\n@media screen and (max-width: 890px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 110px !important;\n}\n}\n@media screen and (max-width: 768px) {\n.section-galery-up .container-txt1[data-v-6a63e488] {\n    padding-top: 0 !important;\n}\n}\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n  color: white;\n  font-size: 180px;\n  line-height: 112px;\n  text-align: left;\n  padding-top: 88px;\n  margin-left: 13%;\n}\n@media screen and (max-width: 1373px) {\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n    font-size: 170px;\n    line-height: 102px;\n}\n}\n@media screen and (max-width: 1280px) {\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n    font-size: 160px;\n    line-height: 92px;\n}\n}\n@media screen and (max-width: 1126px) {\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n    font-size: 150px;\n    line-height: 82px;\n}\n}\n@media screen and (max-width: 987px) {\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n    font-size: 140px;\n    line-height: 72px;\n}\n}\n@media screen and (max-width: 890px) {\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n    font-size: 130px;\n    line-height: 62px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-galery-up .section-galery-up-txt1[data-v-6a63e488] {\n    margin: 0 1%;\n    line-height: 80px;\n    text-align: center;\n    padding-top: 40px;\n}\n}\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n  color: #6d6e79;\n  font-size: 120px;\n  line-height: 133px;\n  text-align: left;\n  margin-left: 12%;\n}\n@media screen and (max-width: 1550px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 110px;\n    line-height: 123px;\n}\n}\n@media screen and (max-width: 1373px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 100px;\n    line-height: 113px;\n}\n}\n@media screen and (max-width: 1280px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 90px;\n    line-height: 103px;\n}\n}\n@media screen and (max-width: 1126px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 80px;\n    line-height: 93px;\n}\n}\n@media screen and (max-width: 987px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 70px;\n    line-height: 83px;\n}\n}\n@media screen and (max-width: 890px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 73px;\n}\n}\n@media screen and (max-width: 890px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 73px;\n}\n}\n@media screen and (max-width: 890px) {\n.section-galery-up .section-galery-up-txt2[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 78px;\n}\n}\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n  color: white;\n  width: 60%;\n  text-align: right;\n  margin-right: 3%;\n  font-size: 28px;\n  padding-top: 6% !important;\n}\n@media screen and (max-width: 1355px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 8% !important;\n}\n}\n@media screen and (max-width: 1047px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    font-size: 25px;\n}\n}\n@media screen and (max-width: 890px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 9% !important;\n    font-size: 22px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    text-align: center;\n    margin-left: 1%;\n    margin-right: 1%;\n    width: 100%;\n    padding-top: 46% !important;\n}\n}\n@media screen and (max-width: 689px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 48% !important;\n}\n}\n@media screen and (max-width: 597px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 52% !important;\n}\n}\n@media screen and (max-width: 514px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 55% !important;\n}\n}\n@media screen and (max-width: 514px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 60% !important;\n}\n}\n@media screen and (max-width: 453px) {\n.section-galery-up .section-galery-up-txt3[data-v-6a63e488] {\n    padding-top: 70% !important;\n}\n}\n.section-galery-down[data-v-6a63e488] {\n  background: black;\n  filter: grayscale(60%);\n}\n@media screen and (max-width: 768px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -24% !important;\n}\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 153% !important;\n}\n}\n@media screen and (max-width: 717px) {\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 200% !important;\n    width: 116%;\n}\n}\n@media screen and (max-width: 600px) {\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 212% !important;\n    width: 179%;\n}\n}\n@media screen and (max-width: 447px) {\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 235% !important;\n    width: 179%;\n}\n}\n@media screen and (max-width: 408px) {\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 255% !important;\n    width: 190%;\n}\n}\n@media screen and (max-width: 377px) {\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 275% !important;\n    width: 190%;\n}\n}\n@media screen and (max-width: 346px) {\n.section-galery-down .model-2[data-v-6a63e488] {\n    padding-top: 295% !important;\n    width: 190%;\n}\n}\n@media screen and (max-width: 752px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -25% !important;\n}\n}\n@media screen and (max-width: 717px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -26% !important;\n}\n}\n@media screen and (max-width: 692px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -27% !important;\n}\n}\n@media screen and (max-width: 669px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -28% !important;\n}\n}\n@media screen and (max-width: 647px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -29% !important;\n}\n}\n@media screen and (max-width: 620px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -31% !important;\n}\n}\n@media screen and (max-width: 583px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -34% !important;\n}\n}\n@media screen and (max-width: 530px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -36% !important;\n}\n}\n@media screen and (max-width: 502px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -40% !important;\n}\n}\n@media screen and (max-width: 447px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -43% !important;\n}\n}\n@media screen and (max-width: 420px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -46% !important;\n}\n}\n@media screen and (max-width: 392px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -49% !important;\n}\n}\n@media screen and (max-width: 365px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -53% !important;\n}\n}\n@media screen and (max-width: 353px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -56% !important;\n}\n}\n@media screen and (max-width: 325px) {\n.section-galery-down[data-v-6a63e488] {\n    margin-top: -61% !important;\n}\n}\n.section-galery-down .over-photo[data-v-6a63e488] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  text-align: left;\n  background: linear-gradient(rgba(96, 168, 247, 0.2), 11%, transparent);\n}\n.section-team[data-v-6a63e488] {\n  height: 900px;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n  background: black;\n  padding-top: 12%;\n  position: relative;\n}\n@media screen and (max-width: 1422px) {\n.section-team[data-v-6a63e488] {\n    padding-top: 15%;\n}\n}\n@media screen and (max-width: 1126px) {\n.section-team[data-v-6a63e488] {\n    padding-top: 18%;\n}\n}\n@media screen and (max-width: 987px) {\n.section-team[data-v-6a63e488] {\n    padding-top: 20%;\n}\n}\n@media screen and (max-width: 890px) {\n.section-team[data-v-6a63e488] {\n    padding-top: 22%;\n}\n}\n@media screen and (max-width: 768px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -36% !important;\n    height: 1000px;\n}\n}\n@media screen and (max-width: 474px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -38% !important;\n}\n}\n@media screen and (max-width: 450px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -45% !important;\n}\n}\n@media screen and (max-width: 383px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -49% !important;\n}\n}\n@media screen and (max-width: 346px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -52% !important;\n}\n}\n@media screen and (max-width: 324px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -65% !important;\n}\n}\n@media screen and (max-width: 308px) {\n.section-team[data-v-6a63e488] {\n    margin-top: -80% !important;\n}\n}\n.section-team .logo-container[data-v-6a63e488] {\n  top: 40%;\n  position: absolute;\n  width: 50%;\n  z-index: 1;\n}\n@media screen and (max-width: 1700px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 38%;\n}\n}\n@media screen and (max-width: 1550px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 36%;\n}\n}\n@media screen and (max-width: 1373px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 34%;\n}\n}\n@media screen and (max-width: 1280px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 32%;\n}\n}\n@media screen and (max-width: 1126px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 31%;\n}\n}\n@media screen and (max-width: 987px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 30%;\n}\n}\n@media screen and (max-width: 890px) {\n.section-team .logo-container[data-v-6a63e488] {\n    top: 29%;\n}\n}\n@media screen and (max-width: 768px) {\n.section-team .logo-container[data-v-6a63e488] {\n    position: relative;\n    width: 100%;\n}\n}\n.section-team .logo-container .logo-styles[data-v-6a63e488] {\n  width: 50%;\n  margin: auto;\n}\n@media screen and (max-width: 768px) {\n.section-team .logo-container .logo-styles[data-v-6a63e488] {\n    width: 25%;\n}\n}\n.section-team .section-team1[data-v-6a63e488] {\n  color: white;\n  font-size: 120px;\n  line-height: 133px;\n  text-align: center;\n}\n@media screen and (max-width: 1550px) {\n.section-team .section-team1[data-v-6a63e488] {\n    font-size: 110px;\n    line-height: 123px;\n}\n}\n@media screen and (max-width: 1373px) {\n.section-team .section-team1[data-v-6a63e488] {\n    font-size: 100px;\n    line-height: 113px;\n}\n}\n@media screen and (max-width: 1280px) {\n.section-team .section-team1[data-v-6a63e488] {\n    font-size: 90px;\n    line-height: 103px;\n}\n}\n@media screen and (max-width: 1126px) {\n.section-team .section-team1[data-v-6a63e488] {\n    font-size: 80px;\n    line-height: 93px;\n}\n}\n@media screen and (max-width: 987px) {\n.section-team .section-team1[data-v-6a63e488] {\n    font-size: 70px;\n    line-height: 83px;\n}\n}\n@media screen and (max-width: 890px) {\n.section-team .section-team1[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 73px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-team .section-team1[data-v-6a63e488] {\n    margin-top: 20px;\n    font-size: 60px;\n    line-height: 73px;\n    position: relative;\n    z-index: 1;\n    margin-bottom: 26px;\n}\n}\n@media screen and (max-width: 600px) {\n.section-team .section-team1[data-v-6a63e488] {\n    margin-top: 50px;\n}\n}\n@media screen and (max-width: 568px) {\n.section-team .section-team1[data-v-6a63e488] {\n    margin-top: 60px;\n}\n}\n@media screen and (max-width: 468px) {\n.section-team .section-team1[data-v-6a63e488] {\n    margin-top: 80px;\n}\n}\n@media screen and (max-width: 388px) {\n.section-team .section-team1[data-v-6a63e488] {\n    margin-top: 100px;\n}\n}\n@media screen and (max-width: 308px) {\n.section-team .section-team1[data-v-6a63e488] {\n    margin-top: 100px;\n}\n}\n.section-team .section-team-cont[data-v-6a63e488] {\n  background: linear-gradient(#55575f, black);\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n}\n.section-team .section-team2[data-v-6a63e488] {\n  position: relative;\n  color: white;\n  font-size: 24px;\n  max-width: 80%;\n  margin: auto;\n}\n@media screen and (max-width: 1280px) {\n.section-team .section-team2[data-v-6a63e488] {\n    font-size: 22px;\n}\n}\n@media screen and (max-width: 1126px) {\n.section-team .section-team2[data-v-6a63e488] {\n    font-size: 20px;\n}\n}\n@media screen and (max-width: 987px) {\n.section-team .section-team2[data-v-6a63e488] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 768px) {\n.section-team .section-team2[data-v-6a63e488] {\n    padding-top: 50px;\n}\n}\n.section-team .section-team2 .team-fast[data-v-6a63e488] {\n  font-size: 80px;\n  line-height: 80px;\n  color: white;\n  text-align: left;\n  padding-left: 24px !important;\n  padding-top: 65px !important;\n}\n@media screen and (max-width: 1280px) {\n.section-team .section-team2 .team-fast[data-v-6a63e488] {\n    padding-left: 0 !important;\n}\n}\n@media screen and (max-width: 1080px) {\n.section-team .section-team2 .team-fast[data-v-6a63e488] {\n    font-size: 70px;\n    line-height: 70px;\n}\n}\n@media screen and (max-width: 980px) {\n.section-team .section-team2 .team-fast[data-v-6a63e488] {\n    font-size: 60px;\n    line-height: 60px;\n}\n}\n@media screen and (max-width: 850px) {\n.section-team .section-team2 .team-fast[data-v-6a63e488] {\n    font-size: 50px;\n    line-height: 50px;\n}\n}\n.section-team .section-team2 .team-fast span[data-v-6a63e488] {\n  font-size: 120px;\n  margin-top: 14px;\n  margin-left: 14px;\n  position: absolute;\n}\n@media screen and (max-width: 1080px) {\n.section-team .section-team2 .team-fast span[data-v-6a63e488] {\n    font-size: 110px;\n}\n}\n@media screen and (max-width: 1047px) {\n.section-team .section-team2 .team-fast span[data-v-6a63e488] {\n    font-size: 90px;\n}\n}\n@media screen and (max-width: 980px) {\n.section-team .section-team2 .team-fast span[data-v-6a63e488] {\n    font-size: 90px;\n}\n}\n@media screen and (max-width: 850px) {\n.section-team .section-team2 .team-fast span[data-v-6a63e488] {\n    font-size: 80px;\n}\n}\n.columns[data-v-6a63e488] {\n  margin: 0;\n}\n.columns .column[data-v-6a63e488] {\n  padding: 0;\n}\n.welcome[data-v-6a63e488] {\n  position: absolute;\n  bottom: -8vw;\n  right: 0;\n  width: 30%;\n  height: 524px;\n  color: white;\n  padding: 24px;\n  background: linear-gradient(transparent, 35%, #110315);\n}\n@media screen and (max-width: 1614px) {\n.welcome[data-v-6a63e488] {\n    bottom: -7vw;\n}\n}\n@media screen and (max-width: 1384px) {\n.welcome[data-v-6a63e488] {\n    bottom: 0vw;\n}\n}\n@media screen and (max-width: 1368px) {\n.welcome[data-v-6a63e488] {\n    bottom: 0vw;\n}\n}\n@media screen and (max-width: 1251px) {\n.welcome[data-v-6a63e488] {\n    bottom: 5vw;\n}\n}\n@media screen and (max-width: 1178px) {\n.welcome[data-v-6a63e488] {\n    width: 34%;\n}\n}\n@media screen and (max-width: 1125px) {\n.welcome[data-v-6a63e488] {\n    width: 35%;\n    bottom: 6vw;\n}\n}\n@media screen and (max-width: 1002px) {\n.welcome[data-v-6a63e488] {\n    bottom: 8vw;\n}\n}\n@media screen and (max-width: 962px) {\n.welcome[data-v-6a63e488] {\n    bottom: 11vw;\n}\n}\n@media screen and (max-width: 933px) {\n.welcome[data-v-6a63e488] {\n    bottom: 14vw;\n}\n}\n@media screen and (max-width: 894px) {\n.welcome[data-v-6a63e488] {\n    bottom: 16vw;\n    width: 36%;\n}\n}\n@media screen and (max-width: 875px) {\n.welcome[data-v-6a63e488] {\n    bottom: 18vw;\n    padding: 14px 16px;\n}\n}\n@media screen and (max-width: 842px) {\n.welcome[data-v-6a63e488] {\n    bottom: 22vw;\n}\n}\n@media screen and (max-width: 808px) {\n.welcome[data-v-6a63e488] {\n    bottom: 28vw;\n}\n}\n@media screen and (max-width: 768px) {\n.welcome[data-v-6a63e488] {\n    width: 100%;\n    top: 70vw;\n    height: 80vh;\n}\n}\n.welcome .color-white[data-v-6a63e488] {\n  color: #ffffff;\n}\n.welcome .welcome-title[data-v-6a63e488] {\n  font-size: 120px;\n  margin: -112px;\n}\n@media screen and (max-width: 1200px) {\n.welcome .welcome-title[data-v-6a63e488] {\n    font-size: 110px;\n}\n}\n@media screen and (max-width: 1041px) {\n.welcome .welcome-title[data-v-6a63e488] {\n    font-size: 100px;\n    margin: -100px;\n}\n}\n@media screen and (max-width: 980px) {\n.welcome .welcome-title[data-v-6a63e488] {\n    font-size: 90px;\n}\n}\n@media screen and (max-width: 900px) {\n.welcome .welcome-title[data-v-6a63e488] {\n    margin: -90px;\n    font-size: 80px;\n}\n}\n@media screen and (max-width: 853px) {\n.welcome .welcome-title[data-v-6a63e488] {\n    margin: -86px;\n    font-size: 80px;\n}\n}\n@media screen and (max-width: 808px) {\n.welcome .welcome-title[data-v-6a63e488] {\n    margin: -72px;\n    font-size: 70px;\n}\n}\n.welcome .welcome-text[data-v-6a63e488] {\n  font-size: 25px;\n  margin-top: 93px;\n}\n@media screen and (max-width: 1514px) {\n.welcome .welcome-text[data-v-6a63e488] {\n    font-size: 22px;\n}\n}\n@media screen and (max-width: 1087px) {\n.welcome .welcome-text[data-v-6a63e488] {\n    font-size: 19px;\n}\n}\n@media screen and (max-width: 1041px) {\n.welcome .welcome-text[data-v-6a63e488] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 1038px) {\n.welcome .welcome-text[data-v-6a63e488] {\n    margin-top: 78px;\n}\n}\n@media screen and (max-width: 853px) {\n.welcome .welcome-text[data-v-6a63e488] {\n    margin-top: 68px;\n}\n}\n@media screen and (max-width: 808px) {\n.welcome .welcome-text[data-v-6a63e488] {\n    margin-top: 54px;\n}\n}\n.text-welcome[data-v-6a63e488] {\n  font-size: 25px;\n}\n@media screen and (max-width: 1514px) {\n.text-welcome[data-v-6a63e488] {\n    font-size: 22px;\n}\n}\n@media screen and (max-width: 1087px) {\n.text-welcome[data-v-6a63e488] {\n    font-size: 19px;\n}\n}\n@media screen and (max-width: 1041px) {\n.text-welcome[data-v-6a63e488] {\n    font-size: 18px;\n}\n}\n@media screen and (max-width: 1038px) {\n.text-welcome[data-v-6a63e488] {\n    margin-top: 78px;\n}\n}\n@media screen and (max-width: 853px) {\n.text-welcome[data-v-6a63e488] {\n    margin-top: 68px;\n}\n}\n@media screen and (max-width: 808px) {\n.text-welcome[data-v-6a63e488] {\n    margin-top: 54px;\n}\n}\n.photo-info[data-v-6a63e488] {\n  margin: auto;\n  position: absolute;\n  bottom: 0;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n  color: white;\n  opacity: 0;\n  transition: 0.3s;\n  transform: translateY(50px);\n  cursor: pointer;\n}\n.photo-info[data-v-6a63e488]:hover, .photo-info.always-on[data-v-6a63e488] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.photo-info .photo-info1[data-v-6a63e488] {\n  background: rgba(0, 0, 0, 0.2);\n  padding: 15px 14px 10px;\n  position: absolute;\n  bottom: 20%;\n  left: 0;\n  font-size: 24px;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_6a63e488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true& */ "./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6a63e488",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Home.vue"
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

/***/ "./resources/js/Pages/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=script&lang=js&");
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

/***/ "./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_6a63e488_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=style&index=0&id=6a63e488&lang=scss&scoped=true&");


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

/***/ "./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_6a63e488_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=6a63e488&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&");


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
        _c(
          "div",
          {
            staticClass: "column is-5-mobile",
            staticStyle: { margin: "auto" },
          },
          [
            _c(
              "p",
              { staticClass: "text-center" },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/G_Logo_Blanco.png",
                    ratio: "1by1",
                  },
                }),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column is-5-mobile",
            staticStyle: { margin: "auto" },
          },
          [
            _c(
              "p",
              { staticClass: "text-center" },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/FCEAD3F3-B3B4-4191-AC0F-F59D13D38564.png",
                    ratio: "1by1",
                  },
                }),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "column is-5-mobile",
            staticStyle: { margin: "auto" },
          },
          [
            _c(
              "p",
              { staticClass: "text-center nature" },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/Logo_NV.png",
                    ratio: "12by10",
                  },
                }),
              ],
              1
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", {
          staticClass:
            "column is-2-tablet is-3-desktop is-3-widescreen is-4-fullhd",
        }),
      ]
    ),
    _vm._v(" "),
    _vm._m(1),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Home.vue?vue&type=template&id=6a63e488&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "home" },
    [
      _c("div", { staticClass: "first-section" }, [
        _c(
          "div",
          { ref: "fondoInicio" },
          [
            _c("b-image", {
              staticClass: "fondo-home",
              staticStyle: { "margin-top": "0px" },
              attrs: {
                responsive: "",
                src: "/assets/img/PUMA_FONDO_HOME_2.jpg",
                ratio: "300by170",
              },
              on: { load: _vm.loadfondoHome },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "logo-container" }, [
          _c(
            "div",
            { ref: "logoInicio", staticClass: "logo-galery" },
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
        _vm._v(" "),
        _vm._m(0),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "second-section" }, [
        _c("div", { staticClass: "bg2" }),
        _vm._v(" "),
        _c("div", { staticClass: "bg3" }, [
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column" }, [
              _c("div", { staticClass: "gotica-italic join-text" }, [
                _c("div", { ref: "uneteAl" }, [_vm._m(1)]),
                _vm._v(" "),
                _c("div", { ref: "teamFaster" }, [
                  _c("span", { staticClass: "join-txt-2 team-txt" }, [
                    _vm._v("Team"),
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v("\n                Faster!\n              "),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column gotica-italic" }, [
              _c("div", { staticClass: "join-text-r1" }),
              _vm._v(" "),
              _c("div", { staticClass: "join-text-r2 puma-bold" }, [
                _vm._v(
                  "\n            Vuélvete parte de nuestra familia teamfaster y entrena como los grandes en alguna de las sedes que tenemos preparadas para ti\n          "
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { ref: "buttonRegistrarse" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "register-button",
                      attrs: { rounded: "", size: "is-medium" },
                      on: { click: _vm.handleGoTo },
                    },
                    [
                      _vm._v(
                        "\n              Conoce nuestras sedes\n            "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "vertical-sect coaches2 is-hidden-tablet gotica-italic",
        },
        [
          _c("div", { staticClass: "coaches-text" }, [
            _c("div", { ref: "coachesText1", staticClass: "coaches-text1" }, [
              _vm._v("\n            Nuestros\n          "),
            ]),
            _vm._v(" "),
            _c("div", { ref: "coachesText2", staticClass: "coaches-text2" }, [
              _vm._v("\n            Coaches\n          "),
            ]),
            _vm._v(" "),
            _c("div", { ref: "coachesText3", staticClass: "coaches-text3" }, [
              _vm._v("\n            Están listos...\n          "),
            ]),
            _vm._v(" "),
            _c("div", { ref: "coachesText4", staticClass: "coaches-text4" }, [
              _vm._v("\n            ¡Acepta el reto!\n          "),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "vertical-sect section-coaches gotica-italic" },
        [
          _c("div", { staticClass: "columns" }, [
            _c("div", { staticClass: "column coaches1 is-hidden-tablet " }, [
              _c(
                "div",
                {
                  staticClass: "columns is-multiline",
                  staticStyle: { margin: "0" },
                  on: {
                    click: function ($event) {
                      return _vm.$router.push("/coaches")
                    },
                  },
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "column is-6",
                      staticStyle: { padding: "0", position: "relative" },
                    },
                    [
                      _c("b-image", {
                        staticClass: "first-coach",
                        attrs: {
                          responsive: "",
                          src: "/assets/img/luis-carlos-origel2.png",
                          ratio: "1by1",
                        },
                      }),
                      _vm._v(" "),
                      _vm._m(2),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "column is-6",
                      staticStyle: { padding: "0", position: "relative" },
                    },
                    [
                      _c("b-image", {
                        attrs: {
                          responsive: "",
                          src: "/assets/img/MAFER-@maferarreolaa.jpg",
                          ratio: "1by1",
                        },
                      }),
                      _vm._v(" "),
                      _vm._m(3),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "column is-6",
                      staticStyle: { padding: "0", position: "relative" },
                    },
                    [
                      _c("b-image", {
                        attrs: {
                          responsive: "",
                          src: "/assets/img/FRANCHESCA-@franchescasb.jpg",
                          ratio: "1by1",
                        },
                      }),
                      _vm._v(" "),
                      _vm._m(4),
                    ],
                    1
                  ),
                ]
              ),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                ref: "coachesImgs",
                staticClass: "column coaches1 is-hidden-mobile",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "columns is-multiline",
                    staticStyle: { margin: "0" },
                    on: {
                      click: function ($event) {
                        return _vm.$router.push("/coaches")
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/MAFER-@maferarreolaa.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(5),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/FRANCHESCA-@franchescasb.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(6),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/PABLO-@pablohutt.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(7),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/vlopez.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(8),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/Jorge.png",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(9),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/David.png",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(10),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/Carloss.png",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(11),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/HomeroCastillo.png",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(12),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/Jorge.png",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(13),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/PABLO-@pablohutt.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(14),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/MAFER-@maferarreolaa.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(15),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/David.png",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(16),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "column is-6",
                        staticStyle: { padding: "0", position: "relative" },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/vlopez.jpg",
                            ratio: "1by1",
                          },
                        }),
                        _vm._v(" "),
                        _vm._m(17),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column coaches2 is-hidden-mobile" }, [
              _c("div", { staticClass: "coaches-text" }, [
                _c(
                  "div",
                  { ref: "coachesText1D", staticClass: "coaches-text1" },
                  [_vm._v("\n            Nuestros\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { ref: "coachesText2D", staticClass: "coaches-text2" },
                  [_vm._v("\n            Coaches\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { ref: "coachesText3D", staticClass: "coaches-text3" },
                  [_vm._v("\n            Están listos...\n          ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { ref: "coachesText4D", staticClass: "coaches-text4" },
                  [_vm._v("\n            ¡Acepta el reto!\n          ")]
                ),
              ]),
            ]),
          ]),
        ]
      ),
      _vm._v(" "),
      _vm._m(18),
      _vm._v(" "),
      _c("div", { staticClass: "section-venues-down gotica-italic" }, [
        _c("div", { staticClass: "section-venues-down-text" }, [
          _vm._v("\n      CDMX\n    "),
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "columns section-venues-down-img is-mobile is-multiline ",
          },
          [
            _c(
              "div",
              {
                staticClass: "column is-4-mobile",
                staticStyle: { position: "relative" },
              },
              [
                _c("b-image", {
                  staticClass: "img1-v",
                  attrs: {
                    responsive: "",
                    src: "/assets/img/FuenteXochipili.jpg",
                    ratio: "2by4",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column is-4-mobile",
                staticStyle: { position: "relative" },
              },
              [
                _c("b-image", {
                  staticClass: "img3-v",
                  attrs: {
                    responsive: "",
                    src: "/assets/img/ArtzPedregal.jpg",
                    ratio: "2by5",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column is-4-mobile",
                staticStyle: { position: "relative" },
              },
              [
                _c("b-image", {
                  staticClass: "img4-v",
                  attrs: {
                    responsive: "",
                    src: "/assets/img/JardinBotanico.jpg",
                    ratio: "2by5",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column", staticStyle: { position: "relative" } },
              [
                _c("b-image", {
                  staticClass: "img5-v",
                  attrs: {
                    responsive: "",
                    src: "/assets/img/MonumentoRevolucion.jpg",
                    ratio: "2by5",
                  },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column", staticStyle: { position: "relative" } },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/palacio.jpg",
                    ratio: "2by5",
                  },
                }),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "gallery-container" }, [
        _c("div", { staticClass: "logo-container" }, [
          _c(
            "div",
            { ref: "logoGalery", staticClass: "logo-galery" },
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
        _vm._v(" "),
        _vm._m(19),
        _vm._v(" "),
        _c("div", { staticClass: "section-galery-down mobile-section" }, [
          _c("div", { staticClass: "columns" }, [
            _c(
              "div",
              {
                staticClass: "column is-hidden-mobile",
                staticStyle: { position: "relative" },
              },
              [
                _c("b-image", {
                  staticClass: "model-1",
                  staticStyle: { "margin-top": "89px" },
                  attrs: {
                    responsive: "",
                    src: "/assets/img/model1.jpg",
                    ratio: "88by78",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "over-photo" }),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "column",
                staticStyle: { position: "relative", overflow: "hidden" },
              },
              [
                _c("b-image", {
                  staticClass: "model-2",
                  attrs: {
                    responsive: "",
                    src: "/assets/img/model2.jpg",
                    ratio: "6by5",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "over-photo" }),
              ],
              1
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "section-team mobile-section" }, [
        _c("div", { staticClass: "columns" }, [
          _c("div", { staticClass: "column section-team1 gotica-italic" }, [
            _vm._v("\n        ¿Quiénes somos?\n      "),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "logo-container" }, [
            _c(
              "div",
              { staticClass: "logo-styles" },
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
          _vm._v(" "),
          _c("div", { staticClass: "column puma-bold" }, [
            _c("div", { staticClass: "section-team-cont" }),
            _vm._v(" "),
            _c("div", { staticClass: "section-team2" }, [
              _c("div", [
                _vm._v(
                  "\n            Team Faster eres tú, ella, tu amigo, tu pareja o el vecino que encuentras en el elevador a las 6 am para ir a entrenar… somos todos aquellos que nos gusta mostrar la mejor versión de nosotros mismos.\n          "
                ),
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", [
                _vm._v(
                  "\n            Tenemos un objetivo, compartir la pasión del entrenamiento en un lugar increíble con una ambiente relajado y guiado por coaches que harán de tu sesión la mejor forma de catalizar tu energía.\n          "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "team-fast gotica-italic" }, [
                _c("div", { ref: "teamFast1" }, [
                  _vm._v("\n              ¡Forma parte\n            "),
                ]),
                _vm._v(" "),
                _c("div", { ref: "teamFast2" }, [
                  _vm._v("\n              del\n              "),
                  _c("span", [
                    _vm._v("\n                Team Faster!\n              "),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("Footer"),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "welcome" }, [
      _c("div", { staticClass: "gotica-italic welcome-title" }, [
        _vm._v("\n        Bienvenidos\n      "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "puma-bold welcome-text" }, [
        _vm._v(
          "\n        Aquí comienza la mejor experiencia de entrenamientos en combinación con coaches que te ayudarán a liberar tu potencial\n      "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("span", [_vm._v("¡Únete")]),
      _vm._v(" "),
      _c("span", { staticClass: "join-txt-2 txt-al" }, [_vm._v("al")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info always-on" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  Luis Carlos Origel\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info always-on" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  MAFER arreola\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info always-on" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  Franchesca sb\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  MAFER arreola\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  Franchesca sb\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  PABLO Hütt\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  Victor López\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  JORGE huo\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  DAVID McKnight\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  CARLOS Aguilar\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  HOMERO Castillo\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  JORGE huo\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  PABLO Hutt\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  MAFER arreola\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  DAVID McKnight\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title venue-active" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                  Victor López\n                "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-venues-up gotica-italic" }, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column section-venues1" }, [
          _c("div", [_vm._v("\n          Vive una\n        ")]),
          _vm._v(" "),
          _c("div", [_vm._v("\n          Experiencia\n        ")]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column section-venues2" }, [
          _c("div", [_vm._v("\n          Increíble y totalmente\n        ")]),
          _vm._v(" "),
          _c("div", [
            _vm._v("\n          Segura al\n          "),
            _c("span", { staticClass: "txt-aire" }, [
              _vm._v("\n            aire libre\n          "),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "section-galery-up mobile-section" }, [
      _c("div", { staticClass: "columns" }, [
        _c("div", { staticClass: "column gotica-italic container-txt1" }, [
          _c("div", { staticClass: "section-galery-up-txt1" }, [
            _vm._v("\n            Presume\n          "),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "section-galery-up-txt2" }, [
            _vm._v("\n            Que eres parte de\n          "),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column section-galery-up-txt3 puma-bold" }, [
          _vm._v("\n          Busca tu foto en el lugar "),
          _c("br"),
          _vm._v(" donde entrenaste con el Team "),
          _c("br"),
          _vm._v(" y si aún no estás inscrito "),
          _c("br"),
          _vm._v(" inspírate visitando la galería.\n        "),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);