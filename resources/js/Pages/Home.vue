<template>
  <div class="home">
    <div class="first-section">
      <b-image
        responsive
        class="fondo-home"
        src="/assets/img/FONDO_HOME.jpg"
        ratio="300by170"
        style="margin-top: 0px;"
      ></b-image>
      <div class="logo-container">
        <div class="logo-galery">
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
        <div class="puma-regular welcome-text">
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
              <div>
                <span>Únete</span>
                <span class="join-txt-2 txt-al">al</span>
              </div>
              <div>
                <span class="join-txt-2 team-txt">Team</span>
                <span>
                  Faster
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
              Fuente de Xochipili
            </div>
            <div class="join-text-r2">
              30 de julio
            </div>
            <div>
              <b-button rounded class="register-button" size="is-medium" @click="handleGoTo">
                  Registrarse
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="vertical-sect section-coaches gotica-italic">
      <div class="columns">
        <div class="column coaches2 is-hidden-tablet">
          <div class="coaches-text">
            <div class="coaches-text1">
              Nuestros
            </div>
            <div class="coaches-text2">
              Coaches
            </div>
            <div class="coaches-text3">
              Están listos...
            </div>
            <div class="coaches-text4">
              ¡Acepta el reto!
            </div>
          </div>
        </div>
        <div class="column coaches1">
          <div class="columns is-multiline" style="margin: 0;">
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/JORGE-@jorgehuo.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/MAFER-@maferarreolaa.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/FRANCHESCA-@franchescasb.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/PABLO-@pablohutt.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/HOMERO-@HOMEROCASGRO.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/CARLOS-@charlie.ro22.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/DAVID-@dmckniight.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/RAUL-@raul_vicotria_.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/vlopez.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
            <div class="column is-6" style="padding:0">
              <b-image
                responsive
                src="/assets/img/JORGE-@jorgehuo.jpg"
                ratio="1by1"       
              ></b-image>
            </div>
          </div>
        </div>
        <div class="column coaches2 is-hidden-mobile">
          <div class="coaches-text">
            <div class="coaches-text1">
              Nuestros
            </div>
            <div class="coaches-text2">
              Coaches
            </div>
            <div class="coaches-text3">
              Están listos...
            </div>
            <div class="coaches-text4">
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
            <span>
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
      <div class="columns section-venues-down-img">
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/FuenteXochipili.jpg"
            ratio="2by4"
            style="margin-top: 150px;"
          ></b-image>
          <div class="venue-name pos-1">
            Fuente de Xochipili
          </div>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/FotoSantaFe.jpg"
            ratio="2by4"
            style="margin-top: 120px;"
          ></b-image>
          <div class="venue-name pos-2">
            Foro Santa Fe
          </div>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/ArtzPedregal.jpg"
            ratio="2by5"
            style="margin-top: 90px;"
          ></b-image>
          <div class="venue-name pos-3">
            Artz Pedregal
          </div>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/JardinBotanico.jpg"
            ratio="2by5"
            style="margin-top: 60px;"
          ></b-image>
          <div class="venue-name pos-4">
            Jardin Botánico Chapultepec
          </div>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/MonumentoRevolucion.jpg"
            ratio="2by5"
            style="margin-top: 30px;"
          ></b-image>
          <div class="venue-name pos-5">
            Monumento a la Revolución
          </div>
        </div>
        <div class="column" style="position: relative;">
          <b-image
            responsive
            src="/assets/img/CarcamoDolores.jpg"
            ratio="2by5"
          ></b-image>
          <div class="venue-name pos-6">
            Cárcamo de Dolores
          </div>
        </div>
      </div>
    </div>
    <div class="gallery-container">
      <div class="logo-container">
        <div class="logo-galery">
          <b-image
            responsive
            src="/assets/img/logoTeamFaster.png"
            ratio="1by1"
          ></b-image>
        </div>
        <div class="cdmx-gallery gotica-italic">
          CDMX
        </div>
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
          <div class="column" style="position: relative;">
            <b-image
              responsive
              src="/assets/img/model1.jpg"
              ratio="88by78"
              style="margin-top: 89px;"
            ></b-image>
            <div class="over-photo">
            </div>
          </div>
          <div class="column" style="position: relative;">
            <b-image
              responsive
              src="/assets/img/model2.jpg"
              ratio="6by5"
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
              Team Faster eres tú, ella, tu amigo, tu pareja o el vecino que encuentras en el elevador a las 6 am en el elevador para ir a entrenar… somos todos aquellos que nos gusta mostrar la mejor versión de nosotros mismos.
            </div>
            <br>
            <div>
              Tenemos un objetivo “compartir la pasión del entrenamiento en un lugar increíble con una ambiente relajado y guiado por coaches que harán de tu sesión la mejor forma de catalizar tu energía”.
            </div>
            <div class="team-fast gotica-italic">
              <div>
                ¡Forma parte
              </div>
              <div>
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
    <div class="footer-styles">
      <div class="columns">
        <div class="column tm-puma has-text-left">
          @2022 puma. Todos los derechos reservados
        </div>
        <div class="column tm-puma has-text-right">
          redes
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',

    mounted() {
        axios
            .get('api/workout')
            .then(({ data }) => {
               console.log(data);
            });
    },

    methods:{
        handleGoTo(e){
            e.preventDefault();
            this.$router.push('/registro');
        }
    }
}
</script>
<style lang="scss" scoped>
  .footer-styles{
    padding: 96px 24px 48px;
    background: linear-gradient(transparent, 35%, #110315);
    opacity: 1;
  }
  .first-section{
    position: relative;
    height: 830px;
    // @media screen and (max-width: 768px) {
    //   height: 951px;
    //   .fondo-home{
    //     padding-top: 70% !important;
    //     padding-left: 10%;
    //     width: 112%;
    //   }
    // }
    // @media screen and (max-width: 768px) {
    //   height: 1004px;
    //   .fondo-home{
    //     padding-top: 74% !important;
    //     padding-left: 10%;
    //     width: 112%;
    //   }
    // }
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
    .coaches2{
      padding-top: 207px !important;
      background: linear-gradient(135deg, #60a8f7, rgba(144,106,245,1) 38%, #b935f2);
      height: 915px;
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
    }
  }
  .section-venues-up{
    height: 950px;
    background: #5fa9f7;
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
      padding-top: 150px;
    }
    .section-venues1{
      font-size: 180px;
      line-height: 150px;
      color: black;
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
    }
    .section-venues2{
      font-size: 80px;
      line-height: 80px;
      color: white;
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
    height: 950px;
    margin-top: -500px !important;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    .section-venues-down-img{
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
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
      color: #c625f2;
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
    }
  .second-section{
    background: black;
    background: linear-gradient(60deg, black, rgba(185, 53, 242, 1) 40%, #446fa9);
    height: 750px;
    // margin-top: -336px !important;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    position: relative;
    .logoPuma{

    }
    .join-text{
      padding-top: 218px;
      width: 100%;
      text-align: center;
      font-size: 180px;
      line-height: 150px;
      background: linear-gradient(#7391f6, 62%, #b737f2);
      -webkit-background-clip: text;
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
        padding-top: 197px;
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
      color: white;
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
        padding-top: 30px;
        font-size: 80px;
        line-height: 100px;
      }
    }
    .join-text-r2{
      color: white;
      font-size: 80px;
      line-height: 34px;
      @media screen and (max-width: 1080px) {
        font-size: 70px;
        line-height: 24px;
      }
      @media screen and (max-width: 980px) {
        font-size: 60px;
      }
      @media screen and (max-width: 850px) {
        font-size: 50px;
        line-height: 14px;
      }
    }
    .register-button{
      margin-top: 50px;
      background-color: #c624f1;
      border-color: #c624f1;
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
      background: linear-gradient(-159deg, transparent, 60%, #110315);
    }
    @media screen and (max-width: 1800px) {
      margin-top: -1% !important;
    }
    @media screen and (max-width: 1762px) {
      margin-top: -2% !important;
    }
    @media screen and (max-width: 1734px) {
      margin-top: -3% !important;
    }
    @media screen and (max-width: 1704px) {
      margin-top: -4% !important;
    }
    @media screen and (max-width: 1680px) {
      margin-top: -5% !important;
    }
    @media screen and (max-width: 1639px) {
      margin-top: -6% !important;
    }
    @media screen and (max-width: 1612px) {
      margin-top: -7% !important;
    }
    @media screen and (max-width: 1576px) {
      margin-top: -9% !important;
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
      margin-top: -78% !important;
    }
    @media screen and (max-width: 766px) {
      margin-top: -81% !important;
    }
    @media screen and (max-width: 750px) {
      margin-top: -85% !important;
    }
    @media screen and (max-width: 730px) {
      margin-top: -89% !important;
    }
    @media screen and (max-width: 710px) {
      margin-top: -93% !important;
    }
    @media screen and (max-width: 691px) {
      margin-top: -97% !important;
    }
    @media screen and (max-width: 673px) {
      margin-top: -100% !important;
    }
    @media screen and (max-width: 661px) {
      margin-top: -104% !important;
    }
    @media screen and (max-width: 646px) {
      margin-top: -111% !important;
    }
    @media screen and (max-width: 621px) {
      margin-top: -115% !important;
    }
    @media screen and (max-width: 607px) {
      margin-top: -120% !important;
    }
    @media screen and (max-width: 592px) {
      margin-top: -125% !important;
    }
    @media screen and (max-width: 577px) {
      margin-top: -134% !important;
    }
    @media screen and (max-width: 566px) {
      margin-top: -140% !important;
    }
    @media screen and (max-width: 551px) {
      margin-top: -145% !important;
    }
    @media screen and (max-width: 539px) {
      margin-top: -150% !important;
    }
    @media screen and (max-width: 527px) {
      margin-top: -155% !important;
    }
    @media screen and (max-width: 515px) {
      margin-top: -160% !important;
    }
    @media screen and (max-width: 506px) {
      margin-top: -175% !important;
    }
    @media screen and (max-width: 373px) {
      margin-top: -190% !important;
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
        .logo-galery{
          width: 20%;
          margin: auto;
        }
      }
      .cdmx-gallery{
        margin-top: -35px;
        color: #5fa9f7;
        font-size: 225px;
        @media screen and (max-width: 1164px) {
          margin-top: -70px;
        }
        @media screen and (max-width: 1092px) {
          font-size: 215px;
        }
        @media screen and (max-width: 987px) {
          margin-top: -40px;
          font-size: 150px;
        }
        @media screen and (max-width: 890px) {
          font-size: 150px;
        }
        @media screen and (max-width: 845px) {
          margin-top: -30px;
          font-size: 125px;
        }

      }
    }
  .section-galery-up{
    background: #c625f2;
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
    }
    .section-galery-up-txt2{
      color: black;
      color: black;
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
    }
    .section-galery-up-txt3{
      color: black;
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
    }
  }
  .section-galery-down{
    background: #c625f2;
    .over-photo{
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      height: 100%;
      text-align: left;
      background: linear-gradient(rgba(96, 168, 247, 0.2),11%, rgba(185, 53, 242, 0.5));
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
      .logo-styles{
        width: 50%;
        margin: auto;
      }
    }
    .section-team1{
      color:#c625f2;
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
    }
    .section-team-cont{
      background: linear-gradient(#4b85c3,black);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
    }
    .section-team2{
      position: relative;
      color: #5fa9f7;
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
    bottom: -10vw;
    right: 0;
    width: 30%;
    height: 524px;
    color: white;
    padding: 24px;
    background: linear-gradient(rgb(198 36 242 / 80%), rgb(21 12 249 / 80%));
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
    @media screen and (max-width: 958px) {
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
    @media screen and (max-width: 826px) {
      bottom: 26vw;
    }
    @media screen and (max-width: 808px) {
      bottom: 28vw;
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
</style>