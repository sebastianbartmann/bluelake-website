import preprocess from 'svelte-preprocess';
//import static_adapter from '@sveltejs/adapter-static';
import netlify_adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: netlify_adapter() //static_adapter(),
	}
};

export default config;
