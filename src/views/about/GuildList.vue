<template>
  <div class="guilds">
    <h3>Discord servers</h3>
    <table class="table table-striped" v-if="guilds">
      <thead>
      <tr>
        <th scope="col">ICON</th>
        <th scope="col">NAME</th>
        <th scope="col" class="mobile-hidden">ID</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="guild in guilds" @click="(e)=>goToGuild(guild)" class="clickable-row">
        <th scope="row">
          <img class="icon" :src="guild.iconUrl" :alt="guild.name" v-if="guild.iconUrl"/>
          <img class="icon" src="@/assets/img/discord-mark-black.png" alt="guild placeholder" v-else/>
        </th>
        <td>{{ guild.name }}</td>
        <td class="mobile-hidden">{{ guild.id }}</td>
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