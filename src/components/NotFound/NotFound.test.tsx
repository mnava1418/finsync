import { render, screen } from '@testing-library/react';
import NotFound from '.';

test('not found component', () => {
  render(<NotFound />);
  const label = screen.getByText(/Not Found/i);
  expect(label).toBeInTheDocument();
});
