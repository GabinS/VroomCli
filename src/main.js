import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery/dist/jquery.min.js'
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap_js from 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  jquery,
  bootstrap_css,
  bootstrap_js,
}).$mount('#app')
