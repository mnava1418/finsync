import { ReactNode } from "react"
import Body from './Body'
import Button from './Button'
import Footer from './Footer'

const AuthForm = ({children}: {children: ReactNode}) => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center fs-form fs-form-light fs-form-auth'>
            <div className='fs-icon fs-bg' style={{width: '80px', height: '80px', marginBottom: '32px'}}/>
            {children}
        </div>
    )
}

AuthForm.Body = Body
AuthForm.Button = Button
AuthForm.Footer = Footer

export default AuthForm