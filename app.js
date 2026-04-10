const express = require("express");
const path = require("node:path");
const {indexRouter} = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageDetailsRouter = require("./routes/messageDetails");


const app = express();

/*
parses form data through .urlencoded() and makes 
it available to the req.body object in a .post() request
handler
*/
app.use(express.urlencoded({extended: true}));


// set view engine and external resource path
const viewsPath = path.join(__dirname, "views");
app.set("view engine", "ejs");
app.set("views", viewsPath);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// router path assignment
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/details", messageDetailsRouter);


// added .env check for variable or default port 3000

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) {
        console.log("err");
    }

    console.log(`Server is running.);
});


