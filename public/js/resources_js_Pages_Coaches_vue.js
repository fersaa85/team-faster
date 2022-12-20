"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Coaches_vue"],{

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'footer',
  mounted: function mounted() {
    console.log("v=1.1.37");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'venues',
  components: {
    Footer: _Components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    console.log("v=1.1.37");
    window.scrollTo(0, 0);
    this.setElement(this.$refs.coach1);
    this.setElement(this.$refs.coach2);
    this.setElement(this.$refs.coach3);
    this.setElement(this.$refs.coach4);
    this.setElement(this.$refs.coach5);
    this.setElement(this.$refs.coach6);
    this.setElement(this.$refs.coach7);
    this.setElement(this.$refs.coach8);
    this.setElement(this.$refs.coach9);
  },
  methods: {
    loadedImg1: function loadedImg1() {
      this.showElement(this.$refs.coach1, 1 * 0.8);
    },
    loadedImg2: function loadedImg2() {
      this.showElement(this.$refs.coach2, 2 * 0.8);
    },
    loadedImg3: function loadedImg3() {
      this.showElement(this.$refs.coach3, 3 * 0.8);
    },
    loadedImg4: function loadedImg4() {
      this.showElement(this.$refs.coach4, 4 * 0.8);
    },
    loadedImg5: function loadedImg5() {
      this.showElement(this.$refs.coach5, 5 * 0.8);
    },
    loadedImg6: function loadedImg6() {
      this.showElement(this.$refs.coach6, 6 * 0.8);
    },
    loadedImg7: function loadedImg7() {
      this.showElement(this.$refs.coach7, 7 * 0.8);
    },
    loadedImg8: function loadedImg8() {
      this.showElement(this.$refs.coach8, 8 * 0.8);
    },
    loadedImg9: function loadedImg9() {
      this.showElement(this.$refs.coach9, 9 * 0.8);
    },
    setElement: function setElement(el) {
      this.gsap.to(el, {
        autoAlpha: 0,
        scale: 0.5,
        duration: 0
      });
    },
    showElement: function showElement(el, delay) {
      this.gsap.to(el, {
        autoAlpha: 1,
        scale: 1,
        duration: 2.5,
        delay: delay,
        ease: "elastic.out(1, 0.2)"
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".venues_photos[data-v-1bb7f1a2] {\n  margin: 0 160px;\n  padding: 20px;\n  background-color: black;\n}\n@media screen and (max-width: 768px) {\n.venues_photos[data-v-1bb7f1a2] {\n    margin: 0 40px;\n}\n}\n.venues[data-v-1bb7f1a2] {\n  background: black;\n  overflow-x: hidden;\n}\n.title-venues[data-v-1bb7f1a2] {\n  font-size: 100px;\n  color: white;\n  line-height: 90px;\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.title-venues[data-v-1bb7f1a2] {\n    font-size: 90px;\n    line-height: 80px;\n    text-align: center;\n}\n}\n.title-image[data-v-1bb7f1a2] {\n  width: 158px;\n}\n@media screen and (max-width: 768px) {\n.title-image[data-v-1bb7f1a2] {\n    text-align: right;\n    margin-left: auto;\n    margin-right: auto;\n    width: 35%;\n}\n}\n@media screen and (min-width: 769px) {\n.title-image[data-v-1bb7f1a2] {\n    margin-left: 48px;\n    padding-top: 14px;\n}\n}\n.title-venues2[data-v-1bb7f1a2] {\n  font-size: 125px;\n}\n@media screen and (max-width: 768px) {\n.title-venues2[data-v-1bb7f1a2] {\n    font-size: 115px;\n}\n}\n.footer-styles[data-v-1bb7f1a2] {\n  padding: 96px 24px 48px;\n  background: linear-gradient(transparent, 35%, #110315);\n  opacity: 1;\n}\n.footer-styles .footer-1[data-v-1bb7f1a2] {\n  text-align: left;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-1[data-v-1bb7f1a2] {\n    text-align: center;\n}\n}\n.footer-styles .footer-2[data-v-1bb7f1a2] {\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-2[data-v-1bb7f1a2] {\n    margin-top: 20px;\n    text-align: center;\n}\n}\n.text-photo-title[data-v-1bb7f1a2] {\n  position: absolute;\n  color: white;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  left: 0;\n  top: 0;\n  text-transform: uppercase;\n  font-size: 18px;\n  height: 100%;\n  text-align: left;\n  background: linear-gradient(transparent, 90%, #000000);\n}\n.text-photo-title .photo-info[data-v-1bb7f1a2] {\n  margin: auto;\n  position: absolute;\n  bottom: 0;\n  padding-bottom: 14px;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n.text-photo-title .photo-info1[data-v-1bb7f1a2] {\n  font-size: 38px;\n  line-height: 100%;\n}\n@media screen and (max-width: 1450px) {\n.text-photo-title .photo-info1[data-v-1bb7f1a2] {\n    font-size: 35px;\n}\n}\n@media screen and (max-width: 1350px) {\n.text-photo-title .photo-info1[data-v-1bb7f1a2] {\n    font-size: 33px;\n}\n}\n@media screen and (max-width: 1250px) {\n.text-photo-title .photo-info1[data-v-1bb7f1a2] {\n    font-size: 30px;\n}\n}\n@media screen and (max-width: 1150px) {\n.text-photo-title .photo-info1[data-v-1bb7f1a2] {\n    font-size: 30px;\n}\n}\n@media screen and (max-width: 1100px) {\n.text-photo-title .photo-info1[data-v-1bb7f1a2] {\n    font-size: 25px;\n}\n}\n.text-photo-title .photo-info2[data-v-1bb7f1a2] {\n  font-size: 20px;\n  text-transform: lowercase;\n}\n.img-container:hover .text-photo-title[data-v-1bb7f1a2] {\n  visibility: visible;\n  opacity: 1;\n}\n.img-blackwhite[data-v-1bb7f1a2] {\n  filter: grayscale(100%);\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_style_index_0_id_1bb7f1a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_style_index_0_id_1bb7f1a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_style_index_0_id_1bb7f1a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Pages/Coaches.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Coaches.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Coaches_vue_vue_type_template_id_1bb7f1a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true& */ "./resources/js/Pages/Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true&");
/* harmony import */ var _Coaches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Coaches.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Coaches.vue?vue&type=script&lang=js&");
/* harmony import */ var _Coaches_vue_vue_type_style_index_0_id_1bb7f1a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true& */ "./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Coaches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Coaches_vue_vue_type_template_id_1bb7f1a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Coaches_vue_vue_type_template_id_1bb7f1a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1bb7f1a2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Coaches.vue"
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

/***/ "./resources/js/Pages/Coaches.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Coaches.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Coaches.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_3c0d6e26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Footer.vue?vue&type=style&index=0&id=3c0d6e26&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_style_index_0_id_1bb7f1a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=style&index=0&id=1bb7f1a2&lang=scss&scoped=true&");


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

/***/ "./resources/js/Pages/Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_template_id_1bb7f1a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_template_id_1bb7f1a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Coaches_vue_vue_type_template_id_1bb7f1a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true&");


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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-styles" }, [
      _c(
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
      ),
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
              _c("p", { staticClass: "text-center" }, [
                _c("img", { attrs: { src: "/assets/img/G_Logo_Blanco.png" } }),
              ]),
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
              _c("p", { staticClass: "text-center" }, [
                _c("img", {
                  attrs: {
                    src: "/assets/img/FCEAD3F3-B3B4-4191-AC0F-F59D13D38564.png",
                  },
                }),
              ]),
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
              _c("p", { staticClass: "text-center nature" }, [
                _c("img", { attrs: { src: "/assets/img/Logo_NV.png" } }),
              ]),
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
              _c("p", { staticClass: "text-center nature" }, [
                _c("img", {
                  attrs: { src: "/assets/img/ISDIN-Love-Your-Skin_Blanco.png" },
                }),
              ]),
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
      _c("div", { staticClass: "columns is-vcentered" }, [
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
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Coaches.vue?vue&type=template&id=1bb7f1a2&scoped=true& ***!
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
  return _c(
    "div",
    { staticClass: "venues" },
    [
      _c(
        "div",
        {
          staticClass: "columns",
          staticStyle: { "padding-top": "40px", "padding-bottom": "40px" },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "column" }, [
            _c(
              "div",
              { staticClass: "title-image" },
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
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "venues_photos" }, [
        _c("div", { staticClass: "columns is-multiline" }, [
          _c(
            "div",
            {
              ref: "coach1",
              staticClass:
                "column is-clickable img-container coach-1 is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/charlie.ro22/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/Carloss.png",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg1 },
                  }),
                  _vm._v(" "),
                  _vm._m(1),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach2",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/dmckniight/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/David.png",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg2 },
                  }),
                  _vm._v(" "),
                  _vm._m(2),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach3",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/franchescasb/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/FRANCHESCA-@franchescasb.jpg",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg3 },
                  }),
                  _vm._v(" "),
                  _vm._m(3),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach4",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/HOMEROCASGRO",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    attrs: {
                      responsive: "",
                      src: "/assets/img/HomeroCastillo.png",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg4 },
                  }),
                  _vm._v(" "),
                  _vm._m(4),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach5",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/jorgehuo/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/Jorge.png",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg5 },
                  }),
                  _vm._v(" "),
                  _vm._m(5),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach6",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/maferarreolaa/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/MAFER-@maferarreolaa.jpg",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg6 },
                  }),
                  _vm._v(" "),
                  _vm._m(6),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach7",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/pablohutt/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    attrs: {
                      responsive: "",
                      src: "/assets/img/PabloHutt.jpg",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg7 },
                  }),
                  _vm._v(" "),
                  _vm._m(7),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach8",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/lcorigel/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/luis-carlos-origel.png",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg8 },
                  }),
                  _vm._v(" "),
                  _vm._m(8),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach9",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/v1cfitness/?igshid=YmMyMTA2M2Y%3D",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/vlopez.jpg",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg9 },
                  }),
                  _vm._v(" "),
                  _vm._m(9),
                ],
                1
              ),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              ref: "coach9",
              staticClass:
                "column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd",
              staticStyle: { position: "relative", padding: "0" },
            },
            [
              _c(
                "a",
                {
                  attrs: {
                    href: "https://www.instagram.com/gracosantaella/",
                    target: "_blank",
                  },
                },
                [
                  _c("b-image", {
                    staticClass: "img-blackwhite",
                    attrs: {
                      responsive: "",
                      src: "/assets/img/graco-santaella.png",
                      ratio: "1by1",
                    },
                    on: { load: _vm.loadedImg9 },
                  }),
                  _vm._v(" "),
                  _vm._m(10),
                ],
                1
              ),
            ]
          ),
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
    return _c("div", { staticClass: "column gotica-italic title-venues" }, [
      _c("div", { staticClass: "title-venues1" }, [
        _vm._v("\n        Nuestros\n      "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title-venues2" }, [
        _vm._v("\n        Coaches\n      "),
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
          _vm._v("\n                CARLOS Aguilar\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @charlie.ro22\n              "),
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
          _vm._v("\n                DAVID McKnight\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @dmckniight\n              "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "text-photo-title two-lines venue-active-third" },
      [
        _c("div", { staticClass: "photo-info" }, [
          _c("span", { staticClass: "photo-info1" }, [
            _vm._v("\n                Franchesca sb\n              "),
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("span", { staticClass: "puma-bold photo-info2" }, [
            _vm._v("\n                @franchescasb\n              "),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                HOMERO Castillo\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @homerocasgro\n              "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                JORGE huo\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @jorgehuo\n              "),
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
          _vm._v("\n                MAFER arreola\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @maferarreolaa\n              "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                PABLO Hütt\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @pablohutt\n              "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title two-lines" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                Luis Carlos Origel\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @lcorigel\n              "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title two-lines" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                Victor López\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @v1cfitness\n              "),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-photo-title two-lines" }, [
      _c("div", { staticClass: "photo-info" }, [
        _c("span", { staticClass: "photo-info1" }, [
          _vm._v("\n                Graco Santaella\n              "),
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("span", { staticClass: "puma-bold photo-info2" }, [
          _vm._v("\n                @gracosantaella\n              "),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);