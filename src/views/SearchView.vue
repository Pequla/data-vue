<template>
    <Breadcrumb :crumbs="['Search', user.name]" v-if="user"></Breadcrumb>
    <UserDetails :user="user"></UserDetails>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserDetails from '@/components/UserDetails.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
let name = route.params.name

const user = ref(null)
fetch('https://cache.samifying.com/api/data/name/' + name)
        .then(rsp => rsp.json())
        .then(data => user.value = data)

</script>