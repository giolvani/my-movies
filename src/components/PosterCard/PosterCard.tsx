import { IMAGE_BASE_URL } from '@/constants';
import { Link } from 'react-router-dom';
import styles from './PosterCard.module.css';

interface PosterCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
}

const PosterCard = ({ movie }: PosterCardProps) => (
  <Link to={`/movie/${movie.id}`} key={movie.id} className={styles.card}>
    <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} loading="lazy" />
  </Link>
);

export default PosterCard;
