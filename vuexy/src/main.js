import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueLazyload from 'vue-lazyload'
//懒加载
Vue.use(VueLazyload,{
  preLoad: 1.3,
  loading: require("@/img/timg.gif"),
  attempt: 1
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
