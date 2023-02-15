<template>
  <div class="registro">
    <!--
    <b-modal
            v-model="isErrors"
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
        <ErrorsModal @close="props.close"/>
      </template>
    </b-modal>
    -->
    <template v-if="isErrors">
      <div class="registro-empty">
        <div class="columns container-title">
          <div class="column"></div>
          <div class="column puma-bold text-title">
            <div class="text-title1">Registro</div>
          </div>
          <div class="column is-1">
            <div class="line-middle"></div>
          </div>
          <div class="column">
            <div class="logo-style" ref="logoInicio">
              <b-image
                      responsive
                      src="/assets/img/logo_train.png"
                      ratio="565by123"
              ></b-image>
            </div>
          </div>
          <div class="column"></div>
        </div>
        <div class="columns">
          <div class="column is-12">
            <h1 style="font-size: 35px;color: #ffffff;">Espera muy pronto nuestro proximo evento</h1>
          </div>
        </div>
      </div>


    </template>
    <template v-else>
      <div class="columns clip-section">
        <div class="column has-text-right column-info is-hidden-tablet">
          <div>
            <RegisterInfo
              :venue-id="venueId"
              :name="info.name"
              :fecha="info.fecha"
              :lugar="info.lugar"
              :tipo="info.tipo"
              :coach="info.coach"
              :photo="info.photo"
              :limit="info.limit"
              :map="info.map"
              :available="info.available"
            />
          </div>
        </div>
        <div class="column column-imgs">
          <div v-show="info && info.photo">
            <div class="img-blackwhite" ref="img1">
              <b-image
                responsive
                :src="info.photo"
                ratio="14by10"
                @load="load1"
              ></b-image>
            </div>
            <div class="clip" ref="img2">
              <a :href="info.google_maps" target="_blank">
                <b-image
                        responsive
                        :src="info.map"
                        ratio="15by13"
                        @load="load2"
                ></b-image>
              </a>
            </div>
          </div>
          <div v-show="!info || !info.photo" class="emptyPhoto">
          </div>
          <div class="tm-puma has-text-right">
            @2022 puma. Todos los derechos reservados
          </div>
        </div>
        <div class="column has-text-right column-info is-hidden-mobile">
          <div class="info">
            <RegisterInfo
              :venue-id="venueId"
              :name="info.name"
              :fecha="info.fecha"
              :lugar="info.lugar"
              :tipo="info.tipo"
              :coach="info.coach"
              :photo="info.photo"
              :map="info.map"
              :limit="info.limit"
              :couches="info.couches"
              :available="info.available"
            />
          </div>
        </div>
      </div>

    </template>
    <div class="netw-style ">
      <SocialNetwork></SocialNetwork>
    </div>
    <!-- <Footer class="footer-style"></Footer> -->

  </div>
</template>
<script>
import Footer from '@/Components/Footer.vue';
import RegisterInfo from '@/Components/RegisterInfo.vue';
import ErrorsModal from '@/Components/ErrorsModal.vue';
import SocialNetwork from '@/Components/SocialNetwork.vue';

export default {
    name: 'registro',
    components: {
      RegisterInfo,
      Footer,
      ErrorsModal,
      SocialNetwork
    },
    data(){
      return {
        isErrors: false,
        venueId: 0,
        info:{
          name: '',
          fecha: '',
          lugar: '',
          tipo: '',
          coach: {},
          photo: '',
          limit: false,
          map: '',
          google_maps: '',
          available:true
        }
      };
    },
    mounted() {
       console.log( "v=2.0.4" );
      let slug = this.$route.params.slug;

       window.scrollTo(0, 0);
       this.setElement(this.$refs.img1);
       this.setElement(this.$refs.img2);

       let endpoint = slug ? `/api/workout/${slug}` : `/api/workout`;
         axios
             .get(endpoint)
             .then(({ data: { data } }) => {
                 this.venueId = data.venue.id;
                 this.info = Object.assign({}, {
                     name: data.venue.name,
                     fecha: data.date_start,
                     couches: data.couches ? JSON.parse(data.couches) : [],
                     lugar: data.venue.address,
                     tipo:  data.description,
                     coach: data.coatch,
                     photo: data.venue.image,
                     limit: data.limit,
                     map: data.venue.image_map,
                     google_maps: data.venue.google_maps,
                     available: true
                 });

             }).catch( () => {
              this.isErrors = true;
         });
    },

    methods:{
      setElement(el){
            this.gsap.to(
                el,
                { autoAlpha: 0, duration: 0}
            );
        },
        showElement(el, delay){
            this.gsap.to(
                el,
                { autoAlpha: 1, duration: 0.5 }
            );
        },
        load1(){
          this.showElement(this.$refs.img1);
        },
        load2(){
          this.showElement(this.$refs.img2);
        }
    }
  }
</script>
<style lang="scss" scoped>
  .registro{
    min-height: 100vh;
  }
  .registro-empty{
    background: url(/assets/img/fondo-blog-puma.jpg);
    background-size: cover;
    overflow-x: hidden;
    min-height: 100vh;
    padding-top: 244px;
  }
  .img-blackwhite{
    -webkit-filter: grayscale(60%);
    filter: grayscale(60%);
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
    background: url(/assets/img/Fondo-Registro-form.jpg);
    @media screen and (min-width: 769px) {
      min-height: 100vh;
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
  .emptyPhoto{
    height: 50vw;
  }
  .footer-style{
    position: relative;
    width: 100%;
    background-color: transparent;
    bottom: 165px;
  }


  .text-title{
    text-align: right;
    text-transform: uppercase;
    color: white;
    line-height: 121px;
    margin-right: -10px;
  }
  .text-title1{
    font-size:90px;
  }
  .container-title{
    margin-bottom: 95px;
  }
  .line-middle{
    height: 100px;
    width: 12px;
    background-color: #b99571;
    margin: auto;
    margin-top: 1px;
    border-radius: 7px;
  }
  .logo-style{
    padding-top: 7px;
    margin-left: -15px;
  }
  .soon-style{
    width: 30%;
    margin: -23px auto 0;
  }
  .netw-style{
    width: 65px;
    position: absolute;
    top: 337px;
    @media screen and (max-width: 768px) {
      width: 60px;
      top: 1778px;
    }
    .socialnetwork{
      width: 60px;
    }
  }
</style>
