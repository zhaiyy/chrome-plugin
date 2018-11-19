import Vue from 'vue'
import VueRouter from 'vue-router'
import qrcode from '../pages/qrcode'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'qrcode', path: '/', component: qrcode},
  ]
})

export default router
