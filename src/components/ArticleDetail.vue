<template>
    <section v-if="tile">
        <h2>{{ tile.title }}</h2>
        <p>{{ tile.text }}</p>
    </section>
</template>
<script>

import axios from 'axios'

export default {
    computed: {
        tile() {
            return this.$store.getters.getTileById(parseInt(this.$route.params.id))
        }
    },
    mounted() {
        if(!this.$store.state.tiles.length) {
            this.$store.dispatch('getTiles');
        }
    }
}
</script>
<style>

</style>
