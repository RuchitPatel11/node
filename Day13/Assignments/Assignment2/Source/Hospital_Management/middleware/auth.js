const jwt = require("jsonwebtoken");
const { User } = require("../Models/user");

module.exports = (req, res, next) => {
  let token = req.headers["authorization"];
  jwt.verify(token, process.env.secret_key, async (err, payload) => {
    if (err) return res.status(404).send("Invalid token");

    const user = await User.findOne({ username: payload.username });
    if (!user) return res.status(404).send("User does not exist");

    req.user = {
      _id: user._id,
      username: user.username,
      role: user.role,
    };
    next();
  });
};
