import { describe, it, expect } from 'vitest';
import { filterVideos } from '../helpers';
import type { MovieDetails } from '../types';

describe('API helpers', () => {
  describe('filterVideos', () => {
    it('should filter videos to include only official YouTube trailers', () => {
      // Mock videos with various types
      const mockVideos: MovieDetails['videos'] = {
        results: [
          { id: '1', key: 'abc123', name: 'Trailer 1', type: 'Trailer', official: true, site: 'YouTube' },
          { id: '2', key: 'def456', name: 'Teaser', type: 'Teaser', official: true, site: 'YouTube' },
          { id: '3', key: 'ghi789', name: 'Fan Trailer', type: 'Trailer', official: false, site: 'YouTube' },
          { id: '4', key: 'jkl012', name: 'Official Trailer', type: 'Trailer', official: true, site: 'Vimeo' },
          { id: '5', key: 'mno345', name: 'Official YouTube Trailer', type: 'Trailer', official: true, site: 'YouTube' }
        ]
      };

      const filteredVideos = filterVideos(mockVideos);

      // Should only include videos that are:
      // 1. Type === 'Trailer'
      // 2. official === true
      // 3. site === 'YouTube'
      expect(filteredVideos).toHaveLength(2);
      expect(filteredVideos[0].id).toBe('1');
      expect(filteredVideos[1].id).toBe('5');

      // Verify all filtered videos match our criteria
      filteredVideos.forEach((video) => {
        expect(video.type).toBe('Trailer');
        expect(video.official).toBe(true);
        expect(video.site).toBe('YouTube');
      });
    });

    it('should handle missing videos data', () => {
      // Test with undefined
      expect(filterVideos(undefined)).toEqual([]);

      // Test with empty results
      expect(filterVideos({ results: [] })).toEqual([]);

      // Test with null results
      // Using unknown as an intermediate step to avoid TypeScript errors with the null value
      const videosWithNullResults = { results: null } as unknown as MovieDetails['videos'];
      expect(filterVideos(videosWithNullResults)).toEqual([]);
    });
  });
});
