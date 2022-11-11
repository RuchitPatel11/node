require("dotenv").config();
const express = require("express");
const app1 = express();
app1.disable("x-powered-by");
const User = require("./Models/users");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/FolderStructer")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could'd not connect", err));

const jwt = require("jsonwebtoken");
const studentroute = require("./routes/students/student");
const employeeroute = require("./routes/employees/employee");

app1.use(express.json());

app1.post("/login", async (req, res) => {
  let { username, password } = req.body;
  let user = await User.findOne({ username: username });

  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(404).send("Invalid Username or Password");

  let accessToken = jwt.sign(
    { username: user.username, role: user.role },
    process.env.secret_key
  );

  res.status(200).send({ username, token: accessToken });
});

app1.post("/register", async (req, res) => {
  let user = await User.findOne({
    username: req.body.username,
  });
  if (user) return res.status(403).send("User Already Exists!!");

  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  newUser.save(function (err) {
    if (err) return console.log(err);
    res.status(200).send(newUser);
  });
});
const auth = require("./routes/authentication/auth");
app1.use(auth);
app1.use("/student", studentroute);
app1.use("/employee", employeeroute);

app1.use((req, res, next) => {
  res.status(404).send("Route Not Found");
});

app1.listen(3002, () => {
  console.log("Server is running on port 3002...");
});
