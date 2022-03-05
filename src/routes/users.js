const {Router} = require('express');

module.exports = controllers => {
    const userRouter = new Router();

    userRouter.get('/', controllers.users.getAllUsers);
    userRouter.post('/create', controllers.users.createUser);
    userRouter.patch('/update/:userID', controllers.users.updateUser);
    userRouter.delete('/delete/:userID', controllers.users.deleteUser);

    return userRouter;
}