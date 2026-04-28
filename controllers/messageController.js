const db = require("../db/queries");

// /index route, display all messages found in the database
exports.renderAllMessages = async (req, res) => {
    const messages = await db.getAllMessages();

    res.render("../views/index/index", {messages: messages, title: "Mini Message Board"});
};

// /details route, display full message from query params
exports.renderMessageDetails = async (req, res) => {

};

// /new route, display new message form to user
exports.renderNewMessageForm = (req, res) => {

};

// /new route, post the new message form results to the database and redirec user to root to see
exports.postMessageForm = async (req,res) => {

};