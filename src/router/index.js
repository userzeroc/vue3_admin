import { createWebHistory, createRouter } from 'vue-router'
import { baseRoutes } from './routes'



// 创建路由器(基本路由)
const router = createRouter({
  history: createWebHistory('/'),
  routes:baseRoutes,
})

// 封装路由器方法
export async function setupRouter(app) {
  app.use(router)
}

// 添加动态路由（根据token）