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
    mode: -1,
    utils: {
      schemes: ["#07c","#c70","#70c","#c07"],
      img: process.env.NODE_ENV === 'production'
        ? 'https://res.cloudinary.com/wellosoft/image/upload/home/' // prod
        : '//localhost:9000/home/', // dev,
      get(uri, cb) {
          var oReq = new XMLHttpRequest();
          oReq.addEventListener("load", function onload() {
            cb(this.responseText);
          });
          oReq.open("GET", uri);
          oReq.send();
        },
    }

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