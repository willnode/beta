<template>
  <div id="navbar" class="d-flex flex-shrink-0 align-items-stretch z-front position-absolute w-100">
    <mascot style="width:2.25rem;height:2.25rem;fill:white" />
    <div class="flex-grow-1"></div>
    <div class="breadcrumb btn-flat p-0 m-0" :style="{opacity: mode==-1 ? 0 : 1}">
      <button class="btn btn-flat breadcrumb-item" :class="{ active: mode==0 }" @click="mode=-1">🏠 {{locale.captions.home}}</button>
      <button class="btn btn-flat breadcrumb-item" :class="{ active: mode!=0 }" v-if="mode>=0">{{locale.modes[mode].name}}</button>
    </div>
    <div class="flex-grow-1"></div>
    <button class="btn btn-dark btn-flat" style="position: absolute; right: 0;" @click="switchLang()">{{locale.display}}</button>
  </div>
</template>

<script>
import store from '../store'
import mascot from '../icons/wellosoft.svg'

export default {
  components: {
    mascot
  },
  computed: {
    locale() {
      return store.state.locale;
    },
    mode: {
      get() { return store.state.mode; },
      set(v) { store.state.mode = v; }
    }
  },
  methods: {
    switchLang() {
      store.commit('changeLang', store.state.lang == 0 ? 1 : 0);
    }
  }
}
</script>

<style scoped>
#navbar {
    display: flex;
}
</style>

