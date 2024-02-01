import Form from 'react-bootstrap/Form'

const SignUpForm = () => {
    return(
        <Form style={{width: '100%'}}>
            <Form.Group controlId="signUpEmail"  style={{marginBottom: '32px'}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" autoComplete='off' />
            </Form.Group>
            <Form.Group controlId="signUpPassword"  style={{marginBottom: '32px'}}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password" autoComplete='off' />
            </Form.Group>
            <Form.Group controlId="signUpConfirm"  style={{marginBottom: '32px'}}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm your password" autoComplete='off' />
            </Form.Group>
        </Form>
    )
}

export default SignUpForm