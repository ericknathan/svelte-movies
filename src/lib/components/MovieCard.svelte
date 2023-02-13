<script lang="ts">
	import type { IMovie } from '$lib/interfaces';

	export let movie: IMovie;
</script>

<div class="movie-card">
	<a
		data-sveltekit-preload-data
		data-sveltekit-noscroll
		href="/movie/{movie.id}"
	>
		<img src="https://image.tmdb.org/t/p/w500{movie.poster_path}" alt="{movie.title}'s poster" />
	</a>
	<div class="description">
		<h2>{movie.title}</h2>
		<time>{movie.release_date}</time>
	</div>
</div>

<style>
	.movie-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;

		transition: transform 0.2s ease-in-out;
	}

	.movie-card:hover {
		transform: scale(1.03);
	}

	.movie-card a {
		width: 100%;
		margin-bottom: 1rem;

	}

	.movie-card a img {
		width: 100%;
		height: 100%;
    object-fit: cover;
		border-radius: 1rem;
	}

	.movie-card .description {
		height: 5vh;
	}

	.movie-card .description h2 {
		font-size: 0.9rem;
	}

	.movie-card .description time {
		font-size: 0.7rem;
	}
</style>
