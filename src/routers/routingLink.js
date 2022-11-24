import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import PrivetRoute from "../PrivetRoutes/PrivetRoute";
import CarCategori from "../Pages/Car Categori/CarCategori";
import Registrar from "../Login_Registration/Registrar";
import Login from "../Login_Registration/Login";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Block from "../Pages/Block/Block";
import DashBordLayOut from "../Main/DashBordLayOut";
import MyAppointment from "../Pages/Dash-Bord/MyAppointment";
import AllBookinPresent from "../Pages/Dash-Bord/AllBookinPresent";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
    },
    {
        path: '/dasbord',
        element: (<PrivetRoute><DashBordLayOut></DashBordLayOut></PrivetRoute>),
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dasbord',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dasbord/all-booking',
                element: <AllBookinPresent></AllBookinPresent>
            },
        ]
    }

])

export default router;