import { useState, useReducer } from 'react'
import { SignUpFormDataType, SignUpFormValidationsType, SignUpFormActionType } from '../types/signUpTypes'

const INITIAL_STATE: SignUpFormValidationsType = {
    validated: false, 
    passwordsMatch: false, 
    isStrongPassword: false,
    confirmPasswordError: 'Mandatory field.',
    strongPasswordError: 'Mandatory field.',
}

const reducer = (state: SignUpFormValidationsType, action: SignUpFormActionType): SignUpFormValidationsType => {
    switch (action.type) {
        case 'isMatched':
            return {...state, passwordsMatch: true, validated: false}
        case 'isUnmatched':
            return {...state, passwordsMatch: false, validated: false, confirmPasswordError: 'Passwords don´t match.'}
        case 'isStrong':
            return {...state, isStrongPassword: true, validated: false}
        case 'isWeak':
            return {...state, isStrongPassword: false, validated: false, strongPasswordError: action.message as string}
        case 'setValidated': 
            return {...state, validated: action.validated as boolean}
        default:
            return state
    }
}

const useSignUp = () => {
    const [formData, setFormData] = useState<SignUpFormDataType>({
        email: '', 
        password: '', 
        confirmPassword: ''
    })

    const [formValidations, dispatch] = useReducer(reducer, INITIAL_STATE)

    return {formData, setFormData, formValidations, dispatch}
}

export default useSignUp
