import '@/styles/reset.css'
import 'uno.css'
import '@/styles/global.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'

async function setupApp() {
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}

await setupApp()
