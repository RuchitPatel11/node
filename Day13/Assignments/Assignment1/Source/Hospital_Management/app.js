const express = require("express");
const app1 = express();
app1.disable("x-powered-by");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Hospital")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could'd not connect", err));

app1.use(express.json());

app1.use((req, res, next) => {
  res.status(404).send("Route Not Found");
});

app1.listen(3002, () => {
  console.log("Server is running on port 3002...");
});
