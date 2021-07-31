import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import VueI18n from 'vue-i18n';

Vue.config.productionTip = false
Vue.use(VueI18n);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
