const student = require('../domain/models/Student')
const validationException = require('../infraestructure/ValidationException')
const studentDomainService = require('../domain/services/StudentDomainService')
const StudentDomainService = require('../domain/services/StudentDomainService')
const { request } = require('express')

const GetStudents = async () => {
    var result = await student.find({}).then(students => students).catch(error => { throw error })
    return result
}

const GetStudent = async (idStudent) => {
    var result = await student.findOne({ _id: idStudent }).then(student => student).catch(error => { throw error })
    if (!result) throw new validationException('Student not found.')
    return result
}

const CreateStudent = async (request) => {
    var newStudent = studentDomainService.CreateStudent(request.body);
    var result = await newStudent.save().then(student => student).catch(error => { throw error })
    return result
}

const UpdateStudent = async (request) => {
    var studentToModify = await student.findOne({ _id: request.params.idStudent }).then(student => student).catch(error => { throw error })
    if (!studentToModify) throw new validationException('Student not found.')
    if (request.body.delete)
        await DeleteStudent(studentToModify, request);
    else
        await ModifyStudent(studentToModify, request);
    return await student.findOne({ _id: request.params.idStudent }).then(student => student).catch(error => { throw error })
}

const DeleteStudent = async (studentToModify, request) => {
    request.body.active = false
    await studentToModify.updateOne(request.body).catch(error => { throw error })
}

const ModifyStudent = async (studentToModify, request) => {
    StudentDomainService.ValidateStudent(request.body);
    await studentToModify.updateOne(request.body).catch(error => { throw error })
}

module.exports = {
    GetStudents,
    GetStudent,
    CreateStudent,
    UpdateStudent
}