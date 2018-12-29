<template>
  <div id="app" :style="{ 'background': scheme }">
    <Navbar/>
    <WelcomeBg v-if="mode == -1"/>
    <Welcome v-if="mode == -1"/>
    <Hoby v-if="mode == 0"/>
    <Dev v-if="mode == 1"/>
    <Pro v-if="mode == 2"/>
  </div>
</template>

<script>
import BootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'
import Welcome from './components/Welcome.vue'
import WelcomeBg from './components/WelcomeBg.vue'
import Dev from './components/Dev.vue'
import Hoby from './components/Hoby.vue'
import Pro from './components/Pro.vue'
import store from './store'
import chroma from 'chroma-js'

document.createElement("style").nodeValue = BootstrapCSS;

export default {
  name: 'app',
  components: {
    Navbar,
    Welcome,
    WelcomeBg,
    Dev,
    Hoby,
    Pro,

  },
  computed: {
    mode: {
      get() { return store.state.mode; },
      set(v) { store.state.mode = v; }
    },
    scheme() {
      var sch = chroma(store.state.scheme);
      var ret = `linear-gradient(45deg, ${sch.darken(4).hex()}, ${sch.hex()})`;
      return ret;
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
}

html, body, #app {
 height: 100%;
}
</style>
