const express = require("express");

// create a server
const app = express();

// Initializing Routes
var usersRouter = require("./routes/user");
app.use("/user", usersRouter);

app.listen("3000", () => {
  console.log("Server running on port 3000 😃");
});
module.exports = app;
