<template>
  <Breadcrumb :crumbs="['Guild', id]"></Breadcrumb>
  <UserPagination :base-url="url"></UserPagination>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserPagination from '@/components/UserPage.vue';
import {useRoute} from 'vue-router'

const route = useRoute()
const id = route.params.id;

const url = 'https://cache.samifying.com/api/data/guild/' + id;
</script>