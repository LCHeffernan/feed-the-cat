module.exports = (sequelize, DataTypes) => {
    //sequelize is the data to create the connection to the database
    const schema = {
        name: DataTypes.STRING,
        breed: DataTypes.STRING,
        markings: DataTypes.STRING,
        lastFed: DataTypes.DATE,
    }
    return sequelize.define("Cat", schema);
    //returns newly defined model in this case named Cat
}