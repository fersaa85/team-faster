<template>
  <div class="venues">
    <div class="columns" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="column gotica-italic title-venues">
        <div class="title-venues1">
          Nuestros
        </div>
        <div class="title-venues2">
          Coaches
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
    <div class="venues_photos">
      <div class="columns is-multiline">
        <div class="column is-clickable img-container coach-1 is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach1" style="position:relative; padding:0">
          <a href="https://www.instagram.com/charlie.ro22/" target="_blank">
            <b-image
              responsive
              src="/assets/img/Carloss.png"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg1"
            ></b-image>
            <div class="text-photo-title venue-active">
              <div class="photo-info">
                <span class="photo-info1">
                  CARLOS Aguilar
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @charlie.ro22
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach2" style="position:relative; padding:0">
          <a href="https://www.instagram.com/dmckniight/" target="_blank">
            <b-image
              responsive
              src="/assets/img/David.png"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg2"
            ></b-image>
            <div class="text-photo-title venue-active">
              <div class="photo-info">
                <span class="photo-info1">
                  DAVID McKnight
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @dmckniight
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach3" style="position:relative; padding:0">
          <a href="https://www.instagram.com/franchescasb/" target="_blank">
            <b-image
              responsive
              src="/assets/img/FRANCHESCA-@franchescasb.jpg"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg3"
            ></b-image>
            <div class="text-photo-title two-lines venue-active-third">
              <div class="photo-info">
                <span class="photo-info1">
                  Franchesca sb
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @franchescasb
                </span>
              </div>
            </div>
          </a>
        </div>
      <!-- </div> -->
      <!-- <div class="columns"> -->
        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach4" style="position:relative; padding:0">
          <a href="https://www.instagram.com/HOMEROCASGRO" target="_blank">
            <b-image
              responsive
              src="/assets/img/HomeroCastillo.png"
              ratio="1by1"
              @load="loadedImg4"
            ></b-image>
            <div class="text-photo-title">
              <div class="photo-info">
                <span class="photo-info1">
                  HOMERO Castillo
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @homerocasgro
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach5" style="position:relative; padding:0">
          <a href="https://www.instagram.com/jorgehuo/" target="_blank">
            <b-image
              responsive
              src="/assets/img/Jorge.png"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg5"
            ></b-image>
            <div class="text-photo-title">
              <div class="photo-info">
                <span class="photo-info1">
                  JORGE huo
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @jorgehuo
                </span>
              </div>
            </div>
          </a>
        </div>
        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach6" style="position:relative; padding:0">
          <a href="https://www.instagram.com/maferarreolaa/" target="_blank">
            <b-image
              responsive
              src="/assets/img/MAFER-@maferarreolaa.jpg"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg6"
            ></b-image>
            <div class="text-photo-title venue-active">
              <div class="photo-info">
                <span class="photo-info1">
                  MAFER arreola
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @maferarreolaa
                </span>
              </div>
            </div>
          </a>
        </div>
      <!-- </div>
      <div class="columns"> -->
        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach7" style="position:relative; padding:0">
          <a href="https://www.instagram.com/pablohutt/" target="_blank">
            <b-image
              responsive
              src="/assets/img/PabloHutt.jpg"
              ratio="1by1"
              @load="loadedImg7"
            ></b-image>
            <div class="text-photo-title">
              <div class="photo-info">
                <span class="photo-info1">
                  PABLO Hütt
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @pablohutt
                </span>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach8" style="position:relative; padding:0">
          <a href="https://www.instagram.com/lcorigel/" target="_blank">
            <b-image
              responsive
              src="/assets/img/luis-carlos-origel.png"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg8"
            ></b-image>
            <div class="text-photo-title two-lines">
              <div class="photo-info">
                <span class="photo-info1">
                  Luis Carlos Origel
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @lcorigel
                </span>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach9" style="position:relative; padding:0">
          <a href="https://www.instagram.com/v1cfitness/?igshid=YmMyMTA2M2Y%3D" target="_blank">
            <b-image
              responsive
              src="/assets/img/vlopez.jpg"
              ratio="1by1"
              class="img-blackwhite"
              @load="loadedImg9"
            ></b-image>
            <div class="text-photo-title two-lines">
              <div class="photo-info">
                <span class="photo-info1">
                  Victor López
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @v1cfitness
                </span>
              </div>
            </div>
          </a>
        </div>

        <div class="column is-clickable img-container is-6-tablet is-4-desktop is-4-widescreen is-4-fullhd" ref="coach9" style="position:relative; padding:0">
          <a href="https://www.instagram.com/gracosantaella/" target="_blank">
            <b-image
                    responsive
                    src="/assets/img/graco-santaella.png"
                    ratio="1by1"
                    class="img-blackwhite"
                    @load="loadedImg9"
            ></b-image>
            <div class="text-photo-title two-lines">
              <div class="photo-info">
                <span class="photo-info1">
                  Graco Santaella
                </span>
                <br>
                <span class="puma-bold photo-info2">
                  @gracosantaella
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import Footer from '../Components/Footer.vue';

export default {
  name: 'venues',
    components: {
        Footer
    },
  mounted(){
    console.log( "v=1.1.23" );
    window.scrollTo(0, 0);
      this.setElement(this.$refs.coach1);
      
      this.setElement(this.$refs.coach2);
      this.setElement(this.$refs.coach3);

      this.setElement(this.$refs.coach4);
      this.setElement(this.$refs.coach5);
      this.setElement(this.$refs.coach6);

      this.setElement(this.$refs.coach7);
      this.setElement(this.$refs.coach8);
      this.setElement(this.$refs.coach9);
  },
  methods:{
    loadedImg1(){
      this.showElement(this.$refs.coach1, (1*0.8));
    },
    loadedImg2(){
      this.showElement(this.$refs.coach2, (2*0.8));
    },
    loadedImg3(){
      this.showElement(this.$refs.coach3, (3*0.8));
    },
    loadedImg4(){
      this.showElement(this.$refs.coach4, (4*0.8));
    },
    loadedImg5(){
      this.showElement(this.$refs.coach5, (5*0.8));
    },
    loadedImg6(){
      this.showElement(this.$refs.coach6, (6*0.8));
    },
    loadedImg7(){
      this.showElement(this.$refs.coach7, (7*0.8));
    },
    loadedImg8(){
      this.showElement(this.$refs.coach8, (8*0.8));
    },
    loadedImg9(){
      this.showElement(this.$refs.coach9, (9*0.8));
    },
      setElement(el){
          this.gsap.to(
              el,
              { autoAlpha: 0, scale:0.5, duration: 0}
          );
      },
      showElement(el, delay){
        this.gsap.to(
          el,
            { autoAlpha: 1, scale:1, duration: 2.5, delay:delay, ease: "elastic.out(1, 0.2)"}
          );
      },
  }

}
</script>
<style lang="scss" scoped>
  .venues_photos{
    margin: 0 160px;
    padding: 20px;
    background-color: black;
    @media screen and (max-width: 768px) {
      margin: 0 40px;
    }
  }
  .venues{
    background: black;
    overflow-x: hidden;
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
</style>