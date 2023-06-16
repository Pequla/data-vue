<template>
    <h3>About the app</h3>
    <p>This application is supposed to help players and minecraft server admins to find and discover data about
        users. The application is using only 2 APIs to display data <code>https://link.samifying.com/api</code>
        and
        <code>https://cache.samifying.com/api</code>
    </p>
    <p>
        The application is running alongside a discord bot that provides mechanisms for data manipulation. Here you can
        find more details about the bot
    </p>
    <table class="table table-striped w-75 mx-auto" v-if="info">
        <tbody>
        <tr>
            <th>APP ID</th>
            <th>{{ info.id }}</th>
        </tr>
        <tr>
            <th>NAME</th>
            <th>{{ info.name }}</th>
        </tr>
        <tr>
            <th>SERVER COUNT</th>
            <th>{{ info.serverCount }}</th>
        </tr>
        <tr>
            <th>ACOUNT LINKS</th>
            <th>{{ info.totalAccountLinks }}</th>
        </tr>
        </tbody>
    </table>

    <div v-if="guilds">
        <h3>Discord servers</h3>
        <table class="table table-striped w-75 mx-auto">
            <thead>
            <tr>
                <th scope="col">ICON</th>
                <th scope="col">NAME</th>
                <th scope="col">ID</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="guild in guilds">
                <th scope="rpw">
                    <img class="icon" :src="guild.iconUrl" :alt="guild.name" v-if="guild.iconUrl"/>
                    <img class="icon" src="@/assets/img/discord-mark-black.png" alt="guild placeholder" v-else/>
                </th>
                <td>{{ guild.name }}</td>
                <th>
                    <router-link :to="'/guild/'+guild.id">{{ guild.id }}</router-link>
                </th>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import LinkService from '@/services/LinkService';
import {ref} from 'vue';

const info = ref(null);
LinkService.getInfo()
    .then(rsp => info.value = rsp.data)

const guilds = ref(null);
LinkService.getGuilds()
    .then(rsp => guilds.value = rsp.data)
</script>