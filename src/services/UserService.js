const bcrypt = require('bcrypt');
const saltRounds = 10;

const mapUserDate = ({
    id,
    user_name,
    email,
}) => {
    return {
        userID : id,
        userName : user_name,
        email
    }
}
class Users{
    constructor(models){
        this.models = models
    }

    async login(body){
        const {password} = body;

        const where = {
            email: body.email,
            is_deleted : 0,
        }
        const user = await this.models.User.findOne({where})
        
        const isAuth = await bcrypt.compare(password, user.password)

        if(isAuth){
            return mapUserDate(user)
        }

        return {success : false}
    }

    async register(body){
        const {password} = body;

        const passHash = await bcrypt.hash(password, saltRounds);

        const createSet = {
            user_name : body.userName,
            email: body.email,
            password: passHash,
            is_deleted : 0,  
        }

        const data =  await this.models.User.create(createSet)
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
            id: userID
        }

        const user = await this.models.User.update(updateSet, {where})

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