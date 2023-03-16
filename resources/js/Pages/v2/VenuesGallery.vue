<template>
  <div class="gallery">
    <div class="columns container-title">
      <div class="column"></div>
      <div class="column puma-bold text-title">
        <div class="text-title1">Galería</div>
        <div class="text-title2">De fotos</div>
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

    <div class="columns is-multiline">
      <template v-if="venues.length">
        <div v-for="(venue, key) in venues" :key="key" class="column is-4" :class="`venue${key}`"  style="position:relative;">
          <div>
            <b-image
                    responsive
                    :src="`${venue.image}`"
                    ratio="1by1"
            ></b-image>
            <div class="columns mt-2">
              <template v-if="venue.workout">
                <!-- <div class="column is-3">
                  <h3 class="color-white date">
                  </h3>
                </div> -->
                <div class="column color-white" style="text-align: right">
                  <div class="text-photo-title venue-active">{{ venue.name }}</div>
                  <div class="contain-register-button">
                    <b-button rounded class="register-button mt-2"  :disabled="venue.gallery == 0"  :data-id="venue.id" @click="handleGoTo(venue.workout_id)">
                      Ver Galeria
                    </b-button>
                  </div>
                </div>
              </template>
            </div>
          </div>

        </div>
      </template>
      <template v-else>
        <div class="column empty">
        </div>
        <div class="column empty">
        </div>
        <div class="column empty">
        </div>
      </template>
    </div>


    <Footer class="footer-style"></Footer>
    <div class="netw-style ">
      <SocialNetwork></SocialNetwork>
    </div>
  </div>
</template>


<script>
    import Footer from '@/Components/Footer.vue';
    import SocialNetwork from '@/Components/SocialNetwork.vue';
export default {
  name: 'venues',
    components: {
        Footer, SocialNetwork
    },
    data() {
        return {
            venues: []
        };
    },
    mounted() {
      console.log( "v=2.3.0" );
      window.scrollTo(0, 0);


        axios
            .get('api/galeries')
            .then(({ data }) => {
                this.venues = [].concat(data.data);
            });
    },
    methods: {
        handleGoTo(id){
            this.$router.push('/galeria/'+id);
        },
        setElement(el){
            this.gsap.to(
                el,
                { autoAlpha: 0, scale:0.8, duration: 0}
            );
        },
        showElement(el, delay){
            this.gsap.to(
                el,
                { autoAlpha: 1, scale:1, duration: 3.5, delay:delay }
            );
        },

        handleFormatDay(date){
            var datetime = date.split(' ');
            let splitDate = datetime[0].split('-');
            console.log(splitDate[2]);
            return splitDate[2];
        },
        handleFormatMonth(date){
            var datetime = date.split(' ');
            let splitDate = datetime[0].split('-');

            let months = {
                '01': 'ene', '02': 'feb', '03': 'mar', '04': 'abr', '05': 'may', '06': 'jun', '07': 'jul', '08': 'ago', '09': 'sep', '10': 'oct', '11': 'nov', '12': 'dic'
            };
            return months[splitDate[1]];
        }

    }
}
</script>

<style lang="scss" scoped>
    .footer-style{
      bottom: 0;
    }
    .venue-active{
      color: #ffffff;
    }
  .gallery{
    background: url(/assets/img/fondo-galeria-web-puma.jpg);
    background-size: cover;
    min-height: 100vh;
    padding-top: 244px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      padding-top: 144px;
    }
  }
  .gallery-container{
    margin: 0 40px;
  }

  .title-venues{
    font-size: 100px;
    color: white;
    line-height: 90px;
    text-align: right;
    @media screen and (max-width: 768px) {
      font-size: 90px;
      line-height: 80px;
      text-align: center;
    }
  }
  .title-venues2{
    font-size: 125px;
    @media screen and (max-width: 768px) {
      font-size: 115px;
    }
  }
  .title-image{
    width: 158px;
    @media screen and (max-width: 768px) {
      text-align: right;
      margin-left: auto;
      margin-right: auto;
      width: 35%;
    }
    @media screen and (min-width: 769px) {
      margin-left: 48px;
      padding-top: 14px;
    }
  }
  .footer-styles{
    width: 100%;
    margin: 0;
    padding: 96px 20px 48px;
    background: linear-gradient(transparent, 35%, #110315);
    opacity: 1;
    .footer-1{
      text-align: left;
      @media screen and (max-width: 768px) {
        text-align:center;
      }
    }
    .footer-2{
      text-align: right;
      @media screen and (max-width: 768px) {
        margin-top: 20px;
        text-align:center;
      }
    }
  }
  .text-title{
    text-align: right;
    text-transform: uppercase;
    color: white;
    line-height: 61px;
    margin-right: -10px;
    @media screen and (max-width: 768px) {
      text-align:center;
      margin: auto;
      line-height: 61px;
    }
  }
  .text-title1{
    font-size:66px;
    @media screen and (max-width: 768px) {
      font-size:45px;
    }
  }
  .text-title2{
    font-size:50px;
    @media screen and (max-width: 768px) {
      font-size:40px;
    }
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
    @media screen and (max-width: 768px) {
      width: 100px;
      height: 12px;
    }
  }
  .logo-style{
    padding-top: 7px;
    margin-left: -15px;
    @media screen and (max-width: 768px) {
      width:60%;
      margin-left: 0;
      margin: auto;
    }
  }
  .soon-style{
    width: 30%;
    margin: -23px auto 140px;
    @media screen and (max-width: 768px) {
      width:80%;
      margin-left: 0;
      margin: -40px auto 140px;
    }
  }
  .netw-style{
    width: 65px;
    position: absolute;
    top: 400px;
    @media screen and (max-width: 768px) {
      display: none;
      width: 60px;
      top: 530px;
    }
    .socialnetwork{
      width: 60px;
    }
  }
</style>