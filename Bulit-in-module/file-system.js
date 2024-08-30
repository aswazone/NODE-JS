
// reading file Synchoronously vs Asynchoronously

const fs = require("fs"); //Sync

console.log("first");


const fileContent = fs.readFileSync("./file.txt","utf-8");
console.log(fileContent);

console.log("second");

fs.readFile("./file.txt","utf-8",(error,data)=>{ //Async//ivide data and eror venmh...karanmh filereading aan
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

console.log("third");
// out put
// first
// Hellooooooooo..Aswin!!
// second
// third
// Hellooooooooo..Aswin!!


// fs.writeFilesync and fs.writeFile randum..puthiya file indaki write cheyanulla methode aan 
fs.writeFileSync("./greet.txt","Eda Mwoneee...!!!");//ith Synchoronously
//ivide flag use cheyidhadh...mukalilulladhhum add aayi print cheyyan venditta or append cheyyan...enn parnja overide aavarudh munne ulladhaumh...puthiyadhumh
fs.writeFile("./greet.txt"," Eda Mwoneee...!!..Sredhikkyande Ambhanee..",{flag: "a"},(error)=>{//ith Asynchoronously,ivide data venmh pakshe..ippo just console ittadhan
    (error) ? console.log(error) : console.log("file is written..");//ith ternary aakki nnollu..
});