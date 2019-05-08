const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        // 字符集
        charset: "utf8mb4",
        supportBigNumbers: true,
        bigNumberStrings: true
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00' //东八时区
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = {
    sequelize
}
