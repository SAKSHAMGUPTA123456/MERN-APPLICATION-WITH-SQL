const db=require('../sql/db')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const register=async(req,res)=>{
    try{
    const {username,phone,email,password}=req.body
    const passwords=await bcrypt.hash(password,10)
    console.log(passwords)
    const token=jwt.sign(
        {email:email},
        process.env.SECRET,{
"expiresIn":"30d"
        }
        )
const [userexist]=await db.execute('select * from testing where email=?',[email])
 if (userexist.length > 0) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }
        await db.execute('insert into testing(username,phone,email,password,token) values(?,?,?,?,?)',[username,phone,email,passwords,token])
const [rows]= await db.execute('select * from testing where username=?',[username])
console.log(rows)
res.status(200).json({mssg:"user data successfully stored in sql",details:rows})
}
catch(error){
res.status(400).json({mssg:error})
}
}
const services=async(req,res)=>{
    const services=await db.execute('select * from services')
    res.status(200).json({details:services})
}
module.exports={register,services}