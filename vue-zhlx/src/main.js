import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import alerts from './alerts/alerts.js'
Vue.use(elementUi)
Vue.use(alerts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
