<script lang="ts">
	import type { IMovie } from "$lib/interfaces";
	import MovieCard from "./MovieCard.svelte";

  export let popular: IMovie[];
</script>

<h2>Popular Movies</h2>

<div class="popular-movies">
  {#each popular as movie (movie.id)}
    <MovieCard {movie} />
  {/each}
</div>

<style>
  h2 {
    padding: 0 1rem;
    font-size: 1.25rem;
  }
  
  .popular-movies {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
  }
</style>