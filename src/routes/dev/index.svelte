<script context="module" lang="ts">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		const response = await fetch(url + '/posts.json');

		const { posts } = await response.json();
		return {
			props: {
				posts
			}
		};
	}

	import { pushDatalayerEvent } from './../../lib/services/datalayer/datalayerGenerator';

	function handleClick(name, category, title, creation_date) {
		pushDatalayerEvent(name, category, title, creation_date);
	}
</script>

<div>
	<div class="py-32 flex flex-col h-screen justify-between items-center">
		<button
			class="border-2 p-2 max-w-sm"
			on:click={() => handleClick('clickEvent', 'dev', 'test', '2020-01-01')}
		>
			Dev Test
		</button>
	</div>
</div>
