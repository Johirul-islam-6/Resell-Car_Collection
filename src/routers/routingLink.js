import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import CarCategori from "../Pages/Car Categori/CarCategori";
import Registrar from "../Login_Registration/Registrar";
import Login from "../Login_Registration/Login";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Block from "../Pages/Block/Block";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cetogoris',
                element: <CarCategori />


            },
            {
                path: '/block',
                element: <Block />


            },
            {
                path: '/registrar',
                element: <Registrar></Registrar>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;