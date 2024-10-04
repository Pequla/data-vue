<template>
    <Breadcrumb :crumbs="['User', user.discordId]" v-if="user"></Breadcrumb>
    <UserDetails :user="user"></UserDetails>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserDetails from '@/components/UserDetails.vue';
import CacheService from '@/services/CacheService';
import {ref} from 'vue';
import {useRoute} from 'vue-router'

const route = useRoute()
const id = route.params.id;

const user = ref(null);
CacheService.getDataByDiscordId(id)
    .then(rsp => user.value = rsp.data)
</script>