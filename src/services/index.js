const UserService = require('./UserService');

module.exports = models => {
    return {
        userSevice : new UserService(models)
    }
}