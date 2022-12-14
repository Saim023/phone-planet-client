import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout/DashboardLayout";
import Main from "../../layouts/Main/Main";
import AddProducts from "../../pages/AddProducts/AddProducts";
import MyProducts from "../../pages/AddProducts/MyProducts";
import Advertised from "../../pages/Advertised/Advertised";
import AllBuyers from "../../pages/AllBuyers/AllBuyers";
import AllSellers from "../../pages/AllSellers/AllSellers";
import Blogs from "../../pages/Blogs/Blogs";
import Home from "../../pages/Home/Home";
import Iphone from "../../pages/Iphone/Iphone";
import Login from "../../pages/Login/Login";
import MyOrders from "../../pages/MyOrders/MyOrders";
import MyWishList from "../../pages/MyWishList/MyWishList";
import Oneplus from "../../pages/Oneplus/Oneplus";
import PageNotFound from "../../pages/PageNotFound/PageNotFound";
import ReportedItems from "../../pages/ReportedItems/ReportedItems";
import SignUp from "../../pages/SignUp/SignUp";
import Xiaomi from "../../pages/Xiaomi/Xiaomi";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyersRoute from "../BuyersRoute/BuyersRoute";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/iphone',
                element: <PrivateRoute><Iphone></Iphone></PrivateRoute>,
            },
            {
                path: '/oneplus',
                element: <PrivateRoute><Oneplus></Oneplus></PrivateRoute>,
            },
            {
                path: '/xiaomi',
                element: <PrivateRoute><Xiaomi></Xiaomi></PrivateRoute>,
            },
            {
                path: '/advertised',
                element: <Advertised></Advertised>,
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <PageNotFound></PageNotFound>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/my-orders',
                element: <BuyersRoute><MyOrders></MyOrders></BuyersRoute>
            },
            {
                path: '/dashboard/add-products',
                element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
            },
            {
                path: '/dashboard/my-products',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: '/dashboard/my-wish',
                element: <PrivateRoute><MyWishList></MyWishList></PrivateRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reported-items',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
        ]
    }
]);