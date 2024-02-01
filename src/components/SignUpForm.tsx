import { useState, ChangeEvent } from 'react'
import Form from 'react-bootstrap/Form'
import { SignUpType } from '../config/types'

const SignUpForm = ({validated, password, confirmPassword, passwordsMatch, setValidated, setPassword, setConfirmPassword, setPasswordsMatch}: SignUpType) => {
    const [confirmPasswordError, setConfirmPasswordError] = useState('Mandatory field.')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const currentPassword = e.target.value
        let passwordToCompare = ''

        setValidated(false)

        if(e.target.id === 'signUpPassword') {
            setPassword(currentPassword)
            passwordToCompare = confirmPassword
            
        } else if(e.target.id === 'signUpConfirm') {
            setConfirmPassword(e.target.value)
            passwordToCompare = password
        }

        comparePasswords(currentPassword, passwordToCompare)
    }

    const comparePasswords = (passwordA: string, passwordB: string) => {
        if(passwordA === passwordB) {
            setPasswordsMatch(true)
        }  else {
            setPasswordsMatch(false)
            setConfirmPasswordError('Passwords don´t match.')
        }
    }

    return(
        <Form id='signUpForm' noValidate validated={validated}  style={{width: '100%'}}>
            <Form.Group controlId="signUpEmail"  style={{marginBottom: '32px'}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" autoComplete='off' required />
                <Form.Control.Feedback type="invalid">Invalid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="signUpPassword"  style={{marginBottom: '32px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    required
                    type="password" 
                    placeholder="Enter your password" 
                    autoComplete='off' 
                    onChange={handleOnChange}
                />
                <Form.Control.Feedback type="invalid">Mandatory field.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="signUpConfirm"  style={{marginBottom: '32px'}}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    required
                    isInvalid={confirmPassword.length > 0 && !passwordsMatch}
                    isValid={confirmPassword.length > 0 && passwordsMatch}
                    type="password" 
                    placeholder="Confirm your password" 
                    autoComplete='off'  
                    onChange={handleOnChange}
                />
                <Form.Control.Feedback type="invalid">{confirmPasswordError}</Form.Control.Feedback>
            </Form.Group>
        </Form>
    )
}

export default SignUpForm