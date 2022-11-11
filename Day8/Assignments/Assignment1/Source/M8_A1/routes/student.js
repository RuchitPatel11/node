const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
  let token = req.headers["authorization"];
  jwt.verify(token, process.env.secret_key, (err, user) => {
    if (err) {
      res.status(404).send("Token is invalid");
    } else {
      console.log(user);
      req.user = user;
      next();
    }
  });
});

router.get("/Fees", (req, res) => {
  res.send("Fees Paid");
});

router.get("/Result", (req, res) => {
  res.send("Pass");
});

module.exports = router;
