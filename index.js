const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://admin:3883@192.168.0.2:27017/?authSource=admin")
  .then(() => {
    console.log("Succesfully connected to the DB");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/", (req, res) => {
  res.send("<h1>Web Server!</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
