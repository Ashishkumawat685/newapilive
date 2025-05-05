// api/index.js
const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API on Vercel!" });
});

module.exports.handler = serverless(app);
