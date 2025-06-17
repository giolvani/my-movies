import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mapMovieDetailsToMovie } from '../../mappers/movieMapper';
import * as helpers from '../../helpers';
import type { MovieDetails } from '../../types';

// Mock the helpers module
vi.mock('../../helpers', () => ({
  filterVideos: vi.fn()
}));

describe('movieMapper', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });
  describe('mapMovieDetailsToMovie', () => {
    it('should map movie details to movie format', () => {
      // Setup mock filter videos to return sample filtered videos
      const mockFilteredVideos = [
        { id: '1', key: 'abc123', name: 'Trailer 1', type: 'Trailer', official: true, site: 'YouTube' },
        { id: '2', key: 'def456', name: 'Trailer 2', type: 'Trailer', official: true, site: 'YouTube' }
      ];
      vi.mocked(helpers.filterVideos).mockReturnValue(mockFilteredVideos);

      // Mock movie details object
      const mockMovieDetails = {
        id: 123,
        original_title: 'Test Movie',
        poster_path: '/test-poster.jpg',
        overview: 'Test description',
        vote_average: 8.5,
        release_date: '2025-01-01',
        videos: {
          results: [
            { id: '1', key: 'abc123', name: 'Trailer 1', type: 'Trailer', official: true, site: 'YouTube' },
            { id: '2', key: 'def456', name: 'Trailer 2', type: 'Trailer', official: true, site: 'YouTube' }
          ]
        }
      };

      // Call the mapper
      const result = mapMovieDetailsToMovie(mockMovieDetails);

      // Verify basic mapping
      expect(result).toEqual({
        id: 123,
        title: 'Test Movie',
        image: '/test-poster.jpg',
        description: 'Test description',
        votes: 8.5,
        year: '2025-01-01',
        videos: [
          { id: '1', key: 'abc123', name: 'Trailer 1', url: 'https://www.youtube.com/watch?v=abc123' },
          { id: '2', key: 'def456', name: 'Trailer 2', url: 'https://www.youtube.com/watch?v=def456' }
        ]
      });

      // Verify the filterVideos function was called with correct parameters
      expect(helpers.filterVideos).toHaveBeenCalledWith(mockMovieDetails.videos);
    });

    it('should handle missing videos data', () => {
      // Mock movie details object without videos
      const mockMovieDetails = {
        id: 456,
        original_title: 'Another Movie',
        poster_path: '/another-poster.jpg',
        overview: 'Another description',
        vote_average: 7.5,
        release_date: '2025-02-01'
      } as Omit<MovieDetails, 'videos'>; // Properly typed without videos property

      // Call the mapper
      const result = mapMovieDetailsToMovie(mockMovieDetails);

      // Verify basic mapping with empty videos array
      expect(result).toEqual({
        id: 456,
        title: 'Another Movie',
        image: '/another-poster.jpg',
        description: 'Another description',
        votes: 7.5,
        year: '2025-02-01',
        videos: []
      });

      // filterVideos should not have been called in this case
      expect(helpers.filterVideos).not.toHaveBeenCalled();
    });
  });
});
