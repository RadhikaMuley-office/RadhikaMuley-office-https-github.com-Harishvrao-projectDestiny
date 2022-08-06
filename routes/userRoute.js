const express=require('express')
const multer=require('multer')
const {loginUser,registerUser,createUser,validateUser}=require('../controller/userController')
const storage=require('../config/multer');
const router=express.Router()


//get section
router.route('/login').get(loginUser)
router.route('/register').get(registerUser)
//post section
router.route('/login').post(validateUser)
router.route('/register').post(createUser)






module.exports=router;