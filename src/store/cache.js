import {makeVar, useMutation, useQuery} from "@apollo/client";
import {ADD_BRAND, GET_BRANDS, GET_CATEGORY, GET_PRODUCTS} from "../gql/query";
import React from "react";
import LoginButton from "../components/Auth0/login-button";

export const userVar = makeVar(false);
export const isAdminVar = makeVar(false);
export const authNameVar = makeVar([]);
export const authPwdVar = makeVar([]);
export const cartItemsVar = makeVar([]);
export const cartBrandsVar = makeVar([]);
export const cartCategoriesVar = makeVar([]);
export const cartBasketVar = makeVar([]);
export const cartamountPurchasesVar = makeVar([]);


export const SearchListVar = makeVar(null);

const registeredUser = JSON.parse (localStorage.getItem ("registeredUser"))
const pwd = localStorage.getItem ("registeredPwd")
console.log(pwd)
let user =registeredUser? {isAuth: true, name: registeredUser.user_name, pwd: pwd} : {isAuth: false, name: 'unregistered', pwd: ''}
export const userIsLogin = makeVar(user);


export function AddBrend(brand) {
    const [addTodo, { data }] = useMutation(ADD_BRAND);
    addTodo({ variables: { type: brand } });
    return data;
}

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


