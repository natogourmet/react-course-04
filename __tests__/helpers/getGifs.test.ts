import { getGifs } from '../../src/helpers/getGifs';


describe('Tests on getGifs helper', () => {
  
  test('should return array of gifs', async () => {
    const gifs = await getGifs('Jojos');

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
    
  });
  
});