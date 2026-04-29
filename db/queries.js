const pool = require("./pool");

// gets all messages from the messages table in the database and returns the rows array
async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

// adds new message to database
async function addNewMessage({username, text, date_added}) {
    await pool.query("INSERT INTO messages(username, text, date_added) VALUES($1, $2, $3)", [username, text, date_added]);

    return console.log("Added message to database successful");
}

// searches through database and removes the message
async function removeMessage({username, text, date_added}) {
    await pool.query("DELETE FROM messages WHERE username = $1 AND text = $2 AND date_added = $3", [username, text, date_added]);

    return console.log("Message deleted from database successful");
}

module.exports = { getAllMessages, addNewMessage, removeMessage };
