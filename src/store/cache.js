import {makeVar} from "@apollo/client";


export const cartItemsVar = makeVar([]);

let user = {isAuth: false}
export const userIsLogin = makeVar(user);
