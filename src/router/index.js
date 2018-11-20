import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'index', path: '/', component: Index},
  ]
})

export default router
