const { databaseVersion } = require('../dbConnection');
const Weapon = require('../models/Weapons');

module.exports.creatWeapon=async(req,res)=>{
    try{
        if(!req.body.weapon.name)throw new Error("Weapon name is Required")
        if(!req.body.weapon.att)throw new Error("Weapon's att is Required")
        if(!req.body.weapon.Introduction)throw new Error("Weapon's Introduction is Required")
        const existingWeapon=await Weapon.findByPk(req.body.weapon.id)
        
        if(existingWeapon){
            throw new Error('The weapon aldready exists')
        }

        const weapon = await Weapon.create({
            id:req.body.weapon.id,
            Quality:req.body.weapon.quality,
            name:req.body.weapon.name,
            att:req.body.weapon.att,
            Addproperties:req.body.weapon.Addproperties,
            AddPropertiesValue: req.body.weapon.AddPropertiesValue,     
            Introduction:req.body.weapon.Introduction
        })
        if(weapon){
            res.status(201).json({weapon})
        }
    
    }catch (e){
        res.status(422).json({errors: { body: [ 'Could not create weapon ', e.message ] }})
    }     
}

module.exports.getWeaponById=async(req,res)=>{
    try{
        
        const weapon =await Weapon.findByPk(req.body.weapon.id)
        console.log(weapon)
        if(!weapon){
            throw new Error('No such weapon found')
        }
        return res.status(200).json({weapon})

    }catch(e){
        return res.status(404).json({
            errors: { body: [ e.message ] }
        })
    }
}

module.exports.updataWeaponDetails=async(req,res)=>{
    try{
        const weapon =await Weapon.findByPk(req.body.weapon.id)

        if(!weapon){
            res.status(401)
            throw new Error ('No such weapon found')
        }
        if(req.body.weapon){
            const quality=req.body.weapon.quality? req.body.weapon.quality:weapon.quality
            const name=req.body.weapon.name? req.body.weapon.name:weapon.name
            const att=req.body.weapon.att? req.body.weapon.att:weapon.att
            
            const Addproperties=req.body.weapon.Addproperties? req.body.weapon.Addproperties:weapon.Addproperties
            
            const AddPropertiesValue=req.body.weapon.AddPropertiesValue? req.body.weapon.AddPropertiesValue:weapon.AddPropertiesValue
            
            const Introduction=req.body.weapon.Introduction? req.body.weapon.Introduction:weapon.Introduction

            const updatedWeapon =await weapon.update({quality,name,att,Addproperties,AddPropertiesValue,Introduction})

            res.json(updatedWeapon)
        }else{
            res.json('No input data')
        }
    }catch(e){
        const status = res.statusCode ? res.statusCode : 500
        return res.status(status).json({
            errors: { body: [ e.message ] }
        })
    }
}



