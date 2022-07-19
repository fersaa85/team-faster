"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Galeria_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'galeria',
  data: function data() {
    return {
      options: {
        toolbar: true,
        initialViewIndex: 1,
        title: false
      },
      images: ["/assets/gallery/22AW_RT_Essentials_Mens_Train-All-Day_7697_RGB.jpg", "/assets/gallery/22AW_RT_Essentials_Mens_Train-All-Day_7792_RGB.jpg", "/assets/gallery/22AW_RT_Essentials_Mens_Train-All-Day_7886_RGB.jpg", "/assets/gallery/22AW_RT_Essentials_Train-All-Day-Group_8024_RGB.jpg", "/assets/gallery/22AW_RT_Essentials_Womens_Train-All-Day_7608_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1474_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1769_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1832_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1914_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2185_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2579_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2674_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2753_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deep-Olive-Mens_Q4_Model_3227_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deep-Olive-Mens_Q4_Model_3314_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_Q3-Group_0129_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_Q4-Group_3637_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_Q4-Group_3642_RGB.jpg", "/assets/gallery/22AW_RT_Puma-Fit_Q4-Group_3805_RGB.jpg", "/assets/gallery/22SS_RT_Essentials_Mens_PNA-Look-1_088_RGB.jpg", "/assets/gallery/22SS_RT_Essentials_Womens_PNA-Look-1_045_RGB.jpg", "/assets/gallery/22SS_RT_Model_PWRFrame-TR-Black-Cherry-Tomato_Q1_166_RGB.jpg", "/assets/gallery/22SS_RT_Model_PWRFrame-TR-Black-Cherry-Tomato_Q1_1460_RGB.jpg", "/assets/gallery/22SS_RT_Model_PWRFrame-TR-Black-Cherry-Tomato_Q1_1880_RGB.jpg", "/assets/gallery/22SS_RT_Sam-Kwant_Fuse-Puma-Black_Q2_4024_extended.jpg"]
    };
  },
  methods: {
    show: function show() {
      this.$viewerApi({
        images: this.images
      });
    },
    loaded: function loaded(e) {
      console.log('loaded', e);
      this.showElement(this.$refs[e]);
    },
    showElement: function showElement(el) {
      this.gsap.from(el, {
        autoAlpha: 0,
        scale: 0.2,
        duration: 0.5,
        ease: "Power2.easeOut"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, ".gallery-container[data-v-2f39cd3e] {\n  margin: 0 40px;\n}\n.gallery[data-v-2f39cd3e] {\n  background: black;\n  min-height: 100vh;\n}\n.title-venues[data-v-2f39cd3e] {\n  font-size: 100px;\n  color: white;\n  line-height: 90px;\n  text-align: right;\n}\n@media screen and (max-width: 768px) {\n.title-venues[data-v-2f39cd3e] {\n    font-size: 90px;\n    line-height: 80px;\n    text-align: center;\n}\n}\n.title-venues2[data-v-2f39cd3e] {\n  font-size: 125px;\n}\n@media screen and (max-width: 768px) {\n.title-venues2[data-v-2f39cd3e] {\n    font-size: 115px;\n}\n}\n.title-image[data-v-2f39cd3e] {\n  width: 158px;\n}\n@media screen and (max-width: 768px) {\n.title-image[data-v-2f39cd3e] {\n    text-align: right;\n    margin-left: auto;\n    margin-right: auto;\n    width: 35%;\n}\n}\n@media screen and (min-width: 769px) {\n.title-image[data-v-2f39cd3e] {\n    margin-left: 48px;\n    padding-top: 14px;\n}\n}\n.footer-styles[data-v-2f39cd3e] {\n  width: 100%;\n  margin: 0;\n  padding: 96px 20px 48px;\n  background: linear-gradient(transparent, 35%, #110315);\n  opacity: 1;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_style_index_0_id_2f39cd3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_style_index_0_id_2f39cd3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_style_index_0_id_2f39cd3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Galeria.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Galeria.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Galeria_vue_vue_type_template_id_2f39cd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true& */ "./resources/js/Pages/Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true&");
/* harmony import */ var _Galeria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Galeria.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Galeria.vue?vue&type=script&lang=js&");
/* harmony import */ var _Galeria_vue_vue_type_style_index_0_id_2f39cd3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true& */ "./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Galeria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Galeria_vue_vue_type_template_id_2f39cd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Galeria_vue_vue_type_template_id_2f39cd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2f39cd3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Galeria.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Galeria.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Galeria.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Galeria.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_style_index_0_id_2f39cd3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=style&index=0&id=2f39cd3e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/Pages/Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_template_id_2f39cd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_template_id_2f39cd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Galeria_vue_vue_type_template_id_2f39cd3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Galeria.vue?vue&type=template&id=2f39cd3e&scoped=true& ***!
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
  return _c("div", { staticClass: "gallery" }, [
    _c(
      "div",
      {
        staticClass: "columns",
        staticStyle: {
          "padding-top": "40px",
          "padding-bottom": "40px",
          margin: "0",
        },
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
    _c(
      "div",
      { staticClass: "gallery-container" },
      [
        _c("viewer", {
          attrs: { options: _vm.options, images: _vm.images },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function (scope) {
                return [
                  _c(
                    "div",
                    { staticClass: "columns is-multiline" },
                    _vm._l(scope.images, function (src) {
                      return _c(
                        "div",
                        {
                          key: src,
                          ref: src,
                          refInFor: true,
                          staticClass: "column is-3",
                        },
                        [
                          _c("b-image", {
                            attrs: { src: src, responsive: "" },
                            on: {
                              load: function ($event) {
                                return _vm.loaded(src)
                              },
                            },
                          }),
                        ],
                        1
                      )
                    }),
                    0
                  ),
                ]
              },
            },
          ]),
        }),
      ],
      1
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
    return _c("div", { staticClass: "column gotica-italic title-venues" }, [
      _c("div", { staticClass: "title-venues2" }, [
        _vm._v("\n        Galería\n      "),
      ]),
      _vm._v(" "),
      _c("div", [_vm._v("\n        De fotos\n      ")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-styles" }, [
      _c("div", { staticClass: "columns", staticStyle: { margin: "0" } }, [
        _c("div", { staticClass: "column tm-puma has-text-left" }, [
          _vm._v("\n        @2022 puma. Todos los derechos reservados\n      "),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column tm-puma has-text-right" }, [
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