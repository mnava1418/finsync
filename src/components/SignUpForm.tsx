import Form from 'react-bootstrap/Form'
import { SignUpType } from '../types/signUpTypes'

const SignUpForm = ({validated, formData, formValidations, setFormData}: SignUpType) => {
    const {confirmPassword, password} = formData
    const {passwordsMatch, isStrongPassword, confirmPasswordError, strongPasswordError} = formValidations

    const updateFormData = (key: string, value: string) => {
        setFormData({...formData, [key]: value})
    }

    return(
        <Form id='signUpForm' noValidate validated={validated}  style={{width: '100%'}}>
            <Form.Group controlId="signUpEmail"  style={{marginBottom: '32px'}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    required
                    type="email" 
                    placeholder="Enter your email" 
                    autoComplete='off'  
                    onChange={(e) => {updateFormData('email', e.target.value)}}
                />
                <Form.Control.Feedback type="invalid">Invalid email.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="signUpPassword"  style={{marginBottom: '32px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    required
                    isInvalid={password.length > 0 && !isStrongPassword}
                    isValid={password.length > 0 && isStrongPassword}
                    type="password" 
                    placeholder="Enter your password" 
                    autoComplete='off' 
                    onChange={(e) => {updateFormData('password', e.target.value)}}
                />
                <Form.Control.Feedback type="invalid">{strongPasswordError}</Form.Control.Feedback>
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
                    onChange={(e) => {updateFormData('confirmPassword', e.target.value)}}
                />
                <Form.Control.Feedback type="invalid">{confirmPasswordError}</Form.Control.Feedback>
            </Form.Group>
        </Form>
    )
}

export default SignUpForm