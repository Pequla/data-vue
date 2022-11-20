<template>
    <div class="docs">
        <div class="row">
            <div class="col-2">
                <router-link to="/docs" class="btn btn-light w-100">Introduction</router-link>
                <hr />
                <router-link to="/docs/cache" class="btn btn-light w-100">Cache API</router-link>
                <router-link to="/docs/link" class="btn btn-light w-100">Link API</router-link>
                <router-link to="/docs/master" class="btn btn-light w-100">Master API</router-link>
            </div>
            <div class="col-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>