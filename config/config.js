require('dotenv').config()

const config = {
    port : 3000,
    dbName: 'local-dev',
    dbUser: 'dev',
    dbPass: 'Admin1234',
    hostName: 'localhost',
    database: 'mssql',
    dbInstance: null,
}

module.exports = config