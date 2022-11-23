import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Categories from "../../pages/Categories/Categories";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";



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
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
]);