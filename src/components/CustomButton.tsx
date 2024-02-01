import Button from 'react-bootstrap/Button'
import { BTN_TYPES } from '../config/constants'
import { CustomButtonType } from '../config/types'

const CustomButton = ({ variant, label, style, onClick }: CustomButtonType) => {
    if(style === undefined) {
        style = {}
    }

    return(
        <Button variant={variant} className={BTN_TYPES[variant]}  style={style} onClick={onClick}>
            {label}
        </Button>
    )
}

export default CustomButton

