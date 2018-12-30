<template>
  <div id="app" :style="{ 'background': schemebg, '--app-scheme':scheme , '--app-scheme-dark':schemedark }">
    <Navbar/>
    <WelcomeBg v-if="mode == -1"/>
    <Welcome v-if="mode == -1"  class="animated fadeIn fast"/>
    <Hoby v-if="mode == 0"  class="animated fadeInUp faster"/>
    <Dev v-if="mode == 1"  class="animated fadeInUp faster"/>
    <Pro v-if="mode == 2"  class="animated fadeInUp faster"/>
  </div>
</template>

<script>
import BootstrapCSS from 'bootstrap/dist/css/bootstrap.min.css'
import AnimateCSS from 'animate.css/animate.min.css'
import Navbar from './components/Navbar.vue'
import Welcome from './components/Welcome.vue'
import WelcomeBg from './components/WelcomeBg.vue'
import Dev from './components/Dev.vue'
import Hoby from './components/Hoby.vue'
import Pro from './components/Pro.vue'
import store from './store'
import chroma from 'chroma-js'

document.createElement("style").nodeValue = BootstrapCSS + '\n' + AnimateCSS;

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
    schemebg() {
      var sch = chroma(store.state.scheme);
      var ret = `linear-gradient(45deg, ${sch.darken(4).hex()}, ${sch.hex()})`;
      return ret;
    },
    scheme: {
      get() { return store.state.scheme; },
      set(v) { store.state.scheme = v; }
    },
    schemedark() {
      var sch = chroma(store.state.scheme);
      return sch.darken(4).hex();
    },
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
 min-height: 100vh;
}

.btn-flat {
  border-radius: 0px !important;
}
</style>
