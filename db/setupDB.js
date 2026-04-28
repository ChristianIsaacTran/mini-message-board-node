#! /usr/bin/env node

// note: #! marks this as a shebang script and the path is to tell it what interpreter to run for this script// note: #! marks this as a shebang script and the path is to tell it what interpreter to run for this script

// initial database and table setup script

// note: table should be named "messages". Initial populated data is optional.

const { Client } = require("pg");

// sql query to create table and populate it with 3 entries of data
const SQLQuery = `
    CREATE TABLE IF NOT EXISTS messages(
        username VARCHAR(50), 
        text VARCHAR(255), 
        date_added timestamp
    );

    INSERT INTO messages(username, text, date_added) VALUES 
    (
        'Martin', 
        'THE UNIVERSE!',
        '${new Date().toLocaleString()}'
    ),
    (
        'Luke', 
        'YOU BLEW IT!', 
        '${new Date().toLocaleString()}'
    ),
    (
        'Will', 
        'THAT''S CRAZY!', 
        '${new Date().toLocaleString()}'
    );
`;

const postGreConStringDev = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const postGrenConStringProd = process.env.DATABASE_URL;

async function main() {
  console.log("seeding messages table...");

  //   check if .env CODE_MODE is in production (prod), or development (dev). Set connection URL based on current mode.
  let currentConString;
  if (process.env.CODE_MODE === "PROD") {
    currentConString = postGreConStringProd;
  } else if (process.env.CODE_MODE === "DEV") {
    currentConString = postGreConStringDev;
  } else {
    console.log("CODE_MODE environment var not found.")
  }

  console.log(currentConString);

  const clientCon = new Client({
    connectionString: currentConString,
  });

  await clientCon.connect();
  await clientCon.query(SQLQuery);
  await clientCon.end();

  console.log("database done");
}

main();

/*
note: all SQL services, including postgreSQL may have a specific "date time" data type for the column. In this case, the 
postgreSQL data type for "date time" was called "timestamp" to get both the date and the time on initial script launch.
*/
