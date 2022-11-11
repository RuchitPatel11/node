const router = require("express").Router();
const { User, validateLogin, validateRegister } = require("../Models/user");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
router.post("/register", async (req, res, next) => {
  const { error, value } = validateRegister(req.body);

  if (error) return res.status(404).send(error);
  let user = await User.findOne({
    username: value.username,
  });
  if (user) return res.status(403).send("User Already Exists!!");

  const newUser = new User({
    username: value.username,
    password: value.password,
    role: value.role,
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  newUser.save(function (err) {
    if (err) return res.status(404).send(err);
    res.status(200).send(newUser);
  });
});

router.post("/login", async (req, res, next) => {
  const { error, value } = validateLogin(req.body);

  if (error) return res.status(404).send(error);
  let user = await User.findOne({ username: value.username });

  if (!user || !(await bcrypt.compare(value.password, user.password)))
    return res.status(404).send("Invalid Username or Password");

  let accessToken = jwt.sign(
    { username: user.username, role: user.role },
    process.env.secret_key
  );

  res.status(200).send({ username: user.username, token: accessToken });
});

module.exports = router;
