import { render, screen } from '@testing-library/react';
import PrivateRoute from '../AuthRoutes/PrivateRoute';
import { Navigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  Navigate: jest.fn(() => null),
}));

test('user is authenticated', () => {
    jest.spyOn(require('../../services/authService'), 'isAuthenticated').mockReturnValue(true);

    render(
        <PrivateRoute>
            <div>Private Content</div>
        </PrivateRoute>
    );

    expect(Navigate).not.toHaveBeenCalled()
    expect(screen.getByText('Private Content')).toBeInTheDocument();
});

test('user is not authenticated', () => {
    jest.spyOn(require('../../services/authService'), 'isAuthenticated').mockReturnValue(false);

    render(
        <PrivateRoute>
            <div>Private Content</div>
        </PrivateRoute>
    );

    expect(Navigate).toHaveBeenCalled()
});

