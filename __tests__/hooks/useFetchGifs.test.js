import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test on useFetchGifs Hook', () => {
  const category = 'Jojo';

  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs(category));
    console.log(result.current);

    expect(result.current.images).toEqual([]);
    expect(result.current.isLoading).toBe(true);
  });

  test('should return images array and isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifs(category));
    await waitFor(() => expect(result.current.images.length).toBe(10));
    expect(result.current.isLoading).toBe(false);
  });
});
