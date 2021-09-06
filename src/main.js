import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as VueGoogleMaps from "vue2-google-maps"
import VCalendar from 'v-calendar'
Vue.config.productionTip = false

Vue.use(VCalendar)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCrx149CsLQszmMLGjIFsYuGDojbeHBkyA",
    libraries: "places"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
