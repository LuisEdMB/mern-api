const validationException = require('../../infraestructure/ValidationException')

const Execute = async (action, response) => {
    try{
        var result = await action()
        return response.status(200).send(result)
    }
    catch(exception){
        if (exception instanceof validationException)
            return response.status(400).send(exception)
        return response.status(500).send({
            code: '02',
            message: exception.toString(),
            detail: exception.reason.toString(),
            stack: exception.stack.toString()
        })
    }
}

module.exports = {
    Execute
}