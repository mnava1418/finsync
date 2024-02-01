import React, { ReactNode } from "react";
import { Navigate } from 'react-router-dom'

import { isAuthenticated } from '../../services/authService'
import { PATHS } from '../../config/constants'

const PublicRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
    return isAuthenticated() ? <Navigate to={PATHS.home} /> : <>{children}</>;
};

export default PublicRoute