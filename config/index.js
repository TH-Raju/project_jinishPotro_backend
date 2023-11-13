const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

const data = {
  db_url: process.env.db_url,
  PORT: process.env.port,
  access_secret: process.env.access_secret,
  refresh_secret: process.env.refresh_secret,
};

module.exports = data;
