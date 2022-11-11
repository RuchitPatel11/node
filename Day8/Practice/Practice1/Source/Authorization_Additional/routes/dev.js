const db = require("../db");

const router = require("express").Router();

router.use((req, res, next) => {
  if (req.user.role === "dev" || req.user.role === "admin") {
    next();
  } else {
    res.send("You can't do this!");
  }
});

router.get("/list", (req, res) => {
  res.send(db);
});

router.post("/add", (req, res) => {
  db.push(req.body);
});

module.exports = router;
