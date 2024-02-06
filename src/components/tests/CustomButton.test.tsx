import { render, fireEvent } from '@testing-library/react';
import CustomButton from '../CustomButton'
import { CustomButtonType } from '../../types/buttonTypes';

describe('CustomButton', () => {
  it('renders correctly with provided props', () => {
    const mockOnClick = jest.fn();
    const props: CustomButtonType = {
      variant: 'primary',
      label: 'Click me',
      style: { backgroundColor: 'red' },
      onClick: mockOnClick,
    };

    const { getByText } = render(<CustomButton {...props} />);

    expect(getByText('Click me')).toBeInTheDocument();
    expect(getByText('Click me')).toHaveClass('btn-primary');
    expect(getByText('Click me')).toHaveStyle('background-color: red');
  });

  it('calls onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    const props: CustomButtonType = {
      variant: 'primary',
      label: 'Click me',
      onClick: mockOnClick,
    };

    const { getByText } = render(<CustomButton {...props} />);
    fireEvent.click(getByText('Click me'));

    // Assert
    expect(mockOnClick).toHaveBeenCalled();
  });
});
