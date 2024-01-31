import { render, screen } from '@testing-library/react';
import Login from '.';

test('Login component', () => {
  render(<Login />);
  const label = screen.getByText(/Login/i);
  expect(label).toBeInTheDocument();
});
