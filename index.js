const getExpressApp = require('./src/app')
const config = require('./config/config.js')

getExpressApp(config)
.then((app) => {
        const server = app.listen(config.port, () => {
            console.log(`Server started on port ${config.port}`)
        })

        process.on('SIGTERM', () => {
            console.log('SIGTERM signal received: closing HTTP server')
            server.close(() => {
                console.log('HTTP server closed')
            })
        })

    }
)
.catch((error) => {
    config.dbInstance.close().catch(err => err)
    console.log(error)
})

