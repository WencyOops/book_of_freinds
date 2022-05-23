import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.scss'
import './assets/css/user-list.scss'
import './assets/css/user-detail.scss'
import './assets/css/confirm-box.scss'
import confirm from '@/plugins/confirm.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$confirm = confirm
