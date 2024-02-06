import { render, screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';

test('NotFound component', () => {
    render(
        <NotFound></NotFound>
    )

    expect(screen.getByText('Not Found')).toBeInTheDocument();
});
