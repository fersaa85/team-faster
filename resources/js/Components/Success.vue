<template>
    <div class="card">
        <b-button rounded class="close-button" @click="$emit('close')">
            <i class="fas fa-times"></i>
        </b-button>

        <div class="card-content">
            <div class="columns is-vcentered" style="margin-top:29px;">
                <div class="column is-hidden-tablet">
                    <div class="title-image">
                    <b-image
                        responsive
                        src="/assets/img/logoTeamFaster.png"
                        ratio="1by1"
                    ></b-image>
                    </div>
                </div>
                <div class="column is-7 gotica-italic title-venues">
                    <div class="title-venues1">
                        Te esperamos en
                    </div>
                    <div class="title-venues2">
                        {{ info.name }}
                    </div>
                </div>
                <div class="column is-hidden-mobile">
                    <div class="title-image">
                    <b-image
                        responsive
                        src="/assets/img/logoTeamFaster.png"
                        ratio="1by1"
                    ></b-image>
                    </div>
                </div>
            </div>
        <div>
            <div class="info-margin">
                <div class="columns">
                    <div class="column is-5">
                        <div class="info-block">
                        <p class="info-block-title puma-bold">
                            Nombre
                        </p>
                        <p class="info-block-text">
                            {{ info.nameUser || '' }}
                        </p>
                        </div>
                    </div>

                    <div class="column">
                        <div class="info-block">
                        <p class="info-block-title puma-bold">
                            Correo
                        </p>
                        <p class="info-block-text">
                            {{ info.mail || '' }}
                        </p>
                        </div>
                    </div>
                </div>
                <div class="columns">
                <div class="column is-5">
                    <div class="info-block">
                    <p class="info-block-title puma-bold">
                        ¿Cuándo?
                    </p>
                    <p class="info-block-text">
                        {{ info.fecha }}
                    </p>
                    </div>
                </div>

                <div class="column">
                    <div class="info-block">
                    <p class="info-block-title puma-bold">
                        Dónde?
                    </p>
                    <p class="info-block-text">
                        {{ info.lugar }}
                    </p>
                    </div>
                </div>
                </div>

                <div class="columns">
                <div class="column is-5">
                    <div class="info-block">
                    <p class="info-block-title puma-bold">
                        Experiencia workout
                    </p>
                    <p class="info-block-text">
                        {{ info.tipo }}
                    </p>
                    </div>
                </div>
                    <div class="column">
                    <div class="info-block">
                        <p class="info-block-title puma-bold">
                        Coach participante
                        </p>
                        <p class="info-block-text">
                        {{ info.coach.name }} 
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="has-text-centered">
                <add-to-calendar
                    :title="'Team Faster - ' + info.tipo"
                    :location="info.lugar"
                    :start="new Date(info.fecha)"
                    :end="new Date((new Date(info.fecha)).setHours((new Date(info.fecha)).getHours() + 2))"
                    :details="info.name + ' - ' +info.coach"
                    inline-template
                >
                    <div class="puma-bold calendars">
                        <google-calendar id="google-calendar" style="padding-right: 16px;">
                            <i class="fab fa-google"></i>
                            Añadir a Google calendar
                        </google-calendar>

                        <!-- <microsoft-calendar id="microsoft-calendar" style="padding-right: 16px;">
                            <i class="fab fa-windows"></i> Añadir a Microsoft Live calendar
                        </microsoft-calendar> -->

                        <office365-calendar id="office365-calendar" style="padding-right: 16px;">
                            <i class="fab fa-windows"></i> Añadir a Microsoft Outlook calendar
                        </office365-calendar>
                    </div>
                </add-to-calendar>
            </div>
            <div class="has-text-centered">
                <div class="thanks puma-bold">
                    Gracias por registrarte al evento. 
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'SuccessModal',
  props: {
    info: {
      type: Object,
      required: true
    },
  },
}
</script>
<style lang="scss" scoped>
    .card{
        @media screen and (min-width: 769px) {
            max-height: 92vh;
            overflow-y: auto;
        }
        @media screen and (max-width: 768px) {
            padding-top: 268px;
        }
        @media screen and (max-height: 740px) {
            padding-top: 425px;
        }
    }
    .logoCointainer{
        width: 100%;
        @media screen and (max-width: 768px) {
            text-align: center;
        }
    }
    .logoTeamFaster{
        width: 20%;
        @media screen and (max-width: 768px) {
            width: 15%;
            margin: auto;
        }
    }
    .info-block{
    color: black;
    padding-top: 20px;
    font-size: 20px;
    @media screen and (max-width: 1407px) {
      padding-top: 10px;
    }
    @media screen and (max-width: 1023px) {
      font-size: 18px;
    }

    .info-block-text{
      color:black;
    }
    .button{
      margin-bottom: 80px;
      background-color: #46aaff;
      border-color: #46aaff;
      text-transform: uppercase;
      font-size: 18px;
      font-family: 'FFDINforPUMA-Bold','Helvetica Neue',Helvetica,Arial,sans-serif;
      padding: 5px 36px 0;
      @media screen and (max-width: 1407px) {
        padding: 4px 36px 0;
        font-size: 16px;
      }
    }
  }
    .title-venues{
        font-size: 65px;
        line-height: 65px;
        text-align: right;
        color: black;
        @media screen and (max-width: 768px) {
            font-size: 55px;
            line-height: 55px;
            text-align: center;
        }
    }
    .title-image{
        width: 150px;
        @media screen and (max-width: 768px) {
            width: 100px;
            margin: auto;
        }
    }
    .title-venues2{
        font-size: 78px;
        @media screen and (max-width: 768px) {
            font-size: 65px;
        }
    }
    .thanks{
        font-size: 26px;
        color: black;
        padding: 32px 0; 
    }
    .info-margin{
        text-align: left;
        padding: 24px;
    }
    .calendars{
        margin: 40px 0 32px;
        a{
            color: #5fa9f7;
        }
    }
    .close-button{
        position:absolute;
        top:24px;
        right:24px;
        padding-left: 14px;
        padding-right: 14px;
        @media screen and (max-width: 768px) {
            position:fixed;
        }
    }
</style>