<template>
  <div class="guilds" v-if="guilds && other">
    <div class="card mb-3">
      <div class="card-header fw-bold">
        Joined Discord Servers
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" class="icon-col">ICON</th>
              <th scope="col" class="data-col">NAME</th>
              <th scope="col" class="count-col">MEMBERS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="guild in guilds" class="pointer" @click="goToGuild(guild)">
              <th scope="row" class="icon-col">
                <img class="icon" :src="guild.iconUrl" :alt="guild.name" v-if="guild.iconUrl" />
                <img class="icon" src="@/assets/img/discord-mark-black.png" alt="guild placeholder" v-else />
              </th>
              <td class="data-col">{{ guild.name }}</td>
              <td class="count-col">{{ guild.memberCount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card mb-3">
      <div class="card-header fw-bold">
        All Discord Servers
      </div>
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col" class="icon-col">ICON</th>
              <th scope="col" class="data-col">DISCORD ID</th>
              <th scope="col" class="count-col">INTERNAL ID</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="guild in other" class="pointer" @click="goToGuild(guild)">
              <th scope="row" class="icon-col">
                <img class="icon" src="@/assets/img/discord-mark-black.png" :alt="guild.discordId" />
              </th>
              <td class="data-col">{{ guild.discordId }}</td>
              <td class="count-col">{{ guild.id }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Loading v-else />
</template>

<script setup>
import { ref } from "vue";
import LinkService from "@/services/LinkService";
import { useRouter } from "vue-router";
import Loading from "@/components/Loading.vue";

const guilds = ref(null);
LinkService.getJoinedGuilds()
  .then(rsp => guilds.value = rsp.data)

const other = ref(null);
LinkService.getAllGuilds()
  .then(rsp => other.value = rsp.data)

const router = useRouter()
const goToGuild = (guild) => {
  router.push('/guild/' + guild.id)
}
</script>