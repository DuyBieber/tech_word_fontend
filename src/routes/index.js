import HomePage from "../pages/HomePage/HomePage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"
import OrderPage from "../pages/OrderPage/OrderPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage"
import ProfilePage from "../pages/Profile/ProfilePage"
import AdminPage from "../pages/AdminPage/AdminPage"
export const routes =[
    {
        path:"/",
        page:HomePage,
        isshowHeader:true

    },
    {
        path:"/order",
        page:OrderPage,
        isshowHeader:true

    },
    {
        path:"/products",
        page:ProductsPage,
        isshowHeader:true
    },
    {
        path:"/:type",
        page:TypeProductPage,
        isshowHeader:true
    },
    {
        path:"/sign-in",
        page:SignInPage,
        isshowHeader:false
    },
    {
        path:"/sign-up",
        page:SignUpPage,
        isshowHeader:false
    },
    {
        path:"/product-details",
        page:ProductDetailsPage,
        isshowHeader:true
    },
    {
        path:"/profile-user",
        page:ProfilePage,
        isshowHeader:true
    },
    {
        path: '/system/admin',
        page: AdminPage,
        isshowHeader: false,
        isPrivated: true
    },
    {
        path:".",
        page:NotFoundPage,
        isshowHeader:false
    }
]