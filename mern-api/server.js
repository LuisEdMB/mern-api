const database = require('./app/infraestructure/Database')
const config = require('./config')
const app = require('./app/presentation/Startup')

database.connect()

app.listen(config.PORT_APP, error => {
    if (error) return console.log(error)
    console.log(`Server running on ${config.PORT_APP} port.`)
})