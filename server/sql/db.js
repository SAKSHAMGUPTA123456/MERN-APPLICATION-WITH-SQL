const sql=require('mysql2')
const db=sql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    port:process.env.PORT,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
})
module.exports=db.promise()