require("dotenv").config();

module.exports = {
	PORT: process.env.PORT || 8080,
	CLIENT_ID: process.env.CLIENT_ID,
	SECREC: process.env.JWT_SECREC,
	CONNECTION_STRING: process.env.MONGGODB_URL,
};