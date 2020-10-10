const student = require('../models/Student')
const validationException = require('../../infraestructure/ValidationException')

const CreateStudent = (data) => {
    ValidateStudent(data)
    return new student({
        name: data.name,
        aptitudes: data.aptitudes,
        active: true
    })
}

const ValidateStudent = (data) => {
    if (!data.name) throw new validationException('The name must not be empty.')
    if (data.aptitudes.length === 0) throw new validationException("You must enter the student's aptitudes.")
    data.aptitudes.map(aptitude => {
        if (!aptitude.description) throw new validationException("The description of the aptitude must not be empty.")
    })
}

module.exports = {
    CreateStudent,
    ValidateStudent
}