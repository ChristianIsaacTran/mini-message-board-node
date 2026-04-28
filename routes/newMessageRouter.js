const {Router} = require("express");

const newMessageRouter = Router();

const messageController = require("../controllers/messageController");

newMessageRouter.get("/", messageController.renderNewMessageForm);

newMessageRouter.post("/", (req, res) => {
    messages.push(
        {
            text: req.body.message, user: req.body.author, added: new Date(),
        }
    );

    // send users back to the index route
    res.redirect("/");
});


module.exports = newMessageRouter;