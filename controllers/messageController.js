const db = require("../db/queries");

const {body, validationResult, matchedData} = require("express-validator");

// /index route, display all messages found in the database
exports.renderAllMessages = async (req, res) => {
  const messages = await db.getAllMessages();

  res.render("../views/index/index", {
    messages: messages,
    title: "Mini Message Board",
  });
};

// /details route, display full message from query params
exports.renderMessageDetails = (req, res) => {
  const user = req.query.user;
  const text = req.query.text;
  const added = req.query.added;

  res.render("./messageDetails/messageDetails", {
    user: user,
    text: text,
    added: added,
  });
};

// /new route, display new message form to user
exports.renderNewMessageForm = (req, res) => {
  console.log("Now on new message router");
  res.render("./newMessage/form", {errorDetected: false});
};



// validation body (fields) check
const authorEmptyErrMsg = "User field must not be empty.";
const authorLengthErrMsg = "User field must be 50 characters or less";

const messageEmptyErrMsg = "Message field must not be empty.";
const messageLengthErrMsg = "Message field must be 255 characters or less";

const validationChain = [
    body("author").notEmpty().withMessage(authorEmptyErrMsg).trim().isLength({max: 50}).withMessage(authorLengthErrMsg),
    body("message").notEmpty().withMessage(messageEmptyErrMsg).trim().isLength({max: 255}).withMessage(messageLengthErrMsg),
];

// /new route, post the new message form results to the database and redirec user to root to see
exports.postMessageForm = [ validationChain, async (req, res) => {

    // add form submission to database
    // messages.push(
    //     {
    //         text: req.body.message, user: req.body.author, added: new Date(),
    //     }
    // );

    /*
    check field validation, abort render POST and status 400 if 
    validation fails.
    */
    const result = validationResult(req);

    if(!result.isEmpty()) {
        console.log("Validation error detected. Rendering error message.")
        return res.status(400).render("./newMessage/form", {errorDetected: true, errorsArr: result.array()}); 
    }

    // if validation passes, get field data WITH sanitization
    const {author, message} = matchedData(req);

    // add form submission to the postgreSQL database
    const formInfo = {
        username: author,
        text: message,
        date_added: new Date().toLocaleString(),
    };

    await db.addNewMessage(formInfo);

    // send users back to the index route
    res.redirect("/");

}];
