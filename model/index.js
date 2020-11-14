const fs = require('fs');
const { Sequelize, DataTypes } = require('sequelize');


const sequelize = new Sequelize({
  dialect: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  database: process.env.DB_DB,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});


const db = {}

fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .map(file => require(`./${file}`))
  .map(model => {
    db[model.name] = model.define(sequelize, DataTypes, Sequelize);
    return model;
  })
  .forEach(model => {
    model.associate(sequelize.models);
  });


(async() => {
  await sequelize.sync({ alter: true });
})()


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;