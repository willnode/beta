<template>
  <div id="hoby">
  <div class="hero" :style="{ 'background-image':imgbg('me-backside.jpg')}">
    <div class="hero-overlay" style="--grad-up: #530f; --grad-down: #5300">
      <div>
        <h2>Siapa Aku?</h2>
        <p>Nama saya adalah Wildan Mubarok dan saya adalah software developer asal Indonesia yang suka bereksperimen dan menjelajahi hal baru.</p>
      </div>
    </div>
  </div>
  <div class="hero" :style="{ 'background-image':imgbg('me-withalma.jpg')}">
    <div class="hero-overlay" style="--grad-up: #0530; --grad-down: #053f">
      <div class="align-self-end">
        <h2>Akademik</h2>
        <p>Saya mengikuti studi lanjut di Universitas Trunojoyo sebagai mahasiswa Teknik Informatika sejak pertengahan 2018.</p>
      </div>
    </div>
  </div>
  <div class="hero" :style="{ 'background-image':imgbg('me-lovecloud.jpg')}">
    <div class="hero-overlay" style="--grad-up: #0350; --grad-down: #035f">
      <div class="align-self-end">
        <h2>Memo</h2>
        <p>Catatan pribadi untuk masa lalu, sekarang, dan nanti</p>
        <div class="btn-group-vertical">
          <a class="btn btn-outline-light text-left" v-for="m in memos" :key="m.uri" :href="m.uri" >
              <img :src="m.ig + 'media?size=t'" class="clearfix" width="40px">
              <span class="ml-2 d-inline-block">
                {{m.title}}
              </span>
          </a>
          <a class="btn btn-outline-light" href="https://memo.wellosoft.net/">
            Lihat Lebih banyak
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="hero" :style="{ 'background-image':imgbg('me-backcloud.jpg')}">
    <div class="hero-overlay" style="--grad-up: #5030; --grad-down: #503f">
      <div class="align-self-center">
        <h2>Akun Sosial</h2>
          <a class="btn btn-outline-light btn-social" href="https://twitter.com/willnode" style="--fill: #1DA1F2"><IconTwitter/>Twitter</a>
          <a class="btn btn-outline-light btn-social" href="https://instagram.com/willn0de" style="--fill: #E4405F"><IconInstagram/>Instagram</a>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store'
import IconTwitter from '../icons/twitter.svg'
import IconInstagram from '../icons/instagram.svg'

export default {
  components: {
    IconTwitter,
    IconInstagram
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
