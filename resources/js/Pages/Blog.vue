<template>
    <section class="pt-5 pb-5">
        <h1> Blog </h1>

        <div v-for="post in posts">
            <p>{{ post.title }}</p>
            <b-navbar-item tag="router-link" :to="{ path: '/blog/'+post.slug }" class="nav-bar-button" :class="{'button-active':  $route.name =='blog'}">
                {{ post.title }}
            </b-navbar-item>
        </div>
    </section>
</template>
<script>
export default {

    data() {
        return {
            posts: [],
            paginate: ['blogs']

        }
    },
    mounted() {
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