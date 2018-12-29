import Vue from 'vue'
import Vuex from 'vuex'
import EN from './assets/en.json'
import ID from './assets/id.json'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    lang: localStorage['site-lang'],
    locale: localStorage['site-lang'] == 1 ? ID : EN,
    scheme: "#07c",
    mode: -1
  },
  mutations: {
    changeLang(state, mode) {
      state.lang = mode;
      state.locale = mode == 1 ? ID : EN;
      localStorage['site-lang'] = mode;
    }
  },
  actions: {

  }
})

window.store = store;

export default store;