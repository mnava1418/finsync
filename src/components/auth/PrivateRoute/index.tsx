import React, { ReactNode } from "react";
import { Navigate } from 'react-router-dom'

import { isAuthenticated } from '../../../services/authService'
import { PATHS } from '../../../config/constants'

const PrivateRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    return isAuthenticated() ? <>{children}</> : <Navigate to={PATHS.login} />;
};

export default PrivateRoute