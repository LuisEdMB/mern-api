const Execute = async (action, response) => {
    try{
        var result = await action()
        return response.status(200).send(result)
    }
    catch(exception){
        return response.status(500).send(exception)
    }
}

module.exports = {
    Execute
}