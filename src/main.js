import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { setupRouter } from './router'

async function setupApp(){
  const app = createApp(App)
  setupRouter(app)
  app.mount('#app')
}

await setupApp()