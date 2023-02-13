<script lang="ts">
	import type { PageData } from './$types';

	import { fly } from 'svelte/transition';

	export let data: PageData;
	const { movieDetail } = data;

	if (!movieDetail) {
		throw new Error('Movie not found');
	}

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(new Date(date));
	}

	function formatCurrency(currency: number) {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(currency);
	}
</script>

<svelte:head>
	<title>Svelte Movies | {movieDetail?.title}</title>
</svelte:head>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<img
		src="https://image.tmdb.org/t/p/original{movieDetail?.backdrop_path}"
		alt="{movieDetail?.title}'s poster"
	/>
	<div class="movie-data">
		<h1>{movieDetail?.title}</h1>
		<p>{movieDetail?.overview}</p>
		<p>
			<span>Release Date: </span> <time>{formatDate(movieDetail?.release_date)}</time> <br />
			<span>Budget: </span> {formatCurrency(movieDetail?.budget ?? 0)} <br />
			<span>Rating: </span> {movieDetail?.vote_average}/10 <br />
			<span>Runtime: </span> {movieDetail?.runtime}mins <br />
		</p>
	</div>
</div>

<style>
	.movie-details {
		margin: 2rem 20%;
	}

	.movie-details .movie-data h1 {
		padding-top: 1rem;
	}

	.movie-details .movie-data p {
		padding: 1rem 0;
	}

	.movie-details .movie-data span {
		font-weight: bold;
	}

	.movie-details > img {
		width: 100%;
		border-radius: 1rem;
	}
</style>
