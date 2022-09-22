<template>
    <div class="venues">
        <div class="columns is-vcentered" style="padding-top: 40px; padding-bottom: 40px;">
            <div class="column gotica-italic title-venues">
                <div class="title-venues1">
                    Blog
                </div>
                <div class="title-venues2">

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


        <h1 class="puma-bold" style="color: #ffffff; padding-top: 80px; font-size: 40px; min-height: 45vh;">Próximamente</h1>

        <!--
        <div v-for="post in posts">
            <p>{{ post.title }}</p>
            <b-navbar-item tag="router-link" :to="{ path: '/blog/'+post.slug }" class="nav-bar-button" :class="{'button-active':  $route.name =='blog'}">
                {{ post.title }}
            </b-navbar-item>
        </div>
         -->

        <Footer></Footer>

    </div>
</template>

<script>
import Footer from '../Components/Footer.vue';

export default {
    components: {
        Footer
    },
    data() {
        return {
            posts: [],
            paginate: ['blogs']

        }
    },
    mounted() {
        console.log( "v=1.1.15" );
        axios
            .get('api/blog')
            .then(({ data }) => {
                console.log( data );
                this.posts = [].concat(data.data);
            });

    },

    methods: {

    }

};
</script>

<style lang="scss" scoped>
    .venues_photos{
        margin: 0 160px;
        padding: 20px;
        background-color: black;
        @media screen and (max-width: 768px) {
            margin: 0 40px;
        }
    }
    .venues{
        background: black;
        overflow-x: hidden;
    }
    .title-venues{
        font-size: 100px;
        color: white;
        line-height: 90px;
        text-align: right;
        @media screen and (max-width: 768px) {
            font-size: 90px;
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
    // .img-blackwhite{
    //   -webkit-filter: grayscale(60%);
    //   filter: grayscale(60%);
    // }
</style>