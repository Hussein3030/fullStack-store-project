import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../layouts/Base.vue'),
    children: [
      { path: '', component: () => import('../views/home/Products.vue') },
      { path: 'details/:idProduct', component: () => import('../views/home/Details.vue') },
      { path: 'cart', component: () => import('../views/home/Cart.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/account/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/account/Register.vue')
  },
  {
    path: '/addProduct',
    component: () => import('../views/home/AddProduct.vue')
  },
]

const router = new VueRouter({
  mode: 'history', // to remove the # from the url
  base: process.env.BASE_URL,
  routes
})

export default router
