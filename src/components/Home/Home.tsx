import { useState } from 'react';
import { useEffect } from 'react';
import { fetchPopular } from '../../lib/api/tmdb';
import MovieList from '@/components/MovieList/MovieList';

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopular().then(({ data }) => {
      if (data) {
        setMovies(data.results);
      }
      setLoading(false);
    });
  }, []);

  return (
    <MovieList movies={movies} loading={loading} />
  );
}
