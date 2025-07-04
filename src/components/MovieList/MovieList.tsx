import { useMemo } from 'react';
import styles from './MovieList.module.css';
import PosterCard from '@/components/PosterCard/PosterCard';
import type { MovieSummary } from '@/lib/api/types';

interface MovieListProps {
  movies: MovieSummary[];
  loading: boolean;
}

export default function MovieList({ movies, loading }: MovieListProps) {
  const movieList = useMemo(() => {
    return movies.map((movie) => <PosterCard key={movie.id} movie={movie} />);
  }, [movies]);

  return <div className={styles.grid}>{loading ? <p>Loading...</p> : movieList}</div>;
}
