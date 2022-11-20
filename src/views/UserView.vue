<template>
    <Breadcrumb :crumbs="['User', user.discordId]" v-if="user"></Breadcrumb>
    <user-details :user="user"></user-details>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserDetails from '@/components/UserDetails.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id;

const user = ref(null);
fetch('https://cache.samifying.com/api/data/discord/' + id)
    .then(rsp => rsp.json())
    .then(data => user.value = data)
</script>