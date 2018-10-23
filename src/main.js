import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'

Vue.config.productionTip = false

// eslint-disable-next-line
let vm = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
