const express = require("express");
const path = require("path");

const app = express();

// servir archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// cuando alguien entra a /
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// fallback para rutas
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;