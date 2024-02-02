import { useEffect, useCallback, useRef } from 'react'
import AuthForm from '../AuthForm'
import { PATHS } from '../../config/constants'
import SignUpForm from '../SignUpForm'
import { signUp } from '../../services/authService'
import useSignUp from '../../hooks/useSignUp'
import zxcvbn from 'zxcvbn'

const SignUp = () => {
    const {
        formData, setFormData,
        formValidations, dispatch
    } = useSignUp()
    
    const {email, password, confirmPassword} = formData
    const {validated, passwordsMatch, isStrongPassword} = formValidations

    const currentPassword = useRef('')

    const comparePasswords = useCallback((firstPassword: string, secondPassword: string) => {
        if(firstPassword === secondPassword) {
            dispatch({type: 'isMatched'})
        }  else {
            dispatch({type: 'isUnmatched'})
        }
        // eslint-disable-next-line
    }, []);

    const checkPasswordStrength = useCallback(() => {
        const validationResult = zxcvbn(currentPassword.current)

        if(validationResult.score <= 2) {
            const message = validationResult.feedback.suggestions ? validationResult.feedback.suggestions[0] : 'Mandatory field.'
            dispatch({type: 'isWeak', message})
        } else {
            dispatch({type: 'isStrong'})
        }
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        comparePasswords(password, confirmPassword)
        
        if(password !== currentPassword.current) {
            currentPassword.current = password
            checkPasswordStrength()
        }

    }, [password, confirmPassword, comparePasswords, checkPasswordStrength])

    const handleSubmit = () => {
        if(passwordsMatch && isStrongPassword) {
            const signUpForm = document.getElementById('signUpForm') as HTMLInputElement
            if (signUpForm.checkValidity()) {
                signUp(email, password)
            }

            dispatch({type: 'setValidated', validated: true})
        } else {
            if(password.length <= 0 || confirmPassword.length <=0 ) {
                dispatch({type: 'setValidated', validated: true})    
            } else {
                dispatch({type: 'setValidated', validated: false})
            }
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