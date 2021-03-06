import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap_css from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap_js from 'bootstrap/dist/js/bootstrap.js'
import font_awesome from 'font-awesome/css/font-awesome.min.css'

import moment from 'moment'

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY')
  }
});


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
