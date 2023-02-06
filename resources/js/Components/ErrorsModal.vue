<template>
    <div class="card">
        <b-button rounded class="close-button" @click="$emit('close')">
            <i class="fas fa-times"></i>
        </b-button>

        <div class="card-content">
            <div class="columns">
                <div class="column is-12">
                    <div class="info-block">
                        <p class="info-block-title puma-bold">Parece que algo se ha perdido.</p>
                        <p>Puede contactar al mail a <a href="mailto:karina@bulldogad.com">karina@bulldogad.com</a> para mayor soporte  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
   name: 'ErrorsModal',

}
</script>
<style lang="scss" scoped>
</style>