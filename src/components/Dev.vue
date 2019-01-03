<template>
  <div id="dev">
    <div class="hero" :style="{ 'background-image':imgbg('me-backside.jpg')}">
      <div class="hero-overlay" style="--grad-up: #530f; --grad-down: #5300">
        <div>
          <h2>Semua tentang Desain dan Algoritma</h2>
          <p>Hi! Saya adalah Wildan Mubarok dan saya adalah developer yang menyukai
            Desain dan membangun algoritma dibaliknya, mulai dari Web Front-End hingga
            Game Platform.</p>
        </div>
      </div>
    </div>
  <div class="hero" :style="{ 'background-image':imgbg('me-lovecloud.jpg')}">
    <div class="hero-overlay" style="--grad-up: #0350; --grad-down: #035f">
      <div class="align-self-end">
        <h2>Blog</h2>
        <p>Artikel membahas seputar developing web dan game terkumpul disini</p>
        <div class="btn-group-vertical">
        <a class="btn btn-outline-light" v-for="m in blogs" :key="m.uri" :href="m.uri" >
          <span class="ml-2 d-inline-block">
            {{m.title}}
          </span>
        </a>
        <a class="btn btn-outline-light" href="https://blog.wellosoft.net/">
          <i>Lihat Lebih banyak</i>
        </a>
        </div>
      </div>
    </div>
  </div>
  <div class="hero" :style="{ 'background-image':imgbg('me-backcloud.jpg')}">
    <div class="hero-overlay" style="--grad-up: #5030; --grad-down: #503f">
      <div class="align-self-center">
        <h2>Akon Showcase</h2>
        <p>Showcase Web Front-End dan Art Lainnya</p>
        <a class="btn btn-outline-light btn-social" href="https://artstation.com/willnode" style="--fill: #13AFF0"><IconArtstation/>Artstation</a>
        <a class="btn btn-outline-light btn-social" href="https://github.com/willnode" style="--fill: #181717"><IconGithub/>GitHub</a>
        <a class="btn btn-outline-light btn-social" href="https://codepen.com/willnode" style="--fill: #000000"><IconCodepen/>Codepen</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import store from '../store'
import IconArtstation from '../icons/artstation.svg'
import IconCodepen from '../icons/codepen.svg'
import IconGithub from '../icons/github.svg'

export default {
  components: {
    IconArtstation,
    IconCodepen,
    IconGithub,
  },
  computed: {
    locale() {
      return store.state.locale.dev;
    }
  },
  data() {
  return {
    img: uri => store.state.utils.img + uri,
    imgbg: uri => `url(${store.state.utils.img + uri})`,
    blogs: [],
  };
  },
  mounted() {
    if (this.blogs.length == 0) {
      store.state.utils.get('https://blog.wellosoft.net/home-api.json', (x) => {
        this.blogs = JSON.parse(x);
        this.blogs = this.blogs.slice(0, 4);
      })
    }
  }
};
</script>

<style scoped>
  h2 {
    margin: 2rem 0;
  }
</style>