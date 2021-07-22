import Admin from "./pages/admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Registration from "./pages/Registration";
import DevicePage from "./pages/DevicePage";
import Profile from "./pages/Profile";

export  const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }

]

export  const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Registration
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]
