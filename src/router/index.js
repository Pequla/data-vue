import {createRouter, createWebHistory} from 'vue-router'
import AboutView from '../views/about/AboutView.vue'
import GuildList from "@/views/about/GuildList.vue";
import DataView from '../views/DataView.vue'
import GuildView from '../views/GuildView.vue'
import UserView from '../views/UserView.vue'
import SearchView from '../views/SearchView.vue'
import CacheView from '../views/docs/CacheView.vue'
import LinkView from '../views/docs/LinkView.vue'
import MasterView from '../views/docs/MasterView.vue'
import AccessView from '../views/AccessView.vue'
import AdminView from "@/views/AdminView.vue";
import NotFound from '../views/NotFound.vue';

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
        path: '/guilds',
        name: 'Guilds',
        component: GuildList,
        meta: {
            title: 'Guilds'
        }
    },
    {
        path: '/access',
        name: 'Access',
        component: AccessView,
        meta: {
            title: 'Access'
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
        path: '/search/',
        name: 'UserSearch',
        component: SearchView,
        meta: {
            title: 'Search'
        }
    },
    {
        path: '/mcadmin',
        name: 'Admin',
        component: AdminView,
        meta: {
            title: 'Admin'
        }
    },
    {
        path: '/docs/cache',
        name: 'CacheDocs',
        component: CacheView,
        meta: {
            title: 'Cache'
        }
    },
    {
        path: '/docs/link',
        name: 'LinkDocs',
        component: LinkView,
        meta: {
            title: 'Link'
        }
    },
    {
        path: '/docs/master',
        name: 'MasterDocs',
        component: MasterView,
        meta: {
            title: 'Master'
        }
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
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
