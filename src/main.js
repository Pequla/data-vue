import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'highlight.js/styles/default.css'
import 'highlight.js/lib/core'

createApp(App).use(router).mount('#app')
