<template>
  <div class="hello">
    <div>
      <img src="https://avatars1.githubusercontent.com/u/20214420?s=200">
      <h1>Wildan Mubarok</h1>
      <span class="hold">{{locale.captions.modes}}</span>
    <div>
      <button @click="mode = i" :class="{ active: mode == i }" v-for="(m, i) in locale.welcome.modes" :key="m.name">{{m.name}}</button>
    </div>
    </div>
    <div v-if="mode >= 0">
      <span class="hold">{{selectedModeLocale.caption}}</span>
      <div>
        <button v-for="(m) in selectedModeLocale.aspects" :key="m">{{m}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'

export default {
  name: 'Welcome',
  computed: {
    locale() {
      return store.state.locale;
    },
    selectedModeLocale() {
      return store.state.locale.welcome.modes[this.mode];
    },
    mode: {
      get() { return store.state.mode; },
      set(v) { store.state.mode = v; }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.active {
  font-weight: bold;
}
</style>
