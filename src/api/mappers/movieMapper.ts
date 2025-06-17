import { filterVideos } from '@/api/helpers';
import type { MovieDetails } from '@/api/types';
import type { Movie, Video } from '@/components/MovieDetails/types';

export function mapMovieDetailsToMovie(movieDetails: MovieDetails): Movie {
  return {
    id: movieDetails.id,
    title: movieDetails.original_title,
    image: movieDetails.poster_path,
    description: movieDetails.overview,
    votes: movieDetails.vote_average,
    year: movieDetails.release_date,
    videos: movieDetails.videos ? filterVideos(movieDetails.videos).map(mapVideoResult) : [],
  };
}

function mapVideoResult(videoResult: {
  id: string;
  key: string;
  name: string;
}): Video {
  return {
    id: videoResult.id,
    key: videoResult.key,
    name: videoResult.name,
    url: `https://www.youtube.com/watch?v=${videoResult.key}`,
  };
}
