<template>
    <div class="page">

    </div>
</template>

<script setup>
import { toRefs } from 'vue'
import { ref } from 'vue';
import axios from 'axios'

const props = defineProps({
    url: String,
    thead: Array
});
const { url, thead } = toRefs(props);

const result = ref(null);
const size = ref(15);
const retrieveData = (p = 0, s = size.value) => {
    axios.get(`${url.value}?page=${p}&size=${s}`)
        .then(rsp => result.value = rsp.data)
}
</script>