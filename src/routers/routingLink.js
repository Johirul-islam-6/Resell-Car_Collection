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
import CategorieID from "../Pages/Car Categori/CategorieID";
import Pement from "../Pages/Home/PementMethod/Pement";
import AddProduct from "../Pages/Add Product/AddProduct";
import MyProduct from "../Pages/My product/MyProduct";

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
                path: '/cetegories',
                element: <CarCategori />,
                // loader: ({ params }) => fetch(`http://localhost:5000/cetegories/${params.id}`)

            },
            {
                path: '/cetegories/:id',
                element: <PrivetRoute><CategorieID /></PrivetRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/cetegories/${params.id}`)
            },
            {
                path: '/block',
                element: <Block />
            },
            {
                path: '/addProduct',
                element: <AddProduct />,
            },
            {
                path: '/myProduct',
                element: <MyProduct />
            },
            {
                path: '/pement',
                element: <Pement />
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