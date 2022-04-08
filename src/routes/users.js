const {Router} = require('express');

module.exports = controllers => {
    const userRouter = new Router();

    userRouter.post('/login', controllers.users.login);
    userRouter.post('/register', controllers.users.register);

    return userRouter;
}