const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("CI/CD Pipeline Working!");
});

app.listen(5000, () => {
  console.log("Se0000rver ru2nning on port 5000000000");
});