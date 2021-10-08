const {Model, DataTypes} = require('sequelize');
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');

//User Model
class User extends Model {
  checkPassword(pass) {
    return bcrypt.compareSync(pass, this.password)
  }
};

User.init(
  {
    //Id column of user table
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    //Define username
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //Email table definition
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    //password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    //access requirement (to be deleveloped - placeholder)
    access_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    hooks: {
      //hash password on bulk create user data
      async beforeBulkCreate(bulkUserData) {
        return Promise.all(bulkUserData.map(async (userData) => {
          userData.password = await bcrypt.hash(userData.password, 10);
        }))
      },
      //hash password when new user is created
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      //hash password when user data is updated
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "user"
  }
);

module.exports = User;