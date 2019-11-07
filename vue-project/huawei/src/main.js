import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '../public/common.css'
import router from './router'
import { Dialog } from 'vant'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Dialog)

new Vue({
  render: h => h(App),
  router,
  Dialog
}).$mount('#app')
