import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('Home component', () => {
    render(
        <Home></Home>
    )

    expect(screen.getByText('Home')).toBeInTheDocument();
});
