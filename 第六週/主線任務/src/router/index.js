import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: () => import('../views/frontend/Index.vue')
      },
      {
        path: '/products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/frontend/Cart.vue')
      }
    ]
  },
  {
    path: '/login',
    name: '後台登入',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    redirect: '/admin/index',
    children: [
      {
        path: '/admin/index',
        component: () => import('../views/backend/Index.vue')
      },
      {
        path: '/admin/products',
        component: () => import('../views/backend/Products.vue')
      },
      {
        path: '/admin/orders',
        component: () => import('../views/backend/Orders.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
