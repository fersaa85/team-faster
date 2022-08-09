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
              <img class="img-responsive" :src="src" />
            </a>
          </div>
        </div>
      </template>
    </div>
    <div class="footer-styles">
      <div class="columns is-vcentered" style="margin: 0;">
        <div class="column tm-puma footer-1" >
          @2022 puma. Todos los derechos reservados
        </div>
        <div class="column tm-puma footer-2">

          <a href="https://www.facebook.com/PUMAMexico" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png"  width="30px"/></a>
          <a href="https://twitter.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png"  width="30px"/></a>
          <a href="https://www.instagram.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png"  width="30px"/></a>
          <a href="https://www.youtube.com/puma" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png"  width="30px"/></a>

        </div>
      </div>
    </div>
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

export default {
  name: 'galeria',
  data() {
      return {
        items: [
          "/assets/img/David.png",
          "/assets/img/FRANCHESCA-@franchescasb.jpg",
          "/assets/img/Homero.png",
          "/assets/img/Jorge.png",
          "/assets/img/MAFER-@maferarreolaa.jpg",
          "/assets/img/PABLO-@pablohutt.jpg",
          "/assets/img/RAUL-@raul_vicotria_.jpg",
          "/assets/img/vlopez.jpg",
          "/assets/gallery/22AW_RT_Essentials_Mens_Train-All-Day_7697_RGB.jpg",
          "/assets/gallery/22AW_RT_Essentials_Mens_Train-All-Day_7792_RGB.jpg",
          "/assets/gallery/22AW_RT_Essentials_Mens_Train-All-Day_7886_RGB.jpg",
          "/assets/gallery/22AW_RT_Essentials_Train-All-Day-Group_8024_RGB.jpg",
          "/assets/gallery/22AW_RT_Essentials_Womens_Train-All-Day_7608_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1474_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1769_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1832_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Castlerock-Mens_Q3_Model_1914_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2185_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2579_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2674_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deco-Glam-Wns_Q4_Model_2753_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deep-Olive-Mens_Q4_Model_3227_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_PWRFrame-TR-Deep-Olive-Mens_Q4_Model_3314_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_Q3-Group_0129_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_Q4-Group_3637_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_Q4-Group_3642_RGB.jpg",
          "/assets/gallery/22AW_RT_Puma-Fit_Q4-Group_3805_RGB.jpg",
          "/assets/gallery/22SS_RT_Essentials_Mens_PNA-Look-1_088_RGB.jpg",
          "/assets/gallery/22SS_RT_Essentials_Womens_PNA-Look-1_045_RGB.jpg",
          "/assets/gallery/22SS_RT_Model_PWRFrame-TR-Black-Cherry-Tomato_Q1_166_RGB.jpg",
          "/assets/gallery/22SS_RT_Model_PWRFrame-TR-Black-Cherry-Tomato_Q1_1460_RGB.jpg",
          "/assets/gallery/22SS_RT_Model_PWRFrame-TR-Black-Cherry-Tomato_Q1_1880_RGB.jpg",
          "/assets/gallery/22SS_RT_Sam-Kwant_Fuse-Puma-Black_Q2_4024_extended.jpg"
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