const {Router, response} = require('express')
const {createStudentController,getAllStudentsController,updateStudentByIdController,deleteStudentByIdController} = require('../controllers/studentControllers')
const studentRouter = Router()

//Create new student
studentRouter.post("/",async(req,res)=>{
    const {id,firstName,lastName} = req.body
    try {
        const newStudent = await createStudentController({id,firstName,lastName})
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//Get all students 
studentRouter.get("/",async(req,res)=>{
    try {   
        const students = await getAllStudentsController()
        res.status(200).json(students)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
//update student by id  
studentRouter.put("/:id",async(req,res)=>{
    const {id} = req.params
    // const {firstName,lastName} = req.body
    const studendDate = req.body
    try {
        const updateStudent = await updateStudentByIdController(id,studendDate)
        if(!updateStudent){
            return res.status(404).json({error:"Student not found"})
        }
        res.status(200).json(updateStudent)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
//delete student by id
studentRouter.delete("/:id", async(req,res)=>{
    const {id} = req.params
    try {
        const deletedStudent = await deleteStudentByIdController(id)
        if(!deletedStudent){
            return res.status(404).json({error:"Student not found"})
        }
        res.status(200).json({message:"Student deleted Successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

module.exports={studentRouter}