const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./db')
// app 
const app = express();
const APIPATH = '/api/v1/'
app.use(bodyParser.json({ type: 'application/json' }))

app.get(`${APIPATH}category`,(req,res)=>{
    connection.query('select * from categories',(error,data)=>{
        if(!error){
            res.send(data);
        }else {
            console.log(error)
        }
    })
})


app.post(`${APIPATH}category`,(req,res)=>{
    connection.query(`insert into categories (name) values ('${req.body.name}')`,(error,data)=>{
        if(!error){
            res.send({'msg':'success'})
        }else {
            console.log(error)
        }
    })
})







app.listen(8000)