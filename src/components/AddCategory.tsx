import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState('One Punch');

  return (
    <form action="" onSubmit={(e) => {e.preventDefault()}}>
      <input
        type="text"
        placeholder="Add Category"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
};
