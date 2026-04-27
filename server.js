const express = require("express");
const path = require("path");

const app = express();

// servir frontend
app.use(express.static(path.join(__dirname, "public")));

// fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;