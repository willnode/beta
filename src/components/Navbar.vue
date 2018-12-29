<template>
	<div id="navbar" class="d-flex flex-shrink-0 mx-2 mt-2 align-items-stretch z-front">
		<ol class="breadcrumb p-0 m-0">
			<li class="breadcrumb-item" :class="{ active: mode==0 }"><button class="btn" @click="mode=-1">{{locale.captions.home}}</button></li>
			<li class="breadcrumb-item"  :class="{ active: mode!=0 }" v-if="mode>=0"><button class="btn">{{locale.modes[mode].name}}</button></li>
		</ol>
		<div class="flex-grow-1"></div>
		<button class="btn btn-dark" @click="switchLang()">{{locale.display}}</button>
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

