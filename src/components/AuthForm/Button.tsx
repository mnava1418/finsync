import CustomButton from "../CustomButton"
import { CustomButtonType } from "../../config/types"

const Button = ({variant, label, onClick}: CustomButtonType) => {
    return(
        <CustomButton variant={variant} label={label} style={{width: '100%', marginBottom: '16px'}} onClick={onClick} />
    )
}

export default Button
