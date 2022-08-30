import { getGifs } from '../helpers/getGifs';
type props = {
  category: string;
};

export const GifGrid = ({ category }: props) => {

  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <p>cat subtitle</p>
    </>
  );
};
