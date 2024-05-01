require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    apiPort: process.env.API_PORT || 3002,
    corsIp: process.env.CORS_IP,
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.PASS,
    dataBase: process.env.DB,
    dbPort: process.env.DB_PORT,
    dbCluster: process.env.CLUSTER
}

module.exports = {config};