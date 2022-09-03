import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests on AddCategory Component', () => {
  test('should change the inputField value', () => {
    render(<AddCategory onInputSubmit={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'Jotaro' } });

    expect( input.value ).toBe('Jotaro');
  });
});
