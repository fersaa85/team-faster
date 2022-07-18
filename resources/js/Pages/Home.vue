<template>
  <div class="home">
    <div class="first-section">
      Bienvenidos
    </div>
    <div class="vertical-sect">
      <div>
        <span>Únete</span>
        <span>al</span>
      </div>
      <div>
        <span>Team Faster</span>
      </div>
    </div>
    <div class="vertical-sect section-coaches gotica-italic">
      <div class="columns">
        <div class="column coaches1">
          <div class="columns" style="margin: 0;">
            <div class="column" style="padding:0">
              <b-image
                responsive
                src="/assets/img/CARLOS-@charlie.ro22.jpg"
                ratio="1by1"
              ></b-image>
            </div>
            <div class="column" style="padding:0">
              <b-image
                responsive
                src="/assets/img/CARLOS-@charlie.ro22.jpg"
                ratio="1by1"
              ></b-image>
            </div>
          </div>
          <div class="columns" style="margin: 0;">
            <div class="column" style="padding:0">
              <b-image
                responsive
                src="/assets/img/CARLOS-@charlie.ro22.jpg"
                ratio="1by1"
              ></b-image>
            </div>
            <div class="column" style="padding:0">
              <b-image
                responsive
                src="/assets/img/CARLOS-@charlie.ro22.jpg"
                ratio="1by1"
              ></b-image>
            </div>
          </div>
        </div>
        <div class="column coaches2">
          <div class="coaches-text1">
            Nuestros
          </div>
          <div class="coaches-text2">
            Coaches
          </div>
          <div class="coaches-text3">
            Están listos...
          </div>
          <div class="coaches-text4">
            Aceptas el reto
          </div>
        </div>
      </div>
    </div>
    <div class="vertical-sect section-venues">
      <div class="columns">
        <div class="column">
          <div>
            Vive una
          </div>
          <div>
            Experiencia
          </div>
        </div>
        <div class="column">
          <div>
            Increíble y totalmente
          </div>
          <div>
            Segura al aire libre
          </div>
        </div>
      </div>
    </div>
    <div class="vertical-sect section-galery">
      <div class="columns">
        <div class="column">
          <div>
            Presume
          </div>
          <div>
            Que eres parte de
          </div>
        </div>
        <div class="column">
          Busca tu foto en el lugar donde entrenaste con el Team y si aún no estás inscrito inspirate visitando la galería.
        </div>
      </div>
    </div>
    <div class="vertical-sect">
      <div class="columns">
        <div class="column">
          ¿Quiénes somos?
        </div>
        <div class="column">
          <div>
            ¡Forma parte
          </div>
          <div>
            del Team Faster
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
  name: 'home',

    mounted() {
        axios
            .get('api/workout')
            .then(({ data }) => {
               console.log(data);
            });
    }
}
</script>
<style lang="scss" scoped>
  .footer-styles{
    padding: 96px 24px 48px;
    background: linear-gradient(transparent, 35%, #110315);
    opacity: 1;
  }
  .first-section{
    height: 800px;
  }
  .vertical-sect{
    height: 800px;
    clip-path: polygon(0 19%, 100% 0%, 100% 100%, 0% 100%);
    margin: -114px 0 0;
    padding-top: 114px;
  }
  .section-coaches{
    background: linear-gradient(90deg, #60a8f7, rgba(144,106,245,1) 38%, #b935f2);
    .coaches1{

    }
    .coaches2{
    }
    .coaches-text1{
      color: black;
      font-size: 213px;
      line-height: 150px;
    }
    .coaches-text2{
      color:white;
      font-size: 260px;
      line-height: 220px;
    }
    .coaches-text3{
      color: black;
      font-size: 111px;
      line-height: 70px;
    }
    .coaches-text4{
      color:white;
      font-size: 43px;
      line-height:43px;
    }
  }
  .section-venues{
    background: #5fa9f7;
  }
  .section-galery{
    background: #c625f2;
  }
  .columns{
    margin: 0;
    .column{
      padding: 0;
    }
  }
</style>