// EventEmitter is a class requires from the node:events
const EventEmitter = require("node:events");
// emiter enna oru object Class n vendi indakki
const emitter = new EventEmitter();

//there will be a listener on
emitter.on("order-pizza",()=> {//event name (order-pizza) same aayirikkyanmh
    console.log("Order is received!!");
})

// track the event or emit the event
//there will be a emit to track the event
emitter.emit("order-pizza");//ingane ezhudhanamh...emit n sheshamhh on