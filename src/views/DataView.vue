<template>
  <h3>Home page</h3>
  <UserPage :base-url="url"></UserPage>
</template>

<script setup>
import UserPage from '@/components/UserPage.vue';

const url = 'https://cache.samifying.com/api/data';
</script>