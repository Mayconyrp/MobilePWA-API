const Sequelize = require("sequelize")
const conexaodb = require("../database/db")

const Testemunha = conexaodb.define('Testemunha',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    depoimento:{
        type:Sequelize.TEXT,
        allowNull:false,
    }

})

Testemunha.sync()
module.exports = Testemunha