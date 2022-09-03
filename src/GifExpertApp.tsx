import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X']);

  const addCategory = (category: string) => {
    if (categories.includes(category)) return;
    setCategories([...categories, category]);
  };

  return (
    <>
      <AddCategory onInputSubmit={addCategory} />

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
};
