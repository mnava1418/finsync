import { render, screen } from '@testing-library/react';
import Login from '../pages/Login';

test('Login component', () => {
    render(
        <Login></Login>
    )

    expect(screen.getByText('Login')).toBeInTheDocument();
});
