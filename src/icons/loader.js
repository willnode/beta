import Vue from 'vue';

import artstation from './artstation.svg';
import codepen from './codepen.svg';
import github from './github.svg';
import gmail from './gmail.svg';
import instagram from './instagram.svg';
import twitter from './twitter.svg';
import unity from './unity.svg';
import wellosoft from './wellosoft.svg';


export default () => {
	const icons = {artstation, codepen, github, gmail, instagram, twitter, unity, wellosoft};

	Object.keys(icons).forEach((k) => {
		Vue.component("icon-" + k.toLowerCase(), icons[k]);
	})
}
