<template>
  <div class="container py-3">
    <div class="row g-3">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-3 p-lg-4">
            <h1 class="h3 mb-2">
              <i class="fa-solid fa-circle-info me-2"></i>
              About DataVue
            </h1>

            <p class="mb-2">
              DataVue helps users view Minecraft-related data in a simpler and easier-to-understand way.
            </p>

            <p class="mb-0">
              It is built for server owners, developers, and regular players who want a cleaner way to browse
              useful information from supported plugins, mods, and integrations.
            </p>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-8">
        <div class="row g-3">
          <div class="col-12 col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-3">
                <h2 class="h5 mb-2">
                  <i class="fa-solid fa-user me-2"></i>
                  For regular users
                </h2>
                <p class="mb-0 small">
                  You do not need technical knowledge to use DataVue. You can browse pages, search for information,
                  and view supported data in a more readable format.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12 col-md-6">
            <div class="card border-0 shadow-sm h-100">
              <div class="card-body p-3">
                <h2 class="h5 mb-2">
                  <i class="fa-solid fa-code me-2"></i>
                  For developers
                </h2>
                <p class="small mb-2">
                  API and integration documentation is available here:
                </p>

                <div class="d-grid gap-2">
                  <RouterLink to="/docs/cache" class="btn btn-sm btn-outline-primary text-start">
                    <i class="fa-solid fa-database me-2"></i>
                    /docs/cache
                  </RouterLink>

                  <RouterLink to="/docs/link" class="btn btn-sm btn-outline-primary text-start">
                    <i class="fa-solid fa-link me-2"></i>
                    /docs/link
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="card border-0 shadow-sm">
              <div class="card-body p-3">
                <h2 class="h5 mb-3">
                  <i class="fa-solid fa-puzzle-piece me-2"></i>
                  Available mods and plugins
                </h2>

                <div class="row g-2">
                  <div class="col-12 col-md-4">
                    <div class="card border h-100">
                      <div class="card-body p-3">
                        <h3 class="h6 mb-2">
                          <i class="fa-solid fa-cube me-2"></i>
                          Fabric mod
                        </h3>
                        <a href="https://modrinth.com/mod/dlaw-fabric" target="_blank" rel="noopener noreferrer"
                          class="btn btn-sm btn-outline-primary w-100">
                          DLAW Fabric
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="card border h-100">
                      <div class="card-body p-3">
                        <h3 class="h6 mb-1">
                          <i class="fa-solid fa-plug me-2"></i>
                          DLAW
                        </h3>
                        <div class="text-muted small mb-2">
                          Discord Login &amp; Webhooks
                        </div>
                        <a href="https://modrinth.com/plugin/dlaw" target="_blank" rel="noopener noreferrer"
                          class="btn btn-sm btn-outline-primary w-100">
                          View DLAW
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 col-md-4">
                    <div class="card border h-100">
                      <div class="card-body p-3">
                        <h3 class="h6 mb-2">
                          <i class="fa-solid fa-plug me-2"></i>
                          Other Spigot plugins
                        </h3>

                        <div class="d-grid gap-2">
                          <a href="https://modrinth.com/plugin/littlelink" target="_blank" rel="noopener noreferrer"
                            class="btn btn-sm btn-outline-primary">
                            LittleLink
                          </a>

                          <a href="https://modrinth.com/plugin/littlehooks" target="_blank" rel="noopener noreferrer"
                            class="btn btn-sm btn-outline-primary">
                            LittleHooks
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-xl-4">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body p-3">
            <h2 class="h5 mb-3">
              <i class="fa-solid fa-robot me-2"></i>
              Bot information
            </h2>

            <template v-if="info">
              <div class="text-center mb-3">
                <img :src="info.avatar" :alt="info.name" class="rounded-circle shadow-sm mb-2"
                  style="width: 72px; height: 72px; object-fit: cover;">
                <div class="fw-semibold">{{ info.name }}</div>
              </div>

              <div class="row g-2">
                <div class="col-6">
                  <div class="card border h-100">
                    <div class="card-body p-2 text-center">
                      <div class="text-muted small">Servers</div>
                      <div class="fw-bold">{{ info.serverCount }}</div>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="card border h-100">
                    <div class="card-body p-2 text-center">
                      <div class="text-muted small">Links</div>
                      <div class="fw-bold">{{ info.totalAccountLinks }}</div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="card border">
                    <div class="card-body p-2 text-center">
                      <div class="text-muted small">App ID</div>
                      <div class="fw-semibold small text-break">{{ info.id }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <template v-else>
              <div class="text-muted small">
                <i class="fa-solid fa-spinner fa-spin me-2"></i>
                Loading bot information...
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkService from '@/services/LinkService'
import { ref, onMounted } from 'vue'

const info = ref(null)

onMounted(() => {
  LinkService.getInfo()
    .then((rsp) => {
      info.value = rsp.data
    })
    .catch((err) => {
      console.error('Failed to load app info:', err)
    })
})
</script>