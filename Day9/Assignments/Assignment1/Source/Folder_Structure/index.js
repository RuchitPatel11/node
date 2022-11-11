require("dotenv").config();
const express = require("express");
const app1 = express();
app1.disable("x-powered-by");
const usersDB = require("./DB/userdb");

const jwt = require("jsonwebtoken");
const studentroute = require("./routes/students/student");
const employeeroute = require("./routes/employees/employee");

app1.use(express.json());

app1.post("/login", (req, res) => {
  let { username, password } = req.body;

  let user = usersDB.find(
    (item) => item.username == username && item.password == password
  );
  if (user) {
    let accessToken = jwt.sign(user._id, process.env.secret_key);
    res.status(200).send({ user, token: accessToken });
  } else {
    res.status(404).send("Invalid Username or Password");
  }
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
