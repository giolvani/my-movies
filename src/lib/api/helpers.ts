import type { MovieDetails } from './types';

export const filterVideos = (videos: MovieDetails['videos']) => {
  return videos?.results?.filter((video) => video.type === 'Trailer' && video.official && video.site === 'YouTube') || [];
};
