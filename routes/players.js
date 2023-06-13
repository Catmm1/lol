const express = require('express')
const router = express.Router()

const {authByToken} = require('../middleware/auth')

const PlayerController = require('../controllers/player')

router.post('/create',authByToken,PlayerController.createPlayer)        
router.patch('/update',authByToken,PlayerController.updatePlayer)  
router.get('/search',authByToken,PlayerController.searchPlayer)  

module.exports = router