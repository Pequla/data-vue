<template>
    <table class="table table-striped table-hover mx-auto">
        <thead>
            <tr>
                <th scope="col" class="icon-col">ICON</th>
                <th scope="col" class="data-col">MINECRAFT</th>
                <th scope="col" class="data-col mobile-hidden">DISCORD</th>
                <th scope="col" class="data-col mobile-hidden">LINKED AT</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user of arr" @click="(e) => goToUser(user)" class="pointer">
                <th scope="row" class="icon-col">
                    <img class="icon" :src="user.avatar" :alt="user.tag">
                    <img class="icon" :src="`https://visage.surgeplay.com/face/32/${user.uuid}`" :alt="user.name">
                </th>
                <td class="data-col">{{ user.name }}</td>
                <td class="data-col mobile-hidden">{{ user.tag }}</td>
                <td class="data-col mobile-hidden">{{ DateService.formatDate(user.createdAt) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import DateService from '@/services/DateService';
import { toRefs } from 'vue'
import { useRouter } from "vue-router";

const props = defineProps({
    arr: Object
});
const { arr } = toRefs(props);

const router = useRouter();
const goToUser = (user) => {
    router.push('/user/' + user.discordId)
}
</script>