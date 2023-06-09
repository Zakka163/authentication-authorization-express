const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('postgres', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  })



const tes = async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        
        } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
}
tes();

module.exports = sequelize