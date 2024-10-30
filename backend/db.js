const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/example1',{logging:false})

// async function testConnection() {
//     try {
//       await db.authenticate();  // Autentica la conexión
//       console.log('Conexión exitosa con la base de datos');
//     } catch (error) {
//       console.error('Error conectándose a la base de datos:', error);
//     }
//   } 

// testConnection()

module.exports = sequelize