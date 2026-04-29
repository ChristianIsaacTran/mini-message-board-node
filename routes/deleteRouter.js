const {Router} = require("express");

const messageController = require("../controllers/messageController");

const deleteRouter = Router();

deleteRouter.get("/", messageController.getDelete);


module.exports = deleteRouter;