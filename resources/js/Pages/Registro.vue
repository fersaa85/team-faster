<template>
  <div class="registro">
    <div class="columns clip-section">
      <div class="column has-text-right column-info is-hidden-tablet">
        <div>
          <RegisterInfo
            :name="info.name"
            :fecha="info.fecha"
            :lugar="info.lugar"
            :tipo="info.tipo"
            :coach="info.coach"
            :photo="info.photo"
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
              :src="'/assets/img/' + info.photo"
              ratio="14by10"
              @load="load1"
            ></b-image>
          </div>
          <div class="clip" ref="img2">
            <a :href="info.google_maps" target="_blank">
              <b-image
                      responsive
                      :src="'/assets/img/'+ info.map"
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
            :name="info.name"
            :fecha="info.fecha"
            :lugar="info.lugar"
            :tipo="info.tipo"
            :coach="info.coach"
            :photo="info.photo"
            :map="info.map"
            :couches="info.couches"
            :available="info.available"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import RegisterInfo from '../Components/RegisterInfo.vue';
  export default {
    name: 'registro',
    components: {
      RegisterInfo
    },
    data(){
      return {
        info:{
          name: '',
          fecha: '',
          lugar: '',
          tipo: '',
          coach: '',
          photo: '',
          map: '',
          google_maps: '',
          available:true
        }
      };
    },
    mounted() {
       window.scrollTo(0, 0);
       this.setElement(this.$refs.img1);
       this.setElement(this.$refs.img2);
         axios
             .get('/api/workout/'+this.$route.params.slug)
             .then(({ data: { data } }) => {
                 this.info = Object.assign({}, {
                     name: data.venue.name,
                     fecha: data.date_start,
                     couches: data.couches ? JSON.parse(data.couches) : [],
                     lugar: data.venue.address,
                     tipo:  data.description,
                     coach:  data.coatch.name,
                     photo: data.venue.image,
                     map: data.venue.image_map,
                     google_maps: data.venue.google_maps,
                     available: true
                 });

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
    height: 100vh;
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
    background-image: linear-gradient(45deg, #6d6e79, #ebebed);
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
</style>
