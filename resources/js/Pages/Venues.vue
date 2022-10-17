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
      <div class="columns">
        <template v-if="venues.length">
          <div v-for="(venue, key) in venues.slice(0, 3)" :key="key" class="column is-4" :class="`venue${key}`"  style="position:relative;">
              <div>
                <b-image
                        responsive
                        :src="`/assets/img/${venue.image}`"
                        ratio="1by1"
                ></b-image>
                <div class="columns mt-2">
                  <div class="column is-3">
                    <h3 class="color-white date">
                      {{ venue.workout ? handleFormatDay(venue.workout.date_start) : '-' }}<br />
                      {{ venue.workout ? handleFormatMonth(venue.workout.date_start) : '-' }}
                    </h3>
                  </div>
                  <div class="column is-9 color-white" style="text-align: left">
                    <div class="text-photo-title venue-active">{{ venue.name }}</div>
                    <div class="contain-register-button">
                      <b-button rounded class="register-button mt-2"  :disabled="venue.workout.active == 0"  :data-id="venue.id" @click="handleGoTo(venue.slug)">
                        ¡Regístrate ahora!
                      </b-button>
                    </div>
                  </div>
                </div>
              </div>

          </div>
          <!--
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

                <b-button rounded class="register-button" size="is-medium" :data-id="venue.id" @click="handleGoTo(venue.slug)">
                  ¡Regístrate ahora!
                </b-button>

              </div>
              <div class="text-photo-date">
                {{ venue.workout ? venue.workout.date_start : '-' }}
              </div>
            </div>
          </div>
          -->
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
      <div class="columns mt-5 mb-5">
        <template v-if="venues.length">
          <div v-for="(venue, key)  in venues.slice(3, 6)" :key="key"  class="column is-4"  :class="`venue${key}`"  style="position:relative;">
            <div>
              <b-image
                      responsive
                      :src="`/assets/img/${venue.image}`"
                      ratio="1by1"
              ></b-image>
              <div class="columns mt-2">
                <div class="column is-3">
                  <h3 class="color-white date">
                    {{ venue.workout ? handleFormatDay(venue.workout.date_start) : '-' }}<br />
                    {{ venue.workout ? handleFormatMonth(venue.workout.date_start) : '-' }}
                  </h3>
                </div>
                <div class="column is-9 color-white" style="text-align: left">
                  <div class="text-photo-title venue-active">{{ venue.name }}</div>
                  <div class="contain-register-button">
                    <b-button rounded class="register-button mt-2" :disabled="venue.workout.active == 0" :data-id="venue.id" @click="handleGoTo(venue.slug)">
                      ¡Regístrate ahora!
                    </b-button>
                  </div>
                </div>
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
    </div>

    <Footer></Footer>

  </div>
</template>
<script>
import Footer from '../Components/Footer.vue';

export default {
    name: 'venues',
    components: {
        Footer
    },
    data() {
        return {
            venues: []
        };
    },
    mounted() {
      console.log( "v=1.1.23" );
      window.scrollTo(0, 0);

        axios
            .get('api/venues')
            .then(({ data }) => {
                this.venues = [].concat(data.data);
            });
    },
    methods:  {
        handleGoTo(slug){
            this.$router.push('/registro/'+slug);
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

        handleFormatDay(date){
           var datetime = date.split(' ');
           let splitDate = datetime[0].split('-');
           console.log(splitDate[2]);
           return splitDate[2];
        },
        handleFormatMonth(date){
            var datetime = date.split(' ');
            let splitDate = datetime[0].split('-');

            let months = {
                '07': 'jul',
                '08': 'ago',
                '09': 'sep',
                '10': 'oct',
                '11': 'nov',
                '12': 'dic'
            };
            return months[splitDate[1]];
        }
    }

}
</script>
<style lang="scss" scoped>
  .date{
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .register-button{
    // background-color: #c624f1;
    border-color: white;
    // color: white;
    // font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    // text-transform: uppercase;
    padding: 3px 36px 0;
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
  .color-white{
    color: #ffffff;
  }
  .venues_photos{
    margin: 0 20px;
    padding: 20px;
    background-color: black;
  }
  .venues{
    background: linear-gradient(90deg, #6d6e79, #ebebed);
    overflow-x: hidden;
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
    background: linear-gradient( transparent, black 32%, black);
    opacity: 1;
    @media screen and (max-width: 768px) {
      background: linear-gradient( transparent, black 25%, black);
    }
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
  .contain-register-button{
    @media screen and (max-width: 768px) {
      text-align:center;
      margin-bottom: 24px;
    }
  }
  .text-photo-title{
    color: white;
    font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
    width: 100%;
    text-transform: uppercase;
    font-size: 18px;
    padding: 0 12px;
    @media screen and (max-width: 768px) {
      text-align:center;
    }
  }
  .text-photo-date{
    position: absolute;
    color: white;
    font-family: "FFDINforPUMA-Bold", "Helvetica Neue", Helvetica, Arial, sans-serif;
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