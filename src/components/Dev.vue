<template>
  <div id="dev">
    <hero image="me-backside.jpg" :title="locale[0].title" :caption="locale[0].caption"
    overlay="linear-gradient(#530f, #5300)" />
   <hero image="me-lovecloud.jpg" :title="locale[1].title" :caption="locale[1].caption"
    overlay="linear-gradient(#0350, #035f)" align="align-self-end" :attachment="{
      name: 'lists', args: { list: blogs,
        more: {uri: 'https://blog.wellosoft.net/', caption: locale[1].more},
      }}"/>
  <hero image="me-backcloud.jpg" :title="locale[2].title" :caption="locale[2].caption"
    overlay="linear-gradient(#5030, #503f)" align="align-self-center" :attachment="{ name: 'social', args: [
    { title: 'Codepen', url: 'https://codepen.com/willnode', color: '#000000' },
    { title: 'GitHub', url: 'https://github.com/willnode', color: '#E4405F' },
    { title: 'Artstation', url: 'https://artstation.com/willnode', color: '#1DA1F2' }]}"/>
  </div>
</template>

<script>
import store from '../store'
import Hero from './widgets/Hero.vue'

export default {
  components: {
    Hero
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