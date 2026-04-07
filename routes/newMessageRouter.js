const {Router} = require("express");

const {messages} = require("./indexRouter");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    console.log("Now on new message router");
    res.render("./newMessage/form", {});
});

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