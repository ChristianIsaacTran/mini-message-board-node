const pool = require("./pool");

// gets all messages from the messages table in the database and returns the rows array
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

module.exports = { getAllMessages };
