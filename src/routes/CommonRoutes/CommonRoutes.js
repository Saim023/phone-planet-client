import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Categories from "../../pages/Categories/Categories";
import Home from "../../pages/Home/Home";
import Iphone from "../../pages/Iphone/Iphone";
import Login from "../../pages/Login/Login";
import Oneplus from "../../pages/Oneplus/Oneplus";
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
                element: <Iphone></Iphone>
            },
            {
                path: '/oneplus',
                element: <Oneplus></Oneplus>
            },
            {
                path: '/xiaomi',
                element: <Xiaomi></Xiaomi>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);