<template>
    <div class="socialnetwork">
        <div class="socialnetwork-content">
            <a href="https://twitter.com/pumamexico/" target="_blank">
                <img src="/assets/img/brown-twitter.png">
            </a>
            <a href="https://www.facebook.com/PUMAMexico" target="_blank">
                <img src="/assets/img/brown-facebook.png">
            </a>
            <a href="https://www.instagram.com/pumamexico/" target="_blank">
                <img src="/assets/img/brown-instagram.png">
            </a>
            <a href="https://www.youtube.com/puma" target="_blank">
                <img src="/assets/img/brown-youtube.png">
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'socialnetwork',
        props: {

        },
        mounted() {
            console.log("v=2.3.8");
        },
    }
</script>
<style lang="scss" scoped>
    .socialnetwork{
        width: 74px;
        height: 348px;
        // background: url(/assets/img/background-rs.png);
        background-color: #c79777;
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
    }

    .socialnetwork-content{
        position: relative;
        top: 58px;
    }
    .socialnetwork-content > a {
        margin: 2px 0px;
        display: block;
    }
</style>