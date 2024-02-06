import { render, screen } from '@testing-library/react';
import AuthForm from '../AuthForm';

test('generate an AuthForm', () => {
    render(
        <AuthForm>
            <AuthForm.Body>
                My Body
            </AuthForm.Body>
            <AuthForm.Button variant='primary' label='My Buton' onClick={() => {}} />
            <AuthForm.Footer>
                My Footer
            </AuthForm.Footer>
        </AuthForm>
    )

    expect(screen.getByText('My Body')).toBeInTheDocument();
    expect(screen.getByText('My Buton')).toBeInTheDocument();
    expect(screen.getByText('My Footer')).toBeInTheDocument();
});
