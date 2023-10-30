const http = require('node:http');
const fs = require('node:fs')
const {users,colors} = require("./data")

http.createServer((req,res)=>{
    switch(req.url){
        case "/":
        page = "./home.html";
        break;
        case "/about":
        page = "./about.html";
        break;
        case "/contact":
        page = "./contact.html";
        break;
        default:
            page = "./404.html"; 
        break;
    }
    res.setHeader("content-type", "text/html");
    fs.readFile(page,(err,data)=>{
        if(err){
            console.log(err)
        }else {
            res.write(data)
            return res.end()
        }
    })
}).listen(80)
