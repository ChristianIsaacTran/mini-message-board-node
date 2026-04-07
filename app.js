const express = require("express");
const path = require("node:path");
const {indexRouter} = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

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

app.use("/", indexRouter);

app.use("/new", newMessageRouter);

const port = 3000;

app.listen(port, (err) => {
    if(err) {
        console.log("err");
    }

    console.log(`Server is running. Listening on port: ${port}`);
});


