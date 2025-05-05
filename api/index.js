// api/index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API on Vercel!" });
});

const serverless = require("serverless-http");
module.exports.handler = serverless(app);
