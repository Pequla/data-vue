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
    <table class="table table-striped" v-if="info">
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

    <div>
        <h3 v-if="guilds">Discord servers</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="guild in guilds">
                    <th scope="row">{{ guild.id }}</th>
                    <td>{{ guild.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const info = ref(null);
fetch('https://link.samifying.com/api/info')
    .then(rsp => rsp.json())
    .then(data => info.value = data)

const guilds = ref(null);
fetch('https://link.samifying.com/api/info/guilds')
    .then(rsp => rsp.json())
    .then(data => guilds.value = data)
</script>
