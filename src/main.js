import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.scss'
import './assets/css/user-list.scss'
import './assets/css/user-detail.scss'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

