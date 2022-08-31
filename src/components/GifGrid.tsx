import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
type props = {
  category: string;
};

export const GifGrid = ({ category }: props) => {
  const [images, setImages] = useState([]);
  
  const getImages = async (category: string) => {
    const images = await getGifs(category);
    setImages(images);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((img: any) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
