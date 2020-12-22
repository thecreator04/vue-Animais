import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Saiba from '../views/Saiba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
  {
    path: '/Sobre',
    name: 'Sobre',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  },
  {
    path: '/Saiba/:id',
    name: 'Saiba',
    component:Saiba
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
