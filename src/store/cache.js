import {makeVar} from "@apollo/client";


export const userVar = makeVar(false);
export const isAdminVar = makeVar(false);
export const cartItemsVar = makeVar([]);
export const cartBrandsVar = makeVar([]);
export const cartCategoriesVar = makeVar([]);
export const cartBasketVar = makeVar([]);
export const cartamountPurchasesVar = makeVar([]);
export const errorVar = makeVar(false);


export const SearchListVar = makeVar(null);

const registeredUser = JSON.parse (localStorage.getItem ("registeredUser"));
const pwd = localStorage.getItem ("registeredPwd");

export const authNameVar = makeVar({name: registeredUser?.user_name, pwd: pwd});

export const userIsLogin = makeVar(registeredUser? true: false);


export function BrandIsSelected(name) {
    const brands = cartBrandsVar().map(brand=> {
        if (brand.name === name) return {...brand, isSelected: !brand.isSelected}
        return brand
    })
    cartBrandsVar(brands);
}

export function TypeIsSelected(name) {
    const types = cartCategoriesVar().map(type=> {
        if (type.name === name) return {...type, isSelected: !type.isSelected}
        return type
    })
    cartCategoriesVar(types);
}


