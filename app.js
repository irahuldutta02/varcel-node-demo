const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

app.get("/about", (req, res) => {
  return res.json({
    name: "John Doe",
    age: 25,
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
