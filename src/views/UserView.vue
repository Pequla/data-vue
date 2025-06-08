<template>
    <div v-if="user">
        <Breadcrumb :crumbs="['User', user.discordId]" />
        <div class="row">
            <div class="col-12 col-md-10">
                <table class="table table-striped mb-3">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>{{ user.id }}</th>
                        </tr>
                        <tr>
                            <th>DISCORD ID</th>
                            <th>{{ user.discordId }}</th>
                        </tr>
                        <tr>
                            <th>GUILD ID</th>
                            <th>
                                <router-link :to="'/guild/' + user.guildId">{{ user.guildId }}</router-link>
                            </th>
                        </tr>
                        <tr>
                            <th>MINECRAFT ID</th>
                            <th>{{ user.uuid }}</th>
                        </tr>
                        <tr>
                            <th>AVATAR</th>
                            <th>
                                <img :src="user.avatar" :alt="user.tag" width="64" />
                                <img :src="'https://visage.surgeplay.com/face/' + user.uuid" :alt="user.name"
                                    width="64" />
                            </th>
                        </tr>
                        <tr>
                            <th>DISCORD NAME</th>
                            <th>{{ user.tag }}</th>
                        </tr>
                        <tr>
                            <th>MINECRAFT NAME</th>
                            <th>{{ user.name }}</th>
                        </tr>
                        <tr>
                            <th>CREATED AT</th>
                            <th>{{ DateService.formatDate(user.createdAt) }}</th>
                        </tr>
                        <tr>
                            <th>SKIN</th>
                            <th>
                                <img :src="'https://visage.surgeplay.com/full/' + user.uuid" :alt="user.name" />
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12 col-md-2 mx-auto text-center">
                <div class="mb-3">
                    <h5>Open in App</h5>
                    <QRCodeVue3 :width="150" :height="150" :value="JSON.stringify({
                        type: 'cache',
                        id: user.id
                    })" :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                        :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }" :dotsOptions="{
                            type: 'square',
                            color: '#000000'
                        }" :backgroundOptions="{ color: '#ffffff' }"
                        :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                        :cornersDotOptions="{ type: undefined, color: '#000000' }" />
                </div>
                <div class="mb-3">
                    <h5>Download Now</h5>
                    <a href="/apps/android.apk" class="btn btn-success">
                        Android
                    </a>
                </div>
            </div>
        </div>
    </div>
    <NotFound v-else-if="err" />
    <Loading v-else />
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue';
import Loading from '@/components/Loading.vue';
import CacheService from '@/services/CacheService';
import DateService from '@/services/DateService';
import QRCodeVue3 from 'qrcode-vue3';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import NotFound from './NotFound.vue';

const route = useRoute()
const id = route.params.id;

const user = ref(null)
const err = ref(null)

CacheService.getDataByDiscordId(id)
    .then(rsp => user.value = rsp.data)
    .catch(e => err.value = e)
</script>