import { memo } from 'react';
import { IMAGE_BASE_URL } from '@/lib/constants';
import { Link } from 'react-router-dom';
import styles from './PosterCard.module.css';
import type { MovieSummary } from '@/lib/api/types';

interface PosterCardProps {
  movie: MovieSummary;
}

const PosterCard = ({ movie }: PosterCardProps) => (
  <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.card}>
    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} loading="lazy" />
  </Link>
);

export default memo(PosterCard);
