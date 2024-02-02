import { ChangeEvent, Dispatch, SetStateAction} from 'react'

export type ButtonType = {
    primary: string,
    [key: string]: string
}

export type CustomButtonType = {
    variant: 'primary',
    label: string,
    style?: {},
    onClick: () => void
}

export type SignUpFormDataType = {
    email: string,
    password: string,
    confirmPassword: string
}

export type SignUpFormValidationsType = {
    validated: boolean, 
    passwordsMatch: boolean, 
    confirmPasswordError: string
}

export type SignUpType = {
    validated: boolean,
    formData: SignUpFormDataType,
    formValidations: SignUpFormValidationsType,
    setFormData: (formData: SignUpFormDataType) => void
}
