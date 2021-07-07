const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

const User = sequelize.define('User', {
    username: {type:DataTypes.STRING}, 
    email: {type: DataTypes.STRING, primaryKey: true},
    password: {type:DataTypes.STRING}
}, {
    sequelize,
    timestamps: false,
    
});

module.exports = User;