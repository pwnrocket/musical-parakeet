const express = require('express');
const cors = require('cors');
const path = require('path');

const databaseInit = require('./db');
const services = require('./services')
const controllers = require('./controllers')
const routes = require('./routes');

const getExpressApp = async (config) => {
    const app = express()

    const tables = await databaseInit(config);
    const allServices = services(tables)
    const allRoutes = routes(controllers)

    app.use(cors())
   
    app.use(express.json())
    app.use(express.urlencoded(({ extended: true })))
    app.use(express.static(path.resolve('fe-app/build')));

    app.use((req, res, next) => {
        req.allServices = allServices

        next()
    })

    app.use('/', allRoutes)

    return app
}

module.exports = getExpressApp