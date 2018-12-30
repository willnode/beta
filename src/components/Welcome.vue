<template>
  <div id="welcome" class="flex-grow-1 flex-shrink-0 d-flex flex-column justify-content-center p-5">
    <div>
      <img class="z-front glow rounded-circle" width="200px" :src="img('avatar-1.jpg')">
    </div>
    <h1 class="my-3">Wildan Mubarok</h1>
    <span class="font-italic">{{locale.captions.modes}}</span>
    <div class="my-3 z-front" :class="[ istoonarrow ? 'btn-group-vertical' : 'btn-group' ]" @mouseenter="autohighlight=false" @mouseleave="autohighlight=true;highlighted=-4;scheme=schemes[0]">
      <button @click="mode = i" class="btn btn-outline-light schemed" :class="{ active: highlighted == i }" v-for="(m, i) in locale.modes"
      :key="m.name" @mouseenter="highlighted = i; scheme = schemes[i+1]" :style="{'--scheme-color': schemes[i+1]}">{{m.name}}</button>
    </div>
    <div style="min-height:5rem" class="d-flex justify-content-center">
      <span class="font-weight-light font-italic">{{highlighted >= 0 ? locale.modes[highlighted].caption : '-'}}</span>
    </div>
  </div>
</template>

<style scoped>
#welcome {
  z-index: 1
}
.schemed.active, .schemed:hover {
  background-color: var(--scheme-color) !important;
  color: white !important;
}
.glow {
  box-shadow: 0 0 20px 0px var(--app-scheme);
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
    schemes() {
      return store.state.schemes;
    },
    mode: {
      get() { return store.state.mode; },
      set(v) { store.state.mode = v; }
    },
    scheme: {
      get() { return store.state.scheme; },
      set(v) { store.state.scheme = v; }
    }
  }, data() {
    return {
      highlighted: -1,
      autohighlight: true,
      img: (uri) => store.state.img + uri,
      imgbg: (uri) => `url(${store.state.img + uri})`,
      istoonarrow: window.innerWidth < 500
    }
  }, mounted() {
    window.setInterval(() => {
      if (this.autohighlight) {
        this.highlighted ++;
        if (this.highlighted >= store.state.locale.modes.length) {
          this.highlighted = 0;
        }
      }
    }, 3000);

		window.addEventListener('resize', () => {
			this.istoonarrow = window.innerWidth < 500;
		});

  },
}
</script>