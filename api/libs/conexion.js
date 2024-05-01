const { Sequelize } = require('sequelize');

const {config} =require ('./../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `${config.dbCluster}://${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dataBase}`;

const sequelize = new Sequelize(URI, { 
    dialect: `${config.dbCluster}`,
    logging: true,
});

sequelize.sync();

module.exports = sequelize;