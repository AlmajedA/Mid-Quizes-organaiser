const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

// const User = sequelize.define("User", {
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   username: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
//   token: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//   },
// });

const User = sequelize.define('User', {
	username: {
	  type: DataTypes.STRING,
	},
	full_name: {
	  type: DataTypes.STRING,
	},
	phone_number: {
	  type: DataTypes.STRING,
	},
	address: {
	  type: DataTypes.STRING,
	}
  });

module.exports = User;