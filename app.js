const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const fDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
  response.send(date);
});

module.exports = app;
