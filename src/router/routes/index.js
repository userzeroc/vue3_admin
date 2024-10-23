
export const baseRoutes = [
  { path: '/', component: () => import('@/views/workbench/index.vue') },
  { path: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/test', component: () => import('@/views/test/index.vue') },
]