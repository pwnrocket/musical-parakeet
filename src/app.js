const express = require('express');
const cors = require('cors');
const path = require('path');

const services = require('./services')
const controllers = require('./controllers')
const routes = require('./routes');
const db = require('./models')

const getExpressApp = async (config) => {
    const app = express()

    config.dbInstance = db.sequelize;
    const models = db.sequelize.models;

    const allServices = services(models)
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