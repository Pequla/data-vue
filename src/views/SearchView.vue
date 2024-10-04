<template>
    <h1 class="h3">Search users</h1>
    <div class="input-group mb-3 search-group">
        <input type="text" class="form-control" placeholder="ex. Pequla" aria-describedby="search-btn" v-model="query"
            @keydown="searchUsers">
        <button class="btn btn-outline-secondary" type="button" id="search-btn" @click="searchUsers">Search</button>
    </div>
    <UserTable :arr="result" v-if="result && result.length != 0" />
    <p v-else-if="result && result.length == 0" class="text-center">Sorry, we cloudn't find a user with that name</p>
    <p v-else class="text-center">Noting to show! Make sure to type in something in the field above.</p>
</template>

<script setup>
import UserTable from '@/components/UserTable.vue';
import CacheService from '@/services/CacheService';
import { ref } from 'vue';

const query = ref('')
const result = ref()

let timer = null;
async function searchUsers() {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(async () => {
        if (query.value === '') {
            result.value = [];
            return;
        }

        const rsp = await CacheService.getDataByName(query.value);
        result.value = rsp.data;
        timer = null;
    }, 1000);
}
</script>

<style scoped>
.search-group {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}
</style>