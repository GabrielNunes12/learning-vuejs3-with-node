import { createApp } from 'vue'
import { routes } from '@/routes/route.js'
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'

const app = createApp(App);
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
app.use(router);
app.mount('#app')
