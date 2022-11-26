import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";


const BuyersRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const [isAdmin, isAdminLoadin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isAdminLoadin) {
        return <Spinner></Spinner>
    }

    if (user && !isAdmin && !isSeller) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default BuyersRoute;