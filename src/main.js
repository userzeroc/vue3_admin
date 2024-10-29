import '@/styles/reset.css'
import 'uno.css'
import '@/styles/global.scss'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from './store'

function setupApp() {
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  app.mount('#app')
}

await setupApp()
