<template>
    <div class="footer-styles">
        <div class="tm-puma columns sponsors" style="text-transform: uppercase;">
            <div class="column is-1-tablet is-4-desktop is-4-widescreen is-4-fullhd">
            </div>
            <div class="column">
                Nuestros patrocinadores:
            </div>
            <div class="column is-1-tablet is-4-desktop is-4-widescreen is-4-fullhd">
            </div>
        </div>
        <!-- <p class="text-center">Nuestros patrocinadores</p> -->
        <div class="columns is-variable is-8 tm-puma" style="margin-bottom: 60px;">
            <div class="column is-2-tablet is-3-desktop is-3-widescreen is-4-fullhd">
            </div>
            <template v-if="sponsors.length">
                <div v-for="(item, index) in sponsors" class="column is-5-mobile" style="margin:auto;">
                    <p class="text-center">
                        <img :src="item.image" width="100px" />
                    </p>
                </div>
            </template>
            <div class="column is-5-mobile" style="margin:auto;">
                <p class="text-center">
                    <img src="/assets/img/G_Logo_Blanco.png" />
                </p>
            </div>
            <div class="column is-5-mobile" style="margin:auto;">
                <p class="text-center" >
                    <img src="/assets/img/FCEAD3F3-B3B4-4191-AC0F-F59D13D38564.png" />
                </p>
            </div>
            <div class="column is-5-mobile" style="margin:auto;">
                <p class="text-center nature" >
                    <img src="/assets/img/Logo_NV.png" />

                </p>
            </div>
            <div class="column is-5-mobile" style="margin:auto;">
                <p class="text-center nature" >
                    <img src="/assets/img/ISDIN-Love-Your-Skin_Blanco.png" />
                </p>
            </div>
            <div class="column is-2-tablet is-3-desktop is-3-widescreen is-4-fullhd">
            </div>
        </div>
        <div class="columns is-vcentered">
            <div class="column tm-puma footer-1">
                @2022 puma. Todos los derechos reservados
            </div>
            <!-- <div class="column tm-puma footer-2">

                <a href="https://www.facebook.com/PUMAMexico" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_FACE.png"  width="30px"/></a>
                <a href="https://twitter.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_TWITT.png"  width="30px"/></a>
                <a href="https://www.instagram.com/pumamexico/" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_INST.png"  width="30px"/></a>
                <a href="https://www.youtube.com/puma" target="_blank" style="margin-left: 5px; margin-right: 5px;"><img src="/assets/img/socials/SITE_TEAM_PUMA_ICONO_YOUT.png"  width="30px"/></a>

            </div> -->
        </div>
    </div>
</template>
<script>
export default {
   name: 'footer',
    data(){
        return {
            isErrors: false,
            sponsors: [],
        };
    },
   mounted() {
       console.log( "v=2.0.1" );
       axios
           .get(`/api/sponsors`)
           .then(({ data: { data } }) => {
               this.sponsors = [].concat(data);
           }).catch( () => {
           this.isErrors = true;
       });
   }
}
</script>
<style lang="scss" scoped>
.footer-styles{
    padding: 96px 24px 48px;
    // background: linear-gradient(transparent, 35%, #110315);
    opacity: 1;
    .footer-1{
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
    .sponsors{
        font-size: 24px;
        margin-bottom: 36px;
        @media screen and (max-width: 1215px) {
            font-size: 20px;
        }
        @media screen and (max-width: 768px) {
            margin-bottom: 0px;
        }
    }
    .nature{
        @media screen and (max-width: 768px) {
            margin-top: -14px;
        }
    }
}
</style>