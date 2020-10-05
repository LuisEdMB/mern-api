const student = require('../domain/models/Student')

const GetStudents = async () => {
    var result = await student.find({}).then(students => students).catch(error => { throw error })
    return result
}

const GetStudent = async (idStudent) => {
    var result = await student.findOne({ _id: idStudent }).then(student => student).catch(error => { throw error })
    return result
}

const CreateStudent = async (request) => {
    var result = await new Student(request.body).save().then(student => student).catch(error => { throw error })
    return result
}

const UpdateStudent = async (request) => {
    await student.updateOne({ _id: request.params.idStudent }, request.body).catch(error => { throw error })
    var result = await student.findOne({ _id: request.params.idStudent }).then(student => student).catch(error => { throw error })
    return result
}

module.exports = {
    GetStudents,
    GetStudent,
    CreateStudent,
    UpdateStudent
}