import { useState } from 'react'
import AuthForm from '../AuthForm'
import { PATHS } from '../../config/constants'
import SignUpForm from '../SignUpForm'

const SignUp = () => {
    const [validated, setValidated] = useState(false)
    const [passwordsMatch, setPasswordsMatch] = useState(false)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = () => {
        const signUpForm = document.getElementById('signUpForm') as HTMLInputElement

        if(passwordsMatch) {
            if (signUpForm.checkValidity()) {
                console.log(password)
                console.log(confirmPassword)
            }

            setValidated(true);
        } else {
            setValidated(false);
        }
    }

    return(
        <section id="signUp" className='fs-full-screen d-flex flex-column justify-content-center align-items-center'>
            <AuthForm>
                <AuthForm.Body>
                    <SignUpForm 
                        validated={validated} 
                        password={password}
                        confirmPassword={confirmPassword}
                        passwordsMatch={passwordsMatch}
                        setValidated={setValidated}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword} 
                        setPasswordsMatch={setPasswordsMatch}
                    />
                </AuthForm.Body>
                <AuthForm.Button variant='primary' label='Sign Up' onClick={handleSubmit} />
                <AuthForm.Footer>
                    Already have an account? <a href={PATHS.login}>Sign In</a>
                </AuthForm.Footer>
            </AuthForm>
        </section>
    )
}

export default SignUp