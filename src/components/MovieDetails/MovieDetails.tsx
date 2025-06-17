import { useEffect, useState } from 'react';
import styles from './MovieDetails.module.css';
import { fetchMovieById } from '@/api/tmdb';
import { IMAGE_BASE_URL } from '@/lib/constants';
import { mapMovieDetailsToMovie } from '@/api/mappers/movieMapper';
import type { Movie } from './types';

interface MovieDetailsProps {
  id?: string;
}

const MovieDetails = ({ id }: MovieDetailsProps) => {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchMovieById(id).then(({ data }) => {
        if (data) {
          setMovie(mapMovieDetailsToMovie(data));
        }
        setLoading(false);
      });
    }
  }, [id]);

  return (
    <>
    {loading || !movie ? (
      <p>Loading...</p>
    ) : (
      <>
      <div className={styles.title}>
        <h4>{movie.title}</h4>
      </div>

      <section className={styles.content}>
        <div className={styles.details}>
          <div className={styles.detailsImage}>
            <img src={`${IMAGE_BASE_URL}${movie.image}`} alt={movie.title} />
          </div>

          <div className={styles.info}>
            <div className={styles.infoContent}>
              <div className={styles.topInfo}>
                <h2>{new Date(movie.year).getFullYear()}</h2>
                <p>mins</p>
              </div>
              <h3>{movie.votes.toFixed(2)}/10</h3>
            </div>

            <button>Add to Favorite</button>
          </div>
        </div>

        <p className={styles.description}>{movie.description}</p>

        <div className={styles.trailer}>
          <h6>TRAILERS</h6>

          <div>
            {movie.videos?.map((video) => (
              <button onClick={() => window.open(`${video.url}`, '_blank')} key={video.id}>{video.name}</button>
            ))}
          </div>
        </div>
      </section>
      </>
    )}
    </>
  );
};

export default MovieDetails;
