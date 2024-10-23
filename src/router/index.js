import { createWebHistory, createRouter } from 'vue-router'
import { baseRoutes } from './routes'



// 创建路由器
const router = createRouter({
  history: createWebHistory('/'),
  baseRoutes,
})

// 封装路由器方法
export async function setupRouter(app) {
  app.use(router)
}