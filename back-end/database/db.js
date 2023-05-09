const { Sequelize } = require("sequelize")

const conexaodb = new Sequelize('atividade1mobile','root','maycon',{
    host:'localhost',
    dialect:'mysql',
    logging: false
})

module.exports = conexaodb