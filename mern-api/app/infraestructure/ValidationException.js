class ValidationException{
    constructor(message){
        this.message = message
        this.code = '01'
    }
}

module.exports = ValidationException