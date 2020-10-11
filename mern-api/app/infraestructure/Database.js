const mongoose = require('mongoose')
const config = require('../../config')

const connectionString = `mongodb://${config.DATABASE_SERVER}:${config.DATABASE_PORT}/${config.DATABASE_RESOURCE}`

module.exports = {
    connection: null,
    connect: () => {
        if (this.connection) return this.connection
        return mongoose.connect(connectionString).then(connection => {
            this.connection = connection
            console.log("Connection to MongoDB database.")
        }).catch(error => console.log(error))
    }
}