<template>
  <div class="form-styles">
    <div class="form-title puma-bold">
      Ingresa tus datos y reserva tu lugar
    </div>
    <ValidationProvider rules="required" name="name" v-slot="{ errors, valid }">
      <b-field
        label="Nombre(s)"
        :type="{ 'is-danger': errors[0], 'is-success': valid }"
        :message="errors"
        horizontal
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
        label="Apellidos"
        :type="{ 'is-danger': errors[0], 'is-success': valid }"
        :message="errors"
        horizontal
        class="field-style">
        <b-input
          v-model="lastname"
          autocomplete="lname"
        >
        </b-input>
      </b-field>
    </ValidationProvider>
    <ValidationProvider rules="required|max:3|min:2" name="teléfono" v-slot="{ errors, valid }">
      <b-field
        label="Edad"
        :message="errors"
        horizontal
        :type="{ 'is-danger': errors[0], 'is-success': valid }"
        class="field-style"
      >
        <b-input
          v-model="age"
          type="number"
          autocomplete="tel"
          maxlength="3"
        >
        </b-input>
      </b-field>
    </ValidationProvider>
    <ValidationProvider rules="required|email" name="email" v-slot="{ errors, valid }">
      <b-field
        label="Correo electrónico"
        class="field-style"
        horizontal
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
        label="Celular"
        :message="errors"
        horizontal
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
    <b-field
       label=""
       horizontal
       class="field-style"
        >
        <b-select
           v-model="size"
           placeholder="SELECCIONAR TALLA"
           expanded
        >
          <option
                  v-for="option in sizes"
                  :value="option.id"
                  :key="option.id">
            {{ option.label }}
          </option>
        </b-select>
    </b-field>
    <div class="has-text-centered" style="padding-top: 36px;">
      <vue-recaptcha
         id="recaptcha"
         class="recaptcha-container"
         sitekey="6LdDSI8kAAAAAD2YJ7RWK7qSc2qA6JA3gYchSQJ3"
         @verify="verifyMethod"
         @expired="expiredMethod"
         @render="renderMethod"
         @error="errorMethod"
      >
      </vue-recaptcha>
      <b-button rounded class="register-button" @click="handleSubmit" :disabled="disabled">
        Registrarse
      </b-button>
    </div>
  </div>
</template>

<script>
  import { ValidationObserver, ValidationProvider } from "vee-validate";
  import { VueRecaptcha } from 'vue-recaptcha';
  export default {
    name: 'registerForm',
    components: {
      ValidationObserver,
      ValidationProvider,
      VueRecaptcha
    },
    props: {
        venueId: {
            type: Number,
            required: true
        }
    },
    data(){

      return {
        age:'',
        email: '',
        name: '',
        lastname: '',
        phone: '',
        disabled: false,
        gRecaptchaResponse: null,
        sizes: [
            {"id":'S',"label": "Chico"},
            {"id":'M',"label": "Mediano"},
            {"id":'L',"label": "Grande"},
            {"id":'XL',"label": "Extra grande"}
        ],
        size: null
      };
    },
    mounted() {
          console.log("v=2.0.9");
    },
    methods:{
        handleSubmit(){
            axios
                .post('/api/auth/signup/'+this.venueId, {
                    "g-recaptcha-response": this.gRecaptchaResponse,
                    email: this.email,
                    name: this.name,
                    last_name: this.lastname,
                    phone: this.phone,
                    age: this.age,
                    size: this.size,
                    venue_id: this.venueId
            })
                .then(() => {
                  this.$emit('success', {
                      email: this.email,
                      name: this.name,
                      lastname: this.lastname
                  });
                  this.age='';
                  this.email= '';
                  this.name= '';
                  this.lastname= '';
                  this.phone= '';
                })
                .catch((error) => {
                    console.log(error.response);
                    this.$emit('errors', error.response);
                });
        },
        verifyMethod(e){
            this.disabled = false;
            this.gRecaptchaResponse=e;
            console.log('verifyMethod', e);
        },
        expiredMethod(e){
            this.gRecaptchaResponse=null;
            console.log('expiredMethod', e);
        },
        renderMethod(e){
            this.gRecaptchaResponse=null;
            console.log('renderMethod', e);
        },
        errorMethod(e){
            this.gRecaptchaResponse=null;
            console.log('errorMethod', e);
        }

    }
  }
</script>
<style lang="scss" scoped>
  .register-button{
    color: white;
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    text-transform: uppercase;
    padding: 3px 36px 0;
    margin-top: 26px;
    
    padding: 3px 36px 0;
    color: white;
    background-color: #b99571;
    width: fit-content;
    cursor: pointer;
    border: none;
    font-size: 19px !important;
    border-radius: 0;
  }
  .form-styles{
    padding-left: 7%;
    padding-right: 7%;
    padding-bottom: 48px;
    padding-top: 48px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    .field-style{
      padding-top: 12px;
      position: relative;
    }
  }
  .form-title{
    font-size: 18px;
    color: #b99571;
    text-align: left;
    text-transform: uppercase;
    padding-bottom: 12px;
    padding-top: 12px;
  }
</style>