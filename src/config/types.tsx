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