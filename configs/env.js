const { config } = require("dotenv");
config()

const env = {
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
};


module.exports = env