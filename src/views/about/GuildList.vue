<template>
  <div class="guilds">
    <h3>Discord Servers</h3>
    <table class="table table-striped table-hover" v-if="guilds">
      <thead>
      <tr>
        <th scope="col" class="icon-col">ICON</th>
        <th scope="col" class="data-col">NAME</th>
        <th scope="col" class="count-col">MEMBERS</th>
        <th scope="col" class="data-col mobile-hidden">ID</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="guild in guilds" @click="(e)=>goToGuild(guild)" class="pointer">
        <th scope="row" class="icon-col">
          <img class="icon" :src="guild.iconUrl" :alt="guild.name" v-if="guild.iconUrl"/>
          <img class="icon" src="@/assets/img/discord-mark-black.png" alt="guild placeholder" v-else/>
        </th>
        <td class="data-col">{{ guild.name }}</td>
        <td class="count-col">{{ guild.memberCount }}</td>
        <td class="data-col mobile-hidden">{{ guild.id }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {ref} from "vue";
import LinkService from "@/services/LinkService";
import {useRouter} from "vue-router";

const guilds = ref(null);
LinkService.getGuilds()
    .then(rsp => guilds.value = rsp.data)

const router = useRouter()
const goToGuild = (guild) => {
  router.push('/guild/' + guild.id)
}
</script>