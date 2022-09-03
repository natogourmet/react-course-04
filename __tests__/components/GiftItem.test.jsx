import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('tests on GiftItem component', () => {
  const title = 'A title';
  const url = 'https://localhost/algo.jpg';

  test('should match with snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should show image with URL and ALT given', () => {
    render(<GifItem title={title} url={url} />);
    screen.debug();

    // expect( screen.getByRole('img').src).toBe( url);
    const { src } = screen.getByRole('img');
    expect(src).toBe(url);
  });

  test('should show the Title', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
