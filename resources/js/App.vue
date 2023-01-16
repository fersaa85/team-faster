<template>
  <div class="app">
    <!-- <Navbar></Navbar> -->
    <div class="menu">
      <div class="level">
        <div class="level-item">
          <img
            src="/assets/img/SITE_PUMA_LOGO_PUMA.png"
            style="width:182px;"
          />
        </div>
        <div class="level-item button-container" style="padding-left: 145px;">
          Inicio
        </div>
        <div class="level-item button-container">
          Registro
        </div>
        <div class="level-item button-container">
          Coaches
        </div>
        <div class="level-item button-container">
          Blog
        </div>
        <div class="level-item button-container">
          Galería
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
  }
  .button-container{
    margin-top: -60px;
  }
</style>

