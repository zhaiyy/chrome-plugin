import Vue from 'vue'
import App from './App'
import router from './router'

// 自定义样式
import 'assets/css/app.css'

window.__currentApp = initVue()

function initVue() {
  return new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
