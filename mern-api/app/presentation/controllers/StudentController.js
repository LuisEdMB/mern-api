const base = require('./BaseController')
const studentService = require('../../application/StudentApplicationService')

const GetStudents = (request, response) => base.Execute(() => studentService.GetStudents(), response)
const GetStudent = (request, response) => base.Execute(() => studentService.GetStudent(request.params.idStudent), response)
const CreateStudent = (request, response) => base.Execute(() => studentService.CreateStudent(request), response)
const UpdateStudent = (request, response) => base.Execute(() => studentService.UpdateStudent(request), response)

module.exports = {
    GetStudents,
    GetStudent,
    CreateStudent,
    UpdateStudent
}