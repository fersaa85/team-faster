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
          <div v-for="venue in venues.slice(0, 3)" class="column is-clickable" style="position:relative;">
            <b-image
                    responsive
                    :src="`/assets/img/${venue.thumbnail}`"
                    ratio="1by1"
            ></b-image>
            <div class="text-photo-title venue-active">
              {{ venue.name }}
              <br>

              <template v-if="venue.id == workout.venue.id">
                <b-button rounded class="register-button" size="is-medium" @click="handleGoTo">
                  ¡Regístrate ahora!
                </b-button>
              </template>
              <!--
              <span class="puma-regular">
                ¡Regístrate ahora!
              </span>
              -->
            </div>
            <div class="text-photo-date">
              {{ venue.workout ? venue.workout.date_start : '-' }}
            </div>
            <!-- <div class="text-photo-register">
              ¡registrate ahora!
            </div> -->
          </div>
        </template>
      </div>
      <div class="columns">
        <template v-if="venues.length && Object.keys(workout).length">
          <div v-for="venue in venues.slice(3, 6)" class="column is-clickable" style="position:relative;">
            <b-image
                    responsive
                    :src="`/assets/img/${venue.thumbnail}`"
                    ratio="1by1"
            ></b-image>
            <div class="text-photo-title venue-active">
              {{ venue.name }}
              <br>

              <template v-if="venue.id == workout.venue.id">
                <b-button rounded class="register-button" size="is-medium" @click="handleGoTo">
                  ¡Regístrate ahora!
                </b-button>
              </template>
              <!--
              <span class="puma-regular">
                ¡Regístrate ahora!
              </span>
              -->
            </div>
            <div class="text-photo-date">
              {{ venue.workout ? venue.workout.date_start : '-' }}
            </div>
            <!-- <div class="text-photo-register">
              ¡registrate ahora!
            </div> -->
          </div>
        </template>
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
  name: 'venues',
    data() {
        return {
            workout: {},
            venues: []
        };
    },
    mounted() {
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
        handleGoTo(e){
            e.preventDefault();
            this.$router.push('/registro');
        }
    }

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