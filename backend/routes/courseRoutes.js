const {Router,response} = require('express')
const {createCoursesController,getAllCoursesController,updateCourseByIdController,deleteCourseByIdController} = require('../controllers/courseControllers')
const courseRouter = Router()

//Create new course
courseRouter.post("/",async(req,res)=>{
    const course = req.body
    try {
        const newCourse = await createCoursesController(course)
    } catch (error) {
        
    }
})