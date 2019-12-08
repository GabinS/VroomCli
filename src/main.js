import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery/dist/jquery.min.js'
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap_js from 'bootstrap/dist/js/bootstrap.js'
import font_awesome from 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

// Add title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

new Vue({
  render: h => h(App),
  router,
  jquery,
  bootstrap_css,
  bootstrap_js,
  font_awesome
}).$mount('#app')
