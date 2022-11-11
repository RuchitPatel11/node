const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let token = req.headers["authorization"];
  jwt.verify(token, process.env.secret_key, (err, user) => {
    if (err) {
      res.status(404).send("Token is invalid");
    } else {
      req.user = user;
      next();
    }
  });
};
