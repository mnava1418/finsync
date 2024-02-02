export type SignUpFormDataType = {
    email: string,
    password: string,
    confirmPassword: string
}

export type SignUpFormValidationsType = {
    validated: boolean, 
    passwordsMatch: boolean,
    isStrongPassword: boolean,
    confirmPasswordError: string
    strongPasswordError: string
}

export type SignUpFormActionType = {
    type: 'isMatched' | 'isUnmatched' | 'isStrong' | 'isWeak' | 'setValidated',
    message?: string,
    validated?: boolean
}

export type SignUpType = {
    validated: boolean,
    formData: SignUpFormDataType,
    formValidations: SignUpFormValidationsType,
    setFormData: (formData: SignUpFormDataType) => void
}
