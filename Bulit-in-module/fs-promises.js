
// Best 2nd recommended way..
// const fs = require("node:fs/promises");//by promise object

// fs.readFile("file.txt","utf-8")
//     .then((data) => {console.log(data)})//if they were resolve then we get..
//     .catch((error) => {console.log(error)});//if they were rejected then we get..

//async await --is a wrapper for promises...
// THIS IS THE BEST 1st recommended METHODE.......

const fs = require("node:fs/promises");//by promise object
async function readFile() {
    try {
        const data = await fs.readFile("file.txt","utf-8");
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
readFile();