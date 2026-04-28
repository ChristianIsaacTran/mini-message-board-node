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

const postGreConString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

async function main() {
  console.log("seeding messages table...");

  const clientCon = new Client({
    connectionString: postGreConString,
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