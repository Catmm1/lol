const { databaseVersion } = require('../dbConnection');
const player = require('../models/player');

const User = require('../models/User');
const Weapon = require('../models/Weapons');

module.exports.createPlayer=async(req,res)=>{
    try{
        if(!req.body.player.name) throw new Error("playername is required");
        const user = await User.findByPk(req.user.email);
        const existingName = await player.findByPk(req.body.player.name)
        if(existingName){
            throw new Error('the name aldready exists ') ;
        }
        const players =await player.create({
            playerid:req.body.player.playerid,
            name:req.body.player.name,
            location:req.body.player.location,
            UserEmail: user.email

        })

        if(players){
            players.dataValues.Hp=100,
            players.dataValues.Mp=100,
            players.dataValues.att=20,
            players.dataValues.def=20,
            res.status(201).json({players})
        }


    }catch (e){
        res.status(422).json({errors: { body: [ 'Could not create player ', e.message ] }})
    }   
}

module.exports.searchPlayer=async(req,res)=>{
    try{
        
        const players =await player.findByPk(req.body.player.playerid)
        console.log(players)
        if(!players){
            throw new Error('No such players found')
        }
        return res.status(200).json({players})

    }catch(e){
        return res.status(404).json({
            errors: { body: [ e.message ] }
        })
    }
}


module.exports.updatePlayer=async(req,res)=>{
    try{
        let weaponatt=0
        let Weaponsid=null
        let players=await player.findByPk(req.body.player.playerid)
        if(!players){
            res.status(401)
            throw new Error ('No such player found')
        }
        if(req.body.player.Weaponsid){
            const weapons =await Weapon.findByPk(req.body.player.Weaponsid);
            console.log(weapons.att)
            weaponatt=weapons.att
            console.log(weapons.att)
            Weaponsid=req.body.player.Weaponsid
        }
        const maxHp=req.body.player.maxHp? req.body.player.maxHp:players.maxhp
        const maxMp=req.body.player.maxMp? req.body.player.maxMp:players.maxmp
        const name=req.body.player.name? req.body.player.name:players.name
        const location=req.body.player.location? req.body.player.location:players.location
        const nowHp=req.body.player.nowHp? req.body.player.nowHp:players.nowHp
        const nowMp=req.body.player.nowMp? req.body.player.nowMp:players.nowMp
        const playerAtt=weaponatt+players.playerBaseAtt

        // console.log(att)

        const updatePlayer =await players.update({maxHp,maxMp,name,location,nowHp,nowMp,playerAtt,Weaponsid}) 
        res.json(updatePlayer)

    }catch (e) {
		const code = res.statusCode ? res.statusCode : 422;
		return res.status(code).json({
			errors: { body: ['Could not update Player', e.message] },
		});
	}

}

