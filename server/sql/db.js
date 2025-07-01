const sql=require('mysql2')
const db=sql.createConnection({
    host:'localhost',
    user:'root',
    port:process.env.PORT,
    password:process.env.PASSWORD,
    database:'users'
})
module.exports=db.promise()