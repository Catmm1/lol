const { DataTypes } = require('sequelize')
// 将数据库连接对象导入
const sequelize = require('../dbConnection')

// 测试代码 导入对象成功
console.log(sequelize);

// 创建模型
const Images = sequelize.define('images', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: DataTypes.STRING
})

// 导出模型
module.exports = Images

