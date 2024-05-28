import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/login',
    name: 'AppLogin',
    component: () => import('@/views/authentication/AppLogin.vue'),
    meta: { isGuest: true }
  },
  {
    path: '/register',
    name: 'AppRegister',
    component: () => import('@/views/authentication/AppRegister.vue'),
    meta: { isGuest: true }
  },
  {
    path: '/feed',
    redirect: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'AppFeed',
        component: () => import('@/views/AppFeed.vue'),
        meta: { isrequireAuth: true }
      },
      {
        path: '/message',
        name: 'AppMessage',
        component: () => import('@/views/AppMessage.vue'),
        meta: { isrequireAuth: true }
      },
      {
        path: '/trending',
        name: 'AppTrending',
        component: () => import('@/views/AppTrending.vue'),
        meta: { isrequireAuth: true }
      },
      {
        path: '/tags',
        name: 'AppTags',
        component: () => import('@/views/AppTags.vue'),
        meta: { isrequireAuth: true }
      },
      {
        path: '/bookmark',
        name: 'AppBookmark',
        component: () => import('@/views/AppBookmark.vue'),
        meta: { isrequireAuth: true }
      },
      {
        path: '/tag/:slug',
        name: 'TagName',
        component: () => import('@/components/TagSpecification.vue'),
      }
    ]
  },
  {
    path: '/create_blog',
    name: 'CreateBlog',
    component: () => import('../views/CreateBlog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.isrequireAuth && !authStore.authenticatedStatus) {
    next({ name: 'AppLogin' })
  } else if (to.meta.isGuest && authStore.authenticatedStatus) {
    next({ name: 'AppFeed' })
  } else {
    next()
  }
})

export default router
