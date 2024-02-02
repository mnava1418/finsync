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
