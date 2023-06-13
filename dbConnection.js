const {Sequelize} = require('sequelize')

//LOCAL CONNECTION
 const sequelize = new Sequelize('mysql2','root','123456',{
    dialect: 'mysql',
    host:'localhost',
    port: 3307,
    logging: false
}); 


//AMAZON RDS CONNECTION
/* const sequelize = new Sequelize('conduit1',process.env.USER_NAME,process.env.PASSWORD,{
    dialect: 'mysql',
    host:process.env.DB_HOST,
    logging: false,
    port: 3306
});
 */

// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'app.db'
//   });

// const sequelize = new Sequelize('d6rk5ijgmvcf6q',process.env.USER_NAME,process.env.PASSWORD,{
//     dialect: 'postgres',
//     host: process.env.DB_HOST,
//     logging: false,
//     port: 5432,
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false // <<<<<<< YOU NEED THIS
//         }
//     }
// });

const checkConnection =async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

checkConnection()

module.exports = sequelize