import { render, screen } from '@testing-library/react';
import PublicRoute from './PublicRoute';
import { Navigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  Navigate: jest.fn(() => null),
}));

test('user is not authenticated', () => {
    jest.spyOn(require('../../services/authService'), 'isAuthenticated').mockReturnValue(false);

    render(
        <PublicRoute>
            <div>Public Content</div>
        </PublicRoute>
    );

    expect(Navigate).not.toHaveBeenCalled()
    expect(screen.getByText('Public Content')).toBeInTheDocument();
});

test('user is authenticated', () => {
    jest.spyOn(require('../../services/authService'), 'isAuthenticated').mockReturnValue(true);

    render(
        <PublicRoute>
            <div>Public Content</div>
        </PublicRoute>
    );

    expect(Navigate).toHaveBeenCalled()
});

