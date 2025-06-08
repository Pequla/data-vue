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
          <button class="page-link">{{ result.number + 1 }}</button>
        </li>
        <li class="page-item">
          <button class="page-link" @click="nextPage">Next</button>
        </li>
        <li class="page-item">
          <button class="page-link" @click="lastPage">Last</button>
        </li>
      </ul>
    </nav>
    <UserTable :arr="result.content" />
  </div>
  <div class="alert alert-danger" v-else-if="result && result.content.length == 0" role="alert">
    Sorry, no data was found
  </div>
  <Loading v-else />
</template>

<script setup>
import { ref, toRefs } from 'vue'
import UserTable from './UserTable.vue';
import Loading from './Loading.vue';
import CacheService from '@/services/CacheService';

const props = defineProps({
  guild: String | null
});

const { guild } = toRefs(props);

// Page size in localstorage
const pageSizeKey = 'PAGE_SIZE';
if (!localStorage.getItem(pageSizeKey))
  localStorage.setItem(pageSizeKey, 10)

const result = ref(null);
const size = ref(parseInt(localStorage.getItem(pageSizeKey)));

const retrieveData = (p = 0, s = size.value) => {
  if (guild.value) {
    CacheService.getDataByGuild(guild.value, p, s)
      .then(rsp => result.value = rsp.data)
    return
  }

  CacheService.getData(p, s)
    .then(rsp => result.value = rsp.data)
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
</script>