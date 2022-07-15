<template>
  <div class="venues">
    <div class="columns" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="column gotica-italic title-venues">
        <div class="title-venues1">
          Vive una
        </div>
        <div class="title-venues2">
          experiencia
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
      <div class="columns ">
        <div class="column is-clickable" style="position:relative;">
          <b-image
            responsive
            src="/assets/img/FOTO_FORO_S_min.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title venue-active">
            Foro Santa Fe
            <br>
            <span class="puma-regular">
              ¡regístrate ahora!
            </span>
          </div>
          <div class="text-photo-date">
            30 de julio
          </div>
          <!-- <div class="text-photo-register">
            ¡registrate ahora!
          </div> -->
        </div>
        <div class="column is-clickable" style="position:relative;">
          <b-image
            responsive
            src="/assets/img/FOTO_JARDIN_CHA_min.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title two-lines venue-active-third">
            Jardín botánico <br> Chapultepec <br>
            <span class="puma-regular">
              ¡regístrate ahora!
            </span>
          </div>
          <div class="text-photo-date">
            27 de agosto
          </div>
          <!-- <div class="text-photo-register">
            registro pendiente
          </div> -->
        </div>
        <div class="column is-clickable" style="position:relative;">
          <b-image
            responsive
            src="/assets/img/FOTO_CARCAMO_D_min.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title">
            Cárcamo de Dolores
          </div>
          <div class="text-photo-date">
            24 de septiembre
          </div>
          <!-- <div class="text-photo-register">
            registro pendiente
          </div> -->
        </div>
      </div>
      <div class="columns">
        <div class="column is-clickable" style="position:relative;">
          <b-image
            responsive
            src="/assets/img/FOTO_FUENTE_X_min.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title">
            Fuente de Xochipili
          </div>
          <div class="text-photo-date">
            30 de julio
          </div>
          <!-- <div class="text-photo-register">
            registro pendiente
          </div> -->
        </div>
        <div class="column is-clickable" style="position:relative;">
          <b-image
            responsive
            src="/assets/img/FOTO_ARTZ_P_min.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title">
            Artz Pedregal
          </div>
          <div class="text-photo-date">
            30 de julio
          </div>
          <!-- <div class="text-photo-register">
            registro pendiente
          </div> -->
        </div>
        <div class="column is-clickable" style="position:relative;">
          <b-image
            responsive
            src="/assets/img/FOTO_MONUMENTO_R_min.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title two-lines">
            Monumento a <br> la Revolución
          </div>
          <div class="text-photo-date">
            30 de julio
          </div>
          <!-- <div class="text-photo-register">
            registro pendiente
          </div> -->
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
  name: 'venues'
}
</script>
<style lang="scss" scoped>
  .venues_photos{
    margin: 0 20px;
    padding: 20px;
    background-color: black;
  }
  .venues{
    background: linear-gradient(90deg, #60a8f7, rgba(144,106,245,1) 38%, #b935f2);
  }
  .title-venues{
    font-size: 100px;
    color: black;
    line-height: 90px;
    text-align: right;
    @media screen and (max-width: 768px) {
      font-size: 90px;
      color: black;
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
  }
  .text-photo-title{
    position: absolute;
    color: white;
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    width: 100%;
    left: 0;
    top: 50%;
    text-transform: uppercase;
    font-size: 18px;
    &.two-lines{
      top: 47%;
    }
    &.venue-active{
      top: 47%;
    }
    &.venue-active-third{
      top: 42%;
    }
  }
  .text-photo-date{
    position: absolute;
    color: white;
    font-family: "FFDINforPUMA-Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
    width: 100%;
    text-align: right;
    left: 0;
    bottom: 0;
    text-transform: uppercase;
    font-size: 18px;
    padding-right: 20px;
    padding-bottom: 12px;
  }
  .text-photo-register{
    position: absolute;
    color: white;
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    width: 100%;
    text-align: left;
    left: 0;
    top: 0;
    text-transform: uppercase;
    font-size: 18px;
    padding-left: 20px;
    padding-top: 20px;
    color: #d700fb;
  }
</style>