

class Pizzashop {
    constructor(){
        this.orderNumber = 0;
    }
    order(){
        this.orderNumber++;
    }
    displayOrderNumber(){
        console.log(`Current order number is ${this.orderNumber}`);
    }
}

module.exports = Pizzashop;