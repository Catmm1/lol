const { DataTypes } = require('sequelize')
// 将数据库连接对象导入
const sequelize = require('../dbConnection')

// 测试代码 导入对象成功
console.log(sequelize);

// 创建模型
const Weapons = sequelize.define('Weapons', {
    /** 武器id */
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    /** 武器品质 */
    Quality:{
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 5//设置初始值为5
    },
    /** 武器名 */
    name: DataTypes.STRING,
    /** 武器攻击力 */
    att: DataTypes.INTEGER,
    /** 额外属性类型 */
    Addproperties: DataTypes.STRING,
    /** 额外属性值 */
    AddPropertiesValue:DataTypes.INTEGER,
    /** 武器介绍 */
    Introduction:DataTypes.STRING
})

// 导出模型
module.exports = Weapons

