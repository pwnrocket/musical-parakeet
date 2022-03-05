const users = require('./users');

module.exports =  sequelize => {
    return {
        users : users(sequelize)
    }
}