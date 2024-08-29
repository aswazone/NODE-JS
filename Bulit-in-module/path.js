console.log("its PATH..");
// const path = require("node:path");//node protocol is optional
const path = require("path");

// console.log(__filename);//file name dir
// console.log(__dirname);//dir mathramh

// console.log(path.basename(__filename));//end file name
// console.log(path.basename(__dirname));//end dir name

// console.log(path.extname(__filename));//file extension
// console.log(path.extname(__dirname));//no extension

// console.log(path.parse(__filename));//
// console.log(path.isAbsolute(__filename));//values return if the path is vaild or not..true or false
// console.log(path.isAbsolute("./data.json"));//false

// console.log(path.join("folder1","folder2","folder3"));//output=> folder1/folder2/folder3
// console.log(path.join("/folder1","/folder2","/folder3"));//output=> folder1/folder2/folder3
// console.log(path.join("/folder1","//folder2","/folder3"));//output=> folder1/folder2/folder3
// console.log(path.join("/folder1","//folder2","./folder3"));//output=> folder1/folder2/folder3
// console.log(path.join("/folder1","//folder2","../folder3"));//output=> folder1/folder2/folder3
// console.log(path.join(__dirname,"./data.json"));//we get full path ;

// console.log(path.resolve("folder1","folder2","folder3")); //RESOLVE
// console.log(path.resolve("folder1","folder2","folder3"));
// console.log(path.resolve("/folder1","/folder2","/folder3"));
// console.log(path.resolve("/folder1","//folder2","/folder3"));
// console.log(path.resolve("/folder1","//folder2","./folder3"));
// console.log(path.resolve("/folder1","//folder2","../folder3"));
// console.log(path.resolve(__dirname,"./data.json"));//we get full path;


