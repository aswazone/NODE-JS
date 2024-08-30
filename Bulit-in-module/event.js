

// // EventEmitter is a class requires from the node:events
// const EventEmitter = require("node:events");
// // emiter enna oru object Class n vendi indakki
// const emitter = new EventEmitter();

// //there will be a listener on to register the method
// emitter.on("order-pizza",()=> {//event name (order-pizza) same aayirikkyanmh
//     console.log("Order is received!!");
// })

// // track the event or emit the event
// //there will be a emit to track the event

// emitter.emit("order-pizza");//ingane ezhudhanamh...emit n sheshamhh on
// //there will be a listener on

// // with para meter
// emitter.on("order-pizza",(size,topping)=> {
//     console.log(`Order is received!! ${size} with ${topping}`);
// })

// // track the event or emit the event
// //there will be a emit to track the event
// emitter.emit("order-pizza","large","cheesy");//ingane ezhudhanamh...emit n sheshamhh on


//PIZZA SHOP____________________________________________________________

// const Pizzashop = require("./pizza-shop");

// const pizzashop = new Pizzashop();


// pizzashop.order();
// pizzashop.order();
// pizzashop.displayOrderNumber();

// const Pizzashop = require("./pizza-shop");

// const pizzashop = new Pizzashop();


// pizzashop.order();
// pizzashop.order();

//PIZZA SHOP modified---------------------------------------------------------------------------
const Pizzashop = require("./pizza-shop");
const Drinkmachine = require("./drink-machine");


const pizzashop = new Pizzashop();
const drinkMachine = new Drinkmachine();

pizzashop.on("order-pizza",(size,topping)=>{
    console.log(`Order is received!! A ${size} Pizza with ${topping}`);
    drinkMachine.serveDrink(size);
});

pizzashop.order("large","cheesy");
pizzashop.displayOrderNumber();
