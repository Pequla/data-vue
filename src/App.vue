<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        DataVue
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link dropdown-toggle" to="/docs" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Docs
            </router-link>
            <ul class="dropdown-menu">
              <li>
                <router-link to="/docs/cache" class="dropdown-item">Data Cache</router-link>
              </li>
              <li>
                <router-link to="/docs/link" class="dropdown-item">Data Link</router-link>
              </li>
              <li>
                <router-link to="/docs/master" class="dropdown-item">Master</router-link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Username" aria-label="Username" v-model="lookup"
            @keypress="keyPressHandler">
          <button class="btn btn-outline-success" type="button" @click="search">Search</button>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
    <footer class="text-center">
      <p class="m-0 p-0">&copy; {{ year }} <a href="https://github.com/Pequla">Pequla</a> | Powered by <a
          href="https://getbootstrap.com/">Boostrap 5</a> & <a href="https://vuejs.org/">Vue 3</a></p>
      <p class="m-0 p-0">Source code available on <a href="https://github.com/Pequla/data-vue">GitHub</a></p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const year = new Date().getFullYear();
const router = useRouter();

const lookup = ref(null);
const search = () => {
  if (lookup.value === "" || lookup.value === null) return;
  if (lookup.value.includes(" ")) return;
  router.push('/search/' + lookup.value);
  lookup.value = null;
}

const keyPressHandler= (e) => {
  if (e.key === 'Enter') {
      search();
    }
}
</script>