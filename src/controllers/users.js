const errorHandleMiddleware = require('./errorHandleMiddleware');

const login =  errorHandleMiddleware(req => {
    return req.allServices.userSevice.login(req.body);
})

const register = errorHandleMiddleware(req => {
    return req.allServices.userSevice.register(req.body)
}) 

module.exports = {
    login,
    register,
}