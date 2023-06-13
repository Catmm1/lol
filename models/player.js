const { DataTypes } = require('sequelize')
// 将数据库连接对象导入
const sequelize = require('../dbConnection')

// 测试代码 导入对象成功
console.log(sequelize);

// 创建模型
const player = sequelize.define('player', {
    playerid:{
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    /** 角色名 */
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    /** 最大生命值 */
    maxhp:{
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 100//设置初始值
    },
    /** 最大法力值 */
    maxmp: {
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 100//设置初始值
    },
    /** 武器id */
    Weaponsid: DataTypes.STRING,
    /** 地图位置 */
    location: DataTypes.STRING,
    /** 当前生命值 */
    nowHp:DataTypes.INTEGER,

    nowMp:DataTypes.INTEGER,
    /** 角色基础攻击力 */
    playerBaseAtt:{
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 20//设置初始值
    },
    /** 角色攻击力 */
    playerAtt:DataTypes.INTEGER,
    /** 角色基础防御力 */
    playerBaseDef:{
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 20//设置初始值
    },
    /** 角色防御力 */
    playerDef:DataTypes.INTEGER,

    UserEmail:DataTypes.STRING



})

// 导出模型
module.exports = player

