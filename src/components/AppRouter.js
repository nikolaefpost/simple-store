
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {useReactiveVar} from "@apollo/client";
import { userIsLogin} from "../store/cache";

const AppRouter = () => {

    const user = useReactiveVar(userIsLogin)
    return (
        <Switch>
            {user.isAuth && authRoutes.map(({path, Component})=>
            <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} component={Component} exact />
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};


export default AppRouter;