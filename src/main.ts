import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from '@/services/api/axios.service';

import App from './App.vue'
import router from './router'

// import Auth from '@/services/api/auth.service'

import '@/assets/scss/index.scss';

const app = createApp(App)

app.config.globalProperties.$http = axios;


const api = {
  // auth: new Auth(axios, '/auth'),
  // post: new Post($axios, '/posts'),
  // user: new User($axios, '/users'),
  // profile: new Repository($axios, '/profile')
}

app.config.globalProperties.$api = api;

app.use(createPinia())
app.use(router)

app.mount('#app')
