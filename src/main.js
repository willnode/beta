import Vue from 'vue'
import App from './App.vue'
import store from './store'
import icons from './icons/loader'

Vue.config.productionTip = false

icons();

window.app = new Vue({
  store,
  render: h => h(App)
});

window.app.$mount('#app')
