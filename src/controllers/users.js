//Todo Add a middleware to catch error and exceptions 
const getAllUsers = async(req, res) => {
    const users =  await req.allServices.userSevice.getAllUsers();
    return res.json(users)
}

const createUser = async(req, res) => {
    const user = await req.allServices.userSevice.createUser(req.body);   
    return res.json(user)
}

const updateUser = async(req, res) => {
    const user = await req.allServices.userSevice.updateUser(req.params.userID, req.body);
    return res.json(user)
}

const deleteUser = async(req, res) => {
    const user = await req.allServices.userSevice.deleteUser(req.params.userID);
    return res.json(user)
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
}