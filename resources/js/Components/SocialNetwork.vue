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
    }
</script>
<style lang="scss" scoped>
    .socialnetwork{
        width: 74px;
        height: 348px;
        background: url(/assets/img/background-rs.png);
        background-size: cover;
    }

    .socialnetwork-content{
        position: relative;
        top: 50px;
    }
    .socialnetwork-content > a {
        margin: 2px 0px;
        display: block;
    }
</style>