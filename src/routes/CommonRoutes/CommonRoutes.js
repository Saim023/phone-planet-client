import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Categories from "../../pages/Categories/Categories";
import Home from "../../pages/Home/Home";
import Iphone from "../../pages/Iphone/Iphone";
import Login from "../../pages/Login/Login";
import Oneplus from "../../pages/Oneplus/Oneplus";
import SignUp from "../../pages/SignUp/SignUp";
import Xiaomi from "../../pages/Xiaomi/Xiaomi";



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
                element: <Iphone></Iphone>,
                // loader: () => fetch('http://localhost:5000/iphone')
            },
            {
                path: '/oneplus',
                element: <Oneplus></Oneplus>,
                loader: () => fetch('http://localhost:5000/oneplus')
            },
            {
                path: '/xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('http://localhost:5000/xiaomi')
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