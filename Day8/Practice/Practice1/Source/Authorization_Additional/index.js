require("dotenv").config();
const express = require("express");
const app1 = express();
app1.disable("x-powered-by");
const db = require("./db");
const jwt = require("jsonwebtoken");
const adminroute = require("./routes/admin");
const devroute = require("./routes/dev");
app1.use(express.json());

app1.post("/login", (req, res) => {
  let { uname, pass } = req.body;
  let user = db.find((item) => item.username == uname && item.password == pass);

  if (user) {
    let accessToken = jwt.sign(user, process.env.secret_key);
    res.status(200).send({ user: { user }, token: accessToken });
  } else {
    res.status(404).send("Invalid Username or Password");
  }
});

app1.use((req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, process.env.secret_key, (err, user) => {
      if (err) {
        res.status(404).send("Token is invalid");
      } else {
        console.log(user);
        req.user = user;
        next();
      }
    });
  } else {
    res.status(404).send("You are not authenticated");
  }
});

app1.use("/admin", adminroute);
app1.use("/dev", devroute);

app1.listen(3002, () => {
  console.log("Server is running on port 3002...");
});
