import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../features/home/HomePage";
import Catalog from "../features/catalog/Catalog";
import ContactPage from "../features/contact/ContactPage";
import ProductDetails from "../features/catalog/ProductDetails";
import NotFound from "../error/NotFoundError";
import ServerError from "../error/ServerError";
import BasketPage from "../features/basket/BasketPage";
import SignInPage from "../features/account/SignInPage";
import RegisterPage from "../features/account/RegisterPage";
import RequireAuth from "./RequireAuth";
import CheckoutPage from "../features/checkout/CheckoutPage";
import Order from "../features/orders/Order";
import AdminUserLoginPage from "../features/account/AdminUserLogInPage";
import AdminSignInPage from "../features/account/AdminSigninPage";
import AdminDashboard from "../features/catalog/AdminDashboard";


export const router= createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children:[

            {
                element: <RequireAuth/>, children:[
                    {path:'checkout', element:<CheckoutPage/>},
                    {path:'orders', element:<Order/>},
                ]
            },
            {path:'',element: <HomePage/>},
            {path: 'store',element: <Catalog/>},
            {path: 'store/:id',element:<ProductDetails/>},
            {path: 'contact',element: <ContactPage/>},
            {path: 'basket',element: <BasketPage/>},
            {path: 'user-login',element: <SignInPage/>},
            {path: 'admin-login',element: <AdminSignInPage/>},
            {path: 'admin-dashboard',element: <AdminDashboard/>},


            {path: 'login',element: <AdminUserLoginPage/>},
            {path: 'register',element: <RegisterPage/>},



            {path:'not-found', element:<NotFound/>},
            {path:'server-error', element:<ServerError/>},
            {path:'*', element:<Navigate replace to='/not-found'/>}
        ]
        
    }
])