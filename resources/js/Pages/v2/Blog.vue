<template>
    <div class="blog">

        <!-- <template v-if="posts.length">
            <div v-for="post in posts">
                <p>{{ post.title }}</p>
                <b-navbar-item tag="router-link" :to="{ path: '/blog/'+post.id }" class="nav-bar-button" :class="{'button-active':  $route.name =='blog'}">
                    {{ post.title }}
                </b-navbar-item>
            </div>
        </template> -->
        <template>
            <br /><br /><br />
            <h1 class="puma-bold" style="color: #ffffff; padding-top: 80px; font-size: 40px; min-height: 45vh;">Próximamente</h1>
        </template>

        <Footer class="footer-style"></Footer>

    </div>
</template>

<script>
import Footer from '@/Components/Footer.vue';

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
        console.log( "v=2.0.1" );
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
.footer-style{
  position: absolute;
  bottom: 0;
  width: 100%;
}
    .venues_photos{
        margin: 0 160px;
        padding: 20px;
        background-color: black;
        @media screen and (max-width: 768px) {
            margin: 0 40px;
        }
    }
    .blog{
        background: url(/assets/img/fondo-blog-puma.jpg);
        background-size: cover;
        overflow-x: hidden;
        min-height: 100vh;
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