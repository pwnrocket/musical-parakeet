const users = require('./users');
const {Router} = require('express');

module.exports = controllers => {
    const router = new Router();
        
    router.use('/user', users(controllers));

    return router
}