export const getGifs = async (category: string) => {
  const url: string = `https://api.giphy.com/v1/gifs/search?api_key=OS9DXv8QyQckxIa9clNdSzwho0Fl83YS&q=${category}&limit=10`;
  const resp: Response = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  console.log(gifs);
};
