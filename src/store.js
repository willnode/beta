import Vue from 'vue'
import Vuex from 'vuex'
import EN from './assets/en.json'
import ID from './assets/id.json'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    lang: 0,
    locale: EN,
    mode: -1
  },
  mutations: {
    changeLang(state, mode) {
      state.lang = mode;
      state.locale = mode == 0 ? EN : ID;
    }
  },
  actions: {

  }
})

window.store = store;

export default store;