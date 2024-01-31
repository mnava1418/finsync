import { render, screen } from '@testing-library/react';
import Home from '.';

test('Home component', () => {
  render(<Home />);
  const label = screen.getByText(/Home/i);
  expect(label).toBeInTheDocument();
});
