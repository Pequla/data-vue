import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import DataView from '../views/DataView.vue'
import GuildView from '../views/GuildView.vue'
import UserView from '../views/UserView.vue'
import SearchView from '../views/SearchView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/guild/:id',
    name: 'GuildData',
    component: GuildView,
    meta: {
      title: 'Guild'
    },
    params: true
  },
  {
    path: '/user/:id',
    name: 'UserData',
    component: UserView,
    meta: {
      title: 'User'
    },
    params: true
  },
  {
    path: '/search/:name',
    name: 'UserSearch',
    component: SearchView,
    meta: {
      title: 'Search'
    },
    params: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: 'Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title)
    document.title = `${to.meta.title} :: DataVue`;
  next();
})

export default router
