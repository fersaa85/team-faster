<template>
  <div class="home">
    <section class="description panel uno">
      <div>
        <div class="columns" style="margin: 0;">
          <div class="column is-12 panel1-column1">
            <div class="logo-style" ref="logoInicio">
              <b-image
                responsive
                src="/assets/img/logo_train.png?8017"
                ratio="565by123"
              ></b-image>
            </div>
            <div class="welcome-img is-hidden-touch">
              <b-image
                responsive
                src="/assets/img/welcome.png"
                ratio="1609by136"
              ></b-image>
            </div>
            <div class="welcome-img is-hidden-desktop">
              <b-image
                responsive
                src="/assets/img/welcome_mobl.png"
                ratio="995by136"
              ></b-image>
            </div>
            <!-- <div class="puma-regular welcome-text">
              <div>
                Aquí comienza la mejor experiencia de
                entrenamientos en combinación con coaches
                que te ayudarán a liberar tu potencial
              </div>
            </div> -->
            <div class="puma-bold registrarme-button">
              <b-navbar-item tag="router-link" :to="{ path: '/registro' }">
                Registrarme
              </b-navbar-item>
            </div>
          </div>
        </div>
        <div class="netw-style ">
          <SocialNetwork></SocialNetwork>
        </div>
      </div>
    </section>
    <section class="panel dos">
      <div>
        <div class="columns panel2-columns" style="margin: 0;">
          <div class="column is-5 panel2-column1">
            <div class="unete">
              <div>
                !Únete
              </div>
              <div>
                Al reto!
              </div>
            </div>
            <div class="logo-simple">
              <b-image
                responsive
                src="/assets/img/logo_train.png"
                ratio="565by123"
              ></b-image>
            </div>
          </div>
          <div class="column panel2-column2">
            <div class="vuelvete">
              <div>
                Vuélvete parte de nuestra familia
              </div>
              <div>
                Train Puma y entrena como los
              </div>
              <div>
                grandes en alguna de las sedes
              </div>
              <div>
                que tenemos para ti.
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
    <section class="panel tres">
      <div class="coaches">
        <div>
          ¡Nuestros coaches están listos!
        </div>
        <div class="tu-style">
          <b-image
              responsive
              src="/assets/img/ytu.png"
              ratio="537by221"
              class="model-2"
          ></b-image>
      </div>
      </div>
      <div class="photos-models columns" style="margin: 0;">
        <div class="column models1">
          <b-image
            responsive
            src="/assets/img/coach-imagen1-.png"
            ratio="397by263"
            class="model-2"
          ></b-image>
        </div>
        <div class="column models2">
          <b-image
            responsive
            src="/assets/img/coach-imagen2-.png"
            ratio="397by263"
            class="model-2"
          ></b-image>
        </div>
        <div class="column models3">
          <b-image
            responsive
            src="/assets/img/coach-imagen3-.png"
            ratio="397by263"
            class="model-2"
          ></b-image>
        </div>
      </div>
      <Footer class="footer-style"></Footer>
    </section>
  </div>
</template>
<script>
import Footer from '@/Components/Footer.vue';
import SocialNetwork from '@/Components/SocialNetwork.vue';

export default {
  name: 'home',
    components: {
        Footer,
        SocialNetwork
    },
    data(){
      return {
        panels: null,
        scrollTween:null
      };
    },
    mounted() {
      console.log( "v=2.2.1" );
      window.scrollTo(0, 0);
      this.setLogoInicio();
      // this.setFondoInicio();
      this.setWelcome();
      this.setWelcomeText();
      // this.setPage1();
      this.setPage2();
      this.setPage3();
      // this.setTeamFaster();
      // this.setTitleVenue();
      // this.setCoachesText();
      // this.setCoachesImg();
      setTimeout(() => {
        this.showWelcome();
      }, 500);
      // this.setVive();
      //   axios
      //       .get('api/workout')
      //       .then(({ data: { data } }) => {
      //           this.slug = data.venue.slug;
      //           this.info = Object.assign({}, {
      //               name: data.venue.name,
      //               fecha: data.date_start,
      //               lugar: data.venue.address,
      //               tipo:  data.description,
      //               coach:  data.coatch.name,
      //               photo: data.venue.image,
      //               map: data.venue.image_map,
      //               available: true
      //           });
      //       });
    },
    

    methods:{
      // goToSection(i) {
      //   console.log('goToSection', i);
      //   console.log('window.innerHeight', window.innerHeight);
      //   this.scrollTween = this.gsap.to(window, {
      //     scrollTo: {y: i * window.innerHeight, autoKill: false},
      //     duration: 1,
      //     onComplete: () => this.scrollTween = null,
      //     overwrite: true
      //   });
      // }
      gra(min, max){
        return Math.random() * (max - min) + min;
      },
      init(){
        let items = document.querySelectorAll('section');

        // cssScrollSnapPolyfill();
      },
      // showLogoInicio(){
      //   this.gsap.to(
      //     this.$refs.logoInicio,
      //     {autoAlpha: 1, duration: 0.8, scaleX:1, scaleY:1, delay:0, ease: "Power2.easeOut", onComplete: this.showWelcomeText  }
      //   );
      // },
      setWelcome(){
        this.gsap.to(
          ".welcome-img",
          {autoAlpha: 0, duration: 0, y:400, }
        );
      },
      setWelcomeText(){
        // this.gsap.to(
        //   ".welcome-text",
        //   {autoAlpha: 0, duration: 0 }
        // );
        this.gsap.to(
          ".registrarme-button",
          {autoAlpha: 0, duration: 0 }
        );
      },
      setLogoInicio(){
        this.gsap.to(
          this.$refs.logoInicio,
          {autoAlpha: 0, duration: 0, scaleX:0, scaleY:0 }
        );
      },
      showWelcome(){
        this.gsap.to(
          ".welcome-img",
          {autoAlpha: 1, duration: 1, y:0, ease: "Power2.easeOut", onComplete: this.setPage1 }
        );
      },
      // showWelcomeText(){
      //   this.gsap.to(
      //     ".welcome-text",
      //     {autoAlpha: 1, duration: 0.8, ease: "Power2.easeIn" }
      //   );
      //   this.gsap.to(
      //     ".registrarme-button",
      //     {autoAlpha: 1, duration: 1, ease: "Power2.easeIn" }
      //   );
      // },
      setPage1(){
        // this.gsap.to(
        //   ".welcome-text",{
        //   scrollTrigger: ".welcome-text",
        //   autoAlpha: 1, duration: 0.8, delay:0.5, ease: "Power2.easeIn" }
        // );
        this.gsap.to(
          ".registrarme-button",{
          scrollTrigger: ".registrarme-button",
          autoAlpha: 1, duration: 1, delay:0.5, ease: "Power2.easeIn" }
        );
        this.gsap.to(
          this.$refs.logoInicio,{
          scrollTrigger: this.$refs.logoInicio,
          autoAlpha: 1, duration: 0.8, scaleX:1, scaleY:1, delay:0, ease: "Power2.easeOut" }
        );
      },
      setPage2(){
        this.gsap.from(".unete", {
          scrollTrigger: ".unete", // start the animation when ".box" enters the viewport (once)
          x:-100,
          autoAlpha:0,
          duration:0.8,
          delay:0.5,
          ease: "Power2.easeOut"
        });
        this.gsap.from(".vuelvete", {
          scrollTrigger: ".vuelvete", // start the animation when ".box" enters the viewport (once)
          x:100,
          autoAlpha:0,
          duration:0.8,
          delay:0.5,
          ease: "Power2.easeOut"
        });
        this.gsap.from(".logo-simple", {
          scrollTrigger: ".logo-simple", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.5,
          ease: "Power2.easeIn"
        });
      },
      setPage3(){
        this.gsap.from(".coaches", {
          scrollTrigger: ".coaches", // start the animation when ".box" enters the viewport (once)
          x:-100,
          autoAlpha:0,
          duration:0.8,
          delay:0.8,
          ease: "Power2.easeOut"
        });
        this.gsap.from(".tu-style", {
          scrollTrigger: ".tu-style", // start the animation when ".box" enters the viewport (once)
          scaleX:0,
          scaleY:0,
          autoAlpha:0,
          duration:1,
          delay:0.5,
          ease: "Power2.easeOut"
        });
        this.gsap.from(".models1", {
          scrollTrigger: ".models1", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          x:-100,
          duration:0.8,
          delay:0.8,
          ease: "Power2.easeIn"
        });
        this.gsap.from(".models2", {
          scrollTrigger: ".models2", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.8,
          ease: "Power2.easeIn"
        });
        this.gsap.from(".models3", {
          scrollTrigger: ".models3", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          x:100,
          duration:0.8,
          delay:0.8,
          ease: "Power2.easeIn"
        });
      },
    }
}
</script>
<style lang="scss" scoped>
  // html {
  //   scroll-snap-type: mandatory;
  //   scroll-snap-points-y: repeat(100vh);
  //   scroll-snap-type: y mandatory;
  // }
  // .panel:not(:last-child) {
  //   margin-bottom: 0;
  // }
  .home{
    max-width: 100vw;
    overflow-x: hidden;
    @media screen and (max-width: 768px) {
      min-width: 100vw;
      max-width: unset;
    }
  }
  .cursor{
    cursor: pointer;
  }
  .navbar-item, .navbar-link{
    color: #ffffff;
  }
  a.navbar-item:hover{
    background: #b99571;
    color: #ffffff;
  }
  .panel {
    min-height: 100vh;
    border-radius: 0;
    // position: sticky;
    // top: 0;
  }
  .uno{
    background-color: black;
    background-image: url("/assets/img/puma-web1.jpg?8017");
    background-position-x: center;
    background-size: cover;
  }
  .dos{
    background-color: black;
    background-image: url("/assets/img/puma-web2.jpg?8017");
    // position: sticky;
    background-position-x: center;
    background-size: cover;
    // @media screen and (min-width: 769px){
    //   background-size: cover;
    // }
    // top: 0;
  }
  .tres{
    background-color: black;
    background-image: url("/assets/img/puma-web3.jpg?8017");
    background-size: cover;
    position: sticky;
    top: 0;
  }
  .unete{
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 120px;
    text-transform: uppercase;
    line-height: 120px;
    text-align: center;
    color: white;
    border-bottom: 10px solid #b99571;
    margin-left: 130px;
    width: fit-content;
    @media screen and (min-width: 1216px) and (max-width: 1408px) {
      font-size: 90px;
      line-height: 100px;
    }
    @media screen and (min-width: 1134px) and (max-width: 1215px) {
      font-size: 70px;
      line-height: 80px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      font-size: 70px;
      line-height: 80px;
      margin-left: 100px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 65px;
      line-height: 65px;
      margin-left: 80px;
    }
    @media screen and (max-width: 870px) {
      font-size: 60px;
      line-height: 60px;
      margin-left: 60px;
    }
    @media screen and (max-width: 768px) {
      font-size: 65px;
      line-height: 65px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .logo-simple{
    width: 567px;
    padding-left: 126px;
    padding-top: 94px;
    padding-bottom: 54px;
    @media screen and (max-width: 1407px) {
      width: 460px;
    }
    @media screen and (max-width: 1133px) {
      width: 400px;
      padding-left: 100px;
    }
    @media screen and (max-width: 1023px) {
      padding-left: 80px;
      width: 380px;
    }
    @media screen and (max-width: 870px) {
      padding-left: 60px;
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      width: 70%;
      padding-left: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .vuelvete{
    font-family: 'FFDINforPUMA-Regular"','Helvetica Neue',Helvetica,Arial,sans-serif;
    text-align: left;
    font-size: 35px;
    line-height: 42px;
    color: white;
    padding-left: 15px;
    @media screen and (min-width: 1216px) and (max-width: 1408px) {
      font-size: 30px;
    }
    @media screen and (min-width: 1134px) and (max-width: 1215px) {
      font-size: 26px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      font-size: 26px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 26px;
    }
    @media screen and (max-width: 768px) {
      font-size: 21px;
      line-height: 29px;
      padding-left: 10px;
      padding-right: 10px;
      margin: auto;
      text-align: center;
    }
  }
  .coaches{
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    color: white;
    font-size: 90px;
    padding-top: 199px;
    text-transform: uppercase;
    line-height: 102px;
    padding: 199px 40px 0;
    @media screen and (max-width: 1133px) {
      font-size: 90px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 56px;
      padding-left: 30px;
      padding-right: 30px;
      line-height: 70px;
    }
  }
  .tu-style{
    width: 24%;
    text-align: center;
    margin: auto;
    padding-right: 26px;
    margin-bottom: 10px;
    @media screen and (max-width: 1215px) {
      width: 25%;
    }
    @media screen and (max-width: 1024px) {
      width: 25%;
      margin-top: 0;
    }
    @media screen and (max-width: 768px) {
      width: 90%;
      margin-top: 20px;
    }
  }
  .photos-models{
    padding: 40px 89px;
    margin: auto;
    figure{
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      padding: 40px 29px;
    }
  }
  .registrarme-button{
    color: white;
    text-transform: uppercase;
    font-size: 28px;
    padding: 11px 61px 8px;
    background-color: #b99571;
    width: fit-content;
    // margin-top: 69px;
    margin-bottom: 70px;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 58vw;
      padding: 11px 30px 8px;
      font-size: 20px;
      margin-top: 25px;
    }
  }
  .netw-style{
    width: 65px;
    position: relative;
    top: -53px;
    margin-top: -200px;
    @media screen and (max-width: 768px) {
      width: 60px;
      position: initial;
      top: 581px;
      cursor: pointer;
      margin-top: 0;
      padding-bottom: 40px;
    }
  }
  .welcome-img{
    width: 88%;
    padding-bottom: 40px;
    padding-top: 176px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 768px){
      width: 100%;
      padding-top: 95px;
    }
  }
  .logo-style{
    width: 30%;
    margin-top: -51px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 237px;
    cursor: pointer;
    @media screen and (max-width: 768px){
      margin-top: 355px;
      padding-bottom: 0;
      width: 80%;
    }
  }
  .panel:not(:last-child) {
    margin-bottom: 0;
  }
  .panel1-column1{
    // padding-left: 183px;
    // @media screen and (max-width: 1023px) {
    //   padding-left: 140px;
    // }
    margin: auto;
    text-align: center;
    @media screen and (max-width: 768px){
      margin-top: -209px;
    }
  }
  .panel2-columns{
    padding-top: 55px;
  }
  .panel2-column1{
    padding-top:31vh;
    @media screen and (max-width: 768px){
      padding-top:95px;
    }
  }
  .panel2-column2{
    padding-top:35vh;
    @media screen and (max-width: 768px){
      padding-top:0;
      padding-bottom:50px;
    }
  }
  
</style>