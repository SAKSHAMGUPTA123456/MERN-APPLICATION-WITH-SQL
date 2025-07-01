const express=require('express')
const router=express.Router()
const authtaking=require('../controller/auth-controller')
const validate=require('../validate/auth-validate')
const registerschema=require('../zodfile/registerzod')
router.post('/register',validate(registerschema),authtaking.register)
router.get('/services',authtaking.services)
module.exports=router