<template>
    <section class="articles">
        <Tile v-for="tile in tiles" :key="tile.id" :title="tile.title" 
            :description="tile.description" :type="tile.type" :id="tile.id"/>
    </section>
</template>
<script>

import Tile from './Tile.vue'
import axios from 'axios'

export default {
    components: {
        Tile
    },
    computed: {
        tiles() {
            return this.$store.state.tiles
        }
    },
    mounted() {
        this.$store.dispatch('getTiles');
    }
}
</script>
<style>
/* old browsers > */
.articles::after {
    content: '';
    display: table;
    clear: both;
}
/* < old browsers */

@supports (display: grid) {
    .articles {
        display: grid;
        grid-auto-rows: minmax(300px, auto);
        grid-auto-flow: dense;
    }

    @media (min-width: 480px) {
        .articles {
            grid-template-columns: 1fr 1fr;
            
        }
    }
    @media (min-width: 1025px) {
        .articles {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}
</style>
