const { Router } = require("express");

/*
messages array contains messages objects that have:
- text: The text inside the message being sent 
- user: The author of the message
- added: The date the message was added, calculated with new Date()


UPDATE: 
- re-implement this, but as an SQL database with railway hosting service and postgreSQL
*/

const messages = [
  { text: "THE UNIVERSE!", user: "Martin", added: new Date() },
  { text: "YOU BLEW IT!", user: "Luke", added: new Date() },
  { text: "THAT'S CRAZY!", user: "WILL", added: new Date() },
  
];

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log("Now on index router");
  res.render("index", {messages: messages, title: "Mini Message Board"})
});

module.exports = {indexRouter, messages};
