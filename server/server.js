require('dotenv').config()
const express=require('express')
const cors=require('cors')
const app=express()
const db=require('./sql/db')
const router=require('./router/router')
const errorMiddleware=require('./error-middleware/error-middleware')
app.use(cors())
app.use(express.json())
app.use('/home',router)
app.use(errorMiddleware)
app.get('/',(req,res)=>{
res.status(200).send('welcome to admin router')
})
const port=process.env.PORT||5000
app.listen(port,()=>{
    console.log('hello server database connected  successfully')
})
