import { useEffect, useState, useCallback, useMemo } from 'react';
import styles from './MovieDetails.module.css';
import { fetchMovieById } from '@/lib/api/tmdb';
import { IMAGE_BASE_URL } from '@/lib/constants';
import { mapMovieDetailsToMovie } from '@/lib/api/mappers/movieMapper';
import type { Movie } from './types';

interface MovieDetailsProps {
  id?: string;
}

const MovieDetails = ({ id }: MovieDetailsProps) => {
  const [movie, setMovie] = useState<Movie>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    fetchMovieById(id).then(({ data }) => {
      if (data) {
        setMovie(mapMovieDetailsToMovie(data));
      }
      setLoading(false);
    });
  }, [id]);

  const movieYear = useMemo(() => {
    return movie ? new Date(movie.year).getFullYear() : '';
  }, [movie]);

  const formattedVotes = useMemo(() => {
    return movie ? movie.votes.toFixed(2) : '';
  }, [movie]);

  const handleTrailerClick = useCallback((url: string) => {
    window.open(url, '_blank');
  }, []);

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
                    <h2>{movieYear}</h2>
                    <p>mins</p>
                  </div>
                  <h3>{formattedVotes}/10</h3>
                </div>

                <button>Add to Favorite</button>
              </div>
            </div>

            <p className={styles.description}>{movie.description}</p>

            <div className={styles.trailer}>
              <h6>TRAILERS</h6>

              <div>
                {movie.videos?.map((video) => (
                  <button onClick={() => handleTrailerClick(video.url)} key={video.id}>
                    {video.name}
                  </button>
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
