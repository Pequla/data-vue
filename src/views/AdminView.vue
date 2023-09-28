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
                <label for="username" class="form-label">Account by username:</label>
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
        <div class="border border-2 m-1 p-3" v-if="apiResponse">
            <VueJsonPretty :data="apiResponse"/>
        </div>
    </div>
</template>

<script setup>
import VueJsonPretty from 'vue-json-pretty';
import LinkService from "@/services/LinkService";
import 'vue-json-pretty/lib/styles.css';
import {ref} from "vue";

const info = ref();
const apiResponse = ref();
const username = ref('ProNoob2016');
const uuid = ref('06805a4280d0463dbf7151b1e1317cd4');

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