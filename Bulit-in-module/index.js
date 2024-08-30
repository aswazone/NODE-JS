const buffer = new Buffer.from("Aswin");
buffer.write("codeevolution");

console.log(buffer.toString());//string repressention of data given
console.log(buffer);//will get hex decimal value
console.log(buffer.toJSON());//object of data
