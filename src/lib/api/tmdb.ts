import { TMDB_TOKEN, API_BASE_URL } from '@/lib/constants';
import type { ApiResponse, MovieList, MovieDetails } from './types';

const DEFAULT_LANGUAGE = 'en-US';

const commonHeaders = {
  Authorization: `Bearer ${TMDB_TOKEN}`,
  Accept: 'application/json'
};

/**
 * Fetches popular movies (page defaults to 1)
 */
export async function fetchPopular(page = 1): Promise<ApiResponse<MovieList>> {
  const url = `${API_BASE_URL}/movie/popular?language=${DEFAULT_LANGUAGE}&page=${page}`;
  try {
    const res = await fetch(url, { headers: commonHeaders });
    if (!res.ok) throw new Error((await res.text()) || res.statusText);
    const data = (await res.json()) as MovieList;
    return { data, error: null };
  } catch (err: unknown) {
    return { data: null, error: (err as Error).message };
  }
}

/**
 * Fetches top-rated movies (page defaults to 1)
 */
export async function fetchTopRated(page = 1): Promise<ApiResponse<MovieList>> {
  const url = `${API_BASE_URL}/movie/top_rated?language=${DEFAULT_LANGUAGE}&page=${page}`;
  try {
    const res = await fetch(url, { headers: commonHeaders });
    if (!res.ok) throw new Error((await res.text()) || res.statusText);
    const data = (await res.json()) as MovieList;
    return { data, error: null };
  } catch (err: unknown) {
    return { data: null, error: (err as Error).message };
  }
}

/**
 * Fetches full details for a single movie, including videos
 */
export async function fetchMovieById(id: string, appendToResponse = 'videos'): Promise<ApiResponse<MovieDetails>> {
  const url = `${API_BASE_URL}/movie/${id}?language=${DEFAULT_LANGUAGE}&append_to_response=${appendToResponse}`;
  try {
    const res = await fetch(url, { headers: commonHeaders });
    if (!res.ok) throw new Error((await res.text()) || res.statusText);
    const data = (await res.json()) as MovieDetails;
    return { data, error: null };
  } catch (err: unknown) {
    return { data: null, error: (err as Error).message };
  }
}
