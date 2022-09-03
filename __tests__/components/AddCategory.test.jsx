import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests on AddCategory Component', () => {
  test('should change the inputField value', () => {
    render(<AddCategory onInputSubmit={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Jotaro' } });

    expect(input.value).toBe('Jotaro');
  });

  test('should call onImputSubmit if input is valid', () => {
    const inputValue = 'Jotaro';
    const onInputSubmit = jest.fn();

    render(<AddCategory onInputSubmit={onInputSubmit} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onInputSubmit).toHaveBeenCalledWith(inputValue);
  });

  test('should not call onImputSubmit if input is invalid', () => {
    const inputValue = '';
    const onInputSubmit = jest.fn();

    render(<AddCategory onInputSubmit={onInputSubmit} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onInputSubmit).not.toHaveBeenCalled();
  });
});
