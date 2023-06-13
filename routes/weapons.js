const express = require('express')
const router = express.Router()
const WeaponController = require('../controllers/Weapons')

router.post('/create',WeaponController.creatWeapon)
router.get('/search',WeaponController.getWeaponById)
router.patch('/update',WeaponController.updataWeaponDetails)

module.exports=router
