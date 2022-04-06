const http= require('http');

const server=http.createServer((req,res)=>{
    console.log('hey')
})

server.listen(3000, ()=>{
    console.log("listening........")
})