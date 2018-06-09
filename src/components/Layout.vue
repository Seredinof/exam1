<template>
    <div class="page">
        <header class="header">
            <nav>
                <router-link :to="'/'">Home</router-link>
            </nav>
        </header>

        <error/>

        <router-view></router-view>

        <footer class="footer">
            &copy; 2018
        </footer>
    </div>
</template>
<script>

import axios from 'axios'
import error from './Error.vue'

export default {
    components: {
        error
    }
}
</script>
<style>
body {
    margin: 0;
}
.page {
    padding: 0 10px;
}
.header {
    padding: 10px;
    border: 1px solid #000;
    margin: 20px 0 20px;
}

.footer {
    padding: 10px;
    margin-top: 20px;
}
</style>
