
// class Pizzashop {
//     constructor(){
//         this.orderNumber = 0;
//     }
//     order(){
//         this.orderNumber++;
//     }
//     displayOrderNumber(){
//         console.log(`Current order number is ${this.orderNumber}`);
//     }
// }

// module.exports = Pizzashop;

const EventEmitter = require('node:events')

class Pizzashop extends EventEmitter {
    constructor(){
        super();
        this.orderNumber = 0;
    }
    order(size,topping){
        this.orderNumber++;
        this.emit("order-pizza",size,topping)
    }
    displayOrderNumber(){
        console.log(`Current order number is ${this.orderNumber}`);
    }
}

module.exports = Pizzashop;
