const mapUserDate = ({
    user_id,
    user_name,
    add_date,
    is_deleted,
}) => {
    return {
        userID : user_id,
        userName : user_name,
        addDate : add_date,
    }
}
class Users{
    constructor(models){
        this.models = models
    }

    async getAllUsers(){
        const where = {
            is_deleted : 0,
        }
        const data = await this.models.users.findAll({where})
        
        return data.map(mapUserDate)
    }

    async createUser(body){
        const createSet = {
            user_name : body.userName,
            is_deleted : 0,  
        }

        const data =  await this.models.users.create(createSet)
        if(data){
            return {
                success : true
            }
        }

        return {success : false}
    }

    async updateUser(userID, body){
        const {userName} = body;
        
        const updateSet = {
            user_name : userName,
        }

        const where = {
            user_id: userID
        }

        const user = await this.models.users.update(updateSet, {where})

        if(user){
            return {
                success : true
            }
        }

        return {
            success : false
        }
    }

    async deleteUser(userID){
        const where = {
            user_id : userID
        }

        const deleteSet = {
            is_deleted : 1
        }

        const user = await this.models.users.update(deleteSet, {where})

        if(user){
            return {
                success : true
            }
        }

        return {
            success : false
        }
    }
}

module.exports = Users