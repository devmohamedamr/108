const express = require("express")
const parser = require("body-parser")
const app = express()
const mysql = require("mysql")
app.get("/",(req,res)=>{
    res.send("<h1>hi express</h1>");
})
app.use(parser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(parser.urlencoded({ extended: true }));


app.post("/category",(req,res)=>{
    let connection =  mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"nodejs"
    })
    connection.query(`INSERT INTO categories (name) VALUES ('${req.body.name}') `)
    res.send("success")
})

app.get("/category",(req,res)=>{
    let connection =  mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"nodejs"
    })
    connection.query(`SELECT * FROM categories`,(error,data)=>{
        res.send(data)
    })
})

app.get("/about",(req,res)=>{
    res.send("<h1>hi about content</h1>");
})

app.listen(3000)
