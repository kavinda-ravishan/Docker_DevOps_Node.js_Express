const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Web Server</h1>");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
