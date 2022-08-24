<template>
  <div class="gallery">
    <div class="columns" style="padding-top: 40px; padding-bottom: 40px; margin: 0;">
      <div class="column gotica-italic title-venues">
        <div class="title-venues2">
          Galería
        </div>
        <div>
          De fotos
        </div>
      </div>
      <div class="column">
        <div class="title-image">
          <b-image
            responsive
            src="/assets/img/logoTeamFaster.png"
            ratio="1by1"
          ></b-image>
        </div>
      </div>
    </div>
    <div class="gallery-container">
      <template>
        <div class="app-container">
          <div id="lightgallery">
            <a
              v-for="(src, idx) in items"
              :key="idx"
              className="gallery-item"
              :data-src="src"
              data-tweet-text="Team Faster"
            >
              <img class="img-responsive" :src="src" loading="lazy"/>
            </a>
          </div>
        </div>
      </template>
    </div>

    <Footer></Footer>

  </div>
</template>

<script>
import $ from "jquery";
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-share.css'
import 'lightgallery/css/lg-zoom.css'
import lightGallery from 'lightgallery/lightgallery.min.js'
import lgShare from 'lightgallery/plugins/share/lg-share.min.js'
import lgZoom from 'lightgallery/plugins/zoom/lg-zoom.min.js'
import 'justifiedGallery/dist/css/justifiedGallery.css'
import 'justifiedGallery/dist/js/jquery.justifiedGallery.js'
import Footer from '../Components/Footer.vue';

export default {
  name: 'galeria',
  components: {
      Footer
  },
  data() {
      return {
        items: [
            '/assets/xochipilli/_MG_6388.jpg',
            '/assets/xochipilli/_MG_6390.jpg',
            '/assets/xochipilli/_MG_6402.jpg',
            '/assets/xochipilli/_MG_6409.jpg',
            '/assets/xochipilli/_MG_6419.jpg',
            '/assets/xochipilli/_MG_6432.jpg',
            '/assets/xochipilli/_MG_6436.jpg',
            '/assets/xochipilli/_MG_6457.jpg',
            '/assets/xochipilli/_MG_6468.jpg',
            '/assets/xochipilli/_MG_6477.jpg',
            '/assets/xochipilli/_MG_6481.jpg',
            '/assets/xochipilli/_MG_6499.jpg',
            '/assets/xochipilli/_MG_6510.jpg',
            '/assets/xochipilli/_MG_6526.jpg',
            '/assets/xochipilli/_MG_6545.jpg',
            '/assets/xochipilli/_MG_6550.jpg',
            '/assets/xochipilli/_MG_6574.jpg',
            '/assets/xochipilli/_MG_6582.jpg',
            '/assets/xochipilli/_MG_6591.jpg',
            '/assets/xochipilli/_MG_6603.jpg',
            '/assets/xochipilli/_MG_6605.jpg',
            '/assets/xochipilli/_MG_6628.jpg',
            '/assets/xochipilli/_MG_6633.jpg',
            '/assets/xochipilli/_MG_6666.jpg',
            '/assets/xochipilli/_MG_6701.jpg',
            '/assets/xochipilli/_MG_6715.jpg',
            '/assets/xochipilli/_MG_6732.jpg',
            '/assets/xochipilli/_MG_6765.jpg',
            '/assets/xochipilli/_MG_6770.jpg',
            '/assets/xochipilli/_MG_6786.jpg',
            '/assets/xochipilli/_MG_6795.jpg',
            '/assets/xochipilli/_MG_6796.jpg',
            '/assets/xochipilli/_MG_6800.jpg',
            '/assets/xochipilli/_MG_6801.jpg',
            '/assets/xochipilli/_MG_6810.jpg',
            '/assets/xochipilli/_MG_6811.jpg',
            '/assets/xochipilli/_MG_6836.jpg',
            '/assets/xochipilli/_MG_6839.jpg',
            '/assets/xochipilli/_MG_6849.jpg',
            '/assets/xochipilli/_MG_6854.jpg',
            '/assets/xochipilli/_MG_6865.jpg',
            '/assets/xochipilli/_MG_6871.jpg',
            '/assets/xochipilli/_MG_6873.jpg',
            '/assets/xochipilli/_MG_6881.jpg',
            '/assets/xochipilli/_MG_6886.jpg',
            '/assets/xochipilli/_MG_6892.jpg',
            '/assets/xochipilli/_MG_6896.jpg',
            '/assets/xochipilli/_MG_6899.jpg',
            '/assets/xochipilli/_MG_6900.jpg',
            '/assets/xochipilli/_MG_6904.jpg',
            '/assets/xochipilli/_MG_6910.jpg',
            '/assets/xochipilli/_MG_6916.jpg',
            '/assets/xochipilli/_MG_6918.jpg',
            '/assets/xochipilli/_MG_6922.jpg',
            '/assets/xochipilli/_MG_6927.jpg',
            '/assets/xochipilli/_MG_6938.jpg',
            '/assets/xochipilli/_MG_6950.jpg',
            '/assets/xochipilli/_MG_6953.jpg',
            '/assets/xochipilli/_MG_6970.jpg',
            '/assets/xochipilli/_MG_6980.jpg',
            '/assets/xochipilli/_MG_7006.jpg',
            '/assets/xochipilli/_MG_7013.jpg',
            '/assets/xochipilli/_MG_7020.jpg',
            '/assets/xochipilli/_MG_7031.jpg',
            '/assets/xochipilli/_MG_7057.jpg',
            '/assets/xochipilli/_MG_7079.jpg',
            '/assets/xochipilli/_MG_7089.jpg',
            '/assets/xochipilli/_MG_7101.jpg',
        ]
      };
    },
    mounted() {
      window.scrollTo(0, 0)
      $("#lightgallery")
        .justifiedGallery({
          captions: false,
          rowHeight: 300,
          margins: 5
        })
        .on("jg.complete", function () {
          lightGallery(
            document.getElementById("lightgallery"),
            {
              autoplayFirstVideo: false,
              plugins: [lgShare, lgZoom],
              pager: false,
              galleryId: "nature",
              mobileSettings: {
                controls: false,
                showCloseIcon: false,
                download: false,
                rotate: false
              }
            }
          );
        });

    },
    methods: {
      show() {
        this.$viewerApi({
          images: this.images,
        })
      },
      loaded(e){
        console.log('loaded',e);
        this.showElement(this.$refs[e]);
      },
      showElement(el){
          this.gsap.from(
            el,
            { autoAlpha: 0, scale:0.2, duration: 0.5, ease: "Power2.easeOut"}
          );
      },
    },
}
</script>
<style lang="scss" scoped>
  .gallery-container{
    margin: 0 40px;
  }
  .gallery{
    background: black;
    min-height: 100vh;
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
</style>