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
        <template v-if="venues.length && Object.keys(workout).length">
          <div v-for="(venue, key) in venues.slice(0, 3)" :key="key" class="column is-clickable" :class="`venue${key}`"  style="position:relative;">
            <div>
              <b-image
                      responsive
                      :src="`/assets/img/${venue.thumbnail}`"
                      ratio="1by1"
              ></b-image>
              <div class="text-photo-title venue-active">
                {{ venue.name }}
                <br>

                <b-button rounded class="register-button" size="is-medium" :data-id="venue.id" @click="handleGoTo(venue.id)">
                  ¡Regístrate ahora!
                </b-button>

              </div>
              <div class="text-photo-date">
                {{ venue.workout ? venue.workout.date_start : '-' }}
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="column empty">
          </div>
          <div class="column empty">
          </div>
          <div class="column empty">
          </div>
        </template>
      </div>
      <div class="columns">
        <template v-if="venues.length && Object.keys(workout).length">
          <div v-for="(venue, key)  in venues.slice(3, 6)" :key="key" class="column is-clickable" :class="`venue${key}`"  style="position:relative;">
            <b-image
                    responsive
                    :src="`/assets/img/${venue.thumbnail}`"
                    ratio="1by1"
            ></b-image>
            <div class="text-photo-title venue-active" :class="{'venue-active': venue.id == workout.venue.id}">
              {{ venue.name }}
              <br>


              <b-button rounded class="register-button" size="is-medium" :data-id="venue.id" @click="handleGoTo(venue.id)">
                ¡Regístrate ahora!
              </b-button>

            </div>
            <div class="text-photo-date">
              {{ venue.workout ? venue.workout.date_start : '-' }}
            </div>
            <!-- <div class="text-photo-register">
              ¡registrate ahora!
            </div> -->
          </div>
        </template>
        <template v-else>
          <div class="column empty">
          </div>
          <div class="column empty">
          </div>
          <div class="column empty">
          </div>
        </template>
      </div>
    </div>
    <div class="footer-styles">
      <div class="columns" style="margin: 0;">
        <div class="column tm-puma has-text-left" >
          @2022 puma. Todos los derechos reservados
        </div>
        <div class="column tm-puma has-text-right">

          <a href="https://www.facebook.com/PUMAMexico" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png"  width="30px"/></a>
          <a href="https://twitter.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png"  width="30px"/></a>
          <a href="https://www.instagram.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png"  width="30px"/></a>
          <a href="https://www.youtube.com/puma" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png"  width="30px"/></a>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'venues',
    data() {
        return {
            workout: {},
            venues: []
        };
    },
    mounted() {
      window.scrollTo(0, 0)
        axios
            .get('api/workout')
            .then(({ data }) => {
                this.workout = Object.assign({}, data.data);
                console.log( this.workout);
            });


        axios
            .get('api/venues')
            .then(({ data }) => {
                this.venues = [].concat(data.data);
            });
    },
    methods:  {
        handleGoTo(venueId){
            this.$router.push('/registro/'+venueId);
        },
        setElement(el){
            this.gsap.to(
                el,
                { autoAlpha: 0, scale:0.8, duration: 0}
            );
        },
        showElement(el, delay){
            this.gsap.to(
                el,
                { autoAlpha: 1, scale:1, duration: 3.5, delay:delay }
            );
        },
    }

}
</script>
<style lang="scss" scoped>
  .register-button{
    // background-color: #c624f1;
    border-color: white;
    // color: white;
    // font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    // text-transform: uppercase;
    // padding: 3px 36px 0;
    // span{
    //   line-height: 1.25rem;
    // }
    @media screen and (max-width: 1024px) {
      font-size: 1rem !important;
    }
    @media screen and (max-width: 940px) {
      font-size: 0.9rem !important;
    }
    @media screen and (max-width: 768px) {
      font-size: 1.25rem !important;
    }
  }
  .venues_photos{
    margin: 0 20px;
    padding: 20px;
    background-color: black;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .venues{
    background: linear-gradient(90deg, #6d6e79, #ebebed);
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
    background: linear-gradient( transparent, black 45%, black);
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
    padding: 0 12px;
    &.two-lines{
      top: 47%;
    }
    &.venue-active{
      top: 43%;
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
  }

  .venue0{
    animation: fadein 1s;
    -moz-animation: fadein 1s; /* Firefox */
    -webkit-animation: fadein 1s; /* Safari and Chrome */
    -o-animation: fadein 1s; /* Opera */
  }

  .venue1{
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
  }

  .venue2{
    animation: fadein 3s;
    -moz-animation: fadein 3s; /* Firefox */
    -webkit-animation: fadein 3s; /* Safari and Chrome */
    -o-animation: fadein 3s; /* Opera */
  }
  .empty{
    height: 30vw;
  }

  @keyframes fadein {
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  }
  @-moz-keyframes fadein { /* Firefox */
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  }
  @-webkit-keyframes fadein { /* Safari and Chrome */
    from {
      opacity:0;
    }
    to {
      opacity:1;
    }
  }
  @-o-keyframes fadein { /* Opera */
    from {
      opacity:0;
    }
    to {
      opacity: 1;
    }
  }
</style>