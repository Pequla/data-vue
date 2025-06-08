<template>
  <Breadcrumb :crumbs="['Guild', id]"></Breadcrumb>
  <UserPage :guild="id" />
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserPage from '@/components/UserPage.vue';
import {useRoute} from 'vue-router'

const route = useRoute()
const id = route.params.id;
</script>