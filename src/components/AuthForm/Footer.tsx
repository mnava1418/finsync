import { ReactNode } from "react";

const Footer = ({children}: {children: ReactNode}) => {
    return(
        <div style={{textAlign: 'center'}}>
            {children}
        </div>
    )
}

export default Footer