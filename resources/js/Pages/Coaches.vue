<template>
  <div class="venues">
    <div class="columns" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="column gotica-italic title-venues">
        <div class="title-venues1">
          Nuestros
        </div>
        <div class="title-venues2">
          Coaches
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
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/CARLOS-@charlie.ro22.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title venue-active">
            <div class="photo-info">
              <span class="photo-info1">
                CARLOS
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @charlie.ro22
              </span>
            </div>
          </div>
        </div>
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/DAVID-@dmckniight.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title venue-active">
            <div class="photo-info">
              <span class="photo-info1">
                DAVID
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @dmckniight
              </span>
            </div>
          </div>
        </div>
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/FRANCHESCA-@franchescasb.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title two-lines venue-active-third">
            <div class="photo-info">
              <span class="photo-info1">
                FRANCHESCA
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @franchescasb
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/HOMERO-@HOMEROCASGRO.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title">
            <div class="photo-info">
              <span class="photo-info1">
                HOMERO
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @homerocasgro
              </span>
            </div>
          </div>
        </div>
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/JORGE-@jorgehuo.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title">
            <div class="photo-info">
              <span class="photo-info1">
                JORGE
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @jorgehuo
              </span>
            </div>
          </div>
        </div>
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/MAFER-@maferarreolaa.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title venue-active">
            <div class="photo-info">
              <span class="photo-info1">
                MAFER
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @maferarreolaa
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="columns">
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/PABLO-@pablohutt.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title">
            <div class="photo-info">
              <span class="photo-info1">
                PABLO
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @pablohutt
              </span>
            </div>
          </div>
        </div>
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/RAUL-@raul_vicotria_.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title two-lines">
            <div class="photo-info">
              <span class="photo-info1">
                RAÚL
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @raul_vicotria
              </span>
            </div>
          </div>
        </div>
        <div class="column is-clickable img-container" style="position:relative; padding:0">
          <b-image
            responsive
            src="/assets/img/vlopez.jpg"
            ratio="1by1"
          ></b-image>
          <div class="text-photo-title two-lines">
            <div class="photo-info">
              <span class="photo-info1">
                Victor López
              </span>
              <br>
              <span class="puma-regular photo-info2">
                @nv1ctus
              </span>
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
  name: 'venues'
}
</script>
<style lang="scss" scoped>
  .venues_photos{
    margin: 0 40px;
    padding: 20px;
    background-color: black;
  }
  .venues{
    background: black;
  }
  .title-venues{
    font-size: 100px;
    color: white;
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
    top: 0;
    text-transform: uppercase;
    font-size: 18px;
    // visibility: hidden;
    // opacity: 0;
    height: 100%;
    text-align: left;
    background: linear-gradient(transparent, 80%, #110315);
    .photo-info{
      margin: auto;
      position: absolute;
      bottom: 0;
      padding-bottom: 14px;
      padding-left: 14px;
    }
    .photo-info1{
      font-size: 40px;
    }
    .photo-info2{
      font-size: 20px;
    }
  }
  .img-container:hover .text-photo-title{
    visibility: visible;
    opacity: 1;
  }
</style>