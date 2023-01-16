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
      <template v-if="this.$route.params.venueId == 1">
        <div class="app-container">
          <div id="lightgallery">
            <a
              v-for="(src, idx) in xochipilli"
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

      <template v-if="this.$route.params.venueId == 6">
        <div class="app-container">
          <div id="lightgallery">
            <a
                    v-for="(src, idx) in santafe"
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

      <template v-if="this.$route.params.venueId == 4">
      <div class="app-container">
        <div id="lightgallery">
          <a
                  v-for="(src, idx) in jardinbotanico"
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

      <template v-if="this.$route.params.venueId == 3">
        <div class="app-container">
          <div id="lightgallery">
            <a
                    v-for="(src, idx) in artzpedregal"
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

      <template v-if="this.$route.params.venueId == 5 && galery.length">

          <div class="app-container">
            <div id="lightgallery">
                <a
                        v-for="(src, idx) in galery"
                        :key="idx"
                        className="gallery-item"
                        :data-src="`https://teamfaster.mx/${src.name}`"
                        data-tweet-text="Team Faster"
                >
                  <img class="img-responsive" :src="`https://teamfaster.mx/${src.name}`" />
                </a>

            </div>
          </div>

      </template>

      <!--
      <template v-if="this.$route.params.venueId == 5">

        <div class="app-container">
                <div id="lightgallery">
                  <a
                          v-for="(src, idx) in revolucion"
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
      -->
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
        xochipilli: [
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
        ],

        santafe: [
            '/assets/santafe/DSC09493.JPG',
            '/assets/santafe/DSC09494.JPG',
            '/assets/santafe/DSC09495.JPG',
            '/assets/santafe/DSC09496.JPG',
            '/assets/santafe/DSC09499.JPG',
            '/assets/santafe/DSC09503.JPG',
            '/assets/santafe/DSC09507.JPG',
            '/assets/santafe/DSC09509.JPG',
            '/assets/santafe/DSC09515.JPG',
            '/assets/santafe/DSC09517.JPG',
            '/assets/santafe/DSC09521.JPG',
            '/assets/santafe/DSC09529.JPG',
            '/assets/santafe/DSC09534.JPG',
            '/assets/santafe/DSC09538.JPG',
            '/assets/santafe/DSC09547.JPG',
            '/assets/santafe/DSC09548.JPG',
            '/assets/santafe/DSC09554.JPG',
            '/assets/santafe/DSC09556.JPG',
            '/assets/santafe/DSC09570.JPG',
            '/assets/santafe/DSC09588.JPG',
            '/assets/santafe/DSC09596.JPG',
            '/assets/santafe/DSC09605.JPG',
            '/assets/santafe/DSC09613.JPG',
            '/assets/santafe/DSC09645.JPG',
            '/assets/santafe/DSC09646.JPG',
            '/assets/santafe/DSC09647.JPG',
            '/assets/santafe/DSC09651.JPG',
            '/assets/santafe/DSC09652.JPG',
            '/assets/santafe/DSC09653.JPG',
            '/assets/santafe/DSC09655.JPG',
            '/assets/santafe/DSC09661.JPG',
            '/assets/santafe/DSC09666.JPG',
            '/assets/santafe/DSC09674.JPG',
            '/assets/santafe/DSC09724.JPG',
            '/assets/santafe/DSC09731.JPG',
            '/assets/santafe/DSC09732.JPG',
            '/assets/santafe/DSC09755.JPG',
            '/assets/santafe/DSC09760.JPG',
            '/assets/santafe/DSC09768.JPG',
            '/assets/santafe/DSC09797.JPG',
            '/assets/santafe/DSC09808.JPG',
            '/assets/santafe/DSC09811.JPG',
            '/assets/santafe/DSC09816.JPG',
            '/assets/santafe/IMG_8680.JPG',
            '/assets/santafe/IMG_8687.JPG',
            '/assets/santafe/IMG_8699.JPG',
            '/assets/santafe/IMG_8703.JPG',
            '/assets/santafe/IMG_8716.JPG',
            '/assets/santafe/IMG_8718.JPG',
            '/assets/santafe/IMG_8720.JPG',
            '/assets/santafe/IMG_8722.JPG',
            '/assets/santafe/IMG_8726.JPG',
            '/assets/santafe/IMG_8732.JPG',
            '/assets/santafe/IMG_8734.JPG',
            '/assets/santafe/IMG_8738.JPG',
            '/assets/santafe/IMG_8748.JPG',
            '/assets/santafe/IMG_8749.JPG',
            '/assets/santafe/IMG_8752.JPG',
            '/assets/santafe/IMG_8754.JPG',
            '/assets/santafe/IMG_8760.JPG',
            '/assets/santafe/IMG_8762.JPG',
            '/assets/santafe/IMG_8780.JPG',
            '/assets/santafe/IMG_8818.JPG',
            '/assets/santafe/IMG_8898.JPG',
            '/assets/santafe/IMG_8899.JPG',
            '/assets/santafe/IMG_8780.JPG',
            '/assets/santafe/IMG_8908.JPG',
            '/assets/santafe/IMG_8911.JPG',
            '/assets/santafe/IMG_8913.JPG',
            '/assets/santafe/IMG_8934.JPG',
            '/assets/santafe/IMG_8936.JPG',
            '/assets/santafe/IMG_8938.JPG',
            '/assets/santafe/IMG_8940.JPG',
            '/assets/santafe/IMG_8945.JPG',
            '/assets/santafe/IMG_8951.JPG',
            '/assets/santafe/IMG_8955.JPG',
            '/assets/santafe/IMG_8958.JPG',
            '/assets/santafe/IMG_8967.JPG',
            '/assets/santafe/IMG_8971.JPG',
        ],

        jardinbotanico: [
              '/assets/jardinbotanico/IMG_0352.JPG',
              '/assets/jardinbotanico/IMG_0420.JPG',
              '/assets/jardinbotanico/IMG_0391.JPG',
              '/assets/jardinbotanico/IMG_0740.JPG',
              '/assets/jardinbotanico/IMG_0556.JPG',
              '/assets/jardinbotanico/IMG_0387.JPG',
              '/assets/jardinbotanico/IMG_0436.JPG',
              '/assets/jardinbotanico/IMG_0543.JPG',
              '/assets/jardinbotanico/IMG_0584.JPG',
              '/assets/jardinbotanico/IMG_0618.JPG',
              '/assets/jardinbotanico/IMG_0397.JPG',
              '/assets/jardinbotanico/IMG_0744.JPG',
              '/assets/jardinbotanico/IMG_0544.JPG',
              '/assets/jardinbotanico/IMG_0578.JPG',
              '/assets/jardinbotanico/IMG_0293.JPG',
              '/assets/jardinbotanico/IMG_0442.JPG',
              '/assets/jardinbotanico/IMG_0640.JPG',
              '/assets/jardinbotanico/IMG_0319.JPG',
              '/assets/jardinbotanico/IMG_0523.JPG',
              '/assets/jardinbotanico/IMG_0721.JPG',
              '/assets/jardinbotanico/IMG_0709.JPG',
              '/assets/jardinbotanico/IMG_0723.JPG',
              '/assets/jardinbotanico/IMG_0469.JPG',
              '/assets/jardinbotanico/IMG_0333.JPG',
              '/assets/jardinbotanico/IMG_0680.JPG',
              '/assets/jardinbotanico/IMG_0469.JPG',
              '/assets/jardinbotanico/IMG_0326.JPG',
              '/assets/jardinbotanico/IMG_0440.JPG',
              '/assets/jardinbotanico/IMG_0454.JPG',
              '/assets/jardinbotanico/IMG_0468.JPG',
              '/assets/jardinbotanico/IMG_0497.JPG',
              '/assets/jardinbotanico/IMG_0530.JPG',
              '/assets/jardinbotanico/IMG_0336.JPG',
              '/assets/jardinbotanico/IMG_0685.JPG',
              '/assets/jardinbotanico/IMG_0323.JPG',
              '/assets/jardinbotanico/IMG_0531.JPG',
              '/assets/jardinbotanico/IMG_0525.JPG',
              '/assets/jardinbotanico/IMG_0733.JPG',
              '/assets/jardinbotanico/IMG_0731.JPG',
              '/assets/jardinbotanico/IMG_0296.JPG',
              '/assets/jardinbotanico/IMG_0484.JPG',
              '/assets/jardinbotanico/IMG_0490.JPG',
              '/assets/jardinbotanico/IMG_0321.JPG',
              '/assets/jardinbotanico/IMG_0678.JPG',
              '/assets/jardinbotanico/IMG_0693.JPG',
              '/assets/jardinbotanico/IMG_0308.JPG',
              '/assets/jardinbotanico/IMG_0491.JPG',
              '/assets/jardinbotanico/IMG_0485.JPG',
              '/assets/jardinbotanico/IMG_0503.JPG',
              '/assets/jardinbotanico/IMG_0674.JPG',
              '/assets/jardinbotanico/IMG_0700.JPG',
              '/assets/jardinbotanico/IMG_0716.JPG',
              '/assets/jardinbotanico/IMG_0312.JPG',
              '/assets/jardinbotanico/IMG_0689.JPG',
              '/assets/jardinbotanico/IMG_0529.JPG',
              '/assets/jardinbotanico/IMG_0717.JPG',
              '/assets/jardinbotanico/IMG_0303.JPG',
              '/assets/jardinbotanico/IMG_0289.JPG',
              '/assets/jardinbotanico/IMG_0712.JPG',
              '/assets/jardinbotanico/IMG_0704.JPG',
              '/assets/jardinbotanico/IMG_0506.JPG',
              '/assets/jardinbotanico/IMG_0466.JPG',
              '/assets/jardinbotanico/IMG_0328.JPG',
              '/assets/jardinbotanico/IMG_0315.JPG',
              '/assets/jardinbotanico/IMG_0513.JPG',
              '/assets/jardinbotanico/IMG_0366.JPG',
              '/assets/jardinbotanico/IMG_0616.JPG',
              '/assets/jardinbotanico/IMG_0417.JPG',
              '/assets/jardinbotanico/IMG_0416.JPG',
              '/assets/jardinbotanico/IMG_0360.JPG',
              '/assets/jardinbotanico/IMG_0610.JPG',
              '/assets/jardinbotanico/IMG_0638.JPG',
              '/assets/jardinbotanico/IMG_0605.JPG',
              '/assets/jardinbotanico/IMG_0407.JPG',
              '/assets/jardinbotanico/IMG_0573.JPG',
              '/assets/jardinbotanico/IMG_0363.JPG',
              '/assets/jardinbotanico/IMG_0411.JPG',
              '/assets/jardinbotanico/IMG_0376.JPG',
              '/assets/jardinbotanico/IMG_0404.JPG',
              '/assets/jardinbotanico/IMG_0389.JPG',

      ],

          artzpedregal: [
              '/assets/artzpedregal/DSC00846.JPG',
              '/assets/artzpedregal/DSC00848.JPG',
              '/assets/artzpedregal/DSC00849.JPG',
              '/assets/artzpedregal/DSC00853.JPG',
              '/assets/artzpedregal/DSC00864.JPG',
              '/assets/artzpedregal/DSC00866.JPG',
              '/assets/artzpedregal/DSC00873.JPG',
              '/assets/artzpedregal/DSC00876.JPG',
              '/assets/artzpedregal/DSC00881.JPG',
              '/assets/artzpedregal/DSC00883.JPG',
              '/assets/artzpedregal/DSC00885.JPG',
              '/assets/artzpedregal/DSC00898.JPG',
              '/assets/artzpedregal/DSC00902.JPG',
              '/assets/artzpedregal/DSC00906.JPG',
              '/assets/artzpedregal/DSC00911.JPG',
              '/assets/artzpedregal/DSC00912.JPG',
              '/assets/artzpedregal/DSC00915.JPG',
              '/assets/artzpedregal/DSC00923.JPG',
              '/assets/artzpedregal/DSC00931.JPG',
              '/assets/artzpedregal/DSC00935.JPG',
              '/assets/artzpedregal/DSC00942.JPG',
              '/assets/artzpedregal/DSC00955.JPG',
              '/assets/artzpedregal/DSC00957.JPG',
              '/assets/artzpedregal/DSC00966.JPG',
              '/assets/artzpedregal/DSC00969.JPG',
              '/assets/artzpedregal/DSC00973.JPG',
              '/assets/artzpedregal/DSC00974.JPG',
              '/assets/artzpedregal/DSC00979.JPG',
              '/assets/artzpedregal/DSC00980.JPG',
              '/assets/artzpedregal/DSC00998.JPG',
              '/assets/artzpedregal/DSC00999.JPG',
              '/assets/artzpedregal/DSC01003.JPG',
              '/assets/artzpedregal/DSC01008.JPG',
              '/assets/artzpedregal/DSC01010.JPG',
              '/assets/artzpedregal/DSC01022.JPG',
              '/assets/artzpedregal/DSC01027.JPG',
              '/assets/artzpedregal/DSC01030.JPG',
              '/assets/artzpedregal/DSC01036.JPG',
              '/assets/artzpedregal/DSC01037.JPG',
              '/assets/artzpedregal/DSC01039.JPG',
              '/assets/artzpedregal/DSC01047.JPG',
              '/assets/artzpedregal/DSC01056.JPG',
              '/assets/artzpedregal/DSC01066.JPG',
              '/assets/artzpedregal/DSC01077.JPG',
              '/assets/artzpedregal/DSC01082.JPG',
              '/assets/artzpedregal/DSC01086.JPG',
              '/assets/artzpedregal/DSC01099.JPG',
              '/assets/artzpedregal/DSC01103.JPG',
              '/assets/artzpedregal/DSC01123.JPG',
              '/assets/artzpedregal/DSC01128.JPG',
              '/assets/artzpedregal/DSC01168.JPG',
              '/assets/artzpedregal/DSC01183.JPG',
              '/assets/artzpedregal/DSC01185.JPG',
              '/assets/artzpedregal/DSC01188.JPG',
              '/assets/artzpedregal/DSC01191.JPG',
              '/assets/artzpedregal/DSC01196.JPG',
              '/assets/artzpedregal/DSC01199.JPG',
              '/assets/artzpedregal/DSC01207.JPG',
              '/assets/artzpedregal/DSC01209.JPG',
              '/assets/artzpedregal/DSC01210.JPG',
              '/assets/artzpedregal/DSC01215.JPG',
              '/assets/artzpedregal/DSC01217.JPG',
          ],

          revolucion: [
              '/assets/artzpedregal/DSC00846.JPG',
          ],

          galery: []
      };
    },

    mounted() {
      console.log( "v=2.0.0" );

        axios
            .get('api/galeries')
            .then(({ data }) => {
                this.galery = [].concat(data.data);
            });


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