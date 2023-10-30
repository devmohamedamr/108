const mysql = require("mysql")

const conntection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodejs"
})


conntection.connect((error)=>{
    console.log(error)
    let sql = "SELECT * from `categories`"
    conntection.query(sql,(error,success)=>{
        if(error){
            console.log(error)
        }else{
            console.log(success)
        }
    })
})