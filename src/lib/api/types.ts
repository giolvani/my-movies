export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

export interface MovieSummary {
  id: number;
  poster_path: string;
  title: string;
}

export interface MovieList {
  page: number;
  results: MovieSummary[];
  total_pages: number;
  total_results: number;
}

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
      official: boolean;
    }>;
  };
}