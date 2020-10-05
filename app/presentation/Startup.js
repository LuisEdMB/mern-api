const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const studentRouter = require('./routers/StudentRouter')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/students', studentRouter)

module.exports = app