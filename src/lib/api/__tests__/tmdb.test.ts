import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchPopular, fetchTopRated, fetchMovieById } from '../tmdb';
import { API_BASE_URL } from '@/lib/constants';

// Mock global fetch
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('TMDB API', () => {
  beforeEach(() => {
    mockFetch.mockReset();
  });

  describe('fetchPopular', () => {
    it('should fetch popular movies successfully', async () => {
      // Mock successful response
      const mockMovies = {
        results: [{ id: 1, title: 'Test Movie' }],
        page: 1,
        total_pages: 500,
        total_results: 10000
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockMovies
      });

      const result = await fetchPopular(1);

      // Assertions
      expect(mockFetch).toHaveBeenCalledWith(
        `${API_BASE_URL}/movie/popular?language=en-US&page=1`,
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringContaining('Bearer ')
          })
        })
      );
      expect(result.data).toEqual(mockMovies);
      expect(result.error).toBeNull();
    });

    it('should handle fetch errors', async () => {
      // Mock failed response
      mockFetch.mockResolvedValueOnce({
        ok: false,
        text: async () => 'API Error',
        statusText: 'Not Found'
      });

      const result = await fetchPopular(1);

      // Assertions
      expect(result.data).toBeNull();
      expect(result.error).toBe('API Error');
    });
  });

  describe('fetchTopRated', () => {
    it('should fetch top-rated movies successfully', async () => {
      // Mock successful response
      const mockMovies = {
        results: [{ id: 2, title: 'Top Rated Movie' }],
        page: 1,
        total_pages: 500,
        total_results: 10000
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockMovies
      });

      const result = await fetchTopRated(1);

      // Assertions
      expect(mockFetch).toHaveBeenCalledWith(
        `${API_BASE_URL}/movie/top_rated?language=en-US&page=1`,
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: expect.stringContaining('Bearer ')
          })
        })
      );
      expect(result.data).toEqual(mockMovies);
      expect(result.error).toBeNull();
    });

    it('should handle fetch errors', async () => {
      // Mock failed response
      mockFetch.mockResolvedValueOnce({
        ok: false,
        text: async () => 'API Error',
        statusText: 'Not Found'
      });

      const result = await fetchTopRated(1);

      // Assertions
      expect(result.data).toBeNull();
      expect(result.error).toBe('API Error');
    });
  });

  describe('fetchMovieById', () => {
    it('should fetch movie details successfully', async () => {
      // Mock successful response
      const mockMovie = {
        id: 123,
        title: 'Test Movie',
        overview: 'Test overview',
        videos: { results: [] }
      };

      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockMovie
      });

      const result = await fetchMovieById('123');

      // Assertions
      expect(mockFetch).toHaveBeenCalledWith(`${API_BASE_URL}/movie/123?language=en-US&append_to_response=videos`, expect.any(Object));
      expect(result.data).toEqual(mockMovie);
      expect(result.error).toBeNull();
    });
  });
});
