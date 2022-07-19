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
        <div class="img-blackwhite">
          <b-image
            responsive
            :src="'/assets/img/' + info.photo"
            ratio="14by10"
          ></b-image>
        </div>
        <div class="clip">
          <a :href="info.google_maps" target="_blank">
            <b-image
                    responsive
                    :src="'/assets/img/'+ info.map"
                    ratio="15by13"
            ></b-image>
          </a>
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
        axios
            .get('api/workout')
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

                console.log( this.info);
            });
    },

    methods:{
    }
  }
</script>
<style lang="scss" scoped>
  .registro{
    height: 100vh;
  }
  .img-blackwhite{
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
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

</style>
