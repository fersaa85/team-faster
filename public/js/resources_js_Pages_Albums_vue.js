"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Albums_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      workout: {},
      venues: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.scrollTo(0, 0);
    axios.get('api/workout').then(function (_ref) {
      var data = _ref.data;
      _this.workout = Object.assign({}, data.data);
      console.log(_this.workout);
    });
    axios.get('api/venues').then(function (_ref2) {
      var data = _ref2.data;
      _this.venues = [].concat(data.data);
    });
  },
  methods: {
    handleGoTo: function handleGoTo(venueId) {
      this.$router.push('/galeria/' + venueId);
    },
    setElement: function setElement(el) {
      this.gsap.to(el, {
        autoAlpha: 0,
        scale: 0.8,
        duration: 0
      });
    },
    showElement: function showElement(el, delay) {
      this.gsap.to(el, {
        autoAlpha: 1,
        scale: 1,
        duration: 3.5,
        delay: delay
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".register-button[data-v-391b54cd] {\n  border-color: white;\n}\n@media screen and (max-width: 1024px) {\n.register-button[data-v-391b54cd] {\n    font-size: 1rem !important;\n}\n}\n@media screen and (max-width: 940px) {\n.register-button[data-v-391b54cd] {\n    font-size: 0.9rem !important;\n}\n}\n@media screen and (max-width: 768px) {\n.register-button[data-v-391b54cd] {\n    font-size: 1.25rem !important;\n}\n}\n.venues_photos[data-v-391b54cd] {\n  margin: 0 20px;\n  padding: 20px;\n  background-color: black;\n  filter: grayscale(100%);\n}\n.venues[data-v-391b54cd] {\n  background: black;\n  color: white;\n}\n.title-venues[data-v-391b54cd] {\n  font-size: 100px;\n  color: white;\n  line-height: 90px;\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.title-venues[data-v-391b54cd] {\n    font-size: 90px;\n    line-height: 80px;\n    text-align: center;\n}\n}\n.title-image[data-v-391b54cd] {\n  width: 158px;\n}\n@media screen and (max-width: 768px) {\n.title-image[data-v-391b54cd] {\n    text-align: right;\n    margin-left: auto;\n    margin-right: auto;\n    width: 35%;\n}\n}\n@media screen and (min-width: 769px) {\n.title-image[data-v-391b54cd] {\n    margin-left: 48px;\n    padding-top: 14px;\n}\n}\n.title-venues2[data-v-391b54cd] {\n  font-size: 125px;\n}\n@media screen and (max-width: 768px) {\n.title-venues2[data-v-391b54cd] {\n    font-size: 115px;\n}\n}\n.footer-styles[data-v-391b54cd] {\n  padding: 96px 24px 48px;\n  background: linear-gradient(transparent, black 45%, black);\n  opacity: 1;\n}\n.footer-styles .footer-1[data-v-391b54cd] {\n  text-align: left;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-1[data-v-391b54cd] {\n    text-align: center;\n}\n}\n.footer-styles .footer-2[data-v-391b54cd] {\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.footer-styles .footer-2[data-v-391b54cd] {\n    margin-top: 20px;\n    text-align: center;\n}\n}\n.text-photo-title[data-v-391b54cd] {\n  color: white;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  left: 0;\n  top: 50%;\n  text-transform: uppercase;\n  font-size: 24px;\n  padding: 24px 12px;\n}\n.text-photo-date[data-v-391b54cd] {\n  color: white;\n  font-family: \"FFDINforPUMA-Regular\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  text-align: center;\n  left: 0;\n  bottom: 0;\n  text-transform: uppercase;\n  font-size: 18px;\n  padding-bottom: 12px;\n}\n.text-photo-register[data-v-391b54cd] {\n  position: absolute;\n  color: white;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  text-align: left;\n  left: 0;\n  top: 0;\n  text-transform: uppercase;\n  font-size: 18px;\n  padding-left: 20px;\n  padding-top: 20px;\n}\n.venue0[data-v-391b54cd] {\n  animation: fadein-data-v-391b54cd 1s;\n  -moz-animation: fadein-data-v-391b54cd 1s; /* Firefox */\n  -webkit-animation: fadein-data-v-391b54cd 1s; /* Safari and Chrome */\n  -o-animation: fadein-data-v-391b54cd 1s; /* Opera */\n}\n.venue1[data-v-391b54cd] {\n  animation: fadein-data-v-391b54cd 2s;\n  -moz-animation: fadein-data-v-391b54cd 2s; /* Firefox */\n  -webkit-animation: fadein-data-v-391b54cd 2s; /* Safari and Chrome */\n  -o-animation: fadein-data-v-391b54cd 2s; /* Opera */\n}\n.venue2[data-v-391b54cd] {\n  animation: fadein-data-v-391b54cd 3s;\n  -moz-animation: fadein-data-v-391b54cd 3s; /* Firefox */\n  -webkit-animation: fadein-data-v-391b54cd 3s; /* Safari and Chrome */\n  -o-animation: fadein-data-v-391b54cd 3s; /* Opera */\n}\n.empty[data-v-391b54cd] {\n  height: 30vw;\n}\n@keyframes fadein-data-v-391b54cd {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes fadein-data-v-391b54cd { /* Safari and Chrome */\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_391b54cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_391b54cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_391b54cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Albums.vue":
/*!***************************************!*\
  !*** ./resources/js/Pages/Albums.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Albums_vue_vue_type_template_id_391b54cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Albums.vue?vue&type=template&id=391b54cd&scoped=true& */ "./resources/js/Pages/Albums.vue?vue&type=template&id=391b54cd&scoped=true&");
/* harmony import */ var _Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Albums.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Albums.vue?vue&type=script&lang=js&");
/* harmony import */ var _Albums_vue_vue_type_style_index_0_id_391b54cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true& */ "./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Albums_vue_vue_type_template_id_391b54cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Albums_vue_vue_type_template_id_391b54cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "391b54cd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Albums.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Albums.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Albums.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_style_index_0_id_391b54cd_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=style&index=0&id=391b54cd&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Albums.vue?vue&type=template&id=391b54cd&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Albums.vue?vue&type=template&id=391b54cd&scoped=true& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_template_id_391b54cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_template_id_391b54cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Albums_vue_vue_type_template_id_391b54cd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Albums.vue?vue&type=template&id=391b54cd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=template&id=391b54cd&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=template&id=391b54cd&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Albums.vue?vue&type=template&id=391b54cd&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "venues" }, [
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
      _c(
        "div",
        { staticClass: "columns ", staticStyle: { "margin-bottom": "60px" } },
        [
          _vm.venues.length && Object.keys(_vm.workout).length
            ? _vm._l(_vm.venues.slice(0, 3), function (venue, key) {
                return _c(
                  "div",
                  {
                    key: key,
                    staticClass: "column is-clickable",
                    class: "venue" + key,
                    staticStyle: { position: "relative" },
                  },
                  [
                    _c(
                      "div",
                      {
                        on: {
                          click: function ($event) {
                            return _vm.handleGoTo(venue.id)
                          },
                        },
                      },
                      [
                        _c("b-image", {
                          attrs: {
                            responsive: "",
                            src: "/assets/img/" + venue.thumbnail,
                            ratio: "2by1",
                          },
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "text-photo-title venue-active" },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(venue.name) +
                                "\n              \n              "
                            ),
                            _c("div", { staticClass: "text-photo-date" }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(
                                    venue.workout
                                      ? venue.workout.date_start
                                      : "-"
                                  ) +
                                  "\n              "
                              ),
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "b-button",
                                  {
                                    staticClass: "register-button",
                                    attrs: {
                                      rounded: "",
                                      size: "is-medium",
                                      "data-id": venue.id,
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.handleGoTo(venue.id)
                                      },
                                    },
                                  },
                                  [
                                    _vm._v(
                                      "\n                  Ver Galería\n                "
                                    ),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                )
              })
            : [
                _c("div", { staticClass: "column empty" }),
                _vm._v(" "),
                _c("div", { staticClass: "column empty" }),
                _vm._v(" "),
                _c("div", { staticClass: "column empty" }),
              ],
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "columns is-centered" },
        [
          _vm.venues.length && Object.keys(_vm.workout).length
            ? _vm._l(_vm.venues.slice(3, 6), function (venue, key) {
                return _c(
                  "div",
                  {
                    key: key,
                    staticClass: "column is-clickable is-4",
                    class: "venue" + key,
                    staticStyle: { position: "relative" },
                  },
                  [
                    _c("b-image", {
                      attrs: {
                        responsive: "",
                        src: "/assets/img/" + venue.thumbnail,
                        ratio: "2by1",
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-photo-title venue-active",
                        class: {
                          "venue-active": venue.id == _vm.workout.venue.id,
                        },
                      },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(venue.name) +
                            "\n            "
                        ),
                        _c("div", { staticClass: "text-photo-date" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(
                                venue.workout ? venue.workout.date_start : "-"
                              ) +
                              "\n            "
                          ),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "register-button",
                                attrs: {
                                  rounded: "",
                                  size: "is-medium",
                                  "data-id": venue.id,
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.handleGoTo(venue.id)
                                  },
                                },
                              },
                              [
                                _vm._v(
                                  "\n                  Ver Galería\n              "
                                ),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                )
              })
            : [
                _c("div", { staticClass: "column empty" }),
                _vm._v(" "),
                _c("div", { staticClass: "column empty" }),
                _vm._v(" "),
                _c("div", { staticClass: "column empty" }),
              ],
        ],
        2
      ),
    ]),
    _vm._v(" "),
    _vm._m(1),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "column gotica-italic title-venues" }, [
      _c("div", { staticClass: "title-venues1" }, [
        _vm._v("\n        Galería\n      "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "title-venues2" }, [
        _vm._v("\n        De fotos\n      "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-styles" }, [
      _c("div", { staticClass: "columns", staticStyle: { margin: "0" } }, [
        _c("div", { staticClass: "column tm-puma footer-1" }, [
          _vm._v("\n        @2022 puma. Todos los derechos reservados\n      "),
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



/***/ })

}]);