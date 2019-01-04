<template>
  <div class="hero" :style="{ 'background-image':imgbg(image)}">
    <div class="hero-overlay" :style="{background: overlay}">
      <div :class="[align]">
        <h2>{{title}}</h2>
        <p>{{caption}}</p>
        <div v-if="attachment" >
          <component :is="attachment.name" :args="attachment.args"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
import Vue from 'vue'
import social from './Social.vue'
import lists from './Lists.vue'
import timeline from './Timeline.vue'

Vue.component('social', social);
Vue.component('lists', lists);
Vue.component('timeline', timeline);

export default {
  props: {
    title: String,
    caption: String,
    image: String,
    overlay: String,
    align: String,
    attachment: Object,
  },
  data() {
    return {
      img: uri => store.state.utils.img + uri,
      imgbg: uri => `url(${store.state.utils.img + uri})`,
    }
  }
};
</script>

<style>
</style>
