const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt",{//ivide file.txt read cheyummh..or oru data return aavunnund.adh nnere fun viilichodth kittumh
    encoding:"utf-8",
    // highWaterMark:2,//ivide ulla watermark value determine the length of word
});

const writeableStream = fs.createWriteStream("./file2.txt");

//mukalil ninnulla functionte data chunks lekk kerumh
// readableStream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeableStream.write(chunk);//chunks nnere file2.txt il write cheyummh
// })

// mukalilullathinu pagarmh easy... PIPE concept use cheyyamh..-------------------------------------------------------------------

readableStream.pipe(writeableStream);//tank to kitchen sink...concept....pipe data transfer cheyumh

//========================================================================================================================
// ithoru zipp file nte module aan..
const zlib = require("node:zlib");

const gzip = zlib.createGzip();//zip imdakkunna funtion activate aaki
//this is also a pipe chaning methode
readableStream.pipe(gzip).pipe(fs.WriteStream(".file2.txt.gz"));//ith puthiya oru zip unadkki tharumh...eith readed data
