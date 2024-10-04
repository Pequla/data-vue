<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/img/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
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
            <router-link class="nav-link" aria-current="page" to="/search">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/guilds">Guilds</router-link>
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
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
    <footer class="text-center">
      <p class="m-0 p-0">&copy; {{ year }} <a href="https://pequla.com" target="_blank">Pequla</a> | Source code available
        on <a href="https://github.com/Pequla/data-vue" target="_blank">GitHub</a></p>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>