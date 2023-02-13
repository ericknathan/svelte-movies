import type { IMovie } from "$lib/interfaces";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch, params }: LoadEvent) {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&query=${params.query}&page=1`);
  const data = await response.json();

  if(response.ok) {
    const searchedMovieResults: IMovie[] = data.results;

    return {
      searchedMovieResults
    }
  }

  return {
    searchedMovieResults: []
  }
}
