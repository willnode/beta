<template>
  <div id="welcome" class="flex-grow-1 d-flex flex-column justify-content-center">
    <div>
      <img class="z-front rounded-circle" width="200px" src="https://avatars1.githubusercontent.com/u/20214420">
    </div>
    <h1 class="my-3">Wildan Mubarok</h1>
    <span class="font-italic">{{locale.captions.modes}}</span>
    <div class="btn-group my-3 mx-5 z-front" @mouseenter="autohighlight=false" @mouseleave="autohighlight=true;highlighted=-4">
      <button @click="mode = i" class="btn btn-outline-light" :class="{ active: highlighted == i }" v-for="(m, i) in locale.modes"
      :key="m.name" @mouseenter="highlighted = i">{{m.name}}</button>
    </div>
    <div style="height:50px" class="d-flex">
      <span class="font-weight-light font-italic">{{highlighted >= 0 ? locale.modes[highlighted].caption : '-'}}</span>
    </div>
    <!--div v-if="mode >= 0">
      <span class="hold">{{selectedModeLocale.caption}}</span>
      <div>
        <button v-for="(m) in selectedModeLocale.aspects" :key="m">{{m}}</button>
      </div>
    </div-->
  </div>
</template>

<style scoped>
#welcome {
  z-index: 1
}
</style>

<script>
import store from '../store'

export default {
  name: 'Welcome',
  computed: {
    locale() {
      return store.state.locale;
    },
    selectedModeLocale() {
      return store.state.locale.modes[this.mode];
    },
    mode: {
      get() { return store.state.mode; },
      set(v) { store.state.mode = v; }
    }
  }, data() {
    return {
      highlighted: -1,
      autohighlight: true,
    }
  }, mounted() {
    window.setInterval(() => {
      if (this.autohighlight) {
        this.highlighted ++;
        if (this.highlighted >= store.state.locale.modes.length) {
          this.highlighted = 0;
        }
      }
    }, 3000)
  },
}
</script>