const db = require("../db");

const router = require("express").Router();

router.use((req, res, next) => {
  if (req.user.role === "admin") {
    next();
  } else {
    res.status(404).send("You are not an admin!");
  }
});

router.get("/list", (req, res) => {
  res.send(db);
});

module.exports = router;
