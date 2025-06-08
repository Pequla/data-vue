<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/img/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
        DataVue
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/">
              Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/search">
              Search
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/about">
              About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/guilds">
              Guilds
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/docs" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Docs
            </RouterLink>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/docs/cache" class="dropdown-item">Data Cache</RouterLink>
              </li>
              <li>
                <RouterLink to="/docs/link" class="dropdown-item">Data Link</RouterLink>
              </li>
              <li>
                <RouterLink to="/docs/master" class="dropdown-item">Master</RouterLink>
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
      <p class="m-0 p-0">&copy; {{ year }} <a href="https://pequla.com" target="_blank">Pequla</a> | Source code
        available
        on <a href="https://github.com/Pequla/data-vue" target="_blank">GitHub</a></p>
    </footer>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>