import {makeAutoObservable} from 'mobx';
import {ApolloClient, InMemoryCache, useQuery} from "@apollo/client";
import {TRACKS} from "../pages/tracks";
import React from "react";

// const client = new ApolloClient({
//     uri: 'https://48p1r2roz4.sse.codesandbox.io',
//     cache: new InMemoryCache()
// });

// function F() {
//     const {loading, error, data} = useQuery(TRACKS);
//     if (loading) return 'Loading...';
//     if (error) return `Error! ${error.message}`;
//     return <div >{JSON.stringify(data)}</div>;
// }

 export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Телевизоры'},
            {id: 3, name: 'Стиралки'},
            {id: 4, name: 'Ноутбуки'},
            {id: 5, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: 'Xiaomi'},
            {id: 3, name: 'Lg'},
            {id: 4, name: 'Lenovo'},
            {id: 5, name: 'Apple'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'http://lorempixel.com/300/400/technics'},
            {id: 2, name: 'Iphone 11 pro', price: 25000, rating: 5, img: 'http://lorempixel.com/300/400/technics'},
            {id: 3, name: 'Iphone 10 pro', price: 25000, rating: 5, img: 'http://lorempixel.com/300/400/technics'},
            {id: 4, name: 'Iphone 9 pro', price: 25000, rating: 5, img: 'http://lorempixel.com/300/400/technics'},
            {id: 5, name: 'Iphone 8 pro', price: 25000, rating: 5, img: 'http://lorempixel.com/300/400/technics'},
            {id: 6, name: 'Iphone 7 pro', price: 25000, rating: 5, img: 'http://lorempixel.com/300/400/technics'}
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }
}

// export {DeviceStore, F}