import { useState } from 'react';
import PropTypes from 'prop-types';

type props = {
  onInputSubmit: (category: string) => void;
};

export const AddCategory = ({ onInputSubmit }: props) => {
  const [inputValue, setInputValue] = useState('One Punch');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return;
    onInputSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Category"
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onInputSubmit: PropTypes.func.isRequired,
}