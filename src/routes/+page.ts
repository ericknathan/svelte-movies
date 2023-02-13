import type { IMovie } from "$lib/interfaces";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch }: LoadEvent) {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`);
  const data = await response.json();

  if(response.ok) {
    const popular: IMovie[] = data.results;
    
    return {
      popular
    }
  }

  return {
    popular: []
  }
}