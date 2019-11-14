import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import '../public/common.css'
import router from './src/router'
import { Popup } from 'vant';

Vue.use(Popup);

Vue.config.productionTip = false
Vue.use(VueRouter)
//事件总线: 用来注册公共的事件监听的对象叫做事件总线
//创建一个vue实例，只用来监听事件，
let eventBus = new Vue();
//扩展vue类的实例对象
Vue.prototype.$eventBus = eventBus;
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
