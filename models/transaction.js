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
	seller_id: {
		type: DataTypes.INTEGER,
	},
	buyer_id: {
		type: DataTypes.INTEGER
	}
	
})

module.exports = Transaction;