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
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-recaptcha */ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationObserver,
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__.ValidationProvider,
    VueRecaptcha: vue_recaptcha__WEBPACK_IMPORTED_MODULE_0__.VueRecaptcha
  },
  data: function data() {
    return {
      age: '',
      email: '',
      name: '',
      lastname: '',
      phone: '',
      disabled: true,
      gRecaptchaResponse: null,
      sizes: [{
        "id": 'S',
        "label": "Chico"
      }, {
        "id": 'M',
        "label": "Mediano"
      }, {
        "id": 'L',
        "label": "Grande"
      }, {
        "id": 'XL',
        "label": "Extra grande"
      }],
      size: {}
    };
  },
  methods: {
    handleSubmit: function handleSubmit() {
      var _this = this;

      axios.post('api/auth/signup/'["this"].$route.params.venueId, {
        "g-recaptcha-response": this.gRecaptchaResponse,
        email: this.email,
        name: this.name,
        last_name: this.lastname,
        phone: this.phone,
        age: this.age,
        size: this.size,
        venue_id: this.$route.params.venueId
      }).then(function () {
        _this.$emit('success', {
          email: _this.email,
          name: _this.name,
          lastname: _this.lastname
        });

        _this.age = '';
        _this.email = '';
        _this.name = '';
        _this.lastname = '';
        _this.phone = '';
      })["catch"](function (error) {
        console.log(error.response);

        _this.$emit('errors', error.response);
      });
    },
    verifyMethod: function verifyMethod(e) {
      this.disabled = false;
      this.gRecaptchaResponse = e;
      console.log('verifyMethod', e);
    },
    expiredMethod: function expiredMethod(e) {
      this.gRecaptchaResponse = null;
      console.log('expiredMethod', e);
    },
    renderMethod: function renderMethod(e) {
      this.gRecaptchaResponse = null;
      console.log('renderMethod', e);
    },
    errorMethod: function errorMethod(e) {
      this.gRecaptchaResponse = null;
      console.log('errorMethod', e);
    }
  }
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
/* harmony import */ var _Components_Success_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Success.vue */ "./resources/js/Components/Success.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    RegisterForm: _Components_RegisterForm_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    SuccessModal: _Components_Success_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
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
    },
    couches: {
      type: Array,
      defautl: function defautl() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      showForm: false,
      success: false,
      errors: false,
      errorsMsg: 'errorMsg',
      isModalActive: false,
      nameUser: '',
      mail: ''
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
    },
    handleSuccess: function handleSuccess(e) {
      this.nameUser = e.name + ' ' + e.lastname;
      this.mail = e.email;
      this.success = true;
      this.errors = false;
      this.isModalActive = true;
    },
    handleErrors: function handleErrors(_ref) {
      var data = _ref.data;
      Object.values(data.errors).forEach(function callback(currentValue, index) {
        this.errorsMsg = currentValue[0];
      }, this);
      this.success = false;
      this.errors = true;
      this.$buefy.toast.open({
        duration: 4000,
        message: this.errorsMsg,
        position: 'is-bottom',
        type: 'is-danger'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'SuccessModal',
  props: {
    info: {
      type: Object,
      required: true
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
        name: '',
        fecha: '',
        lugar: '',
        tipo: '',
        coach: '',
        photo: '',
        map: '',
        google_maps: '',
        available: true
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    window.scrollTo(0, 0);
    this.setElement(this.$refs.img1);
    this.setElement(this.$refs.img2);
    axios.get('/api/workout/' + this.$route.params.slug).then(function (_ref) {
      var data = _ref.data.data;
      _this.info = Object.assign({}, {
        name: data.venue.name,
        fecha: data.date_start,
        couches: data.couches ? JSON.parse(data.couches) : [],
        lugar: data.venue.address,
        tipo: data.description,
        coach: data.coatch.name,
        photo: data.venue.image,
        map: data.venue.image_map,
        google_maps: data.venue.google_maps,
        available: true
      });
    });
  },
  methods: {
    setElement: function setElement(el) {
      this.gsap.to(el, {
        autoAlpha: 0,
        duration: 0
      });
    },
    showElement: function showElement(el, delay) {
      this.gsap.to(el, {
        autoAlpha: 1,
        duration: 0.5
      });
    },
    load1: function load1() {
      this.showElement(this.$refs.img1);
    },
    load2: function load2() {
      this.showElement(this.$refs.img2);
    }
  }
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
___CSS_LOADER_EXPORT___.push([module.id, ".register-button[data-v-4f20a652] {\n  background-color: #66676e;\n  border-color: #66676e;\n  color: white;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  padding: 3px 36px 0;\n  margin-top: 26px;\n}\n.form-styles[data-v-4f20a652] {\n  padding-left: 7%;\n  padding-right: 7%;\n  padding-bottom: 48px;\n  padding-top: 48px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.form-styles .field-style[data-v-4f20a652] {\n  padding-top: 12px;\n  position: relative;\n}\n.form-title[data-v-4f20a652] {\n  font-size: 18px;\n  color: white;\n  text-align: left;\n  text-transform: uppercase;\n  padding-bottom: 12px;\n  padding-top: 12px;\n}", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".info-margin[data-v-3d7ff93c] {\n  padding-right: 7%;\n}\n.soldOut[data-v-3d7ff93c] {\n  color: white;\n  padding-left: 7%;\n  margin-top: 40px;\n  padding-bottom: 40px;\n  font-size: 43px;\n}\n@media screen and (max-width: 1407px) {\n.soldOut[data-v-3d7ff93c] {\n    font-size: 33px;\n}\n}\n@media screen and (max-width: 1023px) {\n.soldOut[data-v-3d7ff93c] {\n    font-size: 30px;\n}\n}\n.title-1[data-v-3d7ff93c] {\n  font-size: 125px;\n  padding-top: 50px;\n  color: #66676e;\n  line-height: 125px;\n}\n@media screen and (max-width: 1407px) {\n.title-1[data-v-3d7ff93c] {\n    font-size: 100px;\n    line-height: 100px;\n}\n}\n@media screen and (max-width: 1023px) {\n.title-1[data-v-3d7ff93c] {\n    font-size: 90px;\n    line-height: 90px;\n}\n}\n.title-2[data-v-3d7ff93c] {\n  font-size: 90px;\n  color: black;\n  line-height: 100px;\n}\n@media screen and (max-width: 1407px) {\n.title-2[data-v-3d7ff93c] {\n    font-size: 65px;\n    line-height: 75px;\n}\n}\n@media screen and (max-width: 1023px) {\n.title-2[data-v-3d7ff93c] {\n    font-size: 55px;\n    line-height: 65px;\n}\n}\n.title-3[data-v-3d7ff93c] {\n  font-size: 100px;\n  color: black;\n  line-height: 100px;\n}\n@media screen and (max-width: 1407px) {\n.title-3[data-v-3d7ff93c] {\n    font-size: 75px;\n    line-height: 75px;\n}\n}\n@media screen and (max-width: 1023px) {\n.title-3[data-v-3d7ff93c] {\n    font-size: 55px;\n    line-height: 65px;\n}\n}\n.title-3.notAvailable[data-v-3d7ff93c] {\n  padding-top: 50px;\n}\n.info-block[data-v-3d7ff93c] {\n  padding-top: 20px;\n  font-size: 20px;\n}\n@media screen and (max-width: 1407px) {\n.info-block[data-v-3d7ff93c] {\n    padding-top: 10px;\n}\n}\n@media screen and (max-width: 1023px) {\n.info-block[data-v-3d7ff93c] {\n    font-size: 18px;\n}\n}\n.info-block .info-block-title[data-v-3d7ff93c] {\n  color: white;\n}\n.info-block .info-block-text[data-v-3d7ff93c] {\n  color: black;\n}\n.info-block .button[data-v-3d7ff93c] {\n  margin-bottom: 80px;\n  background-color: #46aaff;\n  border-color: #46aaff;\n  color: white;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 5px 36px 0;\n}\n@media screen and (max-width: 1407px) {\n.info-block .button[data-v-3d7ff93c] {\n    padding: 4px 36px 0;\n    font-size: 16px;\n}\n}\n.register-form[data-v-3d7ff93c], .register-form-tablet[data-v-3d7ff93c] {\n  background-color: black;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);\n  padding-top: 72px;\n  margin-top: 29px;\n  min-height: 61vh;\n}\n.alert[data-v-3d7ff93c] {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n  text-align: center;\n}\n.alert-success[data-v-3d7ff93c] {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n.alert-danger[data-v-3d7ff93c] {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 768px) {\n.card[data-v-89a547f0] {\n    padding-top: 268px;\n}\n}\n.logoCointainer[data-v-89a547f0] {\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n.logoCointainer[data-v-89a547f0] {\n    text-align: center;\n}\n}\n.logoTeamFaster[data-v-89a547f0] {\n  width: 20%;\n}\n@media screen and (max-width: 768px) {\n.logoTeamFaster[data-v-89a547f0] {\n    width: 15%;\n    margin: auto;\n}\n}\n.info-block[data-v-89a547f0] {\n  color: black;\n  padding-top: 20px;\n  font-size: 20px;\n}\n@media screen and (max-width: 1407px) {\n.info-block[data-v-89a547f0] {\n    padding-top: 10px;\n}\n}\n@media screen and (max-width: 1023px) {\n.info-block[data-v-89a547f0] {\n    font-size: 18px;\n}\n}\n.info-block .info-block-text[data-v-89a547f0] {\n  color: black;\n}\n.info-block .button[data-v-89a547f0] {\n  margin-bottom: 80px;\n  background-color: #46aaff;\n  border-color: #46aaff;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-family: \"FFDINforPUMA-Bold\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 5px 36px 0;\n}\n@media screen and (max-width: 1407px) {\n.info-block .button[data-v-89a547f0] {\n    padding: 4px 36px 0;\n    font-size: 16px;\n}\n}\n.title-venues[data-v-89a547f0] {\n  font-size: 65px;\n  line-height: 65px;\n  text-align: right;\n  color: black;\n}\n@media screen and (max-width: 768px) {\n.title-venues[data-v-89a547f0] {\n    font-size: 55px;\n    line-height: 55px;\n    text-align: center;\n}\n}\n.title-image[data-v-89a547f0] {\n  width: 150px;\n}\n@media screen and (max-width: 768px) {\n.title-image[data-v-89a547f0] {\n    width: 100px;\n    margin: auto;\n}\n}\n.title-venues2[data-v-89a547f0] {\n  font-size: 78px;\n}\n@media screen and (max-width: 768px) {\n.title-venues2[data-v-89a547f0] {\n    font-size: 65px;\n}\n}\n.thanks[data-v-89a547f0] {\n  font-size: 26px;\n  color: black;\n  padding: 32px 0;\n}\n.info-margin[data-v-89a547f0] {\n  text-align: left;\n  padding: 24px;\n}\n.calendars[data-v-89a547f0] {\n  margin: 40px 0 32px;\n}\n.calendars a[data-v-89a547f0] {\n  color: #5fa9f7;\n}\n.close-button[data-v-89a547f0] {\n  position: absolute;\n  top: 24px;\n  right: 24px;\n  padding-left: 14px;\n  padding-right: 14px;\n}\n@media screen and (max-width: 768px) {\n.close-button[data-v-89a547f0] {\n    position: fixed;\n}\n}", ""]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".registro[data-v-8bdab548] {\n  height: 100vh;\n}\n.img-blackwhite[data-v-8bdab548] {\n  filter: grayscale(60%);\n}\n.clip[data-v-8bdab548] {\n  margin-top: -17%;\n  -webkit-clip-path: polygon(0 19%, 100% 0%, 100% 81%, 0% 100%);\n          clip-path: polygon(0 19%, 100% 0%, 100% 81%, 0% 100%);\n}\n.column-imgs[data-v-8bdab548] {\n  background: black;\n  padding: 0;\n}\n.column-info[data-v-8bdab548] {\n  padding: 0;\n  background-image: linear-gradient(45deg, #6d6e79, #ebebed);\n}\n@media screen and (min-width: 769px) {\n.column-info[data-v-8bdab548] {\n    min-height: 100vh;\n}\n}\n.clip-section[data-v-8bdab548] {\n  margin: 0;\n}\n.registro[data-v-8bdab548] {\n  background: black;\n}\n.tm-puma[data-v-8bdab548] {\n  margin-right: 24px;\n  padding-bottom: 24px;\n}\n@media screen and (min-width: 769px) and (max-width: 1023px) {\n.tm-puma[data-v-8bdab548] {\n    margin-top: 24px;\n}\n}\n@media screen and (min-width: 1200px) {\n.tm-puma[data-v-8bdab548] {\n    margin-top: -24px;\n}\n}\n.emptyPhoto[data-v-8bdab548] {\n  height: 50vw;\n}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_style_index_0_id_89a547f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_style_index_0_id_89a547f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_style_index_0_id_89a547f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/Components/Success.vue":
/*!*********************************************!*\
  !*** ./resources/js/Components/Success.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Success_vue_vue_type_template_id_89a547f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Success.vue?vue&type=template&id=89a547f0&scoped=true& */ "./resources/js/Components/Success.vue?vue&type=template&id=89a547f0&scoped=true&");
/* harmony import */ var _Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Success.vue?vue&type=script&lang=js& */ "./resources/js/Components/Success.vue?vue&type=script&lang=js&");
/* harmony import */ var _Success_vue_vue_type_style_index_0_id_89a547f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true& */ "./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Success_vue_vue_type_template_id_89a547f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Success_vue_vue_type_template_id_89a547f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "89a547f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Success.vue"
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

/***/ "./resources/js/Components/Success.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Components/Success.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Success.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_style_index_0_id_89a547f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=style&index=0&id=89a547f0&lang=scss&scoped=true&");


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

/***/ "./resources/js/Components/Success.vue?vue&type=template&id=89a547f0&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Success.vue?vue&type=template&id=89a547f0&scoped=true& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_template_id_89a547f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_template_id_89a547f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_template_id_89a547f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Success.vue?vue&type=template&id=89a547f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=template&id=89a547f0&scoped=true&");


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
      _c("ValidationProvider", {
        attrs: { rules: "required", name: "Talla" },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (ref) {
              var errors = ref.errors
              var valid = ref.valid
              return [
                _c(
                  "b-select",
                  {
                    attrs: { placeholder: "Talla" },
                    model: {
                      value: _vm.size,
                      callback: function ($$v) {
                        _vm.size = $$v
                      },
                      expression: "size",
                    },
                  },
                  _vm._l(_vm.sizes, function (option) {
                    return _c(
                      "option",
                      { key: option.id, domProps: { value: option.id } },
                      [
                        _vm._v(
                          "\n          " + _vm._s(option.label) + "\n        "
                        ),
                      ]
                    )
                  }),
                  0
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
          _c("vue-recaptcha", {
            staticClass: "recaptcha-container",
            attrs: {
              id: "recaptcha",
              sitekey: "6LdhsyggAAAAACsHnT4M66nGsy0xwI5mT8LDEgdL",
            },
            on: {
              verify: _vm.verifyMethod,
              expired: _vm.expiredMethod,
              render: _vm.renderMethod,
              error: _vm.errorMethod,
            },
          }),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "register-button",
              attrs: { rounded: "", disabled: _vm.disabled },
              on: { click: _vm.handleSubmit },
            },
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
  return _c(
    "div",
    [
      _c("b-modal", {
        attrs: {
          "has-modal-card": "",
          "trap-focus": "",
          "destroy-on-hide": true,
          "aria-role": "dialog",
          "aria-label": "Example Modal",
          "close-button-aria-label": "Close",
          "can-cancel": ["escape"],
          "aria-modal": "",
        },
        scopedSlots: _vm._u([
          {
            key: "default",
            fn: function (props) {
              return [
                _c("SuccessModal", {
                  attrs: {
                    info: {
                      name: _vm.name,
                      fecha: _vm.fecha,
                      lugar: _vm.lugar,
                      tipo: _vm.tipo,
                      coach: _vm.coach,
                      nameUser: _vm.nameUser,
                      mail: _vm.mail,
                    },
                  },
                  on: { close: props.close },
                }),
              ]
            },
          },
        ]),
        model: {
          value: _vm.isModalActive,
          callback: function ($$v) {
            _vm.isModalActive = $$v
          },
          expression: "isModalActive",
        },
      }),
      _vm._v(" "),
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
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title" }, [
                    _vm._v("\n              ¿Cuándo?\n            "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n              " + _vm._s(_vm.fecha) + "\n            "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title" }, [
                    _vm._v("\n              Dónde?\n            "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n              " + _vm._s(_vm.lugar) + "\n            "
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title" }, [
                    _vm._v("\n              Experiencia workout\n            "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n              " + _vm._s(_vm.tipo) + "\n            "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title" }, [
                    _vm._v(
                      "\n                Coach participante\n              "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.coach) +
                        "\n              "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "is-hidden-mobile" },
            [
              _c("RegisterForm", {
                on: { success: _vm.handleSuccess, errors: _vm.handleErrors },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "register-form-tablet is-hidden-tablet" },
            [
              _c("RegisterForm", {
                on: { success: _vm.handleSuccess, errors: _vm.handleErrors },
              }),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=template&id=89a547f0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Success.vue?vue&type=template&id=89a547f0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card" },
    [
      _c(
        "b-button",
        {
          staticClass: "close-button",
          attrs: { rounded: "" },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        },
        [_c("i", { staticClass: "fas fa-times" })]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-content" }, [
        _c(
          "div",
          {
            staticClass: "columns is-vcentered",
            staticStyle: { "margin-top": "29px" },
          },
          [
            _c("div", { staticClass: "column is-hidden-tablet" }, [
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
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "column is-7 gotica-italic title-venues" },
              [
                _c("div", { staticClass: "title-venues1" }, [
                  _vm._v(
                    "\n                    Te esperamos en\n                "
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "title-venues2" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.info.name) +
                      "\n                "
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "column is-hidden-mobile" }, [
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
        _c("div", [
          _c("div", { staticClass: "info-margin" }, [
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column is-5" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title puma-bold" }, [
                    _vm._v(
                      "\n                        Nombre\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.info.nameUser || "") +
                        "\n                    "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title puma-bold" }, [
                    _vm._v(
                      "\n                        Correo\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.info.mail || "") +
                        "\n                    "
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column is-5" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title puma-bold" }, [
                    _vm._v("\n                    ¿Cuándo?\n                "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.info.fecha) +
                        "\n                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title puma-bold" }, [
                    _vm._v("\n                    Dónde?\n                "),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.info.lugar) +
                        "\n                "
                    ),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "columns" }, [
              _c("div", { staticClass: "column is-5" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title puma-bold" }, [
                    _vm._v(
                      "\n                    Experiencia workout\n                "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.info.tipo) +
                        "\n                "
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column" }, [
                _c("div", { staticClass: "info-block" }, [
                  _c("p", { staticClass: "info-block-title puma-bold" }, [
                    _vm._v(
                      "\n                    Coach participante\n                    "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "info-block-text" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.info.coach) +
                        "\n                    "
                    ),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "has-text-centered" },
            [
              _c("add-to-calendar", {
                attrs: {
                  title: "Team Faster - " + _vm.info.tipo,
                  location: _vm.info.lugar,
                  start: new Date(_vm.info.fecha),
                  end: new Date(
                    new Date(_vm.info.fecha).setHours(
                      new Date(_vm.info.fecha).getHours() + 2
                    )
                  ),
                  details: _vm.info.name + " - " + _vm.info.coach,
                },
                inlineTemplate: {
                  render: function () {
                    var _vm = this
                    var _h = _vm.$createElement
                    var _c = _vm._self._c || _h
                    return _c(
                      "div",
                      { staticClass: "puma-regular calendars" },
                      [
                        _c(
                          "google-calendar",
                          {
                            staticStyle: { "padding-right": "16px" },
                            attrs: { id: "google-calendar" },
                          },
                          [
                            _c("i", { staticClass: "fab fa-google" }),
                            _vm._v(
                              "\n                        Añadir a Google calendar\n                    "
                            ),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "office365-calendar",
                          {
                            staticStyle: { "padding-right": "16px" },
                            attrs: { id: "office365-calendar" },
                          },
                          [
                            _c("i", { staticClass: "fab fa-windows" }),
                            _vm._v(
                              " Añadir a Microsoft Outlook calendar\n                    "
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  },
                  staticRenderFns: [],
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(0),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "has-text-centered" }, [
      _c("div", { staticClass: "thanks puma-bold" }, [
        _vm._v(
          "\n                Gracias por registrarte al evento. \n            "
        ),
      ]),
    ])
  },
]
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
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.info && _vm.info.photo,
                expression: "info && info.photo",
              },
            ],
          },
          [
            _c(
              "div",
              { ref: "img1", staticClass: "img-blackwhite" },
              [
                _c("b-image", {
                  attrs: {
                    responsive: "",
                    src: "/assets/img/" + _vm.info.photo,
                    ratio: "14by10",
                  },
                  on: { load: _vm.load1 },
                }),
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { ref: "img2", staticClass: "clip" }, [
              _c(
                "a",
                { attrs: { href: _vm.info.google_maps, target: "_blank" } },
                [
                  _c("b-image", {
                    attrs: {
                      responsive: "",
                      src: "/assets/img/" + _vm.info.map,
                      ratio: "15by13",
                    },
                    on: { load: _vm.load2 },
                  }),
                ],
                1
              ),
            ]),
          ]
        ),
        _vm._v(" "),
        _c("div", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.info || !_vm.info.photo,
              expression: "!info || !info.photo",
            },
          ],
          staticClass: "emptyPhoto",
        }),
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
                  couches: _vm.info.couches,
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



/***/ }),

/***/ "./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue-recaptcha/dist/vue-recaptcha.es.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VueRecaptcha": () => (/* binding */ Recaptcha)
/* harmony export */ });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "./node_modules/vue-demi/lib/index.mjs");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var defer = function defer() {
  var state = false; // Resolved or not

  var callbacks = [];

  var resolve = function resolve() {
    if (state) {
      return;
    }

    state = true;

    for (var i = 0, len = callbacks.length; i < len; i++) {
      callbacks[i]();
    }
  };

  var then = function then(cb) {
    if (!state) {
      callbacks.push(cb);
      return;
    }

    cb();
  };

  var deferred = {
    resolved: function resolved() {
      return state;
    },
    resolve: resolve,
    promise: {
      then: then
    }
  };
  return deferred;
};

var ownProp = Object.prototype.hasOwnProperty;
function createRecaptcha() {
  var deferred = defer();
  return {
    notify: function notify() {
      deferred.resolve();
    },
    wait: function wait() {
      return deferred.promise;
    },
    render: function render(ele, options, cb) {
      this.wait().then(function () {
        cb(window.grecaptcha.render(ele, options));
      });
    },
    reset: function reset(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.reset(widgetId);
      });
    },
    execute: function execute(widgetId) {
      if (typeof widgetId === 'undefined') {
        return;
      }

      this.assertLoaded();
      this.wait().then(function () {
        return window.grecaptcha.execute(widgetId);
      });
    },
    checkRecaptchaLoad: function checkRecaptchaLoad() {
      if (ownProp.call(window, 'grecaptcha') && ownProp.call(window.grecaptcha, 'render')) {
        this.notify();
      }
    },
    assertLoaded: function assertLoaded() {
      if (!deferred.resolved()) {
        throw new Error('ReCAPTCHA has not been loaded');
      }
    }
  };
}
var recaptcha = createRecaptcha();

if (typeof window !== 'undefined') {
  window.vueRecaptchaApiLoaded = recaptcha.notify;
}

var Recaptcha = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: 'VueRecaptcha',
  props: {
    sitekey: {
      type: String,
      required: true
    },
    theme: {
      type: String
    },
    badge: {
      type: String
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    tabindex: {
      type: String
    },
    loadRecaptchaScript: {
      type: Boolean,
      "default": true
    },
    recaptchaScriptId: {
      type: String,
      "default": '__RECAPTCHA_SCRIPT'
    },
    recaptchaHost: {
      type: String,
      "default": 'www.google.com'
    },
    language: {
      type: String,
      "default": ''
    }
  },
  emits: ['render', 'verify', 'expired', 'error'],
  setup: function setup(props, _ref) {
    var slots = _ref.slots,
        emit = _ref.emit;
    var root = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var widgetId = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var emitVerify = function emitVerify(response) {
      emit('verify', response);
    };

    var emitExpired = function emitExpired() {
      emit('expired');
    };

    var emitError = function emitError() {
      emit('error');
    };

    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      recaptcha.checkRecaptchaLoad();

      if (props.loadRecaptchaScript) {
        if (!document.getElementById(props.recaptchaScriptId)) {
          // Note: vueRecaptchaApiLoaded load callback name is per the latest documentation
          var script = document.createElement('script');
          script.id = props.recaptchaScriptId;
          script.src = "https://" + props.recaptchaHost + "/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl=" + props.language;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        }
      }

      var opts = _extends({}, props, {
        callback: emitVerify,
        'expired-callback': emitExpired,
        'error-callback': emitError
      });

      var $root = root.value;
      var container = slots["default"] ? $root.children[0] : $root;
      recaptcha.render(container, opts, function (id) {
        widgetId.value = id;
        emit('render', id);
      });
    });
    return {
      root: root,
      widgetId: widgetId,
      reset: function reset() {
        recaptcha.reset(widgetId.value);
      },
      execute: function execute() {
        recaptcha.execute(widgetId.value);
      }
    };
  },
  render: function render() {
    var defaultSlot = this.$slots["default"];
    var defaultContent;

    if (typeof defaultSlot === 'function') {
      defaultContent = defaultSlot();
    } else {
      defaultContent = defaultSlot;
    }

    return (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.h)('div', {
      ref: 'root'
    }, defaultContent);
  }
});




/***/ }),

/***/ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* binding */ EffectScope),
/* harmony export */   "computed": () => (/* binding */ computed),
/* harmony export */   "createApp": () => (/* binding */ createApp),
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "customRef": () => (/* binding */ customRef),
/* harmony export */   "default": () => (/* binding */ Plugin),
/* harmony export */   "defineAsyncComponent": () => (/* binding */ defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* binding */ defineComponent),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "effectScope": () => (/* binding */ effectScope),
/* harmony export */   "getCurrentInstance": () => (/* binding */ getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* binding */ getCurrentScope),
/* harmony export */   "h": () => (/* binding */ createElement),
/* harmony export */   "inject": () => (/* binding */ inject),
/* harmony export */   "isRaw": () => (/* binding */ isRaw),
/* harmony export */   "isReactive": () => (/* binding */ isReactive),
/* harmony export */   "isReadonly": () => (/* binding */ isReadonly),
/* harmony export */   "isRef": () => (/* binding */ isRef),
/* harmony export */   "markRaw": () => (/* binding */ markRaw),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "onActivated": () => (/* binding */ onActivated),
/* harmony export */   "onBeforeMount": () => (/* binding */ onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* binding */ onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* binding */ onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* binding */ onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* binding */ onErrorCaptured),
/* harmony export */   "onMounted": () => (/* binding */ onMounted),
/* harmony export */   "onScopeDispose": () => (/* binding */ onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* binding */ onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* binding */ onUnmounted),
/* harmony export */   "onUpdated": () => (/* binding */ onUpdated),
/* harmony export */   "provide": () => (/* binding */ provide),
/* harmony export */   "proxyRefs": () => (/* binding */ proxyRefs),
/* harmony export */   "reactive": () => (/* binding */ reactive),
/* harmony export */   "readonly": () => (/* binding */ readonly),
/* harmony export */   "ref": () => (/* binding */ ref),
/* harmony export */   "set": () => (/* binding */ set$1),
/* harmony export */   "shallowReactive": () => (/* binding */ shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* binding */ shallowReadonly),
/* harmony export */   "shallowRef": () => (/* binding */ shallowRef),
/* harmony export */   "toRaw": () => (/* binding */ toRaw),
/* harmony export */   "toRef": () => (/* binding */ toRef),
/* harmony export */   "toRefs": () => (/* binding */ toRefs),
/* harmony export */   "triggerRef": () => (/* binding */ triggerRef),
/* harmony export */   "unref": () => (/* binding */ unref),
/* harmony export */   "useAttrs": () => (/* binding */ useAttrs),
/* harmony export */   "useCSSModule": () => (/* binding */ useCSSModule),
/* harmony export */   "useCssModule": () => (/* binding */ useCssModule),
/* harmony export */   "useSlots": () => (/* binding */ useSlots),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* binding */ warn$1),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "watchEffect": () => (/* binding */ watchEffect),
/* harmony export */   "watchPostEffect": () => (/* binding */ watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* binding */ watchSyncEffect)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Displays a warning message (using console.error) with a stack trace if the
 * function is called inside of active component.
 *
 * @param message warning message to be displayed
 */
function warn$1(message) {
    var _a;
    warn(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
}

var activeEffectScope;
var effectScopeStack = [];
var EffectScopeImpl = /** @class */ (function () {
    function EffectScopeImpl(vm) {
        this.active = true;
        this.effects = [];
        this.cleanups = [];
        this.vm = vm;
    }
    EffectScopeImpl.prototype.run = function (fn) {
        if (this.active) {
            try {
                this.on();
                return fn();
            }
            finally {
                this.off();
            }
        }
        else if ((true)) {
            warn$1("cannot run an inactive effect scope.");
        }
        return;
    };
    EffectScopeImpl.prototype.on = function () {
        if (this.active) {
            effectScopeStack.push(this);
            activeEffectScope = this;
        }
    };
    EffectScopeImpl.prototype.off = function () {
        if (this.active) {
            effectScopeStack.pop();
            activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
        }
    };
    EffectScopeImpl.prototype.stop = function () {
        if (this.active) {
            this.vm.$destroy();
            this.effects.forEach(function (e) { return e.stop(); });
            this.cleanups.forEach(function (cleanup) { return cleanup(); });
            this.active = false;
        }
    };
    return EffectScopeImpl;
}());
var EffectScope = /** @class */ (function (_super) {
    __extends(EffectScope, _super);
    function EffectScope(detached) {
        if (detached === void 0) { detached = false; }
        var _this = this;
        var vm = undefined;
        withCurrentInstanceTrackingDisabled(function () {
            vm = defineComponentInstance(getVueConstructor());
        });
        _this = _super.call(this, vm) || this;
        if (!detached) {
            recordEffectScope(_this);
        }
        return _this;
    }
    return EffectScope;
}(EffectScopeImpl));
function recordEffectScope(effect, scope) {
    var _a;
    scope = scope || activeEffectScope;
    if (scope && scope.active) {
        scope.effects.push(effect);
        return;
    }
    // destroy on parent component unmounted
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    vm && vm.$on('hook:destroyed', function () { return effect.stop(); });
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    }
    else if ((true)) {
        warn$1("onScopeDispose() is called when there is no active effect scope" +
            " to be associated with.");
    }
}
/**
 * @internal
 **/
function getCurrentScopeVM() {
    var _a, _b;
    return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
}
/**
 * @internal
 **/
function bindCurrentScopeToVM(vm) {
    if (!vm.scope) {
        var scope_1 = new EffectScopeImpl(vm.proxy);
        vm.scope = scope_1;
        vm.proxy.$on('hook:destroyed', function () { return scope_1.stop(); });
    }
    return vm.scope;
}

var vueDependency = undefined;
try {
    var requiredVue = require('vue');
    if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue;
    }
    else if (requiredVue &&
        'default' in requiredVue &&
        isVue(requiredVue.default)) {
        vueDependency = requiredVue.default;
    }
}
catch (_a) {
    // not available
}
var vueConstructor = null;
var currentInstance = null;
var currentInstanceTracking = true;
var PluginInstalledFlag = '__composition_api_installed__';
function isVue(obj) {
    return obj && isFunction(obj) && obj.name === 'Vue';
}
function isVueRegistered(Vue) {
    // resolve issue: https://github.com/vuejs/composition-api/issues/876#issue-1087619365
    return vueConstructor && hasOwn(Vue, PluginInstalledFlag);
}
function getVueConstructor() {
    if ((true)) {
        assert(vueConstructor, "must call Vue.use(VueCompositionAPI) before using any function.");
    }
    return vueConstructor;
}
// returns registered vue or `vue` dependency
function getRegisteredVueOrDefault() {
    var constructor = vueConstructor || vueDependency;
    if ((true)) {
        assert(constructor, "No vue dependency found.");
    }
    return constructor;
}
function setVueConstructor(Vue) {
    // @ts-ignore
    if (( true) && vueConstructor && Vue.__proto__ !== vueConstructor.__proto__) {
        warn('[vue-composition-api] another instance of Vue installed');
    }
    vueConstructor = Vue;
    Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true,
    });
}
/**
 * For `effectScope` to create instance without populate the current instance
 * @internal
 **/
function withCurrentInstanceTrackingDisabled(fn) {
    var prev = currentInstanceTracking;
    currentInstanceTracking = false;
    try {
        fn();
    }
    finally {
        currentInstanceTracking = prev;
    }
}
function setCurrentInstance(instance) {
    if (!currentInstanceTracking)
        return;
    var prev = currentInstance;
    prev === null || prev === void 0 ? void 0 : prev.scope.off();
    currentInstance = instance;
    currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
}
function getCurrentInstance() {
    return currentInstance;
}
var instanceMapCache = new WeakMap();
function toVue3ComponentInstance(vm) {
    if (instanceMapCache.has(vm)) {
        return instanceMapCache.get(vm);
    }
    var instance = {
        proxy: vm,
        update: vm.$forceUpdate,
        type: vm.$options,
        uid: vm._uid,
        // $emit is defined on prototype and it expected to be bound
        emit: vm.$emit.bind(vm),
        parent: null,
        root: null, // to be immediately set
    };
    bindCurrentScopeToVM(instance);
    // map vm.$props =
    var instanceProps = [
        'data',
        'props',
        'attrs',
        'refs',
        'vnode',
        'slots',
    ];
    instanceProps.forEach(function (prop) {
        proxy(instance, prop, {
            get: function () {
                return vm["$".concat(prop)];
            },
        });
    });
    proxy(instance, 'isMounted', {
        get: function () {
            // @ts-expect-error private api
            return vm._isMounted;
        },
    });
    proxy(instance, 'isUnmounted', {
        get: function () {
            // @ts-expect-error private api
            return vm._isDestroyed;
        },
    });
    proxy(instance, 'isDeactivated', {
        get: function () {
            // @ts-expect-error private api
            return vm._inactive;
        },
    });
    proxy(instance, 'emitted', {
        get: function () {
            // @ts-expect-error private api
            return vm._events;
        },
    });
    instanceMapCache.set(vm, instance);
    if (vm.$parent) {
        instance.parent = toVue3ComponentInstance(vm.$parent);
    }
    if (vm.$root) {
        instance.root = toVue3ComponentInstance(vm.$root);
    }
    return instance;
}

var toString = function (x) { return Object.prototype.toString.call(x); };
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var noopFn = function (_) { return _; };
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get || noopFn,
        set: set || noopFn,
    });
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
function hasOwn(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition) {
        throw new Error("[vue-composition-api] ".concat(msg));
    }
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isArray(x) {
    return Array.isArray(x);
}
var objectToString = Object.prototype.toString;
var toTypeString = function (value) {
    return objectToString.call(value);
};
var isMap = function (val) {
    return toTypeString(val) === '[object Map]';
};
var isSet = function (val) {
    return toTypeString(val) === '[object Set]';
};
var MAX_VALID_ARRAY_LENGTH = 4294967295; // Math.pow(2, 32) - 1
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return (n >= 0 &&
        Math.floor(n) === n &&
        isFinite(val) &&
        n <= MAX_VALID_ARRAY_LENGTH);
}
function isObject(val) {
    return val !== null && typeof val === 'object';
}
function isPlainObject(x) {
    return toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function isUndef(v) {
    return v === undefined || v === null;
}
function warn(msg, vm) {
    var Vue = getRegisteredVueOrDefault();
    if (!Vue || !Vue.util)
        console.warn("[vue-composition-api] ".concat(msg));
    else
        Vue.util.warn(msg, vm);
}
function logError(err, vm, info) {
    if ((true)) {
        warn("Error in ".concat(info, ": \"").concat(err.toString(), "\""), vm);
    }
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}
/**
 * Object.is polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 * */
function isSame(value1, value2) {
    if (value1 === value2) {
        return value1 !== 0 || 1 / value1 === 1 / value2;
    }
    else {
        return value1 !== value1 && value2 !== value2;
    }
}

function getCurrentInstanceForFn(hook, target) {
    target = target || getCurrentInstance();
    if (( true) && !target) {
        warn("".concat(hook, " is called when there is no active component instance to be ") +
            "associated with. " +
            "Lifecycle injection APIs can only be used during execution of setup().");
    }
    return target;
}
function defineComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    var Vue = getVueConstructor();
    return Vue && obj instanceof Vue;
}
function createSlotProxy(vm, slotName) {
    return (function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            if ((true))
                return warn("slots.".concat(slotName, "() got called outside of the \"render()\" scope"), vm);
            return;
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    });
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}
var vueInternalClasses;
var getVueInternalClasses = function () {
    if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
            computed: {
                value: function () {
                    return 0;
                },
            },
        });
        // to get Watcher class
        var Watcher = vm._computedWatchers.value.constructor;
        // to get Dep class
        var Dep = vm._data.__ob__.dep.constructor;
        vueInternalClasses = {
            Watcher: Watcher,
            Dep: Dep,
        };
        vm.$destroy();
    }
    return vueInternalClasses;
};

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol('composition-api.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('composition-api.postFlushQueue');
// must be a string, symbol key is ignored in reactive
var RefKey = 'composition-api.refKey';

var accessModifiedSet = new WeakMap();
var rawSet = new WeakMap();
var readonlySet = new WeakMap();

/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
function set$1(target, key, val) {
    var Vue = getVueConstructor();
    // @ts-expect-error https://github.com/vuejs/vue/pull/12132
    var _a = Vue.util, warn = _a.warn, defineReactive = _a.defineReactive;
    if (( true) && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot set reactive property on undefined, null, or primitive value: ".concat(target));
    }
    var ob = target.__ob__;
    function ssrMockReactivity() {
        // in SSR, there is no __ob__. Mock for reactivity check
        if (ob && isObject(val) && !hasOwn(val, '__ob__')) {
            mockReactivityDeep(val);
        }
    }
    if (isArray(target)) {
        if (isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            ssrMockReactivity();
            return val;
        }
        else if (key === 'length' && val !== target.length) {
            target.length = val;
            ob === null || ob === void 0 ? void 0 : ob.dep.notify();
            return val;
        }
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        ssrMockReactivity();
        return val;
    }
    if (target._isVue || (ob && ob.vmCount)) {
        ( true) &&
            warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    // IMPORTANT: define access control before trigger watcher
    defineAccessControl(target, key, val);
    ssrMockReactivity();
    ob.dep.notify();
    return val;
}

var _isForceTrigger = false;
function isForceTrigger() {
    return _isForceTrigger;
}
function setForceTrigger(v) {
    _isForceTrigger = v;
}

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options, isReadonly, isComputed) {
    if (isReadonly === void 0) { isReadonly = false; }
    if (isComputed === void 0) { isComputed = false; }
    var r = new RefImpl(options);
    // add effect to differentiate refs from computed
    if (isComputed)
        r.effect = true;
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shouldn't extend it.
    // related issues: #79
    var sealed = Object.seal(r);
    if (isReadonly)
        readonlySet.set(sealed, true);
    return sealed;
}
function ref(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function toRefs(obj) {
    if (( true) && !isReactive(obj)) {
        warn("toRefs() expects a reactive object but received a plain one.");
    }
    if (!isPlainObject(obj))
        return obj;
    var ret = {};
    for (var key in obj) {
        ret[key] = toRef(obj, key);
    }
    return ret;
}
function customRef(factory) {
    var version = ref(0);
    return createRef(factory(function () { return void version.value; }, function () {
        ++version.value;
    }));
}
function toRef(object, key) {
    if (!(key in object))
        set$1(object, key, undefined);
    var v = object[key];
    if (isRef(v))
        return v;
    return createRef({
        get: function () { return object[key]; },
        set: function (v) { return (object[key] = v); },
    });
}
function shallowRef(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function triggerRef(value) {
    if (!isRef(value))
        return;
    setForceTrigger(true);
    value.value = value.value;
    setForceTrigger(false);
}
function proxyRefs(objectWithRefs) {
    var _a, e_1, _b;
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
    def(value, RefKey, value[RefKey], false);
    var _loop_1 = function (key) {
        proxy(value, key, {
            get: function () {
                if (isRef(value[RefKey][key])) {
                    return value[RefKey][key].value;
                }
                return value[RefKey][key];
            },
            set: function (v) {
                if (isRef(value[RefKey][key])) {
                    return (value[RefKey][key].value = unref(v));
                }
                value[RefKey][key] = unref(v);
            },
        });
    };
    try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var key = _d.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return value;
}

var SKIPFLAG = '__v_skip';
function isRaw(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]));
}
function isReactive(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a[SKIPFLAG]));
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isRaw(target) ||
        isArray(target) ||
        isRef(target) ||
        isComponentInstance(target) ||
        accessModifiedSet.has(target))
        return;
    accessModifiedSet.set(target, true);
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    if (isRaw(target[key]))
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ &&
            arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    proxy(target, key, {
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(val) && !isRef(newVal)) {
                val.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
                val = newVal;
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getRegisteredVueOrDefault();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = defineComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    // in SSR, there is no __ob__. Mock for reactivity check
    if (!hasOwn(observed, '__ob__')) {
        mockReactivityDeep(observed);
    }
    return observed;
}
/**
 * Mock __ob__ for object recursively
 */
function mockReactivityDeep(obj, seen) {
    var e_1, _a;
    if (seen === void 0) { seen = new Set(); }
    if (seen.has(obj) || hasOwn(obj, '__ob__') || !Object.isExtensible(obj))
        return;
    def(obj, '__ob__', mockObserver(obj));
    seen.add(obj);
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = obj[key];
            if (!(isPlainObject(value) || isArray(value)) ||
                isRaw(value) ||
                !Object.isExtensible(value)) {
                continue;
            }
            mockReactivityDeep(value, seen);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function mockObserver(value) {
    if (value === void 0) { value = {}; }
    return {
        value: value,
        dep: {
            notify: noopFn,
            depend: noopFn,
            addSub: noopFn,
            removeSub: noopFn,
        },
    };
}
function createObserver() {
    return observe({}).__ob__;
}
function shallowReactive(obj) {
    var e_2, _a;
    if (!isObject(obj)) {
        if ((true)) {
            warn('"shallowReactive()" must be called on an object.');
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(isArray(obj) ? [] : {});
    var ob = observed.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var setter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false) {
                return "continue";
            }
            getter = property.get;
            setter = property.set;
        }
        proxy(observed, key, {
            get: function getterHandler() {
                var _a;
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.depend();
                return val;
            },
            set: function setterHandler(newVal) {
                var _a;
                if (getter && !setter)
                    return;
                if (!isForceTrigger() && val === newVal)
                    return;
                if (setter) {
                    setter.call(obj, newVal);
                }
                else {
                    val = newVal;
                }
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.notify();
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!isObject(obj)) {
        if ((true)) {
            warn('"reactive()" must be called on an object.');
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function markRaw(obj) {
    if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    var ob = createObserver();
    ob[SKIPFLAG] = true;
    def(obj, '__ob__', ob);
    // mark as Raw
    rawSet.set(obj, true);
    return obj;
}
function toRaw(observed) {
    var _a;
    if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed;
    }
    return ((_a = observed === null || observed === void 0 ? void 0 : observed.__ob__) === null || _a === void 0 ? void 0 : _a.value) || observed;
}

function isReadonly(obj) {
    return readonlySet.has(obj);
}
/**
 * **In @vue/composition-api, `reactive` only provides type-level readonly check**
 *
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    if (( true) && !isObject(target)) {
        warn("value cannot be made reactive: ".concat(String(target)));
    }
    else {
        readonlySet.set(target, true);
    }
    return target;
}
function shallowReadonly(obj) {
    var e_1, _a;
    if (!isObject(obj)) {
        if ((true)) {
            warn("value cannot be made reactive: ".concat(String(obj)));
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        (!Object.isExtensible(obj) && !isRef(obj))) {
        return obj;
    }
    var readonlyObj = isRef(obj)
        ? new RefImpl({})
        : isReactive(obj)
            ? observe({})
            : {};
    var source = reactive({});
    var ob = source.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false && !isRef(obj)) {
                return "continue";
            }
            getter = property.get;
        }
        proxy(readonlyObj, key, {
            get: function getterHandler() {
                var value = getter ? getter.call(obj) : val;
                ob.dep.depend();
                return value;
            },
            set: function (v) {
                if ((true)) {
                    warn("Set operation on key \"".concat(key, "\" failed: target is readonly."));
                }
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    readonlySet.set(readonlyObj, true);
    return readonlyObj;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
    var Vue = getVueConstructor();
    var warn = Vue.util.warn;
    if (( true) && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot delete reactive property on undefined, null, or primitive value: ".concat(target));
    }
    if (isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        ( true) &&
            warn('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}

var genName = function (name) { return "on".concat(name[0].toUpperCase() + name.slice(1)); };
function createLifeCycle(lifeCyclehook) {
    return function (callback, target) {
        var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
        return (instance &&
            injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback));
    };
}
function injectHookOption(Vue, instance, hook, val) {
    var options = instance.proxy.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    var wrappedHook = wrapHookCall(instance, val);
    options[hook] = mergeFn(options[hook], wrappedHook);
    return wrappedHook;
}
function wrapHookCall(instance, fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var prev = getCurrentInstance();
        setCurrentInstance(instance);
        try {
            return fn.apply(void 0, __spreadArray([], __read(args), false));
        }
        finally {
            setCurrentInstance(prev);
        }
    };
}
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');

var fallbackVM;
function flushPreQueue() {
    flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
    flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
    return vm[WatcherPreFlushQueueKey] !== undefined;
}
function installWatchEnv(vm) {
    vm[WatcherPreFlushQueueKey] = [];
    vm[WatcherPostFlushQueueKey] = [];
    vm.$on('hook:beforeUpdate', flushPreQueue);
    vm.$on('hook:updated', flushPostQueue);
}
function getWatcherOption(options) {
    return __assign({
        immediate: false,
        deep: false,
        flush: 'pre',
    }, options);
}
function getWatchEffectOption(options) {
    return __assign({
        flush: 'pre',
    }, options);
}
function getWatcherVM() {
    var vm = getCurrentScopeVM();
    if (!vm) {
        if (!fallbackVM) {
            fallbackVM = defineComponentInstance(getVueConstructor());
        }
        vm = fallbackVM;
    }
    else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
    }
    return vm;
}
function flushQueue(vm, key) {
    var queue = vm[key];
    for (var index = 0; index < queue.length; index++) {
        queue[index]();
    }
    queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
    var fallbackFlush = function () {
        vm.$nextTick(function () {
            if (vm[WatcherPreFlushQueueKey].length) {
                flushQueue(vm, WatcherPreFlushQueueKey);
            }
            if (vm[WatcherPostFlushQueueKey].length) {
                flushQueue(vm, WatcherPostFlushQueueKey);
            }
        });
    };
    switch (mode) {
        case 'pre':
            fallbackFlush();
            vm[WatcherPreFlushQueueKey].push(fn);
            break;
        case 'post':
            fallbackFlush();
            vm[WatcherPostFlushQueueKey].push(fn);
            break;
        default:
            assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got ".concat(mode));
            break;
    }
}
function createVueWatcher(vm, getter, callback, options) {
    var index = vm._watchers.length;
    // @ts-ignore: use undocumented options
    vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before,
    });
    return vm._watchers[index];
}
// We have to monkeypatch the teardown function so Vue will run
// runCleanup() when it tears down the watcher on unmounted.
function patchWatcherTeardown(watcher, runCleanup) {
    var _teardown = watcher.teardown;
    watcher.teardown = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _teardown.apply(watcher, args);
        runCleanup();
    };
}
function createWatcher(vm, source, cb, options) {
    var _a;
    if (( true) && !cb) {
        if (options.immediate !== undefined) {
            warn("watch() \"immediate\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
        if (options.deep !== undefined) {
            warn("watch() \"deep\" option is only respected when using the " +
                "watch(source, callback, options?) signature.");
        }
    }
    var flushMode = options.flush;
    var isSync = flushMode === 'sync';
    var cleanup;
    var registerCleanup = function (fn) {
        cleanup = function () {
            try {
                fn();
            }
            catch (
            // FIXME: remove any
            error) {
                logError(error, vm, 'onCleanup()');
            }
        };
    };
    // cleanup before running getter again
    var runCleanup = function () {
        if (cleanup) {
            cleanup();
            cleanup = null;
        }
    };
    var createScheduler = function (fn) {
        if (isSync ||
            /* without a current active instance, ignore pre|post mode */ vm ===
                fallbackVM) {
            return fn;
        }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return queueFlushJob(vm, function () {
                fn.apply(void 0, __spreadArray([], __read(args), false));
            }, flushMode);
        });
    };
    // effect watch
    if (cb === null) {
        var running_1 = false;
        var getter_1 = function () {
            // preventing the watch callback being call in the same execution
            if (running_1) {
                return;
            }
            try {
                running_1 = true;
                source(registerCleanup);
            }
            finally {
                running_1 = false;
            }
        };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
            deep: options.deep || false,
            sync: isSync,
            before: runCleanup,
        });
        patchWatcherTeardown(watcher_1, runCleanup);
        // enable the watcher update
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        // always run watchEffect
        watcher_1.get = createScheduler(originGet);
        return function () {
            watcher_1.teardown();
        };
    }
    var deep = options.deep;
    var isMultiSource = false;
    var getter;
    if (isRef(source)) {
        getter = function () { return source.value; };
    }
    else if (isReactive(source)) {
        getter = function () { return source; };
        deep = true;
    }
    else if (isArray(source)) {
        isMultiSource = true;
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return s();
                }
                else {
                    ( true) &&
                        warn("Invalid watch source: ".concat(JSON.stringify(s), ".\n          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), vm);
                    return noopFn;
                }
            });
        };
    }
    else if (isFunction(source)) {
        getter = source;
    }
    else {
        getter = noopFn;
        ( true) &&
            warn("Invalid watch source: ".concat(JSON.stringify(source), ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."), vm);
    }
    if (deep) {
        var baseGetter_1 = getter;
        getter = function () { return traverse(baseGetter_1()); };
    }
    var applyCb = function (n, o) {
        if (!deep &&
            isMultiSource &&
            n.every(function (v, i) { return isSame(v, o[i]); }))
            return;
        // cleanup before running cb again
        runCleanup();
        return cb(n, o, registerCleanup);
    };
    var callback = createScheduler(applyCb);
    if (options.immediate) {
        var originalCallback_1 = callback;
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
            shiftCallback_1 = originalCallback_1;
            // o is undefined on the first call
            return applyCb(n, isArray(n) ? [] : o);
        };
        callback = function (n, o) {
            return shiftCallback_1(n, o);
        };
    }
    // @ts-ignore: use undocumented option "sync"
    var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep: deep,
        sync: isSync,
    });
    // Once again, we have to hack the watcher for proper teardown
    var watcher = vm._watchers[vm._watchers.length - 1];
    // if the return value is reactive and deep:true
    // watch for changes, this might happen when new key is added
    if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
            update: function () {
                // this will force the source to be revaluated and the callback
                // executed if needed
                watcher.run();
            },
        });
    }
    patchWatcherTeardown(watcher, runCleanup);
    return function () {
        stop();
    };
}
function watchEffect(effect, options) {
    var opts = getWatchEffectOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, effect, null, opts);
}
function watchPostEffect(effect) {
    return watchEffect(effect, { flush: 'post' });
}
function watchSyncEffect(effect) {
    return watchEffect(effect, { flush: 'sync' });
}
// implementation
function watch(source, cb, options) {
    var callback = null;
    if (isFunction(cb)) {
        // source watch
        callback = cb;
    }
    else {
        // effect watch
        if ((true)) {
            warn("`watch(fn, options?)` signature has been moved to a separate API. " +
                "Use `watchEffect(fn, options?)` instead. `watch` now only " +
                "supports `watch(source, cb, options?) signature.");
        }
        options = cb;
        callback = null;
    }
    var opts = getWatcherOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, source, callback, opts);
}
function traverse(value, seen) {
    if (seen === void 0) { seen = new Set(); }
    if (!isObject(value) || seen.has(value) || rawSet.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (isSet(value) || isMap(value)) {
        value.forEach(function (v) {
            traverse(v, seen);
        });
    }
    else if (isPlainObject(value)) {
        for (var key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

// implement
function computed(getterOrOptions) {
    var vm = getCurrentScopeVM();
    var getter;
    var setter;
    if (isFunction(getterOrOptions)) {
        getter = getterOrOptions;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var computedSetter;
    var computedGetter;
    if (vm && !vm.$isServer) {
        var _a = getVueInternalClasses(), Watcher_1 = _a.Watcher, Dep_1 = _a.Dep;
        var watcher_1;
        computedGetter = function () {
            if (!watcher_1) {
                watcher_1 = new Watcher_1(vm, getter, noopFn, { lazy: true });
            }
            if (watcher_1.dirty) {
                watcher_1.evaluate();
            }
            if (Dep_1.target) {
                watcher_1.depend();
            }
            return watcher_1.value;
        };
        computedSetter = function (v) {
            if (( true) && !setter) {
                warn('Write operation failed: computed value is readonly.', vm);
                return;
            }
            if (setter) {
                setter(v);
            }
        };
    }
    else {
        // fallback
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
            computed: {
                $$state: {
                    get: getter,
                    set: setter,
                },
            },
        });
        vm && vm.$on('hook:destroyed', function () { return computedHost_1.$destroy(); });
        computedGetter = function () { return computedHost_1.$$state; };
        computedSetter = function (v) {
            if (( true) && !setter) {
                warn('Write operation failed: computed value is readonly.', vm);
                return;
            }
            computedHost_1.$$state = v;
        };
    }
    return createRef({
        get: computedGetter,
        set: computedSetter,
    }, !setter, true);
}

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var _a;
    var vm = (_a = getCurrentInstanceForFn('provide')) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm)
        return;
    if (!vm._provided) {
        var provideCache_1 = {};
        proxy(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    var _a;
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm) {
        ( true) &&
            warn("inject() can only be used inside setup() or functional components.");
        return;
    }
    if (!key) {
        ( true) && warn("injection \"".concat(String(key), "\" not found."), vm);
        return defaultValue;
    }
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction(defaultValue)
            ? defaultValue()
            : defaultValue;
    }
    else if ((true)) {
        warn("Injection \"".concat(String(key), "\" not found."), vm);
    }
}

var EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : 0;
var useCssModule = function (name) {
    var _a;
    if (name === void 0) { name = '$style'; }
    var instance = getCurrentInstance();
    if (!instance) {
        ( true) && warn("useCssModule must be called inside setup()");
        return EMPTY_OBJ;
    }
    var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
    if (!mod) {
        ( true) &&
            warn("Current instance does not have CSS module named \"".concat(name, "\"."));
        return EMPTY_OBJ;
    }
    return mod;
};
/**
 * @deprecated use `useCssModule` instead.
 */
var useCSSModule = useCssModule;

function createApp(rootComponent, rootProps) {
    if (rootProps === void 0) { rootProps = undefined; }
    var V = getVueConstructor();
    var mountedVM = undefined;
    var provide = {};
    var app = {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        provide: function (key, value) {
            provide[key] = value;
            return this;
        },
        directive: function (name, dir) {
            if (dir) {
                V.directive(name, dir);
                return app;
            }
            else {
                return V.directive(name);
            }
        },
        mount: function (el, hydrating) {
            if (!mountedVM) {
                mountedVM = new V(__assign(__assign({ propsData: rootProps }, rootComponent), { provide: __assign(__assign({}, provide), rootComponent.provide) }));
                mountedVM.$mount(el, hydrating);
                return mountedVM;
            }
            else {
                if ((true)) {
                    warn("App has already been mounted.\n" +
                        "If you want to remount the same app, move your app creation logic " +
                        "into a factory function and create fresh app instances for each " +
                        "mount - e.g. `const createMyApp = () => createApp(App)`");
                }
                return mountedVM;
            }
        },
        unmount: function () {
            if (mountedVM) {
                mountedVM.$destroy();
                mountedVM = undefined;
            }
            else if ((true)) {
                warn("Cannot unmount an app that is not mounted.");
            }
        },
    };
    return app;
}

var nextTick = function nextTick() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
};

var fallbackCreateElement;
var createElement = function createElement() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var instance = (this === null || this === void 0 ? void 0 : this.proxy) || ((_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
    if (!instance) {
        ( true) &&
            warn('`createElement()` has been called outside of render function.');
        if (!fallbackCreateElement) {
            fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return instance.$createElement.apply(instance, args);
};

function useSlots() {
    return getContext().slots;
}
function useAttrs() {
    return getContext().attrs;
}
function getContext() {
    var i = getCurrentInstance();
    if (( true) && !i) {
        warn("useContext() called without active instance.");
    }
    return i.setupContext;
}

function set(vm, key, value) {
    var state = (vm.__composition_api_state__ =
        vm.__composition_api_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__composition_api_state__ || {})[key];
}
var vmStateManager = {
    set: set,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
            proxy(vm, propName, {
                get: function () { return propValue.value; },
                set: function (val) {
                    propValue.value = val;
                },
            });
        }
        else {
            proxy(vm, propName, {
                get: function () {
                    if (isReactive(propValue)) {
                        propValue.__ob__.dep.depend();
                    }
                    return propValue;
                },
                set: function (val) {
                    propValue = val;
                },
            });
        }
        if ((true)) {
            // expose binding to Vue Devtool as a data property
            // delay this until state has been resolved to prevent repeated works
            vm.$nextTick(function () {
                if (Object.keys(vm._data).indexOf(propName) !== -1) {
                    return;
                }
                if (isRef(propValue)) {
                    proxy(vm._data, propName, {
                        get: function () { return propValue.value; },
                        set: function (val) {
                            propValue.value = val;
                        },
                    });
                }
                else {
                    proxy(vm._data, propName, {
                        get: function () { return propValue; },
                        set: function (val) {
                            propValue = val;
                        },
                    });
                }
            });
        }
    }
    else if ((true)) {
        if (props && hasOwn(props, propName)) {
            warn("The setup binding property \"".concat(propName, "\" is already declared as a prop."), vm);
        }
        else {
            warn("The setup binding property \"".concat(propName, "\" is already declared."), vm);
        }
    }
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function afterRender(vm) {
    var stack = [vm._vnode];
    while (stack.length) {
        var vnode = stack.pop();
        if (vnode) {
            if (vnode.context)
                updateTemplateRef(vnode.context);
            if (vnode.children) {
                for (var i = 0; i < vnode.children.length; ++i) {
                    stack.push(vnode.children[i]);
                }
            }
        }
    }
}
function updateVmAttrs(vm, ctx) {
    var e_1, _a;
    if (!vm) {
        return;
    }
    var attrBindings = vmStateManager.get(vm, 'attrBindings');
    if (!attrBindings && !ctx) {
        // fix 840
        return;
    }
    if (!attrBindings) {
        var observedData = reactive({});
        attrBindings = { ctx: ctx, data: observedData };
        vmStateManager.set(vm, 'attrBindings', attrBindings);
        proxy(ctx, 'attrs', {
            get: function () {
                return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data;
            },
            set: function () {
                ( true) &&
                    warn("Cannot assign to '$attrs' because it is a read-only property", vm);
            },
        });
    }
    var source = vm.$attrs;
    var _loop_1 = function (attr) {
        if (!hasOwn(attrBindings.data, attr)) {
            proxy(attrBindings.data, attr, {
                get: function () {
                    // to ensure it always return the latest value
                    return vm.$attrs[attr];
                },
            });
        }
    };
    try {
        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var attr = _c.value;
            _loop_1(attr);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVNode = vm.$options._parentVnode;
    if (!parentVNode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(instance, fn, onError) {
    var preVm = getCurrentInstance();
    setCurrentInstance(instance);
    try {
        return fn(instance);
    }
    catch (
    // FIXME: remove any
    err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentInstance(preVm);
    }
}

function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            afterRender(this);
        },
        beforeUpdate: function () {
            updateVmAttrs(this);
        },
        updated: function () {
            afterRender(this);
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(toVue3ComponentInstance(vm), function () {
                    return render.apply(_this, args);
                });
            };
        }
        if (!setup) {
            return;
        }
        if (!isFunction(setup)) {
            if ((true)) {
                warn('The "setup" option should be a function that returns a object in component definitions.', vm);
            }
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return isFunction(data)
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        var instance = toVue3ComponentInstance(vm);
        instance.setupContext = ctx;
        // fake reactive for `toRefs(props)`
        def(props, '__ob__', createObserver());
        // resolve scopedSlots and slots to functions
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(instance, function () {
            // make props to be fake reactive, this is for `toRefs(props)`
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(instance, function () { return bindingFunc_1(); });
            };
            return;
        }
        else if (isObject(binding)) {
            if (isReactive(binding)) {
                binding = toRefs(binding);
            }
            vmStateManager.set(vm, 'rawBindings', binding);
            var bindingObj_1 = binding;
            Object.keys(bindingObj_1).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                if (!isRef(bindingValue)) {
                    if (!isReactive(bindingValue)) {
                        if (isFunction(bindingValue)) {
                            var copy_1 = bindingValue;
                            bindingValue = bindingValue.bind(vm);
                            Object.keys(copy_1).forEach(function (ele) {
                                bindingValue[ele] = copy_1[ele];
                            });
                        }
                        else if (!isObject(bindingValue)) {
                            bindingValue = ref(bindingValue);
                        }
                        else if (hasReactiveArrayChild(bindingValue)) {
                            // creates a custom reactive properties without make the object explicitly reactive
                            // NOTE we should try to avoid this, better implementation needed
                            customReactive(bindingValue);
                        }
                    }
                    else if (isArray(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        if ((true)) {
            assert(false, "\"setup\" must return a \"Object\" or a \"Function\", got \"".concat(Object.prototype.toString
                .call(binding)
                .slice(8, -1), "\""));
        }
    }
    function customReactive(target, seen) {
        if (seen === void 0) { seen = new Set(); }
        if (seen.has(target))
            return;
        if (!isPlainObject(target) ||
            isRef(target) ||
            isReactive(target) ||
            isRaw(target))
            return;
        var Vue = getVueConstructor();
        // @ts-expect-error https://github.com/vuejs/vue/pull/12132
        var defineReactive = Vue.util.defineReactive;
        Object.keys(target).forEach(function (k) {
            var val = target[k];
            defineReactive(target, k, val);
            if (val) {
                seen.add(val);
                customReactive(val, seen);
            }
            return;
        });
    }
    function hasReactiveArrayChild(target, visited) {
        if (visited === void 0) { visited = new Map(); }
        if (visited.has(target)) {
            return visited.get(target);
        }
        visited.set(target, false);
        if (isArray(target) && isReactive(target)) {
            visited.set(target, true);
            return true;
        }
        if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
            return false;
        }
        return Object.keys(target).some(function (x) {
            return hasReactiveArrayChild(target[x], visited);
        });
    }
    function createSetupContext(vm) {
        var ctx = { slots: {} };
        var propsPlain = [
            'root',
            'parent',
            'refs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var methodReturnVoid = ['emit'];
        propsPlain.forEach(function (key) {
            var srcKey = "$".concat(key);
            proxy(ctx, key, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    ( true) &&
                        warn("Cannot assign to '".concat(key, "' because it is a read-only property"), vm);
                },
            });
        });
        updateVmAttrs(vm, ctx);
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$".concat(key);
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        if (false) {}
        return ctx;
    }
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(from, to) {
    if (!from)
        return to;
    if (!to)
        return from;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            !isRef(toVal) &&
            isPlainObject(fromVal) &&
            !isRef(fromVal)) {
            mergeData(fromVal, toVal);
        }
    }
    return to;
}
function install(Vue) {
    if (isVueRegistered(Vue)) {
        if ((true)) {
            warn('[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.');
        }
        return;
    }
    if ((true)) {
        if (Vue.version) {
            if (Vue.version[0] !== '2' || Vue.version[1] !== '.') {
                warn("[vue-composition-api] only works with Vue 2, v".concat(Vue.version, " found."));
            }
        }
        else {
            warn('[vue-composition-api] no Vue version found');
        }
    }
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(isFunction(parent) ? parent(props, context) || {} : undefined, isFunction(child) ? child(props, context) || {} : undefined);
        };
    };
    setVueConstructor(Vue);
    mixin(Vue);
}
var Plugin = {
    install: function (Vue) { return install(Vue); },
};

// implementation, close to no-op
function defineComponent(options) {
    return options;
}

function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if (( true) && suspensible) {
        warn("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest =
                loader()
                    .catch(function (err) {
                    err = err instanceof Error ? err : new Error(String(err));
                    if (userOnError) {
                        return new Promise(function (resolve, reject) {
                            var userRetry = function () { return resolve(retry()); };
                            var userFail = function () { return reject(err); };
                            userOnError(err, userRetry, userFail, retries + 1);
                        });
                    }
                    else {
                        throw err;
                    }
                })
                    .then(function (comp) {
                    if (thisRequest !== pendingRequest && pendingRequest) {
                        return pendingRequest;
                    }
                    if (( true) && !comp) {
                        warn("Async component loader resolved to undefined. " +
                            "If you are using retry(), make sure to return its return value.");
                    }
                    // interop module default
                    if (comp &&
                        (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                        comp = comp.default;
                    }
                    if (( true) && comp && !isObject(comp) && !isFunction(comp)) {
                        throw new Error("Invalid async component load result: ".concat(comp));
                    }
                    return comp;
                })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent,
        };
    };
}

var version = "1.7.0";
// auto install when using CDN
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}




/***/ }),

/***/ "./node_modules/vue-demi/lib/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/vue-demi/lib/index.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EffectScope": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.EffectScope),
/* harmony export */   "Vue": () => (/* reexport safe */ vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Vue2": () => (/* binding */ Vue2),
/* harmony export */   "computed": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.computed),
/* harmony export */   "createApp": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.createApp),
/* harmony export */   "createRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "customRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.customRef),
/* harmony export */   "defineAsyncComponent": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent),
/* harmony export */   "defineComponent": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.defineComponent),
/* harmony export */   "del": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.del),
/* harmony export */   "effectScope": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.effectScope),
/* harmony export */   "getCurrentInstance": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentInstance),
/* harmony export */   "getCurrentScope": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.getCurrentScope),
/* harmony export */   "h": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.h),
/* harmony export */   "inject": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.inject),
/* harmony export */   "install": () => (/* binding */ install),
/* harmony export */   "isRaw": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isRaw),
/* harmony export */   "isReactive": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isReactive),
/* harmony export */   "isReadonly": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isReadonly),
/* harmony export */   "isRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.isRef),
/* harmony export */   "isVue2": () => (/* binding */ isVue2),
/* harmony export */   "isVue3": () => (/* binding */ isVue3),
/* harmony export */   "markRaw": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.markRaw),
/* harmony export */   "nextTick": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.nextTick),
/* harmony export */   "onActivated": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onActivated),
/* harmony export */   "onBeforeMount": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeMount),
/* harmony export */   "onBeforeUnmount": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeUnmount),
/* harmony export */   "onBeforeUpdate": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onBeforeUpdate),
/* harmony export */   "onDeactivated": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onDeactivated),
/* harmony export */   "onErrorCaptured": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onErrorCaptured),
/* harmony export */   "onMounted": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onMounted),
/* harmony export */   "onScopeDispose": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onScopeDispose),
/* harmony export */   "onServerPrefetch": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onServerPrefetch),
/* harmony export */   "onUnmounted": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onUnmounted),
/* harmony export */   "onUpdated": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.onUpdated),
/* harmony export */   "provide": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.provide),
/* harmony export */   "proxyRefs": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.proxyRefs),
/* harmony export */   "reactive": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.reactive),
/* harmony export */   "readonly": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.readonly),
/* harmony export */   "ref": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.ref),
/* harmony export */   "set": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.set),
/* harmony export */   "shallowReactive": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.shallowReactive),
/* harmony export */   "shallowReadonly": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.shallowReadonly),
/* harmony export */   "shallowRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.shallowRef),
/* harmony export */   "toRaw": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.toRaw),
/* harmony export */   "toRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.toRef),
/* harmony export */   "toRefs": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.toRefs),
/* harmony export */   "triggerRef": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.triggerRef),
/* harmony export */   "unref": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.unref),
/* harmony export */   "useAttrs": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useAttrs),
/* harmony export */   "useCSSModule": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useCSSModule),
/* harmony export */   "useCssModule": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useCssModule),
/* harmony export */   "useSlots": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.useSlots),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "warn": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.warn),
/* harmony export */   "watch": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watch),
/* harmony export */   "watchEffect": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watchEffect),
/* harmony export */   "watchPostEffect": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watchPostEffect),
/* harmony export */   "watchSyncEffect": () => (/* reexport safe */ _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__.watchSyncEffect)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api/dist/vue-composition-api.mjs */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



function install(_vue) {
  _vue = _vue || vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  if (_vue && !_vue['__composition_api_installed__'])
    vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_vue_composition_api_dist_vue_composition_api_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])
}

install(vue__WEBPACK_IMPORTED_MODULE_0__["default"])

var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0__["default"]
var version = vue__WEBPACK_IMPORTED_MODULE_0__["default"].version

/**VCA-EXPORTS**/

/**VCA-EXPORTS**/




/***/ })

}]);