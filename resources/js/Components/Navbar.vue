<template>
  <b-navbar centered fixed-top spaced transparent class="gradient-bar">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="/assets/img/SITE_PUMA_LOGO_PUMA.png"
          alt="Puma"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :href="{ path: '/' }" :to="{ path: '/' }" class="nav-bar-button" :class="{'button-active':  $route.name =='home'}">
        Inicio
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/sedes' }" class="nav-bar-button" :class="{'button-active':  $route.name =='cedes'}">
        Sedes
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/registro' }" class="nav-bar-button" :class="{'button-active':  $route.name =='registro'}">
        Registro
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/v2/coaches' }" class="nav-bar-button" :class="{'button-active':  $route.name =='coaches'}">
        Coaches
      </b-navbar-item>
      <!--
      <b-navbar-item tag="router-link" :to="{ path: '/venues' }" class="nav-bar-button" :class="{'button-active':  $route.name =='venues'}">
        Venues
      </b-navbar-item>
      -->
      <b-navbar-item tag="router-link" :to="{ path: '/blog' }" class="nav-bar-button" :class="{'button-active':  $route.name =='blog'}">
        Blog
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/albums' }" class="nav-bar-button" :class="{'button-active':  $route.name =='galeria'}">
        Galería
      </b-navbar-item>
    </template>
     <template #end>
      <b-button rounded class="register-button" size="is-medium" @click="handleGoTo">
        ¡Inscríbete aquí!
      </b-button>
    </template>
  </b-navbar>
</template>

<script>
export default {
    name: 'navbar',
    methods: {
        handleGoTo(e){
            e.preventDefault();
            this.$router.push('/registro');
        },
    }
}
</script>
<style lang="scss" scoped>
  .gradient-bar{
    background: rgb(96,169,247);
    // background: linear-gradient(90deg, rgba(96,169,247,1) 0%, rgba(144,106,245,1) 38%, rgba(215,0,251,1) 100%);
    background: transparent;
    color: white;
  }
  a{
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-style: normal;
    text-transform: uppercase;
  }
    @media screen and (min-width: 1024px) {
      .navbar-item img {
        max-height: unset;
        height: 52px;
      }
      .navbar.is-spaced a.navbar-item{
        padding-bottom: 0;
        padding-top: 0;
      }
      #item-end{
        width: 90.94px;
      }
      .nav-bar-button{
        font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
        font-size: 30px;
        padding-top: 0.5rem !important;
        background-color: transparent !important;
        color:white !important;
        &:hover{
          color: white;
          background-color: transparent !important;
        }
        &:focus{
          color: white;
          background-color: transparent !important;

        }
        &:focus-within{
          color: white;
          background-color: transparent !important;
        }
        &.button-active{
          color: white;
          background-color: transparent !important;
        }
      }
    }
  .register-button{
    padding: 3px 36px 0;
  }
</style>