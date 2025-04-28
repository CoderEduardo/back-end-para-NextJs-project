const Sequelize = require("sequelize")
const connection = require("./connection")

const DataBase = connection.define("nextjsTeste",{
    nome:{
        type:Sequelize.STRING,
        allowNull: false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false,
    }
})

DataBase.sync({force:false})

module.exports = DataBase   