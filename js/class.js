"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 10000;
    }
    getTotalPrice(tax) {
        const taxAmount = (this.price * tax) / 100;
        const total = this.price + taxAmount;
        return total;
    }
    getActualMillage() {
        const realMillage = this._millage + 50000;
        return realMillage;
    }
}
const toyota = new Car("toyota", 100000);
const totalPrice = toyota.getTotalPrice(25);
