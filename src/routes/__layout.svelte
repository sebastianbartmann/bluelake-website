<script>
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
	<Header />
	<main>
		<slot />
	</main>
	<div class="flex-grow" />
	<Footer />
</div>
