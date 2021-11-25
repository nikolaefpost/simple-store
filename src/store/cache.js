import {makeVar} from "@apollo/client";


export const userVar = makeVar(false);
export const isAdminVar = makeVar(false);
// export const authNameVar = makeVar({});
// export const authPwdVar = makeVar([]);
export const cartItemsVar = makeVar([]);
export const cartBrandsVar = makeVar([]);
export const cartCategoriesVar = makeVar([]);
export const cartBasketVar = makeVar([]);
export const cartamountPurchasesVar = makeVar([]);


export const SearchListVar = makeVar(null);

const registeredUser = JSON.parse (localStorage.getItem ("registeredUser"));
const pwd = localStorage.getItem ("registeredPwd");

export const authNameVar = makeVar({name: registeredUser?.user_name, pwd: pwd});

let user =registeredUser? {isAuth: true, name: registeredUser.user_name, pwd: pwd} : {isAuth: false, name: 'unregistered', pwd: ''}
export const userIsLogin = makeVar(user);


export function BrandIsSelected(item) {
    const brands = cartBrandsVar().filter(brand=>brand.name !==item.name)
    brands.unshift(item);
    cartBrandsVar(brands);
}

export function TypeIsSelected(item) {
    const brands = cartCategoriesVar().filter(type=>type.name !==item.name)
    brands.unshift(item);
    cartCategoriesVar(brands);
}


