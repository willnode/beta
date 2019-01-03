<template>
  <div id="pro">
    <div class="hero" :style="{ 'background-image':imgbg('ex-badge.png')}">
      <div class="hero-overlay" style="--grad-up: #0535; --grad-down: transparent">
        <div class="email">
          <h2>{{locale[0].title}}</h2>
          <a class="btn btn-outline-light" :href="'mailto:' + email[0]" data-balloon-length="fit" data-balloon-pos="down"
          :data-balloon="locale[0].support">{{email[0]}}</a>
          <span class="mx-5 d-inline-block" data-balloon-pos="down" :data-balloon="locale[0].hint" data-balloon-length="large" >
          <icon-gmail style="width:100px; fill:white"/>
          </span>
          <a class="btn btn-outline-light" :href="'mailto:' + email[1]" data-balloon-length="fit" data-balloon-pos="down"
          :data-balloon="locale[0].alias">{{email[1]}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import IconGmail from '../icons/gmail.svg'

export default {
  components: {
    IconGmail
  },
  computed: {
    locale() {
      return store.state.locale.pro;
    }
  },
  data() {
    return {
      img: uri => store.state.utils.img + uri,
      imgbg: uri => `url(${store.state.utils.img + uri})`,
      email: ["support" + "@wellosoft.net", "willnode" + "@wellsoft.net"]
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 2rem 0;
}

@media only screen and (max-width: 760px) {
  .email > * {
    display: block;
  }
}
</style>