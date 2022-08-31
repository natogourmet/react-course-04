import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

type props = {
  category: string;
};

export const GifGrid = ({ category }: props) => {

  const {images, isLoading } = useFetchGifs( { category } );
  
 

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
