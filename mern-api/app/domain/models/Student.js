const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    aptitudes: [
        {
            description:{
                type: String,
                required: true
            }
        }
    ],
    active: {
        type: Boolean,
        required: true
    }
}, { collection: 'student' })

module.exports = mongoose.model('student', studentSchema)