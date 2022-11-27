<template>
    <Breadcrumb :crumbs="['Search', user.name]" v-if="user"></Breadcrumb>
    <UserDetails :user="user"></UserDetails>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserDetails from '@/components/UserDetails.vue';
import router from '@/router';
import CacheService from '@/services/CacheService';
import { ref } from 'vue';
import { useRoute } from 'vue-router'

const user = ref(null)
const route = useRoute()

const getUser = function () {
    const name = route.params.name
    if (name)
        CacheService.getDataByName(name)
            .then(rsp => user.value = rsp.data)
}

router.afterEach((to, from, failure) => {
    if (!failure) getUser();
})

getUser();
</script>