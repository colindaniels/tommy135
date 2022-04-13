import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueFullscreen from 'vue-fullscreen'

const app = createApp(App)
app.use(VueFullscreen)
app.use(router)

.mount('#app')
