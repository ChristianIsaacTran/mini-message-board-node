const {Router} = require("express");

const newMessageRouter = Router();

const messageController = require("../controllers/messageController");

newMessageRouter.get("/", messageController.renderNewMessageForm);

newMessageRouter.post("/", messageController.postMessageForm);


module.exports = newMessageRouter;