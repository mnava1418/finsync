export type ButtonType = {
    primary: string,
    [key: string]: string
}

export type CustomButtonType = {
    variant: 'primary',
    text: string,
    style?: {},
    onClick: () => void
}