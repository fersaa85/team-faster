<template>
  <div class="app">
    <!-- <Navbar class="is-hidden-touch"></Navbar> -->
    <div class="menu">
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <img
              src="/assets/img/SITE_PUMA_LOGO_PUMA.png"
              class="logo-style"
            />
          </div>
        </div>
        <div class="level-item button-container is-hidden-touch first-menu-item">
          Inicio
        </div>
        <div class="level-item button-container is-hidden-touch">
          Registro
        </div>
        <div class="level-item button-container is-hidden-touch">
          Coaches
        </div>
        <div class="level-item button-container is-hidden-touch">
          Blog
        </div>
        <div class="level-item button-container is-hidden-touch">
          Galería
        </div>
        <div class="level-right is-hidden-desktop">
          <div class="level-item">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
import './Styles/app.scss'

export default {
  name: 'app',
  components: {
    Navbar: () => import('./Components/Navbar.vue')
  }
}
</script>
<style lang="scss" scoped>
  .menu{
    position:fixed;
    width:100%;
    z-index: 1;
    color: white;
    font-size: 30px;
    text-transform: uppercase;
    padding: 40px 306px 10px 40px;
    cursor: pointer;
    @media screen and (max-width: 1023px) {
      padding: 40px;
    }
  }
  .button-container{
    margin-top: -60px;
    padding-left: 24px;
    padding-right: 24px;
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      padding-top: 24px;
    }
  }
  .logo-style{
    width:182px;
    @media screen and (min-width: 1408px) {
      width:15vw;
      margin-left: 53px;
    }
    @media screen and (min-width: 1216px) and (max-width: 1408px) {
      width:15vw;
      margin-left: 20px;
    }
    @media screen and (min-width: 1134px) and (max-width: 1215px) {
      width:15vw;
      margin-left: 20px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      width:10vw;
      margin-left: 10px;
    }
    @media screen and (max-width: 1023px) {
      width:8vw;
      margin-left: 0;
    }
    @media screen and (max-width: 768px) {
      width:10vw;
      margin-left: 0;
    }
  }
  .first-menu-item{
    @media screen and (min-width: 1408px) {
      padding-left: 145px;
    }
    @media screen and (min-width: 1216px) and (max-width: 1408px) {
      padding-left: 100px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1215px) {
      padding-left: 50px;
    }
  }
</style>

