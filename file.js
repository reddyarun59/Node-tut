const fs = require('fs');

//read a file 

fs.readFile("./blog.txt","utf-8", (err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data);
})

//write to a file

fs.writeFile("./blog.txt", " drink water", ()=>{
    console.log("finished writing")
})


// making directories

if(!fs.existsSync("./assets")){
    fs.mkdir("./assets", (err)=>{
        if(err){
            console.log(err)
        }
        console.log("folder created")
    })
}else{
    fs.rmdir("./assets", (err)=>{
        if(err){
            console.log(err)
        }
        console.log("file removed")
    })
}


// delete a file

if(fs.existsSync("./blog.txt")){
    fs.unlink("./blog.txt", (err)=>{
        if(err){
            console.log(err)
        }
        console.log("file deleted")
    })
}