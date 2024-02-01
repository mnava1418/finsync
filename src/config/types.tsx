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

export type SignUpType = {
    validated: boolean,
    password: string,
    confirmPassword: string,
    setPassword: (password: string) => void
    setConfirmPassword: (confirmPassword: string) => void
}
