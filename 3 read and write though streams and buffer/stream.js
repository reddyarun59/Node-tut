const fs= require('fs');

const readStream= fs.createReadStream("./blog1.txt", { encoding:"utf8"})
const writeStream= fs.createWriteStream("./blog2.txt")

readStream.on("data", (chunk)=>{
    console.log("--------New Chunk--------")
    console.log(chunk);
    writeStream.write("-----Chunk----------")
    writeStream.write(chunk);
})

//TROUGH PIPING

readStream.pipe(writeStream)