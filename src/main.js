import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as VueGoogleMaps from "vue2-google-maps"
import VueSimpleAlert from "vue-simple-alert";


import VCalendar from 'v-calendar'
Vue.config.productionTip = false

Vue.use(VueSimpleAlert);
Vue.use(VCalendar)
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAP_KEY,
    libraries: "places, directions"
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
