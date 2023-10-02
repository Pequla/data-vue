<template>
    <h3>Admin Browser Page</h3>
    <div class="font-monospace">
        <div v-if="info" class="border border-2 m-1 p-3">
            <span>Total links: {{ info.totalAccountLinks }}</span>
            <br>
            <span>Total servers: {{ info.serverCount }}</span>
        </div>
        <div class="row g-3 align-items-center m-1 p-3 border border-2">
            <div class="col-auto">
                <label for="username" class="form-label">Mojang Account by Username:</label>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="username" v-model="username" v-on:keyup.enter="byUsername">
                <div class="form-text">
                    Java Edition usernames only
                </div>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" @click="byUsername">Serach</button>
            </div>
        </div>
        <div class="row g-3 align-items-center m-1 p-3 border border-2">
            <div class="col-auto">
                <label for="uuid" class="form-label">Link History by UUID:</label>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="uuid" v-model="uuid" v-on:keyup.enter="linkByUUID">
                <div class="form-text">
                    Java Edition GUIDv4 only
                </div>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" @click="linkByUUID">Serach</button>
            </div>
        </div>
        <div class="row g-3 align-items-center m-1 p-3 border border-2">
            <div class="col-auto">
                <label for="uuid" class="form-label">Discord User by UUID:</label>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="uuid" v-model="uuid" v-on:keyup.enter="userByUUID">
                <div class="form-text">
                    Java Edition GUIDv4 only
                </div>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" @click="userByUUID">Serach</button>
            </div>
        </div>
        <div class="row g-3 align-items-center m-1 p-3 border border-2">
            <div class="col-auto">
                <label for="uuid" class="form-label">Cached Link by UUID:</label>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="uuid" v-model="uuid" v-on:keyup.enter="cacheByUUID">
                <div class="form-text">
                    Java Edition GUIDv4 only
                </div>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" @click="cacheByUUID">Serach</button>
            </div>
        </div>
        <div class="row g-3 align-items-center m-1 p-3 border border-2">
            <div class="col-auto">
                <label for="discord" class="form-label">Cached Link by Discord ID:</label>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control" id="discord" v-model="discord"
                       v-on:keyup.enter="cacheByDiscordId">
                <div class="form-text">
                    Discord ID (long value)
                </div>
            </div>
            <div class="col-auto">
                <button class="btn btn-secondary" @click="cacheByDiscordId">Serach</button>
            </div>
        </div>
        <div class="border border-2 m-1 p-3" v-if="apiResponse">
            <VueJsonPretty :data="apiResponse"/>
        </div>
        <div class="border border-2 m-1 p-3">
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
import {ref} from "vue";
import CacheService from "@/services/CacheService";

const info = ref();
const apiResponse = ref();
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
    handlePromise(CacheService.getDataById(discord.value))
}

function handlePromise(promise) {
    promise
        .then(rsp => apiResponse.value = rsp.data)
        .catch(e => apiResponse.value = {
            name: e.name,
            message: e.message,
            code: e.code
        })
}
</script>

<style scoped>

</style>