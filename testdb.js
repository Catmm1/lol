
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql2','root','123456',{
  dialect: 'mysql',
  host:'localhost',
  port: 3307,
  logging: false
}); 

const User = sequelize.define('Users', {
  username: DataTypes.STRING,
  email: DataTypes.STRING,
});

const jane =  User.create({
    username: 'janedoe',
    email: 'a@a.com',
  }).catch(err=>console.log(err));
  
 const users =  User.findAll().then(data => console.log(data));

