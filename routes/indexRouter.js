const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  console.log("Now on index router");
  res.send("Index Router");
});

module.exports = indexRouter;
