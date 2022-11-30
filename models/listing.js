const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Listing = sequelize.define('Listing', {
	title: {
		type: DataTypes.STRING,
	  },
	description: {
		type: DataTypes.TEXT
	}
})

module.exports = Listing;