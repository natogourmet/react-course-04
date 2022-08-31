// import React from 'react'

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

type props = {
  category: string;
};

export const useFetchGifs = ({ category }: props) => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getImages = async (category: string) => {
    const images = await getGifs(category);
    setImages(images);
    setLoading(false);
  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
