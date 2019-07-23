import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { $apis } from './helper'
import './registerServiceWorker'
import './common'

Vue.prototype.$apis = $apis
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
