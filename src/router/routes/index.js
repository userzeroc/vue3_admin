const Layout = import('@/layout/index.vue')

export const baseRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/workbench',
    children: [
      {
        name: 'workbench',
        path: '/workbench',
        component: () => import('@/views/workbench/index.vue'),
      },
    ],
  },
  { path: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/test', component: () => import('@/views/test/index.vue') },
]
