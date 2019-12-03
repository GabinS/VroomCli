// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery/dist/jquery.min.js'
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap_js from 'bootstrap/dist/js/bootstrap.js'

Vue.config.productionTip = false

// Add title page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
