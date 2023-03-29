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
    <div class="gallery-container">
        <template v-if="this.$route.params.workoutId == 20">
            <div class="app-container">
              <div id="lightgallery">
                <a
                  v-for="(src, idx) in galery"
                  :key="idx"
                  className="gallery-item"
                  :data-src="`https://trainpuma.mx/${src}`"
                  data-tweet-text="Train Puma"
                >
                  <img class="img-responsive" :src="`https://trainpuma.mx/${src}`" loading="lazy"/>
                </a>
              </div>
            </div>
        </template>
        <template v-if="this.$route.params.workoutId == 12">
            <div class="app-container">
                <div id="lightgallery">
                    <a
                            v-for="(src, idx) in mazatlan"
                            :key="idx"
                            className="gallery-item"
                            :data-src="`https://trainpuma.mx/${src}`"
                            data-tweet-text="Train Puma"
                    >
                        <img class="img-responsive" :src="`https://trainpuma.mx/${src}`" loading="lazy"/>
                    </a>
                </div>
            </div>
        </template>
        <!--
      <template v-else>
            <div class="soon-style">
                <b-image
                responsive
                src="/assets/img/soon.png"
                ratio="1051by145"
                ></b-image>
            </div>
        </template>
        -->
    </div>
    <Footer class="footer-style"></Footer>
    <div class="netw-style ">
      <SocialNetwork></SocialNetwork>
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
import Footer from '@/Components/Footer.vue';
import SocialNetwork from '@/Components/SocialNetwork.vue';

export default {
  name: 'galeria',
  components: {
      Footer, SocialNetwork
  },
  data() {
      return {
          galery: [
              'gallery/la_mexicana/IMG_5882.JPG',
              'gallery/la_mexicana/IMG_5887.JPG',
              'gallery/la_mexicana/IMG_5889.JPG',
              'gallery/la_mexicana/IMG_5892.JPG',
              'gallery/la_mexicana/IMG_5896.JPG',
              'gallery/la_mexicana/IMG_5902.JPG',
              'gallery/la_mexicana/IMG_5906.JPG',
              'gallery/la_mexicana/IMG_5911.JPG',
              'gallery/la_mexicana/IMG_5919.JPG',
              'gallery/la_mexicana/IMG_5926.JPG',
              'gallery/la_mexicana/IMG_5928.JPG',
              'gallery/la_mexicana/IMG_5929.JPG',
              'gallery/la_mexicana/IMG_5931.JPG',
              'gallery/la_mexicana/IMG_5935.JPG',
              'gallery/la_mexicana/IMG_5939.JPG',
              'gallery/la_mexicana/IMG_5943.JPG',
              'gallery/la_mexicana/IMG_5946.JPG',
              'gallery/la_mexicana/IMG_5947.JPG',
              'gallery/la_mexicana/IMG_5949.JPG',

              'gallery/la_mexicana/IMG_5952.JPG',
              'gallery/la_mexicana/IMG_5955.JPG',
              'gallery/la_mexicana/IMG_5965.JPG',
              'gallery/la_mexicana/IMG_5971.JPG',
              'gallery/la_mexicana/IMG_5972.JPG',
              'gallery/la_mexicana/IMG_5977.JPG',
              'gallery/la_mexicana/IMG_5981.JPG',
              'gallery/la_mexicana/IMG_5984.JPG',
              'gallery/la_mexicana/IMG_5986.JPG',
              'gallery/la_mexicana/IMG_5993.JPG',
              'gallery/la_mexicana/IMG_5996.JPG',
              'gallery/la_mexicana/IMG_6000.JPG',
              'gallery/la_mexicana/IMG_6004.JPG',
              'gallery/la_mexicana/IMG_6007.JPG',
              'gallery/la_mexicana/IMG_6010.JPG',
              'gallery/la_mexicana/IMG_6016.JPG',
              'gallery/la_mexicana/IMG_6018.JPG',
              'gallery/la_mexicana/IMG_6024.JPG',
              'gallery/la_mexicana/IMG_6026.JPG',

              'gallery/la_mexicana/IMG_6028.JPG',
              'gallery/la_mexicana/IMG_6031.JPG',
              'gallery/la_mexicana/IMG_6034.JPG',
              'gallery/la_mexicana/IMG_6035.JPG',
              'gallery/la_mexicana/IMG_6036.JPG',
              'gallery/la_mexicana/IMG_6038.JPG',
              'gallery/la_mexicana/IMG_6040.JPG',
              'gallery/la_mexicana/IMG_6046.JPG',
              'gallery/la_mexicana/IMG_6047.JPG',
              'gallery/la_mexicana/IMG_6049.JPG',
              'gallery/la_mexicana/IMG_6051.JPG',
              'gallery/la_mexicana/IMG_6054.JPG',
              'gallery/la_mexicana/IMG_6055.JPG',
              'gallery/la_mexicana/IMG_6056.JPG',
              'gallery/la_mexicana/IMG_6057.JPG',
              'gallery/la_mexicana/IMG_6060.JPG',
              'gallery/la_mexicana/IMG_6067.JPG',
              'gallery/la_mexicana/IMG_6070.JPG',
              'gallery/la_mexicana/IMG_6071.JPG',

              'gallery/la_mexicana/IMG_6072.JPG',
              'gallery/la_mexicana/IMG_6075.JPG',
              'gallery/la_mexicana/IMG_6079.JPG',
              'gallery/la_mexicana/IMG_6082.JPG',
              'gallery/la_mexicana/IMG_6083.JPG',
              'gallery/la_mexicana/IMG_6084.JPG',
              'gallery/la_mexicana/IMG_6086.JPG',
              'gallery/la_mexicana/IMG_6087.JPG',
              'gallery/la_mexicana/IMG_6089.JPG',
              'gallery/la_mexicana/IMG_6092.JPG',
              'gallery/la_mexicana/IMG_6094.JPG',
              'gallery/la_mexicana/IMG_6095.JPG',
              'gallery/la_mexicana/IMG_6096.JPG',
              'gallery/la_mexicana/IMG_6097.JPG',
              'gallery/la_mexicana/IMG_6103.JPG',
              'gallery/la_mexicana/IMG_6105.JPG',
              'gallery/la_mexicana/IMG_6106.JPG',
              'gallery/la_mexicana/IMG_6111.JPG',

              'gallery/la_mexicana/IMG_6114.JPG',
              'gallery/la_mexicana/IMG_6118.JPG',
              'gallery/la_mexicana/IMG_6120.JPG',
              'gallery/la_mexicana/IMG_6122.JPG',
              'gallery/la_mexicana/IMG_6125.JPG',
              'gallery/la_mexicana/IMG_6128.JPG',
              'gallery/la_mexicana/IMG_6132.JPG',
              'gallery/la_mexicana/IMG_6133.JPG',
              'gallery/la_mexicana/IMG_6135.JPG',
              'gallery/la_mexicana/IMG_6136.JPG',
              'gallery/la_mexicana/IMG_6139.JPG',
              'gallery/la_mexicana/IMG_6140.JPG',
              'gallery/la_mexicana/IMG_6143.JPG',
              'gallery/la_mexicana/IMG_6145.JPG',
              'gallery/la_mexicana/IMG_6147.JPG',
              'gallery/la_mexicana/IMG_6151.JPG',
              'gallery/la_mexicana/IMG_6153.JPG',
              'gallery/la_mexicana/IMG_6156.JPG',
              'gallery/la_mexicana/IMG_6158.JPG',
              'gallery/la_mexicana/IMG_6162.JPG',
              'gallery/la_mexicana/IMG_6164.JPG',
              'gallery/la_mexicana/IMG_6167.JPG',
              'gallery/la_mexicana/IMG_6169.JPG',
              'gallery/la_mexicana/IMG_6171.JPG',


          ],

          mazatlan: [
              'gallery/mazatlan/IMG_0001.png',
              'gallery/mazatlan/IMG_0002.png',
              'gallery/mazatlan/IMG_0005.png',
              'gallery/mazatlan/IMG_0010.png',
              'gallery/mazatlan/IMG_0020.png',
              'gallery/mazatlan/IMG_0021.png',
              'gallery/mazatlan/IMG_0030.png',
              'gallery/mazatlan/IMG_0042.png',
              'gallery/mazatlan/IMG_0046.png',
              'gallery/mazatlan/IMG_0052.png',
              'gallery/mazatlan/IMG_0057.png',
              'gallery/mazatlan/IMG_0069.png',
              'gallery/mazatlan/IMG_0079.png',
              'gallery/mazatlan/IMG_0086.png',
              'gallery/mazatlan/IMG_9481.png',
              'gallery/mazatlan/IMG_9489.png',
              'gallery/mazatlan/IMG_9500.png',
              'gallery/mazatlan/IMG_9516.png',
              'gallery/mazatlan/IMG_9523.png',
              'gallery/mazatlan/IMG_9541.png',
              'gallery/mazatlan/IMG_9550.png',
              'gallery/mazatlan/IMG_9560.png',
              'gallery/mazatlan/IMG_9566.png',
              'gallery/mazatlan/IMG_9573.png',
              'gallery/mazatlan/IMG_9575.png',
              'gallery/mazatlan/IMG_9580.png',
              'gallery/mazatlan/IMG_9583.png',
              'gallery/mazatlan/IMG_9593.png',
              'gallery/mazatlan/IMG_9595.png',
              'gallery/mazatlan/IMG_9618.png',
              'gallery/mazatlan/IMG_9621.png',
              'gallery/mazatlan/IMG_9624.png',
              'gallery/mazatlan/IMG_9627.png',
              'gallery/mazatlan/IMG_9658.png',
              'gallery/mazatlan/IMG_9699.png',
              'gallery/mazatlan/IMG_9734.png',
              'gallery/mazatlan/IMG_9760.png',
              'gallery/mazatlan/IMG_9766.png',
              'gallery/mazatlan/IMG_9823.png',
              'gallery/mazatlan/IMG_9868.png',
              'gallery/mazatlan/IMG_9975.png',
              'gallery/mazatlan/IMG_9979.png',
              'gallery/mazatlan/IMG_9982.png',
              'gallery/mazatlan/IMG_9996.png',
          ]
      };
    },

    mounted() {
      console.log( "v=2.3.5" );
        /*
        axios
            .get('api/galeries/'+this.$route.params.workoutId)
            .then(({ data }) => {
                this.galery = [].concat(JSON.parse(data.data[0].name));
            });
            */


      window.scrollTo(0, 0);
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
              additionalShareOptions: [
                    {
                        // Selector for the anchor tag inside share list item
                        selector: ".lg-share-reddit",

                        // HTML to be appended to the share dropdown menu
                        dropdownHTML: `
<li class="lg-share-item-reddit">
  <a class="lg-share-reddit" target="_blank">
  <svg class="lg-reddit" version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <title>reddit</title>
  <path d="M8 20c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 20c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20.097 24.274c0.515-0.406 1.262-0.317 1.668 0.198s0.317 1.262-0.198 1.668c-1.434 1.13-3.619 1.86-5.567 1.86s-4.133-0.73-5.567-1.86c-0.515-0.406-0.604-1.153-0.198-1.668s1.153-0.604 1.668-0.198c0.826 0.651 2.46 1.351 4.097 1.351s3.271-0.7 4.097-1.351zM32 16c0-2.209-1.791-4-4-4-1.504 0-2.812 0.83-3.495 2.057-2.056-1.125-4.561-1.851-7.29-2.019l2.387-5.36 4.569 1.319c0.411 1.167 1.522 2.004 2.83 2.004 1.657 0 3-1.343 3-3s-1.343-3-3-3c-1.142 0-2.136 0.639-2.642 1.579l-5.091-1.47c-0.57-0.164-1.173 0.116-1.414 0.658l-3.243 7.282c-2.661 0.187-5.102 0.907-7.114 2.007-0.683-1.227-1.993-2.056-3.496-2.056-2.209 0-4 1.791-4 4 0 1.635 0.981 3.039 2.387 3.659-0.252 0.751-0.387 1.535-0.387 2.341 0 5.523 6.268 10 14 10s14-4.477 14-10c0-0.806-0.134-1.589-0.387-2.34 1.405-0.62 2.387-2.025 2.387-3.66zM27 5.875c0.621 0 1.125 0.504 1.125 1.125s-0.504 1.125-1.125 1.125-1.125-0.504-1.125-1.125 0.504-1.125 1.125-1.125zM2 16c0-1.103 0.897-2 2-2 0.797 0 1.487 0.469 1.808 1.145-1.045 0.793-1.911 1.707-2.552 2.711-0.735-0.296-1.256-1.016-1.256-1.856zM16 29.625c-6.42 0-11.625-3.414-11.625-7.625s5.205-7.625 11.625-7.625c6.42 0 11.625 3.414 11.625 7.625s-5.205 7.625-11.625 7.625zM28.744 17.856c-0.641-1.003-1.507-1.918-2.552-2.711 0.321-0.676 1.011-1.145 1.808-1.145 1.103 0 2 0.897 2 2 0 0.84-0.52 1.56-1.256 1.856z"></path></svg>
  <span class="lg-dropdown-text">Reddit</span>
  </a>
</li>`,
                        // Construct url
                        generateLink: (galleryItem) => {
                            const url = encodeURIComponent(window.location.href);

                            // The prop data-reddit-title is converted to redditTitle and added to the gallery item
                            const title = galleryItem.redditTitle;
                            const redditShareLink = `//reddit.com/submit?url=${url}&title=${title}`;
                            return redditShareLink;
                        }
                    }
              ],
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
.footer-style{
  bottom: 0;
}
  .gallery{
    background: url(/assets/img/fondo-galeria-web-puma.jpg);
    background-size: auto;
    min-height: 100vh;
    overflow: hidden;
    padding-top: 244px;
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