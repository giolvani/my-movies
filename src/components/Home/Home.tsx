import { useState, useEffect, useMemo } from 'react';
import { fetchPopular } from '@/lib/api/tmdb';
import MovieList from '@/components/MovieList/MovieList';
import type { MovieSummary } from '@/lib/api/types';

export default function Home() {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopular().then(({ data }) => {
      if (data) {
        setMovies(data.results);
      }
      setLoading(false);
    });
  }, []);

  const memoizedMovies = useMemo(() => movies, [movies]);

  return (
    <MovieList movies={memoizedMovies} loading={loading} />
  );
}
