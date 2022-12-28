<template>
    <div v-if="result">
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
                <li class="page-item" v-if="!result.first">
                    <button class="page-link" @click="retrieveData(result.number - 1, result.size)">{{ result.number - 1
}}</button>
                </li>
                <li class="page-item active">
                    <button class="page-link" @click="retrieveData(result.number, result.size)">{{ result.number
}}</button>
                </li>
                <li class="page-item" v-if="!result.last">
                    <button class="page-link" @click="retrieveData(result.number + 1, result.size)">{{ result.number + 1
}}</button>
                </li>
                <li class="page-item">
                    <button class="page-link" @click="nextPage">Next</button>
                </li>
                <li class="page-item">
                    <button class="page-link" @click="lastPage">Last</button>
                </li>
            </ul>
        </nav>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">USERNAME</th>
                    <th scope="col">DISCORD</th>
                    <th scope="col" v-if="showGuild">GUILD</th>
                    <th scope="col">CREATED AT</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in result.content">
                    <th scope="row">{{ user.id }}</th>
                    <td>{{ user.name }}</td>
                    <td>
                        <router-link :to="'/user/' + user.discordId">{{ user.tag }}</router-link>
                    </td>
                    <td v-if="showGuild">
                        <router-link :to="'/guild/' + user.guildId">{{ user.guildId }}</router-link>
                    </td>
                    <td>{{ DateService.formatDate(user.createdAt) }}</td>
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
import axios from 'axios';
import { toRefs } from 'vue'
import { ref } from 'vue';

const props = defineProps({
    baseUrl: String,
    showGuild: Boolean
});
const { baseUrl, showGuild } = toRefs(props);

// Page size in localstorage
const pageSizeKey = 'PAGE_SIZE';
if (!localStorage.getItem(pageSizeKey))
    localStorage.setItem(pageSizeKey, 15)

const result = ref(null);
const size = ref(parseInt(localStorage.getItem(pageSizeKey)));
const retrieveData = (p = 0, s = size.value) => {
    axios.get(baseUrl.value, {
        params: {
            page: p,
            size: s
        }
    })
        .then(rsp => result.value = rsp.data)
}

// Initial call
retrieveData();

// Next Page
const nextPage = () => {
    if (result.value.last) return;
    retrieveData(result.value.number += 1, result.value.size)
}

// Previus Page
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