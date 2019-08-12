const Sequelize  = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'S1',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        attendance: {
            type: Sequelize.INTEGER
        },

    },
    {
        timestamps: false
    }
)