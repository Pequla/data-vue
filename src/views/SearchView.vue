<template>
    <h1 class="h3 text-center">Search Users</h1>
    <div class="input-group mb-3 search-group">
        <span class="input-group-text" id="search-icon">🔍</span>
        <input type="text" class="form-control" placeholder="ex. Pequla" aria-describedby="search-icon" v-model="query"
            @keydown="searchUsers">
    </div>
    <Loading v-if="timer && query != ''" />
    <UserTable :arr="result" v-else-if="result && result.length != 0" />
    <div class="alert alert-danger" v-else-if="result && result.length == 0" role="alert">
        Sorry, we cloudn't find a user with that name!
    </div>
    <div class="alert alert-info" v-else role="alert">
        Noting to show! Make sure to type in something in the field above.
    </div>
</template>

<script setup>
import Loading from '@/components/Loading.vue';
import UserTable from '@/components/UserTable.vue';
import CacheService from '@/services/CacheService';
import { ref } from 'vue';

const query = ref('')
const result = ref()
const timer = ref(null)

async function searchUsers() {
    if (timer.value) {
        clearTimeout(timer.value);
    }

    timer.value = setTimeout(async () => {
        if (query.value === '') {
            result.value = [];
            return;
        }

        const rsp = await CacheService.getDataByName(query.value);
        result.value = rsp.data;
        timer.value = null;
    }, 1000);
}
</script>

<style scoped>
.search-group {
    width: 400px;
    margin-left: auto;
    margin-right: auto;
}

.alert {
    max-width: 600px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}
</style>