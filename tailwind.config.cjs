const colors = require('tailwindcss/colors');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			white: '#eee5f7',
			primary: '#2e9ad5',
			secondary: '#97cbea',
			highlight: '#034082',
			dark: '#1c1d19',
			c1: '#F48EA3',
			c2: '#FE7472',
			c3: '#F64143',
			c4: '#FE7F62'
		},
		extend: {}
	},

	plugins: []
};

module.exports = config;
