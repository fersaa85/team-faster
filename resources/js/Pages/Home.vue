<template>
  <div class="home">
    <div class="first-section">
      <div ref="fondoInicio">
        <b-image
          responsive
          class="fondo-home"
          src="/assets/img/PUMA_FONDO_HOME_2.jpg"
          ratio="300by170"
          style="margin-top: 0px;"
          @load="loadfondoHome"
        ></b-image>
      </div>
      <div class="logo-container">
        <div class="logo-galery" ref="logoInicio">
          <b-image
            responsive
            src="/assets/img/logoTeamFaster.png"
            ratio="1by1"
          ></b-image>
        </div>
      </div>
      <div class="welcome">
        <div class="gotica-italic welcome-title">
          Bienvenidos
        </div>
        <div class="puma-bold welcome-text">
          Aquí comienza la mejor experiencia de entrenamientos en combinación con coaches que te ayudarán a liberar tu potencial
        </div>
      </div>
    </div>
    <div class="second-section">
      <div class="bg2"></div>
      <div class="bg3">
        <div class="columns">
          <div class="column">
            <div class="gotica-italic join-text">
              <div ref="uneteAl">
                <div>
                  <span>¡Únete</span>
                  <span class="join-txt-2 txt-al">al</span>
                </div>
              </div>
              <div ref="teamFaster">
                <span class="join-txt-2 team-txt">Team</span>
                <span>
                  Faster!
                </span>
              </div>
            </div>
            <!-- <div class="logoPuma">
              <b-image
                responsive
                src="/assets/img/pumaLogo.png"
                ratio="300by233"
              ></b-image>
            </div> -->
          </div>
          <div class="column gotica-italic">
            <div class="join-text-r1">
              <!-- {{ info.name }} -->
            </div>

            <div class="join-text-r2 puma-bold">
              Vuélvete parte de nuestra familia teamfaster y entrena como los grandes en alguna de las sedes que tenemos preparadas para ti
            </div>
            <div ref="buttonRegistrarse">
              <b-button rounded class="register-button" size="is-medium" @click="handleGoTo">
                Conoce nuestras sedes
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="vertical-sect coaches2 is-hidden-tablet gotica-italic">
          <div class="coaches-text">
            <div ref="coachesText1" class="coaches-text1">
              Nuestros
            </div>
            <div ref="coachesText2" class="coaches-text2">
              Coaches
            </div>
            <div ref="coachesText3" class="coaches-text3">
              Están listos...
            </div>
            <div ref="coachesText4" class="coaches-text4">
              ¡Acepta el reto!
            </div>
          </div>
        </div>
    <div class="vertical-sect section-coaches gotica-italic">
      <div class="columns">
        <div class="column coaches1 is-hidden-tablet ">
          <div class="columns is-multiline" style="margin: 0;" @click="$router.push('/coaches');">
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/luis-carlos-origel2.png"
                ratio="1by1"
                class="first-coach"
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info always-on">
                  <span class="photo-info1">
                    Luis Carlos Origel
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/MAFER-@maferarreolaa.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info always-on">
                  <span class="photo-info1">
                    MAFER arreola
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/FRANCHESCA-@franchescasb.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info always-on">
                  <span class="photo-info1">
                    Franchesca sb
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref="coachesImgs" class="column coaches1 is-hidden-mobile">
          <div class="columns is-multiline" style="margin: 0;" @click="$router.push('/coaches');">
            <!--
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/RAUL-@raul_vicotria_.jpg"
                ratio="1by1"
                class="first-coach"
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    RAÚL Victoria
                  </span>
                </div>
              </div>
            </div>
            -->
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/MAFER-@maferarreolaa.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    MAFER arreola
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/FRANCHESCA-@franchescasb.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    Franchesca sb
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/PABLO-@pablohutt.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    PABLO Hütt
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/vlopez.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    Victor López
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/Jorge.png"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    JORGE huo
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/David.png"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    DAVID McKnight
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/Carloss.png"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    CARLOS Aguilar
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/HomeroCastillo.png"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    HOMERO Castillo
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/Jorge.png"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    JORGE huo
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/PABLO-@pablohutt.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    PABLO Hutt
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/MAFER-@maferarreolaa.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    MAFER arreola
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/David.png"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    DAVID McKnight
                  </span>
                </div>
              </div>
            </div>
            <div class="column is-6" style="padding:0; position:relative;">
              <b-image
                responsive
                src="/assets/img/vlopez.jpg"
                ratio="1by1"       
              ></b-image>
              <div class="text-photo-title venue-active">
                <div class="photo-info">
                  <span class="photo-info1">
                    Victor López
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column coaches2 is-hidden-mobile">
          <div class="coaches-text">
            <div ref="coachesText1D" class="coaches-text1">
              Nuestros
            </div>
            <div ref="coachesText2D" class="coaches-text2">
              Coaches
            </div>
            <div ref="coachesText3D" class="coaches-text3">
              Están listos...
            </div>
            <div ref="coachesText4D" class="coaches-text4">
              ¡Acepta el reto!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-venues-up gotica-italic">
      <div class="columns">
        <div class="column section-venues1">
          <div>
            Vive una
          </div>
          <div>
            Experiencia
          </div>
        </div>
        <div class="column section-venues2">
          <div>
            Increíble y totalmente
          </div>
          <div>
            Segura al
            <span class="txt-aire">
              aire libre
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="section-venues-down gotica-italic">
      <div class="section-venues-down-text">
        CDMX
      </div>
      <div class="columns section-venues-down-img is-mobile is-multiline ">
        <div class="column is-4-mobile" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/FuenteXochipili.jpg"
            ratio="2by4"
            class="img1-v"
          ></b-image>
        </div>
        <!--
        <div class="column is-4-mobile" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/FotoSantaFe.jpg"
            ratio="2by4"
            class="img2-v"
          ></b-image>
        </div>
        -->
        <div class="column is-4-mobile" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/ArtzPedregal.jpg"
            ratio="2by5"
            class="img3-v"
          ></b-image>
        </div>
        <div class="column is-4-mobile" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/JardinBotanico.jpg"
            ratio="2by5"
            class="img4-v"
          ></b-image>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/MonumentoRevolucion.jpg"
            ratio="2by5"
            class="img5-v"
          ></b-image>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/palacio.jpg"
            ratio="2by5"
          ></b-image>
        </div>
      </div>
    </div>
    <div class="gallery-container">
      <div class="logo-container">
        <div ref="logoGalery" class="logo-galery">
          <b-image
            responsive
            src="/assets/img/logoTeamFaster.png"
            ratio="1by1"
          ></b-image>
        </div>
        <!-- <div class="cdmx-gallery gotica-italic">
          CDMX
        </div> -->
      </div>
      <div class="section-galery-up mobile-section">
        <div class="columns">
          <div class="column gotica-italic container-txt1">
            <div class="section-galery-up-txt1">
              Presume
            </div>
            <div class="section-galery-up-txt2">
              Que eres parte de
            </div>
          </div>
          <div class="column section-galery-up-txt3 puma-bold">
            Busca tu foto en el lugar <br> donde entrenaste con el Team <br> y si aún no estás inscrito <br> inspírate visitando la galería.
          </div>
        </div>
      </div>
      <div class="section-galery-down mobile-section">
        <div class="columns">
          <div class="column is-hidden-mobile" style="position: relative;">
            <b-image
              responsive
              src="/assets/img/model1.jpg"
              ratio="88by78"
              style="margin-top: 89px;"
              class="model-1"
            ></b-image>
            <div class="over-photo">
            </div>
          </div>
          <div class="column" style="position: relative; overflow: hidden;">
            <b-image
              responsive
              src="/assets/img/model2.jpg"
              ratio="6by5"
              class="model-2"
            ></b-image>
            <div class="over-photo">
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="section-team mobile-section">
      <div class="columns">
        <div class="column section-team1 gotica-italic">
          ¿Quiénes somos?
        </div>
        <div class="logo-container">
          <div class="logo-styles">
            <b-image
              responsive
              src="/assets/img/logoTeamFaster.png"
              ratio="1by1"
            ></b-image>
          </div>
        </div>
        <div class="column puma-bold">
          <div class="section-team-cont">

          </div>
          <div class="section-team2">
            <div>
              Team Faster eres tú, ella, tu amigo, tu pareja o el vecino que encuentras en el elevador a las 6 am para ir a entrenar… somos todos aquellos que nos gusta mostrar la mejor versión de nosotros mismos.
            </div>
            <br>
            <div>
              Tenemos un objetivo, compartir la pasión del entrenamiento en un lugar increíble con una ambiente relajado y guiado por coaches que harán de tu sesión la mejor forma de catalizar tu energía.
            </div>
            <div class="team-fast gotica-italic">
              <div ref="teamFast1">
                ¡Forma parte
              </div>
              <div ref="teamFast2">
                del
                <span>
                  Team Faster!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '../Components/Footer.vue';

export default {
  name: 'home',
    components: {
        Footer
    },
    data(){
      return {
          info:{},
          slug: ''
      };
    },
    mounted() {
      console.log( "v=1.1.23" );
      window.scrollTo(0, 0);
      this.setLogoInicio();
      this.setFondoInicio();
      this.setWelcome();
      // this.setuneteAl();
      this.setTeamFaster();
      this.setTitleVenue();
      this.setCoachesText();
      this.setCoachesImg();
      this.setVive();
        axios
            .get('api/workout')
            .then(({ data: { data } }) => {
                this.slug = data.venue.slug;
                this.info = Object.assign({}, {
                    name: data.venue.name,
                    fecha: data.date_start,
                    lugar: data.venue.address,
                    tipo:  data.description,
                    coach:  data.coatch.name,
                    photo: data.venue.image,
                    map: data.venue.image_map,
                    available: true
                });
            });
    },

    methods:{
      // setuneteAl(){
      //   this.gsap.from(this.$refs.uneteAl, {
      //     scrollTrigger: this.$refs.uneteAl, // start the animation when ".box" enters the viewport (once)
      //     y:100,
      //     autoAlpha:0,
      //     duration:1,
      //     delay:0.2,
      //     ease: "Power2.easeOut"
      //   });
      // },
      setTeamFaster(){
        this.gsap.from(".join-text", {
          scrollTrigger: ".join-text-r2", // start the animation when ".box" enters the viewport (once)
          x:-100,
          autoAlpha:0,
          duration:0.8,
          delay:0.2,
          ease: "Power2.easeOut"
        });
      },
      setTitleVenue(){
        this.gsap.from(".join-text-r1", {
          scrollTrigger: ".join-text-r2", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          ease: "Power2.easeIn"
        });
        this.gsap.from(".join-text-r2", {
          scrollTrigger: ".join-text-r2", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          ease: "Power2.easeIn"
        });
        this.gsap.from(this.$refs.buttonRegistrarse, {
          scrollTrigger: this.$refs.buttonRegistrarse, // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.8,
          y:50,
          ease: "Power2.easeOut"
        });
      },
      setCoachesText(){
        this.gsap.from(this.$refs.coachesText1, {
          scrollTrigger: this.$refs.coachesText1,
          autoAlpha:0,
          duration:0.8,
          x:-80,
          ease: "Power2.easeOut"
        });
        this.gsap.from(this.$refs.coachesText2, {
          scrollTrigger: this.$refs.coachesText2,
          autoAlpha:0,
          duration:0.8,
          x:80,
          delay:0.4,
          ease: "Power2.easeOut"
        });
        this.gsap.from(this.$refs.coachesText3, {
          scrollTrigger: this.$refs.coachesText3, // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.6,
          ease: "Power2.easeIn"
        });
        this.gsap.from(this.$refs.coachesText4, {
          scrollTrigger:this.$refs.coachesText4, // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.8,
          y:80,
          ease: "Power2.easeOut"
        });
        this.gsap.from(this.$refs.coachesText1D, {
          scrollTrigger: this.$refs.coachesText1D,
          autoAlpha:0,
          duration:0.8,
          x:-80,
          delay:0,
          ease: "Power2.easeOut"
        });
        this.gsap.from(this.$refs.coachesText2D, {
          scrollTrigger: this.$refs.coachesText2D,
          autoAlpha:0,
          duration:0.8,
          x:80,
          delay:0.4,
          ease: "Power2.easeOut"
        });
        this.gsap.from(this.$refs.coachesText3D, {
          scrollTrigger: this.$refs.coachesText3D, // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.6,
          ease: "Power2.easeIn"
        });
        this.gsap.from(this.$refs.coachesText4D, {
          scrollTrigger:this.$refs.coachesText4D, // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.8,
          delay:0.8,
          y:80,
          ease: "Power2.easeOut"
        });
      },
      setCoachesImg(){
        this.gsap.from(this.$refs.coachesImgs, {
          scrollTrigger:{
            trigger:this.$refs.coachesText4D, // start the animation when ".box" enters the viewport (once)
            toggleActions: "play complete reverse"
          },
          duration:1.5,
          delay:0.5,
          yPercent:-37,
          ease: "Power2.easeOut"
        });
      },
      setVive(){
        this.gsap.from(".section-venues1", {
          scrollTrigger: ".section-venues1", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.6,
          scaleX:0.9,
          scaleY:0.9,
          delay:0.4,
          ease: "Power2.easeIn"
        });
        this.gsap.from(".section-venues2", {
          scrollTrigger: ".section-venues2", // start the animation when ".box" enters the viewport (once)
          autoAlpha:0,
          duration:0.6,
          delay:1,
          ease: "Power2.easeIn"
        });
        this.gsap.from(".section-venues-down-img", {
          scrollTrigger: ".section-galery-up-txt3", // start the animation when ".box" enters the viewport (once)
          duration:0.6,
          delay:1,
          scaleX:1.2,
          scaleY:1.2,
        });
        this.gsap.from(this.$refs.logoGalery, {
          scrollTrigger: this.$refs.logoGalery, // start the animation when ".box" enters the viewport (once)
          duration:0.6,
          delay:0.2,
          scaleX:0,
          scaleY:0,
          autoAlpha:0,
        });
        // this.gsap.from(".cdmx-gallery", {
        //   scrollTrigger: ".cdmx-gallery", // start the animation when ".box" enters the viewport (once)
        //   duration:0.6,
        //   autoAlpha:0,
        //   delay:0.2,
        //   ease: "Power2.easeIn"
        // });
        this.gsap.from(".section-galery-up-txt3", {
          scrollTrigger: this.$refs.logoGalery, // start the animation when ".box" enters the viewport (once)
          duration:0.6,
          autoAlpha:0,
          delay:0.4,
          x:80,
          ease: "Power2.easeIn"
        });
        this.gsap.from(this.$refs.teamFast1, {
          scrollTrigger: this.$refs.teamFast1, // start the animation when ".box" enters the viewport (once)
          duration:0.6,
          autoAlpha:0,
          delay:0.2,
          y:-50,
          ease: "Power2.easeOut"
        });
        this.gsap.from(this.$refs.teamFast2, {
          scrollTrigger: this.$refs.teamFast2, // start the animation when ".box" enters the viewport (once)
          duration:0.6,
          autoAlpha:0,
          delay:0.6,
          x:-50,
          ease: "Power2.easeOut"
        });
      },
        handleGoTo(e){
            e.preventDefault();
            this.$router.push('/registro');
        },
        loadfondoHome(){
          this.showFondoInicio();
          this.showLogoInicio();
        },

        setLogoInicio(){
          this.gsap.to(
            this.$refs.logoInicio,
            {autoAlpha: 0, duration: 0, scaleX:0, scaleY:0 }
          );
        },
        setFondoInicio(){
          this.gsap.to(
            this.$refs.fondoInicio,
            {autoAlpha: 0, duration: 0 }
          );
        },
        setWelcome(){
          this.gsap.to(
            ".welcome",
            {autoAlpha: 0, duration: 0, y:400, }
          );
        },

        showFondoInicio(){
          this.gsap.to(
            this.$refs.fondoInicio,
            {autoAlpha: 1, duration: 0.8, ease: "Power2.easeIn" }
          );
        },
        showLogoInicio(){
          this.gsap.to(
            this.$refs.logoInicio,
            {autoAlpha: 1, duration: 0.8, scaleX:1, scaleY:1, delay:0.2, ease: "Power2.easeOut", onComplete: this.showWelcome }
          );
        },
        showWelcome(){
          this.gsap.to(
            ".welcome",
            {autoAlpha: 1, duration: 1, y:0, ease: "Power2.easeOut" }
          );
        },
    }
}
</script>
<style lang="scss" scoped>
.home{
  max-width: 100vw;
  overflow-x: hidden;
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
  .first-section{
    position: relative;
    height: 830px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      height: 1080px;
      .fondo-home{
        padding-top: 152% !important;
        padding-left: 10%;
        width: 210%;
      }
    }
    .logo-container{
        top: 224px;
        position: absolute;
        width: 100%;
        z-index: 1;
        @media screen and (max-width: 1463px) {
          top: 176px;
        }
        @media screen and (max-width: 1252px) {
          top: 166px;
        }
        @media screen and (max-width: 1156px) {
          top: 150px;
        }
        @media screen and (max-width: 1092px) {
          top: 135px;
        }
        @media screen and (max-width: 1000px) {
          top: 125px;
        }
        @media screen and (max-width: 978px) {
          top: 115px;
        }
        @media screen and (max-width: 875px) {
          top: 95px;
        }
        @media screen and (max-width: 768px) {
        top: 80px;
        } 
        @media screen and (max-width: 610px) {
        top: 70px;
        } 
        .logo-galery{
          width: 20%;
          margin: auto;
          @media screen and (max-width: 768px) {
            width: 30%;
          }
        }
      }
  }
  .vertical-sect{
    height: 950px;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    margin: -181px 0 0;
  }
  .section-coaches{
    height: 950px;
    .coaches1{
      height: 100%;
      padding-top:54px !important;
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
    }
    @media screen and (max-width: 768px) {
      clip-path: none;
      height: 100%;
      margin-top: -26%;
    }
    @media screen and (max-width: 687px) {
      margin-top: -28%;
    }
    @media screen and (max-width: 635px) {
      margin-top: -30%;
    }
    @media screen and (max-width: 599px) {
      margin-top: -32%;
    }
    @media screen and (max-width: 561px) {
      margin-top: -34%;
    }
    @media screen and (max-width: 527px) {
      margin-top: -36%;
    }
    @media screen and (max-width: 527px) {
      margin-top: -38%;
    }
    @media screen and (max-width: 469px) {
      margin-top: -40%;
    }
    @media screen and (max-width: 443px) {
      margin-top: -43%;
    }
    @media screen and (max-width: 415px) {
      margin-top: -46%;
    }
    @media screen and (max-width: 387px) {
      margin-top: -49%;
    }
  }
    .coaches2{
      padding-top: 207px !important;
      background: linear-gradient(135deg, #6b6c77, #242127);
      height: 915px;
      @media screen and (max-width: 768px) {
        padding-top: 230px !important;
        clip-path: polygon(0 19%, 100% 0%, 100% 85%, 0% 100%);
        z-index: 1;
        position: relative;
        height: 750px !important;
      }
    .coaches-text{
        padding-right: 52px !important;
      }
      @media screen and (max-width: 1080px) {
        padding-top: 230px !important;
      }
      @media screen and (max-width: 980px) {
        padding-top: 240px !important;
      }
      @media screen and (max-width: 850px) {
        padding-top: 260px !important;
      }
      @media screen and (max-width: 768px) {
        padding-top: 260px !important;
        height: 915px;
      }
    }
    .coaches-text1{
      color: black;
      font-size: 150px;
      line-height: 150px;
      @media screen and (max-width: 1080px) {
        font-size: 140px;
        line-height: 140px;
      }
      @media screen and (max-width: 980px) {
        font-size: 130px;
        line-height: 130px;
      }
      @media screen and (max-width: 850px) {
        font-size: 120px;
        line-height: 120px;
      }
      @media screen and (max-width: 768px) {
        font-size: 90px;
        line-height: 90px;
      }
    }
    .coaches-text2{
      color: white;
      font-size: 180px;
      line-height: 112px;
      padding-left: 51px;
      @media screen and (max-width: 1080px) {
        font-size: 170px;
        line-height: 102px;
      }
      @media screen and (max-width: 980px) {
        font-size: 160px;
        line-height: 92px;
      }
      @media screen and (max-width: 850px) {
        font-size: 150px;
        line-height: 82px;
      }
      @media screen and (max-width: 768px) {
        font-size: 130px;
        line-height: 82px;
      }
    }
    .coaches-text3{
      color: black;
      font-size: 120px;
      line-height: 133px;
      padding-left: 50px;
      @media screen and (max-width: 1080px) {
        font-size: 110px;
        line-height: 123px;
      }
      @media screen and (max-width: 980px) {
        font-size: 100px;
        line-height: 113px;
      }
      @media screen and (max-width: 850px) {
        font-size: 90px;
        line-height: 103px;
      }
      @media screen and (min-width: 769px) and (max-width: 784px) {
        padding-left: 0px;
        text-align: right;
      }
      @media screen and (max-width: 768px) {
        font-size: 80px;
        line-height: 103px;
      }
    }
    .coaches-text4{
      color: white;
      font-size: 80px;
      line-height: 34px;
      padding-left: 181px;
      @media screen and (max-width: 1080px) {
        font-size: 70px;
        line-height: 24px;
      }
      @media screen and (max-width: 980px) {
        font-size: 60px;
        line-height: 14px;
      }
      @media screen and (max-width: 904px) {
        padding-left: 0;
        text-align: right;
      }
      @media screen and (max-width: 850px) {
        font-size: 50px;
        line-height: 4px;
      }
      @media screen and (max-width: 768px) {
        padding-left: 0;
        padding-right: 4%;
      }
    }
  .section-venues-up{
    height: 950px;
    background: black;
    padding-top: 178px;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    margin-top: -178px;
    @media screen and (max-width: 1080px) {
      padding-top: 188px;
    }
    @media screen and (max-width: 980px) {
      padding-top: 198px;
    }
    @media screen and (max-width: 850px) {
      padding-top: 208px;
    }
    @media screen and (max-width: 768px) {
      padding-top: 130px;
      height: 1000px;
    }
    .section-venues1{
      font-size: 180px;
      line-height: 150px;
      color: white;
      text-align:right;
      @media screen and (max-width: 1080px) {
        font-size: 170px;
        line-height: 140px;
      }
      @media screen and (max-width: 980px) {
        font-size: 160px;
        line-height: 130px;
      }
      @media screen and (max-width: 850px) {
        font-size: 150px;
        line-height: 120px;
      }
      @media screen and (max-width: 768px) {
        margin-right: 6%;
        font-size: 110px;
        line-height: 90px;
      }
    }
    .txt-aire{
      color: white;
    }
    .section-venues2{
      font-size: 80px;
      line-height: 80px;
      color: #6d6e79;
      text-align: left;
      padding-left: 24px !important;
      padding-top: 65px !important;
      @media screen and (max-width: 1080px) {
        font-size: 70px;
        line-height: 70px;
      }
      @media screen and (max-width: 980px) {
        font-size: 60px;
        line-height: 60px;
      }
      @media screen and (max-width: 850px) {
        font-size: 50px;
        line-height: 50px;
      }
      @media screen and (max-width: 768px) {
        padding-top: 45px !important;
      }
      span{
        font-size: 120px;
        margin-top: 14px;
        margin-left: 14px;
        position: absolute;
        @media screen and (max-width: 1080px) {
          font-size: 110px;
        }
        @media screen and (max-width: 980px) {
          font-size: 100px;
        }
        @media screen and (max-width: 850px) {
          font-size: 90px;
        }
      }
    }
  }
  .section-venues-down{
    overflow: hidden;
    height: 950px;
    margin-top: -500px !important;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);

    @media screen and (max-width: 768px) {
      height: 198vw;
      clip-path: polygon(0 10%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 693px) {
      // height: 233vw;
      clip-path: polygon(0 11%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 643px) {
      // height: 230vw;
      clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 585px) {
      // height: 227vw;
      clip-path: polygon(0 12%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 539px) {
      // height: 224vw;
      clip-path: polygon(0 13%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 493px) {
      height: 221vw;
      clip-path: polygon(0 14%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 459px) {
      // height: 219vw;
      clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 428px) {
      // height: 216vw;
      clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 406px) {
      // height: 213vw;
      clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 378px) {
      // height: 210vw;
      clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 350px) {
      // height: 207vw;
      clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    }
    @media screen and (max-width: 338px) {
      // height: 202vw;
      clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    }
    .section-venues-down-img{
      -webkit-filter: grayscale(80%);
      filter: grayscale(80%);
      @media screen and (min-width: 769px) {
        .img1-v{
          margin-top: 150px;
        }
        .img2-v{
          margin-top: 120px;
        }
        .img3-v{
          margin-top: 90px;
        }
        .img4-v{
          margin-top: 60px;
        }
        .img5-v{
          margin-top: 30px;
        }
      }
      @media screen and (max-width: 768px) {
        .img1-v{
          padding-top: 250% !important;
        }
        .img2-v{
          padding-top: 250% !important;
        }
      }
    }
    .venue-name{
      color: white;
      position: absolute;
      width: 100%;
      font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
      &.pos-1{
        top: 61%;
      }
      &.pos-2{
        top: 58%;
      }
      &.pos-3{
        top: 56%;
      }
      &.pos-4{
        top: 54%;
      }
      &.pos-5{
        top: 52%;
      }
      &.pos-6{
        top: 50%;
      }
    }
  }
  .section-venues-down-text{
      position: absolute;
      width: 100%;
      padding-top: 146px;
      font-size: 225px;
      z-index: 1;
      color: white;
      text-shadow: -4px 3px 0px #000000;
      @media screen and (max-width: 1471px) {
        padding-top: 10%;
      }
      @media screen and (max-width: 1422px) {
        padding-top: 9%;
      }
      @media screen and (max-width: 1355px) {
        padding-top: 8%;
      }
      @media screen and (max-width: 1092px) {
        padding-top: 8%;
        font-size: 215px;
      }
      @media screen and (max-width: 1047px) {
        padding-top: 7.2%;
      }
      @media screen and (max-width: 946px) {
        padding-top: 7.2%;
        font-size: 205px;
      }
      @media screen and (max-width: 912px) {
        padding-top: 7.2%;
      }
      @media screen and (max-width: 890px) {
        padding-top: 7.2%;
        font-size: 195px;
      }
      @media screen and (max-width: 829px) {
        padding-top: 7.2%;
        font-size: 175px;
      }
      @media screen and (max-width: 768px) {
        padding-top: 59%;
        font-size: 225px;
      }
      @media screen and (max-width: 635px) {
        padding-top: 57%;
        font-size: 225px;
      }
      @media screen and (max-width: 580px) {
        padding-top: 55%;
        font-size: 225px;
      }
      @media screen and (max-width: 520px) {
        padding-top: 53%;
        font-size: 225px;
      }
      @media screen and (max-width: 450px) {
        padding-top: 48%;
        font-size: 225px;
      }
      @media screen and (max-width: 400px) {
        padding-top: 45%;
        font-size: 210px;
      }
      @media screen and (max-width: 370px) {
        padding-top: 42%;
        font-size: 210px;
      }
      @media screen and (max-width: 337px) {
        padding-top: 39%;
        font-size: 200px;
      }
    }
  .second-section{
    background: black;
    background: linear-gradient(60deg, black, #9b98a2 40%, #a1a1a1);
    height: 750px;
    margin-top: -7.5% !important;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    position: relative;
    @media screen and (max-width: 1297px) {
      height: 800px;
    }
    @media screen and (max-width: 768px) {
      height: 860px;
    }
    .logoPuma{

    }
    .join-text{
      padding-top: 218px;
      width: 100%;
      text-align: center;
      font-size: 180px;
      line-height: 150px;
      background: linear-gradient(#82838e, 62%, #dedee0);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      @media screen and (max-width: 1080px) {
        font-size: 170px;
        line-height: 140px;
      }
      @media screen and (max-width: 980px) {
        font-size: 160px;
        line-height: 130px;
      }
      @media screen and (max-width: 850px) {
        font-size: 150px;
        line-height: 120px;
      }
      @media screen and (max-width: 768px) {
        font-size: 95px;
        line-height: 60px;
        padding-top: 170px;
      }
    }
    .join-txt-2{
      font-size: 120px;
      line-height: 120px;
      &.txt-al{
        margin-left:-22px;
        @media screen and (max-width: 768px) {
          margin-left:-12px;
        }
      }
      &.team-txt{
        margin-right: -20px;
        vertical-align: top;
        @media screen and (max-width: 768px) {
          margin-right: -12px;
          line-height: 35px;
        }
      }
      @media screen and (max-width: 1080px) {
        font-size: 110px;
        line-height: 123px;
      }
      @media screen and (max-width: 980px) {
        font-size: 100px;
        line-height: 113px;
      }
      @media screen and (max-width: 850px) {
        font-size: 90px;
        line-height: 103px;
      }
      @media screen and (min-width: 769px) and (max-width: 784px) {
        padding-left: 0px;
        text-align: right;
      }
      @media screen and (max-width: 768px) {
        font-size: 60px;
        line-height: 85px;
      }
    }
    .join-text-r1{
      padding-top: 189px;
      padding-left: 4px;
      padding-right: 4px;
      color: white;
      font-size: 150px;
      line-height: 150px;
      @media screen and (max-width: 1391px) {
        font-size: 140px;
        line-height: 140px;
      }
      @media screen and (max-width: 1273px) {
        font-size: 130px;
        line-height: 130px;
      }
      @media screen and (max-width: 1225px) {
        font-size: 120px;
        line-height: 120px;
      }
      @media screen and (max-width: 1100px) {
        font-size: 100px;
        line-height: 100px;
      }
      @media screen and (max-width: 986px) {
        font-size: 90px;
        line-height: 90px;
      }
      @media screen and (max-width: 860px) {
        font-size: 80px;
        line-height: 90px;
      }
      @media screen and (max-width: 768px) {
        padding-top: 30px;
        font-size: 80px;
        line-height: 100px;
      }
    }
    .join-text-r2{
      color: white;
      padding: 4%;
      font-size: 30px;
      @media screen and (max-width: 1038px) {
        font-size: 25px;
      }
      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
      @media screen and (max-width: 850px) {
      }
    }
    .register-button{
      margin-top: 50px;
      background-color: #6d6e79;
      border-color: #6d6e79;
      color: white;
      font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
      text-transform: uppercase;
      padding: 3px 36px 0;
    }
    .bg2{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: repeating-linear-gradient(-45deg,
        transparent,
        transparent 20px,
        black 20px,
        black 40px);
      /* with multiple color stop lengths */
      background-image: repeating-linear-gradient(11deg,
        transparent 0 14px,
        black 20px calc(5.5%));
    }
    .bg3{
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: linear-gradient(-159deg, transparent, 60%, black);
    }
    @media screen and (max-width: 1857px) {
      margin-top: -8% !important;
    }
    @media screen and (max-width: 1764px) {
      margin-top: -8.5% !important;
    }
    // @media screen and (max-width: 1734px) {
    //   margin-top: -3% !important;
    // }
    @media screen and (max-width: 1704px) {
      margin-top: -9% !important;
    }
    @media screen and (max-width: 1680px) {
      margin-top: -9% !important;
    }
    @media screen and (max-width: 1639px) {
      margin-top: -9% !important;
    }
    @media screen and (max-width: 1612px) {
      margin-top: -9% !important;
    }
    @media screen and (max-width: 1595px) {
      margin-top: -10% !important;
    }
    @media screen and (max-width: 1576px) {
      margin-top: -10% !important;
    }
    @media screen and (max-width: 1529px) {
      margin-top: -11% !important;
    }
    @media screen and (max-width: 1481px) {
      margin-top: -12% !important;
    }
    @media screen and (max-width: 1462px) {
      margin-top: -15% !important;
    }
    @media screen and (max-width: 1381px) {
      margin-top: -18% !important;
    }
    @media screen and (max-width: 1328px) {
      margin-top: -21% !important;
    }
    @media screen and (max-width: 1272px) {
      margin-top: -24% !important;
    }
    @media screen and (max-width: 1224px) {
      margin-top: -27% !important;
    }
    @media screen and (max-width: 1177px) {
      margin-top: -31% !important;
    }
    @media screen and (max-width: 1122px) {
      margin-top: -35% !important;
    }
    @media screen and (max-width: 1073px) {
      margin-top: -38% !important;
    }
    @media screen and (max-width: 1040px) {
      margin-top: -42% !important;
    }
    @media screen and (max-width: 1000px) {
      margin-top: -46% !important;
    }
    @media screen and (max-width: 962px) {
      margin-top: -50% !important;
    }
    @media screen and (max-width: 928px) {
      margin-top: -54% !important;
    }
    @media screen and (max-width: 894px) {
      margin-top: -57% !important;
    }
    @media screen and (max-width: 871px) {
      margin-top: -61% !important;
    }
    @media screen and (max-width: 842px) {
      margin-top: -65% !important;
    }
    @media screen and (max-width: 816px) {
      margin-top: -69% !important;
    }
    @media screen and (max-width: 789px) {
      margin-top: -73% !important;
    }
    @media screen and (max-width: 768px) {
      margin-top: -40% !important;
    }
    @media screen and (max-width: 766px) {
      margin-top: -40% !important;
    }
    @media screen and (max-width: 673px) {
      margin-top: -40% !important;
    }
    @media screen and (max-width: 652px) {
      margin-top: -60% !important;
    }
    @media screen and (max-width: 594px) {
      margin-top: -70% !important;
    }
    @media screen and (max-width: 568px) {
      margin-top: -90% !important;
    }
    @media screen and (max-width: 523px) {
      margin-top: -110% !important;
    }
    @media screen and (max-width: 468px) {
      margin-top: -120% !important;
    }
    @media screen and (max-width: 452px) {
      margin-top: -130% !important;
    }
    @media screen and (max-width: 436px) {
      margin-top: -140% !important;
    }
    @media screen and (max-width: 424px) {
      margin-top: -150% !important;
    }
    @media screen and (max-width: 400px) {
      margin-top: -160% !important;
    }
    @media screen and (max-width: 392px) {
      margin-top: -180% !important;
    }
    @media screen and (max-width: 380px) {
      margin-top: -180% !important;
    }
    @media screen and (max-width: 373px) {
      margin-top: -190% !important;
    }
    @media screen and (max-width: 360px) {
      margin-top: -200% !important;
    }
    @media screen and (max-width: 352px) {
      margin-top: -210% !important;
    }
    @media screen and (max-width: 344px) {
      margin-top: -220% !important;
    }
    @media screen and (max-width: 332px) {
      margin-top: -230% !important;
    }
  }
  .mobile-section{
    height: 950px;
    margin-top: -500px !important;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    @media screen and (max-width: 1471px) {
      margin-top: -37% !important;
    }
    @media screen and (max-width: 1422px) {
      margin-top: -40% !important;
    }
    @media screen and (max-width: 1355px) {
      margin-top: -43% !important;
    }
    @media screen and (max-width: 1300px) {
      margin-top: -46% !important;
    }
    @media screen and (max-width: 1252px) {
      margin-top: -49% !important;
    }
    @media screen and (max-width: 1207px) {
      margin-top: -52% !important;
    }
    @media screen and (max-width: 1164px) {
      margin-top: -55% !important;
    }
    @media screen and (max-width: 1126px) {
      margin-top: -58% !important;
    }
    @media screen and (max-width: 1092px) {
      margin-top: -62% !important;
    }
    @media screen and (max-width: 1047px) {
      margin-top: -66% !important;
    }
    @media screen and (max-width: 1003px) {
      margin-top: -68% !important;
    }
    @media screen and (max-width: 987px) {
      margin-top: -72% !important;
    }
    @media screen and (max-width: 946px) {
      margin-top: -76% !important;
    }
    @media screen and (max-width: 912px) {
      margin-top: -79% !important;
    }
    @media screen and (max-width: 890px) {
      margin-top: -82% !important;
    }
    @media screen and (max-width: 867px) {
      margin-top: -85% !important;
    }
    @media screen and (max-width: 845px) {
      margin-top: -88% !important;
    }
    @media screen and (max-width: 829px) {
      margin-top: -91% !important;
    }
    @media screen and (max-width: 787px) {
      margin-top: -94% !important;
    }    
  }
    .gallery-container{
      position: relative;
      .logo-container{
        top: 335px;
        position: absolute;
        width: 100%;
        z-index: 1;
        @media screen and (max-width: 1252px) {
          top: 270px;
        }
        @media screen and (max-width: 1092px) {
          top: 240px;
        }
        @media screen and (max-width: 867px) {
          top: 200px;
        }
        @media screen and (max-width: 768px) {
          top: 233px;
        }
        @media screen and (max-width: 689px) {
          top: 233px;
        }
        .logo-galery{
          width: 20%;
          margin: auto;
          @media screen and (max-width: 768px) {
            width: 30%;
          }
        }
      }
      // .cdmx-gallery{
      //   margin-top: -35px;
      //   color: #6d6e79;
      //   text-shadow: -4px 3px 0px #000000;
      //   font-size: 225px;
      //   @media screen and (max-width: 1164px) {
      //     margin-top: -70px;
      //   }
      //   @media screen and (max-width: 1092px) {
      //     font-size: 215px;
      //   }
      //   @media screen and (max-width: 987px) {
      //     margin-top: -40px;
      //     font-size: 150px;
      //   }
      //   @media screen and (max-width: 890px) {
      //     font-size: 150px;
      //   }
      //   @media screen and (max-width: 845px) {
      //     margin-top: -30px;
      //     font-size: 125px;
      //   }
      //   @media screen and (max-width: 768px) {
      //     margin-top: -30px;
      //     font-size: 100px;
      //   }
      //   @media screen and (max-width: 768px) {
      //     margin-top: -30px;
      //     font-size: 100px;
      //   }
      // }
    }
  .section-galery-up{
    background: black;
    @media screen and (max-width: 768px) {
      clip-path: none;
      height: 850px;
    }
    .container-txt1{
      padding-top: 158px !important;
      @media screen and (max-width: 1207px) {
        padding-top: 142px !important;
      }
      @media screen and (max-width: 1164px) {
        padding-top: 125px !important;
      }
      @media screen and (max-width: 1047px) {
        padding-top: 118px !important;
      }
      @media screen and (max-width: 1003px) {
        padding-top: 110px !important;
      }
      @media screen and (max-width: 987px) {
        padding-top: 110px !important;
      }
      @media screen and (max-width: 946px) {
        padding-top: 110px !important;
      }
      @media screen and (max-width: 912px) {
        padding-top: 110px !important;
      }
      @media screen and (max-width: 890px) {
        padding-top: 110px !important;
      }
      @media screen and (max-width: 768px) {
        padding-top: 0 !important;
      }

    }
    .section-galery-up-txt1{
      color: white;
      font-size: 180px;
      line-height: 112px;
      text-align: left;
      padding-top: 88px;
      margin-left: 13%;
      @media screen and (max-width: 1373px) {
        font-size: 170px;
        line-height: 102px;
      }
      @media screen and (max-width: 1280px) {
        font-size: 160px;
        line-height: 92px;
      }
      @media screen and (max-width: 1126px) {
        font-size: 150px;
        line-height: 82px;
      }
      @media screen and (max-width: 987px) {
        font-size: 140px;
        line-height: 72px;
      }
      @media screen and (max-width: 890px) {
        font-size: 130px;
        line-height: 62px;
      }
      @media screen and (max-width: 768px) {
        margin: 0 1%;
        line-height: 80px;
        text-align: center ;
        padding-top: 40px;
      }
    }
    .section-galery-up-txt2{
      color: #6d6e79;
      font-size: 120px;
      line-height: 133px;
      text-align: left;
      margin-left: 12%;
      @media screen and (max-width: 1550px) {
        font-size: 110px;
        line-height: 123px;
      }
      @media screen and (max-width: 1373px) {
        font-size: 100px;
        line-height: 113px;
      }
      @media screen and (max-width: 1280px) {
        font-size: 90px;
        line-height: 103px;
      }
      @media screen and (max-width: 1126px) {
        font-size: 80px;
        line-height: 93px;
      }
      @media screen and (max-width: 987px) {
        font-size: 70px;
        line-height: 83px;
      }
      @media screen and (max-width: 890px) {
        font-size: 60px;
        line-height: 73px;
      }
      @media screen and (max-width: 890px) {
        font-size: 60px;
        line-height: 73px;
      }
      @media screen and (max-width: 890px) {
        font-size: 60px;
        line-height: 78px;
      }
    }
    .section-galery-up-txt3{
      color: white;
      width: 60%;
      text-align: right;
      margin-right: 3%;
      font-size: 28px;
      padding-top: 6% !important;
      @media screen and (max-width: 1355px) {
        padding-top: 8% !important;
      }
      @media screen and (max-width: 1047px) {
        font-size: 25px;
      }
      @media screen and (max-width: 890px) {
        padding-top: 9% !important;
        font-size: 22px;
      }
      @media screen and (max-width: 768px) {
        text-align: center;
        margin-left:1%;
        margin-right:1%;
        width: 100%;
        padding-top: 46% !important;
      }
      @media screen and (max-width: 689px) {
        padding-top: 48% !important;
      }
      @media screen and (max-width: 597px) {
        padding-top: 52% !important;
      }
      @media screen and (max-width: 514px) {
        padding-top: 55% !important;
      }
      @media screen and (max-width: 514px) {
        padding-top: 60% !important;
      }
      @media screen and (max-width: 453px) {
        padding-top: 70% !important;
      }
    }
  }
  .section-galery-down{
    background: black;
    -webkit-filter: grayscale(60%);
      filter: grayscale(60%);
    @media screen and (max-width: 768px) {
      margin-top: -24% !important ;
      .model-2{
        padding-top: 153% !important;
      }
    }
    @media screen and (max-width: 717px) {
      .model-2{
        padding-top: 200% !important;
        width: 116%;
      }
    }
    @media screen and (max-width: 600px) {
      .model-2{
        padding-top: 212% !important;
        width: 179%;
      }
    }
    @media screen and (max-width: 447px) {
      .model-2{
        padding-top: 235% !important;
        width: 179%;
      }
    }
    @media screen and (max-width: 408px) {
      .model-2{
        padding-top: 255% !important;
        width: 190%;
      }
    }
    @media screen and (max-width: 377px) {
      .model-2{
        padding-top: 275% !important;
        width: 190%;
      }
    }
    @media screen and (max-width: 346px) {
      .model-2{
        padding-top: 295% !important;
        width: 190%;
      }
    }
    @media screen and (max-width: 752px) {
      margin-top: -25% !important ;
    }
    @media screen and (max-width: 717px) {
      margin-top: -26% !important ;
    }
    @media screen and (max-width: 692px) {
      margin-top: -27% !important ;
    }
    @media screen and (max-width: 669px) {
      margin-top: -28% !important ;
    }
    @media screen and (max-width: 647px) {
      margin-top: -29% !important ;
    }
    @media screen and (max-width: 620px) {
      margin-top: -31% !important ;
    }
    @media screen and (max-width: 583px) {
      margin-top: -34% !important ;
    }
    @media screen and (max-width: 530px) {
      margin-top: -36% !important ;
    }
    @media screen and (max-width: 502px) {
      margin-top: -40% !important ;
    }
    @media screen and (max-width: 447px) {
      margin-top: -43% !important ;
    }
    @media screen and (max-width: 420px) {
      margin-top: -46% !important ;
    }
    @media screen and (max-width: 392px) {
      margin-top: -49% !important ;
    }
    @media screen and (max-width: 365px) {
      margin-top: -53% !important ;
    }
    @media screen and (max-width: 353px) {
      margin-top: -56% !important ;
    }
    @media screen and (max-width: 325px) {
      margin-top: -61% !important ;
    }
    .over-photo{
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      height: 100%;
      text-align: left;
      background: linear-gradient(rgba(96, 168, 247, 0.2),11%, transparent);
    }
  }
  .section-team{
    height: 900px;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    background: black;
    padding-top:12% ;
    position: relative;
    @media screen and (max-width: 1422px) {
      padding-top:15% ;
    }
    @media screen and (max-width: 1126px) {
      padding-top:18% ;
    }
    @media screen and (max-width: 987px) {
      padding-top:20% ;
    }
    @media screen and (max-width: 890px) {
      padding-top:22% ;
    }
    @media screen and (max-width: 768px) {
      margin-top: -36% !important ;
      height: 1000px;
    }
    @media screen and (max-width: 474px) {
      margin-top: -38% !important ;
    }
    @media screen and (max-width: 450px) {
      margin-top: -45% !important ;
    }
    @media screen and (max-width: 383px) {
      margin-top: -49% !important ;
    }
    @media screen and (max-width: 346px) {
      margin-top: -52% !important ;
    }
    @media screen and (max-width: 324px) {
      margin-top: -65% !important ;
    }
    @media screen and (max-width: 308px) {
      margin-top: -80% !important ;
    }
    .logo-container{
      top: 40%;
      position: absolute;
      width: 50%;
      z-index: 1;
      @media screen and (max-width: 1700px) {
        top: 38%;
      }
      @media screen and (max-width: 1550px) {
        top: 36%;
      }
      @media screen and (max-width: 1373px) {
        top: 34%;
      }
      @media screen and (max-width: 1280px) {
        top: 32%;
      }
      @media screen and (max-width: 1126px) {
        top: 31%;
      }
      @media screen and (max-width: 987px) {
        top: 30%;
      }
      @media screen and (max-width: 890px) {
        top: 29%;
      }
      @media screen and (max-width: 768px) {
        position:relative ;
        width: 100%;
      }
      .logo-styles{
        width: 50%;
        margin: auto;
        @media screen and (max-width: 768px) {
          width: 25%;
        }
      }
    }
    .section-team1{
      color:white;
      font-size: 120px;
      line-height: 133px;
      text-align: center;
      @media screen and (max-width: 1550px) {
        font-size: 110px;
        line-height: 123px;
      }
      @media screen and (max-width: 1373px) {
        font-size: 100px;
        line-height: 113px;
      }
      @media screen and (max-width: 1280px) {
        font-size: 90px;
        line-height: 103px;
      }
      @media screen and (max-width: 1126px) {
        font-size: 80px;
        line-height: 93px;
      }
      @media screen and (max-width: 987px) {
        font-size: 70px;
        line-height: 83px;
      }
      @media screen and (max-width: 890px) {
        font-size: 60px;
        line-height: 73px;
      }
      @media screen and (max-width: 768px) {
        margin-top: 20px;
        font-size: 60px;
        line-height: 73px;
        position: relative;
        z-index: 1;
        margin-bottom: 26px;
      }
      @media screen and (max-width: 600px) {
        margin-top: 50px;
      }
      @media screen and (max-width: 568px) {
        margin-top: 60px;
      }
      @media screen and (max-width: 468px) {
        margin-top: 80px;
      }
      @media screen and (max-width: 388px) {
        margin-top: 100px;
      }
      @media screen and (max-width: 308px) {
        margin-top: 100px;
      }
    }
    .section-team-cont{
      background: linear-gradient(#55575f,black);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
    }
    .section-team2{
      position: relative;
      color: white;
      font-size: 24px;
      max-width: 80%;
      margin: auto;
      @media screen and (max-width: 1280px) {
        font-size: 22px;
      }
      @media screen and (max-width: 1126px) {
        font-size: 20px;
      }
      @media screen and (max-width: 987px) {
        font-size: 18px;
      }
      @media screen and (max-width: 768px) {
        padding-top: 50px;
      }
      .team-fast{
        font-size: 80px;
        line-height: 80px;
        color: white;
        text-align: left;
        padding-left: 24px !important;
        padding-top: 65px !important;
        @media screen and (max-width: 1280px) {
          padding-left: 0 !important;
        }
        @media screen and (max-width: 1080px) {
          font-size: 70px;
          line-height: 70px;
        }
        @media screen and (max-width: 980px) {
          font-size: 60px;
          line-height: 60px;
        }
        @media screen and (max-width: 850px) {
          font-size: 50px;
          line-height: 50px;
        }
        span{
          font-size: 120px;
          margin-top: 14px;
          margin-left: 14px;
          position: absolute;
          @media screen and (max-width: 1080px) {
            font-size: 110px;
          }
          @media screen and (max-width: 1047px) {
            font-size: 90px;
          }
          @media screen and (max-width: 980px) {
            font-size: 90px;
          }
          @media screen and (max-width: 850px) {
            font-size: 80px;
          }
        }
      }
    }
  }
  .columns{
    margin: 0;
    .column{
      padding: 0;
    }
  }
  .welcome{
    position: absolute;
    bottom: -8vw;
    right: 0;
    width: 30%;
    height: 524px;
    color: white;
    padding: 24px;
    background: linear-gradient(transparent, 35%, #110315);
    @media screen and (max-width: 1614px) {
      bottom: -7vw;
    }
    @media screen and (max-width: 1384px) {
      bottom: 0vw;
    }
    @media screen and (max-width: 1368px) {
      bottom: 0vw;
    }
    @media screen and (max-width: 1251px) {
      bottom: 5vw;
    }
    @media screen and (max-width: 1178px) {
      width: 34%;
    }
    @media screen and (max-width: 1125px) {
      width: 35%;
      bottom: 6vw;
    }
    @media screen and (max-width: 1002px) {
      bottom: 8vw;
    }
    @media screen and (max-width: 962px) {
      bottom: 11vw;
    }
    @media screen and (max-width: 933px) {
      bottom: 14vw;
    }
    @media screen and (max-width: 894px) {
      bottom: 16vw;
      width: 36%;
    }
    @media screen and (max-width: 875px) {
      bottom: 18vw;
      padding: 14px 16px;
    }
    @media screen and (max-width: 842px) {
      bottom: 22vw;
    }
    @media screen and (max-width: 808px) {
      bottom: 28vw;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      top: 70vw;
      height: 80vh;
    }

    .color-white{
      color: #ffffff;
    }

    .welcome-title{
      font-size: 120px;
      margin: -112px;
      @media screen and (max-width: 1200px) {
        font-size: 110px;
      }
      @media screen and (max-width: 1041px) {
        font-size: 100px;
        margin: -100px;
      }
      @media screen and (max-width: 980px) {
        font-size: 90px;
      }
      @media screen and (max-width: 900px) {
        margin: -90px;
        font-size: 80px;
      }
      @media screen and (max-width: 853px) {
        margin: -86px;
        font-size: 80px;
      }
      @media screen and (max-width: 808px) {
        margin: -72px;
        font-size: 70px;
      }
    }
    .welcome-text{
      font-size: 25px;
      margin-top: 93px;
      @media screen and (max-width: 1514px) {
        font-size: 22px;
      }
      @media screen and (max-width: 1087px) {
        font-size: 19px;
      }
      @media screen and (max-width: 1041px) {
        font-size: 18px;
      }
      @media screen and (max-width: 1038px) {
        margin-top: 78px;
      }
      @media screen and (max-width: 853px) {
        margin-top: 68px;
      }
      @media screen and (max-width: 808px) {
        margin-top: 54px;
      }
    }

  }

  .text-welcome{
    font-size: 25px;
    @media screen and (max-width: 1514px) {
      font-size: 22px;
    }
    @media screen and (max-width: 1087px) {
      font-size: 19px;
    }
    @media screen and (max-width: 1041px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1038px) {
      margin-top: 78px;
    }
    @media screen and (max-width: 853px) {
      margin-top: 68px;
    }
    @media screen and (max-width: 808px) {
      margin-top: 54px;
    }
  }
  .photo-info{
    margin: auto;
    position: absolute;
    bottom: 0;
    font-family: "FFDINforPUMA-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    width: 100%;
    height: 100%;
    background:transparent;
    color: white;
    opacity: 0;
    transition: 0.3s;
    transform: translateY(50px);
    cursor: pointer;
    &:hover, &.always-on {
      opacity: 1;
      transform: translateY(0);
    }
    .photo-info1{
      background: rgba(0, 0, 0, 0.2);
      padding: 15px 14px 10px;
      position: absolute;
      bottom: 20%;
      left: 0;
      font-size: 24px;
    }
  }
  // @keyframes bounce {
  //   0%   { transform: translateY(0); }
  //   50%  { transform: translateY(-100px); }
  //   100% { transform: translateY(0); }
  // }
</style>