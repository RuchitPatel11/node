require("dotenv").config();
const express = require("express");
const app1 = express();
app1.disable("x-powered-by");

const jwt = require("jsonwebtoken");
const studentroute = require("./routes/student");

app1.use(express.json());

app1.post("/login", (req, res) => {
  console.log("in login");
  let { uname, pass } = req.body;
  if (uname === "student1" && pass === "student1") {
    let accessToken = jwt.sign(uname, process.env.secret_key);
    res.status(200).send({ username: uname, token: accessToken });
  } else {
    res.status(404).send("Invalid Username or Password");
  }
});

app1.use("/student", studentroute);

app1.use((req, res, next) => {
  res.status(404).send("Route Not Found");
});

app1.listen(3002, () => {
  console.log("Server is running on port 3002...");
});
