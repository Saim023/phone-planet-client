import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";


const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    console.log(isSeller)

    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            !isAdmin && !isSeller &&
                            <>
                                <li><Link to='/dashboard/my-orders'>My Orders</Link></li>
                                <li><Link to='/dashboard/my-wish'>My Wish List</Link></li>

                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/add-products'>Add Products</Link></li>
                                <li><Link to='/dashboard/my-products'>My Products</Link></li>
                            </>
                        }
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/all-sellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/all-buyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reported-items'>Reported Items</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;