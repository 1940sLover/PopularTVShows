import Vue from 'vue'
import App from './App.vue'
// import bootstrap so that it can be used to make the cards
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
