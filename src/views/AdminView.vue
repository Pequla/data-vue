<template>
    <h3>Admin Browser Page</h3>
    <div class="font-monospace">
        <div v-if="info" class="border border-2 m-1 p-3">
            <span>Total links: {{ info.totalAccountLinks }}</span>
            <br>
            <span>Total servers: {{ info.serverCount }}</span>
        </div>
        <div class="border border-2 m-1 p-3">
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row" class="name-col" title="Java Edition Usernames Only">
                            Mojang Account by Username:
                        </th>
                        <td class="input-col">
                            <input type="text" class="form-control form-control-sm" v-model="username"
                                v-on:keyup.enter="byUsername">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="byUsername">Serach</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="name-col" title="Java Edition GUIDv4 Only">
                            Link Histroy by UUID:
                        </th>
                        <td class="input-col">
                            <input type="text" class="form-control form-control-sm" v-model="uuid"
                                v-on:keyup.enter="linkByUUID">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="linkByUUID">Serach</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="name-col" title="Java Edition GUIDv4 Only">
                            Discord User by UUID:
                        </th>
                        <td class="input-col">
                            <input type="text" class="form-control form-control-sm" v-model="uuid"
                                v-on:keyup.enter="userByUUID">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="userByUUID">Serach</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="name-col" title="Java Edition GUIDv4 Only">
                            Cached Link by UUID:
                        </th>
                        <td class="input-col">
                            <input type="text" class="form-control form-control-sm" v-model="uuid"
                                v-on:keyup.enter="cacheByUUID">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="cacheByUUID">Serach</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" class="name-col" title="Java Edition GUIDv4 Only">
                            Cached Link by Discord ID:
                        </th>
                        <td class="input-col">
                            <input type="text" class="form-control form-control-sm" v-model="discord"
                                v-on:keyup.enter="cacheByDiscordId">
                        </td>
                        <td>
                            <button class="btn btn-sm btn-secondary" @click="cacheByDiscordId">Serach</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="border border-2 m-1 p-3" v-if="loading">
            <Loading />
        </div>
        <div class="border border-2 m-1 p-3" v-else-if="apiResponse && !loading">
            <VueJsonPretty :data="apiResponse" />
        </div>
        <div class="border border-2 m-1 p-3" v-else>
            <p>Cached Links are fetched from the
                <router-link to="/docs/cache">caching backend.</router-link>
            </p>
            <p>Cached response contains complete user data including both minecraft and discord. For more complex search
                please make sure to use the uncached data.
            </p>
            <p>All search results will get displayed as a formatted JSON string.</p>
        </div>
    </div>
</template>

<script setup>
import VueJsonPretty from 'vue-json-pretty';
import LinkService from "@/services/LinkService";
import 'vue-json-pretty/lib/styles.css';
import { ref } from "vue";
import CacheService from "@/services/CacheService";
import Loading from '@/components/Loading.vue';

const info = ref();
const apiResponse = ref();
const loading = ref(false);
const username = ref('ProNoob2016');
const uuid = ref('06805a4280d0463dbf7151b1e1317cd4');
const discord = ref('358236836113547265')

// Load basic stats
LinkService.getInfo().then(rsp => info.value = rsp.data)

function byUsername() {
    handlePromise(LinkService.getMinecraftAccountByName(username.value))
}

function linkByUUID() {
    handlePromise(LinkService.getLinkDataByUUID(uuid.value))
}

function userByUUID() {
    handlePromise(LinkService.getDiscordUserByUUID(uuid.value))
}

function cacheByUUID() {
    handlePromise(CacheService.getDataByUUID(uuid.value))
}

function cacheByDiscordId() {
    handlePromise(CacheService.getDataByDiscordId(discord.value))
}

function handlePromise(promise) {
    loading.value = true
    promise
        .then(rsp => {
            apiResponse.value = rsp.data
            loading.value = false
        })
        .catch(e => apiResponse.value = {
            name: e.name,
            message: e.message,
            code: e.code
        })
}
</script>

<style scoped>
.name-col {
    width: 30%;
}

.input-col {
    width: 60%;
}

.btn-col {
    width: 10%;
}
</style>