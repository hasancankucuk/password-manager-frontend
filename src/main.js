import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import VueI18n from 'vue-i18n';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isLogged: !localStorage.getItem('token'),
    user: {},
    accounts: []
  },
  actions: {

  },
  mutations: {
    /*  eslint-disable no-param-reassign */
    LOGIN_USER(state) {
      state.isLogged = true;
    },
    /* eslint-disable no-param-reassign */
    LOGOUT_USER(state) {
      state.isLogged = false;
    },
    SET_ACCOUNTS(state, payload) {
      state.accounts = payload;
    },
    APPEND_TO_ACCOUNTS(state, payload) {
      state.accounts.push(payload);
    }
  },
  getters: {
    isUserLoggedIn: state => state.isLogged,
    accounts: state => state.accounts,
  },
  modules: {

  },
});

Vue.config.productionTip = false
Vue.use(VueI18n);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')