<template>
  <div class="registro">
    <div class="columns clip-section">
      <div class="column has-text-right column-info is-hidden-tablet">
        <div class="info">
          <div class="gotica-italic">
            <p class="title-1">
              Reserva sin costo,
            </p>
            <p class="title-2">
              Un lugar con el team faster
            </p>
            <p class="title-3">
              Fuente de Xochipili
            </p>
          </div>
          <div class="puma-bold" style="padding-top: 36px;">
            <div class="info-block">
              <p class="info-block-title">
                ¿Cuándo?
              </p>
              <p class="info-block-text">
                25 de junio | 8:00 a 10:00 am registro
              </p>
            </div>
            <div class="info-block">
              <p class="info-block-title">
                Dónde?
              </p>
              <p class="info-block-text">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
            <div class="info-block">
              <p class="info-block-title">
                Experiencia workout
              </p>
              <p class="info-block-text">
                Cardio Hit
              </p>
            </div>
            <div class="info-block">
              <p class="info-block-title">
                Coach participante
              </p>
              <p class="info-block-text">
                Ceci Aguilera
              </p>
            </div>
            <div v-show="!showForm" class="info-block">
              <p style="padding-top: 36px;">
                <b-button rounded @click="showForm=true">
                  Asistir a evento
                </b-button>
              </p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
      <div class="column column-imgs">
        <div class="img-blackwhite">
          <b-image
            responsive
            src="/assets/img/FuenteXochipili.jpg"
            ratio="14by10"
          ></b-image>
        </div>
        <div class="clip">
          <b-image
            responsive
            src="/assets/img/ubicacionfuente.jpg"
            ratio="15by13"
          ></b-image>
        </div>
        <div class="tm-puma has-text-right">
          @2022 puma. Todos los derechos reservados
        </div>
      </div>
      <div class="column has-text-right column-info is-hidden-mobile">
        <div class="info">
          <div class="gotica-italic">
            <p class="title-1">
              Reserva sin costo,
            </p>
            <p class="title-2">
              Un lugar con el team faster
            </p>
            <p class="title-3">
              Fuente de Xochipili
            </p>
          </div>
          <div class="puma-bold" style="padding-top: 36px;">
            <div class="info-block">
              <p class="info-block-title">
                ¿Cuándo?
              </p>
              <p class="info-block-text">
                25 de junio | 8:00 a 10:00 amregistro
              </p>
            </div>
            <div class="info-block">
              <p class="info-block-title">
                Dónde?
              </p>
              <p class="info-block-text">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              </p>
            </div>
            <div class="info-block">
              <p class="info-block-title">
                Experiencia workout
              </p>
              <p class="info-block-text">
                Cardio Hit
              </p>
            </div>
            <div class="info-block">
              <p class="info-block-title">
                Coach participante
              </p>
              <p class="info-block-text">
                Ceci Aguilera
              </p>
            </div>
            <div v-show="!showForm" class="info-block">
              <p style="padding-top: 36px;">
                <b-button rounded @click="showForm = true">
                  Asistir a evento
                </b-button>
              </p>
            </div>
            <div v-if="showForm" class="has-text-left form-styles puma-regular">
              <ValidationProvider rules="required" name="name" v-slot="{ errors, valid }">
                <b-field
                  label="Nombre(s)*"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                  class="field-style">
                  <b-input
                    v-model="name"
                    autocomplete="name"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider rules="required" name="lname" v-slot="{ errors, valid }">
                <b-field
                  label="Apellido*"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                  class="field-style">
                  <b-input
                    v-model="lastname"
                    autocomplete="lname"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider rules="required" name="birthday" v-slot="{ errors, valid }">
                <b-field
                  label="Fecha de nacimiento*"
                  :message="errors"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  class="field-style">
                  <b-datepicker
                    v-model="birthday"
                    locale="es-MX"
                    :max-date="maxDate"
                    editable>
                  </b-datepicker>
                </b-field>
              </ValidationProvider>
              <ValidationProvider rules="required|email" name="email" v-slot="{ errors, valid }">
                <b-field
                  label="Correo electrónico*"
                  class="field-style"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  :message="errors"
                >
                  <b-input
                    v-model="email"
                    type="email"
                    >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <ValidationProvider rules="required|max:10|min:10" name="teléfono" v-slot="{ errors, valid }">
                <b-field
                  label="Celular*"
                  :message="errors"
                  :type="{ 'is-danger': errors[0], 'is-success': valid }"
                  class="field-style"
                >
                  <b-input
                    v-model="phone"
                    type="number"
                    autocomplete="tel"
                    maxlength="10"
                  >
                  </b-input>
                </b-field>
              </ValidationProvider>
              <div class="has-text-centered" style="padding-top: 36px;">
                <b-button rounded class="register-button">
                  Registrarse
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: 'registro',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data(){
    const today = new Date()

    return {
      showForm: false,
      maxDate: new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()),
      email: '',
      name: '',
      lastname: '',
      birthday: null,
      phone: '',
    };
  },
  methods:{
  }
}
</script>
<style lang="scss" scoped>
  .registro{
    height: 100vh;
  }
  .title-1{
    font-size: 125px;
    padding-top: 50px;
    color: white;
    line-height: 125px;
    @media screen and (max-width: 1407px) {
      font-size: 100px;
      line-height: 100px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 90px;
      line-height: 90px;
    }
  }
  .title-2{
    font-size: 90px;
    color: black;
    line-height: 100px;
    @media screen and (max-width: 1407px) {
      font-size: 65px;
      line-height: 75px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 55px;
      line-height: 65px;
    }
  }.title-3{
    font-size: 100px;
    color: black;
    line-height: 100px;
    @media screen and (max-width: 1407px) {
      font-size: 75px;
      line-height: 75px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 55px;
      line-height: 65px;
    }
  }
  .img-blackwhite{
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .info{
    padding-right: 7%;
  }
  .clip {
    margin-top: -17%;
    clip-path: polygon(0 19%, 100% 0%, 100% 81%, 0% 100%);
  }
  .column-imgs{
    background: black;
    padding: 0;
  }
  .column-info{
    padding: 0;
    background-image: linear-gradient(45deg, #7f7efd, #ca06fa);
    @media screen and (min-width: 769px) {
      min-height: 100vh;
    }
  }
  .info-block{
    padding-top: 20px;
    font-size: 20px;
    @media screen and (max-width: 1407px) {
      padding-top: 10px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 18px;
    }
    .info-block-title{
      color:white;
    }
    .info-block-text{
      color:black;
    }
    .button{
      margin-bottom: 80px;
      background-color: #46aaff;
      border-color: #46aaff;
      color: white;
      text-transform: uppercase;
      font-size: 18px;
      font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
      padding: 5px 36px 0;
      @media screen and (max-width: 1407px) {
        padding: 4px 36px 0;
        font-size: 16px;
      }
    }
  }
  .clip-section{
    // clip-path: polygon(0 0%, 100% 0%, 100% 70%, 0% 100%);
    // height: 1321px;
    margin: 0;
  }
  .registro{
    background: black;
    // min-height: 1321px;
  }
  .tm-puma{
    margin-right: 24px;
    padding-bottom: 24px;
    @media screen and (min-width: 769px) and (max-width: 1023px) {
      margin-top: 24px;
    }
    @media screen and (min-width: 1200px) {
      margin-top: -24px;
    }
  }
  .form-styles{
    padding-left: 7%;
    padding-bottom: 48px;
    padding-top: 48px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    .label{
      color: black !important;
    }
    .field-style{
      padding-top: 12px;
    }
  }
  .register-button{
    background-color: #c624f1;
    border-color: #c624f1;
    color: white;
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    padding: 5px 36px 0;
  }
</style>
