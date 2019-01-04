<template>
  <div id="hoby">
  <hero image="me-backside.jpg" :title="locale[0].title" :caption="locale[0].caption"
    overlay="linear-gradient(#530f, #5300)" />
  <hero image="me-withalma.jpg" :title="locale[1].title" :caption="locale[1].caption"
    overlay="linear-gradient(#0530, #053f)" align="align-self-end"/>
  <hero image="me-lovecloud.jpg" :title="locale[2].title" :caption="locale[2].caption"
    overlay="linear-gradient(#0356, #035f)" align="align-self-end" :attachment="{
      name: 'lists', args: { list: memos,
        more: {uri: 'https://memo.wellosoft.net/', caption: 'Lihat Lebih banyak'},
      }}"/>
  <hero image="me-sunshine.jpg" :title="locale[3].title" :caption="locale[3].caption"
    overlay="linear-gradient(#0355, #550f)" align="align-self-end" :attachment="{
      name: 'timeline', args: locale[3].lists}"/>
  <hero image="me-backcloud.jpg" :title="locale[4].title" :caption="locale[4].caption"
    overlay="linear-gradient(#5030, #503f)" align="align-self-center" :attachment="{ name: 'social', args: [
    { title: 'Twitter', url: 'https://twitter.com/willnode', color: '#1DA1F2' },
    { title: 'Instagram', url: 'https://instagram.com/willn0de', color: '#E4405F' }]}"/>
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
      return store.state.locale.hoby;
    }
  },
  data() {
  return {
    img: uri => store.state.utils.img + uri,
    imgbg: uri => `url(${store.state.utils.img + uri})`,
    memos: [],
  };
  },
  mounted() {
    if (this.memos.length == 0) {
      store.state.utils.get('https://memo.wellosoft.net/home-api.json', (x) => {
        this.memos = JSON.parse(x);
        this.memos = this.memos.slice(0, 4);
      })
    }
  }
};
</script>

<style scoped>

.memo-gallery {
  display: flex;
  overflow-x: hidden;
  justify-items: stretch;
}

.memo-gallery > div {
  width: 300px;
  height: 200px;
  margin: 5px;
  overflow: hidden;
  box-shadow: 1px 1px 4px 0px grey;
  background-size: cover;
  background-position: center;
  text-align: center;
  flex-grow: 1;
}

.memo-gallery > div > div {
  background: linear-gradient(to bottom, transparent, #046);
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 40px;
  padding: 10px;
  display: flex;
  align-content: center;
  justify-content: center;
}
.memo-gallery > div > div > a {
  margin: auto;
  color: white;
}
</style>
