<template>
    <div class="text-center mx-auto custom-border">
        <h3>Oops, page missing!</h3>
        <p>It seams like the page you requested does not exist.</p>
        <RouterLink to="/" class="btn btn-primary">Go Home</RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.custom-border {
    max-width: 500px;
    padding: 15px;
    border: 2px solid;
    border-radius: 5px;
    margin-bottom: 10px;
}
</style>