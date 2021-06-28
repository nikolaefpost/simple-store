import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'}
        ]
        this._brands = [
            {id: 1, name: 'Samsung'},
            {id: 2, name: '{Xiaomi}'}
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''},
            {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''},
            {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''},
            {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''},
            {id: 5, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''},
            {id: 6, name: 'Iphone 12 pro', price: 25000, rating: 5, img: ''}
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this.brands = brands
    }

    setDevices(devices){
        this.devices = devices
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

}