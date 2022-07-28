<template>
    <section class="pt-5 pb-5">
        <h1> Post </h1>
    </section>
</template>
<script>
export default {
    data() {
       return {
       };
    },
    mounted() {
        console.log( this.$route.params.slug );
        axios
            .get('/api/blog/'+this.$route.params.slug)
            .then(({ data }) => {
                console.log( data );
            });

    },

    methods: {

    }


};
</script>