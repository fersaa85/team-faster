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
        <!-- <div class="level-item button-container is-hidden-touch first-menu-item">
          Inicio
        </div> -->
        <b-navbar-item tag="router-link" :to="{ path: '/v2' }" class="level-item button-container nav-bar-button is-hidden-touch first-menu-item" :class="{'button-active':  $route.name =='home'}">
          Inicio
          <div class="line-below line-1"></div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/v2/registro' }" class="level-item button-container nav-bar-button is-hidden-touch" :class="{'button-active':  $route.name =='registro'}">
          Registro
          <div class="line-below line-2"></div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/v2/sedes' }" class="level-item button-container nav-bar-button is-hidden-touch" :class="{'button-active':  $route.name =='sedes'}">
          Sedes
          <div class="line-below line-3"></div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/v2/coaches' }" class="level-item button-container nav-bar-button is-hidden-touch" :class="{'button-active':  $route.name =='coaches'}">
          Coaches
          <div class="line-below line-4"></div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/v2/blog' }" class="level-item button-container nav-bar-button is-hidden-touch" :class="{'button-active':  $route.name =='blog'}">
          Blog
          <div class="line-below line-5"></div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/v2/galeria' }" class="level-item button-container nav-bar-button is-hidden-touch" :class="{'button-active':  $route.name =='galeria'}">
          Galería
          <div class="line-below line-5"></div>
        </b-navbar-item>
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
import '@/Styles/app.scss'

export default {
  name: 'app',
  components: {
    Navbar: () => import('@/Components/Navbar.vue')
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
    position: relative;
    margin-top: -60px;
    padding-left: 24px;
    padding-right: 24px;
    color: white;
    @media screen and (min-width: 1024px) and (max-width: 1133px) {
      padding-top: 24px;
    }
    &:hover{
      color: white;
      background-color: transparent !important;
    }
        &:focus{
          color: white;
          background-color: transparent !important;
          .line-below{
            background-color: #b99571;
            width: calc(100% - 175px);
            height: 5px;
            position: absolute;
            bottom: 0;
            &.line-2{
              width: calc(100% - 63px);
            }
            &.line-3{
              width: calc(100% - 63px);
            }
            &.line-4{
              width: calc(100% - 63px);
            }
            &.line-5{
              width: calc(100% - 63px);
            }
          }
        }
        &:focus-within{
          color: white;
          background-color: transparent !important;
          .line-below{
            background-color: #b99571;
            width: calc(100% - 175px);
            height: 5px;
            position: absolute;
            bottom: 0;
            &.line-2{
              width: calc(100% - 63px);
            }
            &.line-3{
              width: calc(100% - 63px);
            }
            &.line-4{
              width: calc(100% - 63px);
            }
            &.line-5{
              width: calc(100% - 63px);
            }
          }
        }
        &.button-active{
          color: white;
          background-color: transparent !important;
          .line-below{
            background-color: #b99571;
            width: calc(100% - 175px);
            height: 5px;
            position: absolute;
            bottom: 0;
            &.line-2{
              width: calc(100% - 63px);
            }
            &.line-3{
              width: calc(100% - 63px);
            }
            &.line-4{
              width: calc(100% - 63px);
            }
            &.line-5{
              width: calc(100% - 63px);
            }
          }
        }
  }
  .logo-style{
    width:182px;
    @media screen and (min-width: 1408px) {
      width:11vw;
      margin-left: 53px;
    }
    @media screen and (min-width: 1216px) and (max-width: 1408px) {
      width:11vw;
      margin-left: 20px;
    }
    @media screen and (min-width: 1134px) and (max-width: 1215px) {
      width:11vw;
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

