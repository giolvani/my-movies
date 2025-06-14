/* eslint-disable @typescript-eslint/no-explicit-any */
import { TMDB_TOKEN, API_BASE_URL } from '@/constants';

const DEFAULT_LANGUAGE = 'en-US';

interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

// shape for list endpoints
export interface MovieSummary {
  id: number;
  poster_path: string;
  title: string;
  // you can add more fields as needed (e.g. vote_average)
}

export interface MovieList {
  page: number;
  results: MovieSummary[];
  total_pages: number;
  total_results: number;
}

// shape for detail endpoint (plus appended videos)
export interface MovieDetails {
  id: number;
  original_title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  release_date: string;
  videos?: {
    results: Array<{
      id: string;
      key: string;
      name: string;
      site: string;
      type: string;
    }>;
  };
}

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
  } catch (err: any) {
    return { data: null, error: err.message };
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
  } catch (err: any) {
    return { data: null, error: err.message };
  }
}

/**
 * Fetches full details for a single movie, including videos
 */
export async function fetchMovieById(id: number, appendToResponse = 'videos'): Promise<ApiResponse<MovieDetails>> {
  const url = `${API_BASE_URL}/movie/${id}?language=${DEFAULT_LANGUAGE}&append_to_response=${appendToResponse}`;
  try {
    const res = await fetch(url, { headers: commonHeaders });
    if (!res.ok) throw new Error((await res.text()) || res.statusText);
    const data = (await res.json()) as MovieDetails;
    return { data, error: null };
  } catch (err: any) {
    return { data: null, error: err.message };
  }
}
