const http = require("http");
const sever = http.createServer((req,res)=>{
    console.log(req.method);
    if(req.method == "POST"){
        let bigData = "";
        req.on("data",(chunk) => {
            console.log(chunk.toString());
            bigData += chunk;
        });

        req.on("end",()=>{
            console.log(bigData.toString());
        })
    }else if(req.method == "GET"){
        res.end("hello world!");
    }
})

sever.listen(3000,()=>{
    console.log("server is ready on port 3000")
})