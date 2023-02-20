<template>
  <div class="coaches">

    <div class="venues_photos">
      <div class="columns container-title">
        <div class="column"></div>
        <div class="column puma-bold text-title">
          <div class="text-title1">Nuestros</div>
          <div class="text-title2">Coaches</div>
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
        <template v-if="coaches.length">
          <div v-for="(item, index) in coaches"
               class="column is-clickable img-container coach-1 is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd"
               :class="`coach${index}`"
               style="position:relative; padding:0">
              <a :href="item.instagram" target="_blank">
                <b-image
                        responsive
                        :src="item.image"
                        ratio="1by1"
                        class="img-blackwhite"
                ></b-image>
                <div class="text-photo-title venue-active">
                  <div class="photo-info">
                  <span class="photo-info1">
                    {{ item.name }}
                  </span>
                    <br>
                    <span class="puma-bold photo-info2">
                    {{ item.decription }}
                  </span>
                  </div>
                </div>
              </a>
            </div>

        </template>
      </div>
    </div>

    <Footer></Footer>
    <div class="netw-style ">
      <SocialNetwork></SocialNetwork>
    </div>
  </div>
</template>


<script>
import Footer from '@/Components/Footer.vue';
import SocialNetwork from '@/Components/SocialNetwork.vue';

export default {
  name: 'coaches',
  components: {
    Footer, SocialNetwork
  },
  data() {
    return {
        coaches: [],
    }
  },
  mounted(){
    console.log( "v=2.1.6" );
    window.scrollTo(0, 0);
    axios
        .get('api/coaches')
        .then(({ data }) => {
              console.log( data );
              this.coaches = [].concat(data.data);
        }).finally(() => {
        /*let tl = this.gsap.timeline(); //create the timeline */

        for (var i = 0; i < this.coaches.length; i++) {
            this.gsap.to(`.coach${i}`,  this.initGsap()); //start sequencing
        }

        for (var i = 0; i < this.coaches.length; i++) {
            this.gsap.to(`.coach${i}`, this.configGsap(i*0.8));
        }

        /*
        tl.to(".coach1", this.configGsap(1*0.8)) //start sequencing
          .to(".coach2", this.configGsap(2*0.8))
          .to(".coach3", this.configGsap(3*0.8));
        */

    });
  },
  methods:{
      initGsap(){
        return  { autoAlpha: 0, scale:0.5, duration: 0};
      },
      configGsap(delay){
        return { autoAlpha: 1, scale:1, duration: 2.5, delay:delay, ease: "elastic.out(1, 0.2)"}
      }
  }

}
</script>
<style lang="scss" scoped>
  .coaches{
    background: url(/assets/img/fondo-coaches-web-puma.jpg);
    background-size: cover;
    overflow-x: hidden;
    min-height: 100vh;
  }
  .venues_photos{
    margin: 0 160px; 
    padding: 20px;
    padding-top: 244px;
    @media screen and (max-width: 768px) {
      margin: 0 40px;
      padding-top: 144px;
    }
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
  .title-venues2{
    font-size: 125px;
    @media screen and (max-width: 768px) {
      font-size: 115px;
    }
  }
  .footer-styles{
    padding: 96px 24px 48px;
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
  .text-photo-title{
    position: absolute;
    color: white;
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    width: 100%;
    left: 0;
    top: 0;
    text-transform: uppercase;
    font-size: 18px;
    // visibility: hidden;
    // opacity: 0;
    height: 100%;
    text-align: left;
    background: linear-gradient(transparent, 90%, #000000);
    .photo-info{
      margin: auto;
      position: absolute;
      bottom: 0;
      padding-bottom: 14px;
      padding-left: 14px;
      padding-right: 14px;
    }
    .photo-info1{
      font-size: 38px;
      line-height: 100%;
      @media screen and (max-width: 1450px) {
        font-size: 35px;
      }
      @media screen and (max-width: 1350px) {
        font-size: 33px;
      }
      @media screen and (max-width: 1250px) {
        font-size: 30px;
      }
      @media screen and (max-width: 1150px) {
        font-size: 30px;
      }
      @media screen and (max-width: 1100px) {
        font-size: 25px;
      }
    }
    .photo-info2{
      font-size: 20px;
      text-transform: lowercase;
    }
  }
  .img-container:hover .text-photo-title{
    visibility: visible;
    opacity: 1;
  }
  .img-blackwhite{
    -webkit-filter: grayscale(60%);
    filter: grayscale(100%);
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
      width:90%;
      margin-left: 0;
      margin: auto;
    }
  }
  .netw-style{
    width: 65px;
    position: absolute;
    top: 400px;
    @media screen and (max-width: 768px) {
      width: 60px;
      top: 500px;
    }
    .socialnetwork{
      width: 60px;
    }
  }
</style>