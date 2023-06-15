<template>
    <div class="text-center mx-auto">
        <h3>Oops, page missing</h3>
        <p>It seams like the page you requested does not exist</p>
        <RouterLink to="/" class="btn btn-primary">Go Home</RouterLink>
    </div>
</template>

<script setup>

import {RouterLink} from 'vue-router';
</script>