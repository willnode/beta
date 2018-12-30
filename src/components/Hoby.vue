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
    <h2>Blog
      <a href="https://memo.wellosoft.net" class="btn">Blog</a>
    </h2>
    <h2>Memo
      <a href="https://memo.wellosoft.net" class="btn">Memo</a>
    </h2>
    <h2>Photoshoot
      <a href="https://instagram.com/willn0de" class="btn">@willn0de</a>
    </h2>
    <h2>Tweets
      <a href="https://twitter.com" class="btn">@willnode</a>
    </h2>
    <h2>Quotes</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: uri => store.state.img + uri,
      imgbg: uri => `url(${store.state.img + uri})`
    };
  }
};
</script>

<style scoped>
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
	widows: 100%;
	background: linear-gradient(to bottom, var(--grad-up), var(--grad-down));
	text-align: center;
	padding: 5rem;
	display: flex;
}
</style>
