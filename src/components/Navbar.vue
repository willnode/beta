<template>
	<div id="navbar">
		<button>&lt;</button>
		<button @click="switchLang()">{{locale.display}}</button>
	</div>
</template>

<script>
import store from '../store'

export default {
	computed: {
		locale() {
			return store.state.locale;
		}
	},
	methods: {
		switchLang() {
			store.commit('changeLang', store.state.lang == 0 ? 1 : 0);
		}
	}
}
</script>

