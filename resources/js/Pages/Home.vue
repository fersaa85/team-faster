<template>
  <div>
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
          <div class="column">
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
              </div>
              <div>
                entrenamientos en combinación con coaches
              </div>
              <div>
                que te ayudarán a liberar tu potencial
              </div>
            </div>
            <div class="puma-bold registrarme-button">
              Registrarme
            </div>
          </div>
          <div class="column">
            <div class="logo-style">
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
        <div class="columns" style="margin: 0;">
          <div class="column is-5" style="padding-top:31vh;">
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
          <div class="column" style="padding-top:35vh;">
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
      <div class="photos-models" style="margin: 0;">
          <b-image
              responsive
              src="/assets/img/models.png"
              ratio="1622by339"
              class="model-2"
            ></b-image>
      </div>
    </section>
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
        panels: null,
        scrollTween:null
      };
    },
    mounted() {
      
    //   this.panels = this.gsap.utils.toArray(".panel");
    //   this.panels.forEach((panel, i) => {
    //     this.scrollTrigger.create({
    //       trigger: panel,
    //       start: "top bottom",
    //       end: "+=100%",
    //       onToggle: self => self.isActive && !this.scrollTween && this.goToSection(i)
    //     });
    //   });
      
    //   // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
    //   this.scrollTrigger.create({
    //     start: 0, 
    //     end: "max",
    //     snap: 1 / (this.panels.length - 1)
    //   })

    //   this.scrollTrigger.normalizeScroll(true);

      // this.gsap.utils.toArray(".panel").forEach((panel, i) => {
      //   this.scrollTrigger.create({
      //     trigger: panel,
      //     start: "top top", 
      //     pin: true, 
      //     pinSpacing: false 
      //   });
      // });


      // this.scrollTrigger.create({
      //   snap: 1 / 3 // snap whole page to the closest section!
      // });
      // this.init();

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
      }
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

  .panel {
    height: 100vh;
    // position: sticky;
    // top: 0;
  }
  .uno{
    background-color: black;
    background-image: url("/assets/img/puma-web1.png");
  }
  .dos{
    background-color: black;
    background-image: url("/assets/img/puma-web2.png");
    position: sticky;
    top: 0;
  }
  .tres{
    background-color: black;
    background-image: url("/assets/img/puma-web3.png");
    position: sticky;
    top: 0;
  }
  .unete{
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 140px;
    text-transform: uppercase;
    line-height: 140px;
    text-align: center;
    color: white;
    border-bottom: 10px solid #b99571;
    margin-left: 130px;
    width: fit-content;
  }
  .logo-simple{
    width: 354px;
    padding-left: 139px;
    padding-top: 54px;
  }
  .vuelvete{
    font-family: 'FFDINforPUMA-Regular"','Helvetica Neue',Helvetica,Arial,sans-serif;
    text-align: left;
    font-size: 35px;
    line-height: 42px;
    color: white;
    padding-left: 15px;
    padding-top: 4px;
  }
  .coaches{
    font-family: 'GoticaModerna-KK-Italic';
    color: white;
    font-size: 132px;
    padding-top: 136px;
  }
  .tu-style{
    width: 27%;
    text-align: center;
    margin: auto;
    margin-top: -47px;
    padding-right: 26px;
    margin-bottom: 20px;
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
    cursor: pointer;
    margin-left: 184px;
  }
  .welcome-text{
    color: white;
    font-size: 33px;
    text-align: left;
    padding-left: 183px;
  }
  .netw-style{
    width: 65px;
    position: relative;
    top: 581px;
    cursor: pointer;
  }
  .welcome-img{
    width: 100%;
    padding-left: 183px;
    padding-bottom: 40px;
    padding-top: 68px;
  }
  .logo-style{
    width: 80%;
    padding-left: 178px;
    margin-top: -51px;
  }
</style>