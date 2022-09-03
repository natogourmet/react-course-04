import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on GifGrid', () => {
  const category = 'Jotaro';

  test('should show loading at first', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText( category )).toBeTruthy();
  });

  test('should show images through useFetchGifs', () => {
    const images = [
      {
        id: '1',
        url: 'https://localhost/1.jpg',
        title: 'Jotaro',
      },
      {
        id: '2',
        url: 'https://localhost/2.jpg',
        title: 'Jonathan',
      },
    ];

    useFetchGifs.mockReturnValue({
      images,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
