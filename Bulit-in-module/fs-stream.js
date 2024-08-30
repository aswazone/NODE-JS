const fs = require("node:fs");

const readableStream = fs.readableStream("./file.txt",{//ivide file.txt read cheyummh..or oru data return aavunnund.adh nnere fun viilichodth kittumh
    encoding:"utf-8",
    // highWaterMark:2,//ivide ulla watermark value determine the length of word
});

const writeableStream = fs.writeableStream("./file2.txt");

//mukalil ninnulla data chunks lekk kerumh
readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);//chunks nnere file2.txt il write cheyummh
})