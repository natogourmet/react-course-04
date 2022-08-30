import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Samurai X']);

  const onAddCategory = () => {
    setCategories([...categories, 'Hunter X Hunter']);
  }
  
  return (
    <>
      {/* title */}
      <AddCategory />      
      <h1>Gif Expert App</h1>
      <button onClick={onAddCategory}>Add Category</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
