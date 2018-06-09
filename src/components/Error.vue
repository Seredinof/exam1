<template>
    <div v-if="hasError" class="error">
        {{this.error}}
    </div>
</template>
<script>
export default {
    computed: {
        error () {
            return this.$store.state.error
        },
        hasError () {
            return this.error.length
        }
    }
}
</script>
<style scoped>
.error {
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: .75rem 1.25rem;
}
</style>

