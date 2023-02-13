<script lang="ts">
	import { goto } from '$app/navigation';

	let searchInputValue = '';

	function submitSearch() {
		goto(`/search/${searchInputValue}`);
	}
</script>

<form class="search-form" on:submit|preventDefault={submitSearch}>
	<input type="search" placeholder="Search Movie" bind:value={searchInputValue} />
	<button>Search</button>
</form>

<style>
	.search-form {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 30%;
		margin: 0 auto;
	}

	.search-form input {
		flex: 1;

		border: 1px solid #888;
		border-right: none;

		padding: 1rem;
		border-radius: 10px 0 0 10px;
	}

	.search-form input:focus {
		outline: none;
		border-color: #ff3e00;
	}

	.search-form button {
		padding: 1rem 1.5rem;
		border: 1px solid #ff3e00;
		border-radius: 0 10px 10px 0;

		background-color: #ff3e00;
		color: #ffffff;

		font-weight: 700;

		cursor: pointer;
	}
</style>
