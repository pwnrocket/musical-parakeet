const Sequelize = require('sequelize');

module.exports = sequelizeIstance => {
    const options = {
        createdAt: 'add_date',
        updatedAt: 'add_date',
        tableName: 'users'
    }

    const definition = {
        ['user_id']: {
            allowNull : false,
            type: Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            default : Sequelize.UUIDV4,
        },
        ['user_name']: {
            type: Sequelize.STRING(),
        },
        ['add_date']: {
            type: Sequelize.DATEONLY
        },
        ['is_deleted']: {
            type: Sequelize.BOOLEAN 
        },
        ['date_deleted']: {
            type: Sequelize.DATEONLY,
        }
    }

    return sequelizeIstance.define('users', definition, options);
}