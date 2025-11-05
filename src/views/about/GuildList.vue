<template>
  <div class="guilds">
    <h3>Discord Servers</h3>
    <table class="table table-striped table-hover" v-if="guilds">
      <thead>
        <tr>
          <th scope="col" class="icon-col">ICON</th>
          <th scope="col" class="data-col">NAME</th>
          <th scope="col" class="count-col">MEMBERS</th>
          <th scope="col" class="count-col">OPTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guild in guilds">
          <th scope="row" class="icon-col">
            <img class="icon" :src="guild.iconUrl" :alt="guild.name" v-if="guild.iconUrl" />
            <img class="icon" src="@/assets/img/discord-mark-black.png" alt="guild placeholder" v-else />
          </th>
          <td class="data-col">{{ guild.name }}</td>
          <td class="count-col">{{ guild.memberCount }}</td>
          <td class="data-col">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-primary" @click="goToGuild(guild)">
                <i class="fa-solid fa-circle-info"></i>
              </button>
              <!-- <RouterLink :to="`/user/${guild.lastLinkedData.discordId}`" class="btn btn-sm btn-secondary">
                <i class="fa-solid fa-user"></i>
              </RouterLink> -->
              <a :href="guild.inviteUrl" class="btn btn-sm btn-success" title="Discord Invite" target="_blank" v-if="guild.inviteUrl">
                <i class="fa-solid fa-link"></i>
              </a>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Loading v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";
import LinkService from "@/services/LinkService";
import { RouterLink, useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";

const guilds = ref(null);
LinkService.getGuilds()
  .then(rsp => guilds.value = rsp.data)

const router = useRouter()
const goToGuild = (guild) => {
  router.push('/guild/' + guild.id)
}
</script>