import { useState, useEffect, useCallback } from 'react'
import AuthForm from '../AuthForm'
import { PATHS } from '../../config/constants'
import SignUpForm from '../SignUpForm'
import { signUp } from '../../services/authService'
import { SignUpFormDataType, SignUpFormValidationsType } from '../../types/signUpTypes'

const SignUp = () => {
    
    const [formData, setFormData] = useState<SignUpFormDataType>({
        email: '', 
        password: '', 
        confirmPassword: ''
    })
    
    const [formValidations, setFormValidations] = useState<SignUpFormValidationsType>({
        validated: false, 
        passwordsMatch: false, 
        confirmPasswordError: ''
    })

    const {email, password, confirmPassword} = formData
    const {validated, passwordsMatch} = formValidations

    const comparePasswords = useCallback((firstPassword: string, secondPassword: string) => {
        if(firstPassword === secondPassword) {
            setFormValidations({validated: false, passwordsMatch: true, confirmPasswordError: ''})
        }  else {
            setFormValidations({validated: false, passwordsMatch: false, confirmPasswordError: 'Passwords don´t match.'})
        }
    }, []);

    useEffect(() => {
        comparePasswords(password, confirmPassword)
    }, [password, confirmPassword, comparePasswords])

    const handleSubmit = () => {
        if(passwordsMatch) {
            const signUpForm = document.getElementById('signUpForm') as HTMLInputElement
            if (signUpForm.checkValidity()) {
                signUp(email, password)
            }

            setFormValidations({...formValidations, validated: true})
        } else {
            setFormValidations({...formValidations, validated: false})
        }
    }

    return(
        <section id="signUp" className='fs-full-screen d-flex flex-column justify-content-center align-items-center'>
            <AuthForm>
                <AuthForm.Body>
                    <SignUpForm 
                        validated={validated} 
                        setFormData={setFormData} 
                        formData={formData}
                        formValidations={formValidations}
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