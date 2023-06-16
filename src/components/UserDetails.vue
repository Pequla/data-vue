<template>
    <div v-if="user">
        <table class="table table-striped">
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
                    <img :src="user.avatar" :alt="user.tag" width="64"/>
                    <img :src="'https://visage.surgeplay.com/face/' + user.uuid" :alt="user.name" width="64"/>
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
                    <img :src="'https://visage.surgeplay.com/full/' + user.uuid" :alt="user.name"/>
                </th>
            </tr>
            <tr>
                <th>QRCODE (Android App)</th>
                <th>
                    <QRCodeVue3
                            :width="150"
                            :height="150"
                            :value="JSON.stringify({
                            type: 'cache',
                            id: user.id
                            })"
                            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
                            :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
                            :dotsOptions="{
                                type: 'square',
                                color: '#000000'
                            }"
                            :backgroundOptions="{ color: '#ffffff' }"
                            :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                            :cornersDotOptions="{ type: undefined, color: '#000000' }"
                    />
                </th>
            </tr>
            </tbody>
        </table>
    </div>
    <div v-else>
        Loading data, please wait...
    </div>
</template>

<script setup>
import DateService from '@/services/DateService';
import QRCodeVue3 from 'qrcode-vue3';
import {toRefs} from 'vue'

const props = defineProps({
    user: Object
});
const {user} = toRefs(props);
</script>