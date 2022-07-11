import { useMemo } from "react";

export default function useGenres(movies) {
  const genres = useMemo(() => {
    if (movies) {
      const genres = [];
      for (const movie of movies) {
        genres.push(...movie.Genre);
      }
      return [...new Set(genres)];
    }
    return [];
  }, [movies]);
  return genres;
}
