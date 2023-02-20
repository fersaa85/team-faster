<template>
    <div class="blog">
        <div class="columns container-title">
        <div class="column"></div>
        <div class="column puma-bold text-title">
          <div class="text-title1">Blog</div>
        </div>
        <div class="column is-1">
          <div class="line-middle"></div>
        </div>
        <div class="column">
          <div class="logo-style" ref="logoInicio">
            <b-image
              responsive
              src="/assets/img/logo_train.png"
              ratio="565by123"
            ></b-image>
          </div>
        </div>
        <div class="column"></div>
      </div>
        <!-- <template v-if="posts.length">
            <div v-for="post in posts">
                <p>{{ post.title }}</p>
                <b-navbar-item tag="router-link" :to="{ path: '/blog/'+post.id }" class="nav-bar-button" :class="{'button-active':  $route.name =='blog'}">
                    {{ post.title }}
                </b-navbar-item>
            </div>
        </template> -->
        <template>
            <div class="soon-style">
                <b-image
                responsive
                src="/assets/img/soon.png"
                ratio="1051by145"
                ></b-image>
            </div>
        </template>

        <Footer class="footer-style"></Footer>
        <div class="netw-style ">
            <SocialNetwork></SocialNetwork>
        </div>
    </div>
</template>

<script>
import Footer from '@/Components/Footer.vue';
import SocialNetwork from '@/Components/SocialNetwork.vue';

export default {
    components: {
        Footer, SocialNetwork
    },
    data() {
        return {
            posts: [],
            paginate: ['blogs']

        }
    },
    mounted() {
        console.log( "v=2.1.3" );
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
  // position: absolute;
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
        padding-top: 244px;
        @media screen and (max-width: 768px) {
            padding-top: 144px;
        }
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
  .text-title{
    text-align: right;
    text-transform: uppercase;
    color: white;
    font-size:90px;
    margin-right: -10px;
    line-height: 114px;

    @media screen and (max-width: 768px) {
      text-align:center;
      margin: auto;
      line-height: 61px;

    }
  }
  .text-title1{
    font-size:90px;
    @media screen and (max-width: 768px) {
      font-size:60px;
    }
  }
  .container-title{
    margin-bottom: 95px;
  }
  .line-middle{
    height: 100px;
    width: 12px;
    background-color: #b99571;
    margin: auto;
    margin-top: 1px;
    border-radius: 7px;
    @media screen and (max-width: 768px) {
      width: 100px;
      height: 12px;
    }
  }
  .logo-style{
    padding-top: 7px;
    margin-left: -15px;
    @media screen and (max-width: 768px) {
      width:60%;
      margin-left: 0;
      margin: auto;
    }
  }
  .soon-style{
    width: 30%;
    margin: -23px auto 140px;
    @media screen and (max-width: 768px) {
      width:80%;
      margin-left: 0;
      margin: -40px auto 140px;
    }
  }
  .netw-style{
    width: 65px;
    position: absolute;
    top: 400px;
    @media screen and (max-width: 768px) {
    display: none;
      width: 60px;
      top: 530px;
    }
    .socialnetwork{
      width: 60px;
    }
  }
</style>