import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home";
import Iphone from "../../pages/Iphone/Iphone";
import Login from "../../pages/Login/Login";
import Oneplus from "../../pages/Oneplus/Oneplus";
import SignUp from "../../pages/SignUp/SignUp";
import Xiaomi from "../../pages/Xiaomi/Xiaomi";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
]);