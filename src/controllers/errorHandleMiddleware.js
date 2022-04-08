const errorHandleMiddleware = controller => async(req, res) => {
    try {
        const response = await controller(req)
        return res.json(response)
    }
    catch(err){
        res.error = err;
        const errorTrace = {
            message: err.message,
            stack: err.stack
        }
        res.json(errorTrace)
    }
}

module.exports = errorHandleMiddleware;