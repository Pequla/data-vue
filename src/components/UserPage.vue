<template>
  <div v-if="result && result.content.length > 0">
    <nav>
      <ul class="pagination justify-content-start">
        <li class="page-item">
          <select class="form-select" v-model="size" @change="changeSize">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </li>
        <li class="page-item">
          <button class="page-link" @click="firstPage">First</button>
        </li>
        <li class="page-item">
          <button class="page-link" @click="previousPage">Previous</button>
        </li>
        <li class="page-item active">
          <button class="page-link">{{ result.number }}</button>
        </li>
        <li class="page-item">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
        <li class="page-item">
          <button class="page-link" @click="lastPage">Last</button>
        </li>
      </ul>
    </nav>
    <table class="table table-striped mx-auto">
      <thead>
        <tr>
          <th scope="col">ICON</th>
          <th scope="col">MINECRAFT</th>
          <th scope="col" class="mobile-hidden">DISCORD</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user of result.content" @click="(e) => goToUser(user)" class="clickable-row">
          <th scope="row">
            <img class="icon" :src="user.avatar" :alt="user.tag">
            <img class="icon" :src="`https://visage.surgeplay.com/face/32/${user.uuid}`" :alt="user.name">
          </th>
          <td>{{ user.name }}</td>
          <td class="mobile-hidden">{{ user.tag }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else-if="result && result.content.length === 0">
    Sorry, no data was found
  </div>
  <div v-else>
    Loading data, please wait...
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, toRefs } from 'vue'
import { useRouter } from "vue-router";

const props = defineProps({
  baseUrl: String
});
const { baseUrl } = toRefs(props);

// Page size in localstorage
const pageSizeKey = 'PAGE_SIZE';
if (!localStorage.getItem(pageSizeKey))
  localStorage.setItem(pageSizeKey, 10)

const result = ref(null);
const size = ref(parseInt(localStorage.getItem(pageSizeKey)));
const retrieveData = (p = 0, s = size.value) => {
  axios.get(baseUrl.value, {
    params: {
      page: p,
      size: s,
      sort: "id,desc"
    }
  }).then(rsp => result.value = rsp.data)
}

// Initial call
retrieveData();

// Next Page
const nextPage = () => {
  if (result.value.last) return;
  retrieveData(result.value.number += 1, result.value.size)
}

// Previous Page
const previousPage = () => {
  if (result.value.first) return;
  retrieveData(result.value.number -= 1, result.value.size)
}

// First Page
const firstPage = () => {
  if (result.value.first) return;
  retrieveData()
}

// Last Page
const lastPage = () => {
  if (result.value.last) return;
  retrieveData(result.value.totalPages - 1)
}

// Change Size
const changeSize = (e) => {
  const newSize = e.target.value
  localStorage.setItem(pageSizeKey, newSize)
  retrieveData(0, newSize)
}

const router = useRouter();
const goToUser = (user) => {
  router.push('/user/' + user.discordId)
}
</script>