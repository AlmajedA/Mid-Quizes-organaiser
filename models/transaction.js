const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Transaction = sequelize.define('Transaction', {
	contract_address: {
		type: DataTypes.STRING,
	  },
	item_status: {
		type: DataTypes.STRING,
	  },
	is_complete: {
		type: DataTypes.BOOLEAN,
	  },
})

module.exports = Transaction;