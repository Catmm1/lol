const express = require('express')
const router = express.Router()
const UserController = require('../controllers/users')
const ImageController = require('../controllers/images')
const {authByToken} = require('../middleware/auth')

router.post('/users',UserController.createUser)                     //Register a new user
router.post('/users/login',UserController.loginUser)                //Login for existing user
router.get('/user',authByToken,UserController.getUserByEmail)       //Gets the currently logged-in user
router.patch('/user',authByToken,UserController.updateUserDetails)  //Updated user information for current user
router.get('/user/image',authByToken,ImageController.startServer)
router.post('/user/imageupload',authByToken,ImageController.upLoadImage)
module.exports = router