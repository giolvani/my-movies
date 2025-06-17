import { useMemo } from 'react';
import styles from './MovieList.module.css';
import PosterCard from '@/components/PosterCard/PosterCard';

interface MovieListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: any[];
  loading: boolean;
}

export default function MovieList({ movies, loading }: MovieListProps) {
  const movieList = useMemo(() => {
    return movies.map((movie) => <PosterCard key={movie.id} movie={movie} />);
  }, [movies]);

  return <div className={styles.grid}>{loading ? <p>Loading...</p> : movieList}</div>;
}
