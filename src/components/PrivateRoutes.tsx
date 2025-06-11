import { ReactNode } from "react";
import { useAuth } from "../customHooks/useAuth";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRoutesProps) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" replace />
}

export default PrivateRoute;