<script lang="ts">
  import type { PageData } from './$types';
  import { fly } from 'svelte/transition';

	import MovieCard from '$lib/components/MovieCard.svelte';

	export let data: PageData;
	const { searchedMovieResults } = data;
</script>

<div class="searched-movies" in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
	{#each searchedMovieResults as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
  .searched-movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    height: 20vh;
  }
</style>