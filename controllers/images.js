const User = require('../models/User');//
const images=require('../models/images')
const {GenerateName} =require('../utils/getImageDate')
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const server = express();


module.exports.upLoadImage = async (req, res) => {

    try {
        let picname= await GenerateName(String(req.body.user.path));
        // console.log(String(req.body.user.path))
        // console.log(picname)
        const user = await User.findByPk(req.user.email)
        let Image =await images.findByPk(picname)
        while(Image){
            picname= await GenerateName(String(req.body.user.path));
            Image =await images.findByPk(picname)
        }//

        const fileData = fs.readFileSync(req.body.user.path);
        // console.log(req.body.user.path)
        const folderPath = path.join(__dirname, '..', 'resource', 'images');
        

        if (!fs.existsSync(folderPath)) {
            // console.log( "   "+folderPath)
            throw Error("no such file")
        }
        if(!Image){
            const image = await images.create({
                id: req.body.user.id,
                name: picname,
                path: folderPath+picname
            })//保存到数据库中

            fs.writeFileSync(path.join(folderPath, picname), fileData);//将二进制图片写入指定的服务器文件夹
        }
        const image=req.body.user.name
        const updatedUser = await user.update({image})
        
        return res.status(200).json("");
    } catch (e) {
        return res.status(404).json({
            errors: { body: [e.message] }
        });
    }

}



module.exports.startServer = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.email);
        console.log(user);
        if (!user) {
            throw new Error('No such user found');
        }
        else {
            // 以服务器目录作为相对路径查找图片
            const imagePath = path.join(__dirname, '..', 'resource', 'images', user.image);
            console.log(imagePath);
            // 发送图片文件到客户端
            server.get('/image', (req, res) => {
                res.sendFile(imagePath);
            });
            server.listen(8080, '127.0.0.1', () => {
                console.log(`图片已加载至:http://127.0.0.1:8080/image`);
            });
            return res.status(200).json({ imagePath });
        }
    }
    catch (e) {
        return res.status(404).json({
            errors: { body: [e.message] }
        });
    }
};



