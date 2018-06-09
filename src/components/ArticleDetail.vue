<template>
    <section v-if="tile">
        <h2>{{ tile.title }}</h2>
        <p>{{ tile.text }}</p>
    </section>
</template>
<script>

import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            
        }
    },
    computed: {
        tile() {
            return this.$store.getters.getTileById(parseInt(this.$route.params.id));
        },
        loaded () {
            return this.$store.state.loaded
        }
    },
    watch: {
        loaded: function () {
            this.isNotFound ()
        }
    },
    created () {
        if(!this.loaded) {
            this.$store.dispatch('getTiles');
        }
        this.isNotFound ();
    },
    methods: {
        isNotFound () {
            if(this.loaded && this.tile === undefined) {
                this.$router.push('/404');
            }
        }
    }
}
</script>
<style>

</style>
