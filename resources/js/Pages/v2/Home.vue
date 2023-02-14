<template>
  <div class="home">
    <section class="description panel uno">
      <div>
        <div class="netw-style">
          <b-image
              responsive
              src="/assets/img/socnet.png"
              ratio="74by348"
            ></b-image>
        </div>
        <div class="columns" style="margin: 0;">
          <div class="column panel1-column1">
            <div class="welcome-img">
              <b-image
                responsive
                src="/assets/img/welcome.png"
                ratio="753by209"
              ></b-image>
            </div>
            <div class="puma-regular welcome-text">
              <div>
                Aquí comienza la mejor experiencia de
                entrenamientos en combinación con coaches
                que te ayudarán a liberar tu potencial
              </div>
            </div>
            <div class="puma-bold registrarme-button">
              Registrarme
            </div>
          </div>
          <div class="column">
            <div class="logo-style" ref="logoInicio">
              <b-image
              responsive
              src="/assets/img/logoTeamFaster.png"
              ratio="1by1"
            ></b-image>
            </div>
          </div>
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
                src="/assets/img/LOGO-TEAMFASTER.jpg"
                ratio="1by1"
              ></b-image>
            </div>
          </div>
          <div class="column panel2-column2">
            <div class="vuelvete">
              <div>
                Vuélvete parte de nuestra familia
              </div>
              <div>
                Team Faster y entrena como los
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
              ratio="519by225"
              class="model-2"
          ></b-image>
      </div>
      </div>
      <div class="photos-models columns" style="margin: 0;">
        <div class="column models1">
          <b-image
            responsive
            src="/assets/img/models.png"
            ratio="512by339"
            class="model-2"
          ></b-image>
        </div>
        <div class="column models2">
          <b-image
            responsive
            src="/assets/img/models2.png"
            ratio="512by339"
            class="model-2"
          ></b-image>
        </div>
        <div class="column models3">
          <b-image
            responsive
            src="/assets/img/models3.png"
            ratio="512by339"
            class="model-2"
          ></b-image>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Footer from '@/Components/Footer.vue';

export default {
  name: 'home',
    components: {
        Footer
    },
    data(){
      return {
        panels: null,
        scrollTween:null
      };
    },
    mounted() {
      console.log( "v=2.0.1" );
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
        this.gsap.to(
          ".welcome-text",
          {autoAlpha: 0, duration: 0 }
        );
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
        this.gsap.to(
          ".welcome-text",{
          scrollTrigger: ".welcome-text",
          autoAlpha: 1, duration: 0.8, delay:0.5, ease: "Power2.easeIn" }
        );
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
  }

  .panel {
    min-height: 100vh;
    border-radius: 0;
    // position: sticky;
    // top: 0;
  }
  .uno{
    background-color: black;
    background-image: url("/assets/img/puma-web1.jpg");
    background-position-x: center;
    background-size: cover;
  }
  .dos{
    background-color: black;
    background-image: url("/assets/img/puma-web2.jpg");
    // position: sticky;
    background-position-x: right;
    background-size: cover;
    // top: 0;
  }
  .tres{
    background-color: black;
    background-image: url("/assets/img/puma-web3.jpg");
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
      font-size: 100px;
      line-height: 100px;
    }
    @media screen and (min-width: 1134px) and (max-width: 1215px) {
      font-size: 80px;
      line-height: 80px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      font-size: 80px;
      line-height: 80px;
      margin-left: 100px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 70px;
      line-height: 70px;
      margin-left: 80px;
    }
    @media screen and (max-width: 870px) {
      font-size: 60px;
      line-height: 60px;
      margin-left: 60px;
    }
    @media screen and (max-width: 768px) {
      font-size: 80px;
      line-height: 80px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .logo-simple{
    width: 354px;
    padding-left: 139px;
    padding-top: 54px;
    padding-bottom: 54px;
    @media screen and (max-width: 1023px) {
      padding-left: 80px;
    }
    @media screen and (max-width: 870px) {
      padding-left: 60px;
      width: 300px;
    }
    @media screen and (max-width: 768px) {
      width: 300px;
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
      font-size: 23px;
      padding-left: 10px;
      padding-right: 10px;
      margin: auto;
      text-align: center;
    }
  }
  .coaches{
    font-family: 'GoticaModerna-KK-Italic';
    color: white;
    font-size: 132px;
    padding-top: 199px;
    @media screen and (max-width: 1133px) {
      font-size: 120px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 100px;
      padding-left: 30px;
      padding-right: 30px;
      line-height: 90px;
    }
  }
  .tu-style{
    width: 25%;
    text-align: center;
    margin: auto;
    margin-top: -47px;
    padding-right: 26px;
    margin-bottom: 10px;
    @media screen and (max-width: 1215px) {
      width: 30%;
      margin-top: -30px;
    }
    @media screen and (max-width: 1024px) {
      width: 30%;
      margin-top: 0;
    }
    @media screen and (max-width: 768px) {
      width: 60%;
      margin-top: 0;
    }
  }
  .photos-models{
    padding: 40px 89px;
    margin: auto;
    figure{
      width: 100%;
    }
  }
  .registrarme-button{
    color: white;
    text-transform: uppercase;
    font-size: 28px;
    padding: 11px 61px 8px;
    background-color: #b99571;
    width: fit-content;
    margin-top: 69px;
    margin-bottom: 70px;
    cursor: pointer;
    margin-left: 1px;
    @media screen and (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      max-width: 81vw;
    }
  }
  .welcome-text{
    color: white;
    font-size: 33px;
    text-align: left;
    // padding-left: 183px;
    @media screen and (min-width: 1216px) and (max-width: 1408px) {
      font-size: 30px;
    }
    @media screen and (min-width: 1134px) and (max-width: 1215px) {
      font-size: 30px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      font-size: 30px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 26px;
    }
    @media screen and (max-width: 768px) {
      font-size: 26px;
    }
  }
  .netw-style{
    width: 65px;
    position: relative;
    top: 581px;
    cursor: pointer;
  }
  .welcome-img{
    width: 100%;
    padding-bottom: 40px;
    padding-top: 68px;
  }
  .logo-style{
    width: 70%;
    margin-top: -51px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (max-width: 768px){
      padding-bottom: 60px;
      width: 40%;
    }
  }
  .panel:not(:last-child) {
    margin-bottom: 0;
  }
  .panel1-column1{
    padding-left: 183px;
    @media screen and (max-width: 1023px) {
      padding-left: 140px;
    }
    @media screen and (max-width: 768px){
      padding-left: 19vw;
      padding-right: 19vw;
      margin: auto;
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