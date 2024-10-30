const Student = require('../models/Students')

const createStudentController = async({id,firstName,lastName}) => {
    try {
        const newStudent = await Student.create({id,firstName,lastName})
        return newStudent
    } catch (error) {
        throw new Error(error.message)
    }
}
//get all studends

const getAllStudentsController = async() => {
    try {
        const studends = await Student.findAll()
        return studends
    } catch (error) {
        throw new Error(error.message)
    }

}

const updateStudentByIdController = async (id,studentDate)=>{
    try {
        const updatedStudent = await Student.findByPk(id)
        if(!updatedStudent){
            return null
        }
        await updatedStudent.update(studentDate)
        return updatedStudent
    } catch (error) {
        throw new Error(error.message)
    }
}

const deleteStudentByIdController = async(id)=>{
    try {
        const student = await Student.findByPk(id)
        if(!student){
            return null
        }
        await student.destroy()
        return student
    } catch (error) {
        throw new Error(error.message)
    }
}
module.exports = {
    createStudentController,
    getAllStudentsController,
    updateStudentByIdController,
    deleteStudentByIdController
}