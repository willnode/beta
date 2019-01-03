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
import BalloonCSS from 'balloon-css/balloon.min.css'
import Navbar from './components/Navbar.vue'
import Welcome from './components/Welcome.vue'
import WelcomeBg from './components/WelcomeBg.vue'
import Dev from './components/Dev.vue'
import Hoby from './components/Hoby.vue'
import Pro from './components/Pro.vue'
import store from './store'
import chroma from 'chroma-js'

document.createElement("style").nodeValue = BootstrapCSS + '\n' + AnimateCSS + '\n' + BalloonCSS;

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

.btn-social {
  margin: 2em;
  padding: 1rem;
}

.btn-social:hover {
  color: white;
}

.btn-social svg {
  fill: var(--fill);
  width: 40px;
  margin-right: 10px;
}
.btn-social:hover svg {
  fill: white;
}

.btn-social:hover {
  background-color: var(--fill);
}

h2 {
  margin: 2rem 0;
}

.hero {
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
}

.hero-overlay {
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, var(--grad-up), var(--grad-down));
  text-align: center;
  align-items: center;
  padding: 5rem;
  display: flex;
}

.hero-overlay > div {
  width: 100%;
}

.z-front {
  z-index: 1;
}

</style>
