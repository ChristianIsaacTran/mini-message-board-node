const {Pool} = require("pg");

const postGreConString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// export a new pool object to use to query DB
module.exports = new Pool({
    // connection options
    connectionString: postGreConString,
});