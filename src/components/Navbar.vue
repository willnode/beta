<template>
	<div id="navbar" class="d-flex flex-shrink-0 align-items-stretch z-front">
		<div class="flex-grow-1"></div>
		<div class="breadcrumb btn-flat p-0 m-0">
			<button class="btn btn-flat breadcrumb-item" :class="{ active: mode==0 }" @click="mode=-1">🏠 {{locale.captions.home}}</button>
			<button class="btn btn-flat breadcrumb-item" :class="{ active: mode!=0 }" v-if="mode>=0">{{locale.modes[mode].name}}</button>
		</div>
		<div class="flex-grow-1"></div>
		<button class="btn btn-dark btn-flat" style="position: absolute; right: 0;" @click="switchLang()">{{locale.display}}</button>
	</div>
</template>

<script>
import store from '../store'

export default {
	computed: {
		locale() {
			return store.state.locale;
		},
		mode: {
		get() { return store.state.mode; },
		set(v) { store.state.mode = v; }
		}
	},
	methods: {
		switchLang() {
			store.commit('changeLang', store.state.lang == 0 ? 1 : 0);
		}
	}
}
</script>

<style scoped>
#navbar {
	display: flex;
}
</style>

