const {Router} = require('express')
const {studentRouter} = require('../routes/StudentsRoutes')

const router = Router()

router.use('/student',studentRouter)//enrrutador

module.exports={router};