const { Pool } = require("pg");

const postGreConStringDev = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const postGrenConStringProd = process.env.DATABASE_URL;

//   check if .env CODE_MODE is in production (prod), or development (dev). Set connection URL based on current mode.
let currentConString;
if (process.env.CODE_MODE === "PROD") {
  currentConString = postGreConStringProd;
} else if (process.env.CODE_MODE === "DEV") {
  currentConString = postGreConStringDev;
} else {
  console.log("CODE_MODE environment var not found.");
}

console.log(currentConString);

// export a new pool object to use to query DB
module.exports = new Pool({
  // connection options
  connectionString: currentConString,
});
