import AuthForm from '../AuthForm'
import { PATHS } from '../../config/constants'
import SignUpForm from '../SignUpForm'

const SignUp = () => {
    const handleOnClick = () => {
        alert('Sign Up!')
    }

    return(
        <section id="signUpForm" className='fs-full-screen d-flex flex-column justify-content-center align-items-center'>
            <AuthForm>
                <AuthForm.Body>
                    <SignUpForm />
                </AuthForm.Body>
                <AuthForm.Button variant='primary' label='Sign Up' onClick={handleOnClick} />
                <AuthForm.Footer>
                    Already have an account? <a href={PATHS.login}>Sign In</a>
                </AuthForm.Footer>
            </AuthForm>
        </section>
    )
}

export default SignUp