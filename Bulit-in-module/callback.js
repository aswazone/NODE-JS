// function higherOrderFuncton(callback){//HOF
    //     const name = "Aswin";
    //     callback(name);
    // }
    // higherOrderFuncton(theGreeting);//just calling HOF with callback

// callback methode
function theGreeting(name){//callback fn
    console.log(`Hello ${name}!!!`);
}
function greetingAswin(greetingfn){//HOF
    const name = "Aswin";
    theGreeting(name);
}
greetingAswin(theGreeting);//just calling HOF with callback
// 