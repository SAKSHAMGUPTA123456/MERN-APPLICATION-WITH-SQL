const sql=require('mysql2')
const db=sql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password:"lolzzgaming123321@",
    database:'users'
})
module.exports=db.promise()