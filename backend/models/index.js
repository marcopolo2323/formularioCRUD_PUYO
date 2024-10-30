const sequelize = require('../db')

//Importar los modelos 
const Student = require('./Students')
const Course = require('./Course')

const db = {
    sequelize,
    Student,
    Course
    //despues se agrega mas modelos que tengas
}

module.exports = db