<template>
    <div class="footer-styles">
        <div class="columns is-vcentered">
            <div class="column tm-puma footer-1">
                @2022 puma. Todos los derechos reservados
            </div>
            <div  class="column tm-puma">
                <p class="text-center">
                    <img src="/assets/img/G_Logo_Blanco.png" width="50px" >
                    <img src="/assets/img/FCEAD3F3-B3B4-4191-AC0F-F59D13D38564.png" width="50px" class="ml-3">
                </p>
                <p class="text-center">Nuestros patrocinadores</p>
            </div>
            <div class="column tm-puma footer-2">

                <a href="https://www.facebook.com/PUMAMexico" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png"  width="30px"/></a>
                <a href="https://twitter.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png"  width="30px"/></a>
                <a href="https://www.instagram.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png"  width="30px"/></a>
                <a href="https://www.youtube.com/puma" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png"  width="30px"/></a>

            </div>
        </div>
    </div>
</template>
<script>
export default {
   name: 'footer',
}
</script>
<style lang="scss" scoped>
.footer-styles{
    padding: 96px 24px 48px;
    background: linear-gradient(transparent, 35%, #110315);
    opacity: 1;
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
</style>