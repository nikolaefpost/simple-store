import {makeVar, useMutation, useQuery, useReactiveVar} from "@apollo/client";
import {ADD_BRAND, GET_BRANDS, GET_CATEGORY, GET_PRODUCTS, GET_USER} from "../gql/query";
import React from "react";

export const isAdminVar = makeVar(false);
export const authNameVar = makeVar([]);
export const cartItemsVar = makeVar([]);
export const cartBrandsVar = makeVar([]);
export const cartCategoriesVar = makeVar([]);
export const cartBasketVar = makeVar([]);
export const cartamountPurchasesVar = makeVar([]);

const registeredUser = JSON.parse (localStorage.getItem ("registeredUser"))
console.log(registeredUser)
let user =registeredUser? {isAuth: true, name: registeredUser.user_name} : {isAuth: false, name: ''}
export const userIsLogin = makeVar(user);

export function GetUser(user_name) {
    const { loading, error, data } = useQuery(GET_USER, {
        variables: { user_name }});
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    console.log(data)
    authNameVar(data)
}

export function GetProducts() {
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartItemsVar(data.queryProduct)
}

export function GetBrands() {
    const { loading, error, data } = useQuery(GET_BRANDS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartBrandsVar(data.queryBrand)
}

export function GetCategory() {
    const { loading, error, data } = useQuery(GET_CATEGORY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    cartCategoriesVar(data.queryCategory)
}

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

// export function AddBrend(brand) {
//     const [addTodo, { data }] = useMutation(ADD_BRAND);
//     addTodo({ variables: { type: brand } });
//     return data;
// }