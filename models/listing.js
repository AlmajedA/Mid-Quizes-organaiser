const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Listing = sequelize.define('Listing', {
	title: {
		type: DataTypes.STRING,
	  },
	description: {
		type: DataTypes.TEXT
	},
	author_id: {
		type: DataTypes.INTEGER
	},
	price: {
		type: DataTypes.INTEGER
	},
	status: {
		type: DataTypes.STRING
	},
	deposit: {
		type: DataTypes.INTEGER
	}
})

module.exports = Listing;