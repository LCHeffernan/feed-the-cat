const Sequelize = require("sequelize");
const CatModel = require("./cats");

const setupDatabase = () => {
  const connection = new Sequelize("northwind", "root", "supersecret", {
    host: "localhost",
    port: 3308,
    dialect: "mysql",
    logging: false,
  });  
  const Cat = CatModel(connection, Sequelize);
  connection.sync({ alter: true });
  return {
    Cat,
  }
};

module.exports = setupDatabase();
