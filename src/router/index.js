import { createWebHistory, createRouter } from 'vue-router'

import login from '@/views/login/index.vue'
import workbench from '@/views/workbench/index.vue'
import test from '@/views/test/index.vue'

// 页面地址
const routes = [
  { path: '/', component: workbench },
  { path: '/login', component: login },
  { path: '/test', component: test },
]

// 创建路由器
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

// 封装路由器方法
export async function setupRouter(app) {
  app.use(router)
}