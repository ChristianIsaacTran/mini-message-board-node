const {Router} = require("express");

const messageController = require("../controllers/messageController");

const messageDetailsRouter = Router();

messageDetailsRouter.get("/", messageController.renderMessageDetails);


module.exports = messageDetailsRouter;