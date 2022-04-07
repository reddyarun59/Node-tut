const http= require('http');

const server=http.createServer((req,res)=>{
    console.log(req.url, req.method)

    //res.write(200, {"Content-Type": "application/json"})
    res.setHeader("Content-Type", "text/plain")
    res.write("hello-ninjas")
    res.end()

})

server.listen(3000, ()=>{
    console.log("listening........")
})