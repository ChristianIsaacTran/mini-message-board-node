const {Router} = require("express");

const messageDetailsRouter = Router();

messageDetailsRouter.get("/", (req,res) => {
    // render message details
    // use path and or query params to abstract the data to this message details page. page should render depending on the message req sent.
    
    const user = req.query.user;
    const text = req.query.text;
    const added = req.query.added;

    res.render("./messageDetails/messageDetails", {user: user, text: text, added: added});
});


module.exports = messageDetailsRouter;