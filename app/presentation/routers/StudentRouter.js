const express = require('express')
const studentController = require('../controllers/StudentController')

const router = express.Router()

router
    .get('/', studentController.GetStudents)
    .get('/:idStudent', studentController.GetStudent)
    .post('/', studentController.CreateStudent)
    .put('/:idStudent', studentController.UpdateStudent)

module.exports = router