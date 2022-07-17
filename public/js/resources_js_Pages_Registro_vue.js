"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Registro_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'registerForm',
  components: {
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationObserver,
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__.ValidationProvider
  },
  data: function data() {
    return {
      age: '',
      email: '',
      name: '',
      lastname: '',
      phone: ''
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/RegisterForm.vue */ "./resources/js/Components/RegisterForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'registerInfo',
  components: {
    RegisterForm: _Components_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    name: {
      type: String,
      required: true
    },
    fecha: {
      type: String,
      required: true
    },
    lugar: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    coach: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      required: true
    }
  },
  data: function data() {
    return {
      showForm: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.setForm();
    this.setText1();
    this.setText2();
    this.setText3();
    setTimeout(function () {
      _this.gsap.to(".title-1", {
        autoAlpha: 1,
        duration: 0.8,
        x: 0,
        ease: "sine.out(1, 0.3)"
      });

      _this.gsap.to(".title-2", {
        autoAlpha: 1,
        duration: 0.8,
        x: 0,
        ease: "sine.out(1, 0.3)"
      });

      _this.gsap.to(".title-3", {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power4.in"
      });
    }, 50);
  },
  methods: {
    setForm: function setForm() {
      this.gsap.to(".register-form", {
        autoAlpha: 0,
        duration: 0,
        y: 500,
        display: "none"
      });
    },
    setText1: function setText1() {
      this.gsap.to(".title-1", {
        autoAlpha: 0,
        duration: 0,
        x: 200
      });
    },
    setText2: function setText2() {
      this.gsap.to(".title-2", {
        autoAlpha: 0,
        duration: 0,
        x: -200
      });
    },
    setText3: function setText3() {
      this.gsap.to(".title-3", {
        autoAlpha: 0,
        duration: 0
      });
    },
    showFormAction: function showFormAction() {
      this.showForm = true;
      this.gsap.to(".register-form", {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        ease: "sine.out(1, 0.3)",
        display: "block"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_RegisterInfo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/RegisterInfo.vue */ "./resources/js/Components/RegisterInfo.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'registro',
  components: {
    RegisterInfo: _Components_RegisterInfo_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      info: {
        name: 'Fuente de Xochipili',
        fecha: '25 de junio | 8:00 a 10:00 am',
        lugar: 'xxxxxxxxxxxxxx',
        tipo: 'Cardio Hit',
        coach: 'Ceci Aguilera',
        photo: 'FuenteXochipili.jpg',
        map: 'MAP_FUENTE_X_min.jpg',
        available: true
      }
    };
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".register-button[data-v-4f20a652] {\n  background-color: #c624f1;\n  border-color: #c624f1;\n  color: white;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  padding: 3px 36px 0;\n}\n.form-styles[data-v-4f20a652] {\n  padding-left: 7%;\n  padding-right: 7%;\n  padding-bottom: 48px;\n  padding-top: 48px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.form-styles .field-style[data-v-4f20a652] {\n  padding-top: 12px;\n  position: relative;\n}\n.form-title[data-v-4f20a652] {\n  font-size: 18px;\n  color: white;\n  text-align: left;\n  text-transform: uppercase;\n  padding-bottom: 12px;\n  padding-top: 12px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".info-margin[data-v-3d7ff93c] {\n  padding-right: 7%;\n}\n.soldOut[data-v-3d7ff93c] {\n  color: white;\n  padding-left: 7%;\n  margin-top: 40px;\n  padding-bottom: 40px;\n  font-size: 43px;\n}\n@media screen and (max-width: 1407px) {\n.soldOut[data-v-3d7ff93c] {\n    font-size: 33px;\n}\n}\n@media screen and (max-width: 1023px) {\n.soldOut[data-v-3d7ff93c] {\n    font-size: 30px;\n}\n}\n.title-1[data-v-3d7ff93c] {\n  font-size: 125px;\n  padding-top: 50px;\n  color: white;\n  line-height: 125px;\n}\n@media screen and (max-width: 1407px) {\n.title-1[data-v-3d7ff93c] {\n    font-size: 100px;\n    line-height: 100px;\n}\n}\n@media screen and (max-width: 1023px) {\n.title-1[data-v-3d7ff93c] {\n    font-size: 90px;\n    line-height: 90px;\n}\n}\n.title-2[data-v-3d7ff93c] {\n  font-size: 90px;\n  color: black;\n  line-height: 100px;\n}\n@media screen and (max-width: 1407px) {\n.title-2[data-v-3d7ff93c] {\n    font-size: 65px;\n    line-height: 75px;\n}\n}\n@media screen and (max-width: 1023px) {\n.title-2[data-v-3d7ff93c] {\n    font-size: 55px;\n    line-height: 65px;\n}\n}\n.title-3[data-v-3d7ff93c] {\n  font-size: 100px;\n  color: black;\n  line-height: 100px;\n}\n@media screen and (max-width: 1407px) {\n.title-3[data-v-3d7ff93c] {\n    font-size: 75px;\n    line-height: 75px;\n}\n}\n@media screen and (max-width: 1023px) {\n.title-3[data-v-3d7ff93c] {\n    font-size: 55px;\n    line-height: 65px;\n}\n}\n.title-3.notAvailable[data-v-3d7ff93c] {\n  padding-top: 50px;\n}\n.info-block[data-v-3d7ff93c] {\n  padding-top: 20px;\n  font-size: 20px;\n}\n@media screen and (max-width: 1407px) {\n.info-block[data-v-3d7ff93c] {\n    padding-top: 10px;\n}\n}\n@media screen and (max-width: 1023px) {\n.info-block[data-v-3d7ff93c] {\n    font-size: 18px;\n}\n}\n.info-block .info-block-title[data-v-3d7ff93c] {\n  color: white;\n}\n.info-block .info-block-text[data-v-3d7ff93c] {\n  color: black;\n}\n.info-block .button[data-v-3d7ff93c] {\n  margin-bottom: 80px;\n  background-color: #46aaff;\n  border-color: #46aaff;\n  color: white;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 5px 36px 0;\n}\n@media screen and (max-width: 1407px) {\n.info-block .button[data-v-3d7ff93c] {\n    padding: 4px 36px 0;\n    font-size: 16px;\n}\n}\n.register-form[data-v-3d7ff93c], .register-form-tablet[data-v-3d7ff93c] {\n  background-color: black;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n  padding-top: 72px;\n  margin-top: 29px;\n  min-height: 61vh;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".registro[data-v-8bdab548] {\n  height: 100vh;\n}\n.img-blackwhite[data-v-8bdab548] {\n  filter: grayscale(100%);\n}\n.clip[data-v-8bdab548] {\n  margin-top: -17%;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 81%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 81%, 0% 100%);\n}\n.column-imgs[data-v-8bdab548] {\n  background: black;\n  padding: 0;\n}\n.column-info[data-v-8bdab548] {\n  padding: 0;\n  background-image: linear-gradient(45deg, #7f7efd, #ca06fa);\n}\n@media screen and (min-width: 769px) {\n.column-info[data-v-8bdab548] {\n    min-height: 100vh;\n}\n}\n.clip-section[data-v-8bdab548] {\n  margin: 0;\n}\n.registro[data-v-8bdab548] {\n  background: black;\n}\n.tm-puma[data-v-8bdab548] {\n  margin-right: 24px;\n  padding-bottom: 24px;\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.tm-puma[data-v-8bdab548] {\n    margin-top: 24px;\n}\n}\n@media screen and (min-width: 1200px) {\n.tm-puma[data-v-8bdab548] {\n    margin-top: -24px;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_style_index_0_id_4f20a652_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_style_index_0_id_4f20a652_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_style_index_0_id_4f20a652_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_style_index_0_id_3d7ff93c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_style_index_0_id_3d7ff93c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_style_index_0_id_3d7ff93c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_8bdab548_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_8bdab548_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_8bdab548_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Components/RegisterForm.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/RegisterForm.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterForm_vue_vue_type_template_id_4f20a652_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true& */ "./resources/js/Components/RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true&");
/* harmony import */ var _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=script&lang=js& */ "./resources/js/Components/RegisterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _RegisterForm_vue_vue_type_style_index_0_id_4f20a652_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true& */ "./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterForm_vue_vue_type_template_id_4f20a652_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterForm_vue_vue_type_template_id_4f20a652_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f20a652",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/RegisterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/RegisterInfo.vue":
/*!**************************************************!*\
  !*** ./resources/js/Components/RegisterInfo.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterInfo_vue_vue_type_template_id_3d7ff93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true& */ "./resources/js/Components/RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true&");
/* harmony import */ var _RegisterInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterInfo.vue?vue&type=script&lang=js& */ "./resources/js/Components/RegisterInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _RegisterInfo_vue_vue_type_style_index_0_id_3d7ff93c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true& */ "./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterInfo_vue_vue_type_template_id_3d7ff93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterInfo_vue_vue_type_template_id_3d7ff93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3d7ff93c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/RegisterInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Registro.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Registro.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Registro_vue_vue_type_template_id_8bdab548_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Registro.vue?vue&type=template&id=8bdab548&scoped=true& */ "./resources/js/Pages/Registro.vue?vue&type=template&id=8bdab548&scoped=true&");
/* harmony import */ var _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Registro.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Registro.vue?vue&type=script&lang=js&");
/* harmony import */ var _Registro_vue_vue_type_style_index_0_id_8bdab548_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true& */ "./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Registro_vue_vue_type_template_id_8bdab548_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Registro_vue_vue_type_template_id_8bdab548_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8bdab548",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Registro.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/RegisterForm.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/RegisterForm.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/RegisterInfo.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/Components/RegisterInfo.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Registro.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Registro.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registro.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_style_index_0_id_4f20a652_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=style&index=0&id=4f20a652&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_style_index_0_id_3d7ff93c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=style&index=0&id=3d7ff93c&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_style_index_0_id_8bdab548_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=style&index=0&id=8bdab548&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_4f20a652_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_4f20a652_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterForm_vue_vue_type_template_id_4f20a652_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true&");


/***/ }),

/***/ "./resources/js/Components/RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_template_id_3d7ff93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_template_id_3d7ff93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterInfo_vue_vue_type_template_id_3d7ff93c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Registro.vue?vue&type=template&id=8bdab548&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/Pages/Registro.vue?vue&type=template&id=8bdab548&scoped=true& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_8bdab548_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_8bdab548_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Registro_vue_vue_type_template_id_8bdab548_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Registro.vue?vue&type=template&id=8bdab548&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=template&id=8bdab548&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterForm.vue?vue&type=template&id=4f20a652&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "form-styles" },
    [
      _c("div", { staticClass: "form-title puma-bold" }, [
        _vm._v("\n    Ingresa tus datos y reserva tu lugar\n  "),
      ]),
      _vm._v(" "),
      _c("ValidationProvider", {
        attrs: { rules: "required", name: "name" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var errors = ref.errors
              var valid = ref.valid
              return [
                _c(
                  "b-field",
                  {
                    staticClass: "field-style",
                    attrs: {
                      label: "Nombre(s)",
                      type: { "is-danger": errors[0], "is-success": valid },
                      message: errors,
                      horizontal: "",
                    },
                  },
                  [
                    _c("b-input", {
                      attrs: { autocomplete: "name" },
                      model: {
                        value: _vm.name,
                        callback: function ($$v) {
                          _vm.name = $$v
                        },
                        expression: "name",
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("ValidationProvider", {
        attrs: { rules: "required", name: "lname" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var errors = ref.errors
              var valid = ref.valid
              return [
                _c(
                  "b-field",
                  {
                    staticClass: "field-style",
                    attrs: {
                      label: "Apellidos",
                      type: { "is-danger": errors[0], "is-success": valid },
                      message: errors,
                      horizontal: "",
                    },
                  },
                  [
                    _c("b-input", {
                      attrs: { autocomplete: "lname" },
                      model: {
                        value: _vm.lastname,
                        callback: function ($$v) {
                          _vm.lastname = $$v
                        },
                        expression: "lastname",
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("ValidationProvider", {
        attrs: { rules: "required|max:3|min:2", name: "teléfono" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var errors = ref.errors
              var valid = ref.valid
              return [
                _c(
                  "b-field",
                  {
                    staticClass: "field-style",
                    attrs: {
                      label: "Edad",
                      message: errors,
                      horizontal: "",
                      type: { "is-danger": errors[0], "is-success": valid },
                    },
                  },
                  [
                    _c("b-input", {
                      attrs: {
                        type: "number",
                        autocomplete: "tel",
                        maxlength: "3",
                      },
                      model: {
                        value: _vm.age,
                        callback: function ($$v) {
                          _vm.age = $$v
                        },
                        expression: "age",
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("ValidationProvider", {
        attrs: { rules: "required|email", name: "email" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var errors = ref.errors
              var valid = ref.valid
              return [
                _c(
                  "b-field",
                  {
                    staticClass: "field-style",
                    attrs: {
                      label: "Correo electrónico",
                      horizontal: "",
                      type: { "is-danger": errors[0], "is-success": valid },
                      message: errors,
                    },
                  },
                  [
                    _c("b-input", {
                      attrs: { type: "email" },
                      model: {
                        value: _vm.email,
                        callback: function ($$v) {
                          _vm.email = $$v
                        },
                        expression: "email",
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c("ValidationProvider", {
        attrs: { rules: "required|max:10|min:10", name: "teléfono" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var errors = ref.errors
              var valid = ref.valid
              return [
                _c(
                  "b-field",
                  {
                    staticClass: "field-style",
                    attrs: {
                      label: "Celular",
                      message: errors,
                      horizontal: "",
                      type: { "is-danger": errors[0], "is-success": valid },
                    },
                  },
                  [
                    _c("b-input", {
                      attrs: {
                        type: "number",
                        autocomplete: "tel",
                        maxlength: "10",
                      },
                      model: {
                        value: _vm.phone,
                        callback: function ($$v) {
                          _vm.phone = $$v
                        },
                        expression: "phone",
                      },
                    }),
                  ],
                  1
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "has-text-centered",
          staticStyle: { "padding-top": "36px" },
        },
        [
          _c(
            "b-button",
            { staticClass: "register-button", attrs: { rounded: "" } },
            [_vm._v("\n      Registrarse\n    ")]
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/RegisterInfo.vue?vue&type=template&id=3d7ff93c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "gotica-italic info-margin" }, [
      _vm.available
        ? _c("p", { staticClass: "title-1" }, [
            _vm._v("\n      Reserva sin costo,\n    "),
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.available
        ? _c("p", { staticClass: "title-2" }, [
            _vm._v("\n      Un lugar con el team faster\n    "),
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "p",
        { staticClass: "title-3", class: { notAvailable: !_vm.available } },
        [_vm._v("\n      " + _vm._s(_vm.name) + "\n    ")]
      ),
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "puma-bold", staticStyle: { "padding-top": "36px" } },
      [
        _c("div", { staticClass: "info-margin" }, [
          _c("div", { staticClass: "info-block" }, [
            _c("p", { staticClass: "info-block-title" }, [
              _vm._v("\n          ¿Cuándo?\n        "),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "info-block-text" }, [
              _vm._v("\n          " + _vm._s(_vm.fecha) + "\n        "),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-block" }, [
            _c("p", { staticClass: "info-block-title" }, [
              _vm._v("\n          Dónde?\n        "),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "info-block-text" }, [
              _vm._v("\n          " + _vm._s(_vm.lugar) + "\n        "),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-block" }, [
            _c("p", { staticClass: "info-block-title" }, [
              _vm._v("\n          Experiencia workout\n        "),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "info-block-text" }, [
              _vm._v("\n          " + _vm._s(_vm.tipo) + "\n        "),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info-block" }, [
            _c("p", { staticClass: "info-block-title" }, [
              _vm._v("\n          Coach participante\n        "),
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "info-block-text" }, [
              _vm._v("\n          " + _vm._s(_vm.coach) + "\n        "),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.showForm,
                  expression: "!showForm",
                },
              ],
              staticClass: "info-block is-hidden-mobile",
            },
            [
              _vm.available
                ? _c(
                    "p",
                    { staticStyle: { "padding-top": "36px" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { rounded: "" },
                          on: { click: _vm.showFormAction },
                        },
                        [_vm._v("\n            Asistir a evento\n          ")]
                      ),
                    ],
                    1
                  )
                : _c("p", { staticClass: "soldOut puma-regular" }, [
                    _vm._v("\n          Lugares agotados\n        "),
                  ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "register-form is-hidden-mobile" },
          [_c("RegisterForm")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "register-form-tablet is-hidden-tablet" },
          [_c("RegisterForm")],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=template&id=8bdab548&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Registro.vue?vue&type=template&id=8bdab548&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "registro" }, [
    _c("div", { staticClass: "columns clip-section" }, [
      _c(
        "div",
        { staticClass: "column has-text-right column-info is-hidden-tablet" },
        [
          _c(
            "div",
            [
              _c("RegisterInfo", {
                attrs: {
                  name: _vm.info.name,
                  fecha: _vm.info.fecha,
                  lugar: _vm.info.lugar,
                  tipo: _vm.info.tipo,
                  coach: _vm.info.coach,
                  photo: _vm.info.photo,
                  map: _vm.info.map,
                  available: _vm.info.available,
                },
              }),
            ],
            1
          ),
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "column column-imgs" }, [
        _c(
          "div",
          { staticClass: "img-blackwhite" },
          [
            _c("b-image", {
              attrs: {
                responsive: "",
                src: "/assets/img/" + _vm.info.photo,
                ratio: "14by10",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "clip" },
          [
            _c("b-image", {
              attrs: {
                responsive: "",
                src: "/assets/img/" + _vm.info.map,
                ratio: "15by13",
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "tm-puma has-text-right" }, [
          _vm._v("\n        @2022 puma. Todos los derechos reservados\n      "),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "column has-text-right column-info is-hidden-mobile" },
        [
          _c(
            "div",
            { staticClass: "info" },
            [
              _c("RegisterInfo", {
                attrs: {
                  name: _vm.info.name,
                  fecha: _vm.info.fecha,
                  lugar: _vm.info.lugar,
                  tipo: _vm.info.tipo,
                  coach: _vm.info.coach,
                  photo: _vm.info.photo,
                  map: _vm.info.map,
                  available: _vm.info.available,
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
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);