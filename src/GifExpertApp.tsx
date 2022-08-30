import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X']);

  const addCategory = ( category: string ) => {
    setCategories([...categories, category]);
  };

  return (
    <>
      {/* title */}
      <AddCategory onInputSubmit={addCategory} />
      <h1>Gif Expert App</h1>
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </>
  );
};
