import Admin from "./pages/admin";
import { ADMIN_ROUTE, AUTH_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, PERSONAL_ROUTE, PROFILE_ROUTE,
    REGISTRATION_ROUTE, REVIEW_ROUTE, SEARCH_ROUTE, SHOP_ROUTE, TODO_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Registration from "./pages/Registration";
import DevicePage from "./pages/DevicePage";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import PersonalArea from "./pages/PersonalArea";
import TodoList from "./pages/TodoList";
import Review from "./pages/Review";
import SearchPage from "./pages/SearchPage";

export  const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: TODO_ROUTE,
        Component: TodoList
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
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: PERSONAL_ROUTE,
        Component: PersonalArea
    },
    {
        path: REVIEW_ROUTE + '/:id/:name',
        Component: Review
    },
    {
        path: SEARCH_ROUTE,
        Component: SearchPage
    }
]
