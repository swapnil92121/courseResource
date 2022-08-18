const express=require('express')
const { login, signup } = require('../../controller/userAuthentication/userAuthentication')
const router=express.Router()





//login
router.post('/login',login)
//signup
router.post('/signup',signup)






module.exports=router