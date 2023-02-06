<template>
  <div>
    <b-modal
            v-model="isModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="true"
            aria-role="dialog"
            aria-label="Example Modal"
            close-button-aria-label="Close"
            :can-cancel="['escape']"
            aria-modal
        >
          <template #default="props">
              <SuccessModal :info="{name, fecha, lugar, tipo, coach, nameUser, mail}" @close="props.close"/>
          </template>
    </b-modal>
    <div class="gotica-italic info-margin">
     <br /><br /><br />
    </div>
    <div class="puma-bold" style="padding-top: 36px;">
      <div class="info-margin">
        <div class="columns">
          <div class="column">
            <div class="info-block">
              <p class="info-block-title">
                ¿Cuándo?
              </p>
              <p class="info-block-text">
                {{ fecha }}
              </p>
            </div>
          </div>

          <div class="column">
            <div class="info-block">
              <p class="info-block-title">
                Dónde?
              </p>
              <p class="info-block-text">
                {{ lugar }}
              </p>
            </div>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="info-block">
              <p class="info-block-title">
                Experiencia workout
              </p>
              <p class="info-block-text">
                {{ tipo ? tipo : '-' }}
              </p>
            </div>
          </div>

            <div class="column">
              <div class="info-block">
                <p class="info-block-title">
                  Coach participante
                </p>
                <p class="info-block-text">
                  {{ coach.name }}<br />
                  <a :href="coach.instagram" target="_blank" class="puma-bold photo-info2 color-black">
                      {{ coach.description }}
                  </a>
                </p>
              </div>
            </div>

        </div>

      </div>

      <template v-if="limit">
        <div class="columns">
          <div class="column is-2" ></div>
          <div class="column gotica-italic">
            <div class="info-block">
              <h3 class="info-block-title" style="font-size: 40px; text-align: center;">¡Gracias por querer ser parte de nuestra familia teamfaster!</h3>

              <div class="join-text-r2 puma-bold"style="color: #000000; text-align: center;">
                El evento se encuentra lleno, espera próximamente nuevos eventos.
              </div>
            </div>
          </div>
          <div class="column is-2" ></div>
        </div>
      </template>
      <template v-else>
        <div class="is-hidden-mobile">
          <!-- <div v-if="success" class="alert alert-success" role="alert">
            <b>Gracias por registrarse al evento.¡Te esperamos!</b>
          </div>
          <div v-if="errors" class="alert alert-danger" role="alert">
              <b>{{ errorsMsg }}</b>
          </div> -->
          <RegisterForm
                  :venue-id="venueId"
                  @success="handleSuccess"
                  @errors="handleErrors"
          />
        </div>
        <div class="register-form-tablet is-hidden-tablet">
          <RegisterForm
                  :venue-id="venueId"
                  @success="handleSuccess"
                  @errors="handleErrors"
          />
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import RegisterForm from '@/Components/RegisterForm.vue';
import SuccessModal from '@/Components/Success.vue';

  export default {
    name: 'registerInfo',
    components: {
      RegisterForm,
      SuccessModal
    },
    props: {
      venueId: {
          type: Number,
          required: true
      },
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
        type: Object,
        required: true,
        default: () => ({})
      },
      available: {
        type: Boolean,
        required: true
      },
      couches: {
          type: Array,
          default: () => []
      },
      limit: {
          type: Boolean,
          required: true
      },
    },
    data(){
      return {
        showForm: false,
        success: false,
        errors: false,
        errorsMsg: 'errorMsg',
        isModalActive: false,
        nameUser:'',
        mail:''
      };
    },
    mounted(){
      this.setForm();
      this.setText1();
      this.setText2();
      this.setText3();
      setTimeout(() => {
        this.gsap.to(
          ".title-1",
          {autoAlpha: 1, duration: 0.8, x:0, ease: "sine.out(1, 0.3)" }
        );
        this.gsap.to(
          ".title-2",
          {autoAlpha: 1, duration: 0.8, x:0, ease: "sine.out(1, 0.3)"}
        );
        this.gsap.to(
          ".title-3",
          {autoAlpha: 1, duration: 0.8, ease: "power4.in"  }
        );
      }, 50);
    },
    methods:{
      setForm(){
        this.gsap.to(
          ".register-form",
          {autoAlpha: 0, duration: 0, y:500, display:"none" }
        );
      },
      setText1(){
        this.gsap.to(
          ".title-1",
          {autoAlpha: 0, duration: 0, x:200}
        );
      },
      setText2(){
        this.gsap.to(
          ".title-2",
          {autoAlpha: 0, duration: 0, x:-200 }
        );
      },
      setText3(){
        this.gsap.to(
          ".title-3",
          {autoAlpha: 0, duration: 0}
        );
      },
      showFormAction(){
        this.showForm = true;
          this.gsap.to(
            ".register-form",
            {autoAlpha: 1, duration: 1, y:0, ease: "sine.out(1, 0.3)", display:"block" }
          );
      },
      handleSuccess(e){
        this.nameUser= e.name + ' ' + e.lastname;
        this.mail = e.email;
        this.success = true;
        this.errors = false;
        this.isModalActive = true;
      },
      handleErrors({ data }){
           Object.values( data.errors ).forEach(function callback(currentValue, index){
               this.errorsMsg = currentValue[0];
           }, this);
          this.success = false;
          this.errors = true;
          this.$buefy.toast.open({
            duration: 4000,
            message: this.errorsMsg,
            position: 'is-bottom',
            type: 'is-danger'
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .info-margin{
    padding-right: 7%;
  }
  .soldOut{
    color: white;
    padding-left: 7%;
    margin-top: 40px;
    padding-bottom: 40px;
    font-size: 43px;
    @media screen and (max-width: 1407px) {
      font-size: 33px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 30px;
    }
  }
    .title-1{
    font-size: 125px;
    padding-top: 50px;
    color: #66676e;
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
  }
  .title-3{
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
    &.notAvailable{
      padding-top: 50px;
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
      @media screen and (max-width: 1407px) {
        padding-left: 7%;
      }
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
  .register-form, .register-form-tablet{
    background-color: black;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    padding-top: 125px;
    margin-top: 29px;
    min-height: 61vh;
  }

  .alert {
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    text-align: center;
  }

  .alert-success {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }

  .alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .color-black{
    font-weight: bold;
    color: #000000;
  }
</style>