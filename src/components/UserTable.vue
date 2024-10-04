<template>
    <table class="table table-striped table-hover mx-auto">
        <thead>
            <tr>
                <th scope="col">ICON</th>
                <th scope="col">MINECRAFT</th>
                <th scope="col" class="mobile-hidden">DISCORD</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user of arr" @click="(e) => goToUser(user)" class="clickable-row">
                <th scope="row">
                    <img class="icon" :src="user.avatar" :alt="user.tag">
                    <img class="icon" :src="`https://visage.surgeplay.com/face/32/${user.uuid}`" :alt="user.name">
                </th>
                <td>{{ user.name }}</td>
                <td class="mobile-hidden">{{ user.tag }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
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