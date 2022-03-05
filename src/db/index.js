const Sequelize = require('sequelize')

const databaseInit = async (config) => {
    const {dbName, dbUser, dbPass, hostName, database} = config;
    const sequelize = new Sequelize(dbName, dbUser, dbPass, {
        host: hostName,
        dialect: database,
    })

    console.info(`Database connection init`)
    try{
    await sequelize.authenticate()
    console.info(`Database connection established`)
    }
    catch(err){
        console.log(err)
    }
    const tables = require(`./models.js`)
    console.log(tables)
    config.dbInstance = sequelize;
    return tables(sequelize)

}

module.exports = databaseInit;  