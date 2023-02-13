<script lang="ts">
	import type { PageData } from './$types';

	import PopularMovies from '../lib/components/PopularMovies.svelte';
	import SearchMovies from '$lib/components/SearchMovies.svelte';

	import { fly } from 'svelte/transition';

	export let data: PageData;
	const { popular } = data;
</script>

<svelte:head>
	<title>Svelte Movies | Homepage</title>
</svelte:head>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies {popular} />
</section>

<style>
	section {
		margin-bottom: 2rem;
	}
</style>