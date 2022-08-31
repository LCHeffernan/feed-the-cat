const Sequelize = require("sequelize");
const CatModel = require("./cats");

const setupDatabase = () => {
  const connection = new Sequelize("cat_db", "user", "password", {
    host: "localhost",
    port: 3308,
    dialect: "mysql",
    logging: false,
  });
  const Cat = CatModel(connection, Sequelize);
  //calls function in cat model file which returns sequelize.define which in turn creates the table
  //passes in connection data and Sequelize object so can use methods and properties in cat model.
  connection.sync({ alter: true });
  return {
    Cat,
  };
};

module.exports = setupDatabase();
