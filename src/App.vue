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
              <i class="fa-solid fa-house"></i> Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/search">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/about">
              <i class="fa-solid fa-chart-pie"></i> About
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink exact-active-class="active" class="nav-link" aria-current="page" to="/guilds">
              <i class="fa-solid fa-users"></i> Guilds
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/docs" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <i class="fa-solid fa-clipboard"></i> Docs
            </RouterLink>
            <ul class="dropdown-menu">
              <li>
                <RouterLink to="/docs/cache" class="dropdown-item">
                  <i class="fa-brands fa-database"></i> Data Cache
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/docs/link" class="dropdown-item">
                  <i class="fa-solid fa-link"></i> Data Link
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex flex-column flex-lg-row gap-2 ms-lg-auto mt-3 mt-lg-0">
          <a href="https://discord.gg/pgmupvqvsm" target="_blank" rel="noopener noreferrer"
            class="btn btn-sm btn-secondary">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Support Server
          </a>

          <a href="https://discord.com/api/oauth2/authorize?client_id=770681237622095913&permissions=8&scope=applications.commands%20bot"
            target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-discord">
            <i class="fa-brands fa-discord"></i> Invite Bot
          </a>
        </div>
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