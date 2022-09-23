import { createApp, markRaw } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './index.css'
import type { Router } from 'vue-router'

declare module 'pinia' {export interface PiniaCustomProperties {
    $router: Router
}}

const pinia = createPinia()
const app = createApp(App)

pinia.use(({ store }) => {
    store.$router = markRaw(router)
})

app.use(pinia)
app.use(router)

app.mount('#app')
