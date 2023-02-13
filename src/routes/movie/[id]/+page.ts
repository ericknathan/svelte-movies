import type { IMovie } from "$lib/interfaces";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch, params }: LoadEvent) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`);
  const movieDetail: IMovie = await response.json();

  if(response.ok) {
    return {
      movieDetail
    }
  }
}
